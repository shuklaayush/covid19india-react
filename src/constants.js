import {hi, te, gu, ta, bn} from 'date-fns/locale/';

export const PRIMARY_STATISTICS = [
  'confirmed',
  'active',
  'recovered',
  'deceased',
];

export const MAP_STATISTICS = [...PRIMARY_STATISTICS, 'tested'];

export const TIMESERIES_STATISTICS = [...PRIMARY_STATISTICS, 'tested'];

export const COLORS = {
  confirmed: '#ff073a',
  active: '#007bff',
  recovered: '#28a745',
  deceased: '#6c757d',
  tested: '#4b1eaa',
};

export const MAP_OPTIONS = {
  TOTAL: 'Total',
  PER_MILLION: 'Per million',
  HOTSPOTS: 'Hotspots',
  ZONES: 'Zones',
};

export const MAP_VIEWS = {
  STATES: 0,
  DISTRICTS: 1,
};

export const MAP_TYPES = {
  COUNTRY: 0,
  STATE: 1,
};

export const ZONE_COLORS = {
  Red: '#d73027',
  Orange: '#fee08b',
  Green: '#66bd63',
};

export const MAPS_DIR =
  process.env.NODE_ENV === 'production' ? '/mini_maps' : '/maps';

export const MAP_META = {
  India: {
    geoDataFile: `${MAPS_DIR}/india.json`,
    mapType: MAP_TYPES.COUNTRY,
    graphObjectStates: 'india-states',
    graphObjectDistricts: 'india-districts-2019-734',
  },
  'Andaman and Nicobar Islands': {
    geoDataFile: `${MAPS_DIR}/andamannicobarislands.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'andamannicobarislands_district',
  },
  'Arunachal Pradesh': {
    geoDataFile: `${MAPS_DIR}/arunachalpradesh.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'arunachalpradesh_district',
  },
  'Andhra Pradesh': {
    geoDataFile: `${MAPS_DIR}/andhrapradesh.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'andhrapradesh_district',
  },
  Assam: {
    geoDataFile: `${MAPS_DIR}/assam.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'assam_district',
  },
  Bihar: {
    name: 'Bihar',
    geoDataFile: `${MAPS_DIR}/bihar.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'bihar_district',
  },
  Chandigarh: {
    name: 'Chandigarh',
    geoDataFile: `${MAPS_DIR}/chandigarh.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'chandigarh_district',
  },
  Chhattisgarh: {
    name: 'Chhattisgarh',
    geoDataFile: `${MAPS_DIR}/chhattisgarh.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'chhattisgarh_district',
  },
  'Dadra and Nagar Haveli and Daman and Diu': {
    geoDataFile: `${MAPS_DIR}/dnh-and-dd.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'dnh-and-dd',
  },
  Delhi: {
    geoDataFile: `${MAPS_DIR}/delhi.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'delhi_district',
  },
  Karnataka: {
    geoDataFile: `${MAPS_DIR}/karnataka.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'karnataka_district',
  },
  Kerala: {
    geoDataFile: `${MAPS_DIR}/kerala.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'kerala_district',
  },
  Goa: {
    geoDataFile: `${MAPS_DIR}/goa.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'goa_district',
  },
  Gujarat: {
    geoDataFile: `${MAPS_DIR}/gujarat.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'gujarat_district',
  },
  Haryana: {
    geoDataFile: `${MAPS_DIR}/haryana.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'haryana_district',
  },
  'Himachal Pradesh': {
    geoDataFile: `${MAPS_DIR}/himachalpradesh.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'himachalpradesh_district',
  },
  'Jammu and Kashmir': {
    geoDataFile: `${MAPS_DIR}/jammukashmir.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'jammukashmir_district',
  },
  Jharkhand: {
    geoDataFile: `${MAPS_DIR}/jharkhand.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'jharkhand_district',
  },
  Ladakh: {
    geoDataFile: `${MAPS_DIR}/ladakh.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'ladakh_district',
  },
  Lakshadweep: {
    geoDataFile: `${MAPS_DIR}/lakshadweep.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'lakshadweep_district',
  },
  'Madhya Pradesh': {
    geoDataFile: `${MAPS_DIR}/madhyapradesh.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'madhyapradesh_district',
  },
  Maharashtra: {
    geoDataFile: `${MAPS_DIR}/maharashtra.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'maharashtra_district',
  },
  Manipur: {
    geoDataFile: `${MAPS_DIR}/manipur.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'manipur_district',
  },
  Meghalaya: {
    geoDataFile: `${MAPS_DIR}/meghalaya.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'meghalaya_district',
  },
  Mizoram: {
    geoDataFile: `${MAPS_DIR}/mizoram.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'mizoram_district',
  },
  Nagaland: {
    geoDataFile: `${MAPS_DIR}/nagaland.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'nagaland_district',
  },
  Odisha: {
    geoDataFile: `${MAPS_DIR}/odisha.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'odisha_district',
  },
  Puducherry: {
    geoDataFile: `${MAPS_DIR}/puducherry.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'puducherry_district',
  },
  Punjab: {
    geoDataFile: `${MAPS_DIR}/punjab.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'punjab_district',
  },
  Rajasthan: {
    geoDataFile: `${MAPS_DIR}/rajasthan.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'rajasthan_district',
  },
  Sikkim: {
    geoDataFile: `${MAPS_DIR}/sikkim.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'sikkim_district',
  },
  'Tamil Nadu': {
    geoDataFile: `${MAPS_DIR}/tamilnadu.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'tamilnadu_district',
  },
  Telangana: {
    geoDataFile: `${MAPS_DIR}/telangana.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'telangana_district',
  },
  Tripura: {
    geoDataFile: `${MAPS_DIR}/tripura.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'tripura_district',
  },
  Uttarakhand: {
    geoDataFile: `${MAPS_DIR}/uttarakhand.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'uttarakhand_district',
  },
  'Uttar Pradesh': {
    geoDataFile: `${MAPS_DIR}/uttarpradesh.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'uttarpradesh_district',
  },

  'West Bengal': {
    geoDataFile: `${MAPS_DIR}/westbengal.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'westbengal_district',
  },
};

