import { LessonLayoutProps } from '../../components/LessonLayout';

export const MCP_LESSONS: Record<string, Omit<LessonLayoutProps, 'courseId' | 'courseTitle'>> = {
  "introducing-mcp": {
    "lessonId": "introducing-mcp",
    "lessonTitle": "MCP 简介",
    "lessonIndex": 0,
    "totalLessons": 12,
    "duration": "2 分钟",
                "outcomes": [
        "解释 MCP 是什么以及它解决的问题"
,
        "描述 MCP 服务器如何把工具定义与执行外包出去"
,
        "区分 MCP 与直接调用 API、工具使用的不同"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "introducing-mcp",
        "title": "1. introducing-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "mcp-clients",
        "title": "2. mcp-clients",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "defining-tools-with-mcp",
        "title": "3. defining-tools-with-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "the-server-inspector",
        "title": "4. the-server-inspector",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "implementing-a-client",
        "title": "5. implementing-a-client",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "defining-resources",
        "title": "6. defining-resources",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "accessing-resources",
        "title": "7. accessing-resources",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "defining-prompts",
        "title": "8. defining-prompts",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "prompts-in-the-client",
        "title": "9. prompts-in-the-client",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "final-assessment-on-mcp",
        "title": "10. final-assessment-on-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "mcp-review",
        "title": "11. mcp-review",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "badge",
        "title": "12. badge",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
            "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>模型上下文协议（Model Context Protocol，MCP）是一个通信层，让 Claude 无需你编写大量繁琐的集成代码就能获得上下文与工具。可以把它看作一种方式：把工具定义与执行的负担从你的服务器转移到专门的 MCP 服务器上。</p><p>当你初次接触 MCP 时，会看到展示基础架构的图：一个 MCP 客户端（你的服务器）连接到一个或多个包含工具、提示词与资源的 MCP 服务器。每个 MCP 服务器都是某个外部服务的接口。</p>"
      },
      {
        "id": "sec-1",
        "title": "MCP 解决的问题",
        "contentHtml": "<p>假设你在构建一个聊天界面，用户可以向 Claude 询问他们的 GitHub 数据。用户可能会问「我所有仓库里有哪些未关闭的 pull request？」要处理这个问题，Claude 需要能访问 GitHub API 的工具。</p><p>GitHub 功能庞大——仓库、pull request、issue、项目等等。没有 MCP，你就得为 GitHub 的全部功能创建海量的工具 schema 和函数。</p><p>这意味着你要自己编写、测试和维护所有这些集成代码——这是巨大的工作量和持续的维护负担。</p>"
      },
      {
        "id": "sec-2",
        "title": "MCP 如何工作",
        "contentHtml": "<p>MCP 通过把工具定义与执行从你的服务器转移到专门的 MCP 服务器，减轻了这种负担。你不必自己编写所有 GitHub 工具——由 GitHub 的 MCP 服务器来处理。</p><p>MCP 服务器把围绕 GitHub 的大量功能封装起来，以一套标准化的工具暴露出来。你的应用连接到这个 MCP 服务器，而不是从零实现一切。</p>"
      },
      {
        "id": "sec-3",
        "title": "MCP 服务器详解",
        "contentHtml": "<p>MCP 服务器提供由外部服务实现的数据或功能。它们作为专门的接口，以标准化的方式暴露工具、提示词与资源。</p><p>在我们的 GitHub 示例中，GitHub 的 MCP 服务器包含像 <code>get_repos()</code> 这样的工具，并直接连接 GitHub API。你的服务器与 MCP 服务器通信，由它处理所有 GitHub 特有的实现细节。</p>"
      },
      {
        "id": "sec-4",
        "title": "常见问题",
        "contentHtml": "<h3>谁编写 MCP 服务器？</h3><p>任何人都可以创建 MCP 服务器实现。通常，服务提供商自己会制作官方的 MCP 实现。例如，AWS 可能发布一个带各种服务工具的官方 MCP 服务器。</p><h3>这与直接调用 API 有什么不同？</h3><p>MCP 服务器为你提供了现成的工具 schema 与函数。如果你想直接调用 API，就得自己编写这些工具定义。MCP 帮你省掉了这部分实现工作。</p><h3>MCP 不就是工具使用（tool use）吗？</h3><p>这是一个常见的误解。MCP 服务器与工具使用是互补但不同的概念：MCP 服务器提供已经定义好的工具 schema 与函数，而工具使用是关于 Claude 如何实际调用这些工具。关键区别在于谁做了这些工作——有了 MCP，别人已经替你实现了工具。</p><p>好处很明显：与其自己维护一套复杂的集成，你可以利用 MCP 服务器来承担连接外部服务的繁重工作。</p>"
      }
    ]
  },
  "mcp-clients": {
    "lessonId": "mcp-clients",
    "lessonTitle": "MCP 客户",
    "lessonIndex": 1,
    "totalLessons": 12,
    "duration": "2 分钟",
                "outcomes": [
        "解释 MCP 客户端在架构中的桥梁作用"
,
        "描述 MCP 的传输无关特性与消息类型"
,
        "追踪用户查询在 MCP 全链路的完整流转"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "introducing-mcp",
        "title": "1. introducing-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "mcp-clients",
        "title": "2. mcp-clients",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "defining-tools-with-mcp",
        "title": "3. defining-tools-with-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "the-server-inspector",
        "title": "4. the-server-inspector",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "implementing-a-client",
        "title": "5. implementing-a-client",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "defining-resources",
        "title": "6. defining-resources",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "accessing-resources",
        "title": "7. accessing-resources",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "defining-prompts",
        "title": "8. defining-prompts",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "prompts-in-the-client",
        "title": "9. prompts-in-the-client",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "final-assessment-on-mcp",
        "title": "10. final-assessment-on-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "mcp-review",
        "title": "11. mcp-review",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "badge",
        "title": "12. badge",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
            "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>MCP 客户端是连接你的服务器与 MCP 服务器之间的通信桥梁。它是你访问 MCP 服务器提供的所有工具的入口，处理消息交换与协议细节，让你的应用不必操心这些。</p>"
      },
      {
        "id": "sec-1",
        "title": "传输无关的通信",
        "contentHtml": "<p>MCP 的关键优势之一是<strong>传输无关（transport agnostic）</strong>——简单说就是客户端与服务器可以根据你的设置，通过不同的协议通信。</p><p>最常见的设置是让 MCP 客户端与服务器运行在同一台机器上，通过标准输入/输出来通信。但你也可以通过网络连接它们：</p><ul><li>HTTP</li><li>WebSockets</li><li>各种其他网络协议</li></ul>"
      },
      {
        "id": "sec-2",
        "title": "MCP 消息类型",
        "contentHtml": "<p>连接建立后，客户端与服务器交换 MCP 规范中定义的特定消息类型。你主要会用到这些：</p><ul><li><strong>ListToolsRequest / ListToolsResult</strong>——客户端问服务器「你提供哪些工具？」，并得到可用工具列表。</li><li><strong>CallToolRequest / CallToolResult</strong>——客户端请服务器用给定参数运行特定工具，然后接收结果。</li></ul>"
      },
      {
        "id": "sec-3",
        "title": "完整工作流示例",
        "contentHtml": "<p>下面是一个完整示例，展示用户查询如何流过整个系统——从你的服务器、经过 MCP 客户端、到 GitHub 等外部服务、再回到 Claude。</p><p>假设用户问「我有哪些仓库？」，步骤如下：</p><ol><li><strong>用户查询</strong>——用户把问题提交给你的服务器</li><li><strong>工具发现</strong>——你的服务器需要知道有哪些工具可以送给 Claude</li><li><strong>工具列表交换</strong>——你的服务器向 MCP 客户端请求可用工具</li><li><strong>MCP 通信</strong>——MCP 客户端向 MCP 服务器发送 <code>ListToolsRequest</code>，收到 <code>ListToolsResult</code></li><li><strong>Claude 请求</strong>——你的服务器把用户查询加上可用工具一起发送给 Claude</li><li><strong>工具使用决策</strong>——Claude 决定需要调用工具来回答问题</li><li><strong>工具执行请求</strong>——你的服务器请 MCP 客户端运行 Claude 指定的工具</li><li><strong>外部 API 调用</strong>——MCP 客户端发送 <code>CallToolRequest</code> 给 MCP 服务器，它执行真实的 GitHub API 调用</li><li><strong>结果回流</strong>——GitHub 返回仓库数据，经 MCP 服务器以 <code>CallToolResult</code> 流回</li><li><strong>工具结果给 Claude</strong>——你的服务器把工具结果送回给 Claude</li><li><strong>最终响应</strong>——Claude 使用仓库数据组织最终回答</li><li><strong>用户得到答案</strong>——你的服务器把 Claude 的响应返回给用户</li></ol><p>是的，这个流程步骤很多，但每个组件都有清晰的职责。MCP 客户端抽象了服务器通信的复杂度，让你专注于应用逻辑，同时仍能访问强大的外部工具与数据源。</p><p>理解这个流程至关重要，因为在接下来的章节中构建自己的 MCP 客户端和服务器时，你会看到所有这些环节。</p>"
      }
    ]
  },
  "defining-tools-with-mcp": {
    "lessonId": "defining-tools-with-mcp",
    "lessonTitle": "使用 MCP 定义工具",
    "lessonIndex": 2,
    "totalLessons": 12,
    "duration": "10 分钟",
                "outcomes": [
        "用 FastMCP 一行初始化 MCP 服务器"
,
        "用装饰器与类型提示定义工具而非手写 schema"
,
        "实现带错误处理的文档读取与编辑工具"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "introducing-mcp",
        "title": "1. introducing-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "mcp-clients",
        "title": "2. mcp-clients",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "defining-tools-with-mcp",
        "title": "3. defining-tools-with-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "the-server-inspector",
        "title": "4. the-server-inspector",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "implementing-a-client",
        "title": "5. implementing-a-client",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "defining-resources",
        "title": "6. defining-resources",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "accessing-resources",
        "title": "7. accessing-resources",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "defining-prompts",
        "title": "8. defining-prompts",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "prompts-in-the-client",
        "title": "9. prompts-in-the-client",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "final-assessment-on-mcp",
        "title": "10. final-assessment-on-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "mcp-review",
        "title": "11. mcp-review",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "badge",
        "title": "12. badge",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
            "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>使用官方 Python SDK 会让构建 MCP 服务器变得简单得多。你不必手写复杂的 JSON schema，而是可以用装饰器定义工具，让 SDK 处理繁重的工作。</p><p>在这个示例中，我们创建一个文档管理服务器，带两个核心工具：一个读取文档，一个更新文档。所有文档以内存中的字典存储，键是文档 ID，值是内容。</p>"
      },
      {
        "id": "sec-1",
        "title": "搭建 MCP 服务器",
        "contentHtml": "<p>Python MCP SDK 让服务器创建变得非常直接。一行代码即可初始化服务器：</p><pre><code>from mcp.server.fastmcp import FastMCP\nmcp = FastMCP(\"DocumentMCP\", log_level=\"ERROR\")</code></pre><p>你的文档可以存放在一个简单的字典结构中：</p><pre><code>docs = {\n    \"deposition.md\": \"This deposition covers the testimony of Angela Smith, P.E.\",\n    \"report.pdf\": \"The report details the state of a 20m condenser tower.\",\n    \"financials.docx\": \"These financials outline the project's budget and expenditures\",\n    \"outlook.pdf\": \"This document presents the projected future performance of the system\",\n    \"plan.md\": \"The plan outlines the steps for the project's implementation.\",\n    \"spec.txt\": \"These specifications define the technical requirements for the equipment\"\n}</code></pre>"
      },
      {
        "id": "sec-2",
        "title": "用装饰器定义工具",
        "contentHtml": "<p>SDK 使用装饰器来定义工具。不必手动编写 JSON schema，你可以使用 Python 类型提示与字段描述。SDK 会自动生成 Claude 能理解的、正确的 schema。</p>"
      },
      {
        "id": "sec-3",
        "title": "创建文档读取工具",
        "contentHtml": "<p>第一个工具按 ID 读取文档内容。完整实现如下：</p><pre><code>@mcp.tool(\n    name=\"read_doc_contents\",\n    description=\"Read the contents of a document and return it as a string.\"\n)\ndef read_document(\n    doc_id: str = Field(description=\"Id of the document to read\")\n):\n    if doc_id not in docs:\n        raise ValueError(f\"Doc with id {doc_id} not found\")\n\n    return docs[doc_id]</code></pre><p>装饰器指定工具名称与描述，函数参数定义必需参数。来自 Pydantic 的 <code>Field</code> 类提供参数描述，帮助 Claude 理解每个参数期望什么。</p>"
      },
      {
        "id": "sec-4",
        "title": "创建文档编辑工具",
        "contentHtml": "<p>第二个工具对文档执行简单的查找-替换操作：</p><pre><code>@mcp.tool(\n    name=\"edit_document\",\n    description=\"Edit a document by replacing a string in the documents content with a new string.\"\n)\ndef edit_document(\n    doc_id: str = Field(description=\"Id of the document that will be edited\"),\n    old_str: str = Field(description=\"The text to replace. Must match exactly, including whitespace.\"),\n    new_str: str = Field(description=\"The new text to insert in place of the old text.\")\n):\n    if doc_id not in docs:\n        raise ValueError(f\"Doc with id {doc_id} not found\")\n\n    docs[doc_id] = docs[doc_id].replace(old_str, new_str)</code></pre><p>这个工具接受三个参数：文档 ID、要查找的文本和替换文本。实现包含缺失文档的错误处理，并执行直接的字符串替换。</p>"
      },
      {
        "id": "sec-5",
        "title": "SDK 方法的关键优势",
        "contentHtml": "<ul><li>无需手动编写 JSON schema</li><li>类型提示提供自动校验</li><li>清晰的参数描述帮助 Claude 理解工具用法</li><li>错误处理与 Python 异常自然集成</li><li>工具注册通过装饰器自动完成</li></ul><p>MCP Python SDK 把工具创建从复杂的 schema 编写练习，变成了简单的 Python 函数定义。这让构建和维护 MCP 服务器容易得多，同时确保 Claude 收到格式正确的工具规范。</p>"
      }
    ]
  },
  "the-server-inspector": {
    "lessonId": "the-server-inspector",
    "lessonTitle": "服务器检查员",
    "lessonIndex": 3,
    "totalLessons": 12,
    "duration": "3 分钟",
                "outcomes": [
        "用 mcp dev 启动内置的浏览器检查器"
,
        "连接服务器并测试工具调用"
,
        "用检查器验证工具交互与状态管理"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "introducing-mcp",
        "title": "1. introducing-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "mcp-clients",
        "title": "2. mcp-clients",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "defining-tools-with-mcp",
        "title": "3. defining-tools-with-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "the-server-inspector",
        "title": "4. the-server-inspector",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "implementing-a-client",
        "title": "5. implementing-a-client",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "defining-resources",
        "title": "6. defining-resources",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "accessing-resources",
        "title": "7. accessing-resources",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "defining-prompts",
        "title": "8. defining-prompts",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "prompts-in-the-client",
        "title": "9. prompts-in-the-client",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "final-assessment-on-mcp",
        "title": "10. final-assessment-on-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "mcp-review",
        "title": "11. mcp-review",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "badge",
        "title": "12. badge",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
            "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>构建 MCP 服务器时，你需要一种不连接完整应用就能测试功能的方式。Python MCP SDK 内置了一个基于浏览器的检查器，让你能实时调试和测试服务器。</p>"
      },
      {
        "id": "sec-1",
        "title": "启动检查器",
        "contentHtml": "<p>首先，确保你的 Python 环境已激活（查看项目 README 获取确切命令）。然后用以下命令启动检查器：</p><pre><code>mcp dev mcp_server.py</code></pre><p>这会启动一个开发服务器，并给你一个本地 URL，通常是类似 <code>http://127.0.0.1:6274</code> 的地址。在浏览器中打开这个 URL，即可访问 MCP Inspector。</p>"
      },
      {
        "id": "sec-2",
        "title": "使用检查器界面",
        "contentHtml": "<p>检查器界面仍在积极开发中，所以你使用时可能看起来不同。但核心功能保持一致。找这些关键元素：</p><ul><li>一个 Connect（连接）按钮，用于启动你的 MCP 服务器</li><li>Resources、Tools、Prompts 等功能导航标签</li><li>工具列表与测试面板</li></ul><p>先点击 Connect 按钮初始化你的服务器。你会看到连接状态从「Disconnected（未连接）」变为「Connected（已连接）」。</p>"
      },
      {
        "id": "sec-3",
        "title": "测试你的工具",
        "contentHtml": "<p>导航到 Tools（工具）部分，点击「List Tools」查看服务器所有可用工具。选中一个工具后，右侧面板显示其详情与输入字段。</p><p>例如，测试文档读取工具：</p><ul><li>选择 <code>read_doc_contents</code> 工具</li><li>输入一个文档 ID（如「deposition.md」）</li><li>点击「Run Tool」</li><li>检查结果是否成功且输出符合预期</li></ul><p>检查器同时显示成功状态与实际返回的数据，让你轻松验证工具是否正常工作。</p>"
      },
      {
        "id": "sec-4",
        "title": "测试工具交互",
        "contentHtml": "<p>你可以按顺序测试多个工具，验证复杂的工作流。例如，用编辑工具修改文档后，立即测试读取工具，确认改动被正确应用。</p><p>检查器会在工具调用之间保持服务器状态，所以编辑会持久生效，你可以验证 MCP 服务器的完整功能。</p>"
      },
      {
        "id": "sec-5",
        "title": "开发工作流",
        "contentHtml": "<p>MCP Inspector 会成为你开发流程中不可或缺的一部分。与其编写单独的测试脚本或连接完整应用，你可以：</p><ul><li>快速迭代工具实现</li><li>测试边界情况与错误条件</li><li>验证工具交互与状态管理</li><li>实时调试问题</li></ul><p>这种即时反馈循环让 MCP 服务器开发高效得多，并帮助你在开发早期就发现问题。</p>"
      }
    ]
  },
  "implementing-a-client": {
    "lessonId": "implementing-a-client",
    "lessonTitle": "实施客户端",
    "lessonIndex": 4,
    "totalLessons": 12,
    "duration": "10 分钟",
                "outcomes": [
        "理解 MCP 客户端与客户端会话的关系"
,
        "实现 list_tools 与 call_tool 两个核心函数"
,
        "用 CLI 与完整应用测试客户端链路"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "introducing-mcp",
        "title": "1. introducing-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "mcp-clients",
        "title": "2. mcp-clients",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "defining-tools-with-mcp",
        "title": "3. defining-tools-with-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "the-server-inspector",
        "title": "4. the-server-inspector",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "implementing-a-client",
        "title": "5. implementing-a-client",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "defining-resources",
        "title": "6. defining-resources",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "accessing-resources",
        "title": "7. accessing-resources",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "defining-prompts",
        "title": "8. defining-prompts",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "prompts-in-the-client",
        "title": "9. prompts-in-the-client",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "final-assessment-on-mcp",
        "title": "10. final-assessment-on-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "mcp-review",
        "title": "11. mcp-review",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "badge",
        "title": "12. badge",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
            "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>现在我们的 MCP 服务器已经能工作了，是时候构建客户端这边了。客户端是让应用代码与 MCP 服务器通信、访问其功能的桥梁。</p>"
      },
      {
        "id": "sec-1",
        "title": "理解客户端架构",
        "contentHtml": "<p>在大多数真实项目中，你要么实现 MCP 客户端，要么实现 MCP 服务器——而不是两者都做。我们在这个项目里两者都构建，只是为了让你看到它们如何协同工作。</p><p>MCP 客户端由两个主要组件组成：</p><ul><li><strong>MCP Client</strong>——我们创建的自定义类，让使用会话更简单</li><li><strong>Client Session</strong>——与服务器的实际连接（属于 MCP Python SDK）</li></ul><p>客户端会话需要仔细的资源管理——完成后我们需要妥善清理连接。这就是为什么我们把它包装在自己的类里，让它自动处理所有清理工作。</p>"
      },
      {
        "id": "sec-2",
        "title": "客户端如何融入应用",
        "contentHtml": "<p>还记得我们的应用流程图吗？客户端让我们的代码在两个关键点与 MCP 服务器交互：</p><p>我们的 CLI 代码使用客户端：</p><ul><li>获取可用工具列表，发送给 Claude</li><li>当 Claude 请求时执行工具</li></ul>"
      },
      {
        "id": "sec-3",
        "title": "实现核心客户端函数",
        "contentHtml": "<p>我们需要实现两个基本函数：<code>list_tools()</code> 和 <code>call_tool()</code>。</p><h3>列示工具函数</h3><p>这个函数从 MCP 服务器获取所有可用工具：</p><pre><code>async def list_tools(self) -> list[types.Tool]:\n    result = await self.session().list_tools()\n    return result.tools</code></pre><p>它很直接——我们访问会话（与服务器的连接），调用内置的 <code>list_tools()</code> 方法，并从结果中返回工具。</p><h3>调用工具函数</h3><p>这个函数在服务器上执行特定工具：</p><pre><code>async def call_tool(\n    self, tool_name: str, tool_input: dict\n) -> types.CallToolResult | None:\n    return await self.session().call_tool(tool_name, tool_input)</code></pre><p>我们把工具名称和输入参数（由 Claude 提供）传给服务器，并返回结果。</p>"
      },
      {
        "id": "sec-4",
        "title": "测试客户端",
        "contentHtml": "<p>客户端文件底部有一个简单的测试框架。你可以直接运行它来验证一切正常：</p><pre><code>uv run mcp_client.py</code></pre><p>这会连接到你的 MCP 服务器并打印可用工具。你应该看到展示工具定义的输出，包括描述与输入 schema。</p>"
      },
      {
        "id": "sec-5",
        "title": "整合起来",
        "contentHtml": "<p>客户端函数实现后，你可以运行主应用来测试完整流程：</p><pre><code>uv run main.py</code></pre><p>试着问：「What is the contents of the report.pdf document?」</p><p>后台发生的事情：</p><ul><li>你的应用用客户端获取可用工具</li><li>这些工具连同你的问题一起发送给 Claude</li><li>Claude 决定使用 <code>read_doc_contents</code> 工具</li><li>你的应用用客户端执行那个工具</li><li>结果返回给 Claude，Claude 再回复你</li></ul><p>客户端充当应用逻辑与 MCP 服务器功能之间的桥梁，让你轻松把强大的工具集成进 AI 工作流。</p>"
      }
    ]
  },
  "defining-resources": {
    "lessonId": "defining-resources",
    "lessonTitle": "定义资源",
    "lessonIndex": 5,
    "totalLessons": 12,
    "duration": "8 分钟",
                "outcomes": [
        "解释资源与工具的区别"
,
        "用 mcp.resource 装饰器定义直接与模板资源"
,
        "用 MIME 类型与 Inspector 测试资源"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "introducing-mcp",
        "title": "1. introducing-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "mcp-clients",
        "title": "2. mcp-clients",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "defining-tools-with-mcp",
        "title": "3. defining-tools-with-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "the-server-inspector",
        "title": "4. the-server-inspector",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "implementing-a-client",
        "title": "5. implementing-a-client",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "defining-resources",
        "title": "6. defining-resources",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "accessing-resources",
        "title": "7. accessing-resources",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "defining-prompts",
        "title": "8. defining-prompts",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "prompts-in-the-client",
        "title": "9. prompts-in-the-client",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "final-assessment-on-mcp",
        "title": "10. final-assessment-on-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "mcp-review",
        "title": "11. mcp-review",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "badge",
        "title": "12. badge",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
            "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>MCP 服务器中的资源（Resources）让你把数据暴露给客户端，类似于典型 HTTP 服务器中的 GET 请求处理器。它们非常适合需要获取信息而不是执行操作的场景。</p>"
      },
      {
        "id": "sec-1",
        "title": "通过示例理解资源",
        "contentHtml": "<p>假设你想构建一个文档提及（mention）功能，用户输入 <code>@document_name</code> 来引用文件。这需要两个操作：</p><ul><li>获取所有可用文档的列表（用于自动补全）</li><li>获取特定文档的内容（当被提及时）</li></ul><p>当用户提及一个文档时，你的系统会自动把文档内容注入到发送给 Claude 的提示词中，无需 Claude 使用工具去获取信息。</p>"
      },
      {
        "id": "sec-2",
        "title": "资源如何工作",
        "contentHtml": "<p>资源遵循请求-响应模式。当客户端需要数据时，发送一个带 URI 的 <code>ReadResourceRequest</code> 来标识它想要哪个资源。MCP 服务器处理这个请求，并在 <code>ReadResourceResult</code> 中返回数据。</p><p>流程如下：你的代码向 MCP 客户端请求资源，客户端把请求转发给 MCP 服务器。服务器处理 URI、运行适当的函数、并返回结果。</p>"
      },
      {
        "id": "sec-3",
        "title": "资源类型",
        "contentHtml": "<p>资源有两种类型：</p><h3>直接资源（Direct Resources）</h3><p>直接资源拥有永不变的静态 URI。它们非常适合不需要参数的操作。</p><pre><code>@mcp.resource(\n    \"docs://documents\",\n    mime_type=\"application/json\"\n)\ndef list_docs() -> list[str]:\n    return list(docs.keys())</code></pre><h3>模板资源（Templated Resources）</h3><p>模板资源在 URI 中包含参数。Python SDK 会自动解析这些参数，并把它们作为关键字参数传给函数。</p><pre><code>@mcp.resource(\n    \"docs://documents/{doc_id}\",\n    mime_type=\"text/plain\"\n)\ndef fetch_doc(doc_id: str) -> str:\n    if doc_id not in docs:\n        raise ValueError(f\"Doc with id {doc_id} not found\")\n    return docs[doc_id]</code></pre>"
      },
      {
        "id": "sec-4",
        "title": "实现细节",
        "contentHtml": "<p>资源可以返回任何类型的数据——字符串、JSON、二进制数据等。使用 <code>mime_type</code> 参数给客户端一个关于返回数据类型的提示：</p><ul><li><code>\"application/json\"</code> 用于结构化数据</li><li><code>\"text/plain\"</code> 用于纯文本</li><li><code>\"application/pdf\"</code> 用于二进制文件</li></ul><p>MCP Python SDK 会自动序列化你的返回值。你不需要手动把对象转换成 JSON 字符串——直接返回数据结构，让 SDK 处理序列化。</p>"
      },
      {
        "id": "sec-5",
        "title": "测试你的资源",
        "contentHtml": "<p>你可以使用 MCP Inspector 测试资源。启动你的服务器：</p><pre><code>uv run mcp dev mcp_server.py</code></pre><p>然后在浏览器中连接检查器。你会看到两个区块：</p><ul><li><strong>Resources</strong>——列出你的直接/静态资源</li><li><strong>Resource Templates</strong>——列出你的模板资源</li></ul><p>点击任何资源即可测试。对模板资源，你需要为参数提供值。检查器会显示你的客户端将收到的确切响应结构，包括 MIME 类型与序列化数据。</p><p>资源提供了一种干净的方式，从 MCP 服务器暴露只读数据，让客户端无需工具调用的复杂度就能获取信息。</p>"
      }
    ]
  },
  "accessing-resources": {
    "lessonId": "accessing-resources",
    "lessonTitle": "访问资源",
    "lessonIndex": 6,
    "totalLessons": 12,
    "duration": "7 分钟",
                "outcomes": [
        "在客户端实现 read_resource 函数"
,
        "按 MIME 类型处理文本与 JSON 内容"
,
        "通过 CLI 的 @ 提及体验资源自动注入"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "introducing-mcp",
        "title": "1. introducing-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "mcp-clients",
        "title": "2. mcp-clients",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "defining-tools-with-mcp",
        "title": "3. defining-tools-with-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "the-server-inspector",
        "title": "4. the-server-inspector",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "implementing-a-client",
        "title": "5. implementing-a-client",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "defining-resources",
        "title": "6. defining-resources",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "accessing-resources",
        "title": "7. accessing-resources",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "defining-prompts",
        "title": "8. defining-prompts",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "prompts-in-the-client",
        "title": "9. prompts-in-the-client",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "final-assessment-on-mcp",
        "title": "10. final-assessment-on-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "mcp-review",
        "title": "11. mcp-review",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "badge",
        "title": "12. badge",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
            "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>MCP 中的资源让你的服务器暴露可以直接包含在提示词中的信息，而不是要求通过工具调用访问数据。这为 AI 模型提供上下文创造了更高效的方式。</p><p>当用户输入类似「What's in the @...」的内容时，我们的代码会识别这是资源请求，向 MCP 服务器发送 <code>ReadResourceRequest</code>，并收到带实际内容的 <code>ReadResourceResult</code>。</p>"
      },
      {
        "id": "sec-1",
        "title": "实现资源读取",
        "contentHtml": "<p>要启用客户端中的资源访问，你需要实现一个 <code>read_resource</code> 函数。首先添加必要的导入：</p><pre><code>import json\nfrom pydantic import AnyUrl</code></pre><p>核心函数向 MCP 服务器发起请求，并根据响应的 MIME 类型处理：</p><pre><code>async def read_resource(self, uri: str) -> Any:\n    result = await self.session().read_resource(AnyUrl(uri))\n    resource = result.contents[0]\n    if isinstance(resource, types.TextResourceContents):\n        if resource.mimeType == \"application/json\":\n            return json.loads(resource.text)\n    return resource.text</code></pre>"
      },
      {
        "id": "sec-2",
        "title": "理解响应结构",
        "contentHtml": "<p>当你请求一个资源时，服务器返回一个带 <code>contents</code> 列表的结果。我们访问第一个元素，因为通常一次只需要一个资源。响应包括：</p><ul><li>实际内容（文本或数据）</li><li>告诉我们如何解析内容的 MIME 类型</li><li>关于资源的其他元数据</li></ul>"
      },
      {
        "id": "sec-3",
        "title": "内容类型处理",
        "contentHtml": "<p>函数检查 MIME 类型来决定如何处理内容：</p><ul><li>如果是 <code>application/json</code>，把文本解析为 JSON 并返回解析后的对象</li><li>否则，返回原始文本内容</li></ul><p>这种方法同时无缝处理结构化数据（如 JSON）与纯文本文档。</p>"
      },
      {
        "id": "sec-4",
        "title": "测试资源访问",
        "contentHtml": "<p>实现后，你可以通过 CLI 应用测试资源功能。当你输入「@」后跟资源名时，系统会：</p><ul><li>在自动补全列表中显示可用资源</li><li>让你用方向键和空格选择资源</li><li>把资源内容直接包含进你的提示词</li><li>把所有内容发送给 AI 模型，无需额外的工具调用</li></ul><p>与让 AI 模型单独调用工具来访问文档内容相比，这创造了更流畅的用户体验。资源内容成为初始上下文的一部分，让模型能立即就数据做出回应。</p>"
      }
    ]
  },
  "defining-prompts": {
    "lessonId": "defining-prompts",
    "lessonTitle": "定义提示",
    "lessonIndex": 7,
    "totalLessons": 12,
    "duration": "5 分钟",
                "outcomes": [
        "解释提示词为何比用户自写指令更优"
,
        "用 mcp.prompt 装饰器定义参数化提示词"
,
        "用 Inspector 验证提示词模板与变量插值"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "introducing-mcp",
        "title": "1. introducing-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "mcp-clients",
        "title": "2. mcp-clients",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "defining-tools-with-mcp",
        "title": "3. defining-tools-with-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "the-server-inspector",
        "title": "4. the-server-inspector",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "implementing-a-client",
        "title": "5. implementing-a-client",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "defining-resources",
        "title": "6. defining-resources",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "accessing-resources",
        "title": "7. accessing-resources",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "defining-prompts",
        "title": "8. defining-prompts",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "prompts-in-the-client",
        "title": "9. prompts-in-the-client",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "final-assessment-on-mcp",
        "title": "10. final-assessment-on-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "mcp-review",
        "title": "11. mcp-review",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "badge",
        "title": "12. badge",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
            "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>MCP 服务器中的提示词（Prompts）让你定义预先构建好的高质量指令，客户端可以直接使用，而不必自己从头写提示词。可以把它们看作精心设计的模板——比用户自己临场发挥的效果更好。</p>"
      },
      {
        "id": "sec-1",
        "title": "为什么使用提示词",
        "contentHtml": "<p>关键洞察是：用户已经可以直接让 Claude 完成大多数任务。例如，用户输入「把 report.pdf 用 markdown 重新格式化」也能得到不错的结果。但如果由你提供一个经过充分测试、处理了边界情况并遵循最佳实践的专业提示词，他们会得到好得多的结果。</p><p>作为 MCP 服务器作者，你可以花时间打磨、测试和评估在不同场景下都稳定有效的提示词。用户从这些专业经验中受益，而不必自己成为提示工程专家。</p>"
      },
      {
        "id": "sec-2",
        "title": "构建格式化命令",
        "contentHtml": "<p>让我们实现一个实用示例：把文档转换为 markdown 的 format 命令。用户输入 <code>/format doc_id</code>，就能得到文档的专业 markdown 版本。</p><p>工作流如下：</p><ul><li>用户输入 <code>/</code> 查看可用命令</li><li>选择 <code>format</code> 并指定文档 ID</li><li>Claude 使用你预先构建的提示词读取并重新格式化文档</li><li>结果是带正确标题、列表与格式的干净 markdown</li></ul>"
      },
      {
        "id": "sec-3",
        "title": "定义提示词",
        "contentHtml": "<p>提示词使用与工具、资源类似的装饰器模式：</p><pre><code>@mcp.prompt(\n    name=\"format\",\n    description=\"Rewrites the contents of the document in Markdown format.\"\n)\ndef format_document(\n    doc_id: str = Field(description=\"Id of the document to format\")\n) -> list[base.Message]:\n    prompt = f\"\"\"\nYour goal is to reformat a document to be written with markdown syntax.\nThe id of the document you need to reformat is:\n<document_id>\n{doc_id}\n</document_id>\nAdd in headers, bullet points, tables, etc as necessary. Feel free to add in structure.\nUse the 'edit_document' tool to edit the document. After the document has been reformatted...\n\"\"\"\n    return [\n        base.UserMessage(prompt)\n    ]</code></pre><p>函数返回一个直接发送给 Claude 的消息列表。你可以包含多个用户与助手消息，创建更复杂的对话流程。</p>"
      },
      {
        "id": "sec-4",
        "title": "测试你的提示词",
        "contentHtml": "<p>部署前使用 MCP Inspector 测试你的提示词：</p><p>检查器会精确显示将发送给 Claude 的消息，包括变量如何被插入到提示词模板中。这让你在用户开始依赖它之前，验证提示词看起来是否正确。</p>"
      },
      {
        "id": "sec-5",
        "title": "关键优势",
        "contentHtml": "<ul><li><strong>一致性</strong>——用户每次都能得到可靠的结果</li><li><strong>专业性</strong>——你可以把领域知识编码进提示词</li><li><strong>可复用性</strong>——多个客户端应用可以使用同一个提示词</li><li><strong>可维护性</strong>——在一处更新提示词即可改进所有客户端</li></ul><p>提示词在你的 MCP 服务器领域专属时效果最好。文档管理服务器可能有格式化、总结或分析文档的提示词；数据分析服务器可能有生成报告或可视化的提示词。</p><p>目标是提供如此精心设计与测试的提示词，让用户更愿意使用它们，而不是自己从零写指令。</p>"
      }
    ]
  },
  "prompts-in-the-client": {
    "lessonId": "prompts-in-the-client",
    "lessonTitle": "客户端有提示",
    "lessonIndex": 8,
    "totalLessons": 12,
    "duration": "7 分钟",
                "outcomes": [
        "实现 list_prompts 与 get_prompt 客户端方法"
,
        "理解变量如何插入提示词模板"
,
        "通过 CLI 的斜杠命令测试提示词"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "introducing-mcp",
        "title": "1. introducing-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "mcp-clients",
        "title": "2. mcp-clients",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "defining-tools-with-mcp",
        "title": "3. defining-tools-with-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "the-server-inspector",
        "title": "4. the-server-inspector",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "implementing-a-client",
        "title": "5. implementing-a-client",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "defining-resources",
        "title": "6. defining-resources",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "accessing-resources",
        "title": "7. accessing-resources",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "defining-prompts",
        "title": "8. defining-prompts",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "prompts-in-the-client",
        "title": "9. prompts-in-the-client",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "final-assessment-on-mcp",
        "title": "10. final-assessment-on-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "mcp-review",
        "title": "11. mcp-review",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "badge",
        "title": "12. badge",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
            "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>构建 MCP 客户端的最后一步是实现提示词功能。这让我们能列出服务器所有可用提示词，并获取填入了变量的特定提示词。</p>"
      },
      {
        "id": "sec-1",
        "title": "实现列示提示词",
        "contentHtml": "<p><code>list_prompts</code> 方法很直接。它调用会话的列表提示词函数并返回：</p><pre><code>async def list_prompts(self) -> list[types.Prompt]:\n    result = await self.session().list_prompts()\n    return result.prompts</code></pre>"
      },
      {
        "id": "sec-2",
        "title": "获取单个提示词",
        "contentHtml": "<p><code>get_prompt</code> 方法更有意思，因为它处理变量插值。当你请求一个提示词时，提供的参数会作为关键字参数传给提示词函数：</p><pre><code>async def get_prompt(self, prompt_name, args: dict[str, str]):\n    result = await self.session().get_prompt(prompt_name, args)\n    return result.messages</code></pre><p>例如，如果你的服务器有一个期望 <code>doc_id</code> 参数的 <code>format_document</code> 提示词，参数字典会包含 <code>{\"doc_id\": \"plan.md\"}</code>。这个值会被插入到提示词模板中。</p>"
      },
      {
        "id": "sec-3",
        "title": "实际操作中测试提示词",
        "contentHtml": "<p>实现后，你可以通过 CLI 测试提示词。输入斜杠（<code>/</code>），可用提示词会以命令形式出现。选择「format」之类的提示词后，会提示你从可用文档中选择。</p><p>选择文档后，系统把完整提示词发送给 Claude。AI 同时收到格式化指令与文档 ID，然后使用可用工具获取并处理内容。</p>"
      },
      {
        "id": "sec-4",
        "title": "提示词如何工作",
        "contentHtml": "<p>提示词定义了一组客户端可以使用的一组用户与助手消息。它们应该是高质量、经过充分测试、且与你的 MCP 服务器目的相关的。工作流是：</p><ul><li>编写并评估与服务器功能相关的提示词</li><li>用 <code>@mcp.prompt</code> 装饰器在 MCP 服务器中定义提示词</li><li>客户端可以随时请求提示词</li><li>客户端提供的参数成为提示词函数中的关键字参数</li><li>函数返回准备好给 AI 模型的格式化消息</li></ul><p>这个系统创建了可复用、参数化的提示词，在保持一致性同时允许通过变量定制。它对于需要确保 AI 每次都收到结构正确指令的复杂工作流尤其有用。</p>"
      }
    ]
  },
  "final-assessment-on-mcp": {
    "lessonId": "final-assessment-on-mcp",
    "lessonTitle": "MCP 最终评估",
    "lessonIndex": 9,
    "totalLessons": 12,
    "duration": "5 分钟",
                "outcomes": [
        "通过期末测验，检验对 MCP 核心概念的掌握"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "introducing-mcp",
        "title": "1. introducing-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "mcp-clients",
        "title": "2. mcp-clients",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "defining-tools-with-mcp",
        "title": "3. defining-tools-with-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "the-server-inspector",
        "title": "4. the-server-inspector",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "implementing-a-client",
        "title": "5. implementing-a-client",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "defining-resources",
        "title": "6. defining-resources",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "accessing-resources",
        "title": "7. accessing-resources",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "defining-prompts",
        "title": "8. defining-prompts",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "prompts-in-the-client",
        "title": "9. prompts-in-the-client",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "final-assessment-on-mcp",
        "title": "10. final-assessment-on-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "mcp-review",
        "title": "11. mcp-review",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "badge",
        "title": "12. badge",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
            "sections": [
      {
        "id": "sec-0",
        "title": "知识自测",
        "contentHtml": "<p>通过以下问题检验你对 MCP 核心概念的掌握。</p>"
,
        "quiz": {
          "id": "quiz-1",
          "title": "知识自测",
          "options": [
            { "id": "a", "text": "把工具定义与执行从你的服务器转移到专门的 MCP 服务器", "isCorrect": true, "explanation": "MCP 把工具定义与执行的负担从你的服务器转移到专门的 MCP 服务器。" },
            { "id": "b", "text": "让 Claude 直接访问所有外部 API", "isCorrect": false, "explanation": "MCP 是通信层，不是直接 API 访问。" },
            { "id": "c", "text": "取代 Claude 本身", "isCorrect": false, "explanation": "MCP 是给 Claude 提供上下文与工具的协议。" }
          ],
          "generalExplanation": "MCP 是一个通信层，把工具定义与执行负担从你的服务器转移到专门的 MCP 服务器。"
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
            { "id": "a", "text": "工具由模型控制，资源由应用控制，提示词由用户控制", "isCorrect": true, "explanation": "工具服务于模型，资源服务于应用，提示词服务于用户。" },
            { "id": "b", "text": "三者都由 Claude 控制", "isCorrect": false, "explanation": "只有工具由模型控制。" },
            { "id": "c", "text": "三者都由应用代码控制", "isCorrect": false, "explanation": "资源由应用控制，但工具与提示词不是。" }
          ],
          "generalExplanation": "三种原语分别由模型、应用与用户控制。"
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
            { "id": "a", "text": "ReadResourceRequest / ReadResourceResult", "isCorrect": true, "explanation": "资源遵循请求-响应模式，用 URI 标识资源。" },
            { "id": "b", "text": "CallToolRequest / CallToolResult", "isCorrect": false, "explanation": "这是工具调用的消息类型。" },
            { "id": "c", "text": "Initialize Request / Initialize Result", "isCorrect": false, "explanation": "这是连接握手消息。" }
          ],
          "generalExplanation": "资源通过 ReadResourceRequest/Result 按 URI 请求数据。"
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
            { "id": "a", "text": "mcp dev 启动内置的浏览器检查器", "isCorrect": true, "explanation": "mcp dev 启动开发服务器并给出本地 URL，浏览器打开即 MCP Inspector。" },
            { "id": "b", "text": "mcp test 启动测试套件", "isCorrect": false, "explanation": "内置工具是 mcp dev 启动的浏览器检查器。" },
            { "id": "c", "text": "mcp run 直接运行生产服务器", "isCorrect": false, "explanation": "这是开发调试工具，不是生产运行。" }
          ],
          "generalExplanation": "MCP Inspector 是 SDK 内置的浏览器调试工具。"
        }
      }
    ]
  },
  "mcp-review": {
    "lessonId": "mcp-review",
    "lessonTitle": "MCP 审查",
    "lessonIndex": 10,
    "totalLessons": 12,
    "duration": "2 分钟",
                "outcomes": [
        "区分三种 MCP 原语由谁控制"
,
        "按用例选择工具、资源或提示词"
,
        "在 Claude 官方界面中识别三种原语的实际应用"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "introducing-mcp",
        "title": "1. introducing-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "mcp-clients",
        "title": "2. mcp-clients",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "defining-tools-with-mcp",
        "title": "3. defining-tools-with-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "the-server-inspector",
        "title": "4. the-server-inspector",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "implementing-a-client",
        "title": "5. implementing-a-client",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "defining-resources",
        "title": "6. defining-resources",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "accessing-resources",
        "title": "7. accessing-resources",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "defining-prompts",
        "title": "8. defining-prompts",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "prompts-in-the-client",
        "title": "9. prompts-in-the-client",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "final-assessment-on-mcp",
        "title": "10. final-assessment-on-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "mcp-review",
        "title": "11. mcp-review",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "badge",
        "title": "12. badge",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
            "sections": [
      {
        "id": "sec-0",
        "title": "",
        "contentHtml": "<p>现在我们已经构建了 MCP 服务器，让我们回顾三种核心服务器原语（primitives），并理解何时使用每一种。关键洞察是：每种原语由你应用技术栈的不同部分控制。</p>"
      },
      {
        "id": "sec-1",
        "title": "工具：模型控制",
        "contentHtml": "<p>工具完全由 Claude 控制。AI 模型决定何时调用这些函数，结果由 Claude 直接用于完成任务。</p><p>工具非常适合给 Claude 提供它能自主使用的额外能力。当你让 Claude「用 JavaScript 计算 3 的平方根」时，是 Claude 决定使用 JavaScript 执行工具来运行计算。</p>"
      },
      {
        "id": "sec-2",
        "title": "资源：应用控制",
        "contentHtml": "<p>资源由你的应用代码控制。你的应用决定何时获取资源数据以及如何使用——通常用于 UI 元素或为对话添加上下文。</p><p>在我们的项目中，资源有两种用法：</p><ul><li>获取数据填充 UI 中的自动补全选项</li><li>检索内容为提示词增加上下文</li></ul><p>想想 Claude 界面中的「Add from Google Drive」功能——应用代码决定显示哪些文档，并处理把内容注入聊天上下文。</p>"
      },
      {
        "id": "sec-3",
        "title": "提示词：用户控制",
        "contentHtml": "<p>提示词由用户操作触发。用户通过按钮点击、菜单选择或斜杠命令等 UI 交互决定何时运行这些预定义工作流。</p><p>提示词非常适合实现用户可以按需触发的工作流。在 Claude 界面中，聊天输入框下方的那些工作流按钮就是提示词的例子——预先定义、优化过的工作流，用户一键即可启动。</p>"
      },
      {
        "id": "sec-4",
        "title": "如何选择",
        "contentHtml": "<p>以下是快速决策指南：</p><ul><li>需要给 Claude 新能力？<strong>使用工具</strong></li><li>需要把数据拿到应用里用于 UI 或上下文？<strong>使用资源</strong></li><li>想为用户创建预定义工作流？<strong>使用提示词</strong></li></ul><p>你可以在 Claude 官方界面中看到三种原语的实际运作：工作流按钮展示提示词，Google Drive 集成展示资源，而当 Claude 执行代码或进行计算时，幕后使用的是工具。</p><p>这些是帮助你为具体用例选择正确原语的高层指南。每一种服务于你应用技术栈的不同部分——工具服务于模型，资源服务于应用，提示词服务于用户。</p>"
      }
    ]
  },
  "badge": {
    "lessonId": "badge",
    "lessonTitle": "完成徽章",
    "lessonIndex": 11,
    "totalLessons": 12,
    "duration": "2 分钟",
                "outcomes": [
        "获得 MCP 入门课程的结业徽章"
      ],
    "roadmap": [
      {
        "id": "1",
        "slug": "introducing-mcp",
        "title": "1. introducing-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "2",
        "slug": "mcp-clients",
        "title": "2. mcp-clients",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "3",
        "slug": "defining-tools-with-mcp",
        "title": "3. defining-tools-with-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "4",
        "slug": "the-server-inspector",
        "title": "4. the-server-inspector",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "5",
        "slug": "implementing-a-client",
        "title": "5. implementing-a-client",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "6",
        "slug": "defining-resources",
        "title": "6. defining-resources",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "7",
        "slug": "accessing-resources",
        "title": "7. accessing-resources",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "8",
        "slug": "defining-prompts",
        "title": "8. defining-prompts",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "9",
        "slug": "prompts-in-the-client",
        "title": "9. prompts-in-the-client",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "10",
        "slug": "final-assessment-on-mcp",
        "title": "10. final-assessment-on-mcp",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "11",
        "slug": "mcp-review",
        "title": "11. mcp-review",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      },
      {
        "id": "12",
        "slug": "badge",
        "title": "12. badge",
        "subtitle": "完整官方课时图文讲义",
        "duration": "8 min"
      }
    ],
            "sections": [
      {
        "id": "sec-0",
        "title": "课程完成",
        "contentHtml": "<p>恭喜你完成了「MCP 模型上下文协议入门」课程！</p><p>在这门课中，你学会了：</p><ul><li>MCP 是什么，以及它如何把工具定义与执行的负担从你的服务器转移到专门的 MCP 服务器</li><li>MCP 客户端如何充当通信桥梁，以及用户查询如何流过完整链路</li><li>如何用 Python SDK 与装饰器定义工具、资源与提示词三种核心原语</li><li>如何用内置的 MCP Inspector 调试和测试你的服务器</li><li>如何实现客户端端的工具调用、资源读取与提示词获取</li><li>工具（模型控制）、资源（应用控制）与提示词（用户控制）各自的分工与选择</li></ul><p>接下来建议：</p><ul><li>动手用 <code>FastMCP</code> 构建你自己的第一个 MCP 服务器，并用 Inspector 测试</li><li>把 MCP 服务器接入 Claude Code，体验工具带来的能力扩展</li><li>进一步学习「MCP 高级主题」课程，深入了解 sampling、通知、roots 与不同传输方式</li></ul><p>祝你在模型上下文协议的探索中收获满满！</p>"
      }
    ]
  }
};
