"use client"

import React, { useEffect, useMemo, useState } from "react"
import { Cloud, fetchSimpleIcons, renderSimpleIcon, type ICloud } from "react-icon-cloud"

type CloudProps = Omit<ICloud, "children">

export const cloudProps: CloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
}

export function IconCloud({ iconSlugs }: { iconSlugs: string[] }) {
  const [data, setData] = useState<Awaited<ReturnType<typeof fetchSimpleIcons>> | null>(null)

  useEffect(() => {
    let isMounted = true
    fetchSimpleIcons({ slugs: iconSlugs }).then((res) => {
      if (isMounted) setData(res)
    })
    return () => {
      isMounted = false
    }
  }, [iconSlugs])

  const renderedIcons = useMemo(() => {
    if (!data) return null
    return Object.values(data.simpleIcons).map((icon) =>
      renderSimpleIcon({
        icon,
        size: 42,
        aProps: {
          onClick: (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault(),
        },
      })
    )
  }, [data])

  const TypedCloud = Cloud as React.ComponentType<CloudProps & { children?: React.ReactNode }>

  return (
    <TypedCloud {...cloudProps}>
      {renderedIcons}
    </TypedCloud>
  )
}