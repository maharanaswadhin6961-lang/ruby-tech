import React, { useMemo, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronRight, CircleHelp, Code2, Layers3, Lightbulb, Search, ShieldCheck, Sparkles, Target, Trophy, X } from 'lucide-react';
import { faqs, features, journey, mockResults, preparation, roundDetails, stats, tracks } from './data.js';
import { Button, FAQAccordion, FeatureCard, Icon, PreparationCard, ResultCard, RoundCard, SectionHeading, StatCard, Timeline, TrackCard, SearchInput } from './components/ui.jsx';

function Hero({ onRegister, onNavigate }) {
  return <section className="hero-section">
    <div className="hero-grid">
      <div className="hero-copy">
        <span className="hero-kicker"><span className="live-dot" /> A NATIONAL STAGE FOR YOUNG INNOVATORS</span>
        <h1>Ruby Bot <span>Tech Hack</span></h1>
        <p>India's platform for young programmers to learn, compete, and build.</p>
        <div className="hero-actions"><Button onClick={onRegister}>Register now <ArrowUpRight size={17} /></Button><Button variant="outline" onClick={() => onNavigate('olympiad')}>Explore olympiad <ArrowRight size={16} /></Button></div>
        <div className="hero-footnote"><span className="avatar-stack"><i>A</i><i>R</i><i>M</i><b>+</b></span><span>For curious minds in classes 6–12</span></div>
      </div>
      <div className="hero-art" aria-label="Illustration of a programming challenge in a code editor">
        <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
        <div className="editor-window">
          <div className="editor-top"><div className="window-dots"><i /><i /><i /></div><span>challenge.py</span><span className="editor-language">PY</span></div>
          <div className="editor-body"><div className="code-line"><span>01</span><code><em>def</em> <b>solve</b>(problem):</code></div><div className="code-line"><span>02</span><code>&nbsp;&nbsp;ideas = <strong>think</strong>(problem)</code></div><div className="code-line"><span>03</span><code>&nbsp;&nbsp;<em>for</em> idea <em>in</em> ideas:</code></div><div className="code-line"><span>04</span><code>&nbsp;&nbsp;&nbsp;&nbsp;solution = <strong>build</strong>(idea)</code></div><div className="code-line"><span>05</span><code>&nbsp;&nbsp;&nbsp;&nbsp;<em>if</em> solution.<b>works</b>():</code></div><div className="code-line"><span>06</span><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>return</strong> <i>"brilliant!"</i></code></div><div className="code-line code-comment"><span>07</span><code># your next idea starts here_</code></div></div>
          <div className="editor-status"><span><span className="live-dot" /> Ready to run</span><span>Python · UTF-8</span></div>
        </div>
        <div className="float-chip chip-top"><span className="chip-icon"><Code2 size={17} /></span><span><b>Curiosity</b><small>is the first line</small></span></div>
        <div className="float-chip chip-bottom"><span className="chip-burst">✳</span><span><b>Think. Build.</b><small>Repeat.</small></span></div>
        <span className="art-caption">A challenge worth solving <ArrowDown size={14} /></span>
      </div>
    </div>
    <div className="hero-index"><span>01 / 07</span><span>LEARN · COMPETE · BUILD</span></div>
  </section>;
}

function StatsBand() {
  return <section className="stats-band"><div className="stats-inner">{stats.map((stat) => <StatCard key={stat.label} {...stat} />)}</div><p className="sample-caption">Illustrative platform concept · figures and details are placeholders</p></section>;
}

