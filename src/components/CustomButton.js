import React from 'react';
import {Text, StyleSheet, Pressable, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors, colors, sizes } from '../utils/utils';

export default function CustomButton({btnLabel, Press, myStyle, txtStyle, style}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={Press}
      navigation={navigation}
      style={[
        styles.button,
        {
          ...myStyle,
          ...style,
        },
      ]}>
      <Text
        style={[
          styles.text,
          {
            color: colors.black,
            ...txtStyle,
          },
        ]}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: sizes.m25,
    backgroundColor: colors.primary1,
    alignItems: 'center',
    alignSelf: 'center',
    width: '35%',
    padding: 14,
     shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },

  text: {
    fontSize: sizes.m18,
    fontWeight: '600',
  },
});
