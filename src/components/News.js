import React from "react";
const News = () => {
    return (
        <div className="max-w-[1520] m-auto bg-black text-white h-40px px-4 w-full mt-40">
            <div className="mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2 my-4 mx-5">
                    <h1>Need advice on how to improve your flow?</h1>
                    <p>Sign Up to join our newsletter and stay up to date.</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input
                            type="email"
                            placeholder="email"
                            className="p-3 flex w-full rounded-md text-black"
                        />
                        <button className="bg-amber-500 px-10 mx-4 font-bold text-xl rounded-2xl w-[200px]">Notify me</button>

                    </div>
                    <p>We are concerned about the security of your data,Read {""}</p>
                    <span className="text-lime-700">Privacy Policy</span>
                </div>

                <hr className="my-20 bg-gray-700 border-1"></hr>

            </div>

        </div>
    )
}
export default News;