import { useState, useEffect } from 'react';
import { Task, Category } from '../types';
import { storage, generateId } from '../utils/storage';

const DEFAULT_CATEGORIES: Category[] = [
  { id: 'cat-1', name: 'To Do', color: '#3b82f6', order: 0 },
  { id: 'cat-2', name: 'In Progress', color: '#f59e0b', order: 1 },
  { id: 'cat-3', name: 'Done', color: '#10b981', order: 2 },
];

export const useTodoApp = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const savedTasks = storage.getTasks();
    const savedCategories = storage.getCategories();

    setTasks(savedTasks);
    setCategories(savedCategories.length > 0 ? savedCategories : DEFAULT_CATEGORIES);
  }, []);

  useEffect(() => {
    storage.saveTasks(tasks);
  }, [tasks]);

  useEffect(() => {
    if (categories.length > 0) {
      storage.saveCategories(categories);
    }
  }, [categories]);

  const addTask = (title: string, categoryId: string, scheduledTime?: string) => {
    const newTask: Task = {
      id: generateId(),
      title,
      categoryId,
      scheduledTime,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (taskId: string, updates: Partial<Task>) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, ...updates } : task
    ));
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const moveTask = (taskId: string, newCategoryId: string) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, categoryId: newCategoryId } : task
    ));
  };

  const addCategory = (name: string, color: string) => {
    const newCategory: Category = {
      id: generateId(),
      name,
      color,
      order: categories.length,
    };
    setCategories([...categories, newCategory]);
  };

  const updateCategory = (categoryId: string, updates: Partial<Category>) => {
    setCategories(categories.map(cat =>
      cat.id === categoryId ? { ...cat, ...updates } : cat
    ));
  };

  const deleteCategory = (categoryId: string) => {
    setCategories(categories.filter(cat => cat.id !== categoryId));
    setTasks(tasks.filter(task => task.categoryId !== categoryId));
  };

  return {
    tasks,
    categories,
    addTask,
    updateTask,
    deleteTask,
    moveTask,
    addCategory,
    updateCategory,
    deleteCategory,
  };
};
