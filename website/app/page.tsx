// Temporary placeholder: shows the 60 / 30 / 10 palette split.
// Replaced when we build the real homepage.
export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="flex flex-1 flex-col items-start justify-center gap-4 px-8 py-24">
        <h1 className="text-5xl font-bold tracking-tight">
          Vici Software Development
        </h1>
        <p className="max-w-md text-lg">Palette and font are set up.</p>
        <span className="rounded-full bg-accent px-5 py-2 font-bold text-on-accent">
          Accent
        </span>
      </section>
      <section className="bg-surface px-8 py-12 text-on-surface">
        <p className="text-lg font-bold">Gallery Blue surface</p>
      </section>
    </main>
  );
}
