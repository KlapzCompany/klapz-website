import { Box, Stack, Typography } from "@mui/material"
import { MainContainer } from "../../../components/_container/MainContainer"

import {ReactComponent as Brand1} from "../../../assets/icons/brand-logo-thesaasco.svg";
import {ReactComponent as Brand2} from "../../../assets/icons/brand-logo-proposal-ai.svg";
import {ReactComponent as Brand3} from "../../../assets/icons/brand-logo-mipleis.svg";
import {ReactComponent as Brand4} from "../../../assets/icons/brand-logo-bytedance.svg";

export const AboutUs = () => {

    const aboutUsImg = require('../../../assets/images/about-us.png');
    return(
        <MainContainer>
            <Box
                id={'home_about_us'}
                width={1}
                maxWidth={'1440px'}
                padding={{xs: '32px 16px', md: '48px 54px'}}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                gap={{xs: '36px', md: '64px'}}>
                <Stack
                    width={1}
                    textAlign={'center'}>
                    <Typography sx={{typography: {xs: 'h5', md: 'h1'}}}>¿Quiénes Somos?</Typography>
                </Stack>
                <Box
                    width={1}
                    display={'flex'}
                    flexDirection={{xs: 'column', md: 'row'}}
                    alignItems={'center'}
                    gap={{xs: '24px', md: '48px'}}
                    justifyContent={'space-between'}>
                    <Box
                        maxWidth={{xs: '100%', md: '45%'}}
                        component={'img'}
                        borderRadius={'20px'}
                        src={aboutUsImg}
                        sx={{
                            objectFit: 'cover'
                        }} />
                    <Box
                        height={1}
                        maxWidth={{xs: '100%', md: '40%'}}
                        alignSelf={'center'}
                        display={'flex'}
                        flexDirection={'column'}
                        gap={'12px'}>
                        <Typography sx={{ typography: {xs: 'h6', md: 'h3'}}} textAlign={{xs: 'center', md: 'left'}}></Typography>
                        <Typography sx={{ typography: {xs: 'small', md: 'body1'}}} textAlign={{xs: 'center', md: 'left'}}>Somos una cultura de colaboración y nuestro enfoque esta centrado en nuestros clientes el cual trabajamos estrechamente para comprender sus necesidades y asi ofrecer soluciones personalizadas que se adapten perfectamente a sus requisitos.</Typography>
                    </Box>
                </Box>
                <Box
                    width={1}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    gap={'24px'}>
                    <Typography sx={{ typography: {xs: 'h6', md: 'h2'} }} textAlign={'center'}>Marcas que han confiado en nosotros</Typography>
                    <Stack
                        width={1}
                        display={'flex'}
                        flexDirection={'row'}
                        flexWrap={{xs: 'wrap', md: 'nowrap'}}
                        alignItems={'center'}
                        gap={{xs: '24px', md: 'auto'}}
                        justifyContent={{xs: 'center', md: 'space-between'}}>
                        <Brand1 width={'100px'} />
                        <Brand2 width={'100px'} />
                        <Brand3 width={'100px'} />
                        <Brand4 width={'100px'} />
                    </Stack>
                </Box>
            </Box>
        </MainContainer>
    )
}