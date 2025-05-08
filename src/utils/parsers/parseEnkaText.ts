function parseText(inputText: string) {
  let modifiedText = inputText;

  // Replace color codes with HTML style tags
  modifiedText = modifiedText.replace(
    /<color=([^>]+)>/g,
    '<b style="color:$1">'
  );
  modifiedText = modifiedText.replace(/<\/color>/g, "</b>");

  // Replace {LAYOUT_MOBILE#Tap}{LAYOUT_PC#Press}{LAYOUT_PS#Press} with "Mobile:Tap, PS/PC: Press"
  modifiedText = modifiedText.replace(
    /\{LAYOUT_MOBILE#Tap\}\{LAYOUT_PC#Press\}\{LAYOUT_PS#Press\}/g,
    "Mobile:Tap, PS/PC: Press"
  );

  // Remove anything inside curly braces {}
  modifiedText = modifiedText.replace(/\{[^}]*\}/g, "");

  modifiedText = modifiedText.replace(
    /#(?!([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3}))/g,
    ""
  );

  // do text.split('\n') and render each array element inside < p > elements in a loop
  modifiedText = modifiedText.replace(
    /(\r\n|\n|\\n|\r)/gm,
    "</><p class='enkaTalentText'>"
  );

  modifiedText = modifiedText.replace(
    /<b style="color:([^>]+)">/g,
    '<b style="color:$1; font-family: enka">'
  );

  return modifiedText;
}

export default parseText;
