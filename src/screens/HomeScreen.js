import React from "react"
import { View, Text, SafeAreaView, ScrollView } from "react-native"
import HomeCards from "../components/HomeCards"
import { tasksData } from "../utils/dummyData"


const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <ScrollView>
                {tasksData.map((item) => {
                    return (
                        <>
                            <HomeCards
                                TaskNumber={`Task ${item.taksnumer}`}
                                TaskTitle={item.taskTitle}
                                onPass={() => { navigation.navigate(item.route) }}
                            />
                        </>
                    )
                })

                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen