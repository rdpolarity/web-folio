"use client";

import styles from "./styles.module.scss";
import Tab from "./Tab";
import { Text } from "@nextui-org/react";

const Title = ({ children }: any) => (
  <div className="flex items-center bg-gradient-to-r from-primary/10 w-fit">
    {/* <div className={styles.titleBar} /> */}
    <Tab width={14} height={60} />
    <h1 className="text-2xl m-0 pl-5 text-primary">
      {children}
    </h1>
  </div>
);

export default Title