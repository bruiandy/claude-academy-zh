import { LessonLayoutProps } from '../../components/LessonLayout';

export const AI_FLUENCY_FOUNDATIONS_LESSONS: Record<string, Omit<LessonLayoutProps, 'courseId' | 'courseTitle'>> = {
  "introduction-to-ai-fluency": {
    "lessonId": "introduction-to-ai-fluency",
    "lessonTitle": "AI 素养导论：人机协作新范式",
    "lessonIndex": 0,
    "totalLessons": 13,
    "duration": "8 分钟",
    "outcomes": [
      "认识 AI 素养在当前技术演进与职场协作中的战略重要性",
      "掌握后续人机协同学习路径的核心组成要素",
      "Claude：访问 claude.ai 创建免费帐户",
      "您还可以根据需要使用其他人工智能聊天机器人"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "introduction-to-ai-fluency",
        "title": "1. AI 素养导论：人机协作新范式",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "why-do-we-need-ai-fluency",
        "title": "2. 为什么我们在 AI 时代迫切需要 AI 素养？",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "the-4d-framework",
        "title": "3. Anthropic 4D核心人机协作框架",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "generative-ai-fundamentals",
        "title": "4. 生成式 AI 的底层计算原理",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "capabilities-limitations",
        "title": "5. 模型能力边界与幻觉防范",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "a-closer-look-at-delegation",
        "title": "6.深度剖析“委派（Delegation）”：划分人机职责",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "project-planning-and-delegation",
        "title": "7. 项目规划与任务有效委派",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "a-closer-look-at-description",
        "title": "8. 深度剖析“描述（Description）”：精准上下文传达",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "effective-prompting-techniques",
        "title": "9. 高效提示设计与成型技巧",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "a-closer-look-at-discernment",
        "title": "10. 深度剖析“解析（Discernment）”：批判性审计AI增量",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "the-description-discernment-loop",
        "title": "11. “描述-鉴别”双向迭代反馈闭环",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "a-closer-look-at-diligence",
        "title": "12. 深度剖析“尽责（尽职）”：安全合规与最终交付责任",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "conclusion",
        "title": "13. 课程总结与实践展望",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "AI 素养导论：人机协作新范式",
        "contentHtml": "<p class=\"text-body font-medium\">AI 素养导论：人际协作机新范式 · 4 分钟</span></p>\n<p class=\"text-base leading-relaxed text-secondary\">欢迎！该视频向您介绍本课程的重点：开发\n与人工智能进行有意义的合作而不仅仅是学习人工智能\n技术。我们解释说，本课程探讨如何建立持久的\n超越简单和临时的人工智能系统工作框架\n提示和技巧。我们解释一下 AI 流畅性的含义：它是一种能力\n以有效、高效、合乎道德的方式与人工智能合作\n安全。我们还概述了课程结构，涵盖了每个人工智能\n流利的核心能力（4D）以及关键技术和实践\n概念。课程结束时，您将拥有一个深思熟虑的框架\nAI交互，有信心选择何时以及如何与AI合作\n有效、实用的协作技能以及评估和评估的能力\n负责任地传播人工智能辅助的工作。</p>"
      },
      {
        "id": "sec-1",
        "title": "核心要点",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">本课程重点关注人类与人工智能的协作，而不仅仅是将人工智能理解为一种技术</li>\n<li class=\"text-base leading-relaxed text-secondary\">AI 流畅性意味着有效、高效、合乎道德且安全地参与 AI 系统</li>\n<li class=\"text-base leading-relaxed text-secondary\">AI流畅性框架以“4D”能力为中心，即授权、描述、辨别和勤奋</li>\n<li class=\"text-base leading-relaxed text-secondary\">目标是培养随着人工智能技术的发展而保持相关性的持久技能</li>\n<li class=\"text-base leading-relaxed text-secondary\">有效的人工智能协作既需要实践技能，也需要我们对人工智能工作方式的根本转变</li>\n</ul>"
      },
      {
        "id": "sec-2",
        "title": "实操练习与反思",
        "contentHtml": "<p class=\"text-footnote italic text-muted\">您需要访问语言模型（5-10 分钟）</p>\n<p class=\"text-base leading-relaxed text-secondary\">在本课程中，您将通过直接使用语言模型来练习所学内容。虽然我们的示例以 Claude（Anthropic 的人工智能助手）为特色，但欢迎您使用您喜欢的任何语言模型。我们将探索的原则和技能适用于不同的人工智能系统。</p>\n<p class=\"text-base leading-relaxed text-secondary\">入门简单且免费：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">Claude：访问claude.ai（在新选项卡中打开）创建免费帐户</li>\n<li class=\"text-base leading-relaxed text-secondary\">无需付费订阅即可完成课程活动</li>\n<li class=\"text-base leading-relaxed text-secondary\">您还可以根据需要使用其他人工智能聊天机器人</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">Claude是新人吗？不用担心！我们将为每个练习提供明确的指导，以帮助您入门。</p>\n<p class=\"text-base leading-relaxed text-secondary\">在继续之前，请花点时间考虑一下您自己的人工智能体验：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">在使用人工智能实现特定成果时，您遇到了哪些挑战？</li>\n<li class=\"text-base leading-relaxed text-secondary\">人工智能协作的哪些可能性最令您兴奋？</li>\n<li class=\"text-base leading-relaxed text-secondary\">您希望从本课程中获得什么？</li>\n</ul>"
      },
      {
        "id": "sec-3",
        "title": "接下来是什么",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在下一课中，我们将探讨为什么人工智能流畅性在当今快速发展的技术环境中很重要。我们将介绍人们与 AI 协作的三种关键方式（自动化、增强和代理）以及 AI 流畅框架的核心能力：授权、描述、辨别和勤奋的“4D”。</p>"
      }
    ],
    "nextLesson": {
      "slug": "why-do-we-need-ai-fluency",
      "title": "为什么我们在 AI 时代迫切需要 AI 素养？"
    }
  },
  "why-do-we-need-ai-fluency": {
    "lessonId": "why-do-we-need-ai-fluency",
    "lessonTitle": "为什么我们在 AI 时代迫切需要 AI 素养？",
    "lessonIndex": 1,
    "totalLessons": 13,
    "duration": "8 分钟",
    "outcomes": [
      "了解 AI 流畅度的含义以及为什么它在当今快速发展的技术环境中很重要",
      "认识我们与人工智能合作的三种新兴方式：自动化、增强和代理",
      "自动化：人工智能根据您的指令完成特定任务。",
      "增强：你和人工智能作为创造性思维和任务执行的合作伙伴进行协作。"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "introduction-to-ai-fluency",
        "title": "1. AI 素养导论：人机协作新范式",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "why-do-we-need-ai-fluency",
        "title": "2. 为什么我们在 AI 时代迫切需要 AI 素养？",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "the-4d-framework",
        "title": "3. Anthropic 4D核心人机协作框架",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "generative-ai-fundamentals",
        "title": "4. 生成式 AI 的底层计算原理",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "capabilities-limitations",
        "title": "5. 模型能力边界与幻觉防范",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "a-closer-look-at-delegation",
        "title": "6.深度剖析“委派（Delegation）”：划分人机职责",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "project-planning-and-delegation",
        "title": "7. 项目规划与任务有效委派",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "a-closer-look-at-description",
        "title": "8. 深度剖析“描述（Description）”：精准上下文传达",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "effective-prompting-techniques",
        "title": "9. 高效提示设计与成型技巧",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "a-closer-look-at-discernment",
        "title": "10. 深度剖析“解析（Discernment）”：批判性审计 AI 计算器",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "the-description-discernment-loop",
        "title": "11. “描述-鉴别”双向迭代反馈闭环",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "a-closer-look-at-diligence",
        "title": "12. 深度剖析“尽责（尽职）”：安全合规与最终交付责任",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "conclusion",
        "title": "13. 课程总结与实践展望",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "为什么我们在 AI 时代迫切需要 AI 素养？",
        "contentHtml": "<p class=\"text-body font-medium\">为什么我们在 AI 时代迫切需要 AI 素养？</p>\n<p class=\"text-base leading-relaxed text-secondary\">本课深入探讨“流利”人工智能的真正意义及其原因\n这很重要。我们讨论了 AI Fluency 如何涉及开发实用的\n帮助您了解人工智能交互的技能、知识、观点和价值观\n系统以有效、高效、道德和安全的方式进行。我们也\n介绍人们与人工智能互动的显着方式：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">自动化：人工智能根据您的指令完成特定任务。</li>\n<li class=\"text-base leading-relaxed text-secondary\">增强：你和人工智能作为创造性思维和任务执行的合作伙伴进行协作。</li>\n<li class=\"text-base leading-relaxed text-secondary\">代理：您将人工智能配置为代表您独立工作，建立其知识和行为模式，而不仅仅是赋予它特定的任务。</li>\n</ul>"
      }
    ],
    "prevLesson": {
      "slug": "introduction-to-ai-fluency",
      "title": "AI 素养导论：人机协作新范式"
    },
    "nextLesson": {
      "slug": "the-4d-framework",
      "title": "Anthropic 4D 核心人机协作框架"
    }
  },
  "the-4d-framework": {
    "lessonId": "the-4d-framework",
    "lessonTitle": "Anthropic 4D 核心人协作机框架",
    "lessonIndex": 2,
    "totalLessons": 13,
    "duration": "8 分钟",
    "outcomes": [
      "解释基本的人工智能流畅性框架及其核心“4D”：委派、描述、辨别和勤奋",
      "授权：深思熟虑地决定哪些工作是用人工智能来做，哪些是自己做",
      "描述：与人工智能系统清晰沟通",
      "洞察力：以批判的眼光评估人工智能的输出和行为"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "introduction-to-ai-fluency",
        "title": "1. AI 素养导论：人机协作新范式",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "why-do-we-need-ai-fluency",
        "title": "2. 为什么我们在 AI 时代迫切需要 AI 素养？",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "the-4d-framework",
        "title": "3. Anthropic 4D核心人机协作框架",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "generative-ai-fundamentals",
        "title": "4. 生成式 AI 的底层计算原理",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "capabilities-limitations",
        "title": "5. 模型能力边界与幻觉防范",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "a-closer-look-at-delegation",
        "title": "6.深度剖析“委派（Delegation）”：划分人机职责",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "project-planning-and-delegation",
        "title": "7. 项目规划与任务有效委派",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "a-closer-look-at-description",
        "title": "8. 深度剖析“描述（Description）”：精准上下文传达",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "effective-prompting-techniques",
        "title": "9. 高效提示设计与成型技巧",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "a-closer-look-at-discernment",
        "title": "10. 深度剖析“解析（Discernment）”：批判性审计 AI 计算器",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "the-description-discernment-loop",
        "title": "11. “描述-鉴别”双向迭代反馈闭环",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "a-closer-look-at-diligence",
        "title": "12. 深度剖析“尽责（尽职）”：安全合规与最终交付责任",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "conclusion",
        "title": "13. 课程总结与实践展望",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "4D框架",
        "contentHtml": "<p class=\"text-body font-medium\">Anthropic 4D 核心人协作机框架 · 5 分钟</span></p>\n<p class=\"text-base leading-relaxed text-secondary\">本视频介绍了AI流畅度的四大核心能力，或者说\n“4D”：授权、描述、洞察和勤奋。</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">授权：深思熟虑地决定哪些工作是用人工智能来做，哪些是自己做</li>\n<li class=\"text-base leading-relaxed text-secondary\">描述：与人工智能系统清晰沟通</li>\n<li class=\"text-base leading-relaxed text-secondary\">洞察力：以批判的眼光评估人工智能的输出和行为</li>\n<li class=\"text-base leading-relaxed text-secondary\">勤奋：确保您负责任地与人工智能互动</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">我们探讨这些能力如何在不同的人工智能参与方式中协同工作，以及为什么发展这些技能可以让你为人工智能下一步的发展做好准备。</p>"
      },
      {
        "id": "sec-1",
        "title": "核心要点",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">AI 流畅性意味着以有效、高效、道德和安全的方式参与 AI</li>\n<li class=\"text-base leading-relaxed text-secondary\">我们与人工智能互动的主要方式有以下三种：\n\n自动化：人工智能根据您的指令执行特定任务</li>\n<li class=\"text-base leading-relaxed text-secondary\">增强：你和人工智能作为创造性思维和任务执行的合作伙伴进行协作</li>\n<li class=\"text-base leading-relaxed text-secondary\">代理：你引导人工智能代表你独立工作，塑造它的知识和行为，而不是具体的行动</li>\n</ul>\n</li>\n<li class=\"text-base leading-relaxed text-secondary\">AI 流畅框架由四项核心能力（4D）组成：\n\n授权：决定使用人工智能与你自己做什么工作</li>\n<li class=\"text-base leading-relaxed text-secondary\">描述：与人工智能系统有效沟通</li>\n<li class=\"text-base leading-relaxed text-secondary\">洞察力：批判性地评估人工智能输出</li>\n<li class=\"text-base leading-relaxed text-secondary\">勤奋：确保负责任的人工智能协作</li>\n</ul>\n</li>\n<li class=\"text-base leading-relaxed text-secondary\">这些能力适用于使用人工智能的所有三种方式</li>\n<li class=\"text-base leading-relaxed text-secondary\">培养这些能力可以帮助您为不断发展的人工智能能力做好准备</li>\n</ul>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">自动化：人工智能根据您的指令执行特定任务</li>\n<li class=\"text-base leading-relaxed text-secondary\">增强：你和人工智能作为创造性思维和任务执行的合作伙伴进行协作</li>\n<li class=\"text-base leading-relaxed text-secondary\">代理：你引导人工智能代表你独立工作，塑造它的知识和行为，而不是具体的行动</li>\n</ul>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">授权：决定使用人工智能与你自己做什么工作</li>\n<li class=\"text-base leading-relaxed text-secondary\">描述：与人工智能系统有效沟通</li>\n<li class=\"text-base leading-relaxed text-secondary\">洞察力：批判性地评估人工智能输出</li>\n<li class=\"text-base leading-relaxed text-secondary\">勤奋：确保负责任的人工智能协作</li>\n</ul>"
      },
      {
        "id": "sec-2",
        "title": "实操练习与反思",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">选择以下协作场景之一并考虑如何应用 4D 框架：</p>\n<p class=\"text-base leading-relaxed text-secondary\">您正在与人工智能助理合作，为营销活动起草一系列电子邮件。</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">四：这个项目的哪些方面你会自己处理，而不是与人工智能合作？</li>\n<li class=\"text-base leading-relaxed text-secondary\">描述： 您将如何向人工智能传达您对活动基调、目的和成功标准的愿景？</li>\n<li class=\"text-base leading-relaxed text-secondary\">感知力：什么标准可以帮助您评估AI起草的电子邮件是否满足您的需求？</li>\n<li class=\"text-base leading-relaxed text-secondary\">勤勉：围绕透明度和责任的哪些考虑因素很重要？</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">您正在使用人工智能来帮助分析研究论文的大型数据集。</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">四：您将如何分配您自己和人工智能之间的分析工作？</li>\n<li class=\"text-base leading-relaxed text-secondary\">描述： 人工智能需要了解您的研究问题的哪些背景才能很好地完成其分担的任务？</li>\n<li class=\"text-base leading-relaxed text-secondary\">感知力：您如何验证人工智能分析的准确性？</li>\n<li class=\"text-base leading-relaxed text-secondary\">勤勉：发表人工智能辅助研究时可能会出现哪些伦理考量？</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">您正在与 AI 合作开发故事的角色概念。</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">四：与独立开发相比，您更希望通过AI协作探索哪些创意元素？</li>\n<li class=\"text-base leading-relaxed text-secondary\">描述： 您如何引导人工智能生成适合您故事世界的角色？</li>\n<li class=\"text-base leading-relaxed text-secondary\">感知力：你会如何决定保留、修改或丢弃哪些人工智能建议的元素？</li>\n<li class=\"text-base leading-relaxed text-secondary\">勤勉：您如何认可人工智能对您的创造性工作的贡献？</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">在进入下一小节前，花两分钟思考以下问题：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">您对哪一个 4D（授权、描述、洞察力、勤奋）最有信心？哪些可能需要更多的开发？</li>\n<li class=\"text-base leading-relaxed text-secondary\">您能回忆一下最近该框架可能提供帮助的人工智能交互吗？</li>\n<li class=\"text-base leading-relaxed text-secondary\">4D 框架中的哪些具体技能最能增强您的工作或个人项目？</li>\n</ul>"
      },
      {
        "id": "sec-3",
        "title": "下一步预告",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">下一课，深入探讨 1：“什么是生成式 AI？”是一个由两部分组成的技术课程，解释了现代人工智能的基础工作原理、它与以前的技术有何不同，以及它当前的功能和局限性。这些知识将为 4D 提供宝贵的背景，尤其是增强您的代表团能力。</p>"
      }
    ],
    "prevLesson": {
      "slug": "why-do-we-need-ai-fluency",
      "title": "为什么我们在 AI 时代迫切需要 AI 素养？"
    },
    "nextLesson": {
      "slug": "generative-ai-fundamentals",
      "title": "生成式 AI 的底层计算原理"
    }
  },
  "generative-ai-fundamentals": {
    "lessonId": "generative-ai-fundamentals",
    "lessonTitle": "生成式 AI 的底层计算原理",
    "lessonIndex": 3,
    "totalLessons": 13,
    "duration": "8 分钟",
    "outcomes": [
      "定义生成式人工智能及其与其他人工智能类型的本质区别",
      "认识生成式人工智能的关键特征与技术底层（Transformer 架构与预训练）"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "introduction-to-ai-fluency",
        "title": "1. AI 素养导论：人机协作新范式",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "why-do-we-need-ai-fluency",
        "title": "2. 为什么我们在 AI 时代迫切需要 AI 素养？",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "the-4d-framework",
        "title": "3. Anthropic 4D核心人机协作框架",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "generative-ai-fundamentals",
        "title": "4. 生成式 AI 的底层计算原理",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "capabilities-limitations",
        "title": "5. 模型能力边界与幻觉防范",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "a-closer-look-at-delegation",
        "title": "6.深度剖析“委派（Delegation）”：划分人机职责",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "project-planning-and-delegation",
        "title": "7. 项目规划与任务有效委派",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "a-closer-look-at-description",
        "title": "8. 深度剖析“描述（Description）”：精准上下文传达",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "effective-prompting-techniques",
        "title": "9. 高效提示设计与成型技巧",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "a-closer-look-at-discernment",
        "title": "10. 深度剖析“解析（Discernment）”：批判性审计AI增量",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "the-description-discernment-loop",
        "title": "11. “描述-鉴别”双向迭代反馈闭环",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "a-closer-look-at-diligence",
        "title": "12. 深度剖析“尽责（尽职）”：安全合规与最终交付责任",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "conclusion",
        "title": "13. 课程总结与实践展望",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "生成式 AI 的底层计算原理",
        "contentHtml": "<div class=\"my-6 p-4 rounded-xl bg-surface-2 border border-border flex items-center justify-between\">\n  <div class=\"flex items-center gap-3\">\n    <div class=\"w-10 h-10 rounded-lg bg-brand-clay/10 text-brand-clay flex items-center justify-center font-bold\">▶</div>\n    <div>\n      <h4 class=\"text-sm font-medium text-primary\">官方原版视频讲座：生成式 AI 底层计算原理</h4>\n      <p class=\"text-xs text-secondary mt-0.5\">原站时长约 8 分钟 · 讲师精讲与架构演进</p>\n    </div>\n  </div>\n  <a href=\"https://www.youtube.com/watch?v=RyvXxApfHkk\" target=\"_blank\" rel=\"noreferrer\" class=\"text-xs text-brand-clay hover:underline\">\n    原站视频外链 ↗\n  </a>\n</div>\n\n<h3 class=\"font-serif text-lg font-medium text-primary mt-6 mb-3\">一、 判别式 AI 与生成式 AI 的本质跃迁</h3>\n<p class=\"text-base leading-relaxed text-secondary mb-4\">\n传统人工智能（判别式 AI）的核心任务是<strong>分类与判断</strong>（例如识别图片中是否有猫、判断邮件是否为垃圾邮件）。而<strong>生成式人工智能（Generative AI）</strong>则实现了质的飞跃——它具备<strong>自主创造全新内容</strong>（包括连贯文本、可运行代码、复杂推理与多轮方案设计）的能力。\n</p>\n\n<h3 class=\"font-serif text-lg font-medium text-primary mt-6 mb-3\">二、 大语言模型（LLM）的三大底层技术支柱</h3>\n<ul class=\"flex list-disc flex-col gap-2 pl-6 mb-4 text-secondary text-sm leading-relaxed\">\n  <li><strong>Transformer 神经网络架构</strong>：通过自注意力机制（Self-Attention），模型能够同时权衡整篇文章中所有词元（Tokens）之间的复杂长距离依赖关系，彻底突破了传统 RNN 的时序瓶颈。</li>\n  <li><strong>海量多源预训练（Pre-training）</strong>：通过在千亿级高质量文本、代码与学术文献中进行 Next-Token 预测训练，模型在参数空间中压缩了人类文明维度的世界知识与逻辑结构。</li>\n  <li><strong>人类反馈强化学习与对齐（RLHF / Constitutional AI）</strong>：通过宪法原则与人类偏好微调，使模型从纯粹的统计补全机器转变为遵循指令、诚实且具备自我纠错能力的智能协作伙伴。</li>\n</ul>\n\n<h3 class=\"font-serif text-lg font-medium text-primary mt-6 mb-3\">三、 核心能力指标：上下文窗口与涌现属性</h3>\n<p class=\"text-base leading-relaxed text-secondary mb-4\">\n像 Claude 这样领先的模型拥有高达 <strong>200K+ Tokens 的上下文窗口（Context Window）</strong>，这相当于几百页完整报告的临时工作记忆。当模型参数与计算规模突破临界阈值时，便会产生<strong>涌现能力（Emergent Capabilities）</strong>——具备多步逻辑链拆解、跨语言直译、抽象类比以及工具调用编排等高阶智能。\n</p>",
        "videoData": {
          "title": "Generative AI Fundamentals (生成式 AI 底层计算原理)",
          "duration": "8 分钟",
          "youtubeUrl": "https://www.youtube.com/watch?v=RyvXxApfHkk",
          "youtubeEmbedUrl": "https://www.youtube-nocookie.com/embed/RyvXxApfHkk?rel=0&enablejsapi=1"
        }
      }
    ],
    "prevLesson": {
      "slug": "the-4d-framework",
      "title": "Anthropic 4D 核心人机协作框架"
    },
    "nextLesson": {
      "slug": "capabilities-limitations",
      "title": "模型能力边界与幻觉防范"
    }
  },
  "capabilities-limitations": {
    "lessonId": "capabilities-limitations",
    "lessonTitle": "模型能力边界与幻觉防范",
    "lessonIndex": 4,
    "totalLessons": 13,
    "duration": "8 分钟",
    "outcomes": [
      "确定当前生成式人工智能的主要功能和局限性",
      "模型能力边界与幻觉防范"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "introduction-to-ai-fluency",
        "title": "1. AI 素养导论：人机协作新范式",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "why-do-we-need-ai-fluency",
        "title": "2. 为什么我们在 AI 时代迫切需要 AI 素养？",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "the-4d-framework",
        "title": "3. Anthropic 4D核心人机协作框架",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "generative-ai-fundamentals",
        "title": "4. 生成式 AI 的底层计算原理",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "capabilities-limitations",
        "title": "5. 模型能力边界与幻觉防范",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "a-closer-look-at-delegation",
        "title": "6.深度剖析“委派（Delegation）”：划分人机职责",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "project-planning-and-delegation",
        "title": "7. 项目规划与任务有效委派",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "a-closer-look-at-description",
        "title": "8. 深度剖析“描述（Description）”：精准上下文传达",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "effective-prompting-techniques",
        "title": "9. 高效提示设计与成型技巧",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "a-closer-look-at-discernment",
        "title": "10. 深度剖析“解析（Discernment）”：批判性审计AI增量",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "the-description-discernment-loop",
        "title": "11. “描述-鉴别”双向迭代反馈闭环",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "a-closer-look-at-diligence",
        "title": "12. 深度剖析“尽责（尽职）”：安全合规与最终交付责任",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "conclusion",
        "title": "13. 课程总结与实践展望",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "模型能力边界与幻觉防范",
        "contentHtml": "<p class=\"text-body font-medium\">功能和限制 · 7 分钟</span></p>\n<p class=\"text-base leading-relaxed text-secondary\">该视频探讨了生成式人工智能可以和不能有效地做什么\n这个时间点。我们强调生成式人工智能跨语言的多功能性\n任务、维持对话流程的能力以及切换的能力\n无需额外培训即可在不同的任务之间进行切换。我们还解决\n限制包括知识截止日期、幻觉（事实上\n不正确的输出）、上下文窗口约束和推理挑战。我们\n强调该领域如何快速发展并解释最\n有效的应用汇集了人类的互补优势\n和人工智能一起工作。</p>"
      },
      {
        "id": "sec-1",
        "title": "核心要点",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">生成式人工智能创建新内容（文本、图像、代码），而不仅仅是分析现有数据</li>\n<li class=\"text-base leading-relaxed text-secondary\">像法学硕士这样的现代系统是通过三个关键发展而成为可能的：\n\n算法和架构的突破（尤其是Transformer架构）</li>\n<li class=\"text-base leading-relaxed text-secondary\">海量数字训练数据</li>\n<li class=\"text-base leading-relaxed text-secondary\">计算能力大幅提升</li>\n</ul>\n</li>\n<li class=\"text-base leading-relaxed text-secondary\">生成式人工智能通过两个阶段进行学习：预训练（分析数十亿个示例的模式）和微调（学习遵循指令并提供有用的响应）</li>\n<li class=\"text-base leading-relaxed text-secondary\">当前的功能包括跨任务的多功能性、对话意识以及与外部工具连接的能力</li>\n<li class=\"text-base leading-relaxed text-secondary\">当前的限制包括知识截止日期、产生幻觉的可能性、上下文窗口限制以及复杂推理的挑战</li>\n<li class=\"text-base leading-relaxed text-secondary\">最有效的应用程序结合了人类和人工智能的优势，人类提供批判性思维、判断力、创造力和道德监督</li>\n</ul>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">算法和架构的突破（尤其是Transformer架构）</li>\n<li class=\"text-base leading-relaxed text-secondary\">海量数字训练数据</li>\n<li class=\"text-base leading-relaxed text-secondary\">计算能力大幅提升</li>\n</ul>"
      },
      {
        "id": "sec-2",
        "title": "实操练习与反思",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在进入下一小节前，花两分钟思考以下问题：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">了解生成式人工智能的技术基础（例如训练数据和预训练/微调）如何改变您对使用这些系统的看法？</li>\n<li class=\"text-base leading-relaxed text-secondary\">了解这些系统的工作原理及其当前的局限性后，您会想到哪些道德考虑？</li>\n</ul>"
      },
      {
        "id": "sec-3",
        "title": "下一步预告",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在下一课中，我们将仔细研究 4D 能力中的第一项：授权。您将学习如何在了解您的目标和 AI 功能的基础上，做出关于在您自己和 AI 之间划分工作的战略决策。该基础将帮助您深思熟虑地确定何时以及如何将人工智能引入您的创意和解决问题的过程。</p>"
      }
    ],
    "prevLesson": {
      "slug": "generative-ai-fundamentals",
      "title": "生成式 AI 的底层计算原理"
    },
    "nextLesson": {
      "slug": "a-closer-look-at-delegation",
      "title": "深度剖析“委派 (Delegation)”：划分人机职责"
    }
  },
  "a-closer-look-at-delegation": {
    "lessonId": "a-closer-look-at-delegation",
    "lessonTitle": "深度剖析“委派（Delegation）”：划分人机职责",
    "lessonIndex": 5,
    "totalLessons": 13,
    "duration": "8 分钟",
    "outcomes": [
      "了解委派能力及其三个组成部分：问题税务（问题税务（问题意识））、平台税务（平台税务（平台意识））和任务委派（任务委托派（任务委派）））",
      "识别何时以及如何有效地将任务委托给人工智能",
      "使用人工智能时培养对任务、平台和模式注意事项的认识",
      "问题负载（问题负载（问题负载（问题意识）））：清晰理解你的目标以及完成目标所需的具体工作链条"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "introduction-to-ai-fluency",
        "title": "1. AI 素养导论：人机协作新范式",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "why-do-we-need-ai-fluency",
        "title": "2. 为什么我们在 AI 时代迫切需要 AI 素养？",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "the-4d-framework",
        "title": "3. Anthropic 4D核心人机协作框架",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "generative-ai-fundamentals",
        "title": "4. 生成式 AI 的底层计算原理",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "capabilities-limitations",
        "title": "5. 模型能力边界与幻觉防范",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "a-closer-look-at-delegation",
        "title": "6.深度剖析“委派（Delegation）”：划分人机职责",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "project-planning-and-delegation",
        "title": "7. 项目规划与任务有效委派",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "a-closer-look-at-description",
        "title": "8. 深度剖析“描述（Description）”：精准上下文传达",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "effective-prompting-techniques",
        "title": "9. 高效提示设计与成型技巧",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "a-closer-look-at-discernment",
        "title": "10. 深度剖析“解析（Discernment）”：批判性审计 AI 计算器",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "the-description-discernment-loop",
        "title": "11. “描述-鉴别”双向迭代反馈闭环",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "a-closer-look-at-diligence",
        "title": "12. 深度剖析“尽责（尽职）”：安全合规与最终交付责任",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "conclusion",
        "title": "13. 课程总结与实践展望",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "深度剖析“委派（Delegation）”：划分人机职责",
        "contentHtml": "<p class=\"text-body font-medium\">深度剖析“委派（Delegation）”：划分人机职责·6分钟</span></p>\n<p class=\"text-base leading-relaxed text-secondary\">本课将深入探讨AI素养（AI Fluency）的第一个核心能力：委派（Delegation）。委派的核心审议决策哪些工作由人类自主完成、哪些与AI共同探讨、以及如何决策编编高效任务排分工。委派包含三大核心要素：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">问题负载（问题负载（问题负载（问题意识）））：清晰理解你的目标以及完成目标所需的具体工作链条</li>\n<li class=\"text-base leading-relaxed text-secondary\">平台资源（平台资源）：准确了解不同的AI系统与模型的能力边界与特长</li>\n<li class=\"text-base leading-relaxed text-secondary\">任务委派（任务委派（任务委派（任务委派）））：在人类与人工智能之间进行策略性的分工与职责划分</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">我们还将重点强调，为什么高效的委派既需要你在专业领域的深厚经验，也需要对 AI 真实能力的准确理解 ——这是在 AI 时代实现高效人机协同不可或缺的基本功。</p>"
      },
      {
        "id": "sec-1",
        "title": "核心要点",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">委派是在人机协同中做出审慎决策：哪些工作独立完成、哪些与 AI 共同探讨、哪些全权交由 AI 执行，并合理编排任务流。</li>\n<li class=\"text-base leading-relaxed text-secondary\">问题感知意味着在引入 AI 之前，必须对自身的业务目标与任务本质有清晰透彻的理解。</li>\n<li class=\"text-base leading-relaxed text-secondary\">平台感知要求深入掌握各类 AI 工具的长处、短板与适用边界。</li>\n<li class=\"text-base leading-relaxed text-secondary\">任务委派是通过在人与 AI 之间合理分配工作，最大化发挥人类的专业判断力与 AI 的计算吞吐优势。</li>\n<li class=\"text-base leading-relaxed text-secondary\">有效的委派既需要本领域的专业背景知识，也需要对 AI 真实能力的精准认知。</li>\n<li class=\"text-base leading-relaxed text-secondary\">终极目标绝非盲目实现全自动化，而是针对具体目标构建最行之有效的人机协作伙伴关系。</li>\n</ul>"
      },
      {
        "id": "sec-2",
        "title": "实操练习与反思",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">操作指引：</p>\n<p class=\"text-base leading-relaxed text-secondary\">从日常工作或生活中选择一项简单的任务（例如起草一封邮件、拟定演讲大纲、或筹备一次团队会议）。</p>\n<p class=\"text-base leading-relaxed text-secondary\">Claude开始新的对话</p>\n<p class=\"text-base leading-relaxed text-secondary\">向 Claude 阐述你打算进行的任务，例如：</p>\n<p class=\"text-base leading-relaxed text-secondary\">Claude好，我正在准备[填入你的任务]，想和你一起制定一个任务委派方案，厘清哪些部分适合交由AI辅助，哪些部分应该由我优先把关。你能帮我完成填写吗？</p>\n<p class=\"text-base leading-relaxed text-secondary\">与Claude共同探讨以下关键问题：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">这项任务的整体愿景是什么？一个高质量的交付结果长什么样？</li>\n<li class=\"text-base leading-relaxed text-secondary\">达成该目标需要拆解为哪些具体的工作步骤？</li>\n<li class=\"text-base leading-relaxed text-secondary\">这些步骤中，哪些必须依赖人类的专业判断、审美直觉或创造力？</li>\n<li class=\"text-base leading-relaxed text-secondary\">提示：在与Claude探讨这些问题时，进行真实的双边对话！不要只向发号施令。来回推敲往往能激发双方未考虑到的新视角。</em></li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">协同制定一份简洁的委派方案，充分结合人类的洞察与 AI 的生成能力。</p>\n<p class=\"text-base leading-relaxed text-secondary\">在进入下一小节前，花两分钟思考以下问题：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">回顾最近一次你与 AI 合作的项目，如果运用本课的“委派”框架，你的工作方式会有何不同？</li>\n<li class=\"text-base leading-relaxed text-secondary\">在你目前的工作或学业中，哪些类型的任务最能从人机协同中受益？</li>\n</ul>"
      },
      {
        "id": "sec-3",
        "title": "下一步预告",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在下一课中，你将把学到的“委派”方法论应用到一个贯穿整个课程的多步骤实战项目中。 你将选择一个感兴趣的项目，明确其愿景与交付标准，拆解为具体子任务，并制定一份人机协同委派计划。该项目将作为后续所有 AI 素养实战演练的核心画卷。</p>"
      }
    ],
    "prevLesson": {
      "slug": "capabilities-limitations",
      "title": "模型能力边界与幻觉防范"
    },
    "nextLesson": {
      "slug": "project-planning-and-delegation",
      "title": "项目规划与任务有效委派"
    }
  },
  "project-planning-and-delegation": {
    "lessonId": "project-planning-and-delegation",
    "lessonTitle": "项目规划与任务有效委派",
    "lessonIndex": 6,
    "totalLessons": 13,
    "duration": "8 分钟",
    "outcomes": [
      "项目规划与任务有效委派"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "introduction-to-ai-fluency",
        "title": "1. AI 素养导论：人机协作新范式",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "why-do-we-need-ai-fluency",
        "title": "2. 为什么我们在 AI 时代迫切需要 AI 素养？",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "the-4d-framework",
        "title": "3. Anthropic 4D核心人机协作框架",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "generative-ai-fundamentals",
        "title": "4. 生成式 AI 的底层计算原理",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "capabilities-limitations",
        "title": "5. 模型能力边界与幻觉防范",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "a-closer-look-at-delegation",
        "title": "6.深度剖析“委派（Delegation）”：划分人机职责",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "project-planning-and-delegation",
        "title": "7. 项目规划与任务有效委派",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "a-closer-look-at-description",
        "title": "8. 深度剖析“描述（Description）”：精准上下文传达",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "effective-prompting-techniques",
        "title": "9. 高效提示设计与成型技巧",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "a-closer-look-at-discernment",
        "title": "10. 深度剖析“解析（Discernment）”：批判性审计 AI 计算器",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "the-description-discernment-loop",
        "title": "11. “描述-鉴别”双向迭代反馈闭环",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "a-closer-look-at-diligence",
        "title": "12. 深度剖析“尽责（尽职）”：安全合规与最终交付责任",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "conclusion",
        "title": "13. 课程总结与实践展望",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "项目规划和授权",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">选择一个中型、多步骤的项目，您可以在本课程的其余部分中进行该项目。你的项目应该是：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">足够大量涉及多种类型的任务</li>\n<li class=\"text-base leading-relaxed text-secondary\">易于管理，可在大约 1 小时内完成工作</li>\n<li class=\"text-base leading-relaxed text-secondary\">您真正有兴趣创造或完成的事情</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">以下是一些需要考虑的建议：</p>\n<p class=\"text-base leading-relaxed text-secondary\">通讯项目：</strong></p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">针对您熟悉的主题创建引人入胜的演示文稿</li>\n<li class=\"text-base leading-relaxed text-secondary\">撰写一篇或一系列文章，向普通受众解释复杂的主题</li>\n<li class=\"text-base leading-relaxed text-secondary\">为您想要追求的想法制定提案或宣传</li>\n<li class=\"text-base leading-relaxed text-secondary\">使用支持材料创建个人或专业简历</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">研究项目：</strong></p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">研究并总结新兴技术或趋势的现状</li>\n<li class=\"text-base leading-relaxed text-secondary\">分析数据集以识别模式并创建建议</li>\n<li class=\"text-base leading-relaxed text-secondary\">比较多种产品、服务或方法并创建推荐</li>\n<li class=\"text-base leading-relaxed text-secondary\">调查历史事件并以引人入胜的方式展示您的发现</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">创意项目：</strong></p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">概述一个具有充分发展的人物和情节的短篇故事</li>\n<li class=\"text-base leading-relaxed text-secondary\">设计一个简单的网站结构，其中包含关键页面的内容</li>\n<li class=\"text-base leading-relaxed text-secondary\">开发产品、服务或体验的概念</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">学习项目：</strong></p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">为您想要发展的技能制定结构化的学习计划</li>\n<li class=\"text-base leading-relaxed text-secondary\">针对您正在学习的主题构建资源集合</li>\n<li class=\"text-base leading-relaxed text-secondary\">为您熟悉的流程制定教程或指南</li>\n<li class=\"text-base leading-relaxed text-secondary\">为您想要掌握的主题创建一套学习材料</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">打开Claude开始新的对话。分享您的项目想法并邀请Claude问您一些问题，直到您觉得您对最终结果有一个坚实的愿景。共同努力，直到您清楚地了解：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">您的项目成功是什么样的</li>\n<li class=\"text-base leading-relaxed text-secondary\">是什么让这个项目对您特别有价值或有意义</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">与您在上一课中所做的类似，与 Claude 一起通过代表团的视角探索您的项目：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">需要哪些具体技能、知识或人工智能能力？</li>\n<li class=\"text-base leading-relaxed text-secondary\">哪些部分会受益于人类独特的优势？</li>\n<li class=\"text-base leading-relaxed text-secondary\">哪些部分可以很好地发挥AI能力？</li>\n<li class=\"text-base leading-relaxed text-secondary\">合作在哪些方面影响最大？</li>\n<li class=\"text-base leading-relaxed text-secondary\">注意：再次强调，就这些问题进行真诚的对话，而不仅仅是交换陈述。挑战假设，要求澄清，并对讨论过程中出现的意外见解保持开放态度。</em></li>\n</ul>"
      },
      {
        "id": "sec-1",
        "title": "反射",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在进入下一小节前，花两分钟思考以下问题：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">您与Claude的规划对话中得出了哪些见解？</li>\n<li class=\"text-base leading-relaxed text-secondary\">您预计您的授权计划中最具挑战性的方面是什么？</li>\n<li class=\"text-base leading-relaxed text-secondary\">哪些额外信息或技能可以帮助您更有效地委托人工智能？</li>\n</ul>"
      },
      {
        "id": "sec-2",
        "title": "下一步预告",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在下一课中，我们将探讨第二个核心能力：描述。您将学习与人工智能系统有效通信的方法，这将帮助您实施刚刚创建的计划。这包括定义您想要什么、指导人工智能如何完成任务以及指定您希望人工智能在整个过程中如何与您交互的技术。</p>"
      }
    ],
    "prevLesson": {
      "slug": "a-closer-look-at-delegation",
      "title": "深度剖析“委派 (Delegation)”：划分人机职责"
    },
    "nextLesson": {
      "slug": "a-closer-look-at-description",
      "title": "深度剖析“描述 (Description)”：精准传达上下文"
    }
  },
  "a-closer-look-at-description": {
    "lessonId": "a-closer-look-at-description",
    "lessonTitle": "深度剖析“描述（Description）”：精准传达上下文",
    "lessonIndex": 7,
    "totalLessons": 13,
    "duration": "8 分钟",
    "outcomes": [
      "了解如何有效地将您的意图传达给人工智能系统",
      "认识到清晰、有目的的沟通的重要性",
      "培养三种描述类型的技能：产品、流程和绩效",
      "产品描述：明确定义您希望人工智能创建什么"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "introduction-to-ai-fluency",
        "title": "1. AI 素养导论：人机协作新范式",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "why-do-we-need-ai-fluency",
        "title": "2. 为什么我们在 AI 时代迫切需要 AI 素养？",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "the-4d-framework",
        "title": "3. Anthropic 4D核心人机协作框架",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "generative-ai-fundamentals",
        "title": "4. 生成式 AI 的底层计算原理",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "capabilities-limitations",
        "title": "5. 模型能力边界与幻觉防范",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "a-closer-look-at-delegation",
        "title": "6.深度剖析“委派（Delegation）”：划分人机职责",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "project-planning-and-delegation",
        "title": "7. 项目规划与任务有效委派",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "a-closer-look-at-description",
        "title": "8. 深度剖析“描述（Description）”：精准上下文传达",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "effective-prompting-techniques",
        "title": "9. 高效提示设计与成型技巧",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "a-closer-look-at-discernment",
        "title": "10. 深度剖析“解析（Discernment）”：批判性审计AI增量",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "the-description-discernment-loop",
        "title": "11. “描述-鉴别”双向迭代反馈闭环",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "a-closer-look-at-diligence",
        "title": "12. 深度剖析“尽责（尽职）”：安全合规与最终交付责任",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "conclusion",
        "title": "13. 课程总结与实践展望",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "深度剖析“描述（Description）”：精准传达上下文",
        "contentHtml": "<p class=\"text-body font-medium\">深度剖析“描述（Description）”：精准传达上下文·4分钟</span></p>\n<p class=\"text-base leading-relaxed text-secondary\">本课深入探讨人工智能流畅性的描述能力——表达的艺术\n与人工智能描述系统有效沟通。我们解释说是\n不仅仅是简单地写提示；它涉及创建一个协作\n您和人工智能可以有效合作的环境。我们\n介绍一下三个关键组成部分的描述：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">产品描述：明确定义您希望人工智能创建什么</li>\n<li class=\"text-base leading-relaxed text-secondary\">流程描述：指导人工智能如何处理您的请求</li>\n<li class=\"text-base leading-relaxed text-secondary\">性能描述：定义您希望 AI 在协作期间的行为方式。</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">我们还强调，人工智能无法读懂您的想法，结果的质量通常取决于您是否清楚地表达了您的需求、首选方法和所需的交互方式。</p>"
      },
      {
        "id": "sec-1",
        "title": "核心要点",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">描述是关于以创建高效协作环境的方式与人工智能进行通信</li>\n<li class=\"text-base leading-relaxed text-secondary\">产品描述涉及在输出、格式、受众和风格方面明确定义您想要的内容</li>\n<li class=\"text-base leading-relaxed text-secondary\">流程描述指导人工智能如何处理您的请求，这与指定最终目标一样重要</li>\n<li class=\"text-base leading-relaxed text-secondary\">性能描述定义了行为方面，例如人工智能应该简洁还是详细、具有挑战性还是支持性</li>\n<li class=\"text-base leading-relaxed text-secondary\">人工智能系统是互动伙伴，而不是数据库或自动售货机</li>\n<li class=\"text-base leading-relaxed text-secondary\">预先清晰的沟通可以节省时间并带来更好的结果</li>\n</ul>"
      },
      {
        "id": "sec-2",
        "title": "实操练习与反思",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">操作指引：</strong></p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">清晰的产品描述（您到底想要什么）</li>\n<li class=\"text-base leading-relaxed text-secondary\">流程指导（您希望Claude如何处理它）</li>\n<li class=\"text-base leading-relaxed text-secondary\">性能规范（您希望 Claude 在协作期间表现如何）</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">在进入下一小节前，花两分钟思考以下问题：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">您认为在当前的人工智能交互中您可能忽略了描述的哪个组成部分（产品、流程或性能）？</li>\n<li class=\"text-base leading-relaxed text-secondary\">想想最近的一次人工智能交互并没有完全满足你的期望。更好的描述技巧如何改善结果？</li>\n</ul>"
      },
      {
        "id": "sec-3",
        "title": "接下来是什么",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在下一课中，我们将更深入地探讨有效的提示技巧。您将了解什么是提示工程及其重要性，应用六种基础技术从人工智能中获得更好的结果，并在响应不满足您的需求时练习故障排除和完善提示。</p>"
      }
    ],
    "prevLesson": {
      "slug": "project-planning-and-delegation",
      "title": "项目规划与任务有效委派"
    },
    "nextLesson": {
      "slug": "effective-prompting-techniques",
      "title": "高效 Prompt 设计与结构化技巧"
    }
  },
  "effective-prompting-techniques": {
    "lessonId": "effective-prompting-techniques",
    "lessonTitle": "高效提示设计与构建技巧",
    "lessonIndex": 8,
    "totalLessons": 13,
    "duration": "8 分钟",
    "outcomes": [
      "了解什么是即时工程以及为什么它对于高效的人工智能协作很重要",
      "应用六种基本提示技术来改善您的人工智能交互",
      "识别导致成功的人工智能交互的常见模式",
      "当 AI 响应不能满足您的需求时，进行故障排除并完善提示"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "introduction-to-ai-fluency",
        "title": "1. AI 素养导论：人机协作新范式",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "why-do-we-need-ai-fluency",
        "title": "2. 为什么我们在 AI 时代迫切需要 AI 素养？",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "the-4d-framework",
        "title": "3. Anthropic 4D核心人机协作框架",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "generative-ai-fundamentals",
        "title": "4. 生成式 AI 的底层计算原理",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "capabilities-limitations",
        "title": "5. 模型能力边界与幻觉防范",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "a-closer-look-at-delegation",
        "title": "6.深度剖析“委派（Delegation）”：划分人机职责",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "project-planning-and-delegation",
        "title": "7. 项目规划与任务有效委派",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "a-closer-look-at-description",
        "title": "8. 深度剖析“描述（Description）”：精准上下文传达",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "effective-prompting-techniques",
        "title": "9. 高效提示设计与成型技巧",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "a-closer-look-at-discernment",
        "title": "10. 深度剖析“解析（Discernment）”：批判性审计 AI 计算器",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "the-description-discernment-loop",
        "title": "11. “描述-鉴别”双向迭代反馈闭环",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "a-closer-look-at-diligence",
        "title": "12. 深度剖析“尽责（尽职）”：安全合规与最终交付责任",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "conclusion",
        "title": "13. 课程总结与实践展望",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "有效的提示技巧",
        "contentHtml": "<p class=\"text-body font-medium\">有效的提示技巧</p>\n<p class=\"text-base leading-relaxed text-secondary\">本课节深入探讨了在以下情况下制定有效提示的实用技巧：\n与Claude这样的人工智能助手一起工作。我们解释说，即时工程\n就是为人工智能系统设计有效指令的实践，\n将熟悉的人类沟通原理与人工智能特定的原理相结合\n考虑因素。我们介绍六种基本技术：给出上下文、\n显示所需输出的示例、指定约束、打破\n复杂的任务分解为步骤，要求人工智能首先思考，并定义\nAI的角色或语气。我们还分享了故障排除策略\n回答不太正确，并强调了导致以下问题的常见模式\n成功的互动。</p>"
      },
      {
        "id": "sec-1",
        "title": "核心要点",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">有效的提示将清晰的沟通原则与人工智能特定技术相结合</li>\n<li class=\"text-base leading-relaxed text-secondary\">六种基本的提示技巧：\n\n提供背景：具体说明您想要什么、为什么想要它以及相关背景</li>\n<li class=\"text-base leading-relaxed text-secondary\">显示示例：演示您正在寻找的输出样式或格式</li>\n<li class=\"text-base leading-relaxed text-secondary\">指定约束：明确定义格式、长度和其他输出要求</li>\n<li class=\"text-base leading-relaxed text-secondary\">将复杂的任务分解为多个步骤：引导人工智能进行多步骤推理</li>\n<li class=\"text-base leading-relaxed text-secondary\">让 AI 首先思考：为 AI 完成其流程提供空间</li>\n<li class=\"text-base leading-relaxed text-secondary\">定义 AI 的角色或语气：指定您希望 AI 如何进行通信</li>\n</ul>\n</li>\n<li class=\"text-base leading-relaxed text-secondary\">“秘密武器”：让人工智能本身帮助改善你的提示</li>\n<li class=\"text-base leading-relaxed text-secondary\">成功的提示是迭代的（也许还与人工智能协作！）。期望根据结果改进您的方法</li>\n<li class=\"text-base leading-relaxed text-secondary\">常见的成功模式包括提供清晰的任务概述、格式规范、显式约束和相关背景信息</li>\n</ul>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">提供背景：具体说明您想要什么、为什么想要它以及相关背景</li>\n<li class=\"text-base leading-relaxed text-secondary\">显示示例：演示您正在寻找的输出样式或格式</li>\n<li class=\"text-base leading-relaxed text-secondary\">指定约束：明确定义格式、长度和其他输出要求</li>\n<li class=\"text-base leading-relaxed text-secondary\">将复杂的任务分解为多个步骤：引导人工智能进行多步骤推理</li>\n<li class=\"text-base leading-relaxed text-secondary\">让 AI 首先思考：为 AI 完成其流程提供空间</li>\n<li class=\"text-base leading-relaxed text-secondary\">定义 AI 的角色或语气：指定您希望 AI 如何进行通信</li>\n</ul>"
      },
      {
        "id": "sec-2",
        "title": "实操练习与反思",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在进入下一小节前，花两分钟思考以下问题：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">您认为六种提示技术中哪一种最能增强您当前的人工智能交互？</li>\n<li class=\"text-base leading-relaxed text-secondary\">想想最近的人工智能交互并不能满足你的需求。哪些技术可能会改善结果？</li>\n<li class=\"text-base leading-relaxed text-secondary\">理解这些提示技术如何与 AI Fluency Framework 的描述能力联系起来？</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">如果您愿意，可以重温上一课中的“不良提示改头换面”，以练习这些提示原则。</p>"
      },
      {
        "id": "sec-3",
        "title": "接下来是什么",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在下一课中，我们将探讨第三个核心 AI 流畅能力——洞察力。本次深入探讨和之前的课程都重点关注如何与人工智能有效沟通以及如何练习良好的描述。洞察力解决了同样重要的挑战，即仔细评估人工智能产生的响应——对话的另一半！</p>"
      }
    ],
    "prevLesson": {
      "slug": "a-closer-look-at-description",
      "title": "深度剖析“描述 (Description)”：精准传达上下文"
    },
    "nextLesson": {
      "slug": "a-closer-look-at-discernment",
      "title": "深度剖析“鉴别 (Discernment)”：批判性审计 AI 产出"
    }
  },
  "a-closer-look-at-discernment": {
    "lessonId": "a-closer-look-at-discernment",
    "lessonTitle": "深度剖析“解析（Discernment）”：批判性审计AI增量",
    "lessonIndex": 9,
    "totalLessons": 13,
    "duration": "8 分钟",
    "outcomes": [
      "了解如何深思熟虑地评估人工智能的输出和流程",
      "培养人工智能交互的批判性思维技能",
      "学习识别并解决人工智能交互中的质量问题",
      "产品辨别：评估人工智能输出的质量"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "introduction-to-ai-fluency",
        "title": "1. AI 素养导论：人机协作新范式",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "why-do-we-need-ai-fluency",
        "title": "2. 为什么我们在 AI 时代迫切需要 AI 素养？",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "the-4d-framework",
        "title": "3. Anthropic 4D核心人机协作框架",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "generative-ai-fundamentals",
        "title": "4. 生成式 AI 的底层计算原理",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "capabilities-limitations",
        "title": "5. 模型能力边界与幻觉防范",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "a-closer-look-at-delegation",
        "title": "6.深度剖析“委派（Delegation）”：划分人机职责",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "project-planning-and-delegation",
        "title": "7. 项目规划与任务有效委派",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "a-closer-look-at-description",
        "title": "8. 深度剖析“描述（Description）”：精准上下文传达",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "effective-prompting-techniques",
        "title": "9. 高效提示设计与成型技巧",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "a-closer-look-at-discernment",
        "title": "10. 深度剖析“解析（Discernment）”：批判性审计 AI 计算器",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "the-description-discernment-loop",
        "title": "11. “描述-鉴别”双向迭代反馈闭环",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "a-closer-look-at-diligence",
        "title": "12. 深度剖析“尽责（尽职）”：安全合规与最终交付责任",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "conclusion",
        "title": "13. 课程总结与实践展望",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "深度剖析“解析（Discernment）”：批判性审计AI增量",
        "contentHtml": "<p class=\"text-body font-medium\">深度剖析“解析（Discernment）”：批判性审计AI增量</p>\n<p class=\"text-base leading-relaxed text-secondary\">本课深入探讨辨别力，重点关注AI流畅能力\n深思熟虑地评估人工智能的输出、流程和行为。我们解释一下\n洞察力是描述的另一面。虽然描述有帮助\n你清楚地表达了你的意图，洞察力可以帮助你评估\n您收到的东西是否满足您的需求。视频介绍了三种类型\n辨别力��</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">产品辨别：评估人工智能输出的质量</li>\n<li class=\"text-base leading-relaxed text-secondary\">流程辨别：评估人工智能如何处理任务</li>\n<li class=\"text-base leading-relaxed text-secondary\">表现辨别：评估人工智能在交互过程中的表现</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">这些技能共同有助于确保您的人工智能协作始终以深思熟虑的人类判断为指导。</p>"
      },
      {
        "id": "sec-1",
        "title": "核心要点",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">洞察力是指你深思熟虑地评估人工智能产生什么、如何产生以及它如何表现的能力</li>\n<li class=\"text-base leading-relaxed text-secondary\">产品辨别侧重于评估实际输出的质量（准确性、适当性、连贯性、相关性）</li>\n<li class=\"text-base leading-relaxed text-secondary\">过程辨别涉及评估人工智能如何得出其输出，寻找逻辑错误、注意力差距或不适当的推理</li>\n<li class=\"text-base leading-relaxed text-secondary\">性能辨别评估人工智能在协作过程本身中的行为方式，考虑其沟通方式是否有效满足您的需求</li>\n<li class=\"text-base leading-relaxed text-secondary\">辨别力与描述在持续的反馈循环中携手并进</li>\n<li class=\"text-base leading-relaxed text-secondary\">即使是最先进的人工智能系统也受益于人类的判断和监督</li>\n</ul>"
      },
      {
        "id": "sec-2",
        "title": "实操练习与反思",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">通过在您拥有专业知识的领域评估人工智能生成的内容，认识到您的知识如何增强您批判性评估人工智能输出的能力，从而练习产品、流程和性能辨别力。</p>\n<p class=\"text-base leading-relaxed text-secondary\">第 1 步：回到您的专业领域</strong></p>\n<p class=\"text-base leading-relaxed text-secondary\">回想一下您在之前的练习中与 Claude 讨论的主题（第 2 课，练习 2：“探索您喜欢的事物”）。这是一个你拥有丰富知识和热情的话题。</p>\n<p class=\"text-base leading-relaxed text-secondary\">第 2 步：询问多重解释</strong></p>\n<p class=\"text-base leading-relaxed text-secondary\">与 Claude 开始新的对话，并要求它针对您的专家主题的特定方面生成三种不同的解释或分析。例如：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">如果您的主题是摄影，您可能会要求对景深进行三种不同的解释</li>\n<li class=\"text-base leading-relaxed text-secondary\">如果您的主题是烹饪，您可能会要求对发酵技术进行三种不同的分析</li>\n<li class=\"text-base leading-relaxed text-secondary\">如果您的主题是历史，您可能会要求针对特定历史事件提供三种不同的观点</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">第三步：运用您的专业洞察力</strong></p>\n<p class=\"text-base leading-relaxed text-secondary\">利用您的专业知识，仔细评估Claude提供的每个解释：</p>\n<p class=\"text-base leading-relaxed text-secondary\">产品辨别：</strong></p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">哪种解释包含最准确的信息？</li>\n<li class=\"text-base leading-relaxed text-secondary\">是否存在任何事实错误或误解？</li>\n<li class=\"text-base leading-relaxed text-secondary\">详细程度适合学习该主题的人吗？</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">流程判别：</strong></p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">Claude的每一个解释都遵循逻辑推理吗？</li>\n<li class=\"text-base leading-relaxed text-secondary\">其分析或思考过程是否存在漏洞？</li>\n<li class=\"text-base leading-relaxed text-secondary\">Claude是否在概念之间建立了适当的联系？</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">性能辨别：</strong></p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">Claude是否关注您的具体问题并对反馈和指导做出回应？</li>\n<li class=\"text-base leading-relaxed text-secondary\">所使用的术语是否适合该主题？</li>\n<li class=\"text-base leading-relaxed text-secondary\">语气和风格如何影响解释的清晰度？</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">第 4 步：提供反馈和改进</strong></p>\n<p class=\"text-base leading-relaxed text-secondary\">根据您的评价：</p>\n<p class=\"text-base leading-relaxed text-secondary\">第五步：反思</strong></p>\n<p class=\"text-base leading-relaxed text-secondary\">与Claude讨论（在同一聊天中）：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">您拥有哪些具体知识可以帮助您识别优势或劣势？</li>\n<li class=\"text-base leading-relaxed text-secondary\">没有你的专业知识的人怎么可能难以辨别这些解释的质量？</li>\n<li class=\"text-base leading-relaxed text-secondary\">关于领域知识和有效洞察力之间的关系，这段经历教会了您什么？</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">为了进行更有趣的辨别力训练，您可能想尝试最后一课中的一些“游戏之夜”建议（“附加活动”）。</strong></p>\n<p class=\"text-base leading-relaxed text-secondary\">在进入下一小节前，花两分钟思考以下问题：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">您认为哪种类型的洞察力（产品、流程或绩效）应用起来最具挑战性，为什么？</li>\n<li class=\"text-base leading-relaxed text-secondary\">辨别力如何补充描述？他们如何一起工作？</li>\n<li class=\"text-base leading-relaxed text-secondary\">哪些信号或模式可能表明人工智能输出需要更仔细的审查？</li>\n</ul>"
      },
      {
        "id": "sec-3",
        "title": "接下来是什么",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在下一课中，您将有机会将描述和辨别技能应用到您的总体课程项目中。您将把所学到的有关与人工智能有效沟通并批判性评估其输出的知识付诸实践，以产生充分利用人类和人工智能能力的结果。</p>"
      }
    ],
    "prevLesson": {
      "slug": "effective-prompting-techniques",
      "title": "高效 Prompt 设计与结构化技巧"
    },
    "nextLesson": {
      "slug": "the-description-discernment-loop",
      "title": "“描述-鉴别”双向迭代反馈闭环"
    }
  },
  "the-description-discernment-loop": {
    "lessonId": "the-description-discernment-loop",
    "lessonTitle": "“描述-鉴别”双向迭代反馈闭环",
    "lessonIndex": 10,
    "totalLessons": 13,
    "duration": "8 分钟",
    "outcomes": [
      "将描述和辨别技能应用于实际项目",
      "参与富有成效的描述-辨别反馈循环",
      "通过人类与人工智能的协作创造出超出任何一方单独所能取得的成果",
      "调出您在第 5 课中创建的项目计划"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "introduction-to-ai-fluency",
        "title": "1. AI 素养导论：人机协作新范式",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "why-do-we-need-ai-fluency",
        "title": "2. 为什么我们在 AI 时代迫切需要 AI 素养？",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "the-4d-framework",
        "title": "3. Anthropic 4D核心人机协作框架",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "generative-ai-fundamentals",
        "title": "4. 生成式 AI 的底层计算原理",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "capabilities-limitations",
        "title": "5. 模型能力边界与幻觉防范",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "a-closer-look-at-delegation",
        "title": "6.深度剖析“委派（Delegation）”：划分人机职责",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "project-planning-and-delegation",
        "title": "7. 项目规划与任务有效委派",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "a-closer-look-at-description",
        "title": "8. 深度剖析“描述（Description）”：精准上下文传达",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "effective-prompting-techniques",
        "title": "9. 高效提示设计与成型技巧",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "a-closer-look-at-discernment",
        "title": "10. 深度剖析“解析（Discernment）”：批判性审计AI增量",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "the-description-discernment-loop",
        "title": "11. “描述-鉴别”双向迭代反馈闭环",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "a-closer-look-at-diligence",
        "title": "12. 深度剖析“尽责（尽职）”：安全合规与最终交付责任",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "conclusion",
        "title": "13. 课程总结与实践展望",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "实操练习与反思",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">现在是时候通过使用您一直在开发的描述和辨别技能来完成您在第 5 课中计划的项目，将您所学到的一切付诸实践。</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">调出您在第 5 课中创建的项目计划</li>\n<li class=\"text-base leading-relaxed text-secondary\">快速审查您的授权决策，了解哪些任务将受益于人类专业知识、人工智能功能或协作</li>\n<li class=\"text-base leading-relaxed text-secondary\">根据您从那时起学到的知识，随意完善您的计划</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">Claude开始新的对话并解释你们将一起从事的项目。在开始执行之前，计划一下您将如何执行描述：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">产品描述： 对于每项任务，您需要 Claude 提供哪些具体输出？您需要什么格式、风格、长度和详细程度？</li>\n<li class=\"text-base leading-relaxed text-secondary\">流程说明：Claude应该如何处理每项任务？您希望它遵循哪些具体方法、框架或步骤？</li>\n<li class=\"text-base leading-relaxed text-secondary\">性能描述：在这个项目中，你希望 Claude 采取什么样的协作行为？它应该简洁还是详细，具有挑战性还是支持性，侧重于想法还是分析？</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">与 Claude 讨论这些问题，为你们的合作建立明确的期望。</p>\n<p class=\"text-base leading-relaxed text-secondary\">现在，与Claude一起完成计划的项目任务。对于每个任务：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">具体说明您想要什么（产品）</li>\n<li class=\"text-base leading-relaxed text-secondary\">指导Claude应该如何处理或思考任务（流程）</li>\n<li class=\"text-base leading-relaxed text-secondary\">指定您希望Claude在此过程中如何与您互动（表现）</li>\n</ul>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">评估输出本身（产品辨别）</li>\n<li class=\"text-base leading-relaxed text-secondary\">评估Claude如何完成任务（过程辨别）</li>\n<li class=\"text-base leading-relaxed text-secondary\">考虑Claude的行为是否对你的需求最有帮助（表现辨别）</li>\n</ul>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">提供有关哪些有效、哪些无效的反馈</li>\n<li class=\"text-base leading-relaxed text-secondary\">根据需要澄清或调整您的描述</li>\n<li class=\"text-base leading-relaxed text-secondary\">请求迭代，直到您对结果满意为止</li>\n</ul>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">添加您独特的视角、创造力或领域知识</li>\n<li class=\"text-base leading-relaxed text-secondary\">做出保留、修改或丢弃内容的最终决定</li>\n<li class=\"text-base leading-relaxed text-secondary\">对最终输出负责</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">对项目中的每项任务继续这个描述-辨别循环，直到完成。</p>\n<p class=\"text-base leading-relaxed text-secondary\">在进入下一小节前，花两分钟思考以下问题：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">您在导致最佳结果的描述类型中注意到哪些模式？</li>\n<li class=\"text-base leading-relaxed text-secondary\">哪个需要你付出更多的努力：描述还是辨别？您认为为什么会这样？</li>\n<li class=\"text-base leading-relaxed text-secondary\">与第 5 课中的初始计划相比，您的实际项目执行情况如何？一路走来，你做了哪些调整？</li>\n</ul>"
      },
      {
        "id": "sec-1",
        "title": "下一步预告",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在下一课中，我们将探讨 AI 流畅框架中的最终能力：勤奋。授权、描述和辨别主要关注有效性和效率，而勤勉则涉及人工智能工作的道德和安全方面。您将了解如何确保您的 AI 协作负责任、透明且负责。</p>"
      }
    ],
    "prevLesson": {
      "slug": "a-closer-look-at-discernment",
      "title": "深度剖析“鉴别 (Discernment)”：批判性审计 AI 产出"
    },
    "nextLesson": {
      "slug": "a-closer-look-at-diligence",
      "title": "深度剖析“尽责 (Diligence)”：安全合规与最终交付责任"
    }
  },
  "a-closer-look-at-diligence": {
    "lessonId": "a-closer-look-at-diligence",
    "lessonTitle": "深度剖析“尽责（尽职）”：安全合规与最终交付责任",
    "lessonIndex": 11,
    "totalLessons": 13,
    "duration": "8 分钟",
    "outcomes": [
      "了解人工智能协作的道德影响",
      "了解人工智能工作透明度的重要性",
      "认识到您在人工智能交互和输出中的责任",
      "创造勤奋：深思熟虑您选择哪些人工智能系统以及如何使用它们"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "introduction-to-ai-fluency",
        "title": "1. AI 素养导论：人机协作新范式",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "why-do-we-need-ai-fluency",
        "title": "2. 为什么我们在 AI 时代迫切需要 AI 素养？",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "the-4d-framework",
        "title": "3. Anthropic 4D核心人机协作框架",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "generative-ai-fundamentals",
        "title": "4. 生成式 AI 的底层计算原理",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "capabilities-limitations",
        "title": "5. 模型能力边界与幻觉防范",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "a-closer-look-at-delegation",
        "title": "6.深度剖析“委派（Delegation）”：划分人机职责",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "project-planning-and-delegation",
        "title": "7. 项目规划与任务有效委派",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "a-closer-look-at-description",
        "title": "8. 深度剖析“描述（Description）”：精准上下文传达",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "effective-prompting-techniques",
        "title": "9. 高效提示设计与成型技巧",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "a-closer-look-at-discernment",
        "title": "10. 深度剖析“解析（Discernment）”：批判性审计 AI 计算器",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "the-description-discernment-loop",
        "title": "11. “描述-鉴别”双向迭代反馈闭环",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "a-closer-look-at-diligence",
        "title": "12. 深度剖析“尽责（尽职）”：安全合规与最终交付责任",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "conclusion",
        "title": "13. 课程总结与实践展望",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "视频：深度剖析“尽责（勤勉）”：安全合规与最终交付责任",
        "contentHtml": "<p class=\"text-body font-medium\">深度剖析“责任（尽职）”：安全合规与最终交付责任 · 7 分钟</span></p>\n<p class=\"text-base leading-relaxed text-secondary\">本课深入探讨勤奋，AI流畅能力，重点关注\n决策和道德的人工智能合作。我们解释说，虽然其他\n主要能力涉及效益和效率、勤奋\n解决同样重要的道德和安全问题。我们介绍\n三个组成部分：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">创造勤奋：深思熟虑您选择哪些人工智能系统以及如何使用它们</li>\n<li class=\"text-base leading-relaxed text-secondary\">透明度勤勉：对人工智能在工作中的作用持开放态度</li>\n<li class=\"text-base leading-relaxed text-secondary\">部署勤奋：掌握与他人分享的人工智能辅助输出的所有权</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">我们强调，不同的环境可能有不同的期望，但我们每个人都有责任理解并满足这些期望。</p>"
      },
      {
        "id": "sec-1",
        "title": "核心要点",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">勤奋就是对我们的人工智能合作承担责任</li>\n<li class=\"text-base leading-relaxed text-secondary\">创造勤奋涉及深思熟虑我们使用哪些人工智能系统以及我们如何与它们互动</li>\n<li class=\"text-base leading-relaxed text-secondary\">透明度勤勉意味着对人工智能在我们工作中的作用与每个需要了解的人诚实</li>\n<li class=\"text-base leading-relaxed text-secondary\">部署尽职要求负责验证和担保我们使用或共享的输出</li>\n<li class=\"text-base leading-relaxed text-secondary\">不同的背景（个人、学术、专业）可能对披露和验证有不同的期望</li>\n<li class=\"text-base leading-relaxed text-secondary\">深思熟虑的勤奋有助于确保我们的人工智能合作不仅有效和高效，而且符合道德和安全</li>\n</ul>"
      },
      {
        "id": "sec-2",
        "title": "实操练习与反思",
        "contentHtml": "<p class=\"text-footnote italic text-muted\">预计时间：14 分钟</p>\n<p class=\"text-base leading-relaxed text-secondary\">在本练习中，您将为您正在进行的项目制定一份尽责声明。这是本课程本身的尽职声明（在新选项卡中打开）。</p>\n<p class=\"text-base leading-relaxed text-secondary\">预计时间：3 分钟</em></p>\n<p class=\"text-base leading-relaxed text-secondary\">尽职声明是对人工智能在您工作中的作用的透明承认，以及您对最终输出负责的承诺。这是一个例子：</p>\n<p class=\"text-base leading-relaxed text-secondary\">“在创建此[文档/项目/内容]时，我与[人工智能助手姓名]合作协助完成[特定任务：起草、研究、编辑等]。我确认所有人工智能生成和共同创建的内容都经过了彻底的审查和评估。最终输出准确地反映了我的理解、专业知识和预期含义。虽然人工智能协助在此过程中发挥了重要作用，但我对内容、其准确性和演示负有全部责任。本次披露是本着透明的精神进行的，并承认人工智能在创作中的作用过程。”</p>\n<p class=\"text-base leading-relaxed text-secondary\">预计时间：5 分钟</em></p>\n<p class=\"text-base leading-relaxed text-secondary\">想想您在课程项目中的工作并考虑：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">创作勤奋：\n\n您选择使用哪些人工智能系统？为什么？</li>\n<li class=\"text-base leading-relaxed text-secondary\">您与人工智能分享了哪些数据或信息？</li>\n<li class=\"text-base leading-relaxed text-secondary\">您的选择中有任何隐私、安全或道德考虑吗？</li>\n</ul>\n</li>\n<li class=\"text-base leading-relaxed text-secondary\">透明度勤勉：\n\n您的项目成果的受众是谁？</li>\n<li class=\"text-base leading-relaxed text-secondary\">他们对人工智能的披露可能有什么期望？</li>\n<li class=\"text-base leading-relaxed text-secondary\">人工智能对您工作的不同方面有何具体贡献？</li>\n</ul>\n</li>\n<li class=\"text-base leading-relaxed text-secondary\">部署勤奋：\n\n您采取了哪些步骤来验证人工智能贡献的准确性和适当性？</li>\n<li class=\"text-base leading-relaxed text-secondary\">您如何确保最终输出符合您的标准和要求？</li>\n<li class=\"text-base leading-relaxed text-secondary\">您对最终产品承担什么责任？</li>\n</ul>\n</li>\n</ul>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">您选择使用哪些人工智能系统？为什么？</li>\n<li class=\"text-base leading-relaxed text-secondary\">您与人工智能分享了哪些数据或信息？</li>\n<li class=\"text-base leading-relaxed text-secondary\">您的选择中有任何隐私、安全或道德考虑吗？</li>\n</ul>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">您的项目成果的受众是谁？</li>\n<li class=\"text-base leading-relaxed text-secondary\">他们对人工智能的披露可能有什么期望？</li>\n<li class=\"text-base leading-relaxed text-secondary\">人工智能对您工作的不同方面有何具体贡献？</li>\n</ul>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">您采取了哪些步骤来验证人工智能贡献的准确性和适当性？</li>\n<li class=\"text-base leading-relaxed text-secondary\">您如何确保最终输出符合您的标准和要求？</li>\n<li class=\"text-base leading-relaxed text-secondary\">您对最终产品承担什么责任？</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">预计时间：6 分钟</em></p>\n<p class=\"text-base leading-relaxed text-secondary\">与 Claude 展开对话并：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">您使用了哪些人工智能系统</li>\n<li class=\"text-base leading-relaxed text-secondary\">人工智能如何为您的项目做出贡献</li>\n<li class=\"text-base leading-relaxed text-secondary\">您采用的审核流程</li>\n<li class=\"text-base leading-relaxed text-secondary\">您对最终输出的责任声明</li>\n<li class=\"text-base leading-relaxed text-secondary\">任何特定背景的考虑因素（学术、专业等）</li>\n</ul>\n<p class=\"text-base leading-relaxed text-secondary\">完成项目后，将尽职声明添加到适当的位置（例如页脚、附录或元数据）。</p>"
      },
      {
        "id": "sec-3",
        "title": "反射",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在进入下一小节前，花两分钟思考以下问题：</p>\n<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">您认为勤奋的哪个方面（创造、透明度或部署）最具挑战性，为什么？</li>\n<li class=\"text-base leading-relaxed text-secondary\">根据不同的背景（个人、学术、专业），您的勤奋方法可能会有何不同？</li>\n<li class=\"text-base leading-relaxed text-secondary\">承认人工智能在你的工作中的作用会如何影响其他人对其的看法？</li>\n<li class=\"text-base leading-relaxed text-secondary\">在您的项目过程中出现了哪些您没有预料到的道德考虑？</li>\n<li class=\"text-base leading-relaxed text-secondary\">您可能会为未来负责任的人工智能协作制定哪些个人准则？</li>\n</ul>"
      },
      {
        "id": "sec-4",
        "title": "接下来是什么",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">在本课程的最后一课中，我们将反思我们所学到的有关人工智能流畅性的知识以及这些能力如何协同工作。我们将重新审视整个框架，并讨论如何随着人工智能功能的发展继续发展这些技能。结论将帮助您综合所获得的知识和实践，并将其应用到未来的人工智能合作中。</p>"
      }
    ],
    "prevLesson": {
      "slug": "the-description-discernment-loop",
      "title": "“描述-鉴别”双向迭代反馈闭环"
    },
    "nextLesson": {
      "slug": "conclusion",
      "title": "课程总结与实践展望"
    }
  },
  "conclusion": {
    "lessonId": "conclusion",
    "lessonTitle": "课程总结与实践展望",
    "lessonIndex": 12,
    "totalLessons": 13,
    "duration": "8 分钟",
    "outcomes": [
      "将 AI 流畅度与您的持续发展联系起来",
      "“让我们探讨一下，随着人工智能能力的进步，人工智能流畅性框架将如何发展。哪些新能力在未来可能会变得重要？”\n如果您这样做，请联系我们并让我们知道您的发现！\n\n",
      "“根据我们的谈话，帮助我确定哪些 4D 能力是我比较了解的，哪些是我可能需要进一步发展的。”\n\n"
    ],
    "roadmap": [
      {
        "id": "1",
        "slug": "introduction-to-ai-fluency",
        "title": "1. AI 素养导论：人机协作新范式",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "why-do-we-need-ai-fluency",
        "title": "2. 为什么我们在 AI 时代迫切需要 AI 素养？",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "the-4d-framework",
        "title": "3. Anthropic 4D核心人机协作框架",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "generative-ai-fundamentals",
        "title": "4. 生成式 AI 的底层计算原理",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "capabilities-limitations",
        "title": "5. 模型能力边界与幻觉防范",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "a-closer-look-at-delegation",
        "title": "6.深度剖析“委派（Delegation）”：划分人机职责",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "project-planning-and-delegation",
        "title": "7. 项目规划与任务有效委派",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "a-closer-look-at-description",
        "title": "8. 深度剖析“描述（Description）”：精准上下文传达",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "effective-prompting-techniques",
        "title": "9. 高效提示设计与成型技巧",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "a-closer-look-at-discernment",
        "title": "10. 深度剖析“解析（Discernment）”：批判性审计 AI 计算器",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "the-description-discernment-loop",
        "title": "11. “描述-鉴别”双向迭代反馈闭环",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "a-closer-look-at-diligence",
        "title": "12. 深度剖析“尽责（尽职）”：安全合规与最终交付责任",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "13",
        "slug": "conclusion",
        "title": "13. 课程总结与实践展望",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
    "sections": [
      {
        "id": "sec-0",
        "title": "视频：课程总结与实践展望",
        "contentHtml": "<p class=\"text-body font-medium\">课程总结与实践展望 · 6 分钟</span></p>\n<p class=\"text-base leading-relaxed text-secondary\">这个总结视频重新使用了人工智能流畅框架，放在\n整个课程中讨论的关键概念。我们回顾一下四大核心\n能力（4D）：授权（决定用人工智能做什么工作，而不是用人工智能做什么）\n独立）、描述（与人工智能有效沟通）、认知力\n（评估人工智能的产出和行为）和勤奋（确保决策的）\n人工智能协作）。我们强调一些能力适用于所有\n与人工智���交互的明显主要方式（自动化、增强和\n能力），流畅性是通过练习而不是一晚上之间掌握而提高的。\n最后我们要提醒大家，人工智能系统很强大，但并不神奇\n解决方案；只有我们帮助他们渡过难关，他们才有用和安全\n我们深思熟虑的参与。</p>"
      },
      {
        "id": "sec-1",
        "title": "核心要点",
        "contentHtml": "<ul class=\"flex list-disc flex-col gap-xs pl-lg\">\n<li class=\"text-base leading-relaxed text-secondary\">AI 流畅度通过有意识地练习四项核心能力而发展</li>\n<li class=\"text-base leading-relaxed text-secondary\">代表团强调，我们的专业知识和判断力仍然是有效人工智能合作的基础</li>\n<li class=\"text-base leading-relaxed text-secondary\">描述涉及连接我们的意图和人工智能能力的清晰沟通</li>\n<li class=\"text-base leading-relaxed text-secondary\">洞察力需要对输出进行深思熟虑和批判性的评估，以便在系统限制内发挥作用</li>\n<li class=\"text-base leading-relaxed text-secondary\">勤奋确保我们人工智能工作的问责制、透明度和责任</li>\n<li class=\"text-base leading-relaxed text-secondary\">当人类和人工智能互相取长补短时，最强大的成果就会出现</li>\n<li class=\"text-base leading-relaxed text-secondary\">该框架旨在随着人工智能系统的不断发展而保持相关性</li>\n</ul>"
      },
      {
        "id": "sec-2",
        "title": "实操练习与反思",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">让 Claude 就本课程和 AI Fluency Framework 进行有意义的对话（从 https://ringling.libguides.com/ai/framework（在新选项卡中打开）上传框架的副本）</p>\n<p class=\"text-base leading-relaxed text-secondary\">建议的对话开头：</p>\n<ul role=\"list\" class=\"m-0 flex list-none flex-col rounded-xl bg-surface-1 p-0 shadow-card-ring\"><li class=\"group/example flex items-center gap-2 border-t px-3 py-1.5 first:border-t-0\">“我刚刚完成了一门关于人工智能流畅性的课程，内容涉及授权、描述、辨别力和勤奋。让我们讨论一下这些能力如何应用于[我的学位课程或我的工作或其他]。”</span></span><span class=\"flex shrink-0 items-center opacity-100 transition-opacity focus-within:opacity-100 md:opacity-0 md:group-hover/example:opacity-100\"><button type=\"button\" data-cds=\"Button\" class=\"cds-reset group/btn relative isolate inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap select-none cursor-[var(--cds-cursor-interactive)] aria-disabled:cursor-default data-[disabled]:cursor-default border-0 outline-none focus-visible:outline-hidden rounded h-control font-sans text-body [&amp;:disabled:not([aria-busy])]:opacity-50 disabled:pointer-events-none transition-shadow duration-fast focus-visible:shadow-focus text-primary font-normal aria-pressed:text-accent aspect-square w-control px-0\" aria-label=\"Copy prompt\" data-cds-tooltip-pending=\"\"><span aria-hidden=\"true\" class=\"absolute -z-[1] rounded-[inherit] inset-0 cds-btn-squish\"><span class=\"absolute inset-0 rounded-[inherit] transition-[background-color,box-shadow,color] duration-fast ease-out group-focus-visible/btn:shadow-[inset_0_0_0_1px_var(--cds-page-bg)] bg-transparent group-hover/btn:bg-fill-ghost-hover group-[[aria-haspopup][aria-expanded=true]]/btn:bg-fill-ghost-hover group-aria-pressed/btn:bg-accent group-hover/btn:group-aria-pressed/btn:bg-accent \"></span></span><span class=\"inline-flex min-w-0 items-center gap-1 \"></span></span></button><button type=\"button\" data-cds=\"Button\" class=\"cds-reset group/btn relative isolate inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap select-none cursor-[var(--cds-cursor-interactive)] aria-disabled:cursor-default data-[disabled]:cursor-default border-0 outline-none focus-visible:outline-hidden rounded h-control font-sans text-body [&amp;:disabled:not([aria-busy])]:opacity-50 disabled:pointer-events-none transition-shadow duration-fast focus-visible:shadow-focus text-primary font-normal aria-pressed:text-accent aspect-square w-control px-0\" aria-label=\"Open in Claude\" data-cds-tooltip-pending=\"\"><span aria-hidden=\"true\" class=\"absolute -z-[1] rounded-[inherit] inset-0 cds-btn-squish\"><span class=\"absolute inset-0 rounded-[inherit] transition-[background-color,box-shadow,color] duration-fast ease-out group-focus-visible/btn:shadow-[inset_0_0_0_1px_var(--cds-page-bg)] bg-transparent group-hover/btn:bg-fill-ghost-hover group-[[aria-haspopup][aria-expanded=true]]/btn:bg-fill-ghost-hover group-aria-pressed/btn:bg-accent group-hover/btn:group-aria-pressed/btn:bg-accent \"></span></span><span class=\"inline-flex min-w-0 items-center gap-1 \"></span></span></button></span></li><li class=\"group/example flex items-center gap-2 border-t px-3 py-1.5 first:border-t-0\">“让我们探讨一下，随着人工智能能力的进步，人工智能流畅性框架将如何发展。哪些新能力在未来可能会变得重要？”</span><span class=\"block text-muted\">如果您这样做，请联系我们并让我们知道您的发现！</span></span><span class=\"flex shrink-0 items-center opacity-100 transition-opacity focus-within:opacity-100 md:opacity-0 md:group-hover/example:opacity-100\"><button type=\"button\" data-cds=\"Button\" class=\"cds-reset group/btn relative isolate inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap select-none cursor-[var(--cds-cursor-interactive)] aria-disabled:cursor-default data-[disabled]:cursor-default border-0 outline-none focus-visible:outline-hidden rounded h-control font-sans text-body [&amp;:disabled:not([aria-busy])]:opacity-50 disabled:pointer-events-none transition-shadow duration-fast focus-visible:shadow-focus text-primary font-normal aria-pressed:text-accent aspect-square w-control px-0\" aria-label=\"Copy prompt\" data-cds-tooltip-pending=\"\"><span aria-hidden=\"true\" class=\"absolute -z-[1] rounded-[inherit] inset-0 cds-btn-squish\"><span class=\"absolute inset-0 rounded-[inherit] transition-[background-color,box-shadow,color] duration-fast ease-out group-focus-visible/btn:shadow-[inset_0_0_0_1px_var(--cds-page-bg)] bg-transparent group-hover/btn:bg-fill-ghost-hover group-[[aria-haspopup][aria-expanded=true]]/btn:bg-fill-ghost-hover group-aria-pressed/btn:bg-accent group-hover/btn:group-aria-pressed/btn:bg-accent \"></span></span><span class=\"inline-flex min-w-0 items-center gap-1 \"></span></span></button><button type=\"button\" data-cds=\"Button\" class=\"cds-reset group/btn relative isolate inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap select-none cursor-[var(--cds-cursor-interactive)] aria-disabled:cursor-default data-[disabled]:cursor-default border-0 outline-none focus-visible:outline-hidden rounded h-control font-sans text-body [&amp;:disabled:not([aria-busy])]:opacity-50 disabled:pointer-events-none transition-shadow duration-fast focus-visible:shadow-focus text-primary font-normal aria-pressed:text-accent aspect-square w-control px-0\" aria-label=\"Open in Claude\" data-cds-tooltip-pending=\"\"><span aria-hidden=\"true\" class=\"absolute -z-[1] rounded-[inherit] inset-0 cds-btn-squish\"><span class=\"absolute inset-0 rounded-[inherit] transition-[background-color,box-shadow,color] duration-fast ease-out group-focus-visible/btn:shadow-[inset_0_0_0_1px_var(--cds-page-bg)] bg-transparent group-hover/btn:bg-fill-ghost-hover group-[[aria-haspopup][aria-expanded=true]]/btn:bg-fill-ghost-hover group-aria-pressed/btn:bg-accent group-hover/btn:group-aria-pressed/btn:bg-accent \"></span></span><span class=\"inline-flex min-w-0 items-center gap-1 \"></span></span></button></span></li><li class=\"group/example flex items-center gap-2 border-t px-3 py-1.5 first:border-t-0\">“根据我们的谈话，帮助我确定哪些 4D 能力是我比较了解的，哪些是我可能需要进一步发展的。”</span></span><span class=\"flex shrink-0 items-center opacity-100 transition-opacity focus-within:opacity-100 md:opacity-0 md:group-hover/example:opacity-100\"><button type=\"button\" data-cds=\"Button\" class=\"cds-reset group/btn relative isolate inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap select-none cursor-[var(--cds-cursor-interactive)] aria-disabled:cursor-default data-[disabled]:cursor-default border-0 outline-none focus-visible:outline-hidden rounded h-control font-sans text-body [&amp;:disabled:not([aria-busy])]:opacity-50 disabled:pointer-events-none transition-shadow duration-fast focus-visible:shadow-focus text-primary font-normal aria-pressed:text-accent aspect-square w-control px-0\" aria-label=\"Copy prompt\" data-cds-tooltip-pending=\"\"><span aria-hidden=\"true\" class=\"absolute -z-[1] rounded-[inherit] inset-0 cds-btn-squish\"><span class=\"absolute inset-0 rounded-[inherit] transition-[background-color,box-shadow,color] duration-fast ease-out group-focus-visible/btn:shadow-[inset_0_0_0_1px_var(--cds-page-bg)] bg-transparent group-hover/btn:bg-fill-ghost-hover group-[[aria-haspopup][aria-expanded=true]]/btn:bg-fill-ghost-hover group-aria-pressed/btn:bg-accent group-hover/btn:group-aria-pressed/btn:bg-accent \"></span></span><span class=\"inline-flex min-w-0 items-center gap-1 \"></span></span></button><button type=\"button\" data-cds=\"Button\" class=\"cds-reset group/btn relative isolate inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap select-none cursor-[var(--cds-cursor-interactive)] aria-disabled:cursor-default data-[disabled]:cursor-default border-0 outline-none focus-visible:outline-hidden rounded h-control font-sans text-body [&amp;:disabled:not([aria-busy])]:opacity-50 disabled:pointer-events-none transition-shadow duration-fast focus-visible:shadow-focus text-primary font-normal aria-pressed:text-accent aspect-square w-control px-0\" aria-label=\"Open in Claude\" data-cds-tooltip-pending=\"\"><span aria-hidden=\"true\" class=\"absolute -z-[1] rounded-[inherit] inset-0 cds-btn-squish\"><span class=\"absolute inset-0 rounded-[inherit] transition-[background-color,box-shadow,color] duration-fast ease-out group-focus-visible/btn:shadow-[inset_0_0_0_1px_var(--cds-page-bg)] bg-transparent group-hover/btn:bg-fill-ghost-hover group-[[aria-haspopup][aria-expanded=true]]/btn:bg-fill-ghost-hover group-aria-pressed/btn:bg-accent group-hover/btn:group-aria-pressed/btn:bg-accent \"></span></span><span class=\"inline-flex min-w-0 items-center gap-1 \"></span></span></button></span></li><li class=\"group/example flex items-center gap-2 border-t px-3 py-1.5 first:border-t-0\">“这是[你在本课程中所做的一些练习]。让我们对其进行分析以提高我的能力。”</span></span><span class=\"flex shrink-0 items-center opacity-100 transition-opacity focus-within:opacity-100 md:opacity-0 md:group-hover/example:opacity-100\"><button type=\"button\" data-cds=\"Button\" class=\"cds-reset group/btn relative isolate inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap select-none cursor-[var(--cds-cursor-interactive)] aria-disabled:cursor-default data-[disabled]:cursor-default border-0 outline-none focus-visible:outline-hidden rounded h-control font-sans text-body [&amp;:disabled:not([aria-busy])]:opacity-50 disabled:pointer-events-none transition-shadow duration-fast focus-visible:shadow-focus text-primary font-normal aria-pressed:text-accent aspect-square w-control px-0\" aria-label=\"Copy prompt\" data-cds-tooltip-pending=\"\"><span aria-hidden=\"true\" class=\"absolute -z-[1] rounded-[inherit] inset-0 cds-btn-squish\"><span class=\"absolute inset-0 rounded-[inherit] transition-[background-color,box-shadow,color] duration-fast ease-out group-focus-visible/btn:shadow-[inset_0_0_0_1px_var(--cds-page-bg)] bg-transparent group-hover/btn:bg-fill-ghost-hover group-[[aria-haspopup][aria-expanded=true]]/btn:bg-fill-ghost-hover group-aria-pressed/btn:bg-accent group-hover/btn:group-aria-pressed/btn:bg-accent \"></span></span><span class=\"inline-flex min-w-0 items-center gap-1 \"></span></span></button><button type=\"button\" data-cds=\"Button\" class=\"cds-reset group/btn relative isolate inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap select-none cursor-[var(--cds-cursor-interactive)] aria-disabled:cursor-default data-[disabled]:cursor-default border-0 outline-none focus-visible:outline-hidden rounded h-control font-sans text-body [&amp;:disabled:not([aria-busy])]:opacity-50 disabled:pointer-events-none transition-shadow duration-fast focus-visible:shadow-focus text-primary font-normal aria-pressed:text-accent aspect-square w-control px-0\" aria-label=\"Open in Claude\" data-cds-tooltip-pending=\"\"><span aria-hidden=\"true\" class=\"absolute -z-[1] rounded-[inherit] inset-0 cds-btn-squish\"><span class=\"absolute inset-0 rounded-[inherit] transition-[background-color,box-shadow,color] duration-fast ease-out group-focus-visible/btn:shadow-[inset_0_0_0_1px_var(--cds-page-bg)] bg-transparent group-hover/btn:bg-fill-ghost-hover group-[[aria-haspopup][aria-expanded=true]]/btn:bg-fill-ghost-hover group-aria-pressed/btn:bg-accent group-hover/btn:group-aria-pressed/btn:bg-accent \"></span></span><span class=\"inline-flex min-w-0 items-center gap-1 \"></span></span></button></span></li></ul>\n<p class=\"text-base leading-relaxed text-secondary\">上面的练习是本课的反思部分。通过它们，您将有机会巩固您的学习并将其与您的持续发展联系起来。</p>"
      },
      {
        "id": "sec-3",
        "title": "接下来是什么",
        "contentHtml": "<p class=\"text-base leading-relaxed text-secondary\">恭喜您完成AI流畅性：框架和基础课程！这只是您AI流畅之旅的开始。随着技术的不断发展，您在授权、洞察力和勤勉方面描述培养人工智能的能力将提供一个持久的框架来指导您使用这些系统进行工作。</p>\n<p class=\"text-base leading-relaxed text-secondary\">请记住，流畅性是通过练习来提高的。每次与人工智能的互动都是一个提高你的技能和加深你的理解的机会。通过将人工智能视为一个有思想的合作伙伴而不仅仅是一种工具，并保持对有效性、效率、道德和安全的承诺，您将处于有利地位，以引领人类与人工智能协作的未来。</p>\n<p class=\"text-base leading-relaxed text-secondary\">我们鼓励您继续探索、试验和反思您的 AI 交互。第 12 课中有许多很好的附加练习可以帮助您继续旅程。</p>\n<p class=\"text-base leading-relaxed text-secondary\">我们鼓励您与他人（以及我们！）分享您所学到的知识，寻求不同的观点，并为正在进行的关于我们如何与人工智能合作的对话做出贡献，以放大人类潜力，同时尊重我们彼此的价值观和责任。感谢您对本课程的参与和参与！</p>"
      }
    ],
    "prevLesson": {
      "slug": "a-closer-look-at-diligence",
      "title": "深度剖析“尽责 (Diligence)”：安全合规与最终交付责任"
    }
  }
};
