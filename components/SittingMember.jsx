import {Image, View, Text, StyleSheet} from "react-native";

export default function SittingMember({ name, image }) {
    const defaultImage = "https://blogs.mathworks.com/images/steve/87/default_image_story_01.jpg";
    const imageUrl = image && image.url ? image.url : defaultImage;
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
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
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    }
});