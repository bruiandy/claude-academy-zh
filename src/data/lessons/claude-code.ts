import { LessonLayoutProps } from '../../components/LessonLayout';

export const CLAUDE_CODE_LESSONS: Record<string, Omit<LessonLayoutProps, 'courseId' | 'courseTitle'>> = {
  "what-is-claude-code": {
    "lessonId": "what-is-claude-code",
    "lessonTitle": "Claude Code是什么？最初智能体定位",
    "lessonIndex": 0,
    "totalLessons": 13,
    "duration": "8 分钟",
    "outcomes": [
      "\n学院",
      "/\n课程",
      "/\nClaude Code 101",
      "Claude Code是什么？最初智能体定位",
      "Claude Code工作原理解析",
      "安装与认证配置指南",
      "发送你的第一个智能体编程指令",
      "探索→计划→代码→提交工作流程",
      "上下文与 Token 预算控制",
      "代码审查与自动化质量审计",
      "CLAUDE.md 项目规范文件深度实战",
      "Subagents 子智能体",
      "Skills 自定义技能",
      "连接模型上下文协议（MCP）",
      "Hooks 自动化钩子机制 ",
      "课程结业测验\n\n测验",
      "完成徽章"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-is-claude-code",
        "title": "1. Claude Code 是什么？ 最初智能体定位",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "how-claude-code-works",
        "title": "2.Claude Code工作原理解析",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "installing-claude-code",
        "title": "3. 安装与认证配置指南",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "your-first-prompt",
        "title": "4. 发送你的第一个智能体编程指令",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "the-explore-plan-code-commit-workflow",
        "title": "5. 探索→计划→代码→提交工作流程",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "context-management",
        "title": "6. 上下文与 Token 预算控制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "code-review",
        "title": "7. 代码审查与自动化质量审计",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "the-claude-md-file",
        "title": "8. CLAUDE.md 项目规范文件深度实战",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "subagents",
        "title": "9. Subagents 子智能体",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "skills",
        "title": "10. Skills 自定义技能",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "mcp",
        "title": "11.MCP（模型上下文协议）协议",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "hooks",
        "title": "12. Hooks 自动化钩子机制 ",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "course-quiz",
        "title": "13. 课程结业测验",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p class=\"text-body font-medium\">Claude Code是什么？最初智能体定位</p>\n<p class=\"text-base leading-relaxed text-secondary\">Claude Code是一种代理编码工具，可以理解您的代码库、编辑\n您的文件、运行命令以及与现有的开发人员工具集成\n帮助您更快地完成工作。它可以在您的终端中使用，可视化\nStudio Code、Claude Desktop 桌面应用、网络上和 JetBrains IDE 中。</p>"
      },
      {
        "id": "sec-1",
        "title": "Claude Code与Claude有何不同？",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">如果您以前使用过 Claude.ai，您可能想 Claude Code 有何不同。与 Claude.ai 不同，Claude Code 可以直接访问您的文件、终端和整个代码库。它不是来回复制粘贴和代码，而是自己完成工作。</p>\n<p class=\"text-base leading-relaxed text-secondary\">Claude Code 的关键区别在于作为人工智能代理</strong>.</p>"
      },
      {
        "id": "sec-2",
        "title": "什么是代理？",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">AI 代理是可以与其环境交互并执行操作以完成既定目标的软件。从本质上讲，其工作原理是让大型语言模型实时循环运行。 AI 代理可以访问工具、外部服务，甚至其他 AI 代理来帮助实现其目标。</p>"
      },
      {
        "id": "sec-3",
        "title": "Claude Code实际上能做什么？",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">实际情况如下：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">阅读并理解您的代码库。您可以要求 Claude Code 解释某个功能或跟踪整个代码中的错误。</li>\n<li class=\"text-base leading-relaxed text-secondary\">编辑项目中的文件。 Claude Code 可以重构一个函数并更新引用它的每个文件。</li>\n<li class=\"text-base leading-relaxed text-secondary\">它可以执行您的构建脚本，运行您的测试，安装软件包，并使用输出来决定下一步做什么。</li>\n<li class=\"text-base leading-relaxed text-secondary\">搜索网络。如果需要文档或最新的 API 参考，它可以为您查找。</li>\n</ul>"
      },
      {
        "id": "sec-4",
        "title": "有效使用Claude Code",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">要有效地使用Claude Code，请记住以下三个概念：</p>\n<p class=\"text-base leading-relaxed text-secondary\">上下窗口。 将此视为Claude的工作记忆。它可以容纳很多东西，但不能同时容纳所有东西。这就是“代理”方面的用武之地——Claude找到了在代码库中找到答案的战略方法，而无需将整个事物加载到上下文中。</p>\n<p class=\"text-base leading-relaxed text-secondary\">它请求许可。默认情况下，Claude Code 会在运行命令或进行更改之前询问您。无论您喜欢亲自动手还是不干涉，一切尽在您的掌控之中。</p>\n<p class=\"text-base leading-relaxed text-secondary\">它可能会犯错误。 就像任何工具一样，Claude Code 并不完美。它可能会误解您的意图、引入错误或过度设计解决方案。随时了解情况可以帮助您尽早发现这些情况。</p>"
      },
      {
        "id": "sec-5",
        "title": "回顾",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">Claude Code 是一种代理编码工具。它读取您的代码库、编辑文件、运行命令并连接到外部工具，以帮助您更快地交付。您现在可以在终端、VS Code、JetBrains 和 Claude Desktop 应用程序中使用它。</p>"
      }
    ],
    "nextLesson": {
      "slug": "how-claude-code-works",
      "title": "Claude Code 工作原理解析"
    }
  },
  "how-claude-code-works": {
    "lessonId": "how-claude-code-works",
    "lessonTitle": "Claude Code工作原理解析",
    "lessonIndex": 1,
    "totalLessons": 13,
    "duration": "8 分钟",
    "outcomes": [
      "\n学院",
      "/\n课程",
      "/\nClaude Code 101",
      "Claude Code是什么？最初智能体定位",
      "Claude Code工作原理解析",
      "安装与认证配置指南",
      "发送你的第一个智能体编程指令",
      "探索→计划→代码→提交工作流程",
      "上下文与 Token 预算控制",
      "代码审查与自动化质量审计",
      "CLAUDE.md 项目规范文件深度实战",
      "Subagents 子智能体",
      "Skills 自定义技能",
      "连接模型上下文协议（MCP）",
      "Hooks 自动化钩子机制 ",
      "课程结业测验\n\n测验",
      "完成徽章"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-is-claude-code",
        "title": "1. Claude Code 是什么？ 最初智能体定位",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "how-claude-code-works",
        "title": "2.Claude Code工作原理解析",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "installing-claude-code",
        "title": "3. 安装与认证配置指南",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "your-first-prompt",
        "title": "4. 发送你的第一个智能体编程指令",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "the-explore-plan-code-commit-workflow",
        "title": "5. 探索→计划→代码→提交工作流程",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "context-management",
        "title": "6. 上下文与 Token 预算控制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "code-review",
        "title": "7. 代码审查与自动化质量审计",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "the-claude-md-file",
        "title": "8. CLAUDE.md 项目规范文件深度实战",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "subagents",
        "title": "9. Subagents 子智能体",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "skills",
        "title": "10. Skills 自定义技能",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "mcp",
        "title": "11.MCP（模型上下文协议）协议",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "hooks",
        "title": "12. Hooks 自动化钩子机制 ",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "course-quiz",
        "title": "13. 课程结业测验",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p class=\"text-body font-medium\">Claude Code工作原理解析</p>\n<p class=\"text-base leading-relaxed text-secondary\">Claude Code 与典型的聊天应用程序不同。了解如何\n它在幕后工作将帮助您更有效地使用它。</p>"
      },
      {
        "id": "sec-1",
        "title": "代理循环",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">Claude Code最好通过代理循环来解释</strong>:</p>\n<p class=\"text-base leading-relaxed text-secondary\">在整个循环中，您可以添加上下文、中断或引导模型，以帮助引导它实现您的目标。</p>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/141ad1329bacde1d351f9078f8b1aeafecea0340c110721031060f1b11ec46a1.jpg\" alt=\"Diagram of the agentic loop: Your prompt flows into the loop of Gather context, Take action, and Verify results, with the ability to interrupt, steer, or add context at any point\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>"
      },
      {
        "id": "sec-2",
        "title": "语境",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">Claude有一个上下文窗口，它决定了它可以存储和引用多少对话、文件内容、命令输出等。一旦达到该限制，Claude Code 就会压缩您的对话 - 自动确定可以删除或总结哪些内容，从而将上下文窗口恢复到可用大小。</p>"
      },
      {
        "id": "sec-3",
        "title": "工具",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">工具是代理工作的支持者。大多数人工智能助手只需简单地输入文本并返回文本。工具让Claude Code确定何时执行代码以更接近完成任务。这可以是文件读取工具、网络搜索工具或任意数量的其他功能。 Claude Code 使用语义理解来确定何时调用工具以及如何使用输出。</p>"
      },
      {
        "id": "sec-4",
        "title": "权限",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">Claude Code 有几种权限模式：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">手动（默认）：Claude 在编辑文件或运行 shell 命令之前会请求明确的许可。</li>\n<li class=\"text-base leading-relaxed text-secondary\">自动接受：文件无需询问即可编辑，但命令仍需要批准。</li>\n<li class=\"text-base leading-relaxed text-secondary\">计划模式： 在开始任何工作之前使用只读工具编制行动计划。</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/8d2d1170d15c7ba9eed77d9ec83eec23486de420931ab4901a67b771f9cbb4b7.jpg\" alt=\"Claude Code asking for permission before running a bash command\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>\n<p class=\"text-base leading-relaxed text-secondary\">所有这些都可以在您的设置文件中配置。跳过权限时要小心——让 Claude Code 自由地运行命令意味着错误可能更难在发生之前发现。</p>"
      },
      {
        "id": "sec-5",
        "title": "回顾",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">Claude Code结合了代理概念：代理循环、托管多个上下文窗口、工具和可配置权限 - 全部都在您的终端内。它可以读取您的代码库、采取行动并验证自己的工作。这就是它与聊天窗口根本不同的原因。</p>"
      }
    ],
    "prevLesson": {
      "slug": "what-is-claude-code",
      "title": "什么是 Claude Code？终端原生智能体定位"
    },
    "nextLesson": {
      "slug": "installing-claude-code",
      "title": "安装与认证配置指南"
    }
  },
  "installing-claude-code": {
    "lessonId": "installing-claude-code",
    "lessonTitle": "安装与认证配置指南",
    "lessonIndex": 2,
    "totalLessons": 13,
    "duration": "8 分钟",
    "outcomes": [
      "\n学院",
      "/\n课程",
      "/\nClaude Code 101",
      "Claude Code是什么？最初智能体定位",
      "Claude Code工作原理解析",
      "安装与认证配置指南",
      "发送你的第一个智能体编程指令",
      "探索→计划→代码→提交工作流程",
      "上下文与 Token 预算控制",
      "代码审查与自动化质量审计",
      "CLAUDE.md 项目规范文件深度实战",
      "Subagents 子智能体",
      "Skills 自定义技能",
      "连接模型上下文协议（MCP）",
      "Hooks 自动化钩子机制 ",
      "课程结业测验\n\n测验",
      "完成徽章"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-is-claude-code",
        "title": "1. Claude Code 是什么？ 最初智能体定位",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "how-claude-code-works",
        "title": "2.Claude Code工作原理解析",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "installing-claude-code",
        "title": "3. 安装与认证配置指南",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "your-first-prompt",
        "title": "4. 发送你的第一个智能体编程指令",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "the-explore-plan-code-commit-workflow",
        "title": "5. 探索→计划→代码→提交工作流程",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "context-management",
        "title": "6. 上下文与 Token 预算控制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "code-review",
        "title": "7. 代码审查与自动化质量审计",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "the-claude-md-file",
        "title": "8. CLAUDE.md 项目规范文件深度实战",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "subagents",
        "title": "9. Subagents 子智能体",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "skills",
        "title": "10. Skills 自定义技能",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "mcp",
        "title": "11.MCP（模型上下文协议）协议",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "hooks",
        "title": "12. Hooks 自动化钩子机制 ",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "course-quiz",
        "title": "13. 课程结业测验",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p class=\"text-body font-medium\">安装与认证配置指南</p>\n<p class=\"text-base leading-relaxed text-secondary\">Claude Code 安装起来非常简单，您是否想在您的应用程序中使用它？\n终端、网络或IDE中。</p>"
      },
      {
        "id": "sec-1",
        "title": "终端",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在 macOS、Linux 或 WSL 上，使用curl命令一次性安装。如果您更喜欢Homebrew，也可以使用brew install，但请注意，此方法不支持自动更新。</p>\n<p class=\"text-base leading-relaxed text-secondary\">在Windows上，有几个选项。在 PowerShell 中，使用 Invoke-RestMethod 命令。在CMD中，使用curl命令。还有一个 winget 命令可用，但与 Homebrew 一样，它不会自动更新。</p>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/1d77aec524053a8a70e5fd7cc1513d9a179be737f93093001ca96f1f1aaa9fa2.jpg\" alt=\"Terminal showing Claude Code successfully installed via curl\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>\n<p class=\"text-base leading-relaxed text-secondary\">安装后，您应该能够运行 claude 命令。如果没有，请重新启动终端。导航到您的项目目录并运行：</p>\n<p class=\"text-base leading-relaxed text-secondary\">您将完成一些初始设置步骤，例如选择颜色主题并使用您的 Claude 帐户（Pro、Max 或 Enterprise）或使用 API 密钥登录。如果您的组织有 Claude Enterprise 帐户，请务必选择该选项。</p>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/6000796786763c8a1862b6cbfbcb1d7b99a61503fd9faf6c39f6e2b98d644119.jpg\" alt=\"Claude Code login method selection: subscription, API, or third-party platform\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>\n<p class=\"text-base leading-relaxed text-secondary\">无论您在哪个目录中运行 claude，它都可以访问该目录及其所有子文件夹。</p>"
      },
      {
        "id": "sec-2",
        "title": "视觉工作室代码",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">“扩展”面板并搜索“Claude Code”。找到标有蓝色验证检查的 Anthropic 扩展。点击安装。</p>\n<p class=\"text-base leading-relaxed text-secondary\">安装后，您可能需要重新启动 VS Code。运行后，使用 Ctrl/Cmd + Shift + P 打开命令选项板，然后搜索“Claude Code Open in New Tab”。如果 Claude 徽标在侧边栏中可见，您也可以单击它。</p>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/1a09d51136d3df5f2a31fa884d575b477a6bc379401ec229abedbc9336828c25.jpg\" alt=\"Claude Code extension page in VS Code marketplace\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>\n<p class=\"text-base leading-relaxed text-secondary\">VS Code 扩展提供了与终端非常相似的体验。您还可以选择退出 UI 并直接在设置中使用终端体验。</p>"
      },
      {
        "id": "sec-3",
        "title": "捷脑公司",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">从 JetBrains Marketplace 安装 Claude Code 插件。安装后，重新启动 IDE。当您重新打开它时，您将看到 Claude 即可。单击它就会打开一个，其中包含与编辑器一起使用的终端体验。</p>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/a7656728ab6cf289ed0d6a523c2f0b230053e7e69908e77675603f69da0eed2d.jpg\" alt=\"Claude Code plugin in the JetBrains Marketplace\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>"
      },
      {
        "id": "sec-4",
        "title": "桌面",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">安装并登录允许Claude桌面后，您将在顶部看到一个标有“代码”的切换开关。外观和感觉与聊天方面类似，但它您在特定的文件夹中工作、更改权限，甚至在云环境中工作。</p>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/dbd3386c65f280868d1a71154b96ee0b1b80d1b44ad5019b7c40be353fc714a1.jpg\" alt=\"Claude Desktop Code view showing recent project folders\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>"
      },
      {
        "id": "sec-5",
        "title": "Web",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在网络上，可以通过访问 claude.ai/code 或单击聊天应用程序侧栏中的“Code”标签来访问 Claude Code。这与桌面应用程序的工作方式类似，但您仅限于 GitHub 存储库。</p>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/3c3609161934207b9e3aeeb18e056f878b86d589601ebd7e39bc23d094b081f1.jpg\" alt=\"Claude Code on the web at claude.ai/code with repository selection\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>"
      },
      {
        "id": "sec-6",
        "title": "我应该使用哪一个？",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">如果您想保持领先地位，那么是您最好的选择 - 功能首先发布。如果您希望 Claude Code 与您的代码编辑器更加紧密地结合在一起，那么 IDE 集成可提供几乎相同的体验。</p>\n<p class=\"text-base leading-relaxed text-secondary\">桌面非常适合让 Claude 在您处理其他任务时在后台运行。</p>\n<p class=\"text-base leading-relaxed text-secondary\">如果您想通过 GitHub 存储库远程处理项目，那么网络上的Claude·代码是一个不错的选择。</p>\n<p class=\"text-base leading-relaxed text-secondary\">您，想使用 Claude Code 取决于您。</p>"
      }
    ],
    "prevLesson": {
      "slug": "how-claude-code-works",
      "title": "Claude Code 工作原理解析"
    },
    "nextLesson": {
      "slug": "your-first-prompt",
      "title": "发送你的第一个智能体编程指令"
    }
  },
  "your-first-prompt": {
    "lessonId": "your-first-prompt",
    "lessonTitle": "发送你的第一个智能体编程指令",
    "lessonIndex": 3,
    "totalLessons": 13,
    "duration": "8 分钟",
    "outcomes": [
      "\n学院",
      "/\n课程",
      "/\nClaude Code 101",
      "Claude Code是什么？最初智能体定位",
      "Claude Code工作原理解析",
      "安装与认证配置指南",
      "发送你的第一个智能体编程指令",
      "探索→计划→代码→提交工作流程",
      "上下文与 Token 预算控制",
      "代码审查与自动化质量审计",
      "CLAUDE.md 项目规范文件深度实战",
      "Subagents 子智能体",
      "Skills 自定义技能",
      "连接模型上下文协议（MCP）",
      "Hooks 自动化钩子机制 ",
      "课程结业测验\n\n测验",
      "完成徽章"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-is-claude-code",
        "title": "1. Claude Code 是什么？ 最初智能体定位",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "how-claude-code-works",
        "title": "2.Claude Code工作原理解析",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "installing-claude-code",
        "title": "3. 安装与认证配置指南",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "your-first-prompt",
        "title": "4. 发送你的第一个智能体编程指令",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "the-explore-plan-code-commit-workflow",
        "title": "5. 探索→计划→代码→提交工作流程",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "context-management",
        "title": "6. 上下文与 Token 预算控制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "code-review",
        "title": "7. 代码审查与自动化质量审计",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "the-claude-md-file",
        "title": "8. CLAUDE.md 项目规范文件深度实战",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "subagents",
        "title": "9. Subagents 子智能体",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "skills",
        "title": "10. Skills 自定义技能",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "mcp",
        "title": "11.MCP（模型上下文协议）协议",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "hooks",
        "title": "12. Hooks 自动化钩子机制 ",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "course-quiz",
        "title": "13. 课程结业测验",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p class=\"text-body font-medium\">发送你的第一个智能体编程指令</p>\n<p class=\"text-base leading-relaxed text-secondary\">你可以像与人工智能助手交谈一样与Claude Code交谈。当输入您的\n提示，这里有一些需要考虑的事情，既可以保护您，又可以使\n事情变得更容易。</p>"
      },
      {
        "id": "sec-1",
        "title": "自动接受与手动接受",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">您可以选择 Claude 是否自动接受它建议的每个文件更改，或者是否每次都请求您的明确许可。按 Shift + Tab 在模式之间循环。</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">手动模式： Claude 每次想要编辑文件或运行命令时都会请求许可。</li>\n<li class=\"text-base leading-relaxed text-secondary\">自动接受模式： 文件编辑会自动批准，但命令仍需要您的许可。</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">答案没有正确或错误之分——只要你觉得舒服就行。</p>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/03c5a203be29e0bc03bd7b3fd14794232c15a9a6e1ecf583dcf6372ead0afab5.jpg\" alt=\"Claude Code in auto-accept mode, reading files and working through a task\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>"
      },
      {
        "id": "sec-2",
        "title": "计划模式",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">Shift + Tab 菜单中有计划模式。计划模式会根据您的提示并使用只读工具来分析您的代码库并研究您建议的实现。它将一路询问澄清问题，然后返回可以执行的详细计划。</p>\n<p class=\"text-base leading-relaxed text-secondary\">计划模式非常适合规划复杂的更改或进行安全的代码审查。很多时候，您会要求 Claude 处理某个功能的多步骤实施，而这正是计划模式的擅长之处。</p>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/fb00d337c540c5c34581d96aeef29834c7ceb70bed2bec918a77d1043b310899.jpg\" alt=\"Claude Code with plan mode on, showing the status bar indicator\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>"
      },
      {
        "id": "sec-3",
        "title": "示例：添加深色模式切换",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">让我们来看一个例子。假设您有一个需要切换暗模式的应用程序。打开项目的根目录并运行 claude。按 Shift + Tab 几次进入计划模式，然后编写如下提示：</p>\n<p class=\"text-base leading-relaxed text-secondary\">我的应用程序需要在整个应用程序中实现深色模式。您能否在标题上创建一个切换开关，允许用户在浅色模式和深色模式之间切换？我需要你找到一种适合我现有的浅色主题的良好对比色。</p>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/39b0125f002f95b0b05695f9426a1596afca1f307fa8458efb2d92e46661dac3.jpg\" alt=\"Entering the dark mode prompt in Claude Code with plan mode enabled\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>\n<p class=\"text-base leading-relaxed text-secondary\">让Claude来计划吧。审查计划后，如果看起来不错，请接受它，并让Claude在每一步都征求您的批准。最后，你可以清楚地看到Claude做了什么以及它是如何得出结论的。</p>"
      },
      {
        "id": "sec-4",
        "title": "回顾",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">使用 Claude 代码时，请尝试制作具有描述性的提示。如果您想了解每一步的情况，也可以。使用计划模式让 Claude 在执行任何代码之前深入了解您想要实现的目标的细节。</p>"
      }
    ],
    "prevLesson": {
      "slug": "installing-claude-code",
      "title": "安装与认证配置指南"
    },
    "nextLesson": {
      "slug": "the-explore-plan-code-commit-workflow",
      "title": "The explore → plan → code → commit workflow"
    }
  },
  "the-explore-plan-code-commit-workflow": {
    "lessonId": "the-explore-plan-code-commit-workflow",
    "lessonTitle": "探索→计划→代码→提交工作流程",
    "lessonIndex": 4,
    "totalLessons": 13,
    "duration": "8 分钟",
    "outcomes": [
      "\n学院",
      "/\n课程",
      "/\nClaude Code 101",
      "Claude Code是什么？最初智能体定位",
      "Claude Code工作原理解析",
      "安装与认证配置指南",
      "发送你的第一个智能体编程指令",
      "探索→计划→代码→提交工作流程",
      "上下文与 Token 预算控制",
      "代码审查与自动化质量审计",
      "CLAUDE.md 项目规范文件深度实战",
      "Subagents 子智能体",
      "Skills 自定义技能",
      "连接模型上下文协议（MCP）",
      "Hooks 自动化钩子机制 ",
      "课程结业测验\n\n测验",
      "完成徽章"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-is-claude-code",
        "title": "1. Claude Code 是什么？ 最初智能体定位",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "how-claude-code-works",
        "title": "2.Claude Code工作原理解析",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "installing-claude-code",
        "title": "3. 安装与认证配置指南",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "your-first-prompt",
        "title": "4. 发送你的第一个智能体编程指令",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "the-explore-plan-code-commit-workflow",
        "title": "5. 探索→计划→代码→提交工作流程",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "context-management",
        "title": "6. 上下文与 Token 预算控制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "code-review",
        "title": "7. 代码审查与自动化质量审计",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "the-claude-md-file",
        "title": "8. CLAUDE.md 项目规范文件深度实战",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "subagents",
        "title": "9. Subagents 子智能体",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "skills",
        "title": "10. Skills 自定义技能",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "mcp",
        "title": "11.MCP（模型上下文协议）协议",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "hooks",
        "title": "12. Hooks 自动化钩子机制 ",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "course-quiz",
        "title": "13. 课程结业测验",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p class=\"text-body font-medium\">探索→计划→代码→提交工作流程</p>\n<p class=\"text-base leading-relaxed text-secondary\">如果您从本课程中学到了一件事，那就是这个工作流程：\n探索、计划、编码和提交。没有它，大多数人都会直接跳起来\n要求 Claude 编写代码——这意味着以后会进行更多的修正\n上。</p>"
      },
      {
        "id": "sec-1",
        "title": "探索和计划",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">处理前两个步骤的最快方法是使用计划模式。在计划模式下，Claude 无法编辑文件 - 它只是读取文件来收集有关如何处理实施的信息。</p>\n<p class=\"text-base leading-relaxed text-secondary\">要进入计划模式，请按 Shift + Tab，直到在文本输入下方看到“计划模式”。然后写一个提示，如：</p>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/7cb40799b30ac6dbf30945994053139cc228086849e432947b344381f4edd4df.jpg\" alt=\"Claude Code status bar showing plan mode on with shift+tab to cycle\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>\n<p class=\"text-base leading-relaxed text-secondary\">我需要将 WebP 转换添加到我们的图像上传管道中。弄清楚它应该在管道中的哪个位置发生，我们是否需要新的依赖项，以及如何处理它。</p>\n<p class=\"text-base leading-relaxed text-secondary\">Claude将阅读相关文件，进行一些网络搜索，并为您提供行动计划。查看它并确定它是否符合您的标准。如果没有，请要求其修改特定领域。</p>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/8c9aa778ca4deab716094a243d80ef4788460504f215bc3e6f279adc36cab8ae.jpg\" alt=\"Claude Code presenting the plan with options to approve, revise areas, or ask questions\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>\n<p class=\"text-base leading-relaxed text-secondary\">这是纠正方向的最佳位置，因为这是在编写任何代码之前。如果您只想获得代码库的一般摘要而不打算随后进行更改，您也可以在不处于计划模式的情况下运行探索子代理。</p>"
      },
      {
        "id": "sec-2",
        "title": "代码",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">一旦计划看起来不错，请选择“批准”接受它，并让Claude完成列表项。您可以选择Claude是自动接受文件编辑还是每次都询问您。</p>\n<p class=\"text-base leading-relaxed text-secondary\">在考虑计划“完成”之前，Claude 会尽力排除故障，但有时您需要介入。这是使用计划模式的好处 - 在执行后，您还可以了解如何获得结果的背景信息，这有助于指导 Claude 的下一步决策。</p>\n<p class=\"text-base leading-relaxed text-secondary\">使编码阶段更加顺利的一些技巧：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">为了让Claude对其结果充满信心，需要清楚什么是“正确”。在写计划时要明确这一点。</li>\n<li class=\"text-base leading-relaxed text-secondary\">添加工具。帮助Claude完成目标的工具消除了很多来回的麻烦。例如，如果您正在构建 Web UI，请安装浏览器良好与网页交互动态扩展，以便 Claude Code 可以控制浏览器选项卡并直接测试 UI。\n\n</li>\n<li class=\"text-base leading-relaxed text-secondary\">包括一个测试套件。为 Claude 提供一个可以持续验证的测试套件。 Claude 甚至可以为您编写测试。在进行此操作之前，请确保测试是可靠的事实来源，以避免误报。</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">为了让Claude对其结果充满信心，需要清楚什么是“正确”。在写计划时要明确这一点。</p>\n<p class=\"text-base leading-relaxed text-secondary\">添加工具。帮助Claude完成目标的工具消除了很多来回的麻烦。例如，如果您正在构建 Web UI，请安装浏览器良好与网页交互动态扩展，以便 Claude Code 可以控制浏览器选项卡并直接测试 UI。</p>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/bf3b9eb343e3a61fbd3b6a12ad8f99f1ca989cc945977f386cc92771c4c516ff.jpg\" alt=\"The 浏览器协同与网页动态交互 extension page in the Chrome Web Store\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>\n<p class=\"text-base leading-relaxed text-secondary\">包括一个测试套件。为 Claude 提供一个可以持续验证的测试套件。 Claude 甚至可以为您编写测试。在进行此操作之前，请确保测试是可靠的事实来源，以避免误报。</p>\n<p class=\"text-base leading-relaxed text-secondary\">快速提示： 如果您发现 Claude 不断遇到相同的问题，请要求其将解决方案保存到 CLAUDE.md 文件中。</p>"
      },
      {
        "id": "sec-3",
        "title": "犯罪",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">一旦您亲自测试了更改的居住结果满意，就可以主动您的代码了。在提交之前，运行子代理代码审查程序来查看您的工作。子代理对代码库有全新的认识——它不会带有主代理在会话中可能存在的偏见。</p>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/3d64a0570bf9a62202320b490b2f60414a9f9a52d9897957eabf4bb14edce043.jpg\" alt=\"A code-reviewer subagent running in Claude Code, reading files and reviewing recent changes\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>\n<p class=\"text-base leading-relaxed text-secondary\">然后让 Claude 按照您的风格生成提交消息。冲洗并重复。</p>"
      },
      {
        "id": "sec-4",
        "title": "回顾",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">要有效地使用 Claude Code，请遵循探索、计划、编码和提交工作流程：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">探索为 Claude 提供了您的项目所需的相关背景。</li>\n<li class=\"text-base leading-relaxed text-secondary\">计划制定了Claude用来衡量成功的行动计划。</li>\n<li class=\"text-base leading-relaxed text-secondary\">代码是你和Claude之间在确定最终结果之前的反复讨论。</li>\n<li class=\"text-base leading-relaxed text-secondary\">犯罪可以帮助您审查和推送代码，以便您可以开始下一个功能。</li>\n</ul>"
      }
    ],
    "prevLesson": {
      "slug": "your-first-prompt",
      "title": "发送你的第一个智能体编程指令"
    },
    "nextLesson": {
      "slug": "context-management",
      "title": "上下文与 Token 预算控制"
    }
  },
  "context-management": {
    "lessonId": "context-management",
    "lessonTitle": "上下文与 Token 预算控制",
    "lessonIndex": 5,
    "totalLessons": 13,
    "duration": "8 分钟",
    "outcomes": [
      "\n学院",
      "/\n课程",
      "/\nClaude Code 101",
      "Claude Code是什么？最初智能体定位",
      "Claude Code工作原理解析",
      "安装与认证配置指南",
      "发送你的第一个智能体编程指令",
      "探索→计划→代码→提交工作流程",
      "上下文与 Token 预算控制",
      "代码审查与自动化质量审计",
      "CLAUDE.md 项目规范文件深度实战",
      "Subagents 子智能体",
      "Skills 自定义技能",
      "连接模型上下文协议（MCP）",
      "Hooks 自动化钩子机制 ",
      "课程结业测验\n\n测验",
      "完成徽章"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-is-claude-code",
        "title": "1. Claude Code 是什么？ 最初智能体定位",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "how-claude-code-works",
        "title": "2.Claude Code工作原理解析",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "installing-claude-code",
        "title": "3. 安装与认证配置指南",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "your-first-prompt",
        "title": "4. 发送你的第一个智能体编程指令",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "the-explore-plan-code-commit-workflow",
        "title": "5. 探索→计划→代码→提交工作流程",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "context-management",
        "title": "6. 上下文与 Token 预算控制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "code-review",
        "title": "7. 代码审查与自动化质量审计",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "the-claude-md-file",
        "title": "8. CLAUDE.md 项目规范文件深度实战",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "subagents",
        "title": "9. Subagents 子智能体",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "skills",
        "title": "10. Skills 自定义技能",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "mcp",
        "title": "11.MCP（模型上下文协议）协议",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "hooks",
        "title": "12. Hooks 自动化钩子机制 ",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "course-quiz",
        "title": "13. 课程结业测验",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p class=\"text-body font-medium\">上下文与 Token 预算控制</p>\n<p class=\"text-base leading-relaxed text-secondary\">上下文是Claude的工作记忆。它读取的每个文件，它的每个命令\n运行时，您发送的每条消息都会占用上下文窗口中的空间。</p>"
      },
      {
        "id": "sec-1",
        "title": "什么是上下文窗口？",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">将上下文窗口视为 Claude 在其内存中可以容纳的空间量。每当您输入提示时，Claude 都会读取文件、运行工具调用或接收工具调用结果，所有这些都会添加到上下文窗口中。由于空间有限，因此优化空间的使用方式变得很重要。</p>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/0b452da83b5903a000236abfd55cc34f13f28dbfeb7e3acc9f6da07cdd78241e.jpg\" alt=\"Diagram showing the context window as a grid of tokens — some taken, most available\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>"
      },
      {
        "id": "sec-2",
        "title": "当上下文填满时会发生什么",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">当接近限制时，上下文窗口会自动压缩。压缩总结了重要的细节并删除了不必要的工具调用结果以释放空间。请注意，此过程可能会丢失详细信息。</p>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/9511065cfe218d3894f551b9096b6eead92b74f5714126e6ccdd26e2d4a5f4a0.jpg\" alt=\"Claude Code showing 'Compacting conversation...' as it summarizes the context\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/a1539801b08e330701dc44e3361a079860d4586b1eff878237dff5ec28f39e64.jpg\" alt=\"Claude Code displaying a compact summary of the previous conversation including key technical concepts and files\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>"
      },
      {
        "id": "sec-3",
        "title": "命令",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">您可以使用 /compact 命令手动运行压缩。这会压缩到目前为止的所有内容。当您想要释放上下文空间同时保留以前所做的工作的记忆时，它会很方便。</p>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/d348719608e1d100f9adaca481d43be6759a9d3e896b67de6054e8cf6591dfe5.jpg\" alt=\"The /compact command in Claude Code's autocomplete menu\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>\n<p class=\"text-base leading-relaxed text-secondary\">如果您想完全从头开始，不记得上一个会话，请运行 /clear。这会删除所有内容。</p>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/93098b21ae0152b1fbf763fd9e30ea76e4ada64966526203458bb0a83006851a.jpg\" alt=\"Running /clear in Claude Code to start a fresh session\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>\n<p class=\"text-base leading-relaxed text-secondary\">要检查上下文的状态，请运行 /context 命令。您将获得上下文大小、占用最多空间的类别以及显示细分的可视化图形的高级概述。</p>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/d0b6a1d0ad4a21aa61a48751f2d382a77edc3fde154f8f5aebd2509ebc325420.jpg\" alt=\"Output of the /context command showing context usage breakdown with a visual bar chart\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>"
      },
      {
        "id": "sec-4",
        "title": "何时使用哪个",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">一般经验法则：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">\n当您正在处理特定功能并遇到上下文限制但需要继续时，请使用 /compact。保持上下文与您当前的功能相关非常重要。\n</li>\n<li class=\"text-base leading-relaxed text-secondary\">\n当您想要启动新功能时，请使用 /clear。你不希望之前的谈话给新事物带来偏见。对于您希望 Claude 在会话中记住的内容，请将它们放入 CLAUDE.md 文件中，这样它就不必从头开始重新发现内容。\n\n</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">当您正在处理特定功能并遇到上下文限制但需要继续时，请使用 /compact。保持上下文与当前功能相关非常重要。</p>\n<p class=\"text-base leading-relaxed text-secondary\">当您想要启动新功能时，请使用 /clear。你不希望之前的谈话给新事物带来偏见。对于您希望 Claude 在会话中记住的内容，请将它们放入您的 CLAUDE.md 文件中，这样它就不必从头开始重新发现内容。</p>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/c31ad4239bea62c006ae5d41ab0c60d0c0d2e89676ddeee440e139e1690c1f67.jpg\" alt=\"A CLAUDE.md file with commands, important notes, and architecture sections\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>"
      },
      {
        "id": "sec-5",
        "title": "节省上下文空间的技巧",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">一个模糊的提示可能看起来较小，但从长远来看，它实际上会花费更多的上下文。如果没有明确的指示，Claude被迫更多地探索你的代码库并进行自己的推理——这比详细的提示占用更多的上下文空间。</p>\n<p class=\"text-base leading-relaxed text-secondary\">MCP（模型上下文协议）协议服务器默认将所有可用工具加载到上下文中，即使您不使用它们也是如此。如果您为与当前项目无关的事情配置了服务器，请考虑将其关闭。您还可以尝试“Skills 自定义技能”，其工作方式与 MCP（模型上下文协议）协议服务器类似，但不会预先将所有内容加载到上下文中。</p>\n<p class=\"text-base leading-relaxed text-secondary\">使用子代理。 子代理 梯度子智能体派生 梯度子智能体派生 梯度子智能体派生 与主代理并行运行，但有一个完全独立的上下文窗口。对于您只需要答案的任务 - 例如“身份验证端点位于哪里？” — 子代理完成工作并仅将摘要返回给您的主代理，从而保持您的主要上下文干净。</p>"
      },
      {
        "id": "sec-6",
        "title": "回顾",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">管理 Claude Code 中的上下文至关重要。使用 /compact 总结长会话，使用 /clear 重新开始。要有效地使用上下文窗口：具体说明提示，检查当前上下文的消耗情况，并使用子代理将任务委托给您只需要结果的地方。</p>"
      }
    ],
    "prevLesson": {
      "slug": "the-explore-plan-code-commit-workflow",
      "title": "The explore → plan → code → commit workflow"
    },
    "nextLesson": {
      "slug": "code-review",
      "title": "代码审查与自动化质量审计"
    }
  },
  "code-review": {
    "lessonId": "code-review",
    "lessonTitle": "代码审查与自动化质量审计",
    "lessonIndex": 6,
    "totalLessons": 13,
    "duration": "8 分钟",
    "outcomes": [
      "\n学院",
      "/\n课程",
      "/\nClaude Code 101",
      "Claude Code是什么？最初智能体定位",
      "Claude Code工作原理解析",
      "安装与认证配置指南",
      "发送你的第一个智能体编程指令",
      "探索→计划→代码→提交工作流程",
      "上下文与 Token 预算控制",
      "代码审查与自动化质量审计",
      "CLAUDE.md 项目规范文件深度实战",
      "Subagents 子智能体",
      "Skills 自定义技能",
      "连接模型上下文协议（MCP）",
      "Hooks 自动化钩子机制 ",
      "课程结业测验\n\n测验",
      "完成徽章"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-is-claude-code",
        "title": "1. Claude Code 是什么？ 最初智能体定位",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "how-claude-code-works",
        "title": "2.Claude Code工作原理解析",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "installing-claude-code",
        "title": "3. 安装与认证配置指南",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "your-first-prompt",
        "title": "4. 发送你的第一个智能体编程指令",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "the-explore-plan-code-commit-workflow",
        "title": "5. 探索→计划→代码→提交工作流程",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "context-management",
        "title": "6. 上下文与 Token 预算控制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "code-review",
        "title": "7. 代码审查与自动化质量审计",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "the-claude-md-file",
        "title": "8. CLAUDE.md 项目规范文件深度实战",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "subagents",
        "title": "9. Subagents 子智能体",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "skills",
        "title": "10. Skills 自定义技能",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "mcp",
        "title": "11.MCP（模型上下文协议）协议",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "hooks",
        "title": "12. Hooks 自动化钩子机制 ",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "course-quiz",
        "title": "13. 课程结业测验",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p class=\"text-body font-medium\">代码审查与自动化质量审计</p>\n<p class=\"text-base leading-relaxed text-secondary\">Claude Code 有一些内置功能，可以让您的 git 工作流程更快。\n让我们来看看它们。</p>"
      },
      {
        "id": "sec-1",
        "title": "与子代理一起审查",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在主动公关使用之前，请要求 Claude 子代理审查您的更改。子代理以全新的视角在自己的上下文窗口中运行 - 它不带有刚刚在会话中编写代码的主代理的偏见。</p>\n<p class=\"text-base leading-relaxed text-secondary\">创建代码审阅器子代理时，将其限制为只读工具。审阅者应该标记问题，而不是编辑文件。将子代理配置签入您的存储库，以便您的整个团队使用相同的审阅者。</p>"
      },
      {
        "id": "sec-2",
        "title": "/commit-push-pr 技能",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">/commit-push-pr 技能可以一步处理提交、推送和 PR 创建。无需手动执行每个操作，只需运行该技能，Claude就会处理它。</p>\n<p class=\"text-base leading-relaxed text-secondary\">如果您有一个 Slack 连接模型上下文协议服务器，配置了 CLAUDE.md 中首发的频道，它会自动将 PR 链接发布到您团队的频道。</p>"
      },
      {
        "id": "sec-3",
        "title": "使用 --from-pr 进行会话链接",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">当 Claude 通过 gh pr create 创建 PR 时，会话会自动链接到该 PR。如果您需要稍后返回 - 也许是为了解决审核意见或修复失败的构建 - 运行：</p>\n<p class=\"text-base leading-relaxed text-secondary\">这将从您上次停下的地方继续。</p>"
      },
      {
        "id": "sec-4",
        "title": "回顾",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在推送之前使用子代理进行公正的代码审查。使用 /commit-push-pr 一步处理完整的提交到 PR 流程。并使用 --from-pr 稍后恢复 PR 工作。这些都是小功能，但它们消除了您日常工作流程中的很多麻烦。</p>"
      }
    ],
    "prevLesson": {
      "slug": "context-management",
      "title": "上下文与 Token 预算控制"
    },
    "nextLesson": {
      "slug": "the-claude-md-file",
      "title": "CLAUDE.md 项目规范文件深度实战"
    }
  },
  "the-claude-md-file": {
    "lessonId": "the-claude-md-file",
    "lessonTitle": "CLAUDE.md 项目规范文件深度实战",
    "lessonIndex": 7,
    "totalLessons": 13,
    "duration": "8 分钟",
    "outcomes": [
      "\n学院",
      "/\n课程",
      "/\nClaude Code 101",
      "Claude Code是什么？最初智能体定位",
      "Claude Code工作原理解析",
      "安装与认证配置指南",
      "发送你的第一个智能体编程指令",
      "探索→计划→代码→提交工作流程",
      "上下文与 Token 预算控制",
      "代码审查与自动化质量审计",
      "CLAUDE.md 项目规范文件深度实战",
      "Subagents 子智能体",
      "Skills 自定义技能",
      "连接模型上下文协议（MCP）",
      "Hooks 自动化钩子机制 ",
      "课程结业测验\n\n测验",
      "完成徽章"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-is-claude-code",
        "title": "1. Claude Code 是什么？ 最初智能体定位",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "how-claude-code-works",
        "title": "2.Claude Code工作原理解析",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "installing-claude-code",
        "title": "3. 安装与认证配置指南",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "your-first-prompt",
        "title": "4. 发送你的第一个智能体编程指令",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "the-explore-plan-code-commit-workflow",
        "title": "5. 探索→计划→代码→提交工作流程",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "context-management",
        "title": "6. 上下文与 Token 预算控制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "code-review",
        "title": "7. 代码审查与自动化质量审计",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "the-claude-md-file",
        "title": "8. CLAUDE.md 项目规范文件深度实战",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "subagents",
        "title": "9. Subagents 子智能体",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "skills",
        "title": "10. Skills 自定义技能",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "mcp",
        "title": "11.MCP（模型上下文协议）协议",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "hooks",
        "title": "12. Hooks 自动化钩子机制 ",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "course-quiz",
        "title": "13. 课程结业测验",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p class=\"text-body font-medium\">CLAUDE.md 项目规范文件深度实战</p>\n<p class=\"text-base leading-relaxed text-secondary\">Claude Code 中最有用的功能之一是 CLAUDE.md 文件。\n为Claude·代码提供有关您项目的持久记忆。</p>"
      },
      {
        "id": "sec-1",
        "title": "它解决的问题",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">当您在没有 CLAUDE.md 文件的情况下打开 Claude 代码时，它​​每次都会重新启动。它必须重新探索您的代码库，查找需要哪些依赖项，并了解已经实现了哪些功能。有时它会做出假设，这使得引导 Claude 走向正确的方向变得更加困难。</p>\n<p class=\"text-base leading-relaxed text-secondary\">CLAUDE.md 解决了这个问题。它是您添加到根目录的 Markdown 文件，Claude Code 会在您每次启动会话时自动读取它。将其视为解决库的入门项目脚本。CLAUDE.md 文件的内容将附加到您的提示符中。</p>"
      },
      {
        "id": "sec-2",
        "title": "一个例子",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">典型的 CLAUDE.md 文件如下所示：</p>\n<p class=\"text-base leading-relaxed text-secondary\">这很简单。现在，如果您要求 Claude Code 创建一个 React，组件已经知道使用 Tailwind 进行样式设置并遵循您的代码规定。</p>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/3bc0b82a5595e143f7c169346d9cca4e578013befa12eeb71963851299cb097b.jpg\" alt=\"A CLAUDE.md file open in VS Code showing project info, commands, and code style rules\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>"
      },
      {
        "id": "sec-3",
        "title": "CLAUDE.md 适用于团队",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">您可以（并且应该）将 CLAUDE.md 提交到版本控制中，以便您的团队从中受益。实际上内存文件有一个层次结构，具体取决于它们的用途：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">项目级 CLAUDE.md 位于项目的根目录中。与团队共享。</li>\n<li class=\"text-base leading-relaxed text-secondary\">用户级 CLAUDE.md 位于您的配置文件夹中。这一款适合您，适用于您的所有项目。将您的个人喜好放在这里。</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">项目级 CLAUDE.md 位于项目的根目录中。与团队共享。</p>\n<p class=\"text-base leading-relaxed text-secondary\">用户级 CLAUDE.md 位于您的配置文件夹中。这一款适合您，适用于您的所有项目。将您的个人喜好放在这里。</p>"
      },
      {
        "id": "sec-4",
        "title": "尖端",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">如果您发现自己反复纠正 Claude（例如告诉它始终使用服务器操作而不是 API 路由），请明确要求 Claude 将该规则保存到内存中。下次您打开该项目时，它就会知道。</p>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/aa738f148200bde3fe73a9c6457da77f035577f249bc0dc74149c1b91b0328ae.jpg\" alt=\"Asking Claude to save a rule to the CLAUDE.md file — always use server actions instead of API routes\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>\n<p class=\"text-base leading-relaxed text-secondary\">参考项目文档。如果您的项目中有希望 Claude 参考的文档，请使用 @ 符号和文件路径：</p>\n<p class=\"text-base leading-relaxed text-secondary\">从没有一个开始。我们建议开始一个没有 CLAUDE.md 文件的项目，这样您就可以看到需要不断修正模型的地方。这使您的 CLAUDE.md 保持紧凑并仅关注必要的信息。准备好后，运行 /init 让 Claude 为您生成一个。</p>"
      },
      {
        "id": "sec-5",
        "title": "回顾",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">令人沮丧的 Claude Code 会话和 Claude Code 会话之间高效的区别通常依赖于上下文，而 CLAUDE.md 文件就是为您提供上下文的方式。从您的堆栈、您的首选项和您的命令开始，然后从那里开始构建。</p>"
      }
    ],
    "prevLesson": {
      "slug": "code-review",
      "title": "代码审查与自动化质量审计"
    },
    "nextLesson": {
      "slug": "subagents",
      "title": "Subagents 并发子智能体派生 并发子智能体派生 并发子智能体派生 并发子智能体派生"
    }
  },
  "subagents": {
    "lessonId": "subagents",
    "lessonTitle": "Subagents 子智能体",
    "lessonIndex": 8,
    "totalLessons": 13,
    "duration": "8 分钟",
    "outcomes": [
      "\n学院",
      "/\n课程",
      "/\nClaude Code 101",
      "Claude Code是什么？最初智能体定位",
      "Claude Code工作原理解析",
      "安装与认证配置指南",
      "发送你的第一个智能体编程指令",
      "探索→计划→代码→提交工作流程",
      "上下文与 Token 预算控制",
      "代码审查与自动化质量审计",
      "CLAUDE.md 项目规范文件深度实战",
      "Subagents 子智能体",
      "Skills 自定义技能",
      "连接模型上下文协议（MCP）",
      "Hooks 自动化钩子机制 ",
      "课程结业测验\n\n测验",
      "完成徽章"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-is-claude-code",
        "title": "1. Claude Code 是什么？ 最初智能体定位",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "how-claude-code-works",
        "title": "2.Claude Code工作原理解析",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "installing-claude-code",
        "title": "3. 安装与认证配置指南",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "your-first-prompt",
        "title": "4. 发送你的第一个智能体编程指令",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "the-explore-plan-code-commit-workflow",
        "title": "5. 探索→计划→代码→提交工作流程",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "context-management",
        "title": "6. 上下文与 Token 预算控制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "code-review",
        "title": "7. 代码审查与自动化质量审计",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "the-claude-md-file",
        "title": "8. CLAUDE.md 项目规范文件深度实战",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "subagents",
        "title": "9. Subagents 子智能体",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "skills",
        "title": "10. Skills 自定义技能",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "mcp",
        "title": "11.MCP（模型上下文协议）协议",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "hooks",
        "title": "12. Hooks 自动化钩子机制 ",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "course-quiz",
        "title": "13. 课程结业测验",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p class=\"text-body font-medium\">Subagents 子智能体</p>\n<p class=\"text-base leading-relaxed text-secondary\">Claude可以将任务委托给子代理，子代理将任务分解并运行\n并行组件任务，改善您的上下文管理。每个\n子代理在其自己的隔离上下文窗口中运行。</p>"
      },
      {
        "id": "sec-1",
        "title": "它是如何运作的",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">管理 Claude 代码中的上下文非常重要。许多上下文窗口都被调用、探索代码库或运行网络搜索以进行研究等消耗。Claude 在探索过程中发现的内容并不总是与您正在开发的主要功能相关。</p>\n<p class=\"text-base leading-relaxed text-secondary\">这就是子代理发挥作用的地方。Claude 生成一个子代理来处理“为我探索这个代码库”之类的任务。子代理与其自己的上下文窗口并行运行，完成所有探索工作，完成后总结其发现并将该总结返回给 Claude。</p>\n<p class=\"text-base leading-relaxed text-secondary\">结果是：您得到了您正在寻找的答案，而到达那里所需的整个旅程不会扰乱您的主要上下文。</p>"
      },
      {
        "id": "sec-2",
        "title": "创建您自己的子代理",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">子智能体（Subagents）派生在带有 YAML frontmatter 的 Markdown 文件中定义。最简单的入门方法是让 Claude 生成一个。跑步：</p>\n<p class=\"text-base leading-relaxed text-secondary\">然后选择“创建新代理”。您将逐步完成包括选择代理范围、定义其用途、选择其有权访问的工具，甚至为其选择颜色等步骤。</p>\n<p class=\"text-base leading-relaxed text-secondary\">Claude 将为子代理生成名称、描述和提示。这还告诉Claude何时根据您给出的提示呼叫子代理。</p>"
      },
      {
        "id": "sec-3",
        "title": "进一步定制",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">Subagents 子智能体 可以进一步定制。以下是一些亮点：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">持久记忆可让您的子代理在对话中保留记忆。如果您在相同的项目中持续使用它，这非常有用。</li>\n<li class=\"text-base leading-relaxed text-secondary\">通过添加技能键并按名称列出技能，将技能预装到子代理中。请注意，与主要对话中的技能不同，整个技能都已加载到此处的上下文中。</li>\n</ul>"
      },
      {
        "id": "sec-4",
        "title": "回顾",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">保持上下文窗口清洁是使用 Claude Code 保持高效的最佳方法之一。使用子代理，您可以在后台运行代理来处理繁重的工作，然后将答案返回到主上下文窗口。</p>\n<p class=\"text-base leading-relaxed text-secondary\">想要更深入吗？ 查看我们的专用课程：子代理简介（在新选项卡中打开）</p>"
      }
    ],
    "prevLesson": {
      "slug": "the-claude-md-file",
      "title": "CLAUDE.md 项目规范文件深度实战"
    },
    "nextLesson": {
      "slug": "skills",
      "title": "自定义 自定义 自定义 自定义 Skills 技能扩展 技能扩展 技能扩展 技能扩展"
    }
  },
  "skills": {
    "lessonId": "skills",
    "lessonTitle": "Skills 自定义技能",
    "lessonIndex": 9,
    "totalLessons": 13,
    "duration": "8 分钟",
    "outcomes": [
      "\n学院",
      "/\n课程",
      "/\nClaude Code 101",
      "Claude Code是什么？最初智能体定位",
      "Claude Code工作原理解析",
      "安装与认证配置指南",
      "发送你的第一个智能体编程指令",
      "探索→计划→代码→提交工作流程",
      "上下文与 Token 预算控制",
      "代码审查与自动化质量审计",
      "CLAUDE.md 项目规范文件深度实战",
      "Subagents 子智能体",
      "Skills 自定义技能",
      "连接模型上下文协议（MCP）",
      "Hooks 自动化钩子机制 ",
      "课程结业测验\n\n测验",
      "完成徽章"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-is-claude-code",
        "title": "1. Claude Code 是什么？ 最初智能体定位",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "how-claude-code-works",
        "title": "2.Claude Code工作原理解析",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "installing-claude-code",
        "title": "3. 安装与认证配置指南",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "your-first-prompt",
        "title": "4. 发送你的第一个智能体编程指令",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "the-explore-plan-code-commit-workflow",
        "title": "5. 探索→计划→代码→提交工作流程",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "context-management",
        "title": "6. 上下文与 Token 预算控制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "code-review",
        "title": "7. 代码审查与自动化质量审计",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "the-claude-md-file",
        "title": "8. CLAUDE.md 项目规范文件深度实战",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "subagents",
        "title": "9. Subagents 子智能体",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "skills",
        "title": "10. Skills 自定义技能",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "mcp",
        "title": "11.MCP（模型上下文协议）协议",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "hooks",
        "title": "12. Hooks 自动化钩子机制 ",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "course-quiz",
        "title": "13. 课程结业测验",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p class=\"text-body font-medium\">Skills 自定义技能</p>\n<p class=\"text-footnote leading-relaxed text-secondary\">每次你向 Claude 解释团队的编码标准时，你都是在重复自己。每次公关审查时，您都会重新描述您想要的反馈结构。每条提交消息都会提醒Claude您喜欢的格式。技能可以解决这个问题。</p>\n<p class=\"text-footnote leading-relaxed text-secondary\">技能是一个 Markdown 文件，它教Claude如何一次做某件事，Claude会在相关时自动应用该知识。Claude技能是指令、脚本和资源的文件夹，代理可以发现并使用它们来更准确、更高效地完成任务。</p>\n<p class=\"text-footnote leading-relaxed text-secondary\">有了Claude Code，我们找到了技能MD文件。是Claude如何决定是否使用该技能。当您要求Claude查看此PR时，它会将您的请求与可用的技能进行匹配并找到此一个。Claude读取您的请求描述，将其与所有可用的技能进行描述比较，并激活匹配的技能描述。</p>\n<p class=\"text-footnote leading-relaxed text-secondary\">您可以根据需要将技能存储在几个地方。个人技能位于主目录 .claude/skills 中，并跟随您完成所有项目。这些是您的偏好、您的提交消息样式、您的文档格式、您喜欢的代码解释方式。项目技能位于存储库根目录内的 .claude/skills 中。克隆存储库的人会自动获得这些技能。这是团队标准的所在，例如您公司的品牌指南、首选字体以及用于网页设计的颜色。</p>\n<p class=\"text-footnote leading-relaxed text-secondary\">Claude 代码有多种自定义的方法。 技能扩展 技能扩展 技能扩展 技能扩展 技能扩展是训练的，因为它们是自动且特定于任务的行为。 CLAUDE.md 文件加载到每个对话中。 如果您希望 Claude 始终使用 TypeScript 严格模式，则需要加载 CLAUDE.md 文件中。Skills 自定义技能另外，当它们满足您的要求时，可以进行加载。它仅加载名称和描述，因此会填满整个上下文窗口。当您调试时，您的 PR 审查清单不需要上下文中。当您实际要求审核时它会加载。</p>\n<p class=\"text-footnote leading-relaxed text-secondary\">斜杠命令需要您键入它们，而技能则不需要。Claude在认识到情况后就会应用它们。这些最适合适用于特定任务的专业知识。 您的团队遵循的代码审查与自动化质量审计标准，提交您喜欢的消息格式，您组织的品牌指南。如果你发现自己反复向Claude解释同样的事情，那么，这是一项有待书写的技能。</p>\n<p class=\"text-base leading-relaxed text-secondary\">想要更深入吗？ 看看我们的专门课程：代理技能介绍（在新选项卡中打开）</p>"
      }
    ],
    "prevLesson": {
      "slug": "subagents",
      "title": "Subagents 并发子智能体派生 并发子智能体派生 并发子智能体派生 并发子智能体派生"
    },
    "nextLesson": {
      "slug": "mcp",
      "title": "连接 MCP 协议 协议"
    }
  },
  "mcp": {
    "lessonId": "mcp",
    "lessonTitle": "连接模型上下文协议（MCP）",
    "lessonIndex": 10,
    "totalLessons": 13,
    "duration": "8 分钟",
    "outcomes": [
      "\n学院",
      "/\n课程",
      "/\nClaude Code 101",
      "Claude Code是什么？最初智能体定位",
      "Claude Code工作原理解析",
      "安装与认证配置指南",
      "发送你的第一个智能体编程指令",
      "探索→计划→代码→提交工作流程",
      "上下文与 Token 预算控制",
      "代码审查与自动化质量审计",
      "CLAUDE.md 项目规范文件深度实战",
      "Subagents 子智能体",
      "Skills 自定义技能",
      "连接模型上下文协议（MCP）",
      "Hooks 自动化钩子机制 ",
      "课程结业测验\n\n测验",
      "完成徽章"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-is-claude-code",
        "title": "1. Claude Code 是什么？ 最初智能体定位",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "how-claude-code-works",
        "title": "2.Claude Code工作原理解析",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "installing-claude-code",
        "title": "3. 安装与认证配置指南",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "your-first-prompt",
        "title": "4. 发送你的第一个智能体编程指令",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "the-explore-plan-code-commit-workflow",
        "title": "5. 探索→计划→代码→提交工作流程",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "context-management",
        "title": "6. 上下文与 Token 预算控制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "code-review",
        "title": "7. 代码审查与自动化质量审计",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "the-claude-md-file",
        "title": "8. CLAUDE.md 项目规范文件深度实战",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "subagents",
        "title": "9. Subagents 子智能体",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "skills",
        "title": "10. Skills 自定义技能",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "mcp",
        "title": "11.MCP（模型上下文协议）协议",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "hooks",
        "title": "12. Hooks 自动化钩子机制 ",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "course-quiz",
        "title": "13. 课程结业测验",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p class=\"text-body font-medium\">连接模型上下文协议（MCP）</p>\n<p class=\"text-base leading-relaxed text-secondary\">模型上下文协议（MCP（MCP 协议）协议）是一个开放标准，让Claude Code\n连接到外部工具和数据源。当你问问题时，Claude\n自动了解何时应该使用这些工具来更好地处理\n您的查询。</p>\n<p class=\"text-base leading-relaxed text-secondary\">您的许多上下文都位于代码库之外 - 在数据库、生产力应用程序或公共存储库中。 连接模型上下文协议弥合了这一差距。</p>"
      },
      {
        "id": "sec-1",
        "title": "你能用它做什么？",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">首先，理解代理人工智能中“工具”的概念很。工具使像 Claude Code 这样的代理能够执行帮助他们更有效地完成任务的操作。这与典型的人工智能不同，在典型的人工智能中，您必须收到重要的文本回复。</p>\n<p class=\"text-base leading-relaxed text-secondary\">例如，如果您的团队使用 Linear 进行管理，您可以添加 Linear 连接模型上下文协议服务器项目来引入特定问题的详细信息。如果您需要依赖项的最新文档，像 Context7 这样的文档提供连接模型上下文协议服务器，可以将其提供给 Claude Code。</p>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/8b45d337d7061da8f40d66261dede8996ae317467c47f5224bc14a95d7549f54.jpg\" alt=\"Claude Code querying a Linear MCP 协议 server to retrieve issue details for ticket MEN-12\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/d6d21d5d4f27b7b129d16d21e8578d2d754778562751293844160576ab26f545.jpg\" alt=\"Claude Code using the Context7 MCP 协议 server to look up the latest shadcn/ui documentation\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>"
      },
      {
        "id": "sec-2",
        "title": "添加连接模型上下文协议协议服务器",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">您可以使用 claude mcp add 命令添加 MCP 协议服务器。主要有两种类型：</p>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/2e38357f8b365758bc4d9d96a290c1acd8eafc93f673a38d40738b499bd9453b.jpg\" alt=\"Running claude mcp add to add an HTTP Linear MCP 协议 server from the terminal\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">HTTP 服务器用于远程服务。这些由服务提供商托管并通过网络连接。</li>\n<li class=\"text-base leading-relaxed text-secondary\">工作室服务器适用于在您的计算机上运行的本地进程。</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/a19228083bd37109bd90468a8d18342a091bc905273c3b5aa4184804b4b1e68c.jpg\" alt=\"Running claude mcp add to add a local stdio MCP 协议 server with a Python script\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>\n<p class=\"text-base leading-relaxed text-secondary\">您可以在 Claude Code 会话中使用 /mcp 管理服务器，以查看连接的内容、检查状态并禁用不需要的服务器。</p>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/ad513f212c47b68feec4010cd6d1c2b348d5a1ed94ea1da993e0454d3bf08159.jpg\" alt=\"The /mcp command showing connected MCP 协议 servers and their status\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>"
      },
      {
        "id": "sec-3",
        "title": "确定服务器范围",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">连接模型上下文协议（MCP）服务器可以通过三种方式确定范围：</p>"
      },
      {
        "id": "sec-4",
        "title": "背景成本",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">MCP 协议服务器将工具定义添加到您的上下文窗口中 - 即使您没有主动使用它们。如果您配置了很多服务器，这会占用您的可用上下文。运行 /mcp 查看连接的内容并禁用您不经常使用的任何内容。</p>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/f536fa89801900377bb63a689ae8e23c9b3b57a60c08dd04fef92e3fce3bf756.jpg\" alt=\"The /mcp server detail view with options to view tools, reconnect, or disable a server\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>\n<p class=\"text-base leading-relaxed text-secondary\">如果某个工具具有等效的 CLI（例如 GitHub 的 gh 或 AWS 的 aws），则 CLI 的上下文效率更高，因为它不会添加持久工具定义。</p>\n<p class=\"text-base leading-relaxed text-secondary\">您也可以从使用技能中受益。技能的名称和描述已加载到上下文中，Claude仅在确定需要使用它时才加载完整的技能内容。</p>\n<p class=\"text-base leading-relaxed text-secondary\">如果您的连接模型上下文协议工具上下文窗口的 10%，Claude Code 会自动切换到工具搜索模式，该模式会根据需要找到正确的工具 - 尽管这可能无法可靠地工作。</p>"
      },
      {
        "id": "sec-5",
        "title": "回顾",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">MCP 协议将 Claude Code 连接到您的外部工具和数据源。使用 claude mcp add 添加服务器。使用 .mcp.json 将它们范围限定到您的项目，以便您的团队自动获取它们。并通过禁用您不经常使用的服务器来关注上下文使用情况。</p>"
      }
    ],
    "prevLesson": {
      "slug": "skills",
      "title": "自定义 自定义 自定义 自定义 Skills 技能扩展 技能扩展 技能扩展 技能扩展"
    },
    "nextLesson": {
      "slug": "hooks",
      "title": "Hooks 自动化钩子机制 "
    }
  },
  "hooks": {
    "lessonId": "hooks",
    "lessonTitle": "Hooks 自动化钩子机制 ",
    "lessonIndex": 11,
    "totalLessons": 13,
    "duration": "8 分钟",
    "outcomes": [
      "\n学院",
      "/\n课程",
      "/\nClaude Code 101",
      "Claude Code是什么？最初智能体定位",
      "Claude Code工作原理解析",
      "安装与认证配置指南",
      "发送你的第一个智能体编程指令",
      "探索→计划→代码→提交工作流程",
      "上下文与 Token 预算控制",
      "代码审查与自动化质量审计",
      "CLAUDE.md 项目规范文件深度实战",
      "Subagents 子智能体",
      "Skills 自定义技能",
      "连接模型上下文协议（MCP）",
      "Hooks 自动化钩子机制 ",
      "课程结业测验\n\n测验",
      "完成徽章"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-is-claude-code",
        "title": "1. Claude Code 是什么？ 最初智能体定位",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "how-claude-code-works",
        "title": "2.Claude Code工作原理解析",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "installing-claude-code",
        "title": "3. 安装与认证配置指南",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "your-first-prompt",
        "title": "4. 发送你的第一个智能体编程指令",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "the-explore-plan-code-commit-workflow",
        "title": "5. 探索→计划→代码→提交工作流程",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "context-management",
        "title": "6. 上下文与 Token 预算控制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "code-review",
        "title": "7. 代码审查与自动化质量审计",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "the-claude-md-file",
        "title": "8. CLAUDE.md 项目规范文件深度实战",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "subagents",
        "title": "9. Subagents 子智能体",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "skills",
        "title": "10. Skills 自定义技能",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "mcp",
        "title": "11.MCP（模型上下文协议）协议",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "hooks",
        "title": "12. Hooks 自动化钩子机制 ",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "course-quiz",
        "title": "13. 课程结业测验",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p class=\"text-body font-medium\">Hooks 自动化钩子机制 </p>\n<p class=\"text-base leading-relaxed text-secondary\">Hooks 自动化钩子 自动化钩子机制 自动化钩子让您可以在 Claude Code 生命周期机制的特定点运行。\n钩子与本菜中头的其他内容之间的区别主要\n钩子是确定性的——它们总是会跑。</p>"
      },
      {
        "id": "sec-1",
        "title": "为什么使用 Hooks 自动化钩子机制 ",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">您可以在 CLAUDE.md 中有时告诉 Claude 在每次文件编辑后运行 Prettier。大多数时候会的。但却不会。钩子使每次都会发生，无一例外。</p>\n<p class=\"text-base leading-relaxed text-secondary\">常见用例包括：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">文件编辑后自动格式化</li>\n<li class=\"text-base leading-relaxed text-secondary\">记录所有执行的命令以确保合规性</li>\n<li class=\"text-base leading-relaxed text-secondary\">阻止修改生产文件等危险操作</li>\n<li class=\"text-base leading-relaxed text-secondary\">当Claude完成任务时向自己发送通知</li>\n</ul>"
      },
      {
        "id": "sec-2",
        "title": "它们是如何工作的",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">Hooks 自动化钩子机制 在 settings.json 中配置。您选择一个事件，可以选择为其应用的工具设置匹配器，并提供要运行的命令。一些最常见的事件是：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">预工具使用 - 在工具调用之前运行</li>\n<li class=\"text-base leading-relaxed text-secondary\">高级工具使用 - 在工具调用完成后运行</li>\n<li class=\"text-base leading-relaxed text-secondary\">用户提示提交 — 在您提交提示时运行，然后 Claude 处理它</li>\n<li class=\"text-base leading-relaxed text-secondary\">停止 — 当 Claude 完成响应时运行</li>\n<li class=\"text-base leading-relaxed text-secondary\">通知 — 当 Claude 发送通知时运行</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">这些只是您可以挂钩的一些事件 - Claude Code 支持更多事件。请参阅钩子参考（在新选项卡中打开）以获取完整列表。</p>\n<p class=\"text-base leading-relaxed text-secondary\">您可以通过 Claude Code 中的 /hooks 命令或直接编辑 settings.json 来配置它们。</p>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/de2ac2dab9f24bb445af53ec3f2dbb17f4399fb472247165532f814f350126d5.jpg\" alt=\"The settings.json file inside the .claude directory with hooks configuration\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>"
      },
      {
        "id": "sec-3",
        "title": "一个实际的例子",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">最常见的钩子：编辑后自动格式化。设置PostToolUse钩子与“Edit|MultiEdit|Write”匹配器，因此每当Claude修改文件时它就会触发。该命令检查文件扩展名并运行适当的格式化程序 - TypeScript 的 Prettier、Go 的 gofmt，无论您的项目使用什么。</p>"
      },
      {
        "id": "sec-4",
        "title": "使用 PreToolUse 进行阻止",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">PreToolUse 挂钩可以在工具执行之前阻止工具调用。您的钩子在标准输入上接收工具名称和 JSON 格式的输入。退出代码决定行为：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">退出代码 0 — 正常进行。</li>\n<li class=\"text-base leading-relaxed text-secondary\">退出代码 2 — 阻止该操作。 stderr 消息作为反馈反馈给 Claude，以便它知道为什么被阻止并可以进行调整。</li>\n<li class=\"text-base leading-relaxed text-secondary\">任何其他退出代码 — 向您显示但不会停止任何操作的非阻塞错误。</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">这就是执行硬性规则的方式。阻止写入生产配置目录。阻止包含 rm -rf 的 bash 命令。块提交到 main.无论你的团队需要什么，都需要保证，而不是建议。</p>\n<p class=\"text-base leading-relaxed text-secondary\"><img src=\"/assets/media/6749d1e1eb639dbc9d9532162c45f182aa63b60e4c6fc633e1d32f7780324234.jpg\" alt=\"A settings.json file showing PreToolUse and PostToolUse hooks with matchers and commands\" loading=\"lazy\" class=\"my-md h-auto max-w-full rounded-lg \"></p>"
      },
      {
        "id": "sec-5",
        "title": "与您的团队共享 Hooks 自动化钩子机制 ",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">.claude/settings.json 中配置的 Hooks 自动化钩子机制 是项目级别的，可以签入您的存储库。这意味着您的整个团队会自动获得相同的钩子。在命令中使用 CLAUDE_PROJECT_DIR 环境变量来引用存储在项目中的脚本，这样无论 Claude 当前的工作目录如何，它们都可以正常工作。</p>"
      },
      {
        "id": "sec-6",
        "title": "回顾",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">Hooks 自动化钩子机制 使您能够确定性地控制 Claude Code 的行为。使用 PostToolUse 进行自动格式化和记录。使用 PreToolUse 阻止危险操作。使用 /hooks 或在 settings.json 中配置它们。并将它们签入您的存储库，以便您的团队也获得它们。</p>\n<p class=\"text-base leading-relaxed text-secondary\">如果某件事需要每次都发生，不要将其放入提示中。把它放在钩子里。</p>"
      }
    ],
    "prevLesson": {
      "slug": "mcp",
      "title": "连接 MCP 协议 协议"
    },
    "nextLesson": {
      "slug": "course-quiz",
      "title": "课程结业测验"
    }
  },
  "course-quiz": {
    "lessonId": "course-quiz",
    "lessonTitle": "课程结业测验",
    "lessonIndex": 12,
    "totalLessons": 13,
    "duration": "5 分钟",
          "outcomes": [
        "通过测验，检验对 Claude Code 101 核心知识的掌握"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-is-claude-code",
        "title": "1. Claude Code 是什么？ 最初智能体定位",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "how-claude-code-works",
        "title": "2.Claude Code工作原理解析",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "installing-claude-code",
        "title": "3. 安装与认证配置指南",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "your-first-prompt",
        "title": "4. 发送你的第一个智能体编程指令",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "the-explore-plan-code-commit-workflow",
        "title": "5. 探索→计划→代码→提交工作流程",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "context-management",
        "title": "6. 上下文与 Token 预算控制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "code-review",
        "title": "7. 代码审查与自动化质量审计",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "the-claude-md-file",
        "title": "8. CLAUDE.md 项目规范文件深度实战",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "subagents",
        "title": "9. Subagents 子智能体",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "skills",
        "title": "10. Skills 自定义技能",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "mcp",
        "title": "11.MCP（模型上下文协议）协议",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "hooks",
        "title": "12. Hooks 自动化钩子机制 ",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "course-quiz",
        "title": "13. 课程结业测验",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
        "sections": [
      {
        "id": "sec-0",
        "title": "知识自测",
        "contentHtml": "<p>通过以下问题检验你对 Claude Code 101 核心知识的掌握。</p>"
,
        "quiz": {
          "id": "quiz-1",
          "title": "知识自测",
          "options": [
            { "id": "a", "text": "一个能直接读写代码、运行命令、提交 git 的智能体式编程工具", "isCorrect": true, "explanation": "Claude Code 直接在代码库中工作：读取代码、编写与修改、运行命令、创建提交。" },
            { "id": "b", "text": "一个只能生成代码建议的聊天插件", "isCorrect": false, "explanation": "Claude Code 是执行型工具，不止是建议。" },
            { "id": "c", "text": "一个 CI/CD 持续集成平台", "isCorrect": false, "explanation": "CI/CD 平台是另一类工具。" }
          ],
          "generalExplanation": "Claude Code 是能在代码库中自主工作的智能体式编程工具。"
        }
      },
      {
        "id": "sec-1",
        "title": "知识自测",
        "contentHtml": "<p>继续回答下面的问题。</p>"
,
        "quiz": {
          "id": "quiz-2",
          "title": "知识自测",
          "options": [
            { "id": "a", "text": "定义 Claude 在本项目的指令与约定，让 Claude 遵循项目规范", "isCorrect": true, "explanation": "CLAUDE.md 是项目级指令文件，让 Claude 按团队约定工作。" },
            { "id": "b", "text": "存储用户的登录凭证", "isCorrect": false, "explanation": "CLAUDE.md 是指令文件，不是凭证存储。" },
            { "id": "c", "text": "Vite 的构建配置文件", "isCorrect": false, "explanation": "那是 vite.config，不是 CLAUDE.md。" }
          ],
          "generalExplanation": "CLAUDE.md 用项目约定引导 Claude 的行为。"
        }
      },
      {
        "id": "sec-2",
        "title": "知识自测",
        "contentHtml": "<p>继续回答下面的问题。</p>"
,
        "quiz": {
          "id": "quiz-3",
          "title": "知识自测",
          "options": [
            { "id": "a", "text": "子代理拥有独立上下文窗口，在隔离上下文中工作后返回摘要", "isCorrect": true, "explanation": "子代理在自己的上下文窗口运行，中间步骤不污染主会话。" },
            { "id": "b", "text": "子代理与主会话共享全部上下文", "isCorrect": false, "explanation": "恰恰相反——子代理是隔离的。" },
            { "id": "c", "text": "子代理只能做研究不能改代码", "isCorrect": false, "explanation": "子代理可以做各种委派任务。" }
          ],
          "generalExplanation": "子代理通过隔离上下文实现任务委派与上下文整洁。"
        }
      },
      {
        "id": "sec-3",
        "title": "知识自测",
        "contentHtml": "<p>继续回答下面的问题。</p>"
,
        "quiz": {
          "id": "quiz-4",
          "title": "知识自测",
          "options": [
            { "id": "a", "text": "在工具调用前阻止或改写动作，强制执行规则", "isCorrect": true, "explanation": "PreToolUse 是强制执行原语，可在动作发生前拦截或改写。" },
            { "id": "b", "text": "只能用于自动格式化代码", "isCorrect": false, "explanation": "格式化只是 hooks 的用途之一。" },
            { "id": "c", "text": "只能输出日志", "isCorrect": false, "explanation": "hooks 能阻止、改写、把关回合，远不止日志。" }
          ],
          "generalExplanation": "Hooks 用确定性代码把「通常遵循」变成「无法跳过」。"
        }
      }
    ],
    "prevLesson": {
      "slug": "hooks",
      "title": "Hooks 自动化钩子机制 "
    }
  }
};
