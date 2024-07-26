import { Text } from "@/components/ui/text";
import useResponsive from "@/hooks/useResponsive";
import { Tabs } from "expo-router";
import { useColorScheme } from "nativewind";
import React, { ReactNode } from "react";
import { Image, View } from "react-native";

export default function TabLayout({ children }: { children: ReactNode }) {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const { hp } = useResponsive();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#28B67E",
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          alignItems: "center",
          justifyContent: "center",
          elevation: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <View className=" items-center d">
              <Image
                source={require("@/assets/icons/home.png")}
                style={{
                  width: hp(3.5),
                  height: hp(3.5),
                  objectFit: "cover",
                  tintColor: focused ? "#F15152" : "#615760",
                }}
              />
              <Text
                className=" text-sm font-normal  text-skin-light_black"
                style={{
                  color: focused ? "#F15152" : "#615760",
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="rewards"
        options={{
          title: "Rewards",
          tabBarIcon: ({ focused }) => (
            <View className=" items-center d">
              <Image
                source={require("@/assets/icons/crown-24px.png")}
                style={{
                  width: hp(3.5),
                  height: hp(3.5),
                  objectFit: "cover",
                  tintColor: focused ? "#F15152" : "#615760",
                }}
              />
              <Text
                className=" text-sm font-normal  text-skin-light_black"
                style={{
                  color: focused ? "#F15152" : "#615760",
                }}
              >
                Rewards
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="events"
        options={{
          title: "Enents",
          tabBarIcon: ({ focused }) => (
            <View className=" items-center d">
              <Image
                source={require("@/assets/icons/stack-horizontal-24px.png")}
                style={{
                  width: hp(3.5),
                  height: hp(3.5),
                  objectFit: "cover",
                  tintColor: focused ? "#F15152" : "#615760",
                }}
              />
              <Text
                className=" text-sm font-normal  text-skin-light_black"
                style={{
                  color: focused ? "#F15152" : "#615760",
                }}
              >
                Events
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <View className=" items-center d">
              <Image
                source={require("@/assets/icons/user.png")}
                style={{
                  width: hp(3.5),
                  height: hp(3.5),
                  objectFit: "cover",
                  tintColor: focused ? "#F15152" : "#615760",
                }}
              />
              <Text
                className=" text-sm font-normal  text-skin-light_black"
                style={{
                  color: focused ? "#F15152" : "#615760",
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
