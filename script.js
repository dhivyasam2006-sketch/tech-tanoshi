// Company data for each category
const companyData = {
    "eco-friendly": [
        {
            id: 1,
            name: "VILVAH",
            industry: "Cosmetic Industry",
            description: "Produces solar panels and renewable energy solutions. Awarded 'Most Sustainable Company 2023'.",
            annualEmission: "85,000 tCO₂",
            emissionRate: "Low (62% below industry average)",
            scope1: "5,000 tCO₂",
            scope2: "1,000 tCO₂",
            scope3: "2,000 tCO₂",
            complianceScore: "12%",
            certifications: ["ISO 14001", "LEED Platinum", "Carbon Neutral Certified"],
            reductionTarget: "Net Zero by 2030",
            riskLevel: "low",
            status: " Non Compliant"
        },
        {
            id: 2,
            name: "EcoBuild Materials",
            industry: "Construction",
            description: "Manufactures sustainable building materials from recycled content. 80% less carbon than traditional materials.",
            annualEmission: "45,000 tCO₂",
            emissionRate: "Very Low (75% below industry average)",
            scope1: "5,000 tCO₂",
            scope2: "500 tCO₂",
            scope3: "2,000 tCO₂",
            complianceScore: "14%",
            certifications: ["Cradle to Cradle", "Green Building Council"],
            reductionTarget: "50% reduction by 2025",
            riskLevel: "low",
            status: "Non Compliant"
        },
        {
            id: 3,
            name: "BioFoods Organic",
            industry: "Agriculture",
            description: "Organic food production with regenerative farming practices. Zero chemical fertilizers used.",
            annualEmission: "28,000 tCO₂",
            emissionRate: "Low (68% below industry average)",
            scope1: "3,000 tCO₂",
            scope2: "2,000 tCO₂",
            scope3: "2,000 tCO₂",
            complianceScore: "28%",
            certifications: ["USDA Organic", "Regenerative Organic Certified"],
            reductionTarget: "Carbon negative by 2028",
            riskLevel: "low",
            status: "Non Compliant"
        },
        {
            id: 4,
            name: "CleanWater Technologies",
            industry: "Water Treatment",
            description: "Advanced water purification systems with minimal energy consumption. 90% water recycling rate.",
            annualEmission: "32,000 tCO₂",
            emissionRate: "Low (70% below industry average)",
            scope1: "4,000 tCO₂",
            scope2: "3,000 tCO₂",
            scope3: "2,000 tCO₂",
            complianceScore: "21%",
            certifications: ["ISO 14001", "Water Efficiency Certificate"],
            reductionTarget: "30% reduction by 2024",
            riskLevel: "low",
            status: "Non Compliant"
        },
        {
            id: 5,
            name: "SolarEdge Power",
            industry: "Energy",
            description: "Solar power generation and storage solutions. Powers 50,000 homes with renewable energy.",
            annualEmission: "52,000 tCO₂",
            emissionRate: "Low (65% below industry average)",
            scope1: "1,000 tCO₂",
            scope2: "2,000 tCO₂",
            scope3: "4,000 tCO₂",
            complianceScore: "13%",
            certifications: ["Renewable Energy Certified", "ISO 50001"],
            reductionTarget: "100% renewable by 2025",
            riskLevel: "low",
            status: "Non Compliant"
        }
    ],
    
    "max-emission": [
        {
            id: 1,
            name: "TATA Steel Limited",
            industry: "Manufacturing",
            description: "Large-scale steel production facility. One of the highest emitters in the region.",
            annualEmission: "1,250,000 tCO₂",
            emissionRate: "Very High (85% above industry average)",
            scope1: "250,000 tCO₂",
            scope2: "150,000 tCO₂",
            scope3: "850,000 tCO₂",
            complianceScore: "92%",
            violations: ["Exceeded emission limits 3 times", "Incomplete reporting", "Low data confidence"],
            penaltyStatus: "Under Review",
            actionRequired: "Immediate emission reduction plan",
            riskLevel: "high",
            status: "Max-Compliant"
        },
        {
            id: 2,
            name: "PowerGrid Energy",
            industry: "Energy",
            description: "Coal-fired power plant supplying 30% of regional electricity. High carbon intensity operations.",
            annualEmission: "1,850,000 tCO₂",
            emissionRate: "Extremely High (90% above industry average)",
            scope1: "1,200,000 tCO₂",
            scope2: "150,000 tCO₂",
            scope3: "500,000 tCO₂",
            complianceScore: "88%",
            violations: ["Multiple compliance failures", "Inadequate pollution controls", "Late reporting"],
            penaltyStatus: "Fines Issued",
            actionRequired: "Plant modernization and fuel switching",
            riskLevel: "high",
            status: "Max-Compliant"
        },
        {
            id: 3,
            name: "ChemiSolutions Corp",
            industry: "Chemicals",
            description: "Chemical manufacturing with high-energy processes and complex supply chain emissions.",
            annualEmission: "1,750,000 tCO₂",
            emissionRate: "Very High (72% above industry average)",
            scope1: "750,000 tCO₂",
            scope2: "200,000 tCO₂",
            scope3: "800,000 tCO₂",
            complianceScore: "99%",
            violations: ["Scope 3 underreporting", "Waste disposal issues", "Data inconsistencies"],
            penaltyStatus: "Warning Issued",
            actionRequired: "Complete emissions audit required",
            riskLevel: "high",
            status: "Max-Compliant"
        },
        {
            id: 4,
            name: "AutoMotive Manufacturers",
            industry: "Automotive",
            description: "Large automotive assembly plant with extensive supply chain emissions.",
            annualEmission: "2,100,000 tCO₂",
            emissionRate: "Extremely High (85% above industry average)",
            scope1: "650,000 tCO₂",
            scope2: "250,000 tCO₂",
            scope3: "1,200,000 tCO₂",
            complianceScore: "95%",
            violations: ["Supply chain reporting gaps", "Missing transport data", "Incomplete Scope 3"],
            penaltyStatus: "Monitoring",
            actionRequired: "Supply chain decarbonization plan",
            riskLevel: "high",
            status: "Max-Compliant"
        },
        {
            id: 5,
            name: "CementWorks Global",
            industry: "Construction Materials",
            description: "Cement production facility with high process emissions from calcination.",
            annualEmission: "1,400,000 tCO₂",
            emissionRate: "Very High (95% above industry average)",
            scope1: "900,000 tCO₂",
            scope2: "150,000 tCO₂",
            scope3: "350,000 tCO₂",
            complianceScore: "85%",
            violations: ["Process emission miscalculation", "Fuel switching delayed", "Reporting delays"],
            penaltyStatus: "Compliance Notice",
            actionRequired: "Alternative fuel implementation",
            riskLevel: "high",
            status: "Max-Compliant"
        }
    ],
    
    "min-emission": [
        {
            id: 1,
            name: "hashes",
            industry: "IT Indusrty",
            description: "Cloud computing services powered by 100% renewable energy.",
            annualEmission: "15,000 tCO₂",
            emissionRate: "Minimal (85% below industry average)",
            scope1: "1,000 tCO₂",
            scope2: "1,000 tCO₂",
            scope3: "8500 tCO₂",
            complianceScore: "66%",
            efficiency: "64%",
            energySource: "100% Renewable",
            awards: ["Green Cloud Provider 2023", "Energy Star Partner"],
            riskLevel: "low",
            status: "Average"
        },
        {
            id: 2,
            name: "EcoPackaging Solutions",
            industry: "Packaging",
            description: "Produces biodegradable packaging from plant-based materials.",
            annualEmission: "18,000 tCO₂",
            emissionRate: "Very Low (82% below industry average)",
            scope1: "1,000 tCO₂",
            scope2: "500 tCO₂",
            scope3: "7,000 tCO₂",
            complianceScore: "65%",
            efficiency: "62%",
            materialSource: "100% Recycled/Plant-based",
            awards: ["Sustainable Packaging Award", "Circular Economy Champion"],
            riskLevel: "low",
            status: "Average"
        },
        {
            id: 3,
            name: "UrbanFarms Inc.",
            industry: "Agriculture",
            description: "Vertical farming with 95% less water and 90% less land than traditional farming.",
            annualEmission: "8,000 tCO₂",
            emissionRate: "Minimal (90% below industry average)",
            scope1: "500 tCO₂",
            scope2: "1,500 tCO₂",
            scope3: "6,000 tCO₂",
            complianceScore: "67%",
            efficiency: "68%",
            waterUsage: "95% Less than traditional",
            awards: ["Urban Innovation Award", "Climate Smart Agriculture"],
            riskLevel: "low",
            status: "Excellent"
        },
        {
            id: 4,
            name: "LightWave Electronics",
            industry: "Electronics",
            description: "Energy-efficient LED lighting and smart home devices.",
            annualEmission: "22,000 tCO₂",
            emissionRate: "Very Low (78% below industry average)",
            scope1: "3,000 tCO₂",
            scope2: "2,000 tCO₂",
            scope3: "4,000 tCO₂",
            complianceScore: "64%",
            efficiency: "61%",
            productEfficiency: "Energy Star Rated",
            awards: ["Energy Efficiency Leader", "Green Tech Innovation"],
            riskLevel: "low",
            status: "Excellent"
        },
        {
            id: 5,
            name: "CycleLogistics",
            industry: "Transportation",
            description: "Electric delivery vehicles and optimized route planning for minimal emissions.",
            annualEmission: "12,000 tCO₂",
            emissionRate: "Minimal (88% below industry average)",
            scope1: "2,000 tCO₂",
            scope2: "2,500 tCO₂",
            scope3: "7,500 tCO₂",
            complianceScore: "66%",
            efficiency: "65%",
            fleet: "100% Electric Vehicles",
            awards: ["Clean Transport Award", "EV Adoption Leader"],
            riskLevel: "low",
            status: "Excellent"
        }
    ],
    
    "medium-emission": [
        {
            id: 1,
            name: "TextileGlobal Ltd",
            industry: "Textile",
            description: "Textile manufacturing with moderate emissions. Implementing sustainability initiatives.",
            annualEmission: "68,000 tCO₂",
            emissionRate: "Medium (Industry average)",
            scope1: "12,000 tCO₂",
            scope2: "8,000 tCO₂",
            scope3: "48,000 tCO₂",
            complianceScore: "69%",
            improvementPlan: "Adopting renewable energy, improving supply chain transparency",
            timeline: "15% reduction target by 2025",
            riskLevel: "medium",
            status: "Needs Improvement"
        },
        {
            id: 2,
            name: "FoodProcess Inc.",
            industry: "Food Processing",
            description: "Medium-scale food processing with scope for efficiency improvements.",
            annualEmission: "92,000 tCO₂",
            emissionRate: "Medium (Slightly above average)",
            scope1: "22,000 tCO₂",
            scope2: "12,000 tCO₂",
            scope3: "58,000 tCO₂",
            complianceScore: "85%",
            improvementPlan: "Waste reduction, energy efficiency upgrades",
            timeline: "20% reduction target by 2026",
            riskLevel: "medium",
            status: "Compliant"
        },
        {
            id: 3,
            name: "PaperWorks Industries",
            industry: "Paper & Pulp",
            description: "Paper manufacturing using mixed virgin and recycled fibers.",
            annualEmission: "125,000 tCO₂",
            emissionRate: "Medium (Industry average)",
            scope1: "45,000 tCO₂",
            scope2: "20,000 tCO₂",
            scope3: "60,000 tCO₂",
            complianceScore: "72%",
            improvementPlan: "Increasing recycled content, biomass energy adoption",
            timeline: "25% reduction target by 2027",
            riskLevel: "medium",
            status: "Needs Improvement"
        },
        {
            id: 4,
            name: "PlastiForm Ltd",
            industry: "Plastics",
            description: "Plastic product manufacturing with recycling initiatives.",
            annualEmission: "85,000 tCO₂",
            emissionRate: "Medium (Slightly below average)",
            scope1: "15,000 tCO₂",
            scope2: "10,000 tCO₂",
            scope3: "60,000 tCO₂",
            complianceScore: "76%",
            improvementPlan: "Circular economy model, recycled materials",
            timeline: "30% reduction target by 2025",
            riskLevel: "medium",
            status: "Compliant"
        },
        {
            id: 5,
            name: "MediTech Devices",
            industry: "Medical Equipment",
            description: "Medical device manufacturing with moderate environmental impact.",
            annualEmission: "55,000 tCO₂",
            emissionRate: "Medium (Industry average)",
            scope1: "8,000 tCO₂",
            scope2: "7,000 tCO₂",
            scope3: "40,000 tCO₂",
            complianceScore: "81%",
            improvementPlan: "Supply chain optimization, clean energy procurement",
            timeline: "18% reduction target by 2024",
            riskLevel: "medium",
            status: "Compliant"
        }
    ]
};

