import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useResponsive from "@/hooks/useResponsive";
import { useRouter } from "expo-router";
import { LogOut } from "lucide-react-native";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const Profile = () => {
  const { wp, hp } = useResponsive();
  const router = useRouter();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={{
        paddingTop: hp(8),
      }}
    >
      <View
        style={{
          paddingHorizontal: wp(4),
        }}
      >
        <Text
          style={{
            fontSize: RFValue(24),
          }}
          className=" text-skin-black font-bold"
        >
          Profile
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: wp(4),
          paddingVertical: hp(2),
        }}
      >
        <View
          style={{
            paddingHorizontal: wp(4),
            paddingVertical: hp(3),
          }}
          className=" rounded-xl bg-skin-red flex-row items-center gap-3"
        >
          <Avatar className=" w-16 h-16" alt="tarif">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <View className=" ">
            <Text
              className=" text-white font-medium"
              style={{ fontSize: RFValue(20) }}
            >
              John Wick
            </Text>
            <Text
              className=" -mt-1 text-white font-normal"
              style={{ fontSize: RFValue(14) }}
            >
              Signed in with Google
            </Text>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={{
            paddingHorizontal: wp(4),
            paddingVertical: hp(2),
          }}
          className=" flex-row items-center gap-2 border-b border-[#EBEAEB]"
        >
          <Image
            style={{
              width: hp(4),
              height: hp(4),
            }}
            source={require("@/assets/icons/question-marK.png")}
          />
          <Text
            style={{ fontSize: RFValue(20) }}
            className=" text-skin-black font-medium"
          >
            Help
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: wp(4),
            paddingVertical: hp(2),
          }}
          className=" flex-row items-center gap-2 border-b border-[#EBEAEB]"
        >
          <Image
            style={{
              width: hp(4),
              height: hp(4),
            }}
            source={require("@/assets/icons/academic-book-24px.png")}
          />
          <Text
            style={{ fontSize: RFValue(20) }}
            className=" text-skin-black font-medium"
          >
            Privacy Policy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: wp(4),
            paddingVertical: hp(2),
          }}
          className=" flex-row items-center gap-2 border-b border-[#EBEAEB]"
        >
          <Image
            style={{
              width: hp(4),
              height: hp(4),
            }}
            source={require("@/assets/icons/clarus-the-dogcow-24px.png")}
          />
          <Text
            style={{ fontSize: RFValue(20) }}
            className=" text-skin-black font-medium"
          >
            GDPR
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/login")}
          style={{
            paddingHorizontal: wp(4),
            paddingVertical: hp(2),
          }}
          className=" flex-row items-center gap-2 border-b border-[#EBEAEB]"
        >
          <LogOut size={30} color={"#3A2E39"} />
          <Text
            style={{ fontSize: RFValue(20) }}
            className=" text-skin-black font-medium"
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;
