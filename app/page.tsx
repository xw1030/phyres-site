import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Cpu,
  Database,
  ExternalLink,
  Gauge,
  LockKeyhole,
  Mail,
  Microscope,
  Radar,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: Zap,
    number: '01',
    title: 'Fault injection & integrity',
    description:
      'Test whether controlled physical disturbances can alter AI outputs, bypass security controls, or compromise safety-relevant decisions.',
    detail: 'Voltage · clock · electromagnetic · body-biasing',
  },
  {
    icon: Radar,
    number: '02',
    title: 'Physical leakage',
    description:
      'Determine whether execution exposes model architecture, weights, user inputs, outputs, or other customer-defined assets.',
    detail: 'Power · electromagnetic · timing',
  },
  {
    icon: ShieldCheck,
    number: '03',
    title: 'Mitigation & retesting',
    description:
      'Translate findings into hardware, runtime, or software countermeasures—and independently verify that they work.',
    detail: 'Recommendation · implementation support · verification',
  },
];

const process = [
  [
    '01',
    'Threat definition',
    'Define assets, attacker access, and success criteria.',
  ],
  [
    '02',
    'Physical testing',
    'Measure leakage or inject controlled disturbances.',
  ],
  [
    '03',
    'AI-level analysis',
    'Connect physical effects to model and system impact.',
  ],
  ['04', 'Mitigation', 'Identify practical hardware and software controls.'],
  ['05', 'Re-evaluation', 'Verify the fix and quantify residual exposure.'],
];

