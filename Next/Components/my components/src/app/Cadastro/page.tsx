"use client";

import { useState } from "react";
import { StepperProgress } from "@/components/StepperProgress";
import { Container } from "@/template/Container";
import { Header } from "@/template/Header";
import { Accordion } from "@/components/Accordion";
import { Button, Form, Input } from "@/components/Forms";
import { Content, AreaButtons } from "./styles";

export default function Cadastro(): JSX.Element {
    const [step, setStep] = useState(1);
    const listSteps = ["Basic info", "Contact info", "Photo", "Login info"];
    const dataBreadCrumbs = [
        { screen: "Home", navigate: "" },
        { screen: "Dashboard", navigate: "/" },
        { screen: "Cadastro", navigate: "" },
    ];

    const nextStep = (): void => {
        const totalSteps = listSteps.length;
        if (step < totalSteps) {
            setStep((prev) => prev + 1);
            return;
        }

        alert("acabou");
    };

    const prevStep = (): void => {
        if (step !== 1) {
            setStep((prev) => prev - 1);
            return;
        }

        alert("Inicio");
    };

    return (
        <Container
            renderHeader={() => <Header title="Teste" />}
            breadcrumbs={dataBreadCrumbs}
        >
            <Content>
                <div>
                    <h2
                        style={{
                            width: 320,
                            textAlign: "center",
                        }}
                    >
                        Join us
                    </h2>
                    <span
                        style={{
                            width: 320,
                            textAlign: "center",
                            fontSize: 12,
                            color: "#646161",
                            marginBottom: 20,
                            display: "block",
                        }}
                    >
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don`t look even slightly believable.{" "}
                    </span>
                </div>

                <StepperProgress stepActive={step} data={listSteps} />

                <br />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 20,
                        width: "100%",
                    }}
                >
                    <Accordion
                        number={1}
                        title="Basic info"
                        isOpen={step === 1}
                        onCollapse={() => setStep(1)}
                        enable={step === 1}
                    >
                        <Form padding={25}>
                            <span
                                style={{
                                    fontSize: 12,
                                    color: "#646161",
                                    marginBottom: 20,
                                    display: "block",
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut.
                            </span>
                            <Input label="*First name" />
                            <Input label="*Middle name" />
                            <Input label="*Last name" />
                            <Button onClick={nextStep}>Next</Button>
                        </Form>
                    </Accordion>

                    <Accordion
                        number={2}
                        title="Contact info"
                        isOpen={step === 2}
                        onCollapse={() => setStep(2)}
                        enable={step === 2}
                    >
                        <Form padding={25}>
                            <span
                                style={{
                                    fontSize: 12,
                                    color: "#646161",
                                    marginBottom: 20,
                                    display: "block",
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut.
                            </span>
                            <Input label="*First name" />
                            <Input label="*Middle name" />
                            <Input label="*Last name" />
                            <AreaButtons>
                                <Button
                                    onClick={prevStep}
                                    color="success"
                                    variant="outlined"
                                >
                                    Previous
                                </Button>
                                <Button onClick={nextStep}>Next</Button>
                            </AreaButtons>
                        </Form>
                    </Accordion>

                    <Accordion
                        number={3}
                        title="Photo"
                        isOpen={step === 3}
                        onCollapse={() => setStep(3)}
                        enable={step === 3}
                    >
                        <Form padding={25}>
                            <span
                                style={{
                                    fontSize: 12,
                                    color: "#646161",
                                    marginBottom: 20,
                                    display: "block",
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut.
                            </span>
                            <Input label="*First name" />
                            <Input label="*Middle name" />
                            <Input label="*Last name" />
                            <AreaButtons>
                                <Button
                                    onClick={prevStep}
                                    color="success"
                                    variant="outlined"
                                >
                                    Previous
                                </Button>
                                <Button onClick={nextStep}>Next</Button>
                            </AreaButtons>
                        </Form>
                    </Accordion>

                    <Accordion
                        number={4}
                        title="Login Info"
                        isOpen={step === 4}
                        onCollapse={() => setStep(4)}
                        enable={step === 4}
                    >
                        <Form padding={25}>
                            <span
                                style={{
                                    fontSize: 12,
                                    color: "#646161",
                                    marginBottom: 20,
                                    display: "block",
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut.
                            </span>
                            <Input label="*First name" />
                            <Input label="*Middle name" />
                            <Input label="*Last name" />
                            <AreaButtons>
                                <Button
                                    onClick={prevStep}
                                    color="success"
                                    variant="outlined"
                                >
                                    Previous
                                </Button>
                                <Button onClick={nextStep}>Next</Button>
                            </AreaButtons>
                        </Form>
                    </Accordion>
                </div>
            </Content>
        </Container>
    );
}
