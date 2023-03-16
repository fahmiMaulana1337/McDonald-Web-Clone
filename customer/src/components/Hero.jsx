import {Blog}  from "./Blog"
export default function Hero() {
    return (
        <div className="">
            <div className="carousel w-[100%]">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://nos.jkt-1.neo.id/mcdonalds/home-banners/September2021/jpajp8xawWSUjrRSJvDQ.jpg" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://nos.jkt-1.neo.id/mcdonalds/home-banners/January2023/SV8VBWapeOdIWGpdZGkh.jpg" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://nos.jkt-1.neo.id/mcdonalds/home-banners/November2022/SORmnDDjHbRj9w2EPpZ7.jpg" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://nos.jkt-1.neo.id/mcdonalds/home-banners/December2022/0SShqF9MJ5CMMgDodfiN.jpeg" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
            {/* <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 md:w-1/3">
                            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div class="flex-grow">
                                   <img src="https://nos.jkt-1.neo.id/mcdonalds/promos/January2023/iV96Cl5y7RolZw08krGV.jpg" className alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div class="flex-grow">
                                   <img src="https://nos.jkt-1.neo.id/mcdonalds/promos/January2023/h9pdOL9lAAZyinqkA0ik.jpg" className alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div class="flex-grow">
                                   <img src="https://nos.jkt-1.neo.id/mcdonalds/promos/February2023/j35uim10wj9a4S1ltwgS.jpg" className alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section> */}
            <Blog/>
        </div>

    )
}