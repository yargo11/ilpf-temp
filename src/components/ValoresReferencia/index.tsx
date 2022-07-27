import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

import { ThermometerSVGComponent } from 'src/icons';
import Accordions from '../Accordions';

function createData(
    name: string,
    temperatura: string,
    fc: string,
    fr: string,


) {
    return { name, temperatura, fc, fr };
}

const rows = [
    createData('Alta', "até 35", "maior que 80", "maior que 36"),
    createData('Normal', "maior que 35 até 41", "maior que 60 até 80", "maior que 24 até 36"),
    createData('Baixa', "acima de 84", "até 60", "até 24"),
];

export default function ValoresReferencia() {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            fontSize: "0.875rem",
            fontWeight: "500",
            lineHeight: "16.41px",
            color: "#242323",
            border: "2px solid #FFFFFF"
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: "0.75rem",
            fontWeight: "500",
            lineHeight: "14.06px",
            color: "#242323",
            border: "2px solid #FFFFFF"
        },
    }));

    return (
        <Accordions title="Valores de Referência" >
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center" sx={{ background: "#E1E9F2" }} />
                            <StyledTableCell align="center" sx={{ background: "#E1E9F2" }}>Temperatura de pelame (°C)</StyledTableCell>
                            <StyledTableCell align="center" sx={{ background: "#E1E9F2" }}>Frequência cardíaca (bpm)</StyledTableCell>
                            <StyledTableCell align="center" sx={{ background: "#E1E9F2" }}>Frequência respiratória (rpm)</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{
                                    ' &:first-child th': { background: "#EDD2F9" },
                                    ' &:nth-child(2) th': { background: "#9DF0A1" },
                                    ' &:last-child th': { background: "#BAC9FF" },
                                }}
                            >
                                <StyledTableCell component="th" scope="row" align="right" sx={{ background: "#E1E9F2" }}>
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.temperatura}</StyledTableCell>
                                <StyledTableCell align="center">{row.fc}</StyledTableCell>
                                <StyledTableCell align="center">{row.fr}</StyledTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Accordions>
    );
}
