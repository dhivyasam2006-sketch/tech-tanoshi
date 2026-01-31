import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard2 = () => {
  // Cosmetic Company Data
  const emissionsData = {
    totalEmissions: '18,500 tCO₂e',
    scope1: '2,800 tCO₂e',
    scope2: '3,200 tCO₂e',
    scope3: '12,500 tCO₂e',
    reductionTarget: '40% by 2030',
    currentReduction: '18',
    certificationStatus: 'In Review',
    hotspots: [
      { name: 'Plastic Packaging', emissions: 6800, reduction: 50 },
      { name: 'Ingredient Sourcing', emissions: 4200, reduction: 30 },
      { name: 'Product Transport', emissions: 3500, reduction: 35 },
      { name: 'Manufacturing', emissions: 2200, reduction: 25 },
      { name: 'Office Operations', emissions: 1300, reduction: 40 },
    ]
  };

  const recommendations = [
    'Switch to biodegradable packaging',
    'Source organic ingredients locally',
    'Optimize distribution network',
    'Use renewable energy in production',
    'Implement recycling program'
  ];

  // Updated Cosmetic Industry Color Palette
  const cosmeticColors = {
    // Main brand colors - Luxurious cosmetic palette
    primary: '#B76E79', // Rose gold / muted rose
    secondary: '#F5E6E8', // Soft blush pink
    accent: '#D4A6B6', // Dusty rose
    darkAccent: '#8A5A6D', // Deep mauve
    
    // Scope colors - Soft gradient
    scope1: '#E8B4BC', // Soft pink
    scope2: '#C9A8B8', // Lavender pink
    scope3: '#A68BA9', // Muted purple
    
    // Supporting colors
    success: '#88B7A5', // Sage green
    warning: '#E6B89C', // Peach / apricot
    info: '#9AB7D3', // Soft blue
    
    // Background and neutrals
    background: '#FDF8F9', // Very pale blush
    card: '#FFFFFF',
    text: '#4A3F4A', // Soft dark purple
    lightText: '#8C7B8C', // Light purple-gray
    border: '#F0E1E6'
  };

  // Progress calculation
  const progressWidth = (parseInt(emissionsData.currentReduction) / 40) * 100;

  // Monthly emissions data for bar chart
  const monthlyData = [
    { month: 'Jan', value: 1650 },
    { month: 'Feb', value: 1720 },
    { month: 'Mar', value: 1680 },
    { month: 'Apr', value: 1620 },
    { month: 'May', value: 1580 },
    { month: 'Jun', value: 1520 },
    { month: 'Jul', value: 1480 },
    { month: 'Aug', value: 1450 },
    { month: 'Sep', value: 1420 },
    { month: 'Oct', value: 1380 },
    { month: 'Nov', value: 1350 },
    { month: 'Dec', value: 1320 },
  ];

  // Find max for bar scaling
  const maxValue = Math.max(...monthlyData.map(d => d.value));

  // Pie chart data for emissions breakdown
  const pieData = [
    { name: 'Scope 1', value: 2800, color: cosmeticColors.scope1 },
    { name: 'Scope 2', value: 3200, color: cosmeticColors.scope2 },
    { name: 'Scope 3', value: 12500, color: cosmeticColors.scope3 },
  ];

  // Calculate pie segments
  const totalEmissions = 18500;
  let currentAngle = 0;
  const pieSegments = pieData.map(item => {
    const percentage = (item.value / totalEmissions) * 100;
    const angle = (percentage / 100) * 360;
    const segment = {
      ...item,
      percentage: percentage.toFixed(1),
      startAngle: currentAngle,
      endAngle: currentAngle + angle
    };
    currentAngle += angle;
    return segment;
  });

  return (
    <div style={{
      backgroundColor: cosmeticColors.background,
      minHeight: '100vh',
      padding: '20px',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: cosmeticColors.card,
        padding: '30px',
        borderRadius: '15px',
        boxShadow: '0 6px 20px rgba(183, 110, 121, 0.08)',
        marginBottom: '30px',
        borderLeft: '6px solid #B76E79',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #FFFFFF 0%, #FDF8F9 100%)'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          background: `radial-gradient(circle, ${cosmeticColors.primary}15 0%, transparent 70%)`,
          borderRadius: '50%'
        }}></div>
        <h1 style={{
          margin: '0',
          color: cosmeticColors.text,
          fontSize: '32px',
          fontWeight: '700',
          background: `linear-gradient(45deg, ${cosmeticColors.primary}, ${cosmeticColors.darkAccent})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '-0.5px'
        }}>
          💄 Cosmetic Beauty Inc - Carbon Dashboard
        </h1>
        <p style={{
          margin: '10px 0 0',
          color: cosmeticColors.lightText,
          fontSize: '16px',
          fontWeight: '500'
        }}>
          Monitoring Scope 1, 2 & 3 Emissions • Sustainable Beauty Initiative
        </p>
      </div>

      {/* Quick Stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginBottom: '30px'
      }}>
        {[
          { 
            title: 'Total Emissions', 
            value: emissionsData.totalEmissions, 
            label: 'Annual Carbon Footprint',
            color: cosmeticColors.primary,
            icon: '🌿'
          },
          { 
            title: 'Scope 1 Emissions', 
            value: emissionsData.scope1, 
            label: 'Direct Emissions',
            color: cosmeticColors.scope1,
            icon: '🏭'
          },
          { 
            title: 'Scope 2 Emissions', 
            value: emissionsData.scope2, 
            label: 'Indirect Energy',
            color: cosmeticColors.scope2,
            icon: '⚡'
          },
          { 
            title: 'Scope 3 Emissions', 
            value: emissionsData.scope3, 
            label: 'Supply Chain',
            color: cosmeticColors.scope3,
            icon: '🔗'
          },
        ].map((stat, index) => (
          <div key={index} style={{
            backgroundColor: cosmeticColors.card,
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 4px 15px rgba(183, 110, 121, 0.05)',
            borderTop: `4px solid ${stat.color}`,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
            border: `1px solid ${cosmeticColors.border}`,
            background: 'linear-gradient(to bottom, #FFFFFF, #FDF8F9)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 12px 30px rgba(183, 110, 121, 0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(183, 110, 121, 0.05)';
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <div style={{
                width: '50px',
                height: '50px',
                backgroundColor: `${stat.color}15`,
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '15px',
                fontSize: '24px',
                border: `1px solid ${stat.color}30`
              }}>
                {stat.icon}
              </div>
              <h3 style={{
                margin: '0',
                fontSize: '14px',
                color: cosmeticColors.lightText,
                fontWeight: '600',
                letterSpacing: '0.5px'
              }}>
                {stat.title}
              </h3>
            </div>
            <div style={{
              fontSize: '32px',
              fontWeight: '700',
              color: cosmeticColors.text,
              marginBottom: '5px'
            }}>
              {stat.value}
            </div>
            <div style={{
              fontSize: '14px',
              color: cosmeticColors.lightText,
              opacity: '0.8'
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
        gap: '25px',
        marginBottom: '30px'
      }}>
        {/* Bar Chart - Monthly Trend */}
        <div style={{
          backgroundColor: cosmeticColors.card,
          padding: '30px',
          borderRadius: '15px',
          boxShadow: '0 4px 15px rgba(183, 110, 121, 0.05)',
          border: `1px solid ${cosmeticColors.border}`
        }}>
          <h2 style={{
            margin: '0 0 25px 0',
            color: cosmeticColors.text,
            fontSize: '22px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{
              width: '36px',
              height: '36px',
              backgroundColor: `${cosmeticColors.primary}15`,
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              📈
            </span>
            Monthly Emissions Trend
          </h2>
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            height: '250px',
            gap: '15px',
            padding: '20px',
            border: `1px solid ${cosmeticColors.border}`,
            borderRadius: '12px',
            backgroundColor: `${cosmeticColors.background}`
          }}>
            {monthlyData.map((item, index) => {
              const height = (item.value / maxValue) * 100;
              return (
                <div key={index} style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '100%'
                }}>
                  <div style={{
                    width: '30px',
                    height: `${height}%`,
                    background: item.value > 1600 ? 
                      `linear-gradient(to top, ${cosmeticColors.scope1}, ${cosmeticColors.primary})` :
                      item.value > 1500 ? 
                      `linear-gradient(to top, ${cosmeticColors.scope2}, ${cosmeticColors.accent})` :
                      `linear-gradient(to top, ${cosmeticColors.success}, #A8D5BA)`,
                    borderRadius: '6px 6px 0 0',
                    transition: 'height 0.5s ease',
                    position: 'relative',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '-25px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: cosmeticColors.text,
                      backgroundColor: cosmeticColors.card,
                      padding: '2px 6px',
                      borderRadius: '4px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                      whiteSpace: 'nowrap',
                      border: `1px solid ${cosmeticColors.border}`
                    }}>
                      {item.value.toLocaleString()}
                    </div>
                  </div>
                  <div style={{
                    marginTop: '10px',
                    fontSize: '13px',
                    fontWeight: '600',
                    color: cosmeticColors.lightText
                  }}>
                    {item.month}
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{
            display: 'flex',
            gap: '20px',
            marginTop: '20px',
            justifyContent: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '12px',
                height: '12px',
                background: `linear-gradient(45deg, ${cosmeticColors.scope1}, ${cosmeticColors.primary})`,
                borderRadius: '2px'
              }}></div>
              <span style={{ fontSize: '13px', color: cosmeticColors.text }}>High (&gt;1600)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '12px',
                height: '12px',
                background: `linear-gradient(45deg, ${cosmeticColors.scope2}, ${cosmeticColors.accent})`,
                borderRadius: '2px'
              }}></div>
              <span style={{ fontSize: '13px', color: cosmeticColors.text }}>Medium</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '12px',
                height: '12px',
                background: `linear-gradient(45deg, ${cosmeticColors.success}, #A8D5BA)`,
                borderRadius: '2px'
              }}></div>
              <span style={{ fontSize: '13px', color: cosmeticColors.text }}>Low (&lt;1500)</span>
            </div>
          </div>
        </div>

        {/* Pie Chart - Emissions Breakdown */}
        <div style={{
          backgroundColor: cosmeticColors.card,
          padding: '30px',
          borderRadius: '15px',
          boxShadow: '0 4px 15px rgba(183, 110, 121, 0.05)',
          border: `1px solid ${cosmeticColors.border}`
        }}>
          <h2 style={{
            margin: '0 0 25px 0',
            color: cosmeticColors.text,
            fontSize: '22px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{
              width: '36px',
              height: '36px',
              backgroundColor: `${cosmeticColors.accent}15`,
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              🥧
            </span>
            Emissions Breakdown
          </h2>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            height: '250px'
          }}>
            <div style={{
              position: 'relative',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: `conic-gradient(
                ${cosmeticColors.scope1} 0% ${(pieSegments[0].percentage / 100) * 360}deg,
                ${cosmeticColors.scope2} 0% ${(pieSegments[1].percentage / 100) * 360}deg,
                ${cosmeticColors.scope3} 0% ${(pieSegments[2].percentage / 100) * 360}deg
              )`,
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
            }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100px',
                height: '100px',
                backgroundColor: cosmeticColors.card,
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(183, 110, 121, 0.1)',
                border: `1px solid ${cosmeticColors.border}`
              }}>
                <div style={{ fontSize: '12px', color: cosmeticColors.lightText }}>Total</div>
                <div style={{ fontSize: '22px', fontWeight: '700', color: cosmeticColors.text }}>18.5K</div>
                <div style={{ fontSize: '11px', color: cosmeticColors.lightText }}>tCO₂e</div>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              {pieSegments.map((segment, index) => (
                <div key={index} style={{
                  marginBottom: '20px',
                  padding: '15px',
                  backgroundColor: `${segment.color}10`,
                  borderRadius: '10px',
                  borderLeft: `4px solid ${segment.color}`,
                  border: `1px solid ${cosmeticColors.border}`
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontWeight: '600', color: cosmeticColors.text }}>{segment.name}</div>
                    <div style={{
                      backgroundColor: segment.color,
                      color: cosmeticColors.card,
                      padding: '4px 10px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}>
                      {segment.percentage}%
                    </div>
                  </div>
                  <div style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: cosmeticColors.text,
                    marginTop: '5px'
                  }}>
                    {segment.value.toLocaleString()} tCO₂e
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hotspots and Recommendations */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '25px',
        marginBottom: '30px'
      }}>
        {/* Emission Hotspots */}
        <div style={{
          backgroundColor: cosmeticColors.card,
          padding: '30px',
          borderRadius: '15px',
          boxShadow: '0 4px 15px rgba(183, 110, 121, 0.05)',
          border: `1px solid ${cosmeticColors.border}`
        }}>
          <h2 style={{
            margin: '0 0 25px 0',
            color: cosmeticColors.text,
            fontSize: '22px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{
              width: '36px',
              height: '36px',
              backgroundColor: `${cosmeticColors.warning}15`,
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              🔥
            </span>
            Emission Hotspots
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {emissionsData.hotspots.map((hotspot, index) => (
              <div key={index} style={{
                backgroundColor: cosmeticColors.background,
                padding: '20px',
                borderRadius: '12px',
                border: `1px solid ${cosmeticColors.border}`,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = `${cosmeticColors.secondary}`;
                e.currentTarget.style.transform = 'translateX(5px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(183, 110, 121, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = cosmeticColors.background;
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ fontWeight: '600', color: cosmeticColors.text, fontSize: '15px' }}>
                    {hotspot.name}
                  </div>
                  <div style={{
                    fontWeight: '700',
                    color: cosmeticColors.primary,
                    fontSize: '16px'
                  }}>
                    {hotspot.emissions.toLocaleString()} tCO₂e
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ flex: 1, height: '10px', backgroundColor: cosmeticColors.secondary, borderRadius: '5px', overflow: 'hidden' }}>
                    <div style={{
                      width: `${hotspot.reduction}%`,
                      height: '100%',
                      background: `linear-gradient(90deg, ${cosmeticColors.success}, #A8D5BA)`,
                      borderRadius: '5px',
                      boxShadow: '0 1px 3px rgba(136, 183, 165, 0.3)'
                    }}></div>
                  </div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: cosmeticColors.success,
                    minWidth: '140px'
                  }}>
                    {hotspot.reduction}% reduction possible
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div style={{
          backgroundColor: cosmeticColors.card,
          padding: '30px',
          borderRadius: '15px',
          boxShadow: '0 4px 15px rgba(183, 110, 121, 0.05)',
          border: `1px solid ${cosmeticColors.border}`
        }}>
          <h2 style={{
            margin: '0 0 25px 0',
            color: cosmeticColors.text,
            fontSize: '22px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{
              width: '36px',
              height: '36px',
              backgroundColor: `${cosmeticColors.info}15`,
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              💡
            </span>
            Reduction Recommendations
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {recommendations.map((rec, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                padding: '15px',
                backgroundColor: cosmeticColors.background,
                borderRadius: '10px',
                border: `1px solid ${cosmeticColors.border}`,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = `${cosmeticColors.secondary}`;
                e.currentTarget.style.transform = 'translateX(5px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(183, 110, 121, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = cosmeticColors.background;
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{
                  width: '30px',
                  height: '30px',
                  background: `linear-gradient(135deg, ${cosmeticColors.success}, #A8D5BA)`,
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '15px',
                  color: cosmeticColors.card,
                  fontWeight: '600',
                  fontSize: '14px',
                  boxShadow: '0 2px 4px rgba(136, 183, 165, 0.3)'
                }}>
                  {index + 1}
                </div>
                <div style={{
                  flex: 1,
                  color: cosmeticColors.text,
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  {rec}
                </div>
                <div style={{
                  fontSize: '20px',
                  color: cosmeticColors.success,
                  opacity: '0.7'
                }}>
                  →
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress and Certification */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '25px',
        marginBottom: '30px'
      }}>
        {/* Progress Card */}
        <div style={{
          backgroundColor: cosmeticColors.card,
          padding: '30px',
          borderRadius: '15px',
          boxShadow: '0 4px 15px rgba(183, 110, 121, 0.05)',
          border: `1px solid ${cosmeticColors.border}`
        }}>
          <h3 style={{
            margin: '0 0 20px 0',
            color: cosmeticColors.text,
            fontSize: '20px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{
              width: '32px',
              height: '32px',
              backgroundColor: `${cosmeticColors.success}15`,
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              📊
            </span>
            Reduction Progress
          </h3>
          <div style={{
            height: '14px',
            backgroundColor: cosmeticColors.secondary,
            borderRadius: '7px',
            overflow: 'hidden',
            marginBottom: '15px',
            border: `1px solid ${cosmeticColors.border}`
          }}>
            <div style={{
              width: `${progressWidth}%`,
              height: '100%',
              background: `linear-gradient(90deg, ${cosmeticColors.success}, #A8D5BA)`,
              borderRadius: '7px',
              transition: 'width 1s ease',
              boxShadow: '0 1px 3px rgba(136, 183, 165, 0.4)'
            }}></div>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                backgroundColor: cosmeticColors.success,
                borderRadius: '50%',
                boxShadow: '0 1px 3px rgba(136, 183, 165, 0.4)'
              }}></div>
              <span style={{
                fontSize: '16px',
                fontWeight: '700',
                color: cosmeticColors.success
              }}>
                {emissionsData.currentReduction}% achieved
              </span>
            </div>
            <span style={{
              fontSize: '14px',
              fontWeight: '600',
              color: cosmeticColors.lightText
            }}>
              Target: {emissionsData.reductionTarget}
            </span>
          </div>
        </div>

        {/* Certification Status */}
        <div style={{
          backgroundColor: cosmeticColors.card,
          padding: '30px',
          borderRadius: '15px',
          boxShadow: '0 4px 15px rgba(183, 110, 121, 0.05)',
          borderLeft: `6px solid ${cosmeticColors.warning}`,
          border: `1px solid ${cosmeticColors.border}`
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '15px' }}>
            <div style={{
              width: '60px',
              height: '60px',
              backgroundColor: `${cosmeticColors.warning}15`,
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              border: `1px solid ${cosmeticColors.warning}30`
            }}>
              🏆
            </div>
            <div>
              <h3 style={{
                margin: '0 0 5px 0',
                color: cosmeticColors.text,
                fontSize: '20px',
                fontWeight: '600'
              }}>
                Certification Status
              </h3>
              <div style={{
                display: 'inline-block',
                padding: '6px 15px',
                backgroundColor: `${cosmeticColors.warning}20`,
                color: cosmeticColors.text,
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '600',
                border: `1px solid ${cosmeticColors.warning}30`
              }}>
                {emissionsData.certificationStatus}
              </div>
            </div>
          </div>
          <p style={{
            margin: '0',
            color: cosmeticColors.lightText,
            fontSize: '14px',
            lineHeight: '1.6'
          }}>
            Certification under government review • Expected completion: Q2 2024
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{
        display: 'flex',
        gap: '15px',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <Link to="/upload-data2" style={{
          backgroundColor: cosmeticColors.primary,
          color: cosmeticColors.card,
          padding: '16px 32px',
          borderRadius: '12px',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '14px',
          transition: 'all 0.3s ease',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          boxShadow: `0 4px 15px ${cosmeticColors.primary}30`,
          border: 'none',
          background: `linear-gradient(135deg, ${cosmeticColors.primary}, ${cosmeticColors.darkAccent})`
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = `0 8px 25px ${cosmeticColors.primary}40`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = `0 4px 15px ${cosmeticColors.primary}30`;
        }}>
          📤 Upload New Data
        </Link>
        
        <Link to="/emissions-report2" style={{
          backgroundColor: cosmeticColors.scope3,
          color: cosmeticColors.card,
          padding: '16px 32px',
          borderRadius: '12px',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '14px',
          transition: 'all 0.3s ease',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          boxShadow: `0 4px 15px ${cosmeticColors.scope3}30`,
          border: 'none',
          background: `linear-gradient(135deg, ${cosmeticColors.scope3}, ${cosmeticColors.darkAccent})`
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = `0 8px 25px ${cosmeticColors.scope3}40`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = `0 4px 15px ${cosmeticColors.scope3}30`;
        }}>
          📊 Generate Report
        </Link>
        
        <Link to="/certification2" style={{
          backgroundColor: cosmeticColors.success,
          color: cosmeticColors.card,
          padding: '16px 32px',
          borderRadius: '12px',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '14px',
          transition: 'all 0.3s ease',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          boxShadow: `0 4px 15px ${cosmeticColors.success}30`,
          border: 'none',
          background: `linear-gradient(135deg, ${cosmeticColors.success}, #7AB89C)`
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = `0 8px 25px ${cosmeticColors.success}40`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = `0 4px 15px ${cosmeticColors.success}30`;
        }}>
          🏆 Check Certification
        </Link>
      </div>
    </div>
  );
};

export default Dashboard2;