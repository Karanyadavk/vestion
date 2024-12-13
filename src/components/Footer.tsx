import { interSans, manrope } from "@/fonts/fonts"

export const FooterDetails = [
    { title: "About Us", links: ["About WebTech", "Our Team", "Mission & Values", "Careers", "Blogs"]},
    { title: "Services", links: ["Software Development", "IT Consulting", "Web Design", "Digital Transformation", "Project Management"]},
    { title: "Solutions", links: ["Industry Solutions", "Custom Solutions", "Case Studies", "Client Success", "Testimonials"]},
    { title: "Resources", links: ["Blog", "Whitepapers", "Webinars", "FAQs", "Knowledge Base"]},
    { title: "Contact us", links: ["Get in Touch", "Support", "Sales", "Locations", "Contact Form"]},
    { title: "Connect", links: ["Newsletter", "Social Media", "Events", "Partnership", "Community Involvement"]},
]

export const Footer = () => {
    return (
        <div className="w-full h-[450px] bg-gradient-radial from-[#1E1E1E] to-[#121212] text-white px-16">
            <div className="flex justify-between pt-16 pb-12">
                {FooterDetails.map((detail, index) => (
                    <div key={index} className="flex flex-col gap-6">
                        <h1 className={`${interSans.className} font-medium text-xl`}>{detail.title}</h1>
                        <div className="flex flex-col gap-4">
                            {detail.links.map((link, i) => (
                                <a href="" key={i} className={`${interSans.className} font-normal text-[#9C9C9C] text-base`}>
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="py-9 border-t border-white">
                <p className={`${manrope.className} font-normal text-base text-center text-white`}>Copyright © 2024 Vestion  | All Rights Reserved</p>
            </div>
        </div>
    )
}
