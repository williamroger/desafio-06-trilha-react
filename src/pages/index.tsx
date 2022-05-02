import { Box } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { ContinentsSlide } from "../components/ContinentsSlide/indext";
import { TextDivider } from "../components/TextDivider";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <Box paddingBottom="3rem">
      <Banner />
      <TravelTypes />
      <TextDivider />
      <ContinentsSlide />
    </Box>
  )
}
