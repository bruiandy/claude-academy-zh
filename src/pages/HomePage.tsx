import React from 'react';
import { Link } from 'react-router-dom';
import { ALL_COURSES } from '../data/courses';
import { ALL_TUTORIALS } from '../data/tutorials';
import { ALL_USE_CASES } from '../data/useCases';
import { CourseCard } from '../components/CourseCard';
import {
  MessageSquare,
  Laptop,
  Terminal,
  Tag,
  Layers,
  ArrowRight,
  Compass,
  Sparkles,
  Cpu,
  Video,
  ExternalLink,
  BookOpen
} from 'lucide-react';

export const HomePage: React.FC = () => {
  // 核心通识推荐课程
  const fluencyCourses = ALL_COURSES.filter(c => ['ai-fluency-framework-foundations', 'ai-capabilities-and-limitations'].includes(c.id));
  
  // 核心开发者推荐课程
  const devCourses = ALL_COURSES.filter(c => ['claude-code-101', 'introduction-to-model-context-protocol', 'building-with-the-claude-api'].includes(c.id));

  // 数据条统计
  const totalLessons = ALL_COURSES.reduce((sum, c) => sum + c.lessonsCount, 0);

  return (
    <div className="space-y-20 pb-20">
      {/* 1. Hero Section */}
      <section className="w-full bg-[#FBF7F4] dark:bg-[#1A1614] border-b border-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col items-center text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-clay/10 text-brand-clay text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Claude 官方课程 · 中文版</span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl font-medium tracking-tight text-primary max-w-3xl leading-tight">
            Claude 学堂
          </h1>

          <p className="text-secondary text-base md:text-xl max-w-2xl leading-relaxed">
            Claude 使用手册及 AI 学习方法 —— Anthropic 官方 Academy 中文版
          </p>

          {/* 数据条：一眼看到内容体量 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 pt-2 w-full max-w-3xl">
            <div className="rounded-2xl bg-surface-1 border border-border px-4 py-4">
              <div className="text-2xl md:text-3xl font-serif font-medium text-primary">{ALL_COURSES.length} 门</div>
              <div className="text-xs text-secondary mt-1">系统课程</div>
            </div>
            <div className="rounded-2xl bg-surface-1 border border-border px-4 py-4">
              <div className="text-2xl md:text-3xl font-serif font-medium text-primary">{totalLessons} 节</div>
              <div className="text-xs text-secondary mt-1">课时</div>
            </div>
            <div className="rounded-2xl bg-surface-1 border border-border px-4 py-4">
              <div className="text-2xl md:text-3xl font-serif font-medium text-primary">{ALL_TUTORIALS.length} 篇</div>
              <div className="text-xs text-secondary mt-1">速查教程</div>
            </div>
            <div className="rounded-2xl bg-surface-1 border border-border px-4 py-4">
              <div className="text-2xl md:text-3xl font-serif font-medium text-primary">{ALL_USE_CASES.length} 个</div>
              <div className="text-xs text-secondary mt-1">实战案例</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/courses/claude-101"
              className="px-6 py-3 rounded-xl bg-primary text-surface-0 font-medium text-sm hover:opacity-90 transition-all shadow-sm"
            >
              从 Claude 101 开始学习
            </Link>
            <Link
              to="/all"
              className="px-6 py-3 rounded-xl bg-surface-1 hover:bg-surface-2 border border-border text-primary font-medium text-sm transition-all"
            >
              浏览全部课程与资源
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Claude Products Hub (5 大产品矩阵，1:1 对齐原站) */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-clay block mb-1">
              产品工具链矩阵
            </span>
            <h2 className="font-serif text-3xl font-medium text-primary">
              学习 Claude 官方全系产品 (Learn the Claude products)
            </h2>
          </div>
          <Link
            to="/products/claude-ai"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-clay hover:underline"
          >
            <span>查看产品专题总览</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 5 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {/* Claude.ai */}
          <Link
            to="/products/claude-ai"
            className="p-6 rounded-2xl bg-surface-1 border border-border hover:border-brand-clay/50 hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-primary group-hover:text-brand-clay transition-colors">
                Claude.ai
              </h3>
              <p className="text-xs text-secondary leading-relaxed line-clamp-3">
                在对话中深度思考、起草复杂文档与多源数据分析。
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-[11px] font-medium text-brand-clay">
              <span>探索指南</span>
              <ArrowRight className="w-3 h-3" />
            </span>
          </Link>

          {/* Claude Cowork */}
          <Link
            to="/products/claude-cowork"
            className="p-6 rounded-2xl bg-surface-1 border border-border hover:border-brand-clay/50 hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-primary group-hover:text-brand-clay transition-colors">
                Claude Cowork
              </h3>
              <p className="text-xs text-secondary leading-relaxed line-clamp-3">
                将整项多步骤任务交由桌面客户端托管，获得完整交付成果。
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-[11px] font-medium text-brand-clay">
              <span>探索指南</span>
              <ArrowRight className="w-3 h-3" />
            </span>
          </Link>

          {/* Claude Code */}
          <Link
            to="/products/claude-code"
            className="p-6 rounded-2xl bg-surface-1 border border-border hover:border-brand-clay/50 hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-primary group-hover:text-brand-clay transition-colors">
                Claude Code
              </h3>
              <p className="text-xs text-secondary leading-relaxed line-clamp-3">
                在终端与 IDE 中自主重构工程代码库、排查 Bug 并提交 Git。
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-[11px] font-medium text-brand-clay">
              <span>探索指南</span>
              <ArrowRight className="w-3 h-3" />
            </span>
          </Link>

          {/* Claude Tag */}
          <Link
            to="/products/claude-tag"
            className="p-6 rounded-2xl bg-surface-1 border border-border hover:border-brand-clay/50 hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center">
                <Tag className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-primary group-hover:text-brand-clay transition-colors">
                Claude Tag
              </h3>
              <p className="text-xs text-secondary leading-relaxed line-clamp-3">
                在团队沟通频道中随时 @Claude，协作分派跨部门任务。
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-[11px] font-medium text-brand-clay">
              <span>探索指南</span>
              <ArrowRight className="w-3 h-3" />
            </span>
          </Link>

          {/* Claude Platform */}
          <Link
            to="/products/claude-platform"
            className="p-6 rounded-2xl bg-surface-1 border border-border hover:border-brand-clay/50 hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-primary group-hover:text-brand-clay transition-colors">
                Claude Platform
              </h3>
              <p className="text-xs text-secondary leading-relaxed line-clamp-3">
                通过 API、控制台与 MCP 协议将智能集成进产品业务中。
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-[11px] font-medium text-brand-clay">
              <span>探索指南</span>
              <ArrowRight className="w-3 h-3" />
            </span>
          </Link>
        </div>
      </section>

      {/* 3. AI Fluency Fundamentals Section (1:1 对齐原站) */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-clay block mb-1">
              AI 通识与协作心法
            </span>
            <h2 className="font-serif text-3xl font-medium text-primary">
              AI Fluency 基础通识 (Learn AI fundamentals)
            </h2>
          </div>
          <Link
            to="/collections/ai-fluency"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-clay hover:underline"
          >
            <span>进入 AI Fluency 专题合集</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fluencyCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}

          {/* Quick Tutorial Card */}
          <div className="p-6 rounded-2xl bg-[#EFEBF4] dark:bg-[#231E2A] border border-border flex flex-col justify-between">
            <div className="space-y-3">
              <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-700 dark:text-purple-300 text-xs font-medium inline-block">
                快速专栏教程 · 7 min
              </span>
              <h3 className="font-serif text-xl font-medium text-primary">
                The 4 Properties of AI (AI 四大特性)
              </h3>
              <p className="text-xs text-secondary leading-relaxed">
                全景梳理 Next Token 预测、预训练知识库、工作记忆（上下文窗口）与可引导性四大底层支柱。
              </p>
            </div>
            <Link
              to="/courses/ai-capabilities-and-limitations/what-we-mean-by-ai"
              className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-brand-clay hover:underline"
            >
              <span>阅读四大特性解析</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Developer & API Section */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-clay block mb-1">
              开发者与架构
            </span>
            <h2 className="font-serif text-3xl font-medium text-primary">
              基于 Claude 架构与开发 (Build with Claude)
            </h2>
          </div>
          <Link
            to="/all"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-clay hover:underline"
          >
            <span>查看所有开发者资源</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {devCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* 4.5 Tutorials & Use Cases Quick Links */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/tutorials"
            className="group p-7 rounded-3xl bg-surface-1 border border-border hover:border-brand-clay/50 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-9 h-9 rounded-xl bg-brand-clay/10 text-brand-clay flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </span>
              <h3 className="font-serif text-xl font-medium text-primary">独立教程 (Tutorials)</h3>
            </div>
            <p className="text-sm text-secondary leading-relaxed mb-4">
              轻量级速查与实操技巧：AI 素养概念、各产品使用秘籍、最佳实践。部分附原站 YouTube 视频链接。
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-clay">
              浏览全部教程
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>

          <Link
            to="/use-cases"
            className="group p-7 rounded-3xl bg-surface-1 border border-border hover:border-brand-clay/50 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-700 dark:text-purple-300 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </span>
              <h3 className="font-serif text-xl font-medium text-primary">实战案例 (Use Cases)</h3>
            </div>
            <p className="text-sm text-secondary leading-relaxed mb-4">
              按销售、市场、产品、数据、教育、财务等职能整理的即用型案例库，覆盖 12+ 业务场景。
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-clay">
              浏览全部案例
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

      {/* 5. Live Webinars / Community */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="p-8 rounded-3xl bg-surface-1 border border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Video className="w-5 h-5 text-brand-clay" />
              <h3 className="font-serif text-xl font-medium text-primary">官方直播回放与网络研讨会 (Webinars)</h3>
            </div>
            <p className="text-xs text-secondary leading-relaxed max-w-xl">
              Anthropic 定期举办关于 Prompt 工程、MCP 实战以及企业落地最佳实践的全球研讨会。
            </p>
          </div>
          <a
            href="https://academy.claude.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-2 hover:bg-surface-0 border border-border text-xs font-medium text-primary transition-all shrink-0"
          >
            <span>在官方原站查看近期 Webinar</span>
            <ExternalLink className="w-3.5 h-3.5 text-brand-clay" />
          </a>
        </div>
      </section>

      {/* 6. 整理者与联系方式 */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="p-8 md:p-10 rounded-3xl bg-surface-1 border border-border grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* 小红书 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-10 h-10 rounded-xl bg-[#FF2442]/10 text-[#FF2442] flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-serif text-xl font-medium text-primary">本站整理者 · 小红书</h3>
                <p className="text-xs text-secondary">Claude 学习笔记与实战方法 · 2291+ 粉丝持续更新</p>
              </div>
            </div>
            <p className="text-sm text-secondary leading-relaxed">
              本站内容由我整理发布。点击下方链接或复制口令即可查看我的小红书主页，获取最新 Claude 学习方法与案例拆解。
            </p>
            <a
              href="https://xhslink.cn/o/2umKzBTSc5L"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF2442] text-white text-sm font-medium hover:opacity-90 transition-all"
            >
              <span>查看小红书主页</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* 微信 */}
          <div className="flex items-center gap-5 md:justify-end">
            <img
              src="/wechat-qr.jpg"
              alt="微信二维码"
              className="w-32 h-32 md:w-40 md:h-40 rounded-xl border border-border object-cover shrink-0"
            />
            <div className="space-y-2 max-w-[220px]">
              <h3 className="font-serif text-lg font-medium text-primary">扫码加我微信</h3>
              <p className="text-xs text-secondary leading-relaxed">
                交流 Claude 使用方法与 AI 学习方法，或对本站内容提出建议。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
