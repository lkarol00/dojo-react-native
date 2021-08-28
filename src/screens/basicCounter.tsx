import React from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { FabButton } from '../components/fabButton';
 
export const BasicCounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View style={styles.container} >
            <Text style={styles.taxItem} > Contador: {counter}</Text>
            <FabButton title='-1' position='left' onClick={ () => { setCounter(counter - 1); } } />
            <FabButton title='+1' position='right' onClick={ () => { setCounter(counter + 1); } } />

            {/*<TouchableOpacity style={styles.fabToRight} onPress={ () => { setCounter(counter + 1); } } >
                <View style={styles.btnInc}>
                    <Text style={styles.fabText}>+1</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.fabToLeft} onPress={ () => { setCounter(counter - 1); } } >
                <View style={styles.btnDec}>
                    <Text style={styles.fabText}>-1</Text>
                </View>
            </TouchableOpacity>*/}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DAF7A6',
        justifyContent: 'center'
    },
    taxItem: {
        fontSize: 40,
        textAlign: 'center'
    },
    fabToRight: {
        position: 'absolute',
        bottom: 20,
        right: 20
    },
    fabToLeft: {
        position: 'absolute',
        bottom: 20,
        left: 20
    },
    btnInc: {
        backgroundColor: 'green',
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: 'center'
    },
    btnDec: {
        backgroundColor: 'red',
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: 'center'
    },
    fabText: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    }
});
