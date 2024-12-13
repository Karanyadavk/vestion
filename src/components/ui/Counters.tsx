import { manrope } from "@/fonts/fonts";
import { Percent, Plus } from "lucide-react";
import { Line } from "./svg/Line";

export const CounterOption = [
    { count: '400', svg: <Plus />, name: 'Projects Completed' },
    { count: '15', svg: <Plus />, name: 'Successfull Years' },
    { count: '98', svg: <Percent />, name: 'Client Retention' },
    { count: '30', svg: <Plus />, name: 'Countries' }
];

export const Counters = () => {
    return (
        <div className="h-56 w-full bg-[rgb(18,18,18)] py-8 px-20 text-white flex items-center">
            <div className="flex items-center">
                {CounterOption.map((counter, index) => (
                    <div key={index} className="flex items-center justify-evenly">
                        <div className="flex flex-col items-center gap-2 w-72">
                            <div className="flex items-center text-4xl justify-center">
                                {counter.count} <span>{counter.svg}</span>
                            </div>
                            <h1 className={`${manrope.className} font-normal text-[#9C9C9C] text-base`}>{counter.name}</h1>
                        </div>
                        <div>
                            {index === 3 ? "" : <Line />}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}