import { useColorScheme } from "nativewind";
import React, { FC } from "react";
import { View } from "react-native";
import { Message } from "~/types";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Text } from "../ui/text";

const ChartCard: FC<Message> = ({ id, sender, content, timestamp, status }) => {
  const { colorScheme } = useColorScheme();

  return (
    <View
      style={{
        width: "100%",
      }}
      className="rounded-[12px]  flex-row items-center justify-between p-3 gap-3"
    >
      <View>
        <Avatar className=" w-12 h-12" alt={sender.name}>
          <AvatarImage src={sender.avatar} />
        </Avatar>
      </View>
      <View className=" border-b border-border-d pb-4 flex-1">
        <View className=" flex-row items-center justify-between">
          <View>
            <Text className="text-base font-semibold">{sender.name}</Text>
          </View>
          <View>
            <Text className="">{timestamp}</Text>
          </View>
        </View>
        <View className=" flex-row items-center  justify-between gap-2">
          <Text className=" text-sm font-normal ">{content}</Text>
          {status === "delivered" && (
            <View className=" w-6 h-5 items-center justify-center bg-green-500 rounded-full">
              <Text className=" text-xs text-white font-bold">1</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default ChartCard;
