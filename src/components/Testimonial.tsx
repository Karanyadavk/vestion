import { dmSans, interSans } from "@/fonts/fonts"
import TestimonialImage from "../../public/Images/TestimonialImage.png"
import Image from "next/image";
import { ArrowRight } from "./ui/svg/ArrowRight";

export const Testimonials = [
    { image: TestimonialImage, name: "Jacob", about: 'CEO - IT Solution Company', testimonial: "Lorem ipsum dolor sit amet consectetur. Bibendum quis fringilla odio maecenas magna eu ultrices aliquam egestas. Enim phasellus eu commodo nibh vitae amet elit. Ut natoque dui." },
    { image: TestimonialImage, name: "Jacob", about: 'CEO - IT Solution Company', testimonial: "Lorem ipsum dolor sit amet consectetur. Bibendum quis fringilla odio maecenas magna eu ultrices aliquam egestas. Enim phasellus eu commodo nibh vitae amet elit. Ut natoque dui." },
];

export const Testimonial = () => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-[#1D1D1D] to-[#06090B] py-24 px-16 text-white">
            <div className="flex flex-col items-center text-center gap-4">
                <h1 className={`${interSans.className} font-medium text-base text-[#E4B325]`}>TESTIMONIALS</h1>
                <h2 className={`${dmSans.className} font-normal text-3xl w-[50%] leading-8`}>Voices of Trust: Client Stories, Testimonials that Illuminate Our Shared Success.</h2>
            </div>
            <div className="flex items-center gap-16 mt-16">
                {Testimonials.map((testimonial, index) => (
                    <div key={index} className="flex items-center gap-8">
                        <Image src={testimonial.image} height={200} width={200} alt="testimonialImage" />
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <h1 className={`${interSans.className} text-xl font-normal`}>{testimonial.name}</h1>
                                <span className={`${interSans.className} text-sm font-normal text-[#9C9C9C]`}>{testimonial.about}</span>
                            </div>
                            <p className={`${interSans.className} text-base font-light`}>{testimonial.testimonial}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-16">
                <div className="flex gap-6 items-center justify-center">
                    <button className="p-4 border border-white rounded-full rotate-180 flex items-center justify-center">{<ArrowRight />}</button>
                    <button className="p-4 border border-white rounded-full flex items-center justify-center">{<ArrowRight />}</button>
                </div>
            </div>
        </div>
    )
}