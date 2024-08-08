import { View, Text } from 'react-native'
import React from 'react'
import CardListWorkComponent from '../../component/CardListWorkComponent';
import { ContainerComponent, SectionComponent } from '../../component';

const HomeScreen = () => {

  return (
    <ContainerComponent>
      <SectionComponent styles = {{marginTop: 40}}>
        <CardListWorkComponent
          title="Masyl Website Project"
          time="08.30 PM"
          date="Mon, 19 Jul 2022"
          content="1gjsdhskdjasjakdhwihewkdsjdksdjadjosdwkdskjskdjskdssjakjhdgsdjhsdhskfhkfkdjfkfjdjhskdjsldjslkdlsdklsjlsfj"
        />
      </SectionComponent>
    </ContainerComponent>

  )
}

export default HomeScreen