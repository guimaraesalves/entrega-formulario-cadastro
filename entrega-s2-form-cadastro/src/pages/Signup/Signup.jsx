import { LayoutContainer } from "../../components/LayoutContainer/LayoutContainer";
import { Form } from "./styles.js";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useHistory } from "react-router-dom";

const Signup = ({ setUser, user }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido.").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "senhas Diferentes")
      .required("Campo obrigatório"),
  });

  const history = useHistory();

  const handleOnSubmit = (user) => {
    setUser(user);
    history.push(`/${user.name}`);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <LayoutContainer>
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit(handleOnSubmit)}>
        <input placeholder="Nome" {...register("name")} />
        <p> {errors.name?.message}</p>

        <input placeholder="Seu melhor email" type="email" {...register("email")} />
        <p> {errors.name?.message}</p>

        <input placeholder="Senha" type="password" {...register("password")} />
        <p> {errors.name?.message}</p>

        <input
          placeholder="Confirmar senha"
          type="password"
          {...register("confirm_password")}
        />
        <p> {errors.name?.message}</p>

        <button type="submit" >
          Cadastrar
        </button>
        </Form>
      </LayoutContainer>
    
  );
};

export default Signup;
