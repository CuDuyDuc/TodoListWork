import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Validate } from '../../utils/validate';
import { globalStyle } from '../../styles/globalStyle';
import { ButtonComponent, InputComponent, SectionComponent, TextComponent } from '../../component';
import { ArrowLeft, Sms } from 'iconsax-react-native';
import COLORS from '../../assets/colors/Colors';
import { FONTFAMILY } from '../../../assets/fonts';
import { LoadingModal } from '../../modal';
import IMAGES from '../../assets/images';

const ForgotPassWord = ({ navigation }: any) => {

    const [email, setEmail] = useState('');
    const [isDisable, setIsDisable] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const handleCheckEmail = () => {
        const isValidEmail = Validate.email(email);
        setIsDisable(!isValidEmail);
    }

    return (
        <View style = {globalStyle.container}>
        <SectionComponent>
            <TouchableOpacity style={{ paddingTop: 50, paddingBottom: 10 }}>
                <ArrowLeft size={24} color={COLORS.BLACK}
                    onPress={() => navigation.goBack()} />
            </TouchableOpacity>
            <SectionComponent>
                <Image source={IMAGES.ForgotPass} style={{ width: '100%', height: 270, marginTop: 25 }}/>
            </SectionComponent>
            <TextComponent text='Resset Mật Khẩu' title font={FONTFAMILY.poppins_bold} color={COLORS.BLACK}/>
            <TextComponent text='Để đặt lại mật khẩu, bạn cần có email có thể được xác thực.' styles= {{paddingBottom: 30}} color={COLORS.BLACK}/>
            <InputComponent 
                value={email} 
                onChange={val => setEmail(val)}
                placeholder='abc123@gmail.com'
                affix= {<Sms size={24} color={COLORS.HEX_LIGHT_GREY}/>}
                onEnd={handleCheckEmail}/>   
        </SectionComponent>
        <SectionComponent styles={{alignItems:'center'}}>
            <ButtonComponent 
                text='Gửi' 
                type='orange' 
                styles={{width: '80%'}}
                disable={isDisable}
                /> 
        </SectionComponent>
        <LoadingModal visible= {isLoading}/>
    </View>
    )
}

export default ForgotPassWord