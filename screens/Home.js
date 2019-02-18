import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import HomeCard from "./../components/cards/HomeCard";
import img from "./action-athlete-barbell-841130.jpg";

class Home extends Component {
  render() {
    return (
      <View style={styles.center}>
        {/* <Text>Hey guys!</Text> */}

        <FlatList
          horizontal={true}
          style={{ left: 10 }}
          data={[
            { key: "a" },
            { key: "b" },
            { key: "c" },
            { key: "d" },
            { key: "e" },
            { key: "f" }
          ]}
          renderItem={({ item }) => (
            <HomeCard
              card={item}
              img={require("./action-athlete-barbell-841130.jpg")}
            />
          )}
          contentContainerStyle={{
            //   flexDirection: "row",
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center"
            // left: 20,
            // right: 20
            //   paddingLeft: 20
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1
    // flexDirection: "row",
    // backgroundColor: "red"
    // alignItems: "center",
    // justifyContent: "center"
    //     marginLeft: 20
  },
  listView: {
    flexDirection: "row",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center"
    // paddingVertical: 20
  }
});

export default Home;
