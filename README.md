# Todo App

A modern, minimal todo list application with task categories, drag-and-drop functionality, and time scheduling.

![Todo App](https://img.shields.io/badge/React-19.2-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue) ![Vite](https://img.shields.io/badge/Vite-7.3-purple)

## Features

- **Task Categories**: Organize tasks in customizable categories (To Do, In Progress, Done)
- **Drag & Drop**: Easily move tasks between categories with smooth drag-and-drop
- **Time Scheduling**: Schedule tasks with date and time
- **Task Management**: Create, update, delete, and mark tasks as complete
- **Persistent Storage**: All data saved to browser localStorage
- **Minimal Modern UI**: Clean, responsive design with smooth animations
- **Type-Safe**: Built with TypeScript for better development experience

## Tech Stack

- **React 19** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **@dnd-kit** - Modern drag-and-drop library
- **CSS3** - Custom styling with modern features
- **LocalStorage** - Client-side data persistence

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd todo-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Usage

### Adding a Task

1. Click the "+ Add Task" button in any category
2. Enter the task title
3. Optionally set a scheduled time
4. Click "Add Task"

### Moving Tasks

- Simply drag and drop tasks between categories
- Tasks will automatically save to the new category

### Managing Tasks

- **Complete**: Click the checkbox to mark as complete
- **Delete**: Click the × button to remove a task
- **View Time**: Scheduled time appears below the task title

## Project Structure

```
todo-app/
├── src/
│   ├── components/        # React components
│   │   ├── TaskCard.tsx   # Individual task component
│   │   ├── CategoryColumn.tsx  # Category column with drop zone
│   │   └── AddTaskModal.tsx    # Modal for adding tasks
│   ├── hooks/            # Custom React hooks
│   │   └── useTodoApp.ts # Main app state management
│   ├── types/            # TypeScript type definitions
│   │   └── index.ts
│   ├── utils/            # Utility functions
│   │   └── storage.ts    # LocalStorage helpers
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # App entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Dependencies and scripts
└── README.md             # This file
```

## Customization

### Adding New Categories

Edit the `DEFAULT_CATEGORIES` array in `src/hooks/useTodoApp.ts`:

```typescript
const DEFAULT_CATEGORIES: Category[] = [
  { id: 'cat-1', name: 'To Do', color: '#3b82f6', order: 0 },
  { id: 'cat-2', name: 'In Progress', color: '#f59e0b', order: 1 },
  { id: 'cat-3', name: 'Done', color: '#10b981', order: 2 },
  // Add your custom category here
];
```

### Changing Theme Colors

Update the gradient in `src/App.css`:

```css
.app {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

ISC

## Acknowledgments

- Built with [React](https://react.dev/)
- Drag and drop powered by [@dnd-kit](https://dndkit.com/)
- Bootstrapped with [Vite](https://vitejs.dev/)
