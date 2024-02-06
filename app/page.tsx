export default function Home() {
  return (
    <main className="h-screen bg-red-200 py-5 px-10 ">
      <section className="flex justify-center flex-wrap flex-col items-center gap-10">
        <header className="text-center uppercase">Your list of tasks</header>
        <ul className="w-1/2 flex flex-col gap-4">
          <li className="flex gap-4">
            <input type="checkbox" />
            <p>Do task #1</p>
          </li>
          <li className="flex gap-4">
            <input type="checkbox" />
            <p>Do task #2</p>
          </li>
          <li className="flex gap-4">
            <input type="checkbox" />
            <p>Do task #3</p>
          </li>
        </ul>
      </section>
    </main>
  );
}
