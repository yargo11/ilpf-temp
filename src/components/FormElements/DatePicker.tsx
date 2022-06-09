import { useState } from "react";
import { FormControl, InputAdornment, OutlinedInput, TextField } from "@mui/material";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

interface DatePicker {
    label: string,
}

export default function DatePicker({ label }: DatePicker) {

    const [date, setDate] = useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
    );

    const handleChange = (newValue: Date | null) => {
        setDate(newValue);
    };

    return (
        <FormControl sx={{ width: 160 }} variant="outlined">
            <DesktopDatePicker
                label={label}
                inputFormat="MM/dd/yyyy"
                value={date}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
            />
        </FormControl>
    )
}