import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setIsSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', project: '', message: '' });
      setSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    { label: 'Email', value: 'vrajvaria10@gmail.com' },
    { label: 'Location', value: 'Vadodara, Gujarat, India' },
    { label: 'Contact', value: '+91 - 87801 92237' }, 
    { label: 'Response', value: '48-72 hours' },
  ];

  return (
    <div style={{ paddingTop: '140px' }}>
      {/* Hero */}
      <section className="section">
        <div className="container">
          <div className={`section-header reveal ${revealed.includes(0) ? 'active' : ''}`}>
            <p className="section-label">Contact</p>
            <h1 className="editorial-headline">
              Let's start a<br />
              <em>conversation</em>
            </h1>
            <p className="section-description">
              We'd love to hear about your project and explore how we can collaborate
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="alternate-row">
            {/* Contact Info */}
            <div className={`reveal ${revealed.includes(1) ? 'active' : ''}`}>
              <div style={{ marginBottom: 'var(--space-12)' }}>
                <p style={{ fontSize: 'var(--text-lg)', lineHeight: '1.8', marginBottom: 'var(--space-8)' }}>
                  Whether you're launching a new brand, refreshing an existing one,
                  or seeking art direction for a campaign, we're here to help bring
                  your vision to life with elegance and precision.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                {contactInfo.map((item, index) => (
                  <div key={index}>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginBottom: 'var(--space-1)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-primary)', margin: 0 }}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className={`reveal ${revealed.includes(2) ? 'active' : ''}`}>
              <div
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-10)',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                {isSubmitted ? (
                  <div style={{ textAlign: 'center', padding: 'var(--space-8) 0' }}>
                    <div
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'var(--accent-sage)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto var(--space-6)',
                        color: 'white',
                        fontSize: '1.5rem',
                      }}
                    >
                      ✓
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-3)', fontWeight: 500 }}>
                      Thank You
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
                      We'll be in touch within 48-72 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onFormSubmit}>
                    <div style={{ marginBottom: 'var(--space-6)' }}>
                      <label style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginBottom: 'var(--space-2)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%',
                          padding: 'var(--space-3) 0',
                          background: 'transparent',
                          border: 'none',
                          borderBottom: '1px solid var(--border-primary)',
                          fontSize: 'var(--text-base)',
                          color: 'var(--text-primary)',
                          fontFamily: 'var(--font-sans)',
                          outline: 'none',
                          transition: 'border-color var(--transition-fast)',
                        }}
                        placeholder="Your name"
                        onFocus={(e) => e.target.style.borderColor = 'var(--accent-sage)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--border-primary)'}
                      />

                    </div>

                    <div style={{ marginBottom: 'var(--space-6)' }}>
                      <label style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginBottom: 'var(--space-2)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%',
                          padding: 'var(--space-3) 0',
                          background: 'transparent',
                          border: 'none',
                          borderBottom: '1px solid var(--border-primary)',
                          fontSize: 'var(--text-base)',
                          color: 'var(--text-primary)',
                          fontFamily: 'var(--font-sans)',
                          outline: 'none',
                          transition: 'border-color var(--transition-fast)',
                        }}
                        placeholder="your@email.com"
                        onFocus={(e) => e.target.style.borderColor = 'var(--accent-sage)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--border-primary)'}
                      />

                    </div>

                    <div style={{ marginBottom: 'var(--space-6)' }}>
                      <label style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginBottom: 'var(--space-2)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Project Type
                      </label>
                      <input
                        type="text"
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%',
                          padding: 'var(--space-3) 0',
                          background: 'transparent',
                          border: 'none',
                          borderBottom: '1px solid var(--border-primary)',
                          fontSize: 'var(--text-base)',
                          color: 'var(--text-primary)',
                          fontFamily: 'var(--font-sans)',
                          outline: 'none',
                          transition: 'border-color var(--transition-fast)',
                        }}
                        placeholder="Brand Identity, Web Design, etc."
                        onFocus={(e) => e.target.style.borderColor = 'var(--accent-sage)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--border-primary)'}
                      />

                    </div>

                    <div style={{ marginBottom: 'var(--space-8)' }}>
                      <label style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginBottom: 'var(--space-2)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        style={{
                          width: '100%',
                          padding: 'var(--space-3) 0',
                          background: 'transparent',
                          border: 'none',
                          borderBottom: '1px solid var(--border-primary)',
                          fontSize: 'var(--text-base)',
                          color: 'var(--text-primary)',
                          fontFamily: 'var(--font-sans)',
                          outline: 'none',
                          resize: 'none',
                          transition: 'border-color var(--transition-fast)',
                        }}
                        placeholder="Tell us about your project..."
                        onFocus={(e) => e.target.style.borderColor = 'var(--accent-sage)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--border-primary)'}
                      />

                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 'var(--space-3)',
                        padding: 'var(--space-4) var(--space-8)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: 'var(--text-sm)',
                        fontWeight: 500,
                        letterSpacing: '0.05em',
                        color: 'white',
                        background: 'var(--accent-sage)',
                        borderRadius: 'var(--radius-full)',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all var(--transition-base)',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = 'var(--shadow-md)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      <span>Send Message</span>
                      <span>→</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
