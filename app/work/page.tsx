'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import { useScrollReveal, useTiltEffect, useCursorGlow } from '@/hooks/useAnimations';

export default function Work() {
  const [activeTab, setActiveTab] = useState('videos');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  
  useScrollReveal();
  useTiltEffect();
  useCursorGlow();

  const openLightbox = (src: string) => {
    setLightboxImage(src);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  // Placeholder SVG for fast initial load
  const placeholderSVG = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'><rect fill='%231a1a2e' width='16' height='9'/><rect x='4' y='3' width='8' height='3' rx='0.5' fill='%232a2a3e'/><circle cx='8' cy='4.5' r='1.5' fill='%238b5cf6'/></svg>`;

  // Video poster placeholder (faster than images)
  const videoPoster = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'><rect fill='%231a1a2e' width='16' height='9'/><circle cx='8' cy='4.5' r='2' fill='%238b5cf6'/><path d='M7 3.5 L10 4.5 L7 5.5 Z' fill='white'/></svg>`;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
  };

  return (
    <>
      <div className="cursor-glow"></div>
      <ParticleCanvas />
      <Navigation />
      
      <main className="page-content">
        {/* Work Hero */}
        <section className="work-hero">
          <div className="work-hero-inner">
            <div className="section-label" data-aos="fade-up">Portfolio</div>
            <h1 className="section-title" data-aos="fade-up" data-aos-delay="100">
              My Creative <span>Work</span>
            </h1>
            <p className="section-subtitle" style={{ margin: '0 auto' }} data-aos="fade-up" data-aos-delay="200">
              Explore my portfolio across videos, graphic designs, and logos — each piece crafted
              with intention and creative excellence.
            </p>

            {/* Tabs */}
            <div className="work-tabs" data-aos="fade-up" data-aos-delay="300">
              <button 
                className={`work-tab ${activeTab === 'videos' ? 'active' : ''}`} 
                onClick={() => setActiveTab('videos')}
              >
                🎬 Videos
              </button>
              <button 
                className={`work-tab ${activeTab === 'graphics' ? 'active' : ''}`} 
                onClick={() => setActiveTab('graphics')}
              >
                🎨 Graphic Designs
              </button>
              <button 
                className={`work-tab ${activeTab === 'logos' ? 'active' : ''}`} 
                onClick={() => setActiveTab('logos')}
              >
                🏷️ Logos
              </button>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Videos Section */}
        {activeTab === 'videos' && (
          <div id="section-videos" className="work-section active">
            <div className="work-section-header">
              <div className="work-section-icon" style={{ background: 'rgba(139,92,246,0.15)' }}>🎬</div>
              <div>
                <h2 className="section-title" style={{ fontSize: '1.8rem', margin: 0 }}>Video Edits</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                  Cinematic stories crafted through precise editing & motion
                </p>
              </div>
            </div>

            <div className="work-grid">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, idx) => (
                <div key={num} className="img-card tilt-card" data-aos="fade-up" data-aos-delay={idx * 50}>
                  <div className="img-card-thumb" style={{ aspectRatio: '16/9', position: 'relative' }}>
                    {/* All videos from Google Drive for fast loading */}
                    {num === 1 ? (
                      <>
                        {/* Fast-loading placeholder background */}
                        <div 
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `url("${videoPoster}") center/cover no-repeat`,
                            zIndex: -1
                          }}
                        />
                        <iframe
                          src="https://drive.google.com/file/d/1MDerYviP80_L2F285ZMff-wYimEiwoIk/preview"
                          style={{ width: '100%', height: '100%', border: 'none', opacity: 0 }}
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          title="Video 1"
                          onLoad={(e) => {
                            e.currentTarget.style.opacity = '1';
                          }}
                        />
                      </>
                    ) : num === 2 ? (
                      <>
                        <div 
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `url("${videoPoster}") center/cover no-repeat`,
                            zIndex: -1
                          }}
                        />
                        <iframe
                          src="https://drive.google.com/file/d/1S5PiEBfxSzqxuGigu-xHlcB6vyEu5UYV/preview"
                          style={{ width: '100%', height: '100%', border: 'none', opacity: 0 }}
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          title="Video 2"
                          onLoad={(e) => {
                            e.currentTarget.style.opacity = '1';
                          }}
                        />
                      </>
                    ) : num === 3 ? (
                      <>
                        <div 
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `url("${videoPoster}") center/cover no-repeat`,
                            zIndex: -1
                          }}
                        />
                        <iframe
                          src="https://drive.google.com/file/d/1jS2NXUY1S-ZFodY0MNfpmQ603SJ5obnC/preview"
                          style={{ width: '100%', height: '100%', border: 'none', opacity: 0 }}
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          title="Video 3"
                          onLoad={(e) => {
                            e.currentTarget.style.opacity = '1';
                          }}
                        />
                      </>
                    ) : num === 4 ? (
                      <>
                        <div 
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `url("${videoPoster}") center/cover no-repeat`,
                            zIndex: -1
                          }}
                        />
                        <iframe
                          src="https://drive.google.com/file/d/1lK3s9RfX3ycD4ab6focVyJdll0MbnRds/preview"
                          style={{ width: '100%', height: '100%', border: 'none', opacity: 0 }}
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          title="Video 4"
                          onLoad={(e) => {
                            e.currentTarget.style.opacity = '1';
                          }}
                        />
                      </>
                    ) : num === 5 ? (
                      <>
                        <div 
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `url("${videoPoster}") center/cover no-repeat`,
                            zIndex: -1
                          }}
                        />
                        <iframe
                          src="https://drive.google.com/file/d/1AUJXxZzZK2gnmlO00XAjQk_oy4rsRznY/preview"
                          style={{ width: '100%', height: '100%', border: 'none', opacity: 0 }}
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          title="Video 5"
                          onLoad={(e) => {
                            e.currentTarget.style.opacity = '1';
                          }}
                        />
                      </>
                    ) : num === 6 ? (
                      // Original Google Drive Video 1
                      <>
                        <div 
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `url("${videoPoster}") center/cover no-repeat`,
                            zIndex: -1
                          }}
                        />
                        <iframe
                          src="https://drive.google.com/file/d/1q6PlbGG4sgDYgDAnrL5x5wWVK2t762YL/preview"
                          style={{ width: '100%', height: '100%', border: 'none', opacity: 0 }}
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          title="Google Drive Video 1"
                          onLoad={(e) => {
                            e.currentTarget.style.opacity = '1';
                          }}
                        />
                      </>
                    ) : num === 7 ? (
                      // Original Google Drive Video 2
                      <>
                        <div 
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `url("${videoPoster}") center/cover no-repeat`,
                            zIndex: -1
                          }}
                        />
                        <iframe
                          src="https://drive.google.com/file/d/1QOEG6EE5yy4nFuzkB-08mmxTJk3w1Jn6/preview"
                          style={{ width: '100%', height: '100%', border: 'none', opacity: 0 }}
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          title="Google Drive Video 2"
                          onLoad={(e) => {
                            e.currentTarget.style.opacity = '1';
                          }}
                        />
                      </>
                    ) : num === 8 ? (
                      // Original Google Drive Video 2
                      <>
                        <div 
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `url("${videoPoster}") center/cover no-repeat`,
                            zIndex: -1
                          }}
                        />
                        <iframe
                          src="https://drive.google.com/file/d/1-Yyxc2WTWJ_eeeql95JxiD-I5q6CNrUP/preview"
                          style={{ width: '100%', height: '100%', border: 'none', opacity: 0 }}
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          title="Google Drive Video 2"
                          onLoad={(e) => {
                            e.currentTarget.style.opacity = '1';
                          }}
                        />
                      </>
                    ) : num === 9 ? (
                      // Placeholder for additional videos (using first video as placeholder)
                      <>
                        <div 
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `url("${videoPoster}") center/cover no-repeat`,
                            zIndex: -1
                          }}
                        />
                        <iframe
                          src="https://drive.google.com/file/d/1st3MpPU-V6ca4XKJn2oDfeuDxAW0akJo/preview"
                          style={{ width: '100%', height: '100%', border: 'none', opacity: 0 }}
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          title="Additional Video"
                          onLoad={(e) => {
                            e.currentTarget.style.opacity = '1';
                          }}
                        />
                      </>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Graphics Section */}
        {activeTab === 'graphics' && (
          <div id="section-graphics" className="work-section active">
            <div className="work-section-header">
              <div className="work-section-icon" style={{ background: 'rgba(236,72,153,0.15)' }}>🎨</div>
              <div>
                <h2 className="section-title" style={{ fontSize: '1.8rem', margin: 0 }}>Graphic Designs</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                  Visual assets crafted with precision and aesthetic sensibility
                </p>
              </div>
            </div>

            <div className="work-grid">
              {[
                { src: 'IELTS1.jpeg', title: 'Immigration' },
                { src: 'IELTS2.jpeg', title: 'Immigration' },
                { src: 'IELTS3.jpeg', title: 'Immigration' },
                { src: 'image copy 6.png', title: 'Web Template' },
                { src: 'image copy 4.png', title: 'Superhero Poster' },
                { src: 'image copy 2.png', title: 'Movie Poster' },
                { src: 'image.png', title: 'Brochure' },
                { src: 'image copy 3.png', title: 'Flyer' },
                { src: 'image copy.png', title: 'Animal Manipulation' },
                { src: 'image copy 7.png', title: 'Animal Manipulation' },
                { src: 'image copy 8.png', title: 'Fashion Magazine Brochure' },
                { src: 'image copy 9.png', title: 'Fashion Magazine Brochure' },
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="img-card tilt-card" 
                  data-aos="fade-up" 
                  data-aos-delay={idx * 50}
                  onClick={() => openLightbox(`/${item.src}`)}
                >
                  <div className="img-card-thumb">
                    <img 
                      decoding="async" 
                      src={`/${item.src}`} 
                      alt={item.title} 
                      loading="lazy"
                      onLoad={(e) => {
                        // Add loaded class for smooth fade-in
                        e.currentTarget.style.opacity = '1';
                      }}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                      }}
                    />
                    {/* Fast-loading placeholder background */}
                    <div 
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `url("${placeholderSVG}") center/cover no-repeat`,
                        zIndex: -1
                      }}
                    />
                    <div className="img-card-overlay">
                      <span className="img-zoom-icon">🔍</span>
                    </div>
                  </div>
                  <div className="img-card-body">
                    <div className="img-card-title">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Logos Section */}
        {activeTab === 'logos' && (
          <div id="section-logos" className="work-section active">
            <div className="work-section-header">
              <div className="work-section-icon" style={{ background: 'rgba(6,182,212,0.15)' }}>🏷️</div>
              <div>
                <h2 className="section-title" style={{ fontSize: '1.8rem', margin: 0 }}>Logo Designs</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                  Brand marks crafted to leave a memorable first impression
                </p>
              </div>
            </div>

            <div className="work-grid">
              {[10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((num, idx) => (
                <div 
                  key={num} 
                  className="img-card tilt-card" 
                  data-aos="fade-up" 
                  data-aos-delay={idx * 50}
                  onClick={() => openLightbox(`/image copy ${num}.png`)}
                >
                  <div className="img-card-thumb" style={{ aspectRatio: '1' }}>
                    <img 
                      decoding="async" 
                      src={`/image copy ${num}.png`} 
                      alt="Logo" 
                      loading="lazy"
                      onLoad={(e) => {
                        e.currentTarget.style.opacity = '1';
                      }}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                      }}
                    />
                    {/* Fast-loading placeholder background */}
                    <div 
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `url("${placeholderSVG}") center/cover no-repeat`,
                        zIndex: -1
                      }}
                    />
                    <div className="img-card-overlay">
                      <span className="img-zoom-icon">🔍</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <section style={{ padding: '4rem 5% 6rem', position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div className="glass-card" style={{ padding: '3rem', borderColor: 'rgba(139,92,246,0.2)' }} data-aos="fade-up">
              <p style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1.5rem', marginBottom: '1rem' }}>
                Have a project in mind?
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.75rem', fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                I'm open to new opportunities and collaborations. Let's create something amazing together.
              </p>
              <a href="/contact" className="btn-primary">Get in Touch →</a>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="lightbox open" 
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button className="lightbox-close" onClick={closeLightbox}>✕</button>
          <img 
            src={lightboxImage} 
            alt="Design preview" 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}

      <Footer />
    </>
  );
}
