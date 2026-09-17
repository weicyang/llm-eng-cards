window.CATALOG = {
  "fundamentals": [
    {
      "label": "I · 神经网络 (Neural Networks)",
      "cards": [
        {
          "code": "N01",
          "title": "机器学习基础",
          "tagline": "监督/无监督/半监督、偏差-方差权衡、正则化、交叉验证、集成学习、决策树与 SVM。",
          "href": "./cards/neural-networks/ml_fundamentals.html"
        },
        {
          "code": "N02",
          "title": "梯度、链式法则与优化器",
          "tagline": "梯度下降、链式法则、凸优化、SGD / Momentum / Adam / AdamW 优化器族、学习率调度。",
          "href": "./cards/neural-networks/gradient_chain_rule.html"
        },
        {
          "code": "N03",
          "title": "前向传播与反向传播",
          "tagline": "前向计算图、反向传播推导、计算图自动微分（Autograd）、梯度消失/爆炸、梯度裁剪。",
          "href": "./cards/neural-networks/forward_backward_propagation.html"
        },
        {
          "code": "N04",
          "title": "神经网络基础",
          "tagline": "感知机、前馈网络、激活函数（ReLU/GELU/Swish/Mish）、万能近似定理、权重初始化。",
          "href": "./cards/neural-networks/neural_network_basics.html"
        },
        {
          "code": "N05",
          "title": "CNN 卷积神经网络",
          "tagline": "卷积层、池化层、感受野、经典架构（LeNet → ResNet → EfficientNet）、深度可分离卷积。",
          "href": "./cards/neural-networks/cnn_deep_dive.html"
        },
        {
          "code": "N06",
          "title": "RNN / LSTM / GRU",
          "tagline": "循环网络原理、梯度消失/爆炸、LSTM 门控机制、GRU 简化、双向/多层 RNN、Seq2Seq。",
          "href": "./cards/neural-networks/rnn_lstm_gru_guide.html"
        },
        {
          "code": "N07",
          "title": "损失函数原理与选型",
          "tagline": "MSE / 交叉熵 / Focal Loss / Contrastive / Triplet / InfoNCE / CLIP Loss，选型与推导。",
          "href": "./cards/neural-networks/loss_functions_guide.html"
        },
        {
          "code": "N08",
          "title": "归一化与正则化",
          "tagline": "BatchNorm / LayerNorm / RMSNorm / GroupNorm、Dropout / DropPath / Weight Decay / Label Smoothing。",
          "href": "./cards/neural-networks/normalization_regularization.html"
        },
        {
          "code": "N09",
          "title": "生成模型：GAN / VAE / Diffusion",
          "tagline": "GAN 博弈、VAE 变分推断、DDPM / Stable Diffusion / Flow Matching 原理与演进。",
          "href": "./cards/neural-networks/gan_vae_diffusion.html"
        },
        {
          "code": "N10",
          "title": "图神经网络 GNN",
          "tagline": "GCN / GAT / GraphSAGE / 消息传递范式、知识图谱嵌入、应用场景。",
          "href": "./cards/neural-networks/graph_neural_networks.html"
        }
      ]
    },
    {
      "label": "II · Transformer 与注意力 (Attention)",
      "cards": [
        {
          "code": "T01",
          "title": "深度学习张量核心讲解",
          "tagline": "多维数组本质 / Shape+Stride+Storage / reshape vs transpose",
          "href": "./cards/transformer/tensor_fundamentals.html"
        },
        {
          "code": "T02",
          "title": "NLP 文本表示演进：从 One-Hot 到 Transformer",
          "tagline": "向量化 → 词嵌入 → 动态语境化，三阶段技术跃迁：计算机从\"看见\"文字到\"理解\"语言再到\"感知\"情境。",
          "href": "./cards/transformer/nlp_evolution.html"
        },
        {
          "code": "T03",
          "title": "序列建模架构演进：从 CNN 到 GPT",
          "tagline": "CNN 看图 → RNN 读句 → Transformer 画重点+一目十行 → BERT 理解 / GPT 生成，四代架构演进逻辑全解析。",
          "href": "./cards/transformer/evolution_cnn_to_gpt.html"
        },
        {
          "code": "T04",
          "title": "注意力机制",
          "tagline": "Scaled Dot-Product / Multi-Head / Cross Attention 完全推导，从 Seq2Seq Attention 到 Self-Attention；含一词多义案例、完整数值示例、O(n²) 工程影响与 Llama 2 实证。",
          "href": "./cards/transformer/attention_mechanism.html"
        },
        {
          "code": "T05",
          "title": "Transformer QKV 角色解耦",
          "tagline": "Query / Key / Value 为什么必须分开？角色解耦 → 打破对称性 → 信息提纯 → MQA/GQA 工程演进。",
          "href": "./cards/transformer/transformer_qkv.html"
        },
        {
          "code": "T06",
          "title": "Attention：从零实现缩放点积注意力",
          "tagline": "Q/K/V 一个输入的三副面孔 / QKᵀ 与 (L,L) 注意力矩阵 / 为什么要除以 √d_k / softmax 归一化与加权聚合 / shape 流转与工程要点。",
          "href": "./cards/transformer/attention_from_scratch.html"
        },
        {
          "code": "T07",
          "title": "Multi-Head Attention：从单头扩展到多头",
          "tagline": "单头的瓶颈 / 线性映射与拆头 / 各头并行 Attention / Concat 与 W_O 投影 / shape 全景与完整实现 / 多头 vs 单头效果与代价。",
          "href": "./cards/transformer/mha_from_scratch.html"
        },
        {
          "code": "T08",
          "title": "Transformer 架构全景",
          "tagline": "Self-Attention / Q·K·V机制 / 多头注意力 / 三种架构对比",
          "href": "./cards/transformer/architecture_overview.html"
        },
        {
          "code": "T09",
          "title": "Transformer Encoder-Decoder 结构与可扩展性",
          "tagline": "Encoder-Decoder 全剖析、残差连接、LayerNorm 位置、为什么 Transformer 能 Scale。",
          "href": "./cards/transformer/transformer_architecture.html"
        },
        {
          "code": "T10",
          "title": "位置编码",
          "tagline": "正弦位置编码 / 可学习位置 / RoPE / ALiBi / YaRN，长上下文扩展策略。",
          "href": "./cards/transformer/positional_encoding.html"
        },
        {
          "code": "T11",
          "title": "Transformer 升维与降维原理",
          "tagline": "降维压缩 / 升维展开 / FFN 4倍扩展的信号补偿原理 / GELU vs ReLU / KV Cache 维度权衡。",
          "href": "./cards/transformer/dimension_ops.html"
        },
        {
          "code": "T12",
          "title": "FFN：Transformer 前馈网络代码实现",
          "tagline": "小→大→小三步流程 / 为什么必须有激活函数 / 4 倍扩展之谜 / FFN 是模型的知识仓库 / ReLU vs GELU vs SwiGLU / 封装成类实现。",
          "href": "./cards/transformer/ffn_from_scratch.html"
        },
        {
          "code": "T13",
          "title": "LayerNorm 与残差连接：梯度传播与训练稳定性",
          "tagline": "残差连接与梯度高速公路 / LayerNorm 均值 0 方差 1 / Add & Norm 标准组合 / Pre-Norm vs Post-Norm 稳定性鸿沟 / NLP 为什么选 LayerNorm。",
          "href": "./cards/transformer/layernorm_residual_from_scratch.html"
        },
        {
          "code": "T14",
          "title": "Tiny Transformer：从零构建完整模型",
          "tagline": "端到端数据流 / Embedding 查表 / 正弦位置编码 / Block 内部：Attention+残差+LN+FFN / 多层堆叠与输出层权重共享 / 最小可运行 Demo。",
          "href": "./cards/transformer/tiny_transformer_build.html"
        },
        {
          "code": "T15",
          "title": "Encoder-only / Decoder-only / Encoder-Decoder 架构对比",
          "tagline": "同一个 Transformer 三种车型 / 注意力可见性：双向·causal·交叉 / 三大架构逐一拆解 / 为什么生成式大模型都选 Decoder-only。",
          "href": "./cards/transformer/architecture_variants_comparison.html"
        },
        {
          "code": "T16",
          "title": "Decoder-Only Transformer 全貌",
          "tagline": "追踪一个 Token 从输入到输出的完整旅程，逐层解剖 Decoder Block 四大组件——Attention、残差连接、FFN、LayerNorm；含 Block 结构图、常见误区与 Llama 3 405B 生产案例。",
          "href": "./cards/transformer/decoder_only_transformer.html"
        },
        {
          "code": "T17",
          "title": "Vision Transformer (ViT)",
          "tagline": "ViT / DeiT / Swin Transformer / MAE、Patch Embedding、多模态视觉编码器。",
          "href": "./cards/transformer/vision_transformer.html"
        },
        {
          "code": "T18",
          "title": "MoE 混合专家",
          "tagline": "Mixture of Experts 原理、路由策略、负载均衡、Mixtral / DeepSeek-MoE / Switch Transformer。",
          "href": "./cards/transformer/moe_architecture.html"
        },
        {
          "code": "T19",
          "title": "Softmax 梯度饱和与温度调节",
          "tagline": "概率分布尖锐化 / Temperature调节 / 知识蒸馏高温应用",
          "href": "./cards/transformer/softmax_gradient_saturation.html"
        },
        {
          "code": "T20",
          "title": "高效注意力",
          "tagline": "FlashAttention / FlashAttention-2/3 / PagedAttention / MQA / GQA / Sliding Window / Ring Attention。",
          "href": "./cards/transformer/efficient_attention.html"
        },
        {
          "code": "T21",
          "title": "Transformer 长文本优化技术",
          "tagline": "FlashAttention v1-v4 演进 · GQA/MLA 参数共享 · PagedAttention 显存分页 · RoPE Scaling/YaRN/LongRoPE 外推 · Ring Attention 分布式方案 · 生产部署案例与延迟指标。",
          "href": "./cards/transformer/long_context_optimization.html"
        },
        {
          "code": "T22",
          "title": "Transformer 架构快速入门",
          "tagline": "Embedding / QKV注意力 / 多头注意力 / 编码器 / 解码器。",
          "href": "./cards/transformer/llm_transformer_basics.html"
        },
        {
          "code": "T23",
          "title": "残差网络 / 超连接 / MHC",
          "tagline": "ResNet保底信号 / HC多通道扩展 / 梯度爆炸 / MHC双随机矩阵约束。",
          "href": "./cards/transformer/llm_residual_hyperconnection.html"
        },
        {
          "code": "T24",
          "title": "SSM / Mamba 与混合注意力",
          "tagline": "纯线性为何没赢 FlashAttention / 递推状态 vs KV / 混合层分工 / 服务侧状态池 / 短请求可能更慢。",
          "href": "./cards/transformer/ssm_mamba_hybrid.html"
        }
      ]
    },
    {
      "label": "III · 大语言模型 (LLM)",
      "cards": [
        {
          "code": "L01",
          "title": "GPT 系列演进",
          "tagline": "GPT-1 → GPT-2 → GPT-3 → InstructGPT → GPT-4 → o1/o3，Decoder-Only 架构演进全景。",
          "href": "./cards/llm/gpt_series.html"
        },
        {
          "code": "L02",
          "title": "BERT 与编码器模型",
          "tagline": "BERT / RoBERTa / DeBERTa / ELECTRA，MLM 预训练、NSP、下游微调范式。",
          "href": "./cards/llm/bert_encoder_models.html"
        },
        {
          "code": "L03",
          "title": "开源 LLM 全景",
          "tagline": "LLaMA / Mistral / Qwen / DeepSeek / Gemma / Phi，架构差异、训练数据、Benchmark 对比。",
          "href": "./cards/llm/open_source_llm.html"
        },
        {
          "code": "L04",
          "title": "Tokenization 分词",
          "tagline": "BPE / WordPiece / Unigram / SentencePiece，中文分词、多语言、Vocabulary 设计。",
          "href": "./cards/llm/tokenization_guide.html"
        },
        {
          "code": "L05",
          "title": "大模型 Token 机制",
          "tagline": "为什么 \"Hello World\" 是 2 个 Token 而 \"你好世界\" 是 4 个？Subword 切分、成本计算、上下文窗口、中英文差异全解析。",
          "href": "./cards/llm/token_mechanism_complete.html"
        },
        {
          "code": "L06",
          "title": "Scaling Laws",
          "tagline": "Kaplan Scaling Law / Chinchilla / 数据-参数-算力最优配比 / Emergent Abilities / Inference Scaling。",
          "href": "./cards/llm/scaling_laws.html"
        },
        {
          "code": "L07",
          "title": "大模型 Dropout 机制",
          "tagline": "预训练为何弃用 / 单epoch范式 / 数据规模效应 / FFN层优先去除",
          "href": "./cards/llm/dropout_mechanism.html"
        },
        {
          "code": "L08",
          "title": "大模型解码策略",
          "tagline": "贪心解码 / Beam Search / Temperature 与 T=0 确定性 / GPU 浮点精度深水区 / 推测解码提速 2-3x / Self-Consistency。",
          "href": "./cards/llm/decoding_strategies_deep.html"
        },
        {
          "code": "L09",
          "title": "LoRA / QLoRA / PEFT 参数高效微调",
          "tagline": "低秩分解原理与 α/r 缩放、参数减少 97%、QLoRA 4bit、DoRA/PiSSA 变体、PEFT 方法谱系、多 LoRA 服务与热切换。",
          "href": "./cards/llm/lora_finetuning.html"
        },
        {
          "code": "L10",
          "title": "大模型数据工程",
          "tagline": "数据清洗 / 分块双架构 / Embedding 选型 / 向量库优化 / 多层检索防幻觉。",
          "href": "./cards/llm/data_engineering_pipeline.html"
        },
        {
          "code": "L11",
          "title": "Prompt Cache 核心机制",
          "tagline": "KV Cache 单次加速 → Prompt Cache 跨请求复用 → Prefill O(N²)→O(1)，推理成本指数级降低。",
          "href": "./cards/llm/prompt_cache_mechanism.html"
        },
        {
          "code": "L12",
          "title": "知识蒸馏技术",
          "tagline": "软标签 vs 硬标签 / 暗知识传递 / KL散度 / 训练成本降90%",
          "href": "./cards/llm/knowledge_distillation.html"
        },
        {
          "code": "L13",
          "title": "大模型结构化输出：方案谱系与四道防线",
          "tagline": "五大方案谱系与选型决策树 / JSON Schema 约束 / 智能重试 / 输出清洗 / 日志审计，从方案选型到生产防线全链路。",
          "href": "./cards/llm/structured_output_four_defenses.html"
        },
        {
          "code": "L14",
          "title": "大模型选型与成本控制",
          "tagline": "选型黄金三角 / 四维评估框架 / 主流模型价格对比 / 全链路成本核算 / 降本 85% 策略。",
          "href": "./cards/llm/model_selection_cost.html"
        },
        {
          "code": "L15",
          "title": "多模态大模型",
          "tagline": "CLIP / LLaVA / GPT-4V / Gemini，视觉-语言对齐、多模态融合架构、视频理解。",
          "href": "./cards/llm/multimodal_llm.html"
        },
        {
          "code": "L16",
          "title": "Kimi K3 核心技术",
          "tagline": "MuonClip 二阶优化器 / QK-Clip 抑制 logit 爆炸 / MoE 架构与专家路由 / 训练稳定性工程与生态应用。",
          "href": "./cards/llm/kimi_k3_technology.html"
        },
        {
          "code": "L17",
          "title": "LLM 长短期记忆统一管理",
          "tagline": "AgeMem / 工具化记忆操作 / 三阶段渐进训练 / 分步GRPO",
          "href": "./cards/llm/age_mem_unified_memory.html"
        },
        {
          "code": "L18",
          "title": "强化学习两类隐蔽失效：熵坍塌与 Reward Hacking",
          "tagline": "熵坍塌 / Reward Hacking / DAPO框架 / 早期200步决定90%性能",
          "href": "./cards/llm/rl_hidden_killers.html"
        },
        {
          "code": "L19",
          "title": "Token 切分与文本压缩",
          "tagline": "BPE算法 / 分词器 / 字节合并 / 英文vs中文 / 不同模型Token差异。",
          "href": "./cards/llm/llm_token_basics.html"
        },
        {
          "code": "L20",
          "title": "Temperature 与 Top-p 采样策略",
          "tagline": "Softmax转概率 / Temperature调节差距 / Top-p截断长尾 / 加权采样。",
          "href": "./cards/llm/llm_temperature_top_p.html"
        },
        {
          "code": "L21",
          "title": "推理模型与测试时计算",
          "tagline": "RLVR 可验证奖励 / 测试时扩展定律 / R1 四阶段流水线 / ORM 与 PRM 分水岭 / 推理预算控制层。",
          "href": "./cards/llm/reasoning_models_test_time_compute.html"
        }
      ]
    },
    {
      "label": "IV · 训练与微调 (Training & Fine-tuning)",
      "cards": [
        {
          "code": "W01",
          "title": "训练数据工程",
          "tagline": "数据清洗、去重（MinHash/SimHash）、数据配比、合成数据、数据飞轮、质量评分。",
          "href": "./cards/training/data_curation_guide.html"
        },
        {
          "code": "W02",
          "title": "预训练流程与并行策略",
          "tagline": "数据清洗 / 去重 / 课程学习、分布式并行（DP/TP/PP/ZeRO）、训练稳定性、Checkpoint。",
          "href": "./cards/training/pretraining_guide.html"
        },
        {
          "code": "W03",
          "title": "SFT 监督微调",
          "tagline": "指令数据构造、全参数微调 vs PEFT、Chat 模板、多轮对话训练、Loss Masking。",
          "href": "./cards/training/sft_guide.html"
        },
        {
          "code": "W04",
          "title": "RLHF / DPO / GRPO",
          "tagline": "Reward Model 训练、PPO 对齐、DPO 直接偏好优化、GRPO（DeepSeek）、KTO、ORPO。",
          "href": "./cards/training/rlhf_dpo_guide.html"
        },
        {
          "code": "W05",
          "title": "分布式训练",
          "tagline": "Data Parallel / Tensor Parallel / Pipeline Parallel、ZeRO-1/2/3、FSDP、Megatron-LM、DeepSpeed。",
          "href": "./cards/training/distributed_training.html"
        },
        {
          "code": "W06",
          "title": "混合精度训练",
          "tagline": "FP16 / BF16 / FP8、Loss Scaling、AMP 自动混合精度、Transformer Engine。",
          "href": "./cards/training/mixed_precision_training.html"
        },
        {
          "code": "W07",
          "title": "SFT 数据质量评估体系",
          "tagline": "PPL/奖励模型/LLM-as-Judge/交叉一致性四种训练前评估 / 五段清洗管线 / 训练中四类症状诊断 / 数据质量生产案例。",
          "href": "./cards/training/sft_data_quality.html"
        }
      ]
    },
    {
      "label": "V · 强化学习 (Reinforcement Learning)",
      "cards": [
        {
          "code": "R01",
          "title": "强化学习基础",
          "tagline": "MDP / Bellman 方程 / Value Function / Policy、探索与利用、折扣因子。",
          "href": "./cards/reinforcement/rl_fundamentals.html"
        },
        {
          "code": "R02",
          "title": "Q-Learning 与 DQN",
          "tagline": "Q-Table / DQN / Double DQN / Dueling / Rainbow、经验回放、目标网络。",
          "href": "./cards/reinforcement/q_learning_dqn.html"
        },
        {
          "code": "R03",
          "title": "策略梯度与 PPO",
          "tagline": "REINFORCE / Actor-Critic / A2C / A3C / GAE / PPO / TRPO，策略梯度定理推导。",
          "href": "./cards/reinforcement/policy_gradient_ppo.html"
        },
        {
          "code": "R04",
          "title": "多智能体强化学习",
          "tagline": "MARL / CTDE / MAPPO / 博弈论基础、合作与竞争、通信机制。",
          "href": "./cards/reinforcement/multi_agent_rl.html"
        },
        {
          "code": "R05",
          "title": "RL for LLM",
          "tagline": "RLHF 中的 PPO / GRPO 详解、Reward Hacking、过优化问题、Constitutional AI、RLAIF。",
          "href": "./cards/reinforcement/rl_for_llm.html"
        }
      ]
    }
  ],
  "applications": [
    {
      "label": "I · Prompt 与上下文 (Prompt & Context)",
      "cards": [
        {
          "code": "E01",
          "title": "Prompt Engineering",
          "tagline": "商业化 Prompt 资产设计、规则分层、Few-shot 边界样例、灰度发布、版本回滚与持续运营。",
          "href": "./cards/engineering/prompt_engineering.html"
        },
        {
          "code": "E02",
          "title": "五层 Prompt 架构设计",
          "tagline": "系统人设 → 上下文注入 → 核心指令 → 边界规则 → 输出格式，工程级分层 Prompt 模板设计方法论。",
          "href": "./cards/engineering/five_layer_prompt_architecture.html"
        },
        {
          "code": "E03",
          "title": "思维链 CoT：原理、变体与工程取舍",
          "tagline": "CoT 原理与起源 / Zero-shot vs Few-shot / Self-Consistency / Faithfulness 争议 / 工程取舍",
          "href": "./cards/engineering/cot_chain_of_thought.html"
        },
        {
          "code": "E04",
          "title": "Prompt 管理工程化",
          "tagline": "PromptOps：版本控制（Git vs DB 真相源）、五层架构、双入口协作、生命周期管理、权限矩阵、企业级多租户平台选型。",
          "href": "./cards/engineering/prompt_management_guide.html"
        },
        {
          "code": "E05",
          "title": "大模型提示词范式迁移：结果优先 Prompt 方法论",
          "tagline": "从过程遥控到结果优先 / 精简 ≠ 删需求 / 自治边界一次讲清 / 工具路由条件化 / 详略与推理强度分层 / 八段 Prompt 骨架 / 评测驱动迁移。",
          "href": "./cards/engineering/prompt_paradigm_migration.html"
        },
        {
          "code": "E06",
          "title": "Prompt 工程 vs Context 工程",
          "tagline": "Prompt Engineering 管\"怎么说\"，Context Engineering 管\"给什么\"。两者的边界、协同与工程实践差异。",
          "href": "./cards/engineering/prompt_vs_context_engineering.html"
        },
        {
          "code": "E07",
          "title": "思维链长度优化策略",
          "tagline": "倒 U 型关系 / 最优停止与 OS-Pruner / RL 长度剪枝与多链投票 / 熵值动态裁剪 / 超时·队列·成本三道工程闸。",
          "href": "./cards/engineering/cot_length_optimization.html"
        },
        {
          "code": "E08",
          "title": "程序化 Prompt 优化",
          "tagline": "Prompt 即程序 / DSPy 三层抽象 / 指标反馈通道 / GEPA 反思进化 / 优化器选型与落地边界。",
          "href": "./cards/engineering/programmatic_prompt_optimization.html"
        }
      ]
    },
    {
      "label": "II · RAG 检索基础 (Retrieval)",
      "cards": [
        {
          "code": "G01",
          "title": "RAG 架构全景",
          "tagline": "Naive RAG → Advanced RAG → Modular RAG 演进、检索-生成协同、RAG vs Fine-tuning 选择。",
          "href": "./cards/rag/rag_architecture.html"
        },
        {
          "code": "G02",
          "title": "Embedding 与向量化",
          "tagline": "Word2Vec / GloVe → 句向量（SBERT / E5 / BGE）、对比学习训练、向量相似度。",
          "href": "./cards/rag/embedding_guide.html"
        },
        {
          "code": "G03",
          "title": "RAG 核心：Embedding 相似度与召回评估",
          "tagline": "语义坐标系 / 余弦相似度 / 四维优化 / Recall@K评估",
          "href": "./cards/rag/embedding_deep.html"
        },
        {
          "code": "G04",
          "title": "向量数据库与 ANN 索引原理：关系型数据库的向量检索局限",
          "tagline": "百万 chunk 检索场景 / B-Tree vs 高维几何 / HNSW 分层图 / IVF 聚类 / 混合检索 RRF / 选型分档。",
          "href": "./cards/rag/vector_database_ann.html"
        },
        {
          "code": "G05",
          "title": "TF-IDF 与 BM25 算法对比",
          "tagline": "词频饱和 / 长度归一化 / k1与b参数 / 高频词干扰降37%",
          "href": "./cards/rag/tfidf_bm25.html"
        },
        {
          "code": "G06",
          "title": "检索与重排序",
          "tagline": "稀疏检索（BM25）/ 稠密检索 / 混合检索、Cross-Encoder Reranker、ColBERT / BGE-Reranker。",
          "href": "./cards/rag/retrieval_reranking.html"
        },
        {
          "code": "G07",
          "title": "RAG 混合检索：召回融合与重排",
          "tagline": "BM25 + Embedding 并行召回 / RRF 融合 / Cross-Encoder 重排 / 权重调节与生产级架构。",
          "href": "./cards/rag/hybrid_retrieval_guide.html"
        },
        {
          "code": "G08",
          "title": "RAG 文档切割技术方案",
          "tagline": "文档分块权威主卡：语义截断本质与质量连锁反应、基础方案（Overlap / 递归 / 语义边界）、结构化分块、进阶方案（句子窗口 / 父子块）、LLM 增强（命题化 / Contextual Retrieval）、chunk_size 经验值与前沿进展。",
          "href": "./cards/rag/chunking_semantic_solutions.html"
        },
        {
          "code": "G09",
          "title": "Embedding 模型选型与 Rerank 搭配",
          "tagline": "BGE-M3 / GTE / E5 / Jina v2 对比、MTEB 榜单解读、选型决策树、两阶段检索架构、领域微调决策框架。",
          "href": "./cards/rag/embedding_model_selection.html"
        },
        {
          "code": "G10",
          "title": "RAG 相似度阈值设置",
          "tagline": "分数计算原理 / 经验值参考 / 动态调参策略 / 业务场景适配。",
          "href": "./cards/rag/similarity_threshold_guide.html"
        },
        {
          "code": "G11",
          "title": "RAG 系统 TopK 设置策略",
          "tagline": "召回率·噪声·成本三平衡 / Chunk大小绑定 / Reranker协同",
          "href": "./cards/rag/topk_strategy.html"
        },
        {
          "code": "G12",
          "title": "Query Rewrite 查询改写",
          "tagline": "语义鸿沟分析、规则/NLP/大模型三大改写方案、工业级混合架构、HyDE / Multi-Query / Step-back 高级技术。",
          "href": "./cards/rag/query_rewrite.html"
        },
        {
          "code": "G13",
          "title": "用 Python 构建 RAG 系统",
          "tagline": "Chunking策略 / Embedding模型 / 向量数据库 / 检索与生成 / 完整代码实现。",
          "href": "./cards/rag/rag_python_implementation.html"
        }
      ]
    },
    {
      "label": "II · RAG 文档处理 (Document Pipeline)",
      "cards": [
        {
          "code": "G14",
          "title": "RAG 处理 Word 文档",
          "tagline": "结构保留 / 表格按行切分 / OCR关联 / 语义Chunk切分",
          "href": "./cards/rag/word_document_processing.html"
        },
        {
          "code": "G15",
          "title": "跨页表格处理",
          "tagline": "先拼表后切块 / 续表判断四要素 / 结构修复三操作 / 结构化切块四原则 / 双索引问答策略。",
          "href": "./cards/rag/cross_page_table_processing.html"
        },
        {
          "code": "G16",
          "title": "万篇长文档 RAG 系统搭建",
          "tagline": "八步自动化流水线 / AI 聚类归纳 / 双架构混合存储（ES+向量）/ Ragas 量化评估 / 增量更新闭环。",
          "href": "./cards/rag/long_document_rag_pipeline.html"
        },
        {
          "code": "G17",
          "title": "RAG 知识库更新机制",
          "tagline": "先删后增更新流程 · 内容哈希变化检测 · Chunk ID 设计 · 轮询 vs 事件驱动触发 · 五步自动化流水线 · 版本管理与灰度回滚 · 30% 变更率阈值 · 僵尸 Chunk 清理。",
          "href": "./cards/rag/knowledge_base_update_advanced.html"
        }
      ]
    },
    {
      "label": "II · RAG 进阶模式 (Advanced RAG)",
      "cards": [
        {
          "code": "G18",
          "title": "高级 RAG 模式",
          "tagline": "Self-RAG / Corrective RAG / Adaptive RAG / RAPTOR / HyDE、多步推理、查询改写。",
          "href": "./cards/rag/advanced_rag_patterns.html"
        },
        {
          "code": "G19",
          "title": "Self-RAG 系统设计核心",
          "tagline": "检索决策门控 / 质量评分机制 / 反思 Token 训练 / 自适应检索架构。",
          "href": "./cards/rag/self_rag_system_design.html"
        },
        {
          "code": "G20",
          "title": "Agentic RAG",
          "tagline": "给 RAG 注入 Agent 灵魂：查询重写、问题分解、动态决策与工具调用、Self-RAG 自我反思与修正。",
          "href": "./cards/rag/agentic_rag.html"
        },
        {
          "code": "G21",
          "title": "GraphRAG",
          "tagline": "多跳问题动机与 O(1) 子图检索、实体关系抽取、Microsoft GraphRAG 核心创新（Leiden + 社区摘要）、Local vs Global 检索、混合路由、TCO 成本分析与生产案例。",
          "href": "./cards/rag/graphrag_guide.html"
        },
        {
          "code": "G22",
          "title": "结构化 RAG 混合架构",
          "tagline": "双轨智能路由 / Schema RAG 动态检索相关表 / Few-shot 示例库 / 自纠错环限 3 次重试 / 四重安全防线。",
          "href": "./cards/rag/structured_rag_architecture.html"
        },
        {
          "code": "G23",
          "title": "RAG 与参数化知识选型",
          "tagline": "技术原理对比 / 适用场景 / 优缺点分析 / 组合使用策略。",
          "href": "./cards/rag/rag_vs_llm_wik.html"
        },
        {
          "code": "G24",
          "title": "Claude Code 代码检索：从 RAG 到 Grep",
          "tagline": "RAG 三大结构性缺陷（黑盒 / 链式衰减 / 索引漂移）、Agentic Grep 工具设计、混合架构、代码 RAG 实践（AST 分块 / 误报三层过滤）、混合方案两代演进。",
          "href": "./cards/rag/claude_grep_over_rag.html"
        },
        {
          "code": "G25",
          "title": "RAG 架构的三层防御",
          "tagline": "入口过滤 / 检索质量校验 / 输出忠实度检测。",
          "href": "./cards/rag/three_layer_defense.html"
        },
        {
          "code": "G26",
          "title": "Embedding 可解释性分析",
          "tagline": "维度数值有没有语义？与传统特征工程三大核心差异、探测任务、白化修正、稀疏自编码器（SAE）打开黑盒。",
          "href": "./cards/rag/embedding_blackbox.html"
        },
        {
          "code": "G27",
          "title": "Embedding 向量坍塌成因与修正",
          "tagline": "语义空间失去区分 / InfoNCE损失 / Hard Negative / 均匀性正则",
          "href": "./cards/rag/embedding_collapse.html"
        },
        {
          "code": "G28",
          "title": "轻量 GraphRAG 变体选型",
          "tagline": "社区摘要为何是账单主体 / LightRAG 去社区化与双层关键词 / HippoRAG 2 个性化 PageRank / LazyGraphRAG 延迟摘要 / 胜率与 F1 两套口径为何结论相反。",
          "href": "./cards/rag/lightrag_variants_comparison.html"
        },
        {
          "code": "G29",
          "title": "RAG 优化 17 策略",
          "tagline": "文档解析→Chunk 切分→Embedding→检索→重排序→生成全链路优化。P0 必做：智能分块+混合检索+重排序+忠实性约束。",
          "href": "./cards/rag/rag_optimization_strategies.html"
        },
        {
          "code": "G30",
          "title": "Milvus：从单机到分布式的向量数据库",
          "tagline": "向量 vs MySQL / Lite·Standalone·Distributed / QueryNode 存算分离 / 混合检索。",
          "href": "./cards/rag/milvus_architecture.html"
        },
        {
          "code": "G31",
          "title": "多模态 RAG 与视觉文档检索",
          "tagline": "OCR 的结构性丢失 / ColPali 晚交互 MaxSim / 两阶段粗排精排 / 跨模态分数不可比 / 二进制量化。",
          "href": "./cards/rag/multimodal_visual_document_rag.html"
        }
      ]
    },
    {
      "label": "III · Agent 入门与架构 (Foundations)",
      "cards": [
        {
          "code": "A01",
          "title": "Loop 工程与 ReAct 区别",
          "tagline": "Agent Loop 工程实现 / ReAct 推理链 / 状态管理 / 终止条件。",
          "href": "./cards/agent/loop_engineering_vs_react.html"
        },
        {
          "code": "A02",
          "title": "Function Calling 工程实践",
          "tagline": "工具定义设计 / tool_choice 与多轮工具使用 / 并行调用 / 跨厂商差异（OpenAI·Anthropic·Gemini）/ 生产踩坑",
          "href": "./cards/agent/function_calling_deep_dive.html"
        },
        {
          "code": "A03",
          "title": "Function Calling 底层实现原理",
          "tagline": "没有新推理模块，只有 next token prediction 的模式切换，从 SFT/RL 训练到推理全链路拆解。",
          "href": "./cards/agent/function_calling_internals.html"
        },
        {
          "code": "A04",
          "title": "Agent 架构类型与选型",
          "tagline": "七种架构全景（含 Blackboard / Route+Skill）/ 核心循环与三类记忆 / 三层复合架构参数 / 选型决策矩阵与打分法",
          "href": "./cards/agent/architecture_types.html"
        },
        {
          "code": "A05",
          "title": "Agent 集中式与分布式架构选型",
          "tagline": "轻量化集中式 vs 分布式 / 三大核心组件 / 零信任红线 / 幻觉级联防控",
          "href": "./cards/agent/agent_architecture_selection.html"
        },
        {
          "code": "A06",
          "title": "LangChain 生态全景",
          "tagline": "LangChain / LangGraph / LangSmith / LangServe，Chain / Agent / Memory / Retriever 核心抽象。",
          "href": "./cards/agent/langchain_ecosystem.html"
        },
        {
          "code": "A07",
          "title": "工作流编排",
          "tagline": "LangGraph / LlamaIndex Workflow / Dify、DAG 编排、条件路由、人机协作、状态管理。",
          "href": "./cards/agent/workflow_orchestration.html"
        },
        {
          "code": "A08",
          "title": "LangGraph 生产级实践",
          "tagline": "节点·边·状态三要素 / Pregel 超步模型 / Checkpoint 版本回滚 / 条件路由防死循环 / 生产架构选型",
          "href": "./cards/agent/langgraph_deep_dive.html"
        },
        {
          "code": "A09",
          "title": "Agent 框架选型",
          "tagline": "四大框架流派解析（AI原生/生态万能/自研极简/企业专精）/ 选型决策矩阵 / MCP 协议互联 / 架构师能力转向。",
          "href": "./cards/agent/agent_framework_selection.html"
        },
        {
          "code": "A10",
          "title": "Agent 概念、原理与构建模式",
          "tagline": "LLM 局限 → Agent 定义 → ReAct 模式 → 系统提示词设计 → 代码实现 → Plan-and-Execute。",
          "href": "./cards/agent/agent_concepts_react_plan_execute.html"
        },
        {
          "code": "A11",
          "title": "AI Agent 生态概念全串联",
          "tagline": "推理服务→Memory→RAG→MCP→Skills→Agent / 一个问题的连锁解决方案。",
          "href": "./cards/agent/ai_ecosystem_concepts.html"
        }
      ]
    },
    {
      "label": "III · Agent 工具与 Skills (Tools & MCP)",
      "cards": [
        {
          "code": "A12",
          "title": "MCP 核心架构",
          "tagline": "Host-Client-Server 三层 / 四大原语（含 Sampling）/ 传输层选型与能力协商 / 六层安全防护与生态落地",
          "href": "./cards/agent/mcp_architecture_core.html"
        },
        {
          "code": "A13",
          "title": "Agent Skills 系统",
          "tagline": "Agent Skills 体系 / Skill·FC·MCP 三层关系与差异 / MCP 深度解析与安全性 / 选型决策树与生产案例",
          "href": "./cards/agent/agent_skills.html"
        },
        {
          "code": "A14",
          "title": "工业级 MCP Server 开发",
          "tagline": "5 层防护、Zod 参数校验、限流中间件、写操作保护、HTTP+SSE 传输层、Stripe/Notion 生产案例。",
          "href": "./cards/agent/industrial_mcp_server.html"
        },
        {
          "code": "A15",
          "title": "MCP Server 生产级鉴权",
          "tagline": "三层鉴权模型、OAuth 2.1 + PKCE、RBAC 功能权限、数据权限隔离、字段脱敏、Linear/金融公司案例。",
          "href": "./cards/agent/mcp_server_authentication.html"
        },
        {
          "code": "A16",
          "title": "Agent 多工具并行执行",
          "tagline": "依赖图分析 / 并行调度策略 / 错误隔离 / 结果合并。",
          "href": "./cards/agent/multi_tool_parallel_execution.html"
        },
        {
          "code": "A17",
          "title": "Skill 设计与架构：从设计到运行",
          "tagline": "Description 触发条件 + 反触发、渐进式披露 vs RAG、三层加载、双 Hook 自动激活、三级执行 block/suggest/warn、500 行规则。",
          "href": "./cards/agent/skill_architecture.html"
        },
        {
          "code": "A18",
          "title": "Skills 技能维护方法论",
          "tagline": "四维成功定义 / 双重失控面 / 四类回归样本 / 维护转型三阶段",
          "href": "./cards/agent/skills_maintenance_methodology.html"
        },
        {
          "code": "A19",
          "title": "Skills 命中率优化实战",
          "tagline": "Skill 数量一多命中率下降？三位一体优化：Agent 底座 + 分层描述（正负样例）+ 召回精排路由机制。",
          "href": "./cards/agent/skills_hit_rate_optimization.html"
        },
        {
          "code": "A20",
          "title": "CLI 与 MCP 架构对比",
          "tagline": "本地直连 vs 协议标准化 / Token消耗降90% / 混合架构趋势",
          "href": "./cards/agent/cli_vs_mcp.html"
        },
        {
          "code": "A21",
          "title": "达尔文技能评估模型",
          "tagline": "自然选择思想 / 技能进化机制 / 适应度函数 / 淘汰与保留策略。",
          "href": "./cards/agent/darwin_skill_evaluation.html"
        },
        {
          "code": "A22",
          "title": "MCP 入门指南：原理与实战",
          "tagline": "MCP Host / MCP Server / Tool / STDIO 交互流程 / uvx·npx 安装实战 / 超时解决方案。",
          "href": "./cards/agent/mcp_ultimate_guide_basics.html"
        },
        {
          "code": "A23",
          "title": "MCP 进阶：自建 Server 与协议分析",
          "tagline": "Python创建MCP Server / 截获STDIO通信 / 逐行分析协议 / 直接与Server通信。",
          "href": "./cards/agent/mcp_advanced_server_protocol.html"
        },
        {
          "code": "A24",
          "title": "MCP 抓包分析：Cline 与模型的交互协议",
          "tagline": "本地代理抓包 / Cline XML协议 / ReAct模式 / SSE流式返回。",
          "href": "./cards/agent/mcp_packet_analysis_cline.html"
        },
        {
          "code": "A25",
          "title": "Function Calling 与 MCP 的关系",
          "tagline": "FC协议细节 / 模型API交互 / 两者作用环节不同 / 同一链路共存。",
          "href": "./cards/agent/mcp_vs_function_calling.html"
        },
        {
          "code": "A26",
          "title": "MCP vs CLI 工具对比分析",
          "tagline": "Token消耗对比 / 执行效率对比 / MCP可控性优势 / 未来格局。",
          "href": "./cards/agent/mcp_vs_cli.html"
        },
        {
          "code": "A27",
          "title": "Agent Skill 从使用到原理",
          "tagline": "渐进式披露三层架构 / Reference按需加载 / Script只执行不读取 / Skill vs MCP。",
          "href": "./cards/agent/agent_skill_usage_to_principle.html"
        },
        {
          "code": "A28",
          "title": "Agent Skills 概念体系",
          "tagline": "Prompt→Command→System Prompt→Metadata→Reference/Script→Skill / Skill vs MCP vs Workflow。",
          "href": "./cards/agent/agent_skills_concept_chain.html"
        },
        {
          "code": "A29",
          "title": "WikiSkill 三层知识架构",
          "tagline": "Raw / Wiki / Skills 三层分工 + 四步进化循环，经验先留证据再上岗。",
          "href": "./cards/agent/wikiskill_knowledge_architecture.html"
        },
        {
          "code": "A30",
          "title": "SkillProX 自进化 Skill 四步法",
          "tagline": "前向闭环诊断 + 冻结留一法审计，让 Skill 既会生长也会收缩。",
          "href": "./cards/agent/skillprox_self_evolving.html"
        },
        {
          "code": "A31",
          "title": "工具调用参数四层防御",
          "tagline": "格式校验 / 类型归一 / 边界守护 / 语义净化 + 上游契约漂移检测。",
          "href": "./cards/agent/tool_param_validation.html"
        }
      ]
    },
    {
      "label": "III · Agent 运行时与上下文 (Runtime)",
      "cards": [
        {
          "code": "A32",
          "title": "单智能体上下文窗口：串行架构与记忆外挂",
          "tagline": "上下文窗口管理策略：滑动窗口、摘要压缩、外部记忆扩展，单 Agent 如何突破 Token 限制。",
          "href": "./cards/agent/single_agent_context_window.html"
        },
        {
          "code": "A33",
          "title": "Agent 记忆管理机制",
          "tagline": "四层记忆结构 / 写入五步法 / 读取链路 / Writer-Store-Reader",
          "href": "./cards/agent/memory_management_deep.html"
        },
        {
          "code": "A34",
          "title": "Agent Checkpoint 机制",
          "tagline": "Thread ID + State + TTL 三要素 / 存储选型 / Time Travel / 生产踩坑指南。",
          "href": "./cards/agent/agent_checkpoint.html"
        },
        {
          "code": "A35",
          "title": "Agent 异步状态更新陷阱",
          "tagline": "竞争条件 / 事件循环误解 / 共享可变状态 / Actor 模型 / 状态隔离与不可变性。",
          "href": "./cards/agent/async_state_update_pitfalls.html"
        },
        {
          "code": "A36",
          "title": "上下文工程：Agent 上下文的组织与管理",
          "tagline": "Anthropic 定义的核心能力：上下文构建、压缩、隔离与恢复。不是 Prompt Engineering 的升级版，而是 Agent 的底层操作系统。",
          "href": "./cards/agent/context_engineering.html"
        },
        {
          "code": "A37",
          "title": "大模型上下文管理策略",
          "tagline": "Token预算分配 / 历史分层 / RAG四步链 / MapReduce / 降级策略",
          "href": "./cards/agent/context_management_strategy.html"
        },
        {
          "code": "A38",
          "title": "突破上下文窗口限制",
          "tagline": "双阶段工作流、外部记忆系统、增量循环三原则 — 用「硬盘换内存」让 AI Agent 连续工作一周不丢上下文。",
          "href": "./cards/agent/context_window_breakthrough.html"
        },
        {
          "code": "A39",
          "title": "摘要压缩工程：结构化填表方案",
          "tagline": "五大压缩方法分类、四级水位线触发机制、六大 Agent 压缩策略横向对比、Schema 填表 vs 自由总结。",
          "href": "./cards/agent/summary_compression.html"
        },
        {
          "code": "A40",
          "title": "Agent 上下文漂移解决方案",
          "tagline": "目标结构化锚定、智能摘要压缩、执行状态校验、自我纠偏机制 — 四层防御体系根治 Agent 上下文漂移。",
          "href": "./cards/agent/context_drift_solutions.html"
        },
        {
          "code": "A41",
          "title": "Agent Prompt 优化与有效性验证",
          "tagline": "三问破局：账本验证、错误分类、链路推进 — 从「单轮输出优化」升级为「端到端链路优化」的方法论与生产级实践。",
          "href": "./cards/agent/prompt_optimization_evaluation.html"
        },
        {
          "code": "A42",
          "title": "长链路 Agent 系统设计",
          "tagline": "三级记忆体系 / 任务切片 / 多分支隔离 / 关键信息永久保护",
          "href": "./cards/agent/long_chain_agent_design.html"
        },
        {
          "code": "A43",
          "title": "AI 程序性记忆：技能蒸馏与复用",
          "tagline": "SkillPro 技能蒸馏 / MemSkill 跨度级生成（调用次数降83%）/ 三位一体闭环架构 / 技术路线对比",
          "href": "./cards/agent/procedural_memory_revolution.html"
        },
        {
          "code": "A44",
          "title": "Context Engineering 概念与实现",
          "tagline": "Context Window / 四大策略：保存/选择/压缩/隔离 / Agent上下文管理。",
          "href": "./cards/agent/llm_context_engineering.html"
        }
      ]
    },
    {
      "label": "III · 多 Agent 协作 (Multi-Agent)",
      "cards": [
        {
          "code": "A45",
          "title": "多 Agent 拆分：以上下文边界为依据",
          "tagline": "按职能拆分 = 传话游戏。以上下文为中心拆分：红绿灯法则判断边界，通信 Token > 任务 Token 就是拆错了。",
          "href": "./cards/agent/multi_agent_splitting.html"
        },
        {
          "code": "A46",
          "title": "多 Agent 系统协作机制",
          "tagline": "拆-分-通-协全链路 / 四大拓扑与 Swarm·Debate / 三座大山决策与 ROI / 冲突消解与生产治理",
          "href": "./cards/agent/multi_agent_collaboration.html"
        },
        {
          "code": "A47",
          "title": "主 Agent 动态派生子 Agent",
          "tagline": "单 Agent 三大瓶颈 / AutoGen→Orchestrator-Workers→Claude Code 三代演进 / 中心化任务状态表 / 收敛重于发散、扁平优于嵌套、状态中心化三铁律 / 生产保障全链路。",
          "href": "./cards/agent/dynamic_subagent_spawning.html"
        },
        {
          "code": "A48",
          "title": "多 Agent 生产治理",
          "tagline": "三种通信模式与 MCP/A2A 协议选型 / 版本号状态同步与 ACK 心跳 / 优先级调度与舱壁隔离 / 可观测与迭代优化量化闭环。",
          "href": "./cards/agent/multi_agent_production_governance.html"
        },
        {
          "code": "A49",
          "title": "Agent 多租户与记忆隔离",
          "tagline": "记忆/工具/行为/配额四层隔离 / Silo·Pool·Bridge 模式取舍 / 向量前置过滤与 RLS 兜底 / 身份强制注入与控制面分离。",
          "href": "./cards/agent/multi_tenant_memory_isolation.html"
        },
        {
          "code": "A50",
          "title": "个性化 Agent 设计",
          "tagline": "用户画像→意图识别→分层 Prompt→输出过滤→反馈闭环五段流水线 / 冷启动与漂移管理 / 百万级用户千人千面生产验证。",
          "href": "./cards/agent/personalized_agent_design.html"
        },
        {
          "code": "A51",
          "title": "Agent Teams / Swarm 多 Agent 协同",
          "tagline": "单Agent→Sub Agent→Agent Teams→Token爆炸 / Kimi Swarm动态并行 / PARL。",
          "href": "./cards/agent/agent_teams_swarm.html"
        },
        {
          "code": "A52",
          "title": "A2A 协议：Agent 间通信规范",
          "tagline": "Agent Card / JSON-RPC / Task/Artifact/Part / 注册与问答两阶段。",
          "href": "./cards/agent/a2a_protocol_sync.html"
        },
        {
          "code": "A53",
          "title": "A2A 流式返回与多 Agent 协作",
          "tagline": "5条消息模式 / 三Agent协作 / 调度Agent决策 / 可扩展架构。",
          "href": "./cards/agent/a2a_streaming_multi_agent.html"
        },
        {
          "code": "A54",
          "title": "多 Agent 负载均衡与任务调度",
          "tagline": "任务复杂度建模 / 异构容量归一 / 预期负载派发 / 分层探针与熔断半开。",
          "href": "./cards/agent/multi_agent_load_balancing.html"
        },
        {
          "code": "A55",
          "title": "多 Agent 工具调用冲突仲裁",
          "tagline": "语义指纹幂等 / 分布式锁谱系 / 栅栏令牌 / 分区串行化与冲突可观测。",
          "href": "./cards/agent/multi_agent_tool_conflict.html"
        },
        {
          "code": "A56",
          "title": "多 Agent 投票与共识机制",
          "tagline": "误差独立性前提 / 语义等价聚类 / 早退法定人数 / 成本放大与验证器替代。",
          "href": "./cards/agent/multi_agent_voting.html"
        }
      ]
    },
    {
      "label": "III · Agent 生产与评估 (Production)",
      "cards": [
        {
          "code": "A57",
          "title": "Code Agent",
          "tagline": "代码生成 Agent、Cursor / Copilot / Devin 原理、SWE-Bench、代码搜索、AST 操作。",
          "href": "./cards/agent/code_agent.html"
        },
        {
          "code": "A58",
          "title": "AI Agent 编程核心问题",
          "tagline": "检索时机判断 / 三层架构方案 / 双Hook保险 / Skills发现",
          "href": "./cards/agent/agent_coding_challenges.html"
        },
        {
          "code": "A59",
          "title": "AI Agent 幂等性设计",
          "tagline": "三层幂等框架 / 全局 Key 设计 / 状态机强约束 / 持久化约束 / 生产监控五大指标。",
          "href": "./cards/agent/agent_idempotency.html"
        },
        {
          "code": "A60",
          "title": "Agent 系统失败处理策略",
          "tagline": "显性 vs 隐性失败 / 错误翻译与 LLM 自我修正 / 检查点回滚 / 缝合交付 / 确定性工程护栏。",
          "href": "./cards/agent/failure_handling_strategies.html"
        },
        {
          "code": "A61",
          "title": "Agent 灰度发布系统设计",
          "tagline": "四大本质差异 / 四层架构 / 粘性路由 / 渐进放量5%→100%",
          "href": "./cards/agent/canary_release_system.html"
        },
        {
          "code": "A62",
          "title": "工业级 Agent 设计原则",
          "tagline": "七大原则 / 单一职责 / 状态驱动 / 原子化操作 / 三级降级",
          "href": "./cards/agent/industrial_agent_design_principles.html"
        },
        {
          "code": "A63",
          "title": "Agent 混合路由优化：从统一策略到分级路由",
          "tagline": "难度长尾与成本-质量不对称 / 规则·模型·混合三种路由策略 / 训练数据三条来源 / 分类器 vs 评分器 / 级联降级成本账与三大坑 / 落地路线图。",
          "href": "./cards/agent/model_routing_hybrid.html"
        },
        {
          "code": "A64",
          "title": "Agent 能力分级与诊断",
          "tagline": "Level 0~3 四级能力模型、Context Engineering、Producer-Critic 机制、Multi-Agent 避坑指南。",
          "href": "./cards/agent/agent_level_diagnosis.html"
        },
        {
          "code": "A65",
          "title": "Agent 自主进化工程路径",
          "tagline": "设计→执行→测试→优化→发现六阶段闭环 / 经验提取与能力固化 / 受控进化四级发布（eval→shadow→canary→active）/ 六大工程特性验收。",
          "href": "./cards/agent/autonomous_evolution_engineering.html"
        },
        {
          "code": "A66",
          "title": "Agent 死循环与生产防御",
          "tagline": "死循环五种类型分类、循环探测中间件、防循环三板斧、Build to Delete 设计哲学、目标漂移治理、Token 浪费从 $3200 降至 $180。",
          "href": "./cards/agent/agent_loop_pitfalls.html"
        },
        {
          "code": "A67",
          "title": "AI 控制平面：Agent 失控熔断与接管",
          "tagline": "五大核心能力：精细访问控制、身份认证、全量可观测性、成本治理、数据主权。毫秒级前置拦截取代事后报告。",
          "href": "./cards/agent/agent_control_plane.html"
        },
        {
          "code": "A68",
          "title": "AI 代码检索四代演进",
          "tagline": "文本→仓库地图→语义召回→结构图谱→知识工程 / Token降90%",
          "href": "./cards/agent/code_retrieval_evolution.html"
        },
        {
          "code": "A69",
          "title": "Kimi K3 与百万行级代码库改造",
          "tagline": "前端 demo ≠ 内核 / 1M 窗口仍装不下整仓 / Agent 搜索 / 测试当裁判。",
          "href": "./cards/agent/kimi_k3_large_codebase.html"
        },
        {
          "code": "A70",
          "title": "Agent 思考链工程化落地",
          "tagline": "意图锚定 / 工具校验 / 结果校验 / 反思修正 —— 把执行链路做成四层防线。",
          "href": "./cards/agent/thinking_chain_engineering.html"
        },
        {
          "code": "A71",
          "title": "Agent 自我反思机制四层设计",
          "tagline": "硬性熔断 / 策略降级 / 目标反思 / 经验沉淀，含 Reflexion 与 Self-Refine 的边界。",
          "href": "./cards/agent/self_reflection_mechanism.html"
        },
        {
          "code": "A72",
          "title": "Agent 防循环机制设计",
          "tagline": "调用指纹 / 执行轨迹表 / 任务状态机 / DAG 无环约束，从机制上根除死循环。",
          "href": "./cards/agent/agent_loop_prevention.html"
        },
        {
          "code": "A73",
          "title": "Agent 输出逻辑性与结构化",
          "tagline": "入口安检 / 任务隔离 / 逻辑分拣 / 输出自检 —— 约束的时机决定逻辑质量。",
          "href": "./cards/agent/agent_output_structuring.html"
        },
        {
          "code": "A74",
          "title": "实时语音 Agent",
          "tagline": "300 毫秒预算分段 / 语义端点判定 / 级联与端到端选型 / barge-in 播放位置契约 / 静默填充与四状态机。",
          "href": "./cards/agent/realtime_voice_agent.html"
        },
        {
          "code": "A75",
          "title": "GUI Agent 与 Computer Use",
          "tagline": "三条感知路线 / Set-of-Mark 标记选择 / 自愈选择器多信号指纹 / 界面表示裁剪 / 先验证再动作。",
          "href": "./cards/agent/gui_agent_computer_use.html"
        }
      ]
    },
    {
      "label": "III · Agent 工程范式 (Harness / Loop / Graph)",
      "cards": [
        {
          "code": "HH01",
          "title": "Harness 架构",
          "tagline": "Three-Agent Harness (Planner/Generator/Evaluator)、Brain/Hands/Session、Context Resets、Sprint Contracts。",
          "href": "./cards/topics/harness_architecture.html"
        },
        {
          "code": "HH02",
          "title": "Agent Harness 工程方法",
          "tagline": "Agent = Model + Harness：四层架构、上下文重置、对抗性架构、三智能体协作。6h/$200 vs 20min/$9 的质量差距。",
          "href": "./cards/topics/harness_architecture_deep.html"
        },
        {
          "code": "HH03",
          "title": "Harness Engineering 概念、实战与争议",
          "tagline": "Harness定义 / 四层工程栈 / Tool-use vs Harness / CC/Amp/Hermes对比。",
          "href": "./cards/topics/harness_engineering.html"
        },
        {
          "code": "HH04",
          "title": "Harness 与 Prompt / Context Engineering 的关系",
          "tagline": "PE→CE→Harness演进 / 三维度对比 / Skills归属 / 全栈能力融合。",
          "href": "./cards/topics/harness_vs_prompt_engineering.html"
        },
        {
          "code": "LP01",
          "title": "Loop Engineering 概念与架构",
          "tagline": "从 Prompt Engineering 到 Loop Engineering：AI 工程的第四代范式。核心循环（意图→上下文→行动→观察→调整）、六大要素（自动触发、并行隔离、技能文件、连接器、子Agent、持久记忆）、五种 Loop 模式。",
          "href": "./cards/topics/loop_engineering_concepts.html"
        },
        {
          "code": "LP02",
          "title": "生产级 Agent Loop 工程",
          "tagline": "从 while loop 到三层架构（Loop/Skill/Orchestrator）。持久执行、step 级检查点、模型路由（60-80% 降本）、自我进化（Agent 构建自己的 Skill）、可观察性（信任层）。",
          "href": "./cards/topics/loop_engineering_production.html"
        },
        {
          "code": "GE01",
          "title": "Graph Engineering 核心概念",
          "tagline": "Job/Edge/State 三要素 / Fake Edge 虚假依赖 / Fork 钻石模式与独立验证 / Stop Rule 与 Human Gate / 实施七原则与三大业务落地。",
          "href": "./cards/topics/graph_engineering_concepts.html"
        },
        {
          "code": "GE02",
          "title": "从 Loop 到 Graph 的 AI 工程演进",
          "tagline": "五层技术堆栈演进（Prompt→Context→Harness→Loop→Graph）/ Org Graph vs Work Graph / 三大爆发因素 / 控制论四大警告与 5 节点判定。",
          "href": "./cards/topics/loop_to_graph_evolution.html"
        },
        {
          "code": "GE03",
          "title": "从 Prompt 到 Graph 的工程范式实践",
          "tagline": "五大设计层级 / 六大必设计对象（State/Node/Edge/Reducer/Checkpoint/Interrupt）/ 五大约束机制 / 能力边界与模型分工策略。",
          "href": "./cards/topics/prompt_to_graph_engineering.html"
        }
      ]
    },
    {
      "label": "IV · 记忆系统 (Memory Systems)",
      "cards": [
        {
          "code": "M01",
          "title": "AI 记忆体系",
          "tagline": "四层记忆架构（核心/瞬时/短期/长期）、跨会话个性化、混合检索策略、异步更新与会话即焚。",
          "href": "./cards/memory/ai_memory_system.html"
        },
        {
          "code": "M02",
          "title": "Claude Code 记忆系统",
          "tagline": "后台子 Agent 自动提取记忆的四个关键设计：权限锁死、两轮对话、互斥机制、游标合并。自动化与可控性缺一不可。",
          "href": "./cards/memory/claude_code_memory_system.html"
        },
        {
          "code": "M03",
          "title": "OpenViking 记忆系统：分层架构与 Context Engineering",
          "tagline": "层级化虚拟文件系统 L0/L1/L2、目录递归检索、六种记忆类型生命周期、Context Engineering 范式，Token 降 83-96%。",
          "href": "./cards/memory/openviking_memory_system.html"
        },
        {
          "code": "M04",
          "title": "三大 Agent 记忆系统对比",
          "tagline": "Claude Code vs OpenViking vs Hermes Agent：文件式 vs 层级式 vs 自我进化式，不同场景不同选型。",
          "href": "./cards/memory/three_memory_systems_battle.html"
        },
        {
          "code": "M05",
          "title": "Agent 记忆机制设计缺陷与规避",
          "tagline": "三大坑（记忆污染/上下文漂移/无限堆积）+ 三层策略（选择性遗忘/分层管理/主动维护）。Cursor 读了 377 篇论文的实战总结。",
          "href": "./cards/memory/memory_design_pitfalls.html"
        },
        {
          "code": "M06",
          "title": "Agent 长期记忆安全设计",
          "tagline": "证据层+经验层双层存储、五大设计原则、整合触发矩阵 — 防过度总结与经验劣化的记忆安全设计。",
          "href": "./cards/memory/memory_safety_design.html"
        },
        {
          "code": "M07",
          "title": "Agent 记忆污染四重防御体系",
          "tagline": "污染 vs 普通 Bug 的本质区别 / 三大污染来源 / 索引分离、容量限制、快照隔离、写入扫描四道防线。",
          "href": "./cards/memory/memory_pollution_defense.html"
        },
        {
          "code": "M08",
          "title": "AI 长期记忆架构：三层记忆体系",
          "tagline": "短期记忆 → 实体画像 → 长期情景记忆 / 中枢 Prompt 拼装引擎 / 影子 Agent 异步更新。",
          "href": "./cards/memory/long_term_memory_architecture.html"
        },
        {
          "code": "M09",
          "title": "多 Agent 系统共享记忆",
          "tagline": "公共上下文总线 / Redis/向量库存储 / 并发控制与权限管理 / 黑板模式协作架构。",
          "href": "./cards/memory/multi_agent_shared_memory.html"
        },
        {
          "code": "M10",
          "title": "记忆系统五层评测体系",
          "tagline": "存储质量→检索召回→长期一致→注入质量→知识图谱，五层递进式评测框架与闭环优化流程。",
          "href": "./cards/memory/memory_evaluation_system.html"
        },
        {
          "code": "M11",
          "title": "腾讯云 AgentMemory 开源实现",
          "tagline": "L0→L3 四层记忆分层 / 原子记忆提炼与符号下钻 / 技能库·知识图谱·代码图谱三大能力 / PersonaMem 召回 48%→76%。",
          "href": "./cards/memory/agentmemory_open_source.html"
        }
      ]
    },
    {
      "label": "V · 数据与向量存储 (Data & Vector Storage)",
      "cards": [
        {
          "code": "D01",
          "title": "向量数据库原理与选型",
          "tagline": "相似度度量 · ANN 算法（HNSW/IVF-PQ/DiskANN）· Milvus/Qdrant/Weaviate 引擎架构 · 七大数据库选型 · 混合搜索 · SQ8 量化与生产实战。",
          "href": "./cards/data/vector_database_guide.html"
        },
        {
          "code": "D02",
          "title": "知识图谱",
          "tagline": "三元组、Neo4j / 图数据库、实体关系抽取、知识图谱构建、推理与补全。",
          "href": "./cards/data/knowledge_graph.html"
        },
        {
          "code": "D03",
          "title": "数据预处理",
          "tagline": "文档解析（PDF/HTML/表格）、OCR、数据清洗、格式统一、多模态数据处理。",
          "href": "./cards/data/data_preprocessing.html"
        },
        {
          "code": "D04",
          "title": "数据标注",
          "tagline": "标注工具 / 标注规范 / 众包质量控制、主动学习、弱监督、LLM 辅助标注。",
          "href": "./cards/data/data_annotation.html"
        },
        {
          "code": "D05",
          "title": "搜索引擎基础",
          "tagline": "倒排索引 / BM25 / TF-IDF、Elasticsearch / Lucene、语义搜索、Learning to Rank。",
          "href": "./cards/data/search_engine_fundamentals.html"
        },
        {
          "code": "D06",
          "title": "PDF 数据清洗（RAG 场景）",
          "tagline": "常规 PDF / 水印广告 / 表格提取 / 扫描版 OCR / 扫描版+水印广告导航栏，面向 RAG 的全链路清洗。",
          "href": "./cards/data/pdf_data_cleaning_rag.html"
        },
        {
          "code": "D07",
          "title": "知识图谱生产运维与质量评测",
          "tagline": "实体漂移·关系过时·结构失效三类退化 / 增量构图三条路径的代价不对称 / 合并为何是有损操作 / 五个图质量指标 / 三阶段评测与变更门禁。",
          "href": "./cards/data/knowledge_graph_operations.html"
        },
        {
          "code": "D08",
          "title": "知识图谱 + RAG + Agent 三重架构",
          "tagline": "滤网层 / 骨架层 / 大脑层的职责边界、调用时序与选型判断。",
          "href": "./cards/data/kg_rag_agent_architecture.html"
        }
      ]
    },
    {
      "label": "VI · 数据库层 (Database)",
      "cards": [
        {
          "code": "B01",
          "title": "关系型数据库",
          "tagline": "MySQL / PostgreSQL、索引原理（B+ Tree）、查询优化、事务 ACID、MVCC、连接池。",
          "href": "./cards/database/relational_database_guide.html"
        },
        {
          "code": "B02",
          "title": "NoSQL 数据库",
          "tagline": "MongoDB / DynamoDB / Cassandra、文档型/列族/键值、CAP 定理、选型决策矩阵。",
          "href": "./cards/database/nosql_database_guide.html"
        },
        {
          "code": "B03",
          "title": "Redis 与缓存",
          "tagline": "数据结构 / 持久化 / 集群 / 哨兵、缓存穿透/击穿/雪崩、分布式锁、Semantic Cache 集成。",
          "href": "./cards/database/redis_cache_guide.html"
        },
        {
          "code": "B04",
          "title": "图数据库",
          "tagline": "Neo4j / NebulaGraph、属性图模型、Cypher 查询、知识图谱存储、GraphRAG 数据层。",
          "href": "./cards/database/graph_database_guide.html"
        },
        {
          "code": "B05",
          "title": "时序数据库",
          "tagline": "InfluxDB / TimescaleDB / Prometheus TSDB、监控指标存储、AI 训练日志时序分析。",
          "href": "./cards/database/time_series_db.html"
        },
        {
          "code": "B06",
          "title": "数据管道与 ETL",
          "tagline": "Kafka / Flink / Spark、流批一体、CDC 变更捕获、AI 特征管道、数据湖（Iceberg/Delta）。",
          "href": "./cards/database/data_pipeline_guide.html"
        },
        {
          "code": "B07",
          "title": "AI 应用数据库选型",
          "tagline": "会话存储 / 记忆持久化 / 审计日志 / 向量+全文混合、多模型元数据管理、端到端选型指南。",
          "href": "./cards/database/database_for_ai.html"
        }
      ]
    }
  ],
  "production": [
    {
      "label": "I · 系统与架构 (System Architecture)",
      "cards": [
        {
          "code": "S01",
          "title": "LLM 后端设计",
          "tagline": "API Gateway / 负载均衡 / 流式输出（SSE）、多模型路由、限流熔断、幂等性设计。",
          "href": "./cards/architecture/llm_backend_design.html"
        },
        {
          "code": "S02",
          "title": "MLOps / LLMOps",
          "tagline": "模型版本管理、实验追踪（MLflow / W&B）、CI/CD for ML、模型注册、AB 发布。",
          "href": "./cards/architecture/mlops_guide.html"
        },
        {
          "code": "S03",
          "title": "LLM 可观测性",
          "tagline": "LangSmith / Langfuse / Phoenix、Trace 追踪、Token 用量监控、延迟分析、质量指标。",
          "href": "./cards/architecture/observability_llm.html"
        },
        {
          "code": "S04",
          "title": "AI 平台设计",
          "tagline": "企业 AI 平台架构、多租户、配额管理、模型市场、Prompt 管理、全链路设计。",
          "href": "./cards/architecture/ai_platform_design.html"
        },
        {
          "code": "S05",
          "title": "Kubernetes Pod 核心机制",
          "tagline": "最小调度单位 / Sidecar 模式 / 声明式配置 / 三种健康探针 / 资源控制与 QoS / 生产最佳实践。",
          "href": "./cards/architecture/kubernetes_pod_deep.html"
        },
        {
          "code": "S06",
          "title": "K8s 部署痛点与 Porter 解决方案",
          "tagline": "YAML编写门槛 / 三级故障排查 / 滚动更新风险 / 可视化控制台",
          "href": "./cards/architecture/k8s_porter.html"
        },
        {
          "code": "S07",
          "title": "AI 应用四层监控体系",
          "tagline": "流量门禁 / 行为围栏 / 状态雷达 / 价值天平 —— 每层拦什么、阈值怎么定。",
          "href": "./cards/architecture/ai_app_monitoring_layers.html"
        },
        {
          "code": "S08",
          "title": "LLM 推理网关",
          "tagline": "虚拟钥与项目预算 / 多厂商熔断 fallback / 语义缓存必须含模型与提示哈希 / 与 MCP 网关分家。",
          "href": "./cards/architecture/llm_inference_gateway.html"
        },
        {
          "code": "S09",
          "title": "容器化与镜像工程",
          "tagline": "namespace 与 cgroup 决定三条硬约束 / 层缓存失效让 COPY 顺序决定构建快慢 / 权重打不打进镜像的五维权衡 / nvidia-container-toolkit 怎么把 GPU 送进容器。",
          "href": "./cards/architecture/containerization_image_engineering.html"
        },
        {
          "code": "S10",
          "title": "Docker 还是 K8s：AI 应用部署形态选型",
          "tagline": "进程管理与控制循环的本质差异 / 收益按事件计而成本按月计 / 九行决策表 / 张量并行为何与无状态假设冲突。",
          "href": "./cards/architecture/docker_vs_k8s_deployment.html"
        },
        {
          "code": "S11",
          "title": "K8s 上运行 LLM 推理服务",
          "tagline": "GPU 整数资源不可超卖 / 权重交付四条路径的冷启动代价 / 启动探针预算算错就是重启循环 / 优雅退出怎么不截断流式响应。",
          "href": "./cards/architecture/k8s_llm_serving_practice.html"
        }
      ]
    },
    {
      "label": "II · 大模型部署与推理 (LLM Deployment)",
      "cards": [
        {
          "code": "DP01",
          "title": "大模型部署方案选型决策",
          "tagline": "云 API / 托管推理 / 自部署 / 混合四形态 · 合规-SLA-运维-成本四维过滤 / 盈亏平衡点三步推导 / 混合分流网关 / 五个常见误判。",
          "href": "./cards/deploy/deployment_decision_framework.html"
        },
        {
          "code": "DP02",
          "title": "显存估算与硬件配置",
          "tagline": "权重 / KV Cache / 激活值 / 框架开销四项总账公式 · GQA 压 KV 头 / 每 token KV 字节表 / 卡型承载对照 / vLLM 三参数与 OOM 七步排查。",
          "href": "./cards/deploy/vram_estimation_hardware.html"
        },
        {
          "code": "DP03",
          "title": "显存 OOM 与高并发故障处置",
          "tagline": "五类症状的指标指纹 / 发现·止损·定位·根因·固化·验证六步流程 / 三把止损闸刀的代价 / 四类场景对照表 / 七个参数速查 / 水位线与前兆告警。",
          "href": "./cards/deploy/inference_oom_incident_runbook.html"
        },
        {
          "code": "DP04",
          "title": "模型部署与 Serving",
          "tagline": "vLLM / TGI / TensorRT-LLM / Triton、GPU 资源管理、动态 Batching、多卡推理。",
          "href": "./cards/deploy/model_serving.html"
        },
        {
          "code": "DP05",
          "title": "大模型推理框架选型",
          "tagline": "vLLM PagedAttention / SGLang RadixAttention / TGI / llama.cpp GGUF、四框架总表与场景化决策。",
          "href": "./cards/deploy/inference_framework_selection.html"
        },
        {
          "code": "DP06",
          "title": "Ollama 与本地化部署",
          "tagline": "llama.cpp 内核之上的分发层 / Modelfile 与模型层 / NUM_PARALLEL 与 KEEP_ALIVE 换入换出 / GGUF 档位与混合卸载 / 对比 vLLM 与 LM Studio 的边界。",
          "href": "./cards/deploy/ollama_local_deployment.html"
        },
        {
          "code": "DP07",
          "title": "端侧部署",
          "tagline": "ONNX / CoreML / llama.cpp / MLC-LLM、小模型蒸馏、移动端优化、On-Device AI。",
          "href": "./cards/deploy/edge_deployment.html"
        },
        {
          "code": "DP08",
          "title": "KV Cache 与推理优化",
          "tagline": "自回归推理 / Prefill vs Decode / Continuous Batching / PagedAttention / 推测解码 / TTFT 与 TPS。",
          "href": "./cards/deploy/kv_cache_inference.html"
        },
        {
          "code": "DP09",
          "title": "KV Cache 显存优化",
          "tagline": "PagedAttention / GQA / MQA / KV 量化 / 窗口丢弃与 Attention Sink、四层策略叠加。",
          "href": "./cards/deploy/kv_cache_optimization.html"
        },
        {
          "code": "DP10",
          "title": "大模型推理性能瓶颈分析",
          "tagline": "访存墙 / 连续批处理 / 多卡并行 / KV 缓存膨胀 / 精度-性能权衡与生产案例。",
          "href": "./cards/deploy/inference_performance_bottleneck.html"
        },
        {
          "code": "DP11",
          "title": "Continuous Batching 与推理调度策略",
          "tagline": "静态批处理气泡 / 迭代级调度（Orca）/ waiting-running-preempted 队列与抢占 / Chunked Prefill / 调度旋钮与吞吐-延迟曲线 / 饥饿治理。",
          "href": "./cards/deploy/continuous_batching_scheduling.html"
        },
        {
          "code": "DP12",
          "title": "Prefill / Decode 分离架构",
          "tagline": "算力密集 vs 访存密集的冲突 / DistServe·Mooncake·Dynamo / KV 跨节点传输带宽账 / xPyD 配比 / TTFT 与 TPOT 的 SLA 拆分。",
          "href": "./cards/deploy/prefill_decode_disaggregation.html"
        },
        {
          "code": "DP13",
          "title": "模型量化",
          "tagline": "PTQ vs QAT、GPTQ / AWQ / GGUF / bitsandbytes、精度-速度-内存权衡与量化最佳实践。",
          "href": "./cards/deploy/quantization_guide.html"
        },
        {
          "code": "DP14",
          "title": "GPU 基础设施",
          "tagline": "GPU 架构（CUDA Core / Tensor Core）、NVLink / InfiniBand、GPU 集群、CUDA 编程基础。",
          "href": "./cards/deploy/gpu_infrastructure.html"
        },
        {
          "code": "DP15",
          "title": "国产芯片推理部署",
          "tagline": "昇腾 CANN·MindIE·vllm-ascend / 寒武纪·海光·摩尔线程四路线 / CUDA 迁移四类障碍 / 精度对齐与公平对标 / 混合集群分流。",
          "href": "./cards/deploy/domestic_chip_inference.html"
        },
        {
          "code": "DP16",
          "title": "推理服务压测方法论",
          "tagline": "TTFT / TPOT 与 ITL 的口径辨析 / 长度分布决定结论 / 吞吐-延迟曲线与饱和点 / bench serve·genai-perf·k6 选型 / 容量反推与八个陷阱。",
          "href": "./cards/deploy/inference_benchmark_methodology.html"
        },
        {
          "code": "DP17",
          "title": "Embedding 与 Rerank 模型部署",
          "tagline": "离线灌库与在线检索的双峰负载 / Encoder-only 为何用不上生成侧优化 / TEI·Infinity·ONNX 选型 / padding 税 / Cross-Encoder 延迟预算与共卡取舍。",
          "href": "./cards/deploy/embedding_rerank_serving.html"
        },
        {
          "code": "DP18",
          "title": "神经网络与大模型性能优化",
          "tagline": "算子融合 / MoE混合专家 / 大规模专家并行 / 集合通信HCCL。",
          "href": "./cards/deploy/llm_neural_network_optimization.html"
        },
        {
          "code": "DP19",
          "title": "GPU 算力瓶颈与优化",
          "tagline": "MFU指标 / GPU→互联→节点→集群四层瓶颈 / 80-20法则 / 通信优化。",
          "href": "./cards/deploy/gpu_compute_optimization.html"
        },
        {
          "code": "DP20",
          "title": "MiniMax-H3 云端自部署方案",
          "tagline": "33B 开源主干 / Context-IR 与 2K 仍托管 / 卡时 vs 按秒 / 约 1/8 成本账。",
          "href": "./cards/deploy/minimax_h3_self_host.html"
        },
        {
          "code": "DP21",
          "title": "投机解码的生产落地",
          "tagline": "接受率与接受长度 / EAGLE-3 与 Medusa-2 选型 / 草稿长度动态调节 / 长上下文退化 / vLLM 与 SGLang 踩坑。",
          "href": "./cards/deploy/speculative_decoding_production.html"
        },
        {
          "code": "DP22",
          "title": "MLA 推理服务",
          "tagline": "packed latent 缓存形态 / FlashMLA 后端 / prefix cache 何时必须关 / 与 PD 分离和 FP8 KV 叠加。",
          "href": "./cards/deploy/mla_serving.html"
        },
        {
          "code": "DP23",
          "title": "多 LoRA / Adapter 推理",
          "tagline": "一张底座多适配器 / 缓存键必须含 adapter id / 热加载与显存水位 / 底座升级的连坐回归。",
          "href": "./cards/deploy/multi_lora_serving.html"
        },
        {
          "code": "DP24",
          "title": "GPU 执行模型与存储层次",
          "tagline": "Kernel/Grid/Block/Warp 到硬件的映射 / SM 与 warp 调度器 / 寄存器-SRAM-L2-HBM 阶梯 / Occupancy 的真实定义 / 访存合并与 bank conflict / 四类瓶颈定位。",
          "href": "./cards/deploy/gpu_execution_model.html"
        },
        {
          "code": "DP25",
          "title": "GEMM 与 Tiling 分块优化",
          "tagline": "Transformer 的矩阵形状与 FLOPs 账 / naive GEMM 为何必然访存受限 / shared memory tile 与 register tile 定量推导 / MMA 与 wgmma 形状约束 / double buffering 与 split-K / TMA。",
          "href": "./cards/deploy/gemm_tiling_optimization.html"
        },
        {
          "code": "DP26",
          "title": "算子融合与 Kernel 优化实战",
          "tagline": "融合省的是 HBM 往返不是 FLOPs / 三类融合 / Inductor 与 TensorRT 与 TVM 的能力边界 / graph break / occupancy 与寄存器压力 / Nsight Compute 排查顺序。",
          "href": "./cards/deploy/kernel_fusion_optimization.html"
        },
        {
          "code": "DP27",
          "title": "TensorRT 与推理编译栈",
          "tagline": "编译式与解释式执行 / 构建流水线五阶段 / INT8 标定与 tactic 选优 / engine 强绑定与 CI 约束 / TensorRT-LLM 的 in-flight batching / ONNX opset 与动态 shape 的坑。",
          "href": "./cards/deploy/tensorrt_compilation_stack.html"
        }
      ]
    },
    {
      "label": "III · 评估与质量 (Evaluation)",
      "cards": [
        {
          "code": "EV01",
          "title": "评估与测试",
          "tagline": "LLM 评估框架、BLEU/ROUGE/BERTScore、LLM-as-Judge、Evals 设计、A/B 测试、回归测试。",
          "href": "./cards/engineering/evaluation_testing.html"
        },
        {
          "code": "EV02",
          "title": "RAG 评估与优化闭环",
          "tagline": "三层评估体系 + 五大检索优化策略 + 评估驱动闭环。先量化诊断瓶颈，再针对性优化。",
          "href": "./cards/rag/rag_evaluation_metrics.html"
        },
        {
          "code": "EV03",
          "title": "RAG 性能评估指标（实战篇）",
          "tagline": "三步落地评测：构建有业务分布的评测集 → 检索/生成分层指标 → 业务指标终极裁判，从指标反推问题根因。",
          "href": "./cards/rag/rag_evaluation_practice.html"
        },
        {
          "code": "EV04",
          "title": "Agent 评测指标与体系构建",
          "tagline": "任务完成度 / 工具使用准确性 / 推理效率 / 安全可控性 / 六大维度与三层判定 / 能力矩阵 / 评测集构建、SWE-Bench / WebArena / GAIA。",
          "href": "./cards/agent/agent_evaluation_metrics.html"
        },
        {
          "code": "EV05",
          "title": "RAG 重排序效果评估",
          "tagline": "离线/在线/成本三层评估框架、NDCG@K / Recall / Hit Rate / 命中增益、A/B 测试设计与常见陷阱。",
          "href": "./cards/rag/reranking_evaluation.html"
        },
        {
          "code": "EV06",
          "title": "Agent 性能量化体系",
          "tagline": "三层黄金指标（业务结果/执行轨迹/系统成本）、硬断言 + 软裁判评测流水线、Mock 隔离归因、Docker 保证可复现。",
          "href": "./cards/agent/agent_performance_quantification.html"
        },
        {
          "code": "EV07",
          "title": "Agent 评估六种互补工具",
          "tagline": "自动评估、生产监控、A/B 测试、用户反馈、人工审查、对话分析协同工作，避免单一指标造成虚假安全感。",
          "href": "./cards/agent/agent_evaluation_tools.html"
        },
        {
          "code": "EV08",
          "title": "Agent 评估体系八大核心要素",
          "tagline": "Trial、Task、Grader、Suite 到 Eval Run 与 Dashboard，搭建可追踪、可回归、可持续演进的评估底座。",
          "href": "./cards/agent/agent_evaluation_system.html"
        },
        {
          "code": "EV09",
          "title": "在线评测与发布门禁",
          "tagline": "离线金标 vs 线上抽样 / observation 级 judge / shadow 与 canary 晋升 / Judge 漂移与成本账。",
          "href": "./cards/engineering/online_eval_release_gate.html"
        }
      ]
    },
    {
      "label": "IV · 稳定性、成本与可靠性 (Reliability)",
      "cards": [
        {
          "code": "ST01",
          "title": "大模型输出稳定性保障",
          "tagline": "三层防御体系：输入预处理 + 结构化输出约束 + 后置校验兜底、RAG 知识增强、降级策略、从\"驯服模型\"到\"管理模型\"。",
          "href": "./cards/engineering/llm_output_stability.html"
        },
        {
          "code": "ST02",
          "title": "大模型幻觉原理、防御与运营闭环",
          "tagline": "概率引擎本质 / 六大根因 / 输入·生成·校验·运营四层防御 / 指标体系与商业运营闭环",
          "href": "./cards/engineering/llm_hallucination_defense.html"
        },
        {
          "code": "ST03",
          "title": "大模型 API 调用稳定性",
          "tagline": "告别 try-catch 裸奔，三层铁甲防线：智能重试、熔断降级、结果缓存，构建生产级容错体系。",
          "href": "./cards/engineering/api_stability.html"
        },
        {
          "code": "ST04",
          "title": "Token 成本优化",
          "tagline": "从单位经济模型出发做降本：缓存复用、模型路由、上下文压缩、长尾请求治理与成本观测。",
          "href": "./cards/engineering/token_cost_optimization.html"
        },
        {
          "code": "ST05",
          "title": "大模型 API 计费与 Token 成本核算",
          "tagline": "Token 与汉字估算 / 输入便宜输出贵 / 长上下文 O(n²) 与跳价 / 缓存命中算账 / 四种隐性成本 / 真实成本公式 = token × 单价 ÷ 成功率。",
          "href": "./cards/engineering/llm_api_billing.html"
        },
        {
          "code": "ST06",
          "title": "缓存策略",
          "tagline": "Prompt Cache / Semantic Cache / KV Cache 在商业系统中的收益、风险、版本隔离与灰度治理。",
          "href": "./cards/engineering/caching_strategies.html"
        },
        {
          "code": "ST07",
          "title": "意图识别三层漏斗架构",
          "tagline": "规则快速通道 → 微调小模型主分类 → 大模型语义兜底 + OOD 拒识，核心意图 Top1 准确率 94%+。",
          "href": "./cards/engineering/intent_recognition.html"
        },
        {
          "code": "ST08",
          "title": "多意图识别工程实践",
          "tagline": "Softmax 互斥缺陷 / Sigmoid 多二分类与 Focal Loss / PR 曲线动态阈值校准 / 状态机与 GNN 上下文管控 / 长尾与阈值漂移生产复盘。",
          "href": "./cards/engineering/multi_intent_recognition.html"
        },
        {
          "code": "ST09",
          "title": "AI 系统幂等设计",
          "tagline": "Redis SETNX + 状态机、Workflow 入口防重、Tool 副作用治理、TTL 与失败恢复，挡住 AI 请求的重复执行风暴。",
          "href": "./cards/engineering/ai_idempotency_guide.html"
        },
        {
          "code": "ST10",
          "title": "Prompt/Tool/Memory/Workflow 版本管理",
          "tagline": "Runtime Config 治理、Agent Snapshot、SemVer 在 AI 组件中的映射、灰度发布与模块级回滚。",
          "href": "./cards/engineering/version_management.html"
        },
        {
          "code": "ST11",
          "title": "高并发架构设计",
          "tagline": "多级缓存 / 限流算法 / 熔断降级 / 异步削峰 / 分布式锁 / 分库分表。",
          "href": "./cards/engineering/high_concurrency.html"
        },
        {
          "code": "ST12",
          "title": "AI 服务内存问题排查",
          "tagline": "四步排查法 / 五大高风险场景 / tracemalloc / 背压机制",
          "href": "./cards/engineering/ai_memory_troubleshooting.html"
        },
        {
          "code": "ST13",
          "title": "Replay 机制与故障复现",
          "tagline": "执行现场复现 / 黑匣子原理 / 故障诊断·回归测试·版本对比",
          "href": "./cards/engineering/replay_mechanism.html"
        },
        {
          "code": "ST14",
          "title": "软件开发质量三角",
          "tagline": "Writer·Reviewer·Verifier / 白盒→黑盒 / 产品行为验证",
          "href": "./cards/engineering/software_quality_triangle.html"
        },
        {
          "code": "ST15",
          "title": "人机协同方案设计",
          "tagline": "动态分工边界、三层协作架构（辅助→协作→自主）、Human-in-the-Loop 五种模式、信任校準量化、Copilot 工程化。",
          "href": "./cards/engineering/human_ai_collaboration.html"
        },
        {
          "code": "ST16",
          "title": "AI 开发方法论反思",
          "tagline": "Prompt 工程化 / Vibe Coding 陷阱 / 人机协作边界 / 开发者角色转变。",
          "href": "./cards/engineering/ai_dev_methodology.html"
        },
        {
          "code": "ST17",
          "title": "大模型流式传输五层方案与生产实战",
          "tagline": "为什么必须流式 / 四大协议选型 / SSE基础 / 断点续传三方案 / 客户端容灾 / WebSocket与心跳 / 生产级技术栈 / 能力评估",
          "href": "./cards/engineering/streaming_five_layers.html"
        },
        {
          "code": "ST18",
          "title": "Markdown 流式渲染实现",
          "tagline": "O(n²)→O(n)增量解析 / 不完整语法处理 / 分块渲染 / AST打字机",
          "href": "./cards/engineering/markdown_streaming_render.html"
        },
        {
          "code": "ST19",
          "title": "Graph Engineering 代码审查工程化",
          "tagline": "Loop 时代终结 / 三层节点架构（确定性验证器·语义审查·人工确认）/ 规则复用与快速反馈 / 渐进式引入策略。",
          "href": "./cards/engineering/ai_code_review_graph.html"
        },
        {
          "code": "ST20",
          "title": "消息队列长任务可靠执行",
          "tagline": "三大队列风险剖析 / 任务指针架构 / Outbox 解决双写 / 租约心跳与 fencing token 防僵尸 / 熔断·降级·续跑·回收四层防御。",
          "href": "./cards/engineering/mq_long_task_reliability.html"
        },
        {
          "code": "ST21",
          "title": "AI 代码生成与 Skill 调用监控",
          "tagline": "四流证据交叉比对 / OTel GenAI 语义与 Skill Span / 五层可观测架构 / 设计系统合规率门禁 / 分阶段落地路线。",
          "href": "./cards/engineering/ai_codegen_skill_monitoring.html"
        },
        {
          "code": "ST22",
          "title": "RocketMQ LiteTopic 与 AI 网关限流",
          "tagline": "固定窗口+漏桶的 LLM 限流选型 / 漏桶外置 MQ 缓冲 / 传统 Topic 三死穴 / LiteTopic 三招优化 / 百炼网关限流比降 10 倍 / AI 生图平台分级调度。",
          "href": "./cards/engineering/rocketmq_litertopic_rate_limiting.html"
        },
        {
          "code": "ST23",
          "title": "MQ 消费者分配策略：RocketMQ 与 Kafka 的负载均衡设计",
          "tagline": "切段·环形·一致性哈希·同机房四策略演进 / Kafka 客户端算账服务端跑腿 / Coordinator 与 Consumer Leader / ZK 抢锁到 KRaft Raft / Rebalance 风暴治理。",
          "href": "./cards/engineering/mq_consumer_allocation.html"
        },
        {
          "code": "ST24",
          "title": "AI Token 计费机制",
          "tagline": "输入/输出Token / 输出为何更贵 / 缓存命中 / 成本优化。",
          "href": "./cards/engineering/llm_token_pricing.html"
        },
        {
          "code": "ST25",
          "title": "AI 编程稳定交付工作流",
          "tagline": "Git 检查点 / AGENTS.md / MVP 边界 / Demo 决策 / 自测插件 / 人工验收。",
          "href": "./cards/engineering/ai_stable_delivery_workflow.html"
        },
        {
          "code": "ST26",
          "title": "规约驱动开发",
          "tagline": "规格作为跨会话长期上下文 / 提案-设计-任务-验收 / 规格漂移治理 / 何时不要上四件套。",
          "href": "./cards/engineering/spec_driven_development.html"
        },
        {
          "code": "ST27",
          "title": "CI/CD 流水线原理与设计",
          "tagline": "持续集成与持续部署不是同一件事 / 只有确定且可操作的信号才配阻断 / 制品不可变与一次构建多处部署 / 分支寿命决定冲突成本。",
          "href": "./cards/engineering/cicd_pipeline_design.html"
        },
        {
          "code": "ST28",
          "title": "CI/CD 工具链与 GitOps",
          "tagline": "选型实质是选谁持有生产凭据 / 控制平面与执行平面分离 / Argo CD 反直觉的同步默认值 / DORA 已从四项改为五项度量。",
          "href": "./cards/engineering/cicd_toolchain_gitops.html"
        },
        {
          "code": "ST29",
          "title": "AI 项目 CI/CD 的特殊代价",
          "tagline": "传统流水线的三条基石假设全部失效 / 层缓存对大权重几乎无效 / GPU 闲置与冷启动都贵所以没有中间态 / 回滚要重载权重，秒级回滚不成立。",
          "href": "./cards/engineering/ai_project_cicd.html"
        }
      ]
    },
    {
      "label": "V · 性能优化 (Performance)",
      "cards": [
        {
          "code": "P01",
          "title": "缓存穿透/击穿/雪崩 + Agent Prompt Cache",
          "tagline": "三大缓存故障 / 布隆过滤器 / 互斥锁 / 多级防御 / Agent Prompt Cache 五条原则。",
          "href": "./cards/engineering/cache_penetration.html"
        },
        {
          "code": "P02",
          "title": "WebSocket 与 SSE 技术对比",
          "tagline": "全双工 vs 半双工 / 协议握手与连接管理 / 负载均衡与集群差异 / 六大选型维度 / LLM 流式输出场景决策。",
          "href": "./cards/engineering/websocket_vs_sse.html"
        },
        {
          "code": "P03",
          "title": "AI 后端负责人的能力迁移路径",
          "tagline": "三大核心优势迁移 / 编排引擎选型（LangGraph vs Temporal vs MQ）/ 熔断限流与混沌测试 / 成本优化与转型路径。",
          "href": "./cards/engineering/ai_backend_performance.html"
        },
        {
          "code": "P04",
          "title": "Redis 缓存一致性实战",
          "tagline": "三种缓存更新模式 / 延时双删时序分析 / Redisson 分布式锁看门狗 / RocketMQ 重试 / Canal Binlog 订阅。",
          "href": "./cards/engineering/redis_cache_consistency.html"
        }
      ]
    },
    {
      "label": "VI · 安全与防护 (Security & Defense)",
      "cards": [
        {
          "code": "SEC01",
          "title": "Prompt 安全",
          "tagline": "Jailbreak 技法与检测 / System Prompt 泄露防护 / 三明治与边界标注等 Prompt 加固 / NeMo Guardrails。",
          "href": "./cards/security/prompt_security.html"
        },
        {
          "code": "SEC02",
          "title": "RAG 安全",
          "tagline": "数据投毒检测、检索结果过滤、引用来源验证、权限隔离与文档分级、敏感文档管控、上下文窗口溢出防护。",
          "href": "./cards/security/rag_security.html"
        },
        {
          "code": "SEC03",
          "title": "工具调用安全",
          "tagline": "FC / MCP 权限与供应链 / SQL·Shell·路径·SSRF 参数注入六层校验 / 工具链路四层审计与异常检测。",
          "href": "./cards/security/tool_call_security.html"
        },
        {
          "code": "SEC04",
          "title": "模型安全与对齐",
          "tagline": "对齐三层次 / Red Teaming 与 ASR / RLHF·DPO·Constitutional AI / 内容安全策略分级 / Guardrails 框架 / 对齐税。",
          "href": "./cards/security/model_safety_alignment.html"
        },
        {
          "code": "SEC05",
          "title": "Prompt 注入攻防与运营",
          "tagline": "多轮越狱与间接注入攻防剧本 / 防御有效性与局限 / 生产监控告警 / 攻击样本回归 / 四步应急响应。",
          "href": "./cards/security/prompt_injection_battle.html"
        },
        {
          "code": "SEC07",
          "title": "Agent 数据安全防护体系",
          "tagline": "输入/访问/输出三关 / PII 级联脱敏与误杀治理 / 工具白名单和行级越权防御 / 违规内容三道闸 / 审计闭环。",
          "href": "./cards/security/agent_data_security.html"
        },
        {
          "code": "SEC08",
          "title": "跨协议安全漏洞分析",
          "tagline": "组合安全悖论 / 五层安全框架 / MCP×A2A 最危险组合（9 义务 7 反例）/ 43 个孤儿控制项的责任真空 / 企业落地五条措施。",
          "href": "./cards/security/cross_protocol_security.html"
        },
        {
          "code": "SEC09",
          "title": "Agent Sandbox 架构",
          "tagline": "控制/执行/策略/发布四平面 / gVisor·MicroVM·Wasm 选型 / Egress 与任务级短期凭证 / 独立发布证据验证。",
          "href": "./cards/security/sandbox_architecture.html"
        },
        {
          "code": "SEC10",
          "title": "中小企业 AI 落地安全",
          "tagline": "五大真实需求 / 致命三要素攻击面模型 / 三重隐患（数据泄露·Skill注入·幽灵Agent）/ 三步安全评估与决策三问。",
          "href": "./cards/security/sme_ai_security_guide.html"
        },
        {
          "code": "SEC11",
          "title": "大模型安全防御策略",
          "tagline": "指令与数据不可分的架构缺陷 / 直接与间接注入 / Agent 特有风险 / 内容标注·工具熔断·安全网关·最小权限。",
          "href": "./cards/security/llm_security_defense.html"
        },
        {
          "code": "SEC13",
          "title": "AI Agent 沙箱与安全执行",
          "tagline": "VM/容器/MicroVM对比 / CubeSandbox架构 / 快照克隆 / 写时复制。",
          "href": "./cards/security/agent_sandbox.html"
        },
        {
          "code": "SEC14",
          "title": "RAG 多租户细粒度权限管控",
          "tagline": "分片夹带 / 权限放大 / 推理泄密 —— 从切分到生成的全链路权限闭环。",
          "href": "./cards/security/rag_multi_tenant_permission.html"
        },
        {
          "code": "SEC15",
          "title": "Agent 身份与多跳委托",
          "tagline": "人 → Agent → 工具的身份链 / RFC 8693 衰减 / MCP Gateway 作为 PEP / 秒级票与撤销级联。",
          "href": "./cards/security/agent_identity_delegation.html"
        }
      ]
    },
    {
      "label": "VII · 审计与治理 (Audit & Governance)",
      "cards": [
        {
          "code": "U01",
          "title": "AI 治理与合规",
          "tagline": "EU AI Act / 中国《生成式 AI 管理办法》/ ISO 42001、风险分级、合规检查清单、企业治理框架。",
          "href": "./cards/audit/ai_governance_compliance.html"
        },
        {
          "code": "U02",
          "title": "审计日志",
          "tagline": "Prompt/Response 完整记录、用户操作追踪、Token 用量归因、不可篡改日志、合规存储策略。",
          "href": "./cards/audit/audit_logging.html"
        },
        {
          "code": "U03",
          "title": "审计回放",
          "tagline": "对话链路回放、决策过程还原、Agent 行为轨迹重现、时间线可视化、事故根因分析。",
          "href": "./cards/audit/audit_replay.html"
        },
        {
          "code": "U04",
          "title": "模型可解释性",
          "tagline": "SHAP / LIME / Integrated Gradients、Attention 可视化、特征归因、LLM 推理链解释。",
          "href": "./cards/audit/explainability_guide.html"
        },
        {
          "code": "U05",
          "title": "公平性与偏差检测",
          "tagline": "Fairness Metrics / Bias Audit、数据偏差 / 模型偏差、去偏策略、Aequitas / Fairlearn 工具。",
          "href": "./cards/audit/fairness_bias.html"
        },
        {
          "code": "U06",
          "title": "Model Card 与数据文档",
          "tagline": "Model Cards / Datasheets for Datasets、模型能力边界声明、风险披露、版本追踪。",
          "href": "./cards/audit/model_card_datasheets.html"
        },
        {
          "code": "U07",
          "title": "AI 风险评估",
          "tagline": "风险分类矩阵、影响评估、Red Team 审计报告、持续监控告警、应急响应预案。",
          "href": "./cards/audit/risk_assessment.html"
        },
        {
          "code": "U08",
          "title": "数据隐私与脱敏",
          "tagline": "PII 检测与脱敏、差分隐私、联邦学习、GDPR / 个保法合规、训练数据溯源。",
          "href": "./cards/audit/data_privacy.html"
        }
      ]
    }
  ],
  "deep": [
    {
      "label": "I · 专题指南 (Guides)",
      "cards": [
        {
          "code": "TG01",
          "title": "Cache 全景指南",
          "tagline": "从 GPU 显存到业务层：KV Cache / Prompt Cache / Semantic Cache / Redis 缓存全链路解析，三层缓存体系、五大原则、生产案例汇总。",
          "href": "./cards/deep-dives/cache_complete_guide.html"
        },
        {
          "code": "TG02",
          "title": "Prompt 全链路指南",
          "tagline": "从基础认知到生产级 Prompt 工程：五层资产模型、场景化设计、Prompt vs Context 工程、高阶技巧、Agent Prompt 优化、安全与评估、Prompt 工程化管理方法论。",
          "href": "./cards/deep-dives/prompt_complete_guide.html"
        },
        {
          "code": "TG03",
          "title": "AI 应用全链路性能评测指南",
          "tagline": "四维评测模型 + 分模块评测（RAG/Agent/Prompt/系统层）+ 分段延迟采集 + MockLLM/RealLLM 双轨压测 + CI/CD 质量门禁 + 上线后持续评测模式，聚合 10 张知识卡片 + 6 篇社区文章。",
          "href": "./cards/deep-dives/performance_evaluation_guide.html"
        },
        {
          "code": "TG04",
          "title": "AI Token 节省与优化完全指南",
          "tagline": "从 Token 机制到系统级降本：Prompt 压缩（74%）/ 三级缓存（拦截 40%~60%）/ 推理加速（PagedAttention+量化）/ 上下文工程（Token 降 72%）/ 模型路由（降本 25%~70%）/ 预算熔断，六层优化体系全景解析，聚合 22 张知识卡片 + 4 篇社区文章。",
          "href": "./cards/deep-dives/token_optimization_guide.html"
        }
      ]
    },
    {
      "label": "II · Agent 框架案例 (Agent Cases)",
      "cards": [
        {
          "code": "HC01",
          "title": "Claude Code 架构设计",
          "tagline": "五层架构拆解、八种上下文注入、六种编排模式、Task/Goal 状态外置、Compaction 与 System Reminder。三篇文章合并，从设计哲学到工程实践全覆盖。",
          "href": "./cards/topics/claude_code_source_architecture.html"
        },
        {
          "code": "HC02",
          "title": "Claude Code 源码实现决策",
          "tagline": "从源码实现讲透 7 个核心模块：三段启动链路、进程/交互状态分层、QueryDeps 最小接口、7 种 transition 恢复、5 种 Agent 类型、fork vs fresh、三级压缩管道。",
          "href": "./cards/topics/claude_code_source_decisions.html"
        },
        {
          "code": "HC03",
          "title": "Claude Code 架构进化",
          "tagline": "设计哲学、渐进式披露、工具设计教训、提示缓存优化 — 从 Claude Code 迭代中提炼 Agent 框架设计心法。",
          "href": "./cards/topics/claude_code_evolution.html"
        },
        {
          "code": "HC04",
          "title": "Agentic Coding 模式",
          "tagline": "Claude Code 架构揭秘 / Cursor vs Windsurf / CLAUDE.md 约定 / Background Agent / Subagent 并行。",
          "href": "./cards/topics/agentic_coding_patterns.html"
        },
        {
          "code": "HC05",
          "title": "Agent 时代的 CLI 路线：命令行工具演进",
          "tagline": "Terminal/Shell/CLI 三概念辨析 / Agent 时代 CLI 回归的工程原因 / GUI 没有输 / Agent 友好 CLI 设计六条清单 / 窄腰层与三层分工。",
          "href": "./cards/topics/claude_code_cli_history.html"
        },
        {
          "code": "HC06",
          "title": "CLAUDE.md 编写规范：项目记忆与上下文管理",
          "tagline": "与 README/Prompt/Memory 的区别 / 四级存放位置 / 该写六类与不该写五类 / 短准硬写法正反例 / 大项目拆分与上下文算账。",
          "href": "./cards/topics/claude_md_writing_guide.html"
        },
        {
          "code": "HC07",
          "title": "Anthropic 大规模代码迁移方法论",
          "tagline": "规模与结果 / 为什么代码迁移适合多 Agent / 先造机械裁判 / 六步迁移流水线 / 成本收益算账 / 别修代码，修产生代码的循环。",
          "href": "./cards/topics/claude_code_large_migration.html"
        },
        {
          "code": "HC08",
          "title": "Claude Code 动态工作流：运行时生成 Harness",
          "tagline": "单上下文三大失败模式 / 工作流是真代码不是提示词 / 六种可复用编排模式 / 触发、监控、恢复与沉淀 / 适用边界与 token 成本。",
          "href": "./cards/topics/claude_code_dynamic_workflows.html"
        },
        {
          "code": "HC09",
          "title": "Claude Managed Agents：决策与执行分离",
          "tagline": "Agent 跑法演进 / 旧架构三宗罪 / 大脑与双手拆开 / Agents·Environments·Sessions 三资源模型 / harness 追着模型改的一手教训。",
          "href": "./cards/topics/claude_managed_agents.html"
        },
        {
          "code": "HC10",
          "title": "Claude Code 入门指南",
          "tagline": "安装配置 / 核心命令 / 自定义命令 / CLAUDE.md / 模型选择 / 高级用法。",
          "href": "./cards/topics/claude_code_complete_guide.html"
        },
        {
          "code": "HC11",
          "title": "Claude Code 长时自治运行与 GLM 5.2",
          "tagline": "子代理拆解 / 自动压缩 / 后台长任务 / 记忆沉淀 / 运行时决定长跑上限。",
          "href": "./cards/topics/claude_code_glm52_long_run.html"
        },
        {
          "code": "HC12",
          "title": "Claude Code Tool Search 动态工具加载",
          "tagline": "延迟加载名单 / 三步取回 schema / 提示词缓存保全 / 与 RAG 式工具检索的取舍。",
          "href": "./cards/topics/claude_code_tool_search.html"
        },
        {
          "code": "HM01",
          "title": "Hermes Agent 架构与实现",
          "tagline": "KEPA 闭环、四层记忆、10 层提示词组装、ToolEntry 厚数据模型、五层纵深防御、Harness 运行时。从源码到设计思维的完整拆解。",
          "href": "./cards/topics/hermes_agent_architecture.html"
        },
        {
          "code": "HD01",
          "title": "DeerFlow 架构",
          "tagline": "ByteDance 开源 Super Agent Harness：LangGraph 图编排、11 层中间件、Sub-Agent 并行调度、Skills 渐进式加载、三层记忆、沙箱执行。",
          "href": "./cards/topics/deerflow_architecture.html"
        },
        {
          "code": "HD02",
          "title": "DeerFlow 源码实现",
          "tagline": "逐模块源码拆解：Config 17 子配置 + 热重载、14 层 Middleware 洋葱模型、10 层 System Prompt 解剖、SubAgent 6 种状态并发引擎、Sandbox 三层抽象、三级记忆架构、断点续跑五层机制。",
          "href": "./cards/topics/deerflow_source_deep.html"
        },
        {
          "code": "HO01",
          "title": "OpenClaw 架构与实现",
          "tagline": "源码级深度拆解：四层架构、三级记忆系统（工作/情景/语义）、Gateway-Pi 执行链路（云端大脑+本地肢体）、Cell Isolation 沙箱、混合搜索（向量+BM25+MMR）、多 Agent 7 层路由、自进化机制、架构优势与挑战。",
          "href": "./cards/topics/openclaw_architecture_deep.html"
        }
      ]
    },
    {
      "label": "III · 源码拆解 (Source Reading)",
      "cards": [
        {
          "code": "SR01",
          "title": "Trae Agent 架构全链路深度解析",
          "tagline": "从 Agent 架构设计到全链路实现：核心组件、调度流程、工具编排、上下文管理、多 Agent 协作机制深度拆解，适合 AI Agent 开发者系统学习。",
          "href": "./cards/deep-dives/trae_agent_architecture.html"
        },
        {
          "code": "SR02",
          "title": "OpenClaw 架构全链路深度解析",
          "tagline": "以 Gateway 为单一控制面、持久 Session 为连续性主轴的个人 AI Assistant Runtime 源码级解析：五大运行平面、Channel 消息链、Agent Runtime、Context/Memory、工具安全与沙箱、Cron 自动化与跨设备 Node 执行，21 章 + Q&A。",
          "href": "./cards/deep-dives/openclaw_architecture.html"
        },
        {
          "code": "SR03",
          "title": "LangGraph 架构深度解析",
          "tagline": "从 StateGraph DSL、Channel 状态模型到 Pregel 超级步运行时，系统拆解 Durable Execution、Checkpoint、Interrupt/Resume、Streaming、ToolNode、SDK 与部署边界。",
          "href": "./cards/deep-dives/langgraph_architecture.html"
        },
        {
          "code": "SR04",
          "title": "Software Agent SDK 架构深度解析",
          "tagline": "OpenHands SDK 源码级拆解 · 事件树运行时 · 上下文工程 · Agent Server。",
          "href": "./cards/deep-dives/software_agent_architecture.html"
        },
        {
          "code": "SR05",
          "title": "SWE-agent 架构深度解析",
          "tagline": "Agent-Computer Interface · Retry/Reviewer 质量外环 · 轨迹可观测 · SWE-bench 批跑。",
          "href": "./cards/deep-dives/swe_agent_architecture.html"
        },
        {
          "code": "SR06",
          "title": "Hermes Agent 架构深度解析",
          "tagline": "窄腰多表面 Runtime · 长会话与记忆 · 自治任务 · 自进化闭环。",
          "href": "./cards/deep-dives/hermes_agent_architecture_sharing.html"
        },
        {
          "code": "SR07",
          "title": "DeepSeek Harness 深度架构解析",
          "tagline": "Cordis 插件内核 · Event-sourced Session · Turn/Step Agent Loop · 能力接缝 · 同核多产品面。",
          "href": "./cards/deep-dives/deepseek_harness_architecture.html"
        }
      ]
    }
  ],
  "career": [
    {
      "label": "职业与认知 (Career & Cognition)",
      "cards": [
        {
          "code": "H01",
          "title": "AI 编程新范式",
          "tagline": "已知/未知矩阵 / 重心迁移 / 开发者四重新定位 / 低成本探索。",
          "href": "./cards/career/ai_programming_paradigm.html"
        },
        {
          "code": "H02",
          "title": "AI 时代专业知识的价值",
          "tagline": "知识贬值 vs 知识升维 / 不可替代性 / 人机协作新范式。",
          "href": "./cards/career/ai_era_professional_knowledge.html"
        },
        {
          "code": "H03",
          "title": "AI 时代编程学习的本质",
          "tagline": "心智模型 / 认知悖论 / 必要难度理论 / 人才管道危机。",
          "href": "./cards/career/ai_programming_learning.html"
        },
        {
          "code": "H04",
          "title": "AI 编程与老程序员优势",
          "tagline": "AI 局限边界 / 全息思维 / 经验沉淀 / 执行工具+决策中枢。",
          "href": "./cards/career/senior_developer_advantages.html"
        },
        {
          "code": "H05",
          "title": "AI 时代的开发者能力重建",
          "tagline": "K 型分化 / Ralph Loop / 验证技术跃迁 / 能力重建三阶段。",
          "href": "./cards/career/ai_developer_survival_guide.html"
        },
        {
          "code": "H06",
          "title": "AI 时代代码审查新挑战",
          "tagline": "缺陷率 9%→54% / 意图丢失 / 五级解决方案 / 审查者角色重构。",
          "href": "./cards/career/ai_code_review_challenges.html"
        },
        {
          "code": "H07",
          "title": "AI 产品设计工具 Paraflow",
          "tagline": "AI 原生画布 / 一句话生成 PRD / 智能体工作流 / 效率提升 20 倍。",
          "href": "./cards/career/paraflow_product_design.html"
        },
        {
          "code": "H08",
          "title": "AI 数据悖论：从生数据到高质量数据集",
          "tagline": "Model Collapse 论文精读 / 替换 vs 累积策略 / 合成数据质量陷阱 / 数据飞轮 vs 数据债务 / 高质量数据建设四阶段路线图。",
          "href": "./cards/career/ai_data_paradox.html"
        },
        {
          "code": "H09",
          "title": "AI 求职误区与解决方案",
          "tagline": "Demo vs 生产 / 四大能力差距 / 数据升级·工程强化·系统打通。",
          "href": "./cards/career/ai_job_seeking_pitfalls.html"
        },
        {
          "code": "H10",
          "title": "AI 岗位核心能力图谱",
          "tagline": "六大评估维度 / 技术栈全景（深度学习·NLP·CV·大模型应用）/ Agent 与 GraphRAG 前沿技术 / 业务理解与准备策略。",
          "href": "./cards/career/ai_job_interview_essentials.html"
        },
        {
          "code": "H11",
          "title": "AI 开发岗招聘现状与职业路径",
          "tagline": "市场现状与结构性分化 / 四大热门岗位画像 / LLM 应用 vs 算法研究员能力模型 / 转型策略与长期发展。",
          "href": "./cards/career/ai_dev_career_path.html"
        }
      ]
    }
  ],
  "python": [
    {
      "label": "I · 零基础入门 (Getting Started)",
      "cards": [
        {
          "code": "PY01",
          "title": "Python 环境与解释器",
          "tagline": "CPython 执行链路 / 版本选型与支持窗口 / uv 装解释器 / 虚拟环境原理 / python -m 的真实差别。",
          "href": "./cards/python/py_environment_interpreter.html"
        },
        {
          "code": "PY02",
          "title": "变量与内置类型",
          "tagline": "名字绑定与对象模型 / 任意精度整数与 IEEE 754 / 不可变性与单例 / 小整数缓存与字符串驻留。",
          "href": "./cards/python/py_variables_builtin_types.html"
        },
        {
          "code": "PY03",
          "title": "容器四件套",
          "tagline": "list / tuple / dict / set 的取舍 / 动态数组扩容 / 哈希表原理 / 复杂度对照 / collections 实用组件。",
          "href": "./cards/python/py_containers_overview.html"
        },
        {
          "code": "PY04",
          "title": "控制流与真值判断",
          "tagline": "falsy 完整清单与判定机制 / for 的取值过程 / for-else 的真实语义 / 短路兜底陷阱 / match-case。",
          "href": "./cards/python/py_control_flow.html"
        },
        {
          "code": "PY05",
          "title": "函数入门与参数传递",
          "tagline": "传对象引用的真实语义 / 四类参数与分隔符 / 可变默认值陷阱 / LEGB 作用域链 / 类型注解入门。",
          "href": "./cards/python/py_functions_basics.html"
        },
        {
          "code": "PY06",
          "title": "字符串与编码",
          "tagline": "str 与 bytes 的边界 / UTF-8 为什么赢了 / 两类 Unicode 报错的读法 / f-string 格式规格 / 拼接的 O(n²) 陷阱。",
          "href": "./cards/python/py_strings_encoding.html"
        },
        {
          "code": "PY07",
          "title": "文件读写与异常处理",
          "tagline": "open 的模式矩阵与编码陷阱 / with 与资源释放 / 惰性逐行读取 / pathlib 与工作目录 / 异常层次与 try 四分支。",
          "href": "./cards/python/py_files_exceptions.html"
        },
        {
          "code": "PY08",
          "title": "模块、包与项目结构",
          "tagline": "import 的三步机制与 sys.modules 缓存 / 命名空间与遮蔽 / 相对导入 / 入口守卫 / 循环导入与 src layout。",
          "href": "./cards/python/py_modules_packages.html"
        }
      ]
    },
    {
      "label": "II · 语言核心与数据模型 (Data Model)",
      "cards": [
        {
          "code": "PY09",
          "title": "对象模型与引用语义",
          "tagline": "身份/类型/值三件套 / 名字绑定与引用计数 / 可变性分界线 / is 与 == / eq 与 hash 的联合契约。",
          "href": "./cards/python/py_object_model.html"
        },
        {
          "code": "PY10",
          "title": "拷贝语义与共享状态陷阱",
          "tagline": "赋值不是拷贝 / 浅拷贝只拷一层 / 共享状态的四类事故 / deepcopy 的真实代价 / 不可变优先。",
          "href": "./cards/python/py_copy_semantics.html"
        },
        {
          "code": "PY11",
          "title": "序列协议与切片",
          "tagline": "协议方法与语言特性的映射 / 负索引与越界责任 / slice 对象与静默裁剪 / memoryview 零拷贝。",
          "href": "./cards/python/py_sequence_protocol.html"
        },
        {
          "code": "PY12",
          "title": "迭代器与生成器协议",
          "tagline": "for 循环的展开过程 / 迭代器的状态与耗尽 / yield 挂起与恢复 / 惰性的收益与代价 / itertools 管道。",
          "href": "./cards/python/py_iterators_generators.html"
        },
        {
          "code": "PY13",
          "title": "推导式与惰性求值",
          "tagline": "四种推导式的统一结构 / 快在哪里与快多少 / 多重 for 的嵌套顺序 / 作用域与延迟绑定 / 何时拆回循环。",
          "href": "./cards/python/py_comprehensions_lazy.html"
        },
        {
          "code": "PY14",
          "title": "可变参数、闭包与装饰器",
          "tagline": "打包与解包的对称性 / 单元对象与自由变量 / 延迟绑定事故 / 装饰器三层结构 / wraps 与元信息。",
          "href": "./cards/python/py_closures_decorators.html"
        },
        {
          "code": "PY15",
          "title": "类与特殊方法契约",
          "tagline": "属性查找的读写不对称 / new 与 init 的分工 / repr 与 str 的受众差异 / 相等与哈希契约 / slots 的真实收益。",
          "href": "./cards/python/py_classes_dunder.html"
        },
        {
          "code": "PY16",
          "title": "继承、MRO 与组合优先",
          "tagline": "属性查找链与脆弱基类 / C3 线性化与 mro / super() 的真实语义 / 多继承四类故障 / 混入与抽象基类。",
          "href": "./cards/python/py_inheritance_mro.html"
        }
      ]
    },
    {
      "label": "III · 高阶特性 (Advanced Features)",
      "cards": [
        {
          "code": "PY17",
          "title": "描述符协议与 property",
          "tagline": "属性访问的完整解析路径 / property 的演化友好性 / 数据与非数据描述符的优先级 / set_name 与存储位置。",
          "href": "./cards/python/py_descriptors_property.html"
        },
        {
          "code": "PY18",
          "title": "元类与类创建钩子",
          "tagline": "类是元类的实例 / 类创建的六步流程 / init_subclass 与 set_name / 元类冲突的代价 / 类装饰器选型路径。",
          "href": "./cards/python/py_metaclasses.html"
        },
        {
          "code": "PY19",
          "title": "上下文管理器与 contextlib",
          "tagline": "with 的等价展开 / exit 返回值与异常传播 / 生成器写法的控制流 / ExitStack / 逆序释放与一次性陷阱。",
          "href": "./cards/python/py_context_managers.html"
        },
        {
          "code": "PY20",
          "title": "类型注解与静态检查",
          "tagline": "注解的运行时地位 / 语法速查 / 泛型与型变 / mypy 与 pyright 落地 / 静态检查与入口校验的边界。",
          "href": "./cards/python/py_type_hints.html"
        },
        {
          "code": "PY21",
          "title": "数据类三选一",
          "tagline": "dataclass / pydantic / attrs 的分工 / 自动生成了什么 / 为什么注解不等于校验 / 边界校验与内层不可变的分层写法。",
          "href": "./cards/python/py_dataclasses.html"
        },
        {
          "code": "PY22",
          "title": "枚举与 Protocol",
          "tagline": "Enum 家族选型 / 别名与 missing 陷阱 / 名义与结构子类型 / Protocol 的依赖倒置用法。",
          "href": "./cards/python/py_enum_protocol.html"
        },
        {
          "code": "PY23",
          "title": "内存模型与垃圾回收",
          "tagline": "引用计数与分代 GC 的分工 / 循环引用与弱引用 / 内存池与碎片 / slots 与生成器 / tracemalloc 排查流程。",
          "href": "./cards/python/py_memory_gc.html"
        },
        {
          "code": "PY24",
          "title": "异常体系设计",
          "tagline": "异常与返回值的分工 / 自定义异常层次 / 分层处理与转译 / from 的三种形态 / 快速失败判据与重试边界。",
          "href": "./cards/python/py_exception_design.html"
        }
      ]
    },
    {
      "label": "IV · 并发与异步 (Concurrency & Asyncio)",
      "cards": [
        {
          "code": "PY25",
          "title": "全局解释器锁与自由线程",
          "tagline": "GIL 保护的到底是什么 / 四类负载的真实加速比 / 线程·进程·异步的选型判据 / 自由线程构建的代价清单。",
          "href": "./cards/python/py_gil_free_threading.html"
        },
        {
          "code": "PY26",
          "title": "多线程与 I/O 密集任务",
          "tagline": "等待时间才是优化对象 / 线程池与 as_completed / 竞态与加锁纪律 / 并发度怎么反推出来。",
          "href": "./cards/python/py_threading_io.html"
        },
        {
          "code": "PY27",
          "title": "多进程与 CPU 密集任务",
          "tagline": "进程隔离换来真并行 / spawn·fork·forkserver 与 3.14 的默认变更 / chunksize / 序列化才是真正的瓶颈。",
          "href": "./cards/python/py_multiprocessing.html"
        },
        {
          "code": "PY28",
          "title": "事件循环与异步基础",
          "tagline": "线程模型的天花板 / 一轮事件循环的五步 / async 与 await 的确切语义 / 阻塞调用与循环延迟。",
          "href": "./cards/python/py_asyncio_eventloop.html"
        },
        {
          "code": "PY29",
          "title": "协程、任务与 Future",
          "tagline": "协程对象不会自己跑 / Task 才是被调度的单位 / 事件循环只持弱引用 / 异常停在 Task 上等人来取。",
          "href": "./cards/python/py_coroutines_tasks.html"
        },
        {
          "code": "PY30",
          "title": "并发编排：gather 与 TaskGroup",
          "tagline": "四个原语的形状对照 / gather 的顺序保证与孤儿任务 / TaskGroup 与结构化并发 / as_completed 的首字延迟。",
          "href": "./cards/python/py_task_orchestration.html"
        },
        {
          "code": "PY31",
          "title": "取消、超时与并发限流",
          "tagline": "失控的三种形态 / 取消是协作式的 / 分层超时预算 / 信号量与令牌桶不是一回事 / 退避抖动与 Retry-After。",
          "href": "./cards/python/py_cancel_timeout_ratelimit.html"
        },
        {
          "code": "PY32",
          "title": "异步队列与生产者消费者",
          "tagline": "速率解耦与反压 / Queue 的核心语义 / 消费者流水线骨架 / 两种优雅关闭 / 不丢任务的错误纪律。",
          "href": "./cards/python/py_asyncio_queue.html"
        },
        {
          "code": "PY33",
          "title": "同步与异步的互通",
          "tagline": "四种互通方向 / to_thread 与默认线程池 / CPU 密集只能进程池 / 跨线程提交协程 / 异步边界划在哪。",
          "href": "./cards/python/py_executor_bridge.html"
        },
        {
          "code": "PY34",
          "title": "异步调试与故障排查",
          "tagline": "堆栈不再等于因果链 / 四条告警的真实含义 / 调试模式与 -X dev / 挂起任务的栈定位 / contextvars 与关联标识。",
          "href": "./cards/python/py_async_debugging.html"
        },
        {
          "code": "PY35",
          "title": "异步上下文管理器与异步迭代",
          "tagline": "获取与释放本身也是 I/O / async with 与 asynccontextmanager / async for 与流式消费 / 异步生成器的清理难题。",
          "href": "./cards/python/py_async_context_generators.html"
        }
      ]
    },
    {
      "label": "V · 工程化 (Engineering)",
      "cards": [
        {
          "code": "PY36",
          "title": "依赖管理的问题域与 uv",
          "tagline": "依赖管理的五个子问题 / 碎片化本身就是成本 / uv 的统一模型与性能来源 / 项目接口与兼容接口的分界。",
          "href": "./cards/python/py_uv_intro.html"
        },
        {
          "code": "PY37",
          "title": "pyproject.toml 与依赖声明",
          "tagline": "一个文件取代一堆文件 / 三个表区各管什么 / 约束写法与库应用之别 / 三类依赖分组 / 私有源的风险。",
          "href": "./cards/python/py_pyproject_deps.html"
        },
        {
          "code": "PY38",
          "title": "锁文件与可复现安装",
          "tagline": "声明是意图、锁是事实 / 依赖解析的搜索与回溯 / 跨平台通用锁与环境标记 / 可复现到哪一层为止。",
          "href": "./cards/python/py_lockfile_reproducible.html"
        },
        {
          "code": "PY39",
          "title": "CI 中的可复现与缓存",
          "tagline": "固定输入与可丢弃缓存的分界 / --locked 与 --frozen 的确切语义 / 缓存键设计 / 矩阵的成本与收敛。",
          "href": "./cards/python/py_ci_reproducible.html"
        },
        {
          "code": "PY40",
          "title": "容器镜像与部署",
          "tagline": "镜像固定了什么 / 层缓存与构建顺序 / 基础镜像选型 / 多阶段构建 / 运行时安全与部署纪律。",
          "href": "./cards/python/py_docker_image.html"
        },
        {
          "code": "PY41",
          "title": "pytest 与测试工程化",
          "tagline": "测试的价值在于支持改动 / 锁契约不锁实现 / fixture 作用域与状态泄漏 / 替身只替进程边界 / 覆盖率看增量。",
          "href": "./cards/python/py_pytest_engineering.html"
        },
        {
          "code": "PY42",
          "title": "性能剖析与优化",
          "tagline": "先测量再优化 / 指标、基线与目标 / 剖析工具的粒度与开销 / 六层优先顺序 / 微优化的边界。",
          "href": "./cards/python/py_profiling_optimization.html"
        },
        {
          "code": "PY43",
          "title": "日志与可观测性",
          "tagline": "三类信号的分工 / 记录器与传播机制 / 字段化与惰性格式化 / 关联标识贯穿全链路 / 采样与成本。",
          "href": "./cards/python/py_logging_observability.html"
        },
        {
          "code": "PY44",
          "title": "打包、发布与版本管理",
          "tagline": "源码包与轮子的真实差别 / 构建后端与隔离构建 / 语义化版本承诺的是公开 API / 不可撤销的版本号。",
          "href": "./cards/python/py_packaging_release.html"
        },
        {
          "code": "PY45",
          "title": "调试工具箱与排查方法",
          "tagline": "收敛式排查流程 / 回溯与异常链的读法 / breakpoint 与事后调试 / 不能打断点时的手段 / 工程化收束。",
          "href": "./cards/python/py_debugging_toolbox.html"
        }
      ]
    },
    {
      "label": "VI · AI 领域 Python (Python for AI)",
      "cards": [
        {
          "code": "PY46",
          "title": "NumPy 核心：数组、dtype 与轴",
          "tagline": "列表与数组差在哪两层 / dtype 的性能与陷阱 / 轴与 keepdims 的心智模型 / 视图与拷贝的分界 / 向量化的内存代价。",
          "href": "./cards/python/py_numpy_basics.html"
        },
        {
          "code": "PY47",
          "title": "广播规则与形状操作",
          "tagline": "不复制数据的形状对齐 / 三条规则的逐维推演 / None 与 keepdims 这两个开关 / 中间结果的内存估算 / 形状断言与 bug 定位。",
          "href": "./cards/python/py_numpy_broadcasting.html"
        },
        {
          "code": "PY48",
          "title": "数值稳定性与对数域计算",
          "tagline": "浮点的三个后果 / 溢出与下溢的判据 / 稳定 softmax 的恒等变形 / logsumexp 与对数域 / 非数值检测与极端输入测试。",
          "href": "./cards/python/py_numerical_stability.html"
        },
        {
          "code": "PY49",
          "title": "Pandas 核心模型与陷阱",
          "tagline": "索引对齐是一切行为的起点 / loc 与 iloc 和链式赋值 / dtype 决定内存与速度 / 分组的三类操作 / 合并的行数放大。",
          "href": "./cards/python/py_pandas_core.html"
        },
        {
          "code": "PY50",
          "title": "Polars 惰性执行与流式处理",
          "tagline": "列式布局与多线程 / 表达式与上下文 / 查询计划与两种下推 / 流式引擎与静默回退 / 生态互通与选型判据。",
          "href": "./cards/python/py_polars_lazy.html"
        },
        {
          "code": "PY51",
          "title": "PyTorch 张量的工程要点",
          "tagline": "设备统一与异步同步 / dtype 与混合精度 / 梯度开关与显存 / NumPy 互操作与复制 / 可复现与三步排查。",
          "href": "./cards/python/py_pytorch_tensors.html"
        },
        {
          "code": "PY52",
          "title": "数据集与数据加载管道",
          "tagline": "先量出瓶颈在数据侧还是计算侧 / 映射式与迭代式两种抽象 / 批次拼接、填充与掩码 / 多进程加载的机制与四类坑 / 供给优化的收益顺序。",
          "href": "./cards/python/py_dataloader_pipeline.html"
        },
        {
          "code": "PY53",
          "title": "用 Pydantic 约束大模型输出",
          "tagline": "模型输出是不可信输入 / 一份定义同时是校验器与格式说明 / 错误要能定位到字段路径 / 修复循环的三条纪律 / 宽严边界与兜底取值。",
          "href": "./cards/python/py_pydantic_llm_contract.html"
        },
        {
          "code": "PY54",
          "title": "大模型客户端的三种调用模式",
          "tagline": "调用特性与超时预算 / 同步的线程代价 / 异步的并发上限反推 / 流式的首字延迟 / 流式带来的四个新问题。",
          "href": "./cards/python/py_llm_client_modes.html"
        },
        {
          "code": "PY55",
          "title": "大模型调用的客户端韧性",
          "tagline": "失败形态的四种处置 / 请求数与 token 两套配额 / 退避听服务端的 / 多档降级与质量损失 / 成本超支就是可用性故障。",
          "href": "./cards/python/py_llm_resilience.html"
        },
        {
          "code": "PY56",
          "title": "批量任务的吞吐与续跑",
          "tagline": "批量与交互的目标函数之别 / 瓶颈闸口定位 / 有界并发流水线 / 断点续跑与幂等 / 成本与质量的权衡。",
          "href": "./cards/python/py_batch_inference.html"
        },
        {
          "code": "PY57",
          "title": "FastAPI 的并发模型",
          "tagline": "两种处理函数的调度差别 / async def 里阻塞的全局代价 / 线程池排队与容量估算 / 依赖项与应用级资源生命周期 / AI 接口写法判据。",
          "href": "./cards/python/py_fastapi_concurrency.html"
        },
        {
          "code": "PY58",
          "title": "AI 服务集成范式与系列收束",
          "tagline": "四种集成形状与选型判据 / 围住不确定性的三道墙 / 状态外置与上下文裁剪 / 从下游配额反推容量 / 六个小组的学习与实践路径。",
          "href": "./cards/python/py_ai_service_integration.html"
        }
      ]
    }
  ]
};
