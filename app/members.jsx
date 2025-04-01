import {useEffect, useState} from "react";
import {Button, FlatList, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import SittingMember from "../components/SittingMember";
import {useRouter} from "expo-router";

export default function MembersScreen(props) {
    const [members, setMembers] = useState(null);
    const router = useRouter();

    // This is the uri when a person is selected: https://api.lagtinget.ax/api/persons/210
    // NO .json
    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await fetch(
                    "https://api.lagtinget.ax/api/persons.json?state=1",
                    {mode: 'no-cors'}
                );
                const data = await response.json();
                setMembers(data);
            } catch (error) {
                console.error("Error fetching members:", error);
            }
        };
        fetchMembers();

    }, []);


    return (
        <SafeAreaView>
                <Text>Every seating member</Text>
                <Button title={"Home Page"} onPress={() => router.push("/")}></Button>
            <View>
                <FlatList
                    data={members}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => router.push(`/members/${item.id}`)}>
                            <SittingMember name={item.name} image={item.image} />
                        </TouchableOpacity>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}