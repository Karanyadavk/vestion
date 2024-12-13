import { albertSans, dmSans, interSans } from "@/fonts/fonts"
import Image from "next/image"
import IconCoin from "../../public/Images/IconCoin.png"
import Chart from "../../public/Images/MonthlyChart.png"
import { Button } from "./ui/Button"
import { ArrowRight } from "./ui/svg/ArrowRight"



export const AboutUs = () => {
    return (
        <div className="bg-gradient-to-b from-[#000000] to-[#1E1E1E] min-h-screen w-full py-24 px-16 text-white">
            <div className="flex flex-col items-center text-center gap-4">
                <h1 className={`${interSans.className} font-medium text-base text-[#E4B325]`}>TOKENOMICS</h1>
                <h2 className={`${albertSans.className} font-normal text-3xl w-[50%]`}>Unveiling the Power of Vestion Tokens: 
                Growth and Stability Combined</h2>
            </div>
            <div className="mt-12">
                <div className="flex items-center gap-4">
                    <div className="bg-[#161616] border border-[#333333] rounded-xl w-1/4 min-h-96 px-7 py-14 flex flex-col items-center gap-8">
                        <div className="flex flex-col gap-2">
                            <h1 className={`${dmSans.className} text-center font-medium text-[#E4B325] text-base`}>VES & VESC</h1>
                            <p className={`${interSans.className} font-normal text-base`}>Vestion presents VES and VESC, two distinct tokens driving <span className="text-[#E4B325]">growth and stability</span> to power a seamless financial ecosystem</p>
                        </div>
                        <Image src={IconCoin} height={200} width={200} alt="IconCoin" />
                    </div>
                    <div className="bg-[#161616] border border-[#333333] rounded-xl w-1/2 min-h-96 px-7 py-10 flex flex-col items-center gap-8">
                        <div className="flex flex-col gap-2">
                            <h1 className={`${dmSans.className} text-center font-normal text-3xl`}>Projected Growth</h1>
                            <p className={`${interSans.className} font-normal text-xl text-center leading-8`}>With an ambitious price target of $10–$20 in the next three years, VES is more than just a token—it’s a stake in Vestion’s future success</p>
                        </div>
                        <Image src={Chart} height={500} width={500} alt="IconCoin" />
                    </div>
                    <div className="bg-[#161616] border border-[#333333] rounded-xl w-1/4 min-h-96 px-7 py-10 flex flex-col items-center gap-8">
                        <div className="flex flex-col gap-8">
                            <h1 className={`${dmSans.className} font-normal text-5xl`}>VESC</h1>
                            <p className={`${interSans.className} font-normal text-lg`}>VESC ensures secure, efficient, and predictable transactions within the ecosystem. It bridges the gap between digital and traditional finance</p>
                        </div>
                        <div className="flex flex-col">
                            <h1 className={`${dmSans.className} font-medium text-8xl text-[#E4B325]`}>1 : 1 $</h1>
                            <p className={`${dmSans.className} font-medium ml-4 text-base`}>1 VESC = 1 USD</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4 mt-4">
                    <div className="bg-[#161616] border border-[#333333] rounded-xl w-1/2 min-h-96 px-7 py-14 flex flex-col gap-16">
                        <div className="flex flex-col">
                            <h1 className={`${dmSans.className} font-normal text-5xl`}>Total Supply</h1>
                            <p className={`${interSans.className} font-normal text-lg`}>VES serves as the backbone of the Vestion ecosystem. Designed as a <span className="text-[#E4B325]">growth-oriented token</span>, its value appreciates as Vestion’s adoption and success expand globally</p>
                        </div>
                        <div className="flex flex-col">
                            <h1 className={`${dmSans.className} font-medium text-8xl`}>10 Billion</h1>
                            <p className={`${dmSans.className} font-medium text-3xl text-[#E4B325]`}>VES Tokens</p>
                        </div>
                    </div>
                    <div className="bg-[#161616] border border-[#333333] rounded-xl w-1/2 min-h-96 px-7 py-14 flex flex-col gap-16">
                        <div className="flex flex-col gap-2">
                            <h1 className={`${dmSans.className} font-normal text-5xl`}>Vestion is Your Gateway to Financial Synergy</h1>
                            <p className={`${interSans.className} font-normal text-xl`}>Experience the evolution of banking where crypto innovation meets traditional finance. Manage your assets with ease, security, and flexibility in one powerful platform.</p>
                        </div>
                        <div>
                            <Button name="Discover the future of Banking" borderColor="#E4B325" svg={<ArrowRight strokeColor="#E4B325" />} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}