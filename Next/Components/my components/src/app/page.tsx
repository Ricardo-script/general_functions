"use client";

import { BoxPanel } from "@/components/BoxPanel";
import { Dialog } from "@/components/Dialog";
import { Modal } from "@/components/Modal";
import { Switch, Checkbox, Button, Radio } from "@/components/Forms";
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
import { Tabs, TabsTypes } from "@/components/Tab";
import { Slider } from "@/components/Slider";
import { IoHomeOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoCloudUploadOutline } from "react-icons/io5";
import { Card } from "@/components/Card";
import { BsBoxFill } from "react-icons/bs";

const dataTab: TabsTypes[] = [
    {
        nameTab: "Home",
        icon: <IoHomeOutline size={18} />,
        content: <span>1</span>,
    },
    {
        nameTab: "Upload",
        icon: <IoCloudUploadOutline size={18} />,
        content: <span>2</span>,
    },
    {
        nameTab: "Settings",
        icon: <IoSettingsOutline size={18} />,
        content: <span>3</span>,
    },
];

const dataBreadCrumbs = [
    { screen: "Home", navigate: "" },
    { screen: "Teste", navigate: "/Cadastro" },
    { screen: "Dashboard", navigate: "/" },
];

export default function Home(): JSX.Element {
    const formRef = useRef<HTMLFormElement>(null);

    const getValues = () => {
        const value1 = formRef.current?.teste1.checked;
        const value2 = formRef.current?.teste2.checked;
        const value3 = formRef.current?.teste3.checked;
        const value4 = formRef.current?.teste4.checked;
        const radio = formRef.current?.radio1.value;
        console.log(value1, value2, value3, value4, radio);
    };

    const [openCam, setOpenCam] = useState(false);

    return (
        <Container
            renderHeader={() => <Header title="Dashboard" />}
            renderSideBar={() => <Sidebar />}
            breadcrumbs={dataBreadCrumbs}
        >
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    gap: 24,
                    marginBottom: 20,
                }}
            >
                <Card
                    title="Today's Moneys"
                    value="$53,000"
                    icon={<BsBoxFill size={20} color="#FFF" />}
                />
                <Card
                    title="Today's Moneys"
                    value="$53,000"
                    icon={<BsBoxFill size={20} color="#FFF" />}
                />
                <Card
                    title="Today's Moneys"
                    value="$53,000"
                    icon={<BsBoxFill size={20} color="#FFF" />}
                />
                <Card
                    title="Today's Moneys"
                    value="$53,000"
                    icon={<BsBoxFill size={20} color="#FFF" />}
                />
            </div>
            <div>
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
                    overlay={true}
                />
            </div>
            <br />
            <Slider min={0} max={100} step={1} />
            <form ref={formRef}>
                <Switch name="teste1" onChange={getValues} />
                <Checkbox
                    name="teste2"
                    onChange={() => setOpenCam((prev) => !prev)}
                />
                <Checkbox name="teste3" />
                <Checkbox name="teste4" />
                <Radio name="radio1" value="1" />
                <Radio name="radio1" value="2" />
                <Radio name="radio3" value="3" />
            </form>
            <Loading open={false} />
            <Button
                width={50}
                loading={false}
                onClick={() =>
                    Toast.show({
                        message: "Teste",
                        time: 5000,
                        type: "success",
                    })
                }
            >
                Toast
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
            <div style={{ marginTop: 15 }}>
                <Tabs data={dataTab} width={450} height={40} />
            </div>
        </Container>
    );
}
