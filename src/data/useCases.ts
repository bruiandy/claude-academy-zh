// Use Cases 使用案例数据（对应原站 /use-cases/* 与 /all?kind=use-case）
// 原站约 24+ 个实战案例，按角色/职能分类，中文版此前完全缺失。此处 1:1 收录。

export interface UseCase {
  slug: string;
  titleEn: string;
  titleZh: string;
  descriptionZh: string;
  category: string;       // 职能分类：Sales / Marketing / Product / Data / Education / Finance / Engineering / Personal / HR / Operations / Legal / Research
  durationMin: number | null;
  product?: string;       // 关联产品 slug
  youtubeUrl?: string;   // 原站带视频时附上链接
  originalUrl: string;
}

export const ALL_USE_CASES: UseCase[] = [
  // ===== Sales 销售 =====
  {
    slug: 'account-research-brief',
    titleEn: 'Account research',
    titleZh: '客户账户调研',
    descriptionZh: '生成一页式的简明简报，说明客户近期发生了什么变化，以及你所处的位置。',
    category: 'Sales',
    durationMin: 10,
    product: 'claude-cowork',
    originalUrl: 'https://academy.claude.com/use-cases/account-research-brief'
  },
  {
    slug: 'account-tracking',
    titleEn: 'Account tracking',
    titleZh: '客户账户追踪',
    descriptionZh: '以绿/黄/红三色呈现客户健康度，并给出本周的两个关键动作。',
    category: 'Sales',
    durationMin: 10,
    product: 'claude-cowork',
    originalUrl: 'https://academy.claude.com/use-cases/account-tracking'
  },
  {
    slug: 'build-a-battle-card-library',
    titleEn: 'Build a battle card library',
    titleZh: '构建竞争情报卡片库',
    descriptionZh: '将销售失利与竞品数据转化为可随时使用的 battle card，包含制胜话术、异议处理和差异化策略，供团队在实际通话中使用。',
    category: 'Sales',
    durationMin: 10,
    product: 'claude-cowork',
    originalUrl: 'https://academy.claude.com/use-cases/build-a-battle-card-library'
  },
  {
    slug: 'call-prep-sheet',
    titleEn: 'Call prep',
    titleZh: '通话准备',
    descriptionZh: '说明当前交易进展，以及本次通话该问什么。',
    category: 'Sales',
    durationMin: 10,
    product: 'claude-cowork',
    originalUrl: 'https://academy.claude.com/use-cases/call-prep-sheet'
  },

  // ===== Marketing 市场营销 =====
  {
    slug: 'adapt-content-across-platforms',
    titleEn: 'Adapt content across platforms',
    titleZh: '跨平台适配内容',
    descriptionZh: '将一份内容转化为适配不同平台与受众的多种格式。',
    category: 'Marketing',
    durationMin: 15,
    product: 'claude-ai',
    originalUrl: 'https://academy.claude.com/use-cases/adapt-content-across-platforms'
  },
  {
    slug: 'analyze-campaign-performance',
    titleEn: 'Analyze campaign performance',
    titleZh: '分析营销活动表现',
    descriptionZh: '分析营销活动数据，识别表现最好与最差的渠道，并给出下个季度的具体预算重分配建议。',
    category: 'Marketing',
    durationMin: 10,
    product: 'claude-ai',
    originalUrl: 'https://academy.claude.com/use-cases/analyze-campaign-performance'
  },
  {
    slug: 'analyze-fundraising-performance',
    titleEn: 'Analyze fundraising performance',
    titleZh: '分析筹款表现',
    descriptionZh: '分析邮件、活动、直邮、社交媒体等渠道的表现，识别投资回报率最高的渠道，并优化资源分配以最大化筹款效果。',
    category: 'Marketing',
    durationMin: 15,
    product: 'claude-cowork',
    originalUrl: 'https://academy.claude.com/use-cases/analyze-fundraising-performance'
  },
  {
    slug: 'audit-a-folder-of-visual-assets-against-your-guidelines',
    titleEn: 'Audit a folder of visual assets against your guidelines',
    titleZh: '对照品牌规范审查视觉素材',
    descriptionZh: '在 Claude Cowork 中，Claude Opus 可全分辨率读取大量图片导出文件，识别不符合品牌规范的色彩、过期 logo 与缺失的法律文案，并带回带置信度评级的分类违规清单。',
    category: 'Marketing',
    durationMin: 15,
    product: 'claude-cowork',
    originalUrl: 'https://academy.claude.com/use-cases/audit-a-folder-of-visual-assets-against-your-guidelines'
  },
  {
    slug: 'campaign-brief',
    titleEn: 'Build a campaign brief',
    titleZh: '制作营销活动简报',
    descriptionZh: '从粗略笔记生成一份格式规范的营销活动简报。',
    category: 'Marketing',
    durationMin: 10,
    product: 'claude-cowork',
    originalUrl: 'https://academy.claude.com/use-cases/campaign-brief'
  },
  {
    slug: 'build-customer-personas',
    titleEn: 'Build customer personas',
    titleZh: '构建客户画像',
    descriptionZh: '基于研究数据合成具有人口统计特征、目标与痛点的客户画像。',
    category: 'Marketing',
    durationMin: 15,
    product: 'claude-cowork',
    originalUrl: 'https://academy.claude.com/use-cases/build-customer-personas'
  },
  {
    slug: 'competitor-comparison',
    titleEn: 'Build the competitive comparison doc',
    titleZh: '构建竞品对比文档',
    descriptionZh: 'Cowork 对照竞品材料与你的定位，写出赢/输/平的结论，并输出销售演示文稿与 Excel 对比矩阵。',
    category: 'Marketing',
    durationMin: 10,
    product: 'claude-cowork',
    originalUrl: 'https://academy.claude.com/use-cases/competitor-comparison'
  },

  // ===== Product 产品 =====
  {
    slug: 'analyze-patterns-in-user-feedback',
    titleEn: 'Analyze patterns in user feedback',
    titleZh: '分析用户反馈中的模式',
    descriptionZh: '在用户反馈中寻找反复出现的主题与痛点，将有意义模式从噪声中分离出来。',
    category: 'Product',
    durationMin: 15,
    product: 'claude-ai',
    originalUrl: 'https://academy.claude.com/use-cases/analyze-patterns-in-user-feedback'
  },

  // ===== Data 数据 =====
  {
    slug: 'answer-the-adhoc',
    titleEn: 'Answer the ad-hoc data question',
    titleZh: '回答临时数据问题',
    descriptionZh: '给出查询、图表，以及用通俗语言写成的答案。',
    category: 'Data',
    durationMin: 10,
    product: 'claude-cowork',
    originalUrl: 'https://academy.claude.com/use-cases/answer-the-adhoc'
  },

  // ===== Education 教育 =====
  {
    slug: 'adapt-a-standard-textbook-page-to-every-reading-level',
    titleEn: 'Adapt a standard textbook page to every reading level',
    titleZh: '将标准教科书页面适配到每个阅读水平',
    descriptionZh: 'Claude Opus 5 详细读取单一源页面，并为每个需要的受众返回成品文件。这里，一个教科书跨页变成了幻灯片，以及三个层次的阅读讲义。',
    category: 'Education',
    durationMin: 15,
    product: 'claude-cowork',
    originalUrl: 'https://academy.claude.com/use-cases/adapt-a-standard-textbook-page-to-every-reading-level'
  },
  {
    slug: 'apply-a-formula-as-you-learn-it-in-chat-with-claude',
    titleEn: 'Apply a formula as you learn it',
    titleZh: '边学边应用公式',
    descriptionZh: 'Claude 在对话中直接画出空白散点图——你放置点、拖动它们，观察拟合线如何变化。适合已经会计算但还没建立直觉的情况。',
    category: 'Education',
    durationMin: 15,
    product: 'claude-ai',
    youtubeUrl: 'https://www.youtube.com/watch?v=Ii99RU3mOJM',
    originalUrl: 'https://academy.claude.com/use-cases/apply-a-formula-as-you-learn-it-in-chat-with-claude'
  },
  {
    slug: 'bring-your-whiteboard-lesson-to-life',
    titleEn: 'Bring your whiteboard lesson to life',
    titleZh: '让白板课程生动起来',
    descriptionZh: '通过与 Claude 一起边画边讲，演练如何讲授一个概念。视觉内容作为来回交互的一部分流式呈现——先是你的备课思考工具，如果进一步深入，也是教学工具。',
    category: 'Education',
    durationMin: 15,
    product: 'claude-ai',
    youtubeUrl: 'https://www.youtube.com/watch?v=Ii99RU3mOJM',
    originalUrl: 'https://academy.claude.com/use-cases/bring-your-whiteboard-lesson-to-life'
  },
  {
    slug: 'chart-your-data-before-you-commit',
    titleEn: 'Chart your data in conversation with Claude before you commit to a reading',
    titleZh: '在对话中绘制数据图表再下结论',
    descriptionZh: '上传 CSV，Claude 在对话中内联构建相关性网格，标记值得二次关注的模式。这些标记只是起点——你点进感兴趣的，对话由此展开。',
    category: 'Education',
    durationMin: 15,
    product: 'claude-ai',
    youtubeUrl: 'https://www.youtube.com/watch?v=Ii99RU3mOJM',
    originalUrl: 'https://academy.claude.com/use-cases/chart-your-data-before-you-commit'
  },

  // ===== Finance 财务 =====
  {
    slug: 'build-analysis-from-browser-charts-and-folder-data',
    titleEn: 'Build analysis from browser charts and folder data',
    titleZh: '基于浏览器图表与文件夹数据构建分析',
    descriptionZh: '从零散的董事会幻灯片中提取季度收入，再从 FRED 抓取 GDP 与通胀数据。Cowork 创建对比图表，展示你的增长相对宏观环境的表现。',
    category: 'Finance',
    durationMin: 15,
    product: 'claude-cowork',
    originalUrl: 'https://academy.claude.com/use-cases/build-analysis-from-browser-charts-and-folder-data'
  },
  {
    slug: 'build-financial-models',
    titleEn: 'Build financial models',
    titleZh: '构建财务模型',
    descriptionZh: '创建带有完整财务模型、情景规划与风险评估的投资分析。',
    category: 'Finance',
    durationMin: 20,
    product: 'claude-cowork',
    youtubeUrl: 'https://www.youtube.com/watch?v=NcBnxbEC0Ng',
    originalUrl: 'https://academy.claude.com/use-cases/build-financial-models'
  },

  // ===== Engineering 工程 =====
  {
    slug: 'ask-the-company',
    titleEn: "Build an 'Ask the Company' agent",
    titleZh: '构建"询问公司"智能体',
    descriptionZh: '基于你的 wiki、代码与数据仓库，用通俗语言回答问题。',
    category: 'Engineering',
    durationMin: 10,
    product: 'claude-cowork',
    originalUrl: 'https://academy.claude.com/use-cases/ask-the-company'
  },

  // ===== Personal 个人 =====
  {
    slug: 'build-a-custom-bucket-list-app',
    titleEn: 'Build a custom bucket list',
    titleZh: '构建自定义愿望清单应用',
    descriptionZh: '将你设想过的任何追踪器、整理器或目标系统，变成可用的交互式工具。描述你想要什么，看 Claude 把它构建出来。',
    category: 'Personal',
    durationMin: 15,
    product: 'claude-cowork',
    originalUrl: 'https://academy.claude.com/use-cases/build-a-custom-bucket-list-app'
  },
  {
    slug: 'build-interactive-diagram-tools',
    titleEn: 'Build interactive diagram tools',
    titleZh: '构建交互式图表工具',
    descriptionZh: '从人体系统到分子结构，将详细的提示词转化为具有你所指定深度与设计的可运行参考应用。',
    category: 'Personal',
    durationMin: 15,
    product: 'claude-cowork',
    originalUrl: 'https://academy.claude.com/use-cases/build-interactive-diagram-tools'
  },
  {
    slug: 'clean-up-promotional-emails',
    titleEn: 'Clean up promotional emails',
    titleZh: '清理促销邮件',
    descriptionZh: 'Claude in Chrome 可扫描你的收件箱，识别促销与营销邮件，并标记供你审查。你决定批量删除哪些，而不必一封封点。',
    category: 'Personal',
    durationMin: 15,
    product: 'claude-ai',
    originalUrl: 'https://academy.claude.com/use-cases/clean-up-promotional-emails'
  },

  // ===== 跨工具 =====
  {
    slug: 'build-a-daily-briefing-across-your-tools',
    titleEn: 'Build a daily briefing across your tools',
    titleZh: '跨工具生成每日简报',
    descriptionZh: '生成一份每日简报，从 Slack、Notion 和团队仪表盘拉取信息，凸显优先级与你分别扫描各平台时会错过的关联。',
    category: 'Operations',
    durationMin: 15,
    product: 'claude-cowork',
    youtubeUrl: 'https://www.youtube.com/watch?v=UAmKyyZ-b9E',
    originalUrl: 'https://academy.claude.com/use-cases/build-a-daily-briefing-across-your-tools'
  }
];

export const getUseCaseBySlug = (slug: string): UseCase | undefined =>
  ALL_USE_CASES.find(u => u.slug === slug);

export const USE_CASE_CATEGORIES = Array.from(new Set(ALL_USE_CASES.map(u => u.category)));
