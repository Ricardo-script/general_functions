import React, { useState } from "react";
import { z } from "zod";

// Esquema de validação
const schema = z.object({
  nome: z.string().min(1, "O nome é obrigatório"),
  email: z.string().min(1, "O email é obrigatório").email("Formato de email inválido"),
});

export default function Formulario() {
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const result = schema.safeParse(data);

    if (!result.success) {
      const formattedErrors = result.error.format();
      setErrors({
        nome: formattedErrors.nome?._errors[0],
        email: formattedErrors.email?._errors[0],
      });
      return;
    }

    // Limpa erros e processa os dados válidos
    setErrors({});
    console.log("Formulário válido:", result.data);
    alert("Formulário enviado com sucesso!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: "1rem" }}>
        <label>Nome:</label>
        <br />
        <input type="text" name="nome" />
        {errors.nome && <p style={{ color: "red", margin: 0 }}>{errors.nome}</p>}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Email:</label>
        <br />
        <input type="email" name="email" />
        {errors.email && <p style={{ color: "red", margin: 0 }}>{errors.email}</p>}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}
