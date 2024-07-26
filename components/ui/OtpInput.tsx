// OtpInput.tsx
import React, { useRef, useState } from "react";
import { TextInput, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
interface OtpInputProps {
  length: number;
  onOtpChange: (otp: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({ length, onOtpChange }) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const inputs = useRef<TextInput[]>([]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    onOtpChange(newOtp.join(""));

    if (text && index < length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleBackspace = (text: string, index: number) => {
    if (!text && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <View className=" flex-row items-center gap-4 justify-center">
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputs.current[index] = ref!)}
          className="  text-background text-center bg-foreground/80 rounded-lg"
          style={{
            width: wp(15),
            height: wp(15),
            fontSize: wp(8),
          }}
          keyboardType="numeric"
          maxLength={1}
          value={digit}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === "Backspace") {
              handleBackspace(digit, index);
            }
          }}
        />
      ))}
    </View>
  );
};

export default OtpInput;
