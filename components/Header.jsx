import React from "react";
import Image from "next/image";
import record from "@/public/img/recording.png";
import UserIcon from "@/components/UserIcon";
import PagePadding from "@/components/PagePadding";

const Header = ({ children }) => {
  return (
    <header className="relative overflow-y-auto w-full h-full">
      <section className="absolute top-0 w-full">
        <div className="relative h-[400px] w-full">
          <Image fill src={record} className="object-cover" />
          <div className="absolute h-[400px] top-0 bg-black opacity-40 w-full"></div>
          <div className="absolute h-[400px] top-0 bg-gradient-to-t from-black w-full"></div>
        </div>
      </section>
      <section className="sticky">
        <PagePadding>
          searchSection
          <UserIcon />
        </PagePadding>
      </section>
      <section className="absolute">{children}</section>
    </header>
  );
};

export default Header;
