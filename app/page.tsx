"use client";
import { useState } from "react";
import { nanoid } from "nanoid";

function Task({
  taskDescription,
  isActive,
}: {
  taskDescription: string;
  isActive: boolean;
}) {
  const inputId = nanoid();
  return (
    <li className="flex gap-4 text-lg">
      <input type="checkbox" id={inputId} />
      <label htmlFor={inputId}>{taskDescription}</label>
    </li>
  );
}

export default function Home() {
  const [tasks, setTasks] = useState([
    { taskDescription: "task 1", isActive: true },
    { taskDescription: "task 2", isActive: true },
    { taskDescription: "task 3", isActive: true },
  ]);

  return (
    <main className="h-screen bg-red-200 py-5 px-10 ">
      <section className="flex justify-center flex-wrap flex-col items-center gap-10">
        <header className="text-center uppercase text-2xl">
          Your list of tasks
        </header>
        <ul className="w-1/2 flex flex-col gap-4">
          {tasks.map((currentTask) => (
            <Task
              taskDescription={currentTask.taskDescription}
              isActive={currentTask.isActive}
              key={nanoid()}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
