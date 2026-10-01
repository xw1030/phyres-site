import { ArrowRight, Radar, ShieldCheck, Zap } from 'lucide-react';
import styles from './preview.module.css';

const mailto = 'mailto:xuewang1129@hotmail.com?subject=Discuss%20an%20AI%20hardware%20evaluation';

export default function BlackWhitePreview() {
  return <main className={styles.page}>
    <header className={styles.header}>
      <a className={styles.logo} href="#top">phyres<span>.ai</span></a>
      <nav><a href="#evaluate">Solutions</a><a href="#proof">Evidence</a><a href="#contact">Company</a></nav>
      <a className={styles.headerCta} href={mailto}>Discuss an evaluation</a>
    </header>

    <section id="top" className={styles.hero}>
      <img className={styles.emBackground} src="/hero-em-signal.png" alt="" aria-hidden="true"/>
      <div className={styles.emOverlay} aria-hidden="true"/>
      <div className={styles.shimmer} aria-hidden="true"><i/><i/><i/><i/><i/><i/></div>
      <div className={styles.heroInner}>
        <p className={styles.eyebrow}>Physical security evaluation for AI hardware</p>
        <h1>Secure AI,<br/><span>down to the silicon.</span></h1>
        <p className={styles.intro}>We connect physical leakage and faults to their impact on AI models, data and decisions.</p>
        <div className={styles.actions}>
          <a className={styles.primary} href={mailto}>Discuss an evaluation <ArrowRight/></a>
          <a className={styles.secondary} href="#evaluate">Explore our approach</a>
        </div>
      </div>
      <div id="proof" className={styles.proof}>
        <p><b>03</b><span>hardware platforms tested</span></p>
        <p><b>03</b><span>peer-reviewed studies</span></p>
        <p><b>Real</b><span>EM, power & fault-injection experiments</span></p>
      </div>
    </section>

    <section id="evaluate" className={styles.evaluate}>
      <div className={styles.titleBlock}><p className={styles.eyebrowDark}>What we evaluate</p><h2>From physical signal<br/>to product decision.</h2></div>
      <p className={styles.statement}>We do more than show that a signal or fault exists. We determine what it means for the AI workload.</p>
      <div className={styles.services}>
        <article><span>01</span><Zap/><div><h3>Fault injection & integrity</h3><p>Can a physical disturbance alter AI outputs, bypass controls or compromise a safety-relevant decision?</p></div></article>
        <article><span>02</span><Radar/><div><h3>Physical leakage</h3><p>Does execution expose model architecture, weights, inputs, outputs or other protected assets?</p></div></article>
        <article><span>03</span><ShieldCheck/><div><h3>Mitigation & retesting</h3><p>Do hardware, runtime or software countermeasures measurably reduce the exposure?</p></div></article>
      </div>
    </section>

    <footer id="contact" className={styles.footer}><p>Independent AI-hardware security evaluation.</p><a href={mailto}>xuewang1129@hotmail.com</a></footer>
  </main>;
}
