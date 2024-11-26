import React, {useState} from "react";
import {datasource} from "./Data";
import {TextInput, View, Text, Button, Alert} from "react-native";

const Edit = ({navigation, route}) => {
    const [letter, setLetter] = useState(route.params.key);
    return (
        <View>
            <Text style={{fontWeight: "bold"}}>Letter:</Text>
            <TextInput
                style={{
                    borderWidth: 1,
                    marginBottom: 10,
                }}
                value={letter}
                onChangeText={(text) => setLetter(text)}
                maxLength={1}
            />
            <View style={{flexDirection: "row", justifyContent: "space-around"}}>
                <View style={{flex: 1, marginRight: 10, paddingLeft: 10}}>
                    <Button title="Save"
                            onPress={() => {
                                let indexNum = 1;
                                if (route.params.type == "Vowels") {
                                    indexNum = 0;
                                }
                                datasource[indexNum].data[route.params.index].key = letter;
                                navigation.navigate("Home")
                            }
                        }/>
                </View>
                <View style={{flex: 1, marginLeft: 10, paddingRight: 10}}>
                    <Button title="Delete"
                            onPress={() => {
                                let indexNum = 1;
                                if (route.params.type == "Vowels") {
                                    indexNum = 0;
                                }
                                Alert.alert("Are you sure?", "", [{text: "Yes", onPress:() => {
                                    datasource[indexNum].data.splice(route.params.index, 1);
                                    navigation.navigate("Home");
                                    }
                                },
                                    { text: 'No' }
                                ])
                            }} />
                </View>
            </View>
        </View>
    );
};

export default Edit;
