import { WhatsAppIcon } from '../ui/icons'
import { generateWhatsAppLink, generalOrderMessage } from '../../utils/whatsapp'

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={generateWhatsAppLink(generalOrderMessage())}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a gente no WhatsApp"
      className="fixed bottom-6 right-5 z-50 w-14 h-14 bg-whatsapp text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:bg-green-500 animate-pulse-glow"
    >
      <WhatsAppIcon size={26} />
    </a>
  )
}
