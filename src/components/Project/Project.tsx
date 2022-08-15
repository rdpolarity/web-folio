/* eslint-disable @next/next/no-img-element */
import { TagEntity } from "@api/generated/api";
import { Card, Tag } from "antd";
import React from "react";
import styles from "./Project.module.scss";
import Tilt from 'react-parallax-tilt';

interface ProjectProps {
  title?: string | null;
  thumbnail?: string;
  tags?: Array<TagEntity> | any;
}

const Project = (props: ProjectProps) => {
  return (
    <Tilt glareEnable tiltMaxAngleX={3} tiltMaxAngleY={3} glareMaxOpacity={0.5}>
    <div className={styles.project}>
      <h4 className={styles.projectTitle}>{props.title}</h4>
      <div className={styles.projectThumbnail}>
        <img src={props.thumbnail} alt="thumbnail" />
        <div className={styles.projectTags}>
          {props.tags?.map((tag: any, index: any) => (
            <Tag
              icon={
                tag.attributes?.icon?.data?.attributes?.url && (
                  <img
                    className={styles.projectTagsIcon}
                    src={tag.attributes?.icon?.data?.attributes?.url}
                    alt={tag.attributes?.name}
                  />
                )
              }
              style={{ margin: 0 }}
              key={index}
              color={tag.attributes?.colour ?? "default"}
            >
              {tag.attributes?.name}
            </Tag>
          ))}
        </div>
      </div>
    </div>
    </Tilt>
  );
};

export default Project;
