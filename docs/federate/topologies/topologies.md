---
sidebar_position: 8
---

import APIOverview from '../_img/quickstart/apioverview.jpg';

# Federated Topologies

Now let's run some examples to get a sense of how FedML simplifies federated learning in diverse real-world settings. -->

#### **FedML Parrot Examples**

Simulation with a Single Process (Standalone):

- [sp_fedavg_mnist_lr_example](./simulation/examples/sp_fedavg_mnist_lr_example.md):
  Simulating FL using a single process in your personal laptop or server. This is helpful for researchers hoping to try a quick algorithmic idea in small synthetic datasets (MNIST, shakespeare, etc.) and small models (ResNet-18, Logistic Regression, etc.).

Simulation with Message Passing Interface (MPI):

- [mpi_torch_fedavg_mnist_lr_example](./simulation/examples/mpi_torch_fedavg_mnist_lr_example.md):
  MPI-based Federated Learning for cross-GPU/CPU servers.

Simulation with NCCL-based MPI (the fastest training):

- If your cross-GPU bandwidth is high (e.g., InfiniBand, NVLink, EFA, etc.), we suggest using this NCCL-based MPI FL simulator to accelerate your development.

#### **FedML Octopus Examples**

Horizontal Federated Learning:

- [mqtt_s3_fedavg_mnist_lr_example](./cross-silo/example/mqtt_s3_fedavg_mnist_lr_example.md): an example to illustrate running horizontal federated learning in data silos (hospitals, banks, etc.)

Hierarchical Federated Learning:

- [mqtt_s3_fedavg_hierarchical_mnist_lr_example](./cross-silo/example/mqtt_s3_fedavg_hierarchical_mnist_lr_example.md): an example to illustrate running hierarchical federated learning in data silos (hospitals, banks, etc.).
  Here `hierarchical` implies that each FL Client (data silo) has multiple GPUs that can run local distributed training with PyTorch DDP, and the FL server then aggregates globally from the results received from all FL Clients.

#### **FedML Beehive Examples**

- [Federated Learning on Android Smartphones](./cross-device/tutorial.md)