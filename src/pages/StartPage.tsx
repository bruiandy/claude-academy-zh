import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Compass, Terminal, Cpu, ArrowRight } from 'lucide-react';

export const StartPage: React.FC = () => {
  return (
    <div className="min-h-screen max-w-5xl mx-auto px-6 py-12 space-y-12">
      {/* Hero */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-clay/10 text-brand-clay text-xs font-semibold uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>新手学习路径指引 (Getting Started)</span>
        </div>
        <h1 className="font-serif text-3xl md:text-5xl font-medium text-primary">
          从哪里开始你的学习？
        </h1>
        <p className="text-secondary text-base leading-relaxed">
          无论你是初次接触 AI 的业务人员、寻求提效的管理者，还是准备构建生产级 Agent 的工程师，这里都有为你量身定制的起点。
        </p>
      </div>

      {/* Pathways Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {/* Path 1 */}
        <div className="p-6 rounded-2xl bg-surface-1 border border-border flex flex-col justify-between hover:shadow-md transition-all">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#F9ECE5] dark:bg-[#2A211D] flex items-center justify-center text-brand-clay">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-medium text-primary">1. 建立 AI 认知与素养</h3>
            <p className="text-xs text-secondary leading-relaxed">
              适合所有岗位。学习大模型的底层预测本质、4D 人机协作框架（委派、描述、鉴别、尽责）与防范幻觉的方法。
            </p>
          </div>
          <Link
            to="/courses/ai-fluency-framework-foundations"
            className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-brand-clay hover:underline"
          >
            <span>进入《AI Fluency 4D 框架》</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Path 2 */}
        <div className="p-6 rounded-2xl bg-surface-1 border border-border flex flex-col justify-between hover:shadow-md transition-all">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#EBF2EB] dark:bg-[#1C261D] flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-medium text-primary">2. 玩转 Claude 全系产品</h3>
            <p className="text-xs text-secondary leading-relaxed">
              掌握 Claude.ai Web 端对话、Projects 知识库构建、Artifacts 交互工件、Connectors 与桌面端 Cowork 任务托管。
            </p>
          </div>
          <Link
            to="/courses/claude-101"
            className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-brand-clay hover:underline"
          >
            <span>进入《Claude 101 入门精通》</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Path 3 */}
        <div className="p-6 rounded-2xl bg-surface-1 border border-border flex flex-col justify-between hover:shadow-md transition-all">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#EFEBF4] dark:bg-[#231E2A] flex items-center justify-center text-purple-600 dark:text-purple-400">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-medium text-primary">3. 开发者与智能体开发</h3>
            <p className="text-xs text-secondary leading-relaxed">
              学习 Claude Code 命令行编程重构、Model Context Protocol (MCP) 开放协议以及 Claude API 深度全栈开发。
            </p>
          </div>
          <Link
            to="/courses/claude-code-101"
            className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-brand-clay hover:underline"
          >
            <span>进入《Claude Code 智能体编程》</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
