import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { colors, sizes, windowHeight, windowWidth } from '../utils/utils';

export default function Input({
  placeholderText,
  name,
  size,
  txtStyle,
  myStyle,
  isIconShow,
  keyboardType,
  isMultiLineTrue
}) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View
      style={[
        styles.formWrapper,
        {borderColor: isFocus ? colors.primary1 : colors.primary, ...myStyle},
      ]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          autoCapitalize="words"
          multiline={isMultiLineTrue}
          style={[styles.textBox, {...txtStyle}]}
          placeholder={placeholderText}
          placeholderTextColor={colors.black}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formWrapper: {
    backgroundColor: colors.primary,
    borderWidth: 1.5,
    borderRadius: 14,
    paddingHorizontal: 10,
    marginHorizontal: 14,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  textBox: {
    fontSize: sizes.m15,
    color: colors.black,
    fontWeight: '600',
    height: windowHeight*0.05
  },
});
