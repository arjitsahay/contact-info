import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import * as ImagePicker from "react-native-image-picker"

import {ProfileImage} from '../../constant/constant';
import TextInputPrimary from '../../text-input-primary';

const StyledProfileImage = styled.Image` 
    margin-top: 40;
    margin-left: 115;
	height: 150;
    width: 150;
    align-items: center;
	background-color: white;
	border-radius: 90;
	border-width: 3;
    border-color: #F5F5F5;
`

export class AddContactScreen extends React.Component { 
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         text: ''
    //     }
    // };

    // onChangeText(text){
    //     this.setState({
    //         text: text
    //     });
    //     console.log(text)
    // };
    
    handleChoosePhoto = () => {
        const options = {};
        ImagePicker.launchImageLibrary(options, response => {
            console.log("response", response);
        });
    };

    navigatetoContactBookScreen = () => {
        this.props.navigation.navigate('ContactBook');
    };

    render() {
        return(
            <React.Fragment>
                <View style = {{backgroundColor: '#00CAA7', height: '10%', width: '100%'}}/>
                <TouchableOpacity onPress={this.handleChoosePhoto}>
                    <StyledProfileImage source={ProfileImage} StyledProfileImage/>
                    
                    <Image source = {require('../../image/camera.png')} style = {{height: 20, marginTop: 175, width: 20, marginLeft: 180, position: 'absolute'}}/>
                </TouchableOpacity>
                <TextInputPrimary/>
                <View style = {{width: '70%', height: 50, marginLeft: 55, marginTop: 60, borderRadius: 15, backgroundColor: '#A45DE4'}}>
                    <Text onPress={this.navigatetoContactBookScreen} style = {{fontSize: 16, marginLeft: 62, marginTop: 14, color: 'white', alignItems: 'center', justifyContent: 'center'}}>Add to Phonebook</Text>
                </View>
            </React.Fragment>
        )
    }
}
