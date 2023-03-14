import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import ItemListFood from '../ItemListFood';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
    }}
    style={{backgroundColor: 'white'}}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8d92a3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const NewTaste = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={{marginBottom: 60, height: 400}}>
        <ItemListFood image={FoodDummy1} />
        <ItemListFood image={FoodDummy2} />
        <ItemListFood image={FoodDummy3} />
        <ItemListFood image={FoodDummy4} />
        <ItemListFood image={FoodDummy1} />
        <ItemListFood image={FoodDummy2} />
        <ItemListFood image={FoodDummy3} />
        <ItemListFood image={FoodDummy4} />
      </View>
    </ScrollView>
  );
};

const Popular = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={{marginBottom: 60, height: 400}}>
        <ItemListFood image={FoodDummy1} />
        <ItemListFood image={FoodDummy2} />
        <ItemListFood image={FoodDummy3} />
        <ItemListFood image={FoodDummy4} />
        <ItemListFood image={FoodDummy1} />
        <ItemListFood image={FoodDummy2} />
        <ItemListFood image={FoodDummy3} />
        <ItemListFood image={FoodDummy4} />
      </View>
    </ScrollView>
  );
};

const Recommended = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={{marginBottom: 60, height: 400}}>
        <ItemListFood image={FoodDummy1} />
        <ItemListFood image={FoodDummy2} />
        <ItemListFood image={FoodDummy3} />
        <ItemListFood image={FoodDummy4} />
        <ItemListFood image={FoodDummy1} />
        <ItemListFood image={FoodDummy2} />
        <ItemListFood image={FoodDummy3} />
        <ItemListFood image={FoodDummy4} />
      </View>
    </ScrollView>
  );
};

const renderScene = SceneMap({
  1: NewTaste,
  2: Popular,
  3: Recommended,
});

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
