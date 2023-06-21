import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

export const buttonStyles = {
  // 1. We can update the base styles
  baseStyle: {
    fontWeight: "bold", // Normally, it is "semibold"
  },
  // 2. We can add a new button size or extend existing
  sizes: {
    xl: {
      h: "56px",
      fontSize: "lg",
      px: "32px",
    },
  },
  // 3. We can add a new visual variant
  variants: {
    "with-shadow": {
      bg: "red.400",
      boxShadow: "0 0 2px 2px #efdfde",
    },
    // 4. We can override existing variants
    solid: (props: StyleFunctionProps) => ({
      bg: props.colorMode === "dark" ? "red.300" : "red.500",
    }),
    // 5. We can add responsive variants
    "default-button": {
      color: "brand.0",
      borderRadius: "25px",
      py: "27px",
      px: "70px",
      outline: "1px solid",
      outlineColor: "brand.40",
      bgGradient: "linear(to-b, brand.40, brand.70)",
      fontSize: "md",
      _hover: {
        bgGradient: "linear(to-t, brand.40,  brand.70,  brand.40,  brand.40)",
        backgroundSize: "200% auto",
        backgroundPosition: "right center",
        transition: "background-position 0.5s",
      },
      _active: {
        boxShadow: "none",
        transform: "scale(0.98)",
      },
      transition: "box-shadow 0.2s, transform 0.2s",
    },
  },
  // 6. We can overwrite defaultProps
  defaultProps: {
    variant: "default-button", // default is solid
  },
};
