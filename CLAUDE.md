# CLAUDE.md - Todo App Documentation for AI Assistants

> **Last Updated:** 2025-12-30
> **Repository:** ngthefarmer/todo-app
> **Purpose:** Comprehensive guide for AI assistants working on this codebase

## Table of Contents

1. [Project Overview](#project-overview)
2. [Codebase Structure](#codebase-structure)
3. [Development Workflow](#development-workflow)
4. [Key Conventions](#key-conventions)
5. [Testing Guidelines](#testing-guidelines)
6. [Git Workflow](#git-workflow)
7. [Code Quality Standards](#code-quality-standards)
8. [Common Tasks](#common-tasks)

---

## Project Overview

### What is This Project?

This is a **Todo App** - a task management application that allows users to create, organize, and track their tasks and to-do items.

### Tech Stack

*Note: To be determined during initial development. Update this section as the stack is chosen.*

Expected technologies may include:
- **Frontend:** React, Vue, or similar modern framework
- **Backend:** Node.js, Python (Flask/Django), or similar
- **Database:** PostgreSQL, MongoDB, or SQLite
- **Testing:** Jest, Pytest, or framework-appropriate testing tools
- **Build Tools:** Webpack, Vite, or framework defaults

### Core Features

1. **Task Management**
   - Create, read, update, delete (CRUD) tasks
   - Mark tasks as complete/incomplete
   - Task prioritization
   - Due dates and reminders

2. **Organization**
   - Categories or tags
   - Task lists or projects
   - Search and filter functionality

3. **User Experience**
   - Clean, intuitive interface
   - Responsive design (mobile & desktop)
   - Persistence (local storage or database)

---

## Codebase Structure

### Expected Directory Layout

```
todo-app/
├── .git/                 # Git version control
├── src/                  # Source code
│   ├── components/       # Reusable UI components
│   ├── pages/           # Page-level components or routes
│   ├── services/        # Business logic and API calls
│   ├── utils/           # Helper functions and utilities
│   ├── models/          # Data models and schemas
│   ├── config/          # Configuration files
│   └── styles/          # Global styles and themes
├── tests/               # Test files
│   ├── unit/           # Unit tests
│   ├── integration/    # Integration tests
│   └── e2e/            # End-to-end tests
├── public/             # Static assets
├── docs/               # Additional documentation
├── .gitignore          # Git ignore rules
├── package.json        # Dependencies (if Node.js)
├── requirements.txt    # Dependencies (if Python)
├── README.md           # User-facing documentation
├── CLAUDE.md           # This file - AI assistant guide
└── CONTRIBUTING.md     # Contribution guidelines
```

### Key Files and Their Purposes

- **CLAUDE.md**: AI assistant reference (this file)
- **README.md**: User documentation, setup instructions, project description
- **package.json / requirements.txt**: Dependency management
- **.gitignore**: Files to exclude from version control
- **Configuration files**: Framework-specific configs (e.g., vite.config.js, tsconfig.json)

---

## Development Workflow

### Setting Up the Development Environment

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd todo-app
   ```

2. **Install dependencies**
   ```bash
   npm install  # or pip install -r requirements.txt
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env` (if applicable)
   - Configure database connections, API keys, etc.

4. **Run development server**
   ```bash
   npm run dev  # or python app.py, etc.
   ```

### Development Cycle

1. **Branch Strategy**: Create feature branches from main/master
2. **Implement**: Write code following conventions below
3. **Test**: Write and run tests for new features
4. **Commit**: Use clear, descriptive commit messages
5. **Push**: Push to feature branch
6. **Review**: Create pull request for code review

---

## Key Conventions

### Naming Conventions

#### Files and Directories
- **Components**: PascalCase (e.g., `TaskList.jsx`, `TodoItem.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.js`, `apiClient.js`)
- **Tests**: Match source file with `.test` or `.spec` suffix (e.g., `TaskList.test.jsx`)
- **Styles**: Match component name (e.g., `TaskList.css`, `TaskList.module.css`)

#### Code Naming
- **Variables/Functions**: camelCase (e.g., `getUserTasks`, `isCompleted`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_TASKS`, `API_ENDPOINT`)
- **Classes**: PascalCase (e.g., `TaskManager`, `UserService`)
- **Interfaces/Types** (if TypeScript): PascalCase with `I` prefix or descriptive name (e.g., `ITask`, `TaskProps`)

### Code Organization

#### Component Structure (React example)
```javascript
// 1. Imports
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './TaskItem.css';

// 2. Component definition
const TaskItem = ({ task, onComplete, onDelete }) => {
  // 3. State and hooks
  const [isEditing, setIsEditing] = useState(false);

  // 4. Event handlers
  const handleComplete = () => {
    onComplete(task.id);
  };

  // 5. Render
  return (
    <div className="task-item">
      {/* Component JSX */}
    </div>
  );
};

// 6. PropTypes/TypeScript types
TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

// 7. Export
export default TaskItem;
```

#### Backend Structure (if applicable)
- Separate concerns: routes, controllers, models, services
- Use middleware for cross-cutting concerns (auth, logging, error handling)
- Keep business logic in service layer, not in routes

### API Conventions

#### RESTful Endpoints
- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/:id` - Get specific task
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

#### Request/Response Format
```json
{
  "success": true,
  "data": {
    "id": "123",
    "title": "Complete project",
    "completed": false,
    "createdAt": "2025-12-30T10:00:00Z"
  },
  "error": null
}
```

### State Management

- **Local state**: Use for component-specific state
- **Shared state**: Use context API, Redux, or similar for app-wide state
- **Server state**: Use React Query, SWR, or similar for API data caching

---

## Testing Guidelines

### Test Coverage Expectations

- **Minimum coverage**: 80% for critical paths
- **Priority areas**: Business logic, API endpoints, complex components
- **Test types**: Unit tests (primary), integration tests, E2E tests (for critical flows)

### Testing Conventions

#### Unit Tests
```javascript
describe('TaskService', () => {
  describe('createTask', () => {
    it('should create a task with valid data', () => {
      // Arrange
      const taskData = { title: 'Test task' };

      // Act
      const result = taskService.createTask(taskData);

      // Assert
      expect(result).toHaveProperty('id');
      expect(result.title).toBe('Test task');
    });

    it('should throw error for invalid data', () => {
      // Test error cases
    });
  });
});
```

#### Test File Location
- Place tests next to source files OR in mirrored `tests/` directory
- Name pattern: `[FileName].test.[ext]` or `[FileName].spec.[ext]`

### Running Tests

```bash
npm test              # Run all tests
npm test:watch        # Watch mode
npm test:coverage     # Generate coverage report
npm test:e2e          # Run end-to-end tests
```

---

## Git Workflow

### Branch Naming

- **Feature branches**: `feature/description` or `claude/description-sessionId`
- **Bug fixes**: `fix/issue-description`
- **Hotfixes**: `hotfix/critical-issue`
- **Refactoring**: `refactor/component-name`

### Commit Message Format

Follow conventional commits:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Build process, dependencies, tooling

**Examples:**
```
feat(tasks): add task filtering by category
fix(api): resolve task deletion error handling
docs: update CLAUDE.md with testing guidelines
```

### Pull Request Process

1. **Create PR** with clear title and description
2. **Link issues** that the PR addresses
3. **Ensure CI passes** (tests, linting, build)
4. **Request review** from team members
5. **Address feedback** and update PR
6. **Merge** when approved

---

## Code Quality Standards

### Linting and Formatting

- **ESLint**: JavaScript/TypeScript linting
- **Prettier**: Code formatting
- **Pre-commit hooks**: Auto-format and lint before commits

### Security Best Practices

1. **Input Validation**: Always validate user input
2. **SQL Injection**: Use parameterized queries or ORM
3. **XSS Prevention**: Sanitize output, use framework protections
4. **Authentication**: Secure password storage (bcrypt), JWT tokens
5. **HTTPS**: Use secure connections in production
6. **Environment Variables**: Never commit secrets to version control

### Performance Considerations

- **Lazy Loading**: Load components and routes on demand
- **Memoization**: Cache expensive computations
- **Database Queries**: Optimize with indexes, avoid N+1 queries
- **Bundle Size**: Monitor and minimize JavaScript bundle size

### Accessibility (a11y)

- **Semantic HTML**: Use proper HTML elements
- **ARIA labels**: For dynamic content and complex widgets
- **Keyboard navigation**: Ensure all features work without mouse
- **Color contrast**: Meet WCAG AA standards
- **Screen readers**: Test with screen reader tools

---

## Common Tasks

### Adding a New Feature

1. **Create feature branch**
   ```bash
   git checkout -b feature/new-feature-name
   ```

2. **Implement feature**
   - Write code following conventions
   - Add tests for new functionality
   - Update documentation if needed

3. **Test thoroughly**
   ```bash
   npm test
   npm run lint
   npm run build
   ```

4. **Commit and push**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   git push -u origin feature/new-feature-name
   ```

5. **Create pull request**

### Debugging Issues

1. **Reproduce the issue** locally
2. **Check logs** and error messages
3. **Use debugger** or console.log strategically
4. **Isolate the problem** - narrow down to specific component/function
5. **Write a test** that reproduces the bug
6. **Fix and verify** test passes
7. **Check for similar issues** elsewhere in codebase

### Updating Dependencies

```bash
# Check for outdated packages
npm outdated

# Update specific package
npm update package-name

# Update all packages (carefully!)
npm update

# Run tests after updating
npm test
```

### Database Migrations (if applicable)

```bash
# Create migration
npm run migrate:create add_task_priority

# Run migrations
npm run migrate:up

# Rollback migration
npm run migrate:down
```

---

## AI Assistant Guidelines

### When Working on This Codebase

1. **Read First**: Always read files before modifying them
2. **Follow Conventions**: Adhere to naming and code organization patterns
3. **Write Tests**: Include tests for new features and bug fixes
4. **Document Changes**: Update relevant documentation
5. **Security Awareness**: Watch for vulnerabilities (XSS, injection, etc.)
6. **Ask When Uncertain**: If requirements are ambiguous, ask for clarification
7. **Keep It Simple**: Avoid over-engineering; implement what's requested
8. **Preserve Patterns**: Match existing code style and architecture

### Before Making Changes

- [ ] Read the relevant files
- [ ] Understand the existing patterns
- [ ] Check for similar implementations
- [ ] Plan the changes
- [ ] Consider edge cases and error handling

### After Making Changes

- [ ] Test the changes locally
- [ ] Run linter and formatter
- [ ] Check for unintended side effects
- [ ] Update documentation if needed
- [ ] Verify tests pass
- [ ] Create clear commit messages

---

## Project Status

**Current State:** Initial setup / Development / Beta / Production

**Active Development Areas:**
- Core task CRUD functionality
- User interface implementation
- API development
- Testing infrastructure

**Known Issues:**
- Track issues in GitHub Issues or issue tracker

**Roadmap:**
1. Basic task management (MVP)
2. User authentication
3. Task categories and tags
4. Search and filtering
5. Collaboration features
6. Mobile app

---

## Resources

### Documentation
- **README.md**: User setup and usage guide
- **CONTRIBUTING.md**: How to contribute to the project
- **API Docs**: (Link to API documentation when available)

### Helpful Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview production build

# Testing
npm test             # Run tests
npm run test:watch   # Watch mode
npm run test:coverage # Coverage report

# Code Quality
npm run lint         # Run linter
npm run format       # Format code
npm run typecheck    # TypeScript type checking

# Git
git status           # Check status
git log --oneline    # View commit history
git diff             # View changes
```

---

## Contact and Support

- **Repository Issues**: Use GitHub Issues for bug reports and feature requests
- **Discussions**: Use GitHub Discussions for questions and ideas
- **Code Review**: Tag relevant reviewers in pull requests

---

## Version History

- **2025-12-30**: Initial CLAUDE.md creation
- Update this section as the project evolves

---

**Note to AI Assistants:** This document should be kept up-to-date as the project evolves. When significant architectural changes occur, update the relevant sections. When new conventions are established, document them here.
