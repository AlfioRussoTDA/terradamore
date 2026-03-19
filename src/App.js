import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Vision from './components/Vision';
import Mission from './components/Mission';
import Network from './components/Network';
import Shop from './components/Shop';
import Prodotti from './components/Prodotti';
import Contatti from './components/Contatti';

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );
    const elements = document.querySelectorAll('[data-reveal]');
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function useCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    const onMove = e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    };

    let animId;
    const animate = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      follower.style.left = followerX + 'px';
      follower.style.top = followerY + 'px';
      animId = requestAnimationFrame(animate);
    };
    animate();

    const onEnter = () => { cursor.classList.add('expanded'); follower.classList.add('expanded'); };
    const onLeave = () => { cursor.classList.remove('expanded'); follower.classList.remove('expanded'); };

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return { cursorRef, followerRef };
}

export default function App() {
  useReveal();
  const { cursorRef, followerRef } = useCursor();

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-follower" ref={followerRef} />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Vision />
        <Mission />
        <Network />
        <Prodotti />
        <Shop />
        <Contatti />
      </main>
    </>
  );
}
