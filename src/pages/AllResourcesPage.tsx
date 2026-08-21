import React, { useState } from 'react';
import { ALL_COURSES } from '../data/courses';
import { CourseCard } from '../components/CourseCard';
import { Search, Filter, BookOpen } from 'lucide-react';

export const AllResourcesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTrack, setSelectedTrack] = useState<string>('all');

  const filteredCourses = ALL_COURSES.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTrack = selectedTrack === 'all' || course.track === selectedTrack;
    return matchesSearch && matchesTrack;
  });

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-clay mb-2">
          <BookOpen className="w-4 h-4" />
          <span>全部课程与资源索引 (All Resources)</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-medium text-primary">
          探索全站课程与实操资源
        </h1>
        <p className="text-secondary text-sm mt-2 max-w-2xl">
          涵盖 Claude 全系工具实操体系与 AI Fluency 通识基础，支持按技术领域与关键词实时检索。
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 pb-6 border-b border-border">
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="搜索课程、工具、API 或概念..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-surface-1 border border-border text-sm text-primary placeholder:text-secondary focus:outline-none focus:ring-1 focus:ring-brand-clay transition-all"
          />
        </div>

        {/* Track Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {[
            { id: 'all', label: '全部资源' },
            { id: 'ai-fluency', label: 'AI 通识 (AI Fluency)' },
            { id: 'products', label: 'Claude 产品体系' },
            { id: 'developer', label: '开发者与架构' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedTrack(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                selectedTrack === tab.id
                  ? 'bg-primary text-surface-0 shadow-xs'
                  : 'bg-surface-1 hover:bg-surface-2 text-secondary hover:text-primary border border-border'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Course Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-surface-2 text-secondary flex items-center justify-center">
            <Filter className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-lg font-medium text-primary">未找到匹配的课程</h3>
          <p className="text-xs text-secondary">请尝试更换搜索关键词或重置分类筛选。</p>
          <button
            onClick={() => { setSearchTerm(''); setSelectedTrack('all'); }}
            className="mt-2 text-xs text-brand-clay font-medium underline"
          >
            重置所有筛选
          </button>
        </div>
      )}
    </div>
  );
};
