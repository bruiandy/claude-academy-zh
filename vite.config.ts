import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/claude-academy-zh/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
          lessons_claude: [
            './src/data/lessons/claude-101.ts',
            './src/data/lessons/claude-code.ts',
            './src/data/lessons/claude-cowork.ts',
            './src/data/lessons/claude_code_in_action.ts',
            './src/data/lessons/claude_platform_101.ts'
          ],
          lessons_fluency: [
            './src/data/lessons/ai-fluency-foundations.ts',
            './src/data/lessons/ai-capabilities.ts',
            './src/data/lessons/ai_fluency_for_builders.ts',
            './src/data/lessons/ai_fluency_for_educators.ts',
            './src/data/lessons/ai_fluency_for_k_12_educators.ts',
            './src/data/lessons/ai_fluency_for_nonprofits.ts',
            './src/data/lessons/ai_fluency_for_pk_12_train_the_trainer.ts',
            './src/data/lessons/ai_fluency_for_small_businesses.ts',
            './src/data/lessons/ai_fluency_for_students.ts',
            './src/data/lessons/teaching_ai_fluency.ts'
          ],
          lessons_api: [
            './src/data/lessons/mcp.ts',
            './src/data/lessons/building-api.ts',
            './src/data/lessons/introduction_to_agent_skills.ts',
            './src/data/lessons/introduction_to_subagents.ts',
            './src/data/lessons/model_context_protocol_advanced_topics.ts'
          ],
          lessons_cloud: [
            './src/data/lessons/claude_with_amazon_bedrock.ts',
            './src/data/lessons/claude_with_google_cloud_s_vertex_ai.ts'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1200
  }
});
