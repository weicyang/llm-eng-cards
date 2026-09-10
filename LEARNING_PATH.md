# 主干路径

先读完这一页列出的卡，再进 `extended/`。编号是阅读顺序，不是私有站里的 N/T/G 编号。

状态：`planned` = 尚未迁入公开仓。首发会先放下表中的主干，再按周补。

## 原理 · 它凭什么成立

| 序 | 卡 | 读完能做什么 | 状态 |
|---|---|---|---|
| 01 | 张量与维度 | 看懂后面所有形状变换在说什么 | planned |
| 02 | Attention 手撕 | 自己写出缩放点积注意力 | planned |
| 03 | Multi-Head Attention | 说明为什么一个头不够、多头怎么拼 | planned |
| 04 | 位置编码 | 解释模型如何知道 token 顺序 | planned |
| 05 | Decoder-only | 对照 Encoder / Encoder-Decoder 说出生产默认选型 | planned |
| 06 | Token 机制 | 算清中英文 token、窗口和费用 | planned |
| 07 | 解码与采样 | Temperature / Top-p / 贪心怎么选、何时不该调 | planned |
| 08 | KV Cache | 解释 prefill / decode 和显存为什么涨 | planned |
| 09 | MoE | 说清专家路由和它带来的工程代价 | planned |
| 10 | LoRA / QLoRA | 判断要不要微调、用哪种 PEFT | planned |
| 11 | RL for LLM | 分清 PPO / GRPO / 奖励模型各自管哪一段 | planned |
| 12 | 推理模型与测试时计算 | 决定何时开思考、预算怎么熔断 | planned |

## 应用 · 怎么做成能力

| 序 | 卡 | 读完能做什么 | 状态 |
|---|---|---|---|
| 13 | 五层 Prompt | 把提示词拆成可维护的分层资产 | planned |
| 14 | Prompt vs Context | 分清「怎么说」和「给什么」 | planned |
| 15 | RAG 架构 | 判断 Naive / Advanced / Modular 处在哪一层 | planned |
| 16 | 文档切片 | 按文档类型选切法，而不是固定长度一刀切 | planned |
| 17 | 混合检索 | 决定关键词、向量、重排怎么接 | planned |
| 18 | 重排 | 说清重排增益和它吃掉的延迟 | planned |
| 19 | RAG 评估 | 先评检索再评回答，不把生成分数当唯一裁判 | planned |
| 20 | Agent Loop | 画出最小闭环：模型、工具、停止条件 | planned |
| 21 | Function Calling / MCP | 为工具选协议，并写出失败时的降级 | planned |
| 22 | 上下文窗口 | 为长任务做预算，而不是把历史整段塞进去 | planned |
| 23 | 记忆 | 分清短记忆、长记忆、检索，避免记忆污染 | planned |
| 24 | Agent 评测 | 用任务完成率、工具正确率、成本一起看 | planned |
| 25 | 多模态视觉文档 RAG | 判断 OCR 路线何时必须换成页面图像检索 | planned |
| 26 | GUI Agent 或实时语音 Agent | 选一条产品链路打穿（另一条后补） | planned |

## 生产 · 上线后先动哪个旋钮

| 序 | 卡 | 读完能做什么 | 状态 |
|---|---|---|---|
| 27 | 部署选型 | 在云 API / 托管 / 自建 / 混合里做四维过滤 | planned |
| 28 | 显存与硬件 | 在上机器前估出装得下还是会 OOM | planned |
| 29 | 推理框架 | 按负载在 vLLM / SGLang / TensorRT-LLM 里选型 | planned |
| 30 | 连续批处理 | 解释高并发下吞吐和延迟为什么互相咬 | planned |
| 31 | 投机解码生产落地 | 按接受率和上下文长度决定开、缩短还是关 | planned |
| 32 | 流式传输 | 为 SSE / WebSocket / 断线选一层方案 | planned |
| 33 | 成本与计费 | 把输入、输出、思考 token 分成三本账 | planned |
| 34 | 可观测性 | 为一次请求补上 trace、token、质量指标 | planned |
| 35 | Prompt 注入 | 把不可信输入当成默认情况来防 | planned |
| 36 | Agent 沙箱 | 给工具调用划权限平面，而不是只靠提示词 | planned |

## 迁入规则

1. 每周最多迁入 1 张 DEEP 或 2 张 GUIDE，优先补主干上「下一张还没公开」的卡。
2. 私有站里的重复卡要合并后再发。Token、采样、KV Cache 这类只保留一张主卡。
3. 面试页、业务知识库、产品源码深潜、来源说不清的数字，不进本仓。
