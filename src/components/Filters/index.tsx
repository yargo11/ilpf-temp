import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button, InputAdornment, OutlinedInput, Stack, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

interface State {
    amount: string;
    password: string;
    maxWeight: string;
    minWeight: string;
    weightRange: string;
    showPassword: boolean;
}

export default function Filters() {
    const [age, setAge] = React.useState('');

    const [values, setValues] = React.useState<State>({
        amount: '',
        password: '',
        maxWeight: '',
        minWeight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleSelectChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    const handleTextFieldChange =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, [prop]: event.target.value });
        };


    return (
        <Box width="440px">

            <Stack spacing="7px">
                <Box
                    display="flex" flexDirection="row" alignItems="center" justifyContent="space-between"
                >
                    <Typography
                        fontSize="0.875rem" fontWeight="500" lineHeight="16.41px" color="#242323"
                    >
                        Idade
                    </Typography>

                    <FormControl >
                        <InputLabel id="demo-simple-select-label">Idade em meses</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Idade em meses"
                            onChange={handleSelectChange}
                            sx={{
                                width: "322px",
                            }}
                        >
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box
                    display="flex" flexDirection="row" alignItems="center" justifyContent="space-between"
                >
                    <Typography
                        fontSize="0.875rem" fontWeight="500" lineHeight="16.41px" color="#242323"
                    >
                        Peso vivo
                    </Typography>
                    <Box>

                        <FormControl sx={{ marginRight: "16px", width: '153px' }} variant="outlined">
                            <OutlinedInput
                                id="outlined-adornment-maxWeight"
                                value={values.maxWeight}
                                onChange={handleTextFieldChange('maxWeight')}
                                endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                                placeholder="A partir de"
                                inputProps={{
                                    'aria-label': 'maxWeight',
                                }}
                            />
                        </FormControl>

                        <FormControl sx={{ width: '153px' }} variant="outlined">
                            <OutlinedInput
                                id="outlined-adornment-minWeight"
                                value={values.minWeight}
                                onChange={handleTextFieldChange('minWeight')}
                                endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                                placeholder="Até"
                                inputProps={{
                                    'aria-label': 'minWeight',
                                }}
                            />
                        </FormControl>
                    </Box>
                </Box>

                <Box
                    display="flex" flexDirection="row" alignItems="center" justifyContent="space-between"
                >
                    <Typography
                        fontSize="0.875rem" fontWeight="500" lineHeight="16.41px" color="#242323"
                    >
                        Ganho de peso
                    </Typography>
                    <Box>

                        <FormControl sx={{ marginRight: "16px", width: '153px' }} variant="outlined">
                            <OutlinedInput
                                id="outlined-adornment-maxWeight"
                                value={values.maxWeight}
                                onChange={handleTextFieldChange('maxWeight')}
                                endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                                placeholder="A partir de"
                                inputProps={{
                                    'aria-label': 'maxWeight',
                                }}
                            />
                        </FormControl>

                        <FormControl sx={{ width: '153px' }} variant="outlined">
                            <OutlinedInput
                                id="outlined-adornment-minWeight"
                                value={values.minWeight}
                                onChange={handleTextFieldChange('minWeight')}
                                endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                                placeholder="Até"
                                inputProps={{
                                    'aria-label': 'minWeight',
                                }}
                            />
                        </FormControl>
                    </Box>
                </Box>

                <Box
                    display="flex" flexDirection="row" alignItems="center" justifyContent="space-between"
                >
                    <Typography
                        fontSize="0.875rem" fontWeight="500" lineHeight="16.41px" color="#242323"
                    >
                        Período
                    </Typography>
                    <Box>

                        <FormControl sx={{ marginRight: "16px", width: '153px' }} variant="outlined">
                            <OutlinedInput
                                id="outlined-adornment-maxWeight"
                                value={values.maxWeight}
                                onChange={handleTextFieldChange('maxWeight')}
                                endAdornment={<InputAdornment position="end"><CalendarMonthIcon /></InputAdornment>}
                                placeholder="De"
                                inputProps={{
                                    'aria-label': 'maxWeight',
                                }}
                            />
                        </FormControl>

                        <FormControl sx={{ width: '153px' }} variant="outlined">
                            <OutlinedInput
                                id="outlined-adornment-minWeight"
                                value={values.minWeight}
                                onChange={handleTextFieldChange('minWeight')}
                                endAdornment={<InputAdornment position="end"><CalendarMonthIcon /></InputAdornment>}
                                placeholder="Até"
                                inputProps={{
                                    'aria-label': 'minWeight',
                                }}
                            />
                        </FormControl>
                    </Box>

                </Box>

                <Box
                    display="flex" flexDirection="row" alignItems="center" justifyContent="flex-end"
                >
                    <Button variant="contained" sx={{ marginRight: "16px", width: '153px' }}>Consultar</Button>
                    <Button variant="outlined" sx={{ width: '153px' }}>Limpar tudo</Button>
                </Box>
            </Stack>

        </Box>
    );
}
