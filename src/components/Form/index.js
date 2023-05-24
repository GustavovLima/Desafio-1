import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity} from "react-native"
import ResultDados from "./resultDados/index.js";
import styles from "./style.js";

export default function Form(){
    
    const[nome, setNome]=useState(null) 
    const[telefone, setTelefone]=useState(null) 
    const[email, setEmail]=useState(null) 
    const[messageDados, setMessageDados]=useState("Aguardando Preenchimento.") 
    const[dados, setDados]=useState(null) 
    const[textButton, setTextButton]=useState("Concluir") 
   
    function dadosCalculator(){
        return setDados((nome +"Destinaremos Atualizações No Seu Telefone " + telefone + " Ou " + email))
    }
    
    function validationDados(){
    if(nome,telefone,email != null){
        dadosCalculator()
        setNome(null)
        setTelefone(null)
        setEmail(null)
        setMessageDados("Bem-Vindo")
        setTextButton("Preencha Novamente")
        return
    }
    setDados(null)
    setTextButton("Concluir")
    setMessageDados("Seu Nome, Telefone e Email Para Concluir!!!")
    }
    
    return(
        <View style={styles.formContext}>
        <View style={styles.form}>
        <Text style={styles.formLabel}>Nome</Text>
        <TextInput style={styles.input} onChangeText={setNome} value={nome}placeholder="Ex: Eric Fernandes" keyboardType="default"/>
        
        <Text style={styles.formLabel}>Telefone</Text>
        <TextInput style={styles.input} onChangeText={setTelefone} value={telefone} placeholder="Ex: (xx) 98765-4321" keyboardType="number-pad"/>

        <Text style={styles.formLabel}>Email</Text>
        <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Ex: email@gmail.com" keyboardType="email-address"/>

        <TouchableOpacity style={styles.buttonCalculator} onPress={() => {validationDados()}}>
        <Text style={styles.textButtonCalculator}>
        {textButton}</Text>
        </TouchableOpacity>
        </View>
        <ResultDados messageResultDados={messageDados} resultDados={dados}/>
        </View>
    )
}