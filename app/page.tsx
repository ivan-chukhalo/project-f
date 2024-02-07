"use client";
import { useState } from "react";

function Task({taskDescription}:{taskDescription: string}) {
  return (
    <li className="flex gap-4">
      <input type="checkbox" />
      <p>{taskDescription}</p>
    </li>
  );
}

export default function Home() {
  const [tasks, setTasks] = useState(["task 1", "task 2", "task 3"]);

  return (
    <main className="h-screen bg-red-200 py-5 px-10 ">
      <section className="flex justify-center flex-wrap flex-col items-center gap-10">
        <header className="text-center uppercase">Your list of tasks</header>
        <ul className="w-1/2 flex flex-col gap-4">
          {tasks.map(task => <Task taskDescription={task} key={task} />)}
        </ul>
      </section>
    </main>
  );
}
