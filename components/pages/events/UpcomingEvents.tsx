import useResponsive from "@/hooks/useResponsive";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const UpcomingEvents = () => {
  const { hp, wp } = useResponsive();
  const UpcommingEvents = [
    {
      title: "Summer Well",
      date: "9 - 11 August 2024",
      logoUrl: require("@/assets/images/summerwell.png"),
      slug: 1,
    },
    {
      title: "Summer Well",
      date: "9 - 11 August 2024",
      logoUrl: require("@/assets/images/summerwell.png"),
      slug: 2,
    },
    {
      title: "Summer Well",
      date: "9 - 11 August 2024",
      logoUrl: require("@/assets/images/summerwell.png"),
      slug: 3,
    },
    {
      title: "Summer Well",
      date: "9 - 11 August 2024",
      logoUrl: require("@/assets/images/summerwell.png"),
      slug: 4,
    },
    {
      title: "Summer Well",
      date: "9 - 11 August 2024",
      logoUrl: require("@/assets/images/summerwell.png"),
      slug: 4,
    },
    {
      title: "Summer Well",
      date: "9 - 11 August 2024",
      logoUrl: require("@/assets/images/summerwell.png"),
      slug: 5,
    },
  ];
  const router = useRouter();
  return (
    <View
      style={{
        paddingHorizontal: wp(4),
        marginBottom: hp(4),
      }}
      className=" gap-6"
    >
      <View className="flex-row items-center justify-between">
        <Text
          style={{ fontSize: RFValue(23) }}
          className=" text-skin-black font-medium"
        >
          Upcoming events
        </Text>
      </View>
      <View className=" gap-6">
        {UpcommingEvents.map((location, index) => (
          <TouchableOpacity
            onPress={() => router.push(`/events/${location.slug}`)}
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
                {location.date}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default UpcomingEvents;
