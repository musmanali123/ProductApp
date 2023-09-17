import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import HeaderIcon from './HeaderIcons';
import { windowWidth } from '../utils/utils';

const NavigationHeader = ({ title, isBack }) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center'
          }}>
          {isBack ? (
            <TouchableOpacity style={{ marginLeft: windowWidth * 0.05 }} onPress={() => navigation.goBack()}>
              {HeaderIcon.backIcon()}
            </TouchableOpacity>
          ) : null}

          <Text
            style={{
              fontSize: 20,
              marginLeft: windowWidth * 0.05,
              marginTop: 2,
              fontWeight: '600',
              color: "#000",
              marginBottom: 5
            }}>
            {title}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default NavigationHeader;
