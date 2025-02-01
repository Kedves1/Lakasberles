"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./success.module.css";

export default function SuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const sessionId = searchParams.get("session_id");

    if (sessionId) {
      setIsProcessing(false);
    } else {
      router.push("/");
    }
  }, [searchParams, router]);

  if (isProcessing) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <p>Foglalás feldolgozása...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <svg
            className={styles.checkmark}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className={styles.checkmark__circle}
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className={styles.checkmark__check}
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>
        <h1 className={styles.title}>Sikeres foglalás</h1>
        <button className={styles.backButton} onClick={() => router.push("/")}>
          Vissza a főoldalra
        </button>
      </div>
    </div>
  );
}
