'use client';

import { useEffect, useRef } from 'react';

// Typewriter effect hook
export function useTypewriter(elementRef: React.RefObject<HTMLElement | null>, texts: string[], speed = 105, pause = 1800) {
  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    let tIdx = 0, cIdx = 0, deleting = false;
    
    function tick() {
      if (!el) return;
      const text = texts[tIdx];
      if (!deleting) {
        el.textContent = text.slice(0, ++cIdx);
        if (cIdx === text.length) { 
          deleting = true; 
          setTimeout(tick, pause); 
          return; 
        }
      } else {
        el.textContent = text.slice(0, --cIdx);
        if (cIdx === 0) { 
          deleting = false; 
          tIdx = (tIdx + 1) % texts.length; 
        }
      }
      setTimeout(tick, deleting ? speed / 2 : speed);
    }
    
    tick();
  }, [elementRef, texts, speed, pause]);
}

// Scroll reveal hook
export function useScrollReveal() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
      revealObserver.observe(el);
    });

    return () => revealObserver.disconnect();
  }, []);
}

// Tilt effect hook
export function useTiltEffect() {
  useEffect(() => {
    if (window.matchMedia('(pointer: fine)').matches) {
      document.querySelectorAll('.tilt-card').forEach((card: Element) => {
        const htmlCard = card as HTMLElement;
        
        const handleMouseMove = (e: MouseEvent) => {
          const rect = htmlCard.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          const rotX = (-y / (rect.height / 2)) * 8;
          const rotY = (x / (rect.width / 2)) * 8;
          htmlCard.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.018)`;
        };

        const handleMouseLeave = () => {
          htmlCard.style.transform = '';
        };

        htmlCard.addEventListener('mousemove', handleMouseMove as EventListener);
        htmlCard.addEventListener('mouseleave', handleMouseLeave as EventListener);

        return () => {
          htmlCard.removeEventListener('mousemove', handleMouseMove as EventListener);
          htmlCard.removeEventListener('mouseleave', handleMouseLeave as EventListener);
        };
      });
    }
  }, []);
}

// Cursor glow hook
export function useCursorGlow() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor-glow') as HTMLElement;
    if (cursor && window.matchMedia('(pointer: fine)').matches) {
      const handleMouseMove = (e: MouseEvent) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      };

      document.addEventListener('mousemove', handleMouseMove, { passive: true });
      return () => document.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);
}

// Count up animation hook
export function useCountUp() {
  useEffect(() => {
    const countUp = (el: HTMLElement, target: number, duration = 1600) => {
      let start = 0;
      const step = target / (duration / 16);
      const timer = setInterval(() => {
        start += step;
        if (start >= target) { 
          el.textContent = target.toString(); 
          clearInterval(timer); 
        } else { 
          el.textContent = Math.floor(start).toString(); 
        }
      }, 16);
    };

    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const val = parseInt(el.getAttribute('data-count') || '0', 10);
          if (!isNaN(val)) countUp(el, val);
          countObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-count]').forEach(el => {
      countObserver.observe(el);
    });

    return () => countObserver.disconnect();
  }, []);
}

// Skill bar animation hook
export function useSkillBars() {
  useEffect(() => {
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skill-fill').forEach(bar => {
            const pct = bar.getAttribute('data-pct') || '80';
            (bar as HTMLElement).style.width = pct + '%';
          });
          skillObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    document.querySelectorAll('.skills-group').forEach(g => {
      skillObserver.observe(g);
    });

    return () => skillObserver.disconnect();
  }, []);
}
