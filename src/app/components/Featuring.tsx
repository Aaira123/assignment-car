
import Link from "next/link";

export default function featuring(){
    return(
     <nav className=" bg-slate-500 h-[700px] -mt-56 p-2">
        <div className="flex text-neutral-800 text-2xl m-32 gap-1 py-12">
            <div>Featured</div>
            <div>New</div>
            <div>Cars</div>
            <div className=" flex justify-end w-full text-red-900 font-medium text-sm ">
                <div>ViewAllNewCars</div>
                </div>
            </div>
        <div className="flex font-light m-32 gap-10 -mt-40 ">
            <div>Popular</div>
            <div>Upcoming</div>
            <div>Newly Launched</div>
             
        </div>
        
        
        <div className="flex m-32 gap-16 pb-64">
            <Link href="/Toyota-corolla">
            <div className="cursor pointer shadow-md  bg-white">
        <img src="/corolla.jpg" alt="corolla" width={200} height={200} />
         <h3 className="text-center text-blue-500 text-sm">Toyota Corolla</h3>
         <span className="text-center text-green-800 text-sm px-10">PKR 59.7-75.5 lacs</span>

        </div>
        </Link>

        <Link href="/Suzuki-alto">
        <div className="cursor pointer shadow-md bg-white">
        <img src="/suzuki.png" alt="corolla" width={150} height={50} className="bg-white h-36 w-48"/>
        <h3 className="text-center py-1  text-blue-500 text-sm">Suzuki alto</h3>
        <span className="text-center text-green-800 text-sm px-10">PKR 23.3-30.5 lacs</span>
        </div>
        </Link>

        <Link href="/Honda-city">
        <div className="cursor pointer shadow-md bg-white">
        <img src="/Honda.jpg" alt="corolla" width={200} height={200}/>
        <h3 className="text-center  text-blue-500 text-sm">Honda City</h3>
        <span className=" text-green-800 text-sm px-10">PKR 46.5-58.5 lacs</span>
        </div>
        </Link>

        <Link href="Honda-civic">
         <div className="cursor pointer shadow-md bg-white">
        <img src="/Cover.jpg" alt="corolla" width={200} height={200}/>
        <h3 className="text-center  text-blue-500 text-sm">Honda Civic</h3>
        <span className="text-center text-green-700 text-sm px-10">PKR 86.6-99.0 lacs</span>
        </div>
        </Link>
        </div>
        
     </nav>
        
        
    )
}