import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { authSelector } from '../redux/reducers/authReducer';
import { ButtonComponent, ContainerComponent, InputComponent, RowComponent, SectionComponent } from '../component';
import DatePicker from 'react-native-date-picker';
import COLORS from '../assets/colors/Colors';
import { FONTFAMILY } from '../../assets/fonts';
import { globalStyle } from '../styles/globalStyle';
import { Calendar, Flag, Send } from 'iconsax-react-native';
import workAPI from '../apis/workAPI';

const AddNewWork = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [isName, setIsName] = useState('');
  const [isdescription, isSetDescription] = useState('');
  const user = useSelector(authSelector);

  const AddNewWork = async () => {
    try {
      await workAPI.HandleWork('/add-work', { id_user: user.id, name: isName, description: isdescription, date_work: date }, 'post')
      setIsName('')
      isSetDescription('')
    } catch (error) {
      console.log("Add error", error);
    }
  }
  return (
    <ContainerComponent>
      <SectionComponent styles={{ marginTop: 40 }}>
        <InputComponent
          value={isName}
          onChange={val => setIsName(val)}
          placeholder='Nhập công việc'
          allowClear />
        <TextInput
          style={[styles.input, globalStyle.text]}
          multiline={true}
          placeholder="Nhập nội dung ở đây..."
          value={isdescription}
          onChangeText={isSetDescription}
          placeholderTextColor={COLORS.HEX_LIGHT_GREY}
        />
      </SectionComponent>
      <SectionComponent>
        <RowComponent justify='space-between'>
          <RowComponent>
            <TouchableOpacity onPress={() => setOpen(true)}>
              <Calendar size={35} variant='Bold' color={COLORS.ORANGE} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Flag size={35} variant='Bold' color={COLORS.ORANGE} />
            </TouchableOpacity>
          </RowComponent>
          <TouchableOpacity onPress={AddNewWork}>
            <Send size={35} variant='Bold' color={COLORS.ORANGE} />
          </TouchableOpacity>
        </RowComponent>
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </SectionComponent>
    </ContainerComponent>
  )
}

export default AddNewWork

const styles = StyleSheet.create({
  input: {
    color: COLORS.HEX_LIGHT_GRAY,
    height: 150,
    borderColor: COLORS.HEX_LIGHT_GREY,
    borderWidth: 1,
    padding: 10,
    borderRadius: 16,
    textAlignVertical: 'top', // Đặt văn bản bắt đầu từ phía trên cùng của TextInput
  },
})