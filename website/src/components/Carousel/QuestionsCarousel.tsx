"use client"

import { faAngleRight, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePathname, useRouter } from 'next/navigation';
import React, { FC, useEffect, useRef, useState } from 'react';
import { Carousel, CarouselProps } from 'react-responsive-carousel';
import SVG from '../svgs/SVG_DataBase';
import { QuestionsArray } from './interfaces';
import { useSelector } from "react-redux"
import Kontaktformular from '../Kontaktformular/Kontaktformular';

let nextSlideTimeout: any;
const QuestionsCarousel: FC<{ questionsID: string }> = ({ questionsID }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [slideIndex, setSlideIndex] = useState(1)
    const [slideProcess, updateProccess] = useState(0);
    const [questionsArray, setQuestionsArray] = useState<QuestionsArray[] | undefined>(undefined)

    const carouselRef = useRef<any>(null)
    const router = useRouter()
    const pathname = usePathname()
    const MailSent = useSelector((state: RootState) => state.MailState.MailSent)

    useEffect(() => {
        updateProccess(() => {
            if (questionsArray) {
                const l = questionsArray?.length! + 1;
                const p = slideIndex / l * 100
                return p
            }
            return 0
        })
    }, [slideIndex])

    useEffect(() => {

        async function getQuestions() {
            try {
                const questionsObject = await require("./DB_QuestionsCarousel").default
                setQuestionsArray(questionsObject[questionsID])
                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
                console.error(err);
            }
        }

        getQuestions()

        /* carousel */
        router.replace(pathname)
        function PUSHSTATE(e: Event) {
            e.preventDefault()
            prevSlide()
        }

        function alertUserBeforeRefresh(e: Event) {
            // if (!MailSent)
            // e.preventDefault()
        }

        if (typeof window !== "undefined") {
            window.addEventListener("popstate", PUSHSTATE)
            window.addEventListener("beforeunload", alertUserBeforeRefresh)
        }
        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("popstate", PUSHSTATE)
                window.removeEventListener("beforeunload", alertUserBeforeRefresh)
            }
        };
    }, [])

    const carouselSettings: Partial<CarouselProps> = {
        swipeable: false,
        showThumbs: false,
        showStatus: false,
        showIndicators: false,
        showArrows: false,
        dynamicHeight: false,
        autoPlay: false,
        autoFocus: false,
        useKeyboardArrows: false,
        transitionTime: 250
    }

    function nextSlide(currentPageIndex: number) {
        clearTimeout(nextSlideTimeout);
        if (slideIndex <= carouselRef.current.itemsRef.length - 1) {
            nextSlideTimeout = setTimeout(() => {
                setSlideIndex(currentPageIndex + 2)
                router.push(`#!${slideIndex + 1}`, { scroll: false })
            }, 150)
        }
    }

    function prevSlide() {
        const hashIndex = parseInt(window.location.hash.replace("#!", "")) || 1
        if (hashIndex >= slideIndex) {
            setSlideIndex(hashIndex)
            // console.log(slideIndex);
        }
    }

    function prevSlidePopState() {
        window.history.back()
    }

    useEffect(() => {
        if (MailSent) {
            if (slideIndex <= carouselRef.current.itemsRef.length - 1) {
                setSlideIndex(e => ++e)
                router.push(`#!${slideIndex + 1}`, { scroll: false })
            }
        }
    }, [MailSent])

    return (
        <div className="min-h-[21rem]">
            {
                isLoading ? <LoadingSpinner /> :
                    <>
                        <div className='absolute top-0 sm:fixed h-1 w-full bg-black z-50'>
                            <div className={`transition-[width] duration-500 h-full bg-primary`} style={{ width: `${slideProcess}%` }}></div>
                        </div>
                        {questionsArray &&
                            <Carousel {...carouselSettings}
                                selectedItem={slideIndex - 1}
                                ref={carouselRef}>
                                {(questionsArray.map((page, pkey) => <Page page={page} pkey={pkey} key={pkey} nextSlide={nextSlide} />)) as any}
                                {slideIndex == 7 && <div className=''>
                                    <div className="text-primary text-start text-2xl lg:text-4xl mb-4 font-bold">
                                        Kontaktformular
                                    </div>
                                    <div className="border border-primary rounded-lg">
                                        <Kontaktformular />
                                    </div>
                                </div>}
                            </Carousel >
                            || <div className='bg-red-50 text-red-600'>Inhalt wurde nicht geladen. <br /> Bitte lade die Seite erneut</div>}
                        {slideIndex != 7 &&
                            <div className='flex mb-8 px-3 lg:px-16' style={{ marginTop: slideIndex == 7 && "2rem" || "" }}>
                                <div className='ml-auto'>
                                    {slideIndex} von {questionsArray?.length! + 1}
                                </div>
                            </div>
                        }
                    </>
            }
        </div>
    );
};

