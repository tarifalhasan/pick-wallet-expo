import Locations from "@/components/pages/home/Locations";
import Stamps from "@/components/pages/home/Stamps";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useResponsive from "@/hooks/useResponsive";
import { BellRing, Search } from "lucide-react-native";
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

const Home = () => {
  const { hp, wp } = useResponsive();
  const width = Dimensions.get("window").width;

  const [filterMenuOpen, setFilterMenuOpen] = useState(false);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ paddingTop: hp(6) }}
      className="flex-1  bg-white"
    >
      <View
        style={{
          paddingHorizontal: wp(4),
        }}
        className=" flex-row items-center justify-between"
      >
        <Text
          style={{
            fontSize: RFValue(26),
          }}
          className="  font-bold text-skin-black"
        >
          Hi Johanna 🤯
        </Text>
        <>
          <BellRing size={26} color={"#F15152"} />
        </>
      </View>
      <View
        style={{
          paddingHorizontal: wp(4),
        }}
        className="flex-row py-6 items-center justify-between gap-4"
      >
        <View className="flex-1 rounded-lg border-2 border-skin-gray px-4  h-14 flex-row items-center gap-2">
          <Search size={20} color={"#3A2E39"} />
          <TextInput
            className=" bg-transparent  border-transparent focus:outline-none p-0 m-0 py-0 text-lg text-skin-dark_gray flex-1"
            placeholder="Search for locations"
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
        }}
        className="flex-row pb-5 items-center justify-between"
      >
        <Text
          className=" text-skin-black font-medium"
          style={{ fontSize: RFValue(20) }}
        >
          Around you
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
      {/* stamps */}
      <Stamps />
      {/* Locations */}
      <Locations />
    </ScrollView>
  );
};

export default Home;
