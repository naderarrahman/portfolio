import { ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"

export interface TimelineItem {
  title: string
  subtitle?: string
  date?: string
  description?: string | string[]
  href?: string
  linkLabel?: string
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

function Timeline({ items, className }: TimelineProps) {
  return (
    <ol className={cn(className)}>
      {items.map((item, index) => (
        <li
          key={`${item.title}-${index}`}
          className="relative border-l border-border pb-10 pl-8 last:pb-0"
        >
          <span
            aria-hidden
            className="absolute top-1.5 -left-[5px] size-2.5 rounded-full bg-primary ring-4 ring-background"
          />

          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <div className="min-w-0">
              <h3 className="text-base font-semibold tracking-tight">
                {item.title}
              </h3>
              {item.subtitle ? (
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {item.subtitle}
                </p>
              ) : null}
            </div>
            {item.date ? (
              <span className="shrink-0 font-mono text-xs text-muted-foreground">
                {item.date}
              </span>
            ) : null}
          </div>

          {item.description ? (
            Array.isArray(item.description) ? (
              <ul className="mt-3 space-y-2">
                {item.description.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2.5 text-sm leading-6 text-muted-foreground"
                  >
                    <span
                      aria-hidden
                      className="mt-2.5 size-1 shrink-0 rounded-full bg-border"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            )
          ) : null}

          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              {item.linkLabel ?? "View credential"}
              <ArrowUpRight className="size-3.5" />
            </a>
          ) : null}
        </li>
      ))}
    </ol>
  )
}

export { Timeline }
