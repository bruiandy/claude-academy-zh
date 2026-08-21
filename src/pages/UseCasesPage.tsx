import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ALL_USE_CASES, USE_CASE_CATEGORIES, UseCase } from '../data/useCases';
import { ArrowRight, Clock, ExternalLink, Lightbulb } from 'lucide-react';

const UseCaseCard: React.FC<{ u: UseCase }> = ({ u }) => (
  <Link
    to={`/use-cases/${u.slug}`}
    className="group flex flex-col p-6 rounded-2xl bg-surface-1 border border-border hover:border-brand-clay/50 hover:shadow-md transition-all"
  >
    <div className="flex items-center justify-between gap-2 mb-3">
      <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-700 dark:text-purple-300 text-[11px] font-medium">
        {u.category}
      </span>
    </div>
    <h3 className="font-serif text-lg font-medium text-primary group-hover:text-brand-clay transition-colors leading-snug">
      {u.titleZh}
    </h3>
    <p className="text-xs text-muted mt-1 line-clamp-1">{u.titleEn}</p>
    <p className="text-sm text-secondary mt-3 line-clamp-2 leading-relaxed flex-1">
      {u.descriptionZh}
    </p>
    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
      <span className="inline-flex items-center gap-1 text-[11px] text-secondary">
        <Clock className="w-3.5 h-3.5" />
        {u.durationMin ? `${u.durationMin} 分钟` : '参考'}
      </span>
      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-brand-clay">
        查看案例
        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
      </span>
    </div>
  </Link>
);

export const UseCasesPage: React.FC = () => {
  const [category, setCategory] = useState<string>('all');
  const filtered = category === 'all' ? ALL_USE_CASES : ALL_USE_CASES.filter(u => u.category === category);

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-6 py-12 space-y-10">
      <Link to="/" className="inline-flex items-center gap-2 text-xs text-secondary hover:text-primary transition-colors">
        <ArrowRight className="w-4 h-4 rotate-180" />
        <span>返回首页</span>
      </Link>

      {/* Hero */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-clay/10 text-brand-clay text-xs font-semibold uppercase">
          <Lightbulb className="w-3.5 h-3.5" />
          <span>实战案例 (Use Cases)</span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-primary">
          按角色与场景的实战案例
        </h1>
        <p className="text-secondary text-base md:text-lg leading-relaxed">
          原站按销售、市场、产品、数据、教育、财务、工程、个人等职能整理的即用型案例库。共 {ALL_USE_CASES.length} 个案例，覆盖 12+ 业务场景。
        </p>
      </div>

      {/* Category filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-border">
        <button
          onClick={() => setCategory('all')}
          className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
            category === 'all'
              ? 'bg-primary text-surface-0 shadow-xs'
              : 'bg-surface-1 hover:bg-surface-2 text-secondary hover:text-primary border border-border'
          }`}
        >
          全部案例
        </button>
        {USE_CASE_CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
              category === cat
                ? 'bg-primary text-surface-0 shadow-xs'
                : 'bg-surface-1 hover:bg-surface-2 text-secondary hover:text-primary border border-border'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(u => (
          <UseCaseCard key={u.slug} u={u} />
        ))}
      </div>
    </div>
  );
};
