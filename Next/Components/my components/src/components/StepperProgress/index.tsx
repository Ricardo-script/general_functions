import {
    Container,
    StepperBar,
    Bar,
    BarProgress,
    AreaStep,
    Number,
    Title,
} from "./styles";

type StepperProgressProps = {
    data: string[];
    stepActive: number;
};

export const StepperProgress = ({
    stepActive = 1,
    data,
}: StepperProgressProps): JSX.Element => {
    const totalStep = data.length;

    const bar = ((totalStep - 1) * 100) / totalStep;
    const left = 100 / totalStep / 2;
    const progress = ((Math.min(stepActive, totalStep) - 1) * 100) / totalStep;

    return (
        <Container>
            <StepperBar>
                <Bar $bar={bar} $left={left} />
                <BarProgress $progress={progress} $left={left} />
                {data.map((item, index) => (
                    <AreaStep key={index} $totalStep={totalStep}>
                        <Number $inactive={index < stepActive}>
                            {index + 1}
                        </Number>
                        <Title $inactive={index < stepActive}>{item}</Title>
                    </AreaStep>
                ))}
            </StepperBar>
        </Container>
    );
};
