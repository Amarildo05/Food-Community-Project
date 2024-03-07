"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";

export default function MainHeader() {
  const path = usePathname();

  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image
          priority
          src={logoImg.src}
          alt="A plate with food in it"
          width={500}
          height={500}
        />
        Best Quality Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link
              href="/meals"
              className={path.startsWith("/meals") ? classes.active : undefined}
            >
              Browse Meals
            </Link>
          </li>
          <li>
            <Link
              href="/community"
              className={path === "/community" ? classes.active : undefined}
            >
              Foodie Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}