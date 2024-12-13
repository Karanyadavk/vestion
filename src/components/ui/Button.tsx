import { JSX } from "react"

interface ButtonProps {
    name: string
    svg?: JSX.Element
    borderColor?: string
}

export const Button = ({name, svg, borderColor}: ButtonProps) => {
    return (
        <button className={`bg-transparent font-semibold border rounded-lg ${svg ? "flex items-center gap-4 py-3 px-8" : "py-2 px-6"}`} style={{  color: borderColor || "white", borderColor: borderColor || "white", fontFamily: "var(--font-inter-sans)" }}>
            {name}
            {svg && <span>{svg}</span>}
        </button>
    )
}