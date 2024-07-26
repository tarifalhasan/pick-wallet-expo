import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import React, { FC } from "react";
import { View } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Text } from "../ui/text";
type Team = {
  name: string;
  logo: string;
  avatar1: string;
  avatar2: string;
};

type Score = {
  team1: number;
  team2: number;
};
type Match = {
  date: string;
  duration: string;
  location: string;
  team1: Team;
  team2: Team;
  score: Score;
};

interface MatchHistoryCardProps {
  match: Match;
}

const MatchHistoryCard: FC<MatchHistoryCardProps> = ({ match }) => {
  const { colorScheme } = useColorScheme();
  return (
    <View
      style={{
        backgroundColor: colorScheme === "dark" ? "#1C4C4E" : "#FFF",
        marginVertical: heightPercentageToDP(2),
        width: "100%",
      }}
      className="rounded-[12px] p-3 shadow-lg gap-3"
    >
      <View className=" pb-3 border-b border-border-d  gap-3">
        <View className=" flex-row items-center justify-between">
          <Text className=" text-xl font-semibold">{match.date}</Text>
          <Button
            variant={"success"}
            className=" flex-row h-6 rounded-full gap-1"
          >
            <Ionicons name="trophy" size={24} color="white" />
            <Text className=" text-xs font-semibold text-white">Win</Text>
          </Button>
        </View>
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
      <View className=" gap-1">
        <View className=" w-full flex-row items-center  justify-between">
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
          <Text className="  text-center text-black  font-semibold">
            {match.team1.name}
          </Text>
          <View>
            <View className=" bg-green-400 flex-row items-center justify-center rounded-full w-8 h-8 text-center ">
              <Text className="  text-center  text-white  font-semibold">
                {match.score.team1}
              </Text>
            </View>
          </View>
        </View>
        <View className=" w-full flex-row items-center  justify-between">
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
          <Text className="  text-center text-black  font-semibold">
            {match.team2.name}
          </Text>
          <View>
            <View className="  bg-red-500 flex-row items-center justify-center rounded-full w-8 h-8 text-center ">
              <Text className="  text-center  text-white  font-semibold">
                {match.score.team1}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MatchHistoryCard;
