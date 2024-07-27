import { Input } from "@/components/ui/input";
import useResponsive from "@/hooks/useResponsive";
import { ArrowRightIcon, X } from "lucide-react-native";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";
import { RFValue } from "react-native-responsive-fontsize";

interface ShareModalProps {
  isShareModalVisible: boolean;
  setShareModalVisible: (visible: boolean) => void;
}

const ShareModal: React.FC<ShareModalProps> = ({
  isShareModalVisible,
  setShareModalVisible,
}) => {
  const toggleShareModal = () => {
    setShareModalVisible(!isShareModalVisible);
  };

  const { hp, wp } = useResponsive();

  return (
    <View style={styles.container}>
      <Modal
        isVisible={isShareModalVisible}
        onBackdropPress={toggleShareModal}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <View className="flex-row pb-2  w-full justify-end">
            <Pressable onPress={toggleShareModal}>
              <X size={26} color={"#F15152"} />
            </Pressable>
          </View>
          <View
            style={{
              width: wp(80),
              //   backgroundColor: "#FFBE98",
              paddingHorizontal: wp(2),
              paddingVertical: hp(8),
              borderRadius: 10,
              position: "relative",
            }}
          >
            <View className=" w-full items-center justify-center gap-0.5">
              <Text style={{ fontSize: RFValue(32) }}>🎁</Text>
              <Text
                className=" font-bold text-center text-skin-black"
                style={{ fontSize: RFValue(24) }}
              >
                Share with someone
              </Text>
              <Text
                className="  font-normal text-center text-skin-black"
                style={{ fontSize: RFValue(15) }}
              >
                Valability: 1 month{" "}
              </Text>
            </View>
          </View>
          <View className="  w-full gap-6 pb-6">
            <Input className="w-full" placeholder="Enter email" />
            <View className=" items-center w-auto ">
              <TouchableOpacity className="px-6 rounded-full gap-2 py-4 flex-row bg-skin-red w-auto">
                <Text
                  className=" text-white font-bold"
                  style={{ fontSize: RFValue(14) }}
                >
                  Send reward
                </Text>
                <ArrowRightIcon color={"#fff"} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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

export default ShareModal;
