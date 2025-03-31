import {StyleSheet, Text, View} from "react-native";
import {Avatar, ListItem} from '@rneui/themed';

export default function SittingMember({ name, image }) {
    return (
        <ListItem >
            <Avatar
                size={64}
                rounded
                source={image && typeof image.url === "string" ?
                    { uri: image.url } : require("../assets/default_image_story_01.jpg")} // In case image is null
            />
            <ListItem.Content>
                <ListItem.Title>{name}</ListItem.Title>
            </ListItem.Content>
        </ListItem>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        marginBottom: 5,
        backgroundColor: "#f9f9f9"
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 10,
    }
});