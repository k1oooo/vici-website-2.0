// Temporary placeholder so the header can be seen over a blue hero.
// Replaced when we build the real homepage.
export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="flex min-h-[70vh] flex-col items-center justify-center bg-surface px-6 text-center text-on-surface">
        <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">
          Vici Software Development
        </h1>
        <p className="mt-6 max-w-md text-lg opacity-80">
          Hero placeholder. Homepage comes next.
        </p>
      </section>
      <section className="flex-1 px-6 py-24 md:px-12">
        <p className="text-lg font-bold">Off White page background</p>
      </section>
    </main>
  );
}
