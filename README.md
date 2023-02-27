Next.js Notion Starter Kit for GitHub Pages. The code mainly from [nextjs-notion-starter-kit](https://github.com/transitive-bullshit/nextjs-notion-starter-kit).

## Intro

This repo is what I use to power my personal blog and portfolio site [xchb.fun](https://xchb.fun)

It uses Notion as a CMS, [react-notion-x](https://github.com/NotionX/react-notion-x), Next.js, and GitHub Pages.

## Features

- Setup only takes a few miniutes
- Built using Next.js, TS, and React
- Depoy using GitHub Pages
- Excellent page speeds
- Automatic table of contents
- Full support for dark mode
- Support Google Analytics

## Setup

**All config is defined in [site.config.ts](https://github.com/tiodot/do-not-evil.github.io/blob/main/site.config.ts).**

1. Fork/clone this repo and rename it to xxx.github.io
2. Change a few values in [site.config.ts](https://github.com/tiodot/do-not-evil.github.io/blob/main/site.config.ts)
3. Add the token environment for automatic deploy by GitHub actions.

All you really need to do to get started is edit `rootNotionPageId`.

It's recommend duplicating the [default page](https://notion.so/7875426197cf461698809def95960ebf) as a starting point or this [simple page](https://tiodot.notion.site/5e19b09eec9e43c5b4c23031d41fea81?v=5f5df1b8cdfd4fd49aaed82dc8241fe3), but you can use any public notion page you want.

Make sure your root Notion page is public and then copy the link to your clipboard. Extract the last part of the URL that looks like `5e19b09eec9e43c5b4c23031d41fea81`, which is your page's Notion ID.

Test it on local:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Deploy on GitHub Pages

Edit the git repo info in `.github/workflows/main.yaml` line 33, change the `repository-name` to your own repo that will be used to deploy the build files.

### Set the GitHub Pages

1. Generate the personal access token that will be used in the GitHub actions to deploy the build files. Go [tokens](https://github.com/settings/tokens), then generate new token
   ![](https://cdn.jsdelivr.net/gh/tiodot/oss@main/20230227104428_rec_.gif)

2. Add the token to repo's environment variable in the repo's `Settings` -> `Security > Secrets and variables > Actions` -> `New repository secret`:
   ![](https://cdn.jsdelivr.net/gh/tiodot/oss@main/XUVewI.jpg)

3. Trigger the Github action to build the project in the repo's `Actions` run `GitHub Page` workflow.

4. Config the GitHub Pages to use the build files in the repo's `Settings` -> `Pages`, change the Branch to the `doc` or other branch that you config in the `.github/workflows/main.yaml`.

All things are done, visit the xxxx.github.io to view your blog.
