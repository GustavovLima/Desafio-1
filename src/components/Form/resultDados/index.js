import React from "react";
import { View, Text } from "react-native";

"props"
export default function DadosPessoais(props){

return(
    <View>
        <Text>{props.messageResultDados}</Text>
        <Text>{props.resultDados}</Text>
    </View>
);
}