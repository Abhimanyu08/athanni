import type { TextStyle } from "react-native";

// hsl(hue 0–360, saturation %, lightness %)
export const colors = {
  background: "hsl(30, 20%, 98%)",
  foreground: "hsl(24, 10%, 10%)",
  brand: "hsl(243, 75%, 59%)",
} as const;

export const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
} as const;

export const fontSizes = {
  xs: { fontSize: 12, lineHeight: 16 },
  sm: { fontSize: 14, lineHeight: 20 },
  base: { fontSize: 16, lineHeight: 24 },
  lg: { fontSize: 18, lineHeight: 28 },
  xl: { fontSize: 20, lineHeight: 28 },
  "2xl": { fontSize: 24, lineHeight: 32 },
  "3xl": { fontSize: 30, lineHeight: 36 },
  "4xl": { fontSize: 36, lineHeight: 40 },
  "5xl": { fontSize: 48, lineHeight: 52 },
  "6xl": { fontSize: 60, lineHeight: 64 },
  "7xl": { fontSize: 72, lineHeight: 76 },
} as const satisfies Record<string, TextStyle>;

export const fontWeights = {
  regular: { fontWeight: "400" },
  semibold: { fontWeight: "600" },
} as const satisfies Record<string, TextStyle>;
