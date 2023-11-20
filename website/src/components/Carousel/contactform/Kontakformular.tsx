import React, { FC, memo, useEffect, useRef, useState } from 'react'
import { RootState } from '../../Redux/store';
import { useDispatch, useSelector } from "react-redux"
import sendMail from './sendMail';
import { generateTable } from './generateTable';
import ModalDatenschutz from './Modal_Datenschutz';
import { setIsOpen } from '../../Redux/reducers/Modal';

function getLeistung(e: string): string {
    switch (e) {
        case "deammung-der-fassade": return "Dämmung der Fassade"
        case "deammung-der-kellerdecke": return "Dämmung der Kellerdecke"
        case "deammung-des-daches": return "Dämmung des Daches"
        case "erneuerung-der-fenster": return "Erneuerung der Fenster"
        case "erneurung-der-heizung": return "Erneuerung der Heizung"
        case "photovoltaikanlage": return "Installation einer Photovoltaikanlage"
        case "vollumfaengliche-sanierung": return "Vollumfängliche Sanierung"
        default: return "Fehler - keine Leistung";
    }
}

const Kontaktformular: FC<{ selectedQuestionsDataObject: any[], Q_ID: string }> = ({ selectedQuestionsDataObject, Q_ID }) => {

    const isError = useSelector((state: RootState) => state.MailState.isError)
    const isLoading = useSelector((state: RootState) => state.MailState.isLoading)
    const [genderNotSelected, setGenderNotSelected] = useState(false);

    const vornameRef = useRef<HTMLInputElement>(null);
    const nachnameRef = useRef<HTMLInputElement>(null);
    const genderFemaleRef = useRef<HTMLInputElement>(null);
    const genderMaleRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const telRef = useRef<HTMLInputElement>(null);
    const plzRef = useRef<HTMLInputElement>(null);
    const cityRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const init = async () => {
            const { Ripple, initTE } = await import("tw-elements");
            initTE({ Ripple });
        };
        init();
    }, []);

    const dispatch = useDispatch()

    function onSUBMIT(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!(genderMaleRef.current?.checked || genderFemaleRef.current?.checked)) {
            setGenderNotSelected(true);
            return
        }


        const dataObject: { [key: string]: any } = {
            vorname: vornameRef.current?.value,
            nachname: nachnameRef.current?.value,
            gender: genderMaleRef.current?.checked && genderMaleRef.current.value || genderFemaleRef.current?.value,
            email: emailRef.current?.value,
            tel: telRef.current?.value,
            plz: plzRef.current?.value,
            city: cityRef.current?.value,
            dienstleistung: getLeistung(Q_ID),
            qestionsTable: generateTable(selectedQuestionsDataObject, getLeistung(Q_ID))
        } as Object

        let invalid = false
        for (const v in dataObject) {
            const val = dataObject[v]
            if (val.length == 0) {
                invalid = true
                return
            }
        }
        if (invalid) return

        sendMail(dataObject, dispatch);
    }



    return (
        <div className='sm:flex sm:my-8'>
            <ModalDatenschutz />
            <div className='px-4 py-3 max-w-screen-lg sm:p-16 bg-[#fff] mx-auto rounded-lg'>
                {/* <button onClick={() => sendMail(dataObject, dispatch)}>send</button> */}
                <header>
                    <h1 className='text-2xl mb-2 text-start sm:text-center sm:text-4xl   py-2 sm:pt-0 font-semibold'>Kontaktformular</h1>
                </header>
                {isError && <ErrorMsg />}
                <div className="block mx-auto">
                    <form onSubmit={onSUBMIT}>
                        {/* Gender */}
                        <div className='mb-4'>
                            <div className="flex justify-start" onChange={() => { setGenderNotSelected(false) }} >
                                <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                                    <input className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border border-solid border-neutral-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary-100 checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary-100 checked:after:bg-primary-100 checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary-100 checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]" type="radio" name="GenerRadio" ref={genderFemaleRef} value="Frau" id='inlineRadio2' />
                                    <label className={`mt-px inline-block pl-[0.15rem] hover:cursor-pointer text-gray-800 ${genderNotSelected && "text-red-600"}`} htmlFor="inlineRadio2">Frau</label>
                                </div>
                                <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                                    <input className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border border-solid border-neutral-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary-100 checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary-100 checked:after:bg-primary-100 checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary-100 checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]" type="radio" name="GenerRadio" ref={genderMaleRef} id='inlineRadio1' value="Herr" />
                                    <label className={`mt-px inline-block pl-[0.15rem] hover:cursor-pointer text-gray-800 ${genderNotSelected && "text-red-600"}`} htmlFor="inlineRadio1">Herr</label>
                                </div>
                                <span className='text-neutral-500 text-xs ml-auto my-auto'>*Pflichtfeld</span>
                            </div>
                            {genderNotSelected && <div className='text-start text-red-600 text-xs mt-1'>* Bitte ankreuzen</div>}
                        </div>

                        <div className="grid sm:grid-cols-2">
                            <div className="relative mb-4 sm:mr-3">
                                <input id="vorname" name="vorname" type="text" className="peer h-11 sm:h-14 px-2 w-full border rounded border-gray-700 text-gray-700 placeholder-transparent focus:outline-none focus:border-primary-100" placeholder="vorname" ref={vornameRef} />
                                <label htmlFor="nachname" className="absolute ml-2 left-0 text-gray-600 text-sm transition-all 
                                peer-placeholder-shown:text-gray-400 -top-2.5 bg-white                                
                                peer-empty:peer-placeholder-shown:top-2.5
                                sm:peer-empty:peer-placeholder-shown:top-[.9rem] 
                                peer-empty:peer-placeholder-shown:text-base
                                sm:peer-empty:peer-placeholder-shown:text-lg
                                peer-empty:peer-placeholder-shown:bg-transparent
                                peer-empty:peer-placeholder-shown:px-2
                                peer-empty:peer-placeholder-shown:m-0
                                pointer-events-none
                                ">Vorname *</label>
                            </div>
                            <div className="relative mb-4">
                                <input id="nachname" type="text" name="nachname" className="peer h-11 sm:h-14 px-2 w-full rounded border border-gray-700 text-gray-700 placeholder-transparent focus:outline-none focus:border-primary-100" placeholder="nachname" ref={nachnameRef} />
                                <label htmlFor="nachname" className="absolute ml-2 left-0 text-gray-600 text-sm transition-all 
                                peer-placeholder-shown:text-gray-400 -top-2.5 bg-white                                
                                peer-empty:peer-placeholder-shown:top-2.5
                                sm:peer-empty:peer-placeholder-shown:top-[.9rem] 
                                peer-empty:peer-placeholder-shown:text-base
                                sm:peer-empty:peer-placeholder-shown:text-lg
                                peer-empty:peer-placeholder-shown:bg-transparent
                                peer-empty:peer-placeholder-shown:px-2
                                peer-empty:peer-placeholder-shown:m-0
                                pointer-events-none">Nachname *</label>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2">
                            <div className="relative mb-4 sm:mr-3">
                                <input id="email" name="email" type="email" className="peer h-11 sm:h-14 px-2 w-full rounded border border-gray-700 text-gray-700 placeholder-transparent focus:outline-none focus:border-primary-100" placeholder="email" ref={emailRef} />
                                <label htmlFor="email" className="absolute ml-2 left-0 text-gray-600 text-sm transition-all 
                                peer-placeholder-shown:text-gray-400 -top-2.5 bg-white                                
                                peer-empty:peer-placeholder-shown:top-2.5
                                sm:peer-empty:peer-placeholder-shown:top-[.9rem] 
                                peer-empty:peer-placeholder-shown:text-base
                                sm:peer-empty:peer-placeholder-shown:text-lg
                                peer-empty:peer-placeholder-shown:bg-transparent
                                peer-empty:peer-placeholder-shown:px-2
                                peer-empty:peer-placeholder-shown:m-0
                                pointer-events-none">E-Mail *</label>
                            </div>
                            <div className="relative mb-4">
                                <input id="tel" type="text" name="tel" className="peer h-11 sm:h-14 px-2 w-full rounded border border-gray-700 text-gray-700 placeholder-transparent focus:outline-none focus:border-primary-100" placeholder="tel" ref={telRef} onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
                                }} />
                                <label htmlFor="tel" className="absolute ml-2 left-0 text-gray-600 text-sm transition-all 
                                peer-placeholder-shown:text-gray-400 -top-2.5 bg-white                                
                                peer-empty:peer-placeholder-shown:top-2.5
                                sm:peer-empty:peer-placeholder-shown:top-[.9rem] 
                                peer-empty:peer-placeholder-shown:text-base
                                sm:peer-empty:peer-placeholder-shown:text-lg
                                peer-empty:peer-placeholder-shown:bg-transparent
                                peer-empty:peer-placeholder-shown:px-2
                                peer-empty:peer-placeholder-shown:m-0
                                pointer-events-none">Telefonnummer *</label>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2">
                            <div className="relative mb-4 sm:mr-3">
                                <input id="plz" type="text" name="plz" className="peer h-11 sm:h-14 px-2 w-full rounded border border-gray-700 text-gray-700 placeholder-transparent focus:outline-none focus:border-primary-100" placeholder="plz" ref={plzRef} onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
                                }} />
                                <label htmlFor="plz" className="absolute ml-2 left-0 text-gray-600 text-sm transition-all 
                                peer-placeholder-shown:text-gray-400 -top-2.5 bg-white                                
                                peer-empty:peer-placeholder-shown:top-2.5
                                sm:peer-empty:peer-placeholder-shown:top-[.9rem] 
                                peer-empty:peer-placeholder-shown:text-base
                                sm:peer-empty:peer-placeholder-shown:text-lg
                                peer-empty:peer-placeholder-shown:bg-transparent
                                peer-empty:peer-placeholder-shown:px-2
                                peer-empty:peer-placeholder-shown:m-0
                                pointer-events-none">Postleitzahl *</label>
                            </div>
                            <div className="relative mb-4">
                                <input id="city" name="city" type="test" className="peer h-11 sm:h-14 px-2 w-full rounded border border-gray-700 text-gray-700 placeholder-transparent focus:outline-none focus:border-primary-100" placeholder="city" ref={cityRef} />
                                <label htmlFor="city" className="absolute ml-2 left-0 text-gray-600 text-sm transition-all 
                                peer-placeholder-shown:text-gray-400 -top-2.5 bg-white                                
                                peer-empty:peer-placeholder-shown:top-2.5
                                sm:peer-empty:peer-placeholder-shown:top-[.9rem] 
                                peer-empty:peer-placeholder-shown:text-base
                                sm:peer-empty:peer-placeholder-shown:text-lg
                                peer-empty:peer-placeholder-shown:bg-transparent
                                peer-empty:peer-placeholder-shown:px-2
                                peer-empty:peer-placeholder-shown:m-0
                                pointer-events-none">Ort *</label>
                            </div>
                        </div>

                        <div className='mb-4 text-start text-[.7rem] sm:text-[1rem] sm:mt-5' style={{ lineHeight: "1.2" }}>
                            Mit dem Absenden meiner Anfrage habe ich die <span onClick={() => { dispatch(setIsOpen(true)) }} className='text-primary-600' role={"button"}>Datenschutzerklärung</span> akzeptiert und zur Kenntnis genommen.
                        </div>

                        {/*Submit button*/}
                        <div className='flex justify-center sm:mt-12'>
                            <button type="submit" className="inline-block w-full sm:w-44 rounded bg-primary-100 px-6 py-3 sm:py-4 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-orange-400 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-100 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-100 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]" data-te-ripple-init data-te-ripple-color="light">
                                {isLoading ? <div className="flex gap-2 justify-center">
                                    <div className="w-3 h-3 rounded-full animate-pulse bg-white" />
                                    <div className="w-3 h-3 rounded-full animate-pulse bg-white" />
                                    <div className="w-3 h-3 rounded-full animate-pulse bg-white" />
                                </div>
                                    : <span className='sm:text-lg'>Senden</span>}
                            </button>
                        </div>
                    </form>
                </div >
            </div>

            {/* <button onClick={() => sendMail(dataObject)}>Send</button> */}

        </div >
    )
}

export default memo(Kontaktformular);

const ErrorMsg: FC = () => {

    return (<>
        <div className="bg-red-100 border-l-4 border-red-600 text-red-600 p-4 m-4 mx-auto" role="alert">
            <p className="font-bold text-start text-xl">Fehler</p>
            <p className='text-start'>Nachricht konnte nicht gesendet werden.</p>
        </div>
    </>)
}