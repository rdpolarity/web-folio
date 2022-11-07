import { CvQuery } from "@api/generated/api";
import { Text } from "@nextui-org/react";
import styles from "./styles.module.scss";

const Header = ({ cv }: { cv: CvQuery }) => {
  const { Title, Subtitle, Email, Number, LinkedIn, Location, Website } =
    cv.cv?.data?.attributes ?? {};
  return (
    <div style={{ height: 400 }} className={styles.header}>
      <Text size={50} weight="bold">
        {Title}
      </Text>
      <Text size={30} color="#0072f5">
        {Subtitle}
      </Text>
    </div>
  );
};

export default Header;
