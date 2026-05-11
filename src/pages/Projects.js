import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
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

  const projects = [
    { id: 1, title: 'Lumière Beauty', category: 'Brand Identity', year: '2024', type: 'Beauty', problem: 'Low website inquiries and poor conversion', solution: 'Designed a clean, high-converting landing page with optimized user flow and integrated lead capture system', result: '+85% increase in leads within 30 days' },
    { id: 2, title: 'Botanica Wellness', category: 'Art Direction', year: '2024', type: 'Wellness', problem: 'Manual customer handling and missed leads due to slow response time', solution: 'Implemented AI chatbot for instant responses and automated booking system', result: 'Reduced response time by 70% and increased customer engagement significantly' },
    { id: 3, title: 'Rose Beauty Co.', category: 'Visual Design', year: '2023', type: 'Beauty', problem: 'High traffic but very low conversion rate', solution: 'Redesigned website structure with better CTA placement and conversion-focused UI', result: '2x improvement in conversion rate' },
    { id: 4, title: 'Sage Lifestyle', category: 'Brand Identity', year: '2023', type: 'Lifestyle', problem: 'Unclear brand messaging leading to weak customer trust', solution: 'Repositioned website content with clear value proposition and structured layout', result: 'Improved user retention and increased time spent on site by 60%' },
    { id: 5, title: 'Velvet Cosmetics', category: 'Packaging', year: '2023', type: 'Beauty', problem: 'No proper lead capture system on website', solution: 'Built landing page funnel with lead forms and automated follow-up system', result: 'Consistent daily inquiries and improved lead quality' },
    { id: 6, title: 'Harmony Spa', category: 'Art Direction', year: '2022', type: 'Wellness', problem: 'Dependence on manual bookings and no automation', solution: 'Integrated AI-based booking assistant and automated scheduling system', result: 'Saved 10+ hours per week and increased booking efficiency' },
  ];

  const filters = ['All', 'Brand Identity', 'Art Direction', 'Visual Design', 'Packaging'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div style={{ paddingTop: '140px' }}>
      {/* Hero */}
      <section className="section">
        <div className="container">
          <div className={`section-header reveal ${revealed.includes(0) ? 'active' : ''}`}>
            <p className="section-label">Portfolio</p>
            <h1 className="editorial-headline">
              Projects that generated<br />
              <em>real business results</em>
            </h1>
            <p className="section-description">
              A collection of websites and AI systems designed to increase leads, improve conversions, and automate growth.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: 'var(--space-12)' }}>
        <div className="container">
          <div className={`filter-group reveal ${revealed.includes(1) ? 'active' : ''}`}>
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="audience-grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`audience-card reveal ${revealed.includes(2 + index) ? 'active' : ''}`}
                style={{ transitionDelay: `${index * 150}ms`, cursor: 'pointer' }}
              >
                <div className="audience-image">
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      background: project.id % 2 === 1
                        ? 'linear-gradient(135deg, #D4A5A5 0%, #E8C4C4 100%)'
                        : 'linear-gradient(135deg, #B8C4AE 0%, #D4DDCF 100%)',
                      filter: 'saturate(0.8) contrast(0.95) sepia(0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-serif)',
                      fontStyle: 'italic',
                      fontSize: '1.25rem',
                      color: 'rgba(43, 43, 43, 1)',
                    }}
                  >
                    {project.problem}
                  </div>
                </div>
                <div className="audience-content">
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--accent-olive)', marginBottom: 'var(--space-2)' }}>
                    {project.category} — {project.year}
                  </p>
                  <h3>{project.title}</h3>
                  <hr />
                  &nbsp;
                  <h5>{project.problem}</h5>
                  &nbsp;
                  <h5>{project.solution}</h5>
                  &nbsp;
                  <h5>{project.result}</h5>
                  &nbsp;
                  <p><em>{project.type}</em></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className={`reveal ${revealed.includes(8) ? 'active' : ''}`}>
            <p className="section-label">Next Project</p>
            <h2 className="section-title" style={{ marginBottom: 'var(--space-8)' }}>
              Want <em>similar</em> results for your <em>business</em>?
            </h2>
            <p>I’ll review your website and show you how to increase leads — for free.</p>
            <a href="mailto:bellezaa.builds@gmail.com" className="btn-pill">
              <span>Get Free Website Audit</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
