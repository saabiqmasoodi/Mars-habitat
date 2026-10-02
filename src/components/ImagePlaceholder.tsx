import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
};

export default function ImagePlaceholder({
  src,
  alt,
  className,
  priority,
  fill = true,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px",
}: Props) {
  const fallback = "/images/hero-mars.jpg";
  return (
    <div className={cn("relative overflow-hidden bg-muted", className)}>
      <Image
        src={src || fallback}
        alt={alt}
        fill={fill}
        priority={priority}
        sizes={sizes}
        className="object-cover object-center"
        quality={90}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent" />
    </div>
  );
}