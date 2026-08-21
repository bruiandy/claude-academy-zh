import React from 'react';
import { Sparkle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-border bg-surface-1/50 transition-colors duration-300 py-12">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-lg">
            <div className="flex items-center gap-2">
              <Sparkle className="w-5 h-5 text-brand-clay fill-current" />
              <span className="font-serif text-lg font-medium text-primary">
                Claude Academy 中文社区学习镜像
              </span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              本项目为非官方的中文学习与本地化实践社区，旨在为中文开发者与学习者降低学习门槛。所有课程原始内容、商标与知识产权均归 Anthropic PBC 所有。
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-xs text-secondary">
            <Link to="/start" className="hover:text-primary transition-colors">新手学习路径</Link>
            <Link to="/all" className="hover:text-primary transition-colors">全部课程资源</Link>
            <Link to="/collections/ai-fluency" className="hover:text-primary transition-colors">AI 通识合集</Link>
            <a
              href="https://academy.claude.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-primary transition-colors"
            >
              <span>英文原站 (academy.claude.com)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.anthropic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-primary transition-colors"
            >
              <span>Anthropic 官网</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-secondary">
          <p>© 2026 非官方 Claude Academy 中文学习社区 · 仅供个人交流学习使用</p>
          <p className="font-mono">Built with React, Vite & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};
