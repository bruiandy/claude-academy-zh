import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getTutorialBySlug } from '../data/tutorials';
import { VideoPlayerCard } from '../components/VideoPlayerCard';
import { ArrowLeft, Clock, ExternalLink, Video } from 'lucide-react';

export const TutorialPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const tutorial = slug ? getTutorialBySlug(slug) : undefined;

  if (!tutorial) {
    return (
      <div className="min-h-screen max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 className="font-serif text-3xl font-medium text-primary mb-4">未找到该教程</h1>
        <Link to="/tutorials" className="text-brand-clay text-sm hover:underline">返回教程列表</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface-0">
      {/* Breadcrumb */}
      <div className="border-b border-border bg-surface-1/40">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center gap-1.5 text-xs text-secondary">
          <Link to="/tutorials" className="hover:text-primary transition-colors">教程库</Link>
          <span className="text-muted">/</span>
          <span className="text-secondary truncate">{tutorial.titleZh}</span>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <Link to="/tutorials" className="inline-flex items-center gap-2 text-xs text-secondary hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>返回教程列表</span>
        </Link>

        {/* Hero */}
        <header className="space-y-4 border-b border-border pb-8">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-1 rounded-md bg-brand-clay/10 text-brand-clay text-[11px] font-medium">
              {tutorial.category}
            </span>
            {tutorial.youtubeUrl && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-rose-500/10 text-rose-600 dark:text-rose-400 text-[11px] font-medium">
                <Video className="w-3.5 h-3.5" />
                附原站视频
              </span>
            )}
            <span className="inline-flex items-center gap-1 text-[11px] text-secondary">
              <Clock className="w-3.5 h-3.5" />
              {tutorial.durationMin ? `${tutorial.durationMin} 分钟` : '参考'}
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-primary leading-tight">
            {tutorial.titleZh}
          </h1>
          <p className="text-sm text-muted font-mono">{tutorial.titleEn}</p>
        </header>

        {/* Video (if any) */}
        {tutorial.youtubeUrl && (
          <VideoPlayerCard
            title={tutorial.titleZh}
            duration={tutorial.durationMin ? `${tutorial.durationMin} min` : undefined}
            youtubeUrl={tutorial.youtubeUrl}
          />
        )}

        {/* Prose */}
        <div className="prose dark:prose-invert max-w-none text-secondary leading-relaxed font-normal text-base space-y-4 [&_h3]:font-serif [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-primary [&_p]:text-secondary [&_p]:leading-relaxed">
          <p>{tutorial.descriptionZh}</p>
        </div>

        {/* Original source link */}
        <div className="rounded-2xl bg-surface-1 border border-border p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-serif text-sm font-medium text-primary">查看原站英文版本</h3>
            <p className="text-xs text-secondary">本页为人工翻译摘要，完整图文与视频请参考 Anthropic 官方原站。</p>
          </div>
          <a
            href={tutorial.originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-2 hover:bg-surface-0 border border-border text-xs font-medium text-primary transition-all shrink-0"
          >
            <span>在 academy.claude.com 打开原版 ↗</span>
            <ExternalLink className="w-3.5 h-3.5 text-brand-clay" />
          </a>
        </div>
      </article>
    </div>
  );
};
