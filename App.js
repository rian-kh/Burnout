import * as React from 'react';
import { StyleSheet ,Button, View, Text, Image, TouchableOpacity,} from 'react-native';


// Dropdown: Maybe like 1min to 30min
// At the top, have "Enter custom time..." that lets you use a keypad to type in 

// Maybe add a pause button for the break?

const Header = () => {
  return (
    <View style={styles.header_container}>
        <View style={styles.iconContainer}>
          <Image source={require('./assets/img/menu.png')} style={styles.icon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.header_container_text}>Burnout</Text>
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.icon} />
        </View>
    </View>
  );
};

const Body = () =>{
  return(
        <View style = {styles.body_container}>
        </View>
  );
};

const Menu = () =>{
  return(
        <View style = {styles.menu_container}>
          
          <View style = {styles.menu_rectangle}>
            
            <TouchableOpacity onPress={() => {/* do this */}}>
              <View style = {styles.homebtn}>
                <Image source={require('./assets/img/home.png')}  />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {/* do this */}}>
              <View style = {styles.actionbtn}>
                <Text style={styles.action_text}>Spark</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {/* do this */}}>
              <View style = {styles.homebtn}>
                <Image source={require('./assets/img/match.png')}  />
              </View>
            </TouchableOpacity>

          </View>
          
        </View>
  );
};

const App = () =>{
    return(
      <View style={styles.container}>
        <Header />
        <Body />
        <Menu/>
     </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the entire height of the screen
    flexDirection: 'column',
  },  

  header_container_text: {
    color: '#6F5044',
    fontSize: 32, 
    textDecorationLine: 'underline', 
    fontWeight: 'bold', 
    fontFamily: 'SF Pro', 
  },

  header_container: {
    flex: 2,
    backgroundColor: '#EED1B6',
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 }, // Adjust shadow offset
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    overflow: 'visible', 
  },

  body_container: {
    flex: 12,
    backgroundColor: '#FFEDDC',
    flexDirection: 'column',
    padding: 5,
  },

  menu_container: {
    backgroundColor: '#FFEDDC',
    flex: 2,
    alignItems: 'center', // Center the text horizontally
    
  },

  homebtn: {   
    backgroundColor: '#EED1B6',
    width: 57,
    height: 57,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 }, // Adjust shadow offset
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  action_text:{
    color: '#6F5044',
    fontSize: 25, 
    fontWeight: 'bold', 
    fontFamily: 'SF Pro',
  },

  actionbtn: {   
    backgroundColor: '#EED1B6',
    width: 131,
    height: 57,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 }, // Adjust shadow offset
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  menu_rectangle: {
    backgroundColor: '#EED1B6',
    width: 337,
    height: 84,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 }, // Adjust shadow offset
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  
  icon: {
    width: 24, // Set the width of your icon
    height: 24, // Set the height of your icon
    resizeMode: 'contain', // Adjust the resizeMode as needed
  },

  iconContainer: {
    marginRight: 10, // Adjust the margin as needed
  },

  textContainer: {
    flex: 1,
    alignItems: 'center', // Center the text horizontally
  },
});

export default App;