import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import { colors, sizes, windowWidth } from '../utils/utils';
import CustomButton from './CustomButton';

const HomeCards = ({TaskNumber,TaskTitle,onPass}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardStyle}>
        <View>
          <Text style={styles.textStyle}>{TaskNumber}</Text>
          <Text style={styles.textStyle1}>{TaskTitle}</Text>
        </View>
        <CustomButton
        Press={onPass}
          textColor={colors.black}
          btnLabel="CHECK NOW"
          myStyle={{width: '40%', borderRadius: sizes.m15, padding: 5}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: '4%',
    padding:11,
    alignSelf: 'center',
    backgroundColor: colors.primary,
    borderRadius: sizes.m15,
    width: windowWidth * 0.93,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 12,
  },

  cardStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textStyle: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '600',
  },

  textStyle1: {
    color: colors.blue,
    fontSize: sizes.m15,
    fontWeight: '600',
  },
});

export default HomeCards;
