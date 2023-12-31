"use client"

import React, { useEffect } from 'react'

const Datenschutz = () => {
    useEffect(() => {
        const init = async () => {
            const { Collapse, initTE } = await import("tw-elements");
            initTE({ Collapse });
        };
        init();
    })

    return (
        <main className="pb-8 px-4">

            <div className="" id="accordionExample">
                <h2 className="text-xl lg:text-3xl border-l-2 border-neutral-800 text-neutral-800 px-3 my-8 font-bold">Datenschutzerklärung</h2>
                <div className="rounded-t-lg border border-neutral-200 bg-white">
                    <h2 className="mb-0" id="headingOne">
                        <button className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]" type="button" data-te-collapse-init data-te-target="#collapseOne" data-te-collapse-collapsed aria-expanded="false" aria-controls="collapseOne">
                            Einleitung
                            <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <div id="collapseOne" className="!visible hidden " data-te-collapse-item aria-labelledby="headingOne" data-te-parent="#accordionExample">
                        <div className="px-5 py-4">
                            Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen und unserer Webseite. Der Schutz
                            Ihrer
                            Privatsphäre und Ihrer Rechte ist uns sehr wichtig. Wir nutzen Ihre Daten nur für die Zwecke,
                            für
                            die
                            sie vorgesehen sind. Um sicherzustellen, dass Sie jederzeit darüber informiert sind, wie wir
                            Ihre
                            Daten
                            erheben, nutzen und gegebenenfalls an Dritte weitergeben, stellen wir Ihnen umfassende
                            Informationen
                            zur
                            Verarbeitung Ihrer personenbezogenen Daten bereit.
                            <br /><br />
                            Unsere Webseite kann grundsätzlich besucht werden, ohne dass personenbezogene Daten angegeben
                            werden
                            müssen. Wir halten uns strikt an die Vorgaben der EU-Datenschutzgrundverordnung
                            (DSGVO) sowie weiterer relevanter Datenschutzbestimmungen.
                        </div>
                    </div>
                </div>
                <div className="border border-t-0 border-neutral-200 bg-white">
                    <h2 className="mb-0" id="headingTwo">
                        <button className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]" type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                            1. Begriffsbestimmungen
                            <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <div id="collapse2" className="!visible hidden" data-te-collapse-item aria-labelledby="headingTwo" data-te-parent="#accordionExample">
                        <div className="px-5 py-4">
                            Die Datenschutzerklärung der VASSADE beruht auf den Begrifflichkeiten, die durch
                            den
                            Europäischen Richtlinien- und Verordnungsgeber beim Erlass der Datenschutz-Grundverordnung
                            (DS-GVO)
                            verwendet wurden. Unsere Datenschutzerklärung soll sowohl für die Öffentlichkeit als auch
                            für
                            unsere
                            Kunden und Geschäftspartner einfach lesbar und verständlich sein. Um dies zu gewährleisten,
                            möchten
                            wir vorab die verwendeten Begrifflichkeiten erläutern.
                            <br />
                            <b> Wir verwenden in dieser Datenschutzerklärung unter anderem die folgenden Begriffe:</b>
                        </div>
                    </div>
                </div>
                <div className="border border-t-0 border-neutral-200 bg-white">
                    <h2 className="mb-0" id="headingTwo">
                        <button className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]" type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                            2. Name und Anschrift des für die Verarbeitung Verantwortlichen
                            <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <div id="collapse3" className="!visible hidden" data-te-collapse-item aria-labelledby="headingTwo" data-te-parent="#accordionExample">
                        <div className="px-5 py-4">
                            <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung, sonstiger in den Mitgliedstaaten
                                der
                                Europäischen Union geltenden Datenschutzgesetze und anderer Bestimmungen mit
                                datenschutzrechtlichem
                                Charakter ist:
                            </p>
                            <br />
                            <p>
                                <b>Vassade</b><br />
                                Berliner Straße 11 <br />
                                21509 Glinde<br />
                                Deutschland<br /><br />
                                Telefon: <a href="tel:+49 176 32 444 232" className="text-decoration-none text-black">+49 176 32 444 232</a><br />
                                E-Mail: <a href="mailto:kontakt@vassade.de" className="text-decoration-none text-black">kontakt@vassade.de</a><br />
                                Website: <a target="_blank" rel="noreferrer" href="https://www.vassade.de" className="text-decoration-none text-black">https://www.vassade.de</a><br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border border-t-0 border-neutral-200 bg-white">
                    <h2 className="mb-0" id="headingTwo">
                        <button className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]" type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                            <span className="text-lime-700">3. Erfassung von allgemeinen Daten und Informationen</span>
                            <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <div id="collapse4" className="!visible hidden" data-te-collapse-item aria-labelledby="headingTwo" data-te-parent="#accordionExample">
                        <div className="px-5 py-4">
                            Die Internetseite der VASSADE erfasst mit jedem Aufruf der Internetseite durch
                            eine
                            betroffene Person oder ein automatisiertes System eine Reihe von allgemeinen Daten und
                            Informationen. Diese allgemeinen Daten und Informationen werden in den Logfiles des Servers
                            gespeichert. Erfasst werden können die (1) verwendeten Browsertypen und Versionen, (2) das
                            vom
                            zugreifenden System verwendete Betriebssystem, (3) die Internetseite, von welcher ein
                            zugreifendes
                            System auf unsere Internetseite gelangt (sogenannte Referrer), (4) die Unterwebseiten,
                            welche
                            über
                            ein zugreifendes System auf unserer Internetseite angesteuert werden, (5) das Datum und die
                            Uhrzeit
                            eines Zugriffs auf die Internetseite, (6) eine Internet-Protokoll-Adresse (IP-Adresse), (7)
                            der
                            Internet-Service-Provider des zugreifenden Systems und (8) sonstige ähnliche Daten und
                            Informationen, die der Gefahrenabwehr im Falle von Angriffen auf unsere
                            informationstechnologischen
                            Systeme dienen.
                            <br /><br />
                            Bei der Nutzung dieser allgemeinen Daten und Informationen zieht die VASSADE
                            keine
                            Rückschlüsse auf die betroffene Person. Diese Informationen werden vielmehr benötigt, um (1)
                            die
                            Inhalte unserer Internetseite korrekt auszuliefern, (2) die Inhalte unserer Internetseite
                            sowie
                            die
                            Werbung für diese zu optimieren, (3) die dauerhafte Funktionsfähigkeit unserer
                            informationstechnologischen Systeme und der Technik unserer Internetseite zu gewährleisten
                            sowie
                            (4)
                            um Strafverfolgungsbehörden im Falle eines Cyberangriffes die zur Strafverfolgung
                            notwendigen
                            Informationen bereitzustellen. Diese anonym erhobenen Daten und Informationen werden durch
                            die
                            VASSADE daher einerseits statistisch und ferner mit dem Ziel ausgewertet, den
                            Datenschutz
                            und die Datensicherheit in unserem Unternehmen zu erhöhen, um letztlich ein optimales
                            Schutzniveau
                            für die von uns verarbeiteten personenbezogenen Daten sicherzustellen. Die anonymen Daten
                            der
                            Server-Logfiles werden getrennt von allen durch eine betroffene Person angegebenen
                            personenbezogenen
                            Daten gespeichert.
                        </div>
                    </div>
                </div>
                <div className="border border-t-0 border-neutral-200 bg-white">
                    <h2 className="mb-0" id="headingTwo">
                        <button className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]" type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                            4. Kontaktmöglichkeit über die Internetseite
                            <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <div id="collapse5" className="!visible hidden" data-te-collapse-item aria-labelledby="headingTwo" data-te-parent="#accordionExample">
                        <div className="px-5 py-4">
                            Die Internetseite der VASSADE enthält aufgrund von gesetzlichen Vorschriften
                            Angaben,
                            die
                            eine schnelle elektronische Kontaktaufnahme zu unserem Unternehmen sowie eine unmittelbare
                            Kommunikation mit uns ermöglichen, was ebenfalls eine allgemeine Adresse der sogenannten
                            elektronischen Post (E-Mail-Adresse) umfasst. Sofern eine betroffene Person per E-Mail oder
                            über
                            ein
                            Kontaktformular den Kontakt mit dem für die Verarbeitung Verantwortlichen aufnimmt, werden
                            die
                            von
                            der betroffenen Person übermittelten personenbezogenen Daten automatisch gespeichert. Solche
                            auf
                            freiwilliger Basis von einer betroffenen Person an den für die Verarbeitung Verantwortlichen
                            übermittelten personenbezogenen Daten werden für Zwecke der Bearbeitung oder der
                            Kontaktaufnahme
                            zur
                            betroffenen Person gespeichert. Es erfolgt keine Weitergabe dieser personenbezogenen Daten
                            an
                            Dritte.
                        </div>
                    </div>
                </div>
                <div className="border border-t-0 border-neutral-200 bg-white">
                    <h2 className="mb-0" id="headingTwo">
                        <button className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]" type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                            5. Routinemäßige Löschung und Sperrung von personenbezogenen Daten
                            <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <div id="collapse6" className="!visible hidden" data-te-collapse-item aria-labelledby="headingTwo" data-te-parent="#accordionExample">
                        <div className="px-5 py-4">
                            Der für die Verarbeitung Verantwortliche verarbeitet und speichert personenbezogene Daten
                            der
                            betroffenen Person nur für den Zeitraum, der zur Erreichung des Speicherungszwecks
                            erforderlich
                            ist
                            oder sofern dies durch den Europäischen Richtlinien- und Verordnungsgeber oder einen anderen
                            Gesetzgeber in Gesetzen oder Vorschriften, welchen der für die Verarbeitung Verantwortliche
                            unterliegt, vorgesehen wurde.
                            Entfällt der Speicherungszweck oder läuft eine vom Europäischen Richtlinien- und
                            Verordnungsgeber
                            oder einem anderen zuständigen Gesetzgeber vorgeschriebene Speicherfrist ab, werden die
                            personenbezogenen Daten routinemäßig und entsprechend den gesetzlichen Vorschriften gesperrt
                            oder
                            gelöscht.
                        </div>
                    </div>
                </div>
                <div className="border border-t-0 border-neutral-200 bg-white">
                    <h2 className="mb-0" id="headingTwo">
                        <button className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]" type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                            6. Rechte der betroffenen Person
                            <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <div id="collapse7" className="!visible hidden" data-te-collapse-item aria-labelledby="headingTwo" data-te-parent="#accordionExample">
                        <div className="px-5 py-4">
                            <p className="ms-5">
                                <b>a) Recht auf Bestätigung</b><br />
                                Jede betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber
                                eingeräumte
                                Recht,
                                von dem für die Verarbeitung Verantwortlichen eine Bestätigung darüber zu verlangen, ob sie
                                betreffende personenbezogene Daten verarbeitet werden. Möchte eine betroffene Person dieses
                                Bestätigungsrecht in Anspruch nehmen, kann sie sich hierzu jederzeit an einen Mitarbeiter
                                des
                                für
                                die Verarbeitung Verantwortlichen wenden.
                                <br /><br />
                                <b>b) Recht auf Auskunft</b><br />
                                Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen
                                Richtlinien- und Verordnungsgeber gewährte Recht, jederzeit von dem für die Verarbeitung
                                Verantwortlichen unentgeltliche Auskunft über die zu seiner Person gespeicherten
                                personenbezogenen
                                Daten und eine Kopie dieser Auskunft zu erhalten. Ferner hat der Europäische Richtlinien-
                                und
                                Verordnungsgeber der betroffenen Person Auskunft über folgende Informationen zugestanden:
                            </p><ul className="ms-5">
                                <li>die Verarbeitungszwecke</li>
                                <li>die Kategorien personenbezogener Daten, die verarbeitet werden</li>
                                <li>die Empfänger oder Kategorien von Empfängern, gegenüber denen die personenbezogenen
                                    Daten
                                    offengelegt worden sind oder noch offengelegt werden, insbesondere bei Empfängern in
                                    Drittländern oder bei internationalen Organisationen</li>
                                <li>falls möglich die geplante Dauer, für die die personenbezogenen Daten gespeichert
                                    werden,
                                    oder,
                                    falls dies nicht möglich ist, die Kriterien für die Festlegung dieser Dauer</li>
                                <li>das Bestehen eines Rechts auf Berichtigung oder Löschung der sie betreffenden
                                    personenbezogenen
                                    Daten oder auf Einschränkung der Verarbeitung durch den Verantwortlichen oder eines
                                    Widerspruchsrechts gegen diese Verarbeitung</li>
                                <li>das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde</li>
                                <li>wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden: Alle
                                    verfügbaren Informationen über die Herkunft der Daten</li>
                                <li>das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß
                                    Artikel
                                    22 Abs.1 und 4 DS-GVO und — zumindest in diesen Fällen — aussagekräftige Informationen
                                    über
                                    die
                                    involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen
                                    Verarbeitung für die betroffene Person
                                </li>
                            </ul>
                            Ferner steht der betroffenen Person ein Auskunftsrecht darüber zu, ob personenbezogene Daten an
                            ein
                            Drittland oder an eine internationale Organisation übermittelt wurden. Sofern dies der Fall ist,
                            so
                            steht der betroffenen Person im Übrigen das Recht zu, Auskunft über die geeigneten Garantien im
                            Zusammenhang mit der Übermittlung zu erhalten.
                            <br /><br />
                            Möchte eine betroffene Person dieses Auskunftsrecht in Anspruch nehmen, kann sie sich hierzu
                            jederzeit
                            an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.
                            <br /><br />
                            <b>c) Recht auf Berichtigung</b><br />
                            Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen
                            Richtlinien- und Verordnungsgeber gewährte Recht, die unverzügliche Berichtigung sie
                            betreffender
                            unrichtiger personenbezogener Daten zu verlangen. Ferner steht der betroffenen Person das Recht
                            zu,
                            unter Berücksichtigung der Zwecke der Verarbeitung, die Vervollständigung unvollständiger
                            personenbezogener Daten — auch mittels einer ergänzenden Erklärung — zu verlangen.
                            <br /><br />
                            Möchte eine betroffene Person dieses Berichtigungsrecht in Anspruch nehmen, kann sie sich hierzu
                            jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.
                            <br /><br />
                            <b>d) Recht auf Löschung (Recht auf Vergessen werden)</b><br />
                            Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen
                            Richtlinien- und Verordnungsgeber gewährte Recht, von dem Verantwortlichen zu verlangen, dass
                            die
                            sie
                            betreffenden personenbezogenen Daten unverzüglich gelöscht werden, sofern einer der folgenden
                            Gründe
                            zutrifft und soweit die Verarbeitung nicht erforderlich ist:
                            <ul className="ms-5">
                                <li>Die personenbezogenen Daten wurden für solche Zwecke erhoben oder auf sonstige Weise
                                    verarbeitet, für welche sie nicht mehr notwendig sind.</li>
                                <li>Die betroffene Person widerruft ihre Einwilligung, auf die sich die Verarbeitung gemäß
                                    Art.
                                    6
                                    Abs. 1 Buchstabe a DS-GVO oder Art. 9 Abs. 2 Buchstabe a DS-GVO stützte, und es fehlt an
                                    einer
                                    anderweitigen Rechtsgrundlage für die Verarbeitung.</li>
                                <li>Die betroffene Person legt gemäß Art. 21 Abs. 1 DS-GVO Widerspruch gegen die
                                    Verarbeitung
                                    ein,
                                    und es liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor, oder die
                                    betroffene Person legt gemäß Art. 21 Abs. 2 DS-GVO Widerspruch gegen die Verarbeitung
                                    ein.
                                </li>
                                <li>Die personenbezogenen Daten wurden unrechtmäßig verarbeitet.</li>
                                <li>Die Löschung der personenbezogenen Daten ist zur Erfüllung einer rechtlichen
                                    Verpflichtung
                                    nach
                                    dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der Verantwortliche
                                    unterliegt.</li>
                                <li>Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste der
                                    Informationsgesellschaft
                                    gemäß Art. 8 Abs. 1 DS-GVO erhoben</li>
                            </ul>
                            Sofern einer der oben genannten Gründe zutrifft und eine betroffene Person die Löschung von
                            personenbezogenen Daten, die bei der VASSADE gespeichert sind, veranlassen möchte,
                            kann
                            sie
                            sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden. Der
                            Mitarbeiter der VASSADE wird veranlassen, dass dem Löschverlangen unverzüglich
                            nachgekommen
                            wird.
                            <br /><br />
                            Wurden die personenbezogenen Daten von der VASSADE öffentlich gemacht und ist unser
                            Unternehmen als Verantwortlicher gemäß Art. 17 Abs. 1 DS-GVO zur Löschung der personenbezogenen
                            Daten
                            verpflichtet, so trifft die VASSADE unter Berücksichtigung der verfügbaren
                            Technologie
                            und
                            der Implementierungskosten angemessene Maßnahmen, auch technischer Art, um andere für die
                            Datenverarbeitung Verantwortliche, welche die veröffentlichten personenbezogenen Daten
                            verarbeiten,
                            darüber in Kenntnis zu setzen, dass die betroffene Person von diesen anderen für die
                            Datenverarbeitung
                            Verantwortlichen die Löschung sämtlicher Links zu diesen personenbezogenen Daten oder von Kopien
                            oder
                            Replikationen dieser personenbezogenen Daten verlangt hat, soweit die Verarbeitung nicht
                            erforderlich
                            ist. Der Mitarbeiter der VASSADE wird im Einzelfall das Notwendige veranlassen.
                            <br /><br />
                            <b>e) Recht auf Einschränkung der Verarbeitung</b><br />
                            Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen
                            Richtlinien- und Verordnungsgeber gewährte Recht, von dem Verantwortlichen die Einschränkung der
                            Verarbeitung zu verlangen, wenn eine der folgenden Voraussetzungen gegeben ist:
                            <ul className="ms-5">
                                <li>Die Richtigkeit der personenbezogenen Daten wird von der betroffenen Person bestritten,
                                    und
                                    zwar
                                    für eine Dauer, die es dem Verantwortlichen ermöglicht, die Richtigkeit der
                                    personenbezogenen
                                    Daten zu überprüfen.
                                </li>
                                <li>Die Verarbeitung ist unrechtmäßig, die betroffene Person lehnt die Löschung der
                                    personenbezogenen
                                    Daten ab und verlangt stattdessen die Einschränkung der Nutzung der personenbezogenen
                                    Daten.
                                </li>
                                <li>
                                    Der Verantwortliche benötigt die personenbezogenen Daten für die Zwecke der Verarbeitung
                                    nicht
                                    länger, die betroffene Person benötigt sie jedoch zur Geltendmachung, Ausübung oder
                                    Verteidigung
                                    von
                                    Rechtsansprüchen.
                                </li>
                                <li>
                                    Die betroffene Person hat Widerspruch gegen die Verarbeitung gem. Art. 21 Abs. 1 DS-GVO
                                    eingelegt
                                    und es steht noch nicht fest, ob die berechtigten Gründe des Verantwortlichen gegenüber
                                    denen
                                    der
                                    betroffenen Person überwiegen.</li>
                            </ul>
                            Sofern eine der oben genannten Voraussetzungen gegeben ist und eine betroffene Person die
                            Einschränkung
                            von personenbezogenen Daten, die bei der VASSADE gespeichert sind, verlangen möchte,
                            kann
                            sie
                            sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden. Der
                            Mitarbeiter der VASSADE wird die Einschränkung der Verarbeitung veranlassen.
                            <br /><br />
                            <b>f) Recht auf Datenübertragbarkeit</b><br />
                            Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen
                            Richtlinien- und Verordnungsgeber gewährte Recht, die sie betreffenden personenbezogenen Daten,
                            welche
                            durch die betroffene Person einem Verantwortlichen bereitgestellt wurden, in einem
                            strukturierten,
                            gängigen und maschinenlesbaren Format zu erhalten. Sie hat außerdem das Recht, diese Daten einem
                            anderen
                            Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem die personenbezogenen Daten
                            bereitgestellt wurden, zu übermitteln, sofern die Verarbeitung auf der Einwilligung gemäß Art. 6
                            Abs. 1
                            Buchstabe a DS-GVO oder Art. 9 Abs. 2 Buchstabe a DS-GVO oder auf einem Vertrag gemäß Art. 6
                            Abs. 1
                            Buchstabe b DS-GVO beruht und die Verarbeitung mithilfe automatisierter Verfahren erfolgt,
                            sofern
                            die
                            Verarbeitung nicht für die Wahrnehmung einer Aufgabe erforderlich ist, die im öffentlichen
                            Interesse
                            liegt oder in Ausübung öffentlicher Gewalt erfolgt, welche dem Verantwortlichen übertragen
                            wurde.
                            <br /><br />
                            Ferner hat die betroffene Person bei der Ausübung ihres Rechts auf Datenübertragbarkeit gemäß
                            Art.
                            20
                            Abs. 1 DS-GVO das Recht, zu erwirken, dass die personenbezogenen Daten direkt von einem
                            Verantwortlichen
                            an einen anderen Verantwortlichen übermittelt werden, soweit dies technisch machbar ist und
                            sofern
                            hiervon nicht die Rechte und Freiheiten anderer Personen beeinträchtigt werden.
                            <br /><br />
                            Zur Geltendmachung des Rechts auf Datenübertragbarkeit kann sich die betroffene Person jederzeit
                            an
                            einen Mitarbeiter der VASSADE wenden.
                            <br /><br />
                            <b>g) Recht auf Widerspruch</b><br />
                            Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen
                            Richtlinien- und Verordnungsgeber gewährte Recht, aus Gründen, die sich aus ihrer besonderen
                            Situation
                            ergeben, jederzeit gegen die Verarbeitung sie betreffender personenbezogener Daten, die aufgrund
                            von
                            Art. 6 Abs. 1 Buchstaben e oder f DS-GVO erfolgt, Widerspruch einzulegen. Dies gilt auch für ein
                            auf
                            diese Bestimmungen gestütztes Profiling.
                            <br /><br />
                            Die VASSADE verarbeitet die personenbezogenen Daten im Falle des Widerspruchs nicht
                            mehr,
                            es
                            sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die den
                            Interessen,
                            Rechten und Freiheiten der betroffenen Person überwiegen, oder die Verarbeitung dient der
                            Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
                            <br /><br />
                            Verarbeitet die VASSADE personenbezogene Daten, um Direktwerbung zu betreiben, so hat
                            die
                            betroffene Person das Recht, jederzeit Widerspruch gegen die Verarbeitung der personenbezogenen
                            Daten
                            zum Zwecke derartiger Werbung einzulegen. Dies gilt auch für das Profiling, soweit es mit
                            solcher
                            Direktwerbung in Verbindung steht. Widerspricht die betroffene Person gegenüber der VASSADE
                            der Verarbeitung für Zwecke der Direktwerbung, so wird die VASSADE die
                            personenbezogenen
                            Daten nicht mehr für diese Zwecke verarbeiten.
                            <br /><br />
                            Zudem hat die betroffene Person das Recht, aus Gründen, die sich aus ihrer besonderen Situation
                            ergeben,
                            gegen die sie betreffende Verarbeitung personenbezogener Daten, die bei der VASSADE
                            zu
                            wissenschaftlichen oder historischen Forschungszwecken oder zu statistischen Zwecken gemäß Art.
                            89
                            Abs.
                            1 DS-GVO erfolgen, Widerspruch einzulegen, es sei denn, eine solche Verarbeitung ist zur
                            Erfüllung
                            einer
                            im öffentlichen Interesse liegenden Aufgabe erforderlich.
                            <br /><br />
                            Zur Ausübung des Rechts auf Widerspruch kann sich die betroffene Person direkt jeden Mitarbeiter
                            der
                            VASSADE oder einen anderen Mitarbeiter wenden. Der betroffenen Person steht es ferner
                            frei,
                            im Zusammenhang mit der Nutzung von Diensten der Informationsgesellschaft, ungeachtet der
                            Richtlinie
                            2002/58/EG, ihr Widerspruchsrecht mittels automatisierter Verfahren auszuüben, bei denen
                            technische
                            Spezifikationen verwendet werden.
                            <br /><br />
                            <b> h) Automatisierte Entscheidungen im Einzelfall einschließlich Profiling</b><br />
                            Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen
                            Richtlinien- und Verordnungsgeber gewährte Recht, nicht einer ausschließlich auf einer
                            automatisierten
                            Verarbeitung — einschließlich Profiling — beruhenden Entscheidung unterworfen zu werden, die ihr
                            gegenüber rechtliche Wirkung entfaltet oder sie in ähnlicher Weise erheblich beeinträchtigt,
                            sofern
                            die
                            Entscheidung (1) nicht für den Abschluss oder die Erfüllung eines Vertrags zwischen der
                            betroffenen
                            Person und dem Verantwortlichen erforderlich ist, oder (2) aufgrund von Rechtsvorschriften der
                            Union
                            oder der Mitgliedstaaten, denen der Verantwortliche unterliegt, zulässig ist und diese
                            Rechtsvorschriften angemessene Maßnahmen zur Wahrung der Rechte und Freiheiten sowie der
                            berechtigten
                            Interessen der betroffenen Person enthalten oder (3) mit ausdrücklicher Einwilligung der
                            betroffenen
                            Person erfolgt.
                            <br /><br />
                            Ist die Entscheidung (1) ür den Abschluss oder die Erfüllung eines Vertrags zwischen der
                            betroffenen
                            Person und dem Verantwortlichen erforderlich oder (2) erfolgt sie mit ausdrücklicher
                            Einwilligung
                            der
                            betroffenen Person, trifft die VASSADE angemessene Maßnahmen, um die Rechte und
                            Freiheiten
                            sowie die berechtigten Interessen der betroffenen Person zu wahren, wozu mindestens das Recht
                            auf
                            Erwirkung des Eingreifens einer Person seitens des Verantwortlichen, auf Darlegung des eigenen
                            Standpunkts und auf Anfechtung der Entscheidung gehört.
                            <br /><br />
                            Möchte die betroffene Person Rechte mit Bezug auf automatisierte Entscheidungen geltend machen,
                            kann
                            sie
                            sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.
                            <br /><br />
                            <b>i) Recht auf Widerruf einer datenschutzrechtlichen Einwilligung</b><br />
                            Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen
                            Richtlinien- und Verordnungsgeber gewährte Recht, eine Einwilligung zur Verarbeitung
                            personenbezogener
                            Daten jederzeit zu widerrufen.
                            <br /><br />
                            Möchte die betroffene Person ihr Recht auf Widerruf einer Einwilligung geltend machen, kann sie
                            sich
                            hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.
                        </div>
                    </div>
                </div>
                <div className="border border-t-0 border-neutral-200 bg-white">
                    <h2 className="mb-0" id="headingTwo">
                        <button className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]" type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                            7. Rechtsgrundlage der Verarbeitung
                            <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <div id="collapse8" className="!visible hidden" data-te-collapse-item aria-labelledby="headingTwo" data-te-parent="#accordionExample">
                        <div className="px-5 py-4">
                            <p>
                                Art. 6 I lit. a DS-GVO dient unserem Unternehmen als Rechtsgrundlage für
                                Verarbeitungsvorgänge,
                                bei
                                denen wir eine Einwilligung für einen bestimmten Verarbeitungszweck einholen. Ist die
                                Verarbeitung
                                personenbezogener Daten zur Erfüllung eines Vertrags, dessen Vertragspartei die betroffene
                                Person
                                ist, erforderlich, wie dies beispielsweise bei Verarbeitungsvorgängen der Fall ist, die für
                                eine
                                Lieferung von Waren oder die Erbringung einer sonstigen Leistung oder Gegenleistung
                                notwendig
                                sind,
                                so beruht die Verarbeitung auf Art. 6 I lit. b DS-GVO. Gleiches gilt für solche
                                Verarbeitungsvorgänge die zur Durchführung vorvertraglicher Maßnahmen erforderlich sind,
                                etwa in
                                Fällen von Anfragen zur unseren Produkten oder Leistungen. Unterliegt unser Unternehmen
                                einer
                                rechtlichen Verpflichtung durch welche eine Verarbeitung von personenbezogenen Daten
                                erforderlich
                                wird, wie beispielsweise zur Erfüllung steuerlicher Pflichten, so basiert die Verarbeitung
                                auf
                                Art.
                                6 I lit. c DS-GVO. In seltenen Fällen könnte die Verarbeitung von personenbezogenen Daten
                                erforderlich werden, um lebenswichtige Interessen der betroffenen Person oder einer anderen
                                natürlichen Person zu schützen. Dies wäre beispielsweise der Fall, wenn ein Besucher in
                                unserem
                                Betrieb verletzt werden würde und daraufhin sein Name, sein Alter, seine Krankenkassendaten
                                oder
                                sonstige lebenswichtige Informationen an einen Arzt, ein Krankenhaus oder sonstige Dritte
                                weitergegeben werden müssten. Dann würde die Verarbeitung auf Art. 6 I lit. d DS-GVO
                                beruhen.
                                Letztlich könnten Verarbeitungsvorgänge auf Art. 6 I lit. f DS-GVO beruhen. Auf dieser
                                Rechtsgrundlage basieren Verarbeitungsvorgänge, die von keiner der vorgenannten
                                Rechtsgrundlagen
                                erfasst werden, wenn die Verarbeitung zur Wahrung eines berechtigten Interesses unseres
                                Unternehmens
                                oder eines Dritten erforderlich ist, sofern die Interessen, Grundrechte und Grundfreiheiten
                                des
                                Betroffenen nicht überwiegen. Solche Verarbeitungsvorgänge sind uns insbesondere deshalb
                                gestattet,
                                weil sie durch den Europäischen Gesetzgeber besonders erwähnt wurden. Er vertrat insoweit
                                die
                                Auffassung, dass ein berechtigtes Interesse anzunehmen sein könnte, wenn die betroffene
                                Person
                                ein
                                Kunde des Verantwortlichen ist (Erwägungsgrund 47 Satz 2 DS-GVO).
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border border-t-0 border-neutral-200 bg-white">
                    <h2 className="mb-0" id="headingTwo">
                        <button className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]" type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                            8. Berechtigte Interessen an der Verarbeitung, die von dem Verantwortlichen oder einem
                            Dritten
                            verfolgt werden
                            <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <div id="collapse9" className="!visible hidden" data-te-collapse-item aria-labelledby="headingTwo" data-te-parent="#accordionExample">
                        <div className="px-5 py-4">
                            Basiert die Verarbeitung personenbezogener Daten auf Artikel 6 I lit. f DS-GVO ist unser
                            berechtigtes Interesse die Durchführung unserer Geschäftstätigkeit zugunsten des
                            Wohlergehens
                            all
                            unserer Mitarbeiter und unserer Anteilseigner.
                        </div>
                    </div>
                </div>
                <div className="border border-t-0 border-neutral-200 bg-white">
                    <h2 className="mb-0" id="headingTwo">
                        <button className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]" type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                            9. Dauer, für die die personenbezogenen Daten gespeichert werden
                            <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <div id="collapse10" className="!visible hidden" data-te-collapse-item aria-labelledby="headingTwo" data-te-parent="#accordionExample">
                        <div className="px-5 py-4">
                            Das Kriterium für die Dauer der Speicherung von personenbezogenen Daten ist die jeweilige
                            gesetzliche Aufbewahrungsfrist. Nach Ablauf der Frist werden die entsprechenden Daten
                            routinemäßig
                            gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich
                            sind.
                        </div>
                    </div>
                </div>
                <div className="border border-t-0 border-neutral-200 bg-white">
                    <h2 className="mb-0" id="headingTwo">
                        <button className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]" type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
                            10. Gesetzliche oder vertragliche Vorschriften zur Bereitstellung der personenbezogenen
                            Daten;
                            Erforderlichkeit für den Vertragsabschluss; Verpflichtung der betroffenen Person, die
                            personenbezogenen Daten bereitzustellen; mögliche Folgen der Nichtbereitstellung
                            <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <div id="collapse11" className="!visible hidden" data-te-collapse-item aria-labelledby="headingTwo" data-te-parent="#accordionExample">
                        <div className="px-5 py-4">
                            Wir klären Sie darüber auf, dass die Bereitstellung personenbezogener Daten zum Teil
                            gesetzlich
                            vorgeschrieben ist (z.B. Steuervorschriften) oder sich auch aus vertraglichen Regelungen
                            (z.B.
                            Angaben zum Vertragspartner) ergeben kann. Mitunter kann es zu einem Vertragsschluss
                            erforderlich
                            sein, dass eine betroffene Person uns personenbezogene Daten zur Verfügung stellt, die in
                            der
                            Folge
                            durch uns verarbeitet werden müssen. Die betroffene Person ist beispielsweise verpflichtet
                            uns
                            personenbezogene Daten bereitzustellen, wenn unser Unternehmen mit ihr einen Vertrag
                            abschließt.
                            Eine Nichtbereitstellung der personenbezogenen Daten hätte zur Folge, dass der Vertrag mit
                            dem
                            Betroffenen nicht geschlossen werden könnte. Vor einer Bereitstellung personenbezogener
                            Daten
                            durch
                            den Betroffenen muss sich der Betroffene an einen unserer Mitarbeiter wenden. Unser
                            Mitarbeiter
                            klärt den Betroffenen einzelfallbezogen darüber auf, ob die Bereitstellung der
                            personenbezogenen
                            Daten gesetzlich oder vertraglich vorgeschrieben oder für den Vertragsabschluss erforderlich
                            ist, ob
                            eine Verpflichtung besteht, die personenbezogenen Daten bereitzustellen, und welche Folgen
                            die
                            Nichtbereitstellung der personenbezogenen Daten hätte.
                        </div>
                    </div>
                </div>
                <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white">
                    <h2 className="accordion-header mb-0" id="headingThree">
                        <button className="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] [&[data-te-collapse-collapsed]]:rounded-b-[15px] [&[data-te-collapse-collapsed]]:transition-none" type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#collapseLast" aria-expanded="false" aria-controls="collapseLast">
                            11. SSL- bzw. TLS-Verschlüsselung
                            <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <div id="collapseLast" className="!visible hidden" data-te-collapse-item aria-labelledby="headingThree" data-te-parent="#accordionExample">
                        <div className="px-5 py-4">
                            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
                            Inhalte,
                            wie
                            zum Beispiel Kontaktanfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw.
                            TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile
                            des
                            Browsers von “http://” auf “https://” wechselt und an dem Schloss-Symbol in Ihrer
                            Browserzeile.
                            Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns
                            übermitteln,
                            nicht von Dritten mitgelesen werden.
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Datenschutz