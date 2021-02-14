
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, Button, Alert, TouchableOpacity,RadioButton, Platform } from 'react-native';

type Props = {};

export default class App extends Component <Props> {

  constructor(props){
    super(props)
    this.state={altura:0, peso:0, nome:"", result:0, resultTexto:"", nome:""}
    this.calcular=this.calcular.bind(this)
    

  }

  calcular(){
    let imc= this.state.peso/(this.state.altura*this.state.altura)
    let r=this.state
    r.result = imc
    this.setState(r)

    if(r.result<16){
      r.resultTexto= "Muito Abaixo do Peso."
    }else if(r.result<17){
      r.resultTexto="Abaixo do Peso."
    }else if(r.result<18 || 24.5 ){
      r.resultTexto="Peso Normal"
    }else if(r.result<24.6||25){
      r.resultTexto="Acima do peso."
    }else if (r.result<25.6 ||30){
      r.resultTexto = "Obsidade I."
    }else if (r.result<30.5||35){
      r.resultTexto= "Obsidade II Severa."
    }else if(r.result<35.5||40) {
      r.resultTexto= "Obsidade III Mórbida."
    }else{
      r.resultTexto= "Magreza."
    }
  }



  


  render(){
    return (
      <ImageBackground source={require("./assets/img/fundo.jpg")} style={styles.fundo}>
        <View style ={styles.container}>
          <View style={styles.box}>
            <Image source={require('./assets/img/imc.png')} style={styles.imc}/>
            <Text style={styles.title}>Calculadora IMC</Text>
          </View>
          <View style={styles.principal}>
            <TextInput style={styles.form} placeholder='Nome' textContentType='name' onChangeText={(nome)=>{this.setState({nome})}}/>
            <TextInput style={styles.form} placeholder='Peso' keyboardType='numbers-and-punctuation' onChangeText={(peso)=>{this.setState({peso})}}/>
            <TextInput style={styles.form} placeholder='Altura' keyboardType='numbers-and-punctuation' onChangeText={(altura)=>{this.setState({altura})}}/>
            <TouchableOpacity><Text style={styles.bt} onPress={this.calcular}>Calcular IMC</Text></TouchableOpacity>

            <Text style={styles.result}>{this.state.result.toFixed(2)}</Text>
            <Text style={styles.result2}>{this.state.nome} {this.state.resultTexto} </Text>


          </View>
        </View>
      </ImageBackground>
    );
  }
   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //posicionamento logo e titulo
  box:{
    flexDirection:'row',
    width:'80%',
    marginBottom:30,
  },
  //estilos img
  fundo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  imc:{
    width:70,
    height:70,
    marginRight:20,
  },
  //estilo do titulo
  title: {
    fontSize:25,
    color:'#fff',
    fontWeight: '700',
    paddingTop: 20,
  },
  //view principal
  principal:{
    width:380,
    height:505,
    backgroundColor:'rgba(240,255,255, 0.5)',
    alignItems:'center',
    justifyContent: 'center',
    padding: 30,
    marginBottom: 150,
  },

  form:{
    height: 40,
    width:320,
    padding:10,
    fontSize:15,
    color:'white',
    backgroundColor:'rgb(250,250,250)',
    borderColor:'#E0FFFF',
    borderWidth:1,
    marginTop:20,
    borderRadius: 4,
    shadowColor:'#333',
    shadowOpacity:0.25,
    shadowRadius: 2,
    shadowOffset:{
      width:2,
      height:2,
    },
  },

    //css do resultado
    result: {
      fontSize: 35,
      fontWeight:'bold',
      marginTop: 30,
      color: '#2c3a47',
      
      
      marginTop: 20,
    },

    result2: {
      fontSize: 35,
      fontWeight:'bold',
      marginTop: 30,
      color: '#2c3a47',
      
      
      marginTop: 20,
    },

  //estilo do butao
  bt:{
    width: 320,
    padding:20,
    fontSize:25,
    color:'white',
    backgroundColor:'rgba(240,255,255, 0.5)',
    justifyContent:'center',
    marginTop:35,
  }


});
