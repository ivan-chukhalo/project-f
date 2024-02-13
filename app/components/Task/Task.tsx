import {nanoid} from 'nanoid';
import { useState } from 'react';

function Task({
    taskDescription,
    isActive,
  }: {
    taskDescription: string;
    isActive: boolean;
  }) {
    const inputId = nanoid();
    const [isChecked, setIsChecked] = useState(isActive)
    return (
      <li className="flex gap-4 text-lg">
        <input type="checkbox" id={inputId} onClick={()=>setIsChecked(!isChecked)}/>
        <label htmlFor={inputId} className={isChecked ? "" : "line-through text-gray-500"}>{taskDescription}</label>
      </li>
    );
  }

  export default Task;