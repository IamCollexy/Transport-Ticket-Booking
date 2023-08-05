import React, { useEffect, useState } from 'react';
import {
  Card,
  Typography,
  Box,
  Stack,
  Pagination,
} from '@mui/material';

const AirLines = ({ sortedData }) => {
  const ITEMS_PER_PAGE = 5;

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const total = sortedData.length;
    setTotalPages(Math.ceil(total / ITEMS_PER_PAGE));
  }, [sortedData]);

  const handlePageChange = (_, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPageItems = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return sortedData.slice(startIndex, endIndex);
  };

  return (
    <>
      {getPageItems().map((airline) => {
        const isWizzAirLogo =
          airline.logo === 'Wizz_Air_logo.svg.png';
        const logoWidth = isWizzAirLogo ? '100px' : '200px';
        const logoHeight = isWizzAirLogo ? '50px' : '100px';
        const stopsBackgroundColor =
          airline.stops > 0 ? '#CA676A' : 'gray';

        return (
          <Card
            key={airline.id}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              bgcolor: '#fff',
              mb: '10px',
              px: { xs: '5px', sm: '10px', md: '20px' },
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              width: { xs: '100%', md: 'auto' },
            }}
          >
            <Box
              width={{ xs: '100px', md: '200px' }}
              height={'60px'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <img
                src={airline.logo}
                alt="airline"
                width={logoWidth}
                height={logoHeight}
              />
            </Box>

            <Stack
              my={1}
              spacing={{ xs: 1, md: 2 }}
              direction={{ xs: 'column', md: 'row' }}
              alignItems={'center'}
            >
              <Stack spacing={1}>
                <Typography fontWeight={'bold'} variant="caption">
                  Depart
                </Typography>
                <Typography variant="caption">
                  {airline.departDate}
                </Typography>
                <Typography fontWeight={'bold'} variant="caption">
                  {airline.departTime}
                </Typography>
              </Stack>

              <Box
                display={{ xs: 'none', md: 'flex' }}
                mx={2}
                alignItems={'center'}
              >
                <Typography>.</Typography>
                <Typography>.</Typography>
                <Typography>.</Typography>
              </Box>

              <Stack
                spacing={1}

                // mt={{ xs: 1, md: 4 }}
                // mb={{ xs: 1, md: 0 }}
              >
                <Box
                  sx={{
                    borderRadius: '50px',
                    bgcolor: stopsBackgroundColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '25px',
                  }}
                >
                  <Typography variant="caption">
                    {airline.stops}
                  </Typography>
                  <Typography variant="caption">Stops</Typography>
                </Box>
                <Typography variant="caption">
                  {airline.duration}
                </Typography>
              </Stack>

              <Box
                display={{ xs: 'none', md: 'flex' }}
                mx={2}
                alignItems={'center'}
              >
                <Typography>.</Typography>
                <Typography>.</Typography>
                <Typography>.</Typography>
              </Box>

              <Stack spacing={1}>
                <Typography fontWeight={'bold'} variant="caption">
                  Arrive
                </Typography>
                <Typography variant="caption">
                  {airline.arriveDate}
                </Typography>
                <Typography fontWeight={'bold'} variant="caption">
                  {airline.arriveTime}
                </Typography>
              </Stack>
            </Stack>

            <Stack spacing={1}>
              <Typography variant="caption">Price</Typography>
              <Typography fontWeight={'bold'} variant="h6">
                {airline.price}
              </Typography>
            </Stack>
          </Card>
        );
      })}

      <Pagination
        count={totalPages}
        page={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default AirLines;
