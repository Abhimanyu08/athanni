import { Stack } from "expo-router";
import { colors } from "@/theme/tokens";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{ contentStyle: { backgroundColor: colors.background } }}
    />
  );
}
