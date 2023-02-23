import React, { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
const SearchExercises = () => {
  const [search, setSearch] = useState('');
  const handleSearch = async() => {
    if (search) {
      // const exercisesData = await fetchData();
    }
  }
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", x: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Exercises You Might Want
        <br /> To Try
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          value={search}
          onChange={(e) => {setSearch(e.target.value.toLowerCase())}}
          type="text"
          placeholder="Search Exercises"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
        />
        <Button
          className="search-btn"
          sx={{
            backgroundColor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "170px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "54px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
