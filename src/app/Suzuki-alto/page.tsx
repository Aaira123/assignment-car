import Link from "next/link";


export default function Suzuki(){
    return(
        <div className=" text-center m-56">
            <h1 className="text-black text-5xl -mt-36">Suzuki Alto 2024 Price in Pakistan, Images, Rewiews & Specs</h1>
            <div className="flex justify-center mt-10">
            <img src="/suzuki.png" alt="alto" height={200} width={200} className="border border-gray-900 py-4"/>
            </div>
            <div>
            <p className="mt-8 text-sm">The Suzuki Alto is a kei car produced by Suzuki since 1979. The model, currently in its ninth generation, was first introduced in 1979 and has been built in many countries worldwide. The Alto originated as a commercial vehicle derivative of the Fronte, but over time the Alto nameplate gained in popularity and by 1988 it replaced the Fronte name completely. The Alto badge has often been used on different cars in Japan and in export markets, where it is considered a city car. .The Suzuki Alto is capable of generating a horsepower of 39 HP and a torque of 56 Nm with a top speed of 140 KM/H. Suzuki Alto is available in 2 transmission option (s) i.e Manual & Automatic. The Alto car has a fuel average of 18 KM/L with a fuel tank capacity of 27L..</p>
            </div>
            <div className="py-12">
            <span className="text-green-700 text-xl ">PKR 50,00,000</span>
            
            </div>
            <Link href="/forms">
            <button className="text-white bg-blue-600 py-3 px-3 hover:bg-red-600">Make Payment</button>
            </Link>
        </div>
    )
}