import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ALL_COURSES } from '../data/courses';
import { CLAUDE_101_LESSONS } from '../data/lessons/claude-101';
import { AI_CAPABILITIES_LESSONS } from '../data/lessons/ai-capabilities';
import { AI_FLUENCY_FOUNDATIONS_LESSONS } from '../data/lessons/ai-fluency-foundations';
import { CLAUDE_CODE_LESSONS } from '../data/lessons/claude-code';
import { MCP_LESSONS } from '../data/lessons/mcp';
import { CLAUDE_COWORK_LESSONS } from '../data/lessons/claude-cowork';
import { AI_FLUENCY_FOR_BUILDERS_LESSONS } from '../data/lessons/ai_fluency_for_builders';
import { AI_FLUENCY_FOR_STUDENTS_LESSONS } from '../data/lessons/ai_fluency_for_students';
import { CLAUDE_CODE_IN_ACTION_LESSONS } from '../data/lessons/claude_code_in_action';
import { INTRODUCTION_TO_AGENT_SKILLS_LESSONS } from '../data/lessons/introduction_to_agent_skills';
import { INTRODUCTION_TO_SUBAGENTS_LESSONS } from '../data/lessons/introduction_to_subagents';
import { MODEL_CONTEXT_PROTOCOL_ADVANCED_TOPICS_LESSONS } from '../data/lessons/model_context_protocol_advanced_topics';
import { TEACHING_AI_FLUENCY_LESSONS } from '../data/lessons/teaching_ai_fluency';

