import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'


const Featured = () => {
    const slider = [

        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672176749/NetflixApp/ice_cream_logo_hcqcaa.png',
        },

    ]
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSliders = () => {
        const isNewSliders = currentIndex === 0
        const newIndex = isNewSliders ? slider.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const nextSliders = () => {
        const isNewSliders = currentIndex === slider.length - 1
        const newIndex = isNewSliders ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    const moveToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }
    return (
        <div
            className='w-100% h-60  md:h-[600px] px-5 py-5  md:py-4 md:px-10 relative group'>
            <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                style={{ backgroundImage: `url(${slider[currentIndex].url})` }}
            ></div>

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%]  md:left-16 text-2xl rounded-full p-1 sm:p-2 bg-orange-600'>
                <BsChevronCompactLeft onClick={prevSliders} />
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 md:right-16 text-2xl rounded-full p-1 sm:p-2 bg-orange-600'>
                <BsChevronCompactRight onClick={nextSliders} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {
                    slider.map((sliderItems, slideIndex) => (
                        <div
                            key={sliderItems}
                            onClick={() => moveToSlide(slideIndex)}
                            className='text-2xl cursor-pointer'>
                            <RxDotFilled />
                        </div>

                    ))
                }
            </div>



        </div>
    )
}

export default Featured;