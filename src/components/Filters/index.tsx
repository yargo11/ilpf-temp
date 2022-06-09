import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button, Checkbox, Chip, ListItemText, OutlinedInput, Stack, Typography } from '@mui/material';
import { Theme, useTheme } from '@mui/material/styles';
import TextInput from '../FormElements/TextInput';
import DatePicker from '../FormElements/DatePicker';

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

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const names = [
        '5 Meses',
        '6 Meses',
        '7 Meses',
        '8 Meses',
        '9 Meses',
        '10 Meses',
        '11 Meses',
        '12 Meses',
        '13 Meses',
    ];

    function getStyles(name: string, personName: readonly string[], theme: Theme) {
        return {
            fontWeight:
                personName.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }

    const handleTextFieldChange =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, [prop]: event.target.value });
        };

    const theme = useTheme();
    const [personName, setPersonName] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
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

                    <div>
                        <FormControl sx={{ width: 336 }}>
                            <InputLabel id="demo-multiple-chip-label">Idade em Meses</InputLabel>
                            <Select
                                labelId="demo-multiple-chip-label"
                                id="demo-multiple-chip"
                                multiple
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput id="select-multiple-chip" label="Idade em Meses" />}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                        {selected.map((value) => (
                                            <Chip key={value} label={value} sx={{ bgcolor: "ilpfBrown.clear" }} />
                                        ))}
                                    </Box>
                                )}
                                MenuProps={MenuProps}
                            >
                                {names.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, personName, theme)}
                                    >
                                        <Checkbox checked={personName.indexOf(name) > -1} />
                                        <ListItemText primary={name} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </Box>
                <Box
                    display="flex" flexDirection="row" alignItems="center" justifyContent="space-between"
                >
                    <Typography
                        fontSize="0.875rem" fontWeight="500" lineHeight="16.41px" color="#242323"
                    >
                        Peso vivo
                    </Typography>
                    <Stack
                        direction="row"
                        spacing="16px"
                    >
                        <TextInput id="peso-vivo-de" />
                        <TextInput id="peso-vivo-ate" />
                    </Stack>
                </Box>

                <Box
                    display="flex" flexDirection="row" alignItems="center" justifyContent="space-between"
                >
                    <Typography
                        fontSize="0.875rem" fontWeight="500" lineHeight="16.41px"
                    >
                        Ganho de peso
                    </Typography>
                    <Stack
                        direction="row"
                        spacing="16px"
                    >
                        <TextInput id="ganho-de-peso-de" />
                        <TextInput id="ganho-de-peso-ate" />
                    </Stack>
                </Box>

                <Box
                    display="flex" flexDirection="row" alignItems="center" justifyContent="space-between"
                >
                    <Typography
                        fontSize="0.875rem" fontWeight="500" lineHeight="16.41px" color="#242323"
                    >
                        Período
                    </Typography>
                    <Stack
                        direction="row"
                        spacing="16px"
                    >
                        <DatePicker label="De" />
                        <DatePicker label="Até" />
                    </Stack>
                </Box>

                <Box
                    display="flex" flexDirection="row" alignItems="center" justifyContent="flex-end"
                >
                    <Button variant="contained" sx={{ marginRight: "16px", width: 160 }}>Consultar</Button>
                    <Button variant="outlined" sx={{ width: 160 }}>Limpar tudo</Button>
                </Box>
            </Stack>

        </Box>
    );
}
