import useResponsive from "@/hooks/useResponsive";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const Locations = () => {
  const { hp, wp } = useResponsive();
  const locationsData = [
    {
      title: "True Fine Coffee",
      subTitle: "Palas Campus, Str Sfantul Andrei...",
      logoUrl: require("@/assets/images/true-fine.png"),
      slug: 1,
    },
    {
      title: "True Fine Coffee",
      subTitle: "Palas Campus, Str Sfantul Andrei...",
      logoUrl: require("@/assets/images/true-fine.png"),
      slug: 2,
    },
    {
      title: "True Fine Coffee",
      subTitle: "Palas Campus, Str Sfantul Andrei...",
      logoUrl: require("@/assets/images/true-fine.png"),
      slug: 3,
    },
    {
      title: "True Fine Coffee",
      subTitle: "Palas Campus, Str Sfantul Andrei...",
      logoUrl: require("@/assets/images/true-fine.png"),
      slug: 4,
    },
    {
      title: "True Fine Coffee",
      subTitle: "Palas Campus, Str Sfantul Andrei...",
      logoUrl: require("@/assets/images/true-fine.png"),
      slug: 4,
    },
    {
      title: "True Fine Coffee",
      subTitle: "Palas Campus, Str Sfantul Andrei...",
      logoUrl: require("@/assets/images/true-fine.png"),
      slug: 5,
    },
  ];
  const router = useRouter();
  return (
    <View
      style={{
        paddingHorizontal: wp(4),
        marginBottom: hp(10),
      }}
      className=" gap-6"
    >
      <View className="flex-row items-center justify-between">
        <Text
          style={{ fontSize: RFValue(23) }}
          className=" text-skin-black font-medium"
        >
          All Locations
        </Text>
      </View>
      <View className=" gap-6">
        {locationsData.map((location, index) => (
          <TouchableOpacity
            onPress={() => router.push(`/business/${location.slug}`)}
            style={{
              backgroundColor: "rgba(235, 234, 235, 0.60)",
            }}
            className=" p-6 flex-row items-center rounded-lg  gap-3"
            key={index}
          >
            <Image
              source={location.logoUrl}
              style={{
                width: hp(7),
                height: hp(7),
              }}
            />
            <View>
              <Text
                style={{
                  fontSize: RFValue(19),
                }}
                className=" font-medium  text-skin-black"
              >
                {location.title}
              </Text>
              <Text
                style={{
                  fontSize: RFValue(13),
                }}
                className=" font-normal  text-skin-light_black"
              >
                {location.subTitle}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Locations;
