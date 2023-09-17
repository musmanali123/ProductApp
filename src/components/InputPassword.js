import React, {useState, version} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { colors, sizes, windowHeight } from '../utils/utils';

export default function InputPassword({
  placeholderText,
  name,
  size,
  isShow,
  sizeEndIcon,
}) {
  const [isFocus, setIsFocus] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View
      style={[
        styles.formWrapper,
        {borderColor: isFocus ? colors.primary1 : colors.primary},
      ]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>

        <TextInput
          style={styles.textBox}
          placeholder={placeholderText}
          placeholderTextColor={colors.black}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          secureTextEntry={!isOpen}
        />
      </View>

      {isShow ? (
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingHorizontal: sizes.m3,
          }}
          activeOpacity={0.6}>
          <FontAwesome
            name={isOpen ? 'eye' : 'eye-slash'}
            size={sizeEndIcon}
            color={colors.black}
            onPress={() => {
              setIsOpen(!isOpen);
            }}
          />
        </TouchableOpacity>
      ) : null}
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
    width: '87%',
    height:windowHeight*0.05
  },
});
