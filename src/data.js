export const navigation = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Olympiad', id: 'olympiad' },
  { label: 'Tracks', id: 'tracks' },
  { label: 'Preparation', id: 'preparation' },
  { label: 'Results', id: 'results' },
  { label: 'FAQ', id: 'faq' },
];

export const stats = [
  { value: '10k+', label: 'young minds', icon: 'users' },
  { value: '03', label: 'competition rounds', icon: 'layers' },
  { value: '02', label: 'age-based tracks', icon: 'code' },
  { value: 'All India', label: 'open participation', icon: 'map' },
];

export const features = [
  { number: '01', title: 'Competitive programming', copy: 'Turn big questions into elegant, efficient solutions.', icon: 'code' },
  { number: '02', title: 'Sharper problem solving', copy: 'Build the confidence to reason, experiment, and iterate.', icon: 'brain' },
  { number: '03', title: 'Practical coding', copy: 'Move beyond theory and make ideas work in the real world.', icon: 'terminal' },
  { number: '04', title: 'National recognition', copy: 'Showcase your thinking alongside young talent from across India.', icon: 'award' },
];

export const tracks = [
  {
    id: 'junior', name: 'Junior Track', range: 'Classes 6–8',
    description: 'A welcoming first step into programming, logic, and creative problem solving.',
    eligibility: 'Suggested for students in classes 6–8', format: 'Aptitude, guided coding, and a practical mini challenge',
    skills: ['Programming fundamentals', 'Logic & patterns', 'Creative coding'], difficulty: 'Foundational', accent: 'mint',
  },
  {
    id: 'senior', name: 'Senior Track', range: 'Classes 9–12',
    description: 'A deeper challenge for curious builders ready to take on algorithms and ambitious ideas.',
    eligibility: 'Suggested for students in classes 9–12', format: 'Problem solving, algorithms, and a project challenge',
    skills: ['Algorithms & data', 'Structured problem solving', 'Prototype development'], difficulty: 'Intermediate', accent: 'lilac',
  },
];

export const journey = [
  { step: '01', title: 'Registration', note: 'Choose a track and get ready to begin.' },
  { step: '02', title: 'Round 1', note: 'Show your logic and programming foundations.' },
  { step: '03', title: 'Round 2', note: 'Apply your skills to a focused challenge.' },
  { step: '04', title: 'Round 3', note: 'Build and present a hands-on solution.' },
  { step: '05', title: 'Results', note: 'Celebrate the work and growth you achieved.' },
];

export const preparation = [
  { title: 'Programming basics', tag: 'Start here', copy: 'Variables, input and output, conditions, loops, and functions.', icon: 'braces', progress: 28 },
  { title: 'Logical thinking', tag: 'Train your brain', copy: 'Patterns, reasoning puzzles, and mathematical problem solving.', icon: 'brain', progress: 46 },
  { title: 'Algorithms', tag: 'Build fluency', copy: 'Break problems down and choose a clear path to a solution.', icon: 'workflow', progress: 34 },
  { title: 'Practical projects', tag: 'Make something', copy: 'Debug, code quickly, and turn a small idea into a prototype.', icon: 'blocks', progress: 18 },
];

export const faqs = [
  { question: 'Who can participate?', answer: 'The concept is designed for school students across India. The Junior and Senior tracks suggest class ranges; final eligibility should always be checked against the official announcement.' },
  { question: 'What is the Junior Track?', answer: 'A foundation-focused pathway for younger students, centered on logical thinking, programming basics, and approachable practical coding.' },
  { question: 'What happens in Round 1?', answer: 'In this illustrative format, Round 1 is an online programming and aptitude assessment. The exact structure may differ in an official edition.' },
  { question: 'What happens in Round 2?', answer: 'Round 2 is shown here as a programming, project, or video-based challenge that lets students explain how they approached a problem.' },
  { question: 'What happens in Round 3?', answer: 'The sample journey ends with a live, hands-on programming or prototype challenge. Official event rules will determine the real format.' },
  { question: 'How should I prepare?', answer: 'Start with programming fundamentals and logical reasoning, then practise small problems regularly. Build simple projects and get comfortable explaining your decisions.' },
  { question: 'Is the competition online?', answer: 'The sample Round 1 is online. Later rounds may use different formats; please refer to an official competition announcement for confirmed details.' },
  { question: 'How are students evaluated?', answer: 'A typical evaluation could consider correctness, reasoning, clarity, creativity, and how well a student develops an idea. This is illustrative, not an official scoring rubric.' },
];

export const mockResults = [
  { id: 'NYPO2026-001', name: 'Aarav Mehta', track: 'Senior Track', rank: '14', score: '86 / 100', status: 'Round 3 qualified', certificate: 'Eligible' },
  { id: 'NYPO2026-002', name: 'Anaya Sharma', track: 'Junior Track', rank: '32', score: '78 / 100', status: 'Round 2 completed', certificate: 'Pending' },
  { id: 'NYPO2026-003', name: 'Kabir Rao', track: 'Senior Track', rank: '08', score: '92 / 100', status: 'Round 3 qualified', certificate: 'Eligible' },
];

export const roundDetails = [
  { number: '01', title: 'Think clearly', type: 'ONLINE ASSESSMENT', description: 'A programming and aptitude assessment designed to explore how you reason through a problem.', items: ['Logical reasoning', 'Programming concepts', 'Time-aware problem solving'] },
  { number: '02', title: 'Make it real', type: 'PROJECT CHALLENGE', description: 'A programming, project, or video-based challenge to demonstrate your process and ideas.', items: ['Apply your learning', 'Explain your approach', 'Build with purpose'] },
  { number: '03', title: 'Build together', type: 'HANDS-ON CHALLENGE', description: 'A live coding, programming, or prototype challenge to bring your thinking to life.', items: ['Practical execution', 'Creative decisions', 'Clear communication'] },
];