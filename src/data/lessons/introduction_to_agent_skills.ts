import { LessonLayoutProps } from '../../components/LessonLayout';

export const INTRODUCTION_TO_AGENT_SKILLS_LESSONS: Record<string, Omit<LessonLayoutProps, 'courseId' | 'courseTitle'>> = {
  "what-are-skills": {
    "lessonId": "what-are-skills",
    "lessonTitle": "开始课程",
    "lessonIndex": 0,
    "totalLessons": 7,
    "duration": "9 分钟",
          "outcomes": [
        "定义什么是 Claude Code 技能以及它的工作原理"
,
        "说明技能存放的位置（个人目录 vs 项目目录）"
,
        "区分技能、CLAUDE.md 与斜杠命令"
,
        "识别适合使用技能的定制场景"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-are-skills",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "creating-your-first-skill",
        "title": "2. 创造你的第一个技能",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "configuration-and-multi-file-skills",
        "title": "3.配置与多文件技巧",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "skills-vs-other-claude-code-features",
        "title": "4. 自定义技能技能扩展对比其他Claude Code功能",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "sharing-skills",
        "title": "5. 分享技巧",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "troubleshooting-skills",
        "title": "6. 故障排除技巧",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "complete",
        "title": "7. 课程完成",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
        "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>每次你向 Claude 解释团队的编码规范，其实都在重复自己。每次做 PR 评审，你都要重新描述希望反馈如何组织；每次写提交信息，你都要提醒 Claude 你偏好的格式。技能（Skills）正是为解决这个问题而生的。</p><p>技能是一个 Markdown 文件，把「如何做某件事」教给 Claude 一次，之后每当相关任务出现，Claude 就会自动应用这份知识。</p>"
      },
      {
        "id": "sec-1",
        "title": "技能是什么",
        "contentHtml": "<h3>SKILL.md 与 frontmatter</h3><p>技能是 Claude Code 可以发现并使用、从而更准确地处理任务的指令与资源文件夹。每个技能对应一个 <code>SKILL.md</code> 文件，其 frontmatter 中包含名称（name）和描述（description）。</p><p>描述（description）是 Claude 判断是否使用该技能的依据。当你让 Claude 评审 PR 时，它会将你的请求与所有可用技能的描述进行比对，找到相关的那一个并激活它。</p><p>一个技能的 frontmatter 长这样：</p><pre><code>---\nname: pr-review\ndescription: Reviews pull requests for code quality. Use when reviewing PRs or checking code changes.\n---</code></pre><p>在 frontmatter 之下，你写下真正的指令——你的评审清单、格式偏好，或者完成该任务所需的一切信息。</p>"
      },
      {
        "id": "sec-2",
        "title": "技能存放在哪里",
        "contentHtml": "<p>根据使用对象的不同，技能可以存放在不同的位置：</p><ul><li><strong>个人技能</strong>放在 <code>~/.claude/skills</code>（你的主目录）。它们会跟随你出现在所有项目中——你的提交信息风格、文档格式、希望代码如何被解释等。</li><li><strong>项目技能</strong>放在仓库根目录下的 <code>.claude/skills</code>。任何克隆该仓库的人都会自动获得这些技能，适合承载团队标准，例如公司的品牌规范、网页设计偏好的字体与配色。</li></ul><p>在 Windows 上，个人技能位于 <code>C:/Users/&lt;your-user&gt;/.claude/skills</code>。</p><p>项目技能会随代码一起提交到版本控制中，因此整个团队都能共享。</p>"
      },
      {
        "id": "sec-3",
        "title": "技能 vs CLAUDE.md vs 斜杠命令",
        "contentHtml": "<p>Claude Code 有多种自定义行为的方式，而技能的特殊之处在于：它<strong>自动</strong>且<strong>针对具体任务</strong>。以下是它们之间的区别：</p><ul><li><strong>CLAUDE.md</strong> 会加载到每一段对话中。如果你想要求 Claude 始终使用 TypeScript 严格模式，应该写进 CLAUDE.md。</li><li><strong>技能</strong>在匹配到你的请求时才按需加载。Claude 最初只读取技能的名称和描述，不会占用太多上下文窗口。例如，你调试代码时不需要把 PR 评审清单放进上下文——它只在你真正发起评审请求时才加载。</li><li><strong>斜杠命令（Slash Commands）</strong>需要你显式输入才能调用；技能则不需要，Claude 识别到相关情境时会自动应用。</li></ul>"
      },
      {
        "id": "sec-4",
        "title": "何时使用技能",
        "contentHtml": "<p>技能最适合承载「适用于特定任务的专业知识」：</p><ul><li>团队遵循的代码评审标准</li><li>你偏好的提交信息格式</li><li>组织的品牌规范</li><li>特定类型文档的模板</li><li>特定框架的调试检查清单</li></ul><p>经验法则很简单：如果你发现自己反复向 Claude 解释同一件事，那这件事就值得写成技能。</p>"
      },
      {
        "id": "sec-5",
        "title": "课程反思与下一步",
        "contentHtml": "<h3>课程反思</h3><ul><li>回想你最近与 Claude Code 的交互：哪些指令你反复在重复？技能本可以为你节省多少时间？</li><li>考虑你团队的日常工作流：哪些标准或流程最适合固化为技能？</li></ul><h3>下一步</h3><p>在下一课中，你将从头创建自己的第一个技能，并了解 Claude Code 是如何在幕后发现、匹配和加载技能的。</p>"
      }
    ],
    "nextLesson": {
      "slug": "creating-your-first-skill",
      "title": "Creating your first skill"
    }
  },
  "creating-your-first-skill": {
    "lessonId": "creating-your-first-skill",
    "lessonTitle": "创建你的第一个技能",
    "lessonIndex": 1,
    "totalLessons": 7,
    "duration": "10 分钟",
          "outcomes": [
        "从零创建带正确 frontmatter 结构的技能"
,
        "测试并验证技能在 Claude Code 中正确加载"
,
        "说明 Claude Code 如何将请求匹配到可用技能"
,
        "描述技能优先级层级（企业、个人、项目、插件）"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-are-skills",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "creating-your-first-skill",
        "title": "2. 创造你的第一个技能",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "configuration-and-multi-file-skills",
        "title": "3.配置与多文件技巧",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "skills-vs-other-claude-code-features",
        "title": "4. 自定义技能技能扩展对比其他Claude Code功能",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "sharing-skills",
        "title": "5. 分享技巧",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "troubleshooting-skills",
        "title": "6. 故障排除技巧",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "complete",
        "title": "7. 课程完成",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
        "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>让我们从零开始创建一个技能，然后看看 Claude Code 是如何在幕后实际加载和匹配技能的。</p><p>我们将构建一个个人技能，教 Claude 以统一格式编写 PR 描述。由于是个人技能，它存放在你的主目录中，可跨所有项目使用。</p>"
      },
      {
        "id": "sec-1",
        "title": "创建技能",
        "contentHtml": "<p>首先，在技能文件夹内为你的技能创建目录。目录名应与技能名称一致：</p><pre><code>mkdir -p ~/.claude/skills/pr-description</code></pre><p>然后在该目录内创建 <code>SKILL.md</code> 文件。文件由 frontmatter 分隔线分为两部分：</p><pre><code>---\nname: pr-description\ndescription: Writes pull request descriptions. Use when creating a PR, writing a PR, or when the user asks to summarize changes for a pull request.\n---\nWhen writing a PR description:\n1. Run `git diff main...HEAD` to see all changes on this branch\n2. Write a description following this format:\n## What\nOne sentence explaining what this PR does.\n## Why\nBrief context on why this change is needed\n## Changes\n- Bullet points of specific changes made\n- Group related changes together\n- Mention any files deleted or renamed\n</code></pre><p><code>name</code> 标识你的技能；<code>description</code> 告诉 Claude 何时使用它——这是匹配的依据。第二组分隔线之后的所有内容，都是技能被激活时 Claude 要遵循的指令。</p>"
      },
      {
        "id": "sec-2",
        "title": "测试你的技能",
        "contentHtml": "<p>Claude Code 在启动时加载技能，因此创建之后请重启会话。你可以通过查看可用技能列表来确认它已被识别。</p><p>你应该能在列表中看到自己的技能。要测试它，先在分支上做几处修改，然后说类似「为我的修改写一条 PR 描述」的话。Claude 会表示正在使用 PR 描述技能、查看你的 diff，并按照你的模板写出描述——每次都保持同样的格式。</p>"
      },
      {
        "id": "sec-3",
        "title": "技能匹配的工作原理",
        "contentHtml": "<p>Claude Code 启动时，会扫描四个位置查找技能，但只加载技能的名称和描述——而不是完整内容。这是一个很重要的细节。</p><p>当你发送请求时，Claude 会将你的消息与所有可用技能的描述进行比对。例如，「解释这个函数是做什么的」会与描述为「用可视化图示解释代码」的技能匹配，因为两者的意图有重叠。</p><p>一旦找到匹配，Claude 会先请你确认是否加载该技能。这一确认步骤让你清楚 Claude 正在引入哪些上下文。确认后，Claude 才会读取完整的 <code>SKILL.md</code> 并遵循其中的指令。</p>"
      },
      {
        "id": "sec-4",
        "title": "技能优先级",
        "contentHtml": "<p>如果你克隆的仓库里有一个技能与你的个人技能同名，哪一个会生效？有一个明确的优先级顺序：</p><ul><li><strong>Enterprise（企业）</strong>——受管设置，优先级最高</li><li><strong>Personal（个人）</strong>——你的主目录（<code>~/.claude/skills</code>）</li><li><strong>Project（项目）</strong>——仓库内的 <code>.claude/skills</code> 目录</li><li><strong>Plugins（插件）</strong>——已安装的插件，优先级最低</li></ul><p>这使得组织可以通过企业技能强制统一标准，同时仍允许个人定制。如果公司有一个企业级「code-review」技能，而你创建了同名的个人「code-review」技能，企业版总是优先。</p><p>为避免冲突，请使用更具描述性的名称。与其用「review」，不如用「frontend-review」或「backend-review」这样的名字。</p>"
      },
      {
        "id": "sec-5",
        "title": "更新与删除技能",
        "contentHtml": "<p>要更新技能，编辑它的 <code>SKILL.md</code> 文件即可；要移除技能，删除它的目录。任何修改之后都需要重启 Claude Code 才会生效。</p>"
      },
      {
        "id": "sec-6",
        "title": "课程反思与下一步",
        "contentHtml": "<h3>课程反思</h3><ul><li>你日常工作流中，哪一项任务现在就可以改造成技能？描述应该怎么写？</li><li>优先级层级会如何影响你团队的技能管理策略？你会更依赖个人级还是项目级技能？</li></ul><h3>下一步</h3><p>下一课将学习高级配置选项，包括元数据字段、用 <code>allowed-tools</code> 限制工具，以及如何用渐进式披露和多文件结构组织更大的技能。</p>"
      }
    ],
    "prevLesson": {
      "slug": "what-are-skills",
      "title": "Start course"
    },
    "nextLesson": {
      "slug": "configuration-and-multi-file-skills",
      "title": "Configuration and multi-file skills"
    }
  },
  "configuration-and-multi-file-skills": {
    "lessonId": "configuration-and-multi-file-skills",
    "lessonTitle": "配置和多文件技能",
    "lessonIndex": 2,
    "totalLessons": 7,
    "duration": "10 分钟",
          "outcomes": [
        "配置高级技能元数据字段（allowed-tools、model）"
,
        "编写能可靠触发正确请求的有效技能描述"
,
        "使用 allowed-tools 限制技能激活时 Claude 能做的事"
,
        "用渐进式披露与多文件结构组织复杂技能"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-are-skills",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "creating-your-first-skill",
        "title": "2. 创造你的第一个技能",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "configuration-and-multi-file-skills",
        "title": "3.配置与多文件技巧",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "skills-vs-other-claude-code-features",
        "title": "4. 自定义技能技能扩展对比其他Claude Code功能",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "sharing-skills",
        "title": "5. 分享技巧",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "troubleshooting-skills",
        "title": "6. 故障排除技巧",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "complete",
        "title": "7. 课程完成",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
        "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>一个基础技能只需要名称和描述就能工作，但还有几项高级技巧可以让技能在 Claude Code 中强大得多。让我们逐一了解关键字段、描述的最佳实践、工具限制，以及如何组织更大的技能。</p>"
      },
      {
        "id": "sec-1",
        "title": "技能元数据字段",
        "contentHtml": "<p>Agent Skills 开放标准支持在 <code>SKILL.md</code> 的 frontmatter 中配置多个字段，其中两个必填，其余可选：</p><ul><li><strong>name（必填）</strong>——标识你的技能。只允许小写字母、数字和连字符，最长 64 个字符，应与目录名一致。</li><li><strong>description（必填）</strong>——告诉 Claude 何时使用该技能，最长 1,024 个字符。这是最重要的字段，因为 Claude 用它进行匹配。</li><li><strong>allowed-tools（可选）</strong>——限制技能激活时 Claude 可以使用的工具。</li><li><strong>model（可选）</strong>——指定该技能使用的 Claude 模型。</li></ul>"
      },
      {
        "id": "sec-2",
        "title": "编写有效的描述",
        "contentHtml": "<p>指令要写得明确。如果有人只告诉你「你的工作是帮忙做文档」，你也不知道该做什么——Claude 的想法也一样。</p><p>一个好的描述回答两个问题：</p><ul><li>这个技能做什么？</li><li>Claude 应该在什么时候使用它？</li></ul><p>如果你的技能没有在你预期时触发，试着加入更多与你实际措辞匹配的关键词。描述是 Claude 判断技能是否相关的依据，所以措辞很重要。</p>"
      },
      {
        "id": "sec-3",
        "title": "用 allowed-tools 限制工具",
        "contentHtml": "<p>有时你希望一个技能只能读取文件、不能修改文件。这对于安全敏感的工作流、只读任务，或任何需要护栏的场景都很有用。</p><p>在下面的示例中，<code>allowed-tools</code> 被设置为 <code>Read, Grep, Glob, Bash</code>。技能激活期间，Claude 只能使用这些工具而无需额外询问权限——不能编辑、不能写入。</p><pre><code>---\nname: codebase-onboarding\ndescription: Helps new developers understand the system works.\nallowed-tools: Read, Grep, Glob, Bash\nmodel: sonnet\n---</code></pre><p>如果完全省略 <code>allowed-tools</code>，技能不会限制任何工具，Claude 使用其正常的权限模型。</p>"
      },
      {
        "id": "sec-4",
        "title": "渐进式披露",
        "contentHtml": "<p>技能与你的对话共享 Claude 的上下文窗口。当技能被激活时，Claude 会把该 <code>SKILL.md</code> 的内容加载进上下文。但有时技能还依赖参考资料、示例或实用脚本。</p><p>把一切都塞进一个 2,000 行的文件有两个问题：占用大量上下文空间，而且维护起来很痛苦。</p><p>渐进式披露（Progressive Disclosure）解决了这个问题：把核心指令留在 <code>SKILL.md</code> 中，把详细的参考资料放进单独的文件，让 Claude 只在需要时读取。</p><p>开放标准建议按如下结构组织技能目录：</p><ul><li><code>scripts/</code>——可执行代码</li><li><code>references/</code>——补充文档</li><li><code>assets/</code>——图片、模板或其他数据文件</li></ul><p>然后在 <code>SKILL.md</code> 中链接这些支撑文件，并明确说明何时加载它们。例如，只有当有人询问系统设计时，Claude 才读取 <code>architecture-guide.md</code>；如果对方只问组件加在哪里，该文件永远不会被加载。这就像在上下文窗口里放了一份目录，而不是整本书。</p><p>一个实用的经验法则：保持 <code>SKILL.md</code> 少于 500 行。如果超过了，就考虑把内容拆到独立的参考文件中。</p>"
      },
      {
        "id": "sec-5",
        "title": "高效使用脚本",
        "contentHtml": "<p>技能目录中的脚本可以在不加载内容进上下文的情况下运行——脚本直接执行，只有输出消耗 token。关键做法是在 <code>SKILL.md</code> 中明确指示 Claude「运行脚本」而不是「读取脚本」。</p><p>这在以下场景尤其有用：</p><ul><li>环境校验</li><li>需要保持一致性的数据转换</li><li>用经过测试的代码执行比生成代码更可靠的操作</li></ul>"
      },
      {
        "id": "sec-6",
        "title": "课程反思与下一步",
        "contentHtml": "<h3>课程反思</h3><ul><li>想一个你打算构建的、涉及多个文件的技能：你会如何划分 <code>SKILL.md</code> 与支撑参考文件？</li><li>你团队中是否有需要借助 <code>allowed-tools</code> 限制工具访问、从而增加安全层级的工作流？</li></ul><h3>下一步</h3><p>下一课将把技能与定制 Claude Code 的其他方式——CLAUDE.md、子代理、hooks 和 MCP 服务器——进行对比，帮助你针对每种情境选择正确的工具。</p>"
      }
    ],
    "prevLesson": {
      "slug": "creating-your-first-skill",
      "title": "Creating your first skill"
    },
    "nextLesson": {
      "slug": "skills-vs-other-claude-code-features",
      "title": "自定义 Skills 技能扩展 vs. other Claude Code features"
    }
  },
  "skills-vs-other-claude-code-features": {
    "lessonId": "skills-vs-other-claude-code-features",
    "lessonTitle": "自定义技能技能扩展与其他Claude代码功能",
    "lessonIndex": 3,
    "totalLessons": 7,
    "duration": "6 分钟",
          "outcomes": [
        "对比技能与 CLAUDE.md、子代理、hooks 和 MCP 服务器"
,
        "针对具体用例选择正确的 Claude Code 定制功能"
,
        "设计组合多种功能的有效互补方案"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-are-skills",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "creating-your-first-skill",
        "title": "2. 创造你的第一个技能",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "configuration-and-multi-file-skills",
        "title": "3.配置与多文件技巧",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "skills-vs-other-claude-code-features",
        "title": "4. 自定义技能技能扩展对比其他Claude Code功能",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "sharing-skills",
        "title": "5. 分享技巧",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "troubleshooting-skills",
        "title": "6. 故障排除技巧",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "complete",
        "title": "7. 课程完成",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
        "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>Claude Code 提供多种定制选项：技能、CLAUDE.md、子代理、hooks 和 MCP 服务器。它们解决不同的问题，了解各自适用场景能避免你构建错误的东西。下面逐一拆解。</p>"
      },
      {
        "id": "sec-1",
        "title": "CLAUDE.md vs 技能",
        "contentHtml": "<p><strong>CLAUDE.md</strong> 始终加载到每一段对话中。如果你希望项目使用 TypeScript 严格模式，把它写进 CLAUDE.md 即可。</p><p><strong>技能</strong>按需加载。当 Claude 将请求匹配到某个技能时，该技能的指令才会进入对话。你写新代码时不需要 PR 评审清单常驻上下文——它在你发起评审请求时才激活。</p><p><strong>CLAUDE.md 适用于：</strong></p><ul><li>始终适用的项目级标准</li><li>类似「永远不要修改数据库 schema」的约束</li><li>框架偏好与代码风格</li></ul><p><strong>技能适用于：</strong></p><ul><li>任务专属的专业知识</li><li>只在某些时候相关的知识</li><li>会污染每一段对话的详细流程</li></ul>"
      },
      {
        "id": "sec-2",
        "title": "技能 vs 子代理",
        "contentHtml": "<p><strong>技能</strong>为当前对话增加知识。技能激活时，其指令会加入现有上下文。</p><p><strong>子代理</strong>在独立的上下文中运行。它们接收任务、独立完成、返回结果，与主对话隔离。</p><p><strong>子代理适用于：</strong></p><ul><li>你想把任务委派到独立的执行上下文</li><li>你需要与主对话不同的工具访问权限</li><li>你希望在委派工作与主上下文之间保持隔离</li></ul><p><strong>技能适用于：</strong></p><ul><li>你想增强 Claude 处理当前任务的知识</li><li>这些专业知识贯穿整段对话</li></ul>"
      },
      {
        "id": "sec-3",
        "title": "技能 vs Hooks",
        "contentHtml": "<p><strong>Hooks</strong>由事件触发。某个 hook 可能在 Claude 每次保存文件时运行 linter，或在某些工具调用前校验输入。它们是事件驱动的。</p><p><strong>技能</strong>是请求驱动的——它们根据你正在问什么而激活。</p><p><strong>Hooks 适用于：</strong></p><ul><li>每次保存文件都应执行的操作</li><li>特定工具调用前的校验</li><li>Claude 行为的自动化副作用</li></ul><p><strong>技能适用于：</strong></p><ul><li>影响 Claude 如何处理请求的知识</li><li>影响 Claude 推理方式的准则</li></ul>"
      },
      {
        "id": "sec-4",
        "title": "综合运用",
        "contentHtml": "<p>一个典型的配置可能同时包含：</p><ul><li><strong>CLAUDE.md</strong>——始终生效的项目标准</li><li><strong>技能</strong>——按需加载的任务专属知识</li><li><strong>Hooks</strong>——由事件触发的自动化操作</li><li><strong>子代理</strong>——用于委派工作的隔离执行上下文</li><li><strong>MCP 服务器</strong>——外部工具与集成</li></ul><p>每个组件各司其职。当其他选项更合适时，不要强行把所有事情都塞进技能——而且它们可以同时使用。技能提供自动的任务专属知识，CLAUDE.md 用于始终生效的指令，子代理在隔离上下文中运行，hooks 由事件触发，MCP 提供外部工具。</p><p>当你拥有希望在话题相关时由 Claude 自动应用的知识时使用技能，并将其与其他功能组合，实现全面的定制。</p>"
      },
      {
        "id": "sec-5",
        "title": "课程反思与下一步",
        "contentHtml": "<h3>课程反思</h3><ul><li>看看你当前的 CLAUDE.md：里面有什么内容更适合做成只在相关时加载的技能？</li><li>想想你团队的开发工作流：哪种 Claude Code 功能组合（技能、hooks、子代理、MCP）最能解决你们最常见的痛点？</li></ul><h3>下一步</h3><p>下一课将学习如何与团队和组织分享技能——从提交到仓库，到通过插件分发，再到通过受管设置进行企业级部署。</p>"
      }
    ],
    "prevLesson": {
      "slug": "configuration-and-multi-file-skills",
      "title": "Configuration and multi-file skills"
    },
    "nextLesson": {
      "slug": "sharing-skills",
      "title": "Sharing skills"
    }
  },
  "sharing-skills": {
    "lessonId": "sharing-skills",
    "lessonTitle": "分享技巧",
    "lessonIndex": 4,
    "totalLessons": 7,
    "duration": "15 分钟",
          "outcomes": [
        "通过将技能提交到 Git 仓库与团队分享"
,
        "通过插件和市场跨项目分发技能"
,
        "使用企业受管设置进行组织级部署"
,
        "配置自定义子代理以使用特定技能"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-are-skills",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "creating-your-first-skill",
        "title": "2. 创造你的第一个技能",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "configuration-and-multi-file-skills",
        "title": "3.配置与多文件技巧",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "skills-vs-other-claude-code-features",
        "title": "4. 自定义技能技能扩展对比其他Claude Code功能",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "sharing-skills",
        "title": "5. 分享技巧",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "troubleshooting-skills",
        "title": "6. 故障排除技巧",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "complete",
        "title": "7. 课程完成",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
        "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>技能在团队中共享后会变得更有价值。只有你自己使用的 PR 评审技能固然有用，但同样的技能在整个团队中共享，会让代码评审标准化，并在整个组织内创造一致的体验。让我们看看分发技能的几种方式。</p>"
      },
      {
        "id": "sec-1",
        "title": "将技能提交到仓库",
        "contentHtml": "<p>最简单的分享方式，是直接把技能提交到你的仓库。把它们放在 <code>.claude/skills</code> 目录中，任何克隆该仓库的人都会自动获得这些技能——无需额外安装。</p><p>当你推送更新后，其他人下次 pull 就能收到。这种方式适合：</p><ul><li>团队编码标准</li><li>项目专属的工作流</li><li>引用了你代码库结构的技能</li></ul><p><code>.claude</code> 目录包含你的 agents、hooks、skills 和 settings——全部纳入版本控制，并通过常规 Git 工作流与团队共享。</p>"
      },
      {
        "id": "sec-2",
        "title": "通过插件分发技能",
        "contentHtml": "<p>插件（Plugins）是一种用可共享的自定义功能扩展 Claude Code 的方式。在你的插件项目中，创建一个 <code>skills</code> 目录，其文件结构与 <code>.claude</code> 目录类似——每个技能拥有自己的文件夹，内含一个 <code>SKILL.md</code> 文件。</p><p>将插件分发到市场（marketplace）后，其他用户就能自行发现并把它安装到自己的 Claude Code 中。</p><p>这种方式最适合那些不限于项目专属、对团队之外的社区成员也有用的技能。</p>"
      },
      {
        "id": "sec-3",
        "title": "通过托管设置进行企业部署",
        "contentHtml": "<p>管理员可以通过受管设置（managed settings）在整个组织内部署技能。企业技能拥有最高优先级——它们会覆盖同名的个人、项目和插件技能。</p><p>受管设置文件支持诸如 <code>strictKnownMarketplaces</code> 之类的特性，用于控制插件的安装来源：</p><pre><code>\"strictKnownMarketplaces\": [\n  {\n    \"source\": \"github\",\n    \"repo\": \"acme-corp/approved-plugins\"\n  },\n  {\n    \"source\": \"npm\",\n    \"package\": \"@acme-corp/compliance-plugins\"\n  }\n]</code></pre><p>这是强制标准、安全要求、合规工作流以及必须在整个组织内保持一致编码实践时的正确选择。关键就在于「必须」二字。</p>"
      },
      {
        "id": "sec-4",
        "title": "技能与子代理",
        "contentHtml": "<p>这里有个让人意外的地方：子代理并不会自动看到你的技能。当你把任务委派给子代理时，它以全新、干净的上下文启动。</p><p>有几个重要区别需要理解：</p><ul><li>内置代理（如 Explorer、Plan 和 Verify）完全无法访问技能</li><li>你定义的自定义子代理可以使用技能，但必须显式列出它们</li><li>技能在子代理启动时加载，而不像主对话那样按需加载</li></ul><p>要创建带技能的自定义子代理，在 <code>.claude/agents</code> 中添加一个 agent markdown 文件。你也可以在 Claude Code 中使用 <code>/agents</code> 命令交互式创建。生成的 agent 文件包含一个 <code>skills</code> 字段，用于列出要加载的技能。其 frontmatter 如下：</p><pre><code>---\nname: frontend-security-accessibility-reviewer\ndescription: \"Use this agent when you need to review frontend code for accessibility...\"\ntools: Bash, Glob, Grep, Read, WebFetch, WebSearch, Skill...\nmodel: sonnet\ncolor: blue\nskills: accessibility-audit, performance-check\n---</code></pre><p>当你把任务委派给这个子代理时，它会同时加载这两个技能，并在每次评审中应用。首先确保这些技能存在于你的 <code>.claude/skills</code> 目录中，然后新建子代理或在现有 agent 的 markdown 文件中添加 <code>skills</code> 字段。</p><p>这种模式非常适合：</p><ul><li>你想用特定专业知识进行隔离的任务委派</li><li>不同子代理需要不同技能（如前端评审 vs 后端评审）</li><li>你希望在委派工作中强制执行标准，而不依赖提示词</li></ul>"
      },
      {
        "id": "sec-5",
        "title": "课程反思与下一步",
        "contentHtml": "<h3>课程反思</h3><ul><li>对于你一直想构建的技能，哪种分享方式（仓库、插件、企业）最有意义？</li><li>你是否有可以通过带特定技能的自定义子代理来提高委派工作一致性的工作流？</li></ul><h3>下一步</h3><p>在最后一课中，你将学习如何排查常见的技能问题——从技能不触发、优先级冲突，到运行时错误——并附上一份随时可参考的实用检查清单。</p>"
      }
    ],
    "prevLesson": {
      "slug": "skills-vs-other-claude-code-features",
      "title": "自定义 Skills 技能扩展 vs. other Claude Code features"
    },
    "nextLesson": {
      "slug": "troubleshooting-skills",
      "title": "Troubleshooting skills"
    }
  },
  "troubleshooting-skills": {
    "lessonId": "troubleshooting-skills",
    "lessonTitle": "故障排除技巧",
    "lessonIndex": 5,
    "totalLessons": 7,
    "duration": "8 分钟",
          "outcomes": [
        "使用技能校验器在调试前发现结构性问题"
,
        "诊断并修复常见的技能触发与加载问题"
,
        "解决企业、个人、项目、插件技能之间的优先级冲突"
,
        "调试运行时错误，包括依赖缺失、权限与路径问题"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-are-skills",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "creating-your-first-skill",
        "title": "2. 创造你的第一个技能",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "configuration-and-multi-file-skills",
        "title": "3.配置与多文件技巧",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "skills-vs-other-claude-code-features",
        "title": "4. 自定义技能技能扩展对比其他Claude Code功能",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "sharing-skills",
        "title": "5. 分享技巧",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "troubleshooting-skills",
        "title": "6. 故障排除技巧",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "complete",
        "title": "7. 课程完成",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
        "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>当技能不如预期工作时，问题通常可以归入几类：技能不触发、不加载、发生冲突，或在运行时失败。好消息是，大多数修复都很直接。</p>"
      },
      {
        "id": "sec-1",
        "title": "使用技能校验器",
        "contentHtml": "<p>首先要尝试的是 agent skills verifier（技能校验器）命令。安装步骤因操作系统而异，但使用 <code>uv</code> 是最快的配置方式。</p><p>安装后，进入你的技能目录，或在任意位置运行该命令。校验器会在你花时间排查其他问题之前，先捕捉结构性错误。</p>"
      },
      {
        "id": "sec-2",
        "title": "技能不触发",
        "contentHtml": "<p>技能存在且通过校验，但 Claude 并未在你预期时使用它。原因几乎总是出在描述上。</p><p>Claude 使用语义匹配，所以你的请求需要与描述的含义有重叠。重叠不足就不会匹配。以下是应对方法：</p><ul><li>对照你实际的请求措辞检查描述</li><li>加入用户真正会说的触发短语</li><li>用不同说法测试，例如「帮我分析一下这个」、「为什么这么慢？」、「让它更快」</li><li>如果某个说法无法触发，把这些关键词加进描述</li></ul>"
      },
      {
        "id": "sec-3",
        "title": "技能不加载",
        "contentHtml": "<p>如果你的技能在询问 Claude「有哪些可用技能」时没有出现，请检查这些结构性要求：</p><ul><li><code>SKILL.md</code> 文件必须位于一个有名字的目录内，而不是技能根目录下</li><li>文件名必须严格是 <code>SKILL.md</code>——「SKILL」全大写、「md」小写</li></ul><p>运行 <code>claude --debug</code> 查看加载错误，留意提到你技能名的消息。有时这单独一步就能直接指向问题所在。</p>"
      },
      {
        "id": "sec-4",
        "title": "使用了错误的技能或优先级冲突",
        "contentHtml": "<p>如果 Claude 使用了错误的技能，或在多个技能之间混淆，你的描述可能过于相似。请让它们更独特。描述越具体，不仅有助于 Claude 决定何时使用你的技能，还能避免与其他相似名称的技能冲突。</p><p>如果你的个人技能被忽略，可能是同名但优先级更高的企业技能存在。例如，如果有企业级「code-review」技能，而你也有个人「code-review」技能，企业版每次都生效。你的选择：</p><ul><li>把技能改名为更具区分度的名字（通常是更简单的路径）</li><li>与管理员沟通企业技能事宜</li></ul>"
      },
      {
        "id": "sec-5",
        "title": "插件技能不显示与运行时错误",
        "contentHtml": "<h3>插件技能不显示</h3><p>安装了插件却看不到它的技能？清除缓存、重启 Claude Code，然后重新安装。</p><p>如果之后技能仍不显示，可能是插件结构有问题。此时正是校验器大显身手的时候。</p><h3>运行时错误</h3><p>技能能加载但在执行时失败。常见原因包括：</p><ul><li><strong>依赖缺失</strong>：如果技能使用外部包，必须先安装。把依赖信息写进技能描述，让 Claude 知道需要什么。</li><li><strong>权限问题</strong>：脚本需要执行权限。对技能引用的任何脚本运行 <code>chmod +x</code>。</li><li><strong>路径分隔符</strong>：全程使用正斜杠，即使在 Windows 上也是如此。</li></ul>"
      },
      {
        "id": "sec-6",
        "title": "快速排障清单与课程总结",
        "contentHtml": "<h3>快速排障清单</h3><ul><li>不触发？改进描述并添加触发短语。</li><li>不加载？检查路径、文件名和 YAML 语法。</li><li>用错技能？让描述之间更互不相同。</li><li>被覆盖？检查优先级层级，必要时改名。</li><li>插件技能缺失？清除缓存并重新安装。</li><li>运行时失败？检查依赖、权限和路径。</li></ul><h3>课程总结</h3><p>恭喜你完成「Agent Skills 智能体技能入门」！你已经学会了在 Claude Code 中创建、配置、分享和排查技能。当你开始为自己的工作流构建技能时，请记住：最好的技能源于真实的痛点——从你最常重复的指令开始。</p>"
      }
    ],
    "prevLesson": {
      "slug": "sharing-skills",
      "title": "Sharing skills"
    },
    "nextLesson": {
      "slug": "complete",
      "title": "Course complete"
    }
  },
  "complete": {
    "lessonId": "complete",
    "lessonTitle": "课程完成",
    "lessonIndex": 6,
    "totalLessons": 7,
    "duration": "2 分钟",
          "outcomes": [
        "掌握技能创建、配置、分享与排障全流程"
,
        "能够独立构建并验证自己的技能"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-are-skills",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "creating-your-first-skill",
        "title": "2. 创造你的第一个技能",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "configuration-and-multi-file-skills",
        "title": "3.配置与多文件技巧",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "skills-vs-other-claude-code-features",
        "title": "4. 自定义技能技能扩展对比其他Claude Code功能",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "sharing-skills",
        "title": "5. 分享技巧",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "troubleshooting-skills",
        "title": "6. 故障排除技巧",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "complete",
        "title": "7. 课程完成",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
        "sections": [
      {
        "id": "sec-0",
        "title": "课程完成",
        "contentHtml": "<p>恭喜你完成了「Agent Skills 智能体技能入门」课程！</p><p>在这门课中，你学会了：</p><ul><li>技能是什么、存放在哪里，以及如何与 CLAUDE.md、斜杠命令等定制方式配合</li><li>如何从零创建你的第一个技能，并理解匹配与优先级机制</li><li>如何通过元数据字段、allowed-tools 与渐进式披露构建更强大的技能</li><li>如何通过仓库、插件和企业设置分享技能，并让子代理使用技能</li><li>如何系统排查技能不触发、不加载、冲突与运行时错误</li></ul><p>接下来建议：</p><ul><li>从你日常最常重复的指令开始，创建第一个属于你的技能</li><li>使用技能校验器在分享前验证技能结构</li><li>把团队标准固化为项目技能，通过仓库共享</li></ul><p>最好的技能来自真实痛点——祝你在 Claude Code 中构建出得心应手的智能技能！</p>"
      }
    ],
    "prevLesson": {
      "slug": "troubleshooting-skills",
      "title": "Troubleshooting skills"
    }
  }
};
