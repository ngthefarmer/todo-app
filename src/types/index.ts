export interface Task {
  id: string;
  title: string;
  description?: string;
  categoryId: string;
  scheduledTime?: string; // ISO 8601 date-time string
  completed: boolean;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  color: string;
  order: number;
}
