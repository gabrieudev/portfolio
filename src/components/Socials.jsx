import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/gabrieudev" },
  { icon: <FaLinkedin />, path: "https://linkedin.com/in/gabrieudev" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link
            key={index}
            href={social.path}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
