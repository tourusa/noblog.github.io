import { getPageBreadcrumbs } from "notion-utils";
import React from "react";
import * as types from "notion-types";

import { PageIcon, useNotionContext } from "react-notion-x";

export const cs = (...classes: Array<string | undefined | false>) =>
  classes.filter((a) => !!a).join(" ");

export const Breadcrumbs: React.FC<{
  block: types.Block;
  rootOnly?: boolean;
}> = ({ block, rootOnly = false }) => {
  const { recordMap, mapPageUrl, components } = useNotionContext();

  const breadcrumbs = React.useMemo(() => {
    const breadcrumbs = getPageBreadcrumbs(recordMap, block.id);
    // if the root is collection, add the home
    if (recordMap.collection && recordMap.collection[block.parent_id]) {
      const collection = recordMap.collection[block.parent_id].value;
      breadcrumbs.unshift({
        block: recordMap.block[collection.parent_id].value,
        active: false,
        pageId: collection.parent_id,
        title: "Home",
        icon: collection.icon,
      });
    }
    if (rootOnly) {
      return [breadcrumbs[0]].filter(Boolean);
    }

    return breadcrumbs;
  }, [recordMap, block.id, rootOnly, block.parent_id]);

  return (
    <div className="breadcrumbs" key="breadcrumbs">
      {breadcrumbs.map((breadcrumb, index: number) => {
        if (!breadcrumb) {
          return null;
        }

        const pageLinkProps: any = {};
        const componentMap = {
          pageLink: components.PageLink,
        };

        if (breadcrumb.active) {
          componentMap.pageLink = (props) => <div {...props} />;
        } else {
          pageLinkProps.href = mapPageUrl(breadcrumb.pageId);
        }

        return (
          <React.Fragment key={breadcrumb.pageId}>
            <componentMap.pageLink
              className={cs("breadcrumb", breadcrumb.active && "active")}
              {...pageLinkProps}
            >
              {breadcrumb.icon && (
                <PageIcon
                  className="icon"
                  block={breadcrumb.block}
                  defaultIcon={breadcrumb.icon}
                />
              )}

              {breadcrumb.title && (
                <span className="title">{breadcrumb.title}</span>
              )}
            </componentMap.pageLink>

            {index < breadcrumbs.length - 1 && (
              <span className="spacer">/</span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
