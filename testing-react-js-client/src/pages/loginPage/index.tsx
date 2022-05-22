import React, { useState } from "react";
import * as services from "../../services/apiRequestHttp";
import TextField from '@material-ui/core/TextField';
import Button from "../../components/button";
import { InputError } from "../../components/InputError";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../../assets/logo.png";
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { FormData } from "../../types/types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../utils/schema";

import {
    Main,
    Container,
    ContainerHeader,
    Subtitle,
    ContainerForm,
    Form,
    ContainerFooter,
    StyledLink
} from "./styles";

const LoginPage: React.FC = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const login = (data: { name: string; password: string; }): void => {

        const { name, password } = data;

        services.client.post("/login", {
            name,
            password
        })
            .then(() => {
                window.location.href = "https://oneblue.io/";
            })
            .catch(() => toast.error("Usuário(a) ou senha incorreta !"));
    };

    const handleShowPassword = (): void => {
        setShowPassword(!showPassword);
    };

    return (
        <Main>
            <Container>
                <ToastContainer theme={"colored"} />
                <ContainerHeader>
                    <img src={logo} alt="Logo One Blue" />
                    <Subtitle>
                        <p>Entrar</p>
                    </Subtitle>
                </ContainerHeader>
                <ContainerForm>
                    <Form onSubmit={handleSubmit(login)}>
                        <TextField
                            {...register("name")}
                            type="text"
                            label="Nome"
                            placeholder="Nome"
                            fullWidth
                            helperText={
                                errors?.name?.type
                                && <InputError type={errors.name.type} field="name"/>
                            }
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            style={{ margin: 8 }}
                        />
                        <TextField
                            {...register("password")}
                            type={showPassword ? "text" : "password"}
                            label="Senha"
                            placeholder="Mínimo 6 caracteres"
                            fullWidth
                            helperText={
                                errors?.password?.type
                                && <InputError type={errors.password.type} field="password"/>
                            }
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            style={{ margin: 8 }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment
                                        position="end"
                                        onClick={handleShowPassword}
                                    >
                                        {
                                            showPassword ?
                                                <VisibilityIcon cursor="pointer" /> :
                                                <VisibilityOffIcon cursor="pointer" />
                                        }
                                    </InputAdornment>
                                )
                            }}
                        />
                        <Button
                            buttonName="ENTRAR"
                        />
                    </Form>
                </ContainerForm>
                <ContainerFooter>
                    <p>Não possui cadastro?</p>
                    <StyledLink to={"user/cadaster"}>
                        <p style={{ fontWeight: "bold", color: "#1D93D1" }}>Clique aqui</p>
                    </StyledLink>
                </ContainerFooter>
            </Container>
        </Main>
    );
};

export default LoginPage;