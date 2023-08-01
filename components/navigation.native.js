import { StyleSheet, View, Text } from "react-native";


export default function Navigation(){
    return (
        <View style={styles.nav}>
            <Text>Home</Text>
            <Text>Profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
      marginTop: 16,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      gap: 16
    } 
  });