import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen } from 'lucide-react';
import { CourseMeta } from '../data/courses';

export interface CourseCardProps {
  course?: CourseMeta;
  id?: string;
  title?: string;
  description?: string;
  category?: string;
  duration?: string;
  lessonsCount?: number;
  swatch?: 'peach' | 'cactus' | 'heather';
  iconSvg?: React.ReactNode;
}

export const CourseCard: React.FC<CourseCardProps> = (props) => {
  const data = props.course || {
    id: props.id || '',
    title: props.title || '',
    description: props.description || '',
    category: props.category || '',
    duration: props.duration,
    lessonsCount: props.lessonsCount,
    swatch: props.swatch || 'peach'
  };

  const swatchClass = data.swatch === 'peach' ? 'swatch-peach' : data.swatch === 'cactus' ? 'swatch-cactus' : 'swatch-heather';

  return (
    <Link
      to={`/courses/${data.id}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-surface-1 shadow-card-ring transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 border border-border"
    >
      {/* Visual Header Banner */}
      <div className={`relative h-32 w-full overflow-hidden ${swatchClass} bg-surface-2 flex items-center justify-center border-b border-border`}>
        <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:scale-105 transition-transform duration-300">
          {props.iconSvg ? props.iconSvg : (
            <svg viewBox="0 0 500 500" width="56" height="56" aria-hidden="true" className="opacity-75">
              <path d="M301.86 85.56c-33.07-7.14-65.15-4.31-104.3 5.31-57 14-95 54-117 83s-34.99 61.99-32.31 109.56c2.69 47.57 18.31 116.43 71.31 154.43s120 45 147 41 80-9 124.5-49.5c50.21-45.69 60.61-98.44 61-147.05.49-60.9-55.61-185.06-150.2-196.76zm-51.29 351.3c-81.19 0-156-70.67-156-156s73.81-147 155-147 158 60.67 158 146-75.81 157-157 157" fill="#d97757" />
            </svg>
          )}
        </div>
        <span className="absolute top-3 left-3 text-xs font-medium px-2.5 py-1 rounded-full bg-surface-0/80 backdrop-blur text-primary shadow-xs">
          {data.category}
        </span>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col gap-2.5 p-5">
        <h3 className="font-serif text-xl font-medium leading-snug text-primary group-hover:text-brand-clay transition-colors">
          {data.title}
        </h3>
        <p className="text-sm text-secondary leading-relaxed line-clamp-2">
          {data.description}
        </p>

        {/* Card Footer Info */}
        <div className="mt-auto pt-3 flex items-center justify-between text-xs text-muted border-t border-border/50">
          {data.lessonsCount && (
            <div className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{data.lessonsCount} 课时</span>
            </div>
          )}
          {data.duration && (
            <div className="flex items-center gap-1 ml-auto">
              <Clock className="w-3.5 h-3.5" />
              <span>{data.duration}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
