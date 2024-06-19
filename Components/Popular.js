import {View, Image, Text} from 'react-native'
import Facebook from "../assets/fb.png"
import Google from "../assets/go.png"
import bf from "../assets/bf.png"
import burger from "../assets/burger.png"


const popularData = [
    {name: 'Software', company: 'Facebook', location: 'America/Los_Angeles', image: burger, backgroundColor: 'white'},
    {name: 'Software', company: 'Facebook', location: 'America/Los_Angeles', image: bf, backgroundColor: 'white'},
    {name: 'Software', company: 'Facebook', location: 'America/Los_Angeles', image: Google, backgroundColor: 'white'},
    {name: 'Software', company: 'Facebook', location: 'America/Los_Angeles', image: Facebook, backgroundColor: 'white'},
    {name: 'Software', company: 'Facebook', location: 'America/Los_Angeles', image: burger, backgroundColor: 'white'},
    {name: 'Software', company: 'Facebook', location: 'America/Los_Angeles', image: bf, backgroundColor: 'white'},
    {name: 'Software', company: 'Facebook', location: 'America/Los_Angeles', image: Google, backgroundColor: 'white'},
    {name: 'Software', company: 'Facebook', location: 'America/Los_Angeles', image: Facebook, backgroundColor: 'white'},
  ]

const Popular = () => {
    return (
      <View style={{display: 'flex', flexDirection: 'column', gap: 10, margin: 20}}>
        {
          popularData.map((item, index) => {
            return (
                <View key={index} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: item.backgroundColor, paddingVertical: 15, paddingHorizontal: 10, borderRadius: 15,}}>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap:10}}>
                        <Image source={item.image} style={{width: 40, height: 40}} />
                        <View>
                            <Text>{item.name}</Text>
                            <Text>{item.company}</Text>
                        </View>
                        
                    </View>
                    <View>
                        <Text>{item.location}</Text>
                        <Text>200/yr</Text>
                    </View>
                </View>
            )
          })
        }
        </View>
    )
  }
  
  export default Popular;
  