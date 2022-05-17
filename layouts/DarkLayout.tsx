import { CSSProperties, FC } from "react"

interface Props {
  children: React.ReactNode
}

export default function DarkLayout({children}: Props) {
  const layoutStyles: CSSProperties = {
    backgroundColor: "rgb(0, 0, 0, .4)",
    padding: "10px",
    borderRadius: "5px",
  }
  return (
    <section style={layoutStyles}>
      {children}
    </section>
  )
}