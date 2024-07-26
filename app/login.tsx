import { Image, Pressable, Text, View } from "react-native";

import KeyboardAvoiding from "@/components/KeyboardAvoiding";

import useResponsive from "@/hooks/useResponsive";
import { Link } from "expo-router";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

const SignIn = () => {
  const { hp, wp } = useResponsive();

  return (
    <KeyboardAvoiding>
      <View
        style={{ paddingTop: hp(8), paddingHorizontal: wp(4) }}
        className="flex-1 gap-10"
      >
        <View
          style={{ paddingVertical: hp(10) }}
          className=" w-full gap-4 items-center "
        >
          <Image
            source={require("@/assets/images/Logo.png")}
            className=" b"
            style={{
              width: hp(18),
              height: hp(10),
              objectFit: "contain",
            }}
          />

          <View className=" gap-1">
            <View>
              <Text
                style={{ fontSize: RFValue(25) }}
                className=" text-skin-black text-center font-bold"
              >
                Let’s get started
              </Text>
            </View>
            <Text
              style={{ fontSize: RFValue(16) }}
              className=" text-skin-light_black text-center font-normal"
            >
              Sign up to continue
            </Text>
          </View>
        </View>

        {/* Sign in options */}
        <View className=" gap-6">
          <Pressable className=" active:opacity-35 bg-skin-login_btn py-4 px-5 rounded-xl flex-row items-center gap-3">
            <Image
              source={require("@/assets/icons/google.png")}
              style={{
                width: hp(4),
                height: hp(4),
                objectFit: "contain",
              }}
            />
            <Text
              style={{
                fontSize: RFValue(17),
              }}
              className=" text-black font-bold"
            >
              Continue with Google
            </Text>
          </Pressable>
          <Pressable className="active:opacity-35 bg-skin-login_btn py-4 px-5 rounded-xl flex-row items-center gap-3">
            <Image
              source={require("@/assets/icons/facebook.png")}
              style={{
                width: hp(4),
                height: hp(4),
                objectFit: "contain",
              }}
            />
            <Text
              style={{
                fontSize: RFValue(17),
              }}
              className=" text-black font-bold"
            >
              Continue with Facebook
            </Text>
          </Pressable>
          <Pressable className=" active:opacity-35 bg-skin-login_btn py-4 px-5 rounded-xl flex-row items-center gap-3">
            <Image
              source={require("@/assets/icons/apple.png")}
              style={{
                width: hp(4),
                height: hp(4),
                objectFit: "contain",
              }}
            />
            <Text
              style={{
                fontSize: RFValue(17),
              }}
              className=" text-black font-bold"
            >
              Continue with Apple
            </Text>
          </Pressable>
          <Text
            style={{
              fontSize: RFValue(17),
            }}
            className="  text-skin-red text-center font-bold"
          >
            Need help?
          </Text>
          <Text
            style={{
              fontSize: RFValue(14),
            }}
            className=" text-skin-light_black font-normal"
          >
            When registering, you agree that we may use your provided data for
            the registration and to send you notifications on our products and
            services. For additional info please refer to our
            <Link className=" text-skin-red " href={"/privacy-policy"}>
              <Text> Privacy Policy.</Text>
            </Link>
          </Text>
        </View>
      </View>
    </KeyboardAvoiding>
  );
};

export default SignIn;
