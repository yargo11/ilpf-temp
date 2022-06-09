import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import { useState } from "react";

interface State {
    value: string;
}

interface TextInputProps {
    id: string
}

export default function TextInput({ id }: TextInputProps) {

    const [values, setValues] = useState<State>({
        value: '',
    });

    const handleTextFieldChange =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, [prop]: event.target.value });
        };

    return (
        <FormControl sx={{ width: 160 }} variant="outlined">
            <OutlinedInput
                id={id}
                value={values.value}
                onChange={handleTextFieldChange('value')}
                endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                placeholder="A partir de"
                inputProps={{
                    'aria-label': `${id}`,
                }}
            />
        </FormControl>
    )
}