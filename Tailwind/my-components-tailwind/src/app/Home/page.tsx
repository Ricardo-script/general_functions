"use client";

import Container from "@/components/Container";
import { UserIcon } from "@/assets/icons";
import { BoxPanel } from "@/components/BoxPanel";
import { Header } from "@/components/Header";

import { useState } from "react";
import { Sidebar } from "@/components/SideBar";
import {
    Button,
    Checkbox,
    Form,
    Input,
    MultiSelect,
    Radio,
    Row,
} from "@/components/Forms";
import { Select } from "@/components/Forms/Select";
import { Modal } from "@/components/Modal";
import { Dialog, DialogProps } from "@/components/Dialog";
import { Table, Thead, Tr, Tbody, Td, Th } from "@/components/Table";

export default function Home() {
    const [loadingButton, setLoadingButton] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [dialog, setDialog] = useState<DialogProps>({
        open: false,
        title: "",
        message: "",
        type: "success",
        onClickConfirm: undefined,
        onClickCancel: undefined,
    });

    const dataBreadCrumbs = [
        { screen: <UserIcon />, navigate: "" },
        { screen: "Home", navigate: "/" },
        { screen: "Configurações", navigate: "/teste" },
    ];

    const sendExample = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoadingButton(true);
        const formData = new FormData(event.currentTarget);
        const example = formData.get("example");
        const example2 = formData.get("example2");
        const exampleCheck = formData.get("checkExample");
        const radioExample = formData.get("radioExample");
        const multiselect = formData.get("multiselect");

        new Promise((resolve) => {
            setTimeout(() => {
                resolve(setLoadingButton(false));
                console.log({
                    example,
                    example2,
                    exampleCheck,
                    radioExample,
                    multiselect,
                });
            }, 5000);
        });
    };

    return (
        <Container
            renderSideBar={() => <Sidebar />}
            renderHeader={() => <Header title="Home" />}
            breadcrumbs={dataBreadCrumbs}
        >
            <BoxPanel title="Criar novo título">
                <div className="flex flex-col gap-4">
                    <Form onSubmit={sendExample}>
                        <Row>
                            <Input
                                placeholder="Digite seu nome"
                                label="Nome Completo:"
                            />
                            <Input
                                placeholder="Digite seu nome"
                                label="Nome Completo:"
                                message="*Campo é obrigatório"
                            />
                        </Row>
                        <Input
                            placeholder="Digite seu nome"
                            label="Nome Completo:"
                        />
                        <Select
                            name="example"
                            label="Seleção exemplo"
                            placeholder="Exemple"
                            message="*Campo é obrigatório"
                            defaultValue={"2"}
                            data={[
                                { name: "teste01", value: "1" },
                                { name: "teste02", value: "2" },
                                { name: "teste03", value: "3" },
                                { name: "teste04", value: "4" },
                                { name: "teste05", value: "5" },
                                { name: "teste06", value: "6" },
                                { name: "teste07", value: "7" },
                            ]}
                        />
                        <MultiSelect
                            label="Multiselect example"
                            placeholder="Selecione os items"
                            name="multiselect"
                            data={[
                                { name: "Ricardo", value: "123" },
                                { name: "Jullia", value: "456" },
                                { name: "Tamires", value: "789" },
                            ]}
                            defaultValue={[{ name: "Jullia", value: "456" }]}
                        />
                        <Checkbox
                            name="checkExample"
                            label="Example checkbox 01"
                        />
                        <Checkbox name="checkExample" />
                        <Radio name="radioExample" />
                        <Radio name="radioExample" />
                        <Button loading={loadingButton}>Enviar</Button>
                    </Form>
                    <Button onClick={() => setOpenModal((prev) => !prev)}>
                        Open Modal
                    </Button>
                    <Button
                        onClick={() =>
                            setDialog({
                                open: true,
                                title: "Formulário!",
                                message: `Dados enviados com sucesso!`,
                                type: "success",
                                onClickCancel() {
                                    setDialog((prev) => ({
                                        ...prev,
                                        open: false,
                                    }));
                                },
                                onClickConfirm() {
                                    setDialog((prev) => ({
                                        ...prev,
                                        open: false,
                                    }));
                                },
                            })
                        }
                    >
                        Open Dialog
                    </Button>
                </div>
            </BoxPanel>
            <Modal
                icon={<UserIcon />}
                open={openModal}
                onClose={() => setOpenModal(false)}
                title="Title Modal"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod nihil provident"
            >
                <span className="text-sm text-[#475467]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quod nihil provident voluptas accusantium magni vel fugiat,
                    corrupti eaque adipisci alias nulla consequuntur distinctio
                    iusto, minima, laborum unde maiores! Cum, delectus!
                </span>
            </Modal>
            <Dialog
                {...dialog}
                onClose={() => setDialog((prev) => ({ ...prev, open: false }))}
            />
            <h2>Example Table</h2>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Song</Th>
                        <Th>Artist</Th>
                        <Th>Year</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>The Sliding Mr. Bones (Next Stop, Pottersville)</Td>
                        <Td>Malcolm Lockyer</Td>
                        <Td>1961</Td>
                    </Tr>
                    <Tr>
                        <Td>The Sliding Mr. Bones (Next Stop, Pottersville)</Td>
                        <Td>Malcolm Lockyer</Td>
                        <Td>1961</Td>
                    </Tr>
                    <Tr>
                        <Td>The Sliding Mr. Bones (Next Stop, Pottersville)</Td>
                        <Td>Malcolm Lockyer</Td>
                        <Td>1961</Td>
                    </Tr>
                    <Tr>
                        <Td>The Sliding Mr. Bones (Next Stop, Pottersville)</Td>
                        <Td>Malcolm Lockyer</Td>
                        <Td>1961</Td>
                    </Tr>
                    <Tr>
                        <Td>The Sliding Mr. Bones (Next Stop, Pottersville)</Td>
                        <Td>Malcolm Lockyer</Td>
                        <Td>1961</Td>
                    </Tr>
                    <Tr>
                        <Td>The Sliding Mr. Bones (Next Stop, Pottersville)</Td>
                        <Td>Malcolm Lockyer</Td>
                        <Td>1961</Td>
                    </Tr>
                    <Tr>
                        <Td>The Sliding Mr. Bones (Next Stop, Pottersville)</Td>
                        <Td>Malcolm Lockyer</Td>
                        <Td>1961</Td>
                    </Tr>
                    <Tr>
                        <Td>The Sliding Mr. Bones (Next Stop, Pottersville)</Td>
                        <Td>Malcolm Lockyer</Td>
                        <Td>1961</Td>
                    </Tr>
                    <Tr>
                        <Td>The Sliding Mr. Bones (Next Stop, Pottersville)</Td>
                        <Td>Malcolm Lockyer</Td>
                        <Td>1961</Td>
                    </Tr>
                    <Tr>
                        <Td>The Sliding Mr. Bones (Next Stop, Pottersville)</Td>
                        <Td>Malcolm Lockyer</Td>
                        <Td>1961</Td>
                    </Tr>
                    <Tr>
                        <Td>The Sliding Mr. Bones (Next Stop, Pottersville)</Td>
                        <Td>Malcolm Lockyer</Td>
                        <Td>1961</Td>
                    </Tr>
                    <Tr>
                        <Td>The Sliding Mr. Bones (Next Stop, Pottersville)</Td>
                        <Td>Malcolm Lockyer</Td>
                        <Td>1961</Td>
                    </Tr>
                </Tbody>
            </Table>
        </Container>
    );
}
