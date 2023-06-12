import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Tab } from "@mui/material"
import { useState } from "react"
import FavoriteIcon from "@mui/icons-material/Favorite"

const MuiTabs = () => {
  const [value, setValue] = useState('1')
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {setValue(newValue)}
  return (
    <Box>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '300px' }}>
                <TabList aria-label="Tabs-example" onChange={handleChange} textColor="secondary" 
                    indicatorColor="secondary" centered scrollButtons='auto'
                >
                    <Tab label='Tab One' value='1' icon={<FavoriteIcon />} iconPosition="start" />
                    <Tab label='Tab Two' value='2' disabled />
                    <Tab label='Tab Three' value='3' />
                    <Tab label='Tab Four' value='4' />
                    <Tab label='Tab FIve' value='5' />
                    <Tab label='Tab Six' value='6' />
                </TabList>
            </Box>
            <TabPanel value='1'>Panel 1</TabPanel>
            <TabPanel value='2'>Panel 2</TabPanel>
            <TabPanel value='3'>Panel 3</TabPanel>
            <TabPanel value='4'>Panel 4</TabPanel>
            <TabPanel value='5'>Panel 5</TabPanel>
            <TabPanel value='6'>Panel 6</TabPanel>
        </TabContext>
    </Box>
  )
}

export default MuiTabs