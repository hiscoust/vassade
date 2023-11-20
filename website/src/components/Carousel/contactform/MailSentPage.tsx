const MailSentPage = () => {


    return (
        <div className='sm:flex sm:mx-10 md:mx-20 md:my-10'>
            <div className='sm:bg-white sm:p-6 rounded-lg mx-auto'>
                <div className='grid place-items-center h-[10rem]'>
                    <div className='bg-[url(/assets/images/email.png)] bg-contain w-24 h-24'></div>
                </div>
                <div className='p-4 pb-9'>
                    <div className='mb-8 font-semibold text-primary-100'>Herzlichen Dank für Ihre Anfrage!</div>
                    <div className='font-extralight mb-2'>Wir möchten Ihnen versichern, dass wir Ihre Nachricht sicher empfangen haben. </div>
                    <div className='font-bold'>Innerhalb der nächsten 24 Stunden wird sich unser Außendienst in Ihrer Region bei Ihnen melden</div>
                </div>
                <button onClick={() => {
                    if (typeof window != "undefined")
                        window.location.href = "/";
                }} className="px-4 py-1 text-sm text-primary-100 font-semibold rounded-full border border-orange-400 hover:text-white  hover:bg-primary-100 hover:border-transparent data-[]:">Zurück zu Startseite</button>
            </div>
        </div>
    )
}

export default MailSentPage;