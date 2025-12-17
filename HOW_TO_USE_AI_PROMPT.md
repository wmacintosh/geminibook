# How to Use the AI Build Prompt

This guide explains how to use the `AI_BUILD_PROMPT.md` file to have an AI rebuild this application.

## Quick Start

1. **Copy the entire content** of `AI_BUILD_PROMPT.md`
2. **Provide it to an AI assistant** (like Claude, ChatGPT, or Gemini) with instructions like:

```
Please build the application described in this prompt. Create all the necessary files 
with proper structure, implement all features, and ensure everything works correctly.
```

## What the AI Will Build

The AI will create a complete React/TypeScript web application featuring:

- **Family Cookbook Interface** - Browse, search, and manage recipes
- **AI-Powered Features** - Cooking tips, ingredient substitutions, recipe image generation
- **Recipe Management** - Full CRUD operations with localStorage persistence
- **Advanced Filtering** - Multi-criteria search, sort, and filtering
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Print Support** - Print-optimized cookbook layout
- **Data Import/Export** - Backup and restore functionality

## Best Practices

### For the AI System

If you're an AI reading this to build the app:

1. **Follow the structure exactly** - The file structure is optimized for this app
2. **Implement all features** - Don't skip any features listed in the prompt
3. **Use the specified versions** - Package versions are tested and working
4. **Include error handling** - The prompt specifies comprehensive error handling
5. **Test as you build** - Ensure each component works before moving to the next

### For Humans Using the Prompt

1. **Be specific** - If you want modifications, describe them clearly
2. **Ask for clarification** - If something is unclear, ask the AI to explain
3. **Review incrementally** - Ask the AI to build and show you each major component
4. **Test thoroughly** - Run the app and test all features after building

## Incremental Build Approach

If you want the AI to build incrementally, use this structure:

### Phase 1: Setup
```
First, set up the project structure, package.json, and configuration files.
```

### Phase 2: Data Layer
```
Next, implement the data model, types, initial recipes, and context.
```

### Phase 3: Core Components
```
Now build the core components: Layout, RecipeCard, RecipeDetail, CategoryCard.
```

### Phase 4: Features
```
Implement the features: search, filtering, sorting, favorites.
```

### Phase 5: AI Integration
```
Add the Google Gemini AI features: tips, substitutions, image generation.
```

### Phase 6: Polish
```
Add the intro page, print layout, import/export, and final styling.
```

## Example Prompts

### Complete Build
```
Please read the attached AI_BUILD_PROMPT.md and build the complete Shirley's Kitchen 
Family Cookbook application. Create all files, implement all features, and ensure the 
app is ready to run with `npm install` and `npm run dev`.
```

### Build with Modifications
```
Please build the application from AI_BUILD_PROMPT.md with these modifications:
1. Add dark mode toggle
2. Change the color scheme to blue instead of stone/amber
3. Add a recipe ratings histogram on the categories page

Otherwise, follow the prompt exactly.
```

### Specific Component
```
I only need you to build the RecipeDetail component from the AI_BUILD_PROMPT.md. 
Include all AI features: tips, substitutions, image generation, and text-to-speech.
```

## Verification Checklist

After the AI builds the app, verify:

- [ ] All files from the file structure exist
- [ ] `npm install` runs without errors
- [ ] `npm run dev` starts the dev server
- [ ] App loads at http://localhost:3000
- [ ] Intro page displays with MacIntosh family branding
- [ ] Can browse recipes by category
- [ ] Search and filtering work
- [ ] Can add, edit, delete recipes
- [ ] Favorites system works
- [ ] AI features work with valid API key
- [ ] Print layout displays correctly
- [ ] Import/Export functionality works
- [ ] localStorage persistence works (refresh page, data remains)

## Troubleshooting

### "Module not found" errors
- Ensure all dependencies in package.json are installed
- Check import paths match the file structure

### Build fails
- Verify Node.js version (should be 16+)
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npx tsc --noEmit`

### AI features don't work
- Ensure GEMINI_API_KEY is set in `.env.local`
- Check browser console for API errors
- Verify API key has proper permissions and billing enabled

### Styling looks wrong
- Tailwind CDN should be loaded in index.html
- Check browser console for 404 errors
- Verify Tailwind config in index.html is present

## Customization Ideas

After building, you can customize:

1. **Branding** - Change family crest, colors, fonts
2. **Features** - Add recipe collections, meal planning, shopping lists
3. **AI Models** - Experiment with different Gemini models
4. **Storage** - Replace localStorage with a real database
5. **Sharing** - Add URL sharing, social media integration
6. **Offline** - Convert to PWA for offline access

## Support

If you encounter issues:

1. Check the original repository at [wmacintosh/geminibook](https://github.com/wmacintosh/geminibook)
2. Review the working implementation for reference
3. Ask the AI to debug specific issues with detailed error messages
4. Consult the [Gemini API documentation](https://ai.google.dev/gemini-api/docs)

## License & Credits

This application is a family project honoring Shirley MacIntosh. When using the AI prompt to build your own version:

- Respect the personal family story and branding (or replace with your own)
- Credit the MacIntosh family for the original concept if redistributing
- Follow Google's Gemini API terms of service
- Ensure proper attribution for any libraries used

---

Happy building! This prompt represents a complete, production-ready application specification that an AI can faithfully recreate.
