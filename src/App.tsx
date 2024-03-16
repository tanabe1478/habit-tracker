import React, { useState } from 'react';
import './App.css';
import { Habit } from './components/HabitItem';
import NewHabitForm from './components/NewHabitForm';
import HabitList from './components/HabitList';
import ProgressView from './components/ProgressView';

const App: React.FC = () => {
  // 習慣の配列をStateとして管理
  const [habits, setHabits] = useState<Habit[]>([]);

  // 新しい習慣を追加する関数

  const addHabit = (habit: Habit) => {
    setHabits([...habits, habit]);
  };

  // 習慣の完了状態を切り替える関数
  const toggleHabit = (id: number) => {
    const updatedHabits = habits.map((habit) => {
      if (habit.id === id) {
        return { ...habit, completed: !habit.completed };
      }
      return habit;
    });
    setHabits(updatedHabits);
  };

  return (
    <div className="App">
      <h1>習慣管理アプリ</h1>
      <NewHabitForm onAdd={addHabit} />
      <HabitList habits={habits} onToggle={toggleHabit} />
      <ProgressView habits={habits} />

    </div>
  );
};

export default App;