---
sidebar_position: 2
---

# Zero-code Serverless LLM Training on FEDML Nexus AI
LLM Fine-tune is the feature of FEDML Studio that is responsible for serverless model training. It is a no-code LLM training platform. Developers can directly specify open-source models for fine-tuning or model Pre-training.
#### Step 1. Select a model to build a new run
There are two choices for specifying the model to train:

1 Select Default base model from Open Source LLMs

![Select a Base Model](static/image/select_base_model.png)

2 Specifying HuggingFace LLM model path

![Select a Model Path](static/image/select_model_path.png)

#### Step 2. Prepare training data

There are three ways to prepare the training data. 
Select the default data experience platform
![Select Data](static/image/select_data.png)
Customized training data can be uploaded through the storage module
![Customize Training Data](static/image/training_data.png)
Data upload API: fedml.api.storage
```
fedml storage upload '/path/Prompts_for_Voice_cloning_and_TTS'
Uploading Package to Remote Storage: 100%|██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 42.0M/42.0M [00:36<00:00, 1.15MB/s]
Data uploaded successfully. | url: (https://03aa47c68e20656e11ca9e0765c6bc1f.r2.cloudflarestorage.com/fedml/3631/Prompts_for_Voice_cloning_and_TTS.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=52d6cf37c034a6f4ae68d577a6c0cd61%2F20240307%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240307T202738Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=bccabd11df98004490672222390b2793327f733813ac2d4fac4d263d50516947)
```

#### Step 3. Hyperparameter Setting (Optional)
![Hyperparameter Setting](static/image/hyperparameter_setting.png)

#### Step 4. Select GPU Resource Type (Optional)
The GPU resource type can be found through the Compute - Secure Cloud page
![Hyperparameter Setting](static/image/gpu_resource.png)

#### Step 5. Initiate Training and Track Experimental Results
