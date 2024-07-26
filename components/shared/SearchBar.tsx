import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

import { useColorScheme } from "nativewind";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Input } from "../ui/input";
const SearchBar = () => {
  const { colorScheme } = useColorScheme();
  return (
    <View
      style={{
        backgroundColor:
          colorScheme === "dark" ? "rgba(255, 255, 255, 0.08)" : "#fff",
        marginHorizontal: wp(5),
      }}
      className="shadow-2xl  rounded-full py-2 px-4  flex-row items-center gap-"
    >
      <Ionicons
        name="search-outline"
        size={24}
        color={colorScheme === "dark" ? "#5F6674" : "#5F6674"}
      />
      <Input className=" bg-transparent border-0 flex-1" />
    </View>
  );
};

export default SearchBar;
