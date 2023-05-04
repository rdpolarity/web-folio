import { Text } from "@nextui-org/react";
import styles from "./styles.module.scss";
import Image from "next/image";

export interface HeaderProps {
  title?: string | null;
  subtitle?: string | null;
  email?: string | null;
  number?: string | null;
  linkedIn?: string | null;
  location?: string | null;
  website?: string | null;
  profile?: string | null;
}
const Header = (props: HeaderProps) => {

  const IconText = ({ icon, children }: any) => {
    return (
      <div style={{ display: "flex", alignItems: "center", marginBottom: 5 }}>
        <Image
          unoptimized
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
            backgroundImage: `url(${props.profile})`,
          }}
        />
      </div>
      <div className={styles.headerDetails}>
        <Text size={50} weight="bold">
          {props.title}
        </Text>
        <Text size={30} color="#0072f5" css={{ mt: -15 }}>
          {props.subtitle}
        </Text>
        <div style={{ marginTop: 10 }}>
          <IconText icon="/Location.svg">{props.location}</IconText>
          <IconText icon="/Number.svg">{props.number}</IconText>
          <IconText icon="/Email.svg">{props.email}</IconText>
          <IconText icon="/LinkedIn.svg">{props.linkedIn}</IconText>
          <IconText icon="/Internet.svg">{props.website}</IconText>
        </div>
      </div>
    </div>
  );
};

export default Header;
