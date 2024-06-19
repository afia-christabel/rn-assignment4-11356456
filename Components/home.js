import { Image, SafeAreaView, StyleSheet, Text, View, TextInput, FlatList, ScrollView} from 'react-native'
import React from 'react'
import Avatar from "../assets/avatar.png" 
import Filter from "../assets/filter.png"
import Search from "../assets/search.png" 
import Facebook from "../assets/fb.png"
import Google from "../assets/go.png"
import Popular from './Popular'

const data = [
  {id: '1', name: 'Software Developer', company: 'Facebook', location: 'America/Los_Angeles', backgroundColor: 'purple', image: Facebook, salary: '100',},
  {id: '2', name: 'Software Developer', company: 'Facebook', location: 'America/Los_Angeles', backgroundColor: 'gray', image: Google, salary: '100',},
  {id: '3', name: 'Software Developer', company: 'Facebook', location: 'America/Los_Angeles', backgroundColor: 'pink', image: Facebook, salary: '100',},
  {id: '4', name: 'Software Developer', company: 'Facebook', location: 'America/Los_Angeles', backgroundColor: 'yellow', image: Google, salary: '100',},
  {id: '5', name: 'Software Developer', company: 'Facebook', location: 'America/Los_Angeles', backgroundColor: 'limegreen', image: Facebook, salary: '100',},
  {id: '6', name: 'Software Developer', company: 'Facebook', location: 'America/Los_Angeles', backgroundColor: 'orange', image: Google, salary: '100',},
  {id: '7', name: 'Software Developer', company: 'Facebook', location: 'America/Los_Angeles', backgroundColor: 'purple', image: Facebook, salary: '100',},
  {id: '8', name: 'Software Developer', company: 'Facebook', location: 'America/Los_Angeles', backgroundColor: 'orange', image: Google, salary: '100',},
]


const renderData = () => {
  return (
    <View style={{ display: 'flex', gap: 10, flexDirection: 'row', marginHorizontal: 20}}>
      {
        data.map((item) => {
          return (
            <View key={item.id} style={{backgroundColor: item.backgroundColor, padding: 20, width: 260, height: 170, borderRadius: 10, marginVertical: 20,}}>
              <View style={{display: 'flex', flexDirection: 'row', gap:10}}>
                <Image source={item.image} style={{width: 50, height: 50}} />
                <View>
                  <Text style={{fontWeight: "bold"}}>{item.name}</Text>
                  <Text>{item.company}</Text>
                </View> 
              </View>
              <View style={{paddingTop: 70, display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between'}}>
                <Text>{item.location}</Text>
                <Text>${item.salary}</Text>
              </View>
            </View>
          )
        })
      }
    </View>
  )
  
  
}


const Home = ({route}) => {
  const {name, email} = route.params
  
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20}}>
        <View>
          <Text style={{fontWeight: "bold", fontSize: 22 }}>{name}</Text>
          <Text style={{color: "gray"}}>{email}</Text>
        </View>
        <Image source={Avatar} style={{width: 80, height: 80}}/>
      </View>
      <View style={{display: "Flex", flexDirection:"row", justifyContent:"space-between", alignItems: "center", paddingHorizontal:20}}>
        <View style={{display: "Flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap:5, padding:15, borderRadius: 10, borderWidth: 1}}>
          <Image source={Search} style={{width: 30, height: 30}}/>
          <TextInput style={{fontSize:"18", width: 250}} placeholder="Search a job or position"/>
        </View>
        <Image source={Filter} style={{width: 80, height: 80}}/>
      </View>
      <View style={{display:"flex", paddingTop: 20,  flexDirection:"row", justifyContent:"space-between", alignItems: "center", paddingHorizontal:20 }}>
        <Text style={{fontWeight:"bold", }}>Featured jobs </Text>
        <Text>See all</Text>
      </View>
      <FlatList
        data={data.slice(0, 1)}
        renderItem={renderData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
      />    
      <View style={{display:"flex", paddingTop: 20,  flexDirection:"row", justifyContent:"space-between", alignItems: "center", paddingHorizontal:20 }}>
        <Text style={{fontWeight:"bold", }}>Popular jobs </Text>
        <Text>See all</Text>
      </View>
      <View>
        <Popular/>
      </View>

      
       
      

    </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})