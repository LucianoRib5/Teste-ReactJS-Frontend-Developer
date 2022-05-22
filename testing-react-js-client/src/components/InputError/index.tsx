import { Span } from "./styles";
import errors from "../../utils/errors.json" 

interface InputErrorProps {
    type: string;
    field: string
};

export const InputError = ({type, field}: InputErrorProps) =>{
    return(
        //@ts-expect-error
        <Span>{errors[field][type]}</Span>
    );
};