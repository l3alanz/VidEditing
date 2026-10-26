# VidEditing

A TypeScript + React video project built with Remotion. Includes a five-second,
1280 × 720 animated welcome composition at 30 fps. No API keys or external assets
are required.

## Get started

Use Node.js 24 LTS and npm.

```sh
cd video
npm ci
npm run dev
```

Select **Welcome** in Remotion Studio. Edit `video/src/Composition.tsx` to change
the title, subtitle, styling, animation, or composition settings. Put media in
`video/public/` and reference it with Remotion's `staticFile()`.

## Check and export

Run these commands from `video/`:

```sh
npm run lint
npm run build
# Export when you want an MP4 (downloads Chrome Headless Shell on first use):
npx remotion render src/index.ts Welcome out/welcome.mp4
```

Generated bundles, dependencies, and exports are excluded from Git. Remotion's
licensing terms apply; see https://www.remotion.dev/license.
