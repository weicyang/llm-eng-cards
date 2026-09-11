# LLM 工程知识卡片

**From Attention to Production.**

给已经会调模型 API 的工程师。不追热点，先理解机制，再做成 RAG / Agent，最后把系统撑上线。

> 每张卡回答一个判断：什么时候用，什么时候不要用。别人讲「RAG 是什么」，这里讲「什么时候该上 RAG，什么时候不要上」。

295 张卡片 · 36 张主干 · 原理 → 应用 → 生产

**[在线阅读](https://weicyang.github.io/llm-eng-cards/)** · **[主干 36](https://weicyang.github.io/llm-eng-cards/#start)**

## 为什么有这个库

不是百科，不是 Prompt 技巧合集，也不是刷题清单。

```
原理  它凭什么成立
  ↓
应用  怎么做成能力（Prompt / RAG / Agent）
  ↓
生产  上线后哪个旋钮先动、什么情况关掉
```

## 从这里开始

已经会调 API、只想补某一段：按目标走主干里对应的卡。

| 卡住的是 | 先读 |
|---|---|
| LLM 原理 | 01–12 |
| RAG | 13–19、25 |
| Agent | 14、20–24、26、36 |
| 上生产 | 27–36 |

想完整从头学：按 [原理 → 应用 → 生产](https://weicyang.github.io/llm-eng-cards/#paths) 一层层读，不要按 `cards/` 文件夹乱点。文件夹是存放结构，不是学习顺序。

## 卡片约定

每张公开卡必须能单独被转发，并满足：

- What / Why / How：这张卡管什么
- When / When not：什么情况下不要用
- 数字可分清：`示例场景` 与论文 / 官方实测分开写
- 有出处：关键数字和机制能指到论文、官方文档或可复核的实现

## 知识地图

- 基础原理 66
- 应用能力 140
- 生产工程 85

不含前沿实践、面试速成页和源码深潜。

## 仓库结构

```
index.html             学习入口：36 张主干 + 目标入口 + 完整目录
catalog.js             完整目录数据
LEARNING_PATH.md       主干编号与链接
cards/                 按主题存放，便于维护，不是阅读顺序
notebooks/             手撕类最小可运行片段
```

## 授权

- 正文（卡片、路径、说明）：[CC BY-NC-SA 4.0](./LICENSE)
- `notebooks/` 中的示例代码：[MIT](./LICENSE-CODE)

禁止把付费课、采集稿、未标明来源的「大厂数据」放进本仓。

## 贡献

先看 [CONTRIBUTING.md](./CONTRIBUTING.md)。现阶段优先接受纠错、补引用、补反例，不接受批量生成的新卡。
