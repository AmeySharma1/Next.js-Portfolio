'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import { useScrollReveal, useCursorGlow } from '@/hooks/useAnimations';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useScrollReveal();
  useCursorGlow();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const service = formData.get('service') as string;
    const budget = formData.get('budget') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) return;

    // Set loading state
    setIsSubmitting(true);

    // Build mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry – ${name} (${service})`);
    const body = encodeURIComponent(
      `Hello Diksha,\n\nMy name is ${name} and I found you through your portfolio website.\n\n` +
      `Service Required: ${service}\nBudget: ${budget}\n\nMessage:\n${message}\n\n` +
      `Best regards,\n${name}\nReply to: ${email}`
    );

    // Simulate small delay for better UX
    await new Promise(r => setTimeout(r, 700));
    
    // Open email client
    window.open(`mailto:diksk2025@gmail.com?subject=${subject}&body=${body}`);
    
    // Reset form
    setIsSubmitting(false);
    e.currentTarget.reset();
    
    // Show success message
    const successMsg = document.getElementById('success-msg');
    const contactForm = document.getElementById('contact-form');
    if (successMsg && contactForm) {
      contactForm.style.display = 'none';
      successMsg.classList.add('show');
    }
  };

  return (
    <>
      <div className="cursor-glow"></div>
      <ParticleCanvas />
      <Navigation />
      
      <main className="page-content">
        {/* Contact Hero */}
        <section className="contact-hero">
          <div className="contact-hero-inner">
            <div 
              data-aos="fade-up" 
              style={{ 
                maxWidth: '600px', 
                margin: '0 auto', 
                textAlign: 'center', 
                width: '100%', 
                gridColumn: '1 / -1' 
              }}
            >
              <div className="section-label" style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '1rem' }}>
                Contact
              </div>
              <h1 className="section-title">Let's <span>Create</span><br />Together</h1>
              <p className="section-subtitle" style={{ maxWidth: '420px', margin: '0 auto 2.5rem' }}>
                Have a project in mind? Whether you need a stunning brand identity, a cinematic
                video edit, or a complete digital presence — I'd love to hear from you.
              </p>

              {/* Info items */}
              <div 
                className="contact-info-list" 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  marginBottom: '2.5rem' 
                }}
              >
                <div 
                  className="contact-info-item glass-card" 
                  style={{ 
                    padding: '1.5rem 2rem', 
                    gap: '1.5rem', 
                    justifyContent: 'center', 
                    width: '100%', 
                    maxWidth: '350px' 
                  }}
                >
                  <div className="ci-icon">✉️</div>
                  <div className="ci-text" style={{ textAlign: 'left' }}>
                    <div className="ci-label">Email</div>
                    <div className="ci-value">
                      <a href="mailto:diksk2025@gmail.com" style={{ color: 'var(--accent-violet)', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 500 }}>
                        diksk2025@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div 
                className="contact-social" 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  gap: '1rem' 
                }}
              >
                <div className="contact-social-title">Find me on</div>
                <div className="social-links" style={{ justifyContent: 'center', gap: '1rem' }}>
                  <a 
                    href="https://www.instagram.com/dikshagraphics22/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link" 
                    title="Instagram" 
                    aria-label="Instagram"
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/diksha-sharma-539876384/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link" 
                    title="LinkedIn" 
                    aria-label="LinkedIn"
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
