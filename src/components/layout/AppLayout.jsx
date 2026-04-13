import Header from './Header'
import Footer from './Footer'

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-cream font-sans text-chocolate">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
