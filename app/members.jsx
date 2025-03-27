import {useEffect, useState} from "react";
import {Button, FlatList, ScrollView, Text, TextComponent, View} from "react-native";
import SittingMember from "../components/SittingMember";
import {useRouter} from "expo-router";

export default function MembersScreen() {
    const [members, setMembers] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await fetch("https://api.lagtinget.ax/api/persons.json?state=1");
                const data = await response.json();
                setMembers(data);
            } catch (error) {
                console.error("Error fetching members:", error);
            }
        };
        fetchMembers();

    }, []);


    return (
        <ScrollView>
            <Text>Alla sittande ledamöter</Text>
            <Button title={"Home Page"} onPress={() => router.push("/")}></Button>
        <View>
            <FlatList
                data={members}
                keyExtractor={(item) => item.id.toString()} // Ensure key is a string
                renderItem={({ item }) => (
                    <SittingMember name={item.name} image={item.image}></SittingMember>
                )}
            />
        </View>
        </ScrollView>
    )
}