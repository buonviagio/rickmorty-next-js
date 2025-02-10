import styles from "./NavigationBar.module.css";
import Link from "next/link";
import React from "react";

export default function NavigationBar() {
  return (
    <nav className="navigation-bar-wraper">
      <div className={styles.navigationBarContainer}>
        <ul className={styles.navbar}>
          <li>
            <Link href="/homepage">Homepage</Link>
          </li>
          <li>
            <Link href="/rickmorty/1">Characters</Link>
          </li>
          <li>
            <Link href="/seasons">Episodes</Link>
          </li>
        </ul>
      </div>
      <div className={styles.gradientContainer}></div>
    </nav>
  );
}
