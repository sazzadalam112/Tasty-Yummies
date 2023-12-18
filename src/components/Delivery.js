import React from "react";

const Delivery = () => {
    return (
        <div className="w-full bg-white py-20 px-4">
            <h3 className="text-orange-700 justify-center text-2xl md:text-4xl font-bold text-center">Quick Delivery App</h3>
            <div className="w-[300px] md:w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[250px] md:w-[400px] mx-2 my-4 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqqhoU8xaD0lYRs_DqnTIKIrxnY6Ap2kyw0g&usqp=CAU" />

                <div className="flex flex-col justify-center">
                    <p className="text-yellow-900 font-bold text-2xl">Get The App</p>
                    <h1 className="md:text-4xl sm:text-3xl font-bold py-2 ">Limitless convenience on-demand</h1>
                    <p>Research employing physical and computational injury simulation has shown that brain stress and strain are both useful variables to describe injury risk, including concussion (Zhang et al., 2004; Doorly and Gilchrist, 2006; Kleiven, 2007; Sahoo et al., 2016). Finite element analysis has elucidated how trauma/tissue strains are associated with injury severity. Injury reconstructions have estimated a 50% risk of sustaining a concussion from maximum principal strain (MPS) values of 19–30% found in gray- and white-matter cerebrum (Zhang et al., 2004; Kleiven, 2007; Patton et al., 2013; Rousseau, 2014). However, many head contacts commonly occurring during contact/collision sports either do not present visible signs of neurologic dysfunction, or are not reported and therefore not clinically diagnosed.</p>
                    <button className="bg-black text-slate-100 w-[150px] py-2 my-6 rounded-xl">Get Started</button>


                </div>
            </div>

        </div>
    )
}
export default Delivery;