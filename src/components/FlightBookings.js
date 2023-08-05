import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
const FlightBookings = () => {
  const [classSelected, setClassSelected] = useState('Economy');
  const [passengersSelected, setPassengersSelected] = useState(1);

  return (
    <>
      <Box>
        <Typography>Best flight deals with</Typography>
        <Typography sx={{ fontWeight: 'bold', color: '#4F61A6' }}>
          Tickets4U
        </Typography>
        <Stack spacing={6} mt={4}>
          <FormControl>
            <Typography variant="caption">Depart From</Typography>

            <TextField
              sx={{
                bgcolor: '#FFFFFF',
              }}
              variant="outlined"
              InputProps={{
                placeholder: 'London - All Airports, England, UK',
                startAdornment: (
                  <InputAdornment position="start">
                    <FlightTakeoffIcon />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <FormControl>
            <Typography variant="caption">Arrive at</Typography>

            <TextField
              sx={{
                bgcolor: '#FFFFFF',
              }}
              variant="outlined"
              InputProps={{
                placeholder: 'New York - All Airports, New York, USA',
                startAdornment: (
                  <InputAdornment position="start">
                    <FlightLandIcon />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <Stack spacing={1} direction={{ xs: 'column', md: 'row' }}>
            <FormControl fullWidth>
              <Typography variant="caption">
                Departure Date
              </Typography>

              <TextField
                sx={{
                  bgcolor: '#FFFFFF',
                }}
                variant="outlined"
                type="date"
              />
            </FormControl>
            <FormControl fullWidth>
              <Typography variant="caption">Return Date</Typography>

              <TextField
                sx={{
                  bgcolor: '#FFFFFF',
                  width: '100%',
                }}
                variant="outlined"
                type="date"
              />
            </FormControl>
          </Stack>
          <Stack direction={'row'} spacing={2}>
            <Box width={'60%'}>
              <FormControl
                sx={{
                  width: '100%',
                }}
              >
                <Typography variant="caption">Class</Typography>
                <Select
                  value={classSelected}
                  onChange={(event) =>
                    setClassSelected(event.target.value)
                  }
                  sx={{
                    bgcolor: '#FFFFFF',
                  }}
                >
                  <MenuItem value="Economy">Economy</MenuItem>
                  <MenuItem value="Business Class">
                    Business Class
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box width={'40%'}>
              <FormControl
                sx={{
                  width: '100%',
                }}
              >
                <Typography variant="caption">Passengers</Typography>
                <Select
                  sx={{
                    bgcolor: '#FFFFFF',
                  }}
                  fullWidth
                  value={passengersSelected}
                  onChange={(event) =>
                    setPassengersSelected(event.target.value)
                  }
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Stack>
          <Button variant="contained">Find FLIGHT</Button>
        </Stack>
      </Box>
    </>
  );
};

export default FlightBookings;
