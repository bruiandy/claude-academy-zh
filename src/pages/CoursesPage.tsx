import React, { useState } from 'react';
import { ALL_COURSES } from '../data/courses';
import { CourseCard } from '../components/CourseCard';
import { Search } from 'lucide-react';

export const CoursesPage: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<'all' | 'ai-fluency' | 'products' | 'developer'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = ALL_COURSES.filter(course => {
    const matchesTrack = selectedTrack === 'all' || course.track === selectedTrack;
    const matchesQuery = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTrack && matchesQuery;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-8 min-h-screen">
      <header className="flex flex-col gap-3">
        <h1 className="font-serif text-4xl font-medium tracking-tight text-primary">
          全站课程大纲目录 (All Courses)
        </h1>
        <p className="text-secondary text-base max-w-2xl">
          无论你是要提升 AI 基础认知（AI Fluency）、上手 Claude 全系工具，还是基于 API 和 MCP 进行深度开发，这里都有对应的体系化教程。
        </p>
      </header>

      {/* Filter Tabs & Search Filter */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between border-b border-border pb-4">
        {/* Track Filter Tabs */}
        <div className="flex flex-wrap gap-2 text-sm">
          <button
            onClick={() => setSelectedTrack('all')}
            className={`px-4 py-2 rounded-xl transition-all ${
              selectedTrack === 'all'
                ? 'bg-brand-clay text-white font-medium shadow-xs'
                : 'bg-surface-1 border border-border text-secondary hover:text-primary hover:bg-surface-2'
            }`}
          >
            全部课程 ({ALL_COURSES.length})
          </button>
          <button
            onClick={() => setSelectedTrack('products')}
            className={`px-4 py-2 rounded-xl transition-all ${
              selectedTrack === 'products'
                ? 'bg-brand-clay text-white font-medium shadow-xs'
                : 'bg-surface-1 border border-border text-secondary hover:text-primary hover:bg-surface-2'
            }`}
          >
            Claude 产品实战
          </button>
          <button
            onClick={() => setSelectedTrack('ai-fluency')}
            className={`px-4 py-2 rounded-xl transition-all ${
              selectedTrack === 'ai-fluency'
                ? 'bg-brand-clay text-white font-medium shadow-xs'
                : 'bg-surface-1 border border-border text-secondary hover:text-primary hover:bg-surface-2'
            }`}
          >
            AI 基础通识 (AI Fluency)
          </button>
          <button
            onClick={() => setSelectedTrack('developer')}
            className={`px-4 py-2 rounded-xl transition-all ${
              selectedTrack === 'developer'
                ? 'bg-brand-clay text-white font-medium shadow-xs'
                : 'bg-surface-1 border border-border text-secondary hover:text-primary hover:bg-surface-2'
            }`}
          >
            开发者与架构 (Developer/MCP)
          </button>
        </div>

        {/* Input Search Filter */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="搜索课程名称或关键词..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-surface-1 border border-border text-sm text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-brand-clay/50"
          />
        </div>
      </div>

      {/* Courses Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map(course => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              category={course.category}
              duration={course.duration}
              lessonsCount={course.lessonsCount}
              swatch={course.swatch}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center text-muted text-sm border border-dashed border-border rounded-2xl bg-surface-1">
          没有找到匹配“{searchQuery}”的课程，请尝试更通用的词汇。
        </div>
      )}
    </div>
  );
};
