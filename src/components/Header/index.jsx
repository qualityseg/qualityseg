import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../Button";
import * as gtag from "../../lib/gtag";
import styles from "./styles.module.scss";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  function closeMenu() {
    setShowMenu(false);
  }

  function agendarConsulta() {
    gtag.event({
      action: "agendar_consulta_cabeçalho",
      category: "marcar_consulta_whatsapp_cabeçalho",
      label: "Orçamento pelo Whatsapp",
      value: "Marcar consulta",
    });
  }

  function agendarConsultaMenu() {
    setShowMenu(false);
    gtag.event({
      action: "agendar_consulta_cabeçalho",
      category: "marcar_consulta_whatsapp_cabeçalho",
      label: "Fale com nossos vendedores",
      value: "Fale Conosco",
    });
  }

  return (
    <>
      <header className={styles.header}>
        <div className="mainContainer">
          <Link href="/">
            <a>
              <Image
                src="/icons/logo_transparente.png"
                alt="QualitySeg Cursos EAD"
                width="353"
                height="86"
              />
            </a>
          </Link>

          <button
            className={
              showMenu
                ? `${styles.btnMenuMobile} ${styles.menuOpen}`
                : styles.btnMenuMobile
            }
            onClick={() => setShowMenu(!showMenu)}
          >
            Menu
            <span className={styles.iconHamburguer}></span>
          </button>

          <nav className={styles.menu}>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/cursos_ead">
              <a>Treinamentos EAD</a>
            </Link>
            <Link href="/empresa">
              <a></a>
            </Link>
            
            <Link href="/vendedores">
              <a></a>
            </Link>

            <Link href="/orcamento">
              <a></a>
            </Link>
 
          </nav>

          <div className={styles.btnAgendar}>
            <Button
              dark
              onClick={agendarConsulta}
              link="https://wa.me/5514997605773"
            >
               <img src="/icons/whatsIcon.svg" alt="whatsapp" />
              Fale com um Consultor
            </Button>
          </div>
        </div>

        <nav
          className={
            showMenu
              ? `${styles.menuMobile} ${styles.active}`
              : styles.menuMobile
          }
        >
          <ul>
            <li onClick={closeMenu}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/cursos_ead">
                <a>produtos</a>
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/empresa">
                <a></a>
              </Link>
            </li>

            <li onClick={closeMenu}>
              <Link href="/vendedores">
                <a></a>
              </Link>
            </li>
          
            <li onClick={closeMenu}>
              <Link href="/orcamento#zbwid-1579615">
                <a></a>
              </Link>
            </li>
            <li onClick={agendarConsultaMenu}>
              <Link href="https://wa.me/5514997605773">
                <a target="_blank">Fale com um Consultor</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
