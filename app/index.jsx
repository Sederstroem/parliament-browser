import {Button, ScrollView, StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useRouter} from "expo-router";

export default function IndexScreen() {
    const router = useRouter();
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>Parliament Browser!!!!!</Text>
                <StatusBar style="auto" />
                <Button title={"Sitting members"} onPress={() => router.push("/members")}></Button>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});