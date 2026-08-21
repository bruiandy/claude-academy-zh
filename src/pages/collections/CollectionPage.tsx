import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ALL_COURSES } from '../../data/courses';
import { CourseCard } from '../../components/CourseCard';
import { Sparkles, ArrowLeft, BookOpen, Compass } from 'lucide-react';

export const CollectionPage: React.FC = () => {
  const { collectionSlug } = useParams<{ collectionSlug: string }>();

  // Filter courses for AI Fluency or other collection
  const isFluency = collectionSlug === 'ai-fluency';
  const collectionCourses = ALL_COURSES.filter(c => c.track === 'ai-fluency');

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-6 py-12 space-y-12">
      <Link to="/" className="inline-flex items-center gap-2 text-xs text-secondary hover:text-primary transition-colors">
        <ArrowLeft className="w-4 h-4" />
        <span>返回首页</span>
      </Link>

      {/* Collection Hero */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-clay/10 text-brand-clay text-xs font-semibold uppercase">
          <Compass className="w-3.5 h-3.5" />
          <span>通识专题合集 (Collection)</span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-primary">
          AI Fluency (AI 素养与人机协作通识)
        </h1>
        <p className="text-secondary text-base md:text-lg leading-relaxed">
          涵盖从底层概率预测第一性原理、4D 人机协作框架（委派、描述、鉴别、尽责），到面向教育、开发者、中小企业与学生的场景化落地指南。
        </p>
      </div>

      {/* Main Courses Grid */}
      <div className="space-y-6 pt-6 border-t border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-brand-clay" />
            <h2 className="font-serif text-2xl font-medium text-primary">本专题下所有课程与指南</h2>
          </div>
          <span className="text-xs text-secondary font-mono">共 {collectionCourses.length} 门核心课程</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collectionCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};
