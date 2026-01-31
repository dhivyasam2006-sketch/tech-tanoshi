import React, { useState } from 'react';

const UploadData2 = () => {
  const [uploadType, setUploadType] = useState('packaging');
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [autoMapping, setAutoMapping] = useState(true);

  const dataTypes = [
    { value: 'packaging', label: 'Packaging Materials Data', icon: '📦' },
    { value: 'ingredients', label: 'Ingredient Sourcing Data', icon: '🌿' },
    { value: 'logistics', label: 'Distribution & Logistics', icon: '🚚' },
    { value: 'suppliers', label: 'Supplier Sustainability Data', icon: '🤝' },
    { value: 'consumer', label: 'Consumer Usage Data', icon: '👥' },
    { value: 'waste', label: 'Waste & Recycling Data', icon: '♻️' }
  ];

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setUploadStatus(`File selected: ${uploadedFile.name} (${Math.round(uploadedFile.size / 1024)} KB)`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      setUploadStatus('⚠️ Please select a file first');
      return;
    }
    
    setUploadStatus('🔄 Uploading and processing cosmetic industry data...');
    
    setTimeout(() => {
      setUploadStatus('✅ Data uploaded successfully! Emission factors updated for cosmetic industry.');
      
      // Show additional processing results
      setTimeout(() => {
        setUploadStatus(prev => prev + '\n🔍 Auto-mapping completed: 95% accuracy');
        setTimeout(() => {
          setUploadStatus(prev => prev + '\n📊 Scope 3 calculations updated');
          setTimeout(() => {
            setUploadStatus(prev => prev + '\n🎯 Reduction opportunities identified');
          }, 500);
        }, 500);
      }, 1000);
      
      setFile(null);
    }, 3000);
  };

  const cosmeticTemplates = {
    packaging: 'Upload plastic usage, material types, weights, recycling rates',
    ingredients: 'Upload supplier data, organic certifications, transport distances',
    logistics: 'Upload delivery routes, vehicle types, fuel consumption',
    suppliers: 'Upload supplier emissions data, sustainability certifications',
    consumer: 'Upload product usage patterns, disposal methods, return rates',
    waste: 'Upload waste generation, recycling rates, landfill diversion'
  };

  const handleQuickUpload = (type) => {
    setUploadType(type);
    setUploadStatus(`📥 Ready to upload ${dataTypes.find(d => d.value === type)?.label}`);
  };

  return (
    <div className="upload-container">
      <h1>Cosmetic Beauty Inc - Sustainability Data Upload</h1>
      <p className="subtitle">Upload data for accurate cosmetic industry carbon footprint calculation</p>
      
      <div className="quick-upload-options">
        <h3>Quick Upload Options</h3>
        <div className="quick-buttons">
          {dataTypes.map((type) => (
            <button
              key={type.value}
              onClick={() => handleQuickUpload(type.value)}
              className={`quick-btn ${uploadType === type.value ? 'active' : ''}`}
            >
              <span className="icon">{type.icon}</span>
              {type.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="upload-card">
        <div className="upload-info cosmetic">
          <h3>📊 Data Requirements for Cosmetic Industry</h3>
          <div className="requirements-grid">
            <div className="req-item">
              <h5>Packaging Data</h5>
              <p>Material types, weights, recycled content, recyclability</p>
            </div>
            <div className="req-item">
              <h5>Ingredient Traceability</h5>
              <p>Source locations, organic certifications, transport methods</p>
            </div>
            <div className="req-item">
              <h5>Consumer Insights</h5>
              <p>Product usage, disposal habits, return rates</p>
            </div>
            <div className="req-item">
              <h5>Waste Management</h5>
              <p>Recycling rates, landfill diversion, circular initiatives</p>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="upload-form">
          <div className="form-group">
            <label>Selected Data Type</label>
            <div className="selected-type">
              <span className="type-icon">
                {dataTypes.find(d => d.value === uploadType)?.icon}
              </span>
              <span className="type-label">
                {dataTypes.find(d => d.value === uploadType)?.label}
              </span>
            </div>
            <p className="template-info">{cosmeticTemplates[uploadType]}</p>
          </div>
          
          <div className="form-group">
            <label>Upload File (CSV, Excel, JSON)</label>
            <div className="file-upload cosmetic">
              <input
                type="file"
                onChange={handleFileUpload}
                accept=".csv,.xlsx,.xls,.json"
              />
              <div className="file-drop">
                <div className="drop-icon">📁</div>
                <div>Drag & drop or click to browse</div>
                <div className="file-types">CSV, Excel, JSON formats supported</div>
              </div>
            </div>
          </div>
          
          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={autoMapping}
                onChange={(e) => setAutoMapping(e.target.checked)}
              />
              <span>Enable auto-mapping to cosmetic industry emission factors</span>
            </label>
            <p className="helper-text">Automatically maps your data to industry-standard emission factors</p>
          </div>
          
          {file && (
            <div className="file-preview cosmetic">
              <div className="preview-header">
                <strong>Selected File:</strong>
                <span className="file-name">{file.name}</span>
              </div>
              <div className="file-details">
                <span>Size: {Math.round(file.size / 1024)} KB</span>
                <span>Type: {file.type || 'Unknown'}</span>
                <span>Last modified: {new Date(file.lastModified).toLocaleDateString()}</span>
              </div>
            </div>
          )}
          
          <button type="submit" className="upload-btn cosmetic">
            <span className="btn-icon">📤</span>
            Upload & Process Cosmetic Data
          </button>
          
          {uploadStatus && (
            <div className={`upload-status ${uploadStatus.includes('✅') ? 'success' : uploadStatus.includes('⚠️') ? 'warning' : 'info'}`}>
              {uploadStatus.split('\n').map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>
          )}
        </form>
        
        <div className="data-sources cosmetic">
          <h4>💡 Recommended Data Integration Sources</h4>
          <div className="integrations-grid">
            <div className="integration-card">
              <h5>Packaging Suppliers</h5>
              <p>Material composition data, recycling certifications</p>
              <button className="integration-btn">Connect API</button>
            </div>
            <div className="integration-card">
              <h5>Logistics Partners</h5>
              <p>Real-time transport emissions, route optimization</p>
              <button className="integration-btn">Connect API</button>
            </div>
            <div className="integration-card">
              <h5>Retail Partners</h5>
              <p>Sales data, consumer demographics, return rates</p>
              <button className="integration-btn">Connect API</button>
            </div>
            <div className="integration-card">
              <h5>Waste Management</h5>
              <p>Recycling rates, waste composition analysis</p>
              <button className="integration-btn">Connect API</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="upload-benefits cosmetic">
        <h3>🎯 Benefits of Comprehensive Data Upload</h3>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">🎖️</div>
            <h5>Certification Readiness</h5>
            <p>Complete data for Eco-Beauty and other certifications</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">📈</div>
            <h5>Accurate Reporting</h5>
            <p>Precise Scope 3 calculations for regulatory compliance</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">💰</div>
            <h5>Cost Savings</h5>
            <p>Identify packaging and logistics optimization opportunities</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">🌍</div>
            <h5>Environmental Impact</h5>
            <p>Data-driven decisions for maximum sustainability impact</p>
          </div>
        </div>
      </div>
      
      <div className="recent-uploads">
        <h3>Recent Data Uploads</h3>
        <div className="uploads-list">
          <div className="upload-item">
            <div className="upload-icon">📦</div>
            <div className="upload-details">
              <strong>Packaging Data Q3 2024</strong>
              <span>Uploaded: Nov 15, 2024</span>
            </div>
            <span className="upload-status-badge success">Processed</span>
          </div>
          <div className="upload-item">
            <div className="upload-icon">🚚</div>
            <div className="upload-details">
              <strong>Logistics Data October</strong>
              <span>Uploaded: Nov 10, 2024</span>
            </div>
            <span className="upload-status-badge success">Processed</span>
          </div>
          <div className="upload-item">
            <div className="upload-icon">🤝</div>
            <div className="upload-details">
              <strong>Supplier Sustainability</strong>
              <span>Uploaded: Nov 5, 2024</span>
            </div>
            <span className="upload-status-badge pending">In Review</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadData2;