export interface Location {
  slug: string;
  name: string;
  postcode: string;
  /** Council / shire the town sits in */
  shire: string;
  /** Approx coordinates for "nearby areas" calculations */
  lat: number;
  lng: number;
  /** Local-colour blurb woven into combo pages for unique content */
  blurb: string;
  /** Whether this is the home base (Wallan) */
  primary?: boolean;
}

export const locations: Location[] = [
  // ── Home base ──────────────────────────────────────────────
  {
    slug: 'wallan',
    name: 'Wallan',
    postcode: '3756',
    shire: 'Mitchell Shire',
    lat: -37.4156,
    lng: 145.0058,
    blurb:
      'Wallan is our home town — a fast-growing community on the Hume Freeway in the Mitchell Shire, about 50km north of Melbourne. We’re proud to be the local accountants and bookkeepers right here in Wallan.',
    primary: true,
  },

  // ── Mitchell Shire ─────────────────────────────────────────
  {
    slug: 'kilmore',
    name: 'Kilmore',
    postcode: '3764',
    shire: 'Mitchell Shire',
    lat: -37.2967,
    lng: 144.9522,
    blurb:
      'Kilmore is Victoria’s oldest inland town, just up the road from Wallan in the Mitchell Shire. We work with families, farmers and small businesses throughout the Kilmore district.',
  },
  {
    slug: 'beveridge',
    name: 'Beveridge',
    postcode: '3753',
    shire: 'Mitchell Shire',
    lat: -37.4719,
    lng: 144.9994,
    blurb:
      'Beveridge is one of the fastest-growing communities in the Mitchell Shire, right on Wallan’s doorstep. We help its many new residents and home-based businesses with tax and bookkeeping.',
  },
  {
    slug: 'wandong',
    name: 'Wandong',
    postcode: '3758',
    shire: 'Mitchell Shire',
    lat: -37.3506,
    lng: 145.0314,
    blurb:
      'Wandong sits between Wallan and Kilmore against the backdrop of the Mount Disappointment ranges. We’re just minutes away for local tax and bookkeeping help.',
  },
  {
    slug: 'heathcote-junction',
    name: 'Heathcote Junction',
    postcode: '3758',
    shire: 'Mitchell Shire',
    lat: -37.3411,
    lng: 145.0394,
    blurb:
      'Heathcote Junction is a close-knit community neighbouring Wandong in the Mitchell Shire — and an easy trip to our Wallan base for face-to-face advice.',
  },
  {
    slug: 'broadford',
    name: 'Broadford',
    postcode: '3658',
    shire: 'Mitchell Shire',
    lat: -37.2058,
    lng: 145.0469,
    blurb:
      'Broadford is a busy regional town in the heart of the Mitchell Shire. We support its tradies, farmers and small businesses with accounting and BAS lodgements.',
  },
  {
    slug: 'seymour',
    name: 'Seymour',
    postcode: '3660',
    shire: 'Mitchell Shire',
    lat: -37.0269,
    lng: 145.1361,
    blurb:
      'Seymour is the largest town in the Mitchell Shire, on the Goulburn River. We help Seymour businesses and individuals across the full range of tax and bookkeeping services.',
  },
  {
    slug: 'tallarook',
    name: 'Tallarook',
    postcode: '3659',
    shire: 'Mitchell Shire',
    lat: -37.1042,
    lng: 145.0764,
    blurb:
      'Tallarook is a rural community near Seymour in the Mitchell Shire, popular with farmers and tree-changers. We make local accounting easy and accessible.',
  },
  {
    slug: 'pyalong',
    name: 'Pyalong',
    postcode: '3521',
    shire: 'Mitchell Shire',
    lat: -37.1186,
    lng: 144.8597,
    blurb:
      'Pyalong is a small rural township in the Mitchell Shire’s north-west. We look after the books and tax for its farming and small-business community.',
  },
  {
    slug: 'willowmavin',
    name: 'Willowmavin',
    postcode: '3764',
    shire: 'Mitchell Shire',
    lat: -37.2647,
    lng: 144.9583,
    blurb:
      'Willowmavin is a rural locality just north of Kilmore in the Mitchell Shire. We’re the convenient local choice for tax and bookkeeping.',
  },

  // ── City of Whittlesea (southern neighbours) ───────────────
  {
    slug: 'whittlesea',
    name: 'Whittlesea',
    postcode: '3757',
    shire: 'City of Whittlesea',
    lat: -37.5119,
    lng: 145.1192,
    blurb:
      'Whittlesea is a historic township at the foot of the Great Dividing Range, a short drive south of Wallan. We help its growing community with all things tax and bookkeeping.',
  },
  {
    slug: 'mernda',
    name: 'Mernda',
    postcode: '3754',
    shire: 'City of Whittlesea',
    lat: -37.6058,
    lng: 145.1006,
    blurb:
      'Mernda is one of Melbourne’s fastest-growing northern suburbs in the City of Whittlesea. We support its many families, sole traders and small businesses.',
  },
  {
    slug: 'doreen',
    name: 'Doreen',
    postcode: '3754',
    shire: 'City of Whittlesea',
    lat: -37.6047,
    lng: 145.1453,
    blurb:
      'Doreen is a thriving family suburb in the City of Whittlesea. We make tax returns and bookkeeping simple for busy local households and businesses.',
  },
  {
    slug: 'wollert',
    name: 'Wollert',
    postcode: '3750',
    shire: 'City of Whittlesea',
    lat: -37.5836,
    lng: 145.0289,
    blurb:
      'Wollert is a rapidly expanding suburb in Melbourne’s north, between Wallan and Epping. We help its new residents and start-ups get their finances sorted.',
  },
  {
    slug: 'donnybrook',
    name: 'Donnybrook',
    postcode: '3064',
    shire: 'City of Whittlesea',
    lat: -37.5331,
    lng: 144.9756,
    blurb:
      'Donnybrook is a fast-developing community on the Hume corridor between Wallan and Craigieburn. We’re the convenient local accountants for the area.',
  },
  {
    slug: 'kalkallo',
    name: 'Kalkallo',
    postcode: '3064',
    shire: 'City of Whittlesea',
    lat: -37.5469,
    lng: 144.9531,
    blurb:
      'Kalkallo is a growth suburb just south of Wallan along the Hume Freeway. We support its new homeowners and home-based businesses with tax and bookkeeping.',
  },

  // ── City of Hume ───────────────────────────────────────────
  {
    slug: 'craigieburn',
    name: 'Craigieburn',
    postcode: '3064',
    shire: 'City of Hume',
    lat: -37.6,
    lng: 144.9405,
    blurb:
      'Craigieburn is a major northern Melbourne suburb in the City of Hume, an easy drive from Wallan. We help its diverse community of families and businesses.',
  },
  {
    slug: 'mickleham',
    name: 'Mickleham',
    postcode: '3064',
    shire: 'City of Hume',
    lat: -37.5394,
    lng: 144.9036,
    blurb:
      'Mickleham is a booming growth area in the City of Hume between Wallan and Craigieburn. We make local accounting and bookkeeping easy for its new residents.',
  },
  {
    slug: 'sunbury',
    name: 'Sunbury',
    postcode: '3429',
    shire: 'City of Hume',
    lat: -37.5786,
    lng: 144.7272,
    blurb:
      'Sunbury is a large established town in Melbourne’s north-west, within reach of our Wallan base. We support its many small businesses and households.',
  },
  {
    slug: 'diggers-rest',
    name: 'Diggers Rest',
    postcode: '3427',
    shire: 'City of Melton',
    lat: -37.6286,
    lng: 144.7186,
    blurb:
      'Diggers Rest is a growing township north-west of Melbourne. We help its residents and businesses with tax, BAS and bookkeeping.',
  },

  // ── Macedon Ranges (western neighbours) ────────────────────
  {
    slug: 'romsey',
    name: 'Romsey',
    postcode: '3434',
    shire: 'Macedon Ranges Shire',
    lat: -37.3528,
    lng: 144.7444,
    blurb:
      'Romsey is a rural town in the Macedon Ranges, west of Wallan. We look after farmers, tradies and small businesses throughout the district.',
  },
  {
    slug: 'lancefield',
    name: 'Lancefield',
    postcode: '3435',
    shire: 'Macedon Ranges Shire',
    lat: -37.2783,
    lng: 144.7314,
    blurb:
      'Lancefield is a charming Macedon Ranges town known for its wineries and farms. We provide approachable local accounting and bookkeeping.',
  },
  {
    slug: 'gisborne',
    name: 'Gisborne',
    postcode: '3437',
    shire: 'Macedon Ranges Shire',
    lat: -37.4889,
    lng: 144.5917,
    blurb:
      'Gisborne is a thriving Macedon Ranges town with a strong small-business community. We help local businesses and families with all their tax needs.',
  },
  {
    slug: 'riddells-creek',
    name: 'Riddells Creek',
    postcode: '3431',
    shire: 'Macedon Ranges Shire',
    lat: -37.4622,
    lng: 144.6747,
    blurb:
      'Riddells Creek is a popular Macedon Ranges community for tree-changers and commuters. We make tax and bookkeeping straightforward for the local area.',
  },
  {
    slug: 'macedon',
    name: 'Macedon',
    postcode: '3440',
    shire: 'Macedon Ranges Shire',
    lat: -37.4203,
    lng: 144.5642,
    blurb:
      'Macedon sits at the foot of Mount Macedon in the picturesque Macedon Ranges. We support its small businesses and households with reliable accounting.',
  },
  {
    slug: 'woodend',
    name: 'Woodend',
    postcode: '3442',
    shire: 'Macedon Ranges Shire',
    lat: -37.3578,
    lng: 144.5267,
    blurb:
      'Woodend is a busy Macedon Ranges town on the Calder corridor. We help its hospitality, retail and professional businesses stay on top of their finances.',
  },
  {
    slug: 'kyneton',
    name: 'Kyneton',
    postcode: '3444',
    shire: 'Macedon Ranges Shire',
    lat: -37.2447,
    lng: 144.4533,
    blurb:
      'Kyneton is a historic and vibrant town in the Macedon Ranges. We provide accounting, bookkeeping and BAS services to its thriving business community.',
  },
  {
    slug: 'clarkefield',
    name: 'Clarkefield',
    postcode: '3430',
    shire: 'Macedon Ranges Shire',
    lat: -37.4861,
    lng: 144.7456,
    blurb:
      'Clarkefield is a quiet rural locality between Sunbury and Romsey. We’re the convenient local choice for tax returns and bookkeeping.',
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);

/** Haversine-ish distance (good enough for ranking nearby towns). */
function distance(a: Location, b: Location): number {
  const dLat = a.lat - b.lat;
  const dLng = (a.lng - b.lng) * Math.cos((a.lat * Math.PI) / 180);
  return Math.sqrt(dLat * dLat + dLng * dLng);
}

export function nearbyLocations(slug: string, count = 6): Location[] {
  const origin = getLocation(slug);
  if (!origin) return [];
  return locations
    .filter((l) => l.slug !== slug)
    .map((l) => ({ l, d: distance(origin, l) }))
    .sort((x, y) => x.d - y.d)
    .slice(0, count)
    .map((x) => x.l);
}
