"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import IconButton from "./IconButton";
import { IoCloseOutline } from "react-icons/io5";

const Logo = ({ isInDrawer = false, onClickClose = () => {} }) => {
  const { push } = useRouter();
  const onClickLogo = () => {
    //home으로 이동하는 로직
    push("/");
  };
  const onClickMenu = () => {};

  return (
    <section className="flex flex-row items-center gap-3">
      {isInDrawer ? (
        <IconButton
          onClickIcon={onClickClose}
          icon={<IoCloseOutline size={30} />}
        />
      ) : (
        <IconButton
          onClickIcon={onClickMenu}
          icon={<RxHamburgerMenu size={24} />}
        />
      )}

      <div
        className="flex items-center text-[30px] cursor-pointer"
        onClick={onClickLogo}
      >
        <Image src={"/jsmusic.png"} width={30} height={30} alt="log" />
        Music
      </div>
    </section>
  );
};

export default Logo;
