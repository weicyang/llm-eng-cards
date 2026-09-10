# 主干路径

按编号读。36 张都已公开。

## 原理 · 它凭什么成立

| 序 | 卡 | 读完能做什么 |
|---|---|---|
| 01 | [张量与维度](./cards/fundamentals/tensor_fundamentals.html) | 看懂后面所有形状变换在说什么 |
| 02 | [Attention 手撕](./cards/fundamentals/attention_from_scratch.html) | 自己写出缩放点积注意力 |
| 03 | [Multi-Head Attention](./cards/fundamentals/mha_from_scratch.html) | 说明为什么一个头不够、多头怎么拼 |
| 04 | [位置编码](./cards/fundamentals/positional_encoding.html) | 解释模型如何知道 token 顺序 |
| 05 | [Decoder-only](./cards/fundamentals/decoder_only_transformer.html) | 对照 Encoder / Encoder-Decoder 说出生产默认选型 |
| 06 | [Token 机制](./cards/fundamentals/token_mechanism_complete.html) | 算清中英文 token、窗口和费用 |
| 07 | [解码与采样](./cards/fundamentals/decoding_strategies_deep.html) | Temperature / Top-p / 贪心怎么选、何时不该调 |
| 08 | [KV Cache](./cards/fundamentals/kv_cache_inference.html) | 解释 prefill / decode 和显存为什么涨 |
| 09 | [MoE](./cards/fundamentals/moe_architecture.html) | 说清专家路由和它带来的工程代价 |
| 10 | [LoRA / QLoRA](./cards/fundamentals/lora_finetuning.html) | 判断要不要微调、用哪种 PEFT |
| 11 | [RL for LLM](./cards/fundamentals/rl_for_llm.html) | 分清 PPO / GRPO / 奖励模型各自管哪一段 |
| 12 | [推理模型与测试时计算](./cards/fundamentals/reasoning_models_test_time_compute.html) | 决定何时开思考、预算怎么熔断 |

## 应用 · 怎么做成能力

| 序 | 卡 | 读完能做什么 |
|---|---|---|
| 13 | [五层 Prompt](./cards/applications/five_layer_prompt_architecture.html) | 把提示词拆成可维护的分层资产 |
| 14 | [Prompt vs Context](./cards/applications/prompt_vs_context_engineering.html) | 分清「怎么说」和「给什么」 |
| 15 | [RAG 架构](./cards/applications/rag_architecture.html) | 判断 Naive / Advanced / Modular 处在哪一层 |
| 16 | [文档切片](./cards/applications/chunking_semantic_solutions.html) | 按文档类型选切法，而不是固定长度一刀切 |
| 17 | [混合检索](./cards/applications/hybrid_retrieval_guide.html) | 决定关键词、向量、重排怎么接 |
| 18 | [重排](./cards/applications/retrieval_reranking.html) | 说清重排增益和它吃掉的延迟 |
| 19 | [RAG 评估](./cards/applications/rag_evaluation_practice.html) | 先评检索再评回答，不把生成分数当唯一裁判 |
| 20 | [Agent Loop](./cards/applications/loop_engineering_vs_react.html) | 画出最小闭环：模型、工具、停止条件 |
| 21 | [Function Calling / MCP](./cards/applications/mcp_vs_function_calling.html) | 为工具选协议，并写出失败时的降级 |
| 22 | [上下文窗口](./cards/applications/single_agent_context_window.html) | 为长任务做预算，而不是把历史整段塞进去 |
| 23 | [记忆](./cards/applications/ai_memory_system.html) | 分清短记忆、长记忆、检索，避免记忆污染 |
| 24 | [Agent 评测](./cards/applications/agent_evaluation_metrics.html) | 用任务完成率、工具正确率、成本一起看 |
| 25 | [多模态视觉文档 RAG](./cards/applications/multimodal_visual_document_rag.html) | 判断 OCR 路线何时必须换成页面图像检索 |
| 26 | [GUI Agent](./cards/applications/gui_agent_computer_use.html) | 当动作从调 API 变成点屏幕，工程范式怎么变 |

## 生产 · 上线后先动哪个旋钮

| 序 | 卡 | 读完能做什么 |
|---|---|---|
| 27 | [部署选型](./cards/production/deployment_decision_framework.html) | 在云 API / 托管 / 自建 / 混合里做四维过滤 |
| 28 | [显存与硬件](./cards/production/vram_estimation_hardware.html) | 在上机器前估出装得下还是会 OOM |
| 29 | [推理框架](./cards/production/inference_framework_selection.html) | 按负载在 vLLM / SGLang / TensorRT-LLM 里选型 |
| 30 | [连续批处理](./cards/production/continuous_batching_scheduling.html) | 解释高并发下吞吐和延迟为什么互相咬 |
| 31 | [投机解码生产落地](./cards/production/speculative_decoding_production.html) | 按接受率和上下文长度决定开、缩短还是关 |
| 32 | [流式传输](./cards/production/streaming_five_layers.html) | 为 SSE / WebSocket / 断线选一层方案 |
| 33 | [成本与计费](./cards/production/llm_token_pricing.html) | 把输入、输出、思考 token 分成三本账 |
| 34 | [可观测性](./cards/production/observability_llm.html) | 为一次请求补上 trace、token、质量指标 |
| 35 | [Prompt 注入](./cards/production/prompt_injection_battle.html) | 把不可信输入当成默认情况来防 |
| 36 | [Agent 沙箱](./cards/production/sandbox_architecture.html) | 给工具调用划权限平面，而不是只靠提示词 |
