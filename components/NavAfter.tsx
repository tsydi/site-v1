import { ExternalLink } from "./NavToolKit"
import { motion } from "framer-motion"

export const NavAfter = () => {
  return (
    <motion.div
      className="bg-black py-1 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.75 }}
    >
      <span className="text-white text-xs md:text-base">
        I am open for a remote job! * Check
        <ExternalLink
          href="https://drive.google.com/file/d/1SLYPurTDccShrs43lrU8GDeelNG1OEEx/view?usp=sharing"
          className="underline mx-1.5"
        >
          Resume
        </ExternalLink>
      </span>
    </motion.div>
  )
}