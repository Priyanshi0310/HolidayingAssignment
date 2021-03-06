import React, { Component } from 'react';
import { View, Text ,StyleSheet, TouchableOpacity, } from 'react-native';

 class Selections extends Component {

    state={
        highlighted: false,
        id: null
    }


// The purpose of this function is to set the state to the target index on press
    indexStateHandler = (i) =>{
         if(this.state.id === null){
             this.setState({
                 id: i
             })
         }else{
             this.setState({
                 id:i
             })
         }
         console.log("index: "+i)
         console.log("state: "+this.state.id)
    }

    //The purpose of this function is to set styles for the targeted index
    highlightStateHandler = (i) =>{     
        if(this.state.id === i){
            if(!this.state.highlighted){
                this.setState({
                    highlighted:true
                })
            }
            else{
                this.setState({
                    highlighted:false
                })
            }
        }  
           }

    highlightHandler = (i) =>{

        // console.log(i)
        this.indexStateHandler(i)
        this.highlightStateHandler(i)

    }


  render() {
    return (
      <View style={styles.selectionWrapper}>
        <View style={styles.label}><Text style={{color: "black"}}>{this.props.label}</Text></View>
        <View style={styles.listContainer}>
        {this.props.options.map((options, i) => (
            <TouchableOpacity onPress={()=>this.highlightHandler(i)} key={i}>
            <View style={this.state.highlighted&&this.state.id == i?styles.highlighted:styles.options} > <Text style={styles.text}>{options}</Text> </View>
            </TouchableOpacity>
              )
        )}
        </View>
      </View>
    );
  }
}

const styles= StyleSheet.create({
    selectionWrapper:{
        width: '100%',
        height: 100,
        borderWidth: 1,
        borderColor: 'red',
    },
    label:{
        flex: 1,

    }
    ,
    listContainer:{
        flex: 3,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center',
        // backgroundColor: "#7fffd4"
    },
    options:{
        borderRadius: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: "#d0b783",
        // backgroundColor: ""

    },
    text:{
        color: 'black',
        textAlign: 'center'
    },

    highlighted:{
        borderRadius: 10,
        padding: 5,
        borderWidth: 1,
        // borderColor: "#d0b783",
        backgroundColor: "#d0b783"

    }
})
export default Selections
