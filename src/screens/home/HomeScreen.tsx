import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import workAPI from '../../apis/workAPI';
import COLORS from '../../assets/colors/Colors';
import { ContainerComponent, RowComponent, SectionComponent, TextComponent } from '../../component';
import CardListWorkComponent from '../../component/CardListWorkComponent';
import { authSelector } from '../../redux/reducers/authReducer';
import data from './../../../node_modules/@mongodb-js/saslprep/dist/code-points-data-browser.d';

const HomeScreen = ({navigation, route} : any) => {
  const user = useSelector(authSelector);
  const dispatch = useDispatch();
  const [work, setWork] = useState<any>([])
  useEffect(() => {
    const getWorkByUserId = async () => {
      try {
        const res = await workAPI.HandleWork(`/get-work-by-id?id_user=${user.id}`)
        setWork(res)
      } catch (error) {
        console.log('lỗi call api', error);
      }
    };
    getWorkByUserId()
  },[work]);

  const WorkDetailHandle = (item : any) => {
    navigation.navigate('DetailWorkScreen', {data:item})
  }

  return (
    <View style={{flex:1}}>
      <View >
        <SectionComponent styles={{ marginTop: 40 }}>
          <RowComponent justify='space-between'>
            <RowComponent>
              <TextComponent text="Hi, " size={18} color={COLORS.HEX_LIGHT_GRAY} />
              <TextComponent text={user.name ? user.name : user.email} title size={18} color={COLORS.HEX_LIGHT_GRAY} />
            </RowComponent>
            {user.photo ? (
              <Image source={{ uri: user.photo }} style={[styles.avatar]} />
            ) : (
              <View
                style={[styles.avatar, { backgroundColor: COLORS.HEX_LIGHT_GRAY }]}>
                <TextComponent
                  title
                  size={22}
                  color={COLORS.HEX_LIGHT_GRAY}
                  text={
                    user.name
                      ? user.name
                        .split(' ')
                      [user.name.split(' ').length - 1].substring(0, 1)
                      : ''
                  }
                />
              </View>
            )}
          </RowComponent>
        </SectionComponent>
      </View>
      <SectionComponent>
        <FlatList
          data={work}
          keyExtractor={(item) => item._id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom:100}}
          renderItem={({ item }) => (
            <CardListWorkComponent
              onPress={()=>WorkDetailHandle(item)}
              name={item.name}
              time={moment(item.date_work).format("HH:MM")}
              description={item.description}
              date={moment(item.date_work).format("DD/MM/YYYY")}
              isSuccess={item.success}
              idWork={item._id}
            />)} />
      </SectionComponent>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingVertical: Platform.OS === 'android' ? StatusBar.currentHeight : 48,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

})