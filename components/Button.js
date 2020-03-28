import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from './Colors'
function Button(props) {
  let {
    style,
    opacity,
    gradient,
    color,
    startColor,
    endColor,
    end,
    start,
    locations,
    shadow,
    children,
    ...rest
  } = props;


  startColor = startColor ? startColor : colors.primary;
  endColor = endColor ? endColor : colors.secondary;
  start = start ? start : {x: 0, y: 0};
  (end = end ? end : {x: 1, y: 1}),
    (locations = locations ? locations : [0.1, 0.9]);
  (opacity = opacity ? opacity : 0.8), (color = color ? color : colors.white);

  const styles = StyleSheet.create({
    button: {
      borderRadius: 6,
      height: 16 * 3,
      justifyContent: 'center',
      marginVertical: 25 / 3,
    },
    shadow: {
      shadowColor: colors.black2,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 10,
    },
    accent: {backgroundColor: colors.accent},
    primary: {backgroundColor: colors.primary},
    secondary: {backgroundColor: colors.secondary},
    black: {backgroundColor: colors.black2},
    white: {backgroundColor: colors.white},
    gray: {backgroundColor: colors.gray},
    gray2: {backgroundColor: colors.gray2},
  });

  const buttonStyles = [
    styles.button,
    shadow && styles.shadow,
    color && styles[color],
    color && !styles[color] && {backgroundColor: color},
    style,
  ];

  if (gradient) {
    return (
      <TouchableOpacity style={buttonStyles} activeOpacity={opacity} {...rest}>
        <LinearGradient
          start={start}
          end={end}
          locations={locations}
          style={buttonStyles}
          colors={[startColor, endColor]}>
          {children}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={buttonStyles}
      activeOpacity={opacity || 0.8}
      {...rest}>
      {children}
    </TouchableOpacity>
  );
}

export default Button;
