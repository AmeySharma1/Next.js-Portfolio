'use client';

import { useRef, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import { useTypewriter, useScrollReveal, useTiltEffect, useCursorGlow, useCountUp } from '@/hooks/useAnimations';

export default function Home() {
  const typewriterRef = useRef<HTMLSpanElement>(null);
  
  // Initialize animations - hooks must be called at top level
  useTypewriter(typewriterRef as unknown as React.RefObject<HTMLElement>, ['Graphic Designer', 'Video Editor', 'Brand Storyteller', 'Creative Director', 'Visual Artist']);
  useScrollReveal();
  useTiltEffect();
  useCursorGlow();
  useCountUp();

  return (
    <>
      <div className="cursor-glow"></div>
      <ParticleCanvas />
      <Navigation />
      
      <main className="page-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-inner">
            {/* Left: Text */}
            <div className="hero-text">
              <div className="hero-eyebrow">
                <span className="neon-badge violet">✦ Portfolio 2025</span>
              </div>

              <h1 className="hero-title">
                <span className="line-1">Creative</span><br />
                <span className="line-2">Visual</span><br />
                <span className="line-3 gradient-text" ref={typewriterRef} id="typewriter-text">Designer</span>
              </h1>
              
              <p className="hero-desc">
                Hi, I'm <strong>Diksha Sharma</strong> — a passionate graphic designer and video editor
                who transforms ideas into stunning visual experiences that leave a lasting impression.
              </p>
              
              <div className="hero-actions">
                <a href="/work" className="btn-primary">View My Work →</a>
                <a href="/contact" className="btn-secondary">Let's Connect</a>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="hero-visual">
              <div className="avatar-container">
                <div className="avatar-ring"></div>
                <div className="avatar-ring avatar-ring-2"></div>
                <div className="avatar-glow"></div>
                <div className="avatar-frame">
                  <span className="avatar-initials">DS</span>
                </div>
                
                
                
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="scroll-indicator">
            <div className="scroll-line"></div>
            <span>Scroll</span>
          </div>
        </section>

        {/* Services Strip */}
        <section className="services-strip">
          <div className="container">
            <div className="section-label">What I Do</div>
            <h2 className="section-title">Crafting <span>Visual Mastery</span></h2>
            <p className="section-subtitle">
              From brand identities to cinematic video edits — I bring your creative vision to life
              with precision and passion.
            </p>

            <div className="services-grid">
              <div className="glass-card service-card tilt-card reveal stagger-1">
                <div className="service-icon v">🎬</div>
                <div className="service-title">Video Editing</div>
                <div className="service-desc">
                  Transforming raw footage into cinematic stories with seamless cuts,
                  color grading, motion graphics and sound design.
                </div>
              </div>

              <div className="glass-card service-card tilt-card reveal stagger-2">
                <div className="service-icon p">🎨</div>
                <div className="service-title">Graphic Design</div>
                <div className="service-desc">
                  Creating compelling visual assets — social media graphics, marketing
                  materials, banners, and digital artwork.
                </div>
              </div>

              <div className="glass-card service-card tilt-card reveal stagger-3">
                <div className="service-icon c">🏷️</div>
                <div className="service-title">Logo & Branding</div>
                <div className="service-desc">
                  Designing distinctive logos and brand identities that communicate the
                  essence of your business with clarity.
                </div>
              </div>

              <div className="glass-card service-card tilt-card reveal stagger-4">
                <div className="service-icon g">📣</div>
                <div className="service-title">Digital Marketing</div>
                <div className="service-desc">
                  Executing data-driven campaigns across social media, SEO, and email to
                  amplify online presence and drive growth.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section style={{ padding: '4rem 5% 6rem', position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div 
              className="glass-card tilt-card"
              style={{ 
                padding: '3.5rem', 
                textAlign: 'center', 
                borderColor: 'rgba(139,92,246,0.25)', 
                background: 'linear-gradient(135deg, rgba(139,92,246,0.08), rgba(236,72,153,0.05))' 
              }}
            >
              <div className="section-label" style={{ justifyContent: 'center' }}>Ready to Create?</div>
              <h2 className="section-title" style={{ maxWidth: '600px', margin: '0 auto 1rem' }}>
                Let's Build Something <span>Beautiful</span> Together
              </h2>
              <p className="section-subtitle" style={{ margin: '0 auto 2rem', textAlign: 'center' }}>
                Whether it's a brand identity, a video project, or digital marketing — I'm here to
                turn your vision into reality.
              </p>
              <a href="/contact" className="btn-primary">Contact Me →</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
