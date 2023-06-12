import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material"

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
      <Table aria-label='simple table' stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align='center'>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            tableData.map(row => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell >{row.email}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MuiTable

const tableData = [{
  "id": 1,
  "first_name": "Koralle",
  "last_name": "Arrault",
  "email": "karrault0@geocities.com"
}, {
  "id": 2,
  "first_name": "Analiese",
  "last_name": "McNea",
  "email": "amcnea1@engadget.com"
}, {
  "id": 3,
  "first_name": "Stephani",
  "last_name": "Patten",
  "email": "spatten2@flickr.com"
}, {
  "id": 4,
  "first_name": "Stephenie",
  "last_name": "Bartram",
  "email": "sbartram3@state.tx.us"
}, {
  "id": 5,
  "first_name": "Henka",
  "last_name": "Sage",
  "email": "hsage4@digg.com"
}, {
  "id": 6,
  "first_name": "Dallis",
  "last_name": "Orrum",
  "email": "dorrum5@goo.gl"
}, {
  "id": 7,
  "first_name": "Katrina",
  "last_name": "Eckford",
  "email": "keckford6@utexas.edu"
}, {
  "id": 8,
  "first_name": "Stephannie",
  "last_name": "Howatt",
  "email": "showatt7@wp.com"
}, {
  "id": 9,
  "first_name": "Tamarra",
  "last_name": "Jeannard",
  "email": "tjeannard8@yelp.com"
}, {
  "id": 10,
  "first_name": "Gib",
  "last_name": "Andrey",
  "email": "gandrey9@artisteer.com"
}]