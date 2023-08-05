'use client';

import { airLinesData } from '@/components/data';
import { Grid, Stack, Typography, styled, Card } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FlightIcon from '@mui/icons-material/Flight';
import TrainIcon from '@mui/icons-material/Train';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FlightBookings from '@/components/FlightBookings';
import AirLines from '@/components/AirLines';

// For Transport Type Tabs
const GreenTab = styled(Tab)(({ theme, selected }) => ({
  backgroundColor: selected ? '#74C684' : 'transparent',
  color: selected ? '#fff' : 'inherit',
  '& .MuiSvgIcon-root': {
    // Change icon color (all icons inside the tab)
    fill: selected ? '#fff' : 'inherit',
  },
  '& .MuiTab-label': {
    // Change label text color
    color: selected ? '#fff' : 'inherit',
  },
}));

// For sort Airlines Typography

const SortTypography = styled(Typography)(({ theme, selected }) => ({
  padding: '5px 20px',
  borderRadius: '50px',
  backgroundColor: selected ? '#3F51B5' : '#fff',
  fontSize: '10px',
  fontWeight: '500',
  color: selected ? '#fff' : '#000',
  cursor: 'pointer',
}));

const Home = () => {
  const [value, setValue] = React.useState('1');
  const [sortedData, setSortedData] = useState(airLinesData); // Initialize with the original data
  const [selectedSortOption, setSelectedSortOption] = useState('1');

  // handle Tab Change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleAirlinesChange = (event, newValue) => {
    sortData(newValue);
    setSelectedSortOption(newValue);
  };

  //For sorting airlines data

  const sortData = (sortOption) => {
    let sortedArray = [...airLinesData];
    switch (sortOption) {
      case '1': // CHEAPEST
        sortedArray.sort((a, b) => a.price - b.price);
        break;
      case '2': // SHORTEST
        sortedArray.sort((a, b) => a.duration - b.duration);
        break;
      case '3': // RECOMMENDED (customize this sorting according to your preference)
        // For example, sorting by airline rating (if available)
        sortedArray.sort((a, b) => {
          // If airlineRating property exists on the objects, otherwise use some default value
          const ratingA = a.airlineRating || 0;
          const ratingB = b.airlineRating || 0;
          return ratingB - ratingA;
        });
        break;
      default:
        break;
    }
    // Slice the first 5 elements to show only 5 sorted items
    setSortedData(sortedArray.slice(0, 5));
  };

  return (
    <Grid
      container
      // spacing={2}
      sx={{
        height: '100vh',
      }}
    >
      <Grid item xs={12} lg={5} sx={{ background: '#F3F6FD' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'start',
            padding: '40px 20px',
          }}
        >
          <Typography
            sx={{
              fontWeight: 'bold',
              color: '#4F61A6',
              borderRight: '1px solid #74C684',
              borderTop: '1px solid #74C684',
              borderBottom: '1px solid #74C684',
              padding: '10px',
              borderRadius: '3px',
            }}
          >
            Tickets4U
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            typography: 'body1',
          }}
        >
          <TabContext
            value={value}
            sx={{
              border: '1px solid red',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                sx={{
                  bgcolor: '#fff',
                }}
              >
                <GreenTab
                  label={
                    <Typography
                      variant="caption"
                      sx={{ textTransform: 'none' }}
                    >
                      Flight
                    </Typography>
                  }
                  icon={<FlightIcon fontSize="small" />}
                  value="1"
                  selected={value === '1'}
                />
                <GreenTab
                  label={
                    <Typography
                      variant="caption"
                      sx={{ textTransform: 'none' }}
                    >
                      Trains
                    </Typography>
                  }
                  icon={<TrainIcon fontSize="small" />}
                  value="2"
                  selected={value === '2'}
                />
                <GreenTab
                  icon={<DirectionsBoatIcon fontSize="small" />}
                  label={
                    <Typography
                      variant="caption"
                      sx={{ textTransform: 'none' }}
                    >
                      Ships
                    </Typography>
                  }
                  value="3"
                  selected={value === '3'}
                />
                <GreenTab
                  icon={<TimeToLeaveIcon fontSize="small" />}
                  label={
                    <Typography
                      variant="caption"
                      sx={{ textTransform: 'none' }}
                    >
                      Cars
                    </Typography>
                  }
                  value="4"
                  selected={value === '4'}
                />
              </TabList>
            </Box>
            <TabPanel value="1">
              <FlightBookings />
            </TabPanel>
            <TabPanel
              value="2"
              sx={{ fontSize: '16px', fontWeight: 'bold' }}
            >
              Trains Coming Soon
            </TabPanel>
            <TabPanel
              value="3"
              sx={{ fontSize: '16px', fontWeight: 'bold' }}
            >
              {' '}
              Ships Coming Soon
            </TabPanel>
            <TabPanel
              value="4"
              sx={{ fontSize: '16px', fontWeight: 'bold' }}
            >
              {' '}
              Cars Coming Soon
            </TabPanel>
          </TabContext>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        lg={7}
        sx={{
          bgcolor: '#E9F0F8',
          padding: '25px 20px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <Stack>
            <Typography variant="h5">Search results</Typography>
            <Typography variant="caption">
              We found 15 results
            </Typography>
          </Stack>
          <Stack direction={'row'} spacing={2}>
            <SortTypography
              variant="caption"
              selected={selectedSortOption === '1'}
              onClick={() => handleAirlinesChange(null, '1')}
            >
              CHEAPEST
            </SortTypography>
            <SortTypography
              variant="caption"
              selected={selectedSortOption === '2'}
              onClick={() => handleAirlinesChange(null, '2')}
            >
              SHORTEST
            </SortTypography>
            <SortTypography
              variant="caption"
              selected={selectedSortOption === '3'}
              onClick={() => handleAirlinesChange(null, '3')}
            >
              RECOMMENDED
            </SortTypography>
          </Stack>
        </Box>
        <Stack
          my="20px"
          direction={'row'}
          spacing={2}
          alignItems={'center'}
        >
          <Typography variant="h5">London</Typography>
          <ArrowRightAltIcon fontSize="large" color="gray" />
          <Typography variant="h5">New York</Typography>
        </Stack>
        <AirLines sortedData={sortedData} />
      </Grid>
    </Grid>
  );
};

export default Home;
