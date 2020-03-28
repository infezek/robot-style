import React from "react";
import { StyleSheet } from "react-native";

import colors from './Colors'
import Block from "./Block";

function Card(props) {
  const { color, style, children, ...rest } = props;

  const styles = StyleSheet.create({
    card: {
      elevation: 4,
      borderRadius: 6,
      padding: 20,
      marginBottom: 16
    }
  });

  const cardStyles = [styles.card, style];

  return (
    <Block color={color || colors.white} style={cardStyles} {...rest}>
      {children}
    </Block>
  );
}
export default Card;
