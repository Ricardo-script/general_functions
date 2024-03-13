import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
    NavigationHelpers,
    ParamListBase,
    TabNavigationState,
} from "@react-navigation/native";
import {
    BottomTabDescriptorMap,
    BottomTabNavigationEventMap,
} from "@react-navigation/bottom-tabs/lib/typescript/src/types";

interface TabBarProps {
    state: TabNavigationState<ParamListBase>;
    descriptors: BottomTabDescriptorMap;
    navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

export default function MyTabBar({
    state,
    descriptors,
    navigation,
}: TabBarProps) {
    return (
        <View
            style={{
                flexDirection: "row",
                height: 71,
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                backgroundColor: "purple",
            }}
        >
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: "tabLongPress",
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        key={index}
                    >
                        <FontAwesome
                            name="home"
                            color={isFocused ? "#673ab7" : "#222"}
                            size={24}
                        />
                        <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>
                            {label.toString()}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}


/* 
   <Tab.Navigator
        screenOptions={{
            headerShown: false,
        }}
        tabBar={(props) => <MyTabBar {...props} />}
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Sobre" component={Sobre} />
        <Tab.Screen name="Contato" component={Contato} />
    </Tab.Navigator>
*/
