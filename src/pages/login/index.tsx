import { useLoginModel } from "./model";
import { LoginView } from "./view";

export const LoginViewModel = () => {
  const loginModel = useLoginModel();

  return (
    <LoginView {...loginModel} />
  );
}