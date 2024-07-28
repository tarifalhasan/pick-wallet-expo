import EventsCarosel from "@/components/pages/events/EventsCarosel";
import UpcomingEvents from "@/components/pages/events/UpcomingEvents";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useResponsive from "@/hooks/useResponsive";
import { Search } from "lucide-react-native";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const Events = () => {
  const { hp, wp } = useResponsive();
  const width = Dimensions.get("window").width;

  const [filterMenuOpen, setFilterMenuOpen] = useState(false);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: hp(6) }}
      className="flex-1  bg-white"
    >
      <View
        style={{
          paddingHorizontal: wp(4),
          paddingTop: hp(2),
        }}
        className="flex-row  items-center justify-between gap-4"
      >
        <View className="flex-1 rounded-lg border-2 border-skin-gray px-4  h-14 flex-row items-center gap-2">
          <Search size={20} color={"#3A2E39"} />
          <TextInput
            className=" bg-transparent  border-transparent focus:outline-none p-0 m-0 py-0 text-lg text-skin-dark_gray flex-1"
            placeholder="Search for events..."
          />
        </View>
        <DropdownMenu open={filterMenuOpen} onOpenChange={setFilterMenuOpen}>
          <DropdownMenuTrigger asChild>
            <TouchableOpacity
              className=" h-14 items-center justify-center bg-skin-red px-4 rounded-[34px]"
              onPress={() => setFilterMenuOpen(!filterMenuOpen)}
            >
              <Image
                source={require("@/assets/icons/filters.png")}
                style={{
                  width: hp(3),
                  height: hp(3),
                }}
              />
            </TouchableOpacity>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Text>Filter 1</Text>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Text>Filter 2</Text>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Text>Filter 3</Text>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </View>
      <View
        style={{
          paddingHorizontal: wp(4),
          paddingVertical: hp(2.5),
        }}
        className="flex-row  items-center justify-between"
      >
        <Text
          className=" text-skin-black font-medium"
          style={{ fontSize: RFValue(20) }}
        >
          Happening now
        </Text>
        <TouchableOpacity>
          <Image
            source={require("@/assets/icons/arrow-right.png")}
            style={{
              width: hp(4),
              height: hp(3),
            }}
          />
        </TouchableOpacity>
      </View>
      {/* EventsCarosel */}
      <EventsCarosel />
      {/* UpcomingEvents */}
      <UpcomingEvents />
    </ScrollView>
  );
};

export default Events;
