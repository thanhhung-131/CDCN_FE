import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
const UserProfile = () => {
    return (
        <View style={{padding: 20, width: "100vw" }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Account</Text>
            <Image
                source={{ uri: 'https://i.pinimg.com/564x/4b/22/57/4b22571e202097c0a14a53a686dc96b2.jpg' }}
                style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 20, alignSelf: 'center' }}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Favorite</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Edit Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Settings and Privacy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Settings and Privacy</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    button: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
};

export default UserProfile;
