# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a demonstration repository for Claude Code's Test-Driven Development (TDD) capabilities. It contains a basic Express.js web application built with Node.js, serving as a foundation for showcasing TDD workflows.

## Architecture

### Application Structure
- **Entry Point**: `bin/www` - HTTP server setup and port configuration
- **Main App**: `app.js` - Express application configuration, middleware setup, and route mounting
- **Routes**: `routes/` directory contains route handlers
  - `routes/index.js` - Home page route handler
  - `routes/users.js` - User-related route handler  
- **Views**: `views/` directory with Jade templates for server-side rendering
- **Static Assets**: `public/` directory for CSS, JavaScript, and image files

### Key Dependencies
- **Express.js** (v4.16.1) - Web application framework
- **Jade** (v1.11.0) - Template engine for views
- **Morgan** - HTTP request logger middleware
- **Cookie Parser** - Cookie parsing middleware

## Development Commands

### Basic Operations
```bash
# Install dependencies
npm install

# Start the application
npm start

# Start development server (if nodemon is available)
npm run dev

# Run tests
npm test

# Run tests in watch mode (for development)
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run a specific test file
npx jest test/specific-file.test.js

# Run tests matching a pattern
npx jest --testNamePattern="specific test name"
```

The application runs on port 3000 by default (configurable via PORT environment variable).

### Testing Framework
- **Jest** - JavaScript testing framework
- **Supertest** - HTTP assertion library for testing Express routes
- Tests are located in the `test/` directory
- Test files should follow the pattern `*.test.js` or `*.spec.js`

## MANDATORY TDD PROCESS - NO EXCEPTIONS

You MUST follow Test-Driven Development (TDD) for ALL code changes. This is not optional.

### REQUIRED TDD CYCLE - FOLLOW EXACTLY:

1. **WRITE TEST FIRST** - Before writing ANY implementation code
2. **RUN TEST** - Verify it fails (Red)
3. **WRITE MINIMAL CODE** - Just enough to make test pass (Green)
4. **REFACTOR** - Improve code while keeping tests passing
5. **REPEAT** - For each new feature/requirement

### CRITICAL RULES - NEVER VIOLATE:

- **NEVER write implementation code before writing a test for it**
- **NEVER reimplement functions inside test files** - Tests must import and use the actual implementation
- **NEVER skip writing tests** - Every function/method/class requires tests
- **ALWAYS run tests after writing them to ensure they fail initially**
- **ALWAYS import the actual code being tested** - No inline implementations in tests

### TEST FRAMEWORK COMMANDS

The project is configured with Jest and Supertest. Essential test commands:

```bash
npm test                    # Run all tests
npm run test:watch         # Run tests in watch mode
npm run test:coverage      # Generate coverage report
npx jest path/to/test.js   # Run specific test file
```

### RESPONSE FORMAT

When implementing any feature, you MUST structure your response as:

```
## TDD Cycle [N]: [Feature Description]

### 1. Test First
[Write the test file]

### 2. Run Test (Expected: FAIL)
[Show test execution command and expected failure]

### 3. Implementation
[Write minimal implementation to make test pass]

### 4. Run Test (Expected: PASS)
[Show test execution command and expected success]

### 5. Refactor (if needed)
[Any improvements while keeping tests green]
```

## VERIFICATION CHECKLIST

Before completing any task, verify:

- [ ] Tests were written BEFORE implementation
- [ ] Tests import actual implementation (no inline code)
- [ ] Tests can be executed independently
- [ ] Implementation is minimal and focused
- [ ] All tests pass

## Development Notes

### Express.js Patterns
- Routes are organized in separate files under `routes/`
- Middleware is configured in `app.js`
- Error handling follows Express conventions with 404 and error handler middleware
- View engine is set to Jade with views in `views/` directory

### Module System
This project uses CommonJS modules (`require`/`module.exports`). When adding new functionality, maintain consistency with this pattern unless explicitly modernizing to ES modules.

Remember: TDD is not just about having tests - it's about the discipline of writing tests FIRST and using them to drive the implementation. Follow this process religiously.