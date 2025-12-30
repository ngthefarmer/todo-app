import { useState, useEffect } from 'react';
import { Category } from '../types';
import './CategoryModal.css';

interface CategoryModalProps {
  category?: Category; // If provided, we're editing; otherwise, we're adding
  onSave: (name: string, color: string) => void;
  onClose: () => void;
}

const PRESET_COLORS = [
  '#3b82f6', // blue
  '#f59e0b', // orange
  '#10b981', // green
  '#ef4444', // red
  '#8b5cf6', // purple
  '#ec4899', // pink
  '#06b6d4', // cyan
  '#f97316', // dark orange
];

export const CategoryModal = ({ category, onSave, onClose }: CategoryModalProps) => {
  const [name, setName] = useState(category?.name || '');
  const [color, setColor] = useState(category?.color || PRESET_COLORS[0]);

  useEffect(() => {
    if (category) {
      setName(category.name);
      setColor(category.color);
    }
  }, [category]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSave(name.trim(), color);
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{category ? 'Edit Category' : 'Add New Category'}</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="category-name">Category Name *</label>
            <input
              id="category-name"
              type="text"
              placeholder="Enter category name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
              required
            />
          </div>

          <div className="form-group">
            <label>Color</label>
            <div className="color-picker">
              {PRESET_COLORS.map((presetColor) => (
                <button
                  key={presetColor}
                  type="button"
                  className={`color-option ${color === presetColor ? 'selected' : ''}`}
                  style={{ backgroundColor: presetColor }}
                  onClick={() => setColor(presetColor)}
                  title={presetColor}
                />
              ))}
            </div>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="color-input"
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              {category ? 'Save Changes' : 'Add Category'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
