import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import FiltersNavigator from './FiltersNavigator';
import FavoritesNavigator from './FavoritesNavigator';
import TabNavigator from './TabNavigator';
import colors from '../config/colors';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ()=>(
    <NavigationContainer>
        <Drawer.Navigator
            // openByDefault
            drawerContentOptions={{
                activeTintColor:colors.accent,
                labelStyle:{
                    fontWeight:'bold'
                }
            }}
        >
            <Drawer.Screen name='Home' component={TabNavigator} />
            <Drawer.Screen name='Filters' component={FiltersNavigator} />
            <Drawer.Screen name='Favorites' component={FavoritesNavigator} />
        </Drawer.Navigator>
        
    </NavigationContainer>

);

export default DrawerNavigator;
