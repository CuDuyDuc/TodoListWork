import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ButtonComponent, ContainerComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '../../component';
import { ArrowLeft2 } from 'iconsax-react-native';
import COLORS from '../../assets/colors/Colors';
import { FONTFAMILY } from '../../../assets/fonts';
import workAPI from '../../apis/workAPI';

const FocusScreen = ({ navigation, route }: any) => {
  const { data } = route.params;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (data) {
      setName(data.name || '');
      setDescription(data.description || '');
    }
  }, [data]);

  const updateWorkHandle = async () => {
    setIsUpdating(true);
    try {
      const response = await workAPI.HandleWork(`/update-work/${data._id}`, { name, description }, 'put');
      if (response.status === 200) {
        const updatedWork = response.data.work;
        setName('');
        setDescription('');
        navigation.navigate('DetailWorkScreen', { data: updatedWork });
      } else {
        console.log('Cập nhật không thành công', response.data.message);
      }
    } catch (error) {
      console.log('Lỗi khi cập nhật công việc', error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <ContainerComponent>
      <SectionComponent styles={{ marginTop: 40 }}>
        <RowComponent justify='space-between'>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeft2 size={24} color={COLORS.WHITE} />
          </TouchableOpacity>
          <TextComponent
            text="Cập nhật công việc"
            size={25}
            color={COLORS.ORANGE}
            font={FONTFAMILY.poppins_medium} />
          <View></View>
        </RowComponent>
      </SectionComponent>

      <SpaceComponent height={30} />

      <SectionComponent>
        <TextComponent text="Tên công việc:" />
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Tên công việc"
          style={{ borderColor: COLORS.HEX_LIGHT_GREY, borderWidth: 1, padding: 10, borderRadius: 16, color: COLORS.HEX_LIGHT_GREY }}
        />
      </SectionComponent>

      <SectionComponent>
        <TextComponent text="Mô tả công việc:" />
        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="Mô tả công việc"
          style={{ borderColor: COLORS.HEX_LIGHT_GREY, borderWidth: 1, padding: 10, borderRadius:16, height: 150, textAlignVertical: 'top', color: COLORS.HEX_LIGHT_GREY }}
          multiline
        />
      </SectionComponent>

      <SpaceComponent height={30} />

      <SectionComponent>
        <ButtonComponent
          text="Cập nhật"
          onPress={updateWorkHandle}
          disable={isUpdating}
          styles={{ backgroundColor: COLORS.ORANGE }}
        />
      </SectionComponent>
    </ContainerComponent>
  )
}

export default FocusScreen;