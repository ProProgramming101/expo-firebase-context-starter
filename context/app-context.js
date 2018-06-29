import React from 'react';

//
// Initial State
//

const initialState = {
  favoriteAnimal: "duck"
};

//
// Context...
//

export const AppContext = React.createContext();
export const AppConsumer = AppContext.Consumer;

export class AppProvider extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  
  render() {
    return (
      <AppContext.Provider value={{
        favoriteAnimal: this.state.favoriteAnimal
      }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }

}
