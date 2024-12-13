import { albertSans, interSans } from "@/fonts/fonts"
import Image from "next/image"
import TokenImage from "../../public/Images/Tokenization.png"
import { Button } from "./ui/Button"
import { ArrowRight } from "./ui/svg/ArrowRight"



export const About = () => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-[#000000] to-[#1E1E1E] text-white py-24 px-16">
            <div className="flex flex-col items-center text-center gap-4">
                <h2 className={`${interSans.className} font-medium text-lg text-[#E4B325]`}>ECOSYSTEM</h2>
                <p className={`${albertSans.className} font-normal text-2xl w-[45%]`}>Unlocking the Future of Finance with a Unified Ecosystem for Digital and Traditional Investments</p>
            </div>
            <div className="flex items-center gap-16 mt-16">
                <Image src={TokenImage} height={600} width={600} alt="tokenization" />
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center gap-8">
                        <h1 className={`${interSans.className} font-normal text-3xl`}>The Vestion Ecosystem: Bridging the Gap Between Blockchain Innovation and Conventional Finance</h1>
                        <p className={`${interSans.className} font-normal text-xl`}>At Vestion, we believe that the future of finance lies in integrating the best of traditional and digital worlds. Our ecosystem is a transformative platform designed to empower individuals, businesses, and institutions with innovative financial tools. By combining blockchain’s decentralization with the stability of conventional finance, we aim to unlock a future where financial growth is accessible, secure, and limitless.</p>
                    </div>
                    <div>
                        <Button name="Explore Ecosystem" svg={<ArrowRight />} />
                    </div>
                </div>
            </div>
        </div>
    )
}