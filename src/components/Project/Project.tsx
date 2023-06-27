/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./Project.module.scss";
import Tilt from "react-parallax-tilt";
import { Badge, Modal, Text } from "@nextui-org/react";
import { GithubFilled, GlobalOutlined } from "@ant-design/icons";
import { Maybe } from "graphql/jsutils/Maybe";
import Button from "@components/Button/Button";
import { Image } from "react-datocms";

interface ProjectProps {
  title?: string | null;
  thumbnail?: any;
  tags?: string[];
  github?: Maybe<string>;
  website?: Maybe<string>;
}

const Project = (props: ProjectProps) => {
  const [visible, setVisible] = useState(false);
  const badges = props.tags?.map((tag: string, index: any) => (
    <Badge style={{ margin: 0 }} key={index} disableOutline color="primary">
      {tag}
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
                <Button intent={"gradient"}>Github</Button>
              </a>
            )}
            {props.website && (
              <a href={props.website ?? ""} target="_blank" rel="noreferrer">
                <Button intent={"outline"}>Website</Button>
              </a>
            )}
          </div>
        </Modal.Header>
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
          <div style={{ width: 230, height: 300 }}>
            <Image
              data={props.thumbnail}
              layout="fill"
              objectPosition="center"
              objectFit="cover"
            />
          </div>
          <div className="absolute bottom-0 p-3 flex gap-1 flex-wrap">
            {badges}
          </div>
        </button>
      </Tilt>
    </>
  );
};

export default Project;
