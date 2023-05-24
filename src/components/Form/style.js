import { StyleSheet, TextComponent } from "react-native";
const styles = StyleSheet.create({

formContext: {
minWidth: "30%",
height: "85%",
padding:10,
bottom: 0,
backgroundColor: "#E0FFFF",
alignItems: "center",
borderRadius: 30,
marginTop: 30,
marginBottom:10,
marginLeft:10,
marginRight:10,
overflow: "hidden",
},

form: {
width: "100%",
height: "auto",
marginTop: 30,
padding: 10,
},

formLabel: {
color: "#000000",
fontSize: 18,
paddingLeft: 20,
},

input: {
width: "90%",
borderRadius: 5,
backgroundColor: "#F0FFFF",
height: 40,
margin: 12,
paddingLeft: 10,
},

buttonCalculator: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#B0E0E6",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
},

textButtonCalculator: {
fontSize: 20,
color: "#000",
fontWeight: "bold",
textAlign: "center",
width: "100%",
},


});
export default styles;