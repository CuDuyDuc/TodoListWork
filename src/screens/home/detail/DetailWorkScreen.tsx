import { View, Text, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { authSelector } from '../../../redux/reducers/authReducer'
import { ContainerComponent, RowComponent, SectionComponent, TextComponent } from '../../../component'
import { ArrowLeft2 } from 'iconsax-react-native'
import COLORS from '../../../assets/colors/Colors'
import { FONTFAMILY } from '../../../../assets/fonts'
import moment from 'moment'

const DetailWorkScreen = ({ navigation, route }: any) => {
    const user = useSelector(authSelector);
    const { data } = route.params
    const [isRemember, setIsRemember] = useState(data.success);
    console.log(data.name);

    return (
        <ContainerComponent>
            <SectionComponent styles={{ marginTop: 40 }}>
                <RowComponent justify='space-between'>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ArrowLeft2 size={24} color={COLORS.BLACK} />
                    </TouchableOpacity>
                    <TextComponent
                        text="Chi tiết công việc "
                        color={COLORS.BLACK}
                        size={25}
                        font={FONTFAMILY.poppins_medium} />
                    <View></View>
                </RowComponent>
            </SectionComponent>
            <SectionComponent>
                <RowComponent justify='space-between'>
                    <TextComponent
                        text={data.name}
                        color={COLORS.BLACK}
                        styles={{ fontFamily: FONTFAMILY.poppins_medium }}
                        size={20} />
                    <TextComponent
                        text={isRemember ? 'Đã hoàn thành' : 'Chưa hoàn thành'}
                        color={COLORS.BLACK}
                        styles={{ fontSize: 13, marginLeft: 10 }}
                    />
                </RowComponent>
            </SectionComponent>
            <SectionComponent>
                <TextComponent
                    text={data.description}
                    color={COLORS.BLACK}
                    styles={{ fontFamily: FONTFAMILY.poppins_regular,textAlign:'justify' }}
                    size={15} />
            </SectionComponent>
            <SectionComponent>
                <RowComponent justify='space-between'>
                    <TextComponent
                        text={`Thời gian: ${moment(data.data_work).format('HH:MM')}`}
                        color={COLORS.BLACK}
                        styles={{ fontSize: 14 }}
                    />
                    <TextComponent
                        text={`Ngày tạo: ${moment(data.data_work).format('DD/MM/YYYY')}`}
                        color={COLORS.BLACK}
                        styles={{ fontSize: 13 }}
                    />
                </RowComponent>
            </SectionComponent>
        </ContainerComponent>
    )
}

export default DetailWorkScreen