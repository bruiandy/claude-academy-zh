import { LessonLayoutProps } from '../../components/LessonLayout';

export const AI_FLUENCY_FOR_BUILDERS_LESSONS: Record<string, Omit<LessonLayoutProps, 'courseId' | 'courseTitle'>> = {
  "ai-fluency-for-builders": {
    "lessonId": "ai-fluency-for-builders",
    "lessonTitle": "开始课程",
    "lessonIndex": 0,
    "totalLessons": 10,
    "duration": "15 分钟",
                "outcomes": [
        "定义 AI 素养并解释它如何应用于你的构建者角色"
,
        "构建一份可复用的简报，把价值观、约束与上下文交给 AI"
,
        "决定在构建过程中是否、何时、何地委派给 AI"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "ai-fluency-for-builders",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "the-4d-framework",
        "title": "2. 4D框架",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "ai-capabilities-and-limitations",
        "title": "3.人工智能的能力和局限性",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "delegation-the-builder-s-toolkit",
        "title": "4. 委托和构建者工具包",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "description-building-great-things",
        "title": "5. 描述和构建伟大的事物",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "discernment-for-code",
        "title": "6. 代码辨别",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "discernment-for-user-experience",
        "title": "7、用户体验辨别力",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "stand-behind-what-you-build",
        "title": "8. 坚持你所创造的东西",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "closure-looking-forward",
        "title": "9. 结束与展望",
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
        "contentHtml": "<p>欢迎来到「AI 素养：构建者专题」！这门课程面向产品人、设计师与创造者（builders），解释 AI 素养在实践中的真正含义，并预告贯穿全课程的 4D 框架。</p>"
      },
      {
        "id": "sec-1",
        "title": "什么是 AI 素养",
        "contentHtml": "<p><strong>构建者（Builders）拥有从客户问题到交付解决方案的完整弧线。</strong>你是那个把模糊的需求变成可用产品的人。</p><p>AI 素养意味着与 AI <strong>有效（effectively）、高效（efficiently）、有道德（ethically）且安全（safely）</strong>地协作——不是会调用工具就行，而是知道什么时候、在哪里、如何让 AI 发挥最大价值。</p>"
      },
      {
        "id": "sec-2",
        "title": "4D 框架预览",
        "contentHtml": "<p>4D 框架（委派 Delegation、描述 Description、鉴别 Discernment、尽责 Diligence）将锚定本课程的每一课。</p><ul><li><strong>委派（Delegation）</strong>——决定把什么交给 AI，把什么留在自己手里。<strong>委派实施通常是安全的；委派判断通常不安全。</strong></li><li><strong>描述（Description）</strong>——清晰地表达你需要什么、希望 AI 如何着手。</li><li><strong>鉴别（Discernment）</strong>——在行动前评估 AI 返回的内容。</li><li><strong>尽责（Diligence）</strong>——无论 AI 扮演什么角色，都对最终结果负全责。</li></ul><p>大多数 AI 失败都可以追溯到更早阶段发生的描述、鉴别或尽责失败——问题很少出在最后一步。</p>"
      },
      {
        "id": "sec-3",
        "title": "练习：构建你的 Builder Brief",
        "contentHtml": "<p>这个练习会创建一份可复用的上下文文档，在任何项目开始时提供给 AI。把它想象成给你的 AI 协作者做「入职培训」——整个课程都会引用它。</p><h3>第一部分：自我反思</h3><p>打开任何 AI 工具之前，写下以下四个问题的答案：</p><ul><li>你现在正在构建什么，或计划构建什么？说出产品、用户和它解决的问题。</li><li>你的角色是什么——你个人对交付什么负责？</li><li>你已经在哪些地方使用 AI？在哪里回避了它，为什么？</li><li>补全这句话：「如果 AI 能处理 _______，我就能把更多时间花在 _______ 上——那里才是最重要的决策发生的地方。」</li></ul><h3>第二部分：用 AI 构建简报</h3><p>打开 Claude（或任何 AI 助手），告诉它你是一名构建者，想创建一份可复用的上下文文档用于未来的 AI 协作。分享第一部分的答案，请它起草一份简报。需要涵盖：你在构建什么、为谁构建；你的角色与你拥有的东西；你的约束（团队规模、技术栈、时间线、不可妥协项）；以及你希望 AI 参与的地方——和不参与的地方。</p><p>一起审阅并补充遗漏，然后请求一个易于复制和复用的格式。这就是你这门课的 builder brief。</p>"
      },
      {
        "id": "sec-4",
        "title": "课程反思与下一步",
        "contentHtml": "<h3>课程反思</h3><ul><li>当你补全「如果 AI 能处理 ___，我就能把更多时间花在 ___」时——这揭示了你的精力实际流向哪里，又应该流向哪里？</li><li>在你的 builder brief 中，你点出了哪些此前大多数 AI 交互都缺失的约束或价值观？</li></ul><h3>下一步</h3><p>下一课将介绍 4D 框架——四个相互关联的能力，它们将塑造本课程中的每一次 AI 协作：委派、描述、鉴别与尽责。</p>"
      }
    ],
    "nextLesson": {
      "slug": "the-4d-framework",
      "title": "The 4D Framework"
    }
  },
  "the-4d-framework": {
    "lessonId": "the-4d-framework",
    "lessonTitle": "4D框架",
    "lessonIndex": 1,
    "totalLessons": 10,
    "duration": "20 分钟",
                "outcomes": [
        "定义全部四项 4D 能力及其如何塑造你的 AI 协作"
,
        "区分内循环与外循环，并知道何时应用哪一个"
,
        "把当前工作映射到 4D，找到你最大的机会"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "ai-fluency-for-builders",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "the-4d-framework",
        "title": "2. 4D框架",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "ai-capabilities-and-limitations",
        "title": "3.人工智能的能力和局限性",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "delegation-the-builder-s-toolkit",
        "title": "4. 委托和构建者工具包",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "description-building-great-things",
        "title": "5. 描述和构建伟大的事物",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "discernment-for-code",
        "title": "6. 代码辨别",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "discernment-for-user-experience",
        "title": "7、用户体验辨别力",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "stand-behind-what-you-build",
        "title": "8. 坚持你所创造的东西",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "closure-looking-forward",
        "title": "9. 结束与展望",
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
        "contentHtml": "<p>本课介绍 4D 框架——委派、描述、鉴别与尽责——并解释每个能力如何应用于你的日常工作。</p>"
      },
      {
        "id": "sec-1",
        "title": "内循环与外循环",
        "contentHtml": "<p>4D 框架由两个循环构成：</p><ul><li><strong>内循环（Inner loop）</strong>——描述（Description）与鉴别（Discernment）：指导你<strong>日常</strong>的 AI 交互。</li><li><strong>外循环（Outer loop）</strong>——委派（Delegation）与尽责（Diligence）：指导关于何时、如何使用 AI 的<strong>更大规模决策</strong>。</li></ul>"
      },
      {
        "id": "sec-2",
        "title": "四个能力的定义",
        "contentHtml": "<ul><li><strong>委派（Delegation）</strong>——决定 AI 处理什么、什么留在你手里。</li><li><strong>描述（Description）</strong>——清晰地沟通你需要什么，以及你希望 AI 如何着手处理。</li><li><strong>鉴别（Discernment）</strong>——在基于 AI 的产出行动之前，先评估它。</li><li><strong>尽责（Diligence）</strong>——无论 AI 扮演什么角色，都完全拥有最终结果。</li></ul>"
      },
      {
        "id": "sec-3",
        "title": "练习：把你的 Builder Brief 映射到 4D",
        "contentHtml": "<p>拿出你在上一课创建的 builder brief。这个练习用 4D 展示你最需要哪些能力——并在下一课之前让你进入一次真实的交互。</p><h3>第一部分：标注你的文档</h3><p>通读 builder brief，把每个目标、关切或任务标注为它最相关的能力：</p><ul><li><strong>委派</strong>——关于在构建中 AI 应该和不应该处理什么的决策</li><li><strong>描述</strong>——关于如何清晰地沟通需求与意图的问题</li><li><strong>鉴别</strong>——关于评估或信任 AI 产出的关切</li><li><strong>尽责</strong>——关于责任、测试与对交付内容的问责问题</li></ul><p>哪个能力出现得最多？那就是你的注意力已经集中的地方——通常也是你进步最快的地方。</p><h3>第二部分：尝试一个任务</h3><p>从 builder brief 中挑一个真实存在、等着你处理的任务。在打开 AI 之前写下：哪些能力适用？（大多数真实任务涉及不止一个能力。）这个输出的「足够好」长什么样？然后与 AI 做一轮。别追求成品——只要拿到一个有用的起点。</p><h3>第三部分：反思</h3><p>看看你拿回的内容。哪个能力感觉很自然？哪个让你措手不及？记下下一轮你会做得不一样的一件事。</p>"
      },
      {
        "id": "sec-4",
        "title": "课程反思与下一步",
        "contentHtml": "<h3>课程反思</h3><ul><li>哪个能力主导了你标注的问题，你对此感到意外吗？这说明什么？</li><li>两个循环会如何改变你最近一次 AI 交互？</li></ul><h3>下一步</h3><p>下一课将看看生成式 AI 是如何运作的——它能做什么、不能做什么——让你带着清醒的预期把 4D 框架付诸实践。</p>"
      }
    ],
    "prevLesson": {
      "slug": "ai-fluency-for-builders",
      "title": "Start course"
    },
    "nextLesson": {
      "slug": "ai-capabilities-and-limitations",
      "title": "AI capabilities & limitations"
    }
  },
  "ai-capabilities-and-limitations": {
    "lessonId": "ai-capabilities-and-limitations",
    "lessonTitle": "人工智能的能力和局限性",
    "lessonIndex": 2,
    "totalLessons": 10,
    "duration": "25 分钟",
                "outcomes": [
        "定义生成式 AI，并解释它与其他 AI 类型的区别"
,
        "解释促成现代 LLM 的三个发展"
,
        "识别当前 AI 擅长的领域与它稳定失灵的领域"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "ai-fluency-for-builders",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "the-4d-framework",
        "title": "2. 4D框架",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "ai-capabilities-and-limitations",
        "title": "3.人工智能的能力和局限性",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "delegation-the-builder-s-toolkit",
        "title": "4. 委托和构建者工具包",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "description-building-great-things",
        "title": "5. 描述和构建伟大的事物",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "discernment-for-code",
        "title": "6. 代码辨别",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "discernment-for-user-experience",
        "title": "7、用户体验辨别力",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "stand-behind-what-you-build",
        "title": "8. 坚持你所创造的东西",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "closure-looking-forward",
        "title": "9. 结束与展望",
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
        "contentHtml": "<p>本课介绍像 Claude 这样的大语言模型是如何构建和训练的，以及这对它们在你业务中能——和不能——可靠地做什么意味着什么。</p>"
      },
      {
        "id": "sec-1",
        "title": "什么是生成式 AI",
        "contentHtml": "<p><strong>生成式 AI（Generative AI）创造新内容，而不是分析现有数据。</strong>它通过理解你提供的上下文，生成新的文本、代码、图像等。</p>"
      },
      {
        "id": "sec-2",
        "title": "现代 LLM 的三个发展",
        "contentHtml": "<p>三个关键发展让现代大语言模型成为可能：</p><ul><li><strong>Transformer 架构</strong>——一种能高效处理序列数据的神经网络结构</li><li><strong>海量训练数据</strong>——来自互联网的数十亿示例</li><li><strong>大规模算力</strong>——训练这些模型所需的巨大计算资源</li></ul><p>训练分两个阶段：<strong>预训练（Pre-training）</strong>从数十亿示例中学习模式；<strong>微调（Fine-tuning）</strong>教会模型有帮助地遵循指令。</p>"
      },
      {
        "id": "sec-3",
        "title": "当前优势与局限",
        "contentHtml": "<p><strong>当前优势包括：</strong></p><ul><li>跨任务的通用性（versatility）</li><li>对话流畅度（conversational fluency）</li><li>工具使用（tool use）能力</li></ul><p><strong>当前局限包括：</strong></p><ul><li>知识截止（knowledge cutoffs）——不知道训练后发生的事</li><li>幻觉（hallucinations）——自信地给出错误信息</li><li>复杂推理不可靠（unreliable complex reasoning）</li></ul><p>最好的应用，是把你的<strong>判断、创造力与监督</strong>和 AI 的<strong>速度与规模</strong>结合起来。</p>"
      },
      {
        "id": "sec-4",
        "title": "练习：测试边界",
        "contentHtml": "<p>这个练习用你早已熟稔的编码问题，让你亲身体验生成式 AI 的强项与短板——建立来自你自己观察的具体直觉，用于决定该信任 AI 做什么。</p><h3>第一部分：自我反思</h3><p>挑一个你非常熟悉的编码领域（例如你的限流逻辑、异步状态处理、上季度优化的数据库查询），记下：这个话题；任何合格工程师都应该做对的两三件事；一个常见误解或棘手的实现细节；一件最近发生变化的事（库更新、弃用、新最佳实践）。</p><h3>第二部分：与 AI 协作</h3><p>与 Claude（或你喜欢的任何 AI 助手）展开对话，做三场快速对话，每场之后记下你的观察：</p><ul><li><strong>通用性测试</strong>——请 AI 用三种不同方式解释你的话题：给非技术 PM、给新加入团队的中级工程师、给做代码评审的资深工程师。深度的转换真的成立，还是只换了词汇？哪个版本最强？</li><li><strong>幻觉测试</strong>——请 AI 为你的编码问题推荐具体的库、包或文档。至少抽查一个：它存在吗？API 准确吗？版本是最新的吗？</li><li><strong>知识截止与推理检查</strong>——问一个与你领域相关的时效性问题（最近的框架更新、弃用模式、安全补丁）。它会提示信息可能过时，还是把旧信息当作最新？再请它处理你第一部分记下的棘手实现细节。它真的化解了困惑，还是只是复述了正确答案？</li></ul><h3>第三部分：反思</h3><p>视频中的哪个能力最清楚地显现了？哪个局限浮出水面——如果这不是你熟悉的领域，你会抓到它吗？据此，哪一项任务你愿意放心交给 AI，哪一项你会更密切地盯住？延伸目标：把同一个话题交给第二个 AI 工具，错误与优势是否相同？</p>"
      },
      {
        "id": "sec-5",
        "title": "课程反思与下一步",
        "contentHtml": "<h3>课程反思</h3><ul><li>了解这些系统是如何训练的，会如何改变你与它们协作的方式？</li><li>考虑到生成式 AI 的运作方式与短板，你会想到哪些伦理考量？</li></ul><h3>下一步</h3><p>你已经亲身测试了 AI 的边界。下一课将深入第一个 D：委派。在写一行代码之前，你将框定一个真实问题、映射构建者工具箱、并对 AI 的角色做出深思熟虑的选择。</p>"
      }
    ],
    "prevLesson": {
      "slug": "the-4d-framework",
      "title": "The 4D Framework"
    },
    "nextLesson": {
      "slug": "delegation-the-builder-s-toolkit",
      "title": "Delegation & the builder's toolkit"
    }
  },
  "delegation-the-builder-s-toolkit": {
    "lessonId": "delegation-the-builder-s-toolkit",
    "lessonTitle": "委托和构建者工具包",
    "lessonIndex": 3,
    "totalLessons": 10,
    "duration": "15 分钟",
                "outcomes": [
        "介绍构建者工具箱及 AI 在每个阶段的增值点"
,
        "解释为什么委派实施是安全的、委派判断则不然"
,
        "在写任何代码之前编写定义「完成」的验收测试"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "ai-fluency-for-builders",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "the-4d-framework",
        "title": "2. 4D框架",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "ai-capabilities-and-limitations",
        "title": "3.人工智能的能力和局限性",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "delegation-the-builder-s-toolkit",
        "title": "4. 委托和构建者工具包",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "description-building-great-things",
        "title": "5. 描述和构建伟大的事物",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "discernment-for-code",
        "title": "6. 代码辨别",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "discernment-for-user-experience",
        "title": "7、用户体验辨别力",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "stand-behind-what-you-build",
        "title": "8. 坚持你所创造的东西",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "closure-looking-forward",
        "title": "9. 结束与展望",
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
        "contentHtml": "<p>在写第一行代码之前，你会做出十几个决定，它们决定了你构建的东西是否重要。本课重新框定「委派」：它不是「我该在这里用 AI 吗？」，而是「我有一个客户问题——我如何拆解它，AI 在其中扮演什么角色？」</p>"
      },
      {
        "id": "sec-1",
        "title": "构建者的工具箱",
        "contentHtml": "<p>委派意味着<strong>先拆解问题，再决定每一步 AI 处理什么</strong>。构建者工具箱（builder's toolkit）覆盖从问题到交付的各个阶段，AI 在每个阶段都可能增值。</p><p>对每一项能力，选择最合适的 AI 协作模式：</p><ul><li><strong>自动化（Automation）</strong>——AI 完成，你检查</li><li><strong>增强（Augmentation）</strong>——你和 AI 一起协作完成</li><li><strong>代理（Agency）</strong>——AI 在你设定的边界内自主运作</li></ul>"
      },
      {
        "id": "sec-2",
        "title": "委派实施是安全的，委派判断不是",
        "contentHtml": "<p>AI 加速了实现（implementation），因此你的价值转移到<strong>框定问题</strong>与<strong>抬高标准</strong>上。</p><ul><li><strong>委派实施</strong>——让 AI 写代码、写文档、做重复性工作，通常是安全的：你可以检查、测试、修正。</li><li><strong>委派判断</strong>——把「这个功能该不该存在」「这样做是否符合用户利益」等判断交给 AI，通常不安全：这些判断需要人的价值观与上下文。</li></ul>"
      },
      {
        "id": "sec-3",
        "title": "验收测试：在代码之前定义「完成」",
        "contentHtml": "<p><strong>在写代码之前先写验收测试（Acceptance Tests）。</strong>它们给你和 AI 一个共享的「完成」定义。</p><p>好的验收测试必须具体到让一个陌生人也能判断成品是通过还是失败：</p><p>好的例子：「拥有基础智能手机的患者，无需创建账户，能在 30 秒内找到当前等待时间。」</p><p>坏的例子：「系统易于使用。」</p>"
      },
      {
        "id": "sec-4",
        "title": "练习：诊所候诊时间项目，第 1 部分",
        "contentHtml": "<p>这个项目贯穿整个课程，你会在每一课回到它，最终构建出真实的东西。但本课你<strong>一行代码都不写</strong>——这是刻意的。</p><p><strong>情境</strong>：一家社区健康诊所需要让患者在看诊前查看候诊时间。你只被告知这么多。你这一课的任务是做构建之前的工作，产出三个交付物：</p><h3>交付物 1：问题简报（最多一页）</h3><ul><li>用户是谁？要具体——患者，是的，但哪些患者？工作人员呢？还有谁接触这个系统？</li><li>他们真正需要什么？不是「一个候诊时间查询器」，而是他们希望达成的结果。</li><li>一个好的解决方案用起来是什么感觉？描述体验，而不是功能。</li><li>真正的约束是什么？想想预算、诊所的技术能力、患者的设备访问、隐私要求。</li></ul><h3>交付物 2：委派计划</h3><p>把构建映射到六个工具能力。对每一项，决定哪种 AI 协作模式最合适（自动化 / 增强 / 代理）。做一个简单的表格——六行，每项能力一行。</p><h3>交付物 3：验收测试</h3><p>写 5–7 条定义「完成」的陈述，每条都要具体到陌生人能判断成品通过还是失败。</p>"
      },
      {
        "id": "sec-5",
        "title": "课程反思与下一步",
        "contentHtml": "<h3>课程反思</h3><ul><li>在过去项目中，你的时间大多花在六项能力的哪些地方？又应该在哪里投入更多？</li><li>如果实现明天变得几乎免费，你作为构建者的价值来自哪里？</li></ul><h3>下一步</h3><p>下一课从委派转向描述。你已经决定了要构建什么、谁做什么——现在你需要把它清晰地表达出来，让 AI 真的能够执行。</p>"
      }
    ],
    "prevLesson": {
      "slug": "ai-capabilities-and-limitations",
      "title": "AI capabilities & limitations"
    },
    "nextLesson": {
      "slug": "description-building-great-things",
      "title": "Description & building great things"
    }
  },
  "description-building-great-things": {
    "lessonId": "description-building-great-things",
    "lessonTitle": "描述和构建伟大的事物",
    "lessonIndex": 4,
    "totalLessons": 10,
    "duration": "15 分钟",
                "outcomes": [
        "使用描述链把用户需求翻译为精确的 AI 指令"
,
        "识别描述失败何时发生级联，并追溯到断裂的一环"
,
        "通过测试表达意图，精确告诉 AI 成功长什么样"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "ai-fluency-for-builders",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "the-4d-framework",
        "title": "2. 4D框架",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "ai-capabilities-and-limitations",
        "title": "3.人工智能的能力和局限性",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "delegation-the-builder-s-toolkit",
        "title": "4. 委托和构建者工具包",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "description-building-great-things",
        "title": "5. 描述和构建伟大的事物",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "discernment-for-code",
        "title": "6. 代码辨别",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "discernment-for-user-experience",
        "title": "7、用户体验辨别力",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "stand-behind-what-you-build",
        "title": "8. 坚持你所创造的东西",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "closure-looking-forward",
        "title": "9. 结束与展望",
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
        "contentHtml": "<p>大多数 AI 训练教你写更好的提示词。这对构建伟大产品是必要的，但还不够。本课绘制完整的<strong>描述链（Description Chain）</strong>：从混乱的人类需求到 AI 可以执行的精确指令的路径，构建者在每一步都是翻译者。</p>"
      },
      {
        "id": "sec-1",
        "title": "描述链",
        "contentHtml": "<p>描述链连接：<strong>用户的声音 → 需求（requirement）→ 技术规格（technical spec）→ AI 指令 → 测试</strong>。<strong>提示工程只是其中的一环。</strong></p><p>每一步都包含前一阶段没有替你做出的判断决策。</p>"
      },
      {
        "id": "sec-2",
        "title": "构建者是每一步的翻译者",
        "contentHtml": "<p><strong>AI 听不到用户没有说出口的话。</strong>把用户需求翻译成 AI 能行动的形式，是构建者的核心工作。</p><p><strong>代码能跑、但产品不行，是描述失败（description failure）。</strong>找出上游哪一环断了——是需求没抓住？规格有歧义？还是指令不精确？</p>"
      },
      {
        "id": "sec-3",
        "title": "测试是最精确的描述",
        "contentHtml": "<p><strong>测试是描述的最精确形式。</strong>一个通过的测试配上不满意的用户，意味着你描述错了意图——不是代码错了，是你告诉 AI 的「成功」不对。</p>"
      },
      {
        "id": "sec-4",
        "title": "练习：诊所项目，第 2 部分",
        "contentHtml": "<p>接着上一课继续。拿出你的问题简报、委派计划和验收测试。</p><ol><li><strong>写产品需求</strong>——一段话。把问题简报中的用户需求限定为可衡量的内容。每个形容词都应该是你能辩护的决定：写「快」，就写有多快；写「简单」，就描述对在停车场用手机查看的患者而言「简单」意味着什么。</li><li><strong>写技术规格</strong>——半页。描述构建什么、如何组织，说出各部分以及它们如何相互通信。此处用增强模式：分享产品需求，请 AI 提出技术方案，然后对任何不符合你约束的地方提出反驳。</li><li><strong>收紧你的测试</strong>——重写验收测试，让每条都是代码能通过或失败的内容。至少加两个边界情况：诊所关门时、没有数据时、候诊时间为零时。</li><li><strong>写 AI 提示词并构建</strong>——写把规格变成可运行代码的指令，包含约束、技术栈选择与测试，构建第一版。</li><li><strong>演示它</strong>——找一个搭档扮演诊所患者（带着生病的孩子，只有十分钟）。把构建物交给他用，不解释、不帮忙。测试通过了吗？患者满意吗？如果这两个答案不匹配，你会回到链上的哪一环？</li></ol>"
      },
      {
        "id": "sec-5",
        "title": "课程反思与下一步",
        "contentHtml": "<h3>课程反思</h3><ul><li>描述链中的哪一步翻译对你最自然？哪一步你容易草草带过？</li><li>在诊所演示中，你的意图与搭档实际体验之间最大的差距在哪里？</li></ul><h3>下一步</h3><p>下一课从描述转向鉴别。你构建了东西、代码能跑——现在的问题是它是否真的够好。</p>"
      }
    ],
    "prevLesson": {
      "slug": "delegation-the-builder-s-toolkit",
      "title": "Delegation & the builder's toolkit"
    },
    "nextLesson": {
      "slug": "discernment-for-code",
      "title": "Discernment for code"
    }
  },
  "discernment-for-code": {
    "lessonId": "discernment-for-code",
    "lessonTitle": "代码辨别",
    "lessonIndex": 5,
    "totalLessons": 10,
    "duration": "30 分钟",
                "outcomes": [
        "用五个透镜评估 AI 生成的工作：正确性、质量、契合、体验、责任"
,
        "通过学习 AI 构建产品的特定失败模式，把质量门槛抬到「能跑」之上"
,
        "在 AI 可预测的技术盲点进入生产之前抓住它们"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "ai-fluency-for-builders",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "the-4d-framework",
        "title": "2. 4D框架",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "ai-capabilities-and-limitations",
        "title": "3.人工智能的能力和局限性",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "delegation-the-builder-s-toolkit",
        "title": "4. 委托和构建者工具包",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "description-building-great-things",
        "title": "5. 描述和构建伟大的事物",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "discernment-for-code",
        "title": "6. 代码辨别",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "discernment-for-user-experience",
        "title": "7、用户体验辨别力",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "stand-behind-what-you-build",
        "title": "8. 坚持你所创造的东西",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "closure-looking-forward",
        "title": "9. 结束与展望",
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
        "contentHtml": "<p>当 AI 能在几分钟内生成一个能跑的产品时，「能跑」就不再是标准。本课学习 AI 构建的产品通常在哪些地方失败、哪些技术盲点只在生产环境而不在开发环境暴露，以及如何培养 AI 不具备的「品味」。</p>"
      },
      {
        "id": "sec-1",
        "title": "五个评估透镜",
        "contentHtml": "<p>评估 AI 生成的工作，用五个透镜：</p><ul><li><strong>正确性（Correctness）</strong>——它对吗？</li><li><strong>质量（Quality）</strong>——它好吗？</li><li><strong>契合（Fit）</strong>——它符合需求吗？</li><li><strong>体验（Experience）</strong>——它用起来怎么样？</li><li><strong>责任（Responsibility）</strong>——它对用户和社会负责吗？</li></ul><p><strong>能运行的代码仍然可能失败。</strong>AI 的默认输出在技术上完整，但常常抓不住重点。</p>"
      },
      {
        "id": "sec-2",
        "title": "AI 可预测的盲点",
        "contentHtml": "<p>AI 在以下方面有可预测的盲点：</p><ul><li><strong>并发（Concurrency）</strong>——并行状态、竞态条件</li><li><strong>安全（Security）</strong>——漏洞与边界条件</li><li><strong>任何只在规模上才暴露的问题</strong>——大数据量、高流量下的行为</li></ul><p>这些盲点在开发环境很少显现，上线后却会咬你一口。要在它们进入生产之前抓住它们。</p>"
      },
      {
        "id": "sec-3",
        "title": "品味是构建者的技能",
        "contentHtml": "<p><strong>品味（Taste）是构建者的技能。AI 交付「可用」（functional）——让它「值得用」（worth using）是你的事。</strong>通过学习 AI 构建产品的典型失败模式，把质量门槛从「能跑」抬到「值得用」。</p>"
      },
      {
        "id": "sec-4",
        "title": "练习：用户测试诊所项目",
        "contentHtml": "<p>把你的构建物放到一位扮演患者或诊所管理员的搭档面前——不解释、不帮忙。观察他们在哪里困惑、忽略什么、想要什么你从未构建的东西。</p><p>写下三件你会改变的事，并标注每一件属于哪个透镜。</p>"
      },
      {
        "id": "sec-5",
        "title": "课程反思与下一步",
        "contentHtml": "<h3>课程反思</h3><ul><li>五个透镜中哪个是你自然而然地应用的，哪个需要提醒自己检查？</li><li>当 AI 产出不够好时，你的本能是什么：自己修，还是描述得更好？</li></ul><h3>下一步</h3><p>你已经通过你容易跳过的透镜压力测试了诊所候诊时间查询器。接下来，你将用另一个透镜看同一个工具：它用起来到底什么感觉？</p>"
      }
    ],
    "prevLesson": {
      "slug": "description-building-great-things",
      "title": "Description & building great things"
    },
    "nextLesson": {
      "slug": "discernment-for-user-experience",
      "title": "Discernment for user experience"
    }
  },
  "discernment-for-user-experience": {
    "lessonId": "discernment-for-user-experience",
    "lessonTitle": "对用户体验的辨别力",
    "lessonIndex": 6,
    "totalLessons": 10,
    "duration": "15 分钟",
                "outcomes": [
        "在指定 AI 构建内容时应用层级、用户流程、可访问性与反馈模式"
,
        "用足够具体、可执行的反馈批评 AI 生成的设计"
,
        "在速度、打磨与用户需求之间做出有意的权衡决策"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "ai-fluency-for-builders",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "the-4d-framework",
        "title": "2. 4D框架",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "ai-capabilities-and-limitations",
        "title": "3.人工智能的能力和局限性",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "delegation-the-builder-s-toolkit",
        "title": "4. 委托和构建者工具包",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "description-building-great-things",
        "title": "5. 描述和构建伟大的事物",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "discernment-for-code",
        "title": "6. 代码辨别",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "discernment-for-user-experience",
        "title": "7、用户体验辨别力",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "stand-behind-what-you-build",
        "title": "8. 坚持你所创造的东西",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "closure-looking-forward",
        "title": "9. 结束与展望",
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
        "contentHtml": "<p>随着 AI 加速实现，设计成为差异化因素。本课介绍与 AI 协作时最重要的 UX 原则、为什么「让它好看」产生不了任何有用的东西，以及如何弥合「你会给同事的批评」与「AI 能执行的描述」之间的差距。</p>"
      },
      {
        "id": "sec-1",
        "title": "当实施变快，体验成为差异化",
        "contentHtml": "<p>当实现很快时，<strong>体验（experience）就是差异化因素</strong>。<strong>设计素养是核心构建者技能</strong>——你不必是设计师，但必须能精确地描述体验。</p>"
      },
      {
        "id": "sec-2",
        "title": "「让它好看」是愿望，不是规格",
        "contentHtml": "<p><strong>「让它好看」（make it look good）是一个愿望，不是规格。</strong>要用描述一个函数的同样精度来描述体验：信息层级、用户流程、交互模式、反馈行为。</p>"
      },
      {
        "id": "sec-3",
        "title": "可访问性需要显式指定",
        "contentHtml": "<p><strong>AI 默认不会做对可访问性（accessibility）。</strong>必须显式指定它，然后审计拿回来的结果。颜色对比、屏幕阅读器、键盘导航——逐项检查。</p>"
      },
      {
        "id": "sec-4",
        "title": "从批评到可执行的描述",
        "contentHtml": "<p>一个<strong>好的批评</strong>与一个<strong>可执行的 AI 描述</strong>是两种不同的产物。你给同事的批评可能是「这个按钮太靠下了」；给 AI 的描述需要是「主操作按钮应位于首屏视口的右上角，至少在 320px 宽的视口下可见」。学会在两者之间翻译。</p>"
      },
      {
        "id": "sec-5",
        "title": "练习：诊所项目，第 3 部分",
        "contentHtml": "<p>为你的诊所应用写一份设计规格——用户流程、信息层级、交互模式——然后让 AI 依据这份规格重建它。批评结果：AI 哪里做对了？哪里技术上正确但体验上平淡？再跑一次快速的可访问性审计，记录 AI 遗漏了什么。</p><ul><li><strong>清晰与心智模型</strong>——输出是否使用了诊所管理员能识别的语言与模式？</li><li><strong>信息层级</strong>——最重要的信息是用户首先看到的吗？</li><li><strong>可访问性</strong>——是否通过颜色对比、屏幕阅读器与键盘导航检查？</li><li><strong>反馈与错误处理</strong>——界面是否确认用户操作，并在出错时解释该怎么做？</li></ul>"
      },
      {
        "id": "sec-6",
        "title": "课程反思与下一步",
        "contentHtml": "<h3>课程反思</h3><ul><li>你的设计规格有多少在描述界面做什么，又有多少在描述它应该用起来什么感觉？</li><li>跑完可访问性检查后——你是从一开始就把可访问性考虑进去，还是在最后才补上？</li></ul><h3>下一步</h3><p>你已经用代码透镜和 UX 透镜看过你的诊所候诊时间查询器。下一课将处理最难的问题：真正「为自己构建的东西负责」意味着什么？</p>"
      }
    ],
    "prevLesson": {
      "slug": "discernment-for-code",
      "title": "Discernment for code"
    },
    "nextLesson": {
      "slug": "stand-behind-what-you-build",
      "title": "Stand behind what you build"
    }
  },
  "stand-behind-what-you-build": {
    "lessonId": "stand-behind-what-you-build",
    "lessonTitle": "支持您所构建的内容",
    "lessonIndex": 7,
    "totalLessons": 10,
    "duration": "15 分钟",
                "outcomes": [
        "阐明当你交付有 AI 帮助构建的东西时，你拥有什么"
,
        "识别发布时浮现的技术现实，并建立抓住它们的反馈循环"
,
        "做出决定：发布它、修复它、还是停止它"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "ai-fluency-for-builders",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "the-4d-framework",
        "title": "2. 4D框架",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "ai-capabilities-and-limitations",
        "title": "3.人工智能的能力和局限性",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "delegation-the-builder-s-toolkit",
        "title": "4. 委托和构建者工具包",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "description-building-great-things",
        "title": "5. 描述和构建伟大的事物",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "discernment-for-code",
        "title": "6. 代码辨别",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "discernment-for-user-experience",
        "title": "7、用户体验辨别力",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "stand-behind-what-you-build",
        "title": "8. 坚持你所创造的东西",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "closure-looking-forward",
        "title": "9. 结束与展望",
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
        "contentHtml": "<p>构建者模式中的尽责（Diligence）是<strong>完全所有权</strong>：你负责产品从「它是否应该存在」到「上线后是否服务好用户」的全程。本课讲的是发布的含义、AI 不会警告你的技术现实、为什么测试在你上线的那一刻成为你的安全网，以及一个被低估的技能——停用自己的作品。</p>"
      },
      {
        "id": "sec-1",
        "title": "你拥有结果，而非产出",
        "contentHtml": "<p><strong>你拥有结果（outcome），而不是产出（output）。</strong>「AI 写的」解释不了什么，也开脱不了什么。当你交付一件有 AI 帮助构建的东西，你就是它的负责人。</p>"
      },
      {
        "id": "sec-2",
        "title": "上线的技术现实",
        "contentHtml": "<p>发布有自己的技术词汇：<strong>迁移（migrations）、版本（versioning）、速率限制（rate limits）、功能开关（feature flags）</strong>——除非你主动问，AI 不会主动提及这些。发布前主动排查这些维度。</p>"
      },
      {
        "id": "sec-3",
        "title": "测试是安全网",
        "contentHtml": "<p><strong>测试让发布后的迭代变得安全。</strong>测试优先的习惯，是你为什么能持续自信地修改代码的原因——每一次改动都有验收测试在背后兜底。</p><p><strong>自由原型，选择性发布（Prototype freely, ship selectively）。</strong>廉价代码只有在与诚实的评估搭配时才创造价值。</p>"
      },
      {
        "id": "sec-4",
        "title": "访问是设计决策",
        "contentHtml": "<p><strong>访问（access）是设计决策。</strong>在你把某样东西称为「已发布」之前，检查你的假设排除了谁——没有宽屏设备的人？不熟悉技术的患者？视障用户？</p>"
      },
      {
        "id": "sec-5",
        "title": "练习：发布诊所应用",
        "contentHtml": "<p>发布是尽责落地的地方——在部署之前，诚实地回答每一个问题。完成这些之后，部署你的应用或把它托管为原型，分享给三位真实用户，并基于所学做一次迭代，用测试验证改动：</p><ul><li><strong>理解</strong>——你能解释你的代码做什么，而不只是它应该做什么吗？</li><li><strong>测试</strong>——你的验收测试仍然通过吗？你测试过边界情况吗——诊所关门、数据缺失、候诊时间为零？</li><li><strong>访问</strong>——你的构建没有服务好哪些人？</li><li><strong>责任</strong>——这个输出会被误读或误用吗？你对 AI 的角色透明吗？</li><li><strong>反馈循环</strong>——发布后你如何知道它是否在正常工作？</li></ul>"
      },
      {
        "id": "sec-6",
        "title": "课程反思与下一步",
        "contentHtml": "<h3>课程反思</h3><ul><li>从课程开始到现在，你对 AI 整合的思考发生了怎样的变化？</li><li>基于所学，你与 AI 的工作中会做出哪一件不同的事？</li></ul><h3>下一步</h3><p>你已经构建、评估并发布了诊所候诊时间查询器。在最后一课中，你将把完整的 4D 框架整合起来，并带着一个已经在推进的真实任务离开。</p>"
      }
    ],
    "prevLesson": {
      "slug": "discernment-for-user-experience",
      "title": "Discernment for user experience"
    },
    "nextLesson": {
      "slug": "closure-looking-forward",
      "title": "Closure & looking forward"
    }
  },
  "closure-looking-forward": {
    "lessonId": "closure-looking-forward",
    "lessonTitle": "结束与展望",
    "lessonIndex": 8,
    "totalLessons": 10,
    "duration": "15 分钟",
                "outcomes": [
        "找到课程结束后继续构建 AI 素养的资源"
,
        "向能从 4D 框架受益的同事分享所学"
,
        "获得你的结业徽章"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "ai-fluency-for-builders",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "the-4d-framework",
        "title": "2. 4D框架",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "ai-capabilities-and-limitations",
        "title": "3.人工智能的能力和局限性",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "delegation-the-builder-s-toolkit",
        "title": "4. 委托和构建者工具包",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "description-building-great-things",
        "title": "5. 描述和构建伟大的事物",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "discernment-for-code",
        "title": "6. 代码辨别",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "discernment-for-user-experience",
        "title": "7、用户体验辨别力",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "stand-behind-what-you-build",
        "title": "8. 坚持你所创造的东西",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "closure-looking-forward",
        "title": "9. 结束与展望",
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
        "contentHtml": "<p>这节收尾视频把你在整个课程中学到的一切整合起来，并挑战你用手中已经等待着的真实工作，立刻把它付诸实践。</p>"
      },
      {
        "id": "sec-1",
        "title": "回顾关键要点",
        "contentHtml": "<ul><li><strong>AI 在工具箱的中间环节最强。</strong>放心委派实现；把同理心、判断与发布留在自己手里。</li><li><strong>稳健的描述意味着走完整条链</strong>：用户声音 → 需求 → 规格 → AI 指令 → 测试。任何一环失败都会向下游级联。</li><li><strong>自由原型，选择性发布。</strong>当证据表明某个东西不奏效时，要愿意否决自己构建的东西。</li><li><strong>发布前应用鉴别。</strong>AI 的输出常常通过「它能工作吗？」，却在「它是正确的东西吗？」上栽跟头。这些差距正是你的判断最重要的地方。</li><li><strong>4D 是动态的，不是序列。</strong>在构建中灵活地在它们之间移动，才是实践中的素养。</li></ul>"
      },
      {
        "id": "sec-2",
        "title": "练习：你的下一个构建",
        "contentHtml": "<p>完成本课程前，从你当前的工作中挑一个真实任务，本周在 AI 支持下完成。选一个具体、已经在等待的任务——不是假设性的。好的候选：</p><ul><li>一个你一直推迟的功能需求</li><li>尚未整理的用户研究或反馈</li><li>动工前需要写好的技术规格</li><li>代码库中一个没有测试、让你不敢碰的部分</li></ul><p>用全部四项能力走完它：</p><ul><li><strong>委派</strong>——哪些阶段可以放心委派？哪些需要你的判断？</li><li><strong>描述</strong>——写完整条链：用户需求 → 需求 → 规格 → AI 指令 → 测试。</li><li><strong>鉴别</strong>——用全部五个透镜评估输出。</li><li><strong>尽责</strong>——发布前：我理解它做什么吗？有反馈循环吗？我会为它负责吗？</li></ul>"
      },
      {
        "id": "sec-3",
        "title": "课程反思与下一步",
        "contentHtml": "<h3>课程反思</h3><ul><li>你本周承诺做哪个任务——4D 框架的哪部分对它最重要？</li><li>课程开始时你对与 AI 协作有什么看法，现在你看到了什么不同？</li><li>你团队中谁会从 4D 框架中受益？</li></ul><h3>下一步</h3><p>接下来，参加简短测验，赢得你的结业徽章。</p>"
      }
    ],
    "prevLesson": {
      "slug": "stand-behind-what-you-build",
      "title": "Stand behind what you build"
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
    "duration": "6 分钟",
                "outcomes": [
        "通过课程测验，检验对 4D 框架与构建者实践的核心理解"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "ai-fluency-for-builders",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "the-4d-framework",
        "title": "2. 4D框架",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "ai-capabilities-and-limitations",
        "title": "3.人工智能的能力和局限性",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "delegation-the-builder-s-toolkit",
        "title": "4. 委托和构建者工具包",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "description-building-great-things",
        "title": "5. 描述和构建伟大的事物",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "discernment-for-code",
        "title": "6. 代码辨别",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "discernment-for-user-experience",
        "title": "7、用户体验辨别力",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "stand-behind-what-you-build",
        "title": "8. 坚持你所创造的东西",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "closure-looking-forward",
        "title": "9. 结束与展望",
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
        "contentHtml": "<p>通过以下问题检验你对构建者 AI 素养核心知识的掌握。</p>"
,
        "quiz": {
          "id": "quiz-1",
          "title": "知识自测",
          "options": [
            { "id": "a", "text": "内循环指导日常交互，外循环指导更大的决策", "isCorrect": true, "explanation": "描述与鉴别构成内循环，指导日常 AI 交互；委派与尽责构成外循环，指导关于何时与如何使用 AI 的更大决策。" },
            { "id": "b", "text": "四个能力互不相关，按固定顺序使用", "isCorrect": false, "explanation": "4D 是动态的，不是序列，且内外循环各自承担不同层级的决策。" },
            { "id": "c", "text": "内循环只用于生产，外循环只用于开发", "isCorrect": false, "explanation": "内外循环的区分依据是决策规模，而非开发阶段。" }
          ],
          "generalExplanation": "4D 框架由两个循环构成：日常交互（描述、鉴别）与大决策（委派、尽责）。"
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
            { "id": "a", "text": "委派实施通常是安全的，委派判断通常不安全", "isCorrect": true, "explanation": "实施可以被检查、测试和修正；判断需要人的价值观与上下文，不应外包。" },
            { "id": "b", "text": "委派判断通常是安全的", "isCorrect": false, "explanation": "判断涉及价值观与目标，AI 不具备人的上下文。" },
            { "id": "c", "text": "应该把所有工作都委派给 AI", "isCorrect": false, "explanation": "AI 在中间环节最强，同理心、判断与发布应留在自己手里。" }
          ],
          "generalExplanation": "委派实施安全，委派判断不安全——这是委派的核心法则。"
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
            { "id": "a", "text": "用户声音 → 需求 → 技术规格 → AI 指令 → 测试", "isCorrect": true, "explanation": "描述链完整路径，提示工程只是其中一环。" },
            { "id": "b", "text": "提示词 → 输出 → 反馈", "isCorrect": false, "explanation": "这不是描述链——描述链始于用户声音，终于测试。" },
            { "id": "c", "text": "问题 → 代码 → 部署", "isCorrect": false, "explanation": "描述链强调从用户到可执行指令的完整翻译路径。" }
          ],
          "generalExplanation": "描述链连接用户声音与测试，构建者在每一步都是翻译者。"
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
            { "id": "a", "text": "正确性、质量、契合、体验、责任", "isCorrect": true, "explanation": "五个透镜：正确性、质量、契合、体验、责任。" },
            { "id": "b", "text": "速度、成本、规模", "isCorrect": false, "explanation": "这属于工程权衡，而非鉴别透镜。" },
            { "id": "c", "text": "设计、开发、测试、部署、运维", "isCorrect": false, "explanation": "这是软件生命周期，而非评估 AI 工作的透镜。" }
          ],
          "generalExplanation": "鉴别用五个透镜评估 AI 生成的工作。"
        }
      }
    ],
    "prevLesson": {
      "slug": "closure-looking-forward",
      "title": "Closure & looking forward"
    }
  }
};
