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
    Title, 
    Subtitle, 
    ContainerForm, 
    Form, 
    ContainerFooter, 
    StyledLink 
} from "./styles";

const CadasterPage:React.FC = () =>{

    const { form, onChange } = useForm({
        name: "",
        password: ""
    });

    const cadasterUser = (e: React.FormEvent) =>{
        e.preventDefault();
        
        const { name, password } = form;

        services.client.post("/user/cadaster",{
            name,
            password
        })
        .then(res => console.log(res.data))
        .catch(() => toast.error("Usuário(a) já cadastrado !"));
    };
    
    return(
        <Main>
            <Container>
                <ToastContainer theme={"colored"}/>
                <ContainerHeader>
                    <Title>
                        <h1 style={{color: "#1D93D1"}}>OneBlue</h1>                    
                    </Title>
                    <Subtitle>
                        <p>Cadastro</p>
                    </Subtitle>
                </ContainerHeader>
                <ContainerForm>
                    <Form onSubmit={cadasterUser}>
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
                            buttonName="CADASTRAR"
                        />
                    </Form>
                </ContainerForm>
                <ContainerFooter>
                    <p>Já possui uma conta?</p>
                    <StyledLink to={"/"}>
                        <p style={{fontWeight: "bold", color: "#1D93D1"}}>Login</p>
                    </StyledLink>
                </ContainerFooter>
            </Container>
        </Main>
    );
};

export default CadasterPage;