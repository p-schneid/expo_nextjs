import { View, Text, StyleSheet } from "react-native"
import Link from 'next/link'

export default function Navigation(){
    return (
        <View style={styles.nav}>
            <Link href={'/'}>
                <Text>Home</Text>
            </Link>
            <Link href={'/profile'}>
                <Text>Profile</Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      gap: '1rem'
    } 
  });