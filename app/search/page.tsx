"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import { getDataFromAPI } from "@/app/actions/getDataFromAPI";
import Videos from "@/app/components/Videos";

export default function SearchFeed() {
  const [videos, setVideos] = useState([]);

  const searchTerm = useSearchParams().get("searchTerm");

  useEffect(() => {
    getDataFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for:{" "}
        <span style={{ color: "#F31503" }}>{searchTerm}</span>
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
}
