import React from 'react';
import {Text, View, FlatList, Image, ScrollView, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import { Modal, StyleSheet, Pressable } from "react-native";

import { ContactBookData } from '../../constant/constant';
import { HorizontalContainer } from '../../horizontal-container';

const StyledProfileImage = styled.Image` 
    height: 109;
    width: 100;
    align-items: center;
	background-color: white;
    border-width: 0.2;
    border-color: #F0F8FF;
`
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 2
    },
    modalView: {
      margin: 20,
      backgroundColor: "#F5F5F5",
      borderRadius: 20,
      padding: 50,
      width: '100%',
      height: 200,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 10,
      padding: 10,
      elevation: 2
    },
   
    buttonClose: {
      backgroundColor: '#00CAA7',
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 15,
      width: 80,
    },
    modalText: {
      marginBottom: 25,
      textAlign: "center",
      fontSize: 18
    }
  });

export class ContactBookScreen extends React.Component { 
    state = {
        modalVisible: false
    };
    
    setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
    };

    navigatetoAddContactScreen = () => {
        this.props.navigation.navigate('AddContact');
    };

    renderContactInfo = ({item}) =>  { 
        return(
            <View style = {{height: 110, width: '100%', color: item.value.color}}>
                <HorizontalContainer bgColor = {item.value.color} justifyContent = {'flex-start'}>
                    <StyledProfileImage source={item.value.iconImage}/>
                    <View style = {{height: 60}}>
                        <Text style = {{fontSize: 16, fontWeight: 'bold', marginLeft: 25, marginTop: 30}}>{item.value.name}</Text>
                        <Text  style = {{fontSize: 13, fontWeight: 'normal', marginLeft: 25, marginTop: 10}}>{item.value.contactNo}</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                        <Image source = {require('../../image/edit.png')} style = {{height: 20, marginTop: 40, width: 15, marginLeft: 80}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                        <Image source = {require('../../image/delete.png')} style = {{height: 20, marginTop: 40, width: 15, marginLeft: 20}}/> 
                    </TouchableOpacity> 
                </HorizontalContainer>
            </View>
        )
    };

    render() {
        const { modalVisible } = this.state;
        return(
            <React.Fragment>
                <View style = {{backgroundColor: '#00CAA7', height: 85, width: '100%'}}>
                    <Text style = {{fontSize: 16, fontFamily: 'poppins', fontWeight: 'bold',  textAlign: 'center', marginTop: 20, color: 'white'}}>HI! JACK</Text>
                    <Text style = {{fontSize: 16, fontFamily: 'poppins', fontWeight: 'bold', textAlign: 'center', marginTop: 5, color: 'white'}}>CONTACT BOOK</Text>
                </View>

                <ScrollView height = {'90%'}>
                    <FlatList
                        extraData={this.props} 
                        data={ContactBookData}
                        renderItem={this.renderContactInfo}
                        keyExtractor={(item) => item.key}
                    />
                </ScrollView>
                
                <View style = {{height: 60, width: 60, marginTop: 610, marginLeft: 305, borderRadius: 40, position: 'absolute',  backgroundColor: '#00caa7'}}>
                    <TouchableOpacity onPress={this.navigatetoAddContactScreen} >
                        <Image source = {require('../../image/+1.png')} style = {{height: 25, width: 25, marginTop: 19, marginLeft: 17}}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>EDIT/DELETE ENTRY</Text>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => this.setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>Confirm</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                </View>
            </React.Fragment>
        )
    };
};
