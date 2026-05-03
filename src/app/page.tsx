const CAL_URL = "https://cal.com/xocket/30min";
const EMAIL = "vanshpatel@xocket.sh";

function Eyebrow({
  children,
  as: Tag = "p",
}: {
  children: React.ReactNode;
  as?: "p" | "h2";
}) {
  return (
    <Tag className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
      {children}
    </Tag>
  );
}

function ExtLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-white underline decoration-zinc-600 underline-offset-[4px] transition hover:decoration-white"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      {/* Top stripe */}
      <div
        role="status"
        aria-label="Site status"
        className="sticky top-0 z-30 w-full bg-white text-black"
      >
        <div className="mx-auto flex h-10 max-w-[1200px] items-center justify-center gap-2.5 px-4 font-mono text-[11px] font-medium uppercase tracking-[0.22em]">
          <span aria-hidden>🚧</span>
          <span>Website under construction</span>
          <span aria-hidden className="text-zinc-400">·</span>
          <span className="hidden sm:inline">
            Focused on building, not polishing
          </span>
        </div>
      </div>

      <main className="mx-auto flex min-h-screen w-full max-w-[720px] flex-col px-6 pb-32 pt-20 sm:pt-28">
        {/* Brand */}
        <div className="mb-20 flex items-center gap-2.5">
          <span
            aria-hidden
            className="inline-block h-2.5 w-2.5 rounded-full bg-white"
          />
          <span className="text-sm font-medium tracking-tight text-white">
            Xocket
          </span>
        </div>

        {/* Hero */}
        <h1 className="font-serif text-[52px] leading-[1.05] tracking-tight text-white sm:text-[64px]">
          The execution layer for modern teams.
        </h1>

        <div className="mt-12">
          <Eyebrow>A note from the Xocket team</Eyebrow>
        </div>

        <div className="mt-6 space-y-6 text-[18px] leading-[1.7] text-zinc-300">
          <p>
            Building a product today isn’t just about writing code. It’s about
            translating ideas into systems, moving fast without breaking
            operations, and avoiding the bottlenecks that slow teams down.
          </p>
          <p className="text-white">Most developers can’t do this.</p>
        </div>

        {/* The Problem */}
        <div className="mt-24 space-y-6 text-[18px] leading-[1.7] text-zinc-300">
          <Eyebrow as="h2">The Problem</Eyebrow>
          <p className="!mt-7">
            Companies hire developers expecting speed. Instead, they get
            constant back-and-forth to explain requirements, slow execution due
            to unclear systems, developers who code but don’t understand the
            business, and teams stuck managing instead of building.
          </p>
          <p>
            The result?{" "}
            <span className="text-white">
              Delays, inefficiencies, and lost momentum.
            </span>
          </p>
        </div>

        {/* What we do */}
        <div className="mt-24 space-y-6 text-[18px] leading-[1.7] text-zinc-300">
          <Eyebrow as="h2">What Xocket Does</Eyebrow>
          <p className="!mt-7">
            Xocket provides{" "}
            <span className="font-serif italic text-white">
              AI-native developers
            </span>{" "}
            who operate as an execution layer inside your team — not just
            coders, but builders.
          </p>
          <p>
            <span className="font-serif italic text-white">
              We understand product, not just code.
            </span>{" "}
            We think in outcomes, not tickets, and translate fuzzy requirements
            into shipped systems without an engineering tax on every
            conversation.
          </p>
          <p>
            <span className="font-serif italic text-white">
              We communicate clearly with non-technical teams.
            </span>{" "}
            You shouldn’t have to translate between product, design and
            engineering — we close that loop ourselves.
          </p>
          <p>
            <span className="font-serif italic text-white">
              We move with AI-first workflows.
            </span>{" "}
            Speed compounded by tools, not just hours. Delivery cycles compress
            because the workflow is rebuilt from the ground up around modern
            AI.
          </p>
          <p>
            <span className="font-serif italic text-white">
              We follow proven systems.
            </span>{" "}
            Built from shipping real products across multiple industries — so
            we don’t reinvent process every time we ship.
          </p>
        </div>

        {/* Why it works */}
        <div className="mt-24 space-y-6 text-[18px] leading-[1.7] text-zinc-300">
          <Eyebrow as="h2">Why It Works</Eyebrow>
          <p className="!mt-7">
            We’ve built and supported products across multiple industries. That
            means we know where teams get stuck, we don’t reinvent process
            every time we ship, and we execute with structure instead of
            guesswork.
          </p>
          <p className="text-white">
            You’re not hiring developers. You’re plugging into a proven
            execution system.
          </p>
        </div>

        {/* Why Xocket */}
        <div className="mt-24 space-y-6 text-[18px] leading-[1.7] text-zinc-300">
          <Eyebrow as="h2">Why Xocket</Eyebrow>
          <p className="!mt-7">
            Built from experience working with fast-growing teams — including
            VC-backed companies — we understand where execution breaks down.
            We don’t just write code; we bring proven systems from real
            products, AI-native workflows for speed, and developers who think
            in terms of business, not just tasks.
          </p>
        </div>

        {/* Who this is for */}
        <div className="mt-24 space-y-6 text-[18px] leading-[1.7] text-zinc-300">
          <Eyebrow as="h2">Who This Is For</Eyebrow>
          <p className="!mt-7">
            Founders who want to move faster without managing developers.
            Teams tired of explaining things repeatedly. Companies scaling but
            hitting execution bottlenecks.
          </p>
        </div>

        {/* Work with us */}
        <div className="mt-24 space-y-6 text-[18px] leading-[1.7] text-zinc-300">
          <Eyebrow as="h2">Work With Us</Eyebrow>
          <p className="!mt-7">
            We’re currently working with a limited number of teams. If you’re
            hitting an execution bottleneck and want builders who can run
            alongside you, get in touch.
          </p>
          <p>
            → Book a call:{" "}
            <ExtLink href={CAL_URL}>cal.com/xocket/30min</ExtLink>
            <br />→ Email: <ExtLink href={`mailto:${EMAIL}`}>{EMAIL}</ExtLink>
          </p>
        </div>

        {/* Mission */}
        <div className="mt-24 space-y-6 text-[18px] leading-[1.7] text-zinc-300">
          <Eyebrow as="h2">Our Mission</Eyebrow>
          <p className="!mt-7 font-serif text-[26px] leading-[1.4] tracking-tight text-white sm:text-[30px]">
            To eliminate execution bottlenecks in modern companies by combining
            AI-native development with proven systems — so teams can move
            faster without chaos.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-32 border-t border-white/[0.08] pt-8">
          <div className="flex flex-col gap-2 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className="inline-block h-2 w-2 rounded-full bg-white"
              />
              <span>Xocket — The Execution Layer for Modern Teams</span>
            </div>
            <div className="flex items-center gap-5">
              <a
                className="transition hover:text-white"
                href={CAL_URL}
                target="_blank"
                rel="noreferrer"
              >
                Book a call
              </a>
              <a
                className="transition hover:text-white"
                href={`mailto:${EMAIL}`}
              >
                Email
              </a>
              <span>© {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
