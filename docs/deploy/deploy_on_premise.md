---
sidebar_position: 7
---
# Deploy to On-Premise Servers
### Deploy the model to On-Premise Devices
login your device to Nexus AI Platform.
```
fedml login $api_key
```
Check your device id on Nexus AI Platform (In our example is 32314).  
![OnPremDevices.jpg](pics%2FgetDeviceId.jpg)

For single machine deploy, use same device id: 32314 for master and worker.
```
fedml model deploy -n my_model -m 32314 -w 32314
```
