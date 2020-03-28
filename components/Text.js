import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from './Colors'
import ColorsDefault from '../robot-colors'
function Texto(props) {
  const colors = ColorsDefault
  const {
    h1,
    h2,
    h3,
    title,
    subtitle,
    body,
    caption,
    small,
    size,
    transform,
    align,
    // estilo da font
    regular,
    bold,
    semibold,
    medium,
    weight,
    light,
    center,
    right,
    spacing,
    height,
    // cor
    color,
    accent,
    primary,
    secondary,
    tertiary,
    black,
    white,
    gray,
    gray2,
    style,
    children,
    ...rest
  } = props;

  const styles = StyleSheet.create({
    text: {
      fontSize: 14,
      color: colors.black2
    },
    regular: {
      fontWeight: "normal"
    },
    bold: {
      fontWeight: "bold"
    },
    semibold: {
      fontWeight: "500"
    },
    medium: {
      fontWeight: "500"
    },
    light: {
      fontWeight: "200"
    },
    center: { textAlign: "center" },
    right: { textAlign: "right" },
    accent: { color: "#FFE358"},
    primary: { color: "#0050b3"},
    secondary: { color: "#2BDA8E"},
    black: { color: "#000"},
    black2: { color: "#323643" },
    white: { color: "#ffff"},
    gray: { color: "#9DA3B4"},
    gray2: { color: "#C5CCD6"},

    h1: { fontSize: 26 },
    h2: { fontSize: 20 },
    h3: { fontSize: 18 },
    title: { fontSize: 18 },
    subtitle: { fontSize: 10 },
    body: { fontSize: 14 },
    caption: { fontSize: 12 },
    small: { fontSize: 10 }

  });

  const textStyles = [
    styles.text,
    h1 && styles.h1,
    h2 && styles.h2,
    h3 && styles.h3,
    title && styles.title,
    subtitle && styles.subtitle,
    body && styles.body,
    caption && styles.caption,
    small && styles.small,
    size && { fontSize: size },
    transform && { textTransform: transform },
    align && { textAlign: align },
    height && { lineHeight: height },
    spacing && { letterSpacing: spacing },
    weight && { fontWeight: weight },
    regular && styles.regular,
    bold && styles.bold,
    semibold && styles.semibold,
    medium && styles.medium,
    light && styles.light,
    center && styles.center,
    right && styles.right,
    color && styles[color],
    color && !styles[color] && { color },
    
    accent && styles.accent,
    primary && styles.primary,
    secondary && styles.secondary,
    tertiary && styles.tertiary,
    black && styles.black,
    white && styles.white,
    gray && styles.gray,
    gray2 && styles.gray2,
    style
  ];

  return (
    <Text style={textStyles} {...rest}>
      {children}
    </Text>
  );
}
export default Texto;
