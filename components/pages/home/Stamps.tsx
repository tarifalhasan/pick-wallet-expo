import useResponsive from "@/hooks/useResponsive";
import { Plus } from "lucide-react-native";
import React, { useState } from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { RFValue } from "react-native-responsive-fontsize";
const Stamps = () => {
  const { hp, wp } = useResponsive();
  const width = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState(0);

  const StampsData = [
    {
      title: "True Fine Coffee",
      subTitle: "Palas Campus, Str Sfantul Andrei 39a",
      rewards: 5,
      matrix: 103,
      logoUrl: require("@/assets/images/true-fine.png"),
    },
    {
      title: "True Fine Coffee",
      subTitle: "Palas Campus, Str Sfantul Andrei 39a",
      rewards: 5,
      matrix: 103,
      logoUrl: require("@/assets/images/true-fine.png"),
    },
    {
      title: "True Fine Coffee",
      subTitle: "Palas Campus, Str Sfantul Andrei 39a",
      rewards: 5,
      matrix: 103,
      logoUrl: require("@/assets/images/true-fine.png"),
    },
  ];
  return (
    <Carousel
      loop
      width={width}
      height={width / 1.6}
      autoPlay={true}
      style={{
        width: "100%",
      }}
      autoPlayInterval={10000}
      pagingEnabled={true}
      snapEnabled={true}
      data={StampsData}
      scrollAnimationDuration={1000}
      onSnapToItem={(index) => console.log("current index:", index)}
      renderItem={({ item }) => (
        <View
          style={{
            paddingHorizontal: wp(4),
          }}
        >
          <View
            style={{
              paddingHorizontal: wp(4),
              paddingVertical: hp(4),
            }}
            className="  gap-4  bg-skin-green rounded-2xl"
          >
            <View className=" flex-row items-center justify-between">
              <Image
                source={item.logoUrl}
                style={{
                  width: hp(7),
                  height: hp(7),
                }}
              />
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
                    {item.rewards}
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
                    {item.matrix}
                  </Text>
                </View>
              </View>
            </View>
            <View className=" gap-0.5">
              <Text
                style={{ fontSize: RFValue(20) }}
                className=" text-white font-medium"
              >
                {item.title}
              </Text>
              <Text
                style={{ fontSize: RFValue(14) }}
                className=" text-white font-normal"
              >
                {item.subTitle}
              </Text>
            </View>
            <View className=" items-end">
              <TouchableOpacity className=" flex-row items-center gap-2">
                <Plus size={30} className=" text-skin-red" />
                <Text
                  style={{
                    fontSize: RFValue(17),
                  }}
                  className=" text-skin-red font-bold"
                >
                  Add new stamp
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    />
  );
};

export default Stamps;
