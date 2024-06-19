import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function App({navigation}) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <View style={styles.Devsheet}>
            <Text style={{fontSize: 24, fontWeight: "700", color: "#356899"}}>Jobizz</Text>
            <Text style={{fontSize: 30, fontWeight: "700"}}>Welcome Back👋</Text>
            <Text style={{color: "gray"}}>Let&apos;s log in to apply to jobs!</Text>
          </View>
          <View style={styles.input}>
            <TextInput placeholder="Name" style={{padding: 15, borderWidth: 1, borderRadius: 10, marginBottom: 10, borderColor: "#AFB0B6", fontSize: 18}} value={name} onChangeText={setName}/>
            <TextInput placeholder="Email" style={{padding: 15, borderWidth: 1, borderRadius: 10, marginBottom: 10, borderColor: "#AFB0B6", fontSize: 18}} value={email} onChangeText={setEmail}/>
            <TouchableOpacity style={{backgroundColor: "#356899", padding: 20, borderRadius: 10, marginTop: 20}} onPress={()=> navigation.navigate("Home", {name, email})}>
                <Text style={{textAlign: "center", color: "white"}}>Log in</Text>
            </TouchableOpacity>
          </View>
          <View >
            <Text style={{textAlign: "center"}}>Or continue with</Text>
          </View>
          <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 20, marginVertical: 50}}>
            <Image source={require("../assets/facebook.jpeg")} style={{width:　50, height: 50, borderRadius: 50,}}/>
            <Image source={require("../assets/google.jpeg")} style={{width:　50, height: 50, borderRadius: 50,}}/>
            <Image source={require("../assets/apple.jpeg")} style={{width:　50, height: 50, borderRadius: 50,}}/>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text>
              Not having an account? 
            </Text>
            <Button title="Register" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    Devsheet: {
        marginTop: 60,
        display: "flex",
        paddingHorizontal: 30,
        flexDirection: "column",
        gap: 5,
    },
    input: {
        marginVertical: 50,
        marginHorizontal: 30,

    }
});
