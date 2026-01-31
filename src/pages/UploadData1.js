import React, { useState } from 'react';

const UploadData1 = () => {
  const [uploadType, setUploadType] = useState('scope3');
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const scopeOptions = [
    { value: 'scope1', label: 'Scope 1 - Direct Emissions' },
    { value: 'scope2', label: 'Scope 2 - Indirect Energy' },
    { value: 'scope3', label: 'Scope 3 - Supply Chain' },
    { value: 'logistics', label: 'Logistics Data' },
    { value: 'procurement', label: 'Procurement Data' },
    { value: 'rawMaterials', label: 'Raw Materials Data' },
  ];

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setUploadStatus('File selected: ' + uploadedFile.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      setUploadStatus('Please select a file first');
      return;
    }
    
    // Simulate upload
    setUploadStatus('Uploading...');
    setTimeout(() => {
      setUploadStatus('✅ Data uploaded successfully! Emission calculations updated.');
      setFile(null);
    }, 2000);
  };

  const cementTemplates = {
    scope1: 'Upload fuel consumption, process emissions data',
    scope2: 'Upload electricity and energy purchase records',
    scope3: 'Upload supplier data, transport logs, waste disposal records',
    logistics: 'Upload transport routes, vehicle types, distances',
    procurement: 'Upload purchase invoices from suppliers',
    rawMaterials: 'Upload limestone, clay, gypsum sourcing data'
  };

  return (
    <div className="upload-container">
      <h1>Cement Corp Ltd - Data Upload</h1>
      <p className="subtitle">Upload your emissions data for accurate Scope 3 calculation</p>
      
      <div className="upload-card">
        <div className="upload-info">
          <h3>📊 Data Requirements</h3>
          <ul>
            <li>CSV, Excel, or JSON formats accepted</li>
            <li>Include timestamps for temporal analysis</li>
            <li>Map data to standardized emission factors</li>
            <li>Include supplier identification where possible</li>
          </ul>
        </div>
        
        <form onSubmit={handleSubmit} className="upload-form">
          <div className="form-group">
            <label>Select Data Type</label>
            <select value={uploadType} onChange={(e) => setUploadType(e.target.value)}>
              {scopeOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <p className="template-info">{cementTemplates[uploadType]}</p>
          </div>
          
          <div className="form-group">
            <label>Upload File</label>
            <div className="file-upload">
              <input
                type="file"
                onChange={handleFileUpload}
                accept=".csv,.xlsx,.xls,.json"
              />
              <div className="file-drop">Drag & drop or click to browse</div>
            </div>
          </div>
          
          {file && (
            <div className="file-preview">
              <strong>Selected:</strong> {file.name} ({Math.round(file.size / 1024)} KB)
            </div>
          )}
          
          <button type="submit" className="upload-btn">Upload & Process Data</button>
          
          {uploadStatus && (
            <div className={`upload-status ${uploadStatus.includes('✅') ? 'success' : ''}`}>
              {uploadStatus}
            </div>
          )}
        </form>
        
        <div className="data-sources">
          <h4>Recommended Data Sources for Cement Industry:</h4>
          <div className="sources-grid">
            <div className="source-item">
              <h5>Transport & Logistics</h5>
              <p>GPS tracking data, fuel receipts, delivery manifests</p>
            </div>
            <div className="source-item">
              <h5>Raw Materials</h5>
              <p>Quarry operations, material transport, processing data</p>
            </div>
            <div className="source-item">
              <h5>Energy Usage</h5>
              <p>Electricity bills, alternative fuel consumption</p>
            </div>
            <div className="source-item">
              <h5>Waste Management</h5>
              <p>Disposal records, recycling rates, byproduct data</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="upload-tips">
        <h3>💡 Tips for Accurate Emissions Calculation</h3>
        <ul>
          <li>Upload data at least monthly for real-time tracking</li>
          <li>Include all supplier tiers for complete Scope 3 coverage</li>
          <li>Use standardized units (kWh, liters, tons, km)</li>
          <li>Tag data with appropriate emission factors</li>
          <li>Maintain audit trails for certification</li>
        </ul>
      </div>
    </div>
  );
};

export default UploadData1;