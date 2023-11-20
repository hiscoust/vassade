import getFassadenSVG from "./categories/fassade"
import getGeneralSVG from "./categories/generalIcons"

interface Categories {
    fassade: string
    fenster: string
    heizung: string
    photovoltaik: string
    generalIcons: string
}

interface Iconname {

}

const SVG: React.FC<{ iconName: string, categorie: string, size?: number, width?: number, height?: number, color?: string }> = ({ iconName, categorie, size = 40, width, height, color = "#004743" }) => {

    width = width && width || size
    height = width && height || size

    return (
        <div className="">
            {svgDB_Object[categorie](iconName, width, height, color)}
        </div>
    )
}

export default SVG;



const svgDB_Object: any = {
    fassade: (name: string, width: number, height: number, color: string) => getFassadenSVG(name, width, height, color),
    generalIcons: (name: string, width: number, height: number, color: string) => getGeneralSVG(name, width, height, color),
}

export function lightenHexColor(hex: string, factor = .7): string {
    // Remove the '#' symbol if present
    hex = hex.replace('#', '');

    // Parse the hex color code
    const red = parseInt(hex.substring(0, 2), 16);
    const green = parseInt(hex.substring(2, 4), 16);
    const blue = parseInt(hex.substring(4, 6), 16);

    // Calculate the lighter RGB values
    const newRed = Math.min(255, Math.round(red + (255 - red) * factor));
    const newGreen = Math.min(255, Math.round(green + (255 - green) * factor));
    const newBlue = Math.min(255, Math.round(blue + (255 - blue) * factor));

    // Convert the new RGB values to hex and format the result
    const newHex = `#${(newRed < 16 ? '0' : '') + newRed.toString(16)}${(newGreen < 16 ? '0' : '') + newGreen.toString(16)}${(newBlue < 16 ? '0' : '') + newBlue.toString(16)}`;

    return newHex;
}