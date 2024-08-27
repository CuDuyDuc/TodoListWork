import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import workAPI from '../../apis/workAPI'
import { SectionComponent } from '../../component'
import CardListWorkComponent from '../../component/CardListWorkComponent'
import { authSelector } from '../../redux/reducers/authReducer'

const SuccessWork = ({navigation}: any) => {

  const user = useSelector(authSelector);

  const [successWork, setSuccessWork] = useState<any>('')

  useEffect(() => {
    const getWorkSuccessById = async () => {
      try {
        const SetWorkSuccessById = workAPI.HandleWork(`/success-work/:id_user${user.id}`);
        setSuccessWork(SetWorkSuccessById)
      } catch (error) {
        console.log(error);
      }
    } 
    getWorkSuccessById()
  }, [successWork]);

  const WorkDetailHandle = (item : any) => {
    navigation.navigate('DetailWorkScreen', {data:item})
  }

  return (
    <SectionComponent styles={{marginTop: 5}}>
        <FlatList
          data={successWork}
          keyExtractor={(item) => item._id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom:200}}
          renderItem={({ item }) => (
            <CardListWorkComponent
              onPress={()=>WorkDetailHandle(item)}
              name={item.name}
              time={moment(item.date_work).format("HH:mm")}
              description={item.description}
              date={moment(item.date_work).format("DD/MM/YYYY")}
              isSuccess={item.success}
              idWork={item._id}
            />)} />
      </SectionComponent>
  )
}

export default SuccessWork