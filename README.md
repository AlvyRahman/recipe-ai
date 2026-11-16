# Recipe AI

A simple React app that suggests recipes based on the ingredients you have on hand, powered by LLM API.

## Features

- Add ingredients to a running list
- Generate an AI-suggested recipe once you’ve added more than 3 ingredients
- View the generated recipe rendered in Markdown

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [@google/genai](https://www.npmjs.com/package/@google/genai) (Gemini API)
- [react-markdown](https://github.com/remarkjs/react-markdown)

## Getting Started

### Prerequisites

- Node.js and npm
- A Google Gemini API key

### Installation

1. Clone the repository and move into the project directory:
   ```bash
   git clone <your-repo-url>
   cd recipe-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add your API key:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` — Start the Vite development server
- `npm run build` — Build the app for production
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint

## Project Structure

```text
src/
├── ai.js                  # Gemini API integration and prompt setup
├── App.jsx                # App layout
├── main.jsx               # React entry point
├── index.css              # Global styles
├── assets/                # Static assets
└── components/
    ├── Header.jsx         # App header
    ├── Main.jsx           # Ingredient input and recipe generation logic
    ├── IngredientList.jsx # Ingredient list and recipe trigger
    └── Recipe.jsx         # Renders generated recipe markdown
```

## Notes

- Your ingredient list is sent to the Gemini API to generate a recipe suggestion.
- Keep your `.env` file private and never commit API keys to version control.