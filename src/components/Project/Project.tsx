/* eslint-disable @next/next/no-img-element */
import { TagEntity } from "@api/generated/api";
import React, { useState } from "react";
import styles from "./Project.module.scss";
import Tilt from "react-parallax-tilt";
import { Badge, Card, Modal, Text, Button } from "@nextui-org/react";
import { GithubFilled, GlobalOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Maybe } from "graphql/jsutils/Maybe";

interface ProjectProps {
  title?: string | null;
  thumbnail?: string;
  tags?: Array<TagEntity> | any;
  github?: Maybe<string>;
  website?: Maybe<string>;
}

const Project = (props: ProjectProps) => {
  const [visible, setVisible] = useState(false);
  const badges = props.tags?.map((tag: any, index: any) => (
    <Badge
      enableShadow
      style={{ margin: 0 }}
      key={index}
      disableOutline
      color="primary"
    >
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
              <Link href={props.github ?? ""} target="_blank">
                <Button
                  icon={<GithubFilled />}
                  ghost
                  color="gradient"
                  auto
                  animated
                >
                  Github
                </Button>
              </Link>
            )}
            {props.website && (
              <Link href={props.website ?? ""} target="_blank">
                <Button icon={<GlobalOutlined />} ghost color="primary" auto>
                  Website
                </Button>
              </Link>
            )}
          </div>
        </Modal.Header>
        <Modal.Body css={{ p: 0 }}>
          <img src={props.thumbnail ?? ""} alt="modal image" />
        </Modal.Body>
        <Modal.Footer css={{ justifyContent: "center" }}>{badges}</Modal.Footer>
      </Modal>
      <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} glareMaxOpacity={0.5}>
        <Card
          onClick={() => setVisible(true)}
          className={styles.project}
          css={{
            width: 230,
            maxHeight: 300,
          }}
          isPressable
        >
          <Card.Header
            css={{
              position: "absolute",
              zIndex: 1,
              top: 0,
              p: 0,
              h: 100,
              alignItems: "start",
            }}
          >
            <div className={styles.projectGradient} />
            <Text
              size={18}
              weight="bold"
              transform="uppercase"
              color="white"
              css={{ p: 10, top: 10 }}
            >
              {props.title}
            </Text>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              height={260}
              width="100%"
              objectFit="cover"
              alt="Card Background"
              src={props.thumbnail ?? ""}
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            className={styles.projectFooter}
            css={{
              position: "absolute",
              bgBlur: "#ffffff66",
              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
              bottom: 0,
              zIndex: 1,
              gap: 5,
              flexWrap: "wrap",
            }}
          >
            {badges}
          </Card.Footer>
        </Card>
      </Tilt>
    </>
  );
};

export default Project;
