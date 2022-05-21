import React from "react";
import * as services from "../../services/apiRequestHttp";
import { useForm } from "../../hooks/useForm";
import TextField from '@material-ui/core/TextField';
import Button from "../../components/button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

    const login = (e: React.FormEvent): void => {
        e.preventDefault();

        const { name, password } = form;

        services.client.post("/login", {
            name,
            password
        })
            .then(res => console.log(res.data))
            .catch(() => toast.error("Usuário(a) ou senha incorreta !"));
    };

    return (
        <Main>
            <Container>
                <ToastContainer theme={"colored"}/>
                <ContainerHeader>
                    <Title>
                        <h1 style={{color: "#1D93D1"}}>OneBlue</h1>
                    </Title>
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
                            type="password"
                            required
                            label="Senha"
                            placeholder="Senha"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            style={{ margin: 8 }}
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