
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { Videos, Sidebar } from "./";

const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState(null);


    return (
        <Stack sx={{ flexDirection: { sx: 'column', md: "row" } }}>

            <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>

                <Sidebar />

            </Box>

        </Stack>
    )
}

export default Feed
