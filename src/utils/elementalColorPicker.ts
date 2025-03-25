function elementalColorPicker(element: string) {
  let color = null;

  switch (element) {
    case "Cryo":
      color = "#b3d4e0";
      break;
    case "Anemo":
      color = "#3e9f85";
      break;
    case "Dendro":
      color = "#397c53";
      break;
    case "Electro":
      color = "#aa7eee";
      break;
    case "Pyro":
      color = "#ba3c3c";
      break;
    case "Hydro":
      color = "#0b5394";
      break;
    case "Geo":
      color = "#b99c71";
      break;
    default:
      color = "";
  }

  return color;
}

export default elementalColorPicker;