export default QuestionsCarousel;

const Page: FC<{ page: QuestionsArray, pkey: number, nextSlide: Function }> = ({ page, pkey, nextSlide }) => {
    const className: string = "" as const;


    const listItem: typeof className = "flex items-center sm:justify-center px-3 py-2 sm:py-4 w-full text-sm bg-white hover:bg-primary-1 focus:bg-primary-1 drop-shadow-lg rounded outline outline-1 outline-neutral-200 transition-[outline] duration-700 sm:text-lg sm:h-[15rem] sm:w-[15rem]";
    const ListFrame: FC<{ children: React.ReactNode }> = ({ children }) => {
        /* sm:grid sm:grid-cols-2 md:flex md:flex-row */
        return <div className='flex flex-col gap-y-3 sm:flex-row flex-wrap sm:justify-center gap-4'> {children}</div >
    }

    const [PAGE, updatePAGE] = useState(page)

    const breakPointMD = (typeof window != "undefined") && window.innerWidth > 640

    return (<>
        <div className="pt-4 md:pt-0 pb-2">
            <h3 className='flex text-start sm:text-lg justify-start sm:justify-center font-semibold sm:text-center py-3'>
                <div className='sm:bg-primary sm:text-white backdrop-blur-sm sm:px-3 w-max sm:py-2 sm:text-2xl rounded'>
                    {page.questionTitle}
                </div>
            </h3>
            <div className="py-3 px-3 sm:flex sm:justify-center">
                <ListFrame>
                    <>
                        {
                            (PAGE.options.map((option, opkey) => {
                                const { icon, checked } = option


                                return (
                                    <label key={opkey} className={`${listItem} ${checked && "!outline-2 !outline-primary-100 relative"}`} role={"button"} onClick={() => {
                                        PAGE.options.forEach((e, i) => {
                                            if (e.checked)
                                                e.checked = false;
                                        })
                                        option.checked = true
                                        updatePAGE({ ...PAGE })
                                        nextSlide(pkey)
                                    }}>
                                        <div className='flex sm:flex-col items-center justify-center w-full sm:h-full'>

                                            <div className='sm:mb-2 my-auto'>
                                                <SVG categorie={icon.categorie} iconName={icon.name} size={icon.size} height={breakPointMD && 90 || icon.height} width={breakPointMD && 90 || icon.width} />
                                            </div>
                                            <div className='flex w-full sm:w-fit sm:mt-auto items-center'>
                                                <div className="ml-3 sm:ml-0">{option.optionTitle}</div>
                                                {checked ?
                                                    <FontAwesomeIcon icon={faCircleCheck} className="text-primary ml-auto sm:m-3 sm:text-3xl sm:absolute sm:top-0 sm:right-0" /> :
                                                    <FontAwesomeIcon icon={faAngleRight} className="text-gray-400 ml-auto sm:hidden" />
                                                }
                                            </div>
                                        </div>
                                    </label>
                                )
                            }))
                        }
                    </>
                </ListFrame>
            </div>
        </div>
    </>)
}


const LoadingSpinner: FC = () => {
    return <div className='grid place-items-center h-[17rem]'>
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary-100 sm:border-white border-r-transparent sm:border-r-black align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
        </div>
    </div>
}


// {page.checkbox &&
//     <div className='flex justify-center mt-4'>
//         <div className='rounded-sm px-2 py-2 bg-slate-500' role={"button"} onClick={() => {
//             nextSlide()
//             let anyOneChecked: Boolean = false;
//             page.options.forEach(option => {
//                 if (option.checked) {
//                     anyOneChecked = true;
//                     return
//                 }
//             })
//             // if (!anyOneChecked)
//         }}>Weiter</div>
//     </div>
// }