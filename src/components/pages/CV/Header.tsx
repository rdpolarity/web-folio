import { CvQuery } from "@api/generated/api";
import { Text } from "@nextui-org/react";
import styles from "./styles.module.scss";
import Image from "next/image";

const Header = ({ cv }: { cv: CvQuery }) => {
  const {
    Title,
    Subtitle,
    Email,
    Number,
    LinkedIn,
    Location,
    Website,
    Profile,
  } = cv.cv?.data?.attributes ?? {};

  const IconText = ({ icon, children }: any) => {
    return (
      <div style={{ display: "flex", alignItems: "center", marginBottom: 5 }}>
        <Image
          src={icon}
          className={styles.icon}
          width={20}
          height={20}
          alt="icon"
        />
        <Text css={{ m: 0, ml: 10 }}>{children}</Text>
      </div>
    );
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerProfile}>
        <div
          className={styles.headerProfilePicture}
          style={{
            backgroundImage: `url(${Profile?.data?.attributes?.url})`,
          }}
        />
      </div>
      <div className={styles.headerDetails}>
        <Text size={50} weight="bold">
          {Title}
        </Text>
        <Text size={30} color="#0072f5" css={{ mt: -15 }}>
          {Subtitle}
        </Text>
        <div style={{ marginTop: 10 }}>
          <IconText icon="/Location.svg">{Location}</IconText>
          <IconText icon="/Number.svg">{Number}</IconText>
          <IconText icon="/Email.svg">{Email}</IconText>
          <IconText icon="/LinkedIn.svg">{LinkedIn}</IconText>
          <IconText icon="/Internet.svg">{Website}</IconText>
        </div>
      </div>
    </div>
  );
};

export default Header;
