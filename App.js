// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
// import { useEffect, useState } from 'react';
// import QRCode from 'react-native-qrcode-svg';
// import * as Contacts from 'expo-contacts';
// export default function App() {
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState(null);
//   const [items, setItems] = useState([
//     { label: 'Apple', value: 'apple' },
//     { label: 'Banana', value: 'banana' },
//     { label: 'Apple', value: 'ap' },
//     { label: 'Banana', value: 'ba' },
//   ]);
//   useEffect(() => {
//     (async () => {
//       const { status } = await Contacts.requestPermissionsAsync();
//       if (status === 'granted') {
//         const { data } = await Contacts.getContactsAsync({
//           fields: [Contacts.Fields.PhoneNumbers],
//         });

//         if (data.length > 0) {
//           const contact = data[3];
//           console.log(contact);
//         }
//       }
//     })();
//   }, []);

//   let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <DropDownPicker
//         open={open}
//         value={value}
//         items={items}
//         setOpen={setOpen}
//         setValue={setValue}
//         setItems={setItems}
//       />

//       <View className='flex-initial w-full flex-col items-center justify-start bg-[#FDEEA4] py-1 '>
//         <Text>Erika Torres</Text>
//         <Text>Erika Torres</Text>
//       </View>
//       <StatusBar style='auto' />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import * as Contacts from 'expo-contacts';
import React, { useEffect, useState } from 'react';

const app = () => {
  const [error, setError] = useState(undefined);
  const [contacts, setContacts] = useState();
  const [searchText, setSearchText] = useState();
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [
            Contacts.Fields.FirstName,
            Contacts.Fields.LastName,
            Contacts.Fields.PhoneNumbers,
          ],
        });

        if (data.length > 0) {
          setContacts(data);
          // setFilteredContacts(contacts);
        } else {
          setError('No contacts found');
        }
      } else {
        setError('Permission to access contacts is denied');
      }
    })();
  }, []);
  // const searchFilteredData = searchText
  //   ? data.filter((x) =>
  //       x.firstName.toLowerCase().includes(searchText.toLowerCase())
  //     )
  //   : data;

  const renderItem = ({ item }) => {
    if (item !== undefined) {
      if (item.phoneNumbers) {
        return (
          <View style={styles.contact}>
            <View style={styles.contactRight}>
              <View style={styles.placeholderAvatar}>
                <Text>
                  {item.firstName ? item.firstName[0] : ''}
                  {item.lastName ? item.lastName[0] : ''}
                </Text>
              </View>
              <View>
                <Text>
                  {item.firstName && item.LastName
                    ? `${item.firstName} ${item.lastName}`
                    : `${item.firstName}`}
                </Text>

                <Text>{item.phoneNumbers[0].number}</Text>
              </View>
            </View>
          </View>
        );
      }
    }
  };

  return (
    <>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TextInput
          placeholder='Search...'
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          style={styles.input}
        />
        <TextInput
          placeholder='Search...'
          style={styles.searchBar}
          setValue={setSearchText}
          value={searchText}
        />
        {/* <FlatList
              data={contacts}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            /> */}
        <Pressable onPress={Keyboard.dismiss} style={styles.dismisser}>
          <View style={styles.topContainer}>
            <Text style={styles.heading}>Contacts</Text>
          </View>
          {/* we are going to put the search bar here */}
          <View style={styles.contactsContainer}>
            <Text style={styles.subHeading}>Your Contacts</Text>
            <FlatList
              data={contacts}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View>{/* we are going to render contacts here */}</View>
        </Pressable>
      </KeyboardAvoidingView>
    </>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 16,
  },
  dismisser: {
    flex: 1,
  },
  topContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeholderAvatar: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    height: 42,
    width: 42,
  },
});
