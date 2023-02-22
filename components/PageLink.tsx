/** index page render the block */
import React from "react";

import Image from "next/image";
import * as config from "@/lib/config";
import classNames from "classnames";

import styles from "./styles.module.css";

const defaultPageThumbCover =
  "https://lf3-static.bytednsdoc.com/obj/eden-cn/upinulojnuvpe/eschool/123123-school-offline.png";

export const PageLink: React.FC<{
  href: string;
  className: string;
  children: React.ReactNode;
}> = (props) => {
  // get block property from the children props
  if (!props.children || !(props.children as any).props) {
    return <a {...props}></a>;
  }
  const { block } = (props.children as any).props;
  const { format = {}, created_time } = block;
  return (
    <a
      href={props.href}
      target="_self"
      className={classNames(props.className, styles.pageLink)}
    >
      <Image
        height={80}
        width={120}
        alt="cover"
        src={
          format.page_cover || config.defaultPageCover || defaultPageThumbCover
        }
      />
      <span className={styles.pageLinkContent}>
        {props.children}
        <span className={styles.pageLinkDate}>
          {new Date(created_time).toLocaleDateString()}
        </span>
      </span>
    </a>
  );
};
