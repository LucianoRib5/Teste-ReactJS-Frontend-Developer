import { ContainerButton } from "./styles";

interface PropsButton{
    buttonName: string
};

const Button: React.FC<PropsButton> = ({buttonName}) =>{
    return(
        <ContainerButton>
            {buttonName}
        </ContainerButton>
    );
};

export default Button;