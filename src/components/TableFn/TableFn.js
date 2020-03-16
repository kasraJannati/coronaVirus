import React from 'react';
import styles from './TableFn.module.css';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


function TableFn(casesByCounry) {

    const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
    }))(TableCell);

    const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
        },
    },
    }))(TableRow);

    const fullData = [];
    function createData(country, caseNum, deaths, region, total_recovery) {
        var person = {country:country, caseNum: caseNum, deaths:deaths, region:region, total_recovery:total_recovery};
        fullData.push(person)
        return { country, caseNum, deaths, region, total_recovery };
    }
        
    for(let i=0; i<casesByCounry.case.length; i++) {
        createData(casesByCounry.case[i][Object.keys(casesByCounry.case[i])[0]],
        casesByCounry.case[i][Object.keys(casesByCounry.case[i])[1]],
        casesByCounry.case[i][Object.keys(casesByCounry.case[i])[2]],
        casesByCounry.case[i][Object.keys(casesByCounry.case[i])[3]],
        casesByCounry.case[i][Object.keys(casesByCounry.case[i])[4]])
    }

    console.log(fullData)

    return (
        <TableContainer>
            <h2>
                The list of countries
            </h2>
        <Table aria-label="customized table"  className={styles.table}>
            <TableHead>
            <TableRow>
                <StyledTableCell>Country</StyledTableCell>
                <StyledTableCell align="right">Case</StyledTableCell>
                <StyledTableCell align="right">deaths</StyledTableCell>
                <StyledTableCell align="right">region</StyledTableCell>
                <StyledTableCell align="right">total_recovered</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {fullData.map(row => (
                <StyledTableRow key={row.Country}>
                <StyledTableCell component="th" scope="row">
                    {row.country}
                </StyledTableCell>
                <StyledTableCell align="right">{row.caseNum}</StyledTableCell>
                <StyledTableCell align="right">{row.deaths}</StyledTableCell>
                <StyledTableCell align="right">{row.region}</StyledTableCell>
                <StyledTableCell align="right">{row.total_recovery}</StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}



export default TableFn;

