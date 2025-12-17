<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Shirley's Kitchen - Family Cookbook

A digital interactive cookbook preserving cherished recipes from Shirley MacIntosh and her family, featuring AI-powered cooking assistance with Google Gemini.

View your app in AI Studio: https://ai.studio/apps/drive/1Rk-NLmQ5e6rr8P0NwavHeSgtRjYzOmHV

## 🤖 AI Build Prompt Available

Want to rebuild this app or learn how it works? Check out:

- **[AI_BUILD_PROMPT.md](AI_BUILD_PROMPT.md)** - Complete specification for building this app (20KB, 630 lines)
- **[HOW_TO_USE_AI_PROMPT.md](HOW_TO_USE_AI_PROMPT.md)** - Guide for using the AI prompt

These documents contain everything needed for an AI to recreate this application from scratch, including architecture, features, design system, and implementation details.

## Run Locally

**Prerequisites:**  Node.js 16+

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set the `GEMINI_API_KEY` in `.env.local`:
   ```bash
   GEMINI_API_KEY=your_api_key_here
   ```

3. Run the app:
   ```bash
   npm run dev
   ```

4. Open http://localhost:3000

## Features

- 🍳 Browse and manage family recipes by category
- 🔍 Advanced search and filtering
- ⭐ Recipe ratings and favorites
- 🤖 AI cooking tips and suggestions (Gemini)
- 🖼️ AI recipe image generation
- 🔄 Ingredient substitution recommendations
- 🔊 Text-to-speech recipe narration
- 📊 Import/export recipe data
- 🖨️ Print-optimized cookbook layout
- 💾 localStorage persistence
