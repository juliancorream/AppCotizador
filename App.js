import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Button,
} from "react-native";
import Form from "./src/components/Form";
import colors from "./src/utils/colors";
import Footer from "./src/components/Footer";

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);

  const onSubmit = () => {
    console.log("capital ->", capital);
    console.log("interest ->", interest);
    console.log("months ->", months);
  };
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.tittleApp}>Cotizador de Prestamos</Text>
        <Form
          setCapital={setCapital}
          setInterest={setInterest}
          setMonths={setMonths}
        />
      </SafeAreaView>

      <View>
        <Text>Resultado</Text>
      </View>

    <Footer/>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,

    alignItems: "center",
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "absolute",
    zIndex: -1,
  },
  tittleApp: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
  },
});
