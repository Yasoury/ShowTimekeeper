# Show Timekeeper Landing Page

## Overview

This is a React-based landing page for Show Timekeeper, a mobile application that helps users track their movie and TV show viewing time. The application provides insights into viewing habits and helps users make informed decisions about their entertainment consumption. The landing page is built with modern web technologies and features bilingual support (English and Arabic) with responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for the main application framework
- **Vite** as the build tool and development server with hot module replacement
- **Wouter** for client-side routing instead of React Router
- **Tailwind CSS** with custom CSS variables for theming and responsive design
- **shadcn/ui** component library built on Radix UI primitives for consistent UI components
- **TanStack Query** for state management and API caching

### Component Structure
- Modular component architecture with separate sections (Hero, Features, Screenshots, Download, Footer)
- Custom UI components extending shadcn/ui base components
- Language provider for internationalization context management
- Dark theme support with CSS custom properties

### Styling Approach
- Utility-first CSS with Tailwind CSS
- Custom gradient backgrounds and animations
- Responsive design with mobile-first approach
- CSS variables for theme customization and consistency
- Custom fonts (Cairo) loaded from Google Fonts

### Backend Architecture
- **Express.js** server with TypeScript
- Development-only Vite integration for hot reloading
- Simple routing structure for health checks and static file serving
- Memory-based storage implementation for development

### Development Setup
- ESM modules throughout the codebase
- TypeScript configuration with path aliases for clean imports
- Vite configuration with custom aliases and development plugins
- Automatic error handling and runtime error overlays

### Database Schema
- **Drizzle ORM** with PostgreSQL dialect for type-safe database operations
- User schema with basic authentication fields (username, password)
- Database configuration for Neon serverless PostgreSQL
- Migration support through Drizzle Kit

### Internationalization
- Context-based language switching between English and Arabic
- RTL (right-to-left) text support for Arabic language
- Translation key system with fallback to English
- Local storage persistence for language preferences

### State Management
- React Context for language and theme management
- TanStack Query for server state and caching
- Local component state using React hooks
- Custom hooks for mobile detection and toast notifications

## External Dependencies

### Database Services
- **Neon Database** - Serverless PostgreSQL database hosting
- **Drizzle ORM** - Type-safe database toolkit and query builder

### UI and Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Headless UI component primitives
- **shadcn/ui** - Pre-built component library
- **Lucide React** - Icon library
- **Google Fonts** - Web font service (Cairo font family)

### Development Tools
- **Vite** - Build tool and development server
- **TypeScript** - Static type checking
- **ESBuild** - JavaScript bundler for production builds
- **PostCSS** with Autoprefixer for CSS processing

### React Ecosystem
- **React Hook Form** with Zod resolvers for form handling
- **TanStack Query** - Server state management
- **Wouter** - Lightweight client-side routing
- **Date-fns** - Date utility library

### Mobile App Integration
- Links to iOS App Store and Google Play Store
- App-ads.txt file for advertising network verification
- Social media integration (Twitter, Instagram, Facebook)

### Deployment Considerations
- Replit-specific plugins and configurations for development
- Production build optimization with Vite
- Static asset serving configuration
- Environment variable management for database connections