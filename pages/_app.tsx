import { CartProvider } from '@/contexts/CartContext/CartContext'
import '@/styles/globals.css'

function App({ Component, pageProps }) {
  return (<CartProvider>
    <Component {...pageProps} />
  </CartProvider>
  )

}

export default App