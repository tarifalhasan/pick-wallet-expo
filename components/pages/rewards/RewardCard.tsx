import useResponsive from "@/hooks/useResponsive";
import { Check, ShoppingCart } from "lucide-react-native";
import React, { FC } from "react";

import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface CardProps {
  item: {
    name: string;
    status: "claim" | "buy";
    expiresData?: string;
    valability?: string;
  };
  toggleShareModal: () => void;
  toggleModal: () => void;
}

const RewardCard: FC<CardProps> = ({ item, toggleShareModal, toggleModal }) => {
  const { hp, wp } = useResponsive();
  return (
    <View
      style={{
        backgroundColor: "rgba(235, 234, 235, 0.60)",
        paddingHorizontal: wp(6),
        paddingVertical: hp(2),
      }}
      className=" rounded-xl"
    >
      <View className=" flex-row justify-end">
        <Pressable onPress={toggleShareModal}>
          <Image
            style={{ width: hp(4), height: hp(4) }}
            source={require("@/assets/icons/share-arrow.png")}
          />
        </Pressable>
      </View>
      <View>
        <Text
          style={{ fontSize: RFValue(28) }}
          className=" font-bold text-skin-black"
        >
          {item.name}
        </Text>
        {item.status === "claim" ? (
          <Text
            style={{ fontSize: RFValue(13) }}
            className=" font-normal text-skin-light_black"
          >
            Expires {item.expiresData}
          </Text>
        ) : (
          <Text
            style={{ fontSize: RFValue(13) }}
            className=" font-normal text-skin-light_black"
          >
            Valability : {item.valability}
          </Text>
        )}
      </View>
      <View className="flex-row justify-end">
        {item.status === "claim" ? (
          <TouchableOpacity
            onPress={toggleModal}
            className=" flex-row items-center gap-2"
          >
            <Text
              style={{ fontSize: RFValue(17) }}
              className=" font-bold text-skin-red"
            >
              Claim reward
            </Text>
            <Check size={25} color={"#F15152"} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={toggleModal}
            className=" flex-row items-center gap-2"
          >
            <Text
              style={{ fontSize: RFValue(17) }}
              className=" font-bold text-skin-red"
            >
              Buy reward
            </Text>
            <ShoppingCart size={25} color={"#F15152"} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default RewardCard;
