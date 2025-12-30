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
import { CategoryModal } from './components/CategoryModal';
import { TaskCard } from './components/TaskCard';
import { Task, Category } from './types';
import './App.css';

function App() {
  const {
    tasks,
    categories,
    addTask,
    updateTask,
    deleteTask,
    moveTask,
    addCategory,
    updateCategory,
    deleteCategory,
  } = useTodoApp();

  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [modalCategoryId, setModalCategoryId] = useState<string | null>(null);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);

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

  const handleEditCategory = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    if (category) {
      setEditingCategory(category);
    }
  };

  const handleDeleteCategory = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    const categoryTasks = tasks.filter(t => t.categoryId === categoryId);

    const message = categoryTasks.length > 0
      ? `Are you sure you want to delete "${category?.name}"? This will also delete ${categoryTasks.length} task(s).`
      : `Are you sure you want to delete "${category?.name}"?`;

    if (window.confirm(message)) {
      deleteCategory(categoryId);
    }
  };

  const handleSaveCategory = (name: string, color: string) => {
    if (editingCategory) {
      updateCategory(editingCategory.id, { name, color });
    } else {
      addCategory(name, color);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div>
            <h1>✓ Todo App</h1>
            <p>Organize your tasks with drag and drop</p>
          </div>
          <button
            className="add-category-btn"
            onClick={() => setShowAddCategoryModal(true)}
          >
            + Add Category
          </button>
        </div>
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
              onEditCategory={handleEditCategory}
              onDeleteCategory={handleDeleteCategory}
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

      {(editingCategory || showAddCategoryModal) && (
        <CategoryModal
          category={editingCategory || undefined}
          onSave={handleSaveCategory}
          onClose={() => {
            setEditingCategory(null);
            setShowAddCategoryModal(false);
          }}
        />
      )}
    </div>
  );
}

export default App;
