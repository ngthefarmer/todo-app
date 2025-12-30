import { useState } from 'react';
import './AddTaskModal.css';

interface AddTaskModalProps {
  categoryId: string;
  onAdd: (title: string, categoryId: string, scheduledTime?: string) => void;
  onClose: () => void;
}

export const AddTaskModal = ({ categoryId, onAdd, onClose }: AddTaskModalProps) => {
  const [title, setTitle] = useState('');
  const [scheduledTime, setScheduledTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title.trim(), categoryId, scheduledTime || undefined);
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Add New Task</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="task-title">Task Title *</label>
            <input
              id="task-title"
              type="text"
              placeholder="Enter task title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="task-time">Schedule Time (Optional)</label>
            <input
              id="task-time"
              type="datetime-local"
              value={scheduledTime}
              onChange={(e) => setScheduledTime(e.target.value)}
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
