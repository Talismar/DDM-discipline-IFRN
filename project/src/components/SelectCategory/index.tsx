import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import styled from "styled-components/native";

function SelectCategory({
  modalVisible,
  setModalVisible,
  items,
}: {
  modalVisible: boolean;
  setModalVisible: (name: string) => void;
  items: string[];
}) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible;
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {items.map((v, i) => (
              <Pressable
                key={i}
                style={[
                  styles.button,
                  styles.buttonClose,
                  { marginBottom: 15 },
                ]}
                onPress={() => setModalVisible(v)}
              >
                <Text style={styles.textStyle}>{v}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default SelectCategory;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
