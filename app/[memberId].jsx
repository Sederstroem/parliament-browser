// import {Text} from 'react-native';
// import {useEffect, useState} from "react";
// import {useLocalSearchParams} from "expo-router";
//
// // I have added a commit of every changes so far, have not added files yet
// export default function MemberId() {
//     // Maybe usestate to store the member in a variable?
//     const [member, setMember] = useState(null);
//     const { id } = useLocalSearchParams();
//
//     useEffect(() => {
//         async function fetchData() {
//             const response = await fetch(`https://api.lagtinget.ax/api/persons/${id}`);
//             const result = await response.json();
//             setMember(result);
//         }
//         fetchData();
//         }
//     )
//     console.log("This is member: " + member);
//     return(
//         <Text>
//             {member.name}
//         </Text>
//     )
// }