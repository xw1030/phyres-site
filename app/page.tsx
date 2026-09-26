import {
  ArrowRight, Bot, Car, CheckCircle2, CircuitBoard, ExternalLink,
  Factory, HeartPulse, LockKeyhole, Mail, Microscope, Radar, RadioTower,
  Server, ShieldCheck, Sparkles, Zap,
} from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const mailto = 'mailto:xuewang1129@hotmail.com?subject=Discuss%20an%20AI%20hardware%20evaluation';

const services = [
  { icon: Zap, number: '01', title: 'Fault injection & integrity', description: 'Test whether controlled physical disturbances can alter AI outputs, bypass security controls or compromise safety-relevant decisions.', detail: 'Voltage · clock · electromagnetic · body-biasing', accent: 'amber' },
  { icon: Radar, number: '02', title: 'Physical leakage', description: 'Determine whether execution exposes model architecture, weights, user inputs, outputs or other customer-defined assets.', detail: 'Power · electromagnetic · timing', accent: 'blue' },
  { icon: ShieldCheck, number: '03', title: 'Mitigation & retesting', description: 'Translate findings into hardware, runtime or software countermeasures—and independently verify that they work.', detail: 'Recommendation · implementation support · verification', accent: 'teal' },
];

const process = [
  { number: '01', title: 'Threat definition', text: 'Define the protected assets, attacker access and measurable success criteria.' },
  { number: '02', title: 'Physical testing', text: 'Capture physical leakage or inject controlled voltage, clock and electromagnetic disturbances.' },
  { number: '03', title: 'AI-level impact analysis', text: 'Determine how physical effects change model data, parameters, outputs or control flow.' },
  { number: '04', title: 'Mitigation', text: 'Develop practical countermeasures across hardware, runtimes and software.' },
  { number: '05', title: 'Re-evaluation', text: 'Re-test the implementation and quantify the remaining exposure.' },
];

const evidence = [
  { publication: 'USENIX Security 2025', title: 'BarraCUDA: Edge GPUs do Leak DNN Weights', attack: 'Correlation electromagnetic analysis', hardware: 'NVIDIA Jetson Nano GPU', demonstrated: 'Recovered parameters from real-world convolutional neural networks running on an edge GPU.', context: 'Embedded vision, robotics and edge-AI development', href: 'https://www.usenix.org/conference/usenixsecurity25/presentation/horvath', tone: 'blue' },
  { publication: 'ACNS Workshops 2024', title: 'CNN Architecture Extraction on Edge GPU', attack: 'Electromagnetic side channel + deep learning', hardware: 'NVIDIA Jetson Nano GPU', demonstrated: 'Distinguished 15 popular CNN architectures from physical emissions during inference.', context: 'On-device inference for vision and autonomous systems', href: 'https://arxiv.org/abs/2401.13575', tone: 'blue' },
  { publication: 'USENIX Security 2019', title: 'CSI NN: Reverse Engineering of Neural Network Architectures', attack: 'Electromagnetic side-channel analysis', hardware: 'ARM Cortex-M3 microcontroller', demonstrated: 'Recovered neural-network structure, including layer and activation information, from embedded execution.', context: 'MCUs used in embedded, industrial and connected products', href: 'https://www.usenix.org/conference/usenixsecurity19/technical-sessions', tone: 'teal' },
  { publication: 'Latest research · 2025', title: 'ScaAR: Real-world Edge Neural Networks Leak Private Interactions', attack: 'Electromagnetic analysis + neural classification', hardware: 'AMD-Xilinx ZCU104 · Raspberry Pi 3B / 5', demonstrated: 'Classified private interactions and distinguished LLM tokens from physical execution traces.', context: 'FPGA prototyping, IoT, edge computing and local AI', href: 'https://arxiv.org/abs/2501.14512', tone: 'amber' },
];

