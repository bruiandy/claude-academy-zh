import { LessonLayoutProps } from '../../components/LessonLayout';

export const MODEL_CONTEXT_PROTOCOL_ADVANCED_TOPICS_LESSONS: Record<string, Omit<LessonLayoutProps, 'courseId' | 'courseTitle'>> = {
  "sampling": {
    "lessonId": "sampling",
    "lessonTitle": "开始课程",
    "lessonIndex": 0,
    "totalLessons": 12,
    "duration": "9 分钟",
                "outcomes": [
        "解释 sampling 如何让服务器通过客户端访问语言模型"
,
        "描述 sampling 解决的问题与好处"
,
        "在服务端与客户端实现 sampling"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "sampling",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "sampling-walkthrough",
        "title": "2. 采样演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "log-and-progress-notifications",
        "title": "3. 日志和进度通知",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "notifications-walkthrough",
        "title": "4. 通知演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "roots",
        "title": "5. 根源",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "roots-walkthrough",
        "title": "6. 根源演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "json-message-types",
        "title": "7. JSON消息类型",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "the-stdio-transport",
        "title": "8. STDIO传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "the-streamablehttp-transport",
        "title": "9. StreamableHTTP 传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "streamablehttp-in-depth",
        "title": "10. StreamableHTTP 深入研究",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "state-and-the-streamablehttp-transport",
        "title": "11. 状态和 StreamableHTTP 传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "assessment-on-mcp-concepts",
        "title": "12. MCP概念评估",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
            "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>Sampling（采样）允许 MCP 服务器通过已连接的 MCP 客户端访问像 Claude 这样的大语言模型。服务器不直接调用 Claude，而是请客户端代为调用。这把文本生成的<strong>责任与成本从服务器转移到了客户端</strong>。</p>"
      },
      {
        "id": "sec-1",
        "title": "Sampling 解决的问题",
        "contentHtml": "<p>想象你有一个带研究工具的 MCP 服务器，它从 Wikipedia 抓取信息。收集完数据后，你需要把它总结成一份连贯的报告。你有两个选择：</p><ul><li><strong>选项 1：给 MCP 服务器直接访问 Claude 的权限。</strong>服务器需要自己的 API key、处理认证、管理成本，并实现所有 Claude 集成代码。可行，但显著增加了复杂度。</li><li><strong>选项 2：使用 sampling。</strong>服务器生成一个提示词，问客户端「你能替我调用 Claude 吗？」客户端（已经与 Claude 建立了连接）代为调用并返回结果。</li></ul>"
      },
      {
        "id": "sec-2",
        "title": "Sampling 如何工作",
        "contentHtml": "<p>流程很直接：</p><ol><li>服务器完成自己的工作（例如抓取 Wikipedia 文章）</li><li>服务器创建一个请求文本生成的提示词</li><li>服务器向客户端发送一个 sampling 请求</li><li>客户端用提供的提示词调用 Claude</li><li>客户端把生成的文本返回给服务器</li><li>服务器在其响应中使用生成的文本</li></ol>"
      },
      {
        "id": "sec-3",
        "title": "Sampling 的好处",
        "contentHtml": "<ul><li><strong>降低服务器复杂度</strong>——服务器无需直接集成语言模型</li><li><strong>转移成本负担</strong>——由客户端支付 token 费用，而非服务器</li><li><strong>无需 API key</strong>——服务器不需要 Claude 的凭证</li><li><strong>适合公共服务器</strong>——你绝不想让公共服务器为每个用户的 AI 调用买单</li></ul>"
      },
      {
        "id": "sec-4",
        "title": "实现：服务端",
        "contentHtml": "<p>在你的工具函数中，使用 <code>create_message</code> 请求文本生成：</p><pre><code>@mcp.tool()\nasync def summarize(text_to_summarize: str, ctx: Context):\n    prompt = f\"\"\"\n    Please summarize the following text:\n    {text_to_summarize}\n    \"\"\"\n    result = await ctx.session.create_message(\n        messages=[\n            SamplingMessage(\n                role=\"user\",\n                content=TextContent(\n                    type=\"text\",\n                    text=prompt\n                )\n            )\n        ],\n        max_tokens=4000,\n        system_prompt=\"You are a helpful research assistant\",\n    )\n    if result.content.type == \"text\":\n        return result.content.text\n    else:\n        raise ValueError(\"Sampling failed\")</code></pre>"
      },
      {
        "id": "sec-5",
        "title": "实现：客户端",
        "contentHtml": "<p>创建一个处理服务器请求的 sampling 回调：</p><pre><code>async def sampling_callback(\n    context: RequestContext, params: CreateMessageRequestParams\n):\n    # Call Claude using the Anthropic SDK\n    text = await chat(params.messages)\n    return CreateMessageResult(\n        role=\"assistant\",\n        model=model,\n        content=TextContent(type=\"text\", text=text),\n    )</code></pre><p>然后在初始化客户端会话时传入这个回调：</p><pre><code>async with ClientSession(\n    read,\n    write,\n    sampling_callback=sampling_callback\n) as session:\n    await session.initialize()</code></pre>"
      },
      {
        "id": "sec-6",
        "title": "何时使用 Sampling",
        "contentHtml": "<p>Sampling 在构建<strong>可公开访问的 MCP 服务器</strong>时最有价值。你不想让随机用户以你的成本生成无限文本。通过 sampling，每个客户端为自己的 AI 使用付费，同时仍能受益于你服务器的功能。</p><p>本质上，这个技术把 AI 集成复杂度从你的服务器转移到了客户端——而客户端往往已经具备所需的连接与凭证。</p>"
      }
    ],
    "nextLesson": {
      "slug": "sampling-walkthrough",
      "title": "Sampling walkthrough"
    }
  },
  "sampling-walkthrough": {
    "lessonId": "sampling-walkthrough",
    "lessonTitle": "采样演练",
    "lessonIndex": 1,
    "totalLessons": 12,
    "duration": "15 分钟",
                "outcomes": [
        "搭建带 sampling 能力的服务端工具"
,
        "实现客户端 sampling 回调并连接验证"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "sampling",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "sampling-walkthrough",
        "title": "2. 采样演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "log-and-progress-notifications",
        "title": "3. 日志和进度通知",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "notifications-walkthrough",
        "title": "4. 通知演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "roots",
        "title": "5. 根源",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "roots-walkthrough",
        "title": "6. 根源演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "json-message-types",
        "title": "7. JSON消息类型",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "the-stdio-transport",
        "title": "8. STDIO传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "the-streamablehttp-transport",
        "title": "9. StreamableHTTP 传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "streamablehttp-in-depth",
        "title": "10. StreamableHTTP 深入研究",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "state-and-the-streamablehttp-transport",
        "title": "11. 状态和 StreamableHTTP 传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "assessment-on-mcp-concepts",
        "title": "12. MCP概念评估",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
            "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>本课是 sampling 的动手演练课。我们将用一个小型但完整的示例，走通「服务器请求 → 客户端代为调用 Claude → 返回结果」的完整流程。建议一边看代码一边自己运行。</p>"
      },
      {
        "id": "sec-1",
        "title": "演练：搭建服务端工具",
        "contentHtml": "<p>首先，在服务器上定义一个需要文本生成能力的工具。关键点：工具函数接收一个 <code>Context</code> 参数，通过 <code>ctx.session.create_message</code> 发起 sampling 请求，而不是自己调用任何 LLM API。</p><p>参考「Sampling」一课的服务端代码：定义 <code>summarize</code> 工具，构造包含用户消息的 <code>SamplingMessage</code>，设置 <code>max_tokens</code> 与 <code>system_prompt</code>，然后返回生成结果中的文本。</p>"
      },
      {
        "id": "sec-2",
        "title": "演练：实现客户端回调",
        "contentHtml": "<p>在客户端，实现 <code>sampling_callback</code>：它接收服务器发来的 <code>CreateMessageRequestParams</code>，调用你配置的 LLM（例如通过 Anthropic SDK 的 <code>chat()</code>），返回 <code>CreateMessageResult</code>。</p><p>注意：回调中调用的是什么模型、用什么凭证，完全由客户端决定——这正是 sampling 把成本与集成复杂度转移到客户端的方式。</p>"
      },
      {
        "id": "sec-3",
        "title": "演练：连接并验证",
        "contentHtml": "<p>用 <code>stdio_client</code> 启动服务器，把 <code>sampling_callback</code> 传入 <code>ClientSession</code>，初始化后调用工具。验证要点：</p><ul><li>服务器的工具函数是否收到了生成结果？</li><li>客户端是否真的用你自己的凭证调用了 Claude？</li><li>如果客户端不提供回调，服务器会得到什么错误？</li></ul><p>试着把回调改为返回固定文本（不调用真实模型），你会看到服务器拿到的是那个固定文本——这验证了「谁调用模型、谁付费」完全由客户端掌控。</p>"
      }
    ],
    "prevLesson": {
      "slug": "sampling",
      "title": "Start course"
    },
    "nextLesson": {
      "slug": "log-and-progress-notifications",
      "title": "Log and progress notifications"
    }
  },
  "log-and-progress-notifications": {
    "lessonId": "log-and-progress-notifications",
    "lessonTitle": "日志和进度通知",
    "lessonIndex": 2,
    "totalLessons": 12,
    "duration": "7 分钟",
                "outcomes": [
        "用 context.info 与 context.report_progress 实现日志与进度通知"
,
        "在客户端设置回调处理通知并选择呈现方式"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "sampling",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "sampling-walkthrough",
        "title": "2. 采样演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "log-and-progress-notifications",
        "title": "3. 日志和进度通知",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "notifications-walkthrough",
        "title": "4. 通知演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "roots",
        "title": "5. 根源",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "roots-walkthrough",
        "title": "6. 根源演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "json-message-types",
        "title": "7. JSON消息类型",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "the-stdio-transport",
        "title": "8. STDIO传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "the-streamablehttp-transport",
        "title": "9. StreamableHTTP 传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "streamablehttp-in-depth",
        "title": "10. StreamableHTTP 深入研究",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "state-and-the-streamablehttp-transport",
        "title": "11. 状态和 StreamableHTTP 传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "assessment-on-mcp-concepts",
        "title": "12. MCP概念评估",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
            "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>日志与进度通知（Logging and progress notifications）实现起来很简单，但在与 MCP 服务器协作时，它们对用户体验的改善是巨大的——让用户知道长时间运行的操作正在发生什么，而不是怀疑是不是坏了。</p>"
      },
      {
        "id": "sec-1",
        "title": "解决的问题",
        "contentHtml": "<p>当 Claude 调用一个需要较长时间完成的工具（如研究一个话题或处理数据）时，用户通常什么都看不到，直到操作结束。这很令人沮丧——他们不知道工具是在正常工作还是卡住了。</p><p>启用日志与进度通知后，用户能获得实时反馈：进度条、状态消息、详细日志，一目了然。</p>"
      },
      {
        "id": "sec-2",
        "title": "如何工作：服务端",
        "contentHtml": "<p>在 Python MCP SDK 中，日志与进度通知通过自动提供给工具函数的 <code>Context</code> 参数工作。核心方法有两个：</p><ul><li><code>context.info()</code>——向客户端发送日志消息</li><li><code>context.report_progress()</code>——用当前值与总值更新进度</li></ul><pre><code>@mcp.tool(\n    name=\"research\",\n    description=\"Research a given topic\"\n)\nasync def research(\n    topic: str = Field(description=\"Topic to research\"),\n    *,\n    context: Context\n):\n    await context.info(\"About to do research...\")\n    await context.report_progress(20, 100)\n    sources = await do_research(topic)\n    await context.info(\"Writing report...\")\n    await context.report_progress(70, 100)\n    results = await generate_report(sources)\n    return results</code></pre>"
      },
      {
        "id": "sec-3",
        "title": "客户端实现",
        "contentHtml": "<p>在客户端，你需要设置回调函数来处理这些通知。服务器发出这些消息，但<strong>如何呈现给用户由你的客户端应用决定</strong>。</p><pre><code>async def logging_callback(params: LoggingMessageNotificationParams):\n    print(params.data)\n\nasync def print_progress_callback(\n    progress: float, total: float | None, message: str | None\n):\n    if total is not None:\n        percentage = (progress / total) * 100\n        print(f\"Progress: {progress}/{total} ({percentage:.1f}%)\")\n    else:\n        print(f\"Progress: {progress}\")\n\nasync def run():\n    async with stdio_client(server_params) as (read, write):\n        async with ClientSession(\n            read,\n            write,\n            logging_callback=logging_callback\n        ) as session:\n            await session.initialize()\n            await session.call_tool(\n                name=\"add\",\n                arguments={\"a\": 1, \"b\": 3},\n                progress_callback=print_progress_callback,\n            )</code></pre><p>日志回调在创建客户端会话时提供，进度回调在每次工具调用时提供——这让你能灵活地以适当方式处理不同类型的通知。</p>"
      },
      {
        "id": "sec-4",
        "title": "呈现方式",
        "contentHtml": "<p>如何呈现这些通知取决于你的应用类型：</p><ul><li><strong>CLI 应用</strong>——直接在终端打印消息与进度</li><li><strong>Web 应用</strong>——用 WebSockets、Server-Sent Events 或轮询把更新推送到浏览器</li><li><strong>桌面应用</strong>——在 UI 中更新进度条与状态显示</li></ul><p>记住：实现这些通知<strong>完全是可选的</strong>。你可以完全忽略、只显示某些类型，或以任何合理的方式呈现。它们纯粹是用户体验增强，帮助用户理解长时间运行的操作。</p>"
      }
    ],
    "prevLesson": {
      "slug": "sampling-walkthrough",
      "title": "Sampling walkthrough"
    },
    "nextLesson": {
      "slug": "notifications-walkthrough",
      "title": "Notifications walkthrough"
    }
  },
  "notifications-walkthrough": {
    "lessonId": "notifications-walkthrough",
    "lessonTitle": "通知演练",
    "lessonIndex": 3,
    "totalLessons": 12,
    "duration": "15 分钟",
                "outcomes": [
        "为 MCP 工具添加日志与进度通知"
,
        "在客户端实现回调并验证通知链路"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "sampling",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "sampling-walkthrough",
        "title": "2. 采样演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "log-and-progress-notifications",
        "title": "3. 日志和进度通知",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "notifications-walkthrough",
        "title": "4. 通知演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "roots",
        "title": "5. 根源",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "roots-walkthrough",
        "title": "6. 根源演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "json-message-types",
        "title": "7. JSON消息类型",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "the-stdio-transport",
        "title": "8. STDIO传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "the-streamablehttp-transport",
        "title": "9. StreamableHTTP 传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "streamablehttp-in-depth",
        "title": "10. StreamableHTTP 深入研究",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "state-and-the-streamablehttp-transport",
        "title": "11. 状态和 StreamableHTTP 传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "assessment-on-mcp-concepts",
        "title": "12. MCP概念评估",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
            "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>本课是通知功能的动手演练课。我们会给一个工具加上日志与进度通知，然后在客户端接住它们——跑通「服务器发消息 → 客户端显示」的完整链路。</p>"
      },
      {
        "id": "sec-1",
        "title": "演练：为工具加通知",
        "contentHtml": "<p>参考「日志与进度通知」一课的服务端代码：给工具函数加上 <code>context</code> 参数，在关键节点调用 <code>await context.info(\"...\")</code> 输出日志，用 <code>await context.report_progress(current, total)</code> 更新进度。建议在任务开始（如 10/100）、中间（如 50/100）、完成前（如 90/100）各打一个点。</p>"
      },
      {
        "id": "sec-2",
        "title": "演练：客户端接住通知",
        "contentHtml": "<p>在客户端实现两个回调：<code>logging_callback</code>（打印日志数据）与 <code>print_progress_callback</code>（计算百分比并打印）。把日志回调传入 <code>ClientSession</code>，把进度回调传入 <code>call_tool</code>。</p><p>运行后你应该看到：工具执行的每个阶段都有日志输出，进度按百分比递增——而不是干等几秒钟没有反馈。</p>"
      },
      {
        "id": "sec-3",
        "title": "演练：验证与扩展",
        "contentHtml": "<ul><li>验证：不传进度回调时，进度消息是否被静默忽略？（应该如此——通知是可选的）</li><li>扩展：把 <code>report_progress</code> 的 total 设为 <code>None</code>，观察客户端如何处理无总值的进度。</li><li>思考：如果你做的是 Web 应用，你会用什么方式把这些消息推送到浏览器？</li></ul>"
      }
    ],
    "prevLesson": {
      "slug": "log-and-progress-notifications",
      "title": "Log and progress notifications"
    },
    "nextLesson": {
      "slug": "roots",
      "title": "Roots"
    }
  },
  "roots": {
    "lessonId": "roots",
    "lessonTitle": "根源",
    "lessonIndex": 4,
    "totalLessons": 12,
    "duration": "2 分钟",
                "outcomes": [
        "解释 roots 如何授予服务器本地文件访问权限"
,
        "用 is_path_allowed 之类的模式自行实现 root 限制"
,
        "说明 roots 的安全边界与灵活性"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "sampling",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "sampling-walkthrough",
        "title": "2. 采样演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "log-and-progress-notifications",
        "title": "3. 日志和进度通知",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "notifications-walkthrough",
        "title": "4. 通知演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "roots",
        "title": "5. 根源",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "roots-walkthrough",
        "title": "6. 根源演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "json-message-types",
        "title": "7. JSON消息类型",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "the-stdio-transport",
        "title": "8. STDIO传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "the-streamablehttp-transport",
        "title": "9. StreamableHTTP 传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "streamablehttp-in-depth",
        "title": "10. StreamableHTTP 深入研究",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "state-and-the-streamablehttp-transport",
        "title": "11. 状态和 StreamableHTTP 传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "assessment-on-mcp-concepts",
        "title": "12. MCP概念评估",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
            "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>Roots 是一种授予 MCP 服务器访问本地机器上特定文件与文件夹的机制。可以把它们想象成一个权限系统，说「嘿，MCP 服务器，你可以访问这些文件」——但它们能做的远不止授予权限。</p>"
      },
      {
        "id": "sec-1",
        "title": "Roots 解决的问题",
        "contentHtml": "<p>没有 roots，你会遇到一个常见问题。想象你有一个带视频转换工具的 MCP 服务器：它接收一个文件路径，把 MP4 转成 MOV 格式。</p><p>当用户让 Claude「把 biking.mp4 转成 mov 格式」时，Claude 只会用文件名调用工具。但问题是：<strong>Claude 无法搜索你的整个文件系统</strong>来找到这个文件到底在哪里。</p><p>你的文件系统可能很复杂，文件散落在不同目录。用户知道 biking.mp4 在 Movies 文件夹里，但 Claude 没有这个上下文。</p><p>你可以要求用户总是提供完整路径，但这很不友好——没人愿意每次输入完整路径。</p>"
      },
      {
        "id": "sec-2",
        "title": "Roots 的实际运作",
        "contentHtml": "<p>有了 roots，工作流变成这样：</p><ol><li>用户要求转换视频文件</li><li>Claude 调用 <code>list_roots</code> 查看它能访问哪些目录</li><li>Claude 在可访问的目录上调用 <code>read_dir</code> 找到文件</li><li>找到后，Claude 用完整路径调用转换工具</li></ol><p>这一切都是自动发生的——用户仍然只需说「转换 biking.mp4」，无需提供完整路径。</p>"
      },
      {
        "id": "sec-3",
        "title": "安全与边界",
        "contentHtml": "<p>Roots 还通过限制访问提供安全：如果你只授予对 Desktop 文件夹的访问，MCP 服务器就无法访问 Documents 或 Downloads 等其他位置的文件。</p><p>当 Claude 试图访问已批准 roots 之外的文件时，会得到错误，并能告知用户：从当前服务器配置来看，该文件不可访问。</p>"
      },
      {
        "id": "sec-4",
        "title": "实现细节",
        "contentHtml": "<p>MCP SDK <strong>不会自动强制</strong> root 限制——你需要自己实现。典型模式是创建一个 <code>is_path_allowed()</code> 之类的辅助函数：</p><ul><li>接收请求的文件路径</li><li>获取已批准的 roots 列表</li><li>检查请求的路径是否落在其中一个 root 内</li><li>返回 true/false 作为访问权限</li></ul><p>然后在任何访问文件或目录的工具中，在实际文件操作之前调用这个函数。</p>"
      },
      {
        "id": "sec-5",
        "title": "关键好处",
        "contentHtml": "<ul><li><strong>用户友好</strong>——用户无需提供完整文件路径</li><li><strong>聚焦搜索</strong>——Claude 只在批准的目录中查找，文件发现更快</li><li><strong>安全</strong>——防止意外访问批准区域之外的敏感文件</li><li><strong>灵活</strong>——你可以通过工具提供 roots，或直接把 roots 注入提示词</li></ul><p>Roots 让 MCP 服务器既更强大又更安全：给 Claude 找到文件所需的上下文，同时对它能访问的内容保持清晰的边界。</p>"
      }
    ],
    "prevLesson": {
      "slug": "notifications-walkthrough",
      "title": "Notifications walkthrough"
    },
    "nextLesson": {
      "slug": "roots-walkthrough",
      "title": "Roots walkthrough"
    }
  },
  "roots-walkthrough": {
    "lessonId": "roots-walkthrough",
    "lessonTitle": "根源演练",
    "lessonIndex": 5,
    "totalLessons": 12,
    "duration": "15 分钟",
                "outcomes": [
        "实现并验证 is_path_allowed 路径检查"
,
        "让工具基于 roots 授权优雅地允许或拒绝文件访问"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "sampling",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "sampling-walkthrough",
        "title": "2. 采样演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "log-and-progress-notifications",
        "title": "3. 日志和进度通知",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "notifications-walkthrough",
        "title": "4. 通知演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "roots",
        "title": "5. 根源",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "roots-walkthrough",
        "title": "6. 根源演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "json-message-types",
        "title": "7. JSON消息类型",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "the-stdio-transport",
        "title": "8. STDIO传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "the-streamablehttp-transport",
        "title": "9. StreamableHTTP 传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "streamablehttp-in-depth",
        "title": "10. StreamableHTTP 深入研究",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "state-and-the-streamablehttp-transport",
        "title": "11. 状态和 StreamableHTTP 传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "assessment-on-mcp-concepts",
        "title": "12. MCP概念评估",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
            "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>本课是 roots 的动手演练课。我们将实现一个「只有授权目录可访问」的视频转换工具，验证 Claude 能在 roots 内找到文件、在 roots 外得到错误。</p>"
      },
      {
        "id": "sec-1",
        "title": "演练：实现 is_path_allowed",
        "contentHtml": "<p>创建一个辅助函数：获取服务器已配置的 roots 列表，检查请求路径是否落在任一 root 之内。建议用 <code>pathlib.Path.resolve()</code> 解析路径后再比较前缀，避免相对路径与符号链接绕过检查。返回布尔值表示是否允许访问。</p>"
      },
      {
        "id": "sec-2",
        "title": "演练：在工具中调用检查",
        "contentHtml": "<p>在视频转换工具的开头调用 <code>is_path_allowed()</code>：不允许则直接返回错误信息（如「该文件不在当前服务器配置允许的访问范围内」），允许则继续执行转换。</p><p>把配置的 roots 设为你的 Desktop 目录，然后用两个路径测试：一个在 Desktop 内（应通过），一个在 Documents 内（应被拒绝）。</p>"
      },
      {
        "id": "sec-3",
        "title": "演练：与 Claude 协作验证",
        "contentHtml": "<ul><li>用 <code>stdio_client</code> 连接服务器，让 Claude 在已授权的目录中找一个文件（如「把桌面上最近下载的视频转成 mov」）——观察它如何通过 <code>list_roots</code> 与 <code>read_dir</code> 定位文件。</li><li>再让它访问未授权目录中的文件——应看到它得到错误并告知用户文件不可访问。</li><li>思考：如果只靠用户提供完整路径而不做检查，会有什么安全风险？</li></ul>"
      }
    ],
    "prevLesson": {
      "slug": "roots",
      "title": "Roots"
    },
    "nextLesson": {
      "slug": "json-message-types",
      "title": "JSON message types"
    }
  },
  "json-message-types": {
    "lessonId": "json-message-types",
    "lessonTitle": "JSON 消息类型",
    "lessonIndex": 6,
    "totalLessons": 12,
    "duration": "2 分钟",
                "outcomes": [
        "识别 MCP 的请求-结果消息与通知消息"
,
        "理解 MCP 是双向协议，客户端与服务器都能发起通信"
,
        "认识消息类型对选择传输方式的影响"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "sampling",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "sampling-walkthrough",
        "title": "2. 采样演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "log-and-progress-notifications",
        "title": "3. 日志和进度通知",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "notifications-walkthrough",
        "title": "4. 通知演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "roots",
        "title": "5. 根源",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "roots-walkthrough",
        "title": "6. 根源演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "json-message-types",
        "title": "7. JSON消息类型",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "the-stdio-transport",
        "title": "8. STDIO传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "the-streamablehttp-transport",
        "title": "9. StreamableHTTP 传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "streamablehttp-in-depth",
        "title": "10. StreamableHTTP 深入研究",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "state-and-the-streamablehttp-transport",
        "title": "11. 状态和 StreamableHTTP 传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "assessment-on-mcp-concepts",
        "title": "12. MCP概念评估",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
            "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>MCP（模型上下文协议）使用 JSON 消息处理客户端与服务器之间的通信。理解这些消息类型对使用 MCP 至关重要，尤其是在处理不同的传输方式（如 streamable HTTP transport）时。</p>"
      },
      {
        "id": "sec-1",
        "title": "消息格式",
        "contentHtml": "<p>所有 MCP 通信都通过 JSON 消息进行。每种消息类型服务于特定目的——无论是调用工具、列出可用资源，还是发送系统事件通知。</p><p>一个典型示例：当 Claude 需要调用 MCP 服务器提供的工具时，客户端发送「Call Tool Request」消息；服务器处理请求、运行工具，并返回包含输出的「Call Tool Result」消息。</p>"
      },
      {
        "id": "sec-2",
        "title": "MCP 规范",
        "contentHtml": "<p>完整的消息类型列表定义在 GitHub 上的官方 MCP 规范仓库中。这份规范独立于各种 SDK 仓库（如 Python 或 TypeScript SDK），是 MCP 应该如何工作的权威来源。</p><p>消息类型用 TypeScript 编写只是为了方便——不是因为它们作为 TypeScript 代码执行，而是因为 TypeScript 提供了一种清晰描述数据结构与类型的方式。</p>"
      },
      {
        "id": "sec-3",
        "title": "消息类别",
        "contentHtml": "<p>MCP 消息分为两大类：</p><h3>请求-结果消息（Request-Result）</h3><p>这类消息总是成对出现。你发送请求，期望收到结果：</p><ul><li>Call Tool Request → Call Tool Result</li><li>List Prompts Request → List Prompts Result</li><li>Read Resource Request → Read Resource Result</li><li>Initialize Request → Initialize Result</li></ul><h3>通知消息（Notification）</h3><p>单向消息，通知事件但不需要响应：</p><ul><li>Progress Notification——长时间操作的进度更新</li><li>Logging Message Notification——系统日志消息</li><li>Tool List Changed Notification——可用工具变化</li><li>Resource Updated Notification——资源被修改</li></ul>"
      },
      {
        "id": "sec-4",
        "title": "客户端消息 vs 服务器消息",
        "contentHtml": "<p>MCP 规范按发送方组织消息：<strong>客户端消息</strong>包括客户端发送给服务器的请求（如工具调用）以及客户端可能发送的通知；<strong>服务器消息</strong>包括服务器发送给客户端的请求以及服务器广播的通知。</p><p><strong>关键洞见：MCP 是一个双向协议</strong>——客户端和服务器都可以发起通信。当你在不同传输方式下工作时会发现，有些传输对哪些类型的消息可以朝哪个方向流动有限制。理解「服务器也能向客户端发消息」这一点，在挑选适合你用例的传输方式时至关重要。</p>"
      }
    ],
    "prevLesson": {
      "slug": "roots-walkthrough",
      "title": "Roots walkthrough"
    },
    "nextLesson": {
      "slug": "the-stdio-transport",
      "title": "The STDIO transport"
    }
  },
  "the-stdio-transport": {
    "lessonId": "the-stdio-transport",
    "lessonTitle": "STDIO传输",
    "lessonIndex": 7,
    "totalLessons": 12,
    "duration": "2 分钟",
                "outcomes": [
        "解释 stdio 传输如何通过子进程与 stdin/stdout 通信"
,
        "描述 MCP 的三消息初始化握手"
,
        "识别双向通信的四种场景"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "sampling",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "sampling-walkthrough",
        "title": "2. 采样演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "log-and-progress-notifications",
        "title": "3. 日志和进度通知",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "notifications-walkthrough",
        "title": "4. 通知演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "roots",
        "title": "5. 根源",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "roots-walkthrough",
        "title": "6. 根源演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "json-message-types",
        "title": "7. JSON消息类型",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "the-stdio-transport",
        "title": "8. STDIO传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "the-streamablehttp-transport",
        "title": "9. StreamableHTTP 传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "streamablehttp-in-depth",
        "title": "10. StreamableHTTP 深入研究",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "state-and-the-streamablehttp-transport",
        "title": "11. 状态和 StreamableHTTP 传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "assessment-on-mcp-concepts",
        "title": "12. MCP概念评估",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
            "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>MCP 客户端与服务器通过交换 JSON 消息通信，但这些消息实际上是怎么传输的？所用的通信通道称为<strong>传输（transport）</strong>，实现方式有多种——从 HTTP 请求到 WebSockets，甚至把 JSON 写在明信片上（虽然最后一种不推荐用于生产）。</p>"
      },
      {
        "id": "sec-1",
        "title": "Stdio 传输",
        "contentHtml": "<p>当你最初开发 MCP 服务器或客户端时，最常用的传输是 <strong>stdio transport</strong>。这种方法很直接：客户端把 MCP 服务器作为子进程启动，通过标准输入与标准输出流通信。</p><p>它的工作方式：</p><ul><li>客户端通过服务器的 <code>stdin</code> 向它发送消息</li><li>服务器通过写 <code>stdout</code> 响应</li><li>服务器或客户端随时都可以发送消息</li><li>只在客户端与服务器运行在同一台机器上时有效</li></ul>"
      },
      {
        "id": "sec-2",
        "title": "在终端里直接看到 Stdio",
        "contentHtml": "<p>你其实可以不写单独客户端，直接从终端测试一个 MCP 服务器：当你用 <code>uv run server.py</code> 运行服务器时，它监听 stdin、把响应写到 stdout。这意味着你可以直接把 JSON 消息粘贴进终端，立刻看到服务器的响应。</p><p>终端输出会展示完整的消息交换，包括初始化与工具调用的示例消息。</p>"
      },
      {
        "id": "sec-3",
        "title": "MCP 连接序列",
        "contentHtml": "<p>每次 MCP 连接都必须以特定的三消息握手开始：</p><ol><li><strong>Initialize Request</strong>——客户端首先发送</li><li><strong>Initialize Result</strong>——服务器用能力（capabilities）响应</li><li><strong>Initialized Notification</strong>——客户端确认（不需要响应）</li></ol><p>只有完成握手之后，你才能发送其他请求，如工具调用或提示词列表。</p>"
      },
      {
        "id": "sec-4",
        "title": "四种通信场景",
        "contentHtml": "<p>使用任何传输方式，你都需要处理四种通信模式：</p><ul><li>客户端 → 服务器请求：客户端写入 stdin</li><li>服务器 → 客户端响应：服务器写入 stdout</li><li>服务器 → 客户端请求：服务器写入 stdout</li><li>客户端 → 服务器响应：客户端写入 stdin</li></ul><p>stdio 传输的美妙之处在于它的简单性——任一方都可以随时用这两个通道发起通信。</p>"
      },
      {
        "id": "sec-5",
        "title": "为什么这很重要",
        "contentHtml": "<p>理解 stdio 传输至关重要，因为它代表了双向通信无缝进行的「理想」情形。当我们转向 HTTP 等其他传输时，会遇到服务器不能总是向客户端发起请求的限制。stdio 传输是我们理解完整 MCP 通信样貌的基线，然后再去应对其他传输方式的约束。</p><p>开发和测试用 stdio 传输很完美；对于客户端与服务器需要运行在不同机器的生产部署，你需要考虑带有各自权衡的其他传输选项。</p>"
      }
    ],
    "prevLesson": {
      "slug": "json-message-types",
      "title": "JSON message types"
    },
    "nextLesson": {
      "slug": "the-streamablehttp-transport",
      "title": "The StreamableHTTP transport"
    }
  },
  "the-streamablehttp-transport": {
    "lessonId": "the-streamablehttp-transport",
    "lessonTitle": "StreamableHTTP传输",
    "lessonIndex": 8,
    "totalLessons": 12,
    "duration": "2 分钟",
                "outcomes": [
        "解释 streamable HTTP transport 的用途与限制"
,
        "识别 stateless_http 与 json_response 对功能的影响"
,
        "根据部署场景做出传输选择"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "sampling",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "sampling-walkthrough",
        "title": "2. 采样演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "log-and-progress-notifications",
        "title": "3. 日志和进度通知",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "notifications-walkthrough",
        "title": "4. 通知演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "roots",
        "title": "5. 根源",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "roots-walkthrough",
        "title": "6. 根源演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "json-message-types",
        "title": "7. JSON消息类型",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "the-stdio-transport",
        "title": "8. STDIO传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "the-streamablehttp-transport",
        "title": "9. StreamableHTTP 传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "streamablehttp-in-depth",
        "title": "10. StreamableHTTP 深入研究",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "state-and-the-streamablehttp-transport",
        "title": "11. 状态和 StreamableHTTP 传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "assessment-on-mcp-concepts",
        "title": "12. MCP概念评估",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
            "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>Streamable HTTP transport 让 MCP 客户端能通过 HTTP 连接远程托管的服务器。与要求客户端和服务器在同一台机器上的标准 I/O 传输不同，这种传输为任何人可访问的公共 MCP 服务器打开了可能性。</p><p><strong>但有一个重要的注意事项</strong>：某些配置设置可能显著限制 MCP 服务器的功能。如果你的应用用标准 I/O 传输在本地完美运行，部署成 HTTP 传输却坏了，很可能就是它导致的。</p>"
      },
      {
        "id": "sec-1",
        "title": "关键配置设置",
        "contentHtml": "<p>两个关键设置控制 streamable HTTP transport 的行为：</p><ul><li><code>stateless_http</code>——控制连接状态管理</li><li><code>json_response</code>——控制响应格式处理</li></ul><p>默认情况下两者都是 <code>false</code>，但某些部署场景可能迫使你把它们设为 <code>true</code>。启用后，这些设置会破坏进度通知、日志与服务器发起的请求等核心功能。</p>"
      },
      {
        "id": "sec-2",
        "title": "HTTP 通信的挑战",
        "contentHtml": "<p>要理解这些限制为何存在，需要回顾 HTTP 通信的工作方式。在标准 HTTP 中：</p><ul><li>客户端可以轻松向服务器发起请求（服务器有已知 URL）</li><li>服务器可以轻松响应这些请求</li><li>服务器<strong>不能</strong>轻松向客户端发起请求（客户端没有已知 URL）</li><li>客户端回传给服务器的响应模式变得有问题</li></ul>"
      },
      {
        "id": "sec-3",
        "title": "受影响的 MCP 消息类型",
        "contentHtml": "<p>这个 HTTP 限制影响了特定的 MCP 通信模式。以下消息类型用纯 HTTP 很难实现：</p><ul><li><strong>服务器发起的请求</strong>：Create Message 请求、List Roots 请求</li><li><strong>通知</strong>：进度通知、日志通知、Initialized 通知、Cancelled 通知</li></ul><p>这些正是启用限制性 HTTP 设置时会被破坏的功能：进度条消失、日志停止工作、服务器发起的 sampling 请求失败。</p>"
      },
      {
        "id": "sec-4",
        "title": "Streamable HTTP 的解决方案与权衡",
        "contentHtml": "<p>Streamable HTTP transport 确实提供了绕开 HTTP 限制的巧妙方案，但伴随权衡。当你被迫使用 <code>stateless_http=True</code> 或 <code>json_response=True</code> 时，你本质上是在让传输在 HTTP 的约束内运作，而不是绕开它们。</p><p>理解这些限制能帮你做出明智决策：</p><ul><li>不同部署场景该用哪种传输</li><li>如何设计 MCP 服务器优雅地处理 HTTP 约束</li><li>何时为了远程托管的收益接受功能缩减</li></ul><p>关键在于知道这些限制存在，并据此规划你的 MCP 服务器架构。如果你的应用重度依赖服务器发起的请求或实时通知，你可能需要重新考虑传输选择，或实现替代的通信模式。</p>"
      }
    ],
    "prevLesson": {
      "slug": "the-stdio-transport",
      "title": "The STDIO transport"
    },
    "nextLesson": {
      "slug": "streamablehttp-in-depth",
      "title": "StreamableHTTP in depth"
    }
  },
  "streamablehttp-in-depth": {
    "lessonId": "streamablehttp-in-depth",
    "lessonTitle": "StreamableHTTP 深入探讨",
    "lessonIndex": 9,
    "totalLessons": 12,
    "duration": "2 分钟",
                "outcomes": [
        "解释 SSE 如何实现服务器到客户端的通信"
,
        "描述双 SSE 连接模型与消息路由"
,
        "识别 stateless_http 与 json_response 何时会破坏绕行机制"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "sampling",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "sampling-walkthrough",
        "title": "2. 采样演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "log-and-progress-notifications",
        "title": "3. 日志和进度通知",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "notifications-walkthrough",
        "title": "4. 通知演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "roots",
        "title": "5. 根源",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "roots-walkthrough",
        "title": "6. 根源演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "json-message-types",
        "title": "7. JSON消息类型",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "the-stdio-transport",
        "title": "8. STDIO传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "the-streamablehttp-transport",
        "title": "9. StreamableHTTP 传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "streamablehttp-in-depth",
        "title": "10. StreamableHTTP 深入研究",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "state-and-the-streamablehttp-transport",
        "title": "11. 状态和 StreamableHTTP 传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "assessment-on-mcp-concepts",
        "title": "12. MCP概念评估",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
            "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>StreamableHTTP 是 MCP 对一个根本问题的解决方案：某些 MCP 功能要求服务器向客户端发起请求，而 HTTP 让这变得困难。让我们探索 StreamableHTTP 如何绕开这个限制，以及何时你可能需要打破这个绕行方案。</p>"
      },
      {
        "id": "sec-1",
        "title": "核心问题",
        "contentHtml": "<p>sampling、通知与日志等 MCP 功能依赖服务器向客户端发起请求。然而，HTTP 是为客户端向服务器发起请求设计的，而不是反过来的。<strong>StreamableHTTP 用 Server-Sent Events（SSE）做了一个巧妙的绕行方案。</strong></p>"
      },
      {
        "id": "sec-2",
        "title": "StreamableHTTP 如何工作",
        "contentHtml": "<p>魔力发生在一个多步骤过程中，它在客户端与服务器之间建立持久连接。</p><h3>初始连接建立</h3><ol><li>客户端向服务器发送 <code>Initialize Request</code></li><li>服务器用包含特殊 <code>mcp-session-id</code> 头的 <code>Initialize Result</code> 响应</li><li>客户端用会话 ID 发送 <code>Initialized Notification</code></li></ol><p>这个会话 ID 至关重要——它唯一标识客户端，并且必须包含在之后的所有请求中。</p><h3>SSE 绕行方案</h3><p>初始化之后，客户端可以发一个 GET 请求建立 Server-Sent Events 连接。这会创建一个长期存活的 HTTP 响应，服务器可以随时通过它向客户端流式发送消息。</p><p>这条 SSE 连接是服务器到客户端通信的关键：服务器现在可以通过这个持久通道发送请求、通知与其他消息。</p>"
      },
      {
        "id": "sec-3",
        "title": "工具调用与双 SSE 连接",
        "contentHtml": "<p>当客户端发起工具调用时，事情变得更复杂。系统会创建两条独立的 SSE 连接：</p><ul><li><strong>主 SSE 连接（Primary）</strong>——用于服务器发起的请求，无限期保持打开</li><li><strong>工具专属 SSE 连接（Tool-specific）</strong>——为每次工具调用创建，工具结果发送后自动关闭</li></ul><h3>消息路由</h3><p>不同类型的消息通过不同连接路由：</p><ul><li>进度通知——通过主 SSE 连接发送</li><li>日志消息与工具结果——通过工具专属 SSE 连接发送</li></ul>"
      },
      {
        "id": "sec-4",
        "title": "打破绕行方案的配置标志",
        "contentHtml": "<p>StreamableHTTP 有两个重要配置选项：</p><ul><li><code>stateless_http</code></li><li><code>json_response</code></li></ul><p>把这两个设为 <code>True</code> 会破坏 SSE 绕行机制。你可能在某些场景想启用这些标志，但这样做会限制依赖服务器到客户端通信的完整 MCP 功能。</p>"
      },
      {
        "id": "sec-5",
        "title": "关键要点",
        "contentHtml": "<p>StreamableHTTP 比其他 MCP 传输更复杂，因为它必须绕开 HTTP 的限制。基于 SSE 的绕行方案让完整的 MCP 功能可以跑在 HTTP 之上，但理解双连接模型对调试与优化至关重要。</p><p>用 StreamableHTTP 构建 MCP 应用时，记住：初始化之后的所有请求都需要会话 ID，并且系统会自动管理多条 SSE 连接来处理不同类型的服务器到客户端通信。</p>"
      }
    ],
    "prevLesson": {
      "slug": "the-streamablehttp-transport",
      "title": "The StreamableHTTP transport"
    },
    "nextLesson": {
      "slug": "state-and-the-streamablehttp-transport",
      "title": "State and the StreamableHTTP transport"
    }
  },
  "state-and-the-streamablehttp-transport": {
    "lessonId": "state-and-the-streamablehttp-transport",
    "lessonTitle": "状态和 StreamableHTTP 传输",
    "lessonIndex": 10,
    "totalLessons": 12,
    "duration": "2 分钟",
                "outcomes": [
        "解释 stateless_http 与 json_response 各自的作用与权衡"
,
        "判断何时在水平扩展与生产场景中使用这些标志"
,
        "用与生产一致的传输进行开发测试"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "sampling",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "sampling-walkthrough",
        "title": "2. 采样演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "log-and-progress-notifications",
        "title": "3. 日志和进度通知",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "notifications-walkthrough",
        "title": "4. 通知演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "roots",
        "title": "5. 根源",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "roots-walkthrough",
        "title": "6. 根源演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "json-message-types",
        "title": "7. JSON消息类型",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "the-stdio-transport",
        "title": "8. STDIO传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "the-streamablehttp-transport",
        "title": "9. StreamableHTTP 传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "streamablehttp-in-depth",
        "title": "10. StreamableHTTP 深入研究",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "state-and-the-streamablehttp-transport",
        "title": "11. 状态和 StreamableHTTP 传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "assessment-on-mcp-concepts",
        "title": "12. MCP概念评估",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
            "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>MCP 服务器中的 <code>stateless_http</code> 与 <code>json_response</code> 标志控制着服务器行为的根本方面。理解何时以及为什么使用它们至关重要，尤其是当你计划扩展服务器或在生产中部署时。</p>"
      },
      {
        "id": "sec-1",
        "title": "什么时候需要无状态 HTTP",
        "contentHtml": "<p>想象你构建的 MCP 服务器变得流行。最初可能只有少数客户端连接到一个服务器实例。随着服务器增长，可能有数千个客户端尝试连接，单个服务器实例无法扩展处理所有流量。</p><p>典型解决方案是水平扩展——在负载均衡器后面运行多个服务器实例。但事情在这里变得复杂：记住 MCP 客户端需要两条独立连接：</p><ul><li>用于接收服务器到客户端请求的 GET SSE 连接</li><li>用于调用工具并接收响应的 POST 请求</li></ul><p>有了负载均衡器，这些请求可能被路由到不同服务器实例。如果你的工具需要使用 Claude（通过 sampling），处理 POST 请求的服务器需要与处理 GET SSE 连接的服务器协调——这会在服务器之间制造复杂的协调问题。</p>"
      },
      {
        "id": "sec-2",
        "title": "无状态 HTTP 如何解决它",
        "contentHtml": "<p>把 <code>stateless_http=True</code> 消除了这个协调问题，但伴随显著权衡。启用无状态 HTTP 后：</p><ul><li>客户端得不到会话 ID——服务器无法跟踪单个客户端</li><li>没有服务器到客户端的请求——GET SSE 通路不可用</li><li>没有 sampling——无法使用 Claude 或其他 AI 模型</li><li>没有进度报告——无法在长操作期间发送进度更新</li><li>没有订阅——无法通知客户端资源更新</li></ul><p>不过有一个好处：客户端初始化不再必需，客户端可以不用握手直接发请求。</p>"
      },
      {
        "id": "sec-3",
        "title": "理解 JSON 响应",
        "contentHtml": "<p><code>json_response=True</code> 标志更简单——它只是禁用 POST 请求响应的流式。不是像工具执行时收到多条 SSE 消息，你只得到最终结果，以纯 JSON 返回。</p><p>禁用流式后：</p><ul><li>没有中间进度消息</li><li>执行期间没有日志语句</li><li>只有最终的工具结果</li></ul>"
      },
      {
        "id": "sec-4",
        "title": "何时使用这些标志",
        "contentHtml": "<p><strong>在以下情况使用无状态 HTTP：</strong></p><ul><li>你需要带负载均衡器的水平扩展</li><li>你不需要服务器到客户端的通信</li><li>你的工具不需要 AI 模型 sampling</li><li>你想最小化连接开销</li></ul><p><strong>在以下情况使用 JSON 响应：</strong></p><ul><li>你不需要流式响应</li><li>你偏好更简单、非流式的 HTTP 响应</li><li>你正在集成期望纯 JSON 的系统</li></ul>"
      },
      {
        "id": "sec-5",
        "title": "开发 vs 生产",
        "contentHtml": "<p>如果你在本地用标准 I/O 传输开发、计划用 HTTP 传输部署，请用将与生产环境相同的传输进行测试。<strong>有状态与无状态模式之间的行为差异可能很大</strong>，最好在开发期间而不是部署后发现问题。</p><p>这些标志从根本上改变 MCP 服务器的运作方式，因此请根据你具体的扩展与功能需求来选择。</p>"
      }
    ],
    "prevLesson": {
      "slug": "streamablehttp-in-depth",
      "title": "StreamableHTTP in depth"
    },
    "nextLesson": {
      "slug": "assessment-on-mcp-concepts",
      "title": "Assessment on MCP concepts"
    }
  },
  "assessment-on-mcp-concepts": {
    "lessonId": "assessment-on-mcp-concepts",
    "lessonTitle": "MCP 概念评估",
    "lessonIndex": 11,
    "totalLessons": 12,
    "duration": "8 分钟",
                "outcomes": [
        "通过测验，检验对 MCP 高级概念的理解"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "sampling",
        "title": "1. 开始课程",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "sampling-walkthrough",
        "title": "2. 采样演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "log-and-progress-notifications",
        "title": "3. 日志和进度通知",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "notifications-walkthrough",
        "title": "4. 通知演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "roots",
        "title": "5. 根源",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "roots-walkthrough",
        "title": "6. 根源演练",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "json-message-types",
        "title": "7. JSON消息类型",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "the-stdio-transport",
        "title": "8. STDIO传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "the-streamablehttp-transport",
        "title": "9. StreamableHTTP 传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "streamablehttp-in-depth",
        "title": "10. StreamableHTTP 深入研究",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "state-and-the-streamablehttp-transport",
        "title": "11. 状态和 StreamableHTTP 传输",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "assessment-on-mcp-concepts",
        "title": "12. MCP概念评估",
        "subtitle": "官方图文讲义",
        "duration": "8 min"
      }
    ],
            "sections": [
      {
        "id": "sec-0",
        "title": "知识自测",
        "contentHtml": "<p>通过以下问题检验你对 MCP 高级概念（sampling、通知、roots 与传输方式）的掌握。</p>"
,
        "quiz": {
          "id": "quiz-1",
          "title": "知识自测",
          "options": [
            { "id": "a", "text": "把文本生成的责任与成本从服务器转移到客户端", "isCorrect": true, "explanation": "服务器不直接调用 Claude，而是请客户端代为调用，因此成本由客户端承担。" },
            { "id": "b", "text": "让服务器直接管理 API key 与成本", "isCorrect": false, "explanation": "那正是 sampling 想避免的——服务器需要自己的 API key 并管理成本。" },
            { "id": "c", "text": "让客户端直接调用服务器的工具", "isCorrect": false, "explanation": "sampling 的方向是服务器请客户端代为生成文本。" }
          ],
          "generalExplanation": "Sampling 把 AI 集成复杂度与成本从服务器转移到客户端。"
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
            { "id": "a", "text": "context.info() 与 context.report_progress()", "isCorrect": true, "explanation": "这两个方法分别发送日志消息与更新进度。" },
            { "id": "b", "text": "context.call_tool() 与 context.read_resource()", "isCorrect": false, "explanation": "这两个不是日志/进度相关的方法。" },
            { "id": "c", "text": "session.initialize() 与 session.list_roots()", "isCorrect": false, "explanation": "这是会话与 roots 相关的方法，不是通知方法。" }
          ],
          "generalExplanation": "服务端通过 Context 的 info 与 report_progress 发送通知。"
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
            { "id": "a", "text": "授权服务器访问特定文件与文件夹，并限制访问边界", "isCorrect": true, "explanation": "Roots 既授予对特定目录的访问，也通过限制访问提供安全。" },
            { "id": "b", "text": "让服务器搜索用户的整个文件系统", "isCorrect": false, "explanation": "恰恰相反——roots 限制搜索范围到批准的目录。" },
            { "id": "c", "text": "自动强制文件权限，无需任何实现", "isCorrect": false, "explanation": "MCP SDK 不会自动强制 root 限制，需要自行实现 is_path_allowed 之类检查。" }
          ],
          "generalExplanation": "Roots 在授予文件访问的同时划定清晰的安全边界。"
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
            { "id": "a", "text": "stdio 传输要求双方在同一台机器，HTTP 传输允许远程托管", "isCorrect": true, "explanation": "stdio 通过子进程与 stdin/stdout 通信，仅限本机；HTTP 传输支持远程公共服务器。" },
            { "id": "b", "text": "stdio 传输只能在生产环境使用", "isCorrect": false, "explanation": "stdio 适合开发测试，生产远程部署通常需要 HTTP 等传输。" },
            { "id": "c", "text": "HTTP 传输没有通信方向限制", "isCorrect": false, "explanation": "HTTP 下服务器难以向客户端发起请求，需要 SSE 绕行方案。" }
          ],
          "generalExplanation": "传输选择取决于部署场景：本机用 stdio，远程托管用 HTTP 并理解其约束。"
        }
      }
    ],
    "prevLesson": {
      "slug": "state-and-the-streamablehttp-transport",
      "title": "State and the StreamableHTTP transport"
    }
  }
};