function HomePage({ onRegister, onNavigate }) {
  return <>
    <Hero onRegister={onRegister} onNavigate={onNavigate} />
    <StatsBand />
    <section className="section-wrap about-intro"><div className="about-intro-label"><span className="eyebrow">01 — THE BIG IDEA</span><div className="vertical-rule" /><span className="about-aside">A little curiosity.<br />A lot of possibility.</span></div><div className="about-intro-copy"><SectionHeading eyebrow="ABOUT THE OLYMPIAD" title={<>Programming is more than code.<br /><span>It’s a way to think.</span></>} copy="Ruby Bot Tech Hack is a frontend concept that encourages students to explore programming, logical thinking, problem solving, and practical technology skills." /><Button variant="text" onClick={() => onNavigate('about')}>Discover our purpose <ArrowRight size={16} /></Button></div><div className="about-stamp"><span>IDEAS<br />INTO<br /><b>IMPACT</b></span><Sparkles size={22} /></div></section>
    <section className="section-wrap feature-section"><SectionHeading eyebrow="WHY TAKE PART" title="More than a competition." copy="A space to stretch your thinking, find your people, and make something that works." /><div className="feature-grid">{features.map((feature) => <FeatureCard item={feature} key={feature.number} />)}</div></section>
    <section className="tracks-section section-wrap"><div className="section-row"><SectionHeading eyebrow="FIND YOUR LEVEL" title="Two tracks. One big stage." copy="A thoughtful challenge for every stage of your programming journey." /><Button variant="text" onClick={() => onNavigate('tracks')}>Compare all tracks <ArrowRight size={16} /></Button></div><div className="track-grid">{tracks.map((track) => <TrackCard key={track.id} track={track} onSelect={() => onNavigate('tracks')} />)}</div></section>
    <section className="journey-section"><div className="section-wrap"><SectionHeading eyebrow="THE COMPETITION JOURNEY" title="One step sparks the next." copy="From your first application to the final challenge, every round is a chance to grow." /><Timeline items={journey} /><p className="sample-caption journey-caption">Sample competition flow. Exact format and dates depend on an official announcement.</p></div></section>
    <section className="section-wrap prep-preview"><div className="prep-preview-copy"><SectionHeading eyebrow="YOUR NEXT MOVE" title={<>Prepare<br /><span>smarter.</span></>} copy="Build a steady foundation with a practical path through the skills that matter." /><Button onClick={() => onNavigate('preparation')}>Explore preparation <ArrowRight size={16} /></Button></div><div className="prep-preview-grid">{preparation.slice(0, 3).map((item, index) => <div className={`mini-prep mini-prep-${index}`} key={item.title}><span className="mini-prep-icon"><Icon name={item.icon} size={20} /></span><span className="mini-prep-no">0{index + 1}</span><h3>{item.title}</h3><span className="mini-prep-link">Explore topic <ArrowUpRight size={13} /></span></div>)}</div></section>
    <CTASection onRegister={onRegister} />
  </>;
}

function PageIntro({ eyebrow, title, copy, number }) {
  return <section className="page-intro section-wrap"><div className="page-intro-meta"><span className="eyebrow">{eyebrow}</span><span className="mono-number">{number} / 07</span></div><h1>{title}</h1><p>{copy}</p><span className="intro-spark">✳</span></section>;
}

function AboutPage({ onNavigate }) {
  const values = [
    { icon: 'brain', title: 'Mission', copy: 'Make programming and computational thinking feel approachable, rewarding, and useful to students everywhere.' },
    { icon: 'workflow', title: 'Vision', copy: 'A generation that can question technology, shape it thoughtfully, and use it to solve meaningful problems.' },
    { icon: 'award', title: 'Our philosophy', copy: 'Reward clear thinking, curiosity, resilience, and creative process alongside a working solution.' },
  ];
  return <><PageIntro eyebrow="A PLATFORM FOR POSSIBILITY" number="02" title={<>Give bright ideas<br /><span>room to run.</span></>} copy="A national programming olympiad concept built around a simple belief: every student can learn to think like a builder." />
    <section className="section-wrap about-feature-band"><div className="about-graphic"><div className="graphic-grid"><span>01</span><Code2 size={52} strokeWidth={1.1} /><span>1001</span><span className="graphic-bracket">{`{ }`}</span></div><span className="graphic-note">IDEAS ARE<br />EXECUTABLE</span></div><div><span className="eyebrow">WHY PROGRAMMING EDUCATION MATTERS</span><h2>It’s not about typing faster. <span>It’s about thinking differently.</span></h2><p>Programming turns curiosity into something you can test. It helps students break complex questions into smaller steps, learn from what doesn’t work, and make technology more than a black box.</p><p>Whether a student writes their first loop or prototypes an ambitious idea, the most valuable outcome is a mindset: patient, precise, and imaginative.</p><Button variant="text" onClick={() => onNavigate('preparation')}>Explore learning paths <ArrowRight size={16} /></Button></div></section>
    <section className="values-section"><div className="section-wrap"><SectionHeading eyebrow="WHAT GUIDES US" title="Built around how students grow." /><div className="values-grid">{values.map((value, index) => <article className="value-card" key={value.title}><span className="value-index">0{index + 1}</span><span className="value-icon"><Icon name={value.icon} /></span><h3>{value.title}</h3><p>{value.copy}</p></article>)}</div></div></section>
    <section className="section-wrap learning-outcomes"><div><span className="eyebrow">WHO CAN PARTICIPATE</span><h2>For students who<br />wonder <span>“what if?”</span></h2><p>The concept is aimed at school students in two suggested age-based tracks. The exact age and class eligibility, entry rules, and participation requirements must be confirmed in the official competition announcement.</p><Button variant="outline" onClick={() => onNavigate('tracks')}>See the tracks <ArrowRight size={16} /></Button></div><div className="outcome-list"><span className="eyebrow">WHAT STUDENTS PRACTISE</span>{['Reasoning from first principles', 'Writing clear, practical code', 'Breaking down unfamiliar problems', 'Testing ideas and learning from results', 'Presenting a solution with confidence'].map((item, index) => <div className="outcome-row" key={item}><span>0{index + 1}</span><strong>{item}</strong><ArrowUpRight size={15} /></div>)}</div></section>
    <CTASection onNavigate={onNavigate} />
  </>;
}

