import useResponsive from "@/hooks/useResponsive";
import { Plus } from "lucide-react-native";
import React, { useState } from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import AnimatedDotsCarousel from "react-native-animated-dots-carousel";

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

  const handleIndex = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <View>
      <Carousel
        pagingEnabled={true}
        loop
        width={width}
        height={width / 1.6}
        autoPlay={true}
        // mode="parallax"
        style={{
          width: "100%",
        }}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        autoPlayInterval={10000}
        snapEnabled={true}
        data={StampsData}
        scrollAnimationDuration={1000}
        onProgressChange={(_, absoluteProgress) => {
          handleIndex(Math.round(absoluteProgress));
        }}
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
      <View className=" flex items-center">
        <AnimatedDotsCarousel
          length={StampsData.length}
          currentIndex={activeIndex}
          maxIndicators={StampsData.length}
          interpolateOpacityAndColor={false}
          activeIndicatorConfig={{
            color: "#615760",
            margin: 3,
            opacity: 1,
            size: 10,
          }}
          inactiveIndicatorConfig={{
            color: "#EBEAEB",
            margin: 3,
            opacity: 1,
            size: 10,
          }}
          decreasingDots={[
            {
              config: { color: "#EBEAEB", margin: 3, opacity: 0.5, size: 6 },
              quantity: 1,
            },
            {
              config: { color: "#F96B2B", margin: 3, opacity: 0.5, size: 4 },
              quantity: 1,
            },
          ]}
        />
      </View>
    </View>
  );
};

export default Stamps;
