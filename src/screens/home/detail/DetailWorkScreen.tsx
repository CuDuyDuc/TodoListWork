import { ArrowLeft2 } from 'iconsax-react-native'
import moment from 'moment'
import React, { useState } from 'react'
import { StatusBar, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import { FONTFAMILY } from '../../../../assets/fonts'
import COLORS from '../../../assets/colors/Colors'
import { ButtonComponent, ContainerComponent, RowComponent, SectionComponent, TextComponent } from '../../../component'
import { authSelector } from '../../../redux/reducers/authReducer'
import workAPI from '../../../apis/workAPI'
import { ReactNativeModal } from 'react-native-modal/dist/modal';

const DetailWorkScreen = ({ navigation, route }: any) => {
    const user = useSelector(authSelector);
    const { data } = route.params
    const [isRemember, setIsRemember] = useState(data.success);
    const [isModalVisible, setModalVisible] = useState(false);
    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    const deleteWorkHandle = async () => {
        try {
            await workAPI.HandleWork(`/delete-work/${data.id_work}`, {}, 'delete');
            closeModal();
            navigation.navigate('Home');
        } catch (error) {
            console.log('Lỗi khi xóa công việc', error);
            closeModal();
        }
    };

    return (
        <ContainerComponent>
            <StatusBar barStyle={'dark-content'} />
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
            <SectionComponent styles={{ alignItems: 'flex-end'}}>
                <TextComponent
                    text={isRemember ? 'Đã hoàn thành' : 'Chưa hoàn thành'}
                    color={COLORS.ORANGE}
                    styles={{ fontSize: 13, marginLeft: 10 }}
                />
            </SectionComponent>
            <SectionComponent>
                <TextComponent
                    text={data.name}
                    color={COLORS.BLACK}
                    styles={{ fontFamily: FONTFAMILY.poppins_medium }}
                    size={20} />
            </SectionComponent>
            <SectionComponent>
                <TextComponent
                    text={data.description}
                    color={COLORS.BLACK}
                    styles={{ fontFamily: FONTFAMILY.poppins_regular, textAlign: 'justify' }}
                    size={15} />
            </SectionComponent>
            <SectionComponent>
                <RowComponent justify='space-between'>
                    <TextComponent
                        text={`Thời gian tạo:  ${moment(data.data_work).format('HH:MM')}`}
                        color={COLORS.ORANGE}
                        styles={{ fontSize: 14 }}
                    />
                    <TextComponent
                        text={`Ngày tạo:  ${moment(data.data_work).format('DD/MM/YYYY')}`}
                        color={COLORS.ORANGE}
                        styles={{ fontSize: 13 }}
                    />
                </RowComponent>
            </SectionComponent>
            <SectionComponent styles={{ marginTop: 20 }}>
                <ButtonComponent
                    onPress={openModal}
                    text="Xóa công việc"
                    type='orange'
                />
            </SectionComponent>
            <ReactNativeModal
                isVisible={isModalVisible}
                onBackdropPress={closeModal}
                onBackButtonPress={closeModal}
                style={{ marginHorizontal: 10, justifyContent: 'center' }}
            >
                <View style={{ borderRadius: 10, padding: 20, backgroundColor: COLORS.WHITE }}>
                    <TextComponent text='Bạn có chắc muốn xóa công việc này không?' color={COLORS.ORANGE} size={15} />
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 40 }}>
                        <TouchableOpacity
                            style={{
                                marginRight: 30,
                                borderWidth: 1,
                                backgroundColor: COLORS.LIGHT,
                                padding: 8,
                                borderRadius: 10,
                                width: 70,
                                borderColor: COLORS.LIGHT
                            }}
                            onPress={closeModal}>
                            <TextComponent text='No' color={COLORS.HEX_LIGHT_GREY} styles={{ textAlign: 'center' }} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                marginRight: 10,
                                borderWidth: 1,
                                backgroundColor: COLORS.ORANGE,
                                padding: 8,
                                borderRadius: 10,
                                width: 70,
                                borderColor: COLORS.ORANGE
                            }}
                            onPress={deleteWorkHandle}>
                            <TextComponent text='Yes' color={COLORS.WHITE} styles={{ textAlign: 'center' }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ReactNativeModal>
        </ContainerComponent>
    )
}

export default DetailWorkScreen