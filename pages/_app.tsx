import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NavBar } from '../components/NavBar'
import { NavAfter } from '../components/NavAfter'
import { Author } from '../components/NavToolKit'
import { motion } from 'framer-motion'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <motion.div
      className="flex flex-col min-h-screen overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.75 }}
    >
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.25 }}
      >
        <NavBar />
      </motion.header>
      <NavAfter />
      <motion.main
        className="min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.25 }}
      >
        <Component {...pageProps} />
      </motion.main>
      <footer>
        <Author className="text-white text-sm flex items-center justify-center" />
      </footer>
    </motion.div>
  )
}

export default MyApp