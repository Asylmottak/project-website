import { FC } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

import styles from "@/styles/components/Nav.module.scss";
import { WeatherIcon } from "./WeatherIcon";

/**
 * The nav component used on all pages of the application.
 * @return {JSX.Element} The JSX code for nav component.
 */
const Nav: FC = (): JSX.Element => {
  const { user } = useUser();

  return (
    <nav className={styles.nav}>
      <ul>
        <WeatherIcon size={60} />
        <div className={styles.navRight}>
          {!user ? (
            <li>
              <Link href="/api/auth/login">Login</Link>
            </li>
          ) : (
            <>
              {!user ? (
                <li>
                  <Link href="/api/auth/login">Login</Link>
                </li>
              ) : (
                <li>
                  <Link href="/api/auth/logout">Logout</Link>
                </li>
              )}
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
