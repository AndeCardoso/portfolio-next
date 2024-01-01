import React from "react";
import Image from "next/image";

interface IAvatarProps {
  imageURL: string;
  size: number;
}

export const Avatar = ({ imageURL, size }: IAvatarProps) => {
  return (
    <Image
      width={size}
      height={size}
      alt="avatar image"
      style={{
        objectFit: "cover",
        objectPosition: "center",
        borderRadius: 50,
      }}
      src={imageURL}
    />
  );
};
