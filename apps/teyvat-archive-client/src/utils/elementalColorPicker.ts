import { ELEMENT_TYPES } from "~/data/teyvatData";

function elementalColorPicker(element: string) {
  let color = null;

  switch (element) {
    case ELEMENT_TYPES.Cryo:
      color = "#b3d4e0";
      break;
    case ELEMENT_TYPES.Anemo:
      color = "#3e9f85";
      break;
    case ELEMENT_TYPES.Dendro:
      color = "#397c53";
      break;
    case ELEMENT_TYPES.Electro:
      color = "#aa7eee";
      break;
    case ELEMENT_TYPES.Pyro:
      color = "#ba3c3c";
      break;
    case ELEMENT_TYPES.Hydro:
      color = "#0b5394";
      break;
    case ELEMENT_TYPES.Geo:
      color = "#b99c71";
      break;
    default:
      color = "";
  }

  return color;
}

export default elementalColorPicker;
