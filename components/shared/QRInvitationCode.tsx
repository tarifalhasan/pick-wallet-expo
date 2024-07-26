import React from "react";
import { View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Text } from "../ui/text";
const QRInvitationCode = () => {
  // let base64Logo =
  //   "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <View
      style={{
        width: "100%",
        paddingBottom: hp(1),
        gap: hp(2),
      }}
      className=" items-center justify-center first:"
    >
      <View className=" gap-">
        <Text
          style={{
            fontSize: hp(2.5),
          }}
          className="text-center font-semibold"
        >
          QR Invitation Code
        </Text>
        <Text
          style={{
            fontSize: hp(1.5),
          }}
          className="text-center font-normal"
        >
          Scan code to join this match
        </Text>
      </View>
      <QRCode
        value="Just some string value"
        // logo={{ uri: base64Logo }}
        logoSize={30}
        size={wp(80)}
        logoBackgroundColor="transparent"
      />
    </View>
  );
};

export default QRInvitationCode;
