import { useState } from 'react';
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { useTodoApp } from './hooks/useTodoApp';
import { CategoryColumn } from './components/CategoryColumn';
import { AddTaskModal } from './components/AddTaskModal';
import { TaskCard } from './components/TaskCard';
import { Task } from './types';
import './App.css';

function App() {
  const {
    tasks,
    categories,
    addTask,
    updateTask,
    deleteTask,
    moveTask,
  } = useTodoApp();

  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [modalCategoryId, setModalCategoryId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    const task = tasks.find(t => t.id === event.active.id);
    if (task) {
      setActiveTask(task);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    setActiveTask(null);

    if (!over) return;

    const taskId = active.id as string;
    const newCategoryId = over.id as string;

    const task = tasks.find(t => t.id === taskId);
    if (task && task.categoryId !== newCategoryId) {
      moveTask(taskId, newCategoryId);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>✓ Todo App</h1>
        <p>Organize your tasks with drag and drop</p>
      </header>

      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="categories-container">
          {categories.map(category => (
            <CategoryColumn
              key={category.id}
              category={category}
              tasks={tasks}
              onUpdateTask={updateTask}
              onDeleteTask={deleteTask}
              onAddTask={setModalCategoryId}
            />
          ))}
        </div>

        <DragOverlay>
          {activeTask ? (
            <TaskCard
              task={activeTask}
              onUpdate={() => {}}
              onDelete={() => {}}
            />
          ) : null}
        </DragOverlay>
      </DndContext>

      {modalCategoryId && (
        <AddTaskModal
          categoryId={modalCategoryId}
          onAdd={addTask}
          onClose={() => setModalCategoryId(null)}
        />
      )}
    </div>
  );
}

export default App;
