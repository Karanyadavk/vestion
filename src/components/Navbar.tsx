import Icon from "../../public/Images/Icon.png"
import Image from "next/image"
import { Button } from "./ui/Button";
import { dmSans, interSans } from "@/fonts/fonts";

export const menuOptions = [
    { name: 'Home', href: '/home' },
    { name: 'Ecosystem', href: '/ecosystem' },
    { name: 'Benefits', href: '/benefits' },
    { name: 'Tokenomics', href: '/tokenomics' },
];

export const Navbar = () => {
    return (
        <div className="bg-[#00010A] text-white flex items-center justify-between px-16 py-9">
            <div className="flex items-center gap-3">
                <Image src={Icon} height={40} width={40} alt="icon" />
                <h1 className={`font-semibold ${dmSans.className} text-lg tracking-[4px]`}>VESTION</h1>
            </div>
            <div className="flex items-center gap-8">
                {menuOptions.map((option, index) => (
                    <a
                    key={index}
                    href={option.href}
                        className={`text-white hover:text-gray-300 font-normal ${interSans.className} uppercase`}
                    >
                        {option.name}
                    </a>
                ))}
            </div>
            <Button name={"Explore Ecosystem"} />
        </div>
    )
}