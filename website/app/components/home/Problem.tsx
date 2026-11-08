import Container from "../Container";

export default function Problem() {
  return (
    <section>
      <Container className="grid gap-8 py-20 md:grid-cols-2 md:gap-16 md:py-28">
        <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Too many tools, no clear plan.
        </h2>
        <div className="flex flex-col gap-5 text-lg leading-relaxed md:pt-2">
          <p>
            Most growing businesses run on tools that were never meant to work
            together, with no in-house tech team and no clear place to start.
            Spreadsheets, subscriptions and one-off apps pile up, and nobody
            owns the whole picture.
          </p>
          <p>
            We help you see what you have, decide what is missing, and build
            the technology environment your business actually needs.
          </p>
        </div>
      </Container>
    </section>
  );
}
