import React from 'react';

const EmissionsRe2 = () => {
  const reportData = {
    companyName: "Cosmetic Beauty Inc",
    period: "Q4 2024",
    totalEmissions: "18,500 tCO₂e",
    scopeBreakdown: [
      { scope: "Scope 1", emissions: "2,800 tCO₂e", percentage: "15.1%", description: "Direct emissions from production" },
      { scope: "Scope 2", emissions: "3,200 tCO₂e", percentage: "17.3%", description: "Purchased electricity & energy" },
      { scope: "Scope 3", emissions: "12,500 tCO₂e", percentage: "67.6%", description: "Supply chain & product lifecycle" }
    ],
    topHotspots: [
      { activity: "Plastic Packaging", emissions: "6,800 tCO₂e", category: "Materials" },
      { activity: "Ingredient Sourcing", emissions: "4,200 tCO₂e", category: "Procurement" },
      { activity: "Product Distribution", emissions: "3,500 tCO₂e", category: "Logistics" },
      { activity: "Consumer Use", emissions: "2,200 tCO₂e", category: "Downstream" },
      { activity: "Waste Management", emissions: "1,800 tCO₂e", category: "End-of-Life" }
    ],
    reductionProgress: {
      target: "40% reduction by 2030",
      current: "18% reduction achieved",
      yearOverYear: "8% improvement vs last year"
    },
    verification: {
      status: "Eco-Audit Certified",
      certification: "ISO 14064-1 Verified",
      nextAudit: "Q2 2025"
    },
    packagingAnalysis: {
      plasticUse: "285 tons/year",
      recyclable: "42%",
      biodegradable: "15%",
      target2025: "75% sustainable packaging"
    }
  };

  return (
    <div className="cosmetic-report-container" style={styles.container}>
      {/* Header with cosmetic theme */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.companyBranding}>
            <div style={styles.logoPlaceholder}>💄</div>
            <div>
              <h1 style={styles.companyName}>{reportData.companyName}</h1>
              <p style={styles.companyTagline}>Sustainable Beauty, Responsible Future</p>
            </div>
          </div>
          <div style={styles.headerRight}>
            <div style={styles.reportPeriod}>{reportData.period} Emissions Report</div>
            <div style={styles.verificationBadges}>
              <span style={styles.badgeCertified}>{reportData.verification.certification}</span>
              <span style={styles.badgeSuccess}>{reportData.verification.status}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Summary Section */}
      <div style={styles.heroSection}>
        <div style={styles.heroCard}>
          <div style={styles.heroMetric}>
            <span style={styles.heroValue}>{reportData.totalEmissions}</span>
            <span style={styles.heroLabel}>Total Carbon Footprint</span>
          </div>
          <div style={styles.heroDivider}></div>
          <div style={styles.heroSecondary}>
            <div style={styles.scope3Highlight}>
              <span style={styles.scope3Value}>{reportData.scopeBreakdown[2].percentage}</span>
              <span style={styles.scope3Label}>Scope 3 Emissions</span>
            </div>
            <div style={styles.progressCircle}>
              <div style={styles.circleBackground}>
                <div style={styles.circleProgress}></div>
              </div>
              <div style={styles.circleText}>
                <span style={styles.progressPercent}>18%</span>
                <span style={styles.progressLabel}>Reduction</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.contentWrapper}>
        {/* Scope Breakdown */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Emissions Breakdown</h2>
            <p style={styles.sectionSubtitle}>Carbon footprint by scope category</p>
          </div>
          <div style={styles.scopeGrid}>
            {reportData.scopeBreakdown.map((scope, index) => (
              <div key={index} style={styles.scopeCard}>
                <div style={styles.scopeCardHeader}>
                  <h3 style={styles.scopeName}>{scope.scope}</h3>
                  <span style={styles.scopePercentage}>{scope.percentage}</span>
                </div>
                <div style={styles.scopeValue}>{scope.emissions}</div>
                <p style={styles.scopeDescription}>{scope.description}</p>
                <div style={styles.progressBar}>
                  <div 
                    style={{
                      ...styles.progressFill,
                      width: scope.percentage,
                      backgroundColor: index === 2 ? '#FF6B8B' : index === 1 ? '#8B5CF6' : '#10B981'
                    }}
                  ></div>
                </div>
                <div style={styles.scopeDecoration}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Packaging Analysis */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Packaging Sustainability</h2>
            <p style={styles.sectionSubtitle}>Material impact analysis</p>
          </div>
          <div style={styles.packagingGrid}>
            <div style={styles.packagingCard}>
              <div style={styles.packagingIcon}>📦</div>
              <div>
                <h4 style={styles.packagingTitle}>Annual Plastic Use</h4>
                <div style={styles.packagingValue}>{reportData.packagingAnalysis.plasticUse}</div>
                <div style={styles.trendBadge}>↓ 5% from last year</div>
              </div>
            </div>
            <div style={styles.packagingCard}>
              <div style={styles.packagingIcon}>♻️</div>
              <div>
                <h4 style={styles.packagingTitle}>Recyclable Materials</h4>
                <div style={styles.packagingValue}>{reportData.packagingAnalysis.recyclable}</div>
                <div style={styles.progressMini}>
                  <div style={{...styles.progressMiniFill, width: reportData.packagingAnalysis.recyclable}}></div>
                </div>
              </div>
            </div>
            <div style={styles.packagingCard}>
              <div style={styles.packagingIcon}>🌱</div>
              <div>
                <h4 style={styles.packagingTitle}>Biodegradable</h4>
                <div style={styles.packagingValue}>{reportData.packagingAnalysis.biodegradable}</div>
                <div style={styles.progressMini}>
                  <div style={{...styles.progressMiniFill, width: reportData.packagingAnalysis.biodegradable}}></div>
                </div>
              </div>
            </div>
            <div style={styles.packagingCard}>
              <div style={styles.packagingIcon}>🎯</div>
              <div>
                <h4 style={styles.packagingTitle}>2025 Target</h4>
                <div style={styles.packagingValueTarget}>{reportData.packagingAnalysis.target2025}</div>
                <div style={styles.targetSubtitle}>Sustainable packaging</div>
              </div>
            </div>
          </div>
        </div>

        {/* Emission Hotspots */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Emission Hotspots</h2>
            <p style={styles.sectionSubtitle}>Top contributors to carbon footprint</p>
          </div>
          <div style={styles.hotspotsGrid}>
            {reportData.topHotspots.map((hotspot, index) => (
              <div key={index} style={styles.hotspotCard}>
                <div style={styles.hotspotHeader}>
                  <div style={styles.hotspotRank}>#{index + 1}</div>
                  <span style={styles.hotspotCategory}>{hotspot.category}</span>
                </div>
                <h4 style={styles.hotspotTitle}>{hotspot.activity}</h4>
                <div style={styles.hotspotValue}>{hotspot.emissions}</div>
                <div style={styles.reductionInfo}>
                  <span style={styles.reductionLabel}>Reduction Potential:</span>
                  <span style={styles.reductionValue}>25-40%</span>
                </div>
                <div style={styles.hotspotActions}>
                  <button style={styles.btnPrimary}>Action Plan</button>
                  <button style={styles.btnOutline}>Supplier Engagement</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reduction Strategies */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Sustainability Strategies</h2>
            <p style={styles.sectionSubtitle}>Packaging & supply chain initiatives</p>
          </div>
          <div style={styles.strategiesGrid}>
            <div style={styles.strategyCard}>
              <div style={styles.strategyIcon}>♻️</div>
              <h4 style={styles.strategyTitle}>Circular Packaging</h4>
              <p style={styles.strategyDesc}>Implement refillable containers and take-back programs</p>
              <span style={styles.strategyImpact}>Potential: 30% waste reduction</span>
            </div>
            <div style={styles.strategyCard}>
              <div style={styles.strategyIcon}>🚚</div>
              <h4 style={styles.strategyTitle}>Green Logistics</h4>
              <p style={styles.strategyDesc}>Optimize distribution network and use electric vehicles</p>
              <span style={styles.strategyImpact}>Potential: 15% transport emissions</span>
            </div>
            <div style={styles.strategyCard}>
              <div style={styles.strategyIcon}>🌿</div>
              <h4 style={styles.strategyTitle}>Bio-based Materials</h4>
              <p style={styles.strategyDesc}>Switch to plant-based plastics and biodegradable materials</p>
              <span style={styles.strategyImpact}>Potential: 40% plastic footprint</span>
            </div>
            <div style={styles.strategyCard}>
              <div style={styles.strategyIcon}>⚡</div>
              <h4 style={styles.strategyTitle}>Renewable Energy</h4>
              <p style={styles.strategyDesc}>100% renewable electricity in production facilities</p>
              <span style={styles.strategyImpact}>Potential: 100% Scope 2 reduction</span>
            </div>
          </div>
        </div>

        {/* Supplier Engagement */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Supplier Sustainability</h2>
            <p style={styles.sectionSubtitle}>Supply chain engagement status</p>
          </div>
          <div style={styles.supplierStats}>
            <div style={styles.supplierStat}>
              <div style={styles.supplierValue}>78%</div>
              <h4 style={styles.supplierTitle}>Suppliers Assessed</h4>
              <p style={styles.supplierDesc}>Of total supplier base</p>
            </div>
            <div style={styles.supplierStat}>
              <div style={styles.supplierValue}>45%</div>
              <h4 style={styles.supplierTitle}>Green Suppliers</h4>
              <p style={styles.supplierDesc}>With sustainability certifications</p>
            </div>
            <div style={styles.supplierStat}>
              <div style={styles.supplierValue}>62%</div>
              <h4 style={styles.supplierTitle}>Improvement Plans</h4>
              <p style={styles.supplierDesc}>Suppliers with active reduction plans</p>
            </div>
          </div>
        </div>

        {/* Verification Footer */}
        <div style={styles.verificationSection}>
          <div style={styles.verificationCard}>
            <div style={styles.verificationContent}>
              <div style={styles.verificationHeader}>
                <h3 style={styles.verificationTitle}>Verification & Compliance</h3>
                <div style={styles.verificationStatus}>
                  <span style={styles.statusVerified}>✓ Verified</span>
                </div>
              </div>
              <div style={styles.verificationDetails}>
                <div style={styles.detailRow}>
                  <strong style={styles.detailLabel}>Certification:</strong>
                  <span>{reportData.verification.certification}</span>
                </div>
                <div style={styles.detailRow}>
                  <strong style={styles.detailLabel}>Status:</strong>
                  <span style={styles.statusActive}>{reportData.verification.status}</span>
                </div>
                <div style={styles.detailRow}>
                  <strong style={styles.detailLabel}>Next Audit:</strong>
                  <span>{reportData.verification.nextAudit}</span>
                </div>
                <div style={styles.detailRow}>
                  <strong style={styles.detailLabel}>Coverage:</strong>
                  <span>Scope 1, 2 & 3 (Full Value Chain)</span>
                </div>
              </div>
            </div>
            <div style={styles.exportSection}>
              <button style={styles.exportBtnPrimary}>Download Full Report (PDF)</button>
              <button style={styles.exportBtnSecondary}>Executive Summary</button>
              <button style={styles.exportBtnOutline}>Data Package (Excel)</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
    backgroundColor: '#FFF9FB',
    minHeight: '100vh',
    color: '#333',
  },
  header: {
    background: 'linear-gradient(135deg, #FFE4EC 0%, #FFD1DC 100%)',
    padding: '2rem',
    borderBottom: '1px solid #FFC1CC',
  },
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  companyBranding: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  logoPlaceholder: {
    fontSize: '3rem',
    background: 'linear-gradient(135deg, #FF6B8B, #8B5CF6)',
    width: '60px',
    height: '60px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  companyName: {
    margin: 0,
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#333',
  },
  companyTagline: {
    margin: '4px 0 0 0',
    fontSize: '0.9rem',
    color: '#666',
  },
  headerRight: {
    textAlign: 'right',
  },
  reportPeriod: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '0.5rem',
  },
  verificationBadges: {
    display: 'flex',
    gap: '0.5rem',
    justifyContent: 'flex-end',
  },
  badgeCertified: {
    background: '#8B5CF6',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '600',
  },
  badgeSuccess: {
    background: '#10B981',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '600',
  },
  heroSection: {
    maxWidth: '1200px',
    margin: '2rem auto',
    padding: '0 2rem',
  },
  heroCard: {
    background: 'white',
    borderRadius: '16px',
    padding: '2rem',
    display: 'flex',
    alignItems: 'center',
    gap: '3rem',
    boxShadow: '0 4px 20px rgba(255, 107, 139, 0.1)',
    border: '1px solid #FFE4EC',
  },
  heroMetric: {
    flex: 1,
    textAlign: 'center',
  },
  heroValue: {
    fontSize: '3.5rem',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #FF6B8B, #8B5CF6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'block',
    lineHeight: 1,
  },
  heroLabel: {
    fontSize: '1rem',
    color: '#666',
    marginTop: '0.5rem',
  },
  heroDivider: {
    width: '1px',
    height: '80px',
    background: '#FFE4EC',
  },
  heroSecondary: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  scope3Highlight: {
    textAlign: 'center',
  },
  scope3Value: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: '#FF6B8B',
    display: 'block',
  },
  scope3Label: {
    fontSize: '0.9rem',
    color: '#666',
  },
  progressCircle: {
    position: 'relative',
    width: '80px',
    height: '80px',
  },
  circleBackground: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    background: '#FFE4EC',
    position: 'relative',
    overflow: 'hidden',
  },
  circleProgress: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    background: 'conic-gradient(#10B981 65%, transparent 0)',
  },
  circleText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  progressPercent: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#333',
    display: 'block',
  },
  progressLabel: {
    fontSize: '0.8rem',
    color: '#666',
  },
  contentWrapper: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem 4rem',
  },
  section: {
    marginBottom: '3rem',
  },
  sectionHeader: {
    marginBottom: '2rem',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#333',
    margin: '0 0 0.5rem 0',
  },
  sectionSubtitle: {
    fontSize: '0.95rem',
    color: '#666',
    margin: 0,
  },
  scopeGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  scopeCard: {
    background: 'white',
    borderRadius: '12px',
    padding: '1.5rem',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 2px 12px rgba(255, 107, 139, 0.08)',
    border: '1px solid #FFE4EC',
  },
  scopeCardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.5rem',
  },
  scopeName: {
    margin: 0,
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#333',
  },
  scopePercentage: {
    fontSize: '1rem',
    fontWeight: '700',
    color: '#FF6B8B',
  },
  scopeValue: {
    fontSize: '1.8rem',
    fontWeight: '800',
    color: '#333',
    marginBottom: '0.5rem',
  },
  scopeDescription: {
    fontSize: '0.9rem',
    color: '#666',
    margin: '0 0 1rem 0',
  },
  progressBar: {
    height: '6px',
    background: '#FFE4EC',
    borderRadius: '3px',
    overflow: 'hidden',
    marginBottom: '0.5rem',
  },
  progressFill: {
    height: '100%',
    borderRadius: '3px',
    transition: 'width 0.3s ease',
  },
  scopeDecoration: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '60px',
    height: '60px',
    background: 'linear-gradient(135deg, rgba(255, 107, 139, 0.1), rgba(139, 92, 246, 0.1))',
    borderBottomLeftRadius: '100%',
  },
  packagingGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
  },
  packagingCard: {
    background: 'white',
    borderRadius: '12px',
    padding: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    boxShadow: '0 2px 12px rgba(255, 107, 139, 0.08)',
    border: '1px solid #FFE4EC',
  },
  packagingIcon: {
    fontSize: '2rem',
    background: 'linear-gradient(135deg, #FFE4EC, #FFD1DC)',
    width: '60px',
    height: '60px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FF6B8B',
  },
  packagingTitle: {
    margin: '0 0 0.5rem 0',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#333',
  },
  packagingValue: {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: '#333',
    marginBottom: '0.5rem',
  },
  packagingValueTarget: {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: '#10B981',
    marginBottom: '0.5rem',
  },
  trendBadge: {
    display: 'inline-block',
    background: '#D1FAE5',
    color: '#065F46',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.8rem',
    fontWeight: '600',
  },
  progressMini: {
    height: '6px',
    background: '#FFE4EC',
    borderRadius: '3px',
    overflow: 'hidden',
    marginTop: '0.5rem',
  },
  progressMiniFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #FF6B8B, #8B5CF6)',
    borderRadius: '3px',
  },
  targetSubtitle: {
    fontSize: '0.85rem',
    color: '#666',
  },
  hotspotsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1.5rem',
  },
  hotspotCard: {
    background: 'white',
    borderRadius: '12px',
    padding: '1.5rem',
    boxShadow: '0 2px 12px rgba(255, 107, 139, 0.08)',
    border: '1px solid #FFE4EC',
    transition: 'transform 0.2s ease',
  },
  hotspotCardHover: {
    transform: 'translateY(-4px)',
  },
  hotspotHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  hotspotRank: {
    background: 'linear-gradient(135deg, #FF6B8B, #8B5CF6)',
    color: 'white',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    fontSize: '0.9rem',
  },
  hotspotCategory: {
    background: '#F3F4F6',
    color: '#666',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.8rem',
    fontWeight: '600',
  },
  hotspotTitle: {
    margin: '0 0 0.5rem 0',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#333',
  },
  hotspotValue: {
    fontSize: '1.3rem',
    fontWeight: '800',
    color: '#333',
    marginBottom: '1rem',
  },
  reductionInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
    padding: '0.75rem',
    background: '#FFF9FB',
    borderRadius: '8px',
  },
  reductionLabel: {
    fontSize: '0.85rem',
    color: '#666',
  },
  reductionValue: {
    fontSize: '0.9rem',
    fontWeight: '700',
    color: '#10B981',
  },
  hotspotActions: {
    display: 'flex',
    gap: '0.5rem',
  },
  btnPrimary: {
    flex: 1,
    background: 'linear-gradient(135deg, #FF6B8B, #8B5CF6)',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    fontSize: '0.85rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'opacity 0.2s ease',
  },
  btnOutline: {
    flex: 1,
    background: 'transparent',
    color: '#8B5CF6',
    border: '1px solid #8B5CF6',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    fontSize: '0.85rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  strategiesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
  },
  strategyCard: {
    background: 'white',
    borderRadius: '12px',
    padding: '1.5rem',
    boxShadow: '0 2px 12px rgba(255, 107, 139, 0.08)',
    border: '1px solid #FFE4EC',
  },
  strategyIcon: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  strategyTitle: {
    margin: '0 0 0.5rem 0',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#333',
  },
  strategyDesc: {
    fontSize: '0.9rem',
    color: '#666',
    margin: '0 0 1rem 0',
    lineHeight: 1.5,
  },
  strategyImpact: {
    fontSize: '0.85rem',
    color: '#10B981',
    fontWeight: '600',
  },
  supplierStats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    background: 'white',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 2px 12px rgba(255, 107, 139, 0.08)',
    border: '1px solid #FFE4EC',
  },
  supplierStat: {
    textAlign: 'center',
  },
  supplierValue: {
    fontSize: '2.5rem',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #FF6B8B, #8B5CF6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '0.5rem',
  },
  supplierTitle: {
    margin: '0 0 0.5rem 0',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#333',
  },
  supplierDesc: {
    fontSize: '0.9rem',
    color: '#666',
    margin: 0,
  },
  verificationSection: {
    marginTop: '3rem',
  },
  verificationCard: {
    background: 'linear-gradient(135deg, #FFF9FB, #FFE4EC)',
    borderRadius: '16px',
    padding: '2rem',
    border: '1px solid #FFD1DC',
  },
  verificationContent: {
    marginBottom: '2rem',
  },
  verificationHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
  },
  verificationTitle: {
    margin: 0,
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#333',
  },
  verificationStatus: {},
  statusVerified: {
    background: '#10B981',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '600',
  },
  verificationDetails: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
  },
  detailRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.75rem',
    background: 'white',
    borderRadius: '8px',
    border: '1px solid #FFE4EC',
  },
  detailLabel: {
    color: '#666',
  },
  statusActive: {
    color: '#10B981',
    fontWeight: '600',
  },
  exportSection: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  exportBtnPrimary: {
    background: 'linear-gradient(135deg, #FF6B8B, #8B5CF6)',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'opacity 0.2s ease',
    flex: 1,
  },
  exportBtnSecondary: {
    background: 'white',
    color: '#8B5CF6',
    border: '1px solid #8B5CF6',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    flex: 1,
  },
  exportBtnOutline: {
    background: 'transparent',
    color: '#666',
    border: '1px solid #CBD5E1',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    flex: 1,
  },
};

export default EmissionsRe2;