import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('=== Claude Academy 全站解锁课程批量提取与全量汉化引擎 ===');

function extractTabContent(url) {
  const script = `/tmp/run_js.scpt`;
  try {
    const raw = execSync(`osascript ${script} "${url}"`, { maxBuffer: 20 * 1024 * 1024 }).toString();
    return JSON.parse(raw);
  } catch (err) {
    console.error(`提取页面失败: ${url}`, err.message);
    return null;
  }
}

// 目标核心课程列表
const COURSES_TO_CRAWL = [
  { id: 'claude-101', name: 'Claude 101' },
  { id: 'ai-capabilities-and-limitations', name: 'AI Capabilities and Limitations' },
  { id: 'ai-fluency-framework-foundations', name: 'AI Fluency Framework' },
  { id: 'claude-code-101', name: 'Claude Code 101' },
  { id: 'introduction-to-model-context-protocol', name: 'MCP Protocol' },
  { id: 'building-with-the-claude-api', name: 'Building with Claude API' }
];

console.log(`即将在 Chrome 已登录窗口中依次拉取并编译 ${COURSES_TO_CRAWL.length} 门核心课程...`);
