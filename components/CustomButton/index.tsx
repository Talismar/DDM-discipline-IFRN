import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface CustomButtonProps {
  children: React.ReactNode;
  variant?: string;
}

function CustomButton({ children, variant }: CustomButtonProps): JSX.Element {
  if (variant === "secondary") {
    return (
      <TouchableOpacity style={styles.buttonSecondary}>
        <Text style={styles.textSecondary}>{children}</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity style={styles.buttonPrimary}>
        <Text style={styles.textPrimary}>{children}</Text>
      </TouchableOpacity>
    );
  }
}

export default CustomButton;

const styles = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: "#666666",
    width: 254,
    alignItems: "center",
    borderRadius: 5,
  },
  textPrimary: {
    fontSize: 18,
    fontWeight: "400",
    color: "#FFFFFF",
    marginTop: 12,
    marginBottom: 12,
  },
  buttonSecondary: {
    backgroundColor: "#1DB863",
    width: 254,
    alignItems: "center",
    borderRadius: 5,
  },
  textSecondary: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
    marginTop: 12,
    marginBottom: 12,
  },
});
