import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { ReactNode } from 'react';
import { AddNewWork, CalendarScreen, FocusScreen, HomeScreen, ProFileScreen } from '../screens';
import COLORS from '../assets/colors/Colors';
import { Add, AddSquare, Calendar, Clock, Home2, Profile } from 'iconsax-react-native';
import { TextComponent } from '../component';
import { FONTFAMILY } from '../../assets/fonts';
import { View } from 'react-native';
import { globalStyle } from '../styles/globalStyle';


const TabNavigator = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.WHITE,
            },
            tabBarIcon: ({ focused, color, size }) => {
                let icon: ReactNode;
                color = focused ? COLORS.ORANGE : COLORS.HEX_LIGHT_GREY

                switch (route.name) {
                    case 'Home':
                        icon = <Home2 size={size} color={color} variant="Bold" />;
                        break;
                    case 'Calendar':
                        icon = <Calendar size={size} color={color} variant="Bold" />
                        break;
                    case 'Focuse':
                        icon = <Clock size={size} color={color} variant="Bold" />
                        break;
                    case 'Profile':
                        icon = <Profile size={size} color={color} variant="Bold" />
                        break;
                    case 'AddWork':
                        icon = <View style = {[globalStyle.shadow,{
                            width: 65, 
                            height: 65, 
                            borderRadius: 100, 
                            backgroundColor: COLORS.ORANGE, 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            marginTop: -30,
                            marginBottom: 20
                            }]}>
                            <AddSquare size={30} color={COLORS.WHITE} variant='Bold'/>
                        </View>
                        break;

                }
                return icon;
            },
            tabBarIconStyle: {
                marginTop: 4
            },
            tabBarLabel({ focused }) {
                return route.name === 'AddWork' ? null : (<TextComponent text={route.name} flex={0} size={12} color={focused ? COLORS.ORANGE : COLORS.HEX_LIGHT_GREY} font={FONTFAMILY.poppins_bold} />);
            },
        })}>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Calendar' component={CalendarScreen} />
            <Tab.Screen name='AddWork' component={AddNewWork} />
            <Tab.Screen name='Focuse' component={FocusScreen} />
            <Tab.Screen name='Profile' component={ProFileScreen} />
        </Tab.Navigator>
    )
}

export default TabNavigator