import { BookOpen, Clock, Award, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

const LESSON_MAP_REGISTRY: Record<string, Record<string, any>> = {
  'claude-101': CLAUDE_101_LESSONS,
  'ai-capabilities-and-limitations': AI_CAPABILITIES_LESSONS,
  'ai-fluency-framework-foundations': AI_FLUENCY_FOUNDATIONS_LESSONS,
  'claude-code-101': CLAUDE_CODE_LESSONS,
  'introduction-to-model-context-protocol': MCP_LESSONS,
  'introduction-to-claude-cowork': CLAUDE_COWORK_LESSONS,
  'ai-fluency-for-builders': AI_FLUENCY_FOR_BUILDERS_LESSONS,
  'ai-fluency-for-students': AI_FLUENCY_FOR_STUDENTS_LESSONS,
  'claude-code-in-action': CLAUDE_CODE_IN_ACTION_LESSONS,
  'introduction-to-agent-skills': INTRODUCTION_TO_AGENT_SKILLS_LESSONS,
  'introduction-to-subagents': INTRODUCTION_TO_SUBAGENTS_LESSONS,
  'model-context-protocol-advanced-topics': MODEL_CONTEXT_PROTOCOL_ADVANCED_TOPICS_LESSONS,
  'teaching-ai-fluency': TEACHING_AI_FLUENCY_LESSONS
};

export const CourseOverviewPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();

  const courseMeta = ALL_COURSES.find(c => c.id === courseId);
  const lessonsDict = courseId ? LESSON_MAP_REGISTRY[courseId] : undefined;

  if (!courseMeta) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-serif text-primary mb-4">未找到该课程</h2>
        <p className="text-secondary text-sm mb-6">该课程可能尚未收录或路径有误。</p>
        <Link to="/all" className="px-5 py-2.5 rounded-xl bg-brand-clay text-white text-sm font-medium">
          查看全部课程与资源
        </Link>
      </div>
    );
  }

  const lessonKeys = lessonsDict ? Object.keys(lessonsDict) : [];
  const firstLessonSlug = lessonKeys.length > 0 ? lessonKeys[0] : '';
  const firstLesson = (lessonsDict && firstLessonSlug) ? lessonsDict[firstLessonSlug] : null;
  const roadmapItems = firstLesson?.roadmap || lessonKeys.map((k, i) => ({
    id: String(i + 1),
    slug: k,
    title: `${i + 1}. ${(lessonsDict && lessonsDict[k]?.lessonTitle) ? lessonsDict[k]?.lessonTitle : k}`,
    subtitle: '课程讲义',
    duration: '8 min'
  }));

  const swatchBgClass = {
    peach: 'bg-[#F9ECE5] dark:bg-[#2A211D]',
    cactus: 'bg-[#EBF2EB] dark:bg-[#1C261D]',
    heather: 'bg-[#EFEBF4] dark:bg-[#231E2A]'
  }[courseMeta.swatch || 'peach'];

  return (
    <div className="min-h-screen pb-20">
      {/* Top Hero Banner */}
      <div className={`w-full ${swatchBgClass} border-b border-border transition-colors duration-300`}>
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
          <Link to="/all" className="inline-flex items-center gap-2 text-xs text-secondary hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>返回全部资源库</span>
          </Link>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold tracking-wider uppercase text-brand-clay">
              {courseMeta.category}
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-primary leading-tight">
              {courseMeta.title}
            </h1>
            <p className="text-base md:text-lg text-secondary max-w-3xl leading-relaxed">
              {courseMeta.description}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-0/80 border border-border text-xs text-primary font-medium">
                <BookOpen className="w-3.5 h-3.5 text-brand-clay" />
                <span>{roadmapItems.length || courseMeta.lessonsCount} 课时</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-0/80 border border-border text-xs text-primary font-medium">
                <Clock className="w-3.5 h-3.5 text-brand-clay" />
                <span>{courseMeta.duration}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-0/80 border border-border text-xs text-primary font-medium">
                <Award className="w-3.5 h-3.5 text-brand-clay" />
                <span>结业测验与认证</span>
              </span>
            </div>

            {/* Start Course CTA */}
            <div className="pt-6 flex items-center gap-4">
              {firstLessonSlug ? (
                <Link
                  to={`/courses/${courseMeta.id}/${firstLessonSlug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-surface-0 font-medium text-sm hover:opacity-90 transition-all shadow-sm"
                >
                  <span>开始学习课程 (Start course)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <button
                  disabled
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-2 text-secondary font-medium text-sm cursor-not-allowed border border-border"
                >
                  <span>课时翻译整理中 (Coming soon)</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Overview Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* What You'll Learn Card */}
        <div className="p-6 md:p-8 rounded-2xl bg-surface-1 border border-border shadow-xs">
          <h2 className="font-serif text-xl font-medium text-primary mb-2">本课程学习收获 (What you'll learn)</h2>
          <p className="text-xs text-secondary mb-6">完成本课程后，你将能够：</p>
          <ul className="space-y-3">
            {(firstLesson?.outcomes || [
              '系统掌握该领域的底层第一性原理与核心术语',
              '掌握在实际工作与业务落地中的核心流程与方法论',
              '通过互动测试与课后练习评估知识掌握情况'
            ]).map((outcome: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-secondary leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-brand-clay shrink-0 mt-0.5" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Detailed Syllabus / Roadmap */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-serif text-2xl font-medium text-primary">课程大纲与课时列表 (Course Syllabus)</h2>
              <p className="text-xs text-secondary mt-1">共包含 {roadmapItems.length} 个独立课时与测验模块</p>
            </div>
          </div>

          <div className="divide-y divide-border border border-border rounded-2xl bg-surface-1 overflow-hidden">
            {roadmapItems.map((item: any, idx: number) => {
              const isAvailable = !!lessonsDict?.[item.slug];
              return (
                <div
                  key={item.id || idx}
                  onClick={() => {
                    if (isAvailable) {
                      navigate(`/courses/${courseMeta.id}/${item.slug}`);
                    }
                  }}
                  className={`p-5 flex items-center justify-between gap-4 transition-colors ${
                    isAvailable ? 'hover:bg-surface-2/60 cursor-pointer' : 'opacity-60 bg-surface-0 cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-2 border border-border text-xs font-mono font-medium text-primary shrink-0">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-medium text-primary">{item.title}</h4>
                      {item.subtitle && <p className="text-xs text-secondary mt-0.5">{item.subtitle}</p>}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs text-secondary font-mono">{item.duration || '8 min'}</span>
                    {isAvailable ? (
                      <span className="px-2.5 py-1 rounded-md bg-brand-clay/10 text-brand-clay text-xs font-medium">
                        立即阅读
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-md bg-surface-2 text-secondary text-xs">
                        编译中
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
