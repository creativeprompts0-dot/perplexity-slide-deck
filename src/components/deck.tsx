import { useEffect, useRef, useState, type ReactNode } from "react";
import { Maximize2, Upload, X } from "lucide-react";

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
  variant = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: "up" | "left" | "right" | "zoom" | "blur";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal reveal-${variant} ${className}`}
    >
      {children}
    </div>
  );
}

/** Título com animação palavra por palavra. */
export function SplitText({
  text,
  className = "",
  delay = 0,
  as: Tag = "h2",
  highlightFrom,
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
  highlightFrom?: number;
}) {
  const { ref, visible } = useReveal<HTMLHeadingElement>();
  const words = text.split(" ");
  return (
    <Tag ref={ref as never} data-visible={visible} className={`word-wrap ${className}`}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="word-mask">
          <span
            className={`word ${
              highlightFrom !== undefined && i >= highlightFrom ? "text-gradient" : ""
            }`}
            style={{ transitionDelay: `${delay + i * 55}ms` }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}

/** Fundo animado (auroras + grade + brilho girando). */
export function AnimatedBackdrop({ dense = false }: { dense?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="mesh-bg absolute inset-0" />
      <div className="aurora aurora-a" />
      <div className="aurora aurora-b" />
      <div className="aurora aurora-c" />
      {dense && <div className="conic-glow" />}
      <div className="grid-bg absolute inset-0 opacity-60" />
      <div className="dots-bg absolute inset-0 opacity-40" />
      <div className="shine-sweep absolute inset-0" />
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
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" />
      <div className="aurora aurora-b pointer-events-none" />
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-accent/15 blur-3xl float-slow" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl float-slow" />
      <div className="relative mx-auto w-full max-w-6xl">
        <Reveal variant="left">
          <div className="mb-8 flex items-center gap-4">
            <span className="font-display text-sm tabular-nums text-primary">{index}</span>
            <span className="line-grow h-px bg-border" />
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

export function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/70 p-4 backdrop-blur-md animate-fade-in md:p-10"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar"
        className="absolute right-5 top-5 rounded-full bg-card/90 p-2 text-foreground shadow-lg transition-transform hover:scale-110"
      >
        <X size={20} />
      </button>
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl animate-scale-in"
      />
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
  const [open, setOpen] = useState(false);

  return (
    <div className="card-elegant group flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl">
      <div className="relative flex aspect-[4/3] items-center justify-center bg-secondary/40">
        {src ? (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group/img relative h-full w-full cursor-zoom-in overflow-hidden"
            aria-label={`Ampliar: ${caption}`}
          >
            <img
              src={src}
              alt={caption}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-foreground/40 opacity-0 transition-opacity duration-300 group-hover/img:opacity-100">
              <Maximize2 className="text-background" size={28} />
            </span>
          </button>
        ) : (
          <span className="px-6 text-center text-sm text-muted-foreground">
            Nenhum print inserido ainda
          </span>
        )}

        <label className="absolute bottom-3 right-3 flex cursor-pointer items-center gap-2 rounded-full bg-card/90 px-3 py-1.5 text-xs text-muted-foreground shadow-md backdrop-blur transition-colors hover:text-primary">
          <Upload size={13} /> Trocar print
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
      </div>
      <Editable className="p-5 text-sm leading-relaxed text-muted-foreground">{caption}</Editable>

      {open && src && <Lightbox src={src} alt={caption} onClose={() => setOpen(false)} />}
    </div>
  );
}

/** Card de imagem clicável (galeria). */
export function GalleryImage({
  src,
  title,
  text,
}: {
  src: string;
  title: string;
  text: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card-elegant group flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Ampliar: ${title}`}
        className="group/img relative aspect-[4/5] cursor-zoom-in overflow-hidden bg-secondary/40"
      >
        <img
          src={src}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-foreground/40 opacity-0 transition-opacity duration-300 group-hover/img:opacity-100">
          <Maximize2 className="text-background" size={28} />
        </span>
      </button>
      <div className="p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
      </div>
      {open && <Lightbox src={src} alt={title} onClose={() => setOpen(false)} />}
    </div>
  );
}
