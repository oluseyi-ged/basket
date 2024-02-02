/* eslint-disable react-native/no-inline-styles */

import {Logo} from '@assets/images';
import {SvgIcon, TextInput} from '@components';
import {HDP, RF} from '@helpers';
import React, {FC} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootState, useAppSelector} from 'store';
import style from './styles';

export const Home: FC = ({navigation}: any) => {
  const {height} = Dimensions.get('window');
  const {profile} = useAppSelector((store: RootState) => store);

  const options = [
    {
      id: 1,
      title: 'Notification',
      icon: 'bell',
    },
    {
      id: 2,
      title: 'Edit Profile',
      icon: 'edit',
    },
    {
      id: 3,
      title: 'Wishlist',
      icon: 'star',
    },
    {
      id: 4,
      title: 'Order history',
      icon: 'history',
    },
    {
      id: 5,
      title: 'Track order',
      icon: 'marker',
    },
    {
      id: 5,
      title: 'Payment option',
      icon: 'pay',
    },
    {
      id: 5,
      title: 'Settings',
      icon: 'settings',
    },
    {
      id: 5,
      title: 'Log out',
      icon: 'logout',
    },
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#112D42', height}}>
      <ScrollView style={style.container}>
        <View style={style.header}>
          <Image source={Logo} style={{width: HDP(40), height: HDP(40)}} />
          <View style={{flex: 1}}>
            <TextInput
              placeholder={'Search'}
              iconName1="search"
              inputStyle={style.searchBox}
              containerStyle={style.searchBox}
            />
          </View>
          <SvgIcon name="burger" size={40} />
        </View>
        <View style={style.heroSection}>
          <Image source={{uri: profile?.image}} style={style.aviRound} />
          <View>
            <Text style={style.maintext}>
              {profile?.firstName} {profile?.lastName}
            </Text>
            <Text style={[style.maintext, {fontSize: RF(12)}]}>
              {profile?.email}
            </Text>
          </View>
        </View>
        <View style={{flex: 1, position: 'relative'}}>
          <View style={style.optBox}>
            {options?.map((opt, i) => (
              <TouchableOpacity
                disabled={i !== 7}
                onPress={() => {
                  navigation.reset({
                    index: 0,
                    routes: [{name: 'Auth'}],
                  });
                }}
                key={i}
                style={style.optItem}>
                <View style={{flex: 0.2}}>
                  <SvgIcon name={opt?.icon} size={24} />
                </View>
                <View style={{flex: 0.4}}>
                  <Text style={style.optText}>{opt?.title}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
