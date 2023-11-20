"use client"

import QuestionsCarousel from "@/components/Carousel/QuestionsCarousel"
import Kontaktformular from "@/components/Kontaktformular/Kontaktformular"
import Navbar from "@/components/Navbar"

function Home() {
  return (
    <div className="">

      {/* start block */}
      <div className="h-screen lg:h-[70vh] lg:min-h-[40rem] bg-primary" >
        <div className="h-[30%] lg:h-full bg-[url(/assets/fassadendämmung.webp)] bg-center bg-cover border-b-white lg:border-b-primary border-b-2 lg:border-b-4 relative">
          <div className="absolute inset-0 flex flex-col justify-center" style={{ background: "rgba(0,71,67, .29)" }}>

            {/* desktop */}
            <div className="hidden lg:flex w-full px-16">
              <div className="max-w-7xl mx-auto w-full">
                <div className="text-4xl font-bold text-white">
                  Ihr Generalunternehmer <br /> und Fachbetrieb für <br /> energieeffiziente Fassadendämmung <br />
                  in Hamburg und Kreis Stormarn
                </div>
                <br />
                <h2 className="text-2xl text-white max-w-4xl">
                  Wir steigern Ihren Wohnkomfort, schaffen Behaglichkeit, gestalten eine ästhetische Fassade und senken Ihre Energiekosten.
                </h2>
                <br />
                <div className="">
                  <a href="#kontaktformular" type="submit" className="bg-primary p-2 text-lg font-medium text-white">
                    Beratungsgespräch vereinbaren!
                  </a>
                </div>
              </div>
            </div>


            {/* mobile */}
            <div className="bg-primary p-2 w-fit lg:hidden">
              <img src="/assets/logo_weiss.png" width={220} alt="VASSADE" />
            </div>

          </div>
        </div>
        {/* mobile */}
        <div className="text-white px-4 h-[60%] flex justify-start items-center lg:hidden">
          <div className="">
            <div className="text-[22px] font-bold mb-4">
              Ihr Generalunternehmer <br /> und Fachbetrieb für <br /> energieeffiziente Fassadendämmung <br />
              in Hamburg und Kreis Stormarn
            </div>

            <h2 className="text-lg mb-5">
              Wir steigern Ihren Wohnkomfort, schaffen Behaglichkeit, gestalten eine ästhetische Fassade und senken Ihre Energiekosten.
            </h2>

            <div className="">
              <a href="#kontaktformular" type="submit" className="inline-block w-max bg-slate-300 p-2 text-lg text-black font-medium leading-normal hover:bg-slate-400">
                Beratungsgespräch vereinbaren!
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Block 1 - mobile */}
      <div className="px-4 py-8 lg:hidden" >
        <h2>
          <div className="text-gray-800 text-xl mb-2 font-bold">
            Sie möchten Ihre Fassade aufwerten?
          </div>
          <div className="text-gray-600">
            Lassen Sie uns gemeinsam erkunden, welche Vorteile wir Ihnen durch eine Fassadendämmung bieten können.
          </div>
        </h2>

        <div className="mt-4 mb-2">
          <img src="/assets/fassade_v_n.webp" alt="Fassade vorher-nachher" className="rounded" />
        </div>

        <div className="pt-4 grid gap-y-6">

          <div className="flex space-x-4 items-start">
            <div className="">
              <div className="border-2 border-primary p-2 mt-1 grid place-items-center aspect-square">
                <svg xmlns="http://www.w3.org/2000/svg" width={50} viewBox="0 0 448 512" fill="#004743">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
            </div>
            <div>
              <div className="font-bold font-md mb-1 text-gray-800">Verbesserte Energieeffizienz</div>
              <div className="text-gray-600">
                Ihre Energiebilanz wird optimiert, indem Wärmeverluste minimiert werden.
              </div>
            </div>
          </div>
          <div className="flex space-x-4 items-start">
            <div className="">
              <div className="border-2 border-primary p-2 mt-1 grid place-items-center aspect-square">
                <svg xmlns="http://www.w3.org/2000/svg" width={50} viewBox="0 0 448 512" fill="#004743">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
            </div>
            <div>
              <div className="font-bold font-md mb-1 text-gray-800">Einsparung der Energiekosten</div>
              <div className="text-gray-600">
                Durch die Dämmung sparen Sie langfristig beträchtliche Kosten für Heizung und Kühlung.
              </div>
            </div>
          </div>
          <div className="flex space-x-4 items-start">
            <div className="">
              <div className="border-2 border-primary p-2 mt-1 grid place-items-center aspect-square">
                <svg xmlns="http://www.w3.org/2000/svg" width={50} viewBox="0 0 448 512" fill="#004743">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
            </div>
            <div>
              <div className="font-bold font-md mb-1 text-gray-800">Erhöhter Wohnkomfort</div>
              <div className="text-gray-600">
                Genießen Sie ein behaglicheres Raumklima mit gleichbleibenden Temperaturen und weniger Zugluft.
              </div>
            </div>
          </div>
          <div className="flex space-x-4 items-start">
            <div className="">
              <div className="border-2 border-primary p-2 mt-1 grid place-items-center aspect-square">
                <svg xmlns="http://www.w3.org/2000/svg" width={50} viewBox="0 0 448 512" fill="#004743">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
            </div>
            <div>
              <div className="font-bold font-md mb-1 text-gray-800">Verbesserter Schallschutz</div>
              <div className="text-gray-600">
                Durch die Dämmung sparen Sie langfristig beträchtliche Kosten für Heizung und Kühlung.
              </div>
            </div>
          </div>
          <div className="flex space-x-4 items-start">
            <div className="">
              <div className="border-2 border-primary p-2 mt-1 grid place-items-center aspect-square">
                <svg xmlns="http://www.w3.org/2000/svg" width={50} viewBox="0 0 448 512" fill="#004743">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
            </div>
            <div>
              <div className="font-bold font-md mb-1 text-gray-800">Erhöhter Immobilienwert</div>
              <div className="text-gray-600">
                Eine gut gedämmte Fassade steigert Ihren Komfort und den Wert Ihrer Immobilie.
              </div>
            </div>
          </div>
          <div className="flex space-x-4 items-start">
            <div className="">
              <div className="border-2 border-primary p-2 mt-1 grid place-items-center aspect-square">
                <svg xmlns="http://www.w3.org/2000/svg" width={50} viewBox="0 0 448 512" fill="#004743">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
            </div>
            <div>
              <div className="font-bold font-md mb-1 text-gray-800">Nachhaltigkeit</div>
              <div className="text-gray-600">
                Durch die Reduzierung des Energieverbrauchs leisten Sie einen Beitrag zum Umweltschutz.
              </div>
            </div>
          </div>
          <div className="flex space-x-4 items-start">
            <div className="">
              <div className="border-2 border-primary p-2 mt-1 grid place-items-center aspect-square">
                <svg xmlns="http://www.w3.org/2000/svg" width={50} viewBox="0 0 448 512" fill="#004743">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
            </div>
            <div>
              <div className="font-bold font-md mb-1 text-gray-800">Umweltschutz</div>
              <div className="text-gray-600">
                Sie verringern Ihren ökologischen Fußabdruck und sparen eine Menge CO2-Emissionen
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Block 1 - Desktop */}
      <div className="hidden lg:block w-full p-16">
        <div className="max-w-7xl mx-auto w-full">

          <h2>
            <div className="text-gray-800 text-4xl mb-2 font-bold">
              Sie möchten Ihre Fassade aufwerten?
            </div>
            <div className="text-gray-600 text-lg">
              Lassen Sie uns gemeinsam erkunden, welche Vorteile wir Ihnen durch eine Fassadendämmung bieten können.
            </div>
          </h2>
          <div className="grid grid-cols-2 gap-6 mt-12">

            <div className="flex space-x-4 items-start">
              <div className="">
                <div className="border-2 border-primary p-2 mt-1 grid place-items-center aspect-square">
                  <svg xmlns="http://www.w3.org/2000/svg" width={50} viewBox="0 0 448 512" fill="#004743">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="font-bold font-md mb-1 text-gray-800">Einsparung der Energiekosten</div>
                <div className="text-gray-600">
                  Durch die Dämmung sparen Sie langfristig beträchtliche Kosten für Heizung und Kühlung.
                </div>
              </div>
            </div>
            <div className="flex space-x-4 items-start">
              <div className="">
                <div className="border-2 border-primary p-2 mt-1 grid place-items-center aspect-square">
                  <svg xmlns="http://www.w3.org/2000/svg" width={50} viewBox="0 0 448 512" fill="#004743">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="font-bold font-md mb-1 text-gray-800">Verbesserte Energieeffizienz</div>
                <div className="text-gray-600">
                  Ihre Energiebilanz wird optimiert, indem Wärmeverluste minimiert werden.
                </div>
              </div>
            </div>
            <div className="flex space-x-4 items-start">
              <div className="">
                <div className="border-2 border-primary p-2 mt-1 grid place-items-center aspect-square">
                  <svg xmlns="http://www.w3.org/2000/svg" width={50} viewBox="0 0 448 512" fill="#004743">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="font-bold font-md mb-1 text-gray-800">Erhöhter Wohnkomfort</div>
                <div className="text-gray-600">
                  Genießen Sie ein behaglicheres Raumklima mit gleichbleibenden Temperaturen und weniger Zugluft.
                </div>
              </div>
            </div>
            <div className="flex space-x-4 items-start">
              <div className="">
                <div className="border-2 border-primary p-2 mt-1 grid place-items-center aspect-square">
                  <svg xmlns="http://www.w3.org/2000/svg" width={50} viewBox="0 0 448 512" fill="#004743">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="font-bold font-md mb-1 text-gray-800">Verbesserter Schallschutz</div>
                <div className="text-gray-600">
                  Durch die Dämmung sparen Sie langfristig beträchtliche Kosten für Heizung und Kühlung.
                </div>
              </div>
            </div>
            <div className="flex space-x-4 items-start">
              <div className="">
                <div className="border-2 border-primary p-2 mt-1 grid place-items-center aspect-square">
                  <svg xmlns="http://www.w3.org/2000/svg" width={50} viewBox="0 0 448 512" fill="#004743">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="font-bold font-md mb-1 text-gray-800">Erhöhter Immobilienwert</div>
                <div className="text-gray-600">
                  Eine gut gedämmte Fassade steigert Ihren Komfort und den Wert Ihrer Immobilie.
                </div>
              </div>
            </div>
            <div className="flex space-x-4 items-start">
              <div className="">
                <div className="border-2 border-primary p-2 mt-1 grid place-items-center aspect-square">
                  <svg xmlns="http://www.w3.org/2000/svg" width={50} viewBox="0 0 448 512" fill="#004743">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="font-bold font-md mb-1 text-gray-800">Nachhaltigkeit</div>
                <div className="text-gray-600">
                  Durch die Reduzierung des Energieverbrauchs leisten Sie einen Beitrag zum Umweltschutz.
                </div>
              </div>
            </div>
            <div className="flex space-x-4 items-start">
              <div className="">
                <div className="border-2 border-primary p-2 mt-1 grid place-items-center aspect-square">
                  <svg xmlns="http://www.w3.org/2000/svg" width={50} viewBox="0 0 448 512" fill="#004743">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="font-bold font-md mb-1 text-gray-800">Ästhetik</div>
                <div className="text-gray-600">
                  Fassadendämmung vereint Effizienz und Schutz. Ästhetik, ein Schlüsselfaktor.
                </div>
              </div>
            </div>
            <div className="flex space-x-4 items-start">
              <div className="">
                <div className="border-2 border-primary p-2 mt-1 grid place-items-center aspect-square">
                  <svg xmlns="http://www.w3.org/2000/svg" width={50} viewBox="0 0 448 512" fill="#004743">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="font-bold font-md mb-1 text-gray-800">Umweltschutz</div>
                <div className="text-gray-600">
                  Sie verringern Ihren ökologischen Fußabdruck und sparen eine Menge CO2-Emissionen
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Block 2 */}
      <div className="px-4 py-8 lg:p-16 bg-primary text-white w-full">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row gap-x-16">
            <div className="lg:w-[60%] lg:flex lg:flex-col lg:justify-center lg:space-y-8">
              <div className="text-xl lg:text-4xl mb-2 lg:mb-0 font-bold">
                Sanierungskonzept
              </div>
              <div className="flex flex-col space-y-4 lg:text-lg">
                <div>
                  Gemeinsam finden wir die beste Dämmoption für Ihre Immobilie und klären, ob ein hochwertiger Putz oder robuste Klinker die ideale Wahl für Ihre Fassade sind.
                </div>
                <div className="">
                  Wir analysieren Ihre Bedürfnisse und präsentieren Ihnen die Vorzüge jeder Option, damit Sie eine fundierte Entscheidung treffen können.
                </div>
              </div>
            </div>

            <div className="lg:w-[40%] mt-4 lg:mt-0">
              <div className="text-xl lg:text-4xl mb-3 font-bold lg:hidden">
                Sanierungsprozess
              </div>
              <img src="/assets/wdvs.webp" alt="vassade" className="rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Block 3 */}
      <div className="px-4 py-8 w-full lg:p-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-gray-800 mb-2 text-xl lg:text-4xl font-bold">
            Bereit, Ihre Fassade zu optimieren?
          </div>
          <div className="text-gray-600 lg:text-xl">
            Beantworten Sie jetzt die Fragen und füllen anschließend das Kontaktformular aus.
          </div>
          <div className="text-gray-600 lg:text-lg">
            Wir werden uns zeitnah telefonisch bei Ihnen melden.
          </div>
        </div>
      </div>

      {/* Kontaktformular */}
      <div id="kontaktformular" className="bg-slate-50 p-4 lg:p-16 border-y border-y-primary w-full hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="lg:">
            <div className="px-4 py-8 hidden lg:block" >
              <div className="text-gray-800 mb-2 text-xl font-bold">
                Bereit, Ihre Fassade zu optimieren?
              </div>
              <div className="text-gray-600">
                Stellen Sie jetzt über das Kontaktformular Ihre Anfrage. Unser Team wird sich zeitnah telefonisch bei Ihnen melden.
              </div>
            </div>
            <div>
              <div className="text-primary text-2xl lg:text-4xl mb-4 font-bold">
                Kontaktformular
              </div>
              <div className="border border-primary rounded-lg">
                <Kontaktformular />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-slate-50 ">
        <div className="max-w-7xl mx-auto w-full p-4 lg:p-16">
          <QuestionsCarousel questionsID="deammung-der-fassade" />
        </div>
      </div>

    </div>

  )
}

export default Home