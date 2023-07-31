import React from "react";
import { IconType } from "react-icons";

interface SocialMediaItemProps {
  icon: IconType;
  text: string;
  link: string;
  website: string;
  accentColor: string;
}

export const SocialMediaItem: React.FC<SocialMediaItemProps> = ({
  icon: Icon,
  text,
  link,
  website,
  accentColor,
}) => {
  return (
    <a
      target="blank"
      href={link}
      title={`Find @ ${website}`}
      className="font-bold flex items-center space-x-2"
      style={{
        color: accentColor,
      }}
    >
      <Icon size={16} />
      <span>{text}</span>
    </a>
  );
};
