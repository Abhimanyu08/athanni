import { Text as RNText, StyleSheet, type TextProps } from "react-native";
import { colors, fontSizes, fontWeights } from "@/theme/tokens";

type Props = TextProps & {
  size?: keyof typeof fontSizes;
  weight?: keyof typeof fontWeights;
};

export function A_Text({
  size = "base",
  weight = "regular",
  style,
  ...props
}: Props) {
  return (
    <RNText
      style={[styles.base, fontSizes[size], fontWeights[weight], style]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  base: { color: colors.foreground },
});
