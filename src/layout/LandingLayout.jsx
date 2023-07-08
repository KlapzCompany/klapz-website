import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"
import { MainHeader } from "../components/_header/MainHeader"
import { MainFooter } from "../components/_footer/MainFooter"
import { useRef } from "react"

export const LandingLayout = () => {

    const hero = useRef(null);
    const ourWork = useRef(null);
    const howItWorks = useRef(null);
    const aboutUs = useRef(null);
    const contact = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        });
    };

    return(
        <Box
            component={'main'}
            width={1}
            overflow={'hidden'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            padding={'0 24px'}>
            <MainHeader />
            <Outlet />
            <MainFooter />
        </Box>
    )
}