function OlympiadPage({ onRegister, onNavigate }) {
  return <><PageIntro eyebrow="THE CHALLENGE, STEP BY STEP" number="03" title={<>How the Olympiad<br /><span>could work.</span></>} copy="A sample three-round structure designed to move from clear thinking to practical creation." />
    <section className="section-wrap round-overview"><div className="round-intro"><span className="eyebrow">THREE ROUNDS</span><h2>Think it.<br />Try it.<br /><span>Make it.</span></h2><p>Each round invites students to bring a little more of themselves to the problem.</p><div className="illustrative-flag"><CircleHelp size={18} /><span>Illustrative format only.<br />Official rules may differ.</span></div></div><div className="round-card-list">{roundDetails.map((round) => <RoundCard key={round.number} item={round} />)}</div></section>
    <section className="olympiad-timeline"><div className="section-wrap"><SectionHeading eyebrow="A POSSIBLE TIMELINE" title="Mark the milestones." copy="Example phases only. Dates are intentionally not supplied." /><div className="milestone-list">{[['Registration opens', 'Explore the tracks and submit your interest.'], ['Round 1', 'Online programming and aptitude assessment.'], ['Round 2', 'Project, programming, or video-based challenge.'], ['Round 3', 'Live hands-on coding or prototype challenge.'], ['Results', 'Sample results and recognition phase.']].map(([title, copy], index) => <div className="milestone" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div><span className="milestone-mark">{index === 4 ? <Trophy size={18} /> : <ChevronRight size={17} />}</span></div>)}</div></div></section>
    <section className="section-wrap evaluation-section"><div className="evaluation-copy"><span className="eyebrow">EVALUATION OVERVIEW</span><h2>Good thinking deserves to be <span>seen.</span></h2><p>Potential evaluation dimensions shown for this concept. No official scoring rubric is being represented.</p></div><div className="evaluation-points">{[{ icon: 'target', title: 'Correctness', copy: 'Does the solution do what it sets out to do?' }, { icon: 'brain', title: 'Reasoning', copy: 'Can the student explain the path they took?' }, { icon: 'sparkles', title: 'Originality', copy: 'Is there thoughtful initiative in the approach?' }, { icon: 'code', title: 'Craft', copy: 'Is the work clear, practical, and well tested?' }].map((item) => <div className="evaluation-point" key={item.title}><span><Icon name={item.icon} size={19} /></span><div><h3>{item.title}</h3><p>{item.copy}</p></div></div>)}</div></section>
    <section className="section-wrap tips-band"><div className="tips-heading"><span className="eyebrow">A GOOD PLACE TO START</span><h2>Prepare with<br /><span>intention.</span></h2><Button variant="light" onClick={() => onNavigate('preparation')}>See preparation hub <ArrowRight size={16} /></Button></div><div className="tips-list">{['Practise a little, often; consistency beats cramming.', 'Say your reasoning out loud before writing code.', 'Test edge cases and learn to debug calmly.', 'Build a small project you genuinely care about.'].map((tip, index) => <div key={tip}><span>0{index + 1}</span><p>{tip}</p></div>)}</div></section>
    <section className="section-wrap faq-preview"><div className="section-row"><SectionHeading eyebrow="NEED A LITTLE CLARITY?" title="A few quick answers." /><Button variant="text" onClick={() => onNavigate('faq')}>All questions <ArrowRight size={16} /></Button></div><FAQAccordion items={faqs.slice(0, 4)} /></section>
    <CTASection onRegister={onRegister} />
  </>;
}

