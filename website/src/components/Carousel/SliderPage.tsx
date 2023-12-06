import React from "react";
import { QuestionsArray } from "./interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import SVG from './svgs/SVG_DataBase';


interface PageProps { page: QuestionsArray, nextSlide: Function }

class SliderPage extends React.Component<PageProps, { PAGE: QuestionsArray }> {
    shouldComponentUpdate(nextProps: Readonly<PageProps>, nextState: Readonly<{ PAGE: QuestionsArray; }>, nextContext: any): boolean {
        return nextState.PAGE != this.state.PAGE
    }


    constructor(props: PageProps) {
        super(props);
        this.state = {
            PAGE: props.page,
        };
    }

    render() {
        const { page, nextSlide } = this.props;

        return (
            <>
                <div className="p-4">
                    <h3 className='flex text-start sm:text-lg justify-start sm:justify-center font-semibold sm:text-center pb-8'>
                        <div className='sm:bg-primary sm:text-white sm:px-3 w-max sm:py-2 sm:text-2xl rounded'>
                            {page.questionTitle}
                        </div>
                    </h3>
                    <div className="sm:flex sm:justify-center">
                        <Options nextSlide={nextSlide} page={page} />
                    </div>
                </div>
            </>
        );
    }
}

export default SliderPage;


class Options extends React.Component<PageProps, { PAGE: QuestionsArray }> {
    shouldComponentUpdate(nextProps: Readonly<PageProps>, nextState: Readonly<{ PAGE: QuestionsArray; }>, nextContext: any): boolean {
        return nextState.PAGE != this.state.PAGE
    }

    className: string = "" as const;

    listItem = "flex items-center sm:justify-center px-3 py-2 sm:py-4 w-full text-sm bg-white hover:bg-primary-1 focus:bg-primary-1 drop-shadow-lg rounded outline outline-1 outline-neutral-200 transition-[outline] duration-0 sm:text-lg sm:h-[15rem] sm:w-[15rem]";

    ListFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => {
        return <div className='flex flex-col gap-y-3 sm:flex-row flex-wrap sm:justify-center gap-4'>{children}</div>
    }

    breakPointMD = (typeof window !== "undefined") && window.innerWidth > 640;


    constructor(props: PageProps) {
        super(props);
        this.state = {
            PAGE: props.page,
        };
    }

    render(): React.ReactNode {
        const { nextSlide, page } = this.props
        const { PAGE } = this.state

        return <>
            <this.ListFrame>
                <>
                    {PAGE.options.map((option, opkey) => {
                        const { icon, checked } = option;

                        return (
                            <label key={opkey} className={`${this.listItem} ${checked && "!outline-2 !outline-primary relative"}`} role={"button"} onClick={() => {
                                PAGE.options.forEach((e, i) => {
                                    if (e.checked)
                                        e.checked = false;
                                });
                                option.checked = true;
                                this.setState({ PAGE: { ...PAGE } });
                                setTimeout(() => {
                                    nextSlide();
                                }, 350);
                            }}>
                                <div className='flex sm:flex-col items-center justify-center w-full sm:h-full'>
                                    <div className='sm:mb-2 my-auto'>
                                        <SVG categorie={icon.categorie} iconName={icon.name} size={icon.size} height={this.breakPointMD && 90 || icon.height} width={this.breakPointMD && 90 || icon.width} />
                                    </div>
                                    <div className='flex w-full sm:w-fit sm:mt-auto items-center'>
                                        <div className="ml-3 sm:ml-0 sm:text-center">{option.optionTitle}</div>
                                        {checked ?
                                            <FontAwesomeIcon icon={faCircleCheck} className="text-primary ml-auto sm:m-3 sm:text-3xl sm:absolute sm:top-0 sm:right-0" /> :
                                            <FontAwesomeIcon icon={faAngleRight} className="text-gray-400 ml-auto sm:hidden" />
                                        }
                                    </div>
                                </div>
                            </label>
                        );
                    })}
                </>
            </this.ListFrame>
        </>
    }
}