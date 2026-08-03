"use client";

import { withBasePath } from "@/lib/paths";

interface GalleryVideoProps {
  src: string;
  poster: string;
  alt: string;
  aspectClass?: string;
  aspectRatio?: string;
  videoFilter?: string;
}

export default function GalleryVideo({
  src,
  poster,
  alt,
  aspectClass = "aspect-[4/3]",
  aspectRatio,
  videoFilter,
}: GalleryVideoProps) {
  const resolvedSrc = withBasePath(src);
  const resolvedPoster = withBasePath(poster);

  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden bg-transparent ${aspectRatio ? "" : aspectClass}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <video
        src={resolvedSrc}
        poster={resolvedPoster}
        autoPlay
        loop
        muted
        playsInline
        aria-label={alt}
        className="block h-full w-full object-contain"
        style={videoFilter ? { filter: videoFilter } : undefined}
      />
    </div>
  );
}
