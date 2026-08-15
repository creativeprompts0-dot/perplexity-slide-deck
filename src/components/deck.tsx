import { useEffect, useRef, useState, type ReactNode } from "react";

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  );
}

export function Slide({
  id,
  index,
  label,
  children,
  className = "",
}: {
  id: string;
  index: string;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative flex min-h-screen w-full snap-start flex-col justify-center overflow-hidden px-6 py-24 md:px-16 lg:px-24 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="mb-8 flex items-center gap-4">
            <span className="font-display text-sm tabular-nums text-primary">{index}</span>
            <span className="h-px w-10 bg-border" />
            <span className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              {label}
            </span>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export function Editable({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      contentEditable
      suppressContentEditableWarning
      className={`rounded-lg outline-none transition-colors focus:bg-secondary/60 focus:ring-1 focus:ring-primary/50 ${className}`}
    >
      {children}
    </div>
  );
}

export function ScreenshotSlot({
  caption,
  defaultSrc,
}: {
  caption: string;
  defaultSrc?: string;
}) {
  const [src, setSrc] = useState<string | null>(defaultSrc ?? null);

  return (
    <div className="card-elegant flex h-full flex-col overflow-hidden">
      <label className="group relative flex aspect-[4/3] cursor-pointer items-center justify-center bg-secondary/40">
        {src ? (
          <img
            src={src}
            alt={caption}
            loading="lazy"
            width={1280}
            height={960}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <span className="px-6 text-center text-sm text-muted-foreground">
            Clique para inserir o print do prompt
          </span>
        )}

        <input
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) setSrc(URL.createObjectURL(file));
          }}
        />
      </label>
      <Editable className="p-5 text-sm leading-relaxed text-muted-foreground">{caption}</Editable>
    </div>
  );
}
