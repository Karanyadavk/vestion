export const ArrowRight = ({strokeColor}: {strokeColor?: string}) => {
    const currentColor = strokeColor ? `${strokeColor}`: "white";
    return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.2498 12H4.25" stroke={currentColor} strokeWidth="1.5" strokeLinecap="square"/>
                <path d="M14.5901 17.66C14.5901 14.7503 17.1527 12 20.2502 12" stroke={currentColor} strokeWidth="1.5" strokeLinecap="square"/>
                <path d="M14.5901 6.33984C14.5901 9.24959 17.1527 11.9999 20.2502 11.9999" stroke={currentColor} strokeWidth="1.5" strokeLinecap="square"/>
            </svg>
    )
}