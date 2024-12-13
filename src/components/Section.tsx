import { dmSans, interSans } from "@/fonts/fonts"
import { Button } from "./ui/Button"
import { ArrowRight } from "./ui/svg/ArrowRight"
import { Vector } from "./ui/svg/Vector"


export const Section = () => {
    return (
        <div className="w-full h-[589px] text-[#1E2329] bg-gradient-to-b from-[#020405] via-[#252525] to-[#1D1D1D] flex items-center justify-center">
            <div className="bg-[#E4B325] h-96 w-[90vw] rounded-xl relative">
                <div className="w-1/2 pl-8 pt-8 flex flex-col gap-4">
                    <h1 className={`${dmSans.className} font-medium text-5xl`}>Join the Vestion Revolution Be part of a thriving ecosystem</h1>
                    <p className={`${interSans.className} font-medium text-xl`}>Early joiners not only shape the future but also position themselves for maximum growth and gains. The earlier you invest, the greater your potential rewards.</p>
                    <div>
                        <Button name="Join Our Community" borderColor="#1E2329" svg={<ArrowRight strokeColor="#1E2329" />} />
                    </div>
                </div>
                <div className="absolute right-0 bottom-0">
                    <Vector />
                </div>
            </div>
        </div>
    )
}