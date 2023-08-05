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
      {getPageItems().map((airlines) => {
        const logoWidth =
          airlines.logo === 'Wizz_Air_logo.svg.png'
            ? '100px'
            : '200px';
        const logoHeight =
          airlines.logo === 'Wizz_Air_logo.svg.png'
            ? '50px'
            : '100px';
        const stopsBackgroundColor =
          airlines.stops > 0 ? '#CA676A' : 'gray';

        return (
          <Card
            key={airlines.id}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              bgcolor: '#fff',
              mb: '10px',
              px: '20px',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Box
              width={'200px'}
              height={'60px'}
              alignItems={'center'}
              display={'flex'}
            >
              <img
                src={airlines.logo}
                alt="airlines"
                width={logoWidth}
                height={logoHeight}
              />
            </Box>

            <Stack direction={'row'} alignItems={'center'}>
              <Stack spacing={1}>
                <Typography variant="caption">Depart</Typography>
                <Typography variant="caption">
                  {airlines.departDate}
                </Typography>
                <Typography fontWeight={'bold'} variant="caption">
                  {airlines.departTime}
                </Typography>
              </Stack>

              <Stack
                mx={'10px'}
                direction={'row'}
                spacing={1}
                alignItems={'center'}
              >
                <Typography>.</Typography>
                <Typography>.</Typography>
                <Typography>.</Typography>
              </Stack>

              <Stack spacing={1} mt={4}>
                <div
                  style={{
                    padding: '5px 10px',
                    borderRadius: '50px',
                    backgroundColor: stopsBackgroundColor,
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    height: '25px',
                  }}
                >
                  <Typography variant="caption">
                    {airlines.stops}
                  </Typography>
                  <Typography variant="caption">Stops</Typography>
                </div>
                <Typography variant="caption">
                  {airlines.duration}
                </Typography>
              </Stack>

              <Stack
                direction={'row'}
                spacing={1}
                alignItems={'center'}
                mx={'10px'}
              >
                <Typography>.</Typography>
                <Typography>.</Typography>
                <Typography>.</Typography>
              </Stack>

              <Stack spacing={1}>
                <Typography variant="caption">Arrive</Typography>
                <Typography variant="caption">
                  {airlines.arriveDate}
                </Typography>
                <Typography fontWeight={'bold'} variant="caption">
                  {airlines.arriveTime}
                </Typography>
              </Stack>
            </Stack>

            <Stack spacing={1}>
              <Typography variant="caption">Price</Typography>
              <Typography fontWeight={'bold'} variant="h6">
                {airlines.price}
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
