import { LessonLayoutProps } from '../../components/LessonLayout';

export const CLAUDE_CODE_IN_ACTION_LESSONS: Record<string, Omit<LessonLayoutProps, 'courseId' | 'courseTitle'>> = {
  "steering-long-sessions": {
    "lessonId": "steering-long-sessions",
    "lessonTitle": "开始课程",
    "lessonIndex": 0,
    "totalLessons": 10,
    "duration": "6 分钟",
                      "outcomes": [
        "用计划模式在 Claude 开始前界定工作范围"
,
        "用压缩、回退、goal 与 loop 在运行时引导 Claude"
,
        "用 worktrees 在相同代码库上安全地并行运行代理"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "steering-long-sessions",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "a-claude-md-that-follows",
        "title": "2. CLAUDE.md 如下",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "verification-skills",
        "title": "3、验证技巧",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "permission-modes",
        "title": "4. 权限模式",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "hooks",
        "title": "5. Hooks 自动化钩子机制 自动化钩子机制",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "routines-and-headless",
        "title": "6.套路与无头",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "github-actions-and-code-review",
        "title": "7. GitHub 操作和代码审查",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "trust-it-verifying-unsupervised-runs",
        "title": "8. 相信它：验证无监督运行",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "plugins",
        "title": "9. 插件",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "course-quiz",
        "title": "10. 课程测验",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
                "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>让 Claude 快速完成一个小任务很容易：你提问，它工作，你检查结果。但长任务是另一回事——跨十几个文件的重构、构建一个新功能可能要花几个小时，而你在过程中需要引导的次数越多，它拖得越久。</p><p>好消息是，你有很多工具可以帮助 Claude 度过这些长会话。归根结底是两个习惯：<strong>在 Claude 开始前界定工作范围，在它运行时引导它</strong>。下面逐一展开。</p>"
      },
      {
        "id": "sec-1",
        "title": "先用计划模式界定范围",
        "contentHtml": "<p>在 Claude 写一行代码之前，先让它拿出一份计划。在<strong>计划模式（plan mode）</strong>中，Claude 以只读方式做研究：阅读代码、弄清楚需要改什么、把计划交给你审阅。</p><p>拿到计划后，<strong>要真正读它，不要略读</strong>。计划越周详，Claude 开始执行后你遇到的意外就越少。如果有什么不对或缺失，直接让 Claude 在你希望的位置补上。在计划上迭代，远比让 Claude 跑起来然后祈祷最好结果、再回头收拾烂摊子要快。</p>"
      },
      {
        "id": "sec-2",
        "title": "在 Claude 工作时引导它",
        "contentHtml": "<p>Claude 运行起来后，你有几种方式让它保持在正确方向上。第一种是<strong>压缩（Compaction）</strong>。</p><h3>Compaction（压缩）</h3><p>压缩会总结你的对话、用总结作为新的上下文、删除旧消息。这释放了上下文窗口，让 Claude 能继续工作。风险是：总结里可能丢掉重要的东西，导致 Claude 偏离方向。</p><p>所以不要只运行 <code>/compact</code>。在命令后加上指令，告诉 Claude 如何总结。例如，如果你很久前完成了调试、现在只关心某些 API 变更，就说出来：</p><pre><code>/compact Focus on the --version flag implementation</code></pre><p>命令后写的任何内容都会塑造总结保留什么。这就是你驾驭上下文的「方向盘」。</p><h3>Rewind（回退）</h3><p>当 Claude 走错方向时，你不必用提示词把它拽回来。Rewind 会带你回到上一个检查点。每次用户提示都会创建一个你可以回退的检查点。要打开菜单，在空提示框上双击 Esc。</p><p>回退菜单提供几个选项：</p><ul><li><strong>Restore code and conversation</strong>——把代码和对话一起回滚</li><li><strong>Restore conversation</strong>——只回滚聊天</li><li><strong>Restore code</strong>——只回滚文件</li><li><strong>Summarize from here</strong>——总结检查点之后的一切。适合你有过一段无关对话、想释放空间时</li><li><strong>Summarize up to here</strong>——总结检查点之前的一切。适合你有一段很长的准备阶段想压缩、但想保留实现部分时</li></ul>"
      },
      {
        "id": "sec-3",
        "title": "让 Claude 更自主地运行",
        "contentHtml": "<p>以上都假设你亲力亲为、边看边纠正。如果你想要更自主的方式，还有 goal 和 loop。</p><h3>Goal（目标）</h3><p>Goal 设置一个完成条件。你描述「完成」长什么样，Claude 会跨回合持续工作，直到一个快速评估器确认条件已满足——它不会在自以为完成时第一次就停。</p><p>例如：</p><pre><code>/goal all tests in src/billing pass, and the type checker reports zero errors</code></pre><p>要取消它，运行 <code>/goal clear</code>。一个重要的约束：评估器只读取对话记录。所以你的条件必须能从 Claude 实际产生的输出（比如测试运行的结果）中检查出来。</p><h3>Loop（循环）</h3><p>Loop 在回合之间按间隔运行一个提示词，可以是固定间隔或自定步调。用来拉取外部状态，比如 CI 运行或部署，并在状态变化时采取行动。要停止循环，按 Esc 即可。</p>"
      },
      {
        "id": "sec-4",
        "title": "用 worktrees 运行并行工作",
        "contentHtml": "<p>到目前为止的「引导」比喻是同一辆车里一个方向盘。但当你在同一代码库上运行多个代理时，你不想要一辆车里两个方向盘——那不安全。两个 Claude 会话争抢同一个文件会引发冲突。</p><p>这就是 <strong>worktrees（工作树）</strong>的用武之地：不让会话互相踩踏，每个会话获得自己独立的文件树。</p><p>因为每个代理都有自己的树，它们无法覆盖彼此的改动。当会话退出时，干净的工作树会被自动移除。</p><p>有一个有用的文件值得了解：仓库根目录的 <code>.worktreeinclude</code> 文件列出了要复制到每个工作树的 git-ignore 文件。这对环境变量文件或本地配置这类「每个工作树都需要、但不想提交到版本控制」的东西很有用。</p>"
      },
      {
        "id": "sec-5",
        "title": "整合：关键习惯",
        "contentHtml": "<p>处理长 Claude Code 会话归结为几个习惯：</p><ul><li>先界定工作范围，再引导</li><li>引导压缩方向，让总结保留重要的东西</li><li>Claude 偏离时用回退菜单纠偏</li><li>当你能描述「完成」比描述「步骤」更好时，设置 goal</li><li>在 worktrees 中运行并行工作</li></ul><p>做到这些，你就能信任一次长时运行，而不必每步都盯着。</p>"
      }
    ],
    "nextLesson": {
      "slug": "a-claude-md-that-follows",
      "title": "A CLAUDE.md that follows"
    }
  },
  "a-claude-md-that-follows": {
    "lessonId": "a-claude-md-that-follows",
    "lessonTitle": "接下来是 CLAUDE.md",
    "lessonIndex": 1,
    "totalLessons": 10,
    "duration": "7 分钟",
                      "outcomes": [
        "理解 CLAUDE.md 是指引而非强制配置"
,
        "区分硬规则（进 hooks）与软约定（进 CLAUDE.md）"
,
        "用具体、可检查、说明替代方案的措辞写规则"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "steering-long-sessions",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "a-claude-md-that-follows",
        "title": "2. CLAUDE.md 如下",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "verification-skills",
        "title": "3、验证技巧",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "permission-modes",
        "title": "4. 权限模式",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "hooks",
        "title": "5. Hooks 自动化钩子机制 自动化钩子机制",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "routines-and-headless",
        "title": "6.套路与无头",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "github-actions-and-code-review",
        "title": "7. GitHub 操作和代码审查",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "trust-it-verifying-unsupervised-runs",
        "title": "8. 相信它：验证无监督运行",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "plugins",
        "title": "9. 插件",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "course-quiz",
        "title": "10. 课程测验",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
                "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>这里有一个几乎人人都踩过的陷阱：你的 CLAUDE.md 文件不断膨胀。遇到一个问题，你加一条规则；又遇到一个，再加一条。没过多久你就有了一整个巨型文件，而 Claude 开始忽略其中的部分内容。这不是 Claude 的 bug，而是这个文件的工作方式。</p><p>关键在于理解：<strong>CLAUDE.md 不是被强制执行的配置，而是指引（guidance）</strong>。每一行都在与其他每一行争夺 Claude 的注意力。文件越长，它越与自己竞争，Claude 遵循任何单条规则的可靠性就越低。所以目标不是写下一切，而是保持文件精简。<strong>文件越精简，Claude 实际遵循的部分越多。</strong></p>"
      },
      {
        "id": "sec-1",
        "title": "先问：CLAUDE.md 是正确的工具吗",
        "contentHtml": "<p>写一条规则之前，先问它是否真的属于 CLAUDE.md。有些规则是指引，有些规则是绝不能越过的硬线——这是两种不同的工作。</p><p>以「绝不推送到 main」这样的规则为例。如果你把它写进 CLAUDE.md，你是在希望 Claude 读到并尊重它。大多数时候它会。但「大多数时候」对这么危险的事不够好。这种硬规则应该放在 <strong>pre-tool-use hook</strong> 里。</p><p>区别很重要：hook 是在 Claude 采取行动之前运行的代码，它可以<strong>真正阻止</strong>行动。即使 Claude 真的试图推送到 main，hook 也会拦住它。这是真正的强制执行，而不是礼貌的请求。把硬规则移到 hooks 里，让 CLAUDE.md 处理较软的习惯约定。</p>"
      },
      {
        "id": "sec-2",
        "title": "四个存放位置",
        "contentHtml": "<p>CLAUDE.md 不只是项目里的一个文件。它有四个可以存放的位置，Claude 启动时会<strong>把它们全部一起加载</strong>。什么都不丢失，而且它们会叠加。</p><ul><li><strong>Managed policy（受管策略）</strong>——由你平台团队控制的组织级文件。你无法排除它，所以组织策略始终生效。</li><li><strong>User（用户）</strong>——你的个人偏好，跟随你出现在机器上的每个项目。</li><li><strong>Project（项目）</strong>——与团队共享、检入仓库的文件。</li><li><strong>Local（本地）</strong>——被 git 忽略。仅针对这一个仓库的个人笔记。</li></ul><p>最后一个（local）容易被忽视，但非常实用。比如你在自己的分支上做重构，想让 Claude 在工作中记住某些架构决策。这不该放进会影响整个团队的共享项目文件，而应放进 local——只属于你在这个仓库的使用。</p>"
      },
      {
        "id": "sec-3",
        "title": "用导入拆分大文件",
        "contentHtml": "<p>当你的项目文件开始变长时，可以用路径导入语法把它拆成几块。不用一面文本墙，而是指向其他文件：</p><pre><code>@.claude/conventions/code-style.md\n@.claude/conventions/testing.md\n@.claude/conventions/workflow.md</code></pre><p>这对组织很有帮助。但要确切知道它给你带来了什么，因为很容易误解。Claude 启动时，会在你引用的位置<strong>内联展开</strong>这些导入的文件。所以导入帮你保持整洁，但所有内容仍然一次性加载。它们<strong>不会减少</strong>Claude 需要读取的上下文量。用导入来组织，而不是用来缩小负载。</p>"
      },
      {
        "id": "sec-4",
        "title": "措辞决定规则是否被遵守",
        "contentHtml": "<p>一旦你决定一条规则属于 CLAUDE.md，Claude 是否真的遵守它，取决于你如何措辞。大多数规则失败是因为含糊。以下是修正方法。</p><h3>要具体、可检查</h3><p>不要写「遵循最佳实践」。你真的确切知道那是什么意思吗？如果你无法检查它是否被遵守，Claude 也不能。对比这两条：</p><ul><li>含糊的：「为 API 路由遵循最佳实践。」</li><li>具体的：「把新的 API 路由放在 <code>src/api/handlers</code>，每个文件一个。」</li></ul><p>第二条是显式的：你可以看结果并立刻判断是否做对了。这是每条规则都应该达到的标准。</p><h3>说出替代方案，而不仅仅禁止</h3><p>当你告诉 Claude 不要做某事时，要说该做什么来替代。否则你就留了门缝。</p><ul><li>留门缝：「不要使用默认导出。」——好吧，然后呢？</li><li>关上门：「使用命名导出，而不是默认导出。」</li></ul><p>第二个版本说出了替代方案，没有任何可以误解的余地。</p><h3>强调是有预算的</h3><p>像「IMPORTANT」「YOU MUST」这样的词确实会提高规则优先级。但只是相对于周围更安静的内容而言。如果每条规则都在喊叫，那就没有突出的，强调也失去意义。所以把强调当作预算：花在那两三条被违反时真正会痛的规则上，其余的保持正常音量。</p>"
      },
      {
        "id": "sec-5",
        "title": "保持文件持续修订",
        "contentHtml": "<p>你的 CLAUDE.md 文件永远没有「完成」的状态。把它当作持续编辑的活代码。</p><p>当 Claude 做错事时，不要只是叹气然后手工修复。把它当作针对 CLAUDE.md 的<strong>bug 报告</strong>。你甚至可以直接告诉 Claude：「把那条加到 CLAUDE.md 文件里」，它会帮你写出规则。这样，每次出错文件都会变得更好。</p>"
      },
      {
        "id": "sec-6",
        "title": "结论",
        "contentHtml": "<p>把 CLAUDE.md 当作生产代码对待。如果你无法为某一行辩护，就删掉它。要保持文件精简且可遵循：</p><ul><li>把硬规则移到 hooks 里，在那里它们被真正强制执行</li><li>用导入组织长文件（记住：它们不减少上下文）</li><li>让每条规则具体且可检查，并说出替代方案</li><li>把强调预算花在最重要的少数规则上</li><li>每当 Claude 出错就持续修订文件</li></ul><p>整个想法很简单：<strong>文件越精简，Claude 遵循的部分越多。</strong></p>"
      }
    ],
    "prevLesson": {
      "slug": "steering-long-sessions",
      "title": "Start course"
    },
    "nextLesson": {
      "slug": "verification-skills",
      "title": "Verification skills"
    }
  },
  "verification-skills": {
    "lessonId": "verification-skills",
    "lessonTitle": "验证技巧",
    "lessonIndex": 2,
    "totalLessons": 10,
    "duration": "5 分钟",
                      "outcomes": [
        "理解验证技能如何自动检查 Claude 的工作"
,
        "用 reference 与脚本组织技能文件夹"
,
        "区分 CLAUDE.md、技能与 hook 各自该承载的规则"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "steering-long-sessions",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "a-claude-md-that-follows",
        "title": "2. CLAUDE.md 如下",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "verification-skills",
        "title": "3、验证技巧",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "permission-modes",
        "title": "4. 权限模式",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "hooks",
        "title": "5. Hooks 自动化钩子机制 自动化钩子机制",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "routines-and-headless",
        "title": "6.套路与无头",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "github-actions-and-code-review",
        "title": "7. GitHub 操作和代码审查",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "trust-it-verifying-unsupervised-runs",
        "title": "8. 相信它：验证无监督运行",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "plugins",
        "title": "9. 插件",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "course-quiz",
        "title": "10. 课程测验",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
                "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>随着项目增长，你会开始注意到同样的工作反复出现。你已经知道技能（skills）是自动化重复工作的好方法。本课我们看一个技能特别擅长的具体工作：<strong>验证自己的工作</strong>。如果只先构建一个技能，那就是它。</p>"
      },
      {
        "id": "sec-1",
        "title": "为什么验证技能是第一个该构建的",
        "contentHtml": "<p>想想你通常如何检查 Claude 的工作。你让它重构某段代码，它完成了，然后你得记住去复查。也许你让它运行测试，也许你自己读 diff。问题在于：<strong>检查依赖于你记得去要求</strong>。跳过这一步一次，坏代码就溜过去了。</p><p>验证技能消除了这个依赖。它的形状是这样的：你让 Claude 重构某段代码。它完成后，改动匹配技能描述，所以技能<strong>自动触发</strong>。从那里它：</p><ul><li>运行测试套件</li><li>读取 diff</li><li>检查没有测试被削弱来让一切通过</li><li>报告通过或失败，并附上证据</li></ul><p>整个过程无需你要求就能运行。技能上的描述是触发它的开关，一旦触发，它每次走同样的步骤。</p><p>注意链条里最后一项检查。光运行测试看到绿灯还不够——测试可以被悄悄放宽，无论什么情况都通过。所以技能要读 diff、确认测试没有被削弱。「完成」不是光读 diff 就「代码看起来对」。「完成」是关卡被运行和观察，结果被明确陈述。</p><p>同样的形状适用于你团队重复的任何流程：发布检查清单、迁移配方、PR 前检查。经验法则：如果你两次输入了同样的多步指令，那它就该是一个技能。</p>"
      },
      {
        "id": "sec-2",
        "title": "技能文件夹可以承载更多内容",
        "contentHtml": "<p>技能不只是一个 <code>skill.md</code> 文件。它周围的文件夹可以携带其他东西，这正是技能对验证如此强大的原因。</p><ul><li>在技能旁放一个 <code>reference.md</code> 存放详细资料，然后从 <code>skill.md</code> 链接它。Claude 只在真正需要那种深度时才读它，主文件保持简短。</li><li>把脚本也放进文件夹。Claude 执行它们，而不是把内容加载进上下文。这意味着技能可以携带自己的工具，比如一个运行所有关卡的 <code>check.sh</code>。</li></ul><p>要点：让 <code>skill.md</code> 本身保持精简。把沉重的内容——长解释和可执行脚本——推到旁侧文件里。精简文件描述要做什么；旁侧文件承载深度与工具。</p>"
      },
      {
        "id": "sec-3",
        "title": "哪条指令面属于哪条规则",
        "contentHtml": "<p>现在你有三个放指令的地方，很容易搞混。这里有一个快速区分方法。</p><p>始终适用的约定——比如命名规则或文件放哪里——属于你的 <code>CLAUDE.md</code> 文件。与特定任务类型绑定的流程和参考资料属于技能。</p><p>还有第三种情况：Claude <strong>绝不能跳过</strong>的规则属于 hook，而不是以上任何一种。因为 <code>CLAUDE.md</code> 和技能都是 Claude 遵循的指令，而 hook 是实际运行的代码。如果跳过这条规则不可接受，就不要把它留给「遵循指令」。</p>"
      },
      {
        "id": "sec-4",
        "title": "回顾",
        "contentHtml": "<p>技能是一个带 <code>skill.md</code> 的文件夹：一个名称、一个触发它的描述、以及流程本身。在真正需要技能之前，只有描述加载进上下文，所以打包你重复的每个流程没有成本。</p><p>从验证开始。构建技能，检入你项目的 <code>.claude/skills</code>，现在整个团队继承了同一个动作。每个人的工作都以同样的方式被自动检查——没有人需要记得去要求。</p>"
      }
    ],
    "prevLesson": {
      "slug": "a-claude-md-that-follows",
      "title": "A CLAUDE.md that follows"
    },
    "nextLesson": {
      "slug": "permission-modes",
      "title": "Permission modes"
    }
  },
  "permission-modes": {
    "lessonId": "permission-modes",
    "lessonTitle": "权限模式",
    "lessonIndex": 3,
    "totalLessons": 10,
    "duration": "5 分钟",
                      "outcomes": [
        "描述六种权限模式各自允许什么"
,
        "理解 auto 模式中分类器与 stop hook 的配合"
,
        "为无人值守运行选择 Don't ask，为隔离环境保留 Bypass"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "steering-long-sessions",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "a-claude-md-that-follows",
        "title": "2. CLAUDE.md 如下",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "verification-skills",
        "title": "3、验证技巧",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "permission-modes",
        "title": "4. 权限模式",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "hooks",
        "title": "5. Hooks 自动化钩子机制 自动化钩子机制",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "routines-and-headless",
        "title": "6.套路与无头",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "github-actions-and-code-review",
        "title": "7. GitHub 操作和代码审查",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "trust-it-verifying-unsupervised-runs",
        "title": "8. 相信它：验证无监督运行",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "plugins",
        "title": "9. 插件",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "course-quiz",
        "title": "10. 课程测验",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
                "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>权限模式让你一次决定好：Claude 可以运行什么而无需停下来问你。不必一个提示一个提示地批准每个动作，你选择一种匹配工作的模式，让 Claude 在你觉得舒服的信任级别上工作。</p><p>你已经见过其中几种模式。每次按 shift-tab 就会在 manual、accept edits 和 plan 之间循环——它们覆盖日常的亲手操作。其余的模式才是真正「放手让 Claude 跑」的地方，其中要伸手去拿的是 <strong>auto</strong>。</p>"
      },
      {
        "id": "sec-1",
        "title": "六种权限模式",
        "contentHtml": "<p>以下是完整的集合。每种模式在「自由运行」与「需要你签字」之间画出不同的线：</p><ul><li><strong>Manual（手动）</strong>——只读，无需提示。其他一切先询问。</li><li><strong>Accept edits（接受编辑）</strong>——读取、文件编辑和常见文件系统 bash 命令无需询问。用于你事后审查的迭代式编码。</li><li><strong>Plan（计划）</strong>——只读。做研究、提出改动建议，但不编辑任何东西。</li><li><strong>Auto（自动）</strong>——接受一切，但每个动作执行前由<strong>独立的分类器模型</strong>审查。</li><li><strong>Don't ask（不询问）</strong>——只允许预先批准的工具。其他一切自动拒绝、不提示。</li><li><strong>Bypass permissions（绕过权限）</strong>——跳过所有检查。相当于 dangerously-skip-permissions 标志。只应在隔离的容器或虚拟机内运行。</li></ul>"
      },
      {
        "id": "sec-2",
        "title": "用 shift-tab 循环切换",
        "contentHtml": "<p>你不必记住每种模式的命令。按 shift-tab 在常用模式间循环：manual、accept edits、plan 和 auto。底部的状态栏始终显示你当前所处的模式，低头看一眼就知道 Claude 被允许做什么。</p>"
      },
      {
        "id": "sec-3",
        "title": "auto 模式如何工作",
        "contentHtml": "<p>Auto 是放手模式。Claude 自主运行，但每个动作执行前，一个<strong>独立的分类器模型</strong>会审查它。分类器守护的是<strong>意图</strong>——它在留意那些超越你实际要求范围的升级动作。</p><p>它设计来阻止的典型行为：</p><ul><li>生产部署与迁移</li><li>强制推送，或把下载的代码直接管道进 shell</li><li>向外部端点发送敏感数据</li><li>销毁会话中存在的文件</li></ul><p>它会放行日常工作：项目内的本地编辑、从你的 lock 文件安装依赖、只读请求、推送到你自己的分支。</p>"
      },
      {
        "id": "sec-4",
        "title": "分类器不能做什么",
        "contentHtml": "<p>分类器检查意图，不检查正确性。它不会发现代码是否真的能工作。所以如果你让 Claude 重构认证逻辑而它写出了有问题的认证代码，分类器会放行——因为「有问题」不等于「危险」。</p><p>这就是为什么要把 auto 模式与运行测试的 <strong>stop hook</strong> 搭配使用。两者协同：</p><ul><li>auto 模式在运行时观察 Claude 试图做什么</li><li>stop hook 在 Claude 完成后确认代码真的能运行</li></ul><p>一个在每次动作前守护意图，另一个在动作后守护正确性。auto 模式的护栏仍在演进，请查阅文档了解当前的拦截与放行清单。</p>"
      },
      {
        "id": "sec-5",
        "title": "Don't ask：用于无人值守运行",
        "contentHtml": "<p>只要没有人在场批准提示词，Don't ask 就是正确的选择：CI 流水线、定时任务、隔夜批处理。只允许预先批准的工具，清单之外的一切自动拒绝、不提示。这正是它的意义——你的流水线继续推进，而不是挂在一个没人会批准的确认上。</p>"
      },
      {
        "id": "sec-6",
        "title": "按任务匹配模式",
        "contentHtml": "<p>权限模式有好几种，常用模式用 shift-tab 循环。总结一下：</p><ul><li><strong>Auto</strong> 是放手模式。分类器在每次动作前检查意图，stop hook 在动作后检查正确性。</li><li><strong>Don't ask</strong> 覆盖没有人在场批准的无人值守流水线。</li><li><strong>Bypass permissions</strong> 只属于隔离容器和虚拟机内部。</li></ul><p>选择适合你正在做的事情的模式，让 Claude 在那个级别上运行。</p>"
      }
    ],
    "prevLesson": {
      "slug": "verification-skills",
      "title": "Verification skills"
    },
    "nextLesson": {
      "slug": "hooks",
      "title": "Hooks 自动化钩子机制 自动化钩子机制"
    }
  },
  "hooks": {
    "lessonId": "hooks",
    "lessonTitle": "Hooks 自动化钩子机制 自动化钩子机制",
    "lessonIndex": 4,
    "totalLessons": 10,
    "duration": "7 分钟",
                      "outcomes": [
        "理解 hook 事件在代理循环中的位置"
,
        "用 PreToolUse 返回 JSON 决定或改写工具调用"
,
        "用退出码语义与跨压缩状态保留构建护栏"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "steering-long-sessions",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "a-claude-md-that-follows",
        "title": "2. CLAUDE.md 如下",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "verification-skills",
        "title": "3、验证技巧",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "permission-modes",
        "title": "4. 权限模式",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "hooks",
        "title": "5. Hooks 自动化钩子机制 自动化钩子机制",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "routines-and-headless",
        "title": "6.套路与无头",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "github-actions-and-code-review",
        "title": "7. GitHub 操作和代码审查",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "trust-it-verifying-unsupervised-runs",
        "title": "8. 相信它：验证无监督运行",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "plugins",
        "title": "9. 插件",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "course-quiz",
        "title": "10. 课程测验",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
                "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>在 CLAUDE.md 文件里告诉 Claude 做事有个问题：那是请求，不是保证。你可以写「编辑后总是格式化」，Claude 通常也会听。但在一段你没看着的长运行里，「通常」不够好。<strong>Hook 解决了这个问题</strong>。hook 是在循环中固定点运行的确定性代码，所以它能<strong>保证</strong>行为，而不是期待行为。它把一条规则从「Claude 通常会听」变成「Claude 无法跳过它」。</p>"
      },
      {
        "id": "sec-1",
        "title": "Hook 事件",
        "contentHtml": "<p>Claude Code 在一次会话中会触发大约 30 个 hook 事件。你不需要全部了解。有一小撮是你反复会用到的，它们与代理循环中你想介入的点对齐。</p><p>值得认识的几个：</p><ul><li><strong>PreToolUse</strong>——在工具调用前触发。这是你的<strong>强制执行原语</strong>，是能在事情发生前阻止它的那一个。</li><li><strong>PostToolUse</strong>——在成功的工具调用后触发。通常用来放自动格式化或自动 lint。</li><li><strong>Stop</strong>——当 Claude 想结束回合时触发。如果某些条件未满足，你可以拒绝并说「不，你还没做完」。还有一个对应的 SubagentStop，在子代理完成时触发。</li><li><strong>PreCompact / PostCompact</strong>——在压缩前后触发。</li><li><strong>InstructionsLoaded</strong>——当 CLAUDE.md 或规则文件加载时触发。方便审计什么真的进入了上下文。</li><li><strong>SessionStart</strong>——在会话开始时触发，用于准备环境。如果只想在全新启动时生效，使用 <code>startup</code> source。</li></ul><p>一个容易绊倒人的点：压缩后重新注入上下文，不要用 PostCompact，要用带 <code>compact</code> matcher 的 SessionStart——那才是真正把输出放回对话里的那个。</p>"
      },
      {
        "id": "sec-2",
        "title": "PreToolUse：用 JSON 返回决定",
        "contentHtml": "<p>PreToolUse 是真正有力量的地方，因为它能在工具调用运行之前阻止它。你与 Claude 对话的方式是打印 JSON 并以退出码 0 结束。关键字段是 <code>permissionDecision</code>，它取三个值之一：</p><ul><li><code>allow</code>——放行调用</li><li><code>deny</code>——阻止调用</li><li><code>ask</code>——交回给用户决定</li></ul><p>技术上还有第四个值 <code>defer</code>，但它只适用于非交互式 <code>-p</code> 运行——调用进程暂停工具、稍后恢复。你很少会用到它。</p><p>形状如下：</p><pre><code>{\n  \"hookSpecificOutput\": {\n    \"hookEventName\": \"PreToolUse\",\n    \"permissionDecision\": \"deny\",\n    \"permissionDecisionReason\": \"...\",\n    \"updatedInput\": {\n      \"command\": \"...\"\n    }\n  }\n}</code></pre><p>注意 <code>updatedInput</code>。除了阻止调用，你还可以<strong>改写</strong>它。这就是从 bash 命令中隐去密钥但仍让它运行的方法。一个注意点：<code>updatedInput</code> 会替换整个输入对象，所以你必须把你没在改的字段也回显出来，否则它们会丢失。</p>"
      },
      {
        "id": "sec-3",
        "title": "退出码：给不返回 JSON 的 hook",
        "contentHtml": "<p>不是每个 hook 都需要说 JSON。对更简单的 hook，退出码就够了。有三个数字值得记住：</p><ul><li><strong>0</strong> 是成功。如果标准输出是 JSON，Claude 会解析它。纯文本在大多数事件中被忽略，但在 SessionStart、UserPromptSubmit 和 UserPromptExpansion 上，纯文本会被加入上下文——这正是状态保存 hook 能工作的原因。</li><li><strong>2</strong> 是阻塞错误。标准错误会被作为上下文反馈给 Claude。这几乎处处都是阻塞退出码。</li><li><strong>其他任何值</strong> 是非阻塞的。标准错误被记录，Claude 继续前进。</li></ul><p>最容易绊倒人的是退出码 1。它感觉像错误，但<strong>不会阻塞</strong>——Claude 照样运行命令。所以如果你想阻止什么，用 2，不是 1。</p><p>还有几个细节。退出 2 甚至能阻塞 Stop——这就是你告诉 Claude「还没做完」的方式。但 PostToolUse 在工具已经运行后才触发，所以在那里阻塞已经太迟、无法阻止调用，不过仍然可以把文本反馈给 Claude。而少数事件完全忽略阻塞，比如 Notification 和 SessionStart——它们会显示你的标准错误然后继续。</p>"
      },
      {
        "id": "sec-4",
        "title": "真实护栏：改写而非阻止",
        "contentHtml": "<p>用一个实用案例把这一切串起来。假设你想在 Bash 工具上加一个 PreToolUse 护栏。matcher 选择要监视的工具，可选的 <code>if</code> 子句可以把它缩小到特定命令。</p><p>明显的做法是返回 <code>deny</code> 阻止危险调用。这很好。但更不为人知、更有趣的做法是返回 <code>updatedInput</code> 来<strong>改写</strong>调用。这就是从命令中剥离密钥、但仍让它运行的方法，而不是只是拒绝。</p><p>实践中是这样的：Claude 被要求运行一个包含看起来很真实的密钥的命令。hook 拦截它，发现 <code>sk_live_</code> 模式，在命令真正执行前把它换成占位符。</p><p>命令照常运行了。工作照常完成了。但密钥从未通过。这就是「阻止」与「改写」的区别，也是 hook 每次都能强制执行的那种事情。</p>"
      },
      {
        "id": "sec-5",
        "title": "跨压缩保留状态",
        "contentHtml": "<p>还有一个值得配置的模式。当 Claude 压缩长对话时，会丢失大量细节。带 <code>compact</code> matcher 的 SessionStart hook 在压缩后立即运行。让它打印一份你一直在处理的文件的简短总结。这份总结会回到上下文中，所以 Claude 能接着上次继续，而不是冷启动。</p>"
      },
      {
        "id": "sec-6",
        "title": "总结",
        "contentHtml": "<p>Hooks 把 Claude 通常遵循的规则变成它总是遵循的规则。超越自动格式化：用 PreToolUse 守护工具、用 Stop 把关回合、跨压缩保留状态。搭建需要一点前期功夫，但第一次在你没盯着看的运行中抓到问题时，就值回票价了。</p>"
      }
    ],
    "prevLesson": {
      "slug": "permission-modes",
      "title": "Permission modes"
    },
    "nextLesson": {
      "slug": "routines-and-headless",
      "title": "Routines and headless"
    }
  },
  "routines-and-headless": {
    "lessonId": "routines-and-headless",
    "lessonTitle": "套路和无头",
    "lessonIndex": 5,
    "totalLessons": 10,
    "duration": "7 分钟",
                      "outcomes": [
        "用 routines 把重复提示词自动化到云端"
,
        "用 -p 无头模式、JSON 输出与会话恢复构建脚本"
,
        "按场景在 routines、headless、--bare 与 Agent SDK 间选择"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "steering-long-sessions",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "a-claude-md-that-follows",
        "title": "2. CLAUDE.md 如下",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "verification-skills",
        "title": "3、验证技巧",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "permission-modes",
        "title": "4. 权限模式",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "hooks",
        "title": "5. Hooks 自动化钩子机制 自动化钩子机制",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "routines-and-headless",
        "title": "6.套路与无头",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "github-actions-and-code-review",
        "title": "7. GitHub 操作和代码审查",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "trust-it-verifying-unsupervised-runs",
        "title": "8. 相信它：验证无监督运行",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "plugins",
        "title": "9. 插件",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "course-quiz",
        "title": "10. 课程测验",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
                "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>一旦你信任 Claude 能做一个任务，下一步就是不再亲手做。如果是同一个提示词配一个周期性触发，你就不该每次都坐在那里自己启动它。本课介绍两种交接方式：<strong>routines（例程）</strong>——你什么都不用构建；以及<strong>headless 模式（无头模式）</strong>——你从自己的脚本中获得完全控制。</p><p>把它想成一个谱系：一端是运行在 Anthropic 受管基础设施上的 routines，另一端是 headless 模式与 Agent SDK——从你自己的代码里运行 Claude Code。先从你构建最少的那端开始。</p>"
      },
      {
        "id": "sec-1",
        "title": "Routines：云端运行已保存的提示词",
        "contentHtml": "<p>Routine 是自动化一个任务最直接的方式。没有脚本、没有服务器。它打包三样东西：一个提示词、它工作的仓库、以及它需要的任何连接器。然后每当被触发时，它就在云端运行这个组合。</p><p>关键点是基础设施是 Anthropic 的。没有你的机器需要整夜开机，也没有工作流文件需要你维护。你描述一次工作，它就运行。</p><p>Routine 可以由几种触发器触发：</p><ul><li>一个 cron 计划，比如每天早上 9 点</li><li>向它的 API 端点发送 HTTP POST，让你自己的代码启动它</li><li>一个 GitHub 事件，比如新的 pull request 落地</li></ul><p>「同一个提示词配周期性触发」的任何事情都是好候选：早上的依赖审计、新 PR 到达时触发的 PR 分诊器、每天扫描 Sentry 工单判断最紧急项。</p>"
      },
      {
        "id": "sec-2",
        "title": "两种创建方式",
        "contentHtml": "<p>你可以在网页端 <code>claude.ai/code/routines</code> 创建 routine：给它起个名字、写描述 Claude 每次会话该做什么的指令、选一个仓库、选一个触发器。</p><p>你也可以不离开终端，从 Claude Code 内部创建：运行 <code>/schedule</code> 命令，用自然语言描述你想要什么，例如：</p><pre><code>/schedule daily dependency audit at 9am</code></pre><p>同一个思路，两个入口。选适合你流程的那个。</p>"
      },
      {
        "id": "sec-3",
        "title": "依赖 routines 前要知道的三件事",
        "contentHtml": "<p>在把重要的事情托付给 routines 之前，记住这三个限制：</p><ul><li>Routines 是<strong>研究预览</strong>。行为与限制会持续变动，别对变化感到意外。</li><li>循环计划<strong>最多每小时运行一次</strong>。如果你需要更频繁，routines 不是合适的工具。</li><li>每次运行都从你默认分支的<strong>全新克隆</strong>开始，并且除非你为每个仓库放宽，否则只能推送到 <code>claude/</code> 前缀的分支。这是防止自主运行重写 main 的护栏。</li></ul>"
      },
      {
        "id": "sec-4",
        "title": "无头模式：当你需要自己的环境",
        "contentHtml": "<p>当工作适合放在云端时 routines 很棒。但有时任务需要你的环境，或者需要在运行周围包裹逻辑。这时就降到 headless 模式。</p><p>headless 模式的核心是 <code>-p</code> 标志（<code>--print</code> 的缩写）。它把 Claude Code 作为一次性命令运行，没有交互式 UI。它读标准输入、写标准输出，所以能像任何 shell 工具一样管道连接：</p><pre><code>claude -p \"summarize the changes in this diff\"</code></pre><p>一个值得知道的点：<code>-p</code> 会跳过 hooks、skills、plugins、MCP 服务器和 CLAUDE.md 文件的自动发现。你得到 Claude 加上你显式允许的工具，本地环境恰好加载的东西一概没有。好处是启动快得多。</p>"
      },
      {
        "id": "sec-5",
        "title": "获得结构化输出",
        "contentHtml": "<p>因为 headless 模式像 shell 工具一样管道连接，你常常想要结构化数据而不是散文。你可以把 JSON schema 与 JSON 输出格式搭配，Claude 会把输出约束为匹配你的 schema。</p><p>匹配你 schema 的对象落在 JSON 响应的 <code>structured_output</code> 字段里。所以你可以用 <code>jq</code> 命令把它取出来，管道进数据库或另一个脚本：</p><pre><code>claude -p \"Extract the exported function names from src/core/style.js\"   --output-format json   --json-schema '{\"type\":\"object\",\"properties\":{\"functions\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}}},\"required\":[\"functions\"]}'   | jq '.structured_output.functions'</code></pre><p>这给你一个干净的数组，可以交给任何下一步。</p>"
      },
      {
        "id": "sec-6",
        "title": "用会话做多步自动化",
        "contentHtml": "<p>对于跨多个步骤的工作，你不必把一切塞进一个命令。从 JSON 输出中捕获会话 ID，稍后恢复它：</p><pre><code>claude --resume \"$(jq -r .session_id /tmp/plan.json)\"</code></pre><p>一个脚本启动工作，另一个脚本带着完整上下文稍后恢复它。当第一遍产出计划、第二遍执行它时，这很顺手。</p>"
      },
      {
        "id": "sec-7",
        "title": "CI 的确定性运行",
        "contentHtml": "<p>当 CI 每次运行都需要同样的结果时，有为此构建的模式。</p><p><code>--bare</code> 标志给你<strong>确定性模式</strong>。当你在流水线里运行 Claude Code、想要可重复、可预测的输出（而不是每次运行都变化的输出）时，这是正确的选择。</p>"
      },
      {
        "id": "sec-8",
        "title": "Agent SDK：把 Claude Code 嵌进你的应用",
        "contentHtml": "<p>谱系上最后一步是 Agent SDK。它给你一个库，把 Claude Code 嵌入你自己的 TypeScript 或 Python 应用。</p><p>两种语言都暴露一个 <code>query</code> 函数和与 CLI 相同的基本原语。你传入一个提示词加上选项，比如：</p><ul><li><code>allowedTools</code> 控制 Claude 能做什么</li><li>一个系统提示词</li><li>一个权限模式</li></ul><p>然后你迭代处理 Claude 流式返回的消息，按你的应用需要处理它们。它与 CLI 是同一个引擎，只是可以从你的产品内部调用。</p>"
      },
      {
        "id": "sec-9",
        "title": "该用哪个",
        "contentHtml": "<p>这里是快速决策指南：</p><ul><li><strong>Routines</strong> 是重复工作的默认选择。它们运行在 Anthropic 的基础设施上，无需你托管任何东西。</li><li><strong>Headless 模式（<code>-p</code>）</strong>用于任务需要你的流水线、你想把数据通过脚本管道连接时。</li><li><strong><code>--bare</code></strong> 用于 CI 每次运行需要同样结果时。</li><li><strong>Agent SDK</strong> 用于工作属于你自己的产品内部时。</li></ul><p>从 routines 开始。只有当任务确实需要额外的控制时，才沿着谱系往下走。</p>"
      }
    ],
    "prevLesson": {
      "slug": "hooks",
      "title": "Hooks 自动化钩子机制 自动化钩子机制"
    },
    "nextLesson": {
      "slug": "github-actions-and-code-review",
      "title": "GitHub Actions and Code Review"
    }
  },
  "github-actions-and-code-review": {
    "lessonId": "github-actions-and-code-review",
    "lessonTitle": "GitHub 操作和代码审查",
    "lessonIndex": 6,
    "totalLessons": 10,
    "duration": "6 分钟",
                      "outcomes": [
        "用受管的 Code Review 服务在 PR 上自动发布评审发现"
,
        "用 GitHub Action 搭建响应 @claude 与定时运行的工作流"
,
        "用 claude_args 调优无人值守运行的代理行为"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "steering-long-sessions",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "a-claude-md-that-follows",
        "title": "2. CLAUDE.md 如下",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "verification-skills",
        "title": "3、验证技巧",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "permission-modes",
        "title": "4. 权限模式",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "hooks",
        "title": "5. Hooks 自动化钩子机制 自动化钩子机制",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "routines-and-headless",
        "title": "6.套路与无头",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "github-actions-and-code-review",
        "title": "7. GitHub 操作和代码审查",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "trust-it-verifying-unsupervised-runs",
        "title": "8. 相信它：验证无监督运行",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "plugins",
        "title": "9. 插件",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "course-quiz",
        "title": "10. 课程测验",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
                "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>交接重复工作的最佳地点是 pull request。评审发生在那里、改动落在那里、你大量琐碎工作也在那里。有两种方式让 Claude 在这里干活，它们解决不同的问题：一种是开启的受管服务，一种是你自己接线的 GitHub Action。让我们都过一遍，弄清楚何时用哪个。</p>"
      },
      {
        "id": "sec-1",
        "title": "托管路径：Code Review",
        "contentHtml": "<p>最简单的选项是 <strong>Code Review</strong>。它是 Anthropic 托管的服务，通过 Claude GitHub 应用评审你的 pull request。你什么都不用构建或托管：开启它，它就开始把发现以行内评论的形式发布在相关的代码行上。</p><p>组织管理员从 Claude Code 管理设置中启用它。你会找到一个 Code review 区块，里面有 Configure 按钮，把它连接到你的仓库。</p><p>从那里，管理员安装 Claude GitHub 应用、选择它监视的仓库、决定它何时运行。时序有几个选择：</p><ul><li>PR 打开时一次</li><li>每次向 PR 推送时</li><li>只有当有人评论 <code>@claude review</code> 时</li></ul><p>开启后，一切运行在 Anthropic 的基础设施上。一组评审代理把你的 diff 放在完整代码库的背景下分析，而不只是孤立地看改动的行。然后它把发现作为行内评论发布在具体代码行上，按严重程度标记，并在 check run 中放一个汇总表。</p><p>它还会去重并对发现排序。所以你不是读一面墙的吹毛求疵，而是读少量真正值得你注意的实际问题。</p>"
      },
      {
        "id": "sec-2",
        "title": "Code Review 会做什么与不会做什么",
        "contentHtml": "<p>关于这里的边界，有几点要记住：</p><ul><li>它<strong>从不批准或阻止</strong>PR。判断权始终留给人类。Claude 标记问题，你做决定。</li><li>没有受管的自动修复。服务只发布发现。</li><li>它目前是研究预览，在团队版与企业版可用，所以行为会持续变动。</li></ul><p>因为服务没有自动修复，应用一条发现是本地动作。从你自己的终端，<code>/code-review</code> 命令评审一个 diff，它的 <code>--fix</code> 标志会把发现应用到你的工作树。所以流程是：Claude 在 PR 里发现问题，你拉下来本地修复。</p>"
      },
      {
        "id": "sec-3",
        "title": "自助路径：GitHub Action",
        "contentHtml": "<p>Code Review 处理评审。当工作超出评审时，你伸手去拿 GitHub Action。这用于自定义 CI：根据评论实现改动、运行定时报告、任何你通常会写工作流的事情。它能在 PR 评论、定时任务和任何 GitHub 事件上运行代理。</p><p>设置从 Claude Code 内部开始：运行 <code>/install-github-app</code> 命令。你需要仓库管理员权限。这个斜杠命令会带你完成 GitHub 应用安装和仓库上 Anthropic API key 密钥的设置。</p><p>Action 本身是 <code>anthropics/claude-code-action@v1</code>。以下是你会实际用到的输入：</p><ul><li><code>anthropic_api_key</code>——可选。</li><li><code>github_token</code>——默认 <code>secrets.GITHUB_TOKEN</code>。</li><li><code>trigger_phrase</code>——action 在评论中监听的短语。默认 <code>@claude</code>。</li><li><code>use_bedrock</code> / <code>use_vertex</code>——如果你用 Bedrock 或 Vertex，切换到这些提供商。</li><li><code>prompt</code>——这次运行的指令。</li><li><code>claude_args</code>——直接透传给 Claude Code 的 CLI 参数字符串。</li></ul>"
      },
      {
        "id": "sec-4",
        "title": "响应 @claude 的工作流",
        "contentHtml": "<p>把一个工作流放进 <code>.github/workflows/claude.yaml</code>，它监听 PR 评论和 issue 评论中的 <code>@claude</code>。核心步骤长这样：</p><pre><code>- uses: anthropics/claude-code-action@v1\n  with:\n    anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}\n    github_token: ${{ secrets.GITHUB_TOKEN }}\n    trigger_phrase: \"@claude\"\n    prompt: \"Your instructions here\"\n    claude_args: \"--max-turns 5 --model claude-sonnet-5\"</code></pre><p>现在有人在 pull request 上写「@claude 实现链接的 Linear issue 里的规格」，action 就会接住它。Claude 推送提交并发布评论描述它做了什么。</p>"
      },
      {
        "id": "sec-5",
        "title": "定时运行的工作流",
        "contentHtml": "<p>同一个 action 也适用于每日汇总。cron 触发器在比如 9:00 UTC 触发，action 运行，Claude 发布结果。你还可以加一个 <code>workflow_dispatch</code> 触发器，这样你能从 Actions 标签页手动启动它。</p><p>action 运行时，你可以像其他任何 GitHub 工作流一样，在 Actions 标签页看着它一步步工作。</p>"
      },
      {
        "id": "sec-6",
        "title": "用 claude_args 调优运行",
        "contentHtml": "<p><code>claude_args</code> 一行是精调发生的地方。几个值得知道的旋钮：</p><ul><li><code>--max-turns 5</code> 给代理循环一个硬上限，让它不能永远跑下去。</li><li>权限模式。对无人值守任务，你会希望它不要停下来问——因为没有人回答。</li><li>允许的工具。只给任务它确切需要的，不多不少。对报告而言，就是只读。</li></ul>"
      },
      {
        "id": "sec-7",
        "title": "该用哪个",
        "contentHtml": "<p>简短版本：</p><ul><li>对 PR 评审，走托管路径。启用 Code Review，让 GitHub 应用发布行内发现，用 <code>/code-review --fix</code> 在本地应用修复。</li><li>当工作超出评审时，伸手去拿 action。用 <code>/install-github-app</code> 设置，一个工作流响应 <code>@claude</code> 提及、一个响应 cron，所有调优都在 <code>claude_args</code> 里。</li></ul><p>从托管服务开始。当你需要 Claude 在 CI 里真正做点什么（而不只是评论）的那一刻，转到 action。</p>"
      }
    ],
    "prevLesson": {
      "slug": "routines-and-headless",
      "title": "Routines and headless"
    },
    "nextLesson": {
      "slug": "trust-it-verifying-unsupervised-runs",
      "title": "Trust it: Verifying unsupervised runs"
    }
  },
  "trust-it-verifying-unsupervised-runs": {
    "lessonId": "trust-it-verifying-unsupervised-runs",
    "lessonTitle": "相信它：验证无监督运行",
    "lessonIndex": 7,
    "totalLessons": 10,
    "duration": "5 分钟",
                      "outcomes": [
        "按运行的无人监督程度决定验证力度"
,
        "从 diff 与代码评审开始，而不是信任摘要"
,
        "用 hook 把关测试，用冷眼第二意见复审无人值守运行"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "steering-long-sessions",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "a-claude-md-that-follows",
        "title": "2. CLAUDE.md 如下",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "verification-skills",
        "title": "3、验证技巧",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "permission-modes",
        "title": "4. 权限模式",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "hooks",
        "title": "5. Hooks 自动化钩子机制 自动化钩子机制",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "routines-and-headless",
        "title": "6.套路与无头",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "github-actions-and-code-review",
        "title": "7. GitHub 操作和代码审查",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "trust-it-verifying-unsupervised-runs",
        "title": "8. 相信它：验证无监督运行",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "plugins",
        "title": "9. 插件",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "course-quiz",
        "title": "10. 课程测验",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
                "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>你把手头任务交给 Claude、让它没有盯着每一步地跑完。现在它说完成了。在把这份工作发布之前，你需要一种方式检查一件你根本没监督过的事。这个检查，就是让放手式 Claude Code 可以被安全依赖的原因。</p><p>这里的想法很简单：<strong>按你给运行系了多少绳子的比例来验证</strong>。如果你在一段短会话里看着消息滚动而过，快速瞥一眼就够。但一次无人值守的运行，或一次在持续集成里触发、没有任何人在循环里的任务，需要真正的检查。没人看到发生了什么，所以你必须在事后重建它。</p><p>用一张图来想象：<strong>你看得越少，验证得越多。</strong></p>"
      },
      {
        "id": "sec-1",
        "title": "无人值守运行保持在 auto 模式",
        "contentHtml": "<p>当一次运行在工作场合无人值守时，让它保持在 <strong>auto 模式</strong>而不是绕过权限。在 auto 模式中，分类器仍然审查每个动作是否危险。这是一个值得保留的安全网。</p><p>但要清楚这个网能做什么、不能做什么。分类器<strong>从不判断代码是否正确</strong>，它只标记危险动作。所以你的验证标准保持在原来的位置。根据运行有多无人监督来设定这个标准。</p>"
      },
      {
        "id": "sec-2",
        "title": "从 diff 开始，而不是摘要",
        "contentHtml": "<p>不要从 Claude 对它所做事情的摘要开始。<strong>从 diff 本身开始。</strong></p><ul><li>运行 <code>/code-review</code> 走查改动并标记问题。</li><li>然后亲自把眼睛放在 <code>git diff</code> 上。</li></ul><p>陷阱在于：一份整洁的摘要读起来完全没问题，而实际 diff 却碰了一个你确实没料到会碰的文件。摘要不会告诉你这个，diff 会。</p><p>所以读发生了什么改变。先读计划中涉及的文件，然后找计划之外的东西。<strong>一份干净的书面说明不是干净代码的证据。</strong></p>"
      },
      {
        "id": "sec-3",
        "title": "把测试变成关卡，而非承诺",
        "contentHtml": "<p>无人值守运行真正的关卡是：测试是否通过，以及 Claude 是真的运行了它们，还是只声称运行了。别把这留给信任。把它接成 hook，让 Claude 无法跳过。</p><p>几个 hook 能完成这个工作：</p><ul><li>一个运行你的测试、失败时拒绝结束回合的 <strong>stop hook</strong></li><li>一个在每次编辑后 lint 和类型检查的 <strong>post-tool-use hook</strong></li></ul><p>关键细节是退出码。以 <code>exit 2</code> 退出的 hook 会把失败直接反馈给 Claude。Claude 读到失败并修复它，无需你要求。最好的一点：无论你是否记得要求，这个检查每次运行都会触发。</p>"
      },
      {
        "id": "sec-4",
        "title": "获得冷静的第二意见",
        "contentHtml": "<p>你在 pull request 前运行的子代理代码评审，在这里同样适用。把它指向一次无人值守运行。</p><p>打开一个新会话或子代理，让它对改动的代码做评审，不带任何「代码是如何构建的」记忆。因为它对方案没有利害关系，它能抓住原始运行自己说服自己忽略的东西。<strong>带着全新眼睛的第二评审者，能发现作者自己合理化了的东西。</strong></p>"
      },
      {
        "id": "sec-5",
        "title": "整合",
        "contentHtml": "<p>让检查的严肃程度与运行的无人监督程度相当：</p><ul><li>自己读 diff</li><li>把测试变成把关回合的 hook</li><li>用 JSON 结果与退出码验证无头运行</li><li>对任何重要的事获得冷静的第二意见</li></ul><p>做到这些，「Claude 在我没看的时候做的」就不再需要靠信仰了。</p>"
      }
    ],
    "prevLesson": {
      "slug": "github-actions-and-code-review",
      "title": "GitHub Actions and Code Review"
    },
    "nextLesson": {
      "slug": "plugins",
      "title": "Plugins"
    }
  },
  "plugins": {
    "lessonId": "plugins",
    "lessonTitle": "插件",
    "lessonIndex": 8,
    "totalLessons": 10,
    "duration": "7 分钟",
                      "outcomes": [
        "理解插件如何打包 skills、subagents 与 hooks"
,
        "在安装前审查插件的 hooks、agents 与 MCP 服务器"
,
        "用 manifest 与目录约定打包自己的插件"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "steering-long-sessions",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "a-claude-md-that-follows",
        "title": "2. CLAUDE.md 如下",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "verification-skills",
        "title": "3、验证技巧",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "permission-modes",
        "title": "4. 权限模式",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "hooks",
        "title": "5. Hooks 自动化钩子机制 自动化钩子机制",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "routines-and-headless",
        "title": "6.套路与无头",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "github-actions-and-code-review",
        "title": "7. GitHub 操作和代码审查",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "trust-it-verifying-unsupervised-runs",
        "title": "8. 相信它：验证无监督运行",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "plugins",
        "title": "9. 插件",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "course-quiz",
        "title": "10. 课程测验",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
                "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>一套你信任的配置，一旦整个团队都在用，价值会大得多。问题在于把它搬来搬去。你构建了一个很好的 <code>.claude</code> 目录，里面有 skills、subagents 和 hooks，然后呢？每个人都在机器之间复制粘贴文件、希望它们保持同步。<strong>插件（Plugins）解决了这个问题</strong>。插件就是 Claude Code 打包一套配置、从一个人传给下一个人的方式。</p><p>这里有两面，我们都会讲：第一，使用别人发布的插件；第二，一旦你构建了值得分享的东西，打包你自己的插件。</p>"
      },
      {
        "id": "sec-1",
        "title": "插件是什么",
        "contentHtml": "<p>插件是一个<strong>可安装单元</strong>。它打包了你本来要手工分享的一切：skills、subagents、hooks 和 MCP 服务器配置，加上更长的尾巴——语言服务器协议服务器、后台监视器、主题，以及一小片 <code>settings.json</code>。一个版本，一次安装。</p><p>插件存放的位置决定你如何安装它。在会话内部，你可以直接按名称安装：</p><pre><code>/plugin install github@claude-plugins-official</code></pre><p>Claude Code 安装它，然后告诉你去运行 <code>/reload-plugins</code> 应用改动。</p>"
      },
      {
        "id": "sec-2",
        "title": "为团队添加 marketplace",
        "contentHtml": "<p>对团队而言，更好的做法是一次性添加一个<strong>私有 marketplace</strong>。Marketplace 是插件解析通过的共享来源：</p><pre><code>/plugin marketplace add your-org/claude-plugins</code></pre><p>随便怎么命名。添加后，之后的每次安装都通过它解析。你得到集中的发现、版本跟踪和更新，而不是散落在每个人的笔记本上。</p><p>你可以从 Discover 标签浏览可用内容。它列出你 marketplace 上的插件，方便你搜索和挑选。</p>"
      },
      {
        "id": "sec-3",
        "title": "安装前先读",
        "contentHtml": "<p>这里是最重要的一部分。<strong>插件以你的权限在你的机器上运行代码。</strong>它的 hooks 会在每个匹配的工具调用上触发。所以如果你为了它的 skills 安装一个插件，你同时也得到了它的 PreToolUse 和 Stop hooks——无论你读没读过它们。</p><p>想想这意味着什么。一个社区插件可以带一个每次调用外部网络端点的 Stop hook，而你的配置里没有任何东西会警告你。这不是回避插件的理由，而是先看一眼的理由。</p><p>安装前，检查插件的详细信息。Claude Code 会显示它将安装什么、估算上下文成本，以及一条朴素的警告：Anthropic 不控制第三方插件内部的东西。</p><p>关于插件来源，有两件值得知道的事：</p><ul><li>应用内提交表单在 Anthropic 自动审查后发布到社区 marketplace</li><li>官方 marketplace 在它自己独立的轨道上策展</li></ul><p>但「被审查过」不等于「被信任」。自动审查能抓住一些东西，抓不住所有东西。所以规则不变：只从你真正信任的来源安装插件和添加 marketplace，并在开启前检查插件实际做了什么。</p>"
      },
      {
        "id": "sec-4",
        "title": "组件与你的一起运行",
        "contentHtml": "<p>插件不会覆盖你的配置。它的组件与你自己的一起运行。这大多是好事，但它有你应该理解的后果。</p><p><strong>Hooks 会叠加。</strong>插件的 PreToolUse hook 和你自己的 PreToolUse hook 都会在每次工具调用时触发，谁也不取代谁。这正是为什么要先读详细信息。</p><p>Skills、agents 和 commands 以插件名命名空间，所以永远不会与你的冲突。插件也可以携带一个 <code>settings.json</code> 文件，但只是一个很窄的。Claude Code 只认它两个键：agent 和 subagent 状态行键。</p><p>那个 agent 键值得停下来想一想。设置它会把插件的一个 subagent 提升到主线程，连同它的系统提示词、工具限制和模型。换句话说，<strong>启用插件可以改变 Claude Code 的默认行为</strong>。这是开启前先看一眼的主要原因之一。</p><p>插件安装后，你可以从插件面板看到它添加的一切、管理它、卸载它。</p>"
      },
      {
        "id": "sec-5",
        "title": "打包你自己的插件",
        "contentHtml": "<p>现在说另一面。一旦你构建了一个能用的 <code>.claude</code> 目录，别让团队在机器之间复制粘贴。打包它。</p><p>好消息是你不需要重构任何东西。插件使用你已经使用的同一个 <code>.claude</code> 形状：</p><ul><li>每个技能一个文件夹</li><li>每个 subagent 一个 markdown 文件，在 <code>agents</code> 下</li><li><code>hooks/hooks.json</code> 和 <code>.mcp.json</code>，在插件根目录</li></ul><p>目录结构完成大部分工作。Claude Code 按约定发现组件。</p>"
      },
      {
        "id": "sec-6",
        "title": "清单 manifest",
        "contentHtml": "<p>在目录结构之上，还有一个可选的清单。它位于 <code>.claude-plugin/plugin.json</code>，包含名称、版本、描述和作者：</p><pre><code>{\n  \"name\": \"svg-splitter-review\",\n  \"version\": \"0.1.0\",\n  \"description\": \"Reviews the SVG Splitter repo\",\n  \"author\": {\n    \"name\": \"Lewis Menelaws\"\n  }\n}</code></pre><p>清单是可选的。不写它，Claude Code 仍然按目录约定发现你的组件。但有几个细节值得知道：</p><ul><li><strong>name 是唯一必填字段</strong>。它把你的 skills 命名空间为 <code>company-name:skill-name</code>，避免与任何人的冲突。</li><li><strong>像任何依赖一样给它版本号</strong>。这是让更新与版本跟踪在团队里工作的方式。</li></ul>"
      },
      {
        "id": "sec-7",
        "title": "要点",
        "contentHtml": "<p>两条简单的规则覆盖了大部分内容：</p><ul><li><strong>使用插件时，安装前先读。</strong>插件以你的权限运行代码，所以先看它的 hooks、agents 和 MCP 服务器。</li><li><strong>构建插件时，一旦它能工作就打包你的 <code>.claude</code>。</strong>一个清单，一次安装。</li></ul><p>这就是全部要点：一个可安装单元，你信任的配置到达整个团队。</p>"
      }
    ],
    "prevLesson": {
      "slug": "trust-it-verifying-unsupervised-runs",
      "title": "Trust it: Verifying unsupervised runs"
    },
    "nextLesson": {
      "slug": "course-quiz",
      "title": "Course quiz"
    }
  },
  "course-quiz": {
    "lessonId": "course-quiz",
    "lessonTitle": "课程测验",
    "lessonIndex": 9,
    "totalLessons": 10,
    "duration": "3 分钟",
                      "outcomes": [
        "通过测验，检验对 Claude Code 实战技能的理解"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "steering-long-sessions",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "a-claude-md-that-follows",
        "title": "2. CLAUDE.md 如下",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "verification-skills",
        "title": "3、验证技巧",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "permission-modes",
        "title": "4. 权限模式",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "hooks",
        "title": "5. Hooks 自动化钩子机制 自动化钩子机制",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "routines-and-headless",
        "title": "6.套路与无头",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "github-actions-and-code-review",
        "title": "7. GitHub 操作和代码审查",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "trust-it-verifying-unsupervised-runs",
        "title": "8. 相信它：验证无监督运行",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "plugins",
        "title": "9. 插件",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "course-quiz",
        "title": "10. 课程测验",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
                "sections": [
      {
        "id": "sec-0",
        "title": "知识自测",
        "contentHtml": "<p>通过以下问题检验你对 Claude Code 实战演练核心知识的掌握。</p>"
,
        "quiz": {
          "id": "quiz-1",
          "title": "知识自测",
          "options": [
            { "id": "a", "text": "先界定工作范围，再在运行时引导", "isCorrect": true, "explanation": "长会话的核心是两个习惯：Claude 开始前用计划模式界定范围，运行时用压缩、回退等方式引导。" },
            { "id": "b", "text": "一次让 Claude 跑完，不要干预", "isCorrect": false, "explanation": "长任务需要主动引导与纠偏。" },
            { "id": "c", "text": "把一切写进 CLAUDE.md", "isCorrect": false, "explanation": "CLAUDE.md 是指引而非强制，且长文件会降低遵循率。" }
          ],
          "generalExplanation": "处理长会话的关键：先界定范围，再引导运行。"
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
            { "id": "a", "text": "硬规则应放进 pre-tool-use hook 强制执行", "isCorrect": true, "explanation": "hook 是实际运行的代码，能真正阻止动作，而 CLAUDE.md 只是请求。" },
            { "id": "b", "text": "所有规则都应写进 CLAUDE.md", "isCorrect": false, "explanation": "「绝不推送 main」这类硬规则需要 hook 级别的强制。" },
            { "id": "c", "text": "CLAUDE.md 越长越可靠", "isCorrect": false, "explanation": "文件越长越与自己竞争，遵循率越低。" }
          ],
          "generalExplanation": "CLAUDE.md 管软约定，hook 管必须强制执行的硬规则。"
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
            { "id": "a", "text": "分类器检查意图，stop hook 检查正确性", "isCorrect": true, "explanation": "auto 模式中分类器在动作前守护意图，stop hook 在完成后守护正确性。" },
            { "id": "b", "text": "分类器检查代码是否正确", "isCorrect": false, "explanation": "分类器只标记危险动作，不判断正确性。" },
            { "id": "c", "text": "auto 模式无需任何 hook 配合", "isCorrect": false, "explanation": "需要 stop hook 运行测试来守护正确性。" }
          ],
          "generalExplanation": "auto 模式的护栏 = 意图分类器 + 正确性 stop hook。"
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
            { "id": "a", "text": "从 diff 开始，把测试变成 hook 关卡，并获取冷眼第二意见", "isCorrect": true, "explanation": "验证无人值守运行：读 diff、用 hook 把关测试、让第二评审者冷眼复审。" },
            { "id": "b", "text": "直接相信 Claude 的完成摘要", "isCorrect": false, "explanation": "整洁的摘要不是干净代码的证据，diff 才是。" },
            { "id": "c", "text": "绕过权限让运行更顺畅", "isCorrect": false, "explanation": "无人值守运行应保持在 auto 模式保留分类器安全网。" }
          ],
          "generalExplanation": "验证力度与运行的无人监督程度成正比。"
        }
      }
    ],
    "prevLesson": {
      "slug": "plugins",
      "title": "Plugins"
    }
  }
};
