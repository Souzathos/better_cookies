// ─── Site Configuration ────────────────────────────────────────────────────
// Update WHATSAPP_NUMBER with the real number before going live.
// Format: country code + DDD + number, no spaces or symbols.
// Example: Brazil 11 99999-9999 → '5511999999999'

export const siteConfig = {
  name: 'Better Cookies',
  tagline: 'Cookies que você não vai esquecer.',
  description:
    'Feitos à mão, recheados com amor e os melhores ingredientes. Crocantes por fora, macios por dentro — do jeitinho que você ama.',

  whatsappNumber: '5551984167501',
  instagramUrl: 'https://www.instagram.com/better__cookies/',
  instagramHandle: '@better__cookies',
}

export const navLinks = [
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Como pedir', href: '#como-pedir' },
]

// iconName maps to lucide-react exports (see TrustBar.jsx for the registry)
export const trustItems = [
  { iconName: 'Award', value: '+2 anos', label: 'adoçando sua vida' },
  { iconName: 'Handshake', value: '100%', label: 'artesanal' },
  { iconName: 'Star', value: '4.9', label: 'avaliação média' },
  { iconName: 'Cookie', value: '+5.000', label: 'cookies entregues' },
]

// iconName maps to lucide-react exports (see StepCard.jsx for the registry)
export const orderSteps = [
  {
    number: 1,
    iconName: 'Cookie',
    title: 'Escolha seus sabores',
    description:
      'Dê uma olhada no cardápio e decida o que vai ser hoje. Spoiler: é difícil escolher só um.',
  },
  {
    number: 2,
    iconName: 'MessageCircle',
    title: 'Fale com a gente',
    description:
      'Mande mensagem no WhatsApp com seus sabores e a quantidade. A gente responde rapidinho.',
  },
  {
    number: 3,
    iconName: 'Package',
    title: 'Receba fresquinho',
    description:
      'Seus cookies chegam quentinhos, prontos pra fazer o seu dia muito mais gostoso.',
  },
]
