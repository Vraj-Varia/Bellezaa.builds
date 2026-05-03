import React, { useEffect, useState } from 'react';

const About = () => {
  const [revealed, setRevealed] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((el, index) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          setRevealed(prev => [...new Set([...prev, index])]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { category: 'Conversion-Focused Websites', items: ['Landing pages', 'Sales funnels', 'Website optimization'] },
    { category: 'AI Automation', items: ['Chatbots', 'Lead handling systems', 'Workflow automation'] },
    { category: 'Business Growth Systems', items: ['Lead generation', 'Conversion improvement', 'Process optimization'] },
  ];

  return (
    <div style={{ paddingTop: '120px' }}>
      {/* Hero */}
      <section className="section">
        <div className="container">
          <div className={`section-header reveal ${revealed.includes(0) ? 'active' : ''}`}>
            <p className="section-label">About</p>
            <h1 className="editorial-headline">
              I build systems that help<br />
              businesses <em>grow faster</em>
            </h1>
            &nbsp;
            <p>I specialize in creating high-converting websites and AI-powered systems that generate leads, automate operations, and drive real business results.</p>
          </div>

          <div className="alternate-row">
            <div className={`reveal ${revealed.includes(1) ? 'active' : ''}`}>
              <div
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  aspectRatio: '4/5',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #D4A5A5 0%, #E8C4C4 50%, #C9B896 100%)',
                    filter: 'saturate(0.8) contrast(0.95) sepia(0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: '1.5rem',
                    color: 'rgba(43, 43, 43, 1)',
                  }}
                >
                  {/* Studio Portrait */}
                  Web • AI • Growth
                </div>
              </div>
            </div>

            <div className={`reveal ${revealed.includes(2) ? 'active' : ''}`}>
              <p style={{ fontSize: 'var(--text-lg)', lineHeight: '1.9', marginBottom: 'var(--space-6)' }}>
                Most websites today look good — but don’t bring results.
                &nbsp;
                That’s where I focus differently.
              </p>
              <p style={{ fontSize: 'var(--text-lg)', lineHeight: '1.9', marginBottom: 'var(--space-6)' }}>
                I don’t just design websites. I build systems that are meant to convert visitors into customers and automate business processes using AI.
                &nbsp;
                My approach is simple — understand the business, identify gaps, and build solutions that directly impact growth.
              </p>
              <p style={{ fontSize: 'var(--text-lg)', lineHeight: '1.9', marginBottom: 0 }}>
                Whether it’s improving conversion rates, generating consistent leads, or reducing manual work through automation, every project is built with one goal: results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className={`section-header reveal ${revealed.includes(3) ? 'active' : ''}`}>
            <p className="section-label">Expertise</p>
            <h2 className="section-title">What I focus on</h2>
          </div>

          <div className="services-grid">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`service-card reveal ${revealed.includes(4 + index) ? 'active' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="service-title">{skill.category}</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {skill.items.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--text-tertiary)',
                        padding: 'var(--space-2) 0',
                        borderBottom: i < skill.items.length - 1 ? '1px solid var(--border-primary)' : 'none',
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


          {/* HOW I FINISH PROJECT SECTION */}
      <section className="how-section">
        <div className="container">

          <h2 className="section-title">
            How I approach every project
          </h2>

          <div className="how-grid">

            <div className="how-card">
              <span className="step-number">01</span>
              <h3>Understand the business</h3>
              <p>
                Identify gaps, user behavior, and where you're losing potential customers
              </p>
            </div>

            <div className="how-card">
              <span className="step-number">02</span>
              <h3>Build the right system</h3>
              <p>
                Create high-converting websites and AI automation tailored to your goals
              </p>
            </div>

            <div className="how-card">
              <span className="step-number">03</span>
              <h3>Optimize for results</h3>
              <p>
                Continuously improve conversions, performance, and scalability
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Experience */}
      {/* <section className="section">
        <div className="container">
          <div className={`section-header reveal ${revealed.includes(7) ? 'active' : ''}`}>
            <p className="section-label">Experience</p>
            <h2 className="section-title">Career Path</h2>
          </div>

          <div className="experience-list">
            {experience.map((job, index) => (
              <div
                key={index}
                className={`experience-item reveal ${revealed.includes(8 + index) ? 'active' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="experience-year">{job.period}</div>
                <div className="experience-content">
                  <h3>{job.title}</h3>
                  <p className="company">{job.company}</p>
                  <p className="description">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;