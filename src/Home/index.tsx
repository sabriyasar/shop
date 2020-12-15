import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"

import MyFlow from "./MyFlow"
import MyFavorites from "./MyFavorites"
import TransactionHistory from "./TransactionHistory"
import EditProfile from "./EditProfile"
import Settings from "./Settings"
import MyApi from "./Api/MyApi"

import { HomeRoutes } from "../components/Navigation"
import DrawerContent, { DRAWER_WIDTH } from "./Drawer"

export { assets } from "./Drawer"

const AppDrawer = createDrawerNavigator<HomeRoutes>()

export const HomeNavigator = () => (
	<AppDrawer.Navigator
		drawerContent={DrawerContent}
		drawerStyle={{ width: DRAWER_WIDTH }}
		initialRouteName="MyFlow"
	>
		<AppDrawer.Screen 
			name="MyFlow" 
			component={MyFlow} 
			/>
		<AppDrawer.Screen
			name="MyFavorites"
			component={MyFavorites}
		/>
		<AppDrawer.Screen
			name="TransactionHistory"
			component={TransactionHistory}
		/>
		<AppDrawer.Screen 
			name="EditProfile" 
			component={EditProfile} 
		/>
		<AppDrawer.Screen 
			name="Settings" 
			component={Settings} 
		/>
		<AppDrawer.Screen 
			name="MyApi" 
			component={MyApi} 
		/>
	</AppDrawer.Navigator>
)
