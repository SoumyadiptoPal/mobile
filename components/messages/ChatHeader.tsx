import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from '@expo/vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';

const ChatHeader = (props: any) => {
  const navigation = useNavigation();
  const tap: boolean = false;
  const name: String = 'Alok';

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={(): void => navigation.navigate('Contacts')}
      >
        <AntDesign name="arrowleft" size={24} color={'white'} />
      </TouchableOpacity>
      <View style={styles.profileOptions}>
        <View style={styles.item}>
          <View style={styles.avatar}>
            <Text style={styles.firstletter}>{name.charAt(0)}</Text>
          </View>
          <View style={styles.bgfirstletter}></View>
          <Text style={styles.Name}>{name}</Text>
        </View>
        <View style={styles.options}>
          <TouchableOpacity style={styles.righticon} onPress={() => props.data(!tap)}>
            <Icon name="ellipsis-v" size={25} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#073F24',
    paddingTop: 10,
    paddingBottom: 5,
  },
  backButton: {
    alignSelf: 'center',
    paddingHorizontal: 10,
  },
  profileOptions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#fff',
    flex: 4,
  },
  item: {
    padding: 5,
    marginVertical: 1,
    marginHorizontal: 2,
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  Name: {
    fontSize: 24,
    marginLeft: 18,
    color: 'white',
    fontWeight: '600',
    letterSpacing: 1,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25.5,
    backgroundColor: '#FFF0DE',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  image: {
    height: 65,
    width: 65,
    borderRadius: 32.5,
  },
  firstletter: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 16,
    paddingTop: 8,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#073F24',
  },
  bgfirstletter: {
    height: 15,
    width: 15,
    borderRadius: 7.5,
    backgroundColor: '#FFF0DE',
    marginTop: 28,
    marginLeft: -10,
    borderColor: '#073F24',
    borderWidth: 2,
  },
  usernameAndOnlineStatus: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  username: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  righticon: {
    paddingHorizontal: 20,
  },
  onlineStatus: {
    color: 'white',
    fontSize: 16,
  },
  options: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default ChatHeader;