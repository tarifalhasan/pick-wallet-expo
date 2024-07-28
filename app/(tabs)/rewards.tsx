import BusinessDetailsOpenModal from "@/components/pages/business/BusinessDetailsOpenModal";
import ShareModal from "@/components/pages/business/ShareModal";
import RewardCard from "@/components/pages/rewards/RewardCard";
import { REWARDS_DATA } from "@/data";
import useResponsive from "@/hooks/useResponsive";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const Rewards = () => {
  const { wp, hp } = useResponsive();
  const [tab, setTab] = useState<"new" | "used">("new");
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const [isShareModalVisible, setShareModalVisible] = useState<boolean>(false);
  const toggleShareModal = () => {
    setModalVisible(false);
    setShareModalVisible(!isModalVisible);
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={{
        paddingTop: hp(8),
      }}
    >
      <View
        style={{
          paddingHorizontal: wp(4),
        }}
        className="flex-row items-center justify-between"
      >
        <Text
          style={{
            fontSize: RFValue(24),
          }}
          className=" text-skin-black font-bold"
        >
          Rewards
        </Text>
        <View className=" flex-row items-center gap-2">
          <Image
            source={require("@/assets/icons/crown-24px.png")}
            style={{
              // tintColor: "white",
              width: hp(3.5),
              height: hp(3.5),
            }}
          />
          <Text
            style={{
              fontSize: RFValue(18),
              color: "#3A2E39",
              fontWeight: "700",
            }}
          >
            5
          </Text>
        </View>
      </View>
      <View className="flex-row py-6 items-center">
        <Pressable onPress={() => setTab("new")} className="flex-1">
          <Text
            style={{ fontSize: RFValue(18) }}
            className={cn(
              "text-center capitalize  font-bold py-5 border-b-2",
              tab === "new"
                ? "text-skin-red border-skin-red"
                : "border-transparent text-skin-black"
            )}
          >
            new
          </Text>
        </Pressable>
        <Pressable onPress={() => setTab("used")} className="flex-1">
          <Text
            style={{ fontSize: RFValue(18) }}
            className={cn(
              "text-center capitalize font-bold py-5 border-b-2",
              tab === "used"
                ? "text-skin-red border-skin-red"
                : "text-skin-black border-transparent"
            )}
          >
            used
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          paddingHorizontal: wp(4),
          paddingBottom: hp(6),
        }}
        className=" gap-6"
      >
        {tab === "new"
          ? REWARDS_DATA.map((item, index) => (
              <View key={index}>
                <RewardCard
                  toggleShareModal={toggleShareModal}
                  toggleModal={toggleModal}
                  item={item}
                />
              </View>
            ))
          : REWARDS_DATA.map((item, index) => (
              <View key={index}>
                <RewardCard
                  toggleShareModal={toggleShareModal}
                  toggleModal={toggleModal}
                  item={item}
                />
              </View>
            ))}
      </View>
      <BusinessDetailsOpenModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      />
      <ShareModal
        isShareModalVisible={isShareModalVisible}
        setShareModalVisible={setShareModalVisible}
      />
    </ScrollView>
  );
};

export default Rewards;
