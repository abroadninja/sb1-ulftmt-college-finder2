import { useState } from 'react';
import { Plus, Trash2, CheckCircle, Circle, Calendar, Clock } from 'lucide-react';
import { format } from 'date-fns';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  dueDate?: string;
  priority: 'low' | 'medium' | 'high';
  category: 'academic' | 'personal' | 'exam' | 'other';
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState<Todo['priority']>('medium');
  const [category, setCategory] = useState<Todo['category']>('academic');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    const todo: Todo = {
      id: Date.now().toString(),
      title: newTodo.trim(),
      completed: false,
      dueDate,
      priority,
      category,
    };

    setTodos([...todos, todo]);
    setNewTodo('');
    setDueDate('');
    setPriority('medium');
    setCategory('academic');
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const priorityColors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
  };

  const categoryColors = {
    academic: 'bg-blue-100 text-blue-800',
    personal: 'bg-purple-100 text-purple-800',
    exam: 'bg-orange-100 text-orange-800',
    other: 'bg-gray-100 text-gray-800',
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Todo List</h2>

        <form onSubmit={addTodo} className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new task..."
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value as Todo['priority'])}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
            </select>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as Todo['category'])}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="academic">Academic</option>
              <option value="personal">Personal</option>
              <option value="exam">Exam</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Task
          </button>
        </form>

        <div className="flex gap-2 mb-4">
          {['all', 'active', 'completed'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as typeof filter)}
              className={`px-3 py-1 rounded-lg capitalize ${
                filter === f
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filteredTodos.map(todo => (
            <div
              key={todo.id}
              className={`flex items-center gap-4 p-4 rounded-lg border ${
                todo.completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-200'
              }`}
            >
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`p-1 rounded-full hover:bg-gray-100 ${
                  todo.completed ? 'text-green-600' : 'text-gray-400'
                }`}
              >
                {todo.completed ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  <Circle className="w-6 h-6" />
                )}
              </button>

              <div className="flex-1">
                <p className={`font-medium ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                  {todo.title}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {todo.dueDate && (
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{format(new Date(todo.dueDate), 'MMM d, yyyy')}</span>
                    </div>
                  )}
                  <span className={`px-2 py-1 rounded-full text-xs ${priorityColors[todo.priority]}`}>
                    {todo.priority} priority
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs ${categoryColors[todo.category]}`}>
                    {todo.category}
                  </span>
                </div>
              </div>

              <button
                onClick={() => deleteTodo(todo.id)}
                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}

          {filteredTodos.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <Clock className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">No tasks found</p>
              <p className="text-sm">Add a new task to get started!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}