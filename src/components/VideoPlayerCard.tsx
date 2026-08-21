import React from 'react';
import { Play, ExternalLink, Video } from 'lucide-react';

export interface VideoPlayerCardProps {
  title: string;
  duration?: string;
  youtubeUrl?: string;
  youtubeEmbedUrl?: string;
  bilibiliUrl?: string;
  transcriptHtml?: string;
}

export const VideoPlayerCard: React.FC<VideoPlayerCardProps> = ({
  title,
  duration,
  youtubeUrl = 'https://www.youtube.com/',
  youtubeEmbedUrl,
  bilibiliUrl,
  transcriptHtml,
}) => {
  // 如果提供了 youtubeUrl，尝试提取 embed 链接
  let embedUrl = youtubeEmbedUrl;
  if (!embedUrl && youtubeUrl) {
    const match = youtubeUrl.match(/(?:watch\?v=|embed\/)([a-zA-Z0-9_-]+)/);
    if (match) {
      embedUrl = `https://www.youtube-nocookie.com/embed/${match[1]}?rel=0&enablejsapi=1`;
    }
  }

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-border bg-surface-1 shadow-card-ring">
      {/* 1. Real Embedded Video / Player */}
      {embedUrl ? (
        <div className="relative w-full aspect-video bg-black">
          <iframe
            src={embedUrl}
            title={title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="relative h-48 w-full bg-slate-900 flex items-center justify-center border-b border-border group">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url('https://academy.claude.com/og/site.png')` }}
          />
          <a
            href={bilibiliUrl || youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-brand-clay text-white shadow-lg transition-transform hover:scale-110"
          >
            <Play className="w-6 h-6 fill-current ml-1" />
          </a>
          {duration && (
            <span className="absolute bottom-3 right-3 z-10 px-2.5 py-1 rounded-md bg-black/70 text-xs text-white font-mono backdrop-blur">
              {duration}
            </span>
          )}
        </div>
      )}

      {/* 2. Video Meta & External Action Links */}
      <div className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-surface-1 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-brand-clay/10 text-brand-clay flex items-center justify-center shrink-0">
            <Video className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-primary line-clamp-1">{title}</h4>
            <p className="text-xs text-secondary mt-0.5">官方原版视频讲座 {duration ? `· ${duration}` : ''}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-2 hover:bg-surface-0 border border-border text-xs text-primary font-medium transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5 text-brand-clay" />
            <span>在 YouTube 打开原版视频 ↗</span>
          </a>

          {bilibiliUrl && (
            <a
              href={bilibiliUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-xs text-sky-600 dark:text-sky-400 font-medium transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>B站镜像</span>
            </a>
          )}
        </div>
      </div>

      {/* 3. Optional Transcript block */}
      {transcriptHtml && (
        <div className="p-5 border-t border-border bg-surface-0 text-sm text-secondary leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: transcriptHtml }} />
        </div>
      )}
    </div>
  );
};
