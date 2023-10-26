---
sidebar_position: 7
---

# Customize Trainer and Aggregator
At this point, you may be curious about what kind of API design can withstand the open platforms, the app ecosystem, and support so many AI applications. FedML has done a lot of explorations in this direction, and here is an introduction to several key designs for the open source community.

First, from the application point of view, FedML does its best to shield all code details and complex configurations of distributed training. Data scientists and engineers at the application level, such as computer vision, natural language processing, and data mining, only need to write the model, data, and trainer in the same way as a stand-alone program and then pass it to the FedMLRunner object to complete all the processes. This greatly reduces the bar for application developers to perform federated learning.

```python
import fedml
from my_model_trainer import MyModelTrainer
from my_server_aggregator import MyServerAggregator
from fedml import FedMLRunner
if __name__ == "__main__":
   # init FedML framework
   args = fedml.init()
   # init device
   device = fedml.device.get_device(args)
   # load data
   dataset, output_dim = fedml.data.load(args)
   # load model
   model = fedml.model.create(args, output_dim)
   # my customized trainer and aggregator
   trainer = MyModelTrainer(model, args)
   aggregator = MyServerAggregator(model, args)
   # start training
   fedml_runner = FedMLRunner(args, device, dataset, model, trainer, aggregator)
   fedml_runner.run()
```

Secondly, the FedML team believes that the design of the API should conform to the current technology development trend and should not assume that today’s technology is the final solution; rather, it should be iterated as it progresses. We can see that the algorithm innovation of the open source community is still very active, and many more user-valued algorithms continue to be innovated every month. It is based on this background that FedML considers making custom APIs flexible enough to empower algorithm innovation. To this end, FedML abstracts the core trainer and aggregator and provides users with two abstract objects, `FedML.core.ClientTrainer` and `FedML.core.ServerAggregator`, which only need to inherit the interfaces of these two abstract objects and pass them to FedMLRunner. Such customization provides machine learning developers with maximum flexibility. Users can define arbitrary model structures, optimizers, loss functions, etc. These customizations can also be seamlessly connected with the open source community, open platform, and application ecology mentioned above with the help of FedMLRunner, which completely solves the long lag problem from innovative algorithms to commercialization.