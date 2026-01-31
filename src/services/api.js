// Mock API service for carbon calculations

export const calculateEmissions = (data, companyType) => {
  // This would be replaced with actual API calls
  return new Promise((resolve) => {
    setTimeout(() => {
      let total = 0;
      
      if (companyType === 'cement') {
        total = data.scope1 + data.scope2 + data.scope3;
      } else if (companyType === 'cosmetic') {
        total = data.scope1 + data.scope2 + data.scope3;
      }
      
      resolve({
        totalEmissions: total,
        breakdown: {
          scope1: data.scope1,
          scope2: data.scope2,
          scope3: data.scope3
        },
        hotspots: generateHotspots(data, companyType)
      });
    }, 1000);
  });
};

const generateHotspots = (data, companyType) => {
  if (companyType === 'cement') {
    return [
      { name: 'Clinker Production', emissions: data.scope1 * 0.6 },
      { name: 'Raw Material Transport', emissions: data.scope3 * 0.3 },
      { name: 'Packaging', emissions: data.scope3 * 0.2 }
    ];
  } else {
    return [
      { name: 'Plastic Packaging', emissions: data.scope3 * 0.4 },
      { name: 'Ingredient Sourcing', emissions: data.scope3 * 0.3 },
      { name: 'Product Transport', emissions: data.scope3 * 0.2 }
    ];
  }
};

export const uploadCompanyData = (file, dataType) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Data uploaded successfully',
        processed: true,
        timestamp: new Date().toISOString()
      });
    }, 1500);
  });
};

export const generateReport = (companyId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        reportId: `REP-${Date.now()}`,
        downloadUrl: '#',
        generatedAt: new Date().toISOString()
      });
    }, 2000);
  });
};