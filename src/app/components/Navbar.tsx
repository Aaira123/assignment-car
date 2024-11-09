 

 export default function navbar(){
    return(
        <nav className="flex bg-black w-full h-28 py-5 px-24 ">
            <img src="/logo.png" height={28} width={150}/>
            <div className="flex justify-end item-center w-full">
                <ul className=" flex justify-center items-center w-full text-white gap-10 ">
                    <li>UsedCars</li>
                    <li>NewCars</li>
                    <li>Bikes</li>
                    <li>AutoStore</li>
                    <li>Videos</li>
                    <li>Forums</li>
                    <li>Blog</li>
                    <li>More</li>
                </ul>
                <div className=" py-5 ">
                <button className="text-nowrap text-white bg-red-600 px-6 py-2">Post an Ad</button>
                </div>
            </div>

        </nav>
        
             )
}