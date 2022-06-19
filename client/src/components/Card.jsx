import React from 'react'
import living from '../images/living-room.gif'
import kitchen from '../images/kitchen.gif'
import bedroom from '../images/smart-bedroom.gif'
import bathroom from '../images/bathroom.gif'
import study from '../images/study.gif'
import dining from '../images/dining.png'
export const Card = () => {
    return (
       <>
        <div class="w-full px-4 md:w-1/2 xl:w-1/3">
                            <div class="mb-10 overflow-hidden rounded-lg bg-white">
                                <img
                                    src="assets/images/cards/card-01/image-03.jpg"
                                    alt="image"
                                    class="w-full"
                                />
                                <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                                    <h3>
                                        <a
                                            href="javascript:void(0)"
                                            class="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                                        >
                                            Creative Card Component designs graphic elements
                                        </a>
                                    </h3>
                                    <p class="mb-7 text-base leading-relaxed text-body-color">
                                        Lorem ipsum dolor sit amet pretium consectetur adipiscing
                                        elit. Lorem consectetur adipiscing elit.
                                    </p>

                                    <a
                                        href="javascript:void(0)"
                                        class="inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white"
                                    >
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
       </>
    )
}
