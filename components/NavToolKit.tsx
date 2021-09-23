import { AiOutlineMenu } from "react-icons/ai"
import Link from 'next/link'

export const Toggle = ({ onClick } : any) => {
  return (
    <div onClick={onClick} className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
      <AiOutlineMenu />
    </div>
  )
}

export const Logo = () => {
  return (
    <Link href="/">
      <a className="bg-white w-12 h-12 rounded-full flex items-center justify-center">

      </a>
    </Link>
  )
}

export const Author = ({className} : any) => {
  return (
    <Link href="/">
      <a className={className}>
        © Tsydykh Pokhodiev, 2021
      </a>
    </Link>
  )
}

export const ExternalLink = ({href, className, children} : any) => {
  return (
    <a href={href} className={className} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  )
}