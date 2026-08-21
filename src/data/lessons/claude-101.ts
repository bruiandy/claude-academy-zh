import { LessonLayoutProps } from '../../components/LessonLayout';

export const CLAUDE_101_LESSONS: Record<string, Omit<LessonLayoutProps, 'courseId' | 'courseTitle'>> = {
  "what-is-claude": {
    "lessonId": "what-is-claude",
    "lessonTitle": "1.Claude是什么？（Claude是什么？）",
    "lessonIndex": 0,
    "totalLessons": 13,
    "duration": "5 分钟",
          "outcomes": [
        "解释 Claude 是什么及其设计原则"
,
        "描述 Claude 的核心能力与普通聊天机器人的区别"
,
        "识别访问 Claude 的不同方式（网页、桌面、移动）"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-is-claude",
        "title": "1. Claude是什么？",
        "subtitle": "思维伙伴与宪法 AI 原则",
        "duration": "5 min"
      },
      {
        "id": "2",
        "slug": "your-first-conversation-with-claude",
        "title": "2. 与Claude的第一次对话",
        "subtitle": "界面导航与 C-B-I 提示词公式",
        "duration": "6 min"
      },
      {
        "id": "3",
        "slug": "getting-better-results",
        "title": "3. 获得更精准的回答",
        "subtitle": "XML 标签隔离与角色设定",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "claude-desktop-app-chat-cowork-code",
        "title": "4. 桌面端三大模式",
        "subtitle": "聊天、协同工作与代码工作流程",
        "duration": "7 min"
      },
      {
        "id": "5",
        "slug": "introduction-to-projects",
        "title": "5. 项目 项目知识库",
        "subtitle": "持久化上下文与团队协同",
        "duration": "10 min"
      },
      {
        "id": "6",
        "slug": "creating-with-artifacts",
        "title": "6. 文物交互工件",
        "subtitle": "独立代码与 UI 预览渲染面板",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "working-with-skills",
        "title": "7. Skills 自定义技能",
        "subtitle": "专属工作流配置与扩展",
        "duration": "10 min"
      },
      {
        "id": "8",
        "slug": "connecting-your-tools",
        "title": "8. Connectors 连接外部工具",
        "subtitle": "集成 Google Drive 与 GitHub",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "enterprise-search",
        "title": "9. 企业级全局搜索",
        "subtitle": "跨应用统一检索与分析",
        "duration": "7 min"
      },
      {
        "id": "10",
        "slug": "research-mode-for-deep-dives",
        "title": "10. 深度研究",
        "subtitle": "全自动长程联网调研与综合报告",
        "duration": "10 min"
      },
      {
        "id": "11",
        "slug": "claude-in-action-use-cases-by-role",
        "title": "11. 岗位实战案例库",
        "subtitle": "产品、工程、市场与运营实操",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "other-ways-to-work-with-claude",
        "title": "12. 更多高阶协同方式",
        "subtitle": "API, Console 与智能体开发",
        "duration": "7 min"
      },
      {
        "id": "13",
        "slug": "what-s-next",
        "title": "13. 总结与后续进阶路线",
        "subtitle": "获取认证徽章与社区资源",
        "duration": "5 min"
      }
    ],
        "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>Claude 不仅仅是一个聊天机器人——它是一个被设计成你的<strong>思考伙伴</strong>的 AI 助手。本课你将了解 Claude 与其他 AI 工具的不同之处，以及它如何帮助你处理各种各样的工作任务。</p>"
      },
      {
        "id": "sec-1",
        "title": "核心要点",
        "contentHtml": "<ul><li><strong>Claude 是服务于生活与工作的 AI 助手</strong>：从高层看，Claude 受一系列原则引导，避免产生有毒或歧视性输出、避免帮助人类从事违法或不道德活动，并总体上表现为一个安全、有益的 AI 系统。这种方法被称为<strong>宪法式 AI（Constitutional AI）</strong>，意味着 Claude 经过训练，与人类价值观对齐并透明运作。</li><li><strong>Claude 不止是聊天机器人</strong>：Claude 能处理各种对话与文本处理任务，同时保持较高的可靠性与可预测性，包括总结、搜索、创意与协作写作、问答、编程等等。把 Claude 想成一个思考伙伴，能帮你应对复杂问题、处理棘手情境，而不只是回答简单问题。</li><li><strong>Claude 被设计为可引导、可协作</strong>：Claude 可以接受关于性格、语气与行为的方向指示。用户反馈 Claude 产生有害输出的可能性低得多、更容易对话、也更可引导——你可以用更少的力气得到想要的输出。</li><li><strong>无论你在哪里工作都能访问 Claude</strong>：Claude 应用对 Free、Pro、Max、Team 与 Enterprise 所有套餐开放。登录后，你的对话、项目、记忆与偏好会在所有设备间同步。无论是在办公桌前还是移动中，Claude 都通过网页、桌面与移动应用可用。</li></ul>"
      },
      {
        "id": "sec-2",
        "title": "理解 Claude 的能力",
        "contentHtml": "<p>Claude 能帮助处理远超简单问答的广泛任务——从自动化到增强你工作的助手式伙伴关系。以下是 Claude 擅长的几个方面：</p><ul><li><strong>写作与内容创作</strong>：Claude 可以与你协作完成社交媒体帖子、专业邮件与复杂报告。因为 Claude 接受关于性格与语气的方向指示，你们可以一起在结构与清晰度上迭代，直到你的声音清晰呈现。</li><li><strong>研究与分析</strong>：Claude 帮你探索研究角度、整理发现并分析数据以提炼有意义的洞察。你可以上传文档，Claude 帮你理解复杂信息——这得益于 Claude 的大上下文窗口，可摄入 20 万+ token（约 500 页文本或更多），在 Pro、Max、Team 与 Enterprise 套餐配合支持的模型时最高可达 100 万 token，让 Claude 能在单次对话中考虑大量材料。</li><li><strong>编程辅助</strong>：编程是 Claude 最强的能力之一。Claude 在真实编码任务上的出色表现意味着它能跨多种编程语言帮你编写、调试和解释代码。</li><li><strong>问题解决与推理</strong>：Claude 能处理复杂的认知任务、数学问题、战略思考与分析以及研究。Claude 可以近乎即时回应，也可以花时间先推理——这项能力叫<strong>思考（Thinking）</strong>。当问题需要仔细分析时，Claude 会在回答前逐步推演。</li><li><strong>学习新事物</strong>：无论你在学习新技能、探索陌生领域还是应对复杂挑战，Claude 都能适应你的学习风格与节奏。学习模式（Learning mode）是 Claude 的一项新体验，它引导你的推理过程而不是直接给答案，帮助培养批判性思维。</li></ul>"
      },
      {
        "id": "sec-3",
        "title": "访问 Claude 的方式",
        "contentHtml": "<p>Claude 是智能本身——是你在这门课程中学习协作的 AI 助手。同样的智能通过多个界面提供，每个都适合不同类型的任务。</p><ul><li><strong>Claude.ai</strong>（以及配套的移动端与桌面端应用）：大多数人交互的主要方式。你可以提问、头脑风暴、创建与编辑文档等等。Claude.ai 非常适合对话、写作辅助、研究、分析与创建文件。这是本课程的重点。</li><li><strong>Claude Code</strong>：一个面向开发者的智能体编程工具，但也可用于桌面上的各种文件操作。Claude Code 能直接编辑文件、运行命令、创建提交。</li><li><strong>Claude Tag</strong>：把 Claude 直接带入 Slack。你可以在任何频道或对话的 AI 助手栏中与 Claude 聊天，或在线程中 @Claude。连接 Slack 后，Claude 会搜索你工作区的频道、私信与共享文件，为更好的回答与研究找到所需上下文。</li><li><strong>Claude Design</strong>：一个把想法变成可工作界面的专属空间。描述你想要什么——或从草图、截图开始——Claude 会构建一个可交互原型，你可以精修并交给团队。</li><li><strong>Claude for Microsoft 365</strong>：把 Claude 以侧边栏形式带入 Excel、PowerPoint、Word 与 Outlook，让你在已打开的文档内分析、起草与编辑，并在应用之间携带上下文。</li></ul>"
      },
      {
        "id": "sec-4",
        "title": "课程反思与下一步",
        "contentHtml": "<h3>课程反思</h3><p>当前工作中哪些任务可能受益于把 Claude 当作思考伙伴？看看你的日历（或者更好——让 Claude 帮你看），找出几个你可能想用 Claude 支持的任务。</p><h3>下一步</h3><p>下一课你将学习如何浏览 Claude 界面、开始你的第一次对话，并理解 Claude 如何回应你的消息的基础。</p>"
      }
    ],
    "nextLesson": {
      "slug": "your-first-conversation-with-claude",
      "title": "2. 与 Claude 的第一次对话"
    }
  },
  "your-first-conversation-with-claude": {
    "lessonId": "your-first-conversation-with-claude",
    "lessonTitle": "2. 与Claude的第一次对话（Your First Conversation with Claude）",
    "lessonIndex": 1,
    "totalLessons": 13,
    "duration": "15 分钟",
          "outcomes": [
        "与 Claude 开始新对话并浏览界面"
,
        "用清晰、具体的语言写出有效提示词"
,
        "上传文件与图像为 Claude 提供额外上下文"
,
        "用后续消息迭代精化 Claude 的回应"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-is-claude",
        "title": "1. Claude是什么？",
        "subtitle": "思维伙伴与宪法 AI 原则",
        "duration": "5 min"
      },
      {
        "id": "2",
        "slug": "your-first-conversation-with-claude",
        "title": "2. 与Claude的第一次对话",
        "subtitle": "界面导航与 C-B-I 提示词公式",
        "duration": "6 min"
      },
      {
        "id": "3",
        "slug": "getting-better-results",
        "title": "3. 获得更精准的回答",
        "subtitle": "XML 标签隔离与角色设定",
        "duration": "8 min"
      }
    ],
        "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>想象你面对一张空白页，正与一个庞大复杂的项目搏斗，不知道从哪里开始。如果有一个伙伴能帮你把它拆解开来呢？Claude 是一个强大、智能的协作者，能在你所有的工作中放大你的能力。<strong>Claude 带来 AI 智能，而你带来让工作有意义的上下文与专业能力。</strong></p>"
      },
      {
        "id": "sec-1",
        "title": "核心要点",
        "contentHtml": "<ul><li>Claude 是一个强大、智能的协作者，能在你所有的工作中放大你的能力。Claude 带来 AI 智能，但你带来让工作有意义的上下文与专业能力。</li><li>与 Claude 说话的最佳方式，就像与同事说话一样——自然、简洁、对话式。</li><li>在下次与 Claude 对话前考虑三点：<strong>设定情境</strong>（你的角色、目标与上下文）、<strong>定义任务</strong>（你希望 Claude 采取什么行动）、<strong>指定规则</strong>（风格、语气与示例）。</li><li>当你在聊天中上传相关文档或背景信息时，Claude 会在回应中考虑这些内容——把它想成一条捷径，让 Claude 理解你的需求。</li><li>Claude 真正的力量来自持续、频繁的沟通，而不是一次性的提示。</li></ul>"
      },
      {
        "id": "sec-2",
        "title": "写出有效的提示词",
        "contentHtml": "<p>所有与 Claude 的交互都始于提示词，这些提示词加上其他上下文会影响它的回应。在下次与 Claude 对话前，考虑几个要素：</p><ul><li><strong>设定情境</strong>：你的角色与目标是什么？有关于你工作的上下文是 Claude 应该知道的吗？</li><li><strong>定义任务</strong>：你希望 Claude 采取什么行动？写、分析、构建，还是其他？</li><li><strong>指定规则</strong>：你希望 Claude 使用什么风格或语气？有没有可以附上给 Claude 看的示例？</li></ul><h3>整合起来</h3><p>一个同时使用三个要素的示例提示词：</p><pre><code>I'm the marketing lead at an indie streaming startup, and we're preparing an investor pitch deck for Series A investors. Can you research the current state of the independent film streaming market and identify key trends, competitor positioning, and growth opportunities? Use current web research with citations and structure it as a professional report of up to 5 pages, with an executive summary, market analysis, competitive landscape, and growth opportunities.</code></pre><p>在这个提示词中：设定情境（告诉 Claude 这是为独立流媒体应用准备的投资者路演）、定义任务（提供具体行动——研究市场，带相关细节）、指定规则（要求带引用的当前网络研究、组织成专业报告）。</p>"
      },
      {
        "id": "sec-3",
        "title": "添加上下文",
        "contentHtml": "<p>上传、连接器与自定义偏好，都是给 Claude 提供更多工作上下文的方式。</p><p>Claude 能分析 PDF 与其他文档中的文本和视觉元素（如图像、图表、图形）。支持的文件类型包括 PDF、DOCX、CSV、TXT 以及 PNG、JPEG 等常见图像格式。</p><p>文件上传的一些实用方式：</p><ul><li>上传文档，请 Claude 总结要点</li><li>分享图像，请 Claude 描述或分析它看到的内容</li><li>附加电子表格，请 Claude 识别数据中的趋势</li><li>上传代码，请 Claude 解释其工作原理或查找 bug</li></ul><p>上传后，Claude 会自动尝试解析文件内容。在聊天中，文件显示为附件，然后你就可以针对它向 Claude 提问。</p><p>小贴士：如果你希望 Claude 在每次回应中都考虑特定偏好，可以前往 Settings &gt; General &gt; 「What personal preferences should Claude consider?」设置适用于每段对话的偏好。</p>"
      },
      {
        "id": "sec-4",
        "title": "迭代 Claude 的回应",
        "contentHtml": "<p>与 Claude 的对话是刻意设计为可迭代的。把小片段提示词串联起来，就能形成自然对话，你根据 Claude 的回答引导对话走向。</p><p>如果 Claude 的第一个回应不是完全符合你的预期，你有几个选择：</p><ul><li><strong>提出后续问题</strong>：在 Claude 的回应基础上，要求更多细节、不同角度或澄清。例如「你能展开讲讲第二点吗？」或「这很有帮助，但能更简洁吗？」</li><li><strong>提供反馈</strong>：告诉 Claude 你喜欢和不喜欢它回应的什么。「这个不错，但语气太正式了，能更口语化吗？」</li><li><strong>引导或重开</strong>：如果 Claude 朝与你预期不同的方向去了，直接把它拉回来。「其实我问的是 X 不是 Y，让我澄清一下…」最坏情况下，在新聊天中重新开始以完全刷新上下文。</li></ul><p>小贴士：你也可以点击任何消息上的铅笔图标编辑并重新提交提示词——当你想精炼请求而不是添加新消息时很有用。</p>"
      },
      {
        "id": "sec-5",
        "title": "个性化 Claude",
        "contentHtml": "<p>有两个功能帮助 Claude 随时间更好地为你工作，增强提示词的力量。</p><p><strong>记忆（Memory）</strong>自动保存对话中的关键上下文——你的角色、偏好、过往决策与工作风格——这样你每次开始新聊天时都不必重复自己。例如，如果你告诉 Claude 你在 B2B 公司的市场部工作，它以后会记住这个上下文。你可以随时在设置中查看、编辑或删除 Claude 记住的任何内容，记忆会在所有设备间同步。</p><p><strong>风格（Styles）</strong>让你自定义 Claude 的沟通方式。从预设选项中选择——如简洁、正式或解释性——或通过精确描述你希望 Claude 怎么写来创建自己的自定义风格。设置后，你的风格会自动应用到所有对话中。</p>"
      },
      {
        "id": "sec-6",
        "title": "下一步",
        "contentHtml": "<p>继续之前，试着向 Claude 提出一个问题或任务。如果需要想法，可以探索我们的用例图库。</p><p>下一课我们将探索如何给 Claude 方向——调整它的语气、格式与方法，精确匹配你的需要。</p>"
      }
    ],
    "prevLesson": {
      "slug": "what-is-claude",
      "title": "1. 什么是 Claude？"
    },
    "nextLesson": {
      "slug": "getting-better-results",
      "title": "3. 获得更精准的回答"
    }
  },
  "getting-better-results": {
    "lessonId": "getting-better-results",
    "lessonTitle": "3.获得更准确的答案（获得更好的结果）",
    "lessonIndex": 2,
    "totalLessons": 13,
    "duration": "10 分钟",
          "outcomes": [
        "识别上手时的常见挑战并用排障技巧克服"
,
        "定义 AI 素养并知道去哪里深入学习"
,
        "用简单的评估方法理解 Claude 在你工作流中的表现"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-is-claude",
        "title": "1. Claude是什么？",
        "subtitle": "思维伙伴与宪法 AI 原则",
        "duration": "5 min"
      },
      {
        "id": "2",
        "slug": "your-first-conversation-with-claude",
        "title": "2. 与Claude的第一次对话",
        "subtitle": "界面导航与 C-B-I 提示词公式",
        "duration": "6 min"
      },
      {
        "id": "3",
        "slug": "getting-better-results",
        "title": "3. 获得更精准的回答",
        "subtitle": "XML 标签隔离与角色设定",
        "duration": "8 min"
      }
    ],
        "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>当你开始使用 Claude 时，很可能遇到回应不完全符合预期的时候。这很正常——而且它是一次改进你方法的机会。这里列出一些最常见的挑战以及如何应对。</p>"
      },
      {
        "id": "sec-1",
        "title": "常见挑战与解决方法",
        "contentHtml": "<ul><li><strong>Claude 的回应太笼统</strong>——你的提示词没有包含足够关于你具体情况的上下文。解决：补充关于受众、角色或约束的细节。与其写「写一封关于项目延期的邮件」，不如试「给我们企业客户写一封邮件，解释软件集成将延期两周。他们一直很耐心，但这是第二次延期。保持专业但带歉意。」</li><li><strong>回应太长（或太短）</strong>——Claude 在猜测合适的长度。解决：明确说明：「给我两段总结」或「控制在 100 字以内」或「我需要全面分析——长度不是问题」。</li><li><strong>Claude 没按我的格式来</strong>——Claude 理解了你想要什么，但不知道你想要它怎么呈现。解决：展示而不是只说。提供格式示例，或明确描述结构：「每个小节用带粗体标题的要点」。 </li><li><strong>得到了听起来很有信心、但实际错误的信息</strong>——Claude 偶尔会生成看似合理但不正确的信息，尤其是具体事实或小众话题。解决：对高风险的作业，独立核实关键事实。让 Claude 引用来源或表明信心水平。启用网页搜索，让回应以当前信息为基础。</li><li><strong>语气不对</strong>——Claude 默认是乐于助人且专业的，可能不符合你的需求。解决：用通俗语言描述语气：「更口语化些」或「听起来应该权威且正式」。提供你想要的风格示例。</li></ul>"
      },
      {
        "id": "sec-2",
        "title": "迭代心态",
        "contentHtml": "<p>与 Claude 协作时最重要的转变之一是认识到：你的第一个提示词很少产生完美结果——这没关系。把你最初的提示词想成一段对话的开始，而不是一次性请求。</p><p>高效的 Claude 用户：</p><ul><li>把初稿当作起点。审视 Claude 产出的内容，找出哪些有效、哪些无效，然后精化。</li><li>给出具体反馈。「更短些」可以，但「删掉前两段，让结论更行动导向」更好。</li><li>知道何时重新开始。如果对话偏离轨道，有时用一个更清晰的提示词开新聊天，比重定向更快。</li></ul>"
      },
      {
        "id": "sec-3",
        "title": "什么是 AI 素养",
        "contentHtml": "<p><strong>AI 素养（AI Fluency）</strong>是与 AI 工具有效协作的能力——不只是知道点哪个按钮，而是培养在不同情境下用好 AI 的判断力。</p><p>AI 素养的 <strong>4D 框架</strong>（由 Rick Dakan 教授与 Joseph Feller 教授研究合作开发）识别了四项核心能力，组合起来能帮你最大化 AI 交互的价值：</p><ul><li><strong>委派（Delegation）</strong>：决定哪些工作由人做、哪些由 AI 做、如何在它们之间分配任务。包括理解你的目标、AI 能力，以及对协作做出战略选择。</li><li><strong>描述（Description）</strong>：与 AI 系统有效沟通。包括清晰定义输出、引导 AI 过程、指定期望的 AI 行为与交互。</li><li><strong>鉴别（Discernment）</strong>：深思熟虑、批判性地评估 AI 的输出、过程、行为与交互。包括评估质量、准确性、适当性，并确定改进方向。</li><li><strong>尽责（Diligence）</strong>：负责任、合乎道德地使用 AI。包括对 AI 系统与交互做出审慎选择、保持透明、为 AI 辅助的工作承担责任。</li></ul><p>你已经在整个课程中练习了这些技能。第 2 课的提示词框架植根于描述；上面的排障技巧来自鉴别与尽责。</p>"
      },
      {
        "id": "sec-4",
        "title": "为你的工作流评估 Claude",
        "contentHtml": "<p>当你把 Claude 整合进更多工作时，你可能会想：我怎么知道 Claude 在某个特定任务上是否真的擅长？这就是鉴别（Discernment）变得必不可少的地方。</p><p><strong>Evals（评估）</strong>是培养评估 Claude 在你关心任务上输出直觉的方式。它们系统化地测试 Claude 在你重视的特定类型任务上表现如何。</p><h3>为什么评估很重要</h3><ul><li>理解 Claude 在你的工作流中哪里增值最多</li><li>识别哪些任务你需要提供更多上下文或示例</li><li>为重复性任务建立对 Claude 输出的信心</li></ul><h3>简单的评估方法</h3><ul><li><strong>收集示例</strong>：收集你定期做的任务的 5-10 个示例——你写过的邮件、创建过的报告、做过的分析。</li><li><strong>创建测试提示词</strong>：写会产生类似输出的提示词，包含你自然拥有的上下文。</li><li><strong>比较输出</strong>：运行提示词，把 Claude 的回应与你的示例比较。问自己：Claude 抓住了关键信息吗？语气与风格合适吗？缺了什么、能改进什么？</li><li><strong>精化方法</strong>：基于所学，调整提示词、添加示例让 Claude 看到好结果长什么样，或识别哪些地方人类审查必不可少。</li></ul>"
      },
      {
        "id": "sec-5",
        "title": "下一步",
        "contentHtml": "<p>下一课你将探索 Claude 桌面应用，以及在那里与 Claude 协作的三种方式——逐轮对话（Chat）、把工作交接出去（Cowork）与构建软件（Claude Code）。</p>"
      }
    ],
    "prevLesson": {
      "slug": "your-first-conversation-with-claude",
      "title": "2. 与 Claude 的第一次对话"
    },
    "nextLesson": {
      "slug": "claude-desktop-app-chat-cowork-code",
      "title": "4. 桌面端三大工作流"
    }
  },
  "claude-desktop-app-chat-cowork-code": {
    "lessonId": "claude-desktop-app-chat-cowork-code",
    "lessonTitle": "4.桌面端应用：Chat、Cowork & Code三大工作形态",
    "lessonIndex": 3,
    "totalLessons": 13,
    "duration": "10 分钟",
          "outcomes": [
        "区分桌面端与 Claude 协作的三种方式"
,
        "在开始任务前识别它属于哪种工作形态"
,
        "找到每种工作方式在桌面应用中的位置"
      ],
    "roadmap": [
      {
        "id": "3",
        "slug": "getting-better-results",
        "title": "3. 获得更精准的回答",
        "subtitle": "XML 标签与少样本 Prompt",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "claude-desktop-app-chat-cowork-code",
        "title": "4. 桌面端三大工作流",
        "subtitle": "聊天、协作和代码深度实操",
        "duration": "7 min"
      },
      {
        "id": "5",
        "slug": "introduction-to-projects",
        "title": "5. 项目 项目知识库",
        "subtitle": "搭建长效业务工作区",
        "duration": "10 min"
      }
    ],
        "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>Claude 桌面应用是在桌面上与 Claude 协作的大本营——从会议间隙的快速提问，到 Claude 在你做别的事情时从六个来源组装报告。工作可分为三种形态，知道你现在处于哪种形态，就是本课的全部技巧：</p><ul><li><strong>与 Claude 逐轮协作</strong>：你与 Claude 来回互动。你提问、Claude 回答、你引导、它修改。思考发生在交流中。</li><li><strong>把工作交接给 Claude</strong>：你描述一个结果——一份完成的简报、格式化的交付物、一个每周一运行的任务——Claude 规划它、完成它、带回结果。你审阅计划与输出，但不亲手拼接步骤。</li><li><strong>用 Claude Code 构建软件</strong>：Claude 直接在代码库中工作：读取、编写与测试代码、运行命令。为开发者构建，即使你从不打开它，也值得了解。</li></ul><p>前两种是大多数知识工作者日常所在；第三种是开发者的工作空间。在产品中：逐轮工作在 Chat 中进行，交接的工作在 Cowork 中运行，构建软件在 Code 标签页。三者都在 Claude 桌面应用中。</p>"
      },
      {
        "id": "sec-1",
        "title": "与 Claude 逐轮协作",
        "contentHtml": "<p>这是把 Claude 当作思考伙伴：价值在于交流本身的协作形态。你带一个半成型的想法、一个陌生的仪表盘、一段不达意的段落——然后一次一轮地一起解决。</p><p>这种形态适合：</p><ul><li><strong>答案会改变你下一个问题</strong>：头脑风暴时，每个回应打开下一个问题。你不可能提前写出整个请求，因为你当时还不知道。</li><li><strong>你想沉浸其中</strong>：起草、编辑、出声思考——重点是你在每一轮中的判断，而不是最后那个成品。</li><li><strong>很快完成</strong>：一个问题、一次重写、一个「这是什么意思？」——足够小，设置整个任务反而是负担。</li></ul><p>在桌面应用中这是 Chat——你在 claude.ai 认识的 Claude，加上一些本机运行带来的东西：双击 Option 键（Mac）快速唤起；截图与窗口共享（Mac）；语音听写（Mac）；桌面连接器连接本地工具与服务。</p>"
      },
      {
        "id": "sec-2",
        "title": "把工作交接给 Claude",
        "contentHtml": "<p>以智能体方式与 Claude 工作对很多人来说是新的工作方式。与其问一个问题，你把整块工作交给 Claude——收集上下文、做分析、产出成品——它完成后再交回来。<strong>你在委派，而不只是聊天。</strong></p><p>这种形态适合：</p><ul><li><strong>任务有多个你通常会按顺序做的步骤</strong>：取数据、比较、起草总结、格式化文档。交接后，那是一个指令，而不是四个差事。</li><li><strong>输出是真正的交付物</strong>：Word 文档、电子表格、演示文稿、格式化 PDF——保存到你需要的地方，而不是粘贴进聊天窗口让你重新组装。</li><li><strong>工作横跨你的工具</strong>：会议记录在一个地方、Slack 线程在另一处、上季度的数字在电子表格里。设置一个周五汇总为定时任务，Claude 每次运行都会自己收集这三者。</li><li><strong>应该按计划运行，或在你做别的事情时运行</strong>：周五的发布回顾、周一的简报。</li></ul><p>交接不意味着放手不管。Claude 开始前可能问几个问题来确定范围与格式，并向你展示计划。工作时，你可以看着任务成型——它引用的来源、形成的文件、在计划中的进度——并随时引导。当 Claude 被设置为行动前询问时，它会在发送邮件或分享文件等关键动作前停下来等你批准。</p>"
      },
      {
        "id": "sec-3",
        "title": "用 Claude Code 构建软件",
        "contentHtml": "<p>如果你写代码，桌面应用给你一个完整的开发环境。Claude 直接在代码库中工作——读取现有内容、编写与修改代码、运行命令。可视化 diff 显示改了什么，内置终端显示命令运行过程，git 跟踪每个版本让你总能回滚。如果你不是开发者，要点只是：它是一个单独的标签页，这门课不需要它——Claude Code in Action 课程会深入讲解。</p><p>你选择工作发生在哪里：</p><ul><li><strong>本地（Local）</strong>：在电脑上选择一个文件夹，Claude 直接处理那些文件——读取你的项目、使用本地工具、运行你可以在浏览器中预览的开发服务器。</li><li><strong>云端（Cloud）</strong>：连接一个 GitHub 仓库，Claude 在云环境中工作。即使你关闭应用，会话也会继续，所以你可以开始一次大重构、稍后再回来查看。</li></ul><p>你还选择 Claude 自主做多少，设置包括：手动批准（Claude 提议每个改动并等待批准）、接受编辑（自动应用文件编辑）、计划（先创建计划再改动）。</p>"
      },
      {
        "id": "sec-4",
        "title": "为任务选择正确的形态",
        "contentHtml": "<p>你不会先选标签页——你会注意到眼前是什么类型的工作，标签页随之而来。整课浓缩成一张表：</p><ul><li>提问、头脑风暴、起草或想通某件事，逐轮进行 → <strong>Chat</strong>（快速唤起、听写、截图）</li><li>交接一个以成品交付物结尾、横跨工具或按计划运行的多步任务 → <strong>Cowork</strong>（文件夹访问、连接器、定时任务、子代理）</li><li>在代码库中编写、测试、运行并发布代码 → <strong>Code 标签页</strong>（本地或云端）</li></ul>"
      },
      {
        "id": "sec-5",
        "title": "课程反思与下一步",
        "contentHtml": "<h3>课程反思</h3><ul><li>想想你本周如何使用 Claude。哪些请求是逐轮思考，哪些其实是「因为习惯」而一次一个问题喂进去的完整任务？</li><li>选一个你最想从肩上卸下的任务。它是多步的吗？以真实文件结尾吗？横跨你的工具吗？只要有一个「是」，它就是一个交接——写下你会向 Claude 描述的结果，而不是你会问的第一个问题。</li></ul><h3>下一步</h3><p>下一模块你将学习如何用项目（Projects）组织你的工作与知识。</p>"
      }
    ],
    "prevLesson": {
      "slug": "getting-better-results",
      "title": "3. 获得更精准的回答"
    },
    "nextLesson": {
      "slug": "introduction-to-projects",
      "title": "5. Projects 项目知识库"
    }
  },
  "introduction-to-projects": {
    "lessonId": "introduction-to-projects",
    "lessonTitle": "5. Projects 项目知识库搭建（项目简介）",
    "lessonIndex": 4,
    "totalLessons": 13,
    "duration": "15 分钟",
          "outcomes": [
        "解释项目是什么以及何时使用"
,
        "创建带名称、描述与可见性设置的新项目"
,
        "向项目知识库添加文档与文件"
,
        "写有效的项目指令引导 Claude 行为"
,
        "与队友分享项目（Claude for Work 用户）"
      ],
    "roadmap": [
      {
        "id": "4",
        "slug": "claude-desktop-app-chat-cowork-code",
        "title": "4. 桌面端三大工作流",
        "subtitle": "聊天、协作和代码深度实操",
        "duration": "7 min"
      },
      {
        "id": "5",
        "slug": "introduction-to-projects",
        "title": "5. Projects 项目知识库搭建",
        "subtitle": "打造拥有专属上下文的工作区",
        "duration": "10 min"
      },
      {
        "id": "6",
        "slug": "creating-with-artifacts",
        "title": "6. Artifacts交互工件实战",
        "subtitle": "实时预览与协同编辑代码和 UI",
        "duration": "8 min"
      }
    ],
        "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>项目（Projects）是自包含的工作区，拥有自己的记忆、聊天历史、知识库与定制指令。把它们想成特定工作流的专属环境。</p>"
      },
      {
        "id": "sec-1",
        "title": "核心要点",
        "contentHtml": "<ul><li>项目是自包含的工作区，拥有自己的记忆、聊天历史、知识库与定制指令——特定工作流的专属环境。</li><li>项目知识通过让你上传相关文档增强 Claude 的理解，Claude 会在该项目所有聊天中引用这些文档。不再需要每次重新上传同样的文件。</li><li>项目指令引导 Claude 的行为——你可以指定语气、专业水平、回应风格等。这些指令适用于项目内的每段对话。</li><li>项目自动扩展。当知识库接近上下文限制时，Claude 会切换为搜索你的项目知识、只拉取相关内容，在保持响应质量的同时把容量扩大至 10 倍。</li><li>对 Claude for Work 用户，项目支持协作。与队友分享项目，让每个人都受益于相同的上下文、指令与累积知识。</li></ul>"
      },
      {
        "id": "sec-2",
        "title": "何时使用项目",
        "contentHtml": "<p>当你在做持续进行的工作——而不只是一次性问题时，项目特别有价值。当你有一个工作流具有以下特征时，考虑创建项目：</p><ul><li><strong>会重复使用的参考资料</strong>（会议记录、调查结果、报告、历史数据等）</li><li><strong>对 Claude 回应的一致要求</strong>（始终使用正式语言、始终引用来源、始终遵循我们的模板）</li><li><strong>团队协作需求</strong>——多人应该从同一个基础上工作</li></ul>"
      },
      {
        "id": "sec-3",
        "title": "创建你的第一个项目",
        "contentHtml": "<p>设置项目只需几分钟。方法如下：</p><h3>第一步：设置项目</h3><ul><li>悬停在左侧边栏上，点击「Projects」，或直接访问 claude.ai/projects</li><li>点击右上角的「+ New Project」</li><li>给项目起一个描述性名称（如「Q4 营销活动」或「产品文档」）</li><li>添加一段简短描述说明你在做什么</li><li>选择可见性设置：保持私密，或与你的组织分享（Claude for Work 用户）</li></ul><h3>第二步：添加项目指令</h3><p>项目指令告诉 Claude 如何在该项目的所有对话中表现。好的项目指令通常包括：</p><ul><li>关于你在做什么的上下文：「这个项目用于为我们的 B2B 软件产品创作营销内容。」</li><li>流程指令：「先考虑能吸引这类受众的博客结构，再写草稿。」</li><li>语气与风格偏好：「使用专业但对话式的语气。尽可能避免行话。」</li><li>具体要求：「营销文案结尾始终包含行动号召。」</li></ul><h3>第三步：构建知识库</h3><p>项目的知识库是你上传 Claude 应引用文档的地方。点击「+」添加内容。你可以上传 PDF、DOCX、CSV、TXT、HTML 等多种文件类型，也可以连接 Google Drive 直接关联文档。文件名要描述性——「Q4-2024-Brand-Guidelines.pdf」比「document1.pdf」有用得多。</p>"
      },
      {
        "id": "sec-4",
        "title": "项目如何处理大型知识库",
        "contentHtml": "<p>你可能会想：上传大量内容会发生什么？项目通过<strong>检索增强生成（RAG）</strong>自动扩展以处理大量内容。从高层看，这意味着 Claude 在回答时可以自动找到并使用你上传文档中最相关的部分，无需你告诉它要看哪个文件。</p><p>当项目知识接近上下文窗口限制时，Claude 不再一次加载所有内容，而是搜索项目文件、只检索与问题相关的内容。这能把项目容量扩大至 10 倍，同时保持响应质量。当你的项目启用 RAG 时，会看到一个可视化指示，但体验应该是一样的。</p>"
      },
      {
        "id": "sec-5",
        "title": "协作功能与最佳实践",
        "contentHtml": "<h3>权限级别</h3><ul><li><strong>Can view（可查看）</strong>：成员可以查看项目内容、访问知识、聊天——但不能改动。可看作带讨论权的只读访问。</li><li><strong>Can edit（可编辑）</strong>：成员拥有完整协作能力，可以修改指令、更新知识、管理其他成员。</li><li><strong>Owner（所有者）</strong>：项目创建者控制一切，包括谁能看到项目。</li></ul><h3>最佳实践</h3><ul><li>先聚焦、再扩展。从特定用例开始，而不是试图为一切创建一个项目。</li><li>保持知识库最新。过时的文档会导致过时的回应。</li><li>写清晰的指令。含糊的指令导致不一致的结果。</li><li>描述性地命名文档，并把相关文件分组。Claude 用文件名与邻近性理解文档之间的关系。</li><li>提问时按名称引用文档：「根据我们的 Q3 报告，客户最关心的前三项是什么？」</li></ul>"
      },
      {
        "id": "sec-6",
        "title": "下一步",
        "contentHtml": "<p>下一课我们将学习如何用 Artifacts 创建迷你应用——Claude 构建、你可以立即分享的实际输出。</p>"
      }
    ],
    "prevLesson": {
      "slug": "claude-desktop-app-chat-cowork-code",
      "title": "4. 桌面端三大工作流"
    },
    "nextLesson": {
      "slug": "creating-with-artifacts",
      "title": "6. Artifacts 交互工件实战"
    }
  },
  "creating-with-artifacts": {
    "lessonId": "creating-with-artifacts",
    "lessonTitle": "6. Artifacts交互工件实战（Creating with Artifacts）",
    "lessonIndex": 5,
    "totalLessons": 13,
    "duration": "10 分钟",
          "outcomes": [
        "解释 artifact 是什么以及 Claude 何时创建"
,
        "与同事分享 artifact 并公开发布"
,
        "排障常见的 artifact 问题"
      ],
    "roadmap": [
      {
        "id": "5",
        "slug": "introduction-to-projects",
        "title": "5. Projects 项目知识库搭建",
        "subtitle": "打造拥有专属上下文的工作区",
        "duration": "10 min"
      },
      {
        "id": "6",
        "slug": "creating-with-artifacts",
        "title": "6. Artifacts交互工件实战",
        "subtitle": "实时预览与协同编辑代码和 UI",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "working-with-skills",
        "title": "7. Skills 自定义技能",
        "subtitle": "给 Claude 装备专属自动化流程",
        "duration": "10 min"
      }
    ],
        "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>Artifacts（工件）是 Claude 在与你的对话旁、独立窗口中创建的独立、可交互输出。你不是得到埋在聊天里的一大块代码或文本，而是看到内容被渲染好、可直接使用——无论是一个能工作的网站、一个交互式图表，还是一份可以立即下载的文档。</p>"
      },
      {
        "id": "sec-1",
        "title": "Claude 何时创建 Artifacts",
        "contentHtml": "<p>当内容满足特定标准时，Claude 会自动创建 artifact：</p><ul><li>内容重要且自包含，通常超过 15 行</li><li>内容是你可能想编辑、迭代或复用的</li><li>它代表无需周围对话也能独立成立的复杂内容</li><li>内容是你以后想引用或使用的</li></ul>"
      },
      {
        "id": "sec-2",
        "title": "常见的 Artifact 类型",
        "contentHtml": "<ul><li><strong>文档（Markdown 与纯文本）</strong>：适合任何文本密集、你想导出或继续编辑的内容——会议记录、报告、项目计划、博客文章等。</li><li><strong>代码片段</strong>：任何编程语言的可用代码——Python、JavaScript、C++ 等。你可以查看、复制或下载。</li><li><strong>HTML 页面</strong>：包含 HTML、CSS 与 JavaScript 的完整网页。适合落地页、表单、交互式演示或快速原型。</li><li><strong>SVG 图像</strong>：用于徽标、图标、插画等的可缩放矢量图形。直接在 artifact 窗口中渲染。</li><li><strong>Mermaid 图表</strong>：流程图、时序图、甘特图、组织架构图等。描述你想可视化的关系，Claude 创建你可以精修的图表。</li><li><strong>React 组件</strong>：带真实功能的交互式 UI 元素——计算器、仪表盘、游戏、数据可视化。不只是模型，它们包含真实逻辑并对用户输入做出响应。</li></ul><p>Word 文档、Excel 电子表格、PowerPoint 演示文稿与 PDF 的工作方式不同——Claude 通过独立的文件创建能力生成它们，而不是作为 artifact，并以可下载文件的形式返回给你。</p>"
      },
      {
        "id": "sec-3",
        "title": "创建与使用 Artifacts",
        "contentHtml": "<p>创建 artifact 就像对话一样简单。描述你想要什么，Claude 会决定是否以 artifact 形式呈现。例如：</p><ul><li>「创建一个展示我们客户入职流程的流程图」</li><li>「构建一个交互式仪表盘，让我输入月度开支并查看明细」</li><li>「为一个生产力应用设计落地页，带 Hero 区块与功能列表」</li></ul><p>如果 Claude 没有在你预期时自动创建 artifact，你可以明确要求：「把它做成 artifact」或「在 artifact 里展示这个」。</p><p>当 Claude 生成 artifact 时，它出现在对话右侧的独立窗口中。你可以：预览与代码之间切换、复制内容、下载文件、查看 Claude 生成的底层代码。</p>"
      },
      {
        "id": "sec-4",
        "title": "分享与发布 Artifacts",
        "contentHtml": "<ul><li><strong>复制或下载</strong>：用于个人使用或通过其他渠道分享。</li><li><strong>在组织内分享（Claude for Work）</strong>：团队与企业用户可以在内部与同事分享 artifact。分享的 artifact 停留在组织内，需要团队认证才能访问。</li><li><strong>公开发布</strong>：Free、Pro 与 Max 用户可以发布 artifact，让任何有链接的人都能访问。发布后只有选定的版本公开（你的聊天保持私密），任何人都无需 Claude 账户即可查看与交互。你可以随时取消发布。发布的 artifact 不会被搜索引擎索引。</li></ul>"
      },
      {
        "id": "sec-5",
        "title": "用好 Artifacts 的技巧",
        "contentHtml": "<ul><li><strong>具体描述你想要什么</strong>：「构建一个预算追踪器」可以，但「构建一个月度预算追踪器，我能按类别输入开支、看到饼图明细、并在超支时收到警告」更好。</li><li><strong>描述最终用户</strong>：告诉 Claude 谁会用这个 artifact，帮助它做出合适的设计选择。</li><li><strong>增量迭代</strong>：一次请 Claude 添加一个功能或做一处改动。</li><li><strong>需要时明确要求 artifact</strong>：如果要求了重要内容但 Claude 在聊天中回应，直接说「请把它做成 artifact」。</li></ul>"
      },
      {
        "id": "sec-6",
        "title": "下一步",
        "contentHtml": "<p>下一课你将了解 Skills——教 Claude 专业工作流的可复用指令集。</p>"
      }
    ],
    "prevLesson": {
      "slug": "introduction-to-projects",
      "title": "5. Projects 项目知识库搭建"
    },
    "nextLesson": {
      "slug": "working-with-skills",
      "title": "7. 自定义 自定义 自定义 自定义 Skills 技能扩展 技能扩展 技能扩展 技能扩展 Skills 自定义技能"
    }
  },
  "working-with-skills": {
    "lessonId": "working-with-skills",
    "lessonTitle": "7. Skills 自定义技能（使用Skills 自定义技能）",
    "lessonIndex": 6,
    "totalLessons": 13,
    "duration": "15 分钟",
          "outcomes": [
        "解释 Skills 是什么以及 Claude 如何使用"
,
        "识别 Anthropic 用于文档创建的内置 Skills"
,
        "在设置中启用与管理 Skills"
      ],
    "roadmap": [
      {
        "id": "6",
        "slug": "creating-with-artifacts",
        "title": "6. 文物交互工件",
        "subtitle": "独立渲染面板与代码导出",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "working-with-skills",
        "title": "7. Skills 自定义技能",
        "subtitle": "自动化工作流与流程赋能",
        "duration": "10 min"
      },
      {
        "id": "8",
        "slug": "connecting-your-tools",
        "title": "8. 连接器工具连接",
        "subtitle": "数据源挂载与系统打通",
        "duration": "8 min"
      }
    ],
        "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>Skills（技能）是 Claude 动态加载以提升专业任务表现的指令、脚本与资源文件夹。把它们想成专业能力包——它们教 Claude 以可重复的方式完成特定任务。</p><p>如果你用 Claude 创建过 Excel 电子表格、PowerPoint 演示文稿、Word 文档或 PDF，就已经见过 Skills 在工作——那些文件创建能力正是由幕后运行的 Skills 驱动的。但 Skills 远不止文档创建。自定义 Skills 可以把整个可重复工作流固化为代码——季度差异分析的方法论、品牌声音审查流程或合规检查清单——让 Claude 每次都遵循同样严格的步骤。</p>"
      },
      {
        "id": "sec-1",
        "title": "Skills 的类型",
        "contentHtml": "<p>你会遇到两类 Skills：</p><ul><li><strong>Anthropic Skills</strong>：由 Anthropic 创建与维护。包括 Excel、Word、PowerPoint 与 PDF 文件的增强文档创建能力。所有付费用户都可用，Claude 在相关时自动调用。</li><li><strong>自定义 Skills</strong>：你或你的组织为专业工作流与领域特定任务创建的。例如，创建一个应用你公司品牌规范到演示文稿的技能、按特定格式组织会议笔记的技能、或执行组织数据分析工作流的技能。</li></ul>"
      },
      {
        "id": "sec-2",
        "title": "启用与使用 Skills",
        "contentHtml": "<p>Skills 目前作为功能预览提供给 Pro、Max、Team 与 Enterprise 套餐用户。要使用 Skills，你需要启用代码执行与文件创建，因为 Skills 需要 Claude 的安全沙箱计算环境。</p><p>启用方法：进入 Settings &gt; Capabilities，确保 Code execution and file creation 已打开，滚动到 Skills 部分，按需开关各个技能。对于 Enterprise 套餐，组织所有者必须先在管理设置中启用代码执行与 Skills。</p><p>Skills 的美妙之处在于你通常不需要想着它们——Claude 会根据你的请求自动选择技能。例如：「创建一个跟踪月度开支、带总计公式的 Excel 电子表格」「把这个会议记录文档变成 PowerPoint 演示文稿」。当 Claude 使用技能时，你会看到它在思考链中提及，输出是可下载的文件。</p>"
      },
      {
        "id": "sec-3",
        "title": "文件执行与安全考量",
        "contentHtml": "<p>同样的能力意味着 Claude 可以在（受控环境中）处理你的实际文件，创建更新版本。上传幻灯片、电子表格、合同（任何 .xlsx、.pptx、.docx 或 .pdf 文件），Claude 会创建幻灯片、执行分析、添加建议编辑。完成后你可以下载这些文件或在 Drive 中打开。</p><p>安全考量：因为 Skills 可以包含可执行代码，请谨慎使用：</p><ul><li>只从可信来源安装自定义 Skills</li><li>Anthropic 的内置 Skills 由 Anthropic 测试与维护</li><li>你上传的自定义 Skills 对你的个人账户私密</li><li>如果从外部来源安装自定义 Skill，使用前审查其内容以理解它做什么</li></ul>"
      },
      {
        "id": "sec-4",
        "title": "创建自定义 Skills",
        "contentHtml": "<p>创建自定义 Skill 的最简单方式是与 Claude 本身对话。你不需要写代码或手动创建文件——Claude 帮你处理技术结构。方法如下：</p><ul><li>开始新聊天，告诉 Claude 你想创建什么：「我想创建一个写季度业务回顾的技能」</li><li>回答 Claude 的问题。它会访谈你的工作流：这个技能应该做什么？这类工作什么样的输出算好？能给我你会使用这个技能的例子吗？</li><li>如果有参考资料就上传。模板、风格指南、品牌资产或你引以为豪的工作示例，都有助于 Claude 理解你想要的。</li><li>保存你的技能。完成后，Claude 生成一个包含结构正确技能的文件。保存后技能即可供 Claude 使用。</li></ul><p>在左侧边栏的 Customize 标签页可以看到你的所有技能，甚至可以直接或通过与 Claude 聊天编辑。</p>"
      },
      {
        "id": "sec-5",
        "title": "Skills vs 项目",
        "contentHtml": "<p>你可能在想——如果 Skills 和项目都能给 Claude 更多上下文，什么时候用哪个？这样想：<strong>项目存储知识，Skills 执行任务。</strong></p><ul><li><strong>项目是知识枢纽</strong>：存放 Claude 理解你工作所需的参考资料——项目规格、会议笔记、研究文档。</li><li><strong>Skills 是流程机器</strong>：编码 Claude 应如何执行任务——你希望每次遵循的具体步骤、操作顺序与方法论。Skills 在你有可重复工作流时大放异彩。</li></ul><p>两者互补。技能可以引用项目中存储的知识——你的「客户电话准备」技能可能从项目知识库上传的客户画像中取数据。项目提供「什么」（信息），技能提供「怎么做」（流程）。</p>"
      },
      {
        "id": "sec-6",
        "title": "下一步",
        "contentHtml": "<p>下一组课程中，你将开始用连接器（Connectors）扩展 Claude 的触达范围。这些强大工具让信息收集无缝进行，并能让 Claude 在你工作所在的工具内部执行操作。</p>"
      }
    ],
    "prevLesson": {
      "slug": "creating-with-artifacts",
      "title": "6. Artifacts 交互工件"
    },
    "nextLesson": {
      "slug": "connecting-your-tools",
      "title": "8. Connectors 工具连接"
    }
  },
  "connecting-your-tools": {
    "lessonId": "connecting-your-tools",
    "lessonTitle": "8.连接外部工具（Connecting Your Tools）",
    "lessonIndex": 7,
    "totalLessons": 13,
    "duration": "15 分钟",
          "outcomes": [
        "解释连接器是什么以及为何重要"
,
        "浏览连接器目录并建立第一个连接"
,
        "在对话中有效使用已连接的工具"
      ],
    "roadmap": [
      {
        "id": "7",
        "slug": "working-with-skills",
        "title": "7. Skills 自定义技能",
        "subtitle": "自动化工作流与流程赋能",
        "duration": "10 min"
      },
      {
        "id": "8",
        "slug": "connecting-your-tools",
        "title": "8. 连接器工具连接",
        "subtitle": "数据源挂载与系统打通",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "enterprise-search",
        "title": "9. 企业级全局搜索",
        "subtitle": "跨应用统一检索与分析",
        "duration": "7 min"
      }
    ],
        "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>连接器（Connectors）把 Claude 从一个助手转变为一个有见识的协作者——让 Claude 能访问你每天使用的工具、数据与上下文。与其每次对话都从零开始，Claude 可以直接处理你的真实信息。</p>"
      },
      {
        "id": "sec-1",
        "title": "核心要点",
        "contentHtml": "<ul><li>连接器让 Claude 读取信息并代表你执行操作。根据连接器与你授予的权限，Claude 可以搜索你的文件、检索文档、分析数据、创建新内容、更新记录、在连接的应用中执行任务——都在你的对话内完成。</li><li><strong>MCP（模型上下文协议）为连接器提供动力</strong>。把 MCP 想成 AI 界的 USB-C——一个通用标准，让 Claude 通过单一、一致的接口连接到许多不同的应用。这个开放标准意味着开发者可以为任何工具构建连接器，而这些连接器能与 Claude 无缝工作。</li><li>连接器有两种类型：<strong>Web 连接器</strong>与<strong>桌面扩展</strong>。Web 连接器把 Claude 链接到 Google Drive、Notion、Slack、Asana 等云服务；桌面扩展通过 Claude 桌面应用在你的电脑上本地运行，让 Claude 访问本地文件与原生应用。</li></ul>"
      },
      {
        "id": "sec-2",
        "title": "查找与连接工具",
        "contentHtml": "<p>Anthropic 维护一个推荐连接器目录：claude.ai/directory。目录分为两个标签：</p><ul><li><strong>Web</strong>：云服务与应用（Gmail、Notion、Slack、Asana、Linear、Stripe 等）</li><li><strong>Desktop extensions</strong>：通过 Claude 桌面应用在你电脑上运行的本地工具</li></ul><h3>设置 Web 连接器</h3><ul><li>找到连接器：前往 claude.ai/directory，或在任何聊天中点击 + &gt; Connectors</li><li>点击 Connect：选择要添加的连接器</li><li>认证：你会被重定向到服务的登录页，用现有凭证登录</li><li>授予权限：审阅 Claude 请求的具体权限，然后授权访问</li><li>测试连接：回到 Claude，尝试一个简单请求，如「你能访问我的 [工具名] 吗？」</li></ul>"
      },
      {
        "id": "sec-3",
        "title": "在工作中使用连接器",
        "contentHtml": "<p>连接好工具后，Claude 在回应你的请求时会考虑它们。一些实用方式：</p><p><strong>项目管理（Asana、Linear、Jira）</strong>：「我这周最高优先级的到期任务是什么？」「为审阅 Q4 预算提案创建一个新任务。」</p><p><strong>沟通（Slack、Gmail）</strong>：「找到我们讨论供应商合同的邮件线程。」「为 #marketing 频道的最新消息起草回复。」</p><p><strong>文档（Notion、Google Drive、Confluence）</strong>：「在我们的文档中搜索品牌声音指南。」「总结上周产品评审的会议记录。」</p><p><strong>业务工具（Stripe、PayPal、HubSpot）</strong>：「展示过去一个季度的收入趋势。」「列出超过 1,000 美元的近期交易。」</p>"
      },
      {
        "id": "sec-4",
        "title": "安全与权限",
        "contentHtml": "<p>当你把 Claude 连接到外部服务时，你是在授予它读取——有时是修改——那些服务中数据的权限。重要的考量：</p><ul><li><strong>限定访问</strong>：权限特定于连接器需要的内容，你可以在每个应用菜单中开关单个权限。</li><li><strong>Claude 看到你看到的</strong>：Claude 只能访问你有权限访问的数据。连接你的工作邮箱不会让 Claude 访问 CEO 的收件箱——只有你自己的。</li><li><strong>随时可撤销</strong>：你可以通过 Claude 设置或第三方服务的安全设置断开服务。与 Skills 一样，只从可信来源安装连接器。</li></ul>"
      },
      {
        "id": "sec-5",
        "title": "下一步",
        "contentHtml": "<p>下一课你将了解 Enterprise Search——Claude for Work 用户的专项功能，它把 Claude 连接到组织知识源，并使用针对公司上下文优化的自定义提示词。</p>"
      }
    ],
    "prevLesson": {
      "slug": "working-with-skills",
      "title": "7. 自定义 自定义 自定义 自定义 Skills 技能扩展 技能扩展 技能扩展 技能扩展 自定义技能"
    },
    "nextLesson": {
      "slug": "enterprise-search",
      "title": "9. 企业级全局搜索"
    }
  },
  "enterprise-search": {
    "lessonId": "enterprise-search",
    "lessonTitle": "9.企业全局搜索（Enterprise Search）",
    "lessonIndex": 8,
    "totalLessons": 13,
    "duration": "15 分钟",
          "outcomes": [
        "解释 Enterprise Search 是什么以及它能回答什么类型的问题"
,
        "理解管理员与用户两端的设置流程"
,
        "认识安全与权限如何保护组织数据"
      ],
    "roadmap": [
      {
        "id": "8",
        "slug": "connecting-your-tools",
        "title": "8. 连接器工具连接",
        "subtitle": "数据源挂载与系统打通",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "enterprise-search",
        "title": "9. 企业级全局搜索",
        "subtitle": "跨应用统一检索与分析",
        "duration": "7 min"
      },
      {
        "id": "10",
        "slug": "research-mode-for-deep-dives",
        "title": "10. 深度研究",
        "subtitle": "全自动长程联网调研与综合报告",
        "duration": "10 min"
      }
    ],
        "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>Enterprise Search（企业搜索）在侧边栏添加一个专门的「Ask {你的组织名}」选项。它专为查找与综合公司工具与数据源中深埋的知识而设计。把 Enterprise Search 想成整个组织的预建项目——你的公司知识库已经加载，你可以直接开始提问并得到有上下文意识的回应。</p>"
      },
      {
        "id": "sec-1",
        "title": "可以问什么",
        "contentHtml": "<p>Enterprise Search 对跨越多个来源、或需要综合整个组织信息的问题特别有价值。常见用例：</p><ul><li><strong>快速上手</strong>：「我不在的这几天发生了什么？」「总结过去一周业务的关键更新。」</li><li><strong>政策与流程问题</strong>：「我们公司的远程工作政策是什么？」「如何提交费用报告？」</li><li><strong>研究与分析</strong>：「客户选择竞品的主要原因是什么？」「总结关于 Q4 产品路线图的讨论。」</li><li><strong>新成员入职</strong>：「我们的认证系统如何工作？」「工程团队用什么工具部署？」</li><li><strong>绩效与项目跟踪</strong>：「查找与营销活动相关的讨论和文档。」「总结上周领导会议的关键决策。」</li></ul><p>你提问时，Claude 搜索所有已连接工具——如 SharePoint 文档、Slack 对话、Gmail 线程与 Google Drive 文件——并把信息综合成统一回应。而且它总是引用来源，让你能获得完整上下文。</p>"
      },
      {
        "id": "sec-2",
        "title": "管理员设置",
        "contentHtml": "<p>Enterprise Search 需要两步设置：管理员先为组织配置，然后个人用户用个人账户认证。</p><p><strong>管理员（所有者）</strong>：Enterprise Search 项目默认对所有 Team 与 Enterprise 组织启用，但所有者需要在团队成员使用前完成初始设置：</p><ul><li>点击左侧边栏的「Ask Your Org」</li><li>点击「Set up for your org」继续（或「Disable」关闭功能）</li><li>连接组织工具：必须为文档选择连接器（如 Google Drive 或 SharePoint）、为聊天选择连接器（如 Slack 或 Microsoft Teams）。邮箱推荐但可选。</li><li>点击「+ Add more」设置团队需要的任何额外工具</li><li>自定义项目名称（会显示为每个人侧边栏的「Ask [名称]」）</li><li>添加描述，然后点击「Finish set up」</li></ul>"
      },
      {
        "id": "sec-3",
        "title": "用户设置与安全",
        "contentHtml": "<p><strong>用户</strong>：管理员设置后，你会在侧边栏看到置顶的「Ask {Org Name}」项目：</p><ul><li>点击侧边栏中的项目</li><li>遵循引导式入职流程连接到推荐服务</li><li>为每个想搜索的服务认证（Slack、Google、Microsoft 365 等）</li><li>开始向 Claude 提问组织知识</li></ul><p>启用的连接器越多，搜索结果越全面。</p><p><strong>安全</strong>：简短回答——安全。Enterprise Search 只显示你在原始连接工具中已有权限访问的内容。此外，你的对话保持私密，连接的数据不会被单独索引或存储。</p>"
      },
      {
        "id": "sec-4",
        "title": "下一步",
        "contentHtml": "<p>下一课你将了解 Research——Claude 进行深入、多步骤调查的能力，超越快速查找、走向综合分析。</p>"
      }
    ],
    "prevLesson": {
      "slug": "connecting-your-tools",
      "title": "8. Connectors 工具连接"
    },
    "nextLesson": {
      "slug": "research-mode-for-deep-dives",
      "title": "10. Deep Research 深度研究"
    }
  },
  "research-mode-for-deep-dives": {
    "lessonId": "research-mode-for-deep-dives",
    "lessonTitle": "10.深度研究深度研究模式（Research Mode）",
    "lessonIndex": 9,
    "totalLessons": 13,
    "duration": "10 分钟",
          "outcomes": [
        "解释 Research 做什么：系统化、多来源调查"
,
        "识别何时使用 Research 进行全面信息收集"
,
        "理解 Research 如何在收集信息前用 Thinking 规划方法"
,
        "为复杂调查写出有效的 Research 提示词"
      ],
    "roadmap": [
      {
        "id": "9",
        "slug": "enterprise-search",
        "title": "9. 企业级全局搜索",
        "subtitle": "跨应用统一检索与分析",
        "duration": "7 min"
      },
      {
        "id": "10",
        "slug": "research-mode-for-deep-dives",
        "title": "10. 深度研究",
        "subtitle": "全自动长程联网调研与综合报告",
        "duration": "10 min"
      },
      {
        "id": "11",
        "slug": "claude-in-action-use-cases-by-role",
        "title": "11. 岗位实战案例库",
        "subtitle": "产品、工程、市场与运营实操",
        "duration": "8 min"
      }
    ],
        "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>Research（研究）是一项高级功能，把 Claude 从一个对话式助手变成一个系统化的调查者。启用 Research 时，Claude 不只是回答你的问题——它从多个角度探索、综合来自网络与你已连接集成的信息。</p><p>把它想成有一位熟练的研究助手，在你继续自己的工作时，它收集信息、交叉引用来源并汇编一份全面报告。</p>"
      },
      {
        "id": "sec-1",
        "title": "何时使用 Research",
        "contentHtml": "<p>当你需要的不止快速答案时，Research 特别有价值：</p><ul><li>综合多个来源信息的全面报告</li><li>跨越网络与已连接集成的深入分析</li><li>通常需要数小时手工工作的彻底调查</li><li>比较分析（如评估竞品或供应商选项）</li><li>带可验证引用的报告</li></ul><p>但请考虑替代方案：需要快速具体事实（如今天的股价）时用网络搜索；需要复杂问题深度推理、不需要外部信息时打开 Thinking；答案来自组织内部知识时用 Enterprise Search。</p>"
      },
      {
        "id": "sec-2",
        "title": "Research 如何工作",
        "contentHtml": "<p>启用 Research 时，你激活的是一个智能体式、多步骤的过程，远超简单网络搜索。Claude 根据已发现的内容自主决定下一步搜索什么，无需你引导每一步。</p><ul><li><strong>第一步：Claude 规划方法</strong>：Claude 在搜索前思考：拆解你的请求、识别需要的信息、规划如何调查问题的不同角度。</li><li><strong>第二步：Claude 执行多次搜索</strong>：不只是一次搜索，Claude 进行多次相互叠加的搜索，根据发现决定下一步调查什么。</li><li><strong>第三步：Claude 综合发现</strong>：从多个来源收集信息后，Claude 把一切汇编成一份全面、组织良好的报告。</li><li><strong>第四步：Claude 提供引用</strong>：Research 报告中的每个主张都链接回来源，方便你核实信息。</li></ul>"
      },
      {
        "id": "sec-3",
        "title": "实际操作中使用 Research",
        "contentHtml": "<p>启用与使用 Research：</p><ul><li>点击聊天界面左下角的 + 按钮</li><li>从菜单中选择 Research（激活后高亮显示）</li><li>输入提示词并提交</li><li>Claude 会在后台工作，你会看到它搜索与分析时的进度指示</li></ul><p>重要提示：Research 要正常工作必须启用网络搜索。</p><h3>有效的 Research 提示词技巧</h3><ul><li>对目标要具体。与其「告诉我电动车市场」，不如「分析电动车电池市场——识别可能影响投资决策的关键玩家、技术趋势与供应链挑战」。</li><li>指定你想要的章节或结构。Claude 会围绕你提供的结构组织发现。</li><li>包含相关约束。预算范围、时间线、地理要求等参数帮助 Claude 聚焦研究。</li><li>让 Claude 帮你精化提示词。不确定如何表述研究问题时，可以请 Claude 在启用功能前帮你写出更好的 Research 提示词。</li></ul>"
      },
      {
        "id": "sec-4",
        "title": "与已连接集成协作",
        "contentHtml": "<p>当你连接了 Google Workspace 或其他集成时，Research 变得更强大。Claude 可以在网络研究之外，从你的邮件、日历与文档中拉取上下文。例如：</p><ul><li>「总结我的邮件和 Slack 中关于项目 X 的讨论，然后研究同类举措的行业最佳实践。」</li><li>「查看我下周的日历安排，并研究我要见的每家公司。」</li><li>「找到我们关于定价策略的所有内部文档，并与竞品如何定位进行比较。」</li></ul><p>使用集成时，你可以引导 Claude，例如「从我的 Google Drive 拉取相关上下文」或「包含我最近关于这个话题的邮件中的洞察」。</p>"
      },
      {
        "id": "sec-5",
        "title": "下一步",
        "contentHtml": "<p>下一节我们把所有内容整合起来。你将看到所学的一切如何通过按角色组织的真实用例融合在一起，并发现网页界面之外与 Claude 交互的其他方式。</p>"
      }
    ],
    "prevLesson": {
      "slug": "enterprise-search",
      "title": "9. 企业级全局搜索"
    },
    "nextLesson": {
      "slug": "claude-in-action-use-cases-by-role",
      "title": "11. 岗位实战案例库"
    }
  },
  "claude-in-action-use-cases-by-role": {
    "lessonId": "claude-in-action-use-cases-by-role",
    "lessonTitle": "11. 阵地实战案例库（Claude in Action：按角色划分的例子）",
    "lessonIndex": 10,
    "totalLessons": 13,
    "duration": "2 分钟",
          "outcomes": [
        "描述 2-3 个可以立即尝试的 claude.ai 用例"
,
        "知道去哪里寻找更多用例灵感"
      ],
    "roadmap": [
      {
        "id": "10",
        "slug": "research-mode-for-deep-dives",
        "title": "10. 深度研究",
        "subtitle": "全自动长程联网调研与综合报告",
        "duration": "10 min"
      },
      {
        "id": "11",
        "slug": "claude-in-action-use-cases-by-role",
        "title": "11. 岗位实战案例库",
        "subtitle": "产品、工程、市场与运营实操",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "other-ways-to-work-with-claude",
        "title": "12. 更多高阶协同方式",
        "subtitle": "API, Console 与智能体开发",
        "duration": "7 min"
      }
    ],
        "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>无论你做什么，Claude 都能帮助你简化工作。本课按角色组织，突出实用用例，让你看到 Claude 如何应用到你的具体工作情境。每个用例都链接到我们用例图库中的详细指南，附有可遵循的分步说明。</p>"
      },
      {
        "id": "sec-1",
        "title": "通用专业用例",
        "contentHtml": "<ul><li><strong>生成项目状态报告</strong>——用清晰、一致的更新让利益相关者知情</li><li><strong>分析用户反馈中的模式</strong>——从客户评论与调查回应中提炼洞察</li><li><strong>把品牌规范打包成技能</strong>——创建一个应用品牌标准的可复用 Claude 技能</li></ul>"
      },
      {
        "id": "sec-2",
        "title": "按职能划分的用例",
        "contentHtml": "<h3>销售（Sales）</h3><ul><li><strong>构建竞争情报库（battle card library）</strong>——创建帮团队赢得交易的竞争情报资源</li><li><strong>销售准备</strong>——在重要会议前研究潜在客户并组织你的要点</li><li><strong>创建销售报告</strong>——把渠道数据变成清晰、可执行的报告</li></ul><h3>市场（Marketing）</h3><ul><li><strong>分析活动表现</strong>——从活动指标中提炼洞察指导策略</li><li><strong>跨平台适配内容</strong>——高效地为不同渠道与受众复用内容</li></ul><h3>财务（Finance）</h3><ul><li><strong>构建财务模型</strong>——用 Claude 创建与精化财务预测</li><li><strong>起草投资备忘录</strong>——更高效地组织与撰写投资分析</li><li><strong>理解并扩展继承的电子表格</strong>——解码复杂电子表格并添加新功能</li></ul><h3>HR</h3><ul><li><strong>创建新员工入职指南</strong>——为不同角色开发全面的入职材料</li></ul><h3>法务（Legal）</h3><ul><li><strong>跟踪发现时间线与分析模式</strong>——组织案件时间线并识别法律文件中的关键模式</li></ul><h3>研究（Research）</h3><ul><li><strong>规划文献综述</strong>——组织你审阅学术来源的方法</li><li><strong>从原始数据验证统计</strong>——复核计算与统计分析</li></ul>"
      },
      {
        "id": "sec-3",
        "title": "探索更多",
        "contentHtml": "<p>这些例子只是开始。访问用例图库浏览完整合集，寻找 Claude 如何帮助你的具体工作的灵感。</p><p>下一模块你将认识更多与 Claude 协作的方式——包括 Claude Code、Claude Tag、Claude Design、Claude for Microsoft 365 与 Claude in Chrome——每一种都针对工作实际发生的地点而设计。</p>"
      }
    ],
    "prevLesson": {
      "slug": "research-mode-for-deep-dives",
      "title": "10. Deep Research 深度研究"
    },
    "nextLesson": {
      "slug": "other-ways-to-work-with-claude",
      "title": "12. 更多高阶协同方式"
    }
  },
  "other-ways-to-work-with-claude": {
    "lessonId": "other-ways-to-work-with-claude",
    "lessonTitle": "12.更多高阶友善方式（与Claude合作的其他方式）",
    "lessonIndex": 11,
    "totalLessons": 13,
    "duration": "15 分钟",
          "outcomes": [
        "理解何时使用 Claude Code、Claude Tag、Claude Design、Claude for Microsoft 365 与 Claude in Chrome"
      ],
    "roadmap": [
      {
        "id": "11",
        "slug": "claude-in-action-use-cases-by-role",
        "title": "11. 岗位实战案例库",
        "subtitle": "产品、工程、市场与运营实操",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "other-ways-to-work-with-claude",
        "title": "12. 更多高阶协同方式",
        "subtitle": "API, Console 与智能体开发",
        "duration": "7 min"
      },
      {
        "id": "13",
        "slug": "what-s-next",
        "title": "13. 总结与后续进阶路线",
        "subtitle": "获取认证徽章与社区资源",
        "duration": "5 min"
      }
    ],
        "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>如课程开头所说，Claude 是一种智能。Claude.ai 只是使用它的方式之一。Claude 还在几个专门工具中可用，设计来在你已工作的地方与你相遇。本课介绍这些额外的协作方式，每一种都针对特定工作流与用例。</p>"
      },
      {
        "id": "sec-1",
        "title": "Claude Code 与 Claude Tag",
        "contentHtml": "<h3>Claude Code</h3><p>Claude Code 是一个智能体式编码工具，在你工作的地方工作——终端、IDE、浏览器甚至 Slack 中。它理解你的代码库、执行命令、通过自然语言处理整个开发工作流。适合：用普通英语描述需求让 Claude 写代码、粘贴错误消息让 Claude 分析代码库修复问题、导航不熟悉的代码库、自动化 lint 错误修复与合并冲突等繁琐任务。</p><h3>Claude Tag</h3><p>Claude Tag 把 Claude 直接带入 Slack，让你在频道与线程中获得帮助，或把 Slack 上下文带进 Claude 对话——只需在任何线程中 @Claude。适合：起草消息回复、总结长线程、为会议准备相关对话与共享文档、直接从 bug 报告或功能讨论交接编码任务。</p>"
      },
      {
        "id": "sec-2",
        "title": "Claude Design 与 Microsoft 365 系列",
        "contentHtml": "<h3>Claude Design</h3><p>Claude Design 是把想法变成可工作界面的专属空间。用自然语言描述你想要什么——或从草图、截图开始——Claude 构建一个可交互原型，你可以通过对话精修并交给团队。适合：从书面简报/草图/参考截图到可工作 UI 原型、快速生成并比较多个设计方向、用你团队的设计系统做原型。</p><h3>Claude for Excel / PowerPoint / Word / Outlook</h3><p>Claude for Excel 通过侧边栏把 Claude 带入 Microsoft Excel，让你通过对话分析、理解与修改电子表格（多标签页工作簿、跨表公式流、#REF! 等错误调试、透视表与图表）。Claude for PowerPoint 让你起草、编辑与重构演示文稿，同时保持现有模板与品牌风格。Claude for Word 让你在已打开的文档中起草、修订与重构，支持修订与评论、从连接来源拉取上下文。Claude for Outlook 让你分诊邮件、用相关线程与日历上下文起草回复、把长邮件链变成清晰总结。</p>"
      },
      {
        "id": "sec-3",
        "title": "Claude in Chrome",
        "contentHtml": "<p>Claude in Chrome 是一个浏览器扩展，把 Claude 作为侧边栏添加到 Google Chrome。它能观察你正在做什么并直接在浏览器内采取行动。适合：浏览时总结文章/论文/网页、起草邮件回复、自动化重复表单填写、测试网站功能、跨标签页保持上下文的浏览助手。</p><p>重要提示：Claude in Chrome 目前处于公开测试阶段。Anthropic 建议在可信网站上用于低风险任务。扩展会在购买或分享个人数据等高危动作前请求权限，某些类别网站（金融服务、成人内容）默认被阻止。</p>"
      },
      {
        "id": "sec-4",
        "title": "总结",
        "contentHtml": "<p>每个工具把 Claude 的能力延伸到你工作的具体环境中：</p><ul><li><strong>Claude.ai</strong>——通用任务、研究、写作、分析、文件创建；网页、桌面与移动应用</li><li><strong>Claude Code</strong>——软件开发、代码库导航、git 工作流；终端/命令行、IDE 或浏览器</li><li><strong>Claude Cowork</strong>——复杂多步任务；桌面（外加网页与移动，部分套餐测试中）</li><li><strong>Claude Tag</strong>——团队协作、会议准备、情境中的快速答案；Slack 工作区</li><li><strong>Claude Design</strong>——UI 原型、设计探索；网页</li><li><strong>Claude for Microsoft 365</strong>——就地编辑并跨文档携带上下文；Excel、PowerPoint、Word 与 Outlook 侧边栏</li><li><strong>Claude in Chrome</strong>——网络研究、邮件管理、浏览器自动化；Chrome 浏览器侧边栏</li></ul>"
      },
      {
        "id": "sec-5",
        "title": "下一步",
        "contentHtml": "<p>最后用一段简短回顾与一次测验结束本课程，测验通过可获得结业徽章，可在 LinkedIn 上与你的团队分享。</p>"
      }
    ],
    "prevLesson": {
      "slug": "claude-in-action-use-cases-by-role",
      "title": "11. 岗位实战案例库"
    },
    "nextLesson": {
      "slug": "what-s-next",
      "title": "13. 总结与后续进阶路线"
    }
  },
  "what-s-next": {
    "lessonId": "what-s-next",
    "lessonTitle": "13.总结与后续进阶路线(What's Next)",
    "lessonIndex": 12,
    "totalLessons": 13,
    "duration": "2 分钟",
          "outcomes": [
        "回顾课程所学并找到持续成长资源"
,
        "用实践建议开始行动"
      ],
    "roadmap": [
      {
        "id": "12",
        "slug": "other-ways-to-work-with-claude",
        "title": "12. 更多高阶协同方式",
        "subtitle": "API, Console 与智能体开发",
        "duration": "7 min"
      },
      {
        "id": "13",
        "slug": "what-s-next",
        "title": "13. 总结与后续进阶路线",
        "subtitle": "获取认证徽章与社区资源",
        "duration": "5 min"
      }
    ],
        "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>恭喜你完成 Claude 101！你为有效使用 Claude 打下了坚实的基础。让我们回顾所学，并指引你走向持续成长的资源。</p>"
      },
      {
        "id": "sec-1",
        "title": "你学到了什么",
        "contentHtml": "<h3>开始使用 Claude</h3><ul><li>Claude 是一个被构建为乐于助人、无害与诚实的 AI 助手——不止是聊天机器人，而是复杂工作的思考伙伴</li><li>你可以通过网页、桌面与移动应用访问 Claude，对话跨设备同步</li><li>有效的提示词设定情境（上下文）、定义任务（行动）、指定规则（格式与风格）</li></ul><h3>获得更好的结果</h3><ul><li>迭代是关键——把最初回应当起点，通过对话精化</li><li>笼统回应或语气不对等常见挑战，可以用更具体的上下文修复</li><li>AI 素养包含四项能力：委派、描述、鉴别与尽责</li></ul><h3>组织你的工作</h3><ul><li>项目创建带持久知识、定制指令与团队协作的专属工作区</li><li>Artifacts 是 Claude 在对话旁创建的独立输出（文档、代码、图表、交互工具）</li><li>Skills 是教 Claude 专业工作流的指令包</li></ul><h3>扩展 Claude 的触达范围</h3><ul><li>连接器把 Claude 链接到你的工具（Google Workspace、Slack、Notion 等），让它能处理你的真实数据</li><li>Enterprise Search 提供搜索组织知识源的专项项目</li><li>Research 进行手工需要数小时或数天的系统化、多来源调查</li></ul>"
      },
      {
        "id": "sec-2",
        "title": "更多资源",
        "contentHtml": "<h3>关于 AI 与 Claude 的学习资源</h3><ul><li><strong>AI Fluency 课程</strong>——关于有效 AI 协作的免费课程</li><li><strong>AI 能力与边界</strong>——关于 AI 能与不能做什么的免费入门课程</li><li><strong>用例图库</strong>——强大工作流的分步指南与提示词</li><li><strong>Anthropic 帮助中心</strong>——详细文档与排障</li><li><strong>提示词文档</strong>——获得最佳结果的全面指南</li></ul><h3>产品专属资源</h3><ul><li><strong>Claude Code in Action</strong>——用 Claude 进行开发工作流的免费课程</li><li><strong>Claude Cowork 入门</strong>——用 Claude 桌面伴侣处理多步工作的免费课程</li><li><strong>连接器目录</strong>——浏览并连接你的工具</li></ul>"
      },
      {
        "id": "sec-3",
        "title": "一句鼓励",
        "contentHtml": "<p>现在最重要的是：<strong>开始行动！</strong>你在这里学到的技能会随着练习而精进，你会培养出关于 Claude 何时、如何能帮上忙的直觉。</p><p>从简单开始。从本周工作中挑一个重复性任务，用 Claude 试试。也许是起草一封邮件、总结会议记录或分析电子表格。看看会发生什么。迭代。找到适合你特定需求的用法。</p><p>记住：Claude 被设计为协作者，而不是替代品。最好的结果来自你把自己的专业能力、上下文与判断带入对话。</p><p>你现在拥有了基础。剩下的来自真正去做。</p>"
      }
    ],
    "prevLesson": {
      "slug": "other-ways-to-work-with-claude",
      "title": "12. 更多高阶协同方式"
    }
  }
};
