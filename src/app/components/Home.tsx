import { Link } from "react-router";

export function Home() {
  return (
    <div className="bg-[#0B0B0D]">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 pt-32 pb-40">
        <div className="max-w-5xl w-full">
          <h1
            style={{ fontFamily: 'var(--font-serif)' }}
            className="text-[clamp(2.5rem,8vw,7rem)] text-[#F5F5F7] font-light leading-[1.1] mb-16 tracking-tight"
          >
            Token launches aren't announcements.
            <br />
            They are power events.
          </h1>
          <div className="max-w-2xl mb-16">
            <p className="text-[#F5F5F7] text-lg leading-relaxed mb-6">
              Dream designs the strategic launch architectures that establish market gravity from day one.
            </p>
            <p className="text-[#F5F5F7] text-lg leading-relaxed">
              We engineer the moment your project enters the arena.
            </p>
          </div>
          <div className="space-y-6">
            <Link
              to="/inquire"
              className="inline-block px-12 py-4 border border-[#E5E7EB] text-[#F5F5F7] text-sm tracking-wide hover:bg-[#E5E7EB] hover:text-[#0B0B0D] transition-all duration-300"
            >
              Apply for Strategic Review
            </Link>
            <p className="text-[#636366] text-sm tracking-wide">
              Selective engagements. Limited launch architectures per cycle.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-40">
        <div className="max-w-4xl w-full">
          <h2
            style={{ fontFamily: 'var(--font-serif)' }}
            className="text-[clamp(2rem,6vw,5rem)] text-[#F5F5F7] font-light leading-[1.2] mb-20 tracking-tight"
          >
            Hype fades. Structure endures.
          </h2>
          <div className="space-y-8 text-[#F5F5F7] text-lg leading-relaxed max-w-2xl">
            <p>In Web3, most launches chase velocity.<br />Few design gravity.</p>
            <p>Without architecture, a token launch becomes noise.<br />A temporary spike.<br />A forgotten chart.</p>
            <p>With structural intent, it becomes a defining market entry.</p>
            <p>A launch does not determine price.<br />It determines perception.</p>
            <p>And perception defines longevity.</p>
          </div>
        </div>
      </section>

      {/* The Product Section */}
      <section id="architecture" className="min-h-screen flex items-center justify-center px-8 py-40">
        <div className="max-w-5xl w-full">
          <h2
            style={{ fontFamily: 'var(--font-serif)' }}
            className="text-[clamp(2rem,6vw,5rem)] text-[#F5F5F7] font-light leading-[1.2] mb-12 tracking-tight"
          >
            Gravity Launch Architecture™
          </h2>
          <div className="mb-20">
            <p className="text-[#F5F5F7] text-lg leading-relaxed mb-6">
              This is not marketing.
            </p>
            <p className="text-[#F5F5F7] text-lg leading-relaxed">
              This is the intellectual architecture of your market entry.
            </p>
          </div>

          <div className="space-y-16">
            <div className="border-t border-[#E5E7EB]/20 pt-12">
              <h3 className="text-[#F5F5F7] text-2xl mb-6 font-light tracking-wide">Strategic Narrative Blueprint</h3>
              <div className="space-y-3 text-[#636366] text-base leading-relaxed">
                <p>Precise positioning of your token within the competitive landscape.</p>
                <p>Clear ideological and functional framing.</p>
              </div>
            </div>

            <div className="border-t border-[#E5E7EB]/20 pt-12">
              <h3 className="text-[#F5F5F7] text-2xl mb-6 font-light tracking-wide">Launch Tension Architecture</h3>
              <div className="space-y-3 text-[#636366] text-base leading-relaxed">
                <p>Structured sequencing of anticipation.</p>
                <p>Controlled information release.</p>
                <p>Escalation design leading to TGE.</p>
              </div>
            </div>

            <div className="border-t border-[#E5E7EB]/20 pt-12">
              <h3 className="text-[#F5F5F7] text-2xl mb-6 font-light tracking-wide">Community Ignition Mechanics</h3>
              <div className="space-y-3 text-[#636366] text-base leading-relaxed">
                <p>Role-based participation systems.</p>
                <p>Pre-launch activation architecture.</p>
                <p>Structured early contributor positioning.</p>
              </div>
            </div>

            <div className="border-t border-[#E5E7EB]/20 pt-12">
              <h3 className="text-[#F5F5F7] text-2xl mb-6 font-light tracking-wide">Symbolic Trigger Event</h3>
              <div className="space-y-3 text-[#636366] text-base leading-relaxed">
                <p>Design of a defining launch moment.</p>
                <p>High-gravity public anchoring mechanism.</p>
              </div>
            </div>

            <div className="border-t border-[#E5E7EB]/20 pt-12">
              <h3 className="text-[#F5F5F7] text-2xl mb-6 font-light tracking-wide">Post-Launch Momentum Map</h3>
              <div className="space-y-3 text-[#636366] text-base leading-relaxed">
                <p>30-day structural reinforcement plan.</p>
                <p>Retention and perception stabilization framework.</p>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-12 border-t border-[#E5E7EB]/20">
            <p className="text-[#F5F5F7] text-lg leading-relaxed mb-3">This is architecture.</p>
            <p className="text-[#636366] text-lg leading-relaxed mb-3">Your team executes.</p>
            <p className="text-[#636366] text-lg leading-relaxed">We design the gravity.</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="min-h-screen flex items-center justify-center px-8 py-40">
        <div className="max-w-5xl w-full">
          <h2
            style={{ fontFamily: 'var(--font-serif)' }}
            className="text-[clamp(2rem,6vw,5rem)] text-[#F5F5F7] font-light leading-[1.2] mb-20 tracking-tight"
          >
            The 14-Day Architecture Sprint.
          </h2>

          <div className="space-y-16">
            <div className="border-t border-[#E5E7EB]/20 pt-12">
              <h3 className="text-[#F5F5F7] text-2xl mb-6 font-light tracking-wide">Phase 01: Strategic Immersion</h3>
              <p className="text-[#636366] text-base leading-relaxed">
                Deep dive into protocol structure, token utility, ecosystem vision, and competitive positioning.
              </p>
            </div>

            <div className="border-t border-[#E5E7EB]/20 pt-12">
              <h3 className="text-[#F5F5F7] text-2xl mb-6 font-light tracking-wide">Phase 02: Structural Design</h3>
              <p className="text-[#636366] text-base leading-relaxed">
                Creation of the narrative core, tension system, and ignition mechanisms.
              </p>
            </div>

            <div className="border-t border-[#E5E7EB]/20 pt-12">
              <h3 className="text-[#F5F5F7] text-2xl mb-6 font-light tracking-wide">Phase 03: Sequencing & Trigger</h3>
              <p className="text-[#636366] text-base leading-relaxed">
                Precise mapping of pre-launch escalation and symbolic launch event.
              </p>
            </div>

            <div className="border-t border-[#E5E7EB]/20 pt-12">
              <h3 className="text-[#F5F5F7] text-2xl mb-6 font-light tracking-wide">Phase 04: Delivery & Alignment</h3>
              <div className="space-y-3 text-[#636366] text-base leading-relaxed">
                <p>Complete architecture document.</p>
                <p>Live strategic presentation.</p>
                <p>Execution briefing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="min-h-screen flex items-center justify-center px-8 py-40">
        <div className="max-w-4xl w-full">
          <h2
            style={{ fontFamily: 'var(--font-serif)' }}
            className="text-[clamp(2rem,6vw,5rem)] text-[#F5F5F7] font-light leading-[1.2] mb-20 tracking-tight"
          >
            Dream is an Architecture of Market Entry.
          </h2>
          <div className="space-y-8 text-[#F5F5F7] text-lg leading-relaxed max-w-2xl">
            <p>We do not manage communities.<br />We do not run ads.<br />We do not chase virality.</p>
            <p>We design structural launch mechanisms that define how your project is perceived from day one.</p>
            <p>Token launches are not promotional moments.<br />They are structural inflection points.</p>
            <p>We design the inflection.</p>
          </div>
        </div>
      </section>

      {/* Engagement Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-40">
        <div className="max-w-4xl w-full">
          <h2
            style={{ fontFamily: 'var(--font-serif)' }}
            className="text-[clamp(2.5rem,6vw,5rem)] text-[#F5F5F7] font-light leading-[1.2] mb-20 tracking-tight"
          >
            Establish gravity.
          </h2>
          <div className="space-y-8 text-[#F5F5F7] text-lg leading-relaxed mb-16">
            <p>We only work with founders building serious, long-term Web3 infrastructure.</p>
            <p>No meme coins.<br />No speculative hype cycles.</p>
            <p>Selective engagement only.</p>
          </div>
          <div className="space-y-6">
            <Link
              to="/inquire"
              className="inline-block px-12 py-4 border border-[#E5E7EB] text-[#F5F5F7] text-sm tracking-wide hover:bg-[#E5E7EB] hover:text-[#0B0B0D] transition-all duration-300"
            >
              Request Strategic Review
            </Link>
            <p className="text-[#636366] text-sm tracking-wide">
              Gravity Launch Architecture™ — $12,000
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-16 border-t border-[#E5E7EB]/20">
        <div className="max-w-[1800px] mx-auto">
          <div style={{ fontFamily: 'var(--font-serif)' }} className="text-[#F5F5F7] text-2xl mb-4 font-light">
            D
          </div>
          <p className="text-[#636366] text-sm mb-2">Dream — Strategic Launch Architecture</p>
          <p className="text-[#636366] text-sm mb-4">Global</p>
          <p className="text-[#636366] text-sm">© 2026</p>
        </div>
      </footer>
    </div>
  );
}
