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
          "code": "DP25",
          "title": "GPU 执行模型与存储层次",
          "tagline": "Kernel/Grid/Block/Warp 到硬件的映射 / SM 与 warp 调度器 / 寄存器-SRAM-L2-HBM 阶梯 / Occupancy 的真实定义 / 访存合并与 bank conflict / 四类瓶颈定位。",
          "href": "./cards/deploy/gpu_execution_model.html"
        },
        {
          "code": "DP26",
          "title": "GEMM 与 Tiling 分块优化",
          "tagline": "Transformer 的矩阵形状与 FLOPs 账 / naive GEMM 为何必然访存受限 / shared memory tile 与 register tile 定量推导 / MMA 与 wgmma 形状约束 / double buffering 与 split-K / TMA。",
          "href": "./cards/deploy/gemm_tiling_optimization.html"
        },
        {
          "code": "DP27",
          "title": "算子融合与 Kernel 优化实战",
          "tagline": "融合省的是 HBM 往返不是 FLOPs / 三类融合 / Inductor 与 TensorRT 与 TVM 的能力边界 / graph break / occupancy 与寄存器压力 / Nsight Compute 排查顺序。",
          "href": "./cards/deploy/kernel_fusion_optimization.html"
        },
        {
          "code": "DP28",
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
  ]
};
