import React, { useState } from 'react';

const Certification1 = () => {
  const [applicationStatus, setApplicationStatus] = useState('ready');
  
  const requirements = [
    { id: 1, name: 'Scope 1 Data Complete', status: 'completed', description: 'Direct emissions verified' },
    { id: 2, name: 'Scope 2 Data Complete', status: 'completed', description: 'Energy consumption verified' },
    { id: 3, name: 'Scope 3 Data Complete', status: 'in-progress', description: '85% of supply chain covered' },
    { id: 4, name: 'Third-Party Audit', status: 'pending', description: 'Scheduled for Q1 2025' },
    { id: 5, name: 'Reduction Plan', status: 'completed', description: '2030 target approved' },
    { id: 6, name: 'Government Submission', status: 'ready', description: 'Ready to submit' }
  ];

  const handleApply = () => {
    setApplicationStatus('submitted');
    alert('Application submitted to government for review');
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'success';
      case 'in-progress': return 'warning';
      case 'pending': return 'info';
      case 'ready': return 'ready';
      default: return 'default';
    }
  };

  return (
    <div className="certification-container">
      <div className="certification-header">
        <h1>Carbon Neutral Certification</h1>
        <p className="company-name">Cement Corp Ltd</p>
        <div className="certification-status">
          <span className={`status-badge ${applicationStatus}`}>
            {applicationStatus === 'ready' ? 'Ready to Apply' : 
             applicationStatus === 'submitted' ? 'Submitted for Review' : applicationStatus}
          </span>
        </div>
      </div>
      
      <div className="certification-progress">
        <h2>Certification Requirements</h2>
        <div className="requirements-list">
          {requirements.map(req => (
            <div key={req.id} className={`requirement-item ${getStatusColor(req.status)}`}>
              <div className="req-checkbox">
                {req.status === 'completed' ? '✓' : '○'}
              </div>
              <div className="req-content">
                <h4>{req.name}</h4>
                <p>{req.description}</p>
              </div>
              <div className="req-status">
                <span className={`status-tag ${req.status}`}>
                  {req.status.replace('-', ' ')}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="progress-summary">
          <h3>Overall Progress</h3>
          <div className="progress-bar-large">
            <div className="progress-fill" style={{ width: '75%' }}></div>
          </div>
          <div className="progress-text">
            <span>75% Complete</span>
            <span>4 of 6 requirements met</span>
          </div>
        </div>
      </div>
      
      <div className="certification-benefits">
        <h2>Benefits of Certification</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h4>🏛️ Government Recognition</h4>
            <p>Official carbon-neutral status with government verification</p>
          </div>
          <div className="benefit-card">
            <h4>📈 Market Advantage</h4>
            <p>Competitive edge in green procurement and tenders</p>
          </div>
          <div className="benefit-card">
            <h4>💰 Tax Incentives</h4>
            <p>Eligibility for carbon tax rebates and incentives</p>
          </div>
          <div className="benefit-card">
            <h4>🌍 Environmental Impact</h4>
            <p>Verified contribution to national Net Zero goals</p>
          </div>
        </div>
      </div>
      
      <div className="application-section">
        <h2>Government Application</h2>
        <div className="application-card">
          <div className="application-info">
            <h3>Ready for Submission</h3>
            <p>Your company meets the minimum requirements for Carbon Neutral Certification.</p>
            <ul className="application-checklist">
              <li>✓ Complete Scope 1, 2 & 3 emissions data</li>
              <li>✓ Verified reduction targets aligned with 2030 goals</li>
              <li>✓ Audit-ready documentation</li>
              <li>✓ Implementation plan for identified hotspots</li>
            </ul>
          </div>
          
          <div className="application-actions">
            {applicationStatus === 'ready' ? (
              <>
                <button onClick={handleApply} className="apply-btn primary">
                  Submit to Government
                </button>
                <button className="apply-btn outline">
                  Download Application Package
                </button>
              </>
            ) : (
              <div className="submitted-status">
                <h4>✅ Application Submitted</h4>
                <p>Your application is under government review. Expected response: 30-45 days.</p>
                <button className="apply-btn">
                  Track Application Status
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="timeline-section">
        <h2>Certification Timeline</h2>
        <div className="timeline">
          <div className="timeline-item current">
            <div className="timeline-date">Now</div>
            <div className="timeline-content">
              <h4>Application Preparation</h4>
              <p>Complete all requirements and documentation</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">30 Days</div>
            <div className="timeline-content">
              <h4>Government Review</h4>
              <p>Verification and compliance check</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">60 Days</div>
            <div className="timeline-content">
              <h4>Site Audit (if required)</h4>
              <p>Physical verification of processes</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">90 Days</div>
            <div className="timeline-content">
              <h4>Certification Award</h4>
             <p>Official certification granted</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification1;