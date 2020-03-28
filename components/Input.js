import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Text from './Text';
import Block from './Block';
import Button from './Button';
import colors from './Colors';
import { TextInputMask } from 'react-native-masked-text';

export default function Input(props) {
  const [toggleSecure, setToggleSecure] = useState(false);

  function renderLabel() {
    const { label, error } = props;
    return (
      <Block flex={false}>
        {label ? (
          <Text gray2={!error} accent={error}>
            {label}
          </Text>
        ) : null}
      </Block>
    );
  }

  function renderToggle() {
    const { secure, rightLabel } = props;

    if (!secure) return null;
    return (
      <Button style={styles.toggle}>
        <TouchableOpacity
          onPress={() => setToggleSecure(!toggleSecure)}
          hitSlop={{ top: 50, bottom: 50, left: 50, right: 50 }}
        >
          {rightLabel ? (
            rightLabel
          ) : (
            <Icon
              color={colors.gray}
              size={19}
              name={!toggleSecure ? 'eye' : 'eye-off'}
            />
          )}
        </TouchableOpacity>
      </Button>
    );
  }

  function renderRight() {
    const { rightLabel, rightStyle, onRightPress } = props;

    if (!rightLabel) return null;
    return (
      <Button
        style={[styles.toggle, rightStyle]}
        onPress={() => onRightPress && onRightPress()}
      >
        {rightLabel}
      </Button>
    );
  }

  const { email, phone, number, type, secure, error, style, ...rest } = props;

  const styles = StyleSheet.create({
    input: {
      borderRadius: 0,
      borderWidth: 0,
      borderBottomColor: colors.gray2,
      borderBottomWidth: 0,
      borderColor: colors.black2,
      fontSize: 14,
      fontWeight: '500',
      color: colors.black2,
      height: 40,
    },
    toggle: {
      position: 'absolute',
      alignItems: 'flex-end',
      width: 32,
      height: 32,
      top: 16,
      right: 0,
    },
  });

  const isSecure = toggleSecure ? false : secure;

  const inputStyles = [
    styles.input,
    error && { borderColor: colors.accent },
    style,
  ];

  const inputType = email
    ? 'email-address'
    : number
    ? 'numeric'
    : phone
    ? 'phone-pad'
    : 'default';

  switch (type) {
    case 'cpf':
      return (
        <Block flex={false} margin={[16, 0]}>
          {renderLabel()}
          <TextInputMask type={'cpf'} {...rest} />
          <View
            style={{ backgroundColor: colors.gray2, height: 1.5, width: '100%' }}
          />
        </Block>
      );
    default:
      return (
        <Block flex={false} margin={[16, 0]}>
          {renderLabel()}
          <TextInput
            style={inputStyles}
            secureTextEntry={isSecure}
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType={inputType}
            {...rest}
          />
          {renderToggle()}
          {renderRight()}
          <View
            style={{ backgroundColor: colors.gray2 , height: 1.5, width: '100%' }}
          />
        </Block>
      );
  }
}
