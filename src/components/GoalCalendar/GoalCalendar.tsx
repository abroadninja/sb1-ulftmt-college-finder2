import React, { useState } from 'react';
import { format, startOfWeek, addDays, startOfMonth, endOfMonth, isSameMonth, isSameDay } from 'date-fns';
import { Calendar, CheckCircle2, Plus, Target } from 'lucide-react';
import GoalList from './GoalList';
import NewGoalModal from './NewGoalModal';
import { Goal, TimeFrame } from './types';

export default function GoalCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showNewGoalModal, setShowNewGoalModal] = useState(false);
  const [activeTimeFrame, setActiveTimeFrame] = useState<TimeFrame>('weekly');
  const [goals, setGoals] = useState<Goal[]>([]);

  const timeFrames: TimeFrame[] = ['weekly', 'monthly', 'yearly'];

  const addGoal = (goal: Goal) => {
    setGoals([...goals, { ...goal, id: Date.now().toString() }]);
    setShowNewGoalModal(false);
  };

  const toggleGoalCompletion = (goalId: string) => {
    setGoals(goals.map(goal => 
      goal.id === goalId ? { ...goal, completed: !goal.completed } : goal
    ));
  };

  const deleteGoal = (goalId: string) => {
    setGoals(goals.filter(goal => goal.id !== goalId));
  };

  const filteredGoals = goals.filter(goal => {
    const goalDate = new Date(goal.date);
    switch (activeTimeFrame) {
      case 'weekly':
        const weekStart = startOfWeek(selectedDate);
        const weekEnd = addDays(weekStart, 6);
        return goalDate >= weekStart && goalDate <= weekEnd;
      case 'monthly':
        return isSameMonth(goalDate, selectedDate);
      case 'yearly':
        return goalDate.getFullYear() === selectedDate.getFullYear();
      default:
        return true;
    }
  });

  const completedGoals = filteredGoals.filter(goal => goal.completed).length;
  const progress = filteredGoals.length > 0 
    ? Math.round((completedGoals / filteredGoals.length) * 100) 
    : 0;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Target className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">Goal Tracker</h2>
        </div>
        <button
          onClick={() => setShowNewGoalModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Goal
        </button>
      </div>

      <div className="flex gap-4 mb-6">
        {timeFrames.map(timeFrame => (
          <button
            key={timeFrame}
            onClick={() => setActiveTimeFrame(timeFrame)}
            className={`px-4 py-2 rounded-lg capitalize ${
              activeTimeFrame === timeFrame
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {timeFrame}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold">
              {format(selectedDate, "MMMM yyyy")}
            </h3>
          </div>
          <input
            type="date"
            value={format(selectedDate, 'yyyy-MM-dd')}
            onChange={(e) => setSelectedDate(new Date(e.target.value))}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <h3 className="text-lg font-semibold">Progress</h3>
          </div>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                  {completedGoals} of {filteredGoals.length} goals completed
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-blue-600">
                  {progress}%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
              <div
                style={{ width: `${progress}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      <GoalList
        goals={filteredGoals}
        onToggleCompletion={toggleGoalCompletion}
        onDelete={deleteGoal}
      />

      {showNewGoalModal && (
        <NewGoalModal
          onClose={() => setShowNewGoalModal(false)}
          onAdd={addGoal}
          selectedDate={selectedDate}
        />
      )}
    </div>
  );
}