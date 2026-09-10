# LLM 工程知识卡片

**在线阅读：** [weicyang.github.io/llm-eng-cards](https://weicyang.github.io/llm-eng-cards/)

**From Attention to Production.** Decision cards for engineers who already know how to call a model API.

一套给工程师读的大模型工程知识卡片。覆盖基础原理、RAG / Agent 应用能力、部署与安全；每张卡讲清边界和反例。

> 建议先走主干 36，再按主题进入三个板块的完整目录。

## 三层路径

```
原理  它凭什么成立
  ↓
应用  怎么做成能力（Prompt / RAG / Agent）
  ↓
生产  上线后哪个旋钮先动、什么情况关掉
```

当前公开 **基础原理 / 应用能力 / 生产工程** 共 291 张卡，另有 [主干路径 36](./LEARNING_PATH.md)。不含前沿实践、面试速成页和源码深潜。

## 怎么读

1. 打开 [LEARNING_PATH.md](./LEARNING_PATH.md)，按编号往下走，不要按文件夹乱点。
2. 每张卡开头有层级、难度、前置卡、后续卡。前置没读完就先回去。
3. 应用卡会指回原理，生产卡会指回它依赖的能力。交叉引用是故意的。
4. 卡末尾的「什么时候不要用」比正文更值得收藏。

## 仓库结构

```
index.html             主干路径 36 + 三个板块完整目录
catalog.js             完整目录数据
LEARNING_PATH.md       主干编号与链接
cards/neural-networks/ 神经网络
cards/transformer/     Transformer
cards/llm/             大模型
cards/training/        训练
cards/reinforcement/   强化学习
cards/rag/             RAG
cards/agent/           Agent
cards/memory/          记忆
cards/data/            数据
cards/database/        向量库
cards/engineering/     工程
cards/architecture/    架构
cards/deploy/          部署与推理
cards/security/        安全
cards/audit/           审计与治理
notebooks/             手撕类最小可运行片段
```

## 卡片约定

每张公开卡必须能单独被转发，并满足：

- 说清边界：这张卡管什么、不管什么、和哪张卡不重复
- 数字可分清：`示例场景` 与论文 / 官方实测分开写，不把构造数据写成结论
- 有反例：什么情况下不要用这个方案
- 有出处：关键数字和机制能指到论文、官方文档或可复核的实现

## 授权

- 正文（卡片、路径、说明）：[CC BY-NC-SA 4.0](./LICENSE)
- `notebooks/` 中的示例代码：[MIT](./LICENSE-CODE)

禁止把付费课、采集稿、未标明来源的「大厂数据」放进本仓。

## 贡献

先看 [CONTRIBUTING.md](./CONTRIBUTING.md)。现阶段优先接受纠错、补引用、补反例，不接受批量生成的新卡。
