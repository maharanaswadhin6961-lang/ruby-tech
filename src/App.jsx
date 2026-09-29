import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { RegistrationModal } from './components/ui.jsx';
import { AboutPage, FAQPage, HomePage, OlympiadPage, PreparationPage, ResultsPage, TracksPage } from './pages.jsx';

const pages = {
  home: HomePage,
  about: AboutPage,
  olympiad: OlympiadPage,
  tracks: TracksPage,
  preparation: PreparationPage,
  results: ResultsPage,
  faq: FAQPage,
};

export default function App() {
  const [activePage, setActivePage] = useState(() => window.location.hash.slice(1) || 'home');
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const [theme, setTheme] = useState(() => window.localStorage.getItem('ruby-bot-theme') || 'light');
  const Page = pages[activePage] || HomePage;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('ruby-bot-theme', theme);
  }, [theme]);

  useEffect(() => {
    function handleHashChange() {
      const next = window.location.hash.slice(1);
      setActivePage(pages[next] ? next : 'home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [activePage]);

  function navigate(page) {
    if (!pages[page]) return;
    if (window.location.hash === `#${page}`) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.location.hash = page;
  }

  useEffect(() => {
    document.body.classList.toggle('modal-open', registrationOpen);
    function closeOnEscape(event) {
      if (event.key === 'Escape') setRegistrationOpen(false);
    }
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [registrationOpen]);

  return <>
    <Navbar activePage={activePage} theme={theme} onToggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} onNavigate={navigate} onRegister={() => setRegistrationOpen(true)} />
    <main id="main-content" key={activePage}>
      <Page onRegister={() => setRegistrationOpen(true)} onNavigate={navigate} />
    </main>
    <Footer onNavigate={navigate} onRegister={() => setRegistrationOpen(true)} />
    <RegistrationModal open={registrationOpen} onClose={() => setRegistrationOpen(false)} />
  </>;
}