"use client";
import { useState } from "react";
import { nanoid } from "nanoid";
import Task from "./components/Task/Task";
import Filters from "./components/Filters/Filters";
import type { TypeFilters } from "./components/Filters/TypeFilters";

export default function Home() {
  const [tasks, setTasks] = useState([
    { taskDescription: "task 1", isActive: true },
    { taskDescription: "task 2", isActive: true },
    { taskDescription: "task 3", isActive: true },
  ]);

  // const [filterState, setFilterState] = useState("all");
  // let incomePropState: TypeFilters;
  // switch (filterState) {
  //   case 'all':
  //   case 'active':
  //   case 'complited':
  //     incomePropState = filterState;
  //     break;
  //   default:
  //     incomePropState = 'all';
  // }

  return (
    <div className="container mx-auto">
      <main className="h-screen py-5 px-10 ">
        <section className="flex justify-center flex-wrap flex-col items-center gap-10">
          <header className="text-center uppercase text-2xl">
            Your list of tasks
          </header>
          {/* <Filters state={incomePropState} /> */}
          <Filters />
          {/* <Filters /> */}
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
    </div>
  );
}