const sectors = [
  { icon: CircuitBoard, label: 'AI chips & accelerators' }, { icon: Car, label: 'Automotive & mobility' },
  { icon: HeartPulse, label: 'Medical devices' }, { icon: Factory, label: 'Industrial systems' },
  { icon: Bot, label: 'Robotics & edge sensing' }, { icon: Server, label: 'AI infrastructure' },
];
const platforms = ['AI-enabled MCUs', 'Edge processors & SoCs', 'FPGAs', 'NPUs & AI accelerators', 'Embedded GPUs'];
const team = [
  { name: 'Lejla Batina', role: 'Co-founder · Founding Scientific Advisor', bio: 'Professor of Digital Security at Radboud University. She contributes leading expertise in side-channel analysis, fault injection and secure hardware evaluation.', profile: 'https://www.ru.nl/en/people/batina-l' },
  { name: 'Péter Horváth', role: 'Co-founder · Technical Lead', bio: 'Researches physical attacks on neural networks and GPUs, including architecture and weight leakage from real devices. He leads evaluation methodology.', profile: 'https://www.ru.nl/en/people/horvath-p' },
  { name: 'Zhuoran Liu', role: 'Co-founder · Founding Scientific Advisor', bio: 'Assistant Professor at the University of Amsterdam working across AI security, privacy and hardware attacks. He connects physical effects to AI-level impact.', profile: 'https://liuzrcc.github.io/' },
  { name: 'Xue Wang', role: 'Co-founder · Business and Strategy', bio: 'Leads commercial strategy, market validation and customer development, drawing on experience in economics, AI and data science.', profile: null },
];

function SignalTrace({ tone = 'blue' }: { tone?: string }) {
  const stroke = tone === 'amber' ? '#f5b942' : tone === 'teal' ? '#2dd4bf' : '#38bdf8';
  return <svg aria-hidden="true" viewBox="0 0 320 42" className="h-10 w-full" preserveAspectRatio="none"><path d="M0 21H320" stroke="rgba(255,255,255,.08)"/><path d="M0 22 L28 22 L35 16 L39 30 L43 10 L47 28 L52 21 L88 21 L94 18 L100 24 L106 14 L111 31 L117 20 L151 20 L158 8 L164 34 L171 12 L178 27 L185 21 L222 21 L228 17 L233 25 L240 11 L247 31 L253 20 L320 20" fill="none" stroke={stroke} strokeWidth="1.6" vectorEffect="non-scaling-stroke"/></svg>;
}

function PhyresWordmark({ className }: { className?: string }) {
  return <span className={cn('inline-block bg-[linear-gradient(105deg,#b9e8ff_0%,#52c7ff_38%,#2380df_68%,#0f5fb8_100%)] bg-clip-text font-black leading-none tracking-[-0.075em] text-transparent', className)}>phyres</span>;
}

