# 主干路径 40

卡片请在 GitHub Pages 上打开，不要点仓库里的 `.html`（那是源码）。更省事：[首页主干](https://weicyang.github.io/llm-eng-cards/#start)。

## 先学 20：只建骨架（2–4 小时）

时间有限，或想先有一张完整地图，按这五组读 20 张，编号就是下面三张表里的序号，也可以直接在[首页「先学 20」](https://weicyang.github.io/llm-eng-cards/#core)点：

1. 模型怎么算出下一个 token：01 · 05 · 06 · 07 · 08
2. 推理为什么又慢又贵：37 · 30 · 38
3. 上下文怎么给才有效：14 · 15 · 17 · 18
4. 智能体怎么闭环、怎么评：20 · 21 · 23 · 39
5. 上线前后各留一手：27 · 33 · 40 · 35

这 20 张全部来自主干 40，不是另一套卡；读完接着走完整主干即可。

## 完整主干 40

按这个顺序读完主干。完整目录在首页底部。

按目标也可以只走其中一段：

- 理解 LLM：01–12
- 做 RAG：13–19、25
- 做 Agent：14、20–24、26、36
- 上生产：27–40

## 原理

| 序 | 卡 |
|---|---|
| 01 | [Attention 手撕](https://weicyang.github.io/llm-eng-cards/cards/transformer/attention_from_scratch.html) |
| 02 | [张量与维度](https://weicyang.github.io/llm-eng-cards/cards/transformer/tensor_fundamentals.html) |
| 03 | [Multi-Head Attention](https://weicyang.github.io/llm-eng-cards/cards/transformer/mha_from_scratch.html) |
| 04 | [位置编码](https://weicyang.github.io/llm-eng-cards/cards/transformer/positional_encoding.html) |
| 05 | [Decoder-only](https://weicyang.github.io/llm-eng-cards/cards/transformer/decoder_only_transformer.html) |
| 06 | [Token 机制](https://weicyang.github.io/llm-eng-cards/cards/llm/token_mechanism_complete.html) |
| 07 | [解码与采样](https://weicyang.github.io/llm-eng-cards/cards/llm/decoding_strategies_deep.html) |
| 08 | [KV Cache](https://weicyang.github.io/llm-eng-cards/cards/deploy/kv_cache_inference.html) |
| 09 | [MoE](https://weicyang.github.io/llm-eng-cards/cards/transformer/moe_architecture.html) |
| 10 | [LoRA / QLoRA](https://weicyang.github.io/llm-eng-cards/cards/llm/lora_finetuning.html) |
| 11 | [RL for LLM](https://weicyang.github.io/llm-eng-cards/cards/reinforcement/rl_for_llm.html) |
| 12 | [推理模型与测试时计算](https://weicyang.github.io/llm-eng-cards/cards/llm/reasoning_models_test_time_compute.html) |

## 应用

| 序 | 卡 |
|---|---|
| 13 | [五层 Prompt](https://weicyang.github.io/llm-eng-cards/cards/engineering/five_layer_prompt_architecture.html) |
| 14 | [Prompt vs Context](https://weicyang.github.io/llm-eng-cards/cards/engineering/prompt_vs_context_engineering.html) |
| 15 | [RAG 架构](https://weicyang.github.io/llm-eng-cards/cards/rag/rag_architecture.html) |
| 16 | [文档切片](https://weicyang.github.io/llm-eng-cards/cards/rag/chunking_semantic_solutions.html) |
| 17 | [混合检索](https://weicyang.github.io/llm-eng-cards/cards/rag/hybrid_retrieval_guide.html) |
| 18 | [重排](https://weicyang.github.io/llm-eng-cards/cards/rag/retrieval_reranking.html) |
| 19 | [RAG 评估](https://weicyang.github.io/llm-eng-cards/cards/rag/rag_evaluation_practice.html) |
| 20 | [Agent Loop](https://weicyang.github.io/llm-eng-cards/cards/agent/loop_engineering_vs_react.html) |
| 21 | [Function Calling / MCP](https://weicyang.github.io/llm-eng-cards/cards/agent/mcp_vs_function_calling.html) |
| 22 | [上下文窗口](https://weicyang.github.io/llm-eng-cards/cards/agent/single_agent_context_window.html) |
| 23 | [记忆](https://weicyang.github.io/llm-eng-cards/cards/memory/ai_memory_system.html) |
| 24 | [Agent 评测](https://weicyang.github.io/llm-eng-cards/cards/agent/agent_evaluation_metrics.html) |
| 25 | [多模态视觉文档 RAG](https://weicyang.github.io/llm-eng-cards/cards/rag/multimodal_visual_document_rag.html) |
| 26 | [GUI Agent](https://weicyang.github.io/llm-eng-cards/cards/agent/gui_agent_computer_use.html) |

## 生产

| 序 | 卡 |
|---|---|
| 27 | [部署选型](https://weicyang.github.io/llm-eng-cards/cards/deploy/deployment_decision_framework.html) |
| 28 | [显存与硬件](https://weicyang.github.io/llm-eng-cards/cards/deploy/vram_estimation_hardware.html) |
| 29 | [推理框架](https://weicyang.github.io/llm-eng-cards/cards/deploy/inference_framework_selection.html) |
| 30 | [连续批处理](https://weicyang.github.io/llm-eng-cards/cards/deploy/continuous_batching_scheduling.html) |
| 31 | [投机解码生产落地](https://weicyang.github.io/llm-eng-cards/cards/deploy/speculative_decoding_production.html) |
| 32 | [流式传输](https://weicyang.github.io/llm-eng-cards/cards/engineering/streaming_five_layers.html) |
| 33 | [成本与计费](https://weicyang.github.io/llm-eng-cards/cards/engineering/llm_token_pricing.html) |
| 34 | [可观测性](https://weicyang.github.io/llm-eng-cards/cards/architecture/observability_llm.html) |
| 35 | [Prompt 注入](https://weicyang.github.io/llm-eng-cards/cards/security/prompt_injection_battle.html) |
| 36 | [Agent 沙箱](https://weicyang.github.io/llm-eng-cards/cards/security/sandbox_architecture.html) |
| 37 | [Prefill / Decode 分离](https://weicyang.github.io/llm-eng-cards/cards/deploy/prefill_decode_disaggregation.html) |
| 38 | [模型量化](https://weicyang.github.io/llm-eng-cards/cards/deploy/quantization_guide.html) |
| 39 | [评估与测试](https://weicyang.github.io/llm-eng-cards/cards/engineering/evaluation_testing.html) |
| 40 | [API 调用稳定性](https://weicyang.github.io/llm-eng-cards/cards/engineering/api_stability.html) |