function TracksPage({ onRegister, onNavigate }) {
  const [selected, setSelected] = useState('');
  const active = tracks.find((track) => track.id === selected);
  return <><PageIntro eyebrow="CHOOSE YOUR CHALLENGE" number="04" title={<>Your track.<br /><span>Your kind of hard.</span></>} copy="Two age-based pathways, each with room to grow. Choose the one that best fits your current stage." />
    <section className="section-wrap track-page-section"><div className="track-grid track-page-grid">{tracks.map((track) => <TrackCard key={track.id} track={track} showDetails selected={selected === track.id} onSelect={setSelected} />)}</div>{active && <div className="selection-confirmation" role="status"><span><Check size={17} /></span><p><strong>{active.name} selected.</strong> This is a frontend preview; your choice is not saved.</p><button type="button" onClick={() => setSelected('')} aria-label="Clear track selection"><X size={17} /></button></div>}</section>
    <section className="section-wrap compare-section"><SectionHeading eyebrow="AT A GLANCE" title="Different starting points. Shared ambition." /><div className="compare-table-wrap"><table className="compare-table"><thead><tr><th scope="col">Pathway</th><th scope="col">Junior</th><th scope="col">Senior</th></tr></thead><tbody><tr><th scope="row">Suggested classes</th><td>6–8</td><td>9–12</td></tr><tr><th scope="row">Focus</th><td>Logic and fundamentals</td><td>Algorithms and development</td></tr><tr><th scope="row">Challenge style</th><td>Guided, exploratory</td><td>Open-ended, applied</td></tr><tr><th scope="row">Preparation</th><td>Programming basics</td><td>Problem solving and projects</td></tr></tbody></table></div><p className="sample-caption">Suggested track descriptions only. Final criteria depend on the official announcement.</p></section>
    <CTASection onRegister={onRegister} onNavigate={onNavigate} />
  </>;
}

function PreparationPage({ onRegister, onNavigate }) {
  const [activeLesson, setActiveLesson] = useState('');
  const lesson = preparation.find((item) => item.title === activeLesson);
  const groups = [
    { title: 'Programming fundamentals', description: 'Get comfortable with the building blocks.', items: ['Variables', 'Input / output', 'Conditions', 'Loops', 'Functions', 'Basic data structures'], color: 'blue' },
    { title: 'Problem solving', description: 'Learn to see the structure inside a problem.', items: ['Logical reasoning', 'Patterns', 'Mathematical problems', 'Algorithmic thinking'], color: 'green' },
    { title: 'Practical coding', description: 'Put your ideas to work in small, real projects.', items: ['Small projects', 'Debugging', 'Rapid coding', 'Prototype development'], color: 'violet' },
  ];
  return <><PageIntro eyebrow="YOUR PREPARATION HUB" number="05" title={<>Build skills.<br /><span>Make progress.</span></>} copy="A visual learning dashboard for steady practice. Progress indicators are decorative and do not track learning." />
    <section className="section-wrap learning-dashboard"><div className="dashboard-topline"><div><span className="eyebrow">YOUR LEARNING MAP</span><h2>Good foundations, <span>great ideas.</span></h2></div><div className="dashboard-progress"><span className="progress-ring">3<span>/</span>12</span><span><b>Topics to explore</b><small>Sample progress · visual only</small></span></div></div><div className="learning-groups">{groups.map((group, index) => <article className={`learning-group group-${group.color}`} key={group.title}><div className="learning-group-head"><span className="learning-index">0{index + 1}</span><div><h3>{group.title}</h3><p>{group.description}</p></div><span className="group-illustration"><Icon name={index === 0 ? 'braces' : index === 1 ? 'brain' : 'blocks'} size={24} /></span></div><div className="topic-list">{group.items.map((item) => <span key={item}><Check size={13} />{item}</span>)}</div><div className="group-progress"><span>Illustrative path</span><div className="progress-track"><span style={{ width: `${[42, 31, 17][index]}%` }} /></div><b>{[42, 31, 17][index]}%</b></div><Button variant="outline" onClick={() => setActiveLesson(group.title)}>Start learning <ArrowRight size={15} /></Button></article>)}</div>
      {lesson && <div className="lesson-preview" role="status"><div><span className="eyebrow">LEARNING PREVIEW</span><strong>{lesson.title}</strong><span>Choose a topic above to begin a sample lesson path. No progress is stored.</span></div><button type="button" onClick={() => setActiveLesson('')} aria-label="Dismiss learning preview"><X size={18} /></button></div>}
    </section>
    <section className="section-wrap prep-library"><div className="section-row"><SectionHeading eyebrow="PICK UP A THREAD" title="Small steps count." copy="Short, useful paths for building confidence before the challenge." /></div><div className="preparation-grid">{preparation.map((item) => <PreparationCard item={item} key={item.title} onStart={() => setActiveLesson(item.title)} />)}</div></section>
    <section className="section-wrap resource-note"><span className="resource-icon"><Lightbulb size={22} /></span><div><span className="eyebrow">A NOTE ON LEARNING</span><h2>Stay curious, not perfect.</h2><p>Try a solution. Find where it breaks. Ask what you could change. Those are the habits that make a strong programmer, long before any competition day.</p></div></section>
    <CTASection onRegister={onRegister} onNavigate={onNavigate} />
  </>;
}

