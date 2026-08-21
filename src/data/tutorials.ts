// Tutorials 独立教程数据（对应原站 /tutorials/* 与 /all?kind=tutorial）
// 原站约 37 个独立教程，中文版此前完全缺失。此处 1:1 收录：保留英文原名（专有名词），
// 补充中文标题/描述；原站带 YouTube 视频的，附上 youtubeUrl（组件会自动降级为外链按钮）。

export interface Tutorial {
  slug: string;
  titleEn: string;
  titleZh: string;
  descriptionZh: string;
  durationMin: number | null;
  category: string;       // 展示分类标签
  track: 'ai-fluency' | 'products' | 'developer';
  product?: string;      // 关联产品 slug：claude-ai / claude-cowork / claude-code / claude-tag / claude-platform
  youtubeUrl?: string;   // 原站带视频的附上链接
  originalUrl: string;   // 原站对应页面
}

export const ALL_TUTORIALS: Tutorial[] = [
  // ===== AI Fluency 通识类 =====
  {
    slug: 'the-4-properties-of-ai',
    titleEn: 'The 4 Properties of AI',
    titleZh: 'AI 的四大特性',
    descriptionZh: '全面梳理 AI 的四大底层特性：Next-Token 预测、预训练知识库、工作记忆（上下文窗口）与可引导性。帮助你理解 AI 在哪些场景下能力强、哪些场景下受限。',
    durationMin: 7,
    category: 'AI 通识',
    track: 'ai-fluency',
    youtubeUrl: 'https://www.youtube.com/watch?v=kl0gunXTvyk',
    originalUrl: 'https://academy.claude.com/tutorials/the-4-properties-of-ai'
  },
  {
    slug: 'the-4-ds-of-ai-fluency-behavioral-indicators',
    titleEn: 'The 4 Ds of AI Fluency — Behavioral Indicators',
    titleZh: 'AI 素养四大行为指标（4D）',
    descriptionZh: '列出 Anthropic 教育报告中引用的全部 AI 素养行为指标，帮助你理解每个行为在日常工作中长什么样，并给出可立即尝试的具体策略。',
    durationMin: 5,
    category: 'AI 通识',
    track: 'ai-fluency',
    originalUrl: 'https://academy.claude.com/tutorials/the-4-ds-of-ai-fluency-behavioral-indicators'
  },
  {
    slug: 'what-happens-when-you-talk-to-ai',
    titleEn: 'What happens when you talk to AI?',
    titleZh: '当你和 AI 对话时，背后发生了什么？',
    descriptionZh: '当你向 AI 发送消息时，会有一个看似"思考"的瞬间。这段视频带你了解底层到底发生了什么：AI 如何逐词预测、又为何不是逐词思考。',
    durationMin: 5,
    category: 'AI 通识',
    track: 'ai-fluency',
    youtubeUrl: 'https://www.youtube.com/watch?v=j1Vk6Y-23CY',
    originalUrl: 'https://academy.claude.com/tutorials/what-happens-when-you-talk-to-ai'
  },
  {
    slug: 'can-you-trust-what-ai-tells-you',
    titleEn: 'Can you trust what AI tells you?',
    titleZh: '你能相信 AI 告诉你的内容吗？',
    descriptionZh: '向 AI 提问，它给出的答案往往自信、有条理、甚至带引用。但你真的能相信它吗？本教程讲解如何批判性地看待 AI 的输出。',
    durationMin: 5,
    category: 'AI 通识',
    track: 'ai-fluency',
    youtubeUrl: 'https://www.youtube.com/watch?v=cIMlBw2nqfA',
    originalUrl: 'https://academy.claude.com/tutorials/can-you-trust-what-ai-tells-you'
  },
  {
    slug: 'what-does-ai-know-about-me',
    titleEn: 'What does AI know about me?',
    titleZh: 'AI 对我的了解有多少？',
    descriptionZh: '人们有时会向 AI 倾诉不愿公开的内容——医疗疑问、财务担忧、纠结的邮件。当你提供这些信息时，AI 实际"知道"了什么？本教程解析数据隐私边界。',
    durationMin: 5,
    category: 'AI 通识',
    track: 'ai-fluency',
    youtubeUrl: 'https://www.youtube.com/watch?v=ANDl5Tkru7g',
    originalUrl: 'https://academy.claude.com/tutorials/what-does-ai-know-about-me'
  },
  {
    slug: 'why-do-ai-models-hallucinate',
    titleEn: 'Why do AI models hallucinate?',
    titleZh: '为什么 AI 模型会产生幻觉？',
    descriptionZh: '讲解 AI 研究者口中"幻觉"的真正含义、它为何会出现，以及你能在对话中识别幻觉的实用策略。',
    durationMin: 5,
    category: 'AI 通识',
    track: 'ai-fluency',
    youtubeUrl: 'https://www.youtube.com/watch?v=005JLRt3gXI',
    originalUrl: 'https://academy.claude.com/tutorials/why-do-ai-models-hallucinate'
  },
  {
    slug: 'what-is-sycophancy-in-ai-models',
    titleEn: 'What is sycophancy in AI models?',
    titleZh: '什么是 AI 模型中的谄媚现象？',
    descriptionZh: '讲解研究者所说的"谄媚"（sycophancy）是什么、它更容易在哪些对话场景中出现，以及引导 AI 趋向真实的策略。',
    durationMin: 6,
    category: 'AI 通识',
    track: 'ai-fluency',
    youtubeUrl: 'https://www.youtube.com/watch?v=nvbq39yVYRk',
    originalUrl: 'https://academy.claude.com/tutorials/what-is-sycophancy-in-ai-models'
  },
  {
    slug: 'why-does-bias-exist-in-ai-models',
    titleEn: 'Why does bias exist in AI models?',
    titleZh: '为什么 AI 模型中会存在偏见？',
    descriptionZh: '讲解偏见是什么、它可能如何产生，以及你在与 AI 对话中识别偏见的策略。',
    durationMin: 4,
    category: 'AI 通识',
    track: 'ai-fluency',
    youtubeUrl: 'https://www.youtube.com/watch?v=RnOWJoHU_NY',
    originalUrl: 'https://academy.claude.com/tutorials/why-does-bias-exist-in-ai-models'
  },
  {
    slug: 'writing-an-ai-diligence-statement',
    titleEn: 'Writing an AI diligence statement',
    titleZh: '撰写 AI 尽责声明',
    descriptionZh: '为你工作中的 AI 使用创建透明、具体的披露声明，清晰说明哪些环节由 AI 参与。',
    durationMin: 15,
    category: 'AI 通识',
    track: 'ai-fluency',
    youtubeUrl: 'https://www.youtube.com/watch?v=QbLf2zb3oPc',
    originalUrl: 'https://academy.claude.com/tutorials/writing-an-ai-diligence-statement'
  },
  {
    slug: 'tokens-and-embeddings',
    titleEn: 'Tokens: why some inputs cost more than others',
    titleZh: 'Token：为什么有些输入成本更高？',
    descriptionZh: 'Claude 的使用以 token 计量。无论你在监控账单还是担心触发限流，token 都是计量单位。了解 token 是什么、如何预估一段文本会用多少 token，以及 token 如何编码语义。',
    durationMin: 15,
    category: 'AI 通识',
    track: 'ai-fluency',
    originalUrl: 'https://academy.claude.com/tutorials/tokens-and-embeddings'
  },
  {
    slug: 'parametric-memory-and-context',
    titleEn: 'How context affects Claude\'s performance and cost',
    titleZh: '上下文如何影响 Claude 的性能与成本',
    descriptionZh: 'Claude 对世界的认知，要么是在训练时固化进模型的，要么是当前上下文的一部分。了解答案来自哪里、你可能在哪些地方用了超出预期的 token，以及如何有意识地在成本与质量之间权衡。',
    durationMin: 20,
    category: 'AI 通识',
    track: 'ai-fluency',
    originalUrl: 'https://academy.claude.com/tutorials/parametric-memory-and-context'
  },
  {
    slug: 'getting-good-at-claude-a-research-backed-curriculum',
    titleEn: 'Getting good at Claude: A research-backed curriculum',
    titleZh: '变得擅长使用 Claude：基于研究的课程框架',
    descriptionZh: '介绍关于"人们如何变得越来越会用 Claude"的研究发现，以及一个可供你的组织借鉴的课程模型。',
    durationMin: 6,
    category: 'AI 通识',
    track: 'ai-fluency',
    originalUrl: 'https://academy.claude.com/tutorials/getting-good-at-claude-a-research-backed-curriculum'
  },
  {
    slug: 'the-ai-fluency-index',
    titleEn: 'Anthropic Education Report: The AI Fluency Index',
    titleZh: 'Anthropic 教育报告：AI 素养指数',
    descriptionZh: 'Anthropic 的 AI 素养指数通过数千条 Claude.ai 对话，测量 11 项可观察的行为，以理解人们如何培养 AI 协作能力。',
    durationMin: 10,
    category: 'AI 通识',
    track: 'ai-fluency',
    originalUrl: 'https://academy.claude.com/tutorials/the-ai-fluency-index'
  },
  {
    slug: 'a-discussion-guide-for-the-ai-fluency-index',
    titleEn: 'A discussion guide for the AI Fluency Index',
    titleZh: 'AI 素养指数讨论指南',
    descriptionZh: '探索如何在你的组织内围绕 AI 素养开展讨论与建设。',
    durationMin: 10,
    category: 'AI 通识',
    track: 'ai-fluency',
    youtubeUrl: 'https://www.youtube.com/watch?v=s8Eg3imSLlY',
    originalUrl: 'https://academy.claude.com/tutorials/a-discussion-guide-for-the-ai-fluency-index'
  },

  // ===== Claude.ai 产品类 =====
  {
    slug: 'getting-started-with-claude-ai',
    titleEn: 'Getting started with Claude.ai',
    titleZh: 'Claude.ai 快速上手',
    descriptionZh: '学习如何通过高效提示、文档上传、搜索功能、个性化设置，以及扩展思考（extended thinking）与研究模式等高级功能，最大化你的 Claude.ai 体验。',
    durationMin: 5,
    category: 'Claude.ai',
    track: 'products',
    product: 'claude-ai',
    youtubeUrl: 'https://www.youtube.com/watch?v=0vZ_UVLhSQQ',
    originalUrl: 'https://academy.claude.com/tutorials/getting-started-with-claude-ai'
  },
  {
    slug: 'intro-to-projects',
    titleEn: 'Intro to Projects',
    titleZh: 'Projects 项目功能入门',
    descriptionZh: '了解 Projects 如何通过更有序、高效的对话，帮你梳理工作流，让 Claude 携带可复用的上下文。',
    durationMin: 7,
    category: 'Claude.ai',
    track: 'products',
    product: 'claude-ai',
    youtubeUrl: 'https://www.youtube.com/watch?v=GJ5jTgcbRHA',
    originalUrl: 'https://academy.claude.com/tutorials/intro-to-projects'
  },
  {
    slug: 'choosing-the-right-claude-model',
    titleEn: 'Choosing the right Claude model',
    titleZh: '选择合适的 Claude 模型',
    descriptionZh: '学习何时使用 Haiku、Sonnet、Opus 或 Fable，以获得更好的结果并保持在你的速率限制内。一份挑选合适 Claude 模型的实用指南。',
    durationMin: 5,
    category: 'Claude.ai',
    track: 'products',
    product: 'claude-ai',
    originalUrl: 'https://academy.claude.com/tutorials/choosing-the-right-claude-model'
  },
  {
    slug: 'connect-your-tools-to-unlock-a-smarter-more-capable-ai-companion',
    titleEn: 'Connect your tools to unlock a smarter, more capable AI companion',
    titleZh: '连接你的工具，解锁更智能、更强大的 AI 伙伴',
    descriptionZh: '了解如何通过 Connectors（连接器）功能，将第三方工具与应用程序连接到 Claude，跨平台访问你的数据。',
    durationMin: 6,
    category: 'Claude.ai',
    track: 'products',
    product: 'claude-ai',
    youtubeUrl: 'https://www.youtube.com/watch?v=4PtGWgEO0ME',
    originalUrl: 'https://academy.claude.com/tutorials/connect-your-tools-to-unlock-a-smarter-more-capable-ai-companion'
  },
  {
    slug: 'create-and-edit-files-with-claude-to-eliminate-hours-of-busy-work',
    titleEn: 'Create and edit files with Claude to eliminate hours of busy work',
    titleZh: '用 Claude 创建和编辑文件，省去数小时的琐碎工作',
    descriptionZh: '了解 Claude 如何直接创建和编辑文件——包括电子表格、文档、演示文稿和 PDF，免去手工操作。',
    durationMin: 10,
    category: 'Claude.ai',
    track: 'products',
    product: 'claude-ai',
    youtubeUrl: 'https://www.youtube.com/watch?v=EV89Ws8Ui9Y',
    originalUrl: 'https://academy.claude.com/tutorials/create-and-edit-files-with-claude-to-eliminate-hours-of-busy-work'
  },
  {
    slug: 'building-a-powerpoint-with-claude',
    titleEn: 'Building a PowerPoint with Claude',
    titleZh: '用 Claude 制作 PowerPoint 演示文稿',
    descriptionZh: 'Claude for PowerPoint 让你无需离开应用即可构建和编辑演示文稿。你描述需求，Claude 生成符合品牌规范的幻灯片。视频讲解基础：从提示词新建演示文稿、编辑幻灯片内容，并始终保持品牌一致。',
    durationMin: 4,
    category: 'Claude.ai',
    track: 'products',
    product: 'claude-ai',
    youtubeUrl: 'https://www.youtube.com/watch?v=TxS-1invhzg',
    originalUrl: 'https://academy.claude.com/tutorials/building-a-powerpoint-with-claude'
  },
  {
    slug: 'claude-for-financial-services-overview',
    titleEn: 'Claude for financial services overview',
    titleZh: 'Claude 金融服务概览',
    descriptionZh: '概述 Claude 如何为金融专业人士提供研究、分析与文档创建等 AI 辅助。',
    durationMin: 4,
    category: 'Claude.ai',
    track: 'products',
    product: 'claude-ai',
    originalUrl: 'https://academy.claude.com/tutorials/claude-for-financial-services-overview'
  },
  {
    slug: 'financial-analysis-workflows-with-claude',
    titleEn: 'Financial analysis workflows with Claude',
    titleZh: '用 Claude 进行财务分析工作流',
    descriptionZh: '使用三阶段方法学习完整的财务分析工作流：检索数据、分析信息、创建专业交付物。',
    durationMin: 20,
    category: 'Claude.ai',
    track: 'products',
    product: 'claude-ai',
    originalUrl: 'https://academy.claude.com/tutorials/financial-analysis-workflows-with-claude'
  },
  {
    slug: 'claude-enterprise-administrator-guide',
    titleEn: 'Claude Enterprise Administrator Guide',
    titleZh: 'Claude 企业版管理员指南',
    descriptionZh: '通过四个阶段讲解成功的 Claude 企业部署：技术设置、变革管理与发布、赋能与培训、规模化推广。包含 Claude Code 席位配置与完整资源目录。',
    durationMin: 20,
    category: 'Claude.ai',
    track: 'products',
    product: 'claude-ai',
    youtubeUrl: 'https://www.youtube.com/watch?v=6eBSHbLKuN0',
    originalUrl: 'https://academy.claude.com/tutorials/claude-enterprise-administrator-guide'
  },

  // ===== Claude Cowork 产品类 =====
  {
    slug: 'get-started-in-claude-cowork-in-three-steps',
    titleEn: 'Get started in Claude Cowork in three steps',
    titleZh: '三步上手 Claude Cowork',
    descriptionZh: '首次任务前的三个准备步骤：打开桌面应用、运行引导式设置、将 Cowork 指向工作所在的位置。',
    durationMin: 4,
    category: 'Claude Cowork',
    track: 'products',
    product: 'claude-cowork',
    originalUrl: 'https://academy.claude.com/tutorials/get-started-in-claude-cowork-in-three-steps'
  },
  {
    slug: 'customize-claude-cowork',
    titleEn: 'Customize Claude Cowork',
    titleZh: '自定义 Claude Cowork',
    descriptionZh: '让 Claude Cowork 贴合你或你团队工作方式的设置：添加适合你角色的 Skills 与 Plugins。',
    durationMin: 7,
    category: 'Claude Cowork',
    track: 'products',
    product: 'claude-cowork',
    originalUrl: 'https://academy.claude.com/tutorials/customize-claude-cowork'
  },
  {
    slug: 'delegating-your-first-task-in-claude-cowork',
    titleEn: 'Delegating your first task in Claude Cowork',
    titleZh: '在 Claude Cowork 中委派你的第一个任务',
    descriptionZh: 'Claude Cowork 让你把完整任务交给 Claude——直接操作你电脑上的文件、已连接的工具与浏览器。视频讲解基础：设置文件夹访问与连接器、委派第一个任务，并在 Claude 改动你的机器前审查它的计划。',
    durationMin: 4,
    category: 'Claude Cowork',
    track: 'products',
    product: 'claude-cowork',
    youtubeUrl: 'https://www.youtube.com/watch?v=Lbml7IuGJYw',
    originalUrl: 'https://academy.claude.com/tutorials/delegating-your-first-task-in-claude-cowork'
  },
  {
    slug: 'delegating-and-scheduling-tasks-in-claude-cowork',
    titleEn: 'Delegating and scheduling tasks in Claude Cowork',
    titleZh: '委派并定时安排 Claude Cowork 任务',
    descriptionZh: 'Claude Cowork 可委派完整的多步骤工作。你可以随时与 Claude 协作提供输入，也可以让任务按日程自动运行。视频演示如何为重要通话做准备：从日历、Slack、邮件和历史会议笔记中拉取上下文，并设置按你偏好日程自动运行的循环任务。',
    durationMin: 4,
    category: 'Claude Cowork',
    track: 'products',
    product: 'claude-cowork',
    youtubeUrl: 'https://www.youtube.com/watch?v=tYOI-WoLS_o',
    originalUrl: 'https://academy.claude.com/tutorials/delegating-and-scheduling-tasks-in-claude-cowork'
  },
  {
    slug: 'claude-cowork-enterprise-administrator-guide',
    titleEn: 'Claude Cowork Enterprise Admin Guide',
    titleZh: 'Claude Cowork 企业版管理员指南',
    descriptionZh: 'Claude Cowork 将 Claude 的代理能力带入 Claude 桌面应用，实现超越编程的多步骤知识工作。本指南讲解企业部署。',
    durationMin: 20,
    category: 'Claude Cowork',
    track: 'products',
    product: 'claude-cowork',
    originalUrl: 'https://academy.claude.com/tutorials/claude-cowork-enterprise-administrator-guide'
  },
  {
    slug: 'choosing-between-claude-cowork-or-chat',
    titleEn: 'Choosing between Claude Cowork or Chat',
    titleZh: '选择 Claude Cowork 还是 Chat',
    descriptionZh: '同一个 Claude，两种工作方式。Chat 是你逐步引导的对话；Cowork 是一种委派：你描述目标，Claude 跨文件与工具工作，你回来时拿到成品。',
    durationMin: 5,
    category: 'Claude Cowork',
    track: 'products',
    product: 'claude-cowork',
    originalUrl: 'https://academy.claude.com/tutorials/choosing-between-claude-cowork-or-chat'
  },

  // ===== Claude Tag 产品类 =====
  {
    slug: 'best-practices-using-claude-tag',
    titleEn: 'Best practices for using Claude Tag',
    titleZh: 'Claude Tag 使用最佳实践',
    descriptionZh: '如何在你的组织中使用 Claude Tag：设置它拥有上下文的位置、写出顺利的任务、从一次性请求过渡到它能自主运行的工作。',
    durationMin: 10,
    category: 'Claude Tag',
    track: 'products',
    product: 'claude-tag',
    originalUrl: 'https://academy.claude.com/tutorials/best-practices-using-claude-tag'
  },
  {
    slug: 'tasks-to-try-with-claude-tag-in-your-workspace',
    titleEn: 'Tasks to try with Claude Tag in your workspace',
    titleZh: '在 workspace 中尝试交给 Claude Tag 的任务',
    descriptionZh: '一份可尝试交给 Claude Tag 的任务目录，每个任务都附带启动它的提示词，以及它会返回什么。',
    durationMin: 9,
    category: 'Claude Tag',
    track: 'products',
    product: 'claude-tag',
    originalUrl: 'https://academy.claude.com/tutorials/tasks-to-try-with-claude-tag-in-your-workspace'
  },

  // ===== Claude Code 产品类 =====
  {
    slug: 'choosing-the-right-effort-level-in-claude-code',
    titleEn: 'Choosing the right effort level in Claude Code',
    titleZh: '选择合适的 Claude Code 投入级别',
    descriptionZh: 'Effort（投入级别）告诉模型要为一项任务投入多少资源。何时调低、何时调高，以及为什么默认值是合适的起点。',
    durationMin: 15,
    category: 'Claude Code',
    track: 'developer',
    product: 'claude-code',
    originalUrl: 'https://academy.claude.com/tutorials/choosing-the-right-effort-level-in-claude-code'
  },
  {
    slug: 'creating-your-first-skill',
    titleEn: 'Creating your first skill',
    titleZh: '创建你的第一个 Skill',
    descriptionZh: '逐步演练在 Claude Code 中创建你的第一个 Skill，从设置到执行。',
    durationMin: 4,
    category: 'Claude Code',
    track: 'developer',
    product: 'claude-code',
    youtubeUrl: 'https://www.youtube.com/watch?v=Wx6_vjFFyHM',
    originalUrl: 'https://academy.claude.com/tutorials/creating-your-first-skill'
  },
  {
    slug: 'configuration-and-multi-file-skills',
    titleEn: 'Configuration and multi-file skills',
    titleZh: '配置与多文件 Skill',
    descriptionZh: '学习如何在 Claude Code 中配置 Skill，并处理多文件 Skill 结构。',
    durationMin: 4,
    category: 'Claude Code',
    track: 'developer',
    product: 'claude-code',
    youtubeUrl: 'https://www.youtube.com/watch?v=98KaK_rn5rQ',
    originalUrl: 'https://academy.claude.com/tutorials/configuration-and-multi-file-skills'
  },

  // ===== Claude Platform / 非营利 =====
  {
    slug: 'claude-for-nonprofits-partnership-guide-for-all-users',
    titleEn: 'Claude for nonprofits partnership guide for all users',
    titleZh: 'Claude 非营利组织合作指南（面向所有用户）',
    descriptionZh: '一份自定进度的指南，帮助非营利组织员工建立使用 Claude 的信心，并发现适用于其角色的实用场景。',
    durationMin: 2,
    category: '非营利',
    track: 'products',
    originalUrl: 'https://academy.claude.com/tutorials/claude-for-nonprofits-partnership-guide-for-all-users'
  },
  {
    slug: 'claude-for-nonprofits-partnership-success-guide-for-admins',
    titleEn: 'Claude for nonprofits partnership success guide for admins',
    titleZh: 'Claude 非营利组织合作成功指南（面向管理员）',
    descriptionZh: '一个分阶段实施框架，帮助非营利组织管理员在组织内启动、扩展并持续推广 Claude 的应用。',
    durationMin: 4,
    category: '非营利',
    track: 'products',
    originalUrl: 'https://academy.claude.com/tutorials/claude-for-nonprofits-partnership-success-guide-for-admins'
  },
  {
    slug: 'claude-for-teachers-in-action',
    titleEn: 'Claude for Teachers in action',
    titleZh: 'Claude for Teachers 实战演示',
    descriptionZh: '看一位高中教师如何使用 Claude for Teachers，从已有的班级数据构建对课堂的理解，并据此规划差异化课程。',
    durationMin: null,
    category: '教育',
    track: 'products',
    youtubeUrl: 'https://www.youtube.com/watch?v=255IGB63nTY',
    originalUrl: 'https://academy.claude.com/tutorials/claude-for-teachers-in-action'
  }
];

export const getTutorialBySlug = (slug: string): Tutorial | undefined =>
  ALL_TUTORIALS.find(t => t.slug === slug);
