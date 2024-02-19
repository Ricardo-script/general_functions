import React, { useState } from "react";
import {
    RangeSliderWrapper,
    RangeSliderInput,
    RangeSliderValue,
} from "./styles";

type SliderProps = {
    value?: number;
    min: number;
    max: number;
    step?: number;
    labelWidth?: number;
    trackColor?: string;
    trackHeight?: number;
    handleColor?: string;
    handleColorHover?: string;
    handleSize?: number;
    labelColor?: string;
    labelBackgroundColor?: string;
    shade0?: string;
    teal?: string;
};

export const Slider: React.FC<SliderProps> = ({
    value = 0,
    min,
    max,
    step = 1,
    labelWidth = 30,
    trackColor = "#d7dcdf",
    trackHeight = 8,
    handleColor = "#2c3e50",
    handleColorHover = "#32d583",
    handleSize = 17,
    labelColor = "#FFF",
    labelBackgroundColor = "#2c3e50",
    shade0 = "#FFF",
    teal = "#32d583",
}) => {
    const [sliderValue, setSliderValue] = useState(value);

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(parseInt(event.target.value));
    };

    return (
        <RangeSliderWrapper>
            <RangeSliderInput
                type="range"
                value={sliderValue}
                min={min}
                max={max}
                step={step}
                $labelWidth={labelWidth}
                $trackColor={trackColor}
                $trackHeight={trackHeight}
                $handleColor={handleColor}
                $handleColorHover={handleColorHover}
                $handleSize={handleSize}
                $labelColor={labelColor}
                $labelBackgroundColor={labelBackgroundColor}
                $shade0={shade0}
                $teal={teal}
                onChange={handleSliderChange}
            />
            <RangeSliderValue
                $labelWidth={labelWidth}
                $labelColor={labelColor}
                $labelBackgroundColor={labelBackgroundColor}
            >
                {sliderValue}
            </RangeSliderValue>
        </RangeSliderWrapper>
    );
};
