"use client"

import Icon from "../../public/Images/Icon.png"
import Image from "next/image"
import { Button } from "./ui/Button";
import { dmSans, interSans } from "@/fonts/fonts";

export const menuOptions = [
    { name: 'Home', href: 'home' },
    { name: 'Ecosystem', href: 'ecosystem' },
    { name: 'Benefits', href: 'benefits' },
    { name: 'Tokenomics', href: 'tokenomics' },
];

export const Navbar = () => {
    const scrollToSection = (id:string) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };

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
                    onClick={()=>scrollToSection(`${option.href}`)}
                        className={`text-white hover:text-gray-300 hover:cursor-pointer font-normal ${interSans.className} uppercase`}
                    >
                        {option.name}
                    </a>
                ))}
            </div>
            <Button name={"Explore Ecosystem"} />
        </div>
    )
}
