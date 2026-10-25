"use client"

import { useEffect, useState } from "react"

export function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)
  const [blink, setBlink] = useState(true)

  // Blinking cursor effect
  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500)
    return () => clearTimeout(timeout)
  }, [blink])

  // Typing Logic
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000)
      return () => clearTimeout(timeout)
    }

    if (subIndex === 0 && reverse) {
      const timeout = setTimeout(() => {
        setReverse(false)
        setIndex((prev) => (prev + 1) % words.length)
      }, 0)
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1))
    }, Math.max(reverse ? 40 : subIndex === words[index].length ? 1000 : 80, 80))

    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse, words])

  return (
    <span className="inline-block">
      {`${words[index].substring(0, subIndex)}`}
      <span className={`${blink ? "opacity-100" : "opacity-0"} text-primary ml-0.5`}>|</span>
    </span>
  )
}