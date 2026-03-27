'use client';

import { useRef, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import { useScrollReveal, useTiltEffect, useCursorGlow, useCountUp, useSkillBars } from '@/hooks/useAnimations';

export default function About() {
  useScrollReveal();
  useTiltEffect();
  useCursorGlow();
  useCountUp();
  useSkillBars();

  return (
    <>
      <div className="cursor-glow"></div>
      <ParticleCanvas />
      <Navigation />
      
      <main className="page-content">
        {/* About Hero */}
        <section className="about-hero">
          <div className="about-hero-inner">
            {/* Photo side */}
            <div className="about-photo-wrap reveal-left">
              <div className="about-photo-frame about-photo-bg-grad">
                <span className="about-photo-initials">DS</span>
              </div>
              <div className="about-deco about-deco-1">🎨</div>
              <div className="about-deco about-deco-2">🎬</div>
            </div>

            {/* Bio side */}
            <div className="about-bio reveal-right">
              <div className="section-label">About Me</div>
              <h1 className="about-name">Diksha Sharma</h1>
              <div className="about-sub">Graphic Designer · Video Editor · Digital Marketing Strategist</div>
              <div className="divider"></div>

              <p className="about-desc">
                I'm a versatile creative professional with a passion for turning ideas into
                compelling visual experiences. With expertise in <strong>graphic design</strong>,
                <strong>video editing</strong>, and <strong>digital marketing</strong>, I bring a
                holistic approach to every project.
              </p>
              <p className="about-desc">
                My journey began at Masterminds Junior in 2023, where I wore multiple creative hats —
                from writing SEO-optimised content to crafting brand identities and editing professional
                videos. Every project sharpened my eye for detail and my obsession with visual excellence.
              </p>

              <div className="about-tags">
                <span className="neon-badge violet">Graphic Design</span>
                <span className="neon-badge pink">Video Editing</span>
                <span className="neon-badge cyan">Brand Strategy</span>
                <span className="neon-badge gold">Content Writing</span>
                <span className="neon-badge violet">Digital Marketing</span>
                <span className="neon-badge pink">Motion Graphics</span>
              </div>

              <a href="/contact" className="btn-primary">Work With Me →</a>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="experience-section">
          <div className="experience-inner">
            <div className="section-label">Experience</div>
            <h2 className="section-title">My <span>Creative Journey</span></h2>

            <div className="experience-grid">
              <div className="glass-card exp-card tilt-card" data-aos="fade-up">
                <div className="exp-card-header">
                  <div className="exp-icon" style={{ background: 'rgba(139,92,246,0.15)' }}>✍️</div>
                  <div>
                    <div className="exp-title">Content Writer</div>
                    <div className="exp-company">Masterminds Junior</div>
                    <div className="exp-period">2023</div>
                  </div>
                </div>
                <p className="exp-desc">
                  Developed SEO-optimised blogs, social media posts, and web content tailored to target
                  audiences — growing organic reach and driving engagement across platforms.
                </p>
              </div>

              <div className="glass-card exp-card tilt-card" data-aos="fade-up" data-aos-delay="100">
                <div className="exp-card-header">
                  <div className="exp-icon" style={{ background: 'rgba(236,72,153,0.15)' }}>📊</div>
                  <div>
                    <div className="exp-title">Digital Marketing Executive</div>
                    <div className="exp-company">Masterminds Junior</div>
                    <div className="exp-period">2023</div>
                  </div>
                </div>
                <p className="exp-desc">
                  Planned, executed, and analysed online campaigns across social media, SEO, and email
                  to drive brand awareness, increase website traffic, and boost customer sales.
                </p>
              </div>

              <div className="glass-card exp-card tilt-card" data-aos="fade-up" data-aos-delay="200">
                <div className="exp-card-header">
                  <div className="exp-icon" style={{ background: 'rgba(6,182,212,0.15)' }}>🎨</div>
                  <div>
                    <div className="exp-title">Graphic Designer</div>
                    <div className="exp-company">Masterminds Junior</div>
                    <div className="exp-period">2023</div>
                  </div>
                </div>
                <p className="exp-desc">
                  Designed branding, marketing materials, and digital assets for various platforms,
                  ensuring strong visual consistency across print and digital media including social
                  graphics, ads, and packaging.
                </p>
              </div>

              <div className="glass-card exp-card tilt-card" data-aos="fade-up" data-aos-delay="300">
                <div className="exp-card-header">
                  <div className="exp-icon" style={{ background: 'rgba(245,158,11,0.15)' }}>🎬</div>
                  <div>
                    <div className="exp-title">Video Editor</div>
                    <div className="exp-company">Freelance / Projects</div>
                    <div className="exp-period">2023 – Present</div>
                  </div>
                </div>
                <p className="exp-desc">
                  Transforming raw footage into polished, engaging stories through precise cutting,
                  colour grading, motion graphics, and audio design that captivate audiences.
                </p>
              </div>

              <div className="glass-card exp-card tilt-card" data-aos="fade-up" data-aos-delay="400">
                <div className="exp-card-header">
                  <div className="exp-icon" style={{ background: 'rgba(139,92,246,0.15)' }}>🎓</div>
                  <div>
                    <div className="exp-title">Diploma in Video Editing</div>
                    <div className="exp-company">Arena Animation Amritsar</div>
                    <div className="exp-period">2026</div>
                  </div>
                </div>
                <p className="exp-desc">
                  Professional diploma program focused on advanced video editing techniques, 
                  post-production workflows, color grading, visual effects, and industry-standard 
                  software including Adobe Premiere Pro and After Effects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section">
          <div className="skills-inner">
            <div className="section-label">Skills</div>
            <h2 className="section-title">Tools &amp; <span>Expertise</span></h2>

            <div className="skills-grid">
              <div className="skills-group" data-aos="fade-right">
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Adobe Photoshop</span>
                    <span className="skill-pct">92%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" data-pct="92"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Adobe Illustrator</span>
                    <span className="skill-pct">88%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" data-pct="88"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Canva</span>
                    <span className="skill-pct">95%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" data-pct="95"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Figma</span>
                    <span className="skill-pct">80%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" data-pct="80"></div>
                  </div>
                </div>
              </div>

              <div className="skills-group" data-aos="fade-left">
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Adobe Premiere Pro</span>
                    <span className="skill-pct">90%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" data-pct="90"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">After Effects</span>
                    <span className="skill-pct">78%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" data-pct="78"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Social Media Strategy</span>
                    <span className="skill-pct">85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" data-pct="85"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">SEO &amp; Content Writing</span>
                    <span className="skill-pct">82%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" data-pct="82"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section style={{ padding: '5rem 5%', position: 'relative', zIndex: 10 }}>
          <div 
            style={{ 
              maxWidth: '1000px', 
              margin: '0 auto', 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', 
              gap: '1.5rem' 
            }}
          >
            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }} data-aos="zoom-in">
              <div className="count-num" data-count="50">0</div>
              <div style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Design Projects
              </div>
            </div>

            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }} data-aos="zoom-in" data-aos-delay="100">
              <div className="count-num" data-count="30">0</div>
              <div style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Videos Edited
              </div>
            </div>

            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }} data-aos="zoom-in" data-aos-delay="200">
              <div className="count-num" data-count="20">0</div>
              <div style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Logos Created
              </div>
            </div>

            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }} data-aos="zoom-in" data-aos-delay="300">
              <div className="count-num" data-count="3">0</div>
              <div style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Years Experience
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
