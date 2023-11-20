"use client"

import { useEffect, useState } from 'react'

export default function Impressum() {

    return (
        <>
            <main className='flex flex-col bg-ourWhite'>
                <div className="mx-auto bg-white max-w-7xl shadow-xl w-full">

                    <div>
                        <div className="container p-7" data-aos="fade-up" style={{ color: 'black' }}>
                            <h2 className="text-3xl border-l-2 border-neutral-800 text-neutral-800 px-3 my-8 font-bold">Impressum</h2>
                            <div className="mb-5">
                                <h4 className="mb-2 text-xl font-semibold">
                                    Anschrift
                                </h4>
                                <p className="">
                                    <b>Deutsche Sanierungswerke Nord</b> <br />
                                    Berliner Straße 11<br />
                                    21509 Glinde <br />
                                </p>
                            </div>
                            <div className="mb-5">
                                <h4 className="mb-2 text-xl font-semibold">
                                    Geschäftsführer
                                </h4>
                                <p className="">
                                    M. Hissa Nawabi
                                </p>
                            </div>
                            <div className="mb-5">
                                <h4 className="mb-2 text-xl font-semibold">
                                    Kontakt
                                </h4>
                                <p className="">
                                    Telefon: <a className="text-decoration-none text-black" href="tel:+49 160 59 11 365">+49 160 59 11 365</a><br />
                                    E-Mail: <a className="text-decoration-none text-black" href="mailto:kontak@dsw-energie.de">kontakt@dsw-energie.de</a>
                                </p>
                            </div>
                            <div className="mb-5">
                                <h4 className="mb-2 text-xl font-semibold">
                                    Umsatzsteuer-ID
                                </h4>
                                <p className="">
                                    DE336321512
                                </p>
                            </div>
                            <div className="mb-5">
                                <h4 className="mb-2 text-xl font-semibold">
                                    Steuernummer
                                </h4>
                                <p className="">
                                    30/158/06455
                                </p>
                            </div>
                            <div className="mb-5">
                                <h4 className="mb-2 text-xl font-semibold">
                                    Haftungshinweis
                                </h4>
                                <p style={{ maxWidth: '55rem' }}>
                                    Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer
                                    Links.
                                    Für
                                    den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                                </p>
                            </div>
                            <div className="mb-0">
                                <h4 className="mb-2 text-xl font-semibold">
                                    Hinweis
                                </h4>
                                <p style={{ maxWidth: '55rem' }}>
                                    Alle Inhalte und Bilder dieser Website sind urheberrechtlich geschützt. Eine Verwendung durch
                                    Dritte
                                    bedarf
                                    der ausdrücklichen Genehmigung des Urhebers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
