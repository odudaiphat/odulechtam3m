"use client";

import Image from "next/image";
import { MouseEvent, useCallback, useState } from "react";

type ImageZoomProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

const canUseHoverZoom = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
};

export function ImageZoom({
  src,
  alt,
  width,
  height,
  className,
  sizes = "(max-width: 720px) 100vw, (max-width: 1180px) 50vw, 800px",
  priority = false
}: ImageZoomProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");

  const handleMouseEnter = useCallback(() => {
    if (canUseHoverZoom()) setIsZoomed(true);
  }, []);

  const handleMouseMove = useCallback((event: MouseEvent<HTMLDivElement>) => {
    if (!canUseHoverZoom()) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    setOrigin(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsZoomed(false);
    setOrigin("50% 50%");
  }, []);

  return (
    <div
      className="image-zoom-frame"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        sizes={sizes}
        priority={priority}
        style={{
          transform: isZoomed ? "scale(1.75)" : "scale(1)",
          transformOrigin: origin,
          transition: isZoomed ? "transform 120ms ease-out" : "transform 220ms ease",
          willChange: isZoomed ? "transform" : "auto"
        }}
      />
    </div>
  );
}
