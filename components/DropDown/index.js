// /* eslint-disable react/jsx-props-no-spreading */
// // // /// //////////props set by salmone
// import icon from '@assets/icons/arrow-down-black.png';
// import { getRespValue } from '@utils/design/design';
// import React, { useCallback, useRef, useState } from 'react';
// import {
//   FlatList,
//   Image,
//   Modal,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';

// type ItemType = {
//   // label: string;
//   item: { label: string; value: string };
// };
// interface IProps {
//   label: string;
//   data: Array<{ label: string; value: string }>;
//   onSelect: (item: ItemType) => void;
//   dropdownType: string;
// }

// const Dropdown = (props: IProps) => {
//   const { label, data, onSelect, dropdownType } = props;
//   const dropdownButton = useRef() as React.MutableRefObject<TouchableOpacity>;
//   const [visible, setVisible] = useState(false);
//   const [selected, setSelected] = useState<ItemType | undefined>(undefined);
//   const [dropdownTop, setDropdownTop] = useState(0);
//   const [dropdownWidth, setDropdownWidth] = useState(0);
//   const [dropdownMargin, setDropdownMargin] = useState(0);

//   const toggleDropdown = (): void => {
//     if (visible) {
//       setVisible(false);
//     } else {
//       openDropdown();
//     }
//   };

//   const openDropdown = useCallback((): void => {
//     setVisible(true);
//     dropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
//       setDropdownTop(py + h);
//       setDropdownMargin(_px);
//       setDropdownWidth(_w);
//     });
//   }, []);

//   const onItemPress = (item: ItemType): void => {
//     setSelected(item);
//     onSelect(item);
//     setVisible(false);
//   };

//   if (dropdownType === 'sm') {
//     const renderItem = ({ item }: ItemType) => (
//       <TouchableOpacity
//         style={styles.item}
//         onPress={() => onItemPress( item )}
//       >
//         <Text className="font-aeonik text-white text-xl">{item.label}</Text>
//       </TouchableOpacity>
//     );

//     const renderDropdown = () => {
//       return (
//         <Modal visible={visible} transparent animationType="none">
//           <TouchableOpacity
//             style={styles.overlay}
//             onPress={() => setVisible(false)}
//           >
//             <View
//               style={[
//                 styles.dropdown,
//                 {
//                   top: dropdownTop,
//                   width: dropdownWidth,
//                   left: dropdownMargin,
//                 },
//               ]}
//               className="absolute w-[30%] bg-[#20201F] border-2 border-black"
//             >
//               <FlatList
//                 data={data}
//                 renderItem={renderItem}
//                 keyExtractor={(item, index) => index.toString()}
//               />
//             </View>
//           </TouchableOpacity>
//         </Modal>
//       );
//     };
//     return (
//       <TouchableOpacity
//         ref={dropdownButton}
//         style={styles.button}
//         // style={styles.button}

//         onPress={toggleDropdown}
//       >
//         <View className="flex-row justify-between items-center h-full px-3">
//           <Text
//             className="text-black font-aeonik text-xl"
//             style={styles.buttonText}
//           >
//             {(selected && selected.label) || label}
//           </Text>

//           {renderDropdown()}
//           <Image source={icon} style={styles.rightErrorIcon} />
//         </View>
//       </TouchableOpacity>
//     );
//   }
//   if (dropdownType === 'lg') {
//     const renderItem = ({ item }: ItemType) => (
//       <TouchableOpacity
//         style={styles.item}
//         onPress={() => onItemPress({ item })}
//       >
//         <Text className="font-aeonik text-white text-xl">{item.label}</Text>
//       </TouchableOpacity>
//     );

//     const renderDropdown = () => {
//       return (
//         <Modal visible={visible} transparent animationType="none">
//           <TouchableOpacity
//             style={styles.overlay}
//             onPress={() => setVisible(false)}
//           >
//             <View
//               style={{ top: dropdownTop - getRespValue(38) }}
//               className={`absolute w-full bg-[#FDEEA4] `}
//             >
//               <FlatList
//                 data={data}
//                 style={styles.dropdown}
//                 renderItem={renderItem}
//                 keyExtractor={(item, index) => index.toString()}
//               />
//             </View>
//           </TouchableOpacity>
//         </Modal>
//       );
//     };
//     return (
//       <TouchableOpacity
//         ref={dropdownButton}
//         style={styles.button}
//         onPress={toggleDropdown}
//       >
//         <View className="flex-row justify-between items-center w-full h-full px-3 border-b-2 border-white ">
//           <Text
//             style={styles.buttonText}
//             className="text-white font-aeonik text-xl"
//           >
//             {(selected && selected.label) || label}
//           </Text>
//           {renderDropdown()}
//           <Image source={icon} style={styles.rightErrorIcon} />
//         </View>
//       </TouchableOpacity>
//     );
//   }

//   return <Text>enter type</Text>;
// };

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: 'red',
//     flexDirection: 'row',
//     alignItems: 'center',
//     // backgroundColor: '#efefef',
//     height: getRespValue(75),
//     zIndex: 1,
//   },
//   buttonText: {
//     // flex: 1,
//     // textAlign: 'left',
//     // color: '#00000',
//   },
//   icon: {
//     marginRight: 10,
//   },
//   dropdown: {
//     //   position: 'absolute',
//     //   backgroundColor: '#20201F',
//     // width: dropdownWidth,
//     // boxShadow: 10 5 5,
//     //   shadowColor: 'red',
//     //   shadowRadius: 4,
//     //   shadowOffset: { height: 4, width: 0 },
//     //   shadowOpacity: 0.5,
//   },
//   overlay: {
//     width: '100%',
//     height: '100%',
//   },
//   item: {
//     paddingHorizontal: 10,
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     marginLeft: 7,
//     marginRight: 7,

//     borderBottomColor: 'white',
//   },
//   rightErrorIcon: {
//     height: getRespValue(27),
//     width: getRespValue(27),
//   },
// });

// export default Dropdown;
// /// //////props set by salmone
