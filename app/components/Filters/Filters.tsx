import { TypeFilters } from "./TypeFilters";

export type { TypeFilters } from "./TypeFilters";

// function Filters({ state }: TypeFilters) {
function Filters() {
  return (
    <ul className="flex gap-8 justify-around w-100">
      <li className="hover:text-gray-600 text-lg">
        <button>Show all tasks</button>
      </li>
      <li className="hover:text-gray-600 text-lg">
        <button>Show active tasks</button>
      </li>
      <li className="hover:text-gray-600 text-lg">
        <button>Show complited tasks</button>
      </li>
    </ul>
  );
}

export default Filters;
