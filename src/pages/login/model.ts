import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStorage } from "../../hooks/use-storage";
import { FakeJWT } from "../../@types/fake-jwt";
import { StorageKey } from "../../@types/storage-key";

export const useLoginModel = () => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setItem } = useStorage<FakeJWT>({
    key: StorageKey.JWT,
    storage: window.localStorage,
  });

  const handleTypeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(() => event.target.value);
  }

  const handleTypePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(() => event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setItem({
      token: '123456',
    });
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