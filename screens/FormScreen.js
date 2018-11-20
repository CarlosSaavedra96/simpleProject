import React, { Component } from 'react';
import { View, 
    Text, 
    StyleSheet,
    Picker,
    TextInput,
    TouchableHighlight,
    KeyboardAvoidingView
} from 'react-native';
import Header from '../components/Header';
import CheckBox from 'react-native-check-box';
import DatePicker from 'react-native-datepicker'

export default class FormScreen extends Component {
    navigationOptions = {
        title:'Form',
    };
    
    constructor(props) {
        super(props);
        this.state = {
            type:'',
            important:false,
            title:'',
            date:'',
        }
    }

    render() {
        return(
            <View style={ styles.container }>
                <Header title={ this.navigationOptions.title } />
                <KeyboardAvoidingView style={ styles.fieldsContainer }>
                    <Text style={ styles.title }>
                        Notes
                    </Text>
                    <Picker
                        selectedValue={this.state.type}
                        itemStyle={ styles.text }
                        onValueChange={(type) => this.setState({type})}
                    >
                        <Picker.Item label='Appointment' value='Appointment'/>
                        <Picker.Item label='Reminder' value='Reminder'/>
                        <Picker.Item label='Task' value='Task'/>
                    </Picker>
                    <CheckBox
                        rightTextStyle={ styles.text }
                        onClick={()=>{
                            this.setState({
                                important:!this.state.important
                            })
                          }}
                        isChecked={this.state.important}
                        rightText={"Important"}
                    />
                    <TextInput 
                        placeholder={'Title'}
                        onChangeText={(title) => this.setState({title})}
                        style={ [styles.text, styles.textField] }
                    />
                    <DatePicker
                        style={ styles.datePicker }
                        date={this.state.date}
                        mode="date"
                        placeholder="Select date"
                        format="DD-MM-YYYY"
                        minDate="2016-05-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        onDateChange={(date) => this.setState({date})}
                        />
                    <TouchableHighlight
                        style={ styles.button }
                        onPress={() => this._handleSubmit}
                    >
                        <Text style={ styles.text }>
                          Save
                        </Text>
                    </TouchableHighlight>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    fieldsContainer: {
        flex: 8,
        paddingHorizontal: 50,
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 26,
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
    },
    datePicker: {
        width:null
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2',
        elevation: 1,
        borderRadius: 5,
        height: 35,
    },
    textField: {
        backgroundColor: '#f2f2f2',
        borderBottomWidth: 1,
    }
});