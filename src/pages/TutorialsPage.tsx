import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ALL_TUTORIALS, Tutorial } from '../data/tutorials';
import { Video, ArrowRight, Clock, ExternalLink, BookOpen } from 'lucide-react';

const TRACKS = [
  { id: 'all', label: '全部教程' },
  { id: 'ai-fluency', label: 'AI 通识' },
  { id: 'products', label: 'Claude 产品' },
  { id: 'developer', label: '开发者' }
] as const;

const TutorialCard: React.FC<{ t: Tutorial }> = ({ t }) => (
  <Link
    to={`/tutorials/${t.slug}`}
    className="group flex flex-col p-6 rounded-2xl bg-surface-1 border border-border hover:border-brand-clay/50 hover:shadow-md transition-all"
  >
    <div className="flex items-center justify-between gap-2 mb-3">
      <span className="px-2.5 py-1 rounded-md bg-brand-clay/10 text-brand-clay text-[11px] font-medium">
        {t.category}
      </span>
      {t.youtubeUrl && (
        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-rose-600 dark:text-rose-400">
          <Video className="w-3.5 h-3.5" />
          视频
        </span>
      )}
    </div>
    <h3 className="font-serif text-lg font-medium text-primary group-hover:text-brand-clay transition-colors leading-snug">
      {t.titleZh}
    </h3>
    <p className="text-xs text-muted mt-1 line-clamp-1">{t.titleEn}</p>
    <p className="text-sm text-secondary mt-3 line-clamp-2 leading-relaxed flex-1">
      {t.descriptionZh}
    </p>
    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
      <span className="inline-flex items-center gap-1 text-[11px] text-secondary">
        <Clock className="w-3.5 h-3.5" />
        {t.durationMin ? `${t.durationMin} 分钟` : '参考'}
      </span>
      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-brand-clay">
        查看教程
        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
      </span>
    </div>
  </Link>
);

export const TutorialsPage: React.FC = () => {
  const [track, setTrack] = useState<string>('all');
  const filtered = track === 'all' ? ALL_TUTORIALS : ALL_TUTORIALS.filter(t => t.track === track);
  const videoCount = ALL_TUTORIALS.filter(t => t.youtubeUrl).length;

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-6 py-12 space-y-10">
      <Link to="/" className="inline-flex items-center gap-2 text-xs text-secondary hover:text-primary transition-colors">
        <ArrowRight className="w-4 h-4 rotate-180" />
        <span>返回首页</span>
      </Link>

      {/* Hero */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-clay/10 text-brand-clay text-xs font-semibold uppercase">
          <BookOpen className="w-3.5 h-3.5" />
          <span>独立教程 (Tutorials)</span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-primary">
          轻量级教程与速查
        </h1>
        <p className="text-secondary text-base md:text-lg leading-relaxed">
          原站独立的短篇教程合集，覆盖 AI 素养概念速览、各产品实操技巧与最佳实践。共 {ALL_TUTORIALS.length} 篇，其中 {videoCount} 篇附带原站 YouTube 视频链接。
        </p>
      </div>

      {/* Track filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-border">
        {TRACKS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setTrack(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
              track === tab.id
                ? 'bg-primary text-surface-0 shadow-xs'
                : 'bg-surface-1 hover:bg-surface-2 text-secondary hover:text-primary border border-border'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(t => (
          <TutorialCard key={t.slug} t={t} />
        ))}
      </div>
    </div>
  );
};
