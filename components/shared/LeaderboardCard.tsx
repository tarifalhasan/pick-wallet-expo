import { useColorScheme } from "nativewind";
import React, { FC } from "react";
import { Image, View } from "react-native";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Text } from "../ui/text";

interface LeaderboardCardProps {
  data: {
    level: 1 | 2 | 3;
    avatar: string;
    name: string;
    total_matches: number;
    points: number;
  };
}

const level1Img = require("~/assets/images/level1.png");
const level2Img = require("~/assets/images/level2.png");
const level3Img = require("~/assets/images/level3.png");

const LeaderboardCard: FC<LeaderboardCardProps> = ({ data }) => {
  const { colorScheme } = useColorScheme();
  const { level, avatar, name, total_matches, points } = data;
  return (
    <View
      style={{
        backgroundColor: colorScheme === "dark" ? "#1C4C4E" : "#FFF",
        width: "100%",
      }}
      className="rounded-[12px]  flex-row items-center justify-between p-3 shadow-lg gap-3"
    >
      <View className=" flex-row items-center gap-2">
        <Image
          width={32}
          height={32}
          source={level === 1 ? level1Img : level === 2 ? level2Img : level3Img}
        />
        <Avatar alt={name}>
          <AvatarImage src={avatar}></AvatarImage>
        </Avatar>
        <View>
          <Text className=" text-sm font-semibold leading-5">{name}</Text>
          <Text className="text-sm text-Neutral-Grey-01 font-normal">
            {total_matches} matches
          </Text>
        </View>
      </View>
      <Text className="text-sm text-Neutral-Grey-01 font-normal">
        {points} points
      </Text>
    </View>
  );
};

export default LeaderboardCard;