// Category names mapping
const categoryNames = {
    "eco-friendly": "Eco-Friendly Companies",
    "max-emission": "Maximum Emission Companies",
    "min-emission": "Minimum Emission Companies",
    "medium-emission": "Medium Emission Companies"
};

// View company category function
function viewCategory(category) {
    // Create new window
    const newWindow = window.open('', '_blank');
    
    // Get category data
    const companies = companyData[category];
    const categoryName = categoryNames[category];
    
    // Create HTML for new window
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${categoryName} - CarbonWatch</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                body {
                    font-family: 'Roboto', sans-serif;
                    background-color: #f5f7fa;
                    color: #333;
                    line-height: 1.6;
                    padding: 20px;
                }
                
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                
                .header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 30px;
                    padding-bottom: 20px;
                    border-bottom: 2px solid #e9ecef;
                }
                
                .header-content h1 {
                    font-family: 'Poppins', sans-serif;
                    font-weight: 600;
                    color: #1e3c72;
                    font-size: 2rem;
                    margin-bottom: 5px;
                }
                
                .header-content p {
                    color: #666;
                }
                
                .dashboard-btn {
                    padding: 10px 20px;
                    background-color: #2a5298;
                    color: white;
                    border: none;
                    border-radius: 6px;
                    font-family: 'Poppins', sans-serif;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.3s;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    box-shadow: 0 4px 12px rgba(42, 82, 152, 0.2);
                }
                
                .dashboard-btn:hover {
                    background-color: #1e3c72;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 18px rgba(42, 82, 152, 0.3);
                }
                
                .category-info {
                    background: white;
                    border-radius: 10px;
                    padding: 25px;
                    margin-bottom: 30px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
                }
                
                .category-info h2 {
                    font-family: 'Poppins', sans-serif;
                    font-weight: 600;
                    color: #1e3c72;
                    font-size: 1.5rem;
                    margin-bottom: 15px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 20px;
                    margin-top: 20px;
                }
                
                .stat-box {
                    background-color: #f8f9fa;
                    border-radius: 8px;
                    padding: 15px;
                }
                
                .stat-label {
                    color: #666;
                    font-size: 0.9rem;
                    margin-bottom: 5px;
                }
                
                .stat-value {
                    font-weight: 600;
                    color: #1e3c72;
                    font-size: 1.2rem;
                }
                
                .companies-list {
                    display: grid;
                    gap: 25px;
                }
                
                .company-card {
                    background: white;
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
                    transition: all 0.3s ease;
                }
                
                .company-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
                }
                
                .company-header {
                    padding: 20px;
                    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                    border-bottom: 1px solid #e9ecef;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .company-name {
                    font-family: 'Poppins', sans-serif;
                    font-weight: 600;
                    color: #1e3c72;
                    font-size: 1.3rem;
                }
                
                .company-industry {
                    color: #666;
                    font-size: 0.95rem;
                    margin-top: 5px;
                }
                
                .emission-badge {
                    padding: 8px 15px;
                    border-radius: 20px;
                    font-weight: 500;
                    font-size: 0.9rem;
                }
                
                .badge-low {
                    background-color: #e6f7e9;
                    color: #2d9d5f;
                }
                
                .badge-medium {
                    background-color: #fff4e6;
                    color: #e67e22;
                }
                
                .badge-high {
                    background-color: #ffe6e6;
                    color: #e74c3c;
                }
                
                .company-body {
                    padding: 20px;
                }
                
                .company-description {
                    color: #666;
                    margin-bottom: 20px;
                }
                
                .company-details {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 20px;
                    margin-bottom: 20px;
                }
                
                .detail-group {
                    margin-bottom: 15px;
                }
                
                .detail-label {
                    color: #666;
                    font-size: 0.9rem;
                    margin-bottom: 5px;
                }
                
                .detail-value {
                    font-weight: 500;
                    color: #333;
                }
                
                .emission-details {
                    background-color: #f8f9fa;
                    border-radius: 8px;
                    padding: 15px;
                    margin-bottom: 20px;
                }
                
                .emission-details h4 {
                    font-family: 'Poppins', sans-serif;
                    font-weight: 600;
                    color: #1e3c72;
                    margin-bottom: 10px;
                }
                
                .scope-list {
                    display: grid;
                    gap: 10px;
                }
                
                .scope-item {
                    display: flex;
                    justify-content: space-between;
                    padding: 8px 0;
                    border-bottom: 1px solid #e9ecef;
                }
                
                .scope-item:last-child {
                    border-bottom: none;
                }
                
                .scope-name {
                    font-weight: 500;
                }
                
                .scope-1 { color: #3498db; }
                .scope-2 { color: #2ecc71; }
                .scope-3 { color: #e74c3c; }
                
                /* Action Buttons Styling - ALWAYS VISIBLE */
                .action-buttons {
                    display: flex;
                    justify-content: flex-end;
                    gap: 15px;
                    padding: 20px;
                    border-top: 1px solid #e9ecef;
                    background-color: #f8f9fa;
                }
                
                .action-btn {
                    padding: 10px 20px;
                    border-radius: 6px;
                    font-family: 'Poppins', sans-serif;
                    font-weight: 500;
                    cursor: pointer;
                    border: none;
                    transition: all 0.3s;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.95rem;
                }
                
                .action-btn:hover {
                    transform: scale(1.05);
                }
               
                .audit-btn {
                    background-color: #2a5298;
                    color: white;
                }
                
                .audit-btn:hover {
                    background-color: #1e3c72;
                }
                
                .warning-btn {
                    background-color: #e74c3c;
                    color: white;
                }
                
                .warning-btn:hover {
                    background-color: #c0392b;
                }
                
                /* Status Badge */
                .status-badge {
                    display: inline-block;
                    padding: 5px 12px;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    font-weight: 500;
                    margin-left: 10px;
                }
                
                .status-compliant {
                    background-color: #e6f7e9;
                    color: #2d9d5f;
                }
                
                .status-non-compliant {
                    background-color: #ffe6e6;
                    color: #e74c3c;
                }
                
                .status-excellent {
                    background-color: #e6f0ff;
                    color: #3498db;
                }
                
                .status-improvement {
                    background-color: #fff4e6;
                    color: #e67e22;
                }
                
                .modal {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 1000;
                    justify-content: center;
                    align-items: center;
                }
                
                .modal-content {
                    background-color: white;
                    border-radius: 10px;
                    width: 90%;
                    max-width: 500px;
                    padding: 30px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                }
                
                .modal-header {
                    margin-bottom: 20px;
                }
                
                .modal-header h3 {
                    font-family: 'Poppins', sans-serif;
                    font-weight: 600;
                    color: #1e3c72;
                    font-size: 1.5rem;
                }
                
                .modal-body {
                    margin-bottom: 25px;
                }
                
                .modal-body p {
                    color: #666;
                    margin-bottom: 15px;
                }
                
                .modal-footer {
                    display: flex;
                    justify-content: flex-end;
                    gap: 15px;
                }
                
                .modal-btn {
                    padding: 10px 20px;
                    border-radius: 6px;
                    font-family: 'Poppins', sans-serif;
                    font-weight: 500;
                    cursor: pointer;
                    border: none;
                    transition: background-color 0.3s;
                }
                
                .modal-confirm {
                    background-color: #2a5298;
                    color: white;
                }
                
                .modal-confirm:hover {
                    background-color: #1e3c72;
                }
                
                .modal-cancel {
                    background-color: #6c757d;
                    color: white;
                }
                
                .modal-cancel:hover {
                    background-color: #5a6268;
                }
                
                .footer {
                    text-align: center;
                    margin-top: 40px;
                    padding-top: 20px;
                    border-top: 1px solid #e9ecef;
                    color: #666;
                    font-size: 0.9rem;
                }
                
                @media (max-width: 768px) {
                    .header {
                        flex-direction: column;
                        gap: 15px;
                        text-align: center;
                    }
                    
                    .company-details {
                        grid-template-columns: 1fr;
                    }
                    
                    .action-buttons {
                        flex-direction: column;
                    }
                    
                    .action-btn {
                        width: 100%;
                        justify-content: center;
                    }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <div class="header-content">
                        <h1><i class="fas fa-building"></i> ${categoryName}</h1>
                        <p>Detailed view of companies in this emission category</p>
                    </div>
                    <button class="dashboard-btn" onclick="goToDashboard()">
                        <i class="fas fa-tachometer-alt"></i> Go to Dashboard
                    </button>
                </div>
                
                <div class="category-info">
                    <h2><i class="fas fa-info-circle"></i> Category Information</h2>
                    <p>This category contains companies with ${getCategoryDescription(category)}. Below are the detailed profiles of each company including their carbon emission rates and environmental performance.</p>
                    
                    <div class="stats-grid">
                        <div class="stat-box">
                            <div class="stat-label">Total Companies</div>
                            <div class="stat-value">${companies.length}</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-label">Average Emission</div>
                            <div class="stat-value">${getAverageEmission(category)} tCO₂</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-label">Compliance Rate</div>
                            <div class="stat-value">${getAverageCompliance(category)}%</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-label">Industry Coverage</div>
                            <div class="stat-value">${getIndustryCount(companies)} sectors</div>
                        </div>
                    </div>
                </div>
                
                <div class="companies-list">
                    ${generateCompanyCards(companies, category)}
                </div>
                
                <!-- Modal for Actions -->
                <div id="actionModal" class="modal">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 id="modalTitle">Confirm Action</h3>
                        </div>
                        <div class="modal-body">
                            <p id="modalMessage">Are you sure you want to proceed with this action?</p>
                        </div>
                        <div class="modal-footer">
                            <button class="modal-btn modal-cancel" id="modalCancel">Cancel</button>
                            <button class="modal-btn modal-confirm" id="modalConfirm">Confirm</button>
                        </div>
                    </div>
                </div>
                
                <div class="footer">
                    <p>CarbonWatch - Government Emission Monitoring System | Ministry of Environment</p>
                    <p>Data Source: Company Reported Emissions | Last Updated: ${new Date().toLocaleDateString()}</p>
                </div>
            </div>
            
            <script>
                let currentCompanyId = null;
                let currentAction = null;
                let currentCompanyName = '';
                
                function goToDashboard() {
                    // Close current window and open dashboard
                    window.opener.focus();
                    window.close();
                }
                
                function initiateAudit(companyId, companyName) {
                    currentCompanyId = companyId;
                    currentAction = 'audit';
                    currentCompanyName = companyName;
                    
                    document.getElementById('modalTitle').textContent = 'Initiate Audit';
                    document.getElementById('modalMessage').innerHTML = \`Are you sure you want to initiate an audit for <strong>\${companyName}</strong>?<br><br>This will:<br>• Notify the company of the audit<br>• Assign an audit team<br>• Schedule an on-site inspection within 30 days\`;
                    
                    document.getElementById('actionModal').style.display = 'flex';
                }
                
                function issueWarning(companyId, companyName) {
                    currentCompanyId = companyId;
                    currentAction = 'warning';
                    currentCompanyName = companyName;
                    
                    document.getElementById('modalTitle').textContent = 'Issue Warning';
                    document.getElementById('modalMessage').innerHTML = \`Are you sure you want to issue a formal warning to <strong>\${companyName}</strong>?<br><br>This will:<br>• Record a compliance violation<br>• Require corrective action plan within 60 days<br>• May result in penalties if not addressed\`;
                    
                    document.getElementById('actionModal').style.display = 'flex';
                }
                
                // Modal event listeners
                document.addEventListener('DOMContentLoaded', function() {
                    const modal = document.getElementById('actionModal');
                    const modalCancel = document.getElementById('modalCancel');
                    const modalConfirm = document.getElementById('modalConfirm');
                    
                    // Close modal when clicking outside
                    window.addEventListener('click', function(event) {
                        if (event.target === modal) {
                            modal.style.display = 'none';
                        }
                    });
                    
                    // Cancel button
                    modalCancel.addEventListener('click', function() {
                        modal.style.display = 'none';
                    });
                    
                    // Confirm button
                    modalConfirm.addEventListener('click', function() {
                        modal.style.display = 'none';
                        
                        if (currentAction === 'audit') {
                            alert(\`✅ Audit Initiated Successfully\\n\\nCompany: \${currentCompanyName}\\nReference: AUDIT-\${currentCompanyId}-\${new Date().getFullYear()}\\n\\nThe company has been notified and an audit team will be assigned within 5 business days.\`);
                            
                            // In a real app, you would make an API call here
                            console.log(\`Audit initiated for company ID: \${currentCompanyId}\`);
                            
                        } else if (currentAction === 'warning') {
                            alert(\`⚠️ Warning Issued Successfully\\n\\nCompany: \${currentCompanyName}\\nReference: WARN-\${currentCompanyId}-\${new Date().getFullYear()}\\n\\nA formal warning has been recorded. The company has 60 days to submit a corrective action plan.\`);
                            
                            // In a real app, you would make an API call here
                            console.log(\`Warning issued to company ID: \${currentCompanyId}\`);
                        }
                    });
                });
                
                function printReport() {
                    window.print();
                }
            </script>
        </body>
        </html>
    `;
    
    // Write content to new window
    newWindow.document.write(htmlContent);
    newWindow.document.close();
}

// Helper functions
function getCategoryDescription(category) {
    switch(category) {
        case 'eco-friendly':
            return "eco-friendly products and sustainable practices with minimal carbon footprint";
        case 'max-emission':
            return "the highest carbon emissions requiring regulatory attention";
        case 'min-emission':
            return "the lowest carbon emissions with high efficiency";
        case 'medium-emission':
            return "moderate carbon emissions with improvement opportunities";
        default:
            return "this emission category";
    }
}

function getAverageEmission(category) {
    const companies = companyData[category];
    let total = 0;
    
    companies.forEach(company => {
        // Extract numeric value from emission string
        const emissionStr = company.annualEmission.replace(/[^0-9]/g, '');
        total += parseInt(emissionStr);
    });
    
    return Math.round(total / companies.length).toLocaleString();
}

function getAverageCompliance(category) {
    const companies = companyData[category];
    let total = 0;
    
    companies.forEach(company => {
        const complianceStr = company.complianceScore.replace('%', '');
        total += parseInt(complianceStr);
    });
    
    return Math.round(total / companies.length);
}

function getIndustryCount(companies) {
    const industries = new Set();
    companies.forEach(company => {
        industries.add(company.industry);
    });
    return industries.size;
}

function generateCompanyCards(companies, category) {
    return companies.map(company => {
        // Determine badge class based on category
        let badgeClass = '';
        switch(category) {
            case 'eco-friendly':
            case 'min-emission':
                badgeClass = 'badge-low';
                break;
            case 'max-emission':
                badgeClass = 'badge-high';
                break;
            case 'medium-emission':
                badgeClass = 'badge-medium';
                break;
        }
        
        // Determine risk level text
        let riskText = '';
        switch(company.riskLevel) {
            case 'low':
                riskText = 'Low Risk';
                break;
            case 'medium':
                riskText = 'Medium Risk';
                break;
            case 'high':
                riskText = 'High Risk';
                break;
        }
        
        // Determine status badge class
        let statusClass = '';
        let statusText = company.status;
        switch(company.status.toLowerCase()) {
            case 'compliant':
            case 'excellent':
                statusClass = company.status === 'Excellent' ? 'status-excellent' : 'status-compliant';
                break;
            case 'non-compliant':
                statusClass = 'status-non-compliant';
                break;
            case 'needs improvement':
                statusClass = 'status-improvement';
                break;
        }
        
        // Generate extra details based on category
        let extraDetails = '';
        if (category === 'eco-friendly') {
            extraDetails = `
                <div class="detail-group">
                    <div class="detail-label">Certifications</div>
                    <div class="detail-value">${company.certifications.join(', ')}</div>
                </div>
                <div class="detail-group">
                    <div class="detail-label">Reduction Target</div>
                    <div class="detail-value">${company.reductionTarget}</div>
                </div>
            `;
        } else if (category === 'max-emission') {
            extraDetails = `
                <div class="detail-group">
                    <div class="detail-label">Violations</div>
                    <div class="detail-value">${company.violations.length} violations recorded</div>
                </div>
                <div class="detail-group">
                    <div class="detail-label">Penalty Status</div>
                    <div class="detail-value">${company.penaltyStatus}</div>
                </div>
                <div class="detail-group">
                    <div class="detail-label">Action Required</div>
                    <div class="detail-value">${company.actionRequired}</div>
                </div>
            `;
        } else if (category === 'min-emission') {
            extraDetails = `
                <div class="detail-group">
                    <div class="detail-label">Energy Efficiency</div>
                    <div class="detail-value">${company.efficiency}%</div>
                </div>
                <div class="detail-group">
                    <div class="detail-label">Awards</div>
                    <div class="detail-value">${company.awards.join(', ')}</div>
                </div>
            `;
        } else if (category === 'medium-emission') {
            extraDetails = `
                <div class="detail-group">
                    <div class="detail-label">Improvement Plan</div>
                    <div class="detail-value">${company.improvementPlan}</div>
                </div>
                <div class="detail-group">
                    <div class="detail-label">Reduction Timeline</div>
                    <div class="detail-value">${company.timeline}</div>
                </div>
            `;
        }
        
        // Add risk level detail
        extraDetails += `
            <div class="detail-group">
                <div class="detail-label">Risk Assessment</div>
                <div class="detail-value">${riskText}</div>
            </div>
            <div class="detail-group">
                <div class="detail-label">Compliance Status</div>
                <div class="detail-value"><span class="status-badge ${statusClass}">${statusText}</span></div>
            </div>
        `;
        
        return `
            <div class="company-card">
                <div class="company-header">
                    <div>
                        <div class="company-name">${company.name}</div>
                        <div class="company-industry">${company.industry}</div>
                    </div>
                    <div class="emission-badge ${badgeClass}">${company.emissionRate}</div>
                </div>
                <div class="company-body">
                    <div class="company-description">${company.description}</div>
                    
                    <div class="company-details">
                        <div class="detail-group">
                            <div class="detail-label">Annual Carbon Emission</div>
                            <div class="detail-value">${company.annualEmission}</div>
                        </div>
                        <div class="detail-group">
                            <div class="detail-label">Compliance Score</div>
                            <div class="detail-value">${company.complianceScore}</div>
                        </div>
                        ${extraDetails}
                    </div>
                    
                    <div class="emission-details">
                        <h4><i class="fas fa-chart-pie"></i> Emission Breakdown</h4>
                        <div class="scope-list">
                            <div class="scope-item">
                                <span class="scope-name scope-1">Scope 1 (Direct Emissions)</span>
                                <span>${company.scope1}</span>
                            </div>
                            <div class="scope-item">
                                <span class="scope-name scope-2">Scope 2 (Indirect Energy)</span>
                                <span>${company.scope2}</span>
                            </div>
                            <div class="scope-item">
                                <span class="scope-name scope-3">Scope 3 (Supply Chain)</span>
                                <span>${company.scope3}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Action Buttons Section - NO CLOSE BUTTON -->
                <div class="action-buttons">
                    <button class="action-btn audit-btn" onclick="initiateAudit(${company.id}, '${company.name.replace(/'/g, "\\'")}')">
                        <i class="fas fa-search"></i> Initiate Audit
                    </button>
                    <button class="action-btn warning-btn" onclick="issueWarning(${company.id}, '${company.name.replace(/'/g, "\\'")}')">
                        <i class="fas fa-exclamation-triangle"></i> Issue Warning
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    console.log('CarbonWatch Dashboard loaded successfully');
    
    // Add interactive effects to category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.classList.add('interactive-card');
        
        // Add click sound effect
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Add interactive effects to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.add('interactive-button');
        
        // Add ripple effect
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.7);
                transform: scale(0);
                animation: ripple 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                top: ${y}px;
                left: ${x}px;
            `;
            
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        button {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
});