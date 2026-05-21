# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # TypeScript check + Vite bundle
npm run lint      # ESLint
npm run preview   # Preview production build
```

## Architecture

React + TypeScript app built with Vite. Entry point is [src/main.tsx](src/main.tsx); the root component is [src/App.tsx](src/App.tsx).

Planned tech: MUI for UI components, Framer Motion for animations, HTML5 Audio API for music playback. These are not yet installed — add them via npm when needed.

## Component Structure

Each component lives in its own PascalCase directory with three co-located files:

```
ComponentName/
├── ComponentName.tsx         # component
├── ComponentName.styles.ts   # styles (MUI sx / styled)
└── ComponentName.types.ts    # TypeScript interfaces/types
```

## Coding Rules

- No `any` types — enforce strict typing throughout
- File and directory names are PascalCase
- TypeScript target is ES2023; strict unused-variable checks are enabled (`noUnusedLocals`, `noUnusedParameters`)
