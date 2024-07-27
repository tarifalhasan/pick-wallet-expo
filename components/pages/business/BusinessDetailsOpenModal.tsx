import useResponsive from "@/hooks/useResponsive";
import { Share2, X } from "lucide-react-native";
import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";
import { RFValue } from "react-native-responsive-fontsize";
import ShareModal from "./ShareModal";

interface BusinessDetailsOpenModalProps {
  isModalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

const BusinessDetailsOpenModal: React.FC<BusinessDetailsOpenModalProps> = ({
  isModalVisible,
  setModalVisible,
}) => {
  const [isShareModalVisible, setShareModalVisible] = useState<boolean>(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleShareModal = () => {
    setModalVisible(false);
    setShareModalVisible(!isShareModalVisible);
  };
  const { hp, wp } = useResponsive();

  return (
    <View style={styles.container}>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <View className="flex-row pb-8  w-full justify-end">
            <Pressable onPress={toggleModal}>
              <X size={26} color={"#F15152"} />
            </Pressable>
          </View>
          <View
            style={{
              width: wp(70),
              backgroundColor: "#FFBE98",
              paddingHorizontal: wp(2),
              paddingVertical: hp(8),
              borderRadius: 10,
              position: "relative",
            }}
          >
            <View className=" items-center justify-center gap-2">
              <Text style={{ fontSize: RFValue(32) }}>☕</Text>
              <Text
                className=" font-bold text-center text-skin-black"
                style={{ fontSize: RFValue(32) }}
              >
                1 free coffee!
              </Text>
            </View>
            <View
              style={{
                paddingTop: RFValue(40),
              }}
              className=" items-center gap-2  justify-center"
            >
              <Text
                className="  font-normal text-center text-skin-black"
                style={{ fontSize: RFValue(15) }}
              >
                Show this at the register to claim your reward
              </Text>
              <Text
                className=" text-center font-normal text-skin-light_black"
                style={{ fontSize: RFValue(12) }}
              >
                Valability: 1 month
              </Text>
            </View>
            <View
              style={{
                width: hp(5),
                height: hp(5),
                left: hp(-3),
                transform: [{ translateY: 50 }],
              }}
              className=" absolute  top-1/2  bg-white rounded-full"
            />
            <View
              style={{
                width: hp(5),
                height: hp(5),
                right: hp(-3),
                transform: [{ translateY: 50 }],
              }}
              className=" absolute  top-1/2  bg-white rounded-full"
            />
          </View>

          <View
            style={{
              paddingTop: hp(5),
              paddingBottom: hp(6),
            }}
          >
            <TouchableOpacity onPress={() => toggleShareModal()}>
              <View className=" justify-center flex-row flex items-center gap-2">
                <Text
                  style={{ fontSize: RFValue(17) }}
                  className=" font-bold text-skin-red"
                >
                  Share
                </Text>
                <Share2 size={25} color={"#F15152"} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <ShareModal
        isShareModalVisible={isShareModalVisible}
        setShareModalVisible={setShareModalVisible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BusinessDetailsOpenModal;
