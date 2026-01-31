export const COMPANY_TYPES = {
  CEMENT: 'cement',
  COSMETIC: 'cosmetic'
};

export const SCOPES = {
  SCOPE1: 'Direct Emissions',
  SCOPE2: 'Indirect Energy',
  SCOPE3: 'Supply Chain Emissions'
};

export const EMISSION_FACTORS = {
  CEMENT: {
    CLINKER: 0.85, // tCO2/t clinker
    ELECTRICITY: 0.5, // tCO2/MWh
    TRANSPORT: 0.1 // tCO2/t-km
  },
  COSMETIC: {
    PLASTIC: 2.5, // kgCO2/kg plastic
    TRANSPORT: 0.15, // tCO2/t-km
    ENERGY: 0.3 // tCO2/MWh
  }
};