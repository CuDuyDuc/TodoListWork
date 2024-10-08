import React, { ReactNode } from 'react';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import { ScrollView } from "react-native-virtualized-view";
import { globalStyle } from "../styles/globalStyle";


interface Props {
    isImageBackground?: boolean,
    isScroll?: boolean,
    title?: string,
    children: ReactNode
}

const ContainerComponent = (props: Props) => {
    const {isImageBackground, isScroll, title, children} = props

    const returnContainer = isScroll ? <ScrollView>{children}</ScrollView> : <View>{children}</View>
    
    return  isImageBackground ? (<ImageBackground>{returnContainer}</ImageBackground>) : (
        <SafeAreaView style = {[globalStyle.container]}>
            <View>
                {returnContainer}
            </View>
        </SafeAreaView>
    )
}

export default ContainerComponent