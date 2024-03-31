"use client"
import Link from "next/link";
import { useState } from "react";


export default function Header() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <header className="s-header">

      <div className="row s-header__inner width-sixteen-col">

        <div className="s-header__block">
          <div className="s-header__logo">
            <Link className="logo h2" href="/">
              Rohan.
            </Link>
          </div>

          <span className={isClicked ? "s-header__menu-toggle is-clicked" : "s-header__menu-toggle"} onClick={() => {
            setIsClicked(!isClicked);
            document.querySelector("body")?.classList.toggle("menu-is-open");
          }}>Menu</span>
        </div>

        <nav className="s-header__nav">

          <ul className="s-header__menu-links">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>

          <div className="s-header__contact">
            <Link href="/contact" className="btn btn--primary s-header__contact-btn">Contact</Link>
          </div>

        </nav>

      </div>

    </header>
  );
}
