// import * as React from 'react';
// import { StyleSheet, StatusBar, TextInput, View, TouchableOpacity, Image, ScrollView} from 'react-native';
// import { MonoText } from '../../components/StyledText';
// import {Ionicons} from "@expo/vector-icons";
// import { InputFormNormalText } from "../../components/InputFormNormalText";
// import { ButtonSignIn }from "../../components/ButtonSignIn";
//
// import { Formik } from "formik";
// import { Fragment } from "react";
//
// class SignUp extends React.Component{
//     constructor(props){
//         super(props)
//     }
//
//     handleSubmit = values => {
//         if (values.email.length > 0 && values.password.length > 0) {
//             this.props.navigation.navigate("SignIn")
//         }
//     };
//
//     render() {
//         return (
//             <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
//
//                 <Formik initialValues={{email: '', password: '', username: '', name: '', phone: ''}}
//                         onSubmit={values => {this.handleSubmit(values)}}>
//                     {
//                         ({ handleChange, values, handleSubmit }) => (
//                             <Fragment>
//                                 <StatusBar barStyle="light-content"/>
//                                 <Image
//                                     source={require("../../assets/images/filmWhite.png")}
//                                     style={{ position: "absolute", top: -170, right: -225 }}
//                                 />
//
//                                 <View style={{ position: "absolute", alignItems: "center", width: "100%" }}>
//                                     <TouchableOpacity style={styles.avatar}>
//                                         <Ionicons name="ios-add"
//                                                   size={40}
//                                                   color="#FFF"
//                                                   style={{marginTop: 6, marginLeft: 2}}/>
//                                     </TouchableOpacity>
//                                 </View>
//
//                                 <MonoText style={styles.greeting}>{`Sign Up\nPhotograma`}</MonoText>
//
//                                 <View style={styles.form}>
//                                     <InputFormNormalText name="email"
//                                                          value={values.email}
//                                                          onChangeText={handleChange('email')}/>
//
//                                     <InputFormNormalText name="password"
//                                                          secureTextEntry
//                                                          value={values.password}
//                                                          onChangeText={handleChange('password')}/>
//
//                                     <InputFormNormalText name="name"
//                                                          value={values.name}
//                                                          onChangeText={handleChange('name')}/>
//
//                                     <InputFormNormalText name="username"
//                                                          value={values.username}
//                                                          onChangeText={handleChange('username')}/>
//
//                                     <InputFormNormalText name="phone"
//                                                          value={values.phone}
//                                                          onChangeText={handleChange('phone')}/>
//                                 </View>
//
//
//                                 <ButtonSignIn text="Sign Up" onPress={handleSubmit}/>
//
//                             </Fragment>
//                         )
//                     }
//                 </Formik>
//                 <TouchableOpacity
//                     style={{ alignSelf: "center", marginTop: 32 }}
//                     onPress={() => this.props.navigation.navigate("Login")}>
//                     <MonoText style={{ color: "#414959", fontSize: 13 }}>
//                         Have an account?  <MonoText style={{ fontWeight: "500", color: "#323441" }}>Sign in</MonoText>
//                     </MonoText>
//                 </TouchableOpacity>
//
//
//             </ScrollView>
//         );
//     }
// }
//
// export default SignUp;
//
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fafafa',
//     },
//     contentContainer: {
//         paddingTop: 15,
//         paddingBottom: 100,
//     },
//     greeting: {
//         marginTop: 320,
//         fontSize: 18,
//         fontWeight: "500",
//         textAlign: "center",
//         color: "#323441"
//     },
//     form: {
//         marginTop: 50,
//         marginHorizontal: 30
//     },
//     button: {
//         marginHorizontal: 30,
//         backgroundColor: "#323441",
//         borderRadius: 4,
//         marginTop: 50,
//         height: 52,
//         alignItems: "center",
//         justifyContent: "center"
//     },
//     errorMessage: {
//         height: 72,
//         alignItems: "center",
//         justifyContent: "center",
//         marginHorizontal: 30
//     },
//     error: {
//         color: "#323441",
//         fontSize: 13,
//         fontWeight: "600",
//         textAlign: "center"
//     },
//     back: {
//         position: "absolute",
//         left: 32,
//         width: 32,
//         height: 32,
//         borderRadius: 16,
//         backgroundColor: "rgba(21, 22, 48, 0.1)",
//         alignItems: "center",
//         justifyContent: "center"
//     },
//     avatar: {
//         width: 100,
//         height: 100,
//         backgroundColor: "#E1E2E6",
//         borderRadius: 50,
//         marginTop: 220,
//         justifyContent: "center",
//         alignItems: "center"
//     }
// });
