import { dmSans, interSans } from "@/fonts/fonts"
import { ArrowRight } from "./ui/svg/ArrowRight";
import { CoinStack } from "./ui/svg/CoinStack";
import { GrowArrow } from "./ui/svg/GrowArrow";
import { Blockchain } from "./ui/svg/Blockchain";
import { Security } from "./ui/svg/Security";

export const BenefitOptions = [
    { title: 'Stability', description: 'VESC stablecoin, backed 1:1 by real-world assets, ensures safe and reliable transactions', href: '/', icon: <CoinStack /> },
    { title: 'Growth', description: 'VES token offers long-term value appreciation linked to ecosystem adoption', href: '/', icon: <GrowArrow /> },
    { title: 'Innovation', description: 'Seamlessly integrates fiat and crypto for a truly universal financial solution', href: '/', icon: <Blockchain /> },
    { title: 'Security', description: 'Built on cutting-edge blockchain technology with industry-leading compliance measures', href: '/', icon: <Security /> },
];

export const Benefits = () => {
    return (
        <div id="benefits" className="min-h-screen w-full bg-gradient-to-b from-[#000000] to-[#1E1E1E] text-white py-24 px-16 flex justify-between">
            <div className="flex flex-col gap-4 w-[30%]">
                <h1 className={`${interSans.className} text-[#E4B325] text-lg font-medium`}>Benefits</h1>
                <h1 className={`${dmSans.className} text-4xl`}>Why Choose Vestion for Your Financial Journey?</h1>
                <p className={`${interSans.className} text-base`}>Discover the unparalleled stability, growth potential, and innovation that Vestion offers. Our secure and future-ready ecosystem is built to meet the needs of a global financial audience.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {BenefitOptions.map((option, index) => (
                    <div key={index} className="bg-[#E4B3251A] rounded-xl p-6 h-80 w-96 flex flex-col justify-between">
                        <div className="bg-[#E4B325] rounded-lg h-8 w-8 flex items-center justify-center">
                            {option.icon}
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <h1 className={`${interSans.className} font-semibold text-lg`}>{option.title}</h1>
                                <p className={`${interSans.className} font-normal text-base`}>{option.description}</p>
                            </div>
                            <a href={option.href} className={`text-[#E4B325] ${interSans.className} text-base font-semibold flex items-center gap-2`}>Learn More <span>{<ArrowRight strokeColor={"#E4B325"} />}</span></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
