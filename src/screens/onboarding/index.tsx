/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {Bg, Logo} from '@assets/images';
import {family} from '@theme';
import React, {FC} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAppDispatch} from 'store';
import {SizedBox} from '../../components/sized-box/index';
import style from './styles';

export const Onboarding: FC = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const width = Dimensions.get('window').width;

  return (
    <ImageBackground source={Bg} style={style.pageWrap}>
      <View style={style.overlay} />
      <View style={style.container}>
        <View style={{flex: 0.1}} />
        <View style={style.flowContainer}>
          <Image source={Logo} style={style.heroImg} />
          <View style={style.swipeCont}>
            <View style={style.swipeTextContainer}>
              <Text style={style.swipeLabel}>
                Start Shopping
                {'\n'}
                {'\n'}
                Stay Happy
                {'\n'}
                {'\n'}
                Anytime
              </Text>
            </View>
          </View>
        </View>
        <View style={style.btnContain}>
          <Text style={style.arrowText}>Basket Online Marketplace</Text>
          <SizedBox height={20} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Auth');
              }}>
              <Text style={[style.swipeDesc, {fontFamily: family.Medium}]}>
                Skip
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Auth');
              }}>
              <Text style={[style.swipeDesc, {fontFamily: family.Medium}]}>
                Next
              </Text>
            </TouchableOpacity>
          </View>

          <SizedBox height={60} />
        </View>
      </View>
    </ImageBackground>
  );
};
