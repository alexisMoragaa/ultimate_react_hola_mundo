import { Link } from "react-router-dom";
import styles from "./Error.module.css";

export default function ErrorDetail() {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.noise}></div>
      <div className={styles.overlay}></div>
      <div className={styles.terminal}>
        <h1>
          Error <span className={styles.errorcode}>404</span>
        </h1>
        <p className={styles.output}>
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <p className={styles.output}>
          Please try to{" "}
          <a href="#1" className={styles.a}>
            go back
          </a>{" "}
          or{" "}
          <Link to="/" className={styles.a}>
            return to the homepage
          </Link>
          .
        </p>
        <p className={styles.output}>Good luck.</p>
      </div>
    </div>
  );
}
