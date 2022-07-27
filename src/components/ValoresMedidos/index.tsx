import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

import { LungSVGComponent, ThermometerSVGComponent, WealthHeartSVGComponent } from 'src/icons';
import Accordions from '../Accordions';

function createData(
    name: string,
    sol1: number,
    sombra1: number,
    pernoite1: number,
    sol2: number,
    sombra2: number,
    pernoite2: number,
    sol3: number,
    sombra3: number,
    pernoite3: number,

) {
    return { name, sol1, sombra1, pernoite1, sol2, sombra2, pernoite2, sol3, sombra3, pernoite3 };
}

const rows = [
    createData('Última leitura', 42, 20, 30, 42, 20, 30, 42, 20, 30),
    createData('Máxima', 42, 20, 30, 42, 20, 30, 42, 20, 30),
    createData('Mínima', 42, 20, 30, 42, 20, 30, 42, 20, 30),
    createData('Modo Anormal', 42, 20, 30, 42, 20, 30, 42, 20, 30),
    createData('Media', 42, 20, 30, 42, 20, 30, 42, 20, 30),
];

export default function ValoresMedidos() {

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
        <Accordions title="Valores Medidos" >
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell rowSpan={2} align="center" sx={{ background: "#E1E9F2" }} >
                                <ThermometerSVGComponent />
                                <LungSVGComponent />
                                <WealthHeartSVGComponent />
                            </StyledTableCell>
                            <StyledTableCell colSpan={3} align="center" sx={{ background: "#E1E9F2" }}>Temperatura de pelame (°C)</StyledTableCell>
                            <StyledTableCell colSpan={3} align="center" sx={{ background: "#E1E9F2" }}>Frequência cardíaca (bpm)</StyledTableCell>
                            <StyledTableCell colSpan={3} align="center" sx={{ background: "#E1E9F2" }}>Frequência respiratória (rpm)</StyledTableCell>
                        </TableRow>
                        <TableRow>
                            <StyledTableCell align="center" sx={{ background: "#E1E9F2" }}>Sol</StyledTableCell>
                            <StyledTableCell align="center" sx={{ background: "#E1E9F2" }}>Sombra</StyledTableCell>
                            <StyledTableCell align="center" sx={{ background: "#E1E9F2" }}>Pernoite</StyledTableCell>
                            <StyledTableCell align="center" sx={{ background: "#E1E9F2" }}>Sol</StyledTableCell>
                            <StyledTableCell align="center" sx={{ background: "#E1E9F2" }}>Sombra</StyledTableCell>
                            <StyledTableCell align="center" sx={{ background: "#E1E9F2" }}>Pernoite</StyledTableCell>
                            <StyledTableCell align="center" sx={{ background: "#E1E9F2" }}>Sol</StyledTableCell>
                            <StyledTableCell align="center" sx={{ background: "#E1E9F2" }}>Sombra</StyledTableCell>
                            <StyledTableCell align="center" sx={{ background: "#E1E9F2" }}>Pernoite</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <StyledTableCell component="th" scope="row" align="right" sx={{ background: "#E1E9F2" }}>
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.sol1}</StyledTableCell>
                                <StyledTableCell align="center">{row.sombra1}</StyledTableCell>
                                <StyledTableCell align="center">{row.pernoite1}</StyledTableCell>
                                <StyledTableCell align="center">{row.sol2}</StyledTableCell>
                                <StyledTableCell align="center">{row.sombra2}</StyledTableCell>
                                <StyledTableCell align="center">{row.pernoite2}</StyledTableCell>
                                <StyledTableCell align="center">{row.sol3}</StyledTableCell>
                                <StyledTableCell align="center">{row.sombra3}</StyledTableCell>
                                <StyledTableCell align="center">{row.pernoite3}</StyledTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Accordions>
    );
}
