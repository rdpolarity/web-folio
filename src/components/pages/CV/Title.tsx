"use client";

import styles from "./styles.module.scss";
import Tab from "./Tab";
import { Text } from "@nextui-org/react";

const Title = ({ children }: any) => (
  <div className={styles.title}>
    {/* <div className={styles.titleBar} /> */}
    <Tab width={14} height={60} />
    <Text h1 weight="bold" css={{ m: 0, ml: 20 }} transform="uppercase">
      {children}
    </Text>
  </div>
);

export default Title