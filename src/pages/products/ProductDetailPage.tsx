import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MessageSquare, Laptop, Terminal, Tag, Layers, ArrowLeft, BookOpen } from 'lucide-react';
import { ALL_COURSES } from '../../data/courses';
import { CourseCard } from '../../components/CourseCard';

interface ProductInfo {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: any;
  color: string;
  associatedCourseIds: string[];
}

const PRODUCTS_REGISTRY: Record<string, ProductInfo> = {
  'claude': {
    id: 'claude',
    name: 'Claude.ai',
    tagline: '深度思考与日常协同的 AI 助手',
    description: '在直观的 Web 与移动应用中与 Claude 协同推敲复杂问题、撰写深度文档、分析数据并实时预览 Artifacts 工件。',
    icon: MessageSquare,
    color: 'text-amber-600 dark:text-amber-400 bg-amber-500/10',
    associatedCourseIds: ['claude-101']
  },
  'cowork': {
    id: 'cowork',
    name: 'Claude Cowork',
    tagline: '桌面端长程任务托管与自动化协同',
    description: '将完整的多步骤项目一键托管给桌面客户端，自动规划执行路径并交付高质量的业务成果。',
    icon: Laptop,
    color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10',
    associatedCourseIds: ['introduction-to-claude-cowork']
  },
  'code': {
    id: 'code',
    name: 'Claude Code',
    tagline: '终端原生代理式编程工具 (Agentic Coding CLI)',
    description: '在终端命令行与 IDE 中与 Claude 智能体结对编程，自主理解代码库、跨文件重构、执行测试并自动提交 Git。',
    icon: Terminal,
    color: 'text-sky-600 dark:text-sky-400 bg-sky-500/10',
    associatedCourseIds: ['claude-code-101']
  },
  'tag': {
    id: 'tag',
    name: 'Claude Tag',
    tagline: '企业协作与团队频道集成智能体',
    description: '在团队日常沟通频道（如 Slack / 飞书）中随时 @Claude，协作推进跨部门项目并沉淀团队上下文。',
    icon: Tag,
    color: 'text-rose-600 dark:text-rose-400 bg-rose-500/10',
    associatedCourseIds: ['claude-101', 'introduction-to-claude-cowork']
  },
  'platform': {
    id: 'platform',
    name: 'Claude Platform & API',
    tagline: '企业级模型调用与开发者控制台',
    description: '通过 Anthropic API、Console 控制台与 MCP 协议，将 Claude 深度集成进你的自建产品与全栈业务系统中。',
    icon: Layers,
    color: 'text-purple-600 dark:text-purple-400 bg-purple-500/10',
    associatedCourseIds: ['building-with-the-claude-api', 'introduction-to-model-context-protocol']
  }
};

// Aliases for backward compatibility
PRODUCTS_REGISTRY['claude-ai'] = PRODUCTS_REGISTRY['claude'];
PRODUCTS_REGISTRY['claude-code'] = PRODUCTS_REGISTRY['code'];
PRODUCTS_REGISTRY['claude-cowork'] = PRODUCTS_REGISTRY['cowork'];
PRODUCTS_REGISTRY['claude-tag'] = PRODUCTS_REGISTRY['tag'];
PRODUCTS_REGISTRY['claude-platform'] = PRODUCTS_REGISTRY['platform'];

export const ProductDetailPage: React.FC = () => {
  const { productSlug } = useParams<{ productSlug: string }>();
  const product = productSlug ? PRODUCTS_REGISTRY[productSlug] : null;

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="font-serif text-2xl font-medium text-primary mb-4">未找到该产品页面</h2>
        <Link to="/" className="text-brand-clay text-sm underline">
          返回首页
        </Link>
      </div>
    );
  }

  const IconComponent = product.icon;
  const relatedCourses = ALL_COURSES.filter(c => product.associatedCourseIds.includes(c.id));

  return (
    <div className="min-h-screen max-w-5xl mx-auto px-6 py-12 space-y-12">
      <Link to="/" className="inline-flex items-center gap-2 text-xs text-secondary hover:text-primary transition-colors">
        <ArrowLeft className="w-4 h-4" />
        <span>返回首页</span>
      </Link>

      {/* Header */}
      <div className="space-y-4">
        <div className={`w-14 h-14 rounded-2xl ${product.color} flex items-center justify-center`}>
          <IconComponent className="w-7 h-7" />
        </div>
        <h1 className="font-serif text-4xl font-medium text-primary">{product.name}</h1>
        <p className="font-medium text-lg text-primary">{product.tagline}</p>
        <p className="text-secondary text-base leading-relaxed max-w-2xl">{product.description}</p>
      </div>

      {/* Related Courses Section */}
      <div className="pt-6 border-t border-border space-y-6">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-brand-clay" />
          <h2 className="font-serif text-2xl font-medium text-primary">对应实战课程与指南</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relatedCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};
