// ─── Cookie Data ────────────────────────────────────────────────────────────
// To add real photos: set image to the file path, e.g. '/images/red-velvet.jpg'
// When image is set, the gradient placeholder is ignored automatically.

export const featuredCookies = [
  {
    id: 1,
    name: 'Red Velvet com Branquinho',
    slug: 'red-velvet',
    description:
      'Massa aveludada de red velvet com recheio generoso de chocolate branco. O queridinho que todo mundo pede de novo.',
    badge: 'Mais pedido',
    image: null,
    gradient: 'linear-gradient(135deg, #5C0A14 0%, #9B2335 60%, #C0392B 100%)',
    category: 'especiais',
    whatsappName: 'Red Velvet com Branquinho',
  },
  {
    id: 2,
    name: 'Nutella',
    slug: 'nutella',
    description:
      'Cookie de chocolate com recheio de Nutella que derrete na boca. Amor à primeira mordida.',
    badge: 'Queridinho',
    image: null,
    gradient: 'linear-gradient(135deg, #2C1206 0%, #6B3415 60%, #9B5A2A 100%)',
    category: 'classicos',
    whatsappName: 'Nutella',
  },
  {
    id: 3,
    name: 'Chocolate Branco',
    slug: 'chocolate-branco',
    description:
      'Massa dourada com pedaços de chocolate branco derretendo em cada mordida. Puro conforto.',
    badge: 'Clássico',
    image: null,
    gradient: 'linear-gradient(135deg, #C8883C 0%, #D4A056 60%, #E8C878 100%)',
    category: 'classicos',
    whatsappName: 'Chocolate Branco',
  },
]

export const menuCookies = [
  ...featuredCookies,
  {
    id: 4,
    name: 'KitKat',
    slug: 'kitkat',
    description: 'Cookie recheado com pedaços de KitKat crocante. Crocante ao cubo.',
    badge: null,
    image: null,
    gradient: 'linear-gradient(135deg, #7A0A0A 0%, #C0392B 100%)',
    category: 'especiais',
    whatsappName: 'KitKat',
  },
  {
    id: 5,
    name: 'Oreo',
    slug: 'oreo',
    description:
      'Cookie de chocolate com pedaços de Oreo e recheio cremoso. Clássico que nunca sai de moda.',
    badge: null,
    image: null,
    gradient: 'linear-gradient(135deg, #1A1A2E 0%, #16213E 50%, #2D2D44 100%)',
    category: 'classicos',
    whatsappName: 'Oreo',
  },
  {
    id: 6,
    name: 'Doce de Leite',
    slug: 'doce-de-leite',
    description:
      'Massa de baunilha com recheio de doce de leite caseiro. Brasil em cada mordida.',
    badge: null,
    image: null,
    gradient: 'linear-gradient(135deg, #8B4513 0%, #C8883C 60%, #D4A056 100%)',
    category: 'classicos',
    whatsappName: 'Doce de Leite',
  },
  {
    id: 7,
    name: "M&M's",
    slug: 'mm',
    description:
      "Cookie colorido com M&M's que torna cada mordida uma surpresa. Alegria garantida.",
    badge: 'Favorito das crianças',
    image: null,
    gradient: 'linear-gradient(135deg, #E53935 0%, #FB8C00 50%, #FFD600 100%)',
    category: 'especiais',
    whatsappName: "M&M's",
  },
  {
    id: 8,
    name: 'Brownie com Marshmallow',
    slug: 'brownie-marshmallow',
    description: 'Denso como brownie, recheado com marshmallow derretido. Indulgência total.',
    badge: null,
    image: null,
    gradient: 'linear-gradient(135deg, #1A0A02 0%, #3C1F0D 60%, #5A3020 100%)',
    category: 'especiais',
    whatsappName: 'Brownie com Marshmallow',
  },
  {
    id: 9,
    name: 'Black',
    slug: 'black',
    description: 'Cookie escuro e intenso de chocolate amargo para os verdadeiros apreciadores do cacau.',
    badge: null,
    image: null,
    gradient: 'linear-gradient(135deg, #0D0D0D 0%, #1A0A02 50%, #2D1506 100%)',
    category: 'classicos',
    whatsappName: 'Black',
  },
  {
    id: 10,
    name: 'Stikadinho',
    slug: 'stikadinho',
    description: 'Cookie crocante com pedaços de Stikadinho espalhados por toda a massa. Impossível parar.',
    badge: null,
    image: null,
    gradient: 'linear-gradient(135deg, #7A4520 0%, #B86A30 60%, #C8883C 100%)',
    category: 'especiais',
    whatsappName: 'Stikadinho',
  },
]

export const menuCategories = [
  { key: 'todos', label: 'Todos' },
  { key: 'classicos', label: 'Clássicos' },
  { key: 'especiais', label: 'Especiais' },
]
