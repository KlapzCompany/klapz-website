import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"
import { MainHeader } from "../components/_header/MainHeader"
import { MainFooter } from "../components/_footer/MainFooter"


export const LandingLayout = () => {


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