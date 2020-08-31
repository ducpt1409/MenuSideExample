import * as React from 'react'
import { Button, View, Text } from 'react-native'
import { NavigationContainer, DrawerActions } from '@react-navigation/native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Button title='Open Drawer' onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer()) }}></Button>
    </View >
  )
}
function Notifications({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text>Notification Screen</Text>
      <Button title='Open Drawer' onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer()) }}></Button>
    </View >
  )
}

function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label='Close Drawer' onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer)} />
    </DrawerContentScrollView>
  )
}

const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name='Home' component={Home} />
      <Drawer.Screen name='Notifications' component={Notifications} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer></MyDrawer>
    </NavigationContainer>
  )
}
