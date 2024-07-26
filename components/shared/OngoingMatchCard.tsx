import { EvilIcons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import React, { FC } from "react";
import { View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Text } from "../ui/text";
type Team = {
  name: string;
  logo: string;
  avatar1: string;
  avatar2: string;
};

type Match = {
  date: string;
  duration: string;
  location: string;
  team1: Team;
  team2: Team;
};

interface OngoingMatchCardProps {
  match: Match;
  width?: any;
  margin?: any;
}

const OngoingMatchCard: FC<OngoingMatchCardProps> = ({
  match,
  width,
  margin,
}) => {
  const { colorScheme } = useColorScheme();
  return (
    <View
      style={{
        backgroundColor: colorScheme === "dark" ? "#1C4C4E" : "#FFF",
        marginVertical: margin ? margin : hp(4),
        width: width ? width : wp(80),
      }}
      className="rounded-[12px] p-3 shadow-lg gap-3"
    >
      <View className=" pb-3 border-b border-border-d flex-row items-center gap-3">
        <View>
          <Avatar className=" w-10 h-10 rounded-sm" alt="dfdfdfd">
            <AvatarImage src={match.team1.logo}></AvatarImage>
          </Avatar>
        </View>
        <View>
          <Text className=" text-sm font-semibold">{match.date}</Text>
          <View className="flex-row items-center gap-1">
            <View className=" flex-row items-center">
              <EvilIcons name="location" size={24} color="#28B67E" />
              <Text className=" text-sm font-normal text-s3">
                {match.duration}
              </Text>
            </View>
            <Text className="  text-sm font-normal text-[#5F6674]">
              {match.location.slice(0, 15)}...
            </Text>
          </View>
        </View>
      </View>
      <View className=" flex-row items-center justify-between">
        <View className=" flex-row items-center gap-2">
          <View className=" flex-row items-center">
            <Avatar
              style={{
                borderColor: colorScheme === "dark" ? "#1C4C4E" : "white",
              }}
              className=" border-2"
              alt="tarif"
            >
              <AvatarImage src={match.team1.avatar1} />
            </Avatar>
            <View className=" -ml-4">
              <Avatar
                style={{
                  borderColor: colorScheme === "dark" ? "#1C4C4E" : "white",
                }}
                className=" border-2 rounded-full"
                alt="tarif"
              >
                <AvatarImage src={match.team1.avatar2} />
              </Avatar>
            </View>
          </View>
          <Text className=" text-sm  font-semibold">{match.team1.name}</Text>
        </View>
        <View className=" bg-border-d w-[2px] h-6 " />
        <View className=" flex-row items-center gap-2">
          <View className=" flex-row items-center">
            <Avatar
              style={{
                borderColor: colorScheme === "dark" ? "#1C4C4E" : "white",
              }}
              className=" border-2"
              alt="tarif"
            >
              <AvatarImage src={match.team2.avatar1} />
            </Avatar>
            <View className=" -ml-4">
              <Avatar
                style={{
                  borderColor: colorScheme === "dark" ? "#1C4C4E" : "white",
                }}
                className=" border-2 rounded-full"
                alt="tarif"
              >
                <AvatarImage src={match.team2.avatar2} />
              </Avatar>
            </View>
          </View>
          <Text className=" text-sm  font-semibold">{match.team1.name}</Text>
        </View>
      </View>
    </View>
  );
};

export default OngoingMatchCard;
