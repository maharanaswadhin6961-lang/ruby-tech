import React, { useState } from 'react';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import { navigation } from '../data.js';

export default function Navbar({ activePage, theme, onToggleTheme, onNavigate, onRegister }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function goTo(page) {
    onNavigate(page);
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="brand" href="#home" onClick={() => goTo('home')} aria-label="Ruby Bot Tech Hack home">
          <span className="brand-mark">n<span>.</span></span>
          <span className="brand-name">Ruby Bot Tech Hack <small>YOUNG MINDS</small></span>
        </a>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.id} className={activePage === item.id ? 'active' : ''} href={`#${item.id}`} onClick={() => goTo(item.id)} aria-current={activePage === item.id ? 'page' : undefined}>
              {item.label}
            </a>
          ))}
          <button className="button button-dark nav-register" type="button" onClick={() => { setMenuOpen(false); onRegister(); }}>
            Register <ArrowUpRight size={15} />
          </button>
        </nav>
        <div className="nav-controls">
          <button className="theme-toggle icon-button" type="button" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button className="menu-toggle icon-button" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}