import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import CarItem from "../CarItem";
import styles from "./styles";
import cars from "./cars";

const CarsList = props => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        decelerationRate={0}
        keyExtractor={i => i.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <CarItem car={item} />}
        snapToInterval={Dimensions.get("window").height}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
      />
    </View>
  );
};

export default CarsList;
