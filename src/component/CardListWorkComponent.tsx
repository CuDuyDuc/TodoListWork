import { Clock } from 'iconsax-react-native';
import React, { useEffect, useState } from 'react';
import { Switch, TouchableOpacity } from 'react-native';
import COLORS from '../assets/colors/Colors';
import RowComponent from './RowComponent';
import SectionComponent from './SectionComponent';
import TextComponent from './TextComponent';
import workAPI from '../apis/workAPI';
import {ObjectId} from 'mongoose'

interface Props {
    name?: string,
    time?: string,
    date?: string,
    description?: string,
    onPress?: () => void,
    isSuccess?:boolean,
    idWork:ObjectId
}

const CardListWorkComponent = (props: Props) => {
    const {name, time, date, description, onPress,isSuccess,idWork} = props
    const [isRemember, setIsRemember] = useState(isSuccess);
    useEffect(()=>{
        const updateSuccess = async()=>{
            try {
               await workAPI.HandleWork(`/update-success/${idWork}`,{success:isRemember},'put') 
            } catch (error) {
                console.log('Lỗi update success',error);
                
            }
        }
        updateSuccess()
    },[isRemember])
    return (
        <TouchableOpacity onPress={onPress}>
            <SectionComponent styles={{ padding: 10, backgroundColor: COLORS.LIGHT_CYAN, borderRadius: 10, marginBottom: 10 }}>
                <RowComponent justify='flex-end' onPress={() => setIsRemember(!isRemember)}>
                    <Switch
                        trackColor={{ false: COLORS.WHITE, true: COLORS.ORANGE }}
                        thumbColor={isRemember ? COLORS.WHITE : COLORS.HEX_LIGHT_GRAY}
                        value={isRemember}
                        onChange={() => setIsRemember(!isRemember)}
                    />
                    <TextComponent
                        text={isRemember ? 'Đã hoàn thành' : 'Chưa hoàn thành'}
                        color={COLORS.BLACK}
                        styles={{ fontSize: 13, marginLeft: 10 }}
                    />
                </RowComponent>
                <RowComponent justify="space-between" styles={{ alignItems: 'center' }}>
                    <RowComponent justify='space-between'>
                        <TextComponent text={name} color={COLORS.BLACK} size={16} styles={{ fontWeight: 'bold' }} />
                    </RowComponent>
                </RowComponent>
                <TextComponent text={description} color="#000" size={12} numberOfLines={2} />
                <RowComponent justify="space-between" styles={{ alignItems: 'center' }}>
                    <RowComponent justify="flex-start" styles={{ alignItems: 'center' }}>
                        <Clock size={22} color={COLORS.ORANGE} variant='Bold' />
                        <TextComponent text={time} color="#000" size={14} styles= {{}}/>
                    </RowComponent>
                    <TextComponent text={date} color="#000" size={14} styles={{ marginTop: 5 }} />
                </RowComponent>
            </SectionComponent>
        </TouchableOpacity>
    )
}

export default CardListWorkComponent