import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image, View } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { useColorScheme } from "~/lib/useColorScheme";
import { Text } from "../ui/text";

const MapsCard = () => {
  const { colorScheme } = useColorScheme();
  return (
    <View
      style={{
        paddingVertical: heightPercentageToDP(2),
        paddingHorizontal: widthPercentageToDP(5),
        backgroundColor: colorScheme === "dark" ? "#1C4C4E" : "#FFF",
        marginVertical: heightPercentageToDP(1.5),
      }}
      className=" shadow-xl  rounded-xl"
    >
      <View className=" flex-1 flex-row items-center  gap-3">
        <View>
          <Image
            className=" w-12 h-12 rounded-lg"
            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1380&t=st=1716400067~exp=1716400667~hmac=6f0246b061553258535846f9be30f61267e12c974bebc4aeb3e1b27e27634bb1"
          />
        </View>
        <View className=" flex-1">
          <Text
            style={{
              fontSize: heightPercentageToDP(2.2),
            }}
            className=" font-semibold"
          >
            William Padel Court
          </Text>
          <View className=" flex-row items-center gap-2">
            <View className=" flex-row items-center gap-2">
              <AntDesign name="star" size={20} color="#FF9C41" />
              <Text className=" text-sm font-semibold">4.5</Text>
            </View>
            <Text
              style={{
                fontSize: heightPercentageToDP(1.5),
              }}
              className=" font-normal"
            >
              Dedicated • Indoor
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MapsCard;
