//

import { useRef, useState } from "react";

export default function GetFormData() {

    const [formInfo, setFormInfo] = useState(''); // uso de state caso quiser listar em tel

    const form = useRef();

    const formData = (e) => {
        e.preventDefault();

        const name = form.current.name.value;
        const email = form.current.email.value;
        const password = form.current.password.value;

        setFormInfo({ name, email, password })
        e.target.reset() // reseta os valores dos campos
    }

    console.log(formInfo)

    return (
        <form action="" ref={form} onSubmit={formData}>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <input type="password" name="password" />
            <input type="submit" />

            <div> {/* uso de state caso quiser listar em tela*/}
                <h2>{formInfo.name}</h2>
                <h2>{formInfo.email}</h2>
                <h2>{formInfo.password}</h2>
            </div>
        </form>
    );
}

//------------------------------------------------------------------------------------------------------

import GetFormData from "./components/GetFormData";
export default function App() {
    return (
        <div>
            <GetFormData />
        </div>
    );
}