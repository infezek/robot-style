function ColorsDefault(Colors) {
  const {
    accent,
    primary,
    secondary,
    black,
    black2,
    white,
    gray,
    gray2
  } = Colors;
  return {
    accent: accent ? accent : "#FFE358",
    primary: primary ? primary : "#0050b3",
    secondary: secondary ? secondary : "#2BDA8E",
    black: black ? black : "#000000",
    black2: black2 ? black2 : "#323643",
    white: white ? white : "#FFFFFF",
    gray: gray ? gray : "#9DA3B4",
    gray2: gray2 ? gray2 : "#C5CCD6"
  };
}

export default ColorsDefault;
