import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { QuizWidget } from './QuizWidget';
import { VideoPlayerCard } from './VideoPlayerCard';
import {
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Clock,
  BookOpen,
  CheckCircle2,
  Share2,
  ExternalLink
} from 'lucide-react';

export interface LessonSection {
  id: string;
  title: string;
  contentHtml: string;
  videoData?: {
    title: string;
    duration?: string;
    youtubeUrl?: string;
    youtubeEmbedUrl?: string;
    transcriptHtml?: string;
  };
  quiz?: {
    id: string;
    title: string;
    options: {
      id: string;
      text: string;
      isCorrect: boolean;
      explanation?: string;
    }[];
    generalExplanation?: string;
  };
}

export interface RoadmapItem {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  duration?: string;
}

export interface LessonLayoutProps {
  courseId: string;
  courseTitle: string;
  lessonId: string;
  lessonTitle: string;
  lessonIndex: number;
  totalLessons: number;
  duration?: string;
  outcomes?: string[];
  roadmap: RoadmapItem[];
  sections: LessonSection[];
  prevLesson?: { slug: string; title: string };
  nextLesson?: { slug: string; title: string };
}

export const LessonLayout: React.FC<LessonLayoutProps> = ({
  courseId,
  courseTitle,
  lessonId,
  lessonTitle,
  lessonIndex,
  totalLessons,
  duration = '8 分钟',
  outcomes,
  roadmap,
  sections,
  prevLesson,
  nextLesson,
}) => {
  const hasAnyLessonContent = sections.some(
    (s) =>
      (s.contentHtml && s.contentHtml.trim().length > 0) ||
      s.videoData ||
      s.quiz
  );
  const originalCourseUrl = `https://academy.claude.com/courses/${courseId}`;
  const navigate = useNavigate();

  // Handle copy buttons and interaction inside dangerouslySetInnerHTML
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const copyBtn = target.closest('[data-copy-text]') as HTMLElement || target.closest('button[data-cds="Button"]') as HTMLElement;
      if (copyBtn) {
        const textToCopy = copyBtn.getAttribute('data-copy-text') || copyBtn.closest('.code-block, pre, div')?.querySelector('code, pre')?.textContent;
        if (textToCopy) {
          navigator.clipboard.writeText(textToCopy);
          const originalText = copyBtn.textContent;
          copyBtn.textContent = '已复制！';
          setTimeout(() => {
            copyBtn.textContent = originalText;
          }, 2000);
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <div className="min-h-screen bg-surface-0 pb-20">
      {/* 1. Breadcrumbs Header */}
      <div className="border-b border-border bg-surface-1/40">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between text-xs text-secondary">
          <nav className="flex items-center gap-1.5 overflow-x-auto whitespace-nowrap">
            <Link to="/all" className="hover:text-primary transition-colors">课程库</Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted shrink-0" />
            <Link to={`/courses/${courseId}`} className="hover:text-primary transition-colors font-medium text-primary">
              {courseTitle}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted shrink-0" />
            <span className="text-secondary truncate max-w-[200px]">{lessonTitle}</span>
          </nav>

          <div className="flex items-center gap-4 shrink-0 text-muted">
            <div className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{lessonIndex + 1} / {totalLessons} 课时</span>
            </div>
            {duration && (
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{duration}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 2. Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Article Prose */}
        <article className="lg:col-span-8 space-y-10">
          {/* Lesson Header */}
          <header className="space-y-4 border-b border-border pb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-clay">
              第 {lessonIndex + 1} 课 · {courseTitle}
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-primary leading-tight">
              {lessonTitle}
            </h1>

            {/* Learning Outcomes Box */}
            {outcomes && outcomes.length > 0 && (
              <div className="mt-6 rounded-2xl bg-surface-1 border border-border p-6 space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-secondary">
                  本课学习目标 (What you'll learn)
                </h3>
                <ul className="space-y-2">
                  {outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-brand-clay shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </header>

          {/* Whole-lesson empty-state: content not yet migrated */}
          {!hasAnyLessonContent && (
            <div className="rounded-2xl border border-border bg-surface-1 p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1.5">
                <p className="text-sm font-semibold text-primary">本课中文内容正在整理中</p>
                <p className="text-sm text-secondary leading-relaxed">
                  我们尚未完成本节中文内容的迁移。你可以直接前往 Anthropic 官方原版课程继续学习。
                </p>
              </div>
              <a
                href={originalCourseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 shrink-0 rounded-xl bg-brand-clay px-4 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-all"
              >
                查看官方原版课程 <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}

          {/* Lesson Sections & Prose */}
          <div className="space-y-12 text-primary leading-relaxed">
            {sections.map((section) => {
              const sectionHasContent =
                (section.contentHtml && section.contentHtml.trim().length > 0) ||
                section.videoData ||
                section.quiz;
              return (
              <section key={section.id} id={section.id} className="space-y-4">
                {section.title && (
                  <h2 className="font-serif text-2xl font-medium tracking-tight text-primary pt-4 border-t border-border/40">
                    {section.title}
                  </h2>
                )}

                {/* Video Component if present */}
                {section.videoData && (
                  <VideoPlayerCard
                    title={section.videoData.title}
                    duration={section.videoData.duration}
                    youtubeUrl={section.videoData.youtubeUrl}
                    youtubeEmbedUrl={section.videoData.youtubeEmbedUrl}
                    transcriptHtml={section.videoData.transcriptHtml}
                  />
                )}

                {/* Prose HTML — fallback when empty */}
                {section.contentHtml && section.contentHtml.trim().length > 0 ? (
                  <div
                    className="prose dark:prose-invert max-w-none text-secondary space-y-4 leading-relaxed font-normal text-base [&_h3]:font-serif [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-primary [&_p]:text-secondary [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_code]:font-mono [&_code]:text-xs [&_code]:bg-surface-2 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_img]:rounded-xl [&_img]:border [&_img]:border-border [&_img]:my-6 [&_img]:w-full [&_img]:h-auto"
                    dangerouslySetInnerHTML={{ __html: section.contentHtml }}
                  />
                ) : !sectionHasContent && hasAnyLessonContent ? (
                  <div className="rounded-xl border border-dashed border-border bg-surface-1 p-5 text-sm text-muted">
                    本节内容整理中，可前往{' '}
                    <a
                      href={originalCourseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-brand-clay font-medium hover:underline"
                    >
                      官方原版课程 <ExternalLink className="w-3.5 h-3.5" />
                    </a>{' '}
                    查看。
                  </div>
                ) : null}

                {/* Quiz Widget if section has one */}
                {section.quiz && (
                  <div className="mt-8">
                    <QuizWidget
                      id={section.quiz.id}
                      title={section.quiz.title}
                      options={section.quiz.options}
                      generalExplanation={section.quiz.generalExplanation}
                    />
                  </div>
                )}
              </section>
              );
            })}
          </div>

          {/* Navigation Footer Controls */}
          <nav className="pt-10 border-t border-border flex items-center justify-between gap-4">
            {prevLesson ? (
              <Link
                to={`/courses/${courseId}/${prevLesson.slug}`}
                className="flex items-center gap-3 p-4 rounded-2xl bg-surface-1 hover:bg-surface-2 border border-border transition-all max-w-[45%]"
              >
                <ArrowLeft className="w-5 h-5 text-secondary shrink-0" />
                <div className="text-left overflow-hidden">
                  <span className="text-[11px] text-muted block">上一课</span>
                  <span className="text-sm font-medium text-primary truncate block">{prevLesson.title}</span>
                </div>
              </Link>
            ) : <div />}

            {nextLesson ? (
              <Link
                to={`/courses/${courseId}/${nextLesson.slug}`}
                className="flex items-center gap-3 p-4 rounded-2xl bg-brand-clay text-white hover:opacity-90 transition-all max-w-[45%] ml-auto shadow-sm"
              >
                <div className="text-right overflow-hidden">
                  <span className="text-[11px] text-white/80 block">下一课</span>
                  <span className="text-sm font-medium text-white truncate block">{nextLesson.title}</span>
                </div>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </Link>
            ) : (
              <Link
                to={`/courses/${courseId}`}
                className="flex items-center gap-2 p-4 rounded-2xl bg-surface-2 hover:bg-surface-1 border border-border text-sm font-medium text-primary ml-auto"
              >
                <span>返回课程大纲</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </Link>
            )}
          </nav>
        </article>

        {/* Right Column: Sticky Roadmap Sidebar */}
        <aside className="hidden lg:block lg:col-span-4 sticky top-24 space-y-6">
          <div className="rounded-2xl bg-surface-1 border border-border p-5 space-y-4 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <h3 className="font-serif text-sm font-medium text-primary">课程路线图 (Roadmap)</h3>
              <span className="text-[11px] text-secondary font-mono">{lessonIndex + 1}/{roadmap.length}</span>
            </div>

            <ol className="space-y-1 max-h-[60vh] overflow-y-auto pr-1">
              {roadmap.map((item, idx) => {
                const isCurrent = item.slug === lessonId;
                return (
                  <li key={item.id || idx}>
                    <Link
                      to={`/courses/${courseId}/${item.slug}`}
                      className={`flex items-start gap-3 p-2.5 rounded-xl text-xs transition-all ${
                        isCurrent
                          ? 'bg-brand-clay/10 text-brand-clay font-medium border border-brand-clay/30'
                          : 'text-secondary hover:text-primary hover:bg-surface-2'
                      }`}
                    >
                      <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-mono shrink-0 mt-0.5 ${
                        isCurrent ? 'bg-brand-clay text-white' : 'bg-surface-2 text-secondary'
                      }`}>
                        {idx + 1}
                      </span>
                      <div className="overflow-hidden">
                        <span className="truncate block font-medium">{item.title}</span>
                        {item.subtitle && <span className="text-[11px] text-muted truncate block">{item.subtitle}</span>}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </div>
        </aside>
      </div>
    </div>
  );
};
