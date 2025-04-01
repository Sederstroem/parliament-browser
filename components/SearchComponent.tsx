import React, {useState} from 'react';
import {SearchBar} from '@rneui/themed';
import {StyleSheet, Text, View} from 'react-native';
import {Suggestion} from "../lib/types";

type SearchBarComponentProps = {
    suggestions: Suggestion[];

};

const SearchComponent: React.FC<SearchBarComponentProps> = ({ suggestions }) => {
    const [search, setSearch] = useState("");

    const updateSearch = (text: string) => {
        setSearch(text);
    };

    return (
        <View style={styles.view}>
            <SearchBar
                placeholder="Search member"
                onChangeText={updateSearch}
                value={search}
                placeholderTextColor={`#FFFFFF`}
            />
            {suggestions.length > 0 && (
                <View style={styles.suggestionsContainer}>
                    {suggestions.map((suggestion) => (
                        <Text key={suggestion.id} style={styles.suggestionText}>
                            {suggestion.name}
                        </Text>
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        margin: 10,
    },
    suggestionsContainer: {
        marginTop: 5,
        backgroundColor: "#fff",
        padding: 5,
    },
    suggestionText: {
        padding: 5,
        fontSize: 16,
    },
});

export default SearchComponent;