import React from 'react';
import {
    Image,
    StatusBar,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Dimensions
} from 'react-native';

import data from './data';
import Swiper from 'react-native-deck-swiper';
import { Transitioning, Transition } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from "../../constants/Colors";

const { width } = Dimensions.get('window');

const stackSize = 4;
const colors = {
    red: '#EC2379',
    blue: '#0070FF',
    gray: '#777777',
    white: '#ffffff',
    black: '#000000',
    dark: Colors.DARK
};
const ANIMATION_DURATION = 200;

const transition = (
    <Transition.Sequence>
        <Transition.Out
            type='slide-bottom'
            durationMs={ANIMATION_DURATION}
            interpolation='easeIn'
        />
        <Transition.Together>
            <Transition.In
                type='fade'
                durationMs={ANIMATION_DURATION}
                delayMs={ANIMATION_DURATION / 2}
            />
            <Transition.In
                type='slide-bottom'
                durationMs={ANIMATION_DURATION}
                delayMs={ANIMATION_DURATION / 2}
                interpolation='easeOut'
            />
        </Transition.Together>
    </Transition.Sequence>
);

const swiperRef = React.createRef();
const transitionRef = React.createRef();

const Card = ({ card }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: card.image }} style={styles.cardImage} />
        </View>
    );
};

const CardDetails = ({ index }) => (
    <View key={data[index].id} style={{ alignItems: 'center' }}>
        <Text style={[styles.text, styles.heading]} numberOfLines={2}>
            {data[index].name}
        </Text>
    </View>
);

function MyApp() {
    const [index, setIndex] = React.useState(0);
    const onSwiped = () => {
        transitionRef.current.animateNextTransition();
        setIndex((index + 1) % data.length);
    };

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar hidden={true} />
            <View style={styles.swiperContainer}>
                <Swiper
                    ref={swiperRef}
                    cards={data}
                    cardIndex={index}
                    renderCard={card => <Card card={card} />}
                    infinite
                    backgroundColor={'transparent'}
                    onSwiped={onSwiped}
                    onTapCard={() => swiperRef.current.swipeLeft()}
                    cardVerticalMargin={50}
                    stackSize={stackSize}
                    stackScale={10}
                    stackSeparation={14}
                    animateOverlayLabelsOpacity
                    animateCardOpacity
                    disableTopSwipe
                    disableBottomSwipe
                    overlayLabels={{
                        left: {
                            title: 'NOPE',
                            style: {
                                label: {
                                    backgroundColor: colors.red,
                                    borderColor: colors.red,
                                    color: colors.white,
                                    borderWidth: 1,
                                    fontSize: 24
                                },
                                wrapper: {
                                    flexDirection: 'column',
                                    alignItems: 'flex-end',
                                    justifyContent: 'flex-start',
                                    marginTop: 30,
                                    marginLeft: -30
                                }
                            }
                        },
                        right: {
                            title: 'LIKE',
                            style: {
                                label: {
                                    backgroundColor: colors.blue,
                                    borderColor: colors.blue,
                                    color: colors.white,
                                    borderWidth: 1,
                                    fontSize: 24
                                },
                                wrapper: {
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    marginTop: 30,
                                    marginLeft: 30
                                }
                            }
                        }
                    }}
                />
            </View>
            <View style={styles.bottomContainer}>
                <Transitioning.View
                    ref={transitionRef}
                    transition={transition}
                    style={styles.bottomContainerMeta}
                >
                    <CardDetails index={index} />
                </Transitioning.View>
                <View style={styles.bottomContainerButtons}>
                    <MaterialCommunityIcons.Button
                        name='close'
                        size={80}
                        backgroundColor='transparent'
                        underlayColor='transparent'
                        activeOpacity={0.3}
                        color={Colors.MY_RED}
                        onPress={() => swiperRef.current.swipeLeft()}
                    />
                    <MaterialCommunityIcons.Button
                        name='check'
                        size={80}
                        backgroundColor='transparent'
                        underlayColor='transparent'
                        activeOpacity={0.3}
                        color={Colors.BEJ}
                        onPress={() => swiperRef.current.swipeRight()}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBg
    },
    swiperContainer: {
        flex: 0.90
    },
    bottomContainer: {
        flex: 0.30,
        justifyContent: 'space-evenly'
    },
    bottomContainerMeta: { alignContent: 'flex-end', alignItems: 'center' },
    bottomContainerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    cardImage: {
        width: 450,
        flex: 1,
        marginBottom: 20,
        resizeMode: 'contain'
    },
    card: {
        flex: 0.60,
        borderRadius: 8,
        shadowRadius: 25,
        shadowColor: colors.white,
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 0 },
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.dark
    },
    text: {
        textAlign: 'center',
        fontSize: 50,
        backgroundColor: 'transparent'
    },
    done: {
        textAlign: 'center',
        fontSize: 30,
        color: colors.dark,
        backgroundColor: 'transparent'
    },
    heading: { fontSize: 24, marginBottom: 10, color: colors.gray },
    price: { color: colors.blue, fontSize: 32, fontWeight: '500' }
});

export default function FavoritesFeed() {

    return (
        <View style={styles1.container}>
            <MyApp/>
        </View>
    );
}

const styles1 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.dark
    }
});
