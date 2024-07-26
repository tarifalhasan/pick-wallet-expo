import useResponsive from "@/hooks/useResponsive";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const Locations = () => {
  const { hp, wp } = useResponsive();
  const locationsData = [
    {
      title: "True Fine Coffee",
      subTitle: "Palas Campus, Str Sfantul Andrei...",
      logoUrl: require("@/assets/images/true-fine.png"),
    },
    {
      title: "True Fine Coffee",
      subTitle: "Palas Campus, Str Sfantul Andrei...",
      logoUrl: require("@/assets/images/true-fine.png"),
    },
    {
      title: "True Fine Coffee",
      subTitle: "Palas Campus, Str Sfantul Andrei...",
      logoUrl: require("@/assets/images/true-fine.png"),
    },
    {
      title: "True Fine Coffee",
      subTitle: "Palas Campus, Str Sfantul Andrei...",
      logoUrl: require("@/assets/images/true-fine.png"),
    },
    {
      title: "True Fine Coffee",
      subTitle: "Palas Campus, Str Sfantul Andrei...",
      logoUrl: require("@/assets/images/true-fine.png"),
    },
    {
      title: "True Fine Coffee",
      subTitle: "Palas Campus, Str Sfantul Andrei...",
      logoUrl: require("@/assets/images/true-fine.png"),
    },
  ];
  return (
    <View
      style={{
        paddingHorizontal: wp(4),
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
      {/* <View className=" gap-6">
        {locationsData.map((location, index) => (
          <View
            style={{
              backgroundColor: "rgba(235, 234, 235, 0.60)",
            }}
            className=" p-6 rounded-lg  gap-3"
            key={index}
          >
            <Image
              source={location.logoUrl}
              style={{
                width: hp(7),
                height: hp(7),
              }}
            />
          </View>
        ))}
      </View> */}
      <FlatList
        data={locationsData}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "rgba(235, 234, 235, 0.60)",
            }}
            className=" flex-row items-center p-6 rounded-lg  gap-3"
          >
            <Image
              source={item.logoUrl}
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
                {item.title}
              </Text>
              <Text
                style={{
                  fontSize: RFValue(13),
                }}
                className=" font-normal  text-skin-light_black"
              >
                {item.subTitle}
              </Text>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          marginBottom: hp(12),
        }}
        ItemSeparatorComponent={() => <View style={{ height: hp(2) }} />}
      />
    </View>
  );
};

export default Locations;
