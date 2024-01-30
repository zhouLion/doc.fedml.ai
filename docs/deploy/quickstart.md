---
sidebar_position: 2
---

# Quickstart
### Prerequisites
Install fedml library on your machine
```bash
pip install fedml
```
### Create a model from Hugging Face
Use `fedml model create` command to create a model. For options, use `-n` to indicate the model card name, 
then use `-m` to indicate a pre-built model.  

In this quick start example, we will try
to deploy an `EleutherAI/pythia-70m` model from Hugging Face. To use a hugging face model, you will need to
use `hf:` as the prefix of the model name. So the full model name is `hf:EleutherAI/pythia-70m`.

```bash
fedml model create -n hf_model -m hf:EleutherAI/pythia-70m
```
### Deploy the model to the local machine
Use `fedml model deploy` command to deploy the model. Use `-n` to indicate the model card name.
To deploy to the local machine, use `--local` option.
```bash
fedml model deploy -n hf_model --local
```
:::info

Above command will:  
1. Automatically download and install the dependencies for inference.  
2. Download the model weights from Hugging Face.
3. Start the model inference server and listen to localhost:2345/predict for requests.

```
Executing bootstrap script ...
Bootstrap start...
+ pip install langchain
...

Bootstrap finished
Bootstrap script is executed successfully!

INFO:     Started server process [29013]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
INFO:     Uvicorn running on http://0.0.0.0:2345 (Press CTRL+C to quit)
```
:::

Use a `curl` command to test the inference server.
```bash
curl -XPOST localhost:2345/predict -d '{"text": "Hello"}'
```


:::info
You should see the output from the terminal with the response of that model.
```
"{'generated_text': '...'}"
```
:::

### Deploy the model to Serverless GPU cloud
:::note
Before you start, you will need to create an account on [FedML Nexus AI Cloud](https://fedml.ai/home).
After you create an account, you will see an Account Key (API Key) from the profile page.
![getApiKey.jpg](pics%2FgetApiKey.jpg)

Next you need to bind your credit card to your account. This is required to use the GPU cloud.
![payment.jpg](pics%2Fpayment.jpg)
:::

Use `fedml login $api_key` to login to Nexus AI Cloud. Replace `$api_key` with your own API key.
```bash
fedml login $api_key
```
Use `fedml model deploy` command to deploy the model. Use `-n` to indicate the model card name.
```bash
fedml model deploy -n hf_model
```