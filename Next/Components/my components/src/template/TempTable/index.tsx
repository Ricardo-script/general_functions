import {
    Table,
    Thead,
    Tbody,
    Td,
    Th,
    Tr,
    Cell,
    Text,
    TextBold,
    Status,
} from "@/components/Table";
import { Avatar } from "@/components/Avatar";
import perfil from "@/assets/images/perfil.jpeg";

export const TempTable = (): JSX.Element => {
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Author</Th>
                    <Th></Th>
                    <Th>Function</Th>
                    <Th>Status</Th>
                    <Th>Employed</Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>
                        <Avatar src={perfil} />
                    </Td>
                    <Td>
                        <Cell>
                            <TextBold>Esthera Jackson</TextBold>
                            <Text>esthera@simmple.com</Text>
                        </Cell>
                    </Td>
                    <Td>
                        <Cell>
                            <TextBold>Manager</TextBold>
                            <Text>Organization</Text>
                        </Cell>
                    </Td>
                    <Td>
                        <Status $status="Online">Online</Status>
                    </Td>
                    <Td>16/01/2023</Td>
                    <Td>Edit</Td>
                </Tr>

                <Tr>
                    <Td>
                        <Avatar src={perfil} />
                    </Td>
                    <Td>
                        <Cell>
                            <TextBold>Esthera Jackson</TextBold>
                            <Text>esthera@simmple.com</Text>
                        </Cell>
                    </Td>
                    <Td>
                        <Cell>
                            <TextBold>Manager</TextBold>
                            <Text>Organization</Text>
                        </Cell>
                    </Td>
                    <Td>
                        <Status $status="Online">Online</Status>
                    </Td>
                    <Td>16/01/2023</Td>
                    <Td>Edit</Td>
                </Tr>
                <Tr>
                    <Td>
                        <Avatar src={perfil} />
                    </Td>
                    <Td>
                        <Cell>
                            <TextBold>Esthera Jackson</TextBold>
                            <Text>esthera@simmple.com</Text>
                        </Cell>
                    </Td>
                    <Td>
                        <Cell>
                            <TextBold>Manager</TextBold>
                            <Text>Organization</Text>
                        </Cell>
                    </Td>
                    <Td>
                        <Status $status="Online">Online</Status>
                    </Td>
                    <Td>16/01/2023</Td>
                    <Td>Edit</Td>
                </Tr>
                <Tr>
                    <Td>
                        <Avatar src={perfil} />
                    </Td>
                    <Td>
                        <Cell>
                            <TextBold>Esthera Jackson</TextBold>
                            <Text>esthera@simmple.com</Text>
                        </Cell>
                    </Td>
                    <Td>
                        <Cell>
                            <TextBold>Manager</TextBold>
                            <Text>Organization</Text>
                        </Cell>
                    </Td>
                    <Td>
                        <Status $status="Online">Online</Status>
                    </Td>
                    <Td>16/01/2023</Td>
                    <Td>Edit</Td>
                </Tr>
                <Tr>
                    <Td>
                        <Avatar src={perfil} />
                    </Td>
                    <Td>
                        <Cell>
                            <TextBold>Esthera Jackson</TextBold>
                            <Text>esthera@simmple.com</Text>
                        </Cell>
                    </Td>
                    <Td>
                        <Cell>
                            <TextBold>Manager</TextBold>
                            <Text>Organization</Text>
                        </Cell>
                    </Td>
                    <Td>
                        <Status $status="Online">Online</Status>
                    </Td>
                    <Td>16/01/2023</Td>
                    <Td>Edit</Td>
                </Tr>
            </Tbody>
        </Table>
    );
};
