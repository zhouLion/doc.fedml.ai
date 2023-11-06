---
sidebar_position: 7
---
# Deploy to On-Premise

If you have your own on-premise servers, you can deploy the model cards to your own servers.

### Bind your devices to Nexus AI Platform
Bind your device to Nexus AI Platform.
```
fedml device bind $api_key
```
Check your device id on Nexus AI Platform (In our example is 32314).  
![OnPremDevices.jpg](pics%2FgetDeviceId.jpg)

For single machine deploy, use same device id: 32314 for master and worker.
```
fedml model deploy -n my_model -m 32314 -w 32314
```
You can then check the status of the deployment on Nexus AI Platform.
![EndpointDeployed.jpg](pics/EndpointDeployed.jpg)

The System Performance (QPS, Latency, etc.) can be monitored on Nexus AI Platform.
![SystemPerformance.jpg](pics/SystemMonitor.jpg)