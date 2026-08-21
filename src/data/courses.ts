export interface CourseMeta {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  lessonsCount: number;
  swatch: 'peach' | 'cactus' | 'heather';
  track: 'ai-fluency' | 'products' | 'developer';
  isPopular?: boolean;
  status: 'available' | 'in-progress';
}

export const ALL_COURSES: CourseMeta[] = [
  // =========================================================================
  // 1. Claude 产品体系与实战 (Claude Product Suite)
  // =========================================================================
  {
    id: 'claude-101',
    title: 'Claude 101：从入门到精通',
    category: '产品实操',
    description: '掌握 Claude.ai 核心功能：对话技巧、Projects 项目知识库、Artifacts 交互工件、Connectors 与 Deep Research 深度研究。',
    duration: '2.5 小时',
    lessonsCount: 13,
    swatch: 'peach',
    track: 'products',
    isPopular: true,
    status: 'available'
  },
  {
    id: 'introduction-to-claude-cowork',
    title: 'Claude Cowork 入门指南',
    category: '桌面协同',
    description: '学习使用 Claude 桌面端进行长程任务托管、文件批量处理、插件开发与 Microsoft 365 协同。',
    duration: '2 小时',
    lessonsCount: 14,
    swatch: 'heather',
    track: 'products',
    status: 'available'
  },
  {
    id: 'claude-code-101',
    title: 'Claude Code 101：智能体编程入门',
    category: '终端编程',
    description: '在终端和 IDE 中通过 Claude Code 执行工程架构重构、自动化测试、CLAUDE.md 配置、Subagents 与 Hooks。',
    duration: '2 小时',
    lessonsCount: 13,
    swatch: 'cactus',
    track: 'developer',
    isPopular: true,
    status: 'available'
  },
  {
    id: 'introduction-to-model-context-protocol',
    title: 'MCP 模型上下文协议入门',
    category: '开源协议',
    description: '全面掌握 Anthropic 开源的 MCP 上下文协议架构：Tools 接口定义、Resources 资源挂载与 Server 独立调试。',
    duration: '1.5 小时',
    lessonsCount: 11,
    swatch: 'cactus',
    track: 'developer',
    isPopular: true,
    status: 'available'
  },
  
  
  {
    id: 'claude-code-in-action',
    title: 'Claude Code 实战演练',
    category: '实战案例',
    description: '真实企业级代码库实战：复杂 Bug 修复、自动化重构与 CI/CD 自动化流水线集成。',
    duration: '1 小时',
    lessonsCount: 10,
    swatch: 'cactus',
    track: 'developer',
    status: 'available'
  },
  
  
  {
    id: 'introduction-to-agent-skills',
    title: 'Agent Skills 智能体技能入门',
    category: '技能扩展',
    description: '为 Claude 赋予标准化、可复用的模块化技能与工具执行链。',
    duration: '1 小时',
    lessonsCount: 7,
    swatch: 'peach',
    track: 'developer',
    status: 'available'
  },
  {
    id: 'introduction-to-subagents',
    title: 'Subagents 子智能体入门',
    category: '智能体架构',
    description: '学习如何设计和调度并发 Subagents 子任务，实现工程隔离与复杂目标拆解。',
    duration: '45 分钟',
    lessonsCount: 5,
    swatch: 'heather',
    track: 'developer',
    status: 'available'
  },
  {
    id: 'model-context-protocol-advanced-topics',
    title: 'MCP 高级主题',
    category: '进阶协议',
    description: 'MCP 进阶：双向通知、流式传输、跨网络安全传输层（SSE/Stdio）与多 Server 路由。',
    duration: '1.5 小时',
    lessonsCount: 12,
    swatch: 'cactus',
    track: 'developer',
    status: 'available'
  },

  // =========================================================================
  // 2. AI 基础通识全集 (AI Fluency Collection)
  // =========================================================================
  {
    id: 'ai-fluency-framework-foundations',
    title: 'AI 素养：4D 协作框架基础',
    category: 'AI 通识核心',
    description: '掌握 Anthropic 官方人机协作 4D 框架：Delegation(委派)、Description(描述)、Discernment(鉴别) 与 Diligence(尽责)。',
    duration: '4 小时',
    lessonsCount: 13,
    swatch: 'peach',
    track: 'ai-fluency',
    isPopular: true,
    status: 'available'
  },
  {
    id: 'ai-capabilities-and-limitations',
    title: 'AI 能力与边界',
    category: 'AI 通识核心',
    description: '建立大语言模型的精准心智模型：Next-token 预测、参数知识库、工作记忆（上下文窗口）与可引导性。',
    duration: '3.5 小时',
    lessonsCount: 11,
    swatch: 'cactus',
    track: 'ai-fluency',
    isPopular: true,
    status: 'available'
  },
  {
    id: 'ai-fluency-for-builders',
    title: 'AI 素养：构建者专题',
    category: 'AI 行业应用',
    description: '软件工程师与产品经理如何运用 4D 框架审计代码质量、设计 System Prompt 并进行代码与 UX 鉴别。',
    duration: '2 小时',
    lessonsCount: 10,
    swatch: 'heather',
    track: 'ai-fluency',
    status: 'available'
  },
  
  
  {
    id: 'ai-fluency-for-students',
    title: 'AI 素养：学生专题',
    category: 'AI 学习方法',
    description: '指导学生将 AI 作为苏格拉底式的思考伙伴与职业规划顾问，提高独立思辨能力。',
    duration: '1 小时',
    lessonsCount: 6,
    swatch: 'cactus',
    track: 'ai-fluency',
    status: 'available'
  },
  {
    id: 'teaching-ai-fluency',
    title: '教学 AI 素养指南',
    category: '教学指南',
    description: '指导教师与培训师如何在组织或课堂中系统讲授 4D 协作框架。',
    duration: '1.5 小时',
    lessonsCount: 8,
    swatch: 'peach',
    track: 'ai-fluency',
    status: 'available'
  },
  
  
  
];
