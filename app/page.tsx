import { ArrowRight, CheckCircle2, Cpu, Database, Gauge, LockKeyhole, Mail, Microscope, Radar, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const services = [
  { icon: Zap, number: '01', title: 'Fault injection & integrity', description: 'Test whether controlled physical disturbances can alter AI outputs, bypass security controls, or compromise safety-relevant decisions.', detail: 'Voltage · clock · electromagnetic · body-biasing' },
  { icon: Radar, number: '02', title: 'Physical leakage', description: 'Determine whether execution exposes model architecture, weights, user inputs, outputs, or other customer-defined assets.', detail: 'Power · electromagnetic · timing' },
  { icon: ShieldCheck, number: '03', title: 'Mitigation & retesting', description: 'Translate findings into hardware, runtime, or software countermeasures—and independently verify that they work.', detail: 'Recommendation · implementation support · verification' },
];

const process = [
  ['01', 'Threat definition', 'Define assets, attacker access, and success criteria.'],
  ['02', 'Physical testing', 'Measure leakage or inject controlled disturbances.'],
  ['03', 'AI-level analysis', 'Connect physical effects to model and system impact.'],
  ['04', 'Mitigation', 'Identify practical hardware and software controls.'],
  ['05', 'Re-evaluation', 'Verify the fix and quantify residual exposure.'],
];

const sectors = ['AI chips & accelerators', 'Automotive & mobility', 'Medical devices', 'Industrial & robotics', 'Edge sensing systems', 'AI infrastructure'];
const platforms = ['AI-enabled MCUs', 'Edge processors & SoCs', 'FPGAs', 'NPUs & AI accelerators', 'Embedded GPUs'];
const team = [
  ['Lejla Batina', 'Physical hardware security, side-channel analysis and fault injection'],
  ['Péter Horváth', 'Physical attacks and information leakage from neural networks and GPUs'],
  ['Zhuoran Liu', 'AI security, privacy, adversarial machine learning and hardware security'],
  ['Xue Wang', 'Economics, AI, data science and commercial strategy'],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8f5] text-[#102724]">
      <header className="sticky top-0 z-50 border-b border-[#163d38]/10 bg-[#f7f8f5]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" className="flex items-center gap-3" aria-label="AI Hardware Security home">
            <span className="grid size-9 place-items-center rounded-xl bg-[#123c36] text-[#c9fb69] shadow-sm"><Cpu className="size-5" /></span>
            <span className="text-[15px] font-semibold tracking-[-0.02em]">AI Hardware Security</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#355650] md:flex" aria-label="Primary navigation">
            <a className="transition-colors hover:text-[#102724]" href="#services">Services</a>
            <a className="transition-colors hover:text-[#102724]" href="#process">Process</a>
            <a className="transition-colors hover:text-[#102724]" href="#team">Team</a>
          </nav>
          <a href="mailto:xuewang1129@hotmail.com?subject=AI%20hardware%20security%20evaluation" className={cn(buttonVariants({ size: 'lg' }), 'h-10 rounded-full bg-[#123c36] px-5 text-[#f4ffdb] hover:bg-[#1a5149]')}>Start a conversation</a>
        </div>
      </header>

      <section id="top" className="relative border-b border-[#163d38]/10">
        <div className="signal-grid absolute inset-0 opacity-65" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-18 sm:px-8 sm:py-24 lg:grid-cols-[1.12fr_.88fr] lg:px-12 lg:py-30">
          <div className="max-w-3xl">
            <Badge className="mb-7 h-auto rounded-full border border-[#27665b]/20 bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#27665b] shadow-sm">Startup in formation · Nijmegen, NL</Badge>
            <h1 className="max-w-[780px] text-[clamp(3.3rem,7vw,6.9rem)] font-semibold leading-[0.92] tracking-[-0.067em] text-[#0d2e2a]">Secure AI,<span className="block text-[#2f7167]">where it runs.</span></h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#496660] sm:text-xl">Independent evaluation of whether physical attacks can expose valuable AI models and sensitive data—or compromise the integrity of AI-driven decisions on real hardware.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="mailto:xuewang1129@hotmail.com?subject=Discuss%20an%20AI%20hardware%20evaluation" className={cn(buttonVariants({ size: 'lg' }), 'h-12 rounded-full bg-[#c9fb69] px-6 text-[#123c36] shadow-[0_10px_35px_rgba(77,118,39,.18)] hover:bg-[#baf257]')}>Discuss an evaluation <ArrowRight /></a>
              <a href="#services" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-12 rounded-full border-[#1d4942]/20 bg-white/70 px-6 text-[#123c36] hover:bg-white')}>Explore our approach</a>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative aspect-square w-full max-w-[520px] rounded-[2.2rem] border border-white/10 bg-[#102f2b] p-6 text-white shadow-[0_35px_90px_rgba(10,42,37,.24)] sm:p-8">
              <div className="absolute inset-0 rounded-[2.2rem] bg-[radial-gradient(circle_at_65%_22%,rgba(201,251,105,.16),transparent_31%)]" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#a8c9c3]">Evaluation scope</p><p className="mt-2 text-2xl font-medium tracking-tight">AI execution under attack</p></div>
                  <span className="rounded-full border border-[#c9fb69]/30 bg-[#c9fb69]/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#d9ff91]">Live system</span>
                </div>
                <div className="space-y-3">
                  {[
                    ['Confidentiality', 'Model · inputs · outputs', LockKeyhole],
                    ['Integrity', 'Computation · decisions · controls', Gauge],
                    ['Evidence', 'Attack conditions · mitigation effect', Database],
                  ].map(([title, desc, Icon]) => {
                    const IconComponent = Icon as typeof LockKeyhole;
                    return <div key={title as string} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.055] p-4 backdrop-blur-sm"><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#c9fb69] text-[#123c36]"><IconComponent className="size-5" /></span><div><p className="text-sm font-semibold">{title as string}</p><p className="mt-0.5 text-xs leading-5 text-[#acc8c3]">{desc as string}</p></div></div>;
                  })}
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.13em] text-[#8db2ab]"><span className="size-2 rounded-full bg-[#c9fb69] shadow-[0_0_14px_#c9fb69]" />Research-backed · device-level · reproducible</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#102f2b] text-white"><div className="mx-auto grid max-w-7xl divide-y divide-white/10 px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-12">
        {[
          ['Protect the asset', 'Models, sensitive workload data, and proprietary execution details.'],
          ['Protect the decision', 'AI outputs, control flow, and safety-relevant system behaviour.'],
          ['Prove the protection', 'Independent evidence that mitigations work under defined attacks.'],
        ].map(([title, text]) => <div key={title} className="py-8 md:px-8 md:first:pl-0 md:last:pr-0"><p className="text-sm font-semibold text-[#d9ff91]">{title}</p><p className="mt-2 text-sm leading-6 text-[#acc8c3]">{text}</p></div>)}
      </div></section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr] lg:gap-16">
          <div><p className="eyebrow">What we evaluate</p><h2 className="section-title mt-4">From physical signal to product decision.</h2><p className="mt-6 max-w-md text-base leading-7 text-[#557069]">We do more than show that a signal or fault exists. We determine what it means for the AI workload, when an attack is feasible, and whether the fix is effective.</p></div>
          <div className="grid gap-4">
            {services.map(({ icon: Icon, number, title, description, detail }) => <Card key={title} className="rounded-[1.5rem] border-0 bg-white py-0 shadow-[0_14px_45px_rgba(23,57,51,.07)] ring-1 ring-[#143b35]/8"><CardContent className="grid gap-5 p-6 sm:grid-cols-[48px_1fr_auto] sm:items-center sm:p-7"><span className="grid size-12 place-items-center rounded-2xl bg-[#e8f3df] text-[#2b655b]"><Icon /></span><div><div className="flex items-baseline gap-3"><span className="font-mono text-[10px] text-[#85a099]">{number}</span><h3 className="text-lg font-semibold tracking-tight">{title}</h3></div><p className="mt-2 max-w-2xl text-sm leading-6 text-[#58736c]">{description}</p></div><p className="max-w-[175px] font-mono text-[10px] leading-5 uppercase tracking-[0.1em] text-[#78918b] sm:text-right">{detail}</p></CardContent></Card>)}
          </div>
        </div>
      </section>

      <section id="process" className="border-y border-[#163d38]/10 bg-[#eef3ea]"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <p className="eyebrow">Integrated evaluation process</p><div className="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end"><h2 className="section-title max-w-2xl">A complete assurance loop, not an isolated lab result.</h2><p className="max-w-md text-sm leading-6 text-[#58736c]">Use the full process or select the modules that match your development stage and security objectives.</p></div>
        <div className="mt-12 grid gap-3 md:grid-cols-5">{process.map(([number, title, text], index) => <div key={title} className="relative rounded-2xl border border-[#173f38]/10 bg-[#f9faf7] p-5"><div className="flex items-center justify-between"><span className="font-mono text-[10px] font-semibold text-[#2f7167]">{number}</span>{index < process.length - 1 && <ArrowRight className="hidden size-4 text-[#8ca49f] md:block" />}</div><h3 className="mt-8 text-sm font-semibold">{title}</h3><p className="mt-2 text-xs leading-5 text-[#647d77]">{text}</p></div>)}</div>
      </div></section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div><p className="eyebrow">Where it matters</p><h2 className="section-title mt-4">Built for high-value and safety-relevant AI.</h2><div className="mt-8 grid grid-cols-2 gap-3">{sectors.map((sector) => <div key={sector} className="flex min-h-22 items-end rounded-2xl border border-[#173f38]/10 bg-white p-4 text-sm font-medium shadow-sm"><span>{sector}</span></div>)}</div></div>
        <div className="rounded-[2rem] bg-[#173f38] p-7 text-white sm:p-10"><p className="font-mono text-[10px] uppercase tracking-[0.17em] text-[#b9d2cc]">Platforms in scope</p><div className="mt-8 space-y-1">{platforms.map((platform) => <div key={platform} className="flex items-center justify-between border-b border-white/10 py-4"><span className="text-lg tracking-tight">{platform}</span><CheckCircle2 className="size-4 text-[#c9fb69]" /></div>)}</div><div className="mt-10 rounded-2xl border border-[#c9fb69]/20 bg-[#c9fb69]/8 p-5"><p className="flex items-center gap-2 text-sm font-semibold text-[#dcffa0]"><Sparkles className="size-4" /> Complementary training</p><p className="mt-2 text-xs leading-5 text-[#b9d2cc]">Practical training can complement an evaluation, helping engineering and security teams understand attack methods, interpret findings, and improve internal readiness.</p></div></div>
      </div></section>

      <section id="team" className="border-y border-[#163d38]/10 bg-white"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div><p className="eyebrow">Technical foundation</p><h2 className="section-title mt-4">Frontier research, translated for real products.</h2><p className="mt-6 text-base leading-7 text-[#58736c]">The team combines peer-reviewed AI-hardware attack research, specialist laboratory experience, and expertise spanning physical security, AI privacy, data science, and commercial risk.</p><div className="mt-7 flex items-center gap-3 rounded-2xl bg-[#edf5e7] p-4 text-sm font-medium text-[#244f48]"><Microscope className="size-5 shrink-0" /> Originating from research at Radboud University</div></div>
        <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-[#173f38]/10 bg-[#173f38]/10 sm:grid-cols-2">{team.map(([name, focus]) => <div key={name} className="bg-[#f9faf7] p-6 sm:p-7"><p className="text-base font-semibold">{name}</p><p className="mt-2 text-sm leading-6 text-[#607972]">{focus}</p></div>)}</div>
      </div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><div className="overflow-hidden rounded-[2rem] bg-[#c9fb69] p-7 text-[#123c36] sm:p-11 lg:grid lg:grid-cols-[1fr_auto] lg:items-end lg:gap-14">
        <div><p className="font-mono text-[10px] font-semibold uppercase tracking-[0.17em]">What we are looking for</p><h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Build the evidence for secure AI hardware with us.</h2><p className="mt-5 max-w-2xl text-sm leading-6 text-[#305c55]">We are speaking with design partners, prospective customers, investors, and funding partners interested in shaping a rigorous, repeatable evaluation category.</p></div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col"><a href="mailto:xuewang1129@hotmail.com?subject=Design%20partnership%20for%20AI%20hardware%20security" className={cn(buttonVariants({ size: 'lg' }), 'h-12 rounded-full bg-[#123c36] px-6 text-white hover:bg-[#1b5149]')}>Explore a design partnership <ArrowRight /></a><a href="mailto:peter.horvath2@ru.nl?subject=Technical%20conversation%20about%20AI%20hardware%20security" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-12 rounded-full border-[#123c36]/20 bg-transparent px-6 hover:bg-white/30')}>Technical conversation</a></div>
      </div></section>

      <footer className="border-t border-[#163d38]/10 bg-[#102f2b] text-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 md:grid-cols-[1fr_auto] md:items-end lg:px-12"><div><div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-xl bg-[#c9fb69] text-[#123c36]"><Cpu className="size-5" /></span><span className="font-semibold">AI Hardware Security</span></div><p className="mt-4 max-w-md text-xs leading-5 text-[#a8c5c0]">Independent evaluation for the confidentiality, integrity, and safe operation of AI on real hardware.</p></div><div className="space-y-2 text-xs text-[#b5cec9] md:text-right"><a className="flex items-center gap-2 hover:text-white md:justify-end" href="mailto:xuewang1129@hotmail.com"><Mail className="size-3.5" /> xuewang1129@hotmail.com</a><a className="flex items-center gap-2 hover:text-white md:justify-end" href="mailto:peter.horvath2@ru.nl"><Mail className="size-3.5" /> peter.horvath2@ru.nl</a></div></div></footer>
    </main>
  );
}
