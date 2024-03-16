import React from 'react';
import { Habit } from './HabitItem';
import HabitItem from './HabitItem';


interface HabitListProps {
    habits: Habit[];
    onToggle: (id: number) => void;
}

const HabitList: React.FC<HabitListProps> = ({ habits, onToggle }) => {
    return (
        <div>
            <h2>習慣リスト</h2>
            { habits.map((habit) => {
                return (
                    <HabitItem key={habit.id} habit={habit} onToggle={() => onToggle(habit.id)} />
                );
            })}
        </div>
    );
}

export default HabitList;