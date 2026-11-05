import { ScrollView, StyleSheet, View } from "react-native";
import { A_Text } from "@/components/text";
import { colors, fontSizes, spacing } from "@/theme/tokens";

const sizes = Object.keys(fontSizes) as (keyof typeof fontSizes)[];

export default function Index() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.content}
    >
      {sizes.map((size) => (
        <A_Text key={size} size={size} numberOfLines={1}>
          {size} · The quick brown fox
        </A_Text>
      ))}
      <A_Text weight="semibold">Semibold for emphasis</A_Text>
      <View style={styles.swatch} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: spacing[6],
    gap: spacing[4],
  },
  swatch: {
    width: spacing[12],
    height: spacing[12],
    borderRadius: spacing[2],
    backgroundColor: colors.brand,
  },
});
