import { College } from '../types';
import CollegeCard from './CollegeCard';
import CollegeDetailView from './CollegeDetailView';
import { useState } from 'react';

interface ResultsGridProps {
  colleges: College[];
}

export default function ResultsGrid({ colleges }: ResultsGridProps) {
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);

  const handleAddToChecklist = (college: College) => {
    // Here we'll add the college to the checklist
    // For now, let's just show an alert
    alert(`Added ${college.name} to your checklist!`);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {colleges.map((college) => (
          <CollegeCard
            key={college.id}
            college={college}
            onViewDetails={setSelectedCollege}
          />
        ))}
      </div>
      
      {selectedCollege && (
        <CollegeDetailView
          college={selectedCollege}
          onClose={() => setSelectedCollege(null)}
          onAddToChecklist={handleAddToChecklist}
        />
      )}
    </>
  );
}