"use client";

import {
    InfoDialog,
    DeleteDialog,
    SucessDialog,
    ErrorDialog,
    AlertDialog,
} from "./assets/icons";
import { BoxPanel } from "./components/BoxPanel";
import { Dialog } from "./components/Dialog";
import { Modal } from "./components/Modal";
import { Switch, Checkbox } from "./components/Forms";
import { TempTable } from "./components/TempTable";
import { Container } from "./template/Container";
import { Header } from "./template/Header";
import { Sidebar } from "./template/Sidebar";
import { GiHandTruck } from "react-icons/gi";
import { useRef } from "react";
import { Loading } from "./components/Loading";
import { LottieCarrying } from "./assets/lotties";

export default function Home() {
    const formRef = useRef<HTMLFormElement>(null);

    const getValues = () => {
        const value1 = formRef.current?.teste1.checked;
        const value2 = formRef.current?.teste2.checked;
        const value3 = formRef.current?.teste3.checked;
        const value4 = formRef.current?.teste4.checked;
        console.log(value1, value2, value3, value4);
    };

    return (
        <Container
            renderHeader={() => <Header title="Dashboard" />}
            renderSideBar={() => <Sidebar />}
        >
            <span>screen home</span>
            <div>
                <h5>Icones</h5>
                <br />
                <div
                    style={{
                        background: "#FFF",
                        display: "flex",
                        alignItems: "center",
                        padding: 10,
                        gap: 15,
                    }}
                >
                    <InfoDialog />
                    <DeleteDialog />
                    <SucessDialog />
                    <ErrorDialog />
                    <AlertDialog />
                </div>
                <h5>Modal</h5>
                <br />
                <Dialog
                    open={false}
                    type="success"
                    title="Blog post published"
                    message="This blog post has been published. Team members will be able to edit this post and republish changes."
                    onClickCancel={() => console.log("cancel")}
                    onClickConfirm={() => console.log("confirm")}
                />
                <h5>Table</h5>
                <br />
                <BoxPanel title="Authors Table">
                    <TempTable />
                </BoxPanel>
                <Modal
                    open={false}
                    title="Select plan"
                    description="Simple and flexible per-user pricing."
                    icon={<GiHandTruck color="344054" size={28} />}
                >
                    <span>123</span>
                </Modal>
            </div>
            <br />
            <form ref={formRef}>
                <Switch name="teste1" onChange={getValues} />
                <Checkbox name="teste2" />
                <Checkbox name="teste3" />
                <Checkbox name="teste4" />
            </form>
            <Loading open={false} />
        </Container>
    );
}
