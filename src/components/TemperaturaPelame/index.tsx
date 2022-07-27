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
    sol1: number | string,
    sombra1: number | string,
    pernoite1: number | string,
    sol2: number | string,
    sombra2: number | string,
    pernoite2: number | string,
    sol3: number | string,
    sombra3: number | string,
    pernoite3: number | string,

) {
    return { name, sol1, sombra1, pernoite1, sol2, sombra2, pernoite2, sol3, sombra3, pernoite3 };
}

const rows = [
    createData('Temperatura', 42, 20, 30, 42, 20, 30, 42, 20, 30),
    createData('1º registro', "07/09/21 17:30", "07/09/21 17:30", "07/09/21 17:30", "07/09/21 17:30", "07/09/21 17:30", "07/09/21 17:30", "07/09/21 17:30", "07/09/21 17:30", "07/09/21 17:30"),
    createData('Último registro', 42, 20, 30, 42, 20, 30, 42, 20, 30),
    createData('Duração Aproximada', "30 min", "30 min", "30 min", "30 min", "30 min", "30 min", "30 min", "30 min", "30 min"),
];

export default function TemperaturaPelame() {

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
        <Accordions title="Temperatura de Pelame" hasIcon={<ThermometerSVGComponent />} >
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell rowSpan={2} align="center" sx={{ background: "#E1E9F2" }} >
                                <ThermometerSVGComponent />
                            </StyledTableCell>
                            <StyledTableCell colSpan={3} align="center" sx={{ background: "#E1E9F2" }}>Máxima</StyledTableCell>
                            <StyledTableCell colSpan={3} align="center" sx={{ background: "#E1E9F2" }}>Mínima</StyledTableCell>
                            <StyledTableCell colSpan={3} align="center" sx={{ background: "#E1E9F2" }}>Moda Anormal</StyledTableCell>
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
