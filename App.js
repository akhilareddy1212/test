import React from 'react';  
import { FlatList,View, Text, Button ,Image,StyleSheet, ImageBackground,ScrollView,Footer,FooterTab, TouchableWithoutFeedback, Alert,} from 'react-native';  
import {  createAppContainer } from 'react-navigation';  

import { createStackNavigator } from 'react-navigation-stack';
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import data from "./src/data.json";
  
class HomeScreen extends React.Component {  
    static navigationOptions = {  
        title: 'Home',  
        headerStyle: {  
            backgroundColor: '#fca605',  
        },  
        //headerTintColor: '#0ff',  
        headerTitleStyle: {  
            fontWeight: 'bold',
        },  
    };  

      constructor(){
              super();
              this.state={
                   data:[
                      // {
                        
                      //     id: 1,
                      //     category:'advertisement',
                      //     title: 'please subscribe to view more exclusive contents.',
                      //     image: require('./assets/malls-tenants-innovation-Simon-retail.jpg')
                  
                      // },
                  
                      // {
                      //     id: 2,
                      //     category:'advertisement',
                      //     title: '2 months for only Rm 15.90 for offline movies',
                      //     image: require('./assets/malls-tenants-innovation-Simon-retail.jpg') 
                  
                      // },

                      {
                        id: 3,
                        category:'Science Friction',
                        title: 'Blade Runner Future 2049',
                        image: require('./assets/Blade_Runner_2049_poster.png') ,
                        rating: 4.0
                
                    },
                    {
                        id: 4,
                        category:'Science Friction',
                        title: 'Captain American Civil War',
                        image: require('./assets/captain-amarican.jpg'),
                        rating: 3.5
                
                    },
                    {
                        id: 5,
                        category:'Romance',
                        title: 'Beauty and the Beast',
                        image: require('./assets/maxresdefault.jpg') ,
                        rating: 2.5
                
                    },
                    {
                        id: 6,
                        category:'DRAMA',
                        title: 'Shawshank Redemprtion',
                        image: require('./assets/images.jpg') ,
                        rating: 3.0
                
                    }
                      




                      
                    


                   ]
                

              }


    }
  
