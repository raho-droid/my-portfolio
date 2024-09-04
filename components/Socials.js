// links
import Link from "next/link";

// icons
import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiWhatsappLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={"https://www.linkedin.com/in/rahman-alim-82a6281a1/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinBoxLine size={25} />
      </Link>
      <Link
        href={"https://www.instagram.com/raho_btw"}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine size={25} />
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={"https://wa.me/905369619164"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiWhatsappLine size={25} />
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={"https://github.com/raho-droid"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine size={25} />
      </Link>
    </div>
  );
};

export default Socials;
