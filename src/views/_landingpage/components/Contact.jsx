import { Box, Button, Stack, Typography } from "@mui/material"
import { MainContainer } from "../../../components/_container/MainContainer"

export const Contact = () => {
    return(
        <MainContainer>
            <Box
                id={'home_contact'}
                width={1}
                maxWidth={'1440px'}
                padding={{xs: '32px 16px', md: '48px 54px'}}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                gap={{xs: '32px', md: '64px'}}>
                <Stack
                    width={{xs: '100%', md: '80%'}}
                    spacing={'24px'}
                    textAlign={'center'}>
                    <Typography sx={{typography: {xs: 'h5', md: 'h1'}}}>Contáctanos</Typography>
                    <Typography variant={'body1'}> Descubre como podemos transformar tu vida con nuestras soluciones tecnológicas de ultima generacion! contactanos hoy mismo para obtener mas información. </Typography>
                </Stack>
                <Button variant={'ctaGradientOut'} sx={{fontSize: {xs: '24px', md: '48px'}}}>Agendar Llamada</Button>
            </Box>
        </MainContainer>
    )
}