"use client"

import React, { FC, useEffect, useRef, useState } from 'react'
import axios from "axios"
import { setMailSendingFailed, setMailStatusSucceed } from '../Redux/reducers/MailStateReducer';
import { useDispatch } from 'react-redux';
import { generateTable } from './generateTable';

export interface ClientDataObject {
    vorname: string | undefined
    nachname: string | undefined
    gender: string | undefined
    email: string | undefined
    tel: string | undefined
    plz: string | undefined
    city: string | undefined
    msg: string
    qestionsTable?: string
}

const Kontaktformular: React.FC<{ selectedQuestionsDataObject: any }> = React.memo(({ selectedQuestionsDataObject }) => {
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()

    const [genderNotSelected, setGenderNotSelected] = useState(false);

    const formRef = useRef<HTMLFormElement>(null)
    const vornameRef = useRef<HTMLInputElement>(null);
    const nachnameRef = useRef<HTMLInputElement>(null);
    const genderFemaleRef = useRef<HTMLInputElement>(null);
    const genderMaleRef = useRef<HTMLInputElement>(null); const emailRef = useRef<HTMLInputElement>(null);
    const telRef = useRef<HTMLInputElement>(null);
    const plzRef = useRef<HTMLInputElement>(null);
    const cityRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<any>();


    function onSUBMIT(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!(genderMaleRef.current?.checked || genderFemaleRef.current?.checked)) {
            setGenderNotSelected(true);
            return
        }


        const dataObject: ClientDataObject = {
            vorname: vornameRef.current?.value,
            nachname: nachnameRef.current?.value,
            gender: genderMaleRef.current?.checked && genderMaleRef.current.value || genderFemaleRef.current?.value,
            email: emailRef.current?.value,
            tel: telRef.current?.value,
            plz: plzRef.current?.value,
            city: cityRef.current?.value,
            msg: messageRef.current?.value
        }

        const table = generateTable(selectedQuestionsDataObject, "Fassadendämmung", dataObject);
        dataObject["qestionsTable"] = table;
        // console.log(dataObject)
        console.log(table)
        sendMail(dataObject);
    }

    function sendMail(dataObject: Object) {
        // const url = "/backend/mailer.php"
        const url = "http://localhost:3081/backend/mailer.php"

        setIsLoading(true)
        axios.post(url, dataObject, {
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            }
        }).then(res => {
            const response: string = res.data.msgSent;
            if (res.data.msgSent) {
                dispatch(setMailStatusSucceed(true))
                setIsLoading(false)
                setTimeout(() => {
                    dispatch(setMailStatusSucceed(false))
                }, 8000);
            }
            else {
                throw new Error(res.data);
            }
        }).catch(err => {
            console.log(err);
            dispatch(setMailSendingFailed(true))
            setIsLoading(false)
            setTimeout(() => {
                dispatch(setMailSendingFailed(false))
            }, 8000);
        })
    }

    return (
        <>
            <div className="">
                <form ref={formRef} onSubmit={onSUBMIT} className="p-4 lg:p-8 ">
                    {/* Gender */}

                    <div className="grid mb-4" onChange={() => { setGenderNotSelected(false) }}>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-x-4'>
                                <div className="inline-flex items-center">
                                    <label className="flex items-center" htmlFor="radioFrau">
                                        <div className='relative flex cursor-pointer items-center rounded-full mr-2'>
                                            <input id="radioFrau" name="color" type="radio" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-400 text-primary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary checked:before:bg-primary hover:before:opacity-10"
                                                ref={genderFemaleRef} value="Frau" />
                                            <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-primary opacity-0 transition-opacity peer-checked:opacity-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                                    <circle data-name="ellipse" cx={8} cy={8} r={8} />
                                                </svg>
                                            </div>
                                        </div>
                                        <span>Frau</span>
                                    </label>
                                </div>

                                <div className="inline-flex items-center">
                                    <label className="flex items-center" htmlFor="radioHerr">
                                        <div className='relative flex cursor-pointer items-center rounded-full mr-2'>
                                            <input id="radioHerr" name="color" type="radio" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-400 text-primary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary checked:before:bg-primary hover:before:opacity-10"
                                                ref={genderMaleRef} value="Herr" />

                                            <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-primary opacity-0 transition-opacity peer-checked:opacity-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                                    <circle data-name="ellipse" cx={8} cy={8} r={8} />
                                                </svg>
                                            </div>
                                        </div>
                                        <span>Herr</span>
                                    </label>
                                </div>
                            </div>

                            <div className=''>
                                <span className='text-neutral-500 text-xs'>*Pflichtfeld</span>
                            </div>
                        </div>

                        {genderNotSelected && <div className='text-start text-red-600 text-xs mt-2 -mb-2  w-full'>* Bitte ankreuzen</div>}
                    </div>

                    <div className="grid sm:grid-cols-2">
                        <div className="relative mb-4 sm:mr-3">
                            <input id="vorname" name="vorname" type="text" className="peer h-11 sm:h-14 px-2 w-full rounded border border-black text-gray-700 placeholder-transparent focus:outline-none focus:border-primary-100" placeholder="vorname" ref={vornameRef} required />
                            <label htmlFor="nachname" className="absolute ml-2 left-0 px-1 text-gray-600 text-sm transition-all 
                                peer-placeholder-shown:text-gray-8 peer-placeholder-shown:text-gray-800 -top-2.5 bg-white                                
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
                            <input id="nachname" type="text" name="nachname" className="peer h-11 sm:h-14 px-2 w-full rounded border border-black text-gray-700 placeholder-transparent focus:outline-none focus:border-primary-100" placeholder="nachname" ref={nachnameRef} required />
                            <label htmlFor="nachname" className="absolute ml-2 left-0 px-1 text-gray-600 text-sm transition-all 
                                peer-placeholder-shown:text-gray-8 peer-placeholder-shown:text-gray-800 -top-2.5 bg-white                                
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
                            <input id="email" name="email" type="email" className="peer h-11 sm:h-14 px-2 w-full rounded border border-black text-gray-700 placeholder-transparent focus:outline-none focus:border-primary-100" placeholder="email" ref={emailRef} required />
                            <label htmlFor="email" className="absolute ml-2 left-0 px-1 text-gray-600 text-sm transition-all 
                                peer-placeholder-shown:text-gray-8 peer-placeholder-shown:text-gray-800 -top-2.5 bg-white                                
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
                            <input id="tel" type="text" name="tel" className="peer h-11 sm:h-14 px-2 w-full rounded border border-black text-gray-700 placeholder-transparent focus:outline-none focus:border-primary-100" placeholder="tel" ref={telRef} required onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                                e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
                            }} />
                            <label htmlFor="tel" className="absolute ml-2 left-0 px-1 text-gray-600 text-sm transition-all 
                                peer-placeholder-shown:text-gray-8 peer-placeholder-shown:text-gray-800 -top-2.5 bg-white                                
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
                            <input id="plz" type="text" name="plz" className="peer h-11 sm:h-14 px-2 w-full rounded border border-black text-gray-700 placeholder-transparent focus:outline-none focus:border-primary-100" placeholder="plz" ref={plzRef} onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                                e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
                            }} required />
                            <label htmlFor="plz" className="absolute ml-2 left-0 px-1 text-gray-600 text-sm transition-all 
                                peer-placeholder-shown:text-gray-8 peer-placeholder-shown:text-gray-800 -top-2.5 bg-white                                
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
                            <input id="city" name="city" type="test" className="peer h-11 sm:h-14 px-2 w-full rounded border border-black text-gray-700 placeholder-transparent focus:outline-none focus:border-primary-100" placeholder="city" ref={cityRef} required />
                            <label htmlFor="city" className="absolute ml-2 left-0 px-1 text-gray-600 text-sm transition-all 
                                peer-placeholder-shown:text-gray-8 peer-placeholder-shown:text-gray-800 -top-2.5 bg-white                                
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
                    <div >
                        <div className="relative mb-3" data-te-input-wrapper-init>
                            <textarea className="peer min-h-[10rem] p-3 w-full rounded border border-black text-gray-600 placeholder-transparent focus:outline-none focus:border-primary-100 whitespace-pre-line" id="Textarea" rows={9} placeholder="Nachricht" defaultValue={
                                `Sehr geehrtes Team VASSADE,\n\nich interessiere mich für eine Beratung und möchte gerne weitere Informationen zu den angebotenen Dienstleistungen erhalten.\n\nBitte nehmen Sie Kontakt mit mir auf, um einen geeigneten Termin für eine Beratung zu vereinbaren.\n\nIch bevorzuge eine telefonische Kontaktaufnahme, um mein Anliegen näher zu besprechen.\n\nIch freue mich auf Ihre Rückmeldung.`} ref={messageRef} />


                            <label htmlFor="Textarea" className="absolute ml-2 px-1 left-0 text-gray-600 text-sm transition-all 
                                -top-2.5 bg-white                                
                                peer-placeholder-shown:text-gray-8 peer-placeholder-shown:text-gray-800
                                peer-empty:peer-placeholder-shown:top-2.5
                                sm:peer-empty:peer-placeholder-shown:top-[.7rem] 
                                peer-empty:peer-placeholder-shown:bg-transparent
                                peer-empty:peer-placeholder-shown:px-2
                                peer-empty:peer-placeholder-shown:m-0
                                pointer-events-none">Nachricht</label>
                        </div>
                    </div>

                    <div className='mb-4 text-center text-[.7rem] sm:text-[1rem] sm:mt-5' style={{ lineHeight: "1.2" }}>
                        Mit dem Absenden meiner Anfrage habe ich die <a href='/datenschutz' className='text-primary' role={"button"}>Datenschutzerklärung</a> akzeptiert und zur Kenntnis genommen.
                    </div>

                    {/*Submit button*/}
                    <div className='flex justify-center sm:mt-10'>
                        <button type="submit" className="inline-block w-36 md:w-44 rounded bg-primary py-2 sm:px-4 sm:py-3 text-xs font-medium uppercase leading-normal text-white hover:bg-green-950" disabled={isLoading}>
                            {isLoading ? <div className="flex gap-2 justify-center">
                                <div className="w-3 h-3 rounded-full animate-pulse bg-white" />
                                <div className="w-3 h-3 rounded-full animate-pulse bg-white" />
                                <div className="w-3 h-3 rounded-full animate-pulse bg-white" />
                            </div>
                                : <span className='sm:text-[1rem]'>Senden</span>}
                        </button>
                    </div>
                </form>
            </div >
        </>
    )
})

export default Kontaktformular;