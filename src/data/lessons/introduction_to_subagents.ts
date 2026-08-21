import { LessonLayoutProps } from '../../components/LessonLayout';

export const INTRODUCTION_TO_SUBAGENTS_LESSONS: Record<string, Omit<LessonLayoutProps, 'courseId' | 'courseTitle'>> = {
  "what-are-subagents": {
    "lessonId": "what-are-subagents",
    "lessonTitle": "开始课程",
    "lessonIndex": 0,
    "totalLessons": 5,
    "duration": "5 分钟",
          "outcomes": [
        "理解子代理（subagent）的本质：拥有独立上下文窗口的专职助手"
,
        "说清子代理为何能让主对话的上下文窗口保持干净"
,
        "认识 Claude Code 内置的三种子代理及各自适用场景"
,
        "了解自定义子代理能带来什么，以及使用子代理需要付出的代价"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-are-subagents",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "creating-a-subagent",
        "title": "2. 创建子代理",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "designing-effective-subagents",
        "title": "3. 设计有效的子代理",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "using-subagents-effectively",
        "title": "4. 有效使用子代理",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "complete",
        "title": "5. 课程完成",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
        "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>子代理（subagent）是 Claude Code 可以把任务委派出去的<strong>专职助手</strong>。你可以把它们想象成目标明确的帮手：每个子代理都在自己独立的对话上下文窗口中运行，完成分配给它的工作，然后把一份摘要交回主线程。</p><p>过程中的所有中间步骤——读取文件、执行搜索、调用工具——都被隔离在子代理自己的上下文里，永远不会挤占你的主对话。</p>"
      },
      {
        "id": "sec-1",
        "title": "为什么子代理很重要",
        "contentHtml": "<p>每当你和 Claude Code 对话，你都在向主上下文窗口里追加内容。每一次工具调用、每一次文件读取、每一条搜索结果都会被存进去。这块空间是有限的，一旦被填满，Claude 就会开始丢失对话早期的信息。</p><p>子代理通过<strong>开辟一个独立的上下文窗口</strong>来解决这个问题。子代理启动时会收到两样东西：</p><ul><li>来自你配置文件的<strong>自定义系统提示</strong>，它定义了这个子代理的角色与行为方式</li><li>由父代理根据你的诉求撰写的<strong>任务描述</strong></li></ul><p>随后子代理就开始独立工作。它会读文件、跑搜索、改代码——只要是完成任务需要做的事。工作结束后，<strong>只有一份摘要会回到你的主对话</strong>，整个子代理的对话记录随即被丢弃。</p><p>这意味着你的主上下文始终保持整洁。你拿到了答案，却不必承受寻找答案这一路上产生的所有噪声。当然，代价是你<em>失去了对子代理推理过程的可见性</em>——你看不到它是怎么一步步得出结论的。</p>"
      },
      {
        "id": "sec-2",
        "title": "一个实际的例子",
        "contentHtml": "<p>假设你正在摸索一个陌生的代码库，想搞清楚哪个服务负责处理退款。</p><p><strong>不用子代理时</strong>，Claude 可能会读 15 个文件、执行好几轮搜索、追踪多层函数调用。这些内容全都会塞进你的上下文窗口——尽管你真正需要的只是一个事实。</p><p><strong>用了子代理后</strong>，体验会干净得多。你提出问题，<code>Explore</code> 子代理被启动，在它自己的上下文里完成全部挖掘工作，然后交回一个聚焦的答案。</p><p>你的主上下文窗口里只留下了<strong>问题</strong>和<strong>摘要</strong>——而不是沿途被读过的那 15 个文件。</p>"
      },
      {
        "id": "sec-3",
        "title": "内置子代理",
        "contentHtml": "<p>Claude Code 自带了几个开箱即用的内置子代理：</p><ul><li><strong>General purpose</strong>（通用型子代理）—— 适用于既需要探索、又需要动手执行的多步骤任务</li><li><strong>Explore</strong> —— 用于快速搜索和浏览代码库</li><li><strong>Plan</strong> —— 在计划模式（plan mode）下使用，在给出方案之前对代码库做研究与分析</li></ul>"
      },
      {
        "id": "sec-4",
        "title": "自定义子代理",
        "contentHtml": "<p>除了内置选项之外，你还可以创建<strong>自己的子代理</strong>，为它编写自定义系统提示并指定可用的工具。这让你能够定义贴合自身工作流的专职代理——一个代码审查员、一个测试编写者、一个文档生成器，或者任何你需要的角色。</p><p>自定义子代理以带 YAML frontmatter 的 markdown 文件形式存在，通常放在项目的 <code>.claude/agents/</code> 目录下。下一课我们就会动手创建一个。</p>"
      },
      {
        "id": "sec-5",
        "title": "关键要点",
        "contentHtml": "<p>子代理带给你三项主要收益：</p><ul><li><strong>拆分工作</strong> —— 把任务切成聚焦的小块，让每个子代理专注于一件具体的事</li><li><strong>隔离中间过程</strong> —— 所有过程性工作留在子代理内部，主上下文窗口因此保持干净</li><li><strong>只回传所需</strong> —— 以简洁摘要的形式带回你真正需要的信息</li></ul><p>无论你用的是内置子代理还是自己创建的，它们都是让长时间 Claude Code 会话变得更高效的实用手段。<strong>主上下文里的噪声越少，你就能工作得越久、越有效。</strong></p>"
      }
    ],
    "nextLesson": {
      "slug": "creating-a-subagent",
      "title": "Creating a subagent"
    }
  },
  "creating-a-subagent": {
    "lessonId": "creating-a-subagent",
    "lessonTitle": "创建子代理",
    "lessonIndex": 1,
    "totalLessons": 5,
    "duration": "10 分钟",
          "outcomes": [
        "用 /agents 命令从零创建一个自定义子代理"
,
        "为子代理挑选合适的作用范围、工具权限、模型与颜色"
,
        "读懂子代理配置文件中 name / description / tools / model / color 各字段的作用"
,
        "写出能让 Claude 主动委派任务的 description"
,
        "测试子代理，并在它没被触发时知道该改哪里"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-are-subagents",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "creating-a-subagent",
        "title": "2. 创建子代理",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "designing-effective-subagents",
        "title": "3. 设计有效的子代理",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "using-subagents-effectively",
        "title": "4. 有效使用子代理",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "complete",
        "title": "5. 课程完成",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
        "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>Claude Code 自带了一批内置子代理，但你也可以创建自己的。自定义子代理专精于特定任务——比如审查代码、编写测试、检查文档。</p><p>它们被定义为<strong>带 YAML frontmatter 的 markdown 文件</strong>，用来告诉 Claude 什么时候该启用这个子代理，以及这个子代理该如何行事。</p>"
      },
      {
        "id": "sec-1",
        "title": "创建一个子代理",
        "contentHtml": "<p>创建子代理最简单的方式是使用 <code>/agents</code> 斜杠命令。它会打开管理子代理的主界面，在其中选择 <strong>Create new agent</strong>。</p><p>系统首先会让你选择子代理的<strong>作用范围（scope）</strong>：</p><ul><li><strong>Project-level</strong>（项目级）—— 仅在当前项目中可用</li><li><strong>User-level</strong>（用户级）—— 在你这台机器上的所有项目之间共享</li></ul><p>接下来你可以选择创建方式。你可以手写配置，但<strong>推荐的做法是让 Claude 帮你生成</strong>：只需描述你希望这个子代理做什么，Claude 就会依据你的输入产出名称（name）、描述（description）和系统提示（system prompt）。</p>"
      },
      {
        "id": "sec-2",
        "title": "自定义工具权限",
        "contentHtml": "<p>在创建过程中，你有机会定制这个子代理可以访问哪些工具。工具类别包括：</p><ul><li>只读类工具（Read-only tools）</li><li>编辑类工具（Edit tools）</li><li>执行类工具（Execution tools）</li><li>MCP 工具（MCP tools）</li><li>其他工具（Other tools）</li></ul><p>请认真想清楚你的子代理<em>实际上</em>需要什么。一个代码审查员大概并不需要编辑类工具——它的职责是阅读和分析代码，而不是修改代码。不过你可能仍然希望保留执行类工具，这样它能更方便地识别出当前待提交的改动。</p>"
      },
      {
        "id": "sec-3",
        "title": "选择模型与颜色",
        "contentHtml": "<p>配置好工具之后，你需要选择由哪个 Claude 模型来驱动这个子代理。可选项为：</p><ul><li><strong>Haiku</strong> —— 最适合快速、轻量的任务</li><li><strong>Sonnet</strong> —— 在速度与深度之间取得良好平衡</li><li><strong>Opus</strong> —— 最适合复杂分析</li><li><strong>Inherit</strong> —— 沿用你主对话当前正在使用的模型</li></ul><p>最后，你要挑一个<strong>颜色</strong>。这个颜色会显示在界面上，让你一眼就能看出当前是哪个子代理在工作。这是个很小的细节，但当你同时运行多个子代理时会很有帮助。</p>"
      },
      {
        "id": "sec-4",
        "title": "配置文件与系统提示",
        "contentHtml": "<p>创建完成后，子代理的配置文件会被保存到你的项目中（通常位于 <code>.claude/agents/your-agent-name.md</code>）。一个典型的子代理配置长这样：</p><pre><code>---\nname: code-quality-reviewer\ndescription: Use this agent when you need to review recently written or modified code for quality, security, and best practice compliance.\ntools: Bash, Glob, Grep, Read, WebFetch, WebSearch\nmodel: sonnet\ncolor: purple\n---\nYou are an expert code reviewer specializing in quality assurance, security best practices, and\nadherence to project standards. Your role is to thoroughly examine recently written or modified code\nand identify issues that could impact reliability, security, maintainability, or performance.</code></pre><p>我们来逐个字段拆解：</p><ul><li><code>name</code> —— 子代理的唯一标识符。你通过它来引用这个子代理，既可以直接让 Claude 调用，也可以在消息中输入 <code>@agent code-quality-reviewer</code>。</li><li><code>description</code> —— 控制 Claude <strong>何时</strong>决定使用这个子代理。它必须是<strong>单行</strong>（如果需要换行，请使用转义换行符 <code>\\n</code>）。你可以在这里加入示例对话，帮助 Claude 判断什么时候委派任务是合适的。</li><li><code>tools</code> —— 列出子代理可以访问的工具。它对应你在生成过程中所做的选择，但你随时可以在这里手动编辑这个列表。</li><li><code>model</code> —— 指定使用哪个 Claude 模型：<code>sonnet</code>、<code>opus</code>、<code>haiku</code> 或 <code>inherit</code>。</li><li><code>color</code> —— 用于在界面上识别该子代理的颜色。</li></ul><h3>系统提示</h3><p>markdown 文件的<strong>正文部分</strong>（YAML frontmatter 以下的全部内容）就是系统提示。这里是你给子代理下指令的地方：它应该关注什么、应该如何分析、以及应该如何把结论汇报给主代理。</p><p>一份写得好的系统提示，是「有用的子代理」和「答非所问的子代理」之间的分水岭。请明确说清子代理该寻找什么，以及它该如何组织输出结构。</p>"
      },
      {
        "id": "sec-5",
        "title": "让 Claude 自动使用你的子代理并测试它",
        "contentHtml": "<p>如果你希望 Claude 在你没有明确要求的情况下也会主动把任务委派给这个子代理，请在 <code>description</code> 字段中加入 <strong>“proactively”</strong> 这个词。例如：</p><pre><code>description: Proactively suggest running this agent after major code changes...</code></pre><p>你还可以在描述中添加<strong>示例对话</strong>，帮助 Claude 理解哪些具体场景应该使用这个子代理。你的例子越具体，Claude 在判断何时委派时就越准确。</p><h3>测试你的子代理</h3><p>创建完子代理后，做一些代码改动，然后让 Claude 审查这些改动，以此来测试它。</p><p>如果在你预期该触发的场景下子代理并没有被使用，请回头检查 <code>description</code>。补充更具体的示例和触发场景，能帮助 Claude 更好地理解何时应该把工作委派给你的子代理。</p>"
      }
    ],
    "prevLesson": {
      "slug": "what-are-subagents",
      "title": "Start course"
    },
    "nextLesson": {
      "slug": "designing-effective-subagents",
      "title": "Designing effective subagents"
    }
  },
  "designing-effective-subagents": {
    "lessonId": "designing-effective-subagents",
    "lessonTitle": "设计有效的子代理",
    "lessonIndex": 2,
    "totalLessons": 5,
    "duration": "10 分钟",
          "outcomes": [
        "理解 name 与 description 如何同时决定子代理的触发时机和收到的输入提示"
,
        "在系统提示中定义结构化输出格式，为子代理创造天然的停止点"
,
        "通过「遇到的障碍」小节把变通方案和环境怪癖回传给主线程"
,
        "按子代理职责的差异合理收窄工具访问权限"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-are-subagents",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "creating-a-subagent",
        "title": "2. 创建子代理",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "designing-effective-subagents",
        "title": "3. 设计有效的子代理",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "using-subagents-effectively",
        "title": "4. 有效使用子代理",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "complete",
        "title": "5. 课程完成",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
        "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>你已经知道如何创建子代理了，现在我们来看看那些让子代理<strong>真正有效</strong>的模式。配置不当的子代理会漫无目的地游走、运行过久，或者产出主代理根本没法用的输出。</p><p>解决办法归结为四件事：<strong>写好描述</strong>、<strong>定义输出格式</strong>、<strong>报告障碍</strong>，以及<strong>限制工具访问权限</strong>。</p>"
      },
      {
        "id": "sec-1",
        "title": "子代理的配置数据是如何被使用的",
        "contentHtml": "<p>当你向主上下文窗口中的代理发送消息时，<strong>每一个可用子代理的 name 和 description 都会被放进系统提示里</strong>。主代理正是依靠这些信息来决定该启动哪个子代理、以及什么时候启动。所以，如果你想更好地控制某个子代理何时被自动触发，你该调整的就是它的 name 和 description。</p><p>而 description 还扮演着第二个角色。当主代理启动一个子代理时，它需要撰写一段<strong>输入提示（input prompt）</strong>来发起任务，而它会<strong>以 description 作为撰写这段提示的指引</strong>。也就是说，description 不只控制子代理<em>何时</em>运行——它还塑造了子代理<em>被告知要做什么</em>。</p><h3>用描述来塑造输入提示</h3><p>以一个代码审查子代理为例。如果描述写得很笼统，主代理可能会写出这样的输入提示：“use get diff to find the current changes.” 这太模糊了，子代理只能自己去猜哪些文件才是重点。</p><p>如果你把描述更新为类似这样的内容：</p><pre><code>You must tell the agent precisely which files you want it to review.</code></pre><p>那么主代理现在就会写出<strong>具体得多</strong>的输入提示，明确列出需要审查的实际文件。</p><p>同样的技巧适用于各类子代理。举个例子，给一个网页搜索子代理的描述里加上 “return sources that can be cited”，主代理在委派任务时就会把这条指令一并带上。</p>"
      },
      {
        "id": "sec-2",
        "title": "定义输出格式",
        "contentHtml": "<p><strong>在系统提示中定义输出格式，是你能对子代理做出的最重要的一项改进。</strong>它带来两个效果：</p><ul><li><strong>创造出天然的停止点</strong> —— 当格式中的每个小节都被填满时，子代理就知道自己做完了。</li><li><strong>防止子代理运行过久</strong> —— 在没有明确输出定义的情况下，子代理很难判断「研究到什么程度算够」，往往会跑得比必要的时间长得多。</li></ul><p>下面是一个代码审查子代理的结构化输出格式示例：</p><pre><code>Provide your review in a structured format:\n- Summary: Brief overview of what you reviewed and overall assessment\n- Critical Issues: Any security vulnerabilities, data integrity risks, or logic errors that must be fixed immediately\n- Major Issues: Quality problems, architecture misalignment, or significant performance concerns\n- Minor Issues: Style inconsistencies, documentation gaps, or minor optimizations\n- Recommendations: Suggestions for improvement, refactoring opportunities, or best practices to apply\n- Approval Status: Clear statement of whether the code is ready to merge/deploy or requires changes</code></pre><p>这套格式给了子代理一份清晰的检查清单去逐项完成。一旦每个小节都填写完毕，子代理就知道可以收尾了。</p>"
      },
      {
        "id": "sec-3",
        "title": "报告遇到的障碍",
        "contentHtml": "<p>当子代理在工作过程中发现了某种变通方案——比如解决了一个依赖问题，或者发现某个命令需要加上特定的参数——这些细节<strong>必须出现在它回传的摘要里</strong>。如果没有，主线程就得自己把同样的解法重新摸索一遍，白白浪费时间和 token。</p><p>你希望被显式暴露出来的信息包括：</p><ul><li>环境搭建问题或环境本身的怪癖</li><li>任务过程中发现的变通方案</li><li>需要特殊参数或额外配置才能跑通的命令</li><li>引发问题的依赖项或 import</li></ul><p>拿到这些信息的方法，就是在输出格式中<strong>明确地把它要出来</strong>。在你的输出模板里加上一个 “Obstacles Encountered” 小节，就能稳定地把这类信息浮现出来：</p><pre><code>- Obstacles Encountered: Report any obstacles encountered during the review process. This can be: setup issues, workarounds discovered or environment quirks. Report commands that needed a special flag or configuration. Report dependencies or imports that caused problems.</code></pre>"
      },
      {
        "id": "sec-4",
        "title": "限制工具访问权限",
        "contentHtml": "<p>并不是每个子代理都需要访问每一种工具。想清楚某个子代理<em>实际上</em>需要做什么，然后<strong>只给它完成这项工作所必需的工具</strong>。这样做有两个好处：既能避免意料之外的副作用，也能在你手里有好几个子代理时让各自的职责更加清晰。</p><p>对于常见的几类子代理，可以这样考虑工具权限：</p><ul><li><strong>研究型 / 只读子代理</strong> —— 只需要 <code>Glob</code>、<code>Grep</code> 和 <code>Read</code>。这样它绝不可能意外修改文件。</li><li><strong>代码审查员</strong> —— 需要 <code>Bash</code> 权限来运行 <code>git diff</code>、查看改动了什么，但仍然不需要 <code>Edit</code> 或 <code>Write</code>。</li><li><strong>样式 / 代码修改型代理</strong> —— 这才是你该开放 <code>Edit</code> 和 <code>Write</code> 的场景，因为这个子代理的职责本身就是真正去改你的代码。</li></ul>"
      },
      {
        "id": "sec-5",
        "title": "融会贯通",
        "contentHtml": "<p>有效的子代理都具备以下四个特征：</p><ol><li><strong>具体的描述</strong> —— description 既控制子代理何时被启动，也决定它收到什么指令。写它的时候要同时考虑这两件事。</li><li><strong>结构化的输出</strong> —— 在系统提示中定义输出格式，让子代理知道自己何时算完成，并且回传主线程真正用得上的信息。</li><li><strong>障碍上报</strong> —— 在输出格式中专门留一个小节，记录变通方案、环境怪癖和遇到的问题，免得主线程重新踩一遍坑。</li><li><strong>受限的工具权限</strong> —— 只给子代理它真正需要的工具：研究型只读，审查员加 bash，只有那些本就该改代码的代理才给 edit/write。</li></ol><p>这几条模式单看都很朴素，但合在一起，就能把一个「模模糊糊想帮忙」的子代理，变成一个<strong>聚焦、可预期、按时收工、汇报清楚</strong>的工作者。</p>"
      }
    ],
    "prevLesson": {
      "slug": "creating-a-subagent",
      "title": "Creating a subagent"
    },
    "nextLesson": {
      "slug": "using-subagents-effectively",
      "title": "Using subagents effectively"
    }
  },
  "using-subagents-effectively": {
    "lessonId": "using-subagents-effectively",
    "lessonTitle": "有效使用子代理",
    "lessonIndex": 3,
    "totalLessons": 5,
    "duration": "10 分钟",
          "outcomes": [
        "用「中间过程是否重要」这一条法则判断该不该派子代理"
,
        "识别子代理最能发挥价值的三类场景：研究、代码审查、需要自定义系统提示的任务"
,
        "避开三种常见反模式：专家人设、串行流水线、测试运行器"
,
        "理解为什么自定义系统提示能让子代理胜过主线程"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-are-subagents",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "creating-a-subagent",
        "title": "2. 创建子代理",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "designing-effective-subagents",
        "title": "3. 设计有效的子代理",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "using-subagents-effectively",
        "title": "4. 有效使用子代理",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "complete",
        "title": "5. 课程完成",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
        "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>你已经会创建子代理，也知道该如何把它们设计好。现在真正的问题是：<strong>它们什么时候真的有帮助，什么时候反而是累赘？</strong></p><p>差别归结为一件事——<strong>中间过程对你的主线程来说是否重要</strong>。</p>"
      },
      {
        "id": "sec-1",
        "title": "子代理最擅长的场景",
        "contentHtml": "<p>当<strong>探索</strong>与<strong>执行</strong>可以彼此分离时，子代理的效果最好。如果任务中的每一步都依赖上一步的发现，那你应该把这些工作留在主线程里；但如果你只需要一个答案、并不关心过程，那就把它委派出去。</p><p>子代理在这类任务上表现出色：</p><ul><li>你要的是一个<strong>结果</strong>，而不是「如何找到它」的全程实况解说</li><li>那些探索性的工作会把主线程的上下文搞得一团乱</li><li>任务能从<strong>全新视角</strong>或<strong>自定义系统提示</strong>中获益</li></ul>"
      },
      {
        "id": "sec-2",
        "title": "研究型任务与代码审查",
        "contentHtml": "<h3>研究型任务</h3><p>研究是子代理最经典的用例。设想你要弄清一个陌生代码库里的身份认证是如何工作的：你的主线程需要知道 JWT 在哪里被校验，但它<strong>不需要</strong>看到沿途被搜索过的每一个文件。</p><p>一个研究型子代理可以读几十个文件、追踪函数调用、探查不同的代码路径。所有这些探索都留在子代理自己的上下文里，你的主线程收到的是一份干净的摘要，比如：</p><pre><code>JWT validation happens in middleware/auth.js line 42,\ncalled from the Express router in route/api.js</code></pre><p>重活由子代理干了，而你的主线程恰好拿到了继续往前走所需要的东西。</p><h3>代码审查</h3><p>当代码被当作「别人写的」呈现给 Claude 时，它的审查会更加有效。如果你和主线程来回几十轮才做出一个功能，再让同一个线程去审查它，得到的反馈往往很无力——因为 Claude 参与了创造过程，很难再用全新的眼光去看它。</p><p>一个审查员子代理是在<strong>独立的上下文</strong>中看到这些改动的。它运行 <code>git diff</code>、读取被修改的文件，然后套用自己专门的审查标准，而不带任何「这段代码当初是怎么写出来的」的历史包袱。</p><p>这种隔离还有一个好处：你可以把<strong>项目专属的审查规范</strong>写进子代理的系统提示，从而保证整个团队用的是一致的审查标准。</p>"
      },
      {
        "id": "sec-3",
        "title": "自定义系统提示",
        "contentHtml": "<p>Claude Code 默认的系统提示强调简洁、以代码为中心的回应。这对写代码很好用，但并不适用于所有场合。</p><p>下面这两种情况下，自定义系统提示能让子代理<strong>确实比主线程更好</strong>：</p><ul><li><strong>文案撰写子代理</strong> —— 给它关于语气、受众和风格的指令。Claude Code 的默认提示倾向于简洁的技术写作，而这恰恰不是你写落地页或邮件营销时想要的。一个文案子代理可以拥有一套完全不同的、关于表达口吻和结构的指令。</li><li><strong>样式子代理</strong> —— 让它指向你的设计系统文件。子代理运行时，这些文件会自动加载进它的上下文，于是它在动笔写任何 CSS 之前就已经知道你的颜色变量、间距约定和组件模式。</li></ul>"
      },
      {
        "id": "sec-4",
        "title": "子代理反而帮倒忙的情况",
        "contentHtml": "<p>启动子代理是有开销的——你失去了对其工作过程的可见性，它的发现还被压缩成了一份摘要。这份开销<strong>只有在子代理能做到主线程做不到的事情时才划算</strong>。有三种常见的反模式需要警惕。</p><h3>专家人设（Expert Claims）</h3><p>那些自称拥有某种专长的子代理很少能帮上忙。像 “you are a Python expert” 或 “you are a Kubernetes specialist” 这样的提示并不产生任何增量价值，因为 Claude 本来就具备这些知识。所谓的「专家子代理」能做的事，你的主线程都能直接做。</p><h3>串行流水线（Sequential Pipelines）</h3><p>把子代理串成流水线会带来问题。设想一个三代理流程：一个负责复现 bug，一个负责调试，一个负责修复。流水线只有在各项任务<strong>真正相互独立</strong>时才有效；一旦每一步都依赖上一步的发现，它就会失败——而修 bug 几乎总是这种情况。信息会在代理之间的交接中丢失。</p><h3>测试运行器（Test Runners）</h3><p>测试运行器型子代理往往会<strong>隐藏你需要的信息</strong>。测试失败时，你想要的是完整输出以便定位问题；而一个只回一句 “tests failed” 的子代理，会逼着你再去写额外的调试脚本，才能拿到本来直接执行就能看到的细节。实测表明，测试运行器这一模式在所有配置中表现最差。</p>"
      },
      {
        "id": "sec-5",
        "title": "决策法则",
        "contentHtml": "<p>在判断是否该用子代理时，只问自己一个问题：<strong>中间过程重要吗？</strong></p><p>如果答案是「不重要」——你只需要最终结果——那就委派给子代理。如果答案是「重要」——你需要看到过程中发生了什么并据此做出反应——那就把它留在主线程里。</p><p><strong>适合用子代理：</strong></p><ul><li>研究与探索</li><li>代码审查</li><li>需要自定义系统提示的任务</li></ul><p><strong>不要用子代理：</strong></p><ul><li>并不带来真实能力增量的「专家」人设</li><li>每一步都依赖上一步的多步骤流水线</li><li>需要完整输出来做调试的测试运行</li></ul>"
      }
    ],
    "prevLesson": {
      "slug": "designing-effective-subagents",
      "title": "Designing effective subagents"
    },
    "nextLesson": {
      "slug": "complete",
      "title": "Course complete"
    }
  },
  "complete": {
    "lessonId": "complete",
    "lessonTitle": "课程完成",
    "lessonIndex": 4,
    "totalLessons": 5,
    "duration": "2 分钟",
          "outcomes": [
        "回顾子代理的核心机制、创建流程与设计模式"
,
        "明确子代理适用与不适用的边界"
,
        "确定把子代理带入自己日常工作流的下一步行动"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-are-subagents",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "creating-a-subagent",
        "title": "2. 创建子代理",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "designing-effective-subagents",
        "title": "3. 设计有效的子代理",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "using-subagents-effectively",
        "title": "4. 有效使用子代理",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "complete",
        "title": "5. 课程完成",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
        "sections": [
      {
        "id": "sec-0",
        "title": "课程完成",
        "contentHtml": "<p><strong>恭喜你完成《Subagents 子智能体入门》！</strong></p><p>你现在已经掌握了在 Claude Code 中用子代理拆分工作、保持主上下文整洁的完整方法。回顾一下这门课涵盖的内容：</p><ul><li><strong>子代理是什么</strong> —— 拥有独立上下文窗口的专职助手，独立完成工作后只把一份摘要回传主线程，中间步骤全部被隔离和丢弃。</li><li><strong>如何创建子代理</strong> —— 通过 <code>/agents</code> 命令选择作用范围、工具权限、模型与颜色，并读懂 <code>.claude/agents/</code> 下配置文件中 <code>name</code>、<code>description</code>、<code>tools</code>、<code>model</code>、<code>color</code> 各字段的含义。</li><li><strong>如何设计有效的子代理</strong> —— 用具体的 description 同时控制触发时机和输入提示；在系统提示中定义结构化输出格式创造停止点；加入「遇到的障碍」小节；并把工具权限收窄到真正必需的范围。</li><li><strong>如何有效使用子代理</strong> —— 用「中间过程是否重要」这一条法则做决策；把研究、代码审查和需要自定义系统提示的任务交出去；同时避开专家人设、串行流水线和测试运行器这三种反模式。</li></ul><h3>建议的下一步</h3><ol><li>在你当前的项目里用 <code>/agents</code> 创建一个<strong>代码审查子代理</strong>，只给它 <code>Bash</code>、<code>Glob</code>、<code>Grep</code>、<code>Read</code> 权限，并在系统提示里写好结构化输出格式。</li><li>做几处真实的代码改动，让它跑一次审查，看看回传的摘要是否可用；如果它没被自动触发，回去优化 <code>description</code>。</li><li>盘点一下你日常工作中那些「只要结果、不关心过程」的任务——它们都是适合改造成子代理的候选。</li><li>把有效的子代理配置提交进版本库，让整个团队共享同一套标准。</li></ol><p>子代理的价值会随着会话变长而不断放大。<strong>主上下文里的噪声越少，你就能工作得越久、越有效。</strong></p>"
      }
    ],
    "prevLesson": {
      "slug": "using-subagents-effectively",
      "title": "Using subagents effectively"
    }
  }
};
