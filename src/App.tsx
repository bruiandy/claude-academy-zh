import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AllResourcesPage } from './pages/AllResourcesPage';
import { StartPage } from './pages/StartPage';
import { CourseOverviewPage } from './pages/CourseOverviewPage';
import { LessonPage } from './pages/LessonPage';
import { ProductDetailPage } from './pages/products/ProductDetailPage';
import { CollectionPage } from './pages/collections/CollectionPage';
import { TutorialsPage } from './pages/TutorialsPage';
import { TutorialPage } from './pages/TutorialPage';
import { UseCasesPage } from './pages/UseCasesPage';
import { UseCasePage } from './pages/UseCasePage';

// Scroll to top on navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter basename="/claude-academy-zh">
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-surface-0 text-primary selection:bg-brand-clay selection:text-white transition-colors duration-300 font-sans">
        <Header />
        <main className="flex-1">
          <Routes>
            {/* 一级页面 */}
            <Route path="/" element={<HomePage />} />
            <Route path="/start" element={<StartPage />} />
            <Route path="/all" element={<AllResourcesPage />} />
            <Route path="/courses" element={<AllResourcesPage />} />

            {/* 产品专题页 */}
            <Route path="/products/:productSlug" element={<ProductDetailPage />} />

            {/* 专题合集页 */}
            <Route path="/collections/:collectionSlug" element={<CollectionPage />} />

            {/* 独立教程 Tutorials */}
            <Route path="/tutorials" element={<TutorialsPage />} />
            <Route path="/tutorials/:slug" element={<TutorialPage />} />

            {/* 实战案例 Use Cases */}
            <Route path="/use-cases" element={<UseCasesPage />} />
            <Route path="/use-cases/:slug" element={<UseCasePage />} />

            {/* 二级页面：课程介绍与大纲页 (Course Overview) */}
            <Route path="/courses/:courseId" element={<CourseOverviewPage />} />

            {/* 三级页面：具体正文课时阅读器 (Lesson Detail) */}
            <Route path="/courses/:courseId/:lessonSlug" element={<LessonPage />} />

            {/* 兜底 404 */}
            <Route path="*" element={<AllResourcesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
