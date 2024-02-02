import {Logo} from '@assets/images';
import {SvgIcon} from '@components';
import {HDP} from '@helpers';
import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SizedBox} from '../../components/sized-box/index';
import style from './styles';

export const Welcome: FC = ({navigation}: any) => {
  return (
    <View style={style.container}>
      <View style={style.flowContainer}>
        <View style={style.header}>
          <Image source={Logo} style={{width: HDP(50), height: HDP(50)}} />
          <Text style={style.headText}>basket</Text>
        </View>
        <View style={style.swipeCont}>
          <View style={style.swipeTextContainer}>
            <SizedBox height={59} />
            <Text style={style.swipeLabel}>Welcome to </Text>
            <SizedBox height={10} />
            <Text style={style.swipeDesc}>basket online store</Text>
            <SizedBox height={5} />
            <Text style={style.swipeSub}>
              basket is the most recommended store for both new and used
              products
            </Text>
          </View>
        </View>
      </View>
      <View style={style.btnContain}>
        <SvgIcon name="people" size={223} />
        <SizedBox height={48} />
        <TouchableOpacity
          style={style.proceedCta}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <View style={{width: HDP(24)}} />
          <Text style={style.proceedText}>Get Started</Text>
          <SvgIcon name="arrow-right" size={24} />
        </TouchableOpacity>
        <SizedBox height={48} />
      </View>
    </View>
  );
};
