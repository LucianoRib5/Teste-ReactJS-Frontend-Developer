import { useState } from "react";
interface Inputs{
    name: string,
    password: string
};

export const useForm = (initialState: Inputs) =>{
    const [form, setForm] = useState<Inputs>(initialState);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({...form, [name]: value});
    };

    return { form, onChange };
};