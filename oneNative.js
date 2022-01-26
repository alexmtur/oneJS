import {BaseComponent} from './oneCore.js';
import {ActivityIndicator as activityIndicator, Button as button, FlatList as flatList, Image as image, 
	ImageBackground as imageBackground, KeyboardAvoidingView as keyboardAvoidingView, Modal as modal, 
	Pressable as pressable, RefreshControl as refreshControl, ScrollView as scrollView, SectionList as sectionList, 
	StatusBar as statusBar, Switch as switch, Text as text, TextInput as textInput, TouchableHighlight as touchableHighlight, 
	TouchableOpacity as touchableOpacity, TouchableWithoutFeedback as touchableWithoutFeedback, View as view, 
	VirtualizedList as virtualizedList, DrawerLayoutAndroid as drawerLayoutAndroid, 
	TouchableNativeFeedback as touchableNativeFeedback, InputAccessoryView as inputAccessoryView, 
	SafeAreaView as safeAreaView} from 'react-native';

export const ActivityIndicator = BaseComponent('ActivityIndicator', false, activityIndicator);
export const Button = BaseComponent('Button', false, button);
export const FlatList = BaseComponent('FlatList', false, flatList);
export const Image = BaseComponent('Image', false, image);
export const ImageBackground = BaseComponent('ImageBackground', true, imageBackground);
export const KeyboardAvoidingView = BaseComponent('KeyboardAvoidingView', true, keyboardAvoidingView);
export const Modal = BaseComponent('Modal', true, modal);
export const Pressable = BaseComponent('Pressable', true, pressable);
export const RefreshControl = BaseComponent('RefreshControl', false, refreshControl);
export const ScrollView = BaseComponent('ScrollView', true, scrollView);
export const SectionList = BaseComponent('SectionList', false, sectionList);
export const StatusBar = BaseComponent('StatusBar', false, statusBar);
export const Switch = BaseComponent('Switch', false, switch);
export const Text = BaseComponent('Text', true, text);
export const TextInput = BaseComponent('TextInput', false, textInput);
export const TouchableHighlight = BaseComponent('TouchableHighlight', true, touchableHighlight);
export const TouchableOpacity = BaseComponent('TouchableOpacity', true, touchableOpacity);
export const TouchableWithoutFeedback = BaseComponent('TouchableWithoutFeedback', true, touchableWithoutFeedback);
export const View = BaseComponent('View', true, view);
export const VirtualizedList = BaseComponent('VirtualizedList', false, virtualizedList);
export const DrawerLayoutAndroid = BaseComponent('DrawerLayoutAndroid', true, drawerLayoutAndroid);
export const TouchableNativeFeedback = BaseComponent('TouchableNativeFeedback', true, touchableNativeFeedback);
export const InputAccessoryView = BaseComponent('InputAccessoryView', true, inputAccessoryView);
export const SafeAreaView = BaseComponent('SafeAreaView', true, safeAreaView);
