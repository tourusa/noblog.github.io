/** index page render the block */
import React from "react";

import Image from "next/image";
import * as config from "@/lib/config";
import classNames from "classnames";

import styles from "./styles.module.css";

const defaultPageCover =
  "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1ce00415-5382-49e0-817d-cdd84e9ccce6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230221T163202Z&X-Amz-Expires=86400&X-Amz-Signature=91727a3fdbef9355b146ff3e7e47fbfe48d27480da2c0bc133d4716cece48701&X-Amz-SignedHeaders=host&x-id=GetObject";

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
        src={format.page_cover || config.defaultPageCover || defaultPageCover}
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
