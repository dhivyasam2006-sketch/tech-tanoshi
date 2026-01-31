import React from 'react';

const ConsumerData1 = () => {
  const consumerData = {
    totalConsumers: '2,500',
    averageCarbonPerConsumer: '18.3 tCO₂e',
    reductionPotential: '35%',
    topSegments: [
      { segment: 'Construction Companies', impact: 'High', consumers: '850' },
      { segment: 'Government Projects', impact: 'Medium', consumers: '620' },
      { segment: 'Private Contractors', impact: 'High', consumers: '480' },
      { segment: 'Export Markets', impact: 'Low', consumers: '350' }
    ]
  };

  return (
    <div className="consumer-container">
      <h1>Consumer Data Analysis - Cement Corp Ltd</h1>
      <p>Understanding downstream Scope 3 emissions from product usage</p>
      
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
          <p>Through consumer education</p>
        </div>
      </div>
      
      <div className="content-section">
        <h2>Consumer Segments</h2>
        <div className="segments-list">
          {consumerData.topSegments.map((segment, index) => (
            <div key={index} className="segment-item">
              <div className="segment-name">{segment.segment}</div>
              <div className={`segment-impact ${segment.impact.toLowerCase()}`}>
                {segment.impact} Impact
              </div>
              <div className="segment-consumers">{segment.consumers} consumers</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="consumer-actions">
        <button className="action-btn primary">Download Consumer Report</button>
        <button className="action-btn secondary">Launch Education Program</button>
      </div>
    </div>
  );
};

export default ConsumerData1;