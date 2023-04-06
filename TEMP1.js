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




export default class TEMP1 extends Component {

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

    componentDidMount() {
        this.getData();
    }


    render() {
        const itemRender = ({ item }) => {
            // Check if the item has an image property and it's not null
            if (item.show.image && item.show.image.medium) {
                // Use the medium-sized image if available
                return (
                    <View style={{ width: '100%', padding: 10, backgroundColor: '#fff', elevation: 40, marginBottom: 10 }} >
                        <Image style={{ width: '100%', height: 200 }} source={{ uri: item.show.image.medium }} />
                        <Text style={{ fontSize: 20, color: 'red', margin: 10 }} >{item.show.name}</Text>
                    </View>
                );
            } else {
                // Use a placeholder view if no image is available
                return (
                    <View style={{ width: '100%', padding: 10, backgroundColor: '#fff', elevation: 40, marginBottom: 10 }} >
                        <Text style={{ fontSize: 20, color: 'red', margin: 10 }} >{item.show.name}</Text>
                    </View>
                );
            }
        }



        return (
            <View style={style.container1} >

                <View style={style.container2} >
                    <Text style={{ fontSize: 29, color: '#0B5345', fontWeight: '600' }} >MOVIES..</Text>
                </View>


                <View style={style.container3} >
                    <ActivityIndicator size={50} color='#3498DB' animating={this.state.loader} ></ActivityIndicator>
                    <FlatList style={{ width: '95%', marginBottom: 10, backgroundColor: '#FFF', elevation: 40, }}
                        data={this.state.DATA}
                        renderItem={itemRender} />
                </View>



                <View style={style.container4} >
                   <TouchableHighlight style={style.touch} onPress={() => this.props.navigation.navigate('Summary')} >
                        <Text style={style.texttouch}>summary</Text>
                    </TouchableHighlight> 
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
            height: '80%',
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