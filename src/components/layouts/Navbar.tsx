import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Row from "../elements/Row";
import { SekolahItems, KlinikItems, UnitItems } from "../elements/NavbarItems";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [expandItem, setExpandItem] = useState({});

  const expandNavbar = (isExpanded: React.SetStateAction<{}>) => {
    if (expandItem === isExpanded) {
      setExpandItem({});
    } else {
      setExpandItem(isExpanded);
    }
  };

  return (
    <>
      <div className="relative z-99">
        <nav className="flex flex-row fixed top-0 left-0 right-0 h-20 bg-blue-950 items-center justify-between px-8">
          <div className="h-[60%] w-max">
            <Link href="/">
              <img src="./tim7-logo.png" alt="Logo" className="logo h-full" />
            </Link>
          </div>
          <div className={`${styles.menuBars} cursor-pointer`}>
            {sidebar ? (
              <AiIcons.AiOutlineClose onClick={() => setSidebar(!sidebar)} />
            ) : (
              <FaIcons.FaBars
                onClick={() => {
                  setExpandItem({});
                  setSidebar(!sidebar);
                }}
              />
            )}
          </div>
          <div
            className={`${styles.navMenu} ${
              sidebar ? styles.active : ""
            }`}
          >
            <div className={`flex ${styles.topLogo} w-max h-full`}>
              <Link
                href="/"
                className="flex items-center h-full w-max m-auto"
              >
                <img
                  src="./tim7-logo.png"
                  alt="Logo"
                  className="logo h-[60%]"
                  onClick={() => setSidebar(!sidebar)}
                />
              </Link>
            </div>
            <ul className={styles.navItems}>
              <Link className={styles.navText} href="/">
                <li>Beranda</li>
              </Link>
              <Link className={styles.navText} href="/program">
                <li>Program</li>
              </Link>
              <li
                className={styles.navParent}
                onClick={() => expandNavbar(SekolahItems)}
              >
                <Row css={`items-center ${styles.navTextParent}`}>
                  <span>Sekolah Angkasa</span>
                  <RiIcons.RiArrowDropDownLine />
                </Row>
                <ul
                  className={`${styles.navChild} ${
                    expandItem === SekolahItems ? styles.active : ""
                  }`}
                >
                  {SekolahItems.map((child, index) => (
                    <Link key={index} href={child.path}>
                      <li className={styles.navTextChild}>{child.title}</li>
                    </Link>
                  ))}
                </ul>
              </li>
              <li
                className={styles.navParent}
                onClick={() => expandNavbar(KlinikItems)}
              >
                <Row css={`items-center ${styles.navTextParent}`}>
                  <span>Klinik Angkasa</span>
                  <RiIcons.RiArrowDropDownLine />
                </Row>
                <ul
                  className={`${styles.navChild} ${
                    expandItem === KlinikItems ? styles.active : ""
                  }`}
                >
                  {KlinikItems.map((child, index) => (
                    <Link key={index} href={child.path}>
                      <li className={styles.navTextChild}>{child.title}</li>
                    </Link>
                  ))}
                </ul>
              </li>
              <li
                className={styles.navParent}
                onClick={() => expandNavbar(UnitItems)}
              >
                <Row css={`items-center ${styles.navTextParent}`}>
                  <span>Unit Usaha</span>
                  <RiIcons.RiArrowDropDownLine />
                </Row>
                <ul
                  className={`${styles.navChild} ${
                    expandItem === UnitItems ? styles.active : ""
                  }`}
                >
                  {UnitItems.map((child, index) => (
                    <Link key={index} href={child.path}>
                      <li className={styles.navTextChild}>{child.title}</li>
                    </Link>
                  ))}
                </ul>
              </li>
              <Link className={styles.navText} href="/arsip">
                <li>Arsip</li>
              </Link>
              <Link className={styles.navText} href="/tentang">
                <li>Tentang</li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
