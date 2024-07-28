import useResponsive from "@/hooks/useResponsive";
import React, { useState } from "react";
import { Dimensions, Image, Text, View } from "react-native";
import AnimatedDotsCarousel from "react-native-animated-dots-carousel";
import Carousel from "react-native-reanimated-carousel";
import { RFValue } from "react-native-responsive-fontsize";
const EventsCarosel = () => {
  const { hp, wp } = useResponsive();
  const width = Dimensions.get("window").width;

  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndex = (index: number) => {
    setActiveIndex(index);
  };
  const EventsData = [
    {
      title: "Summer Well",
      date: "9 - 11 August 2024",
      rewards: 5,
      matrix: "100-103",
      logoUrl: require("@/assets/images/summerwell.png"),
    },
    {
      title: "True Fine Coffee",
      date: "9 - 11 August 2024",
      rewards: 5,
      matrix: "100-103",
      logoUrl: require("@/assets/images/summerwell.png"),
    },
    {
      title: "True Fine Coffee",
      date: "9 - 11 August 2024",
      rewards: 5,
      matrix: "100-103",
      logoUrl: require("@/assets/images/summerwell.png"),
    },
  ];
  return (
    <>
      <Carousel
        loop
        width={width}
        height={width / 1.9}
        autoPlay={true}
        style={{
          width: "100%",
        }}
        onProgressChange={(_, absoluteProgress) => {
          handleIndex(Math.round(absoluteProgress));
        }}
        autoPlayInterval={10000}
        pagingEnabled={true}
        snapEnabled={true}
        data={EventsData}
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
                  {item.date}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
      <View className=" flex items-center">
        <AnimatedDotsCarousel
          length={EventsData.length}
          currentIndex={activeIndex}
          maxIndicators={EventsData.length}
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
    </>
  );
};

export default EventsCarosel;
