import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard1 = () => {
  // Cement Company Data
  const [emissionsData] = useState({
    totalEmissions: '45,800 tCO₂e',
    scope1: '12,500 tCO₂e',
    scope2: '8,300 tCO₂e',
    scope3: '25,000 tCO₂e',
    reductionTarget: '30% by 2030',
    currentReduction: '12',
    certificationStatus: 'Pending',
    hotspots: [
      { name: 'Raw Material Transport', emissions: 8500, reduction: 15 },
      { name: 'Clinker Production', emissions: 22000, reduction: 25 },
      { name: 'Packaging', emissions: 5200, reduction: 40 },
      { name: 'Electricity Usage', emissions: 4100, reduction: 20 },
    ]
  });

  // Monthly emissions data
  const monthlyEmissions = [
    { month: 'Jan', value: 3850 },
    { month: 'Feb', value: 3970 },
    { month: 'Mar', value: 4080 },
    { month: 'Apr', value: 4210 },
    { month: 'May', value: 4150 },
    { month: 'Jun', value: 3800 },
    { month: 'Jul', value: 3550 },
    { month: 'Aug', value: 3450 },
    { month: 'Sep', value: 3360 },
    { month: 'Oct', value: 3280 },
    { month: 'Nov', value: 3200 },
    { month: 'Dec', value: 3110 },
  ];

  const recommendations = [
    'Switch to alternative fuels in kilns',
    'Optimize transport routes',
    'Use recycled packaging materials',
    'Implement carbon capture technology',
    'Source raw materials locally'
  ];

  // Progress calculation
  const progressWidth = (parseFloat(emissionsData.currentReduction) / 30) * 100;

  // Colors
  const colors = {
    primary: '#6B7280',
    secondary: '#D1D5DB',
    scope1: '#EF4444',
    scope2: '#F59E0B',
    scope3: '#3B82F6',
    success: '#10B981',
    background: '#F9FAFB',
    card: '#FFFFFF',
    text: '#1F2937',
    accent: '#9CA3AF'
  };

  // Find max value for bar chart scaling
  const maxMonthlyValue = Math.max(...monthlyEmissions.map(m => m.value));
  
  // Calculate bar heights (0-100%)
  const monthlyEmissionsWithHeights = monthlyEmissions.map(item => ({
    ...item,
    height: (item.value / maxMonthlyValue) * 100
  }));

  // Pie chart data
  const pieChartData = [
    { name: 'Scope 1', value: 12500, color: colors.scope1, percentage: 27.3 },
    { name: 'Scope 2', value: 8300, color: colors.scope2, percentage: 18.1 },
    { name: 'Scope 3', value: 25000, color: colors.scope3, percentage: 54.6 },
  ];

  // Calculate pie chart segments
  const calculatePieSegments = () => {
    const total = 45800;
    let currentAngle = 0;
    return pieChartData.map(item => {
      const percentage = (item.value / total) * 100;
      const angle = (percentage / 100) * 360;
      const segment = {
        ...item,
        startAngle: currentAngle,
        endAngle: currentAngle + angle
      };
      currentAngle += angle;
      return segment;
    });
  };

  const pieSegments = calculatePieSegments();

  return (
    <div style={styles.dashboard}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.headerTitle}>🏭 Cement Corp Ltd - Carbon Dashboard</h1>
          <p style={styles.headerSubtitle}>Monitoring Scope 1, 2 & 3 Emissions</p>
        </div>
        <div style={styles.statusBadge}>
          Last Updated: Today, 10:30 AM
        </div>
      </div>
      
      {/* Quick Stats */}
      <div style={styles.statsContainer}>
        {[
          { title: 'Total Emissions', value: emissionsData.totalEmissions, label: 'Annual Carbon Footprint', color: colors.primary },
          { title: 'Scope 1 Emissions', value: emissionsData.scope1, label: 'Direct Emissions', color: colors.scope1 },
          { title: 'Scope 2 Emissions', value: emissionsData.scope2, label: 'Indirect Energy', color: colors.scope2 },
          { title: 'Scope 3 Emissions', value: emissionsData.scope3, label: 'Supply Chain', color: colors.scope3 },
        ].map((stat, index) => (
          <div key={index} style={{...styles.statCard, borderTopColor: stat.color}}>
            <div style={styles.statHeader}>
              <div style={{...styles.statIcon, backgroundColor: `${stat.color}20`}}>
                {index === 0 ? '📊' : index === 1 ? '🏭' : index === 2 ? '⚡' : '🔗'}
              </div>
              <h3 style={styles.statTitle}>{stat.title}</h3>
            </div>
            <div style={styles.statValue}>{stat.value}</div>
            <div style={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
      
      {/* Charts Section */}
      <div style={styles.chartsGrid}>
        {/* Line/Bar Chart - Monthly Trend */}
        <div style={styles.chartCard}>
          <h2 style={styles.chartTitle}>Monthly Emissions Trend</h2>
          <div style={styles.barChartContainer}>
            <div style={styles.barChart}>
              {monthlyEmissionsWithHeights.map((item, index) => (
                <div key={index} style={styles.barChartItem}>
                  <div 
                    style={styles.bar}
                    title={`${item.month}: ${item.value.toLocaleString()} tCO₂e`}
                  >
                    <div 
                      style={{
                        ...styles.barFill,
                        height: `${item.height}%`,
                        backgroundColor: item.value > 4000 ? colors.scope1 : 
                                        item.value > 3500 ? colors.scope2 : colors.success
                      }}
                    />
                  </div>
                  <div style={styles.barLabel}>{item.month}</div>
                  <div style={styles.barValue}>{item.value.toLocaleString()}</div>
                </div>
              ))}
            </div>
            <div style={styles.yAxis}>
              <div>4,500</div>
              <div>4,000</div>
              <div>3,500</div>
              <div>3,000</div>
              <div>2,500</div>
            </div>
          </div>
          <div style={styles.chartLegend}>
            <div style={styles.legendItem}>
              <div style={{...styles.legendColor, backgroundColor: colors.scope1}}></div>
              <span>High Emissions (&gt;4000)</span>
            </div>
            <div style={styles.legendItem}>
              <div style={{...styles.legendColor, backgroundColor: colors.scope2}}></div>
              <span>Medium Emissions</span>
            </div>
            <div style={styles.legendItem}>
              <div style={{...styles.legendColor, backgroundColor: colors.success}}></div>
              <span>Low Emissions (&lt;3500)</span>
            </div>
          </div>
        </div>
        
        {/* Pie Chart - Emissions Breakdown */}
        <div style={styles.chartCard}>
          <h2 style={styles.chartTitle}>Emissions Breakdown</h2>
          <div style={styles.pieChartContainer}>
            <div style={styles.pieChart}>
              {pieSegments.map((segment, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.pieSegment,
                    background: `conic-gradient(
                      transparent 0deg ${segment.startAngle}deg,
                      ${segment.color} ${segment.startAngle}deg ${segment.endAngle}deg,
                      transparent ${segment.endAngle}deg 360deg
                    )`
                  }}
                />
              ))}
              <div style={styles.pieCenter}>
                <div style={styles.pieCenterText}>Total</div>
                <div style={styles.pieCenterValue}>45,800</div>
                <div style={styles.pieCenterUnit}>tCO₂e</div>
              </div>
            </div>
            <div style={styles.pieLegend}>
              {pieChartData.map((item, index) => (
                <div key={index} style={styles.pieLegendItem}>
                  <div style={{...styles.pieLegendColor, backgroundColor: item.color}}></div>
                  <div style={styles.pieLegendText}>
                    <div style={styles.pieLegendName}>{item.name}</div>
                    <div style={styles.pieLegendValue}>{item.value.toLocaleString()} tCO₂e ({item.percentage}%)</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Hotspots and Recommendations */}
      <div style={styles.contentGrid}>
        {/* Emission Hotspots */}
        <div style={styles.contentCard}>
          <h2 style={styles.contentTitle}>Emission Hotspots</h2>
          <div style={styles.hotspotsList}>
            {emissionsData.hotspots.map((hotspot, index) => (
              <div key={index} style={styles.hotspotItem}>
                <div style={styles.hotspotInfo}>
                  <div style={styles.hotspotName}>{hotspot.name}</div>
                  <div style={styles.hotspotEmissions}>{hotspot.emissions.toLocaleString()} tCO₂e</div>
                </div>
                <div style={styles.progressContainer}>
                  <div style={styles.progressBackground}>
                    <div 
                      style={{
                        ...styles.progressFill,
                        width: `${hotspot.reduction}%`,
                        backgroundColor: hotspot.reduction > 30 ? colors.success : 
                                        hotspot.reduction > 20 ? colors.scope2 : colors.scope1
                      }}
                    />
                  </div>
                  <div style={styles.progressLabel}>{hotspot.reduction}% reduction possible</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Recommendations */}
        <div style={styles.contentCard}>
          <h2 style={styles.contentTitle}>Reduction Recommendations</h2>
          <div style={styles.recommendationsList}>
            {recommendations.map((rec, index) => (
              <div key={index} style={styles.recommendationItem}>
                <div style={styles.recommendationBullet}>•</div>
                <div style={styles.recommendationText}>{rec}</div>
                <div style={{
                  ...styles.recommendationImpact,
                  backgroundColor: index === 0 || index === 3 ? `${colors.success}20` : `${colors.scope2}20`,
                  color: index === 0 || index === 3 ? colors.success : colors.scope2
                }}>
                  {index === 0 || index === 3 ? 'High Impact' : 'Medium Impact'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Progress and Certification */}
      <div style={styles.bottomGrid}>
        {/* Progress Card */}
        <div style={styles.progressCard}>
          <h3 style={styles.progressTitle}>Reduction Progress</h3>
          <div style={styles.progressBar}>
            <div 
              style={{
                ...styles.progressBarFill,
                width: `${progressWidth}%`
              }}
            />
          </div>
          <div style={styles.progressText}>
            <span style={styles.progressCurrent}>{emissionsData.currentReduction}% achieved</span>
            <span style={styles.progressTarget}>Target: {emissionsData.reductionTarget}</span>
          </div>
        </div>
        
        {/* Certification Status */}
        <div style={styles.certificationCard}>
          <div style={styles.certificationHeader}>
            <div style={styles.certificationIcon}>📋</div>
            <div>
              <h3 style={styles.certificationTitle}>Certification Status</h3>
              <div style={styles.certificationStatus}>{emissionsData.certificationStatus}</div>
            </div>
          </div>
          <p style={styles.certificationText}>Complete Scope 3 reporting for certification</p>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div style={styles.actionsContainer}>
        <Link to="/upload-data1" style={styles.primaryBtn}>📤 Upload New Data</Link>
        <Link to="/emissions-report1" style={styles.secondaryBtn}>📊 Generate Report</Link>
        <Link to="/certification1" style={styles.successBtn}>🏆 Apply for Certification</Link>
      </div>
    </div>
  );
};

// Styles
const styles = {
  dashboard: {
    backgroundColor: '#F9FAFB',
    minHeight: '100vh',
    padding: '20px',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  },
  header: {
    backgroundColor: '#FFFFFF',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    marginBottom: '24px',
    borderLeft: '6px solid #6B7280',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerContent: {
    flex: 1
  },
  headerTitle: {
    margin: 0,
    color: '#1F2937',
    fontSize: '28px',
    fontWeight: 700
  },
  headerSubtitle: {
    margin: '8px 0 0',
    color: '#6B7280',
    fontSize: '16px'
  },
  statusBadge: {
    backgroundColor: '#D1D5DB',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: 600,
    color: '#1F2937'
  },
  statsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginBottom: '30px'
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    borderTop: '4px solid',
    transition: 'transform 0.2s'
  },
  statHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px'
  },
  statIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '12px',
    fontSize: '20px'
  },
  statTitle: {
    margin: 0,
    fontSize: '14px',
    color: '#6B7280',
    fontWeight: 600
  },
  statValue: {
    fontSize: '32px',
    fontWeight: 700,
    color: '#1F2937',
    marginBottom: '4px'
  },
  statLabel: {
    fontSize: '14px',
    color: '#9CA3AF'
  },
  chartsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
    gap: '24px',
    marginBottom: '30px'
  },
  chartCard: {
    backgroundColor: '#FFFFFF',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
  },
  chartTitle: {
    margin: '0 0 20px 0',
    color: '#1F2937',
    fontSize: '20px',
    fontWeight: 600
  },
  barChartContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '20px',
    height: '250px',
    padding: '20px 0'
  },
  barChart: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: '100%'
  },
  barChartItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '40px'
  },
  bar: {
    width: '30px',
    height: '100%',
    backgroundColor: '#E5E7EB',
    borderRadius: '4px 4px 0 0',
    position: 'relative',
    overflow: 'hidden'
  },
  barFill: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    transition: 'height 0.3s ease',
    borderRadius: '4px 4px 0 0'
  },
  barLabel: {
    marginTop: '8px',
    fontSize: '12px',
    color: '#6B7280',
    fontWeight: 600
  },
  barValue: {
    fontSize: '11px',
    color: '#9CA3AF',
    marginTop: '4px'
  },
  yAxis: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    fontSize: '12px',
    color: '#6B7280',
    padding: '10px 0'
  },
  chartLegend: {
    display: 'flex',
    gap: '20px',
    marginTop: '20px',
    justifyContent: 'center'
  },
  legendItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: '#6B7280'
  },
  legendColor: {
    width: '12px',
    height: '12px',
    borderRadius: '2px'
  },
  pieChartContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
    height: '250px'
  },
  pieChart: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    position: 'relative',
    backgroundColor: '#E5E7EB'
  },
  pieSegment: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%'
  },
  pieCenter: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100px',
    height: '100px',
    backgroundColor: '#FFFFFF',
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  },
  pieCenterText: {
    fontSize: '12px',
    color: '#9CA3AF'
  },
  pieCenterValue: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#1F2937'
  },
  pieCenterUnit: {
    fontSize: '10px',
    color: '#9CA3AF'
  },
  pieLegend: {
    flex: 1
  },
  pieLegendItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px'
  },
  pieLegendColor: {
    width: '16px',
    height: '16px',
    borderRadius: '4px'
  },
  pieLegendText: {
    flex: 1
  },
  pieLegendName: {
    fontSize: '14px',
    color: '#1F2937',
    fontWeight: 600
  },
  pieLegendValue: {
    fontSize: '12px',
    color: '#6B7280'
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '24px',
    marginBottom: '30px'
  },
  contentCard: {
    backgroundColor: '#FFFFFF',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
  },
  contentTitle: {
    margin: '0 0 20px 0',
    color: '#1F2937',
    fontSize: '20px',
    fontWeight: 600
  },
  hotspotsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  hotspotItem: {
    padding: '16px',
    backgroundColor: '#F9FAFB',
    borderRadius: '8px',
    border: '1px solid #E5E7EB'
  },
  hotspotInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px'
  },
  hotspotName: {
    fontWeight: 600,
    color: '#1F2937',
    fontSize: '14px'
  },
  hotspotEmissions: {
    fontWeight: 700,
    color: '#6B7280',
    fontSize: '16px'
  },
  progressContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  progressBackground: {
    flex: 1,
    height: '8px',
    backgroundColor: '#E5E7EB',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    borderRadius: '4px'
  },
  progressLabel: {
    fontSize: '12px',
    color: '#10B981',
    fontWeight: 600,
    minWidth: '120px'
  },
  recommendationsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  recommendationItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px',
    backgroundColor: '#F9FAFB',
    borderRadius: '8px',
    border: '1px solid #E5E7EB'
  },
  recommendationBullet: {
    fontSize: '20px',
    color: '#10B981'
  },
  recommendationText: {
    flex: 1,
    color: '#1F2937',
    fontSize: '14px'
  },
  recommendationImpact: {
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '11px',
    fontWeight: 600
  },
  bottomGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginBottom: '30px'
  },
  progressCard: {
    backgroundColor: '#FFFFFF',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
  },
  progressTitle: {
    margin: '0 0 20px 0',
    color: '#1F2937',
    fontSize: '18px',
    fontWeight: 600
  },
  progressBar: {
    height: '12px',
    backgroundColor: '#E5E7EB',
    borderRadius: '6px',
    overflow: 'hidden',
    marginBottom: '12px'
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#10B981',
    borderRadius: '6px',
    transition: 'width 1s ease'
  },
  progressText: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    color: '#6B7280'
  },
  progressCurrent: {
    color: '#10B981',
    fontWeight: 600
  },
  progressTarget: {
    fontWeight: 600
  },
  certificationCard: {
    backgroundColor: '#FFFFFF',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    borderLeft: '4px solid #10B981'
  },
  certificationHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '12px'
  },
  certificationIcon: {
    fontSize: '24px'
  },
  certificationTitle: {
    margin: 0,
    color: '#1F2937',
    fontSize: '18px',
    fontWeight: 600
  },
  certificationStatus: {
    display: 'inline-block',
    padding: '4px 12px',
    backgroundColor: '#FEF3C7',
    color: '#D97706',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: 600,
    marginTop: '4px'
  },
  certificationText: {
    margin: 0,
    color: '#6B7280',
    fontSize: '14px'
  },
  actionsContainer: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  primaryBtn: {
    backgroundColor: '#6B7280',
    color: '#FFFFFF',
    padding: '14px 28px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '14px',
    transition: 'background-color 0.2s',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px'
  },
  secondaryBtn: {
    backgroundColor: '#3B82F6',
    color: '#FFFFFF',
    padding: '14px 28px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '14px',
    transition: 'background-color 0.2s',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px'
  },
  successBtn: {
    backgroundColor: '#10B981',
    color: '#FFFFFF',
    padding: '14px 28px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '14px',
   transition: 'background-color 0.2s',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px'
  }
};

export default Dashboard1;