    render() {  
     
        return (  
          <View style={styles.container} >
            <View> 
                <Text style={styles.maintext}>Cinema around your area</Text>
                </View>  


                <View style={styles.intro}>

                <ScrollView horizontal={true}>
            <ImageBackground  style={styles.image}
            source={require('./assets/Boosting mall revenues_1536x1536_200.jpg') }
            
            >
            <View style={styles.child}>
            <Text style={styles.text}>IOI CITY MALL</Text>
          </View>
           </ImageBackground>
              
            <ImageBackground  style={styles.image}
            source={require('./assets/download.jpg') }>
            <View style={styles.child}>
            <Text style={styles.text}>PAVILION MALL</Text>
          </View>
          </ImageBackground> 
            <ImageBackground  style={styles.image}
            source={require('./assets/download (1).jpg') }>
            <View style={styles.child}>
            <Text style={styles.text}>NU SENTRAL</Text>
          </View>
            </ImageBackground> 
            <ImageBackground style={styles.image}
            source={require('./assets/download (2).jpg') }>
            <View style={styles.child}> 
            <Text style={styles.text} > MID VALLEY</Text>
          </View>
            </ImageBackground>  
            </ScrollView>
            
            </View> 



            <View style={styles.childcontainer}>
            <ScrollView horizontal={true}>
           <View >
           <View> 
                <Text style={styles.maintext}>New releases</Text>
                </View>
                <FlatList
                   data={this.state.data}
                   horizontal={true}
                   renderItem ={
                             ({item})=>
                             <View style={{flexDirection:'column',}} >
                                <Image source={item.image} style={styles.image}/>
                              
                                <Text style={{ fontSize:10,}}>{item.category}</Text>
                                
                                  <Text style={{ fontSize:10,}}>{item.rating}</Text>
                               
                                
                                <Text style={{ fontSize:15,fontWeight:'bold',}}>{item.title}</Text>
                                
                                </View>
                   }



                  //  StarRating from 'react-native-star-rating'; 
                  //  class GeneralStarExample extends Component
                  //   { 
                  //     constructor(props)
                  //      { super(props);
                  //         this.state = { starCount: 3.5 }; }
                  //          onStarRatingPress(rating)
                  //           { this.setState({ rating: rating }); } 
                  //           render()
                  //            { return ( 
                  //              <StarRating disabled={false} maxStars={5} rating={this.state.starCount} 
                  //              selectedStar={(rating) => this.onStarRatingPress(rating)} /> ); } 
                  //            } export default GeneralStarExample







                
                
                
                
                />
           
           </View>
           </ScrollView>
           </View>
           


            <View style={styles.footer}>


            <Text style={styles.maintext}>
            You might want to see
            </Text>
            
            </View>
            <View style={{
              position:'absolute',
              alignSelf:'center',
              backgroundColor:'#fca605',
              width:70,
              height:70,
              borderRadius:40,
              bottom:35,
              zIndex:10

            }}>
            
            <TouchableWithoutFeedback onPress={this.toggleOpen}>
                    <View style={[styles.button,styles.actionBtn]}>
                          <Image style={{width:45,height:45,}}
                           resizeMode='contain' 
                           source={require('./assets/popcorn.jpg')}/>
                    </View>

            </TouchableWithoutFeedback>
            </View>
            <View style={{position:'absolute',backgroundColor:'white',
            border:2,radius:3,shadowOpacity:0.3,shadowRadius:3,shadowOffset:{height:3,width:3},
            
            x:0,y:0,style:{marginVertical:5},bottom:0,width:'100%',height:70,flexDirection:'row',
            justifyContent:'space-between',paddingVertical:10,paddingHorizontal:25}}>
            <View style={{
              flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity onPress={() => {Alert.alert('click')}}>
              <Image style={{width:30,height:30,}} source={{uri:'http://pluspng.com/img-png/home-icon-png-home-house-icon-image-202-512.png'}}
              onPress={() => {Alert.alert("")}}>
              
              </Image>
              </TouchableOpacity>
              <Text style={{justifyContent:'center',alignItems:'center',}}>Home</Text>
              </View>
              <View style={{
                flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity onPress={() => {Alert.alert('click')}}>
                <Image style={{width:30,height:30,}} source={require('./assets/ticketicon.jpg') }
                onPress={() => {Alert.alert("")}}>
                
                </Image>
                </TouchableOpacity>
                <Text style={{justifyContent:'center',alignItems:'center',}}>Home</Text>
                </View>
                <View style={{
                  flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                  <TouchableOpacity onPress={() => {Alert.alert('click')}}>
                  <Image style={{width:30,height:30,}} source={require('./assets/movie.png') }
                  onPress={() => {Alert.alert("")}}>
                  
                  </Image>
                  </TouchableOpacity>
                  <Text style={{justifyContent:'center',alignItems:'center',}}>Home</Text>
                  </View>
                  <View style={{
                    flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity onPress={() => {Alert.alert('click')}}>
                    <Image style={{width:30,height:30,}} source={require('./assets/cinema.png') }
                    onPress={() => {Alert.alert("")}}>
                    
                    </Image>
                    </TouchableOpacity>
                    <Text style={{justifyContent:'center',alignItems:'center',}}>Home</Text>
                    </View>
                </View>
            </View>
        );  
    }  
}  

  
const AppNavigator = createStackNavigator(  
    {  
        Home: HomeScreen,  
         
    },  
    {  
        initialRouteName: "Home"  
    }  
);  
  
const AppContainer = createAppContainer(AppNavigator);  
export default class App extends React.Component {  
    render() {  
        return <AppContainer />;  
    }  
}  
const styles = StyleSheet.create({
  container:{
    flex:1,

  },
  intro: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginLeft:25,
    marginRight:25,

    
    
  },
  childcontainer:{
    
    
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "red",
    borderRadius: 6,
    padding:20,
    
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"

  },
  image:{
    overflow: 'hidden',
    
    width:150,
    height:150,
    
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    marginTop:10,
    marginLeft:25,
    marginRight:25,
  },
  child: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    color:'white',
    textAlign:'center',
    textAlignVertical: 'center'
  },
  maintext:{
    color:'black',
    fontWeight:'bold',
    fontSize:20,
    marginLeft:25,
  },
  button:{
    width:60,
    height:60,
    alignItems:'center',
    shadowColor:'grey',
    justifyContent:'center',
    shadowOpacity:0.1,
    shadowOffset:{x:2,y:0},
    shadowRadius:2,
    borderRadius:30,
    position:'absolute',
    bottom:20,
    right:0,
    top:5,
    left:5,
    shadowOpacity: 5.0,

    


  },

  actionBtn:{
    backgroundColor:'#fca605',
    textShadowOffset:{width:5,height:5},
    textShadowRadius:10,
    borderWidth:2,
    borderColor:'#fca605'
  }


  
})


 