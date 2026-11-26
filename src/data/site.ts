// All site content lives here, so text changes never require touching page markup.

export const site = {
  name: 'Nova Sack & Packaging Solution',
  shortName: 'Nova Sack',
  tagline: 'Engineered packaging, delivered with precision.',
  description:
    'Nova Sack & Packaging Solution is a Chattogram-based manufacturer of polypropylene (PP) woven sacks, big bags, laminated bags and fertilizer bags, custom-made for agro, fertilizer, cement, chemical, sugar and tea industries.',
  established: 2023,
  phone: '+880 1755-557676',
  phoneHref: 'tel:+8801755557676',
  whatsapp: '8801755557676', // used for https://wa.me/<number>
  email: 'novasackind@gmail.com',
  address: {
    line1: '52/A Fouzderhut, Industrial Area',
    line2: 'Pahartoli, Chattogram, Bangladesh',
    street: '52/A Fouzderhut, Industrial Area, Pahartoli',
    city: 'Chattogram',
    country: 'BD',
  },
  // Google Maps embed. TODO: replace with the exact factory pin (Share > Embed a map)
  mapEmbed:
    'https://www.google.com/maps?q=Fouzderhut+Industrial+Area+Pahartoli+Chattogram&output=embed',
  // Web3Forms access key (free at web3forms.com). TODO: replace before going live
  web3formsKey: 'YOUR_WEB3FORMS_ACCESS_KEY',
  social: {
    facebook: '', // e.g. https://facebook.com/novasack
    linkedin: '',
  },
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Capacity', href: '/capacity' },
  { label: 'Clients', href: '/clients' },
  { label: 'Contact', href: '/contact' },
];

export const stats = [
  { value: '2023', label: 'Year established' },
  { value: '4', label: 'Machinery source countries' },
  { value: '~2M', label: 'Meters loom output / month' },
  { value: '15', label: 'Valued corporate clients' },
];

export const capacity = [
  { value: '200', unit: 'Metric ton / month', label: 'Tape line' },
  { value: '2 Million', unit: 'Meters / month (approx.)', label: 'Loom capacity' },
  { value: '6', unit: 'Integrated, tape to delivery', label: 'Production stages' },
];

export const values = [
  { title: 'Quality', text: 'Premium-grade products' },
  { title: 'Innovation', text: 'Always improving' },
  { title: 'Sustainability', text: 'Responsible practices' },
  { title: 'Service', text: 'Timely and reliable' },
];

export const products = [
  {
    slug: 'pp-woven-sacks',
    title: 'PP Woven Sacks',
    text: 'Engineered to withstand heavy loads. Ideal for agro-based products, fertilizers, cement and chemicals, in custom shapes and sizes.',
    image: '/images/pp-bags.jpg',
  },
  {
    slug: 'big-bags',
    title: 'Big Bags',
    text: 'High-capacity bulk bags widely used for packing sugar and fertilizers, built for safe handling and transport.',
    image: '/images/loom.jpg',
  },
  {
    slug: 'laminated-bags',
    title: 'Laminated Bags',
    text: 'Moisture-resistant laminated bags that protect contents such as tea and chemicals from damp and contamination.',
    image: '/images/tape-rolls.jpg',
  },
  {
    slug: 'fertilizer-bags',
    title: 'Fertilizer Bags',
    text: 'Robust, purpose-made packaging for fertilizer, strong enough for industrial volumes and long-distance supply.',
    image: '/images/loom-wide.jpg',
  },
];

export const industries = ['Agro Products', 'Fertilizer', 'Cement', 'Chemicals', 'Sugar', 'Tea'];

export const process = [
  { title: 'Tape Extrusion', text: 'PP granules are extruded and stretched into high-tenacity tapes.' },
  { title: 'Weaving', text: 'Circular looms weave the tapes into tubular or flat fabric.' },
  { title: 'Lamination', text: 'An optional coating adds moisture and dust protection.' },
  { title: 'Cutting', text: 'Fabric is cut precisely to the bag size you specify.' },
  { title: 'Printing', text: 'Multi-colour printing carries your brand and product details.' },
  { title: 'Sewing & Delivery', text: 'Bags are stitched, inspected, baled and delivered on schedule.' },
];

export const machineryCountries = ['China', 'India', 'Korea', 'Taiwan'];

// TODO: confirm with the client that these names (and later, logos) may be shown publicly
export const clients = [
  'BCIC',
  'KAFCO',
  'S A Group',
  'Abul Khair Group',
  'M/S Sheikh Brothers, Khulna',
  'M/s Mosharrof Brothers',
  'TSP Fertilizer',
  'Sugar Mills',
  'Flour Mills',
];

export const founder = {
  name: 'Munir Hossain',
  role: 'Founder & CEO',
  image: '/images/founder.jpg',
  quote: 'A partnership that goes beyond packaging.',
  message: [
    'Welcome to Nova Sack & Packaging Solution, a leading force in manufacturing and supplying polypropylene bags tailored to diverse packaging needs. Established in 2023, we are committed to comprehensive packaging solutions that align seamlessly with each customer’s unique requirements and specifications.',
    'Our core strength is customization. We offer bags in many shapes and sizes, engineered to withstand heavy loads for agro-based products, fertilizers, cement, chemicals and more. Our range also includes big bags for sugar and fertilizer, and laminated bags that protect tea and chemicals from moisture.',
    'Our commitment to excellence is reflected in our modern machinery, sourced from renowned manufacturers in China, India, Korea and Taiwan, so that our products are both highly functional and built on the latest advances in capital machinery.',
    'Choose Nova Sack for a collaboration that ensures your products are not only protected, but presented with distinction and care.',
  ],
};
