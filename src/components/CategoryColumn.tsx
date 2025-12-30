import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Task, Category } from '../types';
import { TaskCard } from './TaskCard';
import './CategoryColumn.css';

interface CategoryColumnProps {
  category: Category;
  tasks: Task[];
  onUpdateTask: (taskId: string, updates: Partial<Task>) => void;
  onDeleteTask: (taskId: string) => void;
  onAddTask: (categoryId: string) => void;
}

export const CategoryColumn = ({
  category,
  tasks,
  onUpdateTask,
  onDeleteTask,
  onAddTask,
}: CategoryColumnProps) => {
  const { setNodeRef } = useDroppable({
    id: category.id,
  });

  const categoryTasks = tasks.filter(task => task.categoryId === category.id);

  return (
    <div className="category-column">
      <div className="category-header" style={{ borderTopColor: category.color }}>
        <h2>{category.name}</h2>
        <span className="task-count">{categoryTasks.length}</span>
      </div>

      <div ref={setNodeRef} className="tasks-container">
        <SortableContext
          items={categoryTasks.map(t => t.id)}
          strategy={verticalListSortingStrategy}
        >
          {categoryTasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onUpdate={onUpdateTask}
              onDelete={onDeleteTask}
            />
          ))}
        </SortableContext>

        {categoryTasks.length === 0 && (
          <div className="empty-state">
            Drop tasks here or click + to add
          </div>
        )}
      </div>

      <button
        className="add-task-btn"
        onClick={() => onAddTask(category.id)}
      >
        + Add Task
      </button>
    </div>
  );
};
