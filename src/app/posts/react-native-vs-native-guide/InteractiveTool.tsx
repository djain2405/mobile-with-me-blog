"use client"

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Gauge,
  Cpu,
  Smartphone,
  Wrench,
  GitBranch,
  Zap,
  Layers,
  LineChart,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

// Tiny UI helpers
const Tag = ({ children, tone = "blue" }: { children: React.ReactNode, tone?: string }) => (
  <span
    className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${tone === "indigo"
        ? "bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-100"
        : "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-100"
      }`}
  >
    {children}
  </span>
);

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`rounded-2xl border border-gray-200 bg-white/90 backdrop-blur p-4 shadow-sm ${className}`}>
    {children}
  </div>
);

const SectionTitle = ({ icon: Icon, title, kicker }: { icon: React.ComponentType<{ className?: string }>, title: string, kicker?: string }) => (
  <div className="flex items-center gap-3">
    <div className="rounded-xl p-2 bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      {kicker && (
        <p className="text-xs uppercase tracking-widest text-gray-500">{kicker}</p>
      )}
      <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
    </div>
  </div>
);

// Factors that tilt toward RN or Native
const FACTORS = [
  {
    id: "speed",
    title: "Ship fast on both OS",
    desc: "1 codebase, early MVP, PMF hunt",
    lean: "rn",
    icon: Rocket,
  },
  {
    id: "team",
    title: "Team is JS/TS-heavy",
    desc: "Web/react folks ready to jump in",
    lean: "rn",
    icon: GitBranch,
  },
  {
    id: "perf",
    title: "Max performance / 120fps",
    desc: "Complex gestures, large lists, charts",
    lean: "native",
    icon: Gauge,
  },
  {
    id: "osday1",
    title: "Day‑one OS features every year",
    desc: "Live Activities, App Intents, Wear, etc.",
    lean: "native",
    icon: Smartphone,
  },
  {
    id: "bg",
    title: "Rock‑solid background work",
    desc: "Sync, geofencing, audio, health",
    lean: "native",
    icon: ShieldCheck,
  },
  {
    id: "hw",
    title: "Deep hardware hooks",
    desc: "Camera/AR, BT LE, UWB, sensors",
    lean: "native",
    icon: Cpu,
  },
  {
    id: "forms",
    title: "Mostly feeds/forms/settings",
    desc: "Content/app shell UI, rapid A/Bs",
    lean: "rn",
    icon: Layers,
  },
  {
    id: "ota",
    title: "Want OTA updates",
    desc: "Experiment weekly w/ Expo or CodePush",
    lean: "rn",
    icon: Zap,
  },
] as const;

const InteractiveTool = () => {
  const [selected, setSelected] = useState(() => new Set(["speed", "forms"]))

  const toggle = (id: string) => {
    const next = new Set(selected);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setSelected(next);
  };

  const scores = useMemo(() => {
    let rn = 0,
      native = 0;
    FACTORS.forEach((f) => {
      if (selected.has(f.id)) {
        if (f.lean === "rn") {
          rn += 1;
        } else {
          native += 1;
        }
      }
    });
    return { rn, native };
  }, [selected]);

  const total = Math.max(1, scores.rn + scores.native);
  const rnPct = Math.round((scores.rn / total) * 100);

  const meterHint =
    rnPct > 60
      ? "Leaning React Native"
      : rnPct < 40
        ? "Leaning Native"
        : "Hybrid sweet spot";

  return (
    <div className="w-full bg-gradient-to-br from-indigo-50 via-fuchsia-50 to-amber-50 text-gray-900 rounded-2xl p-6">
      <div className="max-w-5xl mx-auto">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/60 border border-white/10 px-3 py-1 text-sm">
            <span>⚖️ No war, just vibes</span>
            <span className="opacity-60">React Native vs Native</span>
          </div>
          <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight">
            React Native vs Native — the <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-fuchsia-500">vibe check</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            There&apos;s no single right answer. It&apos;s retrospective and use-case-driven. Let&apos;s map the trade-offs visually and keep it fun.
          </p>
        </motion.div>

        {/* TL;DR + Meter */}
        <div className="mt-8 grid gap-4 md:grid-cols-5">
          <Card className="md:col-span-3">
            <SectionTitle icon={Zap} title="TL;DR" kicker="summary" />
            <div className="mt-3 space-y-3 text-sm leading-relaxed">
              <p><b>React Native</b>: 1 codebase → fast ships, great for content-heavy UI and rapid tests; OTA updates for spicy iteration.</p>
              <p><b>Native (Swift/Kotlin)</b>: peak performance, day-one OS features, strongest background reliability, crisp platform polish.</p>
              <p className="text-indigo-600 font-medium">Hybrid exists: RN shell + native modules for hot paths.</p>
            </div>
          </Card>
          <Card className="md:col-span-2">
            <SectionTitle icon={LineChart} title="Live Vibe Meter" kicker="interactive" />
            <div className="mt-4">
              <div className="flex justify-between text-xs text-gray-500">
                <span>RN</span>
                <span>Hybrid</span>
                <span>Native</span>
              </div>
              <div className="relative mt-2 h-3 rounded-full bg-gray-200/60 overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-indigo-500 to-fuchsia-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${rnPct}%` }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                />
              </div>
              <p className="mt-2 text-sm"><b>{meterHint}</b> — {rnPct}% RN, {100 - rnPct}% Native</p>
            </div>
          </Card>
        </div>

        {/* Factor Chips */}
        <Card className="mt-6">
          <SectionTitle icon={Layers} title="Pick your factors" kicker="you decide" />
          <p className="mt-2 text-sm text-gray-600">
            Toggle what matters for <i>this</i> app. The meter updates live.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {FACTORS.map((f) => (
              <div key={f.id} className="flex items-start gap-3">
                <button
                  onClick={() => toggle(f.id)}
                  className={`mt-1 h-5 w-5 rounded-md border flex items-center justify-center ${selected.has(f.id)
                      ? "bg-indigo-600 border-indigo-600 text-white"
                      : "bg-white/60 border-gray-200"
                    }`}
                  aria-pressed={selected.has(f.id)}
                >
                  {selected.has(f.id) ? "✓" : ""}
                </button>
                <div>
                  <p className="font-medium flex items-center gap-2">
                    <f.icon className="h-4 w-4 opacity-70" /> {f.title}
                  </p>
                  <p className="text-xs text-gray-500">{f.desc}</p>
                  <div className="mt-1">
                    {f.lean === "rn" ? <Tag tone="indigo">Leans RN</Tag> : <Tag tone="amber">Leans Native</Tag>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Spectrum + Use cases */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card className="md:col-span-2">
            <SectionTitle icon={LineChart} title="It&apos;s a spectrum, not a binary" kicker="mental model" />
            <div className="mt-4">
              <div className="relative h-2 rounded-full bg-gray-200/60">
                <div className="absolute left-0 top-0 h-2 w-1/3 rounded-l-full bg-indigo-500/50" />
                <div className="absolute left-1/3 top-0 h-2 w-1/3 bg-fuchsia-500/50" />
                <div className="absolute left-2/3 top-0 h-2 w-1/3 rounded-r-full bg-amber-500/60" />
              </div>
              <div className="mt-2 flex justify-between text-xs text-gray-500">
                <span>React Native</span>
                <span>Hybrid</span>
                <span>Native</span>
              </div>
            </div>
            <ul className="mt-4 text-sm list-disc list-inside space-y-1">
              <li>Early stage? Optimize <strong>learning speed</strong> → lean RN.</li>
              <li>Scaling & performance? Optimize <strong>latency & polish</strong> → lean Native.</li>
              <li>Need both? RN shell + native modules (camera, offline engine, payments).</li>
            </ul>
          </Card>
          <Card>
            <SectionTitle icon={PhoneCall} title="Use‑case vibes" kicker="quick picks" />
            <div className="mt-3 text-sm space-y-2">
              <p>📱 <b>RN fits:</b> feeds/forms, e‑comm, social MVPs, internal tools, white‑label.</p>
              <p>🧭 <b>Native fits:</b> fitness/health, nav, audio, fintech offline/secure enclave, camera/AR/3D, heavy widgets/watch/car.</p>
            </div>
          </Card>
        </div>

        {/* Pros & Cons */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card>
            <SectionTitle icon={Rocket} title="React Native — Why it slaps" kicker="pros" />
            <ul className="mt-3 text-sm space-y-2">
              <li>⚡ One codebase → faster features & fewer drift bugs.</li>
              <li>👩‍💻 JS/TS talent pool → easier hiring.</li>
              <li>♻️ Hot reload + OTA → iterate weekly.</li>
              <li>🌐 Rich libs: navigation, reanimated, Skia, etc.</li>
            </ul>
          </Card>
          <Card>
            <SectionTitle icon={ShieldCheck} title="React Native — Keep in mind" kicker="cons" />
            <ul className="mt-3 text-sm space-y-2">
              <li>🔌 Bridge/JSI overhead in hot paths.</li>
              <li>🧰 Native modules sometimes required.</li>
              <li>🗓️ OS day-one features can lag.</li>
              <li>🕵️ Debugging spans JS + native + build tooling.</li>
            </ul>
          </Card>
          <Card>
            <SectionTitle icon={Cpu} title="Native — Why it hits different" kicker="pros" />
            <ul className="mt-3 text-sm space-y-2">
              <li>🏎️ Peak performance & lowest latency gestures.</li>
              <li>🆕 Immediate access to new OS features.</li>
              <li>🧭 Strongest background reliability.</li>
              <li>✨ Platform-idiomatic polish & accessibility.</li>
            </ul>
          </Card>
          <Card>
            <SectionTitle icon={Wrench} title="Native — Keep in mind" kicker="cons" />
            <ul className="mt-3 text-sm space-y-2">
              <li>👥 Two codebases & coordination overhead.</li>
              <li>🧑‍🔧 Specialized hiring for both platforms.</li>
              <li>⏱️ Potentially slower to experiment.</li>
            </ul>
          </Card>
        </div>

        {/* Retrospective lens + Hybrid */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card className="md:col-span-2">
            <SectionTitle icon={GitBranch} title="Retrospective lens" kicker="time matters" />
            <div className="mt-3 text-sm">
              <p>
                Your answer evolves:
              </p>
              <ol className="mt-2 list-decimal list-inside space-y-1">
                <li><b>Pre-MVP:</b> Learn fast → usually RN.</li>
                <li><b>Post-PMF:</b> Scale & polish → native modules or migrate hotspots.</li>
                <li><b>New OS cycles:</b> Adopt features → native first, bridge later.</li>
              </ol>
            </div>
          </Card>
          <Card>
            <SectionTitle icon={Wrench} title="Hybrid patterns" kicker="best of both" />
            <ul className="mt-3 text-sm space-y-2">
              <li>RN shell + native camera/AR/payments.</li>
              <li>JSI/TurboModules for perf-critical paths.</li>
              <li>Kotlin Multiplatform for shared domain.</li>
            </ul>
          </Card>
        </div>

        {/* Footer CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600">
            Got a specific app in mind? Tell me your top 3 must‑haves (e.g., background GPS, watch app, 120fps animations) and I&apos;ll tailor a stack & sprint plan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTool;