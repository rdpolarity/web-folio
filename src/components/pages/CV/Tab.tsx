"use client";

import styles from "./styles.module.scss";

const Tab = ({ width, height }: any) => (
  <div
    className={styles.tab}
    style={{ width, height, marginLeft: -(width / 2) - 2 / 2 }}
  />
);

export default Tab;