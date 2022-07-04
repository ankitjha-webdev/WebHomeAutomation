import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import living from '../images/living-room.gif' 
const StatusComp = () => {
  const theme = useTheme();
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const status = {
    ON: {
      color: theme.palette.success.main,
      label: 'ON'
    },
    OFF: {
      color: theme.palette.error.main,
      label: 'OFF'
    }
  }

  return (
    <div className=' '>
      {/* hero section in tailwind css */}

      <div className="card mx-2">
        <Card sx={{ display: 'flex', maxWidth: '20rem', margin: "auto" }} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"  >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                Fan Status
              </Typography>
              <Typography variant="subtitle1" paddingTop="1em" color="text.secondary" component="div">
                Status : <span className="text-white bg-green-500 rounded-l-full p-2">{status.ON.label ? status.ON.label : status.OFF.label}</span>
                
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

              <Switch {...label} defaultChecked   />
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={living}
            alt="living room album cover"
          />
        </Card>
      </div>
    </div>
  )
}

export default StatusComp