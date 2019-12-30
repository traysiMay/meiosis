import React, { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import * as firebase from 'firebase';

export default function Wallet() {
    const [image, setImage] = useState()
    useEffect(() => {
        (async () => {
            // const { status } = ImagePicker.requestCameraPermissionsAsync();
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            console.log(status)
            // setHasPermission(status === "granted");
        })();
    }, []);

    const _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri)
            const response = await fetch(result.uri);
            const blob = await response.blob();

            var ref = firebase.storage().ref().child("images/" + Math.floor(Math.random() * 100));
            return ref.put(blob);
        }
    };


    return (
        <View style={styles.container}>
            <Text>WELLET</Text>
            <Button
                title="Pick an image from camera roll"
                onPress={_pickImage}
            />
            {image &&
                <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
});
