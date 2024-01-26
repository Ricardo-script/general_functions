"use client";

import {
    InfoDialog,
    DeleteDialog,
    SucessDialog,
    ErrorDialog,
    AlertDialog,
} from "@/assets/icons";
import { BoxPanel } from "@/components/BoxPanel";
import { Dialog } from "@/components/Dialog";
import { Modal } from "@/components/Modal";
import { Switch, Checkbox, Button } from "@/components/Forms";
import { TempTable } from "@/template/TempTable";
import { Container } from "@/template/Container";
import { Header } from "@/template/Header";
import { Sidebar } from "@/template/Sidebar";
import { GiHandTruck } from "react-icons/gi";
import { useRef, useState } from "react";
import { Loading } from "@/components/Loading";
import { WebCam } from "@/components/WebCam";
import { TempForm } from "@/template/TempForm";
import { DragAndDrop } from "@/components/DragAndDrop";
import { Signature } from "@/components/Signature";
import { Toast } from "@/components/Toast";

export default function Home(): JSX.Element {
    const formRef = useRef<HTMLFormElement>(null);

    const getValues = () => {
        const value1 = formRef.current?.teste1.checked;
        const value2 = formRef.current?.teste2.checked;
        const value3 = formRef.current?.teste3.checked;
        const value4 = formRef.current?.teste4.checked;
        console.log(value1, value2, value3, value4);
    };

    const [openCam, setOpenCam] = useState(false);

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
                    <TempForm />
                </Modal>
                <Modal
                    open={false}
                    title="Select plan"
                    description="Simple and flexible per-user pricing."
                    icon={<GiHandTruck color="344054" size={28} />}
                >
                    <DragAndDrop
                        multiple
                        onDragAndDrop={(items) => console.log("lista", items)}
                        onReadBase64={(base64) => console.log("base64", base64)}
                        showListUploads
                    />
                </Modal>
                <WebCam
                    open={openCam}
                    title="Captura de Foto para Cadastro"
                    description="Por favor, ajuste seu rosto corretamente na câmera para a captura da foto"
                    onClickCancel={() => setOpenCam(false)}
                    onTakeBase64={(image) => console.log("image base64", image)}
                    onTakePicture={(image) => console.log("file", image)}
                />
            </div>
            <br />
            <form ref={formRef}>
                <Switch name="teste1" onChange={getValues} />
                <Checkbox
                    name="teste2"
                    onChange={() => setOpenCam((prev) => !prev)}
                />
                <Checkbox name="teste3" />
                <Checkbox name="teste4" />
            </form>
            <Loading open={false} />
            <Button width={50} loading={false}>
                Entrar
            </Button>
            <Modal
                open={false}
                title="Assinatura"
                description="Assine no quadro abaixo"
            >
                <Signature
                    width={300}
                    onSigningBase64Change={(sigin) => console.log(sigin)}
                    onSigningFileChange={(sigin) => console.log(sigin)}
                    removePullToReflesh
                />
            </Modal>
            <button onClick={() => Toast.show({ message: "Teste" })}>
                Toast
            </button>
        </Container>
    );
}
