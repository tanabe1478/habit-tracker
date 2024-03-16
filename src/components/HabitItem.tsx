import React from 'react';

export interface Habit {
  id: number;
  name: string;
  description: string;
  completed: boolean;
}

interface HabitItemProps {
  habit: Habit;
  onToggle: () => void;
}

const HabitItem: React.FC<HabitItemProps> = ({ habit, onToggle }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={habit.completed}
        onChange={onToggle}
      />
      <span>{habit.name}</span>
    </div>
  );
};

export default HabitItem;