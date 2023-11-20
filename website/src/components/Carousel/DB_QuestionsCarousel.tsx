import { QuestionsIndex } from "./interfaces";

const jaIcon = { name: "ja", categorie: "generalIcons" }
const neinIcon = { name: "nein", categorie: "generalIcons" }
const fragezeichenIcon = { name: "fragezeichen", categorie: "generalIcons" }
const familienhaus = { name: "familienhaus", categorie: "generalIcons" }
const mehrfamilienhaus = { name: "mehrfamilienhaus", categorie: "generalIcons" }
const gewerbe = { name: "gewerbe", categorie: "generalIcons" }
const vor1978 = { name: "vor1978", categorie: "generalIcons" }
const bis2001 = { name: "1978bis2001", categorie: "generalIcons" }
const nach2001 = { name: "nach2001", categorie: "generalIcons" }

const questionsObject: QuestionsIndex = {
    "deammung-der-fassade": [
        {
            questionTitle: "Was soll gedämmt werden?", options: [
                { optionTitle: "Einfamilienhaus", icon: familienhaus, checked: false },
                { optionTitle: "Zwei- / Mehrfamilienhaus", icon: mehrfamilienhaus, checked: false },
                { optionTitle: "Gewerbeimmobilie", icon: gewerbe, checked: false }
            ]
        },
        {
            questionTitle: "Wann wurde das Gebäude gebaut?", options: [
                { optionTitle: "Vor 1978", icon: vor1978, checked: false },
                { optionTitle: "1978 - 2001", icon: bis2001, checked: false },
                { optionTitle: "Nach 2001", icon: nach2001, checked: false },
                { optionTitle: "Weiß ich nicht", icon: fragezeichenIcon, checked: false }
            ]
        },
        {
            questionTitle: "Wie viele Stockwerke hat das Gebäude?", options: [
                { optionTitle: "1 Stockwerk", icon: { name: "stockwerk1", categorie: "fassade" }, checked: false },
                { optionTitle: "2 Stockwerke", icon: { name: "stockwerk2", categorie: "fassade" }, checked: false },
                { optionTitle: "3 Stockwerke und mehr", icon: { name: "stockwerk3", categorie: "fassade" }, checked: false },
                { optionTitle: "Weiß ich nicht", icon: fragezeichenIcon, checked: false }
            ]
        },
        {
            questionTitle: "Wie groß ist die zu dämmende Fläche ungefähr?", options: [
                { optionTitle: "Bis 100 m²", icon: { name: "f3", categorie: "generalIcons" }, checked: false },
                { optionTitle: "101 bis 500 m²", icon: { name: "f5", categorie: "generalIcons" }, checked: false },
                { optionTitle: "Mehr als 500 m²", icon: { name: "f6", categorie: "generalIcons" }, checked: false },
                { optionTitle: "Weiß ich nicht", icon: fragezeichenIcon, checked: false },
            ]
        },
        {
            questionTitle: "Wie ist die Zugänglichkeit des Gebäudes?", options: [
                { optionTitle: "Freistehend", icon: { name: "freistehend", categorie: "fassade" }, checked: false },
                { optionTitle: "Mittelhaus", icon: { name: "mittelhaus", categorie: "fassade" }, checked: false },
                { optionTitle: "Endhaus", icon: { name: "endhaus", categorie: "fassade" }, checked: false },
                { optionTitle: "Sosntiges / Weiß ich nicht", icon: fragezeichenIcon, checked: false },
            ]
        },
        {
            questionTitle: "Soll die Fassade auch optisch renoviert werden? (z.B. Putz/Klinkerriemchen)", options: [
                { optionTitle: "Ja", icon: jaIcon, checked: false },
                { optionTitle: "Nein", icon: neinIcon, checked: false },
                { optionTitle: "Weiß ich nicht", icon: fragezeichenIcon, checked: false },
            ]
        }
    ]
}

export default questionsObject;

export const questionsID_Keys = Object.keys(questionsObject).map(key => key)
