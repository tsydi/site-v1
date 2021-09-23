import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiOutlineArrowRight } from "react-icons/ai";
import { ExternalLink } from "./NavToolKit";

export const SocialIcons = () => {
  return (
    <div className="my-6 md:my-0 iconsColor text-2xl md:text-xl flex flex items-center justify-center">
      <ExternalLink href="https://github.com/tsydykh-pokhodiev" className="bg-gray-100 p-1 rounded-full md:flex items-center justify-center">
        <AiFillGithub />
      </ExternalLink>

      <ExternalLink href="https://github.com/tsydykh-pokhodiev" className="bg-gray-100 p-1 mx-4 rounded-full md:flex items-center justify-center">
        <AiFillLinkedin />
      </ExternalLink>

      <ExternalLink href="https://github.com/tsydykh-pokhodiev" className="bg-gray-100 p-1 rounded-full md:flex items-center justify-center">
        <AiFillTwitterCircle />
      </ExternalLink>
    </div>
  )
}

export const Arrow = () => <AiOutlineArrowRight className="text-xs ml-2" />