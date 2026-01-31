import React from 'react';

const ConsumerData2 = () => {
  const consumerData = {
    totalConsumers: '15,800',
    averageCarbonPerConsumer: '1.2 tCO₂e',
    reductionPotential: '45%',
    topSegments: [
      { segment: 'Retail Chains', impact: 'High', consumers: '6,200' },
      { segment: 'Online Marketplaces', impact: 'Medium', consumers: '4,500' },
      { segment: 'Beauty Salons', impact: 'Low', consumers: '2,800' },
      { segment: 'Direct Consumers', impact: 'Medium', consumers: '2,300' }
    ],
    packagingImpact: {
      plasticWaste: '28,500 kg/month',
      recyclableRate: '42%',
      targetRate: '75% by 2025'
    }
  };

  return (
    <div className="consumer-container">
      <h1>Consumer Data Analysis - Cosmetic Beauty Inc</h1>
      <p>Understanding downstream Scope 3 emissions from product usage and packaging</p>
      
      <div className="data-grid">
        <div className="data-card">
          <h3>Total Consumers</h3>
          <div className="data-value">{consumerData.totalConsumers}</div>
          <p>Active consumer base</p>
        </div>
        
        <div className="data-card">
          <h3>Avg Carbon/Consumer</h3>
          <div className="data-value">{consumerData.averageCarbonPerConsumer}</div>
          <p>Annual emissions per consumer</p>
        </div>
        
        <div className="data-card">
          <h3>Reduction Potential</h3>
          <div className="data-value">{consumerData.reductionPotential}</div>
          <p>Through sustainable packaging</p>
        </div>
      </div>
      
      <div className="content-section">
        <h2>Packaging Impact Analysis</h2>
        <div className="packaging-stats">
          <div className="stat-item">
            <div className="stat-label">Plastic Waste Generated</div>
            <div className="stat-value-large">{consumerData.packagingImpact.plasticWaste}</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Current Recyclable Rate</div>
            <div className="stat-value-large">{consumerData.packagingImpact.recyclableRate}</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">2025 Target Rate</div>
            <div className="stat-value-large target">{consumerData.packagingImpact.targetRate}</div>
          </div>
        </div>
      </div>
      
      <div className="content-section">
        <h2>Consumer Segments & Impact</h2>
        <div className="segments-list">
          {consumerData.topSegments.map((segment, index) => (
            <div key={index} className="segment-item cosmetic">
              <div className="segment-name">{segment.segment}</div>
              <div className={`segment-impact ${segment.impact.toLowerCase()}`}>
                {segment.impact} Impact
              </div>
              <div className="segment-consumers">{segment.consumers} consumers</div>
              <div className="segment-actions">
                <button className="btn-sm">View Details</button>
                <button className="btn-sm outline">Engage Program</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="consumer-recommendations">
        <h3>Consumer Engagement Recommendations</h3>
        <div className="recommendations-grid">
          <div className="recommendation-card">
            <h4>♻️ Packaging Return Program</h4>
            <p>Implement consumer incentives for returning packaging</p>
            <span className="impact">Potential: 25% waste reduction</span>
          </div>
          <div className="recommendation-card">
            <h4>📱 Digital Education Campaign</h4>
            <p>Educate consumers on sustainable product use</p>
            <span className="impact">Potential: 15% footprint reduction</span>
          </div>
          <div className="recommendation-card">
            <h4>🎯 Sustainable Product Lines</h4>
            <p>Launch refillable and biodegradable product ranges</p>
            <span className="impact">Potential: 35% plastic reduction</span>
          </div>
        </div>
      </div>
      
      <div className="consumer-actions">
        <button className="action-btn primary">Download Consumer Sustainability Report</button>
        <button className="action-btn secondary">Launch Packaging Return Program</button>
        <button className="action-btn success">Initiate Consumer Education Campaign</button>
      </div>
    </div>
  );
};

export default ConsumerData2;