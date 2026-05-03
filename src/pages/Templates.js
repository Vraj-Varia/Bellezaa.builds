import React from 'react';

const Templates = () => {
  const templates = [
    {
      id: 1,
      name: 'Minimal Portfolio',
      category: 'Website',
      price: '$49',
      format: 'Next.js',
    },
    {
      id: 2,
      name: 'Dashboard UI Kit',
      category: 'UI Kit',
      price: '$79',
      format: 'Figma',
    },
    {
      id: 3,
      name: 'Resume Template',
      category: 'Document',
      price: '$19',
      format: 'PDF',
    },
    {
      id: 4,
      name: 'Social Media Pack',
      category: 'Marketing',
      price: '$29',
      format: 'Figma',
    },
    {
      id: 5,
      name: 'E-commerce Theme',
      category: 'Website',
      price: '$99',
      format: 'Next.js',
    },
    {
      id: 6,
      name: 'Icon Library',
      category: 'Assets',
      price: '$39',
      format: 'SVG',
    },
  ];

  const benefits = [
    {
      title: 'Fully Customizable',
      description: 'All templates are easy to edit with organized layers and components.',
    },
    {
      title: 'Commercial License',
      description: 'Use for personal or commercial projects with our standard license.',
    },
    {
      title: 'Free Updates',
      description: 'Get lifetime updates whenever the template is improved.',
    },
  ];

  return (
    <div className="section" style={{ paddingTop: '140px' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <p className="section-label">Templates</p>
          <h1>Professional Templates</h1>
          <p className="section-description">
            Ready-to-use templates to kickstart your next project.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="templates-grid">
          {templates.map((template) => (
            <article key={template.id} className="template-card">
              <div className="template-preview">
                {template.category}
              </div>
              <div className="template-content">
                <p className="template-category">{template.category}</p>
                <h3 className="template-name">{template.name}</h3>
                <div className="template-meta">
                  <span className="template-format">{template.format}</span>
                  <span className="template-price">{template.price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Benefits Section */}
        <div
          style={{
            marginTop: 'var(--space-20)',
            padding: 'var(--space-12)',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-primary)',
            borderRadius: 'var(--radius-xl)',
          }}
        >
          <div className="grid grid-3">
            {benefits.map((benefit, index) => (
              <div key={index}>
                <h4
                  style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: 600,
                    marginBottom: 'var(--space-3)',
                    color: 'var(--text-primary)',
                  }}
                >
                  {benefit.title}
                </h4>
                <p
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--text-tertiary)',
                    margin: 0,
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Templates CTA */}
        <div style={{ textAlign: 'center', marginTop: 'var(--space-20)' }}>
          <p
            className="text-mono"
            style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-4)' }}
          >
            Need something custom?
          </p>
          <p
            style={{
              fontSize: 'var(--text-xl)',
              maxWidth: '500px',
              margin: '0 auto var(--space-6)',
              color: 'var(--text-secondary)',
            }}
          >
            I can create custom templates tailored to your specific needs and brand guidelines.
          </p>
          <a href="mailto:hello@bellezaa.com" className="btn">
            <span>Request Custom Template</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Templates;
