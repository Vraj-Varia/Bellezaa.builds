import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [revealed, setRevealed] = useState([]);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Reveal elements on scroll
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
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.3;

  const services = [
    {
      title: 'High-Converting Websites',
      description: 'Websites designed to turn visitors into leads and customers — not just look good.',
    },
    {
      title: 'AI Automation Systems',
      description: 'Automate customer support, lead capture, and follow-ups using AI tools.',
    },
    {
      title: 'Lead Generation Systems',
      description: 'Funnels, landing pages, and strategies built to bring consistent inquiries.',
    },
  ];

  const audienceSegments = [
    {
      title: 'Startups looking to launch and grow fast',
      description: 'Elevating cosmetics and skincare brands with sophisticated visual identities.',
      category: 'Startups looking to launch and grow fast',
    },
    {
      title: 'Local businesses needing more inquiries',
      description: 'Creating serene, premium aesthetics for spas and holistic wellness spaces.',
      category: 'Local businesses needing more inquiries',
    },
    {
      title: 'Brands struggling to convert website traffic',
      description: 'Developing refined brand experiences for modern luxury lifestyle products.',
      category: 'Brands struggling to convert website traffic',
    },
    {
      title: 'Founders who want to automate operations',
      description: 'Crafting timeless visual languages for emerging and established fashion brands.',
      category: 'Founders who want to automate operations',
    },
  ];

  return (
    <div>
      {/* Hero Section with Parallax */}
      <section className="hero" ref={heroRef}>
        <div className="hero-card">
          {/* Parallax Background Image */}
          <div
            className="parallax-element"
            style={{
              position: 'absolute',
              inset: 0,
              transform: `translateY(${parallaxOffset}px)`,
            }}
          >
            <div
              style={{
                width: '100%',
                height: '120%',
                background: 'linear-gradient(135deg, #B8C4AE 0%, #D4A5A5 50%, #C9B896 100%)',
                filter: 'saturate(0.8) contrast(0.95) sepia(0.1)',
              }}
            />
          </div>

          <div className="hero-overlay" />

          <div className="hero-content">
            <p className="hero-label">Web Development • AI Automation • Lead Generation</p>
            <h1 className="hero-title">
              I build <em>websites &<br />
                AI systems</em> that turn <br />
              visitors into paying customers
            </h1>
            <p className="hero-subtitle">
              Helping startups and businesses generate consistent leads, automate workflows, and scale faster — without wasting time on designs that don’t convert.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }} className='mobile-hero-section'>
              <Link to="/projects" className="btn-pill">
                <span>View Case Studies</span>
                <span>→</span>
              </Link>
              <Link to="/contact" className="btn-pill-secondary">
                <span>Get Free Website Review</span>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/*  RESULT SECTION  */}
      <section className="results-section">
        <div className="container">

          <h2 className="section-title">Results that matter</h2>
          <p className="section-subtitle">
            Real outcomes that help businesses grow faster
          </p>

          <div className="results-grid">

            <div className="result-card">
              <h3>More Leads</h3>
              <p>
                Increased leads by up to 120% with conversion-focused websites
              </p>
            </div>

            <div className="result-card">
              <h3>Better Conversion</h3>
              <p>
                Optimized user journeys that turn visitors into paying customers
              </p>
            </div>

            <div className="result-card">
              <h3>Automation</h3>
              <p>
                Automated customer handling using AI systems that work 24/7
              </p>
            </div>

          </div>

        </div>
      </section>



      {/* Brand Story Section */}
      {/* <section className="section story-section">
        <div className="container">
          <div
            className={`story-content reveal ${revealed.includes(0) ? 'active' : ''}`}
          >
            <p className="section-label">Our Philosophy</p>
            <blockquote className="story-quote">
              "Beauty lies in the details, in the quiet moments of refinement,
              in the gentle balance between tradition and modernity."
            </blockquote>
            <p className="story-text">
              We believe that exceptional design should feel effortless yet deliberate,
              timeless yet contemporary. Every project is an opportunity to create
              something meaningful—a visual language that whispers rather than shouts,
              that invites rather than demands attention.
            </p>
            <p className="story-text" style={{ marginBottom: 0 }}>
              Specializing in beauty, wellness, and lifestyle brands, we bring a
              discerning eye and meticulous craft to every collaboration, ensuring
              that each creation resonates with elegance and authenticity.
            </p>
          </div>
        </div>
      </section>
*/}
      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className={`section-header reveal ${revealed.includes(1) ? 'active' : ''}`}>
            <p className="section-label">Services</p>
            <h2 className="section-title">What We Offer</h2>
            <p className="section-description">
              Comprehensive creative solutions tailored for luxury beauty and lifestyle brands
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-card reveal ${revealed.includes(2 + index) ? 'active' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="service-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience/Clients Section */}
      <section className="section audience-section">
        <div className="container">
          <div className={`section-header reveal ${revealed.includes(5) ? 'active' : ''}`}>
            <p className="section-label">Clients</p>
            <h2 className="section-title">Who this is for</h2>
            <p className="section-description">
              Partnering with visionary brands across beauty, wellness, and lifestyle
            </p>
          </div>

          <div className="audience-grid">
            {audienceSegments.map((segment, index) => (
              <div
                key={index}
                className={`audience-card reveal ${revealed.includes(6 + index) ? 'active' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="audience-image">
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      background: index % 2 === 0
                        ? 'linear-gradient(135deg, #D4A5A5 0%, #E8C4C4 100%)'
                        : 'linear-gradient(135deg, #B8C4AE 0%, #D4DDCF 100%)',
                      filter: 'saturate(0.8) contrast(0.95) sepia(0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-serif)',
                      fontStyle: 'italic',
                      color: 'rgba(43, 43, 43, 1)',
                      fontSize: '1.25rem',
                    }}
                  >
                    {segment.category}
                  </div>
                </div>
                <div className="audience-content">
                  {/*<h3>{segment.title}</h3>*/}
                  {/*<p>{segment.description}</p>*/}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section" style={{ paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-24)', color: 'var(--text-primary)', background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="reveal active">
            <p className="section-label">Let's Collaborate</p>
            <h2 className="section-title cta-title" style={{ marginBottom: 'var(--space-8)' }}>
              Not getting enough leads from your website?
            </h2>
            <p className="section-description" style={{ marginBottom: 'var(--space-10)' }}>
              I'll analyze your website and show you exactly how to improve it — for free.
            </p>
            <Link to="/contact" className="btn-pill">
              <span>Start a Conversation</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
