import { Form, Input, Option, Row, Select, Switch } from "@/components/Forms";
import { CiSearch } from "react-icons/ci";
import { AiFillAndroid } from "react-icons/ai";
import { FaBookMedical } from "react-icons/fa";

export const TempForm = (): JSX.Element => {
    return (
        <Form>
            <Row>
                <Input
                    label="Title"
                    placeholder="Whats is your title?"
                    required
                    iconLeft={<CiSearch size={22} />}
                    iconRight={<AiFillAndroid size={22} />}
                    maskType="cpf"
                />
                <Input
                    label="Title 2"
                    placeholder="Whats is your title 2?"
                    required
                    iconRight={<AiFillAndroid size={22} />}
                />
            </Row>
            <Row>
                <Input
                    label="Title 3"
                    placeholder="Whats is your title 3?"
                    required
                />
                <Select
                    label="Employment*"
                    iconLeft={<FaBookMedical color="#8b9396" />}
                    placeholder="Enter a Employment"
                    required
                >
                    <Option value="">Selecione...</Option>
                    <Option value="Full time">Full Time</Option>
                    <Option value="Half time">Half Time</Option>
                    <Option value="Full time">Full Time</Option>
                    <Option value="Half time">Half Time</Option>
                </Select>
            </Row>
        </Form>
    );
};
