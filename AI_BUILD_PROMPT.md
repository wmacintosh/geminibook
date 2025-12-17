# AI Prompt: Build Shirley's Kitchen - Family Cookbook Web Application

## Project Overview

Build a modern, interactive digital family cookbook web application called "Shirley's Kitchen" that preserves and celebrates cherished recipes from Shirley MacIntosh and her family. This application combines traditional recipe management with AI-powered cooking assistance using the Google Gemini API.

## Core Purpose

Create a warm, elegant web interface that serves as both a digital recipe repository and an intelligent cooking companion. The app should honor the legacy of family recipes while providing modern conveniences like AI cooking tips, ingredient substitutions, recipe image generation, and text-to-speech narration.

## Technical Stack

### Frontend Framework
- **React 18.2.0** with TypeScript
- **React Router DOM 6.22.3** for navigation
- **Vite** as build tool and dev server
- **Tailwind CSS** (via CDN) for styling

### Key Dependencies
- `@google/genai` (v1.34.0+) - Google Gen AI SDK (unified SDK for Gemini, Imagen, Veo, etc.)
- `lucide-react` (v0.344.0) - Icon library
- TypeScript 5.8.2

**Note:** This app uses the new `@google/genai` package, which is the unified Google Gen AI SDK that replaced the deprecated `@google/generative-ai` package. See [migration guide](https://ai.google.dev/gemini-api/docs/migrate) for details.

### Build & Development
- Vite dev server on port 3000
- ESM modules with import maps for browser compatibility
- TypeScript with React JSX support
- Hot module replacement for development

## Architecture & File Structure

```
/
├── App.tsx                    # Main app with routing and page components
├── index.tsx                  # App entry point
├── index.html                 # HTML template with Tailwind CDN
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies and scripts
├── types.ts                  # TypeScript interfaces
├── data.ts                   # Initial recipes and constants
├── utils.ts                  # Utility functions
├── context/
│   └── RecipeContext.tsx     # Global state management
├── components/
│   ├── Layout.tsx            # Main layout with sidebar
│   ├── Intro.tsx             # Landing page with family history
│   ├── RecipeCard.tsx        # Grid view recipe card
│   ├── RecipeListItem.tsx    # List view recipe item
│   ├── CategoryCard.tsx      # Category selection card
│   ├── RecipeDetail.tsx      # Full recipe view with AI features
│   ├── RecipeModal.tsx       # Add/Edit recipe form
│   ├── StarRating.tsx        # Rating component
│   ├── DynamicListInput.tsx  # Dynamic ingredient/instruction input
│   ├── DeleteConfirmationModal.tsx
│   ├── DataExportModal.tsx   # Import/Export functionality
│   ├── PrintLayout.tsx       # Print-optimized layout
│   └── ErrorBoundary.tsx     # Error handling
└── services/
    └── searchService.ts      # Simulated backend search
```

## Data Model

### Recipe Interface
```typescript
interface Recipe {
  id: string;              // Unique identifier (UUID)
  title: string;           // Recipe name
  category: Category;      // One of 7 categories (enum)
  ingredients: string[];   // List of ingredients
  instructions: string[];  // Step-by-step instructions
  yields?: string;         // Servings/yield information
  prepTime?: string;       // Preparation time
  cookTime?: string;       // Cooking time
  temp?: string;           // Cooking temperature
  description?: string;    // Recipe description/story
  addedBy: string;        // Family member name
  userColor?: string;     // Color code for the contributor
  timestamp: number;      // Creation timestamp
  imageUrl?: string;      // Optional recipe image URL
  rating?: number;        // 0-5 star rating
}
```

### Categories (7 total)
1. Appetizers & Dips
2. Soups & Salads
3. Breads & Muffins
4. Main Dishes
5. Side Dishes
6. Desserts & Baked Goods
7. Sauces, Condiments & Extras

### Family Members
Predefined contributors: Nan, Wade, Donetta, Adrienne, Cathy, Jean, Carolyn, Dorothy, Selma, Bernice, Gail, Laurie, Joanie, Bernadette, Wanda, Molly

Each family member has an assigned color for visual identification throughout the app.

## Key Features

### 1. Landing Page (Intro Component)
- **MacIntosh Family Tartan Background** - Red, green, blue, and gold pattern
- **Family Crest Display** - MacIntosh clan crest image
- **Personal Story** - Heartfelt introduction about Nan Shirley and family traditions
- **API Key Management** - Integration with AI Studio for Gemini API key selection
- Elegant typography using Playfair Display (serif) and Lato (sans-serif) fonts

### 2. Navigation & Layout
- **Responsive Sidebar** (Desktop) with:
  - Categories overview
  - All Recipes view
  - Favorites collection
  - Print Cookbook mode
  - Quick category navigation
  - Data management tools
- **Mobile Menu** - Hamburger menu for mobile devices
- **Floating Add Button** - Quick access to create new recipes

### 3. Recipe Browsing

#### Categories Page
- Grid of category cards showing:
  - Category name
  - Recipe count
  - Visual styling
- Click to filter recipes by category

#### Recipe List Page (Advanced Features)
- **Dual View Modes**: Grid cards or compact list view
- **Search**: Search by title, ingredients, or description
- **Multi-Dimensional Sorting**:
  - Alphabetical (title)
  - Date added
  - Cook time
  - Rating
  - Ascending/descending toggle
  
- **Advanced Filtering Panel**:
  - Minimum rating filter (star-based)
  - Maximum cook time slider
  - Owner/contributor filter
  - Ingredient exclusion (allergy/dietary restrictions)
  - Active filter count badge
  - Reset filters button

### 4. Recipe Detail View (AI-Enhanced)

#### Core Recipe Display
- Full recipe information with elegant typography
- Avatar badge for recipe contributor
- Star rating (interactive, editable)
- Favorite toggle
- Edit and delete actions
- Print and share options

#### AI-Powered Features (Google Gemini Integration)

**1. Cooking Tips & Suggestions**
- Request AI-generated expert cooking tips
- Get "Nan's Secret Twist" suggestions
- Context-aware recommendations based on ingredients
- Model: `gemini-3-flash-preview`

**2. Ingredient Substitutions Search**
- Natural language query support
- Search for ingredient alternatives
- Get health/allergy-friendly suggestions
- Returns formatted text with relevant links

**3. AI Recipe Image Generation**
- Generate photorealistic food images
- Configurable image sizes: 1K, 2K, 4K
- Settings panel for quality/aspect ratio
- Uses Gemini's image generation capabilities
- Saves generated image URL to recipe
- Loading states with visual feedback

**4. Text-to-Speech Recipe Narration**
- Read entire recipe aloud using Web Speech API
- Natural voice for hands-free cooking
- Visual indicator when speaking
- Start/stop controls

### 5. Recipe Management

#### Add/Edit Recipe Modal
- Comprehensive form with validation
- Dynamic ingredient list (add/remove)
- Dynamic instruction steps (add/remove)
- Category selection dropdown
- Family member selection with auto-color assignment
- Optional fields: description, cook time, prep time, temperature, yields
- Custom contributor color picker
- Image URL input
- Form validation before submission

#### Delete Confirmation
- Safety modal to prevent accidental deletions
- Confirms recipe title before deletion

### 6. Favorites System
- Toggle recipes as favorites (heart icon)
- Dedicated favorites page
- Persisted in localStorage
- Visual distinction for favorite recipes

### 7. Data Management

#### Export Options
- **JSON Export**: Complete data structure for backup
- **CSV Export**: Spreadsheet-compatible format
- Download as file with timestamp

#### Import Functionality
- JSON file import to restore/merge recipes
- Validation and error handling
- Merge strategies to preserve user data

### 8. Print Layout
- Print-optimized recipe book layout
- Professional typography
- Page-break-aware formatting
- All recipes in printable format
- Exit to return to normal view

## State Management

### React Context (RecipeContext)
- Central state for all recipes
- Favorites list management
- localStorage persistence
- CRUD operations: add, update, delete recipes
- Recipe import/export
- Loading and error states
- Search service index synchronization

### localStorage Keys
- `shirleys_kitchen_recipes` - Recipe data
- `shirleys_kitchen_favorites` - Favorited recipe IDs

### State Persistence Strategy
- Auto-save to localStorage on every change
- Merge strategy on load to preserve user edits
- Fallback to initial recipes if storage corrupted

## Design System

### Color Palette

#### Primary Colors
- Stone grays (50-900): Primary UI elements
- Amber (50-900): Accent color, warmth
- Sky blues (50-950): Interactive elements, CTAs
- Red/Teal: Family member colors

#### Family Member Color System
16 distinct colors assigned to family members for visual identification

### Typography
- **Serif Font**: "Playfair Display" - Headings, elegant text
- **Sans Font**: "Lato" - Body text, UI elements
- Font loading via Google Fonts CDN

### UI Patterns
- **Cards**: Rounded corners, subtle shadows, hover effects
- **Animations**: Fade-in, scale-in on page load
- **Transitions**: Smooth 300ms transitions on interactive elements
- **Responsive Breakpoints**: Mobile-first, md (768px), lg (1024px), xl (1280px)
- **Custom Scrollbars**: Styled thin scrollbars with hover effects

### Component Styling
- Tailwind utility classes
- Custom CSS for complex patterns (tartan, scrollbars)
- Inline tailwind config for extended colors and animations

## AI Integration Details

### Gemini API Setup
```typescript
// Environment variable configuration
process.env.API_KEY = GEMINI_API_KEY

// SDK initialization with new @google/genai package
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Or dynamic import (as used in the app)
const { GoogleGenAI } = await import("@google/genai");
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
```

### API Key Management
- Integration with AI Studio key selection UI
- Browser-based process.env shim
- Vite environment variable mapping
- Graceful fallback if key missing
- User-friendly error messages

### Model Usage
- **Text Generation**: `gemini-3-flash-preview`
- **Image Generation**: Built-in Imagen capabilities
- **Streaming**: Not used (complete responses)
- **Error Handling**: Comprehensive try-catch with user feedback

### Prompt Engineering Examples

**Cooking Tips Prompt**:
```
Act as a warm, professional chef who specializes in family heirlooms. 
Provide 3 short, expert tips for making "[RECIPE_TITLE]" perfectly. 
Context ingredients: [INGREDIENTS_LIST].
Also, suggest one "Nan's Secret Twist" (a modern or unique ingredient addition) 
that would elevate this specific dish.
Format the output with clear headers.
```

**Substitutions Search Prompt**:
```
You are a culinary expert. The user is making [RECIPE_TITLE] and wants to know: [USER_QUERY]
Provide helpful ingredient substitution information, including amounts/ratios if relevant.
Format: Brief answer followed by 2-3 links to authoritative culinary resources.
```

**Image Generation Prompt**:
```
Professional food photography of [RECIPE_TITLE]. 
[RECIPE_DESCRIPTION if available]
Beautifully plated, well-lit, appetizing, restaurant quality, 
garnished appropriately, [SIZE] resolution
```

## User Experience Flow

### First-Time User
1. Land on Intro page with family story
2. Prompted to set API key (if using AI features)
3. Click "Enter Kitchen" to access cookbook
4. Explore categories or browse all recipes
5. View recipe details
6. Try AI features (tips, substitutions, image generation)

### Returning User
1. App loads directly into last viewed page or categories
2. Favorites and custom recipes preserved
3. All edits/ratings persisted
4. Seamless experience across sessions

### Recipe Discovery
1. Browse by category
2. Search by text
3. Filter by rating, cook time, owner
4. Exclude ingredients (dietary restrictions)
5. Sort by various criteria
6. Toggle between grid and list views

### Recipe Interaction
1. View full recipe
2. Rate with stars
3. Add to favorites
4. Get AI cooking tips
5. Search ingredient substitutions
6. Generate recipe image
7. Listen to recipe narration
8. Print or share
9. Edit or delete (if owner)

## Error Handling

### API Errors
- Key not found: Prompt user to select key
- Rate limits: User-friendly message
- Network errors: Retry suggestions
- Model errors: Graceful fallback

### Data Errors
- localStorage corruption: Fallback to initial recipes
- Import validation: Reject invalid JSON/CSV
- Form validation: Inline error messages

### UI Error Boundaries
- React Error Boundary component wraps app
- Prevents full app crashes
- User-friendly error display

## Performance Considerations

### Optimization Strategies
- React.memo for expensive components
- useMemo for filtered/sorted recipe lists
- Debouncing for search input
- Lazy loading for AI features
- LocalStorage caching
- CDN for fonts and icons

### Loading States
- Skeleton screens for data loading
- Spinners for AI operations
- Progress indicators for long operations
- Optimistic UI updates

## Accessibility Features

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus management in modals
- Screen reader friendly text
- Color contrast compliance
- Responsive touch targets (min 44px)

## Browser Compatibility

### Supported Browsers
- Modern Chrome/Edge (Chromium)
- Firefox
- Safari 15+
- Mobile Safari (iOS 15+)
- Chrome Mobile

### Required APIs
- Web Storage (localStorage)
- Fetch API
- Crypto API (for UUID generation)
- Web Speech API (for narration)
- File API (for import/export)

## Development Workflow

### Scripts
```json
{
  "dev": "vite",           // Start dev server on port 3000
  "build": "vite build",   // Production build
  "preview": "vite preview" // Preview production build
}
```

### Environment Setup
1. Install dependencies: `npm install`
2. Create `.env.local` file with `GEMINI_API_KEY`
3. Run dev server: `npm run dev`
4. Open browser to `http://localhost:3000`

### Hot Reload
- Vite HMR for instant updates
- React Fast Refresh preserves state
- CSS updates without page reload

## Deployment Considerations

### Build Output
- Static files in `dist/` directory
- ESM modules for modern browsers
- Optimized and minified assets

### Hosting Options
- AI Studio (as shown in README)
- Vercel, Netlify, GitHub Pages
- Any static hosting service

### Environment Variables
- Must configure `GEMINI_API_KEY` in hosting platform
- Vite prefix: `VITE_` for client-side access
- Build-time variable injection

## Security Best Practices

### API Key Protection
- Never commit API keys to repository
- Use environment variables
- Client-side key managed through AI Studio integration
- Prompt user to set key on first use

### Data Privacy
- All data stored locally in browser
- No server-side persistence
- User owns their data completely
- Export functionality for backups

### Input Validation
- Sanitize all user inputs
- Validate recipe data structure
- Check file types on import
- Prevent XSS in recipe content

## Testing Recommendations

### Unit Tests
- Utility functions (ID generation, color assignment)
- Data transformation (import/export)
- Search service

### Integration Tests
- Recipe CRUD operations
- Favorites management
- localStorage persistence
- Navigation flows

### E2E Tests
- Complete user journeys
- Recipe creation flow
- AI feature interactions
- Print layout

## Future Enhancement Ideas

### Community Features
- Share recipes via URL
- Recipe comments/reviews
- Photo uploads (not just URLs)
- Recipe collections/meal plans

### AI Enhancements
- Nutritional information analysis
- Dietary restriction auto-detection
- Recipe scaling calculations
- Meal planning suggestions
- Cooking time predictions

### Additional Features
- Recipe tags/labels
- Multi-language support
- Dark mode
- Voice commands
- Progressive Web App (offline support)
- Recipe duplication
- Shopping list generation
- Timer integration
- Video integration

## Special Requirements

### MacIntosh Family Branding
- Must include family crest
- Tartan pattern design (red, green, blue, gold)
- Warm, traditional aesthetic
- Family member attribution throughout
- Personal touches in copy ("Nan", "Shirley's Kitchen")

### Emotional Design
- Nostalgic, warm color palette
- Elegant serif typography
- Personal stories and context
- Family-centric language
- Respectful preservation of legacy

### AI as Enhancement, Not Replacement
- AI features are optional helpers
- Core functionality works without AI
- Recipes remain the central focus
- AI enhances, doesn't replace, human touch

## Implementation Notes

### Key Technical Decisions

1. **Why React Context vs Redux/State Library?**
   - Simple state structure (recipes + favorites)
   - No complex async flows beyond API calls
   - Reduces bundle size
   - Sufficient for app scale

2. **Why localStorage?**
   - No backend required
   - Instant read/write
   - User data privacy
   - Works offline
   - Simple backup/restore via export

3. **Why Tailwind CDN?**
   - Rapid development
   - No build step for styles
   - Dynamic class generation
   - Inline config support

4. **Why Vite?**
   - Fast development server
   - Modern build tool
   - ESM support
   - TypeScript out of box
   - Minimal configuration

5. **Why Import Maps?**
   - Direct browser module resolution
   - No bundler for dependencies
   - Works with Vite dev server
   - Compatible with AI Studio deployment

## Sample Recipe Data

The app initializes with several pre-loaded family recipes including:
- Ham & Potatoes Au Gratin
- Nan's Oatmeal Cookies
- Spinach Dip
- Butter Tarts
- Traditional family favorites with personal stories

Each recipe includes complete ingredients, instructions, cook times, and contributor attribution.

## Development Checklist

When building this application, ensure:

- [ ] All 7 recipe categories implemented
- [ ] Recipe CRUD operations working
- [ ] Favorites system functional
- [ ] Search and filtering operational
- [ ] Sorting by all 4 criteria working
- [ ] Dual layout modes (grid/list) implemented
- [ ] Responsive design for mobile/tablet/desktop
- [ ] AI cooking tips integration complete
- [ ] AI image generation working
- [ ] Ingredient substitution search functional
- [ ] Text-to-speech narration implemented
- [ ] Recipe rating system operational
- [ ] Import/Export functionality working
- [ ] Print layout properly formatted
- [ ] localStorage persistence reliable
- [ ] Error handling comprehensive
- [ ] Loading states for all async operations
- [ ] API key management integrated
- [ ] MacIntosh family branding throughout
- [ ] All 16 family members with colors
- [ ] Form validation on recipe submission
- [ ] Delete confirmation dialogs
- [ ] Intro page with family story
- [ ] Navigation and routing complete

## Conclusion

This application is a loving digital tribute to family culinary heritage, combining elegant design, modern web technologies, and AI capabilities to preserve and enhance the experience of cooking with cherished family recipes. The result should feel personal, warm, and respectful while providing powerful modern conveniences that make cooking easier and more enjoyable.

Build this with attention to detail, thoughtful user experience, and respect for the MacIntosh family legacy.
