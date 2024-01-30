---
sidebar_position: 8
---

# Low Code Web UI

Low Code Web UI is a web-based user interface that allows users to manage the model cards,
deploy models to GPU Cloud and on-premise devices, as well as monitor the endpoint status.

## Register an Nexus AI Platform Account
Before you start, you will need to create an account on [FedML Nexus AI Cloud](https://fedml.ai/home).
After you create an account, you will see an Account Key (API Key) from the profile page.
![getApiKey.jpg](pics%2FgetApiKey.jpg)

## Login to Nexus AI Platform
To login to Nexus AI Platform, you need to use `fedml login $api_key` command. Replace `$api_key` with your own API key.
```bash
fedml login $api_key
```

## Create a Model Card Locally
Use `fedml model create` command to create a model card locally. In this example, we will create a model card for
[EleutherAI/pythia-70m](https://huggingface.co/EleutherAI/pythia-70m).
```bash
fedml model create -n hf_pythia_70m -m hf:EleutherAI/pythia-70m
```

## Push and Check the Model Card on Nexus AI Platform
Use `fedml model push` command to push a local model card to Nexus AI Platform.
```bash
fedml model push -n hf_pythia_70m
```

After that, you can check the model card uploaded to Nexus AI Platform.
![modelCardsUI.jpg](pics%2FmodelCardsUI.jpg)

## Deploy to GPU Cloud using UI
You can deploy the model card to GPU Cloud using the "Deploy" button on the UI.  

![modelCardsDeployButton.jpg](pics%2FmodelCardsDeployButton.jpg)  

After you click the button, you will be redirected to the deployment page.
To deploy the model card to GPU Cloud, you need to first give a name to the endpoint. Then in the 
"Computing Source" section, select "FedML Cloud". 
After that, you can click the "Deploy" button to deploy the model card.  

![CreateEndpointGPUCloud.jpg](pics%2FCreateEndpointGPUCloud.jpg)

## Deploy to on-premise devices using UI
We will use the same model card called hf_pythia_70m that has been pushed to Nexus AI Platform in the previous section.


### Bind your devices to Nexus AI Platform
Before on-premise deploy, you need to bind your device to Nexus AI Platform.
```
fedml device bind $api_key
```
Check your device id on Nexus AI Platform (In our example is 32314).  
![OnPremDevices.jpg](pics%2FgetDeviceId.jpg)


![modelCardsDeployButton.jpg](pics%2FmodelCardsDeployButton.jpg)  

After you click the button, you will be redirected to the deployment page.
To deploy the model card to GPU Cloud, you need to first give a name to the endpoint. Then in the 
"Computing Source" section, select "On-Premise". Then select the device id for master and worker.
After that, you can click the "Deploy" button to deploy the model card.  

![onPremiseDeployUI.jpg](pics%2FonPremiseDeployUI.jpg)