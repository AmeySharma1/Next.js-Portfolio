'use client';

import { useEffect } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ParticleCanvas from '../../components/ParticleCanvas';
import { useScrollReveal } from '../../hooks/useAnimations';

export default function Resume() {
  useScrollReveal();

  const handleDownload = () => {
    // Create a download link for the resume PDF
    const link = document.createElement('a');
    link.href = '/Diksha_Resume.pdf';
    link.download = 'Diksha_Sharma_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="cursor-glow"></div>
      <ParticleCanvas />
      <Navigation />
      
      <main className="page-content" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="container">
          {/* Hero Section */}
          <section className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
              marginBottom: '10px',
              background: 'var(--grad-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              DIKSHA SHARMA
            </h1>
            <p style={{ 
              fontSize: '1.1rem', 
              color: 'var(--text-secondary)',
              fontWeight: '500',
              margin: '10px auto 5px'
            }}>
              GRAPHIC DESIGNING AND DIGITAL MARKETING
            </p>
            <p style={{ 
              fontSize: '0.95rem', 
              color: 'var(--text-secondary)',
              margin: '10px auto'
            }}>
              📍 Amritsar 143001 • 📞 9872158431 • ✉️ dishuks108@gmail.com
            </p>

            {/* Download Button */}
           
          </section>

          {/* Professional Summary */}
          <section className="reveal" style={{ maxWidth: '900px', margin: '0 auto 40px' }}>
            <div className="glass-card" style={{ padding: '35px', borderRadius: '20px', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--accent-violet)' }}>PROFESSIONAL SUMMARY</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                Experienced with crafting and executing comprehensive digital marketing strategies. 
                Utilizes data-driven insights to optimize campaigns and enhance online presence. 
                I seek challenging opportunities where I can fully use my skills for the success 
                of the organization.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="reveal" style={{ maxWidth: '900px', margin: '0 auto 40px' }}>
            <div className="glass-card" style={{ padding: '35px', borderRadius: '20px', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '25px', color: 'var(--accent-pink)' }}>🛠️ SKILLS</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                {[
                  { name: 'Content Writing', icon: '✍️' },
                  { name: 'Digital Marketing', icon: '📱' },
                  { name: 'Video Editing', icon: '🎬' },
                  { name: 'Graphic Designing', icon: '🎨' },
                  { name: 'Google / Facebook Ads', icon: '📊' }
                ].map((skill, idx) => (
                  <div key={idx} style={{ padding: '12px 24px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '25px', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-violet)', fontWeight: '500', fontSize: '0.95rem' }}>
                    <span>{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="reveal" style={{ maxWidth: '900px', margin: '0 auto 40px' }}>
            <div className="glass-card" style={{ padding: '35px', borderRadius: '20px', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '25px', color: 'var(--accent-cyan)' }}>💼 EXPERIENCE</h2>
              
              <div style={{ paddingLeft: '20px', borderLeft: '3px solid var(--accent-cyan)' }}>
                <div style={{ marginBottom: '25px' }}>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', color: 'var(--text-primary)' }}>Digital Marketing Executive</h3>
                  <p style={{ color: 'var(--accent-violet)', fontWeight: '500', marginBottom: '10px' }}>Masterminds Junior – Remote | 08/2023 to Current</p>
                  <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                    <li style={{ marginBottom: '12px' }}>
                      <strong style={{ color: 'var(--text-primary)' }}>• Content Writing:</strong> Develop SEO-optimized blogs, social media posts, and web content tailored to target audiences.
                    </li>
                    <li style={{ marginBottom: '12px' }}>
                      <strong style={{ color: 'var(--text-primary)' }}>• Graphic Designing:</strong> Design visually appealing creatives, banners, and marketing assets for both online and offline campaigns.
                    </li>
                    <li style={{ marginBottom: '12px' }}>
                      <strong style={{ color: 'var(--text-primary)' }}>• Campaign Execution:</strong> Collaborate with the marketing team to plan and execute digital campaigns across various platforms.
                    </li>
                    <li style={{ marginBottom: '12px' }}>
                      <strong style={{ color: 'var(--text-primary)' }}>• Brand Communication:</strong> Maintain brand consistency in all messaging while ensuring engaging and clear communication with audiences.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="reveal" style={{ maxWidth: '900px', margin: '0 auto 40px' }}>
            <div className="glass-card" style={{ padding: '35px', borderRadius: '20px', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '25px', color: 'var(--accent-orange)' }}>🎓 EDUCATION</h2>
              
              <div style={{ display: 'grid', gap: '20px' }}>
                {[
                  { degree: 'Diploma in Graphic Designing and Digital Marketing', institution: 'XL Multimedia' },
                  { degree: 'MCA (Master of Computer Applications)', institution: 'PTU (ACET College)' },
                  { degree: 'BSc Computer Science', institution: 'GNDU (BBK DAV College For Women)' },
                  { degree: 'XII Non-Medical', institution: 'Madhav Vidya Niketan' },
                  { degree: 'Xth', institution: 'Cedar Spring School' }
                ].map((edu, idx) => (
                  <div key={idx} style={{ padding: '20px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', color: 'var(--text-primary)' }}>{edu.degree}</h3>
                    <p style={{ color: 'var(--accent-violet)', fontWeight: '500', fontSize: '0.95rem' }}>{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section className="reveal" style={{ maxWidth: '900px', margin: '0 auto 40px' }}>
            <div className="glass-card" style={{ padding: '35px', borderRadius: '20px', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '25px', color: 'var(--accent-violet)' }}>📜 CERTIFICATIONS</h2>
              <div style={{ display: 'grid', gap: '15px' }}>
                {[
                  'Diploma in Digital Marketing - XL Multimedia and Animation',
                  'Diploma in Graphic Designing - XL Multimedia and Animation'
                ].map((cert, idx) => (
                  <div key={idx} style={{ padding: '15px 20px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '10px', border: '1px solid rgba(139, 92, 246, 0.2)', color: 'var(--accent-violet)', fontWeight: '500' }}>
                    ✓ {cert}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Languages Section */}
          <section className="reveal" style={{ maxWidth: '900px', margin: '0 auto 40px' }}>
            <div className="glass-card" style={{ padding: '35px', borderRadius: '20px', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '25px', color: 'var(--accent-pink)' }}>🌐 LANGUAGES</h2>
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                {['English', 'Hindi', 'Punjabi'].map((lang, idx) => (
                  <span key={idx} style={{ padding: '10px 20px', background: 'rgba(236, 72, 153, 0.1)', borderRadius: '20px', color: 'var(--accent-pink)', fontWeight: '500', fontSize: '0.95rem' }}>
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="reveal" style={{ textAlign: 'center', marginTop: '60px', padding: '40px 20px', background: 'var(--glass-gradient)', borderRadius: '20px', border: '1px solid var(--glass-border)' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '15px', background: 'var(--grad-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Let's Work Together!</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '30px' }}>Ready to bring your creative vision to life?</p>
            <a href="/contact" className="btn btn-primary" style={{ padding: '14px 35px', fontSize: '1rem', fontWeight: '600', borderRadius: '50px', background: 'var(--grad-primary)', border: 'none', cursor: 'pointer', textDecoration: 'none', display: 'inline-block', transition: 'all 0.3s ease' }}>Get In Touch →</a>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}