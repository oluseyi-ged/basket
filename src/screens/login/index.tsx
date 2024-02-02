/* eslint-disable react-native/no-inline-styles */
import {Logo} from '@assets/images';
import {Button, SvgIcon, TextInput} from '@components';
import {HDP, RF} from '@helpers';
import {flash} from '@helpers/FlashMessageHelpers';
import {useLoginMutation} from '@services/mutationApi';
import {setProfile} from '@slices/profile';
import {setToken} from '@slices/token';
import {Formik} from 'formik';
import React, {FC, useEffect, useRef, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {useAppDispatch} from 'store';
import * as yup from 'yup';
import {SizedBox} from '../../components/sized-box/index';
import style from './styles';

export const Login: FC = ({navigation}: any) => {
  const [checked, setChecked] = useState(false);
  const formRef = useRef<any>();
  const dispatch = useAppDispatch();

  const signInSchema = yup.object().shape({
    username: yup.string().required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const initialValues = {
    username: '',
    password: '',
  };

  const [login, {data, isLoading, isSuccess, isError, error}]: any =
    useLoginMutation();

  console.log(error, data, isError);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setProfile(data));
      dispatch(setToken(data?.token));
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
    }
    if (isError) {
      flash.danger({
        description: `${error?.data?.message}.`,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error, isError, isSuccess, navigation]);

  return (
    <KeyboardAwareScrollView
      style={{backgroundColor: '#fff', flex: 1}}
      keyboardShouldPersistTaps="handled">
      <View style={style.container}>
        <View style={style.flowContainer}>
          <View style={style.header}>
            <Image source={Logo} style={{width: HDP(50), height: HDP(50)}} />
            <Text style={style.headText}>basket</Text>
          </View>
          <View style={style.swipeCont}>
            <View style={style.swipeTextContainer}>
              <Text style={style.swipeDesc}>Log into your account</Text>
              <SizedBox height={5} />
              <Text style={style.swipeSub}>
                Enter your email and password to access your account or create
                an account
              </Text>
            </View>
          </View>
          <SizedBox height={60} />
          <View style={{paddingHorizontal: HDP(24)}}>
            <Formik
              initialValues={initialValues}
              innerRef={formRef}
              onSubmit={values => {
                login(values);
              }}
              validateOnChange={false}
              validateOnBlur={false}
              validationSchema={signInSchema}>
              {({errors, setFieldValue, values}) => (
                <>
                  <View>
                    <TextInput
                      placeholder="Username"
                      iconName1="mail"
                      name="username"
                      error={errors?.username}
                      autoCorrect={false}
                      onChangeText={value => setFieldValue('username', value)}
                      value={values.username}
                    />
                    <SizedBox height={5} />
                    <TextInput
                      placeholder="Password"
                      type="password"
                      name="password"
                      iconName1="key"
                      error={errors?.password}
                      onChangeText={value => {
                        setFieldValue('password', value);
                      }}
                      value={values.password}
                    />
                    <SizedBox height={10} />
                    <TouchableOpacity
                      style={style.memoCta}
                      onPress={() => {
                        setChecked(!checked);
                      }}>
                      <SvgIcon name={checked ? 'check' : 'uncheck'} size={24} />
                      <Text style={style.memoText}>Remember Me</Text>
                    </TouchableOpacity>
                  </View>
                  <SizedBox height={50} />
                  <Button
                    loading={isLoading}
                    title="Login"
                    containerStyle={{
                      width: '90%',
                      alignSelf: 'center',
                    }}
                    onPress={() => {
                      formRef?.current?.handleSubmit();
                      // navigation.reset({
                      //   index: 0,
                      //   routes: [{name: 'Home'}],
                      // });
                    }}
                  />
                </>
              )}
            </Formik>
            <SizedBox height={50} />
            <Text
              style={[
                style.headText,
                {fontSize: RF(14), textDecorationLine: 'underline'},
              ]}>
              Forgot Password?
            </Text>
            <SizedBox height={30} />
            <Text style={style.swipeSub}>Or signin with</Text>
            <SizedBox height={30} />
            <View style={style.signcta}>
              <Button
                title="Facebook"
                bordered
                iconName="fb"
                containerStyle={style.signBtn}
              />
              <Button
                title="Google"
                bordered
                iconName="google"
                containerStyle={style.signBtn}
              />
            </View>
            <SizedBox height={20} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Auth');
                }}>
                <Text style={[style.extraText]}>Don't have an account?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Auth');
                }}>
                <Text style={[style.extraText, {color: '#FD8136'}]}>
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
