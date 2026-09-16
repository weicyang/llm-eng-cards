window.QA_CATALOG = [
  {
    "label": "模块问答",
    "cards": [
      {
        "code": "IF01",
        "title": "大模型原理高频问答",
        "tagline": "Transformer 架构、Self-Attention 机制、KV Cache、MoE、Temperature 解码、Scaling Laws 涌现能力。",
        "href": "./cards/interview/llm_fundamentals.html"
      },
      {
        "code": "IF02",
        "title": "Transformer核心机制高频问答",
        "tagline": "Self-Attention QKV / 多头注意力 / 位置编码 / 三大架构选型 / 四大局限 — 不推导公式，讲清每个机制对应用开发意味着什么。",
        "href": "./cards/interview/transformer_app_interview.html"
      },
      {
        "code": "IF03",
        "title": "工程实践高频问答",
        "tagline": "Prompt Engineering（CoT/ToT）、防幻觉、Token 成本优化、缓存策略、结构化输出、输出稳定性三层防御。",
        "href": "./cards/interview/engineering.html"
      },
      {
        "code": "IF04",
        "title": "安全防护高频问答",
        "tagline": "Prompt 注入/越狱防御、RAG 安全（投毒/权限/PII）、工具调用安全、模型对齐（RLHF/DPO）、Guardrails。",
        "href": "./cards/interview/security.html"
      },
      {
        "code": "IF05",
        "title": "系统设计高频问答",
        "tagline": "智能客服系统、企业文档问答、AI 代码助手、搜索推荐——系统设计高频问题思路与框架。",
        "href": "./cards/interview/system_design.html"
      },
      {
        "code": "IF06",
        "title": "Agent 架构与框架高频问答",
        "tagline": "五大组件串联、ReAct/Plan-and-Execute/Reflexion 三种推理模式、LangGraph/CrewAI 框架对比、从零实现最小 Agent。",
        "href": "./cards/interview/agent_architecture_frameworks.html"
      },
      {
        "code": "IF07",
        "title": "Agent 核心高频问答",
        "tagline": "架构差异（LLMChain vs Agent）、记忆落地、多 Agent 协作模式、防无限循环、工作流选择。",
        "href": "./cards/interview/agent_core.html"
      },
      {
        "code": "IF08",
        "title": "Agent 调优实战高频问答",
        "tagline": "分层归因、Bad Case 采样、Prompt 优化、模型选型、闭环迭代 — 准确率从 63% 提升到 82% 的实战方法论。",
        "href": "./cards/interview/agent_optimization.html"
      }
    ]
  },
  {
    "label": "全链路问答",
    "cards": [
      {
        "code": "IF09",
        "title": "Agent 高频问答（16问）",
        "tagline": "30秒速答 + 追问链 + 踩坑点 / 设计范式 / 记忆机制 / Multi-Agent / 手搓 vs 框架",
        "href": "./cards/interview/agent_qa.html"
      },
      {
        "code": "IF10",
        "title": "RAG 高频问答（20问）",
        "tagline": "30秒速答 + 追问链 + 踩坑点：20 问覆盖基础概念 / 索引构建 / 向量库 / 检索优化 / 高级范式 / 生产落地，含四代架构演进、五亿向量设计、语义缓存与发布门控。",
        "href": "./cards/interview/rag_qa.html"
      },
      {
        "code": "IF11",
        "title": "LLM 工具调用高频问答（16问）",
        "tagline": "30秒速答 + 追问链 + 踩坑点 / Function Calling / MCP / Skill / A2A / 通信协议",
        "href": "./cards/interview/tool_calling_qa.html"
      },
      {
        "code": "IF12",
        "title": "大模型工程高频问答（22问）",
        "tagline": "30秒速答 + 追问链 + 踩坑点 / Transformer / 训练微调 / 推理优化 / 部署评测",
        "href": "./cards/interview/llm_engineering_qa.html"
      },
      {
        "code": "IF13",
        "title": "Agent 编排与算力高频问答（41问）",
        "tagline": "30秒速答 + 追问链 + 踩坑点 / 意图路由 / RAG 检索 / LangGraph 状态编排 / Multi-Agent / Harness 安全评测 / 国产算力适配 / 算法手撕。",
        "href": "./cards/interview/agent_orchestration_qa.html"
      },
      {
        "code": "IF14",
        "title": "Agent 生产落地高频问答（38问）",
        "tagline": "30秒速答 + 追问链 + 踩坑点 / 架构选型 / Skill·MCP 工具链 / RAG 检索 / Memory 记忆 / 上下文工程 / Trace 评测与线上治理。",
        "href": "./cards/interview/agent_production_qa.html"
      },
      {
        "code": "IF15",
        "title": "Agent 端云协同高频问答（33问）",
        "tagline": "30秒速答 + 追问链 + 踩坑点 / 车载复合意图 / Function Calling / LangGraph 编排 / RAG 知识库治理 / 记忆状态 / 循环治理 / 可观测与成本 / 算法手撕。",
        "href": "./cards/interview/agent_edge_cloud_qa.html"
      },
      {
        "code": "IF16",
        "title": "电商 Agent 全链路高频问答（35问）",
        "tagline": "30秒速答 + 追问链 + 踩坑点 / 意图路由 / 编排与 Harness / 工具调用与 RAG / Multi-Agent 与幻觉治理 / Java 后端基建 / 大促稳定性 / 工程决策 / 算法手撕。",
        "href": "./cards/interview/agent_ecommerce_pipeline_qa.html"
      }
    ]
  },
  {
    "label": "Agent 问答",
    "cards": [
      {
        "code": "IA-01",
        "title": "Agent Memory 设计",
        "tagline": "四层记忆架构 / 向量库陷阱 / 结构化存储 vs 向量检索 / 精准事实 vs 模糊语义。",
        "href": "./cards/interview/interview_agent_memory_design.html"
      },
      {
        "code": "IA-02",
        "title": "Agent Skill 与渐进式披露",
        "tagline": "Skill 能力包定义 / 三层递进架构 / 按需披露 / MCP 协议标准化。",
        "href": "./cards/interview/interview_agent_skill_progressive.html"
      },
      {
        "code": "IA-03",
        "title": "Agent vs Workflow 核心区别",
        "tagline": "控制流决定权 / 铁轨列车 vs 自动驾驶 / Agentic Workflow / 容错率选型。",
        "href": "./cards/interview/interview_agent_vs_workflow.html"
      },
      {
        "code": "IA-04",
        "title": "Agent 上下文维护机制",
        "tagline": "Lost in the Middle / 三大流派 / 三层架构 / 异步记忆更新 / 图状态机制。",
        "href": "./cards/interview/interview_agent_context_maintenance.html"
      },
      {
        "code": "IA-05",
        "title": "上百 Skill 塞爆 System Prompt 优化",
        "tagline": "五层架构 / 意图路由 / Skill RAG / 动态组装 / 多智能体 / 缓存与微调。",
        "href": "./cards/interview/interview_skill_system_prompt_optimization.html"
      },
      {
        "code": "IA-06",
        "title": "ReAct Agent 核心抓手",
        "tagline": "Thought-Action-Observation 循环 / 四大工程坑 / 自愈机制 / Reflection。",
        "href": "./cards/interview/interview_react_agent_core.html"
      },
      {
        "code": "IA-07",
        "title": "跨 Agent 结构化数据传递",
        "tagline": "三层防御架构 / 黑板模式 / 受限解码 / 熔断降级 / Pydantic 校验。",
        "href": "./cards/interview/interview_cross_agent_data_passing.html"
      },
      {
        "code": "IA-08",
        "title": "Agent 上下文取舍方案",
        "tagline": "三大硬伤 / 四维取舍 / 动态窗口 / 层级化总结 / 向量检索回旋 / 逻辑脱水。",
        "href": "./cards/interview/interview_agent_context_tradeoff.html"
      },
      {
        "code": "IA-09",
        "title": "Multi-Agent 动态派生 Subagent",
        "tagline": "动态大纲 / delegate_task / 强制压缩 / 扁平化管理 / 物理限流 / LLM-as-Judge。",
        "href": "./cards/interview/interview_multi_agent_subagent.html"
      },
      {
        "code": "IA-10",
        "title": "Agent 调用工具可靠性",
        "tagline": "四层防御 / JSON Schema / CoT 思维链 / 工具检索 RAG / 错误回传自愈。",
        "href": "./cards/interview/interview_agent_tool_reliability.html"
      },
      {
        "code": "IA-11",
        "title": "Agent 稳定输出结构化 JSON",
        "tagline": "四层防御 / Schema 注入 / Structured Outputs / Logic Masking / 闭环自修复。",
        "href": "./cards/interview/interview_agent_stable_json.html"
      },
      {
        "code": "IA-12",
        "title": "Agent 记忆撑爆解决方案",
        "tagline": "混合记忆管理 / 滑动窗口 / 递归摘要 / 向量库 RAG / 三个关键词。",
        "href": "./cards/interview/interview_agent_memory_overflow.html"
      },
      {
        "code": "IA-13",
        "title": "Agent RAG 处理复杂 PDF",
        "tagline": "三层解析 / 版面检测-元素识别-语义重组 / 自适应解析 / 多模态融合。",
        "href": "./cards/interview/interview_agent_rag_complex_pdf.html"
      },
      {
        "code": "IA-14",
        "title": "Agent 结合 RAG 的工具设计",
        "tagline": "三原则 / 检索-优化-处理三类工具 / 单次-迭代-自适应编排 / 容错降级。",
        "href": "./cards/interview/interview_agent_tools_design.html"
      },
      {
        "code": "IA-15",
        "title": "Agent 智能体架构有几部分？",
        "tagline": "六大组件：大脑/记忆/工具/规划/执行/反思 / ReAct / Plan-and-Execute。",
        "href": "./cards/interview/interview_agent_architecture_parts.html"
      },
      {
        "code": "IA-16",
        "title": "Agent 海量 Skill 加载方案",
        "tagline": "渐进式披露 / 三层加载 / 意图路由 / Skill RAG / 注意力预算。",
        "href": "./cards/interview/interview_agent_skill_loading.html"
      },
      {
        "code": "IA-17",
        "title": "Agent 幂等性设计",
        "tagline": "三层幂等 / Request ID / 副作用控制 / 状态机 / 补偿机制。",
        "href": "./cards/interview/interview_agent_idempotency.html"
      },
      {
        "code": "IA-18",
        "title": "Agent 记忆污染处置",
        "tagline": "准入控制 / 溯源回滚 / 认知重置 / 间接提示注入 / 健康快照。",
        "href": "./cards/interview/interview_agent_memory_pollution.html"
      },
      {
        "code": "IA-19",
        "title": "长期记忆入库边界",
        "tagline": "高复用 / 低歧义 / 热记忆 / 向量库 / 关系库存储。",
        "href": "./cards/interview/interview_agent_long_term_memory_write.html"
      },
      {
        "code": "IA-20",
        "title": "字节 Agent 二面高频题",
        "tagline": "多模型接入 / 无状态服务 / tool_calls / JWT / SSE 流式协议。",
        "href": "./cards/interview/interview_agent_platform_interview.html"
      },
      {
        "code": "IA-21",
        "title": "AI 学习路径与职业成长",
        "tagline": "通识 / 概念 / 实战 / 原理 / 用正确顺序建立 AI 能力。",
        "href": "./cards/interview/interview_ai_learning_path.html"
      },
      {
        "code": "IA-22",
        "title": "2026-07 Agent 高频问答增量合集",
        "tagline": "Skill 加载 / 幂等性 / 记忆污染处置 / 长期记忆入库 / 字节二面 / 学习路径。",
        "href": "./cards/interview/interview_july_increment_agent.html"
      }
    ]
  },
  {
    "label": "RAG 问答",
    "cards": [
      {
        "code": "IR-01",
        "title": "多轮对话 RAG 意图补全",
        "tagline": "指代消解 / 意图路由 / 7B小模型改写 / 混合检索 / 串行变并行。",
        "href": "./cards/interview/interview_rag_multi_turn_retrieval.html"
      },
      {
        "code": "IR-02",
        "title": "向量数据库构建流水线",
        "tagline": "数据解析 / 父子文档分块 / 混合Embedding / HNSW索引 / 量化压缩。",
        "href": "./cards/interview/interview_rag_vector_db_construction.html"
      },
      {
        "code": "IR-03",
        "title": "RAG-Fusion 多维度检索融合",
        "tagline": "查询扩展 / 异步并行 / RRF倒数排名融合 / Cross Encoder二次重排。",
        "href": "./cards/interview/interview_rag_fusion.html"
      },
      {
        "code": "IR-04",
        "title": "LambdaMART 重排序",
        "tagline": "粗排→Rerank→生成 / GBDT+Lambda梯度 / NDCG优化 / 杂食性多特征融合。",
        "href": "./cards/interview/interview_lambda_mart_rerank.html"
      },
      {
        "code": "IR-05",
        "title": "向量检索做长期记忆三大死穴",
        "tagline": "时序错乱 / 语境碎片化 / 语义漂移 / 摘要索引 / 时间衰减 / HYDE。",
        "href": "./cards/interview/interview_rag_long_term_memory.html"
      },
      {
        "code": "IR-06",
        "title": "RAG 幻觉全链路治理",
        "tagline": "五阶段治理 / 净-改-排-控四字口诀 / 混合检索 / Rerank / 引用输出。",
        "href": "./cards/interview/interview_rag_hallucination.html"
      },
      {
        "code": "IR-07",
        "title": "RAG 准确率从 60% 提升到 85%",
        "tagline": "NLP动态切分 / 语义校验防噪声 / LambdaMART统一打分 / 指标监控拆解。",
        "href": "./cards/interview/interview_rag_accuracy_optimization.html"
      },
      {
        "code": "IR-08",
        "title": "RAG 各模块优化策略",
        "tagline": "数据清洗 / 父子块检索 / 混合检索+HyDE / 重排序 / RAGAS评估框架。",
        "href": "./cards/interview/interview_rag_module_optimization.html"
      },
      {
        "code": "IR-09",
        "title": "结构化数据 (SQL/表格) 查询难题",
        "tagline": "智能路由 / Schema RAG / Few-Shot示例 / Agent闭环自修复 / 安全防护。",
        "href": "./cards/interview/interview_rag_sql_table_query.html"
      },
      {
        "code": "IR-10",
        "title": "Query 改写策略",
        "tagline": "三大坑 / 五大策略：Rewrite / Multi-Query / Decomposition / HyDE / Step Back。",
        "href": "./cards/interview/interview_rag_query_rewrite.html"
      },
      {
        "code": "IR-11",
        "title": "RAG 热更新方案",
        "tagline": "增量索引 / 版本治理 / 蓝绿切换 / 缓存失效 / 一致性。",
        "href": "./cards/interview/interview_rag_hot_update.html"
      },
      {
        "code": "IR-12",
        "title": "超长 PDF 合同处理",
        "tagline": "增强型RAG / Map-Reduce / 长距离依赖 / 零幻觉 / 父子分片。",
        "href": "./cards/interview/interview_rag_long_pdf_contract.html"
      },
      {
        "code": "IR-13",
        "title": "多模态 RAG 图片检索",
        "tagline": "视觉 RAG / Patch 编码 / 多向量表示 / 跨模态匹配 / 量化压缩。",
        "href": "./cards/interview/interview_rag_multimodal_image_retrieval.html"
      },
      {
        "code": "IR-14",
        "title": "GraphRAG 适用场景",
        "tagline": "全局总结 / 多跳推理 / 实体消歧 / 隐性关系 / 混合路由。",
        "href": "./cards/interview/interview_graphrag_scenarios.html"
      },
      {
        "code": "IR-15",
        "title": "2026-07 RAG 高频问答增量合集",
        "tagline": "热更新 / 超长 PDF 合同 / 多模态图片检索 / GraphRAG 选型边界。",
        "href": "./cards/interview/interview_july_increment_rag.html"
      }
    ]
  },
  {
    "label": "LLM 问答",
    "cards": [
      {
        "code": "IL-01",
        "title": "大模型原理高频问答速通",
        "tagline": "Transformer架构 / Self-Attention / KV Cache / MoE / Scaling Laws — 高频考点全覆盖。",
        "href": "./cards/interview/interview_llm_fundamentals.html"
      },
      {
        "code": "IL-02",
        "title": "FlashAttention 显存优化原理",
        "tagline": "Tiling分块 / Online Softmax / Recomputation / GPU内存层次 / 显存降80%。",
        "href": "./cards/interview/interview_flash_attention.html"
      },
      {
        "code": "IL-03",
        "title": "单头vs多头 — MHA/MQA/GQA/MLA 演进",
        "tagline": "表达能力坍缩 / 过平滑 / KV Cache显存杀手 / 分组共享 / 低秩矩阵分解。",
        "href": "./cards/interview/interview_transformer_multi_head.html"
      },
      {
        "code": "IL-04",
        "title": "Prompt 能操控大模型认知吗？",
        "tagline": "条件概率转移 / 工作记忆vs长期记忆 / 表征工程 / 微调重塑权重。",
        "href": "./cards/interview/interview_pe_cognitive_control.html"
      },
      {
        "code": "IL-05",
        "title": "Function Calling 实现原理",
        "tagline": "工具描述注入 / 意图识别决策 / 结构化JSON输出 / 工具执行 / 结果整合。",
        "href": "./cards/interview/interview_llm_function_calling.html"
      },
      {
        "code": "IL-06",
        "title": "大模型意图识别原理",
        "tagline": "显式/隐式/多意图 / Prompt工程 / 微调分类器 / 快速路由。",
        "href": "./cards/interview/interview_llm_intent_recognition.html"
      },
      {
        "code": "IL-07",
        "title": "模型量化核心原理",
        "tagline": "FP32→INT8/INT4 / PTQ vs QAT / GPTQ vs AWQ / 显存降75%速度提3x。",
        "href": "./cards/interview/interview_llm_quantization.html"
      },
      {
        "code": "IL-08",
        "title": "大模型如何获取优质参数",
        "tagline": "三阶段：预训练→SFT→RLHF / 数据质量决定上限 / 人类偏好对齐。",
        "href": "./cards/interview/interview_llm_parameter_acquisition.html"
      },
      {
        "code": "IL-09",
        "title": "大模型多轮对话优化体系",
        "tagline": "四层体系：数据/算法/推理/应用 / 上下文压缩 / KV Cache / 状态追踪。",
        "href": "./cards/interview/interview_llm_multi_turn_optimization.html"
      },
      {
        "code": "IL-10",
        "title": "长上下文筛选与压缩",
        "tagline": "三大挑战 / 相关性筛选 / 位置优化 / 摘要压缩 / 结构化压缩 / 增量压缩。",
        "href": "./cards/interview/interview_llm_context_compression.html"
      },
      {
        "code": "IL-11",
        "title": "线性注意力为什么没人用？",
        "tagline": "O(N²)→O(N) / 精度损失大 / 实际加速有限 / FlashAttention更实用。",
        "href": "./cards/interview/interview_llm_linear_attention.html"
      }
    ]
  },
  {
    "label": "工程问答",
    "cards": [
      {
        "code": "IE-01",
        "title": "多模型支持架构设计",
        "tagline": "模型网关层 / 三层架构：业务层-路由层-适配器层 / 智能路由 / 即插即用。",
        "href": "./cards/interview/interview_multi_model_architecture.html"
      },
      {
        "code": "IE-02",
        "title": "工程级分层 Prompt 模板设计",
        "tagline": "五层架构 / 系统决策-背景上下文-核心任务-边界规则-输出格式 / 防注入 / 预填充。",
        "href": "./cards/interview/interview_layered_prompt_template.html"
      },
      {
        "code": "IE-03",
        "title": "100+ 工具API的 Tool RAG 架构",
        "tagline": "按需检索 / 工具向量化 / 向量库筛选 / Token节省90% / 少即是多。",
        "href": "./cards/interview/interview_tool_rag_architecture.html"
      },
      {
        "code": "IE-04",
        "title": "RAG、MCP 和 Agent 的协同架构",
        "tagline": "Agent=大脑 / MCP=神经总线 / RAG=外挂记忆库 / 数据接入→知识内化→智能执行。",
        "href": "./cards/interview/interview_agent_mcp_rag_synergy.html"
      },
      {
        "code": "IE-05",
        "title": "Agent 代码解释器报错处理",
        "tagline": "错误捕获分类 / 自动修复循环 / 上下文保留 / 降级策略 / 沙盒安全。",
        "href": "./cards/interview/interview_agent_code_interpreter_debug.html"
      },
      {
        "code": "IE-06",
        "title": "企业私有知识库智能问答架构",
        "tagline": "六层架构 / 数据接入→处理→索引→查询→生成→运维 / 工程落地关键决策。",
        "href": "./cards/interview/interview_rag_enterprise_knowledge_base.html"
      },
      {
        "code": "IE-07",
        "title": "企业级知识库设计关键步骤",
        "tagline": "数据分类标签 / 更新策略 / 多租户隔离 / 检索优化。",
        "href": "./cards/interview/interview_rag_knowledge_base_design.html"
      },
      {
        "code": "IE-08",
        "title": "VLLM / SGLang / TensorRT-LLM 选型",
        "tagline": "PagedAttention / Radix前缀缓存 / Kernel Fusion算子融合 / 动态演进。",
        "href": "./cards/interview/interview_llm_inference_framework.html"
      }
    ]
  }
];
