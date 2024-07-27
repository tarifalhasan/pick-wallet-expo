import useResponsive from "@/hooks/useResponsive";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const BusinessDetails = () => {
  const { id } = useLocalSearchParams();
  const { hp, wp } = useResponsive();
  const router = useRouter();
  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
      <StatusBar style="light" />
      <ImageBackground
        source={require("@/assets/images/banner.png")}
        style={{
          width: "100%",
          // height: hp(36),
          paddingVertical: hp(8),
        }}
      >
        <View
          style={{ paddingHorizontal: wp(4) }}
          className="flex-row items-center gap-4"
        >
          <Pressable
            onPress={() => router.back()}
            className=" active:opacity-35 bg-skin-red p-2 rounded-2xl"
          >
            <Image
              source={require("@/assets/icons/arrow-left.png")}
              style={{
                width: hp(3.5),
                height: hp(3.5),
              }}
            />
          </Pressable>
          <Text
            style={{
              fontSize: RFValue(17),
            }}
            className=" font-bold text-white"
          >
            Back
          </Text>
        </View>
        <View className=" items-center justify-center gap-4">
          <Image
            source={require("@/assets/images/true-fine.png")}
            style={{
              width: hp(15),
              height: hp(15),
              borderRadius: hp(15),
            }}
          />
          <View>
            <Text
              style={{
                fontSize: RFValue(30),
              }}
              className=" text-white font-bold"
            >
              True Fine coffee
            </Text>
            <Text
              style={{
                fontSize: RFValue(14),
              }}
              className=" text-skin-gray font-normal"
            >
              Palas Campus, Str Sfantul Andrei 39a
            </Text>
          </View>
          <View className=" flex-row items-center gap-4">
            <View className=" flex-row items-center gap-2">
              <Image
                source={require("@/assets/icons/crown-24px.png")}
                style={{
                  tintColor: "white",
                  width: hp(3.5),
                  height: hp(3.5),
                }}
              />
              <Text
                style={{
                  fontSize: RFValue(18),
                  color: "white",
                  fontWeight: "700",
                }}
              >
                10
              </Text>
            </View>
            <View className=" flex-row items-center gap-2">
              <Image
                source={require("@/assets/icons/dot-matrix.png")}
                style={{
                  tintColor: "white",
                  width: hp(3),
                  height: hp(3),
                }}
              />
              <Text
                style={{
                  fontSize: RFValue(18),
                  color: "white",
                  fontWeight: "700",
                }}
              >
                103
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default BusinessDetails;
