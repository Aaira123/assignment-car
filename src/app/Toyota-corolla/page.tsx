import Link from "next/link";


export default function Toyota(){
    return(
        <div className="bg-blue-200 p-1">
        <div className="my-56">
            <h1 className="text-black text-2xl text-center -mt-56"><ins>Toyota Corolla 2024 Price in Pakistan, Images, Rewiews & Specs</ins></h1>
            <div className="flex justify-center mt-8 ">
            <img
             src="/corolla.jpg" alt="civic" height={200} width={200} className="border border-gray-500" />
            </div>

            <div className="flex justify-center mt-8 gap-6 font-normal text-blue-600 border-blue-500">
                <button className="border border-blue-400 rounded-md shadow-md py-2 px-2 hover:bg-red-600">Book a test Drive</button>
                <button className="border  border-blue-400 rounded-md py-2 px-2 hover:bg-red-600">Request Bank Finance</button>
                <button className="border border-blue-400 rounded-md py-2 px-2 hover:bg-red-600">Visit Place</button>
                <button className="border border-blue-400 rounded-md py-2 px-2 hover:bg-red-600">Car Inspection</button>
            </div>
            
                <h2 className="text-center text-xl py-6">Vehicle Description</h2>
                <div className="flex justify-center gap-4 text-xs">
                    <div><b>Numbers of Doors</b> 4 </div>
                    <div><b>Engine</b> 1800 cc </div>
                    <div><b>Condition</b> 8.5 / 10 </div>
                    <div><b>Driven</b> 9,500 KM </div>
                    <div><b>Suspension Type</b> Soft Suspention </div>
                </div>
                <div className="flex justify-center gap-4 text-xs">
                    <div><b>Avg</b> 13 Km per ltr</div>
                    <div><b>Tranmission</b> Automatic</div>
                    <div><b>Fuel Type</b> High Octane</div>
                </div>

                <h1 className="text-center text-green-600 text-2xl py-7">50,00,000</h1>
                <div className="text-center">
                <Link href="/forms">
                <button className="text-white bg-blue-600 py-3 px-3 hover:bg-red-600">Make Payment</button>
                </Link>


                </div>

                </div>
                </div>
       

        
        
    )
} 