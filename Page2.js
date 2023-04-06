import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableHighlight,
  Text,
  Image,
  FlatList
} from 'react-native';


export default class Page2 extends Component {

  constructor() {
    super();
    this.state = {
      loader: true,
      DATA: []
    }
  }


  getData() {
    this.setState({ loader: true })
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((response) => {

        if ((response.length) > 0) {
          this.setState({ DATA: response })

        }

        this.setState({ loader: false })
        console.log('response is : ', response)
      })
      .catch((error) => {
        this.setState({ loader: false })
        console.log('error: ', error)
      })
  }


componentDidMount(){
  this.getData()
}

  render() {

    const itemRender = ({ item }) => (
      <View style={{ width: '100%', padding: 10, backgroundColor: '#fff', elevation: 40, marginBottom: 10 }} >
          <Text style={{ fontSize: 20, color: 'red', margin: 10 }} >{item.show.name}</Text>
          <Text style={{ fontSize: 16, color: '#000', margin: 10 }} >{item.show.summary}</Text>
      </View>
  )



    return (
      <View style={style.container1} >

        <View style={style.container2} >
          <Text style={{ fontSize: 29, color: '#0B5345', fontWeight: '600' }} >Summary..</Text>
        </View>


        <View style={style.container3} >
          <ActivityIndicator size={50} color='#3498DB' animating={this.state.loader} ></ActivityIndicator>
          <FlatList style={{ width: '95%', marginBottom: 10, backgroundColor: 'green', elevation: 40, }}
            data={this.state.DATA}
            renderItem={itemRender} />
        </View>



        



      </View>
    )
  }
}
const style = StyleSheet.create(
  {
    container1:
    {
      height: '100%',
      width: '100%',
      backgroundColor: '#FFF',
      flexDirection: 'column'
    },
    container2:
    {
      height: '10%',
      width: '100%',
      backgroundColor: '#FDEBD0',
      alignItems: 'center',
      justifyContent: 'center'
    },
    container3: {
      height: '90%',
      width: '100%',
      backgroundColor: '#EAFAF1',
      alignItems: 'center',
      justifyContent: 'center'
    },
    container4: {
      height: '10%',
      width: '100%',
      backgroundColor: '#FDEBD0',
      alignItems: 'center',
      justifyContent: 'center'
    },
    touch: {
      height: '50%',
      width: '60%',
      backgroundColor: '#0B5345',
      alignItems: 'center',
      justifyContent: 'center'

    },
    texttouch: {
      fontSize: 20,
      color: '#FFF',
      fontWeight: '700'
    },

  }
)