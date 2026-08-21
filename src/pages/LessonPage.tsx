import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { LessonLayout } from '../components/LessonLayout';
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

import { BookOpen, ArrowLeft } from 'lucide-react';

const COURSE_LESSONS_REGISTRY: Record<string, Record<string, any>> = {
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

export const LessonPage: React.FC = () => {
  const { courseId = 'claude-101', lessonSlug } = useParams<{ courseId: string; lessonSlug?: string }>();

  const courseMeta = ALL_COURSES.find(c => c.id === courseId);
  const lessonMap = COURSE_LESSONS_REGISTRY[courseId];

  if (!courseMeta || !lessonMap) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-surface-2 text-secondary flex items-center justify-center">
          <BookOpen className="w-6 h-6" />
        </div>
        <h2 className="font-serif text-2xl font-medium text-primary">该课程暂未开放或正在收录中</h2>
        <p className="text-sm text-secondary max-w-md">
          我们正在加快翻译与录入该课程的完整内容。
        </p>
        <Link to="/all" className="px-5 py-2.5 rounded-xl bg-brand-clay text-white text-sm font-medium hover:opacity-90 transition-all">
          返回全部课程大纲
        </Link>
      </div>
    );
  }

  const targetSlug = lessonSlug || Object.keys(lessonMap)[0];
  const lessonData = lessonMap[targetSlug];

  if (!lessonData) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-surface-2 text-secondary flex items-center justify-center">
          <BookOpen className="w-6 h-6" />
        </div>
        <h2 className="font-serif text-2xl font-medium text-primary">未找到指定课时</h2>
        <p className="text-sm text-secondary max-w-md">
          该课时可能正在汉化编译中或链接已失效。
        </p>
        <Link to={`/courses/${courseId}`} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-2 border border-border text-primary text-sm font-medium hover:bg-surface-0 transition-all">
          <ArrowLeft className="w-4 h-4" />
          <span>返回《{courseMeta.title}》概览页</span>
        </Link>
      </div>
    );
  }

  return (
    <LessonLayout
      courseId={courseId}
      courseTitle={courseMeta.title}
      lessonId={lessonData.lessonId}
      lessonTitle={lessonData.lessonTitle}
      lessonIndex={lessonData.lessonIndex}
      totalLessons={lessonData.totalLessons}
      duration={lessonData.duration}
      outcomes={lessonData.outcomes}
      roadmap={lessonData.roadmap}
      sections={lessonData.sections}
      prevLesson={lessonData.prevLesson}
      nextLesson={lessonData.nextLesson}
    />
  );
};
