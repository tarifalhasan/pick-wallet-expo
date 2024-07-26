// hooks/useResponsive.js
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

/**
 * A custom hook to get responsive dimensions.
 * @returns {Object} An object with `hp` and `wp` functions.
 */
const useResponsive = () => {
  return {
    hp, // heightPercentageToDP
    wp, // widthPercentageToDP
  };
};

export default useResponsive;
