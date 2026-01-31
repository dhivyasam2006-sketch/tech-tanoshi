import React, { useState } from 'react';

const Certification2 = () => {
  const [applicationStatus, setApplicationStatus] = useState('in-review');
  
  const requirements = [
    { id: 1, name: 'Scope 1 & 2 Verification', status: 'completed', description: 'Production emissions verified' },
    { id: 2, name: 'Scope 3 Packaging Analysis', status: 'completed', description: 'Full packaging lifecycle assessed' },
    { id: 3, name: 'Supplier Sustainability Audit', status: 'completed', description: '90% suppliers assessed' },
    { id: 4, name: 'Third-Party Certification', status: 'in-progress', description: 'Under Eco-Cert review' },
    { id: 5, name: 'Government Compliance', status: 'completed', description: 'All regulations met' },
    { id: 6, name: 'Consumer Impact Report', status: 'completed', description: 'Downstream emissions documented' }
  ];

  const certificationDetails = {
    type: 'Eco-Beauty Certification',
    level: 'Gold Level',
    validity: '2 years',
    benefits: [
      'Premium market positioning',
      'Access to green procurement',
      'Tax benefits eligibility',
      'Enhanced brand reputation'
    ]
  };

  const handleCheckStatus = () => {
    alert('Certification is currently under government review. Expected completion: 15 days.');
  };

  // CSS Styles
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '24px',
      background: '#fef9f3',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      color: '#2c3e50',
    },
    
    // Header Styles
    headerGradient: {
      background: 'linear-gradient(135deg, #fef9f3 0%, #f9f1e6 100%)',
      borderRadius: '16px',
      padding: '40px',
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid #e8e4dd',
    },
    headerGradientBefore: {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      width: '300px',
      height: '300px',
      background: 'radial-gradient(circle, #c5a880 0%, transparent 70%)',
      opacity: 0.1,
    },
    headerContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1,
    },
    companyBadge: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
    },
    companyIcon: {
      width: '80px',
      height: '80px',
      background: 'linear-gradient(135deg, #8a6d3b, #d4b483)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '40px',
      color: 'white',
      boxShadow: '0 4px 20px rgba(138, 109, 59, 0.08)',
    },
    companyInfo: {
      display: 'flex',
      flexDirection: 'column',
    },
    companySubtitle: {
      fontSize: '14px',
      color: '#7f8c8d',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      margin: '0 0 4px 0',
    },
    companyName: {
      fontSize: '32px',
      fontWeight: '700',
      color: '#2c3e50',
      margin: 0,
    },
    certificationBadge: {
      textAlign: 'right',
    },
    badgeDetails: {
      display: 'flex',
      gap: '12px',
      justifyContent: 'flex-end',
    },
    levelTagGold: {
      background: 'linear-gradient(135deg, #ffd700, #daa520)',
      color: '#fff',
      padding: '8px 20px',
      borderRadius: '50px',
      fontWeight: '600',
      fontSize: '14px',
      boxShadow: '0 2px 8px rgba(218, 165, 32, 0.3)',
    },
    statusTagReview: {
      background: '#3498db',
      color: 'white',
      padding: '8px 20px',
      borderRadius: '50px',
      fontWeight: '600',
      fontSize: '14px',
    },
    
    // Progress Section
    progressSection: {
      background: '#ffffff',
      borderRadius: '16px',
      padding: '32px',
      marginBottom: '32px',
      boxShadow: '0 4px 20px rgba(138, 109, 59, 0.08)',
      border: '1px solid #e8e4dd',
    },
    sectionHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '32px',
    },
    sectionTitle: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#2c3e50',
      margin: 0,
    },
    progressOverview: {
      display: 'flex',
      alignItems: 'center',
      gap: '24px',
    },
    progressCircle: {
      position: 'relative',
      width: '80px',
      height: '80px',
    },
    progressPercent: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '20px',
      fontWeight: '700',
      color: '#8a6d3b',
    },
    progressStats: {
      fontSize: '20px',
      margin: '0 0 4px 0',
      color: '#2c3e50',
    },
    
    // Requirements Grid
    requirementsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '20px',
      marginTop: '24px',
    },
    requirementCard: {
      background: 'white',
      borderRadius: '12px',
      padding: '24px',
      border: '1px solid #e8e4dd',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
    },
    requirementCardHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 30px rgba(138, 109, 59, 0.12)',
      borderColor: '#d4b483',
    },
    reqCardHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '12px',
    },
    reqIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '18px',
      fontWeight: 'bold',
    },
    reqTitle: {
      flex: 1,
    },
    reqStatus: {
      fontSize: '12px',
      fontWeight: '600',
      padding: '2px 10px',
      borderRadius: '20px',
      textTransform: 'uppercase',
    },
    reqDescription: {
      color: '#7f8c8d',
      fontSize: '14px',
      lineHeight: '1.5',
      margin: '0 0 12px 0',
    },
    progressMini: {
      height: '4px',
      background: '#f0f0f0',
      borderRadius: '2px',
      overflow: 'hidden',
      marginTop: '8px',
    },
    
    // Benefits & Details Section
    benefitsDetailsSection: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: '32px',
      marginBottom: '32px',
    },
    benefitsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '20px',
    },
    benefitCard: {
      background: 'white',
      borderRadius: '12px',
      padding: '24px',
      border: '1px solid #e8e4dd',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '16px',
      transition: 'all 0.3s ease',
    },
    benefitCardHover: {
      borderColor: '#8a6d3b',
      transform: 'translateY(-2px)',
    },
    benefitIconWrapper: {
      width: '48px',
      height: '48px',
      background: 'linear-gradient(135deg, #f9f1e6, #f0e6d3)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      color: '#8a6d3b',
    },
    
    // Details Card
    detailsCard: {
      background: 'white',
      borderRadius: '12px',
      padding: '32px',
      border: '1px solid #e8e4dd',
      boxShadow: '0 4px 20px rgba(138, 109, 59, 0.08)',
    },
    detailsGrid: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    detailItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: '16px',
      borderBottom: '1px solid #e8e4dd',
    },
    detailLabel: {
      fontSize: '14px',
      color: '#7f8c8d',
    },
    detailValue: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#2c3e50',
    },
    
    // Timeline Section
    timelineSection: {
      background: 'white',
      borderRadius: '16px',
      padding: '32px',
      marginBottom: '32px',
      boxShadow: '0 4px 20px rgba(138, 109, 59, 0.08)',
      border: '1px solid #e8e4dd',
    },
    timeline: {
      position: 'relative',
      paddingLeft: '30px',
      marginBottom: '40px',
    },
    timelineStep: {
      display: 'flex',
      gap: '24px',
      marginBottom: '32px',
      position: 'relative',
    },
    stepMarker: {
      position: 'relative',
      flexShrink: 0,
    },
    stepDot: {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      background: '#e8e4dd',
      position: 'relative',
      zIndex: 1,
    },
    stepLine: {
      position: 'absolute',
      top: '20px',
      left: '9px',
      width: '2px',
      height: 'calc(100% + 32px)',
      background: '#e8e4dd',
    },
    stepContent: {
      flex: 1,
    },
    stepHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '8px',
    },
    stepStatus: {
      fontSize: '12px',
      fontWeight: '600',
      padding: '4px 12px',
      borderRadius: '20px',
      textTransform: 'uppercase',
    },
    stepDate: {
      fontSize: '14px',
      color: '#7f8c8d',
      margin: '0 0 8px 0',
    },
    stepDescription: {
      fontSize: '14px',
      color: '#2c3e50',
      background: '#f9f9f9',
      padding: '12px',
      borderRadius: '8px',
      marginTop: '8px',
    },
    timelineActions: {
      display: 'flex',
      gap: '16px',
      justifyContent: 'center',
    },
    
    // Buttons
    actionBtn: {
      padding: '14px 28px',
      borderRadius: '12px',
      fontSize: '15px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease',
      border: '2px solid transparent',
    },
    btnPrimary: {
      background: '#8a6d3b',
      color: 'white',
      borderColor: '#8a6d3b',
    },
    btnSecondary: {
      background: 'white',
      color: '#8a6d3b',
      border: '2px solid #8a6d3b',
    },
    btnOutline: {
      background: 'transparent',
      color: '#2c3e50',
      border: '2px solid #e8e4dd',
    },
    
    // Compliance Dashboard
    complianceDashboard: {
      background: 'white',
      borderRadius: '16px',
      padding: '32px',
      boxShadow: '0 4px 20px rgba(138, 109, 59, 0.08)',
      border: '1px solid #e8e4dd',
    },
    complianceGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '24px',
      marginTop: '24px',
    },
    complianceCard: {
      background: 'white',
      borderRadius: '12px',
      padding: '24px',
      border: '1px solid #e8e4dd',
      transition: 'all 0.3s ease',
    },
    complianceHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '16px',
    },
    complianceIcon: {
      width: '40px',
      height: '40px',
      background: '#f0f0f0',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px',
    },
    complianceDescription: {
      fontSize: '14px',
      color: '#7f8c8d',
      lineHeight: '1.5',
      margin: '0 0 20px 0',
    },
    progressBar: {
      height: '6px',
      background: '#f0f0f0',
      borderRadius: '3px',
      overflow: 'hidden',
      marginBottom: '8px',
    },
    complianceFooter: {
      borderTop: '1px solid #e8e4dd',
      paddingTop: '16px',
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Header */}
      <div style={{ marginBottom: '40px' }}>
        <div style={styles.headerGradient}>
          <div style={styles.headerContent}>
            <div style={styles.companyBadge}>
              <div style={styles.companyIcon}>🌿</div>
              <div style={styles.companyInfo}>
                <p style={styles.companySubtitle}>Sustainable Beauty Initiative</p>
                <h1 style={styles.companyName}>Cosmetic Beauty Inc</h1>
              </div>
            </div>
            <div style={styles.certificationBadge}>
              <h2 style={{ fontSize: '28px', fontWeight: '600', margin: '0 0 12px 0', color: '#8a6d3b' }}>
                {certificationDetails.type}
              </h2>
              <div style={styles.badgeDetails}>
                <span style={styles.levelTagGold}>{certificationDetails.level}</span>
                <span style={styles.statusTagReview}>Under Review</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Progress Section */}
      <div style={styles.progressSection}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Certification Progress</h2>
          <div style={styles.progressOverview}>
            <div style={styles.progressCircle}>
              <svg width="80" height="80" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="35" stroke="#f0f0f0" strokeWidth="8" fill="none"/>
                <circle cx="40" cy="40" r="35" stroke="#8a6d3b" strokeWidth="8" fill="none" 
                  strokeDasharray="220" strokeDashoffset="22" strokeLinecap="round"/>
              </svg>
              <span style={styles.progressPercent}>90%</span>
            </div>
            <div>
              <h3 style={styles.progressStats}>Almost There!</h3>
              <p style={{ margin: 0, color: '#7f8c8d', fontSize: '14px' }}>5 of 6 requirements completed</p>
            </div>
          </div>
        </div>
        
        <div style={styles.requirementsGrid}>
          {requirements.map(req => (
            <div 
              key={req.id} 
              style={{
                ...styles.requirementCard,
                borderLeft: `4px solid ${
                  req.status === 'completed' ? '#27ae60' : 
                  req.status === 'in-progress' ? '#f39c12' : '#3498db'
                }`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(138, 109, 59, 0.12)';
                e.currentTarget.style.borderColor = '#d4b483';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#e8e4dd';
              }}
            >
              <div style={styles.reqCardHeader}>
                <div style={{
                  ...styles.reqIcon,
                  background: req.status === 'completed' ? '#e8f5e9' : '#fff3e0',
                  color: req.status === 'completed' ? '#27ae60' : '#f39c12',
                  animation: req.status === 'in-progress' ? 'pulse 2s infinite' : 'none'
                }}>
                  {req.status === 'completed' ? '✓' : req.status === 'in-progress' ? '⟳' : '○'}
                </div>
                <div style={styles.reqTitle}>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: '600' }}>{req.name}</h4>
                  <span style={{
                    ...styles.reqStatus,
                    background: req.status === 'completed' ? '#e8f5e9' : '#fff3e0',
                    color: req.status === 'completed' ? '#27ae60' : '#f39c12'
                  }}>
                    {req.status.replace('-', ' ')}
                  </span>
                </div>
              </div>
              <p style={styles.reqDescription}>{req.description}</p>
              {req.status === 'in-progress' && (
                <div style={styles.progressMini}>
                  <div style={{ height: '100%', background: '#f39c12', borderRadius: '2px', width: '75%' }}></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Benefits & Details */}
      <div style={styles.benefitsDetailsSection}>
        <div>
          <h2 style={styles.sectionTitle}>Certification Benefits</h2>
          <div style={styles.benefitsGrid}>
            {certificationDetails.benefits.map((benefit, index) => (
              <div 
                key={index} 
                style={styles.benefitCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#8a6d3b';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e8e4dd';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={styles.benefitIconWrapper}>
                  <div>✨</div>
                </div>
                <div>
                  <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '600', color: '#2c3e50' }}>
                    {benefit}
                  </h4>
                  <p style={{ margin: 0, fontSize: '14px', color: '#7f8c8d' }}>
                    Available upon certification approval
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <div style={styles.detailsCard}>
            <h3 style={{ fontSize: '20px', fontWeight: '600', margin: '0 0 24px 0', color: '#2c3e50' }}>
              Certification Details
            </h3>
            <div style={styles.detailsGrid}>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>Type</span>
                <span style={styles.detailValue}>{certificationDetails.type}</span>
              </div>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>Level</span>
                <span style={{ ...styles.detailValue, color: '#8a6d3b' }}>{certificationDetails.level}</span>
              </div>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>Validity</span>
                <span style={styles.detailValue}>{certificationDetails.validity}</span>
              </div>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>Renewal</span>
                <span style={styles.detailValue}>Annual audit + 5% reduction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Application Timeline */}
      <div style={styles.timelineSection}>
        <h2 style={styles.sectionTitle}>Application Timeline</h2>
        <div style={{ marginTop: '24px' }}>
          <div style={styles.timeline}>
            <div style={styles.timelineStep}>
              <div style={styles.stepMarker}>
                <div style={{ ...styles.stepDot, background: '#27ae60', boxShadow: '0 0 0 4px rgba(39, 174, 96, 0.2)' }}></div>
                <div style={styles.stepLine}></div>
              </div>
              <div style={styles.stepContent}>
                <div style={styles.stepHeader}>
                  <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>Application Preparation</h4>
                  <span style={{ ...styles.stepStatus, background: '#e8f5e9', color: '#27ae60' }}>Completed</span>
                </div>
                <p style={styles.stepDate}>Nov 15, 2024</p>
              </div>
            </div>
            
            <div style={styles.timelineStep}>
              <div style={styles.stepMarker}>
                <div style={{
                  ...styles.stepDot,
                  background: '#8a6d3b',
                  animation: 'dot-pulse 2s infinite',
                  boxShadow: '0 0 0 4px rgba(138, 109, 59, 0.2)'
                }}></div>
                <div style={styles.stepLine}></div>
              </div>
              <div style={styles.stepContent}>
                <div style={styles.stepHeader}>
                  <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>Government Review</h4>
                  <span style={{ ...styles.stepStatus, background: '#fff3e0', color: '#f39c12' }}>In Progress</span>
                </div>
                <p style={styles.stepDate}>Expected completion: Dec 30, 2024</p>
                <div style={styles.stepDescription}>
                  Your application is currently with the regulatory body
                </div>
              </div>
            </div>
            
            <div style={{ ...styles.timelineStep, marginBottom: 0 }}>
              <div style={styles.stepMarker}>
                <div style={styles.stepDot}></div>
              </div>
              <div style={styles.stepContent}>
                <div style={styles.stepHeader}>
                  <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>Certification Award</h4>
                  <span style={{ ...styles.stepStatus, background: '#f0f0f0', color: '#7f8c8d' }}>Upcoming</span>
                </div>
                <p style={styles.stepDate}>Estimated: Jan 15, 2025</p>
              </div>
            </div>
          </div>
          
          <div style={styles.timelineActions}>
            <button 
              onClick={handleCheckStatus} 
              style={{ ...styles.actionBtn, ...styles.btnPrimary }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#7a5c32';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(138, 109, 59, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#8a6d3b';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span style={{ fontSize: '16px' }}>🔍</span>
              Check Review Status
            </button>
            <button 
              style={{ ...styles.actionBtn, ...styles.btnSecondary }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#fef9f3';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span style={{ fontSize: '16px' }}>📄</span>
              Download Application
            </button>
            <button 
              style={{ ...styles.actionBtn, ...styles.btnOutline }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#8a6d3b';
                e.currentTarget.style.color = '#8a6d3b';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e8e4dd';
                e.currentTarget.style.color = '#2c3e50';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span style={{ fontSize: '16px' }}>👤</span>
              Contact Officer
            </button>
          </div>
        </div>
      </div>
      
      {/* Compliance Dashboard */}
      <div style={styles.complianceDashboard}>
        <h2 style={styles.sectionTitle}>Regulatory Compliance</h2>
        <div style={styles.complianceGrid}>
          <div 
            style={{
              ...styles.complianceCard,
              borderTop: '4px solid #27ae60'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(138, 109, 59, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={styles.complianceHeader}>
              <div style={styles.complianceIcon}>🌱</div>
              <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>Plastic Waste Regulations</h4>
            </div>
            <p style={styles.complianceDescription}>Fully compliant with extended producer responsibility</p>
            <div style={styles.complianceFooter}>
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#27ae60' }}>✅ Compliant</span>
            </div>
          </div>
          
          <div 
            style={{
              ...styles.complianceCard,
              borderTop: '4px solid #27ae60'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(138, 109, 59, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={styles.complianceHeader}>
              <div style={styles.complianceIcon}>🧪</div>
              <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>Chemical Safety Standards</h4>
            </div>
            <p style={styles.complianceDescription}>All ingredients meet green chemistry requirements</p>
            <div style={styles.complianceFooter}>
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#27ae60' }}>✅ Compliant</span>
            </div>
          </div>
          
          <div 
            style={{
              ...styles.complianceCard,
              borderTop: '4px solid #f39c12'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(138, 109, 59, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={styles.complianceHeader}>
              <div style={styles.complianceIcon}>📦</div>
              <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>Sustainable Packaging</h4>
            </div>
            <p style={styles.complianceDescription}>75% target by 2025</p>
            <div style={{ marginBottom: '16px' }}>
              <div style={styles.progressBar}>
                <div style={{ height: '100%', background: '#f39c12', borderRadius: '3px', width: '56%' }}></div>
              </div>
              <span style={{ fontSize: '12px', color: '#7f8c8d', textAlign: 'right' }}>Current: 42%</span>
            </div>
            <div style={styles.complianceFooter}>
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#f39c12' }}>⚠️ Progress Required</span>
            </div>
          </div>
          
          <div 
            style={{
              ...styles.complianceCard,
              borderTop: '4px solid #27ae60'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(138, 109, 59, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={styles.complianceHeader}>
              <div style={styles.complianceIcon}>📊</div>
              <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>Carbon Disclosure</h4>
            </div>
            <p style={styles.complianceDescription}>Scope 1, 2 & 3 emissions fully reported</p>
            <div style={styles.complianceFooter}>
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#27ae60' }}>✅ Compliant</span>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.7; }
            100% { opacity: 1; }
          }
          
          @keyframes dot-pulse {
            0% { box-shadow: 0 0 0 0 rgba(138, 109, 59, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(138, 109, 59, 0); }
            100% { box-shadow: 0 0 0 0 rgba(138, 109, 59, 0); }
          }
          
          @media (max-width: 1024px) {
            .benefits-details-section {
              grid-template-columns: 1fr;
            }
            
            .benefits-grid {
              grid-template-columns: 1fr;
            }
          }
          
          @media (max-width: 768px) {
            .certification-container {
              padding: 16px;
            }
            
            .header-content {
              flex-direction: column;
              gap: 24px;
              text-align: center;
            }
            
            .company-badge {
              flex-direction: column;
              text-align: center;
            }
            
            .certification-badge {
              text-align: center;
            }
            
            .badge-details {
              justify-content: center;
            }
            
            .section-header {
              flex-direction: column;
              align-items: flex-start;
              gap: 20px;
            }
            
            .progress-overview {
              width: 100%;
              justify-content: space-between;
            }
            
            .requirements-grid {
              grid-template-columns: 1fr;
            }
            
            .timeline-actions {
              flex-direction: column;
            }
            
            .action-btn {
              width: 100%;
              justify-content: center;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Certification2;