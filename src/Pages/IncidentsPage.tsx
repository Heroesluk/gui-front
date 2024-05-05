import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';

export const IncidentsPage = () => {

    const incidents = [{
        id: '1',
        type: 'Disk utilized over limit',
        description: '90% of disk space utilized',
        severity: 'medium',
        date: '2022-01-01 21:00:00',
    }, {
        id: '2',
        type: 'Ram usage over limit',
        description: 'Ram usage spiked to 95%',
        severity: 'low',
        date: '2022-01-01 19:00:00',
    },{
        id: '3',
        type: 'Network usage over limit',
        description: '100 GB of data transferred in 1 hour',
        severity: 'high',
        date: '2022-01-01',
    }]


    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Incident ID</TableCell>
                            <TableCell>Incident Type</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Severity</TableCell>
                            <TableCell>Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {incidents.map((incident) => (
                            <TableRow key={incident.id}>
                                <TableCell>{incident.id}</TableCell>
                                <TableCell>{incident.type}</TableCell>
                                <TableCell>{incident.description}</TableCell>
                                <TableCell>{incident.severity}</TableCell>
                                <TableCell>{incident.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

