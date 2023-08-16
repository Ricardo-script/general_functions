import React, { useRef } from 'react';
import { View, TextInput } from 'react-native';

const MaskedInput: React.FC = () => {
  const inputRef = useRef<TextInput>(null);

  const applyPhoneMask = (text: string): string => {
    const cleanedText = text.replace(/[^\d]/g, '');

    if (cleanedText.length >= 2) {
      const ddd = cleanedText.slice(0, 2);
      const firstDigit = cleanedText.slice(2, 3);
      const remainingDigits = cleanedText.slice(3);

      if (cleanedText.length >= 11) {
        const part1 = remainingDigits.slice(0, 4);
        const part2 = remainingDigits.slice(4, 8);
        const part3 = remainingDigits.slice(8);
        return `(${ddd}) ${firstDigit} ${part1}-${part2}-${part3}`;
      } else {
        return `(${ddd}) ${firstDigit} ${remainingDigits}`;
      }
    }

    return cleanedText;
  };

  const handleChangeText = (text: string): void => {
    const maskedText = applyPhoneMask(text);
    if (inputRef.current) {
      inputRef.current.setNativeProps({ text: maskedText });
    }
  };

  return (
    <View>
      <TextInput
        ref={inputRef}
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 8 }}
        onChangeText={handleChangeText}
        keyboardType="numeric"
        maxLength={15} // Defina um valor adequado de acordo com o formato da máscara
      />
    </View>
  );
};

export default MaskedInput;