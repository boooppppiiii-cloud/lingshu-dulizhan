import type { ReactNode } from "react";
import styles from "../brand-homepage.module.css";

export function HomepageEntrance({ children }: { children: ReactNode }) {
  return <div className={styles.enteredHomepage}>{children}</div>;
}
