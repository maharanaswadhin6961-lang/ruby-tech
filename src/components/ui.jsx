import React, { useState } from 'react';
import { ArrowRight, Award, Blocks, BookOpen, Braces, Brain, Check, ChevronDown, Code2, Layers3, MapPin, Search, TerminalSquare, Users, Workflow, X } from 'lucide-react';

const iconMap = { users: Users, layers: Layers3, code: Code2, map: MapPin, brain: Brain, terminal: TerminalSquare, award: Award, braces: Braces, workflow: Workflow, blocks: Blocks, book: BookOpen };

export function Icon({ name, size = 20, ...props }) {
  const IconComponent = iconMap[name] || Code2;
  return <IconComponent size={size} strokeWidth={1.7} aria-hidden="true" {...props} />;
}

export function Button({ children, variant = 'primary', className = '', onClick, href, type = 'button' }) {
  const classes = `button button-${variant} ${className}`.trim();
  if (href) return <a className={classes} href={href} onClick={onClick}>{children}</a>;
  return <button className={classes} type={type} onClick={onClick}>{children}</button>;
}

export function SectionHeading({ eyebrow, title, copy, align = 'left', light = false }) {
  return (
    <div className={`section-heading align-${align} ${light ? 'heading-light' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

export function Reveal({ children, className = '' }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

export function StatCard({ value, label, icon }) {
  return <div className="stat-card"><span className="stat-icon"><Icon name={icon} size={19} /></span><strong>{value}</strong><span>{label}</span></div>;
}

export function FeatureCard({ item }) {
  return <article className="feature-card"><div className="feature-card-top"><span className="feature-icon"><Icon name={item.icon} size={21} /></span><span className="mono-number">{item.number}</span></div><h3>{item.title}</h3><p>{item.copy}</p><span className="feature-arrow"><ArrowRight size={16} /></span></article>;
}

export function TrackCard({ track, onSelect, selected = false, showDetails = false }) {
  return (
    <article className={`track-card track-${track.accent} ${selected ? 'is-selected' : ''}`}>
      <div className="track-card-head"><span className="track-chip">{track.range}</span><span className="track-art"><Icon name={track.id === 'junior' ? 'braces' : 'workflow'} size={25} /></span></div>
      <h3>{track.name}</h3><p>{track.description}</p>
      <div className="track-detail"><span>ELIGIBILITY</span><strong>{track.eligibility}</strong></div>
      <div className="track-detail"><span>FORMAT</span><strong>{track.format}</strong></div>
      {showDetails && <><div className="track-detail"><span>DIFFICULTY</span><strong>{track.difficulty}</strong></div><div className="track-skills">{track.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></>}
      <button className="track-link" type="button" onClick={() => onSelect(track.id)}>{selected ? 'Selected' : 'Learn more'} {selected ? <Check size={15} /> : <ArrowRight size={15} />}</button>
    </article>
  );
}

export function Timeline({ items }) {
  return <ol className="timeline">{items.map((item, index) => <li className="timeline-item" key={item.step}><span className="timeline-step">{item.step}</span><div><h3>{item.title}</h3><p>{item.note}</p></div>{index < items.length - 1 && <span className="timeline-connector" aria-hidden="true" />}</li>)}</ol>;
}

export function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  return <div className="faq-list">{items.map((item, index) => {
    const expanded = openIndex === index;
    const panelId = `faq-answer-${index}`;
    return <article className={`faq-item ${expanded ? 'is-open' : ''}`} key={item.question}>
      <h3><button type="button" aria-expanded={expanded} aria-controls={panelId} onClick={() => setOpenIndex(expanded ? null : index)}>{item.question}<ChevronDown size={18} /></button></h3>
      <div id={panelId} className="faq-answer" hidden={!expanded}><p>{item.answer}</p></div>
    </article>;
  })}</div>;
}

export function PreparationCard({ item, onStart }) {
  return <article className="prep-card"><div className="prep-card-top"><span className="prep-icon"><Icon name={item.icon} size={21} /></span><span className="prep-tag">{item.tag}</span></div><h3>{item.title}</h3><p>{item.copy}</p><div className="progress-label"><span>Learning path</span><span>{item.progress}%</span></div><div className="progress-track"><span style={{ width: `${item.progress}%` }} /></div><button className="text-action" type="button" onClick={onStart}>Start learning <ArrowRight size={15} /></button></article>;
}

export function RoundCard({ item }) {
  return <article className="round-card"><span className="round-number">{item.number}</span><span className="eyebrow">{item.type}</span><h3>{item.title}</h3><p>{item.description}</p><ul>{item.items.map((detail) => <li key={detail}><Check size={14} />{detail}</li>)}</ul></article>;
}

export function ResultCard({ result }) {
  return <article className="result-card"><div className="result-card-head"><div><span className="eyebrow">SAMPLE RESULT</span><h3>{result.name}</h3></div><span className="result-rank"><small>RANK</small>#{result.rank}</span></div><div className="result-id">Registration ID <strong>{result.id}</strong></div><div className="result-metrics"><div><span>Score</span><strong>{result.score}</strong></div><div><span>Track</span><strong>{result.track}</strong></div><div><span>Round status</span><strong>{result.status}</strong></div><div><span>Certificate</span><strong>{result.certificate}</strong></div></div><p className="result-disclaimer">Illustrative sample data only. Not an official Ruby Bot Tech Hack result.</p></article>;
}

export function RegistrationModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setFormError('');
    setSubmitted(true);
  }

  function closeModal() {
    onClose();
    window.setTimeout(() => setSubmitted(false), 250);
  }

  if (!open) return null;
  return <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) closeModal(); }}>
    <section className="registration-modal" role="dialog" aria-modal="true" aria-labelledby="registration-title">
      <button className="modal-close icon-button" type="button" onClick={closeModal} aria-label="Close registration form"><X size={19} /></button>
      {submitted ? <div className="success-state"><span className="success-icon"><Check size={27} /></span><span className="eyebrow">YOU'RE ON YOUR WAY</span><h2 id="registration-title">Registration form submitted successfully.</h2><p>This is a frontend-only confirmation. Your information has not been sent or stored.</p><Button onClick={closeModal}>Done <ArrowRight size={16} /></Button></div> : <>
        <span className="eyebrow">TAKE THE FIRST STEP</span><h2 id="registration-title">Start your Ruby Bot Tech Hack journey.</h2><p className="modal-intro">A sample registration form. No information is sent or stored.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>Student name<input name="name" autoComplete="name" placeholder="Your full name" required /></label>
            <label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
            <label>Class<select name="class" defaultValue="" required><option value="" disabled>Select class</option>{Array.from({ length: 7 }, (_, index) => <option key={index + 6}>Class {index + 6}</option>)}</select></label>
            <label>Track<select name="track" defaultValue="" required><option value="" disabled>Choose track</option><option>Junior Track</option><option>Senior Track</option></select></label>
            <label>School<input name="school" placeholder="School name" required /></label>
            <label>City<input name="city" autoComplete="address-level2" placeholder="Your city" required /></label>
          </div>
          {formError && <p className="form-error" role="alert">{formError}</p>}
          <Button type="submit" className="form-submit">Continue <ArrowRight size={16} /></Button>
          <p className="form-note">Demo only. Submission stays in this browser session.</p>
        </form>
      </>}
    </section>
  </div>;
}

export function SearchInput({ value, onChange, placeholder, label }) {
  return <label className="search-field"><span className="sr-only">{label}</span><Search size={18} /><input value={value} onChange={onChange} placeholder={placeholder} /></label>;
}