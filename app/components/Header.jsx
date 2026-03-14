"use client";
import Link from "next/link";
import "./styles/header.css"

function Header() {
  return (
    <>
      <header className="header">
        <div className="button-header">
        <Link className="button-modal" href="/">Главная</Link>
          <Link className="button-modal" href="/myjob">Мои работы</Link>
        </div>
      </header>
    </>
  );
}

export default Header;