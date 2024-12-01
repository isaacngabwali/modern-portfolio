import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
  RiTiktokLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "YouTube",
    link: "https://youtube.com/@amanyaabdulkarim?si=pznH_RrbNySwIO4e",
    Icon: RiYoutubeLine,
  },
  {
    name: "TikTok",
    link: "https://vm.tiktok.com/ZMhc7yaEu/",
    Icon: RiTiktokLine,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/amanya.akarim",
    Icon: RiFacebookLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
