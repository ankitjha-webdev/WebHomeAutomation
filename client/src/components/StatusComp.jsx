import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import living from '../images/living-room.gif'

const StatusComp = ({device}) => {

  if (!device.length) {
    return <div>No Device Found..</div>
  }
  return (
    <div className=' '>
      <div className="grid  grid-cols-4  gap-10 ">
        {device.map((device) => (
          <div key={device._id}>

            <Card key={device._id} sx={{ display: 'flex', }} className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"  >
              <Box sx={{}}>
                <CardContent sx={{}} >
                  <Typography component="div" variant="h5">
                    {device.devname}
                  </Typography>
                  <Typography variant="subtitle1" paddingTop="1em" color="text.secondary" component="div">
                    Status : {device.state ? <span className="text-white bg-green-500 rounded-l-full p-2">ON</span> : <span className="text-white bg-red-500 rounded-l-full p-2">OFF</span>}
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                  <Switch
                    checked={device.state}
                    name="checked"
                  />
                </Box>

              </Box>
              <CardMedia
                component="img"
                sx={{
                  width: 151,
                  height: '50%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  borderRadius: '0.5rem',
                  border: '1px solid #f5f5f5',
                  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '1rem',
                  // margin: '1rem'
                }}
                image={living}
                alt="living room album cover"
              />

            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatusComp