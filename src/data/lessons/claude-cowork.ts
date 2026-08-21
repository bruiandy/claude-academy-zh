import { LessonLayoutProps } from '../../components/LessonLayout';

export const CLAUDE_COWORK_LESSONS: Record<string, Omit<LessonLayoutProps, 'courseId' | 'courseTitle'>> = {
  "what-is-cowork": {
    "lessonId": "what-is-cowork",
    "lessonTitle": "什么是Claude Cowork",
    "lessonIndex": 0,
    "totalLessons": 14,
    "duration": "8 分钟",
    "outcomes": [
      "定义 Claude Cowork 并解释了什么是与 Claude 合作的不同方式",
      "了解 Cowork，就像 Claude 在您的环境中一样工作 — 使用您的文件、应用程序和工具",
      "区分聊天、协作和代码，并知道什么时候该使用哪一个",
      "什么是Claude Cowork"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-is-cowork",
        "title": "1.什么是Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "getting-set-up",
        "title": "2.设置Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "scheduled-tasks",
        "title": "3. Claude Cowork 震惊您做什么",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "the-task-loop",
        "title": "4. 将你的第一个任务迁移 Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "research-analysis-at-scale",
        "title": "5.更快获得更好的结果",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "giving-cowork-context",
        "title": "6. 常设背景：全球指令和项目",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "file-document-tasks",
        "title": "7. Plugins 插件：以你的方式教 Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "plugins-cowork-as-a-specialist",
        "title": "8. 插件：编码团队的专业知识",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "claude-in-chrome",
        "title": "9. 浏览器协同与网页动态交互",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "claude-for-microsoft-365",
        "title": "10.集成Microsoft 365办公生态",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "permissions-usage-choosing-your-model",
        "title": "11. 安全工作的最佳实践",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "validating-skills-for-plugins",
        "title": "12. 插件技能校验与安全性审计",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "share-what-you-build-with-your-team",
        "title": "13. 与团队共享成果与工作流资产",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "14",
        "slug": "troubleshooting-next-steps",
        "title": "14. 总结和后续步骤",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "协同办公简介",
        "contentHtml": "<p class=\"text-body font-medium\">Cowork 简介：为您提供 Claude Code 的其余工作</p>\n<p class=\"text-base leading-relaxed text-secondary\">该视频介绍了 Claude Cowork 及其构建的工作类型。\n注意 Cowork 的功能：不是作为一个更智能的聊天机器人，而是作为一个不同的机器人\n完全与Claude合作的方式。</p>"
      },
      {
        "id": "sec-1",
        "title": "核心要点",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">Cowork 是 Claude 为工作而打造的，而不仅仅是答案。它会在您工作的地方满足您的需要 — 无论是在您的本地计算机、云应用程序还是您的浏览器上。</li>\n<li class=\"text-base leading-relaxed text-secondary\">和谐工作就是委派。聊天仍然是你大声思考、起草或提问的地方。 Cowork 增加了一些新功能：描述结果并让 Claude 计划、执行和交付整个事情的能力。</li>\n<li class=\"text-base leading-relaxed text-secondary\">Cowork 专为多步骤、长时间运行的工作和构建。跨越多个工具、需要一段时间才能完成并以真正的工件结束的任务 — Cowork 旨在端到端地处理整个弧线。</li>\n<li class=\"text-base leading-relaxed text-secondary\">您控制掌控。 Claude 在开始之前向您展示其计划，默认情况下会在采取重要操作（发送、删除、共享）之前进行询问，并让您随时掌控。</li>\n</ul>"
      },
      {
        "id": "sec-2",
        "title": "Cowork到底是什么",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">Cowork 是 Claude 桌面端的一种任务执行模式，Claude 可以与您一起执行任务。您将其指向计算机上的一个文件夹，连接您工作所在的应用程序（Gmail、Slack、Google）驱动、您的日历），然后描述您想要完成的操作。Claude制定计划，完成各个步骤，使用所需的工具和文件，然后将真正的可交付成果保存到您的文件夹中。您还可以在云中运行Cowork（测试版本，符合资格的计划），以从网络和Claude移动应用程序启动和检查任务。</p>\n<p class=\"text-base leading-relaxed text-secondary\">最重要的思维模式：和谐工作是指授权，而不仅仅是聊天。聊天仍然非常强大——在这里你可以思考问题、起草和完善、集思广益、提出问题，并让Claude作为参谋。 Cowork 并不能取代这一切。它增加了一些新功能：能够将整个工作交给 Claude - 背景收集、分析、文件生成、工具使用 - 并让其完成。</p>\n<p class=\"text-base leading-relaxed text-secondary\">这是Cowork新用户要做的最大的转变，必须真正实现这个转变。大多数人的第一本能（来自聊天）是输入问题，查看返回的内容，输入后续内容，然后进行迭代。这在Cowork中也适用，但当你使用它来完成你通常自己做的工作时，你会充分利用它，而不是你通常会询问的工作。</p>\n<p class=\"text-base leading-relaxed text-secondary\">但两者之间的差异比这更大。从机制上讲，聊天是轮流进行的。它可以从您的工具中拉取，但您可以自己将步骤拼凑在一起。它是专门用于有限的交流和快速思考和构建的。另外，Cowork 维持整个工作：它同时从工具中取出，运行多个步骤计划，并返回最终的输出。这是上传到聊天的缺口无法完全恢复的。</p>\n<p class=\"text-base leading-relaxed text-secondary\">您可以在下面了解什么是出色的协同工作任务。</p>"
      },
      {
        "id": "sec-3",
        "title": "Cowork如何在您的环境中发挥作用",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">Cowork 在您的环境中发挥作用。不相邻。</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">在你的文件上 - Claude读取你指向的文件夹中的内容，将完成的输出写回。</li>\n<li class=\"text-base leading-relaxed text-secondary\">在您的应用程序中 — Claude 从您连接的电子邮件、日历、消息、驱动器、CRM 中提取上下文。</li>\n<li class=\"text-base leading-relaxed text-secondary\">在您的浏览器中 - 对于没有连接器的 Web 工具，浏览器与网页动态交互良好地读取页面本身并进行操作：仪表板、门户或登录后的任何内容。</li>\n<li class=\"text-base leading-relaxed text-secondary\">使用你的工具——Claude采取行动，而不仅仅是描述要做什么。</li>\n</ul>"
      },
      {
        "id": "sec-4",
        "title": "聊天、协作、代码",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">现在您已经了解了 Cowork 是什么，请花点时间看看它如何与您在桌面应用程序中与 Claude 合作的其他两种方式（聊天和 Claude Code）相结合。</p>\n<p class=\"text-base leading-relaxed text-secondary\">这种模式是针对不同类型的工作而构建的。聊天是轮流对话——快速交流、集思广益、探索性思维，一次一种工具。 Cowork 协同办公就是您刚刚读到的内容：在一个工作空间中，Claude可以使用多种工具，随着时间的推移维持工作并产生最终的输出。 Code 是一个完整的开发环境，在您的代码库中运行，具有终端和 git 访问权限，专为编写和发布软件的开发人员而构建。</p>\n<p class=\"text-base leading-relaxed text-secondary\">下面的交互分为两部分：三向比较，以便您一目了然地看到所有三个部分，以及六任务挑战，要求您为每个场景选择正确的模式。</p>\n<p class=\"text-base leading-relaxed text-secondary\">回顾一下：聊天是为了与 Claude 一起思考。Cowork 是为了委托给 Claude。代码是为了与 Claude 一起构建软件。大多数知识工作者将生活在 Chat 和 Cowork 中——并将它们用于非常不同的事情。</p>"
      },
      {
        "id": "sec-5",
        "title": "课后反思",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">想想你最近完成的一项任务，其中的价值在于做，而不仅仅是思考。也许它跨越了多种工具。也许它最终形成了您手工组装的可交付成果。也许您每周都会做一些事情，您希望利用人工智能来为您处理。</p>\n<p class=\"text-base leading-relaxed text-secondary\">坚持该任务 - 当您开始确定自己的协同工作时，您可以在第 3 课中返回该任务，并在第 4 课中委派第一个实际任务时再次返回该任务。</p>"
      },
      {
        "id": "sec-6",
        "title": "接下来是什么",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在下一课中，您将设置 Cowork：安装桌面应用程序，将 Claude 指向工作文件夹，添加您的第一个连接器，并了解使您能够控制 Cowork 可以执行的操作的权限模型。</p>"
      }
    ],
    "nextLesson": {
      "slug": "getting-set-up",
      "title": "Setting up Claude Cowork"
    }
  },
  "getting-set-up": {
    "lessonId": "getting-set-up",
    "lessonTitle": "Claude Cowork",
    "lessonIndex": 1,
    "totalLessons": 14,
    "duration": "8 分钟",
    "outcomes": [
      "在Claude Desktop应用程序中打开Cowork将其指向工作文件夹",
      "连接您工作所在的应用程序",
      "在做之前了解 Claude 要求的内容以及没有要求的内容，这样您就可以放心地交接工作",
      "Claude Cowork"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-is-cowork",
        "title": "1.什么是Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "getting-set-up",
        "title": "2.设置Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "scheduled-tasks",
        "title": "3. Claude Cowork 震惊您做什么",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "the-task-loop",
        "title": "4. 将你的第一个任务迁移 Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "research-analysis-at-scale",
        "title": "5.更快获得更好的结果",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "giving-cowork-context",
        "title": "6. 常设背景：全球指令和项目",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "file-document-tasks",
        "title": "7. Plugins 插件：以你的方式教 Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "plugins-cowork-as-a-specialist",
        "title": "8. 插件：编码团队的专业知识",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "claude-in-chrome",
        "title": "9. 浏览器协同与网页动态交互",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "claude-for-microsoft-365",
        "title": "10.集成Microsoft 365办公生态",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "permissions-usage-choosing-your-model",
        "title": "11. 安全工作的最佳实践",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "validating-skills-for-plugins",
        "title": "12. 插件技能校验与安全性审计",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "share-what-you-build-with-your-team",
        "title": "13. 与团队共享成果与工作流资产",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "14",
        "slug": "troubleshooting-next-steps",
        "title": "14. 总结和后续步骤",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "安装协同办公",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">您可以在 Mac 和 Windows 上的 Claude Desktop 桌面应用中运行 Cowork，也可以通过网络和 Claude 移动应用程序在云中（测试版本，符合资格的计划）运行 Cowork。本课程将桌面介绍上的设置，Claude 可以在桌面上直接处理本地文件。如果您还没有该应用程序，请从 claude.com/download（在新选项卡中打开）安装它，打开它，登录，然后选择 Cowork。如果 Cowork 不可见，您可能需要付费计划或更新版本的桌面应用程序。帮助中心的开始使用 Claude Cowork（在新选项卡中打开）文章逐步完成设置。</p>"
      },
      {
        "id": "sec-1",
        "title": "Claude指着一个文件夹",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">单击提示栏中的项目或文件夹中的工作，然后选择计算机上的一个文件夹。这是您为每个新任务所做的最重要的设置选择，因为文件夹是工作所在的位置。 Claude 读取里面的每个文件（Word 文档、Excel 文件、PDF、PowerPoint，等等）并将完成的输出保存回同一位置。</p>\n<p class=\"text-base leading-relaxed text-secondary\">选择一个仅限于一个项目或工作流的文件夹。 Claude 不需要访问您的整个文档文件夹，只需访问包含任务所需文件的文件夹即可。请参阅下面的交互示例。</p>\n<p class=\"text-base leading-relaxed text-secondary\">该文件夹是 Cowork 具有读写访问权限的位置。它可以打开您的文件、编辑它们、创建新文件并组织它们。这是与 Chat 的主要区别：在 Chat 中，Claude 可以读取您上传的内容，但无法将任何内容保存回您的计算机 - 在 Cowork 中，Claude 可以。</p>\n<p class=\"text-base leading-relaxed text-secondary\">选择一个具有正确上下文的真实文件夹。当文件夹具有您正在执行的操作的上下文（源材料、相关文档、模板）时，Cowork 效果最佳。</p>\n<p class=\"text-base leading-relaxed text-secondary\">基于云的文件的行为有所不同。云连接器让 Claude 执行的操作各不相同。许多连接器（例如默认的 Google Drive 和 M365）连接器）只能读取和搜索。其他人也可以创建或编辑。要确认连接器的功能，请在每次启用连接器时检查其描述。您的工作文件夹是Claude直接编辑文件的位置，因此是构建和修改文档的位置。云中的会话到达您的连接器，而不是您计算机上的文件夹，当文件位于您的计算机上时，从桌面开始文件工作。</p>"
      },
      {
        "id": "sec-2",
        "title": "添加连接器",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">连接器是 Claude 访问您已经进行工作的应用程序的方式 - 您的电子邮件、您的日历、您的团队消息工具、您的 CRM、您的云存储。您可以在“自定义”中设置一次区域，然后您可以关闭/打开每个任务所需的连接器。</p>\n<p class=\"text-base leading-relaxed text-secondary\">大多数人首先设置的连接器：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">电子邮件和日历（通过 M365 或 Gmail 的 Outlook）——用于从会议中提取背景信息、起草后续行动、查找过去的线索</li>\n<li class=\"text-base leading-relaxed text-secondary\">消息传递（Slack 或 Teams 通过 M365）— 用于搜索频道历史记录并综合您的团队所说的内容</li>\n<li class=\"text-base leading-relaxed text-secondary\">云存储（SharePoint 或 OneDrive via Microsoft 365、Google Drive、Box）— 用于访问本地计算机上的文档</li>\n<li class=\"text-base leading-relaxed text-secondary\">CRM 和项目工具 — Notion、HubSpot、Asana、Linear 等，具体取决于您的团队使用的内容以及实际数据所在的位置</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">一旦连接器打开，您就会在提示中自然地引用它。“查看团队在 Slack 中关于发布的内容”或“查找上个季度的客户后续电子邮件”——Claude 知道该去哪里查找。</p>\n<p class=\"text-base leading-relaxed text-secondary\">尝试下面的互动，看看将Claude与您的工作联系起来的力量。</p>\n<p class=\"text-base leading-relaxed text-secondary\">对于没有连接器的工具的注意事项：对于内部仪表板、供应商门户或登录后的Web应用程序，浏览器与网页动态交互是桥梁。它是一个浏览器扩展，可让 Claude 直接阅读页面并与页面交互。我们将在模块 3 中介绍它 - 现在，只需知道“无连接器”并不意味着数据无法访问。 （请注意，浏览器良好与网页动态交互在某些企业计划中可能不可用。）</p>"
      },
      {
        "id": "sec-3",
        "title": "权限模型",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">当您选择一个文件夹时，您将自动授权 Claude 在其中读取和写入。对于该文件夹内的任务，Cowork有两种权限模式。在默认设置中——“行动前先询问”——Claude在每一个涉及到的行动都会暂停一下，等待你的同意：发送电子邮件、发布消息、共享文件。在“询问即可采取行动”中，它不会因这些而暂停，仅针对您信任的工具和任务切换到它。两种模式中有一件事是不变的：Claude总是在永久删除文件询问之前，并且该提示无法跳过。</p>\n<p class=\"text-base leading-relaxed text-secondary\">所有这一切的要点是：你可以交给Claude一项重要的工作，知道它不会采取令你惊讶的行动。这就是“授权，而不仅仅是聊天”的实际感觉——它之所以有效，是因为权限模型在后台进行真正的工作。</p>"
      },
      {
        "id": "sec-4",
        "title": "立即尝试",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">理解这一点最好的方法就是行动。在继续委派一个小任务之前——既可以确认你的设置是否有效，也可以感受共同努力的。</p>\n<p class=\"text-base leading-relaxed text-secondary\">第 1 步 — 选择一个包含实际作品的文件夹。 让 Claude 指向一个实际项目：一个客户帐户、一个您正在处理的可交付成果、一个您本周要使用的文件夹。如果您还不想让 Claude 指向活动文件夹，请将内容复制到新文件夹中并使用它。只要确保使用真实材料，而不是玩具文件。协同工作的有用性取决于其所处的环境，而我们的目标就是感受这一点。</p>\n<p class=\"text-base leading-relaxed text-secondary\">第 2 步 — 连接一个应用程序。从您大部分工作环境所在的应用程序开始。对于许多用户来说，电子邮件和云存储（例如 Google Drive、Box、M365）是价值最高的第一个连接器。</p>\n<p class=\"text-base leading-relaxed text-secondary\">第 3 步 — 让 Claude 总结一下文件夹的内容。比如：</p>\n<p class=\"text-base leading-relaxed text-secondary\">查看此文件夹中的所有内容，然后给我写一份关于您所学到的内容的摘要 - 文件夹中的内容、文档之间的相互关系、任何令人惊讶的见解或您认为与共享相关的其他信息。</p>\n<p class=\"text-base leading-relaxed text-secondary\">第 4 步 — 阅读摘要并根据您自己的知识进行核对。Claude发现了哪些您可能错过的内容？它错过了什么或出错了？什么让你感到惊讶？</p>"
      },
      {
        "id": "sec-5",
        "title": "接下来是什么",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在下一课中，您将学习如何识别日常工作中最适合协同工作的工作——要寻找的模式，以及如何将您自己的工作流程映射到这些模式。最后，您将挑选出一个特定的任务并准备好委派。</p>"
      }
    ],
    "prevLesson": {
      "slug": "what-is-cowork",
      "title": "What is Claude Cowork"
    },
    "nextLesson": {
      "slug": "scheduled-tasks",
      "title": "What Claude Cowork can do for you"
    }
  },
  "scheduled-tasks": {
    "lessonId": "scheduled-tasks",
    "lessonTitle": "Claude Cowork 崩溃您做什么",
    "lessonIndex": 2,
    "totalLessons": 14,
    "duration": "8 分钟",
    "outcomes": [
      "查找适合Cowork的清晰工作模式：多步骤、基于文件、多工具",
      "使用 /schedule 设置计划任务",
      "在云中运行Cowork任务（测试版本，符合资格的计划），并通过手机或任何浏览器启动或检查它们",
      "Claude Cowork 崩溃您做什么"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-is-cowork",
        "title": "1.什么是Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "getting-set-up",
        "title": "2.设置Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "scheduled-tasks",
        "title": "3. Claude Cowork 震惊您做什么",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "the-task-loop",
        "title": "4. 将你的第一个任务迁移 Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "research-analysis-at-scale",
        "title": "5.更快获得更好的结果",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "giving-cowork-context",
        "title": "6. 常设背景：全球指令和项目",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "file-document-tasks",
        "title": "7. Plugins 插件：以你的方式教 Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "plugins-cowork-as-a-specialist",
        "title": "8. 插件：编码团队的专业知识",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "claude-in-chrome",
        "title": "9. 浏览器协同与网页动态交互",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "claude-for-microsoft-365",
        "title": "10.集成Microsoft 365办公生态",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "permissions-usage-choosing-your-model",
        "title": "11. 安全工作的最佳实践",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "validating-skills-for-plugins",
        "title": "12. 插件技能校验与安全性审计",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "share-what-you-build-with-your-team",
        "title": "13. 与团队共享成果与工作流资产",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "14",
        "slug": "troubleshooting-next-steps",
        "title": "14. 总结和后续步骤",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "是什么让任务适合 Claude Cowork",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">并非所有任务都适合 Cowork，当您能够识别适合的任务时，您会获得更多收益。透明模式讲述了 Cowork 的大部分工作：需要多个步骤的任务、利用真实文件上下文的任务以及前面您已使用的工具的任务。</p>\n<p class=\"text-base leading-relaxed text-secondary\">模式1：任务是多步骤的。如果一个任务需要几个步骤，那么它很适合Cowork。在一次提示中，Claude收集背景信息，比较来源，进行额外的研究，起草一份摘要，并格式化可交付成果。有了Cowork，你可以把整个弧线交给Claude。</p>\n<p class=\"text-base leading-relaxed text-secondary\">示例：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">将一周的客户反馈电子邮件分类为主题，并为每个主题提供示例引用</li>\n<li class=\"text-base leading-relaxed text-secondary\">从三个报告和一个电子表格中提取数据，然后将它们组装到一个交互式仪表板中</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">模式 2：任务存在于计算机上的真实文件中。 当任务的目标是输出真实的工件（Word 文档、电子表格、幻灯片、PDF）时，Cowork 非常适合以您需要的格式保存。输入也是真实的：Claude读取文件夹中的现有文件，编辑它们，然后将更改保存回来。聊天可以产生新的文档； Cowork 可处理您已有的文件。</p>\n<p class=\"text-base leading-relaxed text-secondary\">示例：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">从标准模板和会议记录中提取的格式化客户提案</li>\n<li class=\"text-base leading-relaxed text-secondary\">由原始电子表格组装而成的每月指标报告，并附有图表</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">模式 3：任务涵盖多种工具。 这项工作涉及您已经运行的系统 - Gmail、Slack、M365 套件、您的日历、您的 CRM。 Claude 通过您的连接器（将 Claude 连接到您的应用程序的集成）访问它们，收集上下文并采取行动。 Chat 也连接到工具 - 不同之处在于 Cowork 对它们进行规划，并将整个序列作为一个委托运行，而不是一次一个提示地将步骤缝合在一起。</p>\n<p class=\"text-base leading-relaxed text-secondary\">示例：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">会议结束后，根据日历邀请、参与者列表和会议记录在 Outlook 中建立后续电子邮件</li>\n<li class=\"text-base leading-relaxed text-secondary\">在 Slack 中搜索团队所说的有关发布的所有信息，并将其综合到更新中</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">探索下面的交互，了解 Cowork 在此透明模式中的表现方式。</p>\n<p class=\"text-base leading-relaxed text-secondary\">所有不同模式的主线都是相同的：过去需要在您自己的大脑中处理步骤、文件和工具的工作现在可以作为项目任务进行交付。当您发现该形状时，将其关联起来。</p>"
      },
      {
        "id": "sec-1",
        "title": "定时与循环任务调度：让Claude按节奏工作",
        "contentHtml": "<p class=\"text-body font-medium\">Cowork中的计划任务：设置一次，Claude处理剩余的事情</p>\n<p class=\"text-base leading-relaxed text-secondary\">该视频演示了桌面应用程序中的调度，其中任务运行\n当您的计算机打开时。计划任务运行的位置 - 包括什么\n当您在云中运行 Cowork 时发生的变化 - 如下所述。</p>\n<p class=\"text-base leading-relaxed text-secondary\">定时与循环任务调度让您设置一次任务并让 Claude 按节奏运行它。</p>\n<p class=\"text-base leading-relaxed text-secondary\">您有两种方法可以设置计划任务。可以重新开始：输入 /schedule，然后任务和节奏，Claude 图纸提示提供您查看并接受。或者 - 更自然的路径 - 在 Cowork 中一次执行任务，确认输出看起来正确，然后输入 /schedule 告诉目标将的过程变成重复的过程。Claude 您的节奏（今晚、每天、日常手动或），查看提示并接受。</p>\n<p class=\"text-base leading-relaxed text-secondary\">您任务的运行位置取决于Cowork的运行位置。通过在云中运行Cowork，计划任务会在设定的时间在云中运行-您的计算机不需要打开，并且任务通过云连接器而不是计算机上的文件夹进行工作。当Cowork在桌面上运行时，计划任务会在您的计算机打开且Claude运行时运行；如果您的笔记本电脑在预定时间关闭、处于睡眠状态或关闭，Claude会在您回来后立即继续该任务，并告知您该任务已延迟。计划任务会在创建的位置继续运行- 您在桌面上设置的任务将保留在桌面上。</p>\n<p class=\"text-base leading-relaxed text-secondary\">一些值得安排的想法：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">周五下午回顾：本周发布的内容、Slack 或 Teams 中做出的主要决策的回顾以及下周任务的预览</li>\n<li class=\"text-base leading-relaxed text-secondary\">每月一号从电子表格中提取的每月指标汇总</li>\n<li class=\"text-base leading-relaxed text-secondary\">日历上会议的早间简报，利用文件夹中过去的会议记录和电子邮件线程来显示必要的背景信息</li>\n</ul>"
      },
      {
        "id": "sec-2",
        "title": "在云端运行 Cowork：远离办公桌工作",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">其中，我们已经介绍了您在办公桌上启动的任务以及 Claude 按计划运行的任务。在云中运行 Cowork 讲述了第三种情况：您在远离计算机时开始工作。</p>\n<p class=\"text-base leading-relaxed text-secondary\">当您在云中运行 Cowork 时，您可以在 Web 上和 Claude 移动应用程序中使用任何 Cowork：从手机启动任务，从浏览检查器任务，然后在表格上您获取交付成果。该会话在云中运行，而不是在桌面上运行，因此不会留下任何内容或保持清醒。</p>\n<p class=\"text-base leading-relaxed text-secondary\">在依赖它之前需要了解两件事。首先，云中的会话到达您的连接器，而不是您计算机上的文件夹 - 如果任务需要仅存在于您的计算机上的文件，请从桌面应用程序启动它。其次，你启动任务的地方就是它运行的地方：从网络或 Claude 移动应用程序启动它，它在云端运行；从桌面应用程序启动它，它会在您的桌面上运行，并包含您的本地文件夹 - 并且需要您的计算机处于打开状态。会话保留在其开始的位置 - 要更改工作发生的位置，请开始新的会话。</p>\n<p class=\"text-base leading-relaxed text-secondary\">示例：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">在其中，您记得今天的客户电话需要一份上季度支持票的一页摘要。通过手机上的 Claude 应用程序，要求 Cowork 从连接的支持工具中提取该季度的方案并起草单页纸。当你上下班时就开始了；当你坐在办公桌前时，你会审阅草稿。</li>\n<li class=\"text-base leading-relaxed text-secondary\">当您不在现场时，供应商会发送修订后的合同条款。通过您的手机，让 Cowork 将它们与云端硬盘中去年的协议进行比较，并列出所有更改。完成后，通过手机或任何浏览器阅读比较。</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">如果您还没有在云中使用 Cowork，随着测试版本的推出，其可用性会因计划和您的组织而异。</p>"
      },
      {
        "id": "sec-3",
        "title": "将其整合在一起",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">步骤多、基于文件、多工具——这些模式告诉您什么值得转移。定时与轮换任务调度和云端的 Cowork 会告诉您何时可以进行切换。判断由您决定：Claude 决定、执行和提出要求。您可以发送、共享或运送什么内容。</p>"
      },
      {
        "id": "sec-4",
        "title": "课后反思",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">查看本周的日历或待办事项列表。选择一件与上述三种模式（多步骤、文件生成或工具使用）中的一种或多种模式相匹配的作品。把它写下来。您将在第 4 课中将其交给 Claude。</p>"
      },
      {
        "id": "sec-5",
        "title": "接下来是什么",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在下一课中，您将逐步完整地委派该任务 - 从提示到完成可交付成果。</p>"
      }
    ],
    "prevLesson": {
      "slug": "getting-set-up",
      "title": "Setting up Claude Cowork"
    },
    "nextLesson": {
      "slug": "the-task-loop",
      "title": "Hand Claude Cowork your first task"
    }
  },
  "the-task-loop": {
    "lessonId": "the-task-loop",
    "lessonTitle": "Claude Cowork 你的第一个任务",
    "lessonIndex": 3,
    "totalLessons": 14,
    "duration": "8 分钟",
    "outcomes": [
      "协同工作任务：通过委派、任务分级指导和最终审查",
      "以产生更好输出的方式回答 Cowork 的明确问题",
      "当Claude走错方向时纠正路线",
      "Claude Cowork 你的第一个任务"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-is-cowork",
        "title": "1.什么是Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "getting-set-up",
        "title": "2.设置Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "scheduled-tasks",
        "title": "3. Claude Cowork 震惊您做什么",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "the-task-loop",
        "title": "4. 将你的第一个任务迁移 Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "research-analysis-at-scale",
        "title": "5.更快获得更好的结果",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "giving-cowork-context",
        "title": "6. 常设背景：全球指令和项目",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "file-document-tasks",
        "title": "7. Plugins 插件：以你的方式教 Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "plugins-cowork-as-a-specialist",
        "title": "8. 插件：编码团队的专业知识",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "claude-in-chrome",
        "title": "9. 浏览器协同与网页动态交互",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "claude-for-microsoft-365",
        "title": "10.集成Microsoft 365办公生态",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "permissions-usage-choosing-your-model",
        "title": "11. 安全工作的最佳实践",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "validating-skills-for-plugins",
        "title": "12. 插件技能校验与安全性审计",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "share-what-you-build-with-your-team",
        "title": "13. 与团队共享成果与工作流资产",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "14",
        "slug": "troubleshooting-next-steps",
        "title": "14. 总结和后续步骤",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "观看一个完整的过程",
        "contentHtml": "<p class=\"text-body font-medium\">Claude Cowork 你的第一个任务</p>\n<p class=\"text-base leading-relaxed text-secondary\">该视频介绍了从代表团到\n可交付成果：提示、Claude提出的澄清问题、时机\n用户在任务中间重新安排路线，并在最后完成结果。注意\n节奏——这不像提示聊天机器人，而更像是向智能人通报情况\n即将消失在任务中并带着一些东西回来的同事\n完成了。</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">大多数重要的任务都是从一两个澄清问题开始的。问题是Claude如何在工作开始之前缩小背景差距，而不是途中的摩擦。</li>\n<li class=\"text-base leading-relaxed text-secondary\">您可以在任务中进行引导。如果 Claude 的方向错误，请加入。您不必等待它完成并重新开始。</li>\n<li class=\"text-base leading-relaxed text-secondary\">完成的可交付成果是工件，而不是聊天。Claude对计算机上的文件进行更改。最后你的工作就是像评审同事的工作一样评审它。</li>\n</ul>"
      },
      {
        "id": "sec-1",
        "title": "委派你的第一个任务",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">您在之前的课程中选择了一个任务。现在它离开您托盘的时候了。打开Cowork，将其指向任务上下文所在的文件夹，打开保存任务相关上下文的任何连接器，然后编写提示。</p>\n<p class=\"text-base leading-relaxed text-secondary\">一个好的Cowork提示符可以实现三件事：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">实现可交付成果。“一页简报”、“QBR 的幻灯片”、“带有每个候选人注释的排名列表”。有关格式和长度的详细信息可以帮助您节省重新生成的时间。</li>\n<li class=\"text-base leading-relaxed text-secondary\">命名输入。哪个文件夹、哪个频道、哪个日期范围、哪个应用程序。协同工作的好坏取决于您所指向的环境。</li>\n<li class=\"text-base leading-relaxed text-secondary\">“我希望看到基本情况、最佳情况和最坏情况，这些情况也考虑到我们去年第三季度的 3 个新店。”这句话指导Claude您正在寻找的输出类型，并提供了Claude可能看不到的专业知识的关键见解。</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">在下面的交互中构建示例 Cowork 提示。</p>\n<p class=\"text-base leading-relaxed text-secondary\">如果您习惯于提示聊天机器人，这会感觉像是更多的前期工作——确实如此。交易是更多的来回发生在Claude开始之前，而不是五轮“实际上，你也可以……”</p>"
      },
      {
        "id": "sec-2",
        "title": "回答澄清问题",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在开始工作之前，Claude会提出问题，以澄清有关您目标的任何模糊地点。在聊天中，您可以边进行边——协作上下会依次显示。在协同工作中，您委托，它会返回一个已完成的工件。任何可能绊倒它的事情——理解上的分歧——都会在任何深入研究之前通过问题来解决。</p>\n<p class=\"text-base leading-relaxed text-secondary\">大多数都很简单：Claude提供了几个选项，然后您单击适合的一个。如果没有一个选项适合，你可以用自己的话回答。</p>\n<p class=\"text-base leading-relaxed text-secondary\">以下是您提交上面构建的提示后可能会从 Cowork 收到的一些问题示例。</p>"
      },
      {
        "id": "sec-3",
        "title": "转向中期任务",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">观察Cowork的计划和细节情况。如果去掉了轨道——错误的来源、错误的格式、错误的语气——就打断。如果运行关闭，你还可以停止运行，优化提示，根据学到的内容重新开始。然后大多数人在聊天中的本能是等待完成响应，然后重新生成。解决这个问题。Cowork专为路线而构建，并且视觉的成本很低。</p>\n<p class=\"text-base leading-relaxed text-secondary\">引导下面的示例任务，看看Claude如何回应。</p>"
      },
      {
        "id": "sec-4",
        "title": "审查已完成的交付成果",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">Claude 完成后，您可以在应用程序中预览文件。该文件也在您的文件夹中，因此您可以打开它并在那里查看它。</p>\n<p class=\"text-base leading-relaxed text-secondary\">以阅读你信任但尚未完全了解的人的草稿的方式来审阅它 - 开启你的洞察力。需要检查的事项，尤其是前几次：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">或者它是否产生了与你要求的略有不同的东西？</li>\n<li class=\"text-base leading-relaxed text-secondary\">如果Claude引用事实或数据，请通过查看原始材料来确认它们是正确的。首先要求 Claude 识别它所提取的文档，然后自己检查它们。</li>\n<li class=\"text-base leading-relaxed text-secondary\">你无法追踪到输入的特定日期、名称或引用是一个标志，而不是一个功能。</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">如果草案基本正确，请告诉Claude要更改哪些内容，而不是重新开始。Claude记住对话并编辑的速度比重新生成的速度还要快。</p>\n<p class=\"text-base leading-relaxed text-secondary\">如果草稿在承重方式上是错误的，则提示缺少承重上下文。将Claude指向新的环境并要求其做出调整。</p>"
      },
      {
        "id": "sec-5",
        "title": "立即尝试",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">您完成第 3 课中确定的任务，或者现在选择一个。使用您刚刚经历过的将其迁移 Cowork — 上市可交付成果、输入以及任何评估流程差异；具体回答问题；如果没有则转向；带着您的洞察力来获取结果。第一次运行是教给您最多的一次。</p>"
      },
      {
        "id": "sec-6",
        "title": "接下来是什么",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">现在你已经开始了。在第 2 单元中，你将开始打造自己的 Cowork — 保持有效的环境、你想要重复的工作流程以及你的团队所依赖的专业知识，这样你就不会在每次开始一项任务时都重新提供它。</p>"
      }
    ],
    "prevLesson": {
      "slug": "scheduled-tasks",
      "title": "What Claude Cowork can do for you"
    },
    "nextLesson": {
      "slug": "research-analysis-at-scale",
      "title": "Get better results faster"
    }
  },
  "research-analysis-at-scale": {
    "lessonId": "research-analysis-at-scale",
    "lessonTitle": "更快获得更好的结果",
    "lessonIndex": 4,
    "totalLessons": 14,
    "duration": "8 分钟",
    "outcomes": [
      "列出使 Claude 随着时间的推移能够更好地完成工作的四个构建模块：全局说明、项目、技能和插件",
      "更快获得更好的结果"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-is-cowork",
        "title": "1.什么是Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "getting-set-up",
        "title": "2.设置Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "scheduled-tasks",
        "title": "3. Claude Cowork 震惊您做什么",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "the-task-loop",
        "title": "4. 将你的第一个任务迁移 Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "research-analysis-at-scale",
        "title": "5.更快获得更好的结果",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "giving-cowork-context",
        "title": "6. 常设背景：全球指令和项目",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "file-document-tasks",
        "title": "7. Plugins 插件：以你的方式教 Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "plugins-cowork-as-a-specialist",
        "title": "8. 插件：编码团队的专业知识",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "claude-in-chrome",
        "title": "9. 浏览器协同与网页动态交互",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "claude-for-microsoft-365",
        "title": "10.集成Microsoft 365办公生态",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "permissions-usage-choosing-your-model",
        "title": "11. 安全工作的最佳实践",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "validating-skills-for-plugins",
        "title": "12. 插件技能校验与安全性审计",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "share-what-you-build-with-your-team",
        "title": "13. 与团队共享成果与工作流资产",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "14",
        "slug": "troubleshooting-next-steps",
        "title": "14. 总结和后续步骤",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "Cowork 如何让您的工作变得更好",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在第 4 课中，您委派了一项任务并获得了真正的可交付成果。该模块添加的是复合部分：Claude对您、您的工作以及您的团队如何做事了解得越多，下一个交付成果就越好，并且您实现目标的速度就越快。</p>\n<p class=\"text-base leading-relaxed text-secondary\">四个构建模块可以实现这一目标。每一个都给了Claude一些可以发扬光大的东西，所以你曾经提供的背景会不断得到回报。</p>"
      },
      {
        "id": "sec-1",
        "title": "四个构建模块",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">您不会在第一天就从所有这四个方面开始。随着您在 Cowork 中工作的增长，您会发现哪些全局指令适用于每次对话。您将开始您的重复工作流程以及作为看到插件项目的意义。如果您发现自己多次向 Claude 解释过相同的工作流程，那么这些将是您掌握第一个技能的最佳机会。当您和您的团队完善这些时候，就会出现，因为您有值得分享的东西。</p>"
      },
      {
        "id": "sec-2",
        "title": "接下来是什么",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">接下来的三课将带您按顺序完成这些层。第 6 课涵盖全局指令和项目——大多数人首先设置的层。第 7 课和第 8 课涵盖了技能和插件，最后通过实践活动为您的工作安装了真正的插件。</p>"
      }
    ],
    "prevLesson": {
      "slug": "the-task-loop",
      "title": "Hand Claude Cowork your first task"
    },
    "nextLesson": {
      "slug": "giving-cowork-context",
      "title": "Standing context: Global instructions and projects"
    }
  },
  "giving-cowork-context": {
    "lessonId": "giving-cowork-context",
    "lessonTitle": "常设背景：全球指令和项目",
    "lessonIndex": 5,
    "totalLessons": 14,
    "duration": "8 分钟",
    "outcomes": [
      "设置全局说明，以便Claude在开始每个会话时就知道您的工作方式",
      "决定一项工作何时属于项目",
      "在启动项目的三种方式之间进行选择",
      "常设背景：全球指令和项目"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-is-cowork",
        "title": "1.什么是Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "getting-set-up",
        "title": "2.设置Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "scheduled-tasks",
        "title": "3. Claude Cowork 震惊您做什么",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "the-task-loop",
        "title": "4. 将你的第一个任务迁移 Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "research-analysis-at-scale",
        "title": "5.更快获得更好的结果",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "giving-cowork-context",
        "title": "6. 常设背景：全球指令和项目",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "file-document-tasks",
        "title": "7. Plugins 插件：以你的方式教 Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "plugins-cowork-as-a-specialist",
        "title": "8. 插件：编码团队的专业知识",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "claude-in-chrome",
        "title": "9. 浏览器协同与网页动态交互",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "claude-for-microsoft-365",
        "title": "10.集成Microsoft 365办公生态",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "permissions-usage-choosing-your-model",
        "title": "11. 安全工作的最佳实践",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "validating-skills-for-plugins",
        "title": "12. 插件技能校验与安全性审计",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "share-what-you-build-with-your-team",
        "title": "13. 与团队共享成果与工作流资产",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "14",
        "slug": "troubleshooting-next-steps",
        "title": "14. 总结和后续步骤",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "加入您的新合作者",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在聊天中，记忆会自行建立——打开它，Claude就会自动从你的对话中学习。良好的办公方式会有所不同。任务之间传递的上下文主要是你设置的上下文：全局指令，适用于每个协同工作会话和项目，Claude从你内部的对话中自动构建记忆。大多数人从全局说明开始，并将项目添加为重复的工作界面。</p>"
      },
      {
        "id": "sec-1",
        "title": "全球操作指南：适用于每个会话的简介",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">全球指示是一份常设简报。你在“设置”中编写一次它们，Claude就会在每次会话中引用它们——每次聊天、每个计划任务。</p>\n<p class=\"text-base leading-relaxed text-secondary\">设置它们：</p>\n<p class=\"text-base leading-relaxed text-secondary\">里面要放什么：你是谁，你做什么；你使用的速记和首字母缩略词（所以Claude不必问“QBR套牌”是什么）；以及您喜欢的输出方式（格式、长度、语气等）。下面的交互展示了一些基于不同角色的工作示例。</p>\n<p class=\"text-base leading-relaxed text-secondary\">您不需要在第一天就完成完整的总体指示。随着您更多地使用 Cowork，您会注意到您不断给出更正的信息（“在您的回复中预先分享底线”）或“不要使用空格空格”）——这些是全局指令候选。</p>"
      },
      {
        "id": "sec-2",
        "title": "项目：工作流的范围工作区",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">全球指令涵盖您</em>. Projects cover <em>你正在做什么</em>.</p>\n<p class=\"text-base leading-relaxed text-secondary\">项目是与特定工作流（客户、重复交付成果、发布）相关的工作空间。项目内部包含三项您可以设置的内容，其中一项是 Claude 为您构建的：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">指示 — 类似于全局指令，但范围仅限于该项目。 （“这个项目是为我们每周的转型团队会议而设计的。目的是从整个组织收集数据，并每周将其提炼到幻灯片中。”）</li>\n<li class=\"text-base leading-relaxed text-secondary\">定时与循环任务调度 — 您设置的属于项目的定期运行：周五状态拉动、会前简报、月末汇总。您可以通过项目内部的对话来设置它们，并且它们每次都在项目的上下文中运行。</li>\n<li class=\"text-base leading-relaxed text-secondary\">语境 — Claude 应使用的一个或多个文件夹或链接。项目中的每个对话都可以访问它们。</li>\n<li class=\"text-base leading-relaxed text-secondary\">记忆——Claude从项目内部的对话中学到了什么。随着你工作时间的推移，这种情况会逐渐增加；你不写。</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">最后一项是项目带来的改变。在项目之外，每个会话都会从您的全局指令开始。在其中，每一次对话都会增加Claude的知识——因此下一个任务从客户的情况、上周的决定以及手头尚未解决的问题开始。</p>\n<p class=\"text-base leading-relaxed text-secondary\">查看下面的示例，了解 Cowork 项目的构成。</p>\n<p class=\"text-base leading-relaxed text-secondary\">一些对项目有益的工作流：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">客户或帐户。 会议记录和可交付成果的文件夹，以及帐户的常规说明。每次会议准备、跟进和审查草稿都在项目内部进行，Claude会在整个过程中建立关系。</li>\n<li class=\"text-base leading-relaxed text-secondary\">重复交付的成果。月度报告、季度回顾、每周领导力更新。每个新周期都是同一项目内的一次新对话，它自动建立在上次的见解之上。</li>\n<li class=\"text-base leading-relaxed text-secondary\">重新设计、迁移、新计划的推出。简报、决策、状态更新——整个工作流程都集中在一个地方，直至交付。</li>\n</ul>"
      },
      {
        "id": "sec-3",
        "title": "启动项目的三种方式",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">创建项目的方法有三种，具体取决于材料已经存在的位置：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">从头开始 — 从空开始，添加说明和上下文。</li>\n<li class=\"text-base leading-relaxed text-secondary\">从计算机上的现有文件夹 — 将项目指向您已经使用的文件夹。该文件夹成为项目的工作目录。</li>\n<li class=\"text-base leading-relaxed text-secondary\">来自聊天项目 — 如果您一直在 Chat 中使用项目，您可以将说明和知识转移到 Cowork。这仅适用于一种方式：您在 Cowork 中所做的更改不会同步回 Chat。</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">要创建一个，请单击 Cowork 侧栏中的“项目”，然后单击“新建项目”，然后选择最适合您的设置的选项。您可以随时更改工作文件夹、说明和连接器。</p>"
      },
      {
        "id": "sec-4",
        "title": "立即尝试",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">将这两层都放置到位 - 为您提供全局说明，并为您当前正在进行的一系列工作制定一个项目。</p>\n<p class=\"text-base leading-relaxed text-secondary\">编写第一个全面全局指令块。不要想太多——从几句话开始即可。</p>\n<p class=\"text-base leading-relaxed text-secondary\">一个有用的入门者：</p>\n<p class=\"text-base leading-relaxed text-secondary\">我是[公司]的[角色]，从事[主要的1-2个工作流]。这里有\n您需要了解一些常见的[首字母缩略词/简写]。我的大部分交付成果\n是[文档、演示文稿、简报、模型——无论什么]。我想要更新和简报\n简洁——以建议开头，将背景保留在一个段落中。\n我喜欢在创建最终文档文件之前查看 .md 预览。</p>\n<p class=\"text-base leading-relaxed text-secondary\">为一个工作流创建一个项目。选择一些重复出现的东西——客户帐户、每月可交付成果、当前计划。将其指向材料已存在的文件夹，或者如果还没有，则重新开始。</p>"
      },
      {
        "id": "sec-5",
        "title": "接下来是什么",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在下一课中，您将了解技能 - 如何向 Claude 教授您和您的团队所依赖的流程，以便您自动完成专业工作的方式。</p>"
      }
    ],
    "prevLesson": {
      "slug": "research-analysis-at-scale",
      "title": "Get better results faster"
    },
    "nextLesson": {
      "slug": "file-document-tasks",
      "title": "自定义 自定义 自定义 自定义 Skills 技能扩展 技能扩展 技能扩展 技能扩展: Teach Claude Cowork your way"
    }
  },
  "file-document-tasks": {
    "lessonId": "file-document-tasks",
    "lessonTitle": "Plugins 插件：以你的方式教 Claude Cowork",
    "lessonIndex": 6,
    "totalLessons": 14,
    "duration": "8 分钟",
    "outcomes": [
      "定义一项技能并解释Claude如何使用一项技能",
      "认识技能可以包含的四个组成部分",
      "从您自己的重复流程中培养一项技能",
      "Plugins 插件：以你的方式教 Claude Cowork"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-is-cowork",
        "title": "1.什么是Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "getting-set-up",
        "title": "2.设置Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "scheduled-tasks",
        "title": "3. Claude Cowork 震惊您做什么",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "the-task-loop",
        "title": "4. 将你的第一个任务迁移 Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "research-analysis-at-scale",
        "title": "5.更快获得更好的结果",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "giving-cowork-context",
        "title": "6. 常设背景：全球指令和项目",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "file-document-tasks",
        "title": "7. Plugins 插件：以你的方式教 Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "plugins-cowork-as-a-specialist",
        "title": "8. 插件：编码团队的专业知识",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "claude-in-chrome",
        "title": "9. 浏览器协同与网页动态交互",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "claude-for-microsoft-365",
        "title": "10.集成Microsoft 365办公生态",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "permissions-usage-choosing-your-model",
        "title": "11. 安全工作的最佳实践",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "validating-skills-for-plugins",
        "title": "12. 插件技能校验与安全性审计",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "share-what-you-build-with-your-team",
        "title": "13. 与团队共享成果与工作流资产",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "14",
        "slug": "troubleshooting-next-steps",
        "title": "14. 总结和后续步骤",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "技能实际上是什么",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">技能是一本可重复使用的剧本（文件和资源的文件夹），它教Claude如何按照您希望的方式完成特定类型的工作。当你开始一项与技能相匹配的任务时，Claude会加载剧本并遵循它。</p>\n<p class=\"text-base leading-relaxed text-secondary\">技能扩展 技能扩展 技能扩展 技能扩展 技能扩展 在任务过程中，当您需要它们时，会自动使用它们。您不必通过名称来调用它们；Claude会注意到任务与您已安装的技能相匹配并自动加载。当您愿意时，您也可以明确（“使用堆栈模板技巧”）。</p>"
      },
      {
        "id": "sec-1",
        "title": "技能里面有什么",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">技能不仅仅是长篇大论。技能可以包含的四种文件以及它们如何协同工作是如何对真实流程进行足够好的编码，以便 Claude 可以像您的团队一样运行它：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">指示（SKILL.md 文件）。简要介绍克劳​​德该技能的用途、何时使用以及如何使用。就像为新同事编写操作手册一样编写它 - 足够具体，以便他们可以完成工作。</li>\n<li class=\"text-base leading-relaxed text-secondary\">资产。徽标、品牌模板、幻灯片母版、字体。该技能用来产生真实输出的原材料。</li>\n<li class=\"text-base leading-relaxed text-secondary\">参考。 好的输出示例、风格指南、子句库、过去的工作你会交给新队友作为匹配的酒吧。参考资料是Claude如何了解此类工作的“好”是什么样子的。</li>\n<li class=\"text-base leading-relaxed text-secondary\">Claude 可以运行小段代码来处理每次都应该以相同方式发生的流程部分 — 方差计算、结构化比较、图表格式化程序、文档重新格式化程序。</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">技能可以使用这些任意组合。有些技能只是一个带有说明的 SKILL.md 文件，这对于某些流程来说完全没问题。其他人有一个 SKILL.md 和一个品牌资产文件夹。其他人四个都有。混合遵循工作：包括需要包含的内容，仅此而已。</p>\n<p class=\"text-base leading-relaxed text-secondary\">以下是三个技能示例。点击每一个来了解他们的应用和化妆。</p>\n<p class=\"text-base leading-relaxed text-secondary\">这就是规范团队工作方式如此有用的原因。 Cowork 是指代表您的同事的方式，而技能让您如何完成应有的工作。指令告诉它要做什么；资产提供原材料；参考文献告诉我们什么是好的；脚本使每次都以相同的方式运行可重复的部分。</p>"
      },
      {
        "id": "sec-2",
        "title": "与Claude一起培养技能",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">培养技能最快的方法是和Claude一起。</p>\n<p class=\"text-base leading-relaxed text-secondary\">在 Cowork 中开始新的对话并说出以下内容：</p>\n<p class=\"text-base leading-relaxed text-secondary\">我想培养一种技能[你厌倦了重新解释的重复过程]。带我了解您需要了解的内容。</p>\n<p class=\"text-base leading-relaxed text-secondary\">Claude会问几个问题：技能应该做什么，当触发时，好的输出期待的，应该使用什么资源来通知技能。问题具体回答——指出工作的真实例子、真实的模板、真实的先前输出。输出是一个技能文件夹，其中包含SKILL.md以及技能所需的任何资源、引用和脚本，手动安装。</p>\n<p class=\"text-base leading-relaxed text-secondary\">安装完成后，可以在自定义中找到技能。如果你想对技能进行任何更改，你只需向Claude提供更正，并要求其更新技能即可。 “添加一个步骤来标记任何超过 10 万美元的交易，但滑落两个阶段的交易 - 这总是很重要。”Claude更新了技能。</p>\n<p class=\"text-base leading-relaxed text-secondary\">Skills 自定义技能在任何对话中或都以相同的方式工作，包括项目内的对话。因此，无论您在默认的 Cowork 会话中在特定的财务项目中工作，只需执行预览分析任务，您为预览分析构建的技能就会显示。</p>"
      },
      {
        "id": "sec-3",
        "title": "课后反思",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">想想你重复的一个过程——你运行的一份报告、你经常使用的一种格式、你遵循的清单。记下来。这是你的第一个技能候选人。您现在不需要构建它。有时间就回来和Claude一起搭建吧。</p>"
      },
      {
        "id": "sec-4",
        "title": "接下来是什么",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">Plugins 插件将您的特定工作流程打包，以便团队中的任何人都可以运行它们并获得相同的质量结果。插件将多种技能和连接器捆绑到一个围绕作业构建的可安装包中。那是下一课。</p>"
      }
    ],
    "prevLesson": {
      "slug": "giving-cowork-context",
      "title": "Standing context: Global instructions and projects"
    },
    "nextLesson": {
      "slug": "plugins-cowork-as-a-specialist",
      "title": "Plugins: Encode your team's expertise"
    }
  },
  "plugins-cowork-as-a-specialist": {
    "lessonId": "plugins-cowork-as-a-specialist",
    "lessonTitle": "插件：编码您团队的专业知识",
    "lessonIndex": 7,
    "totalLessons": 14,
    "duration": "8 分钟",
    "outcomes": [
      "定义一个插件及其捆绑在一起的内容",
      "识别插件采用的两种形状",
      "根据您的真实作品安装或自定义插件",
      "插件：编码您团队的专业知识"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-is-cowork",
        "title": "1.什么是Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "getting-set-up",
        "title": "2.设置Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "scheduled-tasks",
        "title": "3. Claude Cowork 震惊您做什么",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "the-task-loop",
        "title": "4. 将你的第一个任务迁移 Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "research-analysis-at-scale",
        "title": "5.更快获得更好的结果",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "giving-cowork-context",
        "title": "6. 常设背景：全球指令和项目",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "file-document-tasks",
        "title": "7. Plugins 插件：以你的方式教 Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "plugins-cowork-as-a-specialist",
        "title": "8. 插件：编码团队的专业知识",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "claude-in-chrome",
        "title": "9. 浏览器协同与网页动态交互",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "claude-for-microsoft-365",
        "title": "10.集成Microsoft 365办公生态",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "permissions-usage-choosing-your-model",
        "title": "11. 安全工作的最佳实践",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "validating-skills-for-plugins",
        "title": "12. 插件技能校验与安全性审计",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "share-what-you-build-with-your-team",
        "title": "13. 与团队共享成果与工作流资产",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "14",
        "slug": "troubleshooting-next-steps",
        "title": "14. 总结和后续步骤",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "观看插件解锁什么",
        "contentHtml": "<p class=\"text-body font-medium\">协同办公和插件：帮助企业更快发展</p>\n<p class=\"text-base leading-relaxed text-secondary\">该视频展示了当团队的工作流程不再单一时会发生什么变化\n人的剧本，并成为任何人都可以安装的共享工具包。</p>"
      },
      {
        "id": "sec-1",
        "title": "核心要点",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">插件是围绕工作构建的一组分配技能。一项技能是一个剧本，而插件则是多项技能，加上它们所依赖的连接器和子代理。 （子代理是一种专门构建的助手，一种技能可以在其自身上下文中启动来处理部分工作 - 例如，用于研究步骤的研究子代理，用于起草步骤的起草子代理。）</li>\n<li class=\"text-base leading-relaxed text-secondary\">安装财务插件，Claude就知道您的团队分析股票的方式。安装一个合法的插件，它就会知道你的合约剧本。专业知识随着安装而传播，而不是随着人而传播。</li>\n<li class=\"text-base leading-relaxed text-secondary\">Anthropic 发布常见的插件角色 — 金融、法律、销售、营销、客户支持、产品管理等。您可以安装现成的、自定义的或构建您自己的。</li>\n</ul>"
      },
      {
        "id": "sec-2",
        "title": "两种插件",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">插件有两种风格——都很有用，都很常见。</p>\n<p class=\"text-base leading-relaxed text-secondary\">形状1：打在一起的整体流程。当工作有很多连续的步骤时，您可以将每个步骤的技能打包到一个插件中，以便整个流程作为一个整体运行。例如，每月结算插件可能包括用于提取实际值、构建差异表和起草董事会备忘录的单独技能 - 每一项都是更大工作流程中的一步。团队中的任何人都可以安装该插件并按照您的方式获取整个过程。</p>\n<p class=\"text-base leading-relaxed text-secondary\">形状 2：团队最常用的技能捆绑在一起。这对于团队执行的一组重复工作非常有用。您可以将最重要的内容捆绑到一个插件中。例如，财务插件可能包括方差分析、财务建模、投资备忘录起草和季度报告的单独技能。它们并不相互依赖——它们只是团队最需要掌握的技能。将它们捆绑意味着新队友安装一个东西并拥有团队的整个工具包。</p>\n<p class=\"text-base leading-relaxed text-secondary\">探索下面的互动，看看插件的不同形状。</p>\n<p class=\"text-base leading-relaxed text-secondary\">在这两种情况下，形状非常重要：插件是围绕构建包的工作流程。 “为我们的客户成功团队进行续约准备”是一个插件。 “我们基金的股票研究”是一个插件。 “首席财务官办公室的每月董事会周期”是一个插件。</p>"
      },
      {
        "id": "sec-3",
        "title": "从 Anthropic 市场安装插件",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">Anthropic 为知识工作中最常见的角色发布了插件，每个插件都是一个进行构建和的起点，您可以按原样维护使用或塑造您的团队。在“自定义”→“插件”中在 Cowork 中找到它们。浏览与您的工作相匹配的插件，单击“安装”，然后批准该插件使用的连接器。该插件的技能立即可用。</p>"
      },
      {
        "id": "sec-4",
        "title": "自定义插件以适合您的团队",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">来自市场的插件是强默认的，而不是最终的答案。里面的技能和连接器使用通用版本的工作流程；您的团队有自己的模板、定义和步骤。您可以调整任何已安装的插件来匹配。</p>\n<p class=\"text-base leading-relaxed text-secondary\">安装插件后，返回自定义 → 插件名称 → [插件] 并单击定制。这将打开一个新的 Cowork 任务，您和 Claude 一起工作来定制插件。您可以通过将入门提示定向到特定资产、共享上下文或上传您希望其用作基础的示例来添加入门提示。然后，Claude将更新插件以适应您团队的环境。</p>\n<p class=\"text-base leading-relaxed text-secondary\">例如，你可以这样说：</p>\n<p class=\"text-base leading-relaxed text-secondary\">这是我们最后三项红线保密协议。更新此插件中的 /nda-triage 技能，以便格式和语气与这些技能相匹配。</p>\n<p class=\"text-base leading-relaxed text-secondary\">Claude对插件进行了适当的调整。你越是根据团队的实际工作来塑造它，它产生的影响力就越大。</p>"
      },
      {
        "id": "sec-5",
        "title": "构建您自己的插件",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">如果您的团队的工作流程不适合任何现有插件，您可以通过使用 Cowork 来构建一个工作流程。完成多个工作流程所需的技能，包括其所依赖的任何连接器，将其文件夹方便安装到您的 Cowork 实例中。</p>\n<p class=\"text-base leading-relaxed text-secondary\">大多数团队都是从小规模开始的。用于最重复性任务的一项技能。然后是另一个。当它拥有三到四种技能和重要的连接器时，它就是一个值得共享的插件 - 您将在第 13 课中学习如何与您的团队共享它。</p>\n<p class=\"text-base leading-relaxed text-secondary\">您的管理员可能已经为您的组织发布了插件 - 在您自己构建任何内容之前检查目录（自定义→插件）。</p>"
      },
      {
        "id": "sec-6",
        "title": "立即尝试",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">让我们找到适合您工作的插件。在新的 Cowork 对话中，输入：</p>\n<p class=\"text-base leading-relaxed text-secondary\">/设置-cowork</p>\n<p class=\"text-base leading-relaxed text-secondary\">该技能开始一个简短的采访。Claude询问您所做的工作类型，然后建议最适合您需求的插件。您可以直接从聊天中轻松添加插件并在对话中进行测试。安装后，为您的团队定制它。</p>"
      },
      {
        "id": "sec-7",
        "title": "接下来是什么",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">现在，您已将 Cowork 启动您的一个工作模块。下一个是将 Cowork 分割本地桌面 - 分割许多您的浏览器，以及工作所在的 M365 应用程序。</p>"
      }
    ],
    "prevLesson": {
      "slug": "file-document-tasks",
      "title": "自定义 自定义 自定义 自定义 Skills 技能扩展 技能扩展 技能扩展 技能扩展: Teach Claude Cowork your way"
    },
    "nextLesson": {
      "slug": "claude-in-chrome",
      "title": "浏览器协同与网页动态交互"
    }
  },
  "claude-in-chrome": {
    "lessonId": "claude-in-chrome",
    "lessonTitle": "浏览器协同与网页动态交互",
    "lessonIndex": 8,
    "totalLessons": 14,
    "duration": "8 分钟",
    "outcomes": [
      "认识浏览器与网页动态交互解锁的工作类型",
      "在实际工作中使用Chrome和Cowork",
      "浏览器协同与网页动态交互"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-is-cowork",
        "title": "1.什么是Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "getting-set-up",
        "title": "2.设置Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "scheduled-tasks",
        "title": "3. Claude Cowork 震惊您做什么",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "the-task-loop",
        "title": "4. 将你的第一个任务迁移 Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "research-analysis-at-scale",
        "title": "5.更快获得更好的结果",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "giving-cowork-context",
        "title": "6. 常设背景：全球指令和项目",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "file-document-tasks",
        "title": "7. Plugins 插件：以你的方式教 Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "plugins-cowork-as-a-specialist",
        "title": "8. 插件：编码团队的专业知识",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "claude-in-chrome",
        "title": "9. 浏览器协同与网页动态交互",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "claude-for-microsoft-365",
        "title": "10.集成Microsoft 365办公生态",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "permissions-usage-choosing-your-model",
        "title": "11. 安全工作的最佳实践",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "validating-skills-for-plugins",
        "title": "12. 插件技能校验与安全性审计",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "share-what-you-build-with-your-team",
        "title": "13. 与团队共享成果与工作流资产",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "14",
        "slug": "troubleshooting-next-steps",
        "title": "14. 总结和后续步骤",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "观看它的工作",
        "contentHtml": "<p class=\"text-body font-medium\">浏览器与网页动态交互将人工智能带到您已经工作的地方</p>\n<p class=\"text-base leading-relaxed text-secondary\">该视频展示了Claude如何在 Chrome 中阅读、点击和导航\n您所在的网站。</p>"
      },
      {
        "id": "sec-1",
        "title": "核心要点",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">浏览器与网页动态交互是没有连接器工具的桥梁。 对于浏览器中的任何内容，Claude 都可以读取这些页面并在这些页面上执行操作。</li>\n<li class=\"text-base leading-relaxed text-secondary\">浏览器与网页动态交互和协同工作。Claude可以在浏览器中收集信息并采取行动；然后，它会获取结果并在 Cowork 中构建可交付成果。一次谈话，两个表面。</li>\n<li class=\"text-base leading-relaxed text-secondary\">默认情况下，浏览器良好与网页动态交互会在敏感操作之前进行询问，您可以批准或拒绝每一项操作。</li>\n</ul>"
      },
      {
        "id": "sec-2",
        "title": "这解锁了什么",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">一些在实际工作中很重要的例子：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">内部仪表板。您的财务团队的 Tableau 视图、您的销售运营 Looker 仪表板、带有您每周一检查指标的 BI 工具。Claude可以提取这些数字，将它们下载到您的计算机上，然后使用该上下文来执行 Cowork 任务。</li>\n<li class=\"text-base leading-relaxed text-secondary\">供应商门户和客户系统。没有API的采购门户。单点登录背后的 CRM。必须对每张票证进行分类的客户支持工具。Claude可以导航门户，提取您需要的内容，并按照您的方式进行操作。</li>\n<li class=\"text-base leading-relaxed text-secondary\">登录后的网络应用程序。任何具有浏览器界面的东西——甚至是您团队构建的工具——都可以编写脚本。 “打开采购系统，找到第三季度排名前十的供应商的每个采购订单，将行项目拉入电子表格。”</li>\n<li class=\"text-base leading-relaxed text-secondary\">以可交付成果结束网络研究。打开十个选项卡，提取每个选项卡上的内容，然后将其变成摘要 - 无需复制粘贴。</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">模式：任何时候你发现自己想“我很乐意将这个背景提供给Claude，但它存在于网络上”浏览器与网页动态交互的良好性就是答案。</p>"
      },
      {
        "id": "sec-3",
        "title": "与 Cowork 一起使用",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">一个真实的示例：您团队的客户健康仪表板位于登录名后面，并且没有连接器。您希望在周五之前获得显示黄色或红色的每个帐户的一页摘要。</p>\n<p class=\"text-base leading-relaxed text-secondary\">在Cowork中，你说：</p>\n<p class=\"text-base leading-relaxed text-secondary\">在Chrome中打开客户健康状况仪表板，提取显示黄色或红色的每个帐户，并从Drive中的客户文件夹以及Slack中的#customer-success中的最近线程中提取每个帐户30天活动的。编写好一页摘要，我可以在过去的周五电话会议之前查看。</p>\n<p class=\"text-base leading-relaxed text-secondary\">Claude 将浏览器步骤挖掘浏览器与网页交互，获取回数据，从 Drive 和 Slack 中提取支持上下文，并在文件夹中构建摘要。三个，背景三个来源。</p>"
      },
      {
        "id": "sec-4",
        "title": "一些注意事项",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">您需要登录。Claude 无法为您登录工具。如果仪表板需要身份验证，您在浏览器中登录一次； Claude 在您已通过身份验证的会话中工作。</li>\n<li class=\"text-base leading-relaxed text-secondary\">请仔细考虑允许 Claude 访问网络的内容。就像使用连接器一样，Claude 可以看到您所看到的内容 - 但在开放网络上，这包括您有权访问的任何内容。对于敏感网站，缩小 Claude 可以采取的行动范围，并在批准之前审查这些行动。</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">要查找最新的设置指南，请参阅浏览器良好与网页动态交互入门（在新选项卡中打开）</span></a>.</p>"
      },
      {
        "id": "sec-5",
        "title": "立即尝试",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">选择一个任务，该任务位于没有连接器的基于浏览器的工具中。打开Cowork，描述任务，让Claude在Chrome中工作，然后将交互作用于Cowork中的Claude。</p>"
      },
      {
        "id": "sec-6",
        "title": "接下来是什么",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在下一课中，您将看到 Claude 出现在 M365 应用程序中，其中实际上有很多工作 — Word、Excel、PowerPoint 和 Outlook。</p>"
      }
    ],
    "prevLesson": {
      "slug": "plugins-cowork-as-a-specialist",
      "title": "Plugins: Encode your team's expertise"
    },
    "nextLesson": {
      "slug": "claude-for-microsoft-365",
      "title": "集成 Microsoft 365 办公生态"
    }
  },
  "claude-for-microsoft-365": {
    "lessonId": "claude-for-microsoft-365",
    "lessonTitle": "集成 Microsoft 365 办公生态",
    "lessonIndex": 9,
    "totalLessons": 14,
    "duration": "8 分钟",
    "outcomes": [
      "认识 Claude 在 Word、Excel、PowerPoint 和 Outlook 中执行的操作",
      "通过一次 Claude 对话在应用程序之间转移工作",
      "决定何时在 Cowork 中或在文档内完成工作",
      "集成 Microsoft 365 办公生态"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-is-cowork",
        "title": "1.什么是Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "getting-set-up",
        "title": "2.设置Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "scheduled-tasks",
        "title": "3. Claude Cowork 震惊您做什么",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "the-task-loop",
        "title": "4. 将你的第一个任务迁移 Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "research-analysis-at-scale",
        "title": "5.更快获得更好的结果",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "giving-cowork-context",
        "title": "6. 常设背景：全球指令和项目",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "file-document-tasks",
        "title": "7. Plugins 插件：以你的方式教 Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "plugins-cowork-as-a-specialist",
        "title": "8. 插件：编码团队的专业知识",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "claude-in-chrome",
        "title": "9. 浏览器协同与网页动态交互",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "claude-for-microsoft-365",
        "title": "10.集成Microsoft 365办公生态",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "permissions-usage-choosing-your-model",
        "title": "11. 安全工作的最佳实践",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "validating-skills-for-plugins",
        "title": "12. 插件技能校验与安全性审计",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "share-what-you-build-with-your-team",
        "title": "13. 与团队共享成果与工作流资产",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "14",
        "slug": "troubleshooting-next-steps",
        "title": "14. 总结和后续步骤",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "与 Claude 跨 Microsoft 365 应用进行协作",
        "contentHtml": "<p>Claude 住在文档里面。它以加载项的形式出现在 Word、Excel、PowerPoint 和 Outlook 中，在你打开的文件和空间上工作。</p><p><strong>一段对话可以把上下文带过各个应用</strong>：在 Excel 里构建分析，交给 PowerPoint 生成幻灯片；用 Word 备忘录作为起草 Outlook 回复的来源。</p><p>一个有用的规则：当工作从许多来源汇聚并以交付物结尾时，伸手去拿 <strong>Cowork</strong>；当你在 Office 文件本身中工作时——就地编辑、并把上下文从一个应用带到下一个——伸手去拿 <strong>M365 中的 Claude</strong>。大多数真实工作两者都用：Claude 先构建演示文稿的第一稿，你在 PowerPoint 中打开它并在幻灯片里精修；Claude 把数据拉进模型，你在 Excel 中打开它并让 Claude 调查你发现的异常。两个界面干净地交接——而文件在两个情况下都是同一个文件。</p>"
      },
      {
        "id": "sec-1",
        "title": "核心要点",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">Claude 居住在文件里。 Claude 在 Word、Excel、PowerPoint 和 Outlook 中显示为插件，处理您打开的文件和空间。</li>\n<li class=\"text-base leading-relaxed text-secondary\">一次对话可以在应用程序之间传递上下文。 在 Excel 中构建分析并将其交给 PowerPoint 制作幻灯片。使用 Word 备忘录作为 Outlook 回复草稿的来源。</li>\n<li class=\"text-base leading-relaxed text-secondary\">Cowork 中的 Claude 和 M365 中的 Claude 是不同时刻的不同工具。 Cowork 中的 Claude 跨多个来源构建成品交付成果。 M365 中的 Claude 用于精炼、调试和调整您已经在处理的文件，以及将该文件中的上下文传输到您正在构建的其他文档中。</li>\n</ul>"
      },
      {
        "id": "sec-2",
        "title": "Claude在每个应用程序中做什么",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">优秀。分析数据，编写公式，调试#REF！错误和循环引用，在不破坏模型的情况下运行场景测试，从模板构建工作表，引用特定的单元格。最有力的举措：“从第三季度工作表中提取实际数据，将其与相同工作簿中的第三季度计划进行比较，然后在每个行项目旁边的F列中写下差异注释。”</p>\n<p class=\"text-base leading-relaxed text-secondary\">微软幻灯片软件。阅读您的幻灯片母版、字体和配色方案，然后构建匹配的幻灯片。生成原生的、可编辑的图表（不是粘贴的图像）。在您选择的任何幻灯片上进行操作。最有力的举措：“采用我刚刚在 Excel 中进行的分析，并使用幻灯片模板将其转换为 QBR 的三个幻灯片幻灯片。”</p>\n<p class=\"text-base leading-relaxed text-secondary\">起草、修改并重新格式化。处理评论和跟踪的更改。从相关来源中提取上下文以奠定草稿的基础。最有力的举措：“根据本部分的正文和附录中引用的来源数据开发执行摘要。”</p>\n<p class=\"text-base leading-relaxed text-secondary\">前景。 根据您其余工作的上下文对收到的邮件进行分类。反映先前线索、日历背景和最近决定的草稿回复。</p>"
      },
      {
        "id": "sec-3",
        "title": "在一次对话中跨应用程序移动工作",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">跨应用程序的迁移是 M365 加上 Claude 开始感觉与在任何单个应用程序中工作不同的地方。你不只是在工作一个文档 - 你将其上下文带入下一个文档。</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">展望→词。一份客户简介会出现在您的收件箱中。 “在Word中打开简报，然后从我们公司的模板开始制作。”Word启动，附件打开，电子邮件线程已经加载到侧边栏中。Claude已经知道发件人的要求。</li>\n<li class=\"text-base leading-relaxed text-secondary\">Word → Excel。在备忘录中，您需要其后面的数字。 “建立选项 2 背后的市场规模模型。” Excel 打开，从 Claude 刚刚在 Word 中读到的简短内容中提取假设，并使用您可以检查的公式构建一个多选项卡模型。</li>\n<li class=\"text-base leading-relaxed text-secondary\">Excel → PowerPoint。“将其转变为客户模板中的指导码头委员会。”该平台在您的幻灯片母版中构建了本机可编辑图表以及 Excel 中的更新数字。</li>\n<li class=\"text-base leading-relaxed text-secondary\">返回 Outlook。“周四之前与团队一起抽出 30 分钟时间。”邀请与与会者一起起草并等待您单击“发送”。</li>\n</ul>"
      },
      {
        "id": "sec-4",
        "title": "何时使用 M365 与 Cowork",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">一个有用的规则：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">当工作从多个来源提取并以可交付成果结束时，就实现了良好的办公。从 20 个源文件构建摘要，从 CRM 和三个 Slack 渠道汇总报告，按计划运行工作流程。</li>\n<li class=\"text-base leading-relaxed text-secondary\">当您在 Office 文件本身中工作时，在 M365 内找到 Claude - 就地编辑并将上下文从一个应用程序传输到下一个应用程序。</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">大多数实际工作都使用两者。Claude构建了六张牌的初稿；你在PowerPoint中打开它，并与幻灯片中的Claude一起完善它。Claude将数据拉入模型；你在Excel中打开它并要求Claude调查你发现异常的值。两个表面整洁利落地交接——在这两种情况下，锉刀就是锉刀。</p>"
      },
      {
        "id": "sec-5",
        "title": "立即尝试",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">首先，对于您最常用的 Microsoft 365 应用安装 Claude 加载项 — 请参阅 Excel、PowerPoint 和 Word 工作（在新选项卡中打开）以了解设置和计划可用性。Claude for Outlook 是一个单独的测试版本，有自己的列表 - 请参阅 Claude Outlook（在新选项卡中打开）。如果加载项由您的 IT 团队管理，请与他们一起解密。</p>\n<p class=\"text-base leading-relaxed text-secondary\">您包含本周正在处理的真实文档的 M365 应用程序之一。尝试在应用程序中与 Claude 一起尝试一个动作 - 优化段落、调试公式、根据 Word 文档中的段落构建幻灯片。当第一次看到 Claude 对正在研究的文档进行操作时，您会发现与先聊天然后粘贴的区别。</p>"
      },
      {
        "id": "sec-6",
        "title": "接下来是什么",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">现在，您已经在所有出现的地方看到了 Cowork——桌面、浏览器和文档本身。模块 4 转向在实际工作中使用 Cowork 的重要部分：安全工作、确保您构建的东西正常运行，以及与您的团队共享它们。</p>"
      }
    ],
    "prevLesson": {
      "slug": "claude-in-chrome",
      "title": "浏览器协同与网页动态交互"
    },
    "nextLesson": {
      "slug": "permissions-usage-choosing-your-model",
      "title": "Best practices for working safely"
    }
  },
  "permissions-usage-choosing-your-model": {
    "lessonId": "permissions-usage-choosing-your-model",
    "lessonTitle": "安全工作的最佳实践",
    "lessonIndex": 10,
    "totalLessons": 14,
    "duration": "8 分钟",
    "outcomes": [
      "设置您的工作空间，确保重要内容得到保护",
      "编写不会为错误操作留下空间的提示",
      "认识到“停下来思考”比速度更重要的时刻",
      "安全工作的最佳实践"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-is-cowork",
        "title": "1.什么是Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "getting-set-up",
        "title": "2.设置Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "scheduled-tasks",
        "title": "3. Claude Cowork 震惊您做什么",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "the-task-loop",
        "title": "4. 将你的第一个任务迁移 Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "research-analysis-at-scale",
        "title": "5.更快获得更好的结果",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "giving-cowork-context",
        "title": "6. 常设背景：全球指令和项目",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "file-document-tasks",
        "title": "7. Plugins 插件：以你的方式教 Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "plugins-cowork-as-a-specialist",
        "title": "8. 插件：编码团队的专业知识",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "claude-in-chrome",
        "title": "9. 浏览器协同与网页动态交互",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "claude-for-microsoft-365",
        "title": "10.集成Microsoft 365办公生态",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "permissions-usage-choosing-your-model",
        "title": "11. 安全工作的最佳实践",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "validating-skills-for-plugins",
        "title": "12. 插件技能校验与安全性审计",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "share-what-you-build-with-your-team",
        "title": "13. 与团队共享成果与工作流资产",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "14",
        "slug": "troubleshooting-next-steps",
        "title": "14. 总结和后续步骤",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "您在Cowork安全工作中所扮演的角色",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">您从第 2 课中已经知道，Claude在删除之前总是会询问，并且在默认权限模式下，在发送或共享之前也询问。是地板。这节课就是您要学的带上顶部 - 先发制人的动作，防止具有文件、应用程序和连接器访问权限的自治工具执行您不打算执行的操作。</p>"
      },
      {
        "id": "sec-1",
        "title": "设置好后，错误就不会影响到重要的事情",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">影响力最高的单一举措是您指向Claude的文件夹。这是Claude可以读取、写入和（经您确认）删除的内容的边界。</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">使用专用的工作文件夹，而不是包罗万象的文件夹。 将Claude指向文档、下载或桌面相当于让新同事翻阅你拥有的每个文件。为作品建立一个文件夹。移动（或复制）所需的内容。指向Claude那里。</li>\n<li class=\"text-base leading-relaxed text-secondary\">在开始之前备份所有不可替代的内容。 如果某个文件很重要并且无法重新生成新副本（旧的客户交付成果、无法重新签发的合同、任何您可能会遗憾丢失的内容），请确保副本位于 Cowork 无法到达的地方。云备份、单独的文件夹、未连接的驱动器。Claude不会不经询问就删除，但点击错误确认的成本就是文件的成本。</li>\n<li class=\"text-base leading-relaxed text-secondary\">首先在副本上测试新的工作流程。 例如，如果您正在构建一个每周五运行的计划任务，则第一次运行将针对数据副本。一旦您看到它的行为，请将其指向活动文件夹。</li>\n</ul>"
      },
      {
        "id": "sec-2",
        "title": "编写提示，不给错误操作留下空间",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">您询问的方式与您指向哪个文件夹一样重要。</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">具体说明破坏性动词。 “剪掉”可以读作“从视图中删除”或“从文件中删除一段。”“更新文件”可以表示“重写它”或“添加到其中。”如果错误的读法是不可恢复的，请说出你的意思：“从草稿中删除该部分，但保留文件。”“添加新的附件；不要重写现有部分。”</li>\n<li class=\"text-base leading-relaxed text-secondary\">在提示中的架构命名。 “此文件夹中仅包含 3 个最近更新的文件。” “仅在第三季度的结束合同。” “不要给任何人发消息——仅限草稿。” 这缩小了 Cowork 正在做的事情，并为您提供了一条清晰的路线来发现漂移。</li>\n<li class=\"text-base leading-relaxed text-secondary\">对草稿使用计划任务。定时最初与周期性任务调度在您不观看时运行。在您确信任务按照您需要的方式运行之前，请提示它起草供您审阅，而不是代表您发送。</li>\n</ul>"
      },
      {
        "id": "sec-3",
        "title": "当下：三项检查赶上其余的",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">计划制定后，请阅读该计划。 当Claude开始一项任务时，它会在进度选项卡中列出它将要执行的操作。略读它。思考：这个计划有意义吗？步骤的顺序是否正确？是否使用了正确的来源？根据需要重定向。</p>\n<p class=\"text-base leading-relaxed text-secondary\">关注意外的模式。您不需要验证每个命令。但是，如果Claude正在接触您未提及的文件或网站，或者范围正在超出您的要求，请停止该任务。 “有些感觉不太劲”是一个真实的信号——注意这一点。</p>\n<p class=\"text-base leading-relaxed text-secondary\">对于发送、发布或分享的任何内容，请保持“在行动前询问”，当确认提示确实出现时，请阅读它。大多数错误的发生并不是因为保障措施失败；而是因为。之所以发生这种情况，是因为有人点击了确认信息，而这并不完全是他们想要的操作。对话的存在是因为行动很重要——就这样对待它。</p>"
      },
      {
        "id": "sec-4",
        "title": "当 Cowork 不适合使用工具时",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">一个简短的清单：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">需要审计跟踪的受监管工作流程。 Cowork 活动不会在审计日志、合规性 API 或数据导出中捕获。</li>\n<li class=\"text-base leading-relaxed text-secondary\">任何你不相信聪明、敏捷的同事都能在无人监督的情况下完成的事情。 将法律文件发送给交易对手，发布公告，推动面向客户的变革。Claude可以做好准备；你船。</li>\n<li class=\"text-base leading-relaxed text-secondary\">高度敏感的个人数据超出您的 IT 团队明确批准的范围。</li>\n</ul>"
      },
      {
        "id": "sec-5",
        "title": "更深入",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">安全使用 Claude Cowork（在新选项卡中打开）是学习在 Cowork 中与 Claude 一起工作时该做什么、不该做什么的宝贵资源。它涵盖了其余需要更多思考的内容，以便您了解内置的护栏以及当Claude代表您行事时您仍然负责的事情。</p>"
      },
      {
        "id": "sec-6",
        "title": "课后反思",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">查看下面的互动内容，了解如何安全地使用Cowork工作。</p>\n<p class=\"text-base leading-relaxed text-secondary\">当您考虑将正在执行的任务交给 Cowork 时：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">您会将 Claude 指向哪个文件夹，其中是否存在无法访问的内容，或者需要首先备份的不可替代的内容？</li>\n<li class=\"text-base leading-relaxed text-secondary\">您所写的提示中是否有一个破坏性动词想要更具体地说明？</li>\n</ul>"
      },
      {
        "id": "sec-7",
        "title": "接下来是什么",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在下一课中，您将学习如何确保您构建的技能和插件实际运行 - 在依赖它们或与其他人共享它们之前使用轻量级评估来检查它们的输出。</p>"
      }
    ],
    "prevLesson": {
      "slug": "claude-for-microsoft-365",
      "title": "集成 Microsoft 365 办公生态"
    },
    "nextLesson": {
      "slug": "validating-skills-for-plugins",
      "title": "插件技能校验与安全性审计"
    }
  },
  "validating-skills-for-plugins": {
    "lessonId": "validating-skills-for-plugins",
    "lessonTitle": "插件技能校验与安全性审计",
    "lessonIndex": 11,
    "totalLessons": 14,
    "duration": "8 分钟",
    "outcomes": [
      "在分享或依赖一项技能之前解释什么是评估以及为什么它很重要",
      "通过技能创建器运行轻量级评估",
      "插件技能校验与安全性审计"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-is-cowork",
        "title": "1.什么是Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "getting-set-up",
        "title": "2.设置Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "scheduled-tasks",
        "title": "3. Claude Cowork 震惊您做什么",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "the-task-loop",
        "title": "4. 将你的第一个任务迁移 Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "research-analysis-at-scale",
        "title": "5.更快获得更好的结果",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "giving-cowork-context",
        "title": "6. 常设背景：全球指令和项目",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "file-document-tasks",
        "title": "7. Plugins 插件：以你的方式教 Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "plugins-cowork-as-a-specialist",
        "title": "8. 插件：编码团队的专业知识",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "claude-in-chrome",
        "title": "9. 浏览器协同与网页动态交互",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "claude-for-microsoft-365",
        "title": "10.集成Microsoft 365办公生态",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "permissions-usage-choosing-your-model",
        "title": "11. 安全工作的最佳实践",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "validating-skills-for-plugins",
        "title": "12. 插件技能校验与安全性审计",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "share-what-you-build-with-your-team",
        "title": "13. 与团队共享成果与工作流资产",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "14",
        "slug": "troubleshooting-next-steps",
        "title": "14. 总结和后续步骤",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "为什么这很重要",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">当您构建一项技能或将它们捆绑到一个插件中时，您实际上是在构建一个其他人将使用的小产品。就像您交给同事的任何东西一样——模板、电子表格模型、清单——在离开您的办公桌之前值得先试驾一下。</p>\n<p class=\"text-base leading-relaxed text-secondary\">当您使用自己建立的技能时，您知道如何解决任何问题或失败。您确切地知道要问什么、要给它什么文件以及答案应该是什么样子。队友则没有这些。他们可能会对请求的措辞略有不同，输入略有不同的输入，或者遇到边缘情况 - 一种不寻常但真实的情况，例如超出技能设计范围的请求。这就是技能容易出错的地方，而使用它的人不知道为什么。</p>\n<p class=\"text-base leading-relaxed text-secondary\">使用评估（评估的缩写）来测试一项技能，是您在其他人发现这些错误的方法之前。不要让这个词吓到你。评估只是一种尝试：提出一个现实的请求，你看看结果如何，告诉Claude要修复什么。然后没有代码，没有测试脚本——只有你对结果是否足以留下你的名字的判断。</p>"
      },
      {
        "id": "sec-1",
        "title": "评估系统如何运作",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">当您使用技能创建器（Claude 用于创建技能的内置助手）构建技能时，它会引导您完成评估，作为流程的一部分。这就是实际情况。</p>\n<p class=\"text-base leading-relaxed text-secondary\">技能创建者会提出两个或多个有人可能会与您的技能结合使用的现实提示。对于每个提示，它都会生成一对输出：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">Claude发挥你的技能的地方</li>\n<li class=\"text-base leading-relaxed text-secondary\">Claude回答同样的问题时没有你的能力</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">第二个是比较点。它就在那里，让你可以并排看到你的技能实际上带来了什么差异——不仅仅是“这个输出还好吗”，而是“这个输出比Claude自己做的更好吗？”</p>\n<p class=\"text-base leading-relaxed text-secondary\">审查每一对并在审查页面上用简单的英语提供反馈。当您阅读每一对时，您实际上只是回答两个问题：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">技能版本是我要使用的版本吗？如果是，那就太好了——记下是什么让它变得更好，这样技能就能继续做到这一点。</li>\n<li class=\"text-base leading-relaxed text-secondary\">如果没有，缺少什么或没有什么？具体一点。 “语气太正式”或“它跳过了执行摘要”给了Claude一些行动的依据； “这不太正确”则不然。</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">一旦你提交反馈，Claude就会根据你所说的内容为你修改技能。</p>"
      },
      {
        "id": "sec-2",
        "title": "迭代技能",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">您的反馈就是解决方案。一旦你提交了，Claude就会更新技能——重写说明、调整示例、收紧要求——你可以再次运行相同的提示，看看更改是否有效。</p>\n<p class=\"text-base leading-relaxed text-secondary\">一次改变一件事。如果第一轮表现出技巧不太罗索并且缺少一个部分，请选择更重要的部分，修复它，重新运行，然后回来进行另一次审查。您将能够分辨出到底是什么推动了针的移动。如果您对修订后的输出仍然不满意，请再次运行它 - 这是一个循环，而不是一次性门。大多数技能在一两轮后就准备好了。向自己或队友传递技能的标准并不是完美的评估。而是您关心的案例比基线更有意义，并且您已经命名了尚未���理的案例。</p>\n<p class=\"text-base leading-relaxed text-secondary\">如果第一遍的输出看起来就已经很棒了？你完成了。评估并不是一个需要跨越的圈子——当你需要信心而不是仪式时，它们就会出现。</p>"
      },
      {
        "id": "sec-3",
        "title": "立即尝试",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">逐步完成下面的模拟评估审查 - 三个提示，每个提示并排有一个有技能和无技能的输出。</p>\n<p class=\"text-base leading-relaxed text-secondary\">对于每一对：选择您实际发送的版本，并写下您要给Claude的一行反馈。这就是整个循环。</p>"
      },
      {
        "id": "sec-4",
        "title": "接下来是什么",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在下一课中，您将从“这对我有用”转向“这对团队有用”——将个人工作流程转变为共享基础架构的模式和选择。</p>"
      }
    ],
    "prevLesson": {
      "slug": "permissions-usage-choosing-your-model",
      "title": "Best practices for working safely"
    },
    "nextLesson": {
      "slug": "share-what-you-build-with-your-team",
      "title": "与团队共享成果与工作流资产"
    }
  },
  "share-what-you-build-with-your-team": {
    "lessonId": "share-what-you-build-with-your-team",
    "lessonTitle": "与团队共享成果与工作流资产",
    "lessonIndex": 12,
    "totalLessons": 14,
    "duration": "8 分钟",
    "outcomes": [
      "解释插件如何在企业组织中分布",
      "养成一些好习惯，让共享插件长期保持健康",
      "与团队共享成果与工作流资产"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-is-cowork",
        "title": "1.什么是Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "getting-set-up",
        "title": "2.设置Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "scheduled-tasks",
        "title": "3. Claude Cowork 震惊您做什么",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "the-task-loop",
        "title": "4. 将你的第一个任务迁移 Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "research-analysis-at-scale",
        "title": "5.更快获得更好的结果",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "giving-cowork-context",
        "title": "6. 常设背景：全球指令和项目",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "file-document-tasks",
        "title": "7. Plugins 插件：以你的方式教 Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "plugins-cowork-as-a-specialist",
        "title": "8. 插件：编码团队的专业知识",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "claude-in-chrome",
        "title": "9. 浏览器协同与网页动态交互",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "claude-for-microsoft-365",
        "title": "10.集成Microsoft 365办公生态",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "permissions-usage-choosing-your-model",
        "title": "11. 安全工作的最佳实践",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "validating-skills-for-plugins",
        "title": "12. 插件技能校验与安全性审计",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "share-what-you-build-with-your-team",
        "title": "13. 与团队共享成果与工作流资产",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "14",
        "slug": "troubleshooting-next-steps",
        "title": "14. 总结和后续步骤",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "在整个团队中扩展工作流程",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">至此，您的团队已经拥有了一些已赢得一席之地的技能。它们一开始是某人的个人工作方式，经过评估，并且支持多个人的用例。</p>\n<p class=\"text-base leading-relaxed text-secondary\">当您想要在整个团队中有效地扩展这些插件时，您可以将它们捆绑到一个插件中 - 您在第 8 课中介绍了如何操作。本课是关于下一步的：将该插件提供给每个需要它的人。</p>"
      },
      {
        "id": "sec-1",
        "title": "在您的组织中分发插件",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在较大的公司内部，共享插件的推荐方法是通过组织的私有市场 - 管理员管理的公司批准的插件目录。</p>\n<p class=\"text-base leading-relaxed text-secondary\">实际上，分发是一种交接。您将插件带给您组织的市场所有者（可能是团队领导、支持或运营所有者或 IT），然后他们发布该插件。当他们这样做时，他们会选择如何为其他人提供服务：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">可用 - 它出现在公司目录中，人们可以根据需要安装它。</li>\n<li class=\"text-base leading-relaxed text-secondary\">默认安装——当人们打开 Cowork 时它就已经存在；他们可以将其关闭。</li>\n<li class=\"text-base leading-relaxed text-secondary\">必需 — 已安装并保持开启状态；对于每个人都需要以相同方式运行的合规性检查之类的事情很有用。</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">从您的队友的位置来看，该插件只会显示在他们的目录中，标记为来自您的公司，以及公共 Anthropic 插件。他们可以使用它并关闭它（除非需要），但他们无法编辑它 - 更新来自维护它的人。</p>\n<p class=\"text-base leading-relaxed text-secondary\">这对您来说所关注的取决于您的管理员设置的内容。有些组织有一个正在运行的市场，并且有一个明确的所有者来将东西交给；其他人还没有打开它。使用下面的互动来查找您的情况和正确的下一步。</p>\n<p class=\"text-base leading-relaxed text-secondary\">将您在组织中看到的内容与适合的分发路径相匹配，以及在市场尚未上线时与谁交谈。</p>"
      },
      {
        "id": "sec-2",
        "title": "值得保持的习惯",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">一组防止共享插件悄然失效的简短实践：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">每个共享插件都有一个指定人员来审查更改，在编辑后运行评估，并决定何时更新或停用它。</li>\n<li class=\"text-base leading-relaxed text-secondary\">同时发布前都会进行评估。将 eval 循环视为大门——如果您关心的案例在更改后不成立，请不要将其推给所有人。</li>\n<li class=\"text-base leading-relaxed text-secondary\">具体命名技能和插件。 “meeting-prep”可能会与组织插件目录中的其他三个会议准备技能发生冲突。 “销售-客户-续订-准备”不会。</li>\n<li class=\"text-base leading-relaxed text-secondary\">设置审核节奏。 每季度是一个合理的起点，可以查看已安装的内容、实际使用的内容以及过时的内容。淘汰没有人运行的东西，并在人们发现改进机会的地方进行修改。</li>\n</ul>"
      },
      {
        "id": "sec-3",
        "title": "课后反思",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">恐怕您和您的直接年龄现在在 Cowork 中是最依赖的技能。</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">哪两个或三个将是第一个捆绑到团队插件中的候选者？</li>\n<li class=\"text-base leading-relaxed text-secondary\">您的组织中谁是您想要将该插件提供给的人 - 可以将其推向市场的人？</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">如果您还不知道第二个问题的答案，那么这就是您真正的下一步。</p>"
      },
      {
        "id": "sec-4",
        "title": "接下来是什么",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在最后一课中，您将快速回顾一下刚刚经历的弧线以及保持势头的下一步行动。</p>"
      }
    ],
    "prevLesson": {
      "slug": "validating-skills-for-plugins",
      "title": "插件技能校验与安全性审计"
    },
    "nextLesson": {
      "slug": "troubleshooting-next-steps",
      "title": "Wrap up and next steps"
    }
  },
  "troubleshooting-next-steps": {
    "lessonId": "troubleshooting-next-steps",
    "lessonTitle": "总结和后续步骤",
    "lessonIndex": 13,
    "totalLessons": 14,
    "duration": "8 分钟",
    "outcomes": [
      "回想一下 Cowork 101 的弧线以及每个模块为您提供的内容",
      "总结和后续步骤"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "what-is-cowork",
        "title": "1.什么是Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "getting-set-up",
        "title": "2.设置Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "scheduled-tasks",
        "title": "3. Claude Cowork 震惊您做什么",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "the-task-loop",
        "title": "4. 将你的第一个任务迁移 Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "research-analysis-at-scale",
        "title": "5.更快获得更好的结果",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "giving-cowork-context",
        "title": "6. 常设背景：全球指令和项目",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "file-document-tasks",
        "title": "7. Plugins 插件：以你的方式教 Claude Cowork",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "plugins-cowork-as-a-specialist",
        "title": "8. 插件：编码团队的专业知识",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "claude-in-chrome",
        "title": "9. 浏览器协同与网页动态交互",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "claude-for-microsoft-365",
        "title": "10.集成Microsoft 365办公生态",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "permissions-usage-choosing-your-model",
        "title": "11. 安全工作的最佳实践",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "validating-skills-for-plugins",
        "title": "12. 插件技能校验与安全性审计",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "share-what-you-build-with-your-team",
        "title": "13. 与团队共享成果与工作流资产",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "14",
        "slug": "troubleshooting-next-steps",
        "title": "14. 总结和后续步骤",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "您所涵盖的内容",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">概要：协作不仅仅是聊天，还可以让您委派真正的工作。课程中的其他内容均以此为基础。</p>"
      },
      {
        "id": "sec-1",
        "title": "立即尝试",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">选择其中一项本周要做的事情。</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">设置内存。 编写一个五句话的全局指令块，或者为您已经参与的工作流创建一个项目。</li>\n<li class=\"text-base leading-relaxed text-secondary\">在云端安排任务或运行 Cowork。 采取经常性的可交付成果并按节奏进行。或者在云端运行 Cowork（测试版，符合资格的计划），这样下次在下班时间想到什么事情时，您就可以通过手机将其交给您。</li>\n<li class=\"text-base leading-relaxed text-secondary\">安装插件。 转到自定义 → 插件，安装最接近您的角色的插件，然后针对本周的工作版本运行它。</li>\n<li class=\"text-base leading-relaxed text-secondary\">尝试浏览器与网页动态交互或M365。选择与您大部分实际工作发生的位置相符的界面，安装它，然后在一项任务中使用它。</li>\n<li class=\"text-base leading-relaxed text-secondary\">分享您构建的东西。 分享您发现有价值的用例、产生良好结果的工作流程或您与团队一起构建的技能。你可以成为他们需要的解锁者，让他们能够更轻松地与Claude合作。</li>\n</ul>"
      },
      {
        "id": "sec-2",
        "title": "更深入",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">一些值得了解的学习路径：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">AI流畅度：框架和基础（在新选项卡中打开）。有效使用人工智能工作的基础——提示、评估输出、了解人工智能何时是正确的工具、何时不是正确的工具。</li>\n<li class=\"text-base leading-relaxed text-secondary\">人工智能的能力和局限性（在新选项卡中打开）。对生成式人工智能工具可以跨模式和表面执行哪些操作进行更深入的调查。</li>\n<li class=\"text-base leading-relaxed text-secondary\">Claude101（在新选项卡中打开）。关于在所有表面上使用 Claude 的配套课程。</li>\n<li class=\"text-base leading-relaxed text-secondary\">Claude 示例库（在新选项卡中打开）。向 Claude Cowork 寻求有关下一步委托事项的想法和灵感。</li>\n</ul>"
      }
    ],
    "prevLesson": {
      "slug": "share-what-you-build-with-your-team",
      "title": "与团队共享成果与工作流资产"
    }
  }
};
