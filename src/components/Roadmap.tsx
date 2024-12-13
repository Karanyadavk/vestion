import { interSans, dmSans } from "@/fonts/fonts";

export const RoadmapTime = [
    {
        time: "Current Stage",
        money: "Investment",
        description:
            "Strong initial profits driven by VES token sales and appreciation revenue, with lower marketing and development expenses as the ecosystem establishes its base.",
    },
    {
        time: "2025",
        money: "$56 million",
        description:
            "Strong initial profits driven by VES token sales and appreciation revenue, with lower marketing and development expenses as the ecosystem establishes its base.",
    },
    {
        time: "2026",
        money: "$125 million",
        description:
            "Significant growth in VES appreciation and Vestion Capital returns as the ecosystem gains traction and user adoption increases",
    },
];

export const Roadmap = () => {
    return (
        <div className="min-h-screen w-full relative text-white">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('/Images/RoadmapBackground.jfif')`,
                }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
                <div className="flex flex-col items-center text-center gap-4 mb-32">
                    <h1
                        className={`${interSans.className} font-medium text-base text-[#E4B325]`}
                    >
                        Q4 2024 - Q3 2027
                    </h1>
                    <h2
                        className={`${dmSans.className} font-normal text-3xl w-[100%] leading-8`}
                    >
                        TOKEN SALE STAGE
                    </h2>
                </div>

                <div className="flex z-10 items-center justify-center w-full gap-8">
                    {RoadmapTime.map((timeline, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-4"
                        >
                            <h1
                                className={`${interSans.className} ${
                                    index === 0
                                        ? "text-[#E4B325]"
                                        : "text-white"
                                } font-bold text-xl`}
                            >
                                {timeline.time}
                            </h1>
                            <div className="relative flex items-center justify-center">
                                <div
                                    className={`${
                                        index === 0
                                            ? "h-6 w-6 rounded-full bg-[#ffca2b] bg-opacity-30 flex items-center justify-center"
                                            : ""
                                    }`}
                                >
                                    <div
                                        className={`h-4 w-4 rounded-full border-2 flex items-center justify-center ${
                                            index === 0
                                                ? "border-white"
                                                : "border-[#ffca2b]"
                                        }`}
                                    >
                                        <div
                                            className={`h-3 w-3 rounded-full ${
                                                index === 0
                                                    ? "bg-[#E4B325]"
                                                    : "bg-black"
                                            }`}
                                        ></div>
                                    </div>
                                </div>
                                {index === 0 ? (
                                    <div className="absolute h-12 w-12 rounded-full bg-[#E4B325] blur-xl"></div>
                                ) : null}
                            </div>
                            <h1
                                className={`${interSans.className} font-bold text-xl`}
                            >
                                {timeline.money}
                            </h1>
                            <p
                                className={`${interSans.className} w-[80%] text-center font-normal text-base`}
                            >
                                {timeline.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="absolute top-[56.7%] z-0 w-full h-0.5 bg-gradient-to-r from-[#E4B325] to-[#000000]">

                </div>
            </div>
        </div>
    );
};
