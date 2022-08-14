import React from "react";
import styles from "./Tip.module.scss";
import Image from "next/image";

const Tip = () => {
  return (
    <div className={styles.tip}>
      <div className={styles.tipTitle}>
        <Image
          src={"/light.svg"}
          width={15}
          height={15}
          alt="light icon"
          className={styles.tipTitleIcon}
        />
        <p className={styles.tipTitleText}>TIP</p>
      </div>
      <p className={styles.tipText}>There{`'`}s two easter eggs on this website. Can you find them?</p>
    </div>
  );
};

export default Tip;