function ResultsPage({ onRegister, onNavigate }) {
  const [registrationId, setRegistrationId] = useState('');
  const [result, setResult] = useState(null);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState('');

  function handleSearch(event) {
    event.preventDefault();
    if (!registrationId.trim()) {
      setError('Enter a registration ID to search.');
      setResult(null);
      setSearched(false);
      return;
    }
    const match = mockResults.find((record) => record.id.toLowerCase() === registrationId.trim().toLowerCase());
    setError('');
    setResult(match || null);
    setSearched(true);
  }

  return <><PageIntro eyebrow="RESULTS LOOKUP" number="06" title={<>Every result tells<br /><span>a story of progress.</span></>} copy="Look up an illustrative sample record using a demo registration ID." />
    <section className="section-wrap results-layout"><div className="results-search-panel"><div className="results-search-heading"><span className="search-large-icon"><Search size={24} /></span><span className="eyebrow">STUDENT RESULT SEARCH</span><h2>Find a result.</h2><p>Enter a sample registration ID to see how a future results page might work.</p></div><form className="result-search-form" onSubmit={handleSearch} noValidate><label htmlFor="registration-id">Registration ID</label><div className="result-search-input"><input id="registration-id" value={registrationId} onChange={(event) => { setRegistrationId(event.target.value); setError(''); }} placeholder="e.g. NYPO2026-001" aria-describedby={error ? 'result-error' : 'result-samples'} /><button className="button button-dark" type="submit" aria-label="Search result"><Search size={17} /><span>Search</span></button></div>{error && <p className="form-error" id="result-error" role="alert">{error}</p>}<div className="sample-ids" id="result-samples"><span>Try a sample:</span>{mockResults.map((sample) => <button key={sample.id} type="button" onClick={() => { setRegistrationId(sample.id); setError(''); }}>{sample.id}</button>)}</div></form></div>
      <div className="result-output" aria-live="polite">{result ? <ResultCard result={result} /> : searched ? <div className="no-result"><span><Search size={22} /></span><h3>No result found.</h3><p>Please check the registration ID and try again.</p></div> : <div className="result-empty"><div className="empty-illustration"><span>?</span><span>?</span><span><Search size={23} /></span></div><h3>Your result will appear here.</h3><p>This is a frontend demo. Records shown are mock data.</p></div>}</div></section>
    <section className="section-wrap api-note"><ShieldCheck size={20} /><p><strong>Built for a future connection.</strong> This interface currently reads local sample data only; no API or student information is contacted.</p></section>
    <section className="results-facts"><div className="section-wrap results-facts-inner"><span className="eyebrow">WHAT A RESULT COULD INCLUDE</span><div><span><Trophy size={17} /> Rank</span><span><Target size={17} /> Score</span><span><Layers3 size={17} /> Track</span><span><Check size={17} /> Round status</span><span><AwardIcon /> Certificate status</span></div></div></section>
    <CTASection onRegister={onRegister} onNavigate={onNavigate} />
  </>;
}

function AwardIcon() { return <Trophy size={17} />; }

