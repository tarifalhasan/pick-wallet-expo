import BusinessDetailsOpenModal from "@/components/pages/business/BusinessDetailsOpenModal";
import ShareModal from "@/components/pages/business/ShareModal";
import { REWARDS_DATA } from "@/data";
import useResponsive from "@/hooks/useResponsive";
import { cn } from "@/lib/utils";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Check, ShoppingCart } from "lucide-react-native";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const BusinessDetails = () => {
  const { id } = useLocalSearchParams();
  const { hp, wp } = useResponsive();
  const router = useRouter();
  const [tab, setTab] = useState<"stamps" | "rewards">("stamps");
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
            source={require("@/assets/images/true-fine.png")}
            style={{
              width: hp(15),
              height: hp(15),
              borderRadius: hp(15),
            }}
          />
          <View>
            <Text
              style={{ fontSize: RFValue(30) }}
              className="text-white font-bold"
            >
              True Fine coffee
            </Text>
            <Text
              style={{ fontSize: RFValue(14) }}
              className="text-skin-gray font-normal"
            >
              Palas Campus, Str Sfantul Andrei 39a
            </Text>
          </View>
          <View className="flex-row items-center gap-4">
            <View className="flex-row items-center gap-2">
              <Image
                source={require("@/assets/icons/crown-24px.png")}
                style={{
                  tintColor: "white",
                  width: hp(3.5),
                  height: hp(3.5),
                }}
              />
              <Text
                style={{
                  fontSize: RFValue(18),
                  color: "white",
                  fontWeight: "700",
                }}
              >
                10
              </Text>
            </View>
            <View className="flex-row items-center gap-2">
              <Image
                source={require("@/assets/icons/dot-matrix.png")}
                style={{
                  tintColor: "white",
                  width: hp(3),
                  height: hp(3),
                }}
              />
              <Text
                style={{
                  fontSize: RFValue(18),
                  color: "white",
                  fontWeight: "700",
                }}
              >
                103
              </Text>
            </View>
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
        <Pressable onPress={() => setTab("rewards")} className="flex-1">
          <Text
            style={{ fontSize: RFValue(18) }}
            className={cn(
              "text-center font-bold py-5 border-b-2",
              tab === "rewards"
                ? "text-skin-red border-skin-red"
                : "text-skin-black border-transparent"
            )}
          >
            Rewards
          </Text>
        </Pressable>
      </View>
    </>
  );

  const renderFooterStamps = () => (
    <View style={{ padding: 20, alignItems: "center" }}>
      <Text style={{ fontSize: RFValue(16), color: "#3A2E39" }}>
        Collect them all by March 31
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
    } else if (tab === "rewards") {
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
          data={REWARDS_DATA}
          showsVerticalScrollIndicator={false}
          bounces={false}
          renderItem={({ item }) => (
            <View>
              <View
                style={{
                  paddingHorizontal: wp(4),
                  paddingVertical: hp(1),
                }}
              >
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
                      1 free coffee! ☕
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
              </View>
              <BusinessDetailsOpenModal
                isModalVisible={isModalVisible}
                setModalVisible={setModalVisible}
              />
              <ShareModal
                isShareModalVisible={isShareModalVisible}
                setShareModalVisible={setShareModalVisible}
              />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      );
    } else {
      return null;
    }
  };

  return renderMain();
};

export default BusinessDetails;
