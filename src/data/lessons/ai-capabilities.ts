import { LessonLayoutProps } from '../../components/LessonLayout';

export const AI_CAPABILITIES_LESSONS: Record<string, Omit<LessonLayoutProps, 'courseId' | 'courseTitle'>> = {
  "intro-to-ai-capabilities-and-limitations": {
    "lessonId": "intro-to-ai-capabilities-and-limitations",
    "lessonTitle": "AI 功能和限制简介",
    "lessonIndex": 0,
    "totalLessons": 11,
    "duration": "8 分钟",
    "outcomes": [
      "解释为什么这种材料即使在模型和产品不断变化的情况下仍然耐用",
      "了解功能和限制框架与 4D 框架如何协同工作",
      "AI 功能和限制简介",
      "尝试一下：参数知识库与预训练边界"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "intro-to-ai-capabilities-and-limitations",
        "title": "1. AI 能力和局限性介绍",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "what-we-mean-by-ai",
        "title": "2. 人工智能的含义",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "how-ai-gets-its-character",
        "title": "3.人工智能如何获得其特征",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "next-token-prediction",
        "title": "4. Next-Token逐词元预测机制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "try-it-out",
        "title": "5. 尝试一下：Next-Token 逐词元预测机制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "knowledge",
        "title": "6. 参数知识库与预训练边界",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "working-memory",
        "title": "7. 工作记忆",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "steerability",
        "title": "8. 可引导性与角色控制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "when-properties-collide",
        "title": "9. 当属性发生冲突时",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "next-steps",
        "title": "10. 后续步骤",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "course-quiz",
        "title": "11. 课程测验",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "欢迎来到人工智能的能力和局限性课程",
        "contentHtml": "<p class=\"text-body font-medium\">AI 功能和限制简介 · 4 分钟</span></p>\n<p class=\"text-base leading-relaxed text-secondary\">Anthropic 4D核心人机协作框架教你如何与AI协作。本课程教授\n人工智能如何与您合作。它们合在一起就是一个系统：人类\n一方面是能力，另一方面是机器属性。</p>"
      },
      {
        "id": "sec-1",
        "title": "机器的心智模型",
        "contentHtml": "<p>4D 框架教你如何与 AI 协作；本课程教你 AI 是如何能够与你协作的。两者合在一起是一个完整的系统：一边是人的能力，另一边是机器的属性。</p><p>要建立有用的心智模型，关键是把 AI 当作一台可以理解的「机器」来看待——它有稳定、可预测的属性，而不是神秘的黑箱。这样当它表现异常时，你就能判断是哪一种「错误」，而不是笼统地感到意外。</p>"
      },
      {
        "id": "sec-2",
        "title": "核心要点",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">AI 流畅性框架 (4D) 描述了人类的能力。本课程描述了这些能力所对应的机器属性。</li>\n<li class=\"text-base leading-relaxed text-secondary\">生成式人工智能有四个核心属性：Next Token 预测、知识、工作记忆、可操控性。</li>\n<li class=\"text-base leading-relaxed text-secondary\">这种材料非常耐用，因为即使模型改进，性能也保持稳定。边界发生了变化，但属性保持不变。</li>\n</ul>"
      },
      {
        "id": "sec-3",
        "title": "实操练习与反思",
        "contentHtml": "<p class=\"text-footnote italic text-muted\">为什么？这是本课程中每个练习的基础。</p>\n<p class=\"text-base leading-relaxed text-secondary\">保留这份清单。每节课你都会回到它，而且每次你​​都会看到不同的东西。</p>"
      },
      {
        "id": "sec-4",
        "title": "课后反思",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">您列出的哪些任务交给人工智能是“安全”的，哪些任务是有风险的？你能说出原因吗？</li>\n<li class=\"text-base leading-relaxed text-secondary\">您注意到的一种人工智能行为（好或坏）是什么，但您当时无法解释？</li>\n</ul>"
      },
      {
        "id": "sec-5",
        "title": "下一步预告",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在这四个属性之前，我们需要先明确“AI”在本课程中的含义。我们正在专门讨论生成式人工智能以及它与其他形式的人工智能的不同之处。</p>"
      }
    ],
    "nextLesson": {
      "slug": "what-we-mean-by-ai",
      "title": "What We Mean by AI"
    }
  },
  "what-we-mean-by-ai": {
    "lessonId": "what-we-mean-by-ai",
    "lessonTitle": "人工智能是什么意思",
    "lessonIndex": 1,
    "totalLessons": 11,
    "duration": "8 分钟",
    "outcomes": [
      "将生成式人工智能与您日常遇到的分类和预测人工智能区分开来",
      "了解生成式人工智能的属性存在于从能力到限制的连续体中",
      "预览您将深入探索的四个核心属性：下一个令牌预测、知识、工作记忆和可操纵性",
      "答案从哪里来？（Next-Token逐词元预测机制）"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "intro-to-ai-capabilities-and-limitations",
        "title": "1. AI 能力和局限性介绍",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "what-we-mean-by-ai",
        "title": "2. 人工智能的含义",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "how-ai-gets-its-character",
        "title": "3.人工智能如何获得其特征",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "next-token-prediction",
        "title": "4. Next-Token逐词元预测机制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "try-it-out",
        "title": "5. 尝试一下：Next-Token 逐词元预测机制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "knowledge",
        "title": "6. 参数知识库与预训练边界",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "working-memory",
        "title": "7. 工作记忆",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "steerability",
        "title": "8. 可引导性与角色控制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "when-properties-collide",
        "title": "9. 当属性发生冲突时",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "next-steps",
        "title": "10. 后续步骤",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "course-quiz",
        "title": "11. 课程测验",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "生成式人工智能是什么意思",
        "contentHtml": "<p class=\"text-body font-medium\">AI 的含义 · 4 分钟</span></p>\n<p class=\"text-base leading-relaxed text-secondary\">世界上大多数人工智能（垃圾邮件过滤器、推荐、欺诈检测）都不是\n生成的。本课程是关于以下类型的：基于转换器的文本\n一次生成一个令牌的新内容的模型。</p>"
      },
      {
        "id": "sec-1",
        "title": "建立机器的心理模型",
        "contentHtml": "<p>世界上大多数 AI（垃圾邮件过滤器、推荐系统、欺诈检测）都不是生成式的。本课程讨论的是那一种：基于 Transformer 的文本模型，一次一个 token 地生成新内容。</p><p>一个关键的认知是：AI 并非均匀地强大或均匀地不可靠，而是沿着四条可预测的轴有强有弱——Next Token 预测、知识、工作记忆与可操控性。每条属性都是一条连续谱：同一个机制既给你能力，也给你局限。「校准的信任」意味着把你的任务定位在连续谱上，而不是整体地授予或拒绝信任。</p>"
      },
      {
        "id": "sec-2",
        "title": "核心要点",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">生成式人工智能产生新内容而不是对现有内容进行分类。</li>\n<li class=\"text-base leading-relaxed text-secondary\">人工智能不是一律有能力，也不是一律不可靠。它沿着四个可预测的轴有强有弱：下一个令牌预测、参数知识库与预训练边界、工作记忆、可引导性与控制角色。</li>\n<li class=\"text-base leading-relaxed text-secondary\">每个属性都是一个连续体。相同的机制给你提供了能力和限制。</li>\n<li class=\"text-base leading-relaxed text-secondary\">信任意味着将你的任务定位在连续体上，而不是大规模地授予或拒绝信任。</li>\n</ul>"
      },
      {
        "id": "sec-3",
        "title": "实操练习与反思",
        "contentHtml": "<p class=\"text-footnote italic text-muted\">为什么？您刚刚了解到，生成式人工智能与过滤垃圾邮件并推荐您下一个视频的人工智能有着根本的不同。现在您将根据自己的经验使用这种区别。</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">答案从哪里来？（Next-Token逐词元预测机制）</li>\n<li class=\"text-base leading-relaxed text-secondary\">它知道什么？ (参数知识库与预训练边界)</li>\n<li class=\"text-base leading-relaxed text-secondary\">这是在注意什么？ （工作记忆）</li>\n<li class=\"text-base leading-relaxed text-secondary\">我能控制多少？ （可引导性与角色控制）</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">你不需要做对这些。您正在创建将在接下来的四节课中进行测试的预测。</p>"
      },
      {
        "id": "sec-4",
        "title": "课后反思",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">人工智能的生成/分类区别是否改变了您对所使用工具的看法？</li>\n<li class=\"text-base leading-relaxed text-secondary\">查看您如何标记任务列表。是否有任何任务感觉它可以属于多个属性？</li>\n</ul>"
      },
      {
        "id": "sec-5",
        "title": "下一步预告",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在深入研究这四个属性之前，我们将花一堂课来了解人工智能系统如何最终具有个性。为什么它有礼貌、乐于助人、诚实，为什么它有时太容易同意，为什么它拒绝某些事情。这个塑造过程会在接下来的一切中留下痕迹。</p>"
      }
    ],
    "prevLesson": {
      "slug": "intro-to-ai-capabilities-and-limitations",
      "title": "Intro to AI Capabilities and Limitations"
    },
    "nextLesson": {
      "slug": "how-ai-gets-its-character",
      "title": "How AI Gets Its Character"
    }
  },
  "how-ai-gets-its-character": {
    "lessonId": "how-ai-gets-its-character",
    "lessonTitle": "人工智能如何获得其特征",
    "lessonIndex": 2,
    "totalLessons": 11,
    "duration": "8 分钟",
    "outcomes": [
      "用通俗易懂的语言解释生成式人工智能的两阶段训练过程（预训练和微调）",
      "识别每个阶段留下的行为指纹：阿谀奉承、冗长、过度谨慎、信心不足校准",
      "应用这种理解来解释您在自己的人工智能交互中看到的行为",
      "人工智能如何获得其特征"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "intro-to-ai-capabilities-and-limitations",
        "title": "1. AI 能力和局限性介绍",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "what-we-mean-by-ai",
        "title": "2. 人工智能的含义",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "how-ai-gets-its-character",
        "title": "3.人工智能如何获得其特征",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "next-token-prediction",
        "title": "4. Next-Token逐词元预测机制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "try-it-out",
        "title": "5. 尝试一下：Next-Token 逐词元预测机制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "knowledge",
        "title": "6. 参数知识库与预训练边界",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "working-memory",
        "title": "7. 工作记忆",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "steerability",
        "title": "8. 可引导性与角色控制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "when-properties-collide",
        "title": "9. 当属性发生冲突时",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "next-steps",
        "title": "10. 后续步骤",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "course-quiz",
        "title": "11. 课程测验",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "AI 的性格与行为准则是如何形成的",
        "contentHtml": "<p class=\"text-body font-medium\">AI 如何获得其特征 · 5 分钟</span></p>\n<p class=\"text-base leading-relaxed text-secondary\">人工智能的礼貌、乐于助人和谨慎并不是自然而然的魔法。他们是\n层层训练，每个训练阶段都有具体的，\n关于系统如何与您交互的可预测指纹。</p>"
      },
      {
        "id": "sec-1",
        "title": "预训练、微调以及它们留下的指纹",
        "contentHtml": "<p>AI 的礼貌、乐于助人和谨慎不是凭空冒出来的魔法——它们是被逐层训练进去的，而且每个训练阶段都会在系统与你交互的方式上留下具体、可预测的指纹。</p><p><strong>预训练（pretraining）</strong>通过在海量数据上预测「接下来是什么」，产生了一个「文档补全器」——这个阶段之后，它没有任何「帮助你」的概念。<strong>微调（fine-tuning）</strong>在之上叠加助手行为：把你的输入当作请求、回答而不是漫谈、拒绝有害的要求。微调使用人类对「好回答」的判断，而这些判断留下了指纹：趋向谄媚（sycophancy）、默认啰嗦（verbosity）、偶尔过度谨慎（over-caution），以及陈述信心与实际可靠性之间的松散校准（loose confidence calibration）。</p>"
      },
      {
        "id": "sec-2",
        "title": "核心要点",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">预训练通过预测大量数据中的“接下来会发生什么”来生成文档完成程序。过了这个阶段，它就没有帮助你的概念了。</li>\n<li class=\"text-base leading-relaxed text-secondary\">损害将助理行为置于顶层：将您的输入视为请求，回答而不是漫无目的，拒绝有害的询问。</li>\n<li class=\"text-base leading-relaxed text-secondary\">人们利用人类对良好反应的判断，而这些判断留下了印记：倾向于阿谀奉承、默认冗长、偶尔过度谨慎，以及在陈述的信心和实际可靠性之间松散的校准。</li>\n</ul>"
      },
      {
        "id": "sec-3",
        "title": "实操练习与反思",
        "contentHtml": "<p class=\"text-footnote italic text-muted\">为什么？谄媚、冗长、过度谨慎和松散的信心校准都出现在每个人工智能模型中。问题是当它们影响你真正关心的工作时你是否能看到它们。</p>\n<p class=\"text-base leading-relaxed text-secondary\">从第 1 课列表中选择一项任务。你之前实际上已经使用过人工智能，你可以清楚地知道什么是好的输出。您将运行它三次，并略有不同，并观察发生了什么变化。</p>\n<p class=\"text-base leading-relaxed text-secondary\">现在退后一步。您的作品中哪个指纹显示得最清楚？提前命名是否会改变您解读行为的方式？</p>"
      },
      {
        "id": "sec-4",
        "title": "课后反思",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">在你自己的工作中，哪些地方的阿谀奉承最有可能让你付出代价？ （提示：任何您希望得到诚实反馈的地方。）</li>\n<li class=\"text-base leading-relaxed text-secondary\">冗长最有可能让你付出代价的地方是什么？ （提示：任何在时间压力下需要简洁的地方。）</li>\n</ul>"
      },
      {
        "id": "sec-5",
        "title": "下一步预告",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">现在我们从这四个属性本身开始，首先是最能解释人工智能行为的属性：下一个令牌预测。 AI 答案实际上来自哪里？</p>"
      }
    ],
    "prevLesson": {
      "slug": "what-we-mean-by-ai",
      "title": "What We Mean by AI"
    },
    "nextLesson": {
      "slug": "next-token-prediction",
      "title": "Next-Token 逐词元预测机制"
    }
  },
  "next-token-prediction": {
    "lessonId": "next-token-prediction",
    "lessonTitle": "Next-Token 逐词元预测机制",
    "lessonIndex": 3,
    "totalLessons": 11,
    "duration": "8 分钟",
    "outcomes": [
      "解释下一个令牌预测作为生成人工智能的核心机制，以及为什么它会产生流畅性和幻觉",
      "在下一个令牌预测连续体中定位任务（陈旧的路径与新颖的领域）",
      "将特异性（名称、日期、引文、统计数据）确定为制造集中的区域",
      "识别可缓解此限制的产品功能（引文、不确定性信号、约束生成、生成器验证者模式）"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "intro-to-ai-capabilities-and-limitations",
        "title": "1. AI 能力和局限性介绍",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "what-we-mean-by-ai",
        "title": "2. 人工智能的含义",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "how-ai-gets-its-character",
        "title": "3.人工智能如何获得其特征",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "next-token-prediction",
        "title": "4. Next-Token逐词元预测机制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "try-it-out",
        "title": "5. 尝试一下：Next-Token 逐词元预测机制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "knowledge",
        "title": "6. 参数知识库与预训练边界",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "working-memory",
        "title": "7. 工作记忆",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "steerability",
        "title": "8. 可引导性与角色控制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "when-properties-collide",
        "title": "9. 当属性发生冲突时",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "next-steps",
        "title": "10. 后续步骤",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "course-quiz",
        "title": "11. 课程测验",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "人工智能模型如何使用Next-Token逐词元预测机制",
        "contentHtml": "<p class=\"text-body font-medium\">Next-Token 逐词元预测机制·4分钟</span></p>\n<p class=\"text-base leading-relaxed text-secondary\">生成式人工智能更接近于极其复杂的自动完成，而不是\n搜索引擎。它根据接下来的内容逐字写出答案\n什么。这个单一的属性给你带来了流畅性和幻觉。</p>"
      },
      {
        "id": "sec-1",
        "title": "大规模自动完成",
        "contentHtml": "<p>生成式 AI 更接近一个极其复杂的自动补全器，而不是搜索引擎。它逐词写出答案，依据的是「什么倾向于跟在什么后面」。这一单一属性同时给了你流畅性（fluency）和幻觉（hallucination）。</p><p><strong>能力区（capability zone）</strong>覆盖模型见过很多次的任务：总结、重排格式、解释常见概念。<strong>局限区（limitation zone）</strong>覆盖新颖或稀疏的领域，以及任何需要区分「真的」与「听起来是真的」的任务。幻觉集中在具体性上：名字、日期、统计、引用、URL、引语——一个声明越精确，越值得核实。像引用来源、不确定性提示、约束生成与生成器-验证器循环这样的产品功能，正是为了把这项局限推得更远。</p>"
      },
      {
        "id": "sec-2",
        "title": "核心要点",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">Next-Token 逐词元预测机制是指生成式人工智能根据趋向于遵循什么来逐字写出答案。\n\n能力区：类似于模型多次出现的模式的任务（总结、重新格式化、解释常见概念）。</li>\n<li class=\"text-base leading-relaxed text-secondary\">限制区：新颖或稀疏的领域，以及任务需要区分“真实”和“听起来真实”的任何地方。</li>\n<li class=\"text-base leading-relaxed text-secondary\">幻觉高发区（具象事实）：名称、日期、统计数据、引用、URL、引用。主张越精确，就越值得验证。</li>\n<li class=\"text-base leading-relaxed text-secondary\">诸如引文、不确定性信号、约束生成和生成器-验证器循环之类的产品特点专门为了进一步突破这一限制而存在。</li>\n</ul>\n</li>\n<li class=\"text-base leading-relaxed text-secondary\">4D协作关联：下一个令牌预测是辨别的基础。了解生成的输出可以准确地告诉您要应用什么样的审查。</li>\n</ul>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">能力区：类似于模型多次出现的模式的任务（总结、重新格式化、解释常见概念）。</li>\n<li class=\"text-base leading-relaxed text-secondary\">限制区：新颖或稀疏的领域，以及任务需要区分“真实”和“听起来真实”的任何地方。</li>\n<li class=\"text-base leading-relaxed text-secondary\">幻觉高发区（具象事实）：名称、日期、统计数据、引用、URL、引用。主张越精确，就越值得验证。</li>\n<li class=\"text-base leading-relaxed text-secondary\">诸如引文、不确定性信号、约束生成和生成器-验证器循环之类的产品特点专门为了进一步突破这一限制而存在。</li>\n</ul>"
      },
      {
        "id": "sec-3",
        "title": "实操练习与反思",
        "contentHtml": "<p class=\"text-footnote italic text-muted\">为什么？你现在知道，让人工智能流畅的生成过程与让它制造的过程是一样的。是时候在您自己的地盘上、在您可以捕捉到它的领域中看到这一点了。</p>\n<p class=\"text-base leading-relaxed text-secondary\">返回您的任务列表，然后选择您对自己的领域专业知识最有信心的任务。您需要一个您是专家的主题，因为您需要能够验证返回的内容。写下该领域的五个具体的、可检查的事实：一个人的职位、出版日期、统计数据、产品规格、直接引用、URL。您知道准确且可以独立确认的事情。</p>\n<p class=\"text-base leading-relaxed text-secondary\">现在运行三个探测器：</p>\n<p class=\"text-base leading-relaxed text-secondary\">延伸目标：在启用引用的工具中重新运行 Probe 2（如 Claude 中的研究模式）。再打分吧检查来源会改变分数吗？</p>"
      },
      {
        "id": "sec-4",
        "title": "课后反思",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">您是否会在您不熟悉的领域发现捏造行为？</li>\n<li class=\"text-base leading-relaxed text-secondary\">查看您的任务列表：哪些任务主要位于能力范围内，哪些任务涉及需要验证的特殊性？</li>\n</ul>"
      },
      {
        "id": "sec-5",
        "title": "下一步预告",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">下一个什么令牌预测了人工智能如何生成训练。接下来我们看看它是从生成的：参数知识库与预边界属性。模型实际上知道什么，这些知识从哪里来，差距在哪里？</p>"
      }
    ],
    "prevLesson": {
      "slug": "how-ai-gets-its-character",
      "title": "How AI Gets Its Character"
    },
    "nextLesson": {
      "slug": "try-it-out",
      "title": "Try It Out: Next-Token 逐词元预测机制"
    }
  },
  "try-it-out": {
    "lessonId": "try-it-out",
    "lessonTitle": "尝试一下：Next-Token 逐词元预测机制",
    "lessonIndex": 4,
    "totalLessons": 11,
    "duration": "5 分钟",
          "outcomes": [
        "用熟悉领域的三轮测试，亲身体验 Next-Token 预测的能力区与局限区"
,
        "观察采样差异与幻觉在具体性上的集中"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "intro-to-ai-capabilities-and-limitations",
        "title": "1. AI 能力和局限性介绍",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "what-we-mean-by-ai",
        "title": "2. 人工智能的含义",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "how-ai-gets-its-character",
        "title": "3.人工智能如何获得其特征",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "next-token-prediction",
        "title": "4. Next-Token逐词元预测机制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "try-it-out",
        "title": "5. 尝试一下：Next-Token 逐词元预测机制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "knowledge",
        "title": "6. 参数知识库与预训练边界",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "working-memory",
        "title": "7. 工作记忆",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "steerability",
        "title": "8. 可引导性与角色控制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "when-properties-collide",
        "title": "9. 当属性发生冲突时",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "next-steps",
        "title": "10. 后续步骤",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "course-quiz",
        "title": "11. 课程测验",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
        "sections": [
      {
        "id": "sec-main",
        "title": "尝试一下：Next-Token 逐词元预测机制",
        "contentHtml": "<p>实践出真知。下面用一个你熟知的领域，亲身体验 Next-Token 预测的「能力区」与「局限区」——建立来自你自己观察的具体直觉，用于决定该信任 AI 做什么。</p><h3>能力区测试</h3><p>选一个你非常熟悉的主题，让 AI 总结或解释其中的一个广为人知的概念。观察输出的流畅度，再抽查内容。这是能力区的典型体验：顺畅、自信、大体准确。</p><h3>具体性压力测试</h3><p>请 AI 提供五项可核查的具体信息：引用三个来源、说出作者姓名、给出精确数字、提供一个 URL。逐项验证每一项。如果它在编造，留意它听起来有多自信——幻觉恰恰集中在名字、日期、统计与引用这类细节上。</p><h3>采样观察</h3><p>在一个新会话中，重新运行完全相同的「具体信息」请求。比较两次输出：什么保持一致？什么变了？你看到的差异，就是 Next-Token 预测中「采样」机制在起作用。</p><h3>反思</h3><ul><li>在一个你不熟悉的领域，你能抓到编造的内容吗？</li><li>你日常任务中，哪些位于能力区（模型见过很多次的模式）？哪些推向了需要核实的具体性区域？</li></ul>"
      }
    ],
    "prevLesson": {
      "slug": "next-token-prediction",
      "title": "Next-Token 逐词元预测机制"
    },
    "nextLesson": {
      "slug": "knowledge",
      "title": "参数知识库与预训练边界"
    }
  },
  "knowledge": {
    "lessonId": "knowledge",
    "lessonTitle": "参数知识库与预训练边界",
    "lessonIndex": 5,
    "totalLessons": 11,
    "duration": "8 分钟",
    "outcomes": [
      "解释人工智能模型的知识是如何在训练过程中形成的以及为什么它有一个固定的截止点",
      "预测哪些主题位于能力区（频繁、最近训练、一致）与边缘（罕见、截止后、利基、有争议）",
      "将陈旧、覆盖不均匀、遗传偏见和来源遗忘视为典型的知识失败",
      "将网络搜索、检索/RAG 和工具使用视为解决此限制的产品功能"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "intro-to-ai-capabilities-and-limitations",
        "title": "1. AI 能力和局限性介绍",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "what-we-mean-by-ai",
        "title": "2. 人工智能的含义",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "how-ai-gets-its-character",
        "title": "3.人工智能如何获得其特征",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "next-token-prediction",
        "title": "4. Next-Token逐词元预测机制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "try-it-out",
        "title": "5. 尝试一下：Next-Token 逐词元预测机制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "knowledge",
        "title": "6. 参数知识库与预训练边界",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "working-memory",
        "title": "7. 工作记忆",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "steerability",
        "title": "8. 可引导性与角色控制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "when-properties-collide",
        "title": "9. 当属性发生冲突时",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "next-steps",
        "title": "10. 后续步骤",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "course-quiz",
        "title": "11. 课程测验",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "了解人工智能模型中的知识差距",
        "contentHtml": "<p class=\"text-body font-medium\">参数知识库与预训练边界 · 5 分钟</span></p>\n<p class=\"text-base leading-relaxed text-secondary\">模型知道它在训练期间接触到了什么，仅此而已。否\n默认实时浏览，没有实际体验，硬停在\n知识截断。实际问题不是“人工智能知道这一点吗？”但是\n“这在它所读到的内容中得到了怎样的体现？”</p>"
      },
      {
        "id": "sec-1",
        "title": "模型读取的内容以及何时停止读取",
        "contentHtml": "<p>模型知道的是它在训练期间接触过的东西，仅此而已。默认没有实时浏览、没有生活经验，并且在知识截止日期处有一个硬性的停止点。实践问题不是「AI 知道这个吗？」，而是「这一点在它读过的内容里有多充分的呈现？」</p><p><strong>能力区</strong>：在训练数据中频繁、近期（训练窗口内）且一致出现的主题。<strong>局限区</strong>：罕见、截止后、小众、本地或有争议的主题。典型的知识失败包括：陈旧（staleness）、覆盖不均（uneven coverage）、「默认/正常」中继承的偏差（inherited bias），以及无法归因知识来源（source amnesia）。网页搜索、检索（RAG/MCP）与工具使用正是为修补这些缺口而生——给模型访问它从未训练过的信息。</p>"
      },
      {
        "id": "sec-2",
        "title": "核心要点",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">生成人工智能知道什么完全来自训练数据，并被冻结在知识截止点。如果没有工具，它就无法访问该日期之后的任何信息。\n\n能力区：最近（在训练中）频繁出现且在训练数据中持续出现的主题。</li>\n<li class=\"text-base leading-relaxed text-secondary\">限制区：稀有、截止后、利基、本地或有争议的主题。</li>\n<li class=\"text-base leading-relaxed text-secondary\">典型的故障：陈旧、覆盖不均匀、对“默认”或“正常”的继承偏见，以及无法确定知识的来源。</li>\n<li class=\"text-base leading-relaxed text-secondary\">网络搜索、搜索（RAG/连接模型上下文协议）和工具的存在专门用于通过让模型访问从未训练过的信息来弥补这些差距。</li>\n</ul>\n</li>\n<li class=\"text-base leading-relaxed text-secondary\">4D 协作关联：参数知识库与预训练边界不均匀性是委派的核心。了解模型的哪些地方库存充足，哪些地方库存不足，可以告诉您何时交接、何时自己提供上下文以及何时去其他地方。</li>\n</ul>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">能力区：最近（在训练中）频繁出现且在训练数据中持续出现的主题。</li>\n<li class=\"text-base leading-relaxed text-secondary\">限制区：稀有、截止后、利基、本地或有争议的主题。</li>\n<li class=\"text-base leading-relaxed text-secondary\">典型的故障：陈旧、覆盖不均匀、对“默认”或“正常”的继承偏见，以及无法确定知识的来源。</li>\n<li class=\"text-base leading-relaxed text-secondary\">网络搜索、搜索（RAG/连接模型上下文协议）和工具的存在专门用于通过让模型访问从未训练过的信息来弥补这些差距。</li>\n</ul>"
      },
      {
        "id": "sec-3",
        "title": "实操练习与反思",
        "contentHtml": "<p class=\"text-footnote italic text-muted\">为什么？您知道模型的知识很广泛但很固定，由训练数据中的内容决定。现在，您将准确绘制特定领域中库存充足和库存不足的区域的地图。</p>\n<p class=\"text-base leading-relaxed text-secondary\">返回任务列表并选择一项任务。相对于该任务，写下：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">两个主流、有据可查且稳定的主题。任何消息灵通的同事都会知道这种事情。</li>\n<li class=\"text-base leading-relaxed text-secondary\">两个利基、本地、最近或快速发展的主题。行业特定术语、地区法规，这些都在去年发生了变化。</li>\n<li class=\"text-base leading-relaxed text-secondary\">一种“默认假设”，即您所在领域的外行人经常会犯错。 （典型的客户是谁。“标准”案例是什么样的。人们实际使用哪种工具与受到媒体关注的工具。）</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">现在运行三个探测器：</p>\n<p class=\"text-base leading-relaxed text-secondary\">返回到任务列表并添加第二个注释：对于每个任务，标记您是否可以依靠模型的知识，或者是否需要自己通过上下文、文档或搜索引入知识。</p>\n<p class=\"text-base leading-relaxed text-secondary\">延伸目标：在启用网络搜索的情况下重新运行过时性探针。比较一下有什么变化。这是实际的检索。</p>"
      },
      {
        "id": "sec-4",
        "title": "课后反思",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">在您的工作领域中，您现在意识到需要提供上下文而不是假设模型具有上下文？</li>\n<li class=\"text-base leading-relaxed text-secondary\">默认假设探测是否有任何令您惊讶的事情？</li>\n</ul>"
      },
      {
        "id": "sec-5",
        "title": "下一步预告",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">参数知识库与预训练边界涵盖了模型在训练过程中吸收的内容。工作记忆涵盖了它现在关注的内容：您的提示、您的文档、您的对话。该属性在所有四个属性中具有最硬的优势。</p>"
      }
    ],
    "prevLesson": {
      "slug": "try-it-out",
      "title": "Try It Out: Next-Token 逐词元预测机制"
    },
    "nextLesson": {
      "slug": "working-memory",
      "title": "Working Memory"
    }
  },
  "working-memory": {
    "lessonId": "working-memory",
    "lessonTitle": "工作记忆",
    "lessonIndex": 6,
    "totalLessons": 11,
    "duration": "8 分钟",
    "outcomes": [
      "解释上下文窗口作为固定大小的容器，以及这对长文档、长对话和跨会话内存意味着什么",
      "与其他房产的逐渐退化相比，认识到该房产的“悬崖”性质",
      "应用上下文作为杠杆策略：预先加载重要材料、分块长时间工作、重新提供关键上下文",
      "将内存、压缩、项目/工作空间和更大的窗口视为解决此限制的产品功能"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "intro-to-ai-capabilities-and-limitations",
        "title": "1. AI 能力和局限性介绍",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "what-we-mean-by-ai",
        "title": "2. 人工智能的含义",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "how-ai-gets-its-character",
        "title": "3.人工智能如何获得其特征",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "next-token-prediction",
        "title": "4. Next-Token逐词元预测机制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "try-it-out",
        "title": "5. 尝试一下：Next-Token 逐词元预测机制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "knowledge",
        "title": "6. 参数知识库与预训练边界",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "working-memory",
        "title": "7. 工作记忆",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "steerability",
        "title": "8. 可引导性与角色控制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "when-properties-collide",
        "title": "9. 当属性发生冲突时",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "next-steps",
        "title": "10. 后续步骤",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "course-quiz",
        "title": "11. 课程测验",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "上下文窗口如何影响生成式 AI 输出",
        "contentHtml": "<p class=\"text-body font-medium\">工作记忆 · 6 分钟</span></p>\n<p class=\"text-base leading-relaxed text-secondary\">人工智能关注的一切都位于固定大小的工作空间内\n称为上下文窗口。它可以关注里面的东西。是不能参加的\n到它之外的任何东西。这种限制在某种程度上是尖锐的\n属性不是：事物一直有效，直到它们不起作用为止。</p>"
      },
      {
        "id": "sec-1",
        "title": "上下文窗口：人工智能的工作记忆",
        "contentHtml": "<p>AI 关注的一切都生活在一个固定大小的工作区里，叫做上下文窗口（context window）。它能关注窗口里的内容，无法关注窗口之外的任何东西。这个约束是<strong>硬边</strong>的，与其他属性的方式不同：事情能正常工作，直到它突然不能。</p><p><strong>能力区</strong>：你的材料舒适地装得下、会话是当前的、你在提供相关上下文。<strong>局限区</strong>：非常长的文档或对话、期望跨会话的连续性、把关键信息埋在长输入的中间。这个属性有「悬崖」而不是「斜坡」——静默截断（silent truncation）是它的失败模式，而且你不总是会被警告。模型不会从你的纠正中「学习」，它只响应当前在上下文里的东西。记忆功能、压缩、项目、更大的窗口与多代理工作流，都是为了把这面悬崖推得更远。</p>"
      },
      {
        "id": "sec-2",
        "title": "核心要点",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">工作记忆是指人工智能模型有一个可以处理的固定上下文窗口。\n\n能力区：你的材料很合适，会议是最新的，你提供了相关的背景。</li>\n<li class=\"text-base leading-relaxed text-secondary\">限制区：非常长的文档或对话，期望跨会话的连续性，在长输入中隐藏关键信息。</li>\n<li class=\"text-base leading-relaxed text-secondary\">该房产有悬崖而不是梯度。无提示截断是失败模式，并且您不会总是收到警告。</li>\n<li class=\"text-base leading-relaxed text-secondary\">该模型不会从您的更正中学习。它只响应当前上下文中的内容。</li>\n<li class=\"text-base leading-relaxed text-secondary\">内存功能、压缩、项目、更大的窗口和多代理工作流程的存在都将这个悬崖推得更远。</li>\n</ul>\n</li>\n<li class=\"text-base leading-relaxed text-secondary\">4D协作关联：工作记忆是描述所起作用的。了解窗口的工作原理可以告诉您如何构建上下文、何时预先加载以及何时重新开始。</li>\n</ul>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">能力区：你的材料很合适，会议是最新的，你提供了相关的背景。</li>\n<li class=\"text-base leading-relaxed text-secondary\">限制区：非常长的文档或对话，期望跨会话的连续性，在长输入中隐藏关键信息。</li>\n<li class=\"text-base leading-relaxed text-secondary\">该房产有悬崖而不是梯度。无提示截断是失败模式，并且您不会总是收到警告。</li>\n<li class=\"text-base leading-relaxed text-secondary\">该模型不会从您的更正中学习。它只响应当前上下文中的内容。</li>\n<li class=\"text-base leading-relaxed text-secondary\">内存功能、压缩、项目、更大的窗口和多代理工作流程的存在都将这个悬崖推得更远。</li>\n</ul>"
      },
      {
        "id": "sec-3",
        "title": "实操练习与反思",
        "contentHtml": "<p class=\"text-footnote italic text-muted\">为什么？背景就是杠杆。同样的任务，只要提供了正确的上下文，就可以从平庸的初稿变成真正有用的东西。这个练习使这一点具体化。</p>\n<p class=\"text-base leading-relaxed text-secondary\">从第 1 课列表中选择一个仅从您掌握的上下文中受益的任务：风格指南、过去的优秀工作示例、一组特定于您的角色或受众的约束。用两到三行写下该任务的输出“良好”是什么样子，描述得足够清楚，以便陌生人可以评估它。</p>\n<p class=\"text-base leading-relaxed text-secondary\">现在运行三个探测器：</p>\n<p class=\"text-base leading-relaxed text-secondary\">返回到您的任务列表并添加第三个注释：哪些任务需要设置常设上下文（项目、保存的说明、上传的参考文档）才值得运行，哪些任务可以正常工作？</p>\n<p class=\"text-base leading-relaxed text-secondary\">延伸目标： 如果您的工具具有内存或项目功能，请使用探针 1 中的上下文进行设置。再次运行该任务。将工作量和质量与冷启动版本进行比较。</p>"
      },
      {
        "id": "sec-4",
        "title": "课后反思",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">前端加载上下文对输出质量有多大影响？差距比你想象的要大吗？</li>\n<li class=\"text-base leading-relaxed text-secondary\">本周你将设置什么固定背景来停止重新解释自己？</li>\n</ul>"
      },
      {
        "id": "sec-5",
        "title": "下一步预告",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">最后一个属性：可引导性与角色控制。当你发出指令时，你实际上能控制多少？这种控制在哪里失效？</p>"
      }
    ],
    "prevLesson": {
      "slug": "knowledge",
      "title": "参数知识库与预训练边界"
    },
    "nextLesson": {
      "slug": "steerability",
      "title": "可引导性与角色控制"
    }
  },
  "steerability": {
    "lessonId": "steerability",
    "lessonTitle": "可引导性与角色控制",
    "lessonIndex": 7,
    "totalLessons": 11,
    "duration": "8 分钟",
    "outcomes": [
      "解释为什么可操纵性有效（微调教导模型遵循指令）以及为什么它有限制（通过模式匹配而不是理解来遵循指令）",
      "预测控制最严格的地方（简短、具体、可验证的指令）和最宽松的地方（长推理链、抽象问题、本机精确任务）",
      "将推理漂移、文字重于精神和脆弱的算术识别为典型的可操纵性失败",
      "将系统提示、代码执行、可见推理和结构化输出视为解决此限制的产品功能"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "intro-to-ai-capabilities-and-limitations",
        "title": "1. AI 能力和局限性介绍",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "what-we-mean-by-ai",
        "title": "2. 人工智能的含义",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "how-ai-gets-its-character",
        "title": "3.人工智能如何获得其特征",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "next-token-prediction",
        "title": "4. Next-Token逐词元预测机制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "try-it-out",
        "title": "5. 尝试一下：Next-Token 逐词元预测机制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "knowledge",
        "title": "6. 参数知识库与预训练边界",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "working-memory",
        "title": "7. 工作记忆",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "steerability",
        "title": "8. 可引导性与角色控制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "when-properties-collide",
        "title": "9. 当属性发生冲突时",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "next-steps",
        "title": "10. 后续步骤",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "course-quiz",
        "title": "11. 课程测验",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "可操纵性如何影响生成式人工智能输出",
        "contentHtml": "<p class=\"text-body font-medium\">可引导性与角色控制 · 5 分钟</span></p>\n<p class=\"text-base leading-relaxed text-secondary\">该模型遵循您的指示，就像执行其他操作一样：\n继续一种模式。这使得它非常容易操纵。这也意味着\n你的意图和实现的结果之间总是存在差距，而且大多数\n有趣的失败就存在于这个差距之中。</p>"
      },
      {
        "id": "sec-1",
        "title": "你实际上能控制多少？",
        "contentHtml": "<p>模型遵循你的指令，方式与它做其他一切事情一样：通过继续一个模式。这让它异常可控——但也意味着你的意图与最终落地之间总有差距，而大多数有趣的失败就生活在这个差距里。</p><p><strong>能力区</strong>：简短、具体、可验证的指令——格式规格、长度限制、明确角色。<strong>局限区</strong>：长的推理链、抽象或含糊的指令、任何需要原生数值或逻辑精度的任务。特征性失败：<strong>推理漂移</strong>（reasoning drift，小错误不断累积）与<strong>重形式轻精神</strong>（letter-over-spirit，指令被遵守了但意图没有被实现）。当一条指令被字面遵守却毫无用处时，<strong>重新陈述目标</strong>——用更大的力度重复指令不会弥合差距。</p>"
      },
      {
        "id": "sec-2",
        "title": "核心要点",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">可引导性与角色控制意味着模型遵循下一个令牌预测的指令。\n\n能力区：简短、具体、可验证的指示。格式规范、长度限制、明确的角色。</li>\n<li class=\"text-base leading-relaxed text-secondary\">限制区：长链推理、抽象或模糊指令、任何需要本机数字或逻辑精度的内容。</li>\n<li class=\"text-base leading-relaxed text-secondary\">典型故障：推理漂移（小错误复合）和文字重于精神（指令被遵守，但意图未被遵守）。</li>\n<li class=\"text-base leading-relaxed text-secondary\">系统提示、代码执行、可视化推理、格式化输出的存在是为了防止你的意图被冲淡。</li>\n<li class=\"text-base leading-relaxed text-secondary\">当严格按照指示执行但无用处时，请加密目标。更强力地重复指示并不能缩小差距。</li>\n</ul>\n</li>\n<li class=\"text-base leading-relaxed text-secondary\">4D 协作关联：可引导性与角色控制是使描述变得强大并限制它的原因。了解单词和意图之间的差距会改变您编写提示的方式以及插入检查点的位置。</li>\n</ul>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">能力区：简短、具体、可验证的指示。格式规范、长度限制、明确的角色。</li>\n<li class=\"text-base leading-relaxed text-secondary\">限制区：长链推理、抽象或模糊指令、任何需要本机数字或逻辑精度的内容。</li>\n<li class=\"text-base leading-relaxed text-secondary\">典型故障：推理漂移（小错误复合）和文字重于精神（指令被遵守，但意图未被遵守）。</li>\n<li class=\"text-base leading-relaxed text-secondary\">系统提示、代码执行、可视化推理、格式化输出的存在是为了防止你的意图被冲淡。</li>\n<li class=\"text-base leading-relaxed text-secondary\">当严格按照指示执行但无用处时，请加密目标。更强力地重复指示并不能缩小差距。</li>\n</ul>"
      },
      {
        "id": "sec-3",
        "title": "实操练习与反思",
        "contentHtml": "<p class=\"text-footnote italic text-muted\">为什么？你所说的和你的意思之间的差距是大多数操纵性失败的根源。这个练习教你根据意图进行提示，而不仅仅是根据指示。</p>\n<p class=\"text-base leading-relaxed text-secondary\">从第 1 课列表中选择一个涉及多个步骤或特定输出格式的任务。用一句话写下目标：你实际上想要完成什么，而不仅仅是输出应该是什么样子。 （“让我的团队相信这个时间表是现实的”是一个目标。“三个要点”是一种格式。）</p>\n<p class=\"text-base leading-relaxed text-secondary\">现在运行三个探测器：</p>\n<p class=\"text-base leading-relaxed text-secondary\">返回到您的任务列表。对于任何多步骤任务，请记下插入检查点的位置。对于您仅用格式提示的任何任务，请起草您下次要添加的目标声明。</p>"
      },
      {
        "id": "sec-4",
        "title": "课后反思",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">您有多少次只说明格式而不说明目标？当您将两者都包含在内时会发生什么变化？</li>\n<li class=\"text-base leading-relaxed text-secondary\">从本周开始，您将添加一个流程中检查点的重复任务是什么？</li>\n</ul>"
      },
      {
        "id": "sec-5",
        "title": "下一步预告",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">您现在已经分别满足了所有四个属性。在下一课中，我们将了解它们如何相互作用，因为大多数现实世界的失败都是两个属性相遇。</p>"
      }
    ],
    "prevLesson": {
      "slug": "working-memory",
      "title": "Working Memory"
    },
    "nextLesson": {
      "slug": "when-properties-collide",
      "title": "When Properties Collide"
    }
  },
  "when-properties-collide": {
    "lessonId": "when-properties-collide",
    "lessonTitle": "当属性发生冲突时",
    "lessonIndex": 8,
    "totalLessons": 11,
    "duration": "8 分钟",
    "outcomes": [
      "认识到大多数人工智能故障涉及两个或多个属性的相互作用",
      "通过识别哪些属性在起作用来诊断常见的失败模式（幻觉引用、长时间对话漂移、自信错误的数学、令人愉快的错误前提）",
      "根据哪个属性是限制因素来应用有针对性的修复",
      "尝试一下：参数知识库与预训练边界"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "intro-to-ai-capabilities-and-limitations",
        "title": "1. AI 能力和局限性介绍",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "what-we-mean-by-ai",
        "title": "2. 人工智能的含义",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "how-ai-gets-its-character",
        "title": "3.人工智能如何获得其特征",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "next-token-prediction",
        "title": "4. Next-Token逐词元预测机制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "try-it-out",
        "title": "5. 尝试一下：Next-Token 逐词元预测机制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "knowledge",
        "title": "6. 参数知识库与预训练边界",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "working-memory",
        "title": "7. 工作记忆",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "steerability",
        "title": "8. 可引导性与角色控制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "when-properties-collide",
        "title": "9. 当属性发生冲突时",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "next-steps",
        "title": "10. 后续步骤",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "course-quiz",
        "title": "11. 课程测验",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "诊断人工智能故障",
        "contentHtml": "<p class=\"text-body font-medium\">当属性发生冲突时 · 3 分钟</span></p>\n<p class=\"text-base leading-relaxed text-secondary\">这四个属性并不是孤立运作的。大多数真正的失败是以下两个\n它们相交。一旦您能说出哪两个，您就知道要进行哪个修复\n为.</p>"
      },
      {
        "id": "sec-1",
        "title": "两个属性会议：诊断出了什么问题",
        "contentHtml": "<p>四个属性不是孤立运作的。大多数真实的失败是其中两个相交的结果。一旦你能说出是哪两个，你就知道该伸手拿哪个修复方案。</p><p>需要认识的诊断配对：<strong>Next Token 预测 + 知识</strong>（幻觉的细节）、<strong>工作记忆 + 可操控性</strong>（长对话漂移）。说出参与其中的属性，会直接指向修复：核实细节、重新提供上下文、外包给代码执行、或邀请反驳。这个诊断动作本身就是「鉴别」（Discernment）的应用——当你知道自己面对的是哪种错误时，你能评估得更好。</p>"
      },
      {
        "id": "sec-2",
        "title": "核心要点",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">现实世界的故障通常是两个响应属性，而不是一个。</li>\n<li class=\"text-base leading-relaxed text-secondary\">用于鉴别的诊断组合：\n\nNext-Token 逐词元预测机制 + 参数知识库与预训练边界（幻觉细节）</li>\n<li class=\"text-base leading-relaxed text-secondary\">工作记忆+可引导性与角色控制（长对话漂移）</li>\n</ul>\n</li>\n<li class=\"text-base leading-relaxed text-secondary\">命名正在运行的属性会直接引导您进行修复：验证细节、重新提供上下文、卸载到代码执行或邀请推回。</li>\n<li class=\"text-base leading-relaxed text-secondary\">当您知道自己正在寻找什么样的错误时，您可以更好地进行评估。</li>\n</ul>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">Next-Token 逐词元预测机制 + 参数知识库与预训练边界（幻觉细节）</li>\n<li class=\"text-base leading-relaxed text-secondary\">工作记忆+可引导性与角色控制（长对话漂移）</li>\n</ul>"
      },
      {
        "id": "sec-3",
        "title": "实操练习与反思",
        "contentHtml": "<p class=\"text-footnote italic text-muted\">为什么？大多数现实世界中的人工智能失败并不是某一财产发生故障。他们是同时相遇的两个属性。命名哪两个会完全改变修复方法。</p>\n<p class=\"text-base leading-relaxed text-secondary\">回想一下您使用人工智能的经历（包括您在本课程中观察到的情况）。确定两次或三次人工智能输出确实令您失望或惊讶。对于每个问题，用一两句话来描述：你问了什么，你得到了什么，什么是令人失望或惊讶的。</p>\n<p class=\"text-base leading-relaxed text-secondary\">现在查看第 1 课任务列表及其所有累积注释（第 2 课中的属性标签、第 4 课中的验证分数、第 5 课中的知识标记、第 6 课中的上下文需求、第 7 课中的目标陈述）。对于给您带来最大麻烦的任务，请指出哪两个属性发生冲突。将诊断写在每一项旁边。</p>"
      },
      {
        "id": "sec-4",
        "title": "课后反思",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">命名属性对是否会改变您要寻求的解决方案？在学习本课程之前，您是否尝试过不同的（效果较差的）修复方法？</li>\n<li class=\"text-base leading-relaxed text-secondary\">您认为您在日常工作中最常遇到哪种房产组合？</li>\n</ul>"
      },
      {
        "id": "sec-5",
        "title": "下一步预告",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在最后一课中，我们将整合您所构建的内容，将其作为一个完整的系统连接回 4D 框架，并指导您进一步深入。</p>"
      }
    ],
    "prevLesson": {
      "slug": "steerability",
      "title": "可引导性与角色控制"
    },
    "nextLesson": {
      "slug": "next-steps",
      "title": "Next Steps"
    }
  },
  "next-steps": {
    "lessonId": "next-steps",
    "lessonTitle": "下一步",
    "lessonIndex": 9,
    "totalLessons": 11,
    "duration": "8 分钟",
    "outcomes": [
      "将四个属性和训练指纹合成为工作心理模型",
      "将功能和限制框架连接到 4D 框架，作为一个系统的两半",
      "确定本周在人工智能实践中要做出的一项具体改变",
      "尝试一下：参数知识库与预训练边界"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "intro-to-ai-capabilities-and-limitations",
        "title": "1. AI 能力和局限性介绍",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "what-we-mean-by-ai",
        "title": "2. 人工智能的含义",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "how-ai-gets-its-character",
        "title": "3.人工智能如何获得其特征",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "next-token-prediction",
        "title": "4. Next-Token逐词元预测机制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "try-it-out",
        "title": "5. 尝试一下：Next-Token 逐词元预测机制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "knowledge",
        "title": "6. 参数知识库与预训练边界",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "working-memory",
        "title": "7. 工作记忆",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "steerability",
        "title": "8. 可引导性与角色控制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "when-properties-collide",
        "title": "9. 当属性发生冲突时",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "next-steps",
        "title": "10. 后续步骤",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "course-quiz",
        "title": "11. 课程测验",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "应用4D框架获得更好的AI输出",
        "contentHtml": "<p class=\"text-body font-medium\">后续步骤 · 5 分钟</span></p>\n<p class=\"text-base leading-relaxed text-secondary\">流畅的人工智能使用并不是要记住每种故障模式。这是关于持有一个\n你头脑中的机器的小而清晰的模型，这样当事情发生时\n错误时，您可以识别出哪种错误并做出相应的反应。</p>"
      },
      {
        "id": "sec-1",
        "title": "机器的小模型",
        "contentHtml": "<p>流畅的 AI 使用不是记住每一个失败模式，而是在头脑中保持一个<strong>小而清晰的机器模型</strong>：当事情出错时，你能认出这是哪一种错误，并做出相应的反应。</p><p>你现在拥有一个可用的心智模型：四条属性作为连续谱、特征性失败作为属性交点。这个框架与 4D 框架是一个系统的两面——属性解释了 4D 能力在回应什么。「校准的信任」意味着把任务定位在每条连续谱上，并把你的验证与上下文习惯匹配到它所在的位置。模型会持续变化，但即使确切的边界在移动，这些属性的形状仍然有用。</p>"
      },
      {
        "id": "sec-2",
        "title": "核心要点",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">您现在拥有一个有效的心理模型：四个属性作为连续体，特征故障作为属性交叉点。</li>\n<li class=\"text-base leading-relaxed text-secondary\">框架和 4D 框架是一个系统的两个方面。这些属性解释了 4D 能力所响应的内容。</li>\n<li class=\"text-base leading-relaxed text-secondary\">信任意味着将你的任务定位在每个连续体上，并将你的验证和上下文习惯与它所在的位置相匹配。</li>\n<li class=\"text-base leading-relaxed text-secondary\">即使确切的边界发生变化，这些属性的形状仍然有用。</li>\n</ul>"
      },
      {
        "id": "sec-3",
        "title": "实操练习与反思",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">最后一次返回到第 1 课中的任务列表。对于每项任务，快速记下内容：该任务在每个属性的连续体上处于什么位置，以及您可能需要哪些缓解措施？</p>\n<p class=\"text-base leading-relaxed text-secondary\">现在，选择本周要进行的一项任务和一项更改（验证步骤、常设环境设置、检查点、明确目标而不只是格式的习惯）。把它写下来。</p>"
      },
      {
        "id": "sec-4",
        "title": "课后反思",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">从第一课到现在，您对人工智能行为的看法最大的转变是什么？</li>\n<li class=\"text-base leading-relaxed text-secondary\">您在这里所学到的知识让您对哪一个 4D 感到最直接的敏锐？</li>\n</ul>"
      },
      {
        "id": "sec-5",
        "title": "下一步预告",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">如果您尚未参加 AI 流畅框架和基础课程，那么下一步就是自然而然的了。本课程深入探讨了人类能力，为您提供了机器端背景。并不断测试边缘：属性保持稳定，但随着模型的改进，线条所在的位置将不断变化。</p>"
      }
    ],
    "prevLesson": {
      "slug": "when-properties-collide",
      "title": "When Properties Collide"
    },
    "nextLesson": {
      "slug": "course-quiz",
      "title": "Course Quiz"
    }
  },
  "course-quiz": {
    "lessonId": "course-quiz",
    "lessonTitle": "课程测验",
    "lessonIndex": 10,
    "totalLessons": 11,
    "duration": "5 分钟",
          "outcomes": [
        "通过测验，检验对 AI 能力与边界核心知识的掌握"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "intro-to-ai-capabilities-and-limitations",
        "title": "1. AI 能力和局限性介绍",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "what-we-mean-by-ai",
        "title": "2. 人工智能的含义",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "how-ai-gets-its-character",
        "title": "3.人工智能如何获得其特征",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "next-token-prediction",
        "title": "4. Next-Token逐词元预测机制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "try-it-out",
        "title": "5. 尝试一下：Next-Token 逐词元预测机制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "knowledge",
        "title": "6. 参数知识库与预训练边界",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "working-memory",
        "title": "7. 工作记忆",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "steerability",
        "title": "8. 可引导性与角色控制",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "when-properties-collide",
        "title": "9. 当属性发生冲突时",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "next-steps",
        "title": "10. 后续步骤",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "course-quiz",
        "title": "11. 课程测验",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
        "sections": [
      {
        "id": "sec-0",
        "title": "知识自测",
        "contentHtml": "<p>通过以下问题检验你对 AI 能力与边界核心知识的掌握。</p>"
,
        "quiz": {
          "id": "quiz-1",
          "title": "知识自测",
          "options": [
            { "id": "a", "text": "Next-Token 预测、知识、工作记忆、可操控性", "isCorrect": true, "explanation": "生成式 AI 的四个核心属性。" },
            { "id": "b", "text": "速度、成本、精度、规模", "isCorrect": false, "explanation": "这是工程权衡维度，不是 AI 属性。" },
            { "id": "c", "text": "输入、处理、输出、反馈", "isCorrect": false, "explanation": "这是通用流程描述。" }
          ],
          "generalExplanation": "四个核心属性决定了 AI 的能力与局限。"
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
            { "id": "a", "text": "具体的细节：名字、日期、统计、引用、URL", "isCorrect": true, "explanation": "声明越精确越值得核实——幻觉集中在这里。" },
            { "id": "b", "text": "广为人知的常见概念总结", "isCorrect": false, "explanation": "常见概念位于能力区，幻觉较少。" },
            { "id": "c", "text": "模型反复见过的模式", "isCorrect": false, "explanation": "熟悉的模式是能力区。" }
          ],
          "generalExplanation": "幻觉集中在具体性上，越精确的声明越需要验证。"
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
            { "id": "a", "text": "固定大小的窗口，有「悬崖」效应，可能静默截断", "isCorrect": true, "explanation": "上下文窗口固定，超限会静默截断而非渐进退化。" },
            { "id": "b", "text": "无限容量", "isCorrect": false, "explanation": "上下文窗口是有限的。" },
            { "id": "c", "text": "可以跨会话永久记忆", "isCorrect": false, "explanation": "模型只响应当前上下文，不跨会话记忆。" }
          ],
          "generalExplanation": "工作记忆是硬边属性，管理上下文是杠杆。"
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
            { "id": "a", "text": "通过继续一个模式来遵循指令", "isCorrect": true, "explanation": "可操控性基于模式匹配，而非真正的理解。" },
            { "id": "b", "text": "通过真正的语义理解指令", "isCorrect": false, "explanation": "指令是通过模式匹配被遵循的。" },
            { "id": "c", "text": "无法被引导", "isCorrect": false, "explanation": "模型相当可引导，但有限制。" }
          ],
          "generalExplanation": "可操控性既是力量也是边界。"
        }
      }
    ],
    "prevLesson": {
      "slug": "next-steps",
      "title": "Next Steps"
    }
  }
};
