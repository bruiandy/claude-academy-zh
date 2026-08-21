// vite.config.ts
import { defineConfig } from "file:///Users/space/Desktop/claude-academy-zh/node_modules/vite/dist/node/index.js";
import react from "file:///Users/space/Desktop/claude-academy-zh/node_modules/@vitejs/plugin-react/dist/index.js";
import path from "path";
var __vite_injected_original_dirname = "/Users/space/Desktop/claude-academy-zh";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom", "lucide-react"],
          lessons_claude: [
            "./src/data/lessons/claude-101.ts",
            "./src/data/lessons/claude-code.ts",
            "./src/data/lessons/claude-cowork.ts",
            "./src/data/lessons/claude_code_in_action.ts",
            "./src/data/lessons/claude_platform_101.ts"
          ],
          lessons_fluency: [
            "./src/data/lessons/ai-fluency-foundations.ts",
            "./src/data/lessons/ai-capabilities.ts",
            "./src/data/lessons/ai_fluency_for_builders.ts",
            "./src/data/lessons/ai_fluency_for_educators.ts",
            "./src/data/lessons/ai_fluency_for_k_12_educators.ts",
            "./src/data/lessons/ai_fluency_for_nonprofits.ts",
            "./src/data/lessons/ai_fluency_for_pk_12_train_the_trainer.ts",
            "./src/data/lessons/ai_fluency_for_small_businesses.ts",
            "./src/data/lessons/ai_fluency_for_students.ts",
            "./src/data/lessons/teaching_ai_fluency.ts"
          ],
          lessons_api: [
            "./src/data/lessons/mcp.ts",
            "./src/data/lessons/building-api.ts",
            "./src/data/lessons/introduction_to_agent_skills.ts",
            "./src/data/lessons/introduction_to_subagents.ts",
            "./src/data/lessons/model_context_protocol_advanced_topics.ts"
          ],
          lessons_cloud: [
            "./src/data/lessons/claude_with_amazon_bedrock.ts",
            "./src/data/lessons/claude_with_google_cloud_s_vertex_ai.ts"
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1200
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvc3BhY2UvRGVza3RvcC9jbGF1ZGUtYWNhZGVteS16aFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3NwYWNlL0Rlc2t0b3AvY2xhdWRlLWFjYWRlbXktemgvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3NwYWNlL0Rlc2t0b3AvY2xhdWRlLWFjYWRlbXktemgvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXG4gICAgfSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB7XG4gICAgICAgICAgdmVuZG9yOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbScsICdyZWFjdC1yb3V0ZXItZG9tJywgJ2x1Y2lkZS1yZWFjdCddLFxuICAgICAgICAgIGxlc3NvbnNfY2xhdWRlOiBbXG4gICAgICAgICAgICAnLi9zcmMvZGF0YS9sZXNzb25zL2NsYXVkZS0xMDEudHMnLFxuICAgICAgICAgICAgJy4vc3JjL2RhdGEvbGVzc29ucy9jbGF1ZGUtY29kZS50cycsXG4gICAgICAgICAgICAnLi9zcmMvZGF0YS9sZXNzb25zL2NsYXVkZS1jb3dvcmsudHMnLFxuICAgICAgICAgICAgJy4vc3JjL2RhdGEvbGVzc29ucy9jbGF1ZGVfY29kZV9pbl9hY3Rpb24udHMnLFxuICAgICAgICAgICAgJy4vc3JjL2RhdGEvbGVzc29ucy9jbGF1ZGVfcGxhdGZvcm1fMTAxLnRzJ1xuICAgICAgICAgIF0sXG4gICAgICAgICAgbGVzc29uc19mbHVlbmN5OiBbXG4gICAgICAgICAgICAnLi9zcmMvZGF0YS9sZXNzb25zL2FpLWZsdWVuY3ktZm91bmRhdGlvbnMudHMnLFxuICAgICAgICAgICAgJy4vc3JjL2RhdGEvbGVzc29ucy9haS1jYXBhYmlsaXRpZXMudHMnLFxuICAgICAgICAgICAgJy4vc3JjL2RhdGEvbGVzc29ucy9haV9mbHVlbmN5X2Zvcl9idWlsZGVycy50cycsXG4gICAgICAgICAgICAnLi9zcmMvZGF0YS9sZXNzb25zL2FpX2ZsdWVuY3lfZm9yX2VkdWNhdG9ycy50cycsXG4gICAgICAgICAgICAnLi9zcmMvZGF0YS9sZXNzb25zL2FpX2ZsdWVuY3lfZm9yX2tfMTJfZWR1Y2F0b3JzLnRzJyxcbiAgICAgICAgICAgICcuL3NyYy9kYXRhL2xlc3NvbnMvYWlfZmx1ZW5jeV9mb3Jfbm9ucHJvZml0cy50cycsXG4gICAgICAgICAgICAnLi9zcmMvZGF0YS9sZXNzb25zL2FpX2ZsdWVuY3lfZm9yX3BrXzEyX3RyYWluX3RoZV90cmFpbmVyLnRzJyxcbiAgICAgICAgICAgICcuL3NyYy9kYXRhL2xlc3NvbnMvYWlfZmx1ZW5jeV9mb3Jfc21hbGxfYnVzaW5lc3Nlcy50cycsXG4gICAgICAgICAgICAnLi9zcmMvZGF0YS9sZXNzb25zL2FpX2ZsdWVuY3lfZm9yX3N0dWRlbnRzLnRzJyxcbiAgICAgICAgICAgICcuL3NyYy9kYXRhL2xlc3NvbnMvdGVhY2hpbmdfYWlfZmx1ZW5jeS50cydcbiAgICAgICAgICBdLFxuICAgICAgICAgIGxlc3NvbnNfYXBpOiBbXG4gICAgICAgICAgICAnLi9zcmMvZGF0YS9sZXNzb25zL21jcC50cycsXG4gICAgICAgICAgICAnLi9zcmMvZGF0YS9sZXNzb25zL2J1aWxkaW5nLWFwaS50cycsXG4gICAgICAgICAgICAnLi9zcmMvZGF0YS9sZXNzb25zL2ludHJvZHVjdGlvbl90b19hZ2VudF9za2lsbHMudHMnLFxuICAgICAgICAgICAgJy4vc3JjL2RhdGEvbGVzc29ucy9pbnRyb2R1Y3Rpb25fdG9fc3ViYWdlbnRzLnRzJyxcbiAgICAgICAgICAgICcuL3NyYy9kYXRhL2xlc3NvbnMvbW9kZWxfY29udGV4dF9wcm90b2NvbF9hZHZhbmNlZF90b3BpY3MudHMnXG4gICAgICAgICAgXSxcbiAgICAgICAgICBsZXNzb25zX2Nsb3VkOiBbXG4gICAgICAgICAgICAnLi9zcmMvZGF0YS9sZXNzb25zL2NsYXVkZV93aXRoX2FtYXpvbl9iZWRyb2NrLnRzJyxcbiAgICAgICAgICAgICcuL3NyYy9kYXRhL2xlc3NvbnMvY2xhdWRlX3dpdGhfZ29vZ2xlX2Nsb3VkX3NfdmVydGV4X2FpLnRzJ1xuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAxMjAwXG4gIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvUyxTQUFTLG9CQUFvQjtBQUNqVSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBRmpCLElBQU0sbUNBQW1DO0FBSXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixjQUFjO0FBQUEsVUFDWixRQUFRLENBQUMsU0FBUyxhQUFhLG9CQUFvQixjQUFjO0FBQUEsVUFDakUsZ0JBQWdCO0FBQUEsWUFDZDtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQSxpQkFBaUI7QUFBQSxZQUNmO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0EsYUFBYTtBQUFBLFlBQ1g7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0EsZUFBZTtBQUFBLFlBQ2I7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsdUJBQXVCO0FBQUEsRUFDekI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
