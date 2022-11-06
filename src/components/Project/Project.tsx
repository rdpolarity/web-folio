/* eslint-disable @next/next/no-img-element */
import { TagEntity } from "@api/generated/api";
import React from "react";
import styles from "./Project.module.scss";
import Tilt from "react-parallax-tilt";
import { Badge, Card, Text } from "@nextui-org/react";

interface ProjectProps {
  title?: string | null;
  thumbnail?: string;
  tags?: Array<TagEntity> | any;
}

const Project = (props: ProjectProps) => {
  
  return (
    <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} glareMaxOpacity={0.5}>
      <Card
        className={styles.project}
        css={{
          width: 230,
          maxHeight: 300,
        }}
        isPressable
      >
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 0, p: 0, h: 100, alignItems: 'start' }}>
          <div className={styles.projectGradient}/>
          <Text size={18} weight="bold" transform="uppercase" color="white" css={{ p: 10, top: 10 }}>
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
          {props.tags?.map((tag: any, index: any) => (
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
          ))}
        </Card.Footer>
      </Card>
    </Tilt>
  );
};

export default Project;
