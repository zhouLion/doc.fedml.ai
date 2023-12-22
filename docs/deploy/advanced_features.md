---
sidebar_position: 11
---

# Advanced Features
## Geo-distributed Model Deployment
Without building and configuring a complex Kubernetes Cluster. FedML®Deploy can deploy models to nodes located
at multiple regions and manage the traffic routing automatically. 

![GeoDistributed.jpg](pics/GeoDistributed.jpg)

## Heterogeneity Model Deployment
FedML®Deploy can deploy models to different types of devices, such as CPU, GPU, TPU, etc. Whether it is a single
Macbook or a power A100, they can be connected together in an easy manner.


![Heterogeneity.jpg](pics/Heterogeneity.jpg)

## Autoscaling and Fail-over
FedML®Deploy can automatically scale up and down the number of replicas of the model deployment based on the QPS,
CPU, GPU, and memory usage. It can also automatically recover from failures through backup nodes.

If you want to scale out to more gpu nodes. Go to deploy -> Endpoint, click `Edit` button. 
![EditEndpoint.png](pics%2FEditEndpoint.png)

Select / Unselect the devices that you want to make changes to. Then click `Submit` button.
![ScaleButton.png](pics%2FScaleButton.png)

## Multiple Return Type Support
### Streaming Response
The following code example can be found at:  
`https://github.com/FedML-AI/FedML/tree/master/python/examples/deploy/streaming_response`  

```python
def predict(self, *args, **kwargs):
        return {"my_output": "example output"}

async def async_predict(self, *args):
    return StreamingResponse(self._async_predict(*args))

async def _async_predict(self, *args) -> AsyncGenerator[str, None]:
    # This function can also return fastapi.responses.StreamingResponse directly
    input_json = args[0]
    question = input_json.get("text", "[Empty question]")
    for i in range(5):
        yield f"Answer for {question} is: {i + 1}\n\n"
        await asyncio.sleep(1.0)
```

In this example, we have a predictor that print a number every 1 second. The core part is that, apart from the original
`predict` method, which return json obj as usual. If the user put `"stream: true"` in their request body.   
e.g. `curl -XPOST xxx -d '{"text": "my input ...", "stream": true}'`, then fedml will automatically call the
`async_predict`. So, to implement this, you will need to override this class method. The code above is an example 
returning a StreamingResponse, which take a AsyncGenerator as an input.

### File Response
The following code example can be found at:  
https://github.com/FedML-AI/FedML/blob/master/python/examples/deploy/stable_diffusion/src/inference_entry.py#L101

```python
def predict(self, request: dict, header=None):
    args = self.args
    input_dict = request
    prompt: str = input_dict.get("text", "").strip()

    self.args.prompt = [prompt]
    
    images, paths, pipeline_time = self.run_sd_xl_inference(warmup=False, verbose=args.verbose)
    
    if len(prompt) == 0:
        response_text = "<received empty input; no response generated.>"
    else:
        if header == "image/png":
            return str(paths[0])
        else:
            with open(paths[0], "rb") as image_file:
                encoded_string = base64.b64encode(image_file.read()).decode("utf-8")
                return encoded_string
```
In this example, we have a predictor that generate a file to a local directory `paths[0]`, here we have two ways to
return it to the requester. The first way is that, if the header of the request, if there exist `Accept: image/png`, 
then FedML framework will parse the string that predictor's return, take it as a local file path, and use 
`fastapi.responses.FileResponse` to transfer this file to binary string and return it. The second way is that, if 
requester do not include `Accept: image/png` in their header. Then FedML framework will treat the return obj from the 
predictor as a string, not file path. So in the user-level code, developer will need to transfer the file to base64 
string and return.

## Customized Image Support

The following code example can be found at:  
https://github.com/FedML-AI/FedML/blob/master/devops/dockerfile/fedml-inference/default/Dockerfile

```dockerfile
ARG BASE_IMAGE=fedml/fedml:latest-torch1.13.1-cuda11.6-cudnn8-devel
FROM ${BASE_IMAGE}

## Only Modify if you want to use a different version of FedML
RUN mkdir -p /fedml-pip
ADD ./python ./fedml-pip
WORKDIR ./fedml-pip
RUN pip3 install -e ./

# 1. Specify Bootrap path (If any)
ENV BOOTSTRAP_DIR=""
    
# 2. MOUNT User's Local Folder (If any)
ENV DATA_CACHE_FOLDER=""
VOLUME [ DATA_CACHE_FOLDER ]

# 3. MOUNT Model Serving Folder
VOLUME [ "/home/fedml/models_serving" ]

# 4. Enter the entrypoint
WORKDIR /home/fedml/models_serving
ENV MAIN_ENTRY=""
# if bootstrap dir is not empty, then run the bootstrap script
CMD /bin/bash ${BOOTSTRAP_DIR}; python3 ${MAIN_ENTRY}
```

Above is the dockerfile example that we usually use to build a serviceable docker image. You can imitate this.  
To use a customized docker, let say you have a workspace folder like:
```
- build.yaml
- src
    - setup
        - bootstrap.sh
    - main_entry.py
```

And inside your build.yaml, you have:
```yaml
workspace: "./src"
```

During the deployment stage, the `src` folder will be **automatically** mount by FedML framework to 
`/home/fedml/models_serving/`.

So, every code you have in your workspace, will be under `/home/fedml/models_serving/` inside the docker.

Say you want to indicate an entry command for docker container, which, for example, enter your main entry.

You may indicate `entry_cmd` in the `build.yaml`:
```yaml
entry_cmd: "/bin/bash python3 /home/fedml/models_serving/main_entry.py"
```

Also, the value (string) for the key `bootstrap` 
```yaml
bootstrap: |
  echo "Bootstrap start..."
  sh /home/fedml/models_serving/setup/bootstrap.sh
  echo "Bootstrap finished"
```

will be transfer to file and mount to
`/home/fedml/models_serving/fedml-deploy-bootstrap-auto-gen.sh` inside container.
```shell
echo "Bootstrap start..."
sh /home/fedml/models_serving/setup/bootstrap.sh
echo "Bootstrap finished"
```

So, if you want to execute the bootstrap inside docker, in your build.yaml, write:
```yaml
entry_cmd: "/bin/bash /home/fedml/models_serving/fedml-deploy-bootstrap-auto-gen.sh"
```



