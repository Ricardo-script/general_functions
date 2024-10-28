import { useRef, useState } from 'react';

import { Container, Group, Delete } from './style';
import { InputTime, Select } from '../Forms';

import { Trash } from '@/assets/icons';

type ValuesType = 'qtd' | 'time';

type ObjectValues = {
    qtd: string;
    time: string;
};

type BoxRegisterRoutineProps = {
    zIndex: number;
    onChange?: (value: ObjectValues) => void;
    onRemove?: () => void;
};

export const BoxRegisterRoutine = ({
    zIndex,
    onChange,
    onRemove,
}: BoxRegisterRoutineProps): JSX.Element => {
    const values = useRef<Record<ValuesType, string>>({ qtd: '', time: '' });

    const handleChange = (type: ValuesType, value: string): void => {
        values.current[type] = value;
        onChange?.(values.current);
    };

    return (
        <Container $zIndex={zIndex}>
            <Select
                placeholder="Quantidade que comeu"
                onChange={(value) => handleChange('qtd', value)}
            />
            <Group>
                <InputTime onChangeText={(time) => handleChange('time', time)} />
                <Delete onPress={onRemove}>
                    <Trash />
                </Delete>
            </Group>
        </Container>
    );
};
