import React, { useEffect, useRef } from "react";
import styles from "./Tip.module.scss";
import Image from "next/image";
import { observer } from "mobx-react-lite";
import { useGlobalStore } from "stores/GlobalStore";
import party from "party-js";

const Tip = observer(() => {
  const store = useGlobalStore();
  const tip = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (store.isDotsFound || store.isMinecraftFound || store.isSpyroFound) party.confetti(tip.current as any);
  }, [store.isDotsFound, store.isMinecraftFound, store.isSpyroFound]);

  return (
    <div className={styles.tip} ref={tip}>
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
      <p className={styles.tipText}>There{`'`}s {store.getEasterEggs().length} easter eggs on this website. Can you find them? <strong>{store.getEasterEggCount()}/{store.getEasterEggs().length}</strong> found</p>
    </div>
  );
});

export default Tip;
