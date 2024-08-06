import { View, Text, Image, Switch } from 'react-native'
import React, { useState } from 'react'
import { ButtonComponent, InputComponent, KeyboardAvoidingViewWrapper, RowComponent, SectionComponent, TextComponent } from '../../component'
import IMAGES from '../../assets/images'
import COLORS from '../../assets/colors/Colors'
import { FONTFAMILY } from '../../../assets/fonts'
import { Lock, Sms } from 'iconsax-react-native'
import { globalStyle } from '../../styles/globalStyle'
import { Facebook, Google } from '../../assets/svgs'
import { LoadingModal } from '../../modal'


const LoginScreen = () => {

  // Lấy dữ liệu
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(true);
  const [isDisable, setIsDisable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <KeyboardAvoidingViewWrapper>
      <SectionComponent>
        <Image source={IMAGES.Login} style = {{width: '100%', height: 270, marginTop: 25}}/>
      </SectionComponent>
      <SectionComponent>
        <TextComponent 
          title
          text='Đăng Nhập'
          size={45}
          color={COLORS.BLACK}
          font={FONTFAMILY.poppins_bold}
          styles= {{marginBottom: 20}}/>
        <InputComponent
          value={email}
          placeholder='Email'
          onChange={val => setEmail(val)}
          allowClear
          affix= {<Sms size={22} color={COLORS.HEX_LIGHT_GREY}/>}/>
        <InputComponent
          value={password}
          placeholder='Mật khẩu'
          onChange={val => setPassword(val)}
          isPassword
          affix={<Lock size={22} color={COLORS.HEX_LIGHT_GREY}/>}/>
      </SectionComponent>
      <SectionComponent>
        <RowComponent justify='space-between'>
          <RowComponent onPress={() => setIsRemember(!isRemember)}>
            <Switch 
              trackColor={{false: COLORS.WHITE, true: COLORS.ORANGE}}
              thumbColor={isRemember ? COLORS.WHITE : COLORS.ORANGE}
              value={isRemember}
              onChange={() => setIsRemember(!isRemember)}/>
            <TextComponent text='Ghi nhớ tài khoản' color={COLORS.BLACK}/>
          </RowComponent>
          <ButtonComponent 
            text='Quên mật khẩu?'
            type='link'/>
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <ButtonComponent
          text='Đăng Nhập'
          type='orange'
          disable={isDisable}/>
      </SectionComponent>
      <SectionComponent>
        <TextComponent
          text='Đăng nhập với'
          color={COLORS.HEX_LIGHT_GREY}
          styles = {{
            textAlign: 'center',
            fontSize: 16,
            marginBottom: 10,
            fontFamily: FONTFAMILY.poppins_medium
          }}/>
        <RowComponent>
          <ButtonComponent 
            text='Google'
            iconFlex='left'
            type='orange'
            styles= {globalStyle.shadow}
            textColor={COLORS.HEX_LIGHT_GREY}
            icon= {<Google/>}/>
          <ButtonComponent 
            text='Facebook'
            iconFlex='left'
            type='orange'
            styles= {globalStyle.shadow}
            textColor={COLORS.HEX_LIGHT_GREY}
            icon= {<Facebook/>}/> 
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <RowComponent justify='center'>
          <TextComponent 
            text='Bạn chưa có tài khoản? '
            color={COLORS.BLACK}/>
          <ButtonComponent
            type='link'
            text='Đăng ký'
            />
        </RowComponent>
      </SectionComponent>
      <LoadingModal visible={isLoading}/>
    </KeyboardAvoidingViewWrapper>
  )
}

export default LoginScreen