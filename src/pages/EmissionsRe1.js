import React from 'react';

const EmissionsRe1 = () => {
  const reportData = {
    companyName: "Cement Corp Ltd",
    period: "Q4 2024",
    totalEmissions: "45,800 tCO₂e",
    scopeBreakdown: [
      { scope: "Scope 1", emissions: "12,500 tCO₂e", percentage: "27.3%", description: "Direct emissions from production" },
      { scope: "Scope 2", emissions: "8,300 tCO₂e", percentage: "18.1%", description: "Purchased electricity" },
      { scope: "Scope 3", emissions: "25,000 tCO₂e", percentage: "54.6%", description: "Supply chain emissions" }
    ],
    topHotspots: [
      { activity: "Clinker Production", emissions: "22,000 tCO₂e" },
      { activity: "Raw Material Transport", emissions: "8,500 tCO₂e" },
      { activity: "Packaging", emissions: "5,200 tCO₂e" },
      { activity: "Employee Commuting", emissions: "2,800 tCO₂e" },
      { activity: "Waste Disposal", emissions: "2,500 tCO₂e" }
    ],
    reductionProgress: {
      target: "30% reduction by 2030",
      current: "12% reduction achieved",
      yearOverYear: "5% improvement vs last year"
    },
    verification: {
      status: "Audit Ready",
      lastAudit: "Q3 2024",
      nextAudit: "Q1 2025"
    }
  };

  return (
    <div className="report-container">
      <div className="report-header">
        <h1>Emissions Report - Cement Corp Ltd</h1>
        <p className="report-period">{reportData.period} • {reportData.totalEmissions} Total Emissions</p>
      </div>
      
      <div className="report-summary">
        <div className="summary-card">
          <h3>Total Carbon Footprint</h3>
          <div className="total-emissions">{reportData.totalEmissions}</div>
          <p>Annual CO₂ Equivalent</p>
        </div>
        
        <div className="summary-card">
          <h3>Scope 3 Contribution</h3>
          <div className="scope3-highlight">54.6%</div>
          <p>Majority from supply chain</p>
        </div>
        
        <div className="summary-card">
          <h3>Reduction Progress</h3>
          <div className="progress-highlight">{reportData.reductionProgress.current}</div>
          <p>{reportData.reductionProgress.target}</p>
        </div>
      </div>
      
      <div className="scope-breakdown">
        <h2>Emissions by Scope</h2>
        <div className="scope-chart">
          {reportData.scopeBreakdown.map((scope, index) => (
            <div key={index} className="scope-item">
              <div className="scope-header">
                <h4>{scope.scope}</h4>
                <span className="scope-percentage">{scope.percentage}</span>
              </div>
              <div className="scope-emissions">{scope.emissions}</div>
              <p className="scope-description">{scope.description}</p>
              <div className="scope-bar">
                <div 
                  className="scope-bar-fill" 
                  style={{ width: scope.percentage }}
                  data-scope={scope.scope.toLowerCase()}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="hotspots-section">
        <h2>Top Emission Hotspots</h2>
        <div className="hotspots-grid">
          {reportData.topHotspots.map((hotspot, index) => (
            <div key={index} className="hotspot-card">
              <div className="hotspot-rank">#{index + 1}</div>
              <h4>{hotspot.activity}</h4>
              <div className="hotspot-emissions">{hotspot.emissions}</div>
              <div className="hotspot-actions">
                <button className="btn-sm">View Details</button>
                <button className="btn-sm outline">Reduction Plan</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="reduction-section">
        <h2>Reduction Strategies</h2>
        <div className="strategies-grid">
          <div className="strategy-card">
            <h4>Alternative Fuels</h4>
            <p>Switch to biomass and waste-derived fuels in kilns</p>
            <span className="strategy-impact">Potential: 15% reduction</span>
          </div>
          <div className="strategy-card">
            <h4>Route Optimization</h4>
            <p>AI-powered logistics planning for raw materials</p>
            <span className="strategy-impact">Potential: 8% reduction</span>
          </div>
          <div className="strategy-card">
            <h4>Carbon Capture</h4>
            <p>Implement CCS technology in production process</p>
            <span className="strategy-impact">Potential: 25% reduction</span>
          </div>
          <div className="strategy-card">
            <h4>Recycled Packaging</h4>
            <p>Switch to 100% recycled packaging materials</p>
            <span className="strategy-impact">Potential: 12% reduction</span>
          </div>
        </div>
      </div>
      
      <div className="verification-section">
        <h2>Verification Status</h2>
        <div className="verification-card">
          <div className="verification-status">
            <span className="status-badge verified">{reportData.verification.status}</span>
            <p>Report meets audit requirements</p>
          </div>
          <div className="verification-dates">
            <div>
              <strong>Last Audit:</strong> {reportData.verification.lastAudit}
            </div>
            <div>
              <strong>Next Audit:</strong> {reportData.verification.nextAudit}
            </div>
          </div>
          <button className="export-btn">Download Full Report (PDF)</button>
        </div>
      </div>
    </div>
  );
};

export default EmissionsRe1;