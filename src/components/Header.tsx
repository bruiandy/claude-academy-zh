import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkle, Moon, Sun, Search, Compass, Layers, BookOpen, X } from 'lucide-react';
import { ALL_COURSES } from '../data/courses';

export const Header: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedTheme = localStorage.getItem('claude-academy-theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    document.documentElement.setAttribute('data-mode', initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('claude-academy-theme', nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    document.documentElement.setAttribute('data-mode', nextTheme);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchOpen(false);
      navigate(`/all?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const matchingCourses = searchQuery.trim()
    ? ALL_COURSES.filter(c =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border bg-surface-0/90 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo & Brand */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-brand-clay/10 text-brand-clay flex items-center justify-center group-hover:scale-105 transition-transform">
                <Sparkle className="w-5 h-5 fill-current" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl font-medium tracking-tight text-primary">
                  Claude Academy
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-surface-2 text-secondary border border-border">
                  中文社区版
                </span>
              </div>
            </Link>

            {/* Navigation links - aligned to exact official routes */}
            <nav className="hidden md:flex items-center gap-5 text-sm">
              <Link
                to="/collections/ai-fluency"
                className="text-secondary hover:text-primary transition-colors flex items-center gap-1.5"
              >
                <Compass className="w-4 h-4 text-brand-clay" />
                <span>AI 基础通识</span>
              </Link>
              <Link
                to="/products/claude"
                className="text-secondary hover:text-primary transition-colors flex items-center gap-1.5"
              >
                <Layers className="w-4 h-4 text-brand-clay" />
                <span>Claude 产品体系</span>
              </Link>
              <Link
                to="/tutorials"
                className="text-secondary hover:text-primary transition-colors flex items-center gap-1.5"
              >
                <BookOpen className="w-4 h-4 text-brand-clay" />
                <span>教程与案例</span>
              </Link>
              <Link
                to="/all"
                className="text-secondary hover:text-primary transition-colors flex items-center gap-1.5"
              >
                <BookOpen className="w-4 h-4 text-brand-clay" />
                <span>全部课程与资源</span>
              </Link>
              <Link
                to="/start"
                className="text-secondary hover:text-primary transition-colors"
              >
                新手路径
              </Link>
            </nav>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            {/* Search Trigger */}
            <button
              onClick={() => {
                setSearchOpen(true);
                setTimeout(() => searchInputRef.current?.focus(), 100);
              }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-1 hover:bg-surface-2 text-secondary hover:text-primary border border-border text-xs transition-all"
            >
              <Search className="w-3.5 h-3.5 text-brand-clay" />
              <span className="hidden sm:inline">搜索课程与技术...</span>
              <kbd className="hidden sm:inline px-1.5 py-0.5 rounded bg-surface-0 border border-border text-[10px] font-mono text-secondary">
                ⌘K
              </kbd>
            </button>

            {/* Theme toggle - updates both data-mode and dark class */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-xl text-secondary hover:text-primary hover:bg-surface-1 transition-all border border-border"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Global Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-start justify-center pt-20 px-4">
          <div className="w-full max-w-xl bg-surface-1 border border-border rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center border-b border-border p-4">
              <Search className="w-5 h-5 text-brand-clay mr-3 shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="输入课程名称、Prompt、API、MCP 或关键词..."
                className="w-full bg-transparent text-primary text-sm focus:outline-none placeholder:text-secondary"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="p-1 rounded-lg hover:bg-surface-2 text-secondary"
              >
                <X className="w-4 h-4" />
              </button>
            </form>

            {/* Search Results Preview */}
            <div className="p-3 max-h-80 overflow-y-auto">
              {searchQuery.trim() ? (
                matchingCourses.length > 0 ? (
                  <div className="space-y-1">
                    <span className="text-[11px] font-medium text-secondary uppercase px-3 py-1 block">
                      匹配到的核心课程
                    </span>
                    {matchingCourses.map(course => (
                      <Link
                        key={course.id}
                        to={`/courses/${course.id}`}
                        onClick={() => setSearchOpen(false)}
                        className="p-3 rounded-xl hover:bg-surface-2 flex items-center justify-between group transition-colors block"
                      >
                        <div>
                          <h4 className="text-sm font-medium text-primary group-hover:text-brand-clay transition-colors">
                            {course.title}
                          </h4>
                          <p className="text-xs text-secondary line-clamp-1 mt-0.5">
                            {course.description}
                          </p>
                        </div>
                        <span className="text-xs text-secondary shrink-0 font-mono ml-3">
                          {course.lessonsCount} 课时
                        </span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center text-xs text-secondary">
                    未找到相关课程，按下回车可在全部资源库中深度搜索
                  </div>
                )
              ) : (
                <div className="p-4 text-xs text-secondary space-y-2">
                  <span className="font-medium text-primary block">热门搜索推荐：</span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {['Claude 101', 'Claude Code', 'MCP 协议', '4D 框架', 'API 开发', 'Artifacts'].map(kw => (
                      <button
                        key={kw}
                        type="button"
                        onClick={() => setSearchQuery(kw)}
                        className="px-2.5 py-1 rounded-lg bg-surface-2 hover:bg-surface-0 border border-border text-xs text-primary transition-all"
                      >
                        {kw}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
