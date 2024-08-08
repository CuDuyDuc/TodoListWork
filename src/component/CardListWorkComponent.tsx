import { Clock } from 'iconsax-react-native';
import React, { useState } from 'react';
import { Switch, TouchableOpacity } from 'react-native';
import COLORS from '../assets/colors/Colors';
import RowComponent from './RowComponent';
import SectionComponent from './SectionComponent';
import TextComponent from './TextComponent';

interface Props {
    title?: string,
    time?: string,
    date?: string,
    content?: string
}

const CardListWorkComponent = (props: Props) => {
    const {title, time, date, content} = props
    const [isRemember, setIsRemember] = useState(false);
    return (
        <TouchableOpacity>
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
                        <TextComponent text={title} color={COLORS.BLACK} size={16} styles={{ fontWeight: 'bold' }} />
                    </RowComponent>
                </RowComponent>
                <TextComponent text={content} color="#000" size={12} numberOfLines={2} />
                <RowComponent justify="space-between" styles={{ alignItems: 'center' }}>
                    <RowComponent justify="flex-start" styles={{ alignItems: 'center' }}>
                        <Clock size={22} color={COLORS.ORANGE} variant='Bold' />
                        <TextComponent text={time} color="#000" size={14} />
                    </RowComponent>
                    <TextComponent text={date} color="#000" size={14} styles={{ marginTop: 5 }} />
                </RowComponent>
            </SectionComponent>
        </TouchableOpacity>
    )
}

export default CardListWorkComponent