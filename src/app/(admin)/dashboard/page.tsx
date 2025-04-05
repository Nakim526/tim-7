"use client";
import { useState } from "react";
import * as RiIcons from "react-icons/ri";
import * as TbIcons from "react-icons/tb";
import { FaEdit } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import style from "./dashboard.module.css";
// import { useSession } from "next-auth/react";

export default function Dashboard() {
  const [sidebar, setSidebar] = useState(false);
  //   const { data: session, status } = useSession();
  //   console.log('Session: ', session);
  //   console.log('Status: ', status);
  return (
    <>
      <div className="flex flex-row justify-start flex-grow w-full bg-amber-50">
        <div className={`${style.sidebar} ${sidebar ? style.active : ""}`}>
          {sidebar ? (
            <div className={sidebar ? "block" : "hidden"}>
              <div className={`${style.headerContainer} justify-between px-4 md:px-6`}>
                <img
                  src="./tim7-logo.png"
                  alt="Tim7 Logo"
                  className="w-[30px] md:w-[40px]"
                />
                <span
                  className={style.sidebarItemIcon}
                  onClick={() => setSidebar(false)}
                >
                  <TbIcons.TbLayoutSidebarRightExpandFilled className="cursor-pointer" />
                </span>
              </div>
              <ul className={style.sidebarTextContainer}>
                <li className={style.sidebarItemText}>Semua Arsip</li>
                <li className={style.sidebarItemText}>Ubah Arsip</li>
                <li className={style.sidebarItemText}>Tambah Arsip</li>
                <li className={style.sidebarItemText}>Profil</li>
                <li className={style.sidebarItemText}>Sign Out</li>
              </ul>
            </div>
          ) : (
            <div className={sidebar ? "hidden" : "block"}>
              <div className={`${style.headerContainer} justify-center`}>
                <span
                  className={style.sidebarItemIcon}
                  onClick={() => setSidebar(true)}
                >
                  <TbIcons.TbLayoutSidebarLeftExpandFilled />
                </span>
              </div>
              <ul className={style.sidebarIconsContainer}>
                <li className={style.sidebarItemIcon}>
                  <RiIcons.RiFolderFill />
                </li>
                <li className={style.sidebarItemIcon}>
                  <FaEdit />
                </li>
                <li className={style.sidebarItemIcon}>
                  <RiIcons.RiFolderAddFill />
                </li>
                <li className={style.sidebarItemIcon}>
                  <RiIcons.RiAccountCircleFill />
                </li>
                <li className={style.sidebarItemIcon}>
                  <ImExit />
                </li>
              </ul>
            </div>
          )}
        </div>
        <h1 className="">Dashboard</h1>
      </div>
    </>
  );
}
