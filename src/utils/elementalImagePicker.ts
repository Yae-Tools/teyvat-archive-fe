import { StaticImageData } from "next/image";
import { ELEMENT_TYPES } from "~/data/teyvatData";

import AnemoSVG from "../assets/images/elements/Element_Anemo.svg";
import CryoSVG from "../assets/images/elements/Element_Cryo.svg";
import DendroSVG from "../assets/images/elements/Element_Dendro.svg";
import ElectroSVG from "../assets/images/elements/Element_Electro.svg";
import GeoSVG from "../assets/images/elements/Element_Geo.svg";
import HydroSVG from "../assets/images/elements/Element_Hydro.svg";
import PyroSVG from "../assets/images/elements/Element_Pyro.svg";

import AnemoBg from "~/assets/images/bgs/constellation_template__anemo.jpg";
import CryoBg from "~/assets/images/bgs/constellation_template__cryo.jpg";
import DendroBg from "~/assets/images/bgs/constellation_template__dendro.jpg";
import ElectroBg from "~/assets/images/bgs/constellation_template__electro.jpg";
import GeoBg from "~/assets/images/bgs/constellation_template__geo.jpg";
import HydroBg from "~/assets/images/bgs/constellation_template__hydro.png";
import PyroBg from "~/assets/images/bgs/constellation_template__pyro.jpg";

const elementalImageMap = new Map<string, StaticImageData>();
elementalImageMap.set(ELEMENT_TYPES.Anemo, AnemoSVG);
elementalImageMap.set(ELEMENT_TYPES.Electro, ElectroSVG);
elementalImageMap.set(ELEMENT_TYPES.Geo, GeoSVG);
elementalImageMap.set(ELEMENT_TYPES.Dendro, DendroSVG);
elementalImageMap.set(ELEMENT_TYPES.Hydro, HydroSVG);
elementalImageMap.set(ELEMENT_TYPES.Pyro, PyroSVG);
elementalImageMap.set(ELEMENT_TYPES.Cryo, CryoSVG);

const getElementTypeImage = (element: IElementType) => {
  return elementalImageMap.get(element) as StaticImageData;
};

const elementalBackgroundMap = new Map<string, StaticImageData>();
elementalBackgroundMap.set(ELEMENT_TYPES.Anemo, AnemoBg);
elementalBackgroundMap.set(ELEMENT_TYPES.Electro, ElectroBg);
elementalBackgroundMap.set(ELEMENT_TYPES.Geo, GeoBg);
elementalBackgroundMap.set(ELEMENT_TYPES.Dendro, DendroBg);
elementalBackgroundMap.set(ELEMENT_TYPES.Hydro, HydroBg);
elementalBackgroundMap.set(ELEMENT_TYPES.Pyro, PyroBg);
elementalBackgroundMap.set(ELEMENT_TYPES.Cryo, CryoBg);

const elementalBackgroundPicker = (element: IElementType) => {
  return elementalBackgroundMap.get(element) as StaticImageData;
};

export { getElementTypeImage, elementalImageMap, elementalBackgroundPicker };
