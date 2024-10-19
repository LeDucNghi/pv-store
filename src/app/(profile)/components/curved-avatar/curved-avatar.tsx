import "./curved-avatar.scss";

import * as React from "react";

import Image from "next/image";

export interface ICurvedAvatarProps {
  avatar: string;
  userName: string;

  style?: React.CSSProperties;
}

export function CurvedAvatar({ avatar, userName, style }: ICurvedAvatarProps) {
  return (
    <div className="box" style={style}>
      <Image
        src={avatar}
        alt="a random avatar"
        width={100}
        height={100}
        className="avatar"
      />
      <h2> {userName} </h2>
      <p>Expert CSS Hacker</p>
    </div>
  );
}