function FAQCodeVisual() {
  return <section className="faq-code-band section-wrap" aria-labelledby="faq-code-title">
    <div className="faq-code-copy">
      <span className="eyebrow">THE CURIOSITY LOOP / 01</span>
      <h2 id="faq-code-title">Ask a better question.<br /><span>Build a better answer.</span></h2>
      <p>Every great solution starts with a small spark of curiosity. Follow the thought, test the idea, and see where it takes you.</p>
      <div className="faq-code-signature"><Code2 size={16} /><span>think <i>→</i> test <i>→</i> build</span></div>
    </div>
    <div className="faq-code-visual" role="img" aria-label="Illustration of a code editor turning a question into a working prototype">
      <div className="faq-code-editor">
        <div className="faq-code-toolbar"><span className="faq-code-dots"><i /><i /><i /></span><span>curiosity.js</span><span className="faq-code-language">JS</span></div>
        <div className="faq-code-lines">
          <div><span>01</span><code><b>const</b> question = <em>"what if?"</em>;</code></div>
          <div><span>02</span><code><b>const</b> idea = <strong>imagine</strong>(question);</code></div>
          <div><span>03</span><code><b>for</b> (<b>const</b> step <b>of</b> idea.steps) {'{'}</code></div>
          <div><span>04</span><code>&nbsp;&nbsp;<strong>prototype</strong>(step);</code></div>
          <div><span>05</span><code>&nbsp;&nbsp;<b>if</b> (step.<i>works</i>) <strong>keepGoing</strong>();</code></div>
          <div><span>06</span><code>{'}'} <b>return</b> <em>"something brilliant"</em>;</code></div>
        </div>
        <div className="faq-code-status"><span><i /> challenge ready</span><span>UTF-8&nbsp; · &nbsp;JavaScript</span></div>
      </div>
      <div className="faq-output-panel">
        <span className="eyebrow">OUTPUT / RUN 03</span>
        <div className="output-mark"><span /><span /><span /><span /><span /></div>
        <strong>Idea → prototype</strong>
        <small>Tested. Improved. Yours.</small>
      </div>
      <span className="faq-code-coordinate">RBTH_ / 2026</span>
    </div>
  </section>;
}

function FAQPage({ onRegister, onNavigate }) {
  const [query, setQuery] = useState('');
  const visibleFaqs = useMemo(() => faqs.filter((item) => `${item.question} ${item.answer}`.toLowerCase().includes(query.trim().toLowerCase())), [query]);
  return <><PageIntro eyebrow="ANSWERS, WITHOUT THE GUESSWORK" number="07" title={<>Curious minds<br /><span>ask good questions.</span></>} copy="Search the most common questions about the sample competition structure and student experience." />
    <FAQCodeVisual />
    <section className="section-wrap faq-page-layout"><aside className="faq-aside"><span className="faq-illustration"><CircleHelp size={43} strokeWidth={1.2} /></span><span className="eyebrow">A QUICK NOTE</span><h2>Clarity is part of the challenge.</h2><p>These answers describe this website concept. Official requirements, formats, and dates must be confirmed by the competition organizers.</p><a href="#olympiad" onClick={() => { window.location.hash = 'olympiad'; }}>Explore the sample format <ArrowRight size={15} /></a></aside><div className="faq-content"><SearchInput label="Search frequently asked questions" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search questions..." /><div className="faq-count"><span>{query ? `${visibleFaqs.length} MATCHING QUESTIONS` : '8 COMMON QUESTIONS'}</span><span>RUBY BOT TECH HACK · FAQ</span></div>{visibleFaqs.length ? <FAQAccordion items={visibleFaqs} /> : <div className="faq-no-results"><Search size={20} /><p>No questions match that search.</p><button type="button" onClick={() => setQuery('')}>Clear search</button></div>}</div></section>
    <section className="faq-contact section-wrap"><span className="faq-contact-icon"><CircleHelp size={20} /></span><div><span className="eyebrow">STILL WONDERING?</span><h2>Keep asking. That’s how it starts.</h2></div><a href="#home" onClick={() => { window.location.hash = 'home'; }}>Back to the start <ArrowRight size={16} /></a></section>
    <CTASection onRegister={onRegister} onNavigate={onNavigate} />
  </>;
}

function CTASection({ onRegister, onNavigate }) {
  return <section className="cta-section"><div className="cta-inner"><div className="cta-art" aria-hidden="true"><span className="cta-circle circle-a" /><span className="cta-circle circle-b" /><span className="cta-terminal"><Code2 size={25} /><i>_</i></span><span className="cta-cross">✳</span><span className="cta-plus">+</span></div><div className="cta-copy"><span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span><h2>Ready to challenge<br />yourself?</h2><p>Bring a question. Leave with a new way to think.</p><Button variant="light" onClick={onRegister || (() => onNavigate?.('tracks'))}>Register for Ruby Bot Tech Hack <ArrowRight size={16} /></Button><span className="cta-disclaimer">Frontend concept · illustrative details</span></div></div></section>;
}

export { AboutPage, FAQPage, HomePage, OlympiadPage, PreparationPage, ResultsPage, TracksPage };