export const STATE_CODES = {
  AP: 'Andhra Pradesh',
  AR: 'Arunachal Pradesh',
  AS: 'Assam',
  BR: 'Bihar',
  CT: 'Chhattisgarh',
  GA: 'Goa',
  GJ: 'Gujarat',
  HR: 'Haryana',
  HP: 'Himachal Pradesh',
  JH: 'Jharkhand',
  KA: 'Karnataka',
  KL: 'Kerala',
  MP: 'Madhya Pradesh',
  MH: 'Maharashtra',
  MN: 'Manipur',
  ML: 'Meghalaya',
  MZ: 'Mizoram',
  NL: 'Nagaland',
  OR: 'Odisha',
  PB: 'Punjab',
  RJ: 'Rajasthan',
  SK: 'Sikkim',
  TN: 'Tamil Nadu',
  TG: 'Telangana',
  TR: 'Tripura',
  UT: 'Uttarakhand',
  UP: 'Uttar Pradesh',
  WB: 'West Bengal',
  AN: 'Andaman and Nicobar Islands',
  CH: 'Chandigarh',
  DN: 'Dadra and Nagar Haveli and Daman and Diu',
  DL: 'Delhi',
  JK: 'Jammu and Kashmir',
  LA: 'Ladakh',
  LD: 'Lakshadweep',
  PY: 'Puducherry',
  TT: 'Total',
};

const stateCodes = [];
const reverseStateCodes = {};
Object.keys(STATE_CODES).map((key, index) => {
  reverseStateCodes[STATE_CODES[key]] = key;
  stateCodes.push({code: key, name: STATE_CODES[key]});
  return null;
});
export const STATE_CODES_REVERSE = reverseStateCodes;
export const STATE_CODES_ARRAY = stateCodes;

// Source: Projected Populations (2019)
// National Commission on Population, "Population Projections for India and
// States (2011-2036)", Table-8 (p43), November 2019
// https://nhm.gov.in/New_Updates_2018/Report_Population_Projection_2019.pdf
export const STATE_POPULATIONS = {
  AP: 52221000,
  AR: 1504000,
  AS: 34293000,
  BR: 119520000,
  CT: 28724000,
  GA: 1540000,
  GJ: 67936000,
  HR: 28672000,
  HP: 7300000,
  JH: 37403000,
  KA: 65798000,
  KL: 35125000,
  MP: 82232000,
  MH: 122153000,
  MN: 3103000,
  ML: 3224000,
  MZ: 1192000,
  NL: 2150000,
  OR: 43671000,
  PB: 29859000,
  RJ: 77264000,
  SK: 664000,
  TN: 75695000,
  TG: 37220000,
  TR: 3992000,
  UP: 224979000,
  UT: 11141000,
  WB: 96906000,
  AN: 397000,
  CH: 1179000,
  DN: 959000,
  DL: 19814000,
  JK: 13203000,
  LA: 293000,
  LD: 68000,
  PY: 1504000,
  TT: 1332900000,
};

export const RAW_DATA_PARTITIONS = {
  v1: {
    start: new Date(2020, 0, 1),
    end: new Date(2020, 3, 19),
  },
  v2: {
    start: new Date(2020, 3, 20),
    end: new Date(2020, 3, 26),
  },
  v3: {
    start: new Date(2020, 3, 27),
    end: new Date(2020, 4, 9),
  },
  v4: {
    start: new Date(2020, 4, 10),
    end: new Date(),
  },
};

export const LOCALE_SHORTHANDS = {
  english: null,
  hindi: hi,
  telugu: te,
  kannada: null,
  gujarati: gu,
  marathi: null,
  tamil: ta,
  bengali: bn,
  punjabi: null,
  malayalam: null,
  odiya: null,
};

export const INITIAL_DATA = {
  TT: {
    total: {
      confirmed: 0,
      recovered: 0,
      deceased: 0,
    },
    delta: {
      confirmed: 0,
      recovered: 0,
      deceased: 0,
    },
    timeseries: {
      '2020-01-01': {
        confirmed: 0,
        recovered: 0,
        deceased: 0,
        tested: {
          samples: 0,
          source: '',
        },
      },
    },
    last_updated: null,
    notes: '',
  },
};
