import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import {Image} from "@rneui/base";

export default function MemberId() {
    const { memberId } = useLocalSearchParams();
    const [member, setMember] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://api.lagtinget.ax/api/persons/${memberId}`);
                const result = await response.json();
                setMember(result);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        if (memberId) {
            fetchData();
        }
    }, [memberId]);

    if (loading) {
        return <ActivityIndicator size="large" />;
    }

    if (!member) {
        return <Text>No member found</Text>;
    }

    return (
        <View>
            <Text>{member.name}</Text>
            <Text>Email: {member.email}</Text>
        </View>
    );
}
