import React from 'react';
import { ArrowUpRight, Instagram, Linkedin, Youtube } from 'lucide-react';
import { navigation } from '../data.js';

export default function Footer({ onNavigate, onRegister }) {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand-block">
          <a className="brand brand-footer" href="#home" onClick={() => onNavigate('home')}>
            <span className="brand-mark">n<span>.</span></span>
            <span className="brand-name">Ruby Bot Tech Hack <small>YOUNG MINDS</small></span>
          </a>
          <p>A platform concept for the next generation of problem solvers and builders.</p>
        </div>
        <div className="footer-links">
          <span className="eyebrow">EXPLORE</span>
          {navigation.slice(1, 5).map((link) => <a href={`#${link.id}`} key={link.id} onClick={() => onNavigate(link.id)}>{link.label}</a>)}
        </div>
        <div className="footer-links">
          <span className="eyebrow">INFORMATION</span>
          <a href="#olympiad" onClick={() => onNavigate('olympiad')}>Rules <span className="placeholder-note">(sample)</span></a>
          <a href="#faq" onClick={() => onNavigate('faq')}>Privacy policy</a>
          <a href="#faq" onClick={() => onNavigate('faq')}>Terms</a>
          <button className="text-link" type="button" onClick={onRegister}>Contact <ArrowUpRight size={13} /></button>
        </div>
        <div className="footer-social">
          <span className="eyebrow">FOLLOW THE JOURNEY</span>
          <div className="social-links">
            <a href="#social" aria-label="Instagram placeholder" onClick={(event) => event.preventDefault()}><Instagram size={17} /></a>
            <a href="#social" aria-label="LinkedIn placeholder" onClick={(event) => event.preventDefault()}><Linkedin size={17} /></a>
            <a href="#social" aria-label="YouTube placeholder" onClick={(event) => event.preventDefault()}><Youtube size={17} /></a>
          </div>
          <span className="placeholder-note">Social links are placeholders</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Ruby Bot Tech Hack concept. Not an official competition website.</span>
        <span>Made for curious minds <span className="footer-spark">✳</span></span>
      </div>
    </footer>
  );
}