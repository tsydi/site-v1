import React, { useState } from 'react'
import { Author, ExternalLink, Logo, Toggle } from './NavToolKit'
import { Arrow, SocialIcons } from './Icons'
import { motion } from 'framer-motion'
import ActiveLink from './ActiveLink'

const variants = {
  open: { x: '0', opacity: 1 },
  closed: { x: '-100%' }
}

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="hidden md:flex text-white items-center justify-between">
        <Logo />
        <div className="text-gray-200">
          <ActiveLink activeClassName="active text-white" href="/"><a className="mx-4">Home</a></ActiveLink>
          <ActiveLink activeClassName="active" href="/about"><a className="mx-4">About</a></ActiveLink>
          <ActiveLink activeClassName="active" href="/projects"><a className="mx-4">Projects</a></ActiveLink>
          <ActiveLink activeClassName="active" href="/contact"><a className="mx-4">Contact</a></ActiveLink>
        </div>
        <SocialIcons />
        <ExternalLink href="https://github.com" className="py-1 px-6 border border-solid flex items-center justify-center">
          Products
          <Arrow />
        </ExternalLink>
      </div>

      <div className="flex md:hidden items-center justify-between">
        <Logo />
        <Toggle onClick={() => setIsOpen(isOpen => !isOpen)} />
        <motion.div
          className="px-16 w-2/3 h-full overlay fixed inset-0 z-10 flex flex-col justify-center transition duration-300 text-white"
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          style={{ opacity: 0 }}
        >
          <ActiveLink activeClassName="activeMob" href="/"><a className="my-4">Home</a></ActiveLink>
          <ActiveLink activeClassName="activeMob" href="/about"><a className="my-4">About</a></ActiveLink>
          <ActiveLink activeClassName="activeMob" href="/projects"><a className="my-4">Projects</a></ActiveLink>
          <ActiveLink activeClassName="activeMob" href="/contact"><a className="my-4">Contact</a></ActiveLink>
          <ExternalLink href="https://github.com" className="my-4 flex items-center">Products<Arrow /></ExternalLink>
          <SocialIcons />
          <Author className="text-xs absolute bottom-20 flex items-center justify-center" />
        </motion.div>
      </div>
    </nav>
  )
}