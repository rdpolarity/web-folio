/* eslint-disable @next/next/no-img-element */
import { TagEntity } from "@api/generated/api";
import React, { useState } from "react";
import styles from "./Project.module.scss";
import Tilt from "react-parallax-tilt";
import { Badge, Modal, Text } from "@nextui-org/react";
import { GithubFilled, GlobalOutlined } from "@ant-design/icons";
import { Maybe } from "graphql/jsutils/Maybe";
import Image, { ImageLoaderProps } from "next/image";
import Button from "@components/Button/Button";

interface ProjectProps {
  title?: string | null;
  thumbnail?: string;
  tags?: Array<TagEntity> | any;
  github?: Maybe<string>;
  website?: Maybe<string>;
}

const cloudinaryLoader = ({ src, width }: ImageLoaderProps) => {
  // https://res.cloudinary.com/dxn4wbidw/image/upload/w_100/chrome_j_JN_7c5ll_Hv_0e85e09e95.png?updated_at=2022-11-10T05:00:51.989Z
  return src.replace("upload/", `upload/w_${width}/`);
};

const Project = (props: ProjectProps) => {
  const [visible, setVisible] = useState(false);
  const badges = props.tags?.map((tag: any, index: any) => (
    <Badge style={{ margin: 0 }} key={index} disableOutline color="primary">
      {tag.attributes?.icon?.data?.attributes?.url && (
        <img
          className={styles.projectTagsIcon}
          src={tag.attributes?.icon?.data?.attributes?.url}
          alt={tag.attributes?.name}
        />
      )}
      {tag.attributes?.name}
    </Badge>
  ));

  return (
    <>
      <Modal open={visible} onClose={() => setVisible(false)}>
        <Modal.Header
          css={{
            gap: 10,
            flexDirection: "column",
          }}
        >
          <Text size={25} weight="bold" css={{ m: 0 }}>
            {props.title}
          </Text>
          <div style={{ display: "flex", gap: 10 }}>
            {props.github && (
              <a href={props.github ?? ""} target="_blank" rel="noreferrer">
                <Button
                  intent={"gradient"}
                >
                  Github
                </Button>
              </a>
            )}
            {props.website && (
              <a href={props.website ?? ""} target="_blank" rel="noreferrer">
                <Button intent={'outline'}>
                  Website
                </Button>
              </a>
            )}
          </div>
        </Modal.Header>
        <Modal.Body css={{ p: 0 }}>
          <Image
            src={props.thumbnail ?? ""}
            alt="Project image"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
        </Modal.Body>
        <Modal.Footer css={{ justifyContent: "center" }}>{badges}</Modal.Footer>
      </Modal>
      <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} glareMaxOpacity={0.5}>
        <button
          onClick={() => setVisible(true)}
          className="h-[300px] w-[230px] relative rounded-2xl overflow-hidden border-gray-100 border-2 ripple hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <div className="absolute bg-gradient-to-b from-black/50 w-full h-20 z-10 p-3">
            <p className="text-lg text-white font-bold">{props.title}</p>
          </div>
          <Image
            src={props.thumbnail ?? ""}
            alt="Project image"
            objectFit="cover"
            height={300}
            width={230}
            quality={50}
            objectPosition="center"
          />
          <div className="absolute bottom-0 p-3 flex gap-1 flex-wrap">
            {badges}
          </div>
        </button>
      </Tilt>
    </>
  );
};

export default Project;
