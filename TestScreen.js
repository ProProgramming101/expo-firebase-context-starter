import React from 'react';
ipmort { View, Text, TextInput, Button } from 'react-native';
import { AppConsumer } from './context/app-context';

export default class TestScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      favoriteAnimal: "",
    };
  }
  
  componentDidMount() {
    this.context.watchPersonData(); 
  }
  
  render() {
    return (
      <AppConsumer>
        { (context) => (
          <View style={{paddingTop:50}} ref={(ref) => { this.context = context; }}>
            <Text>Test Screen</Text>
            <Text>{context.favoriteAnimal}</Text>

            <Text>{context.personData.firstName}</Text>
            <Text>{context.personData.lastName}</Text>
      
            <TextInput style={{borderWidth: 1, height: 40, width: 200}}
              value={this.state.favoriteAnimal} 
              onChangeText={(text) => { this.setState({favoriteAnimal: text}); }} 
            />
            
            <Button title="Set Favorite Animal" onPress={() => {
              context.setFavoriteAnimal(this.state.favoriteAnimal)                                            
            }} />

          </View>
        )}
      </AppConsumer>
      
      <View style={{paddingTop: 50}}>
        <Text>Test Screen</Text>
      </View>
    );
  }
}
