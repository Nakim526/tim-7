"use client";
import { useEffect, useState } from "react";
import * as RiIcons from "react-icons/ri";
import * as TbIcons from "react-icons/tb";
import { FaEdit } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import style from "./dashboard.module.css";
import { useRouter } from "next/navigation";
import React from "react";
import { ArsipProps } from "@/lib/interface";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

export default function Dashboard() {
  const [sidebar, setSidebar] = useState(false);
  const [loading, setLoading] = useState(false);
  const { replace } = useRouter();
  const [data, setData] = useState<ArsipProps[]>([]);

  const handleLogout = async () => {
    setLoading(true);
    const res = await fetch("/api/auth/logout", { method: "POST" });
    if (res.status === 500) {
      const response = await res.json();
      return alert(response.message);
    }
    replace("/login");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    withReactContent(Swal).fire({
      icon: "info",
      title: "Please Wait",
      text: "We are processing your request",
      showConfirmButton: false,
    });
    const form = e.currentTarget;
    const data = new FormData(form);
    const file = data.get("file") as File;
    data.append("fileName", file.name);
    data.append("mimeType", file.type);

    await fetch("/api/arsip/insert", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          withReactContent(Swal).fire({
            icon: "success",
            title: "Success",
            text: data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          withReactContent(Swal).fire({
            icon: "error",
            title: "Error",
            text: data.message,
            showConfirmButton: true,
          });
        }
      })
      .finally(() => {
        form.reset();
        setLoading(false);
      });
  };

  useEffect(() => {
    const getData = async () => {
      await fetch("api/arsip", {
        method: "GET",
        cache: "no-cache",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data.data);
          setLoading(false);
        });
    };
    getData();
  }, []);

  return (
    <>
      <div className={`${style.sidebar} ${sidebar ? style.active : ""}`}>
        {sidebar ? (
          <div className={sidebar ? "block" : "hidden"}>
            <div
              className={`${style.headerContainer} justify-between px-5 md:px-6`}
            >
              <img
                src="./tim7-logo.png"
                alt="Tim7 Logo"
                className={style.logo}
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
              <li
                className={style.sidebarItemText}
                onClick={() => handleLogout()}
              >
                Sign Out
              </li>
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
              <li
                aria-disabled={loading}
                className={style.sidebarItemIcon}
                onClick={() => handleLogout()}
              >
                <ImExit />
              </li>
            </ul>
            {/* <Link href="/dashboard/arsip">Arsip</Link> */}
          </div>
        )}
      </div>
      <div className="flex flex-col items-center w-full gap-4 m-8">
        <h1>Dashboard</h1>
        <form onSubmit={handleSubmit} className="flex flex-col w-2/5 gap-4">
          <label htmlFor="title">Tittle</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="title"
            required
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="description"
            required
          />
          <label htmlFor="image">Image</label>
          <input
            type="file"
            name="file"
            id="file"
            className="file-input file-input-primary"
            required
          />
          <button className="m-auto mt-4 btn btn-primary">Submit</button>
        </form>
        {data &&
          data.map((item: ArsipProps) => (
            <div className="shadow-sm card bg-base-100 w-96" key={item.id}>
              <figure>
                <img src={item.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
