import React, { useState } from "react";
import { mealData } from "../data/data";
import { TbPlayCard } from "react-icons/tb";
import { ArrowSmRightIcon } from "@heroicons/react/outline"

const Meal = () => {
    const [foods, setFoods] = useState(mealData)
    const fillterCat = (category) => {
        setFoods(
            mealData.filter((item) => {
                return item.category === category;
            })
        );
    };
    return (
        <div className="grid max-w-[1520px] m-auto px-4 py-12">
            <h1 className="text-center text-orange-700 text-2xl font-bold py-2">
                MY-Food
            </h1>
            <div className="flex flex-col lg:flex-row justify-center">
                <div className="flex justify-center md:justify-center mx-2">
                    <button onClick={() => setFoods(mealData)}
                        className="m-1 h-10 w-16 p-1 bg-black text-white rounded-2xl hover:bg-orange-700">All
                    </button>
                    <button onClick={() => fillterCat("pizza")}
                        className="m-1 h-10 w-16 p-1 bg-black text-white rounded-2xl hover:bg-orange-700">Pizza
                    </button>
                    <button onClick={() => fillterCat("chicken")}
                        className="m-1 h-10 w-16 p-1 bg-black text-white rounded-2xl hover:bg-orange-700">Chicken
                    </button>
                    <button onClick={() => fillterCat("salad")}
                        className="m-1 h-10 w-16 p-1 bg-black text-white rounded-2xl hover:bg-orange-700">Salad
                    </button>
                </div>
            </div>
            <div className="grid  sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-4 gap-6 justify-center">
                {
                    foods.map((item) => (
                        <div key={item.id} className="border-none hover:scale-105 duration-500 ">
                            <img className="md:h-[200px] w-full py-5 object-cover text-center bg-center rounded-3xl"
                                src={item.image} alt={item.name}
                            />
                            <div className="flex justify-between px-2 py-4">
                                <p className="-mt-8 text-2xl font-bold">{item.name}</p>
                                <p className="bg-lime-950 h-14 w-14 rounded-full text-white py-4 px-2 -mt-20 ">{item.price}</p>
                            </div>
                            <div className="pl-2 py-4 -mt-7">
                                <p className="flex items-center text-rose-600-900">View More
                                    <ArrowSmRightIcon className="w-5 ml-2 -" /></p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
export default Meal;
