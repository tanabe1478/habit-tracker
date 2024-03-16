import React from "react";
import { Habit } from "./HabitItem";

interface ProgressViewProps {
    habits: Habit[];
}

const ProgressView: React.FC<ProgressViewProps> = ({ habits }) => {
    const totalHabits = habits.length;
    const completedHabits = habits.filter((habit) => habit.completed).length;
    const progress = totalHabits === 0 ? 0 : (completedHabits / totalHabits) * 100;

    return (
        <div>
            <h2>進捗状況</h2>
            <p>総習慣数: {totalHabits}個の習慣が完了しました</p>
            <p>{completedHabits} / {totalHabits} 個の習慣が完了しました。</p>
            <progress value={progress} max="100"></progress>
        </div>
    );
}

export default ProgressView;;