export default function Home() {
  return <main className="min-h-screen overflow-x-clip bg-[#06152f] text-[#eef6ff]">
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#06152f]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#top" className="flex items-center" aria-label="Phyres.ai home"><PhyresWordmark className="text-2xl"/></a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-[#b8c9df] lg:flex" aria-label="Primary navigation">
          <a className="py-6 transition-colors hover:text-white" href="#solutions">Solutions</a><a className="py-6 transition-colors hover:text-white" href="#work-with-us">Work with us</a><a className="py-6 transition-colors hover:text-white" href="#evidence">Evidence</a><a className="py-6 transition-colors hover:text-white" href="#company">Company</a>
        </nav>
        <a href={mailto} className={cn(buttonVariants({ size: 'lg' }), 'h-10 rounded-md bg-[#1269c7] px-5 text-white hover:bg-[#2380df]')}>Discuss an evaluation</a>
      </div>
    </header>

    <section id="top" className="relative border-b border-white/8 bg-[#06152f]">
      <img src="/hero-em-signal.png" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full scale-x-[-1] object-cover object-center opacity-70"/>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,21,47,.98)_0%,rgba(6,21,47,.84)_44%,rgba(6,21,47,.32)_80%,rgba(6,21,47,.58)_100%)]" aria-hidden="true"/>
      <div className="relative mx-auto flex min-h-[700px] max-w-7xl items-center justify-center px-5 py-20 text-center sm:px-8 lg:px-12"><div className="mx-auto flex max-w-6xl flex-col items-center">
        <PhyresWordmark className="text-[clamp(5rem,10vw,9rem)]"/>
        <h1 className="mt-5 text-[clamp(2.5rem,5.2vw,5.15rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-[#f4f8ff] lg:whitespace-nowrap">Secure AI, <span className="text-[#38bdf8]">down to the silicon.</span></h1>
        <p className="mt-9 max-w-3xl text-xl font-semibold leading-8 text-white sm:text-2xl">We connect physical leakage and faults to their impact on AI models, data and decisions.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><a href={mailto} className={cn(buttonVariants({ size: 'lg' }), 'h-12 rounded-md bg-[#1269c7] px-6 text-white hover:bg-[#0d5eae]')}>Discuss an evaluation <ArrowRight/></a><a href="#process" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-12 rounded-md border-white/20 bg-white/5 px-6 text-white hover:bg-white/10')}>Explore our approach</a></div>
      </div></div>
    </section>

    <section className="bg-[#081b3c] text-white">
      <div className="mx-auto grid max-w-7xl gap-px bg-white/8 px-5 sm:px-8 md:grid-cols-3 lg:px-12">
        {[
          { icon: LockKeyhole, title: 'Protect the asset', text: 'Models, sensitive data and proprietary execution details.', tone: 'text-[#38bdf8]' },
          { icon: Zap, title: 'Protect the decision', text: 'AI outputs, control flow and safety-relevant behaviour.', tone: 'text-[#f5b942]' },
          { icon: ShieldCheck, title: 'Verify the protection', text: 'Independent evidence that mitigations work.', tone: 'text-[#2dd4bf]' },
        ].map(({ icon: Icon, title, text, tone }) => <div key={title} className="flex items-start gap-4 bg-[#081b3c] py-8 md:px-8 md:first:pl-0 md:last:pr-0"><Icon className={cn('mt-1 size-5 shrink-0', tone)}/><div><p className="text-sm font-semibold text-white">{title}</p><p className="mt-2 text-sm leading-6 text-[#b8c9df]">{text}</p></div></div>)}
      </div>
      <div className="border-t border-white/8 px-5 py-5 text-center text-sm font-semibold uppercase tracking-[.1em] text-[#bceaff] sm:text-base">3 hardware platforms tested · 3 peer-reviewed studies · EM, power and fault-injection methods</div>
    </section>

    <section id="solutions" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="relative min-h-[430px] overflow-hidden rounded-xl bg-[#081b3c]"><img src="/what-we-evaluate-chip.png" alt="Technical illustration of an AI accelerator package" className="absolute inset-0 h-full w-full object-cover opacity-35"/><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,21,47,.98)_5%,rgba(6,21,47,.80)_50%,rgba(6,21,47,.25)_100%)]"/><div className="relative flex min-h-[430px] max-w-2xl flex-col justify-center p-7 sm:p-12 lg:p-16"><p className="text-sm font-semibold uppercase tracking-[.16em] text-[#7dd3fc]">What we evaluate</p><h2 className="section-title mt-5"><span className="block">From physical signal</span><span className="block">to product decision.</span></h2><p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-white">We connect physical leakage and faults to their impact on AI models, data and decisions.</p><p className="mt-3 max-w-xl text-sm leading-6 text-[#b8c9df]">We determine what an observation means for the workload, when an attack is feasible and whether the fix is effective.</p></div></div>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">{services.map(({ icon: Icon, number, title, description, detail, accent }) => <article key={title} className="bg-[#0d2a55] p-6 shadow-[0_14px_40px_rgba(0,0,0,.14)] sm:p-7"><div className="flex items-center gap-3"><Icon className={cn('size-5 shrink-0', accent === 'amber' ? 'text-[#f5b942]' : accent === 'teal' ? 'text-[#2dd4bf]' : 'text-[#38bdf8]')}/><span className="text-xs font-semibold text-[#91add0]">{number}</span><h3 className="text-base font-semibold tracking-tight text-white">{title}</h3></div><p className="mt-4 text-sm leading-6 text-[#b8c9df]">{description}</p><p className="mt-5 text-[10px] font-semibold uppercase tracking-[.1em] text-[#91add0]">{detail}</p></article>)}</div>
    </section>

    <section id="process" className="scroll-mt-20 bg-[#091d40]"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><p className="eyebrow">Evaluation workflow</p><h2 className="section-title mt-4 lg:whitespace-nowrap">A complete assurance loop.</h2><p className="mt-5 text-base leading-7 text-[#b8c9df] lg:whitespace-nowrap">Our evaluation approach is designed to connect physical measurements to AI-level impact, mitigation and re-testing.</p><div className="mt-12 grid gap-4 md:grid-cols-6">{process.map(({ number, title, text }, index) => <article key={title} className={cn('flex min-h-40 gap-4 bg-[#0d2a55] p-5 md:col-span-2', index === 3 && 'md:col-start-2', index === 4 && 'md:col-start-4')}><span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#102f60] text-xs font-semibold text-[#7dd3fc]">{number}</span><div><h3 className="text-base font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-[#b8c9df]">{text}</p></div></article>)}</div></div></section>

    <section id="evidence" className="scroll-mt-20 bg-[#071934]"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-16"><div><p className="text-sm font-semibold uppercase tracking-[.16em] text-[#7dd3fc]">Evidence</p><h2 className="section-title mt-4">Research evidence on real hardware.</h2><p className="mt-6 max-w-md text-sm leading-6 text-[#b8c9df]">Each item links to the underlying publication. These studies demonstrate technical capability; they do not imply vendor endorsement, certification or a commercial relationship.</p></div><div className="grid gap-4">{evidence.map(item => <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="group block bg-[#0d2a55] p-5 transition-colors hover:bg-[#113361] sm:p-6"><div className="flex items-start justify-between gap-5"><div><p className={cn('text-[10px] font-semibold uppercase tracking-[.13em]', item.tone === 'amber' ? 'text-[#f5b942]' : item.tone === 'teal' ? 'text-[#2dd4bf]' : 'text-[#38bdf8]')}>{item.publication}</p><h3 className="mt-2 text-lg font-semibold leading-6 text-white group-hover:text-[#bceaff]">{item.title}</h3></div><ExternalLink className="mt-1 size-4 shrink-0 text-[#91add0] group-hover:text-white"/></div><SignalTrace tone={item.tone}/><div className="mt-3 grid gap-4 text-xs sm:grid-cols-3"><div><p className="font-semibold text-white">Attack type</p><p className="mt-1 leading-5 text-[#b8c9df]">{item.attack}</p></div><div><p className="font-semibold text-white">Hardware</p><p className="mt-1 leading-5 text-[#b8c9df]">{item.hardware}</p></div><div><p className="font-semibold text-white">Typical product context</p><p className="mt-1 leading-5 text-[#b8c9df]">{item.context}</p></div></div><p className="mt-5 border-l-2 border-[#38bdf8]/45 pl-4 text-sm leading-6 text-[#dbeafe]"><span className="font-semibold text-white">Demonstrated: </span>{item.demonstrated}</p></a>)}</div></div></div></section>

    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-20"><div><p className="eyebrow">Where it matters</p><h2 className="section-title mt-4 max-w-3xl">Built for high-value and safety-relevant AI.</h2><p className="mt-5 max-w-2xl text-base leading-7 text-[#b8c9df]">Particularly relevant where models, sensitive data or safety-critical decisions execute on-device.</p><div className="mt-9 grid gap-3 sm:grid-cols-2">{sectors.map(({ icon: Icon, label }) => <div key={label} className="flex items-center gap-4 bg-[#0b2451] px-5 py-4"><Icon className="size-5 shrink-0 text-[#38bdf8]"/><span className="text-sm font-medium text-white">{label}</span></div>)}</div></div><div className="bg-[#0c2a58] p-7 sm:p-9"><div className="flex items-center gap-3"><RadioTower className="size-5 text-[#2dd4bf]"/><p className="text-xs font-semibold uppercase tracking-[.14em] text-[#9ddfd6]">Platforms in scope</p></div><div className="mt-6">{platforms.map(platform => <div key={platform} className="flex items-center justify-between border-b border-white/8 py-4 last:border-0"><span className="text-base tracking-tight text-white">{platform}</span><CheckCircle2 className="size-4 text-[#2dd4bf]"/></div>)}</div><div className="mt-8 bg-[#071934]/45 p-5"><p className="flex items-center gap-2 text-sm font-semibold text-white"><Sparkles className="size-4 text-[#7dd3fc]"/> Complementary training</p><p className="mt-2 text-xs leading-5 text-[#b8c9df]">Practical training can help engineering and security teams interpret findings and improve internal readiness.</p></div></div></div></section>

    <section id="company" className="scroll-mt-20 bg-[#081b3c]"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16"><div><p className="eyebrow">Company</p><h2 className="section-title mt-4">Research-led. Built for deployment.</h2><p className="mt-6 text-base leading-7 text-[#b8c9df]">The team combines peer-reviewed AI-hardware attack research with expertise in physical security, AI privacy, data science and commercial development.</p><p className="mt-6 flex items-start gap-3 text-sm leading-6 text-[#c9edff]"><Microscope className="mt-1 size-5 shrink-0"/> Originating from research at Radboud University</p><div className="mt-9 border-l-2 border-[#2dd4bf] pl-5"><p className="text-xs font-semibold uppercase tracking-[.13em] text-[#5eead4]">Funding & partnerships</p><p className="mt-3 text-sm leading-6 text-[#b8c9df]">We are currently engaging with strategic investors and funding partners as we move from research validation to customer pilots.</p></div></div><div className="grid gap-3 sm:grid-cols-2">{team.map(({ name, role, bio, profile }) => <article key={name} className="bg-[#0d2a55] p-6">{profile ? <a href={profile} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-base font-semibold text-white hover:text-[#38bdf8]">{name}<ExternalLink className="size-3.5"/></a> : <p className="text-base font-semibold text-white">{name}</p>}<p className="mt-2 text-[10px] font-semibold uppercase tracking-[.11em] text-[#38bdf8]">{role}</p><p className="mt-4 text-sm leading-6 text-[#b8c9df]">{bio}</p></article>)}</div></div></div></section>

    <section id="work-with-us" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><div className="bg-[#0d2a55] p-7 sm:p-11 lg:grid lg:grid-cols-[1fr_auto] lg:items-end lg:gap-14"><div><p className="eyebrow">Work with us</p><h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl">Evaluate a real device, workload or protection claim.</h2><p className="mt-5 max-w-2xl text-sm leading-6 text-[#b8c9df]">We are speaking with design partners, prospective customers, investors and funding partners interested in rigorous, repeatable AI-hardware assurance.</p></div><div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col"><a href={mailto} className={cn(buttonVariants({ size: 'lg' }), 'h-12 rounded-md bg-[#1269c7] px-6 text-white hover:bg-[#2380df]')}>Discuss an evaluation <ArrowRight/></a><a href="#process" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-12 rounded-md border-white/20 bg-transparent px-6 text-white hover:bg-white/10')}>Explore our approach</a></div></div></section>

    <footer className="border-t border-white/8 bg-[#081b3c] text-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 md:grid-cols-[1fr_auto] md:items-end lg:px-12"><div><PhyresWordmark className="text-3xl"/><p className="mt-4 max-w-md text-xs leading-5 text-[#a9bdd5]">Independent evaluation for the confidentiality, integrity and safe operation of AI on real hardware.</p></div><div className="space-y-2 text-xs text-[#b5c6dc] md:text-right"><a className="flex items-center gap-2 hover:text-white md:justify-end" href="mailto:xuewang1129@hotmail.com"><Mail className="size-3.5"/> xuewang1129@hotmail.com</a><a className="flex items-center gap-2 hover:text-white md:justify-end" href="mailto:peter.horvath2@ru.nl"><Mail className="size-3.5"/> peter.horvath2@ru.nl</a></div></div></footer>
  </main>;
}