const sectors = [
  'AI chips & accelerators',
  'Automotive & mobility',
  'Medical devices',
  'Industrial & robotics',
  'Edge sensing systems',
  'AI infrastructure',
];
const platforms = [
  'AI-enabled MCUs',
  'Edge processors & SoCs',
  'FPGAs',
  'NPUs & AI accelerators',
  'Embedded GPUs',
];
const evaluatedPlatforms = [
  {
    platform: 'NVIDIA Jetson Nano GPU',
    workload: 'CNN inference',
    capability:
      'Architecture and model-information leakage through electromagnetic side-channel analysis',
  },
  {
    platform: 'Edge GPU platforms',
    workload: 'DNN inference',
    capability:
      'Neural-network weight and workload leakage evaluation under physical access',
  },
  {
    platform: 'Commercial DNN accelerator',
    workload: 'Accelerated inference',
    capability:
      'Physical side-channel evaluation of model-extraction attack scenarios',
  },
];
const team = [
  [
    'Lejla Batina',
    'Co-founder · Founding Scientific Advisor',
    'Hardware security · Side-channel analysis · Fault injection',
    'Professor of Digital Security at Radboud University, where her professorial chair is Security of Small Devices. Her research covers secure implementations of cryptography, embedded-device security, side-channel attacks, fault injection and countermeasures. Her recent work increasingly connects AI with hardware security. She contributes scientific direction, physical-evaluation methodology and an established hardware-security research network.',
    'https://www.ru.nl/en/people/batina-l',
  ],
  [
    'Péter Horváth',
    'Co-founder · Technical Lead',
    'Neural-network leakage · GPU attacks · Evaluation methodology',
    'PhD candidate in Digital Security at Radboud University researching physical attacks against neural networks and AI accelerators. His work has demonstrated the extraction of neural-network architecture and weight information from GPU execution through electromagnetic side channels. He leads the translation of research attacks into reproducible evaluation workflows for real hardware.',
    'https://www.ru.nl/en/people/horvath-p',
  ],
  [
    'Zhuoran Liu',
    'Co-founder · Founding Scientific Advisor',
    'AI security & privacy · Adversarial ML · Physical attacks',
    'Assistant Professor in the Parallel Computing Systems group at the University of Amsterdam. His research lies at the intersection of AI, security and privacy, including adversarial machine learning, side-channel analysis and fault injection. He connects physical measurements and induced faults to their implications for AI models, sensitive data and system behaviour.',
    'https://liuzrcc.github.io/',
  ],
  [
    'Xue Wang',
    'Co-founder · Business and Strategy',
    'Commercial strategy · Market validation · Risk translation',
    'Combines a background in economics with experience in AI and data science. She leads commercial strategy, market validation, financing and development of the business model. Her role is to translate technical findings into customer-relevant evidence about feasibility, exposure and business impact, while building relationships with customers, investors and innovation partners.',
    null,
  ],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#06152f] text-[#eef6ff]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06152f]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a
            href="#top"
            className="flex items-center gap-3"
            aria-label="Phyres.ai home"
          >
            <span className="grid size-9 place-items-center rounded-xl bg-[#0b2451] text-[#38bdf8] shadow-sm">
              <Cpu className="size-5" />
            </span>
            <span className="text-[15px] font-semibold tracking-[-0.02em]">
              Phyres.ai{' '}
              <span className="ml-2 hidden font-mono text-[9px] font-medium uppercase tracking-[0.14em] text-[#91add0] 2xl:inline">
                Independent evaluation
              </span>
            </span>
          </a>
          <nav
            className="hidden items-center gap-7 text-sm font-medium text-[#b8c9df] lg:flex"
            aria-label="Primary navigation"
          >
            <div className="group relative">
              <a
                className="flex items-center gap-1 py-6 transition-colors hover:text-white"
                href="#solutions"
              >
                Solutions <ChevronDown className="size-3.5" />
              </a>
              <div className="invisible absolute left-0 top-[62px] z-50 w-64 translate-y-2 border border-white/10 bg-[#0b2451] p-2 opacity-0 shadow-[0_18px_50px_rgba(0,0,0,.28)] transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <a
                  className="block rounded px-3 py-2.5 hover:bg-[#153b72] hover:text-white"
                  href="#fault-injection"
                >
                  Fault injection & integrity
                </a>
                <a
                  className="block rounded px-3 py-2.5 hover:bg-[#153b72] hover:text-white"
                  href="#physical-leakage"
                >
                  Physical leakage
                </a>
                <a
                  className="block rounded px-3 py-2.5 hover:bg-[#153b72] hover:text-white"
                  href="#mitigation"
                >
                  Mitigation & retesting
                </a>
              </div>
            </div>
            <div className="group relative">
              <a
                className="flex items-center gap-1 py-6 transition-colors hover:text-white"
                href="#support"
              >
                Support <ChevronDown className="size-3.5" />
              </a>
              <div className="invisible absolute left-0 top-[62px] z-50 w-52 translate-y-2 border border-white/10 bg-[#0b2451] p-2 opacity-0 shadow-[0_18px_50px_rgba(0,0,0,.28)] transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <a
                  className="block rounded px-3 py-2.5 hover:bg-[#153b72] hover:text-white"
                  href="#support"
                >
                  Technical support
                </a>
                <a
                  className="block rounded px-3 py-2.5 hover:bg-[#153b72] hover:text-white"
                  href="#training"
                >
                  Training
                </a>
              </div>
            </div>
            <a
              className="py-6 transition-colors hover:text-white"
              href="#evaluated-platforms"
            >
              Evaluated platforms
            </a>
            <div className="group relative">
              <a
                className="flex items-center gap-1 py-6 transition-colors hover:text-white"
                href="#about-us"
              >
                Our company <ChevronDown className="size-3.5" />
              </a>
              <div className="invisible absolute right-0 top-[62px] z-50 w-48 translate-y-2 border border-white/10 bg-[#0b2451] p-2 opacity-0 shadow-[0_18px_50px_rgba(0,0,0,.28)] transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <a
                  className="block rounded px-3 py-2.5 hover:bg-[#153b72] hover:text-white"
                  href="#about-us"
                >
                  About us
                </a>
                <a
                  className="block rounded px-3 py-2.5 hover:bg-[#153b72] hover:text-white"
                  href="#investors"
                >
                  Our investors
                </a>
              </div>
            </div>
          </nav>
          <a
            href="mailto:xuewang1129@hotmail.com?subject=AI%20hardware%20security%20evaluation"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'h-10 rounded-md bg-[#1269c7] px-5 text-white hover:bg-[#2380df]',
            )}
          >
            Start a conversation
          </a>
        </div>
      </header>

      <section id="top" className="relative border-b border-white/10 bg-[#06152f]">
        <img
          src="/hero-em-signal.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-75"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,21,47,.97)_0%,rgba(6,21,47,.82)_42%,rgba(6,21,47,.28)_78%,rgba(6,21,47,.5)_100%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-18 sm:px-8 sm:py-24 lg:grid-cols-[1.12fr_.88fr] lg:px-12 lg:py-30">
          <div className="max-w-3xl">
            <Badge className="mb-7 h-auto rounded-md border border-[#38bdf8]/30 bg-[#0b2451]/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#bceaff] shadow-sm">
              Physical security evaluation for AI hardware
            </Badge>
            <h1 className="max-w-[780px] text-[clamp(3.15rem,6.5vw,6.4rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-[#f4f8ff]">
              Secure AI,
              <span className="block text-[#38bdf8]">down to the silicon.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#b8c9df] sm:text-xl">
              We evaluate whether physical attacks can expose valuable AI models
              and sensitive data—or compromise AI execution on real hardware.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:xuewang1129@hotmail.com?subject=Discuss%20an%20AI%20hardware%20evaluation"
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'h-12 rounded-md bg-[#1269c7] px-6 text-white shadow-[0_10px_35px_rgba(18,105,199,.18)] hover:bg-[#0d5eae]',
                )}
              >
                Discuss an evaluation <ArrowRight />
              </a>
              <a
                href="#solutions"
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'h-12 rounded-md border-white/20 bg-white/5 px-6 text-white hover:bg-white/10',
                )}
              >
                Explore our approach
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative aspect-square w-full max-w-[520px] rounded-xl border border-white/10 bg-[#081b3c] p-6 text-white shadow-[0_24px_70px_rgba(9,29,67,.22)] sm:p-8">
              <div className="absolute inset-0 rounded-xl bg-[linear-gradient(135deg,rgba(56,189,248,.12),transparent_42%)]" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#a9bed8]">
                      Evaluation scope
                    </p>
                    <p className="mt-2 text-2xl font-medium tracking-tight">
                      AI execution under attack
                    </p>
                  </div>
                  <span className="rounded border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#bceaff]">
                    DUT / active
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    [
                      'Confidentiality',
                      'Model · inputs · outputs',
                      LockKeyhole,
                    ],
                    ['Integrity', 'Computation · decisions · controls', Gauge],
                    [
                      'Evidence',
                      'Attack conditions · mitigation effect',
                      Database,
                    ],
                  ].map(([title, desc, Icon]) => {
                    const IconComponent = Icon as typeof LockKeyhole;
                    return (
                      <div
                        key={title as string}
                        className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.055] p-4 backdrop-blur-sm"
                      >
                        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#38bdf8] text-[#0b2451]">
                          <IconComponent className="size-5" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold">
                            {title as string}
                          </p>
                          <p className="mt-0.5 text-xs leading-5 text-[#b8c9df]">
                            {desc as string}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.13em] text-[#91add0]">
                  <span className="size-2 rounded-full bg-[#38bdf8] shadow-[0_0_14px_#38bdf8]" />
                  Research-backed · device-level · reproducible
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#081b3c] text-white">
        <div className="mx-auto grid max-w-7xl divide-y divide-white/10 px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-12">
          {[
            [
              'Protect the asset',
              'Models, sensitive workload data, and proprietary execution details.',
            ],
            [
              'Protect the decision',
              'AI outputs, control flow, and safety-relevant system behaviour.',
            ],
            [
              'Prove the protection',
              'Independent evidence that mitigations work under defined attacks.',
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="py-8 md:px-8 md:first:pl-0 md:last:pr-0"
            >
              <p className="text-sm font-semibold text-[#bceaff]">{title}</p>
              <p className="mt-2 text-sm leading-6 text-[#b8c9df]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="solutions"
        className="mx-auto max-w-7xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
      >
        <div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr] lg:gap-16">
          <div>
            <p className="eyebrow">What we evaluate</p>
            <h2 className="section-title mt-4">
              From physical signal to product decision.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-[#b8c9df]">
              We do more than show that a signal or fault exists. We determine
              what it means for the AI workload, when an attack is feasible, and
              whether the fix is effective.
            </p>
          </div>
          <div className="grid gap-4">
            {services.map(
              ({ icon: Icon, number, title, description, detail }) => (
                <Card
                  key={title}
                  id={
                    number === '01'
                      ? 'fault-injection'
                      : number === '02'
                        ? 'physical-leakage'
                        : 'mitigation'
                  }
                  className="rounded-lg border-0 bg-[#0d2a55] py-0 shadow-[0_14px_45px_rgba(0,0,0,.18)] ring-1 ring-white/10"
                >
                  <CardContent className="grid gap-5 p-6 sm:grid-cols-[48px_1fr_auto] sm:items-center sm:p-7">
                    <span className="grid size-12 place-items-center rounded-lg bg-[#38bdf8]/10 text-[#38bdf8]">
                      <Icon />
                    </span>
                    <div>
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-[10px] text-[#91add0]">
                          {number}
                        </span>
                        <h3 className="text-lg font-semibold tracking-tight">
                          {title}
                        </h3>
                      </div>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-[#b8c9df]">
                        {description}
                      </p>
                    </div>
                    <p className="max-w-[175px] font-mono text-[10px] leading-5 uppercase tracking-[0.1em] text-[#91add0] sm:text-right">
                      {detail}
                    </p>
                  </CardContent>
                </Card>
              ),
            )}
          </div>
        </div>
      </section>

      <section
        id="evaluated-platforms"
        className="scroll-mt-20 border-y border-white/10 bg-[#081b3c]"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="eyebrow">Evaluation experience</p>
              <h2 className="section-title mt-4">
                Platforms tested in our research.
              </h2>
              <p className="mt-6 max-w-md text-sm leading-6 text-[#b8c9df]">
                These platforms demonstrate technical capability and research
                experience. They do not imply vendor endorsement, certification,
                or a commercial customer relationship.
              </p>
            </div>
            <div className="overflow-hidden border border-white/10">
              {evaluatedPlatforms.map((item, index) => (
                <div
                  key={item.platform}
                  className="grid gap-3 border-b border-white/10 bg-[#0d2a55] p-5 last:border-b-0 sm:grid-cols-[.8fr_.6fr_1.6fr] sm:items-start sm:p-6"
                >
                  <div>
                    <span className="font-mono text-[9px] text-[#91add0]">
                      0{index + 1}
                    </span>
                    <p className="mt-1 text-sm font-semibold text-white">
                      {item.platform}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[.12em] text-[#91add0]">
                      AI workload
                    </p>
                    <p className="mt-2 text-xs text-[#b8c9df]">
                      {item.workload}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[.12em] text-[#91add0]">
                      Demonstrated capability
                    </p>
                    <p className="mt-2 text-xs leading-5 text-[#b8c9df]">
                      {item.capability}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="process"
        className="border-y border-white/10 bg-[#0a2147]"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <p className="eyebrow">Integrated evaluation process</p>
          <div className="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <h2 className="section-title max-w-2xl">
              A complete assurance loop, not an isolated lab result.
            </h2>
            <p className="max-w-md text-sm leading-6 text-[#b8c9df]">
              Use the full process or select the modules that match your
              development stage and security objectives.
            </p>
          </div>
          <div className="mt-12 grid gap-3 md:grid-cols-5">
            {process.map(([number, title, text], index) => (
              <div
                key={title}
                className="relative rounded-2xl border border-white/10 bg-[#0d2a55] p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-semibold text-[#38bdf8]">
                    {number}
                  </span>
                  {index < process.length - 1 && (
                    <ArrowRight className="hidden size-4 text-[#91add0] md:block" />
                  )}
                </div>
                <h3 className="mt-8 text-sm font-semibold">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-[#b8c9df]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="support"
        className="mx-auto max-w-7xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">Where it matters</p>
            <h2 className="section-title mt-4">
              Built for high-value and safety-relevant AI.
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {sectors.map((sector) => (
                <div
                  key={sector}
                  className="flex min-h-22 items-end rounded-2xl border border-white/10 bg-[#0d2a55] p-4 text-sm font-medium shadow-sm"
                >
                  <span>{sector}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl bg-[#0c2a58] p-7 text-white sm:p-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-[#aebfd5]">
              Platforms in scope
            </p>
            <div className="mt-8 space-y-1">
              {platforms.map((platform) => (
                <div
                  key={platform}
                  className="flex items-center justify-between border-b border-white/10 py-4"
                >
                  <span className="text-lg tracking-tight">{platform}</span>
                  <CheckCircle2 className="size-4 text-[#38bdf8]" />
                </div>
              ))}
            </div>
            <div
              id="training"
              className="mt-10 scroll-mt-28 rounded-lg border border-[#38bdf8]/20 bg-[#38bdf8]/8 p-5"
            >
              <p className="flex items-center gap-2 text-sm font-semibold text-[#c9edff]">
                <Sparkles className="size-4" /> Complementary training
              </p>
              <p className="mt-2 text-xs leading-5 text-[#aebfd5]">
                Practical training can complement an evaluation, helping
                engineering and security teams understand attack methods,
                interpret findings, and improve internal readiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about-us"
        className="scroll-mt-20 border-y border-white/10 bg-[#081b3c]"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow">Technical foundation</p>
              <h2 className="section-title mt-4">
                Frontier research, translated for real products.
              </h2>
              <p className="mt-6 text-base leading-7 text-[#b8c9df]">
                The team combines peer-reviewed AI-hardware attack research,
                specialist laboratory experience, and expertise spanning
                physical security, AI privacy, data science, and commercial
                risk.
              </p>
              <div className="mt-7 flex items-center gap-3 rounded-2xl border border-[#38bdf8]/20 bg-[#38bdf8]/8 p-4 text-sm font-medium text-[#c9edff]">
                <Microscope className="size-5 shrink-0" /> Originating from
                research at Radboud University
              </div>
            </div>
            <div className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2">
              {team.map(([name, role, highlight, bio, profile]) => (
                <div key={name} className="bg-[#0d2a55] p-6 sm:p-7">
                  {profile ? (
                    <a
                      href={profile}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-base font-semibold text-white hover:text-[#38bdf8]"
                      aria-label={`Open ${name}'s profile`}
                    >
                      {name}
                      <ExternalLink className="size-3.5 text-[#38bdf8]" />
                    </a>
                  ) : (
                    <p className="text-base font-semibold text-white">{name}</p>
                  )}
                  <p className="mt-2 font-mono text-[9px] font-semibold uppercase tracking-[.12em] text-[#38bdf8]">
                    {role}
                  </p>
                  <p className="mt-5 text-sm font-semibold leading-6 text-white">
                    {highlight}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#b8c9df]">{bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="investors"
        className="scroll-mt-20 border-b border-white/10 bg-[#0a2147]"
      >
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 sm:px-8 md:grid-cols-[.75fr_1.25fr] md:items-center lg:px-12">
          <div>
            <p className="eyebrow">Our investors</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-.035em] text-white">
              Investment partnerships in development.
            </h2>
          </div>
          <p className="text-sm leading-6 text-[#b8c9df]">
            The company is currently at the pre-seed stage. Confirmed investors
            and funding partners will be published here once agreements are
            complete.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="overflow-hidden rounded-xl border border-[#38bdf8]/25 bg-[#0d2a55] p-7 text-white sm:p-11 lg:grid lg:grid-cols-[1fr_auto] lg:items-end lg:gap-14">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.17em]">
              What we are looking for
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Build the evidence for secure AI hardware with us.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-[#b8c9df]">
              We are speaking with design partners, prospective customers,
              investors, and funding partners interested in shaping a rigorous,
              repeatable evaluation category.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col">
            <a
              href="mailto:xuewang1129@hotmail.com?subject=Design%20partnership%20for%20AI%20hardware%20security"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'h-12 rounded-md bg-[#0b2451] px-6 text-white hover:bg-[#173e78]',
              )}
            >
              Explore a design partnership <ArrowRight />
            </a>
            <a
              href="mailto:peter.horvath2@ru.nl?subject=Technical%20conversation%20about%20AI%20hardware%20security"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'h-12 rounded-md border-white/20 bg-transparent px-6 text-white hover:bg-white/10',
              )}
            >
              Technical conversation
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#17335f]/10 bg-[#081b3c] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 md:grid-cols-[1fr_auto] md:items-end lg:px-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-xl bg-[#38bdf8] text-[#0b2451]">
                <Cpu className="size-5" />
              </span>
              <span className="font-semibold">Phyres.ai</span>
            </div>
            <p className="mt-4 max-w-md text-xs leading-5 text-[#a9bdd5]">
              Independent evaluation for the confidentiality, integrity, and
              safe operation of AI on real hardware.
            </p>
          </div>
          <div className="space-y-2 text-xs text-[#b5c6dc] md:text-right">
            <a
              className="flex items-center gap-2 hover:text-white md:justify-end"
              href="mailto:xuewang1129@hotmail.com"
            >
              <Mail className="size-3.5" /> xuewang1129@hotmail.com
            </a>
            <a
              className="flex items-center gap-2 hover:text-white md:justify-end"
              href="mailto:peter.horvath2@ru.nl"
            >
              <Mail className="size-3.5" /> peter.horvath2@ru.nl
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
