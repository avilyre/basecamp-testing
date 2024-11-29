import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLoginModel = () => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleTypeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(() => event.target.value);
  }

  const handleTypePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(() => event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    navigate("/dashboard");
  }

  return {
    email,
    password,
    handleTypeEmail,
    handleTypePassword,
    handleSubmit
  };
}