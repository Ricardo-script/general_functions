"use client";

import { useState } from "react";
import { StepperProgress } from "@/components/StepperProgress";
import { Container } from "@/template/Container";
import { Header } from "@/template/Header";

export default function RegisterAccount(): JSX.Element {
    const [step, setStep] = useState(1);
    const listSteps = ["Basic info", "Contact info", "Login info", "hector"];

    const nextStep = () => {
        const totalSteps = listSteps.length;
        if (step < totalSteps) {
            setStep((prev) => prev + 1);
            return;
        }

        alert("acabou");
    };

    return (
        <Container renderHeader={() => <Header title="Teste" />}>
            <StepperProgress stepActive={step} data={listSteps} />
            <button onClick={nextStep}>Next</button>
        </Container>
    );
}
