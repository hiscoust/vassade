"use client"

import QuestionsSlider from "@/components/Carousel/QuestionsSlider"
import StatusModal from "@/components/Kontaktformular/StatusModal"

function Home() {
  return (
    <div className="">
      {/* start block */}
      <div className="h-[70vh] min-h-[40rem] hidden lg:block bg-primary" >
        {/* desktop */}
        <div className="h-full hidden lg:block">
          <div className="hidden lg:flex flex-row-reverse h-full">
            <div className="w-[50%]">
              <div className="flex flex-col justify-center h-full px-8 gap-y-8">
                <h1 className="text-4xl font-bold text-white">
                  Fassadendämmung - <br />
                  Ihr Generalunternehmer <br /> und Fachbetrieb in Hamburg und Kreis Stormarn
                </h1>
                <h2 className="text-2xl text-white max-w-4xl">
                  Wir steigern Ihren Wohnkomfort, schaffen Behaglichkeit, gestalten eine ästhetische Fassade und senken Ihre Energiekosten.
                </h2>
                <div className="">
                  <a href="#formular" type="submit" className="bg-slate-300 p-2 text-lg font-medium">
                    Beratungsgespräch vereinbaren!
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[50%] bg-[url(/assets/fassadendämmung.webp)] bg-center bg-cover relative">
              <div className="absolute inset-0 flex flex-col" style={{ background: "rgba(0,71,67, .29)" }}>
                <div className="mt-36 ml-auto w-full">
                  <div className="w-[45%] max-w-[45rem] p-3 bg-primary">
                    <img src="/assets/logo_weiss.png" alt="VASSADE" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="h-screen lg:hidden bg-primary" >
        <div className="h-[30%] bg-[url(/assets/fassadendämmung.webp)] bg-center bg-cover border-b-white border-b-2 relative">
          <div className="absolute inset-0 flex flex-col justify-center " style={{ background: "rgba(0,71,67, .29)" }}>
            <div className="bg-primary p-2 w-fit">
              <img src="/assets/logo_weiss.png" width={220} alt="VASSADE" />
            </div>
          </div>
        </div>
        <div className="text-white px-4 h-[60%] flex justify-start items-center">
          <div className="">
            <h1 className="text-[22px] font-bold mb-4">
              Fassadendämmung - <br />
              Ihr Generalunternehmer <br /> und Fachbetrieb in Hamburg und Kreis Stormarn
            </h1>

            <h2 className="text-lg mb-5">
              Wir steigern Ihren Wohnkomfort, schaffen Behaglichkeit, gestalten eine ästhetische Fassade und senken Ihre Energiekosten.
            </h2>

            <div className="">
              <a href="#formular" type="submit" className="inline-block w-max bg-slate-300 p-2 text text-black font-medium leading-normal hover:bg-slate-400">
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
          </div>
        </div>
      </div>
      {/* Block 2 - mobile*/}
      <div className="px-4 py-8 bg-primary text-white w-full lg:hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col">
            <div className="">
              <div className="text-xl mb-2 font-bold">
                Wärmedämmverbundsystem
              </div>
              <div className="flex flex-col space-y-4">
                <div>
                  Entscheidend bei einer Fassadendämmung ist die richtige Auswahl des Dämmmaterials, das den spezifischen Anforderungen des Gebäudes und den örtlichen Bedingungen entspricht.
                </div>
                <div>
                  Ein geeignetes Dämmmaterial mit optimalen Eigenschaften für Wärmedämmung, Brandschutz, Feuchtigkeitsbeständigkeit und ökologische Nachhaltigkeit ist entscheidend, um eine effektive und langfristig zuverlässige Isolierung der Fassade zu gewährleisten.
                </div>
                <div className="">
                  Gemeinsam werden wir die beste Dämmoption für Ihre Immobilie finden und klären, ob ein hochwertiger Putz oder robuste Klinker die ideale Wahl für Ihre Fassade darstellen.
                </div>
              </div>
            </div>

            <div className="mt-4">
              <img src="/assets/wdvs.webp" alt="vassade" className="rounded" />
            </div>
          </div>
        </div>
      </div>
      {/* Block 2 - Desktop */}
      <div className="bg-primary text-white w-full hidden lg:block">
        <div className="flex">

          <div className="w-[50%] p-8 flex flex-col justify-center">
            <div className="text-4xl font-bold mb-8">
              Wärmedämmverbundsystem
            </div>
            <div className="text-lg">
              Entscheidend bei einer Fassadendämmung ist die richtige Auswahl des Dämmmaterials, das den spezifischen Anforderungen des Gebäudes und den örtlichen Bedingungen entspricht.
              <br /><br />
              Ein geeignetes Dämmmaterial mit optimalen Eigenschaften für Wärmedämmung, Brandschutz, Feuchtigkeitsbeständigkeit und ökologische Nachhaltigkeit ist entscheidend, um eine effektive und langfristig zuverlässige Isolierung der Fassade zu gewährleisten.
              <br /><br />
              Gemeinsam werden wir die beste Dämmoption für Ihre Immobilie finden und klären, ob ein hochwertiger Putz oder robuste Klinker die ideale Wahl für Ihre Fassade darstellen.
            </div>
          </div>

          <div className="w-[50%]">
            <img src="/assets/wdvs.webp" alt="vassade" className="rounded" />
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
            Beantworten Sie jetzt die Fragen und füllen Sie anschließend das Kontaktformular aus.
          </div>
          <div className="text-gray-600 lg:text-lg">
            Wir werden uns zeitnah telefonisch bei Ihnen melden.
          </div>
        </div>
      </div>
      {/* Carousel */}
      <div className="w-full bg-slate-50">
        <div className="max-w-7xl mx-auto w-full p-4 lg:p-16 lg:py-8" id="formular">
          <QuestionsSlider questionsID="deammung-der-fassade" />
        </div>
      </div>
      <StatusModal />
    </div>
  )
}

export default Home