import { REWARDS_DATA } from "@/data";
import useResponsive from "@/hooks/useResponsive";
import { cn } from "@/lib/utils";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  Text,
  View,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const EventsDetails = () => {
  const { id } = useLocalSearchParams();
  const { hp, wp } = useResponsive();
  const router = useRouter();
  const [tab, setTab] = useState<"stamps" | "quests">("stamps");
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const [isShareModalVisible, setShareModalVisible] = useState<boolean>(false);
  const toggleShareModal = () => {
    setModalVisible(false);
    setShareModalVisible(!isModalVisible);
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const StampsData = [
    {
      title: "True Fine Coffee",
      subTitle: "Palas Campus, Str Sfantul Andrei 39a",
      rewards: 5,
      matrix: 103,
      logoUrl: require("@/assets/images/true-fine-red.png"),
    },
    {
      title: "True Fine Coffee",
      subTitle: "Palas Campus, Str Sfantul Andrei 39a",
      rewards: 5,
      matrix: 103,
      logoUrl: require("@/assets/images/true-fine-red.png"),
    },
    {
      title: "True Fine Coffee",
      subTitle: "Palas Campus, Str Sfantul Andrei 39a",
      rewards: 5,
      matrix: 103,
      logoUrl: require("@/assets/images/true-fine-red.png"),
    },
    {
      title: "True Fine Coffee",
      subTitle: "Palas Campus, Str Sfantul Andrei 39a",
      rewards: 5,
      matrix: 103,
      logoUrl: require("@/assets/images/true-fine-red.png"),
    },
    {
      title: "True Fine Coffee",
      subTitle: "Palas Campus, Str Sfantul Andrei 39a",
      rewards: 5,
      matrix: 103,
      logoUrl: require("@/assets/images/true-fine-red.png"),
    },
    {
      title: "True Fine Coffee",
      subTitle: "Palas Campus, Str Sfantul Andrei 39a",
      rewards: 5,
      matrix: 103,
      logoUrl: require("@/assets/images/true-fine-red.png"),
    },
    {
      title: "True Fine Coffee",
      subTitle: "Palas Campus, Str Sfantul Andrei 39a",
      rewards: 5,
      matrix: 103,
      logoUrl: require("@/assets/images/true-fine-red.png"),
    },
    {
      title: "True Fine Coffee",
      subTitle: "Palas Campus, Str Sfantul Andrei 39a",
      rewards: 5,
      matrix: 103,
      logoUrl: require("@/assets/images/true-fine-red.png"),
    },
  ];

  const QuestData = [
    {
      logoUrl: require("@/assets/images/red-true.png"),
      id: 12121,
    },
    {
      logoUrl: require("@/assets/images/red-true.png"),
      id: 12121,
    },
    {
      logoUrl: require("@/assets/images/red-true.png"),
      id: 12121,
    },
    {
      logoUrl: require("@/assets/images/red-true.png"),
      id: 12121,
    },
    {
      logoUrl: require("@/assets/images/red-true.png"),
      id: 12121,
    },
    {
      logoUrl: require("@/assets/images/red-true.png"),
      id: 12121,
    },
  ];
  const renderHeader = () => (
    <>
      <StatusBar style="light" />
      <ImageBackground
        source={require("@/assets/images/banner.png")}
        style={{
          width: "100%",
          paddingVertical: hp(8),
        }}
      >
        <View
          style={{ paddingHorizontal: wp(4) }}
          className="flex-row items-center gap-4"
        >
          <Pressable
            onPress={() => router.back()}
            className="active:opacity-35 bg-skin-red p-2 rounded-2xl"
          >
            <Image
              source={require("@/assets/icons/arrow-left.png")}
              style={{
                width: hp(3.5),
                height: hp(3.5),
              }}
            />
          </Pressable>
          <Text
            style={{ fontSize: RFValue(17) }}
            className="font-bold text-white"
          >
            Back
          </Text>
        </View>
        <View className="items-center justify-center gap-4">
          <Image
            source={require("@/assets/images/summerwell.png")}
            style={{
              width: hp(15),
              height: hp(15),
              borderRadius: hp(15),
            }}
          />
          <View>
            <Text
              style={{ fontSize: RFValue(30) }}
              className="text-white  text-center font-bold"
            >
              Summer Well
            </Text>
            <Text
              style={{ fontSize: RFValue(14) }}
              className="text-skin-gray text-center font-normal"
            >
              9 - 11 August 2024
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View className="flex-row pb-6 items-center">
        <Pressable onPress={() => setTab("stamps")} className="flex-1">
          <Text
            style={{ fontSize: RFValue(18) }}
            className={cn(
              "text-center font-bold py-5 border-b-2",
              tab === "stamps"
                ? "text-skin-red border-skin-red"
                : "border-transparent text-skin-black"
            )}
          >
            Stamps
          </Text>
        </Pressable>
        <Pressable onPress={() => setTab("quests")} className="flex-1">
          <Text
            style={{ fontSize: RFValue(18) }}
            className={cn(
              "text-center font-bold py-5 border-b-2",
              tab === "quests"
                ? "text-skin-red border-skin-red"
                : "text-skin-black border-transparent"
            )}
          >
            Quests
          </Text>
        </Pressable>
      </View>
    </>
  );

  const renderFooterStamps = () => (
    <View style={{ padding: 20, alignItems: "center" }}>
      <Text
        style={{ fontSize: RFValue(16), color: "#3A2E39", textAlign: "center" }}
      >
        You can use tokens only during the event period!
      </Text>
    </View>
  );
  const numColumns = 4;
  const renderMain = () => {
    const flatListKey = `${tab}-${numColumns}`;

    if (tab === "stamps") {
      return (
        <FlatList
          key={flatListKey}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooterStamps}
          data={StampsData}
          showsVerticalScrollIndicator={false}
          bounces={false}
          renderItem={({ item }) => (
            <View
              style={{
                paddingHorizontal: wp(4),
                paddingVertical: hp(2),
                width: hp(12),
                height: hp(12),
              }}
            >
              <Image
                source={item.logoUrl}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={4}
          columnWrapperStyle={{
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        />
      );
    } else if (tab === "quests") {
      if (!REWARDS_DATA || REWARDS_DATA.length === 0) {
        return (
          <View style={{ padding: 20, alignItems: "center" }}>
            <Text style={{ fontSize: RFValue(16), color: "#3A2E39" }}>
              No rewards available.
            </Text>
          </View>
        );
      }

      return (
        <FlatList
          key={flatListKey}
          ListHeaderComponent={renderHeader}
          data={QuestData}
          showsVerticalScrollIndicator={false}
          bounces={false}
          renderItem={({ item }) => (
            <View
              style={{
                paddingHorizontal: wp(4),
                paddingVertical: hp(2),
                width: hp(12),
                height: hp(12),
              }}
            >
              <Image
                source={item.logoUrl}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={4}
          columnWrapperStyle={{
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        />
      );
    } else {
      return null;
    }
  };

  return renderMain();
};

export default EventsDetails;
