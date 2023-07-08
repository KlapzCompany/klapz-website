import { Box } from "@mui/material"
import { HomeHero } from "./components/HomeHero"
import { OurWork } from "./components/OurWork"
import { AboutUs } from "./components/AboutUs"
import { HowItWorks } from "./components/HowItWorks"
import { Contact } from "./components/Contact"

export const LandingPage = () => {
    return(
        <Box
            component={'article'}
            width={1}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}>
            <HomeHero />
            <OurWork />
            <AboutUs />
            <HowItWorks />
            <Contact />
        </Box>
    )
}