import React from 'react';
import { CheckCircle, Circle, Trash2 } from 'lucide-react';
import { Goal } from './types';
import { format } from 'date-fns';

interface GoalListProps {
  goals: Goal[];
  onToggleCompletion: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function GoalList({ goals, onToggleCompletion, onDelete }: GoalListProps) {
  if (goals.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No goals set for this period. Click "Add Goal" to get started!
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {goals.map(goal => (
        <div
          key={goal.id}
          className={`flex items-center justify-between p-4 rounded-lg border ${
            goal.completed ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'
          }`}
        >
          <div className="flex items-center gap-4">
            <button
              onClick={() => onToggleCompletion(goal.id)}
              className={`p-1 rounded-full hover:bg-gray-100 ${
                goal.completed ? 'text-green-600' : 'text-gray-400'
              }`}
            >
              {goal.completed ? (
                <CheckCircle className="w-6 h-6" />
              ) : (
                <Circle className="w-6 h-6" />
              )}
            </button>
            <div>
              <h4 className={`font-medium ${goal.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                {goal.title}
              </h4>
              <div className="flex gap-4 mt-1 text-sm text-gray-500">
                <span>{format(new Date(goal.date), 'MMM d, yyyy')}</span>
                <span>•</span>
                <span className="capitalize">{goal.priority} Priority</span>
                <span>•</span>
                <span className="capitalize">{goal.category}</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => onDelete(goal.id)}
            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>
  );
}