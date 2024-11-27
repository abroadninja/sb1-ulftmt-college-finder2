import { ArrowUpDown } from 'lucide-react';

interface SortingOptionsProps {
  sortBy: string;
  sortOrder: 'asc' | 'desc';
  onSortChange: (sortBy: string, sortOrder: 'asc' | 'desc') => void;
}

export default function SortingOptions({ sortBy, sortOrder, onSortChange }: SortingOptionsProps) {
  const sortOptions = [
    { value: 'ranking', label: 'Ranking' },
    { value: 'tuition', label: 'Tuition' },
    { value: 'rating', label: 'Rating' },
    { value: 'acceptanceRate', label: 'Acceptance Rate' },
  ];

  return (
    <div className="flex items-center gap-4">
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value, sortOrder)}
        className="px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            Sort by {option.label}
          </option>
        ))}
      </select>
      <button
        onClick={() => onSortChange(sortBy, sortOrder === 'asc' ? 'desc' : 'asc')}
        className="p-2 rounded-lg hover:bg-gray-100"
      >
        <ArrowUpDown className={`w-5 h-5 ${sortOrder === 'asc' ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
}