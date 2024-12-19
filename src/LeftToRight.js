import React, { useState, useEffect, useMemo } from 'react';
import './style.css';

const tasks = [
  {
    id: 1,
    name: 'task1',
    status: 'done',
  },
  {
    id: 2,
    name: 'task2',
    status: 'toDo',
  },
  {
    id: 3,
    name: 'task3',
    status: 'toDo',
  },
  {
    id: 4,
    name: 'task4',
    status: 'toDo',
  },
  {
    id: 5,
    name: 'task5',
    status: 'toDo',
  },
  {
    id: 6,
    name: 'task6',
    status: 'done',
  },
  {
    id: 7,
    name: 'task7',
    status: 'done',
  },
  {
    id: 8,
    name: 'task8',
    status: 'done',
  },
  {
    id: 9,
    name: 'task9',
    status: 'done',
  },
];

export default function LeftToRight() {
  const [todoTasks, setTodoTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    setTodoTasks(tasks.filter((task) => task.status === 'toDo'));
    setDoneTasks(tasks.filter((task) => task.status === 'done'));
  }, [tasks]);

  const updateSelectedTask = (task) => {
    setSelectedTask(task);
  };

  const updateTaskLists = (direction) => {
    if (direction === 'toRight') {
      setTodoTasks((tasks) => {
        return tasks.filter((task) => task.id !== selectedTask.id);
      });
      selectedTask.status = 'done';
      const updatedDoneTasks = [...doneTasks, selectedTask];
      setDoneTasks(updatedDoneTasks);
    } else if (direction === 'toLeft') {
      setDoneTasks((tasks) => {
        return tasks.filter((task) => task.id !== selectedTask.id);
      });
      selectedTask.status = 'toDo';
      const updatedTodoTasks = [...todoTasks, selectedTask];
      setTodoTasks(updatedTodoTasks);
    }
  };
  return (
    <>
      <div className="ltrContainer">
        <div className="leftMost">
          <p>To do</p>
          {todoTasks &&
            todoTasks.length > 0 &&
            todoTasks.map((todo, index) => {
              return (
                <p onClick={() => updateSelectedTask(todo)} key={index}>
                  {todo.name}
                </p>
              );
            })}
        </div>
        <div className="middle">
          <button
            onClick={() => updateTaskLists('toRight')}
            disabled={selectedTask?.status === 'done'}
          >
            left to right
          </button>
          <button
            onClick={() => updateTaskLists('toLeft')}
            disabled={selectedTask?.status === 'toDo'}
          >
            right to left
          </button>
        </div>
        <div className="rightMost">
          <p>Done</p>
          {doneTasks &&
            doneTasks.length > 0 &&
            doneTasks.map((done, index) => {
              return (
                <p onClick={() => updateSelectedTask(done)} key={index}>
                  {done.name}
                </p>
              );
            })}
        </div>
      </div>
    </>
  );
}
