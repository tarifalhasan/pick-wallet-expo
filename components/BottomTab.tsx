import React from "react";
import { Text, View } from "react-native";

const BottomTab = () => {
  return (
    <View
      style={{
        top: "90%",
      }}
      className=" absolute    w-full  left-0 right-0 bg-white h-14"
    >
      <Text className=" text-secondary">BottomTab</Text>
    </View>
  );
};

export default BottomTab;
