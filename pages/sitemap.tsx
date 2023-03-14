import * as React from 'react'
import { getSiteMap } from "@/lib/get-site-map";
export async function getStaticProps() {

  const siteMap = await getSiteMap();

  return {props:{siteMap}};
}

export default function NotionDomainDynamicPage(props) {
  return <div>for site map</div>;
}