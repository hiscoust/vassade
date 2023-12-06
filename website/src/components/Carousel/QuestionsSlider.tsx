"use client"

import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useEffect, useRef, useState } from 'react';
import { QuestionsArray } from './interfaces';

import Kontaktformular from '../Kontaktformular/Kontaktformular';

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderPage from './SliderPage';


let nextSlideTimeout: any;
let sliderInitilized = false;
const QuestionsSlider: FC<{ questionsID: string }> = ({ questionsID }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [slideIndex, setSlideIndex] = useState(0)
    const [questionsArray, setQuestionsArray] = useState<QuestionsArray[] | undefined>(undefined)

    const slideRef = useRef<any>(null)
    const sliderWrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        async function getQuestions() {
            try {
                const questionsObject = await require("./DB_QuestionsSlider").default
                setQuestionsArray(questionsObject[questionsID])
                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
                console.error(err);
            }
        }
        getQuestions()
    }, [])

    function nextSlide() {
        clearTimeout(nextSlideTimeout);
        nextSlideTimeout = setTimeout(() => {
            slideRef.current.slickNext()
        }, 150);
    }

    function prevSlide() {
        slideRef.current.slickPrev()
    }

    const [slideProcess, updateProccess] = useState(0);
    useEffect(() => {
        updateProccess(() => {
            if (questionsArray) {
                const l = questionsArray?.length!;
                const p = slideIndex / l * 100
                return p
            }
            return 0
        })
    }, [slideIndex])

    const settings: Settings = {
        adaptiveHeight: true,
        touchMove: false,
        autoplay: false,
        infinite: false,
        accessibility: false,
        lazyLoad: "ondemand",
        speed: 350,
        onReInit() {
            if (sliderInitilized) return
            const sliderTrack: HTMLDivElement = slideRef.current.innerSlider.list.children[0]
            const nextSlideHeight = sliderTrack.children[0].clientHeight
            sliderWrapperRef.current!.style.height = `${nextSlideHeight}px`
            sliderInitilized = true
        },
        beforeChange(currentSlide, nextSlide) {
            setTimeout(() => {
                const sliderTrack: HTMLDivElement = slideRef.current.innerSlider.list.children[0]
                const nextSlideHeight = sliderTrack.children[nextSlide].clientHeight
                sliderWrapperRef.current!.style.height = `${nextSlideHeight}px`
                setSlideIndex(nextSlide)
                setTimeout(() => {
                    if (typeof window == "undefined") return
                    let element = document.getElementById("formular");
                    if (element) {
                        element.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });
                    }
                }, 350);
            }, 15);
        },
    }


    return (

        <div className="rounded-md bg-slate-200 shadow-lg">
            {
                isLoading ? <LoadingSpinner /> :
                    <>
                        {questionsArray &&
                            <div className='lg:p-10'>
                                <div ref={sliderWrapperRef} className='transition-all delay-200 overflow-hidden'>
                                    <Slider {...settings} ref={slideRef}>
                                        {(questionsArray.map((page, pkey) => <SliderPage page={page} key={pkey} nextSlide={nextSlide} />)) as any}
                                        <div className="p-4" id='form'>
                                            <div className="text-primary text-start text-2xl lg:text-4xl mb-4 font-bold">
                                                Kontaktformular
                                            </div>
                                            <div className="border border-primary rounded-lg">
                                                <Kontaktformular selectedQuestionsDataObject={questionsArray} />
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                                <div className='flex mx-auto pt-8 max-w-lg px-4 pb-4'>
                                    <div className='flex flex-col items-center w-full pr-3'>
                                        <div className='flex justify-center mb-1 text-xs text-gray-600'>
                                            {parseInt(slideProcess.toString())} %
                                        </div>
                                        <div className='h-3 rounded-xl w-full mx-auto bg-slate-100 overflow-hidden'>
                                            <div className={`transition-all duration-[200] h-full bg-primary`} style={{ width: `${slideProcess}%` }}></div>
                                        </div>
                                    </div>
                                    <button onClick={() => prevSlide()} className='text-white text-xs mt-auto bg-primary p-2 rounded'>
                                        <FontAwesomeIcon icon={faAngleLeft} className="text-gray-200 ml-auto" />
                                    </button>
                                </div>
                            </div>
                            || <div className='bg-red-50 text-red-600'>Inhalt wurde nicht geladen. <br /> Bitte lade die Seite erneut</div>}
                    </>
            }
        </div>
    );
}
export default QuestionsSlider;


// const Page: FC<{ page: QuestionsArray, nextSlide: Function }> = ({ page, nextSlide }) => {

//     const className: string = "" as const;

//     const listItem: typeof className = "flex items-center sm:justify-center px-3 py-2 sm:py-4 w-full text-sm bg-white hover:bg-primary-1 focus:bg-primary-1 drop-shadow-lg rounded outline outline-1 outline-neutral-200 transition-[outline] duration-700 sm:text-lg sm:h-[15rem] sm:w-[15rem]";
//     const ListFrame: FC<{ children: React.ReactNode }> = ({ children }) => {
//         return <div className='flex flex-col gap-y-3 sm:flex-row flex-wrap sm:justify-center gap-4'>{children}</div >
//     }



//     const [PAGE, updatePAGE] = useState(page)

//     const breakPointMD = (typeof window != "undefined") && window.innerWidth > 640

//     console.log("Page reloaded", page)

//     return (<>
//         <div className="p-4">
//             <h3 className='flex text-start sm:text-lg justify-start sm:justify-center font-semibold sm:text-center pb-8'>
//                 <div className='sm:bg-primary sm:text-white sm:px-3 w-max sm:py-2 sm:text-2xl rounded'>
//                     {page.questionTitle}
//                 </div>
//             </h3>
//             <div className="sm:flex sm:justify-center">
//                 <ListFrame>
//                     <>
//                         {
//                             (page.options.map((option, opkey) => {
//                                 const { icon, checked } = option

//                                 return (
//                                     <label key={opkey} className={`${listItem} ${checked && "!outline-2 !outline-primary relative"}`} role={"button"} onClick={() => {
//                                         page.options.forEach((e, i) => {
//                                             if (e.checked)
//                                                 e.checked = false;
//                                         })
//                                         option.checked = true
//                                         updatePAGE({ ...PAGE })
//                                         nextSlide()
//                                     }}>
//                                         <div className='flex sm:flex-col items-center justify-center w-full sm:h-full'>

//                                             <div className='sm:mb-2 my-auto'>
//                                                 <SVG categorie={icon.categorie} iconName={icon.name} size={icon.size} height={breakPointMD && 90 || icon.height} width={breakPointMD && 90 || icon.width} />
//                                             </div>
//                                             <div className='flex w-full sm:w-fit sm:mt-auto items-center'>
//                                                 <div className="ml-3 sm:ml-0 sm:text-center">{option.optionTitle}</div>
//                                                 {checked ?
//                                                     <FontAwesomeIcon icon={faCircleCheck} className="text-primary ml-auto sm:m-3 sm:text-3xl sm:absolute sm:top-0 sm:right-0" /> :
//                                                     <FontAwesomeIcon icon={faAngleRight} className="text-gray-400 ml-auto sm:hidden" />
//                                                 }
//                                             </div>
//                                         </div>
//                                     </label>
//                                 )
//                             }))
//                         }
//                     </>
//                 </ListFrame>
//             </div>
//         </div>
//     </>)
// }


const LoadingSpinner: FC = () => {
    return <div className='grid place-items-center h-[17rem]'>
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-white border-r-transparent border-r-primary align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
        </div>
    </div>
}