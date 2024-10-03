import React, { useRef } from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';

function AnimatedTabButton({ children, onPress }) {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const animateIn = () => {
    Animated.spring(scaleValue, {
      toValue: 1.2, // %20 büyüme
      useNativeDriver: true,
    }).start();
  };

  const animateOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1, // Orijinal boyutuna dönme
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableWithoutFeedback 
      onPressIn={animateIn}
      onPressOut={animateOut}
      onPress={onPress}
    >
      <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

export default AnimatedTabButton;
