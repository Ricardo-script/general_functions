import { useRef, useState, FormEvent } from "react";

interface FormInfo {
  name: string;
  email: string;
  password: string;
}

export default function GetFormData() {
  const [formInfo, setFormInfo] = useState<FormInfo>({
    name: "",
    email: "",
    password: ""
  });

  const form = useRef<HTMLFormElement>(null);

  const formData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      const name = form.current?.name?.value;
      const email = form.current?.email?.value;
      const password = form.current?.password?.value;

      setFormInfo({ name, email, password });
      form?.current?.reset();// limpa todos os campos
    }
  };

  console.log(formInfo);

  return (
    <form action="" ref={form} onSubmit={formData}>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="password" name="password" />
      <input type="submit" />

      <div>
        <h2>{formInfo.name}</h2>
        <h2>{formInfo.email}</h2>
        <h2>{formInfo.password}</h2>
      </div>
    </form>
  );
}


//limpar um campo especifico
if (inputRef.current != null) { // evitando o erro de null
	inputRef.current.value = "";
}
