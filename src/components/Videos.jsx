import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos }) => {

    if (!videos?.length) return <Loader />

    return (
        <Stack>

            {videos.map((item, idx) => (

                <Box key={idx}>

                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}

                </Box>

            ))}

        </Stack>
    )
}

export default Videos
