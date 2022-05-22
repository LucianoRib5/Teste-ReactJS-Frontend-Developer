import React, { useState } from "react";
import * as services from "../../services/apiRequestHttp";
import { useForm } from "../../hooks/useForm";
import TextField from '@material-ui/core/TextField';
import Button from "../../components/button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../../assets/logo.png";
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import {
    Main,
    Container,
    ContainerHeader,
    Title, Subtitle,
    ContainerForm,
    Form,
    ContainerFooter,
    StyledLink
} from "./styles";

const LoginPage: React.FC = () => {

    const { form, onChange } = useForm({
        name: "",
        password: ""
    })
    const [showPassword, setShowPassword] = useState(false);

    const login = (e: React.FormEvent): void => {
        e.preventDefault();

        const { name, password } = form;

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
                    <Form onSubmit={login}>
                        <TextField
                            name="name"
                            value={form.name}
                            onChange={onChange}
                            type="text"
                            required
                            label="Nome"
                            placeholder="Nome"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            style={{ margin: 8 }}
                        />
                        <TextField
                            name="password"
                            value={form.password}
                            onChange={onChange}
                            type={showPassword ? "text" : "password"}
                            required
                            label="Senha"
                            placeholder="Senha"
                            fullWidth
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