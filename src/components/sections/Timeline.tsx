import React from "react"
import { ExternalLink } from "lucide-react"

export interface TimelineItem {
  title: string
  subtitle: string
  date: string
  description?: string | string[]
  href?: string
  icon?: React.ElementType 
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export function Timeline({ items, className = "" }: TimelineProps) {
  return (
    <div className={`relative space-y-0 ${className}`}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        const descriptionArray = Array.isArray(item.description) 
          ? item.description 
          : item.description ? [item.description] : []

        return (
          <div key={index} className="relative flex gap-4">
            
            {/* Left Side: Icon/Dot and Line */}
            <div className="flex flex-col items-center">
              {/* Icon or Dot */}
              <div className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-background shadow-sm">
                {item.icon ? (
                  <item.icon className="size-4 text-primary" />
                ) : (
                  <div className="size-2.5 rounded-full bg-primary" />
                )}
              </div>
              {/* Vertical Line connecting to next item */}
              {!isLast && (
                <div className="mt-1 w-px flex-1 bg-border/80" />
              )}
            </div>

            {/* Right Side: Content */}
            <div className={`pb-8 ${isLast ? "pb-0" : ""}`}>
              <div className="flex flex-col gap-1">
                {/* Date */}
                <span className="font-mono text-xs text-muted-foreground">
                  {item.date}
                </span>
                
                {item.href ? (
                  <a 
                    href={item.href} 
                    target="_blank" 
                    rel="noreferrer"
                    className="group flex items-center gap-2 text-base font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {item.title}
                    <ExternalLink className="size-3 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ) : (
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                )}

                {/* Subtitle (Company/Institution) */}
                <p className="text-sm font-medium text-primary/80">
                  {item.subtitle}
                </p>
                
                {/* Description (String or Array of Strings) */}
                {descriptionArray.length > 0 && (
                  <div className="mt-2 space-y-2">
                    {descriptionArray.map((desc, i) => (
                      <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                        {desc}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}