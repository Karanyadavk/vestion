import { Button } from "./ui/Button"
import { ChevronDown } from "lucide-react"
import { albertSans, dmSans, manrope } from "@/fonts/fonts"


export const HeroSection = () => {
    return (
        <div id="home" className=" h-screen w-full">
            <div className="bg-cover bg-center h-screen w-full" style={{
                    backgroundImage: `url('/Images/HeroSectionImage.jpg')`,
                }}>
                <div className="bg-gradient-to-b from-transparent from-0% to-[#000000] to-100% h-screen w-full">
                    <div className="h-screen w-full bg-gradient-radial from-transparent via-transparent to-[#0000003f]">
                        <div className="flex flex-col items-center justify-between w-full h-full py-12">
                            <div className="text-white w-[60%] flex flex-col items-center text-center gap-16">
                                <div className="flex flex-col items-center gap-6">
                                    <h1 className={`uppercase text-transparent bg-gradient-to-r leading-[72px] from-[#FFFFFF] from-20% to-[#1f1e1e] to-100% bg-clip-text ${albertSans.className} font-medium text-5xl`}>The Future of DIgital and traditional finance</h1>
                                    <p className={`text-2xl w-[80%] font-medium ${manrope.className}`}>Experience the next evolution in finance, where blockchain technology empowers you to securely invest in and manage real-world assets with ease</p>
                                </div>
                                <Button name="Explore Ecosystem" />
                            </div>
                            <div className="flex flex-col items-center text-white gap-2">
                                <p className={`text-base font-medium ${dmSans.className}`}>SCROLL</p>
                                <ChevronDown />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
