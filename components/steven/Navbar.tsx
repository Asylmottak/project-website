import { FC } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/components/steven/NavBar.module.scss";

/**
 * The Navbar component used on all pages of the application.
 * @return {JSX.Element} The JSX code for Navbar component.
 */
const Navbar: FC = (): JSX.Element => {
  const { user } = useUser();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/steven">Home</Link>
        </li>
        <li>
          <Link href="/steven/about">About</Link>
        </li>
        <li>
          <Link href="/steven/pokemon">Pokemon</Link>
        </li>
        <li>
          <Link href="/steven/css-training">CSS</Link>
        </li>
        <div className={styles.navbarRight}>
          {!user ? (
            <li>
              <Link href="/api/auth/login">Login</Link>
            </li>
          ) : (
            <>
              <li>
                <Link href="/api/auth/logout">Logout</Link>
              </li>
              {user.picture && (
                <Image
                  src={user.picture}
                  alt="profile-picture"
                  width={30}
                  height={30}
                />
              )}
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
