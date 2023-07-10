import { Box, Stack, Typography } from "@mui/material"
import { MainContainer } from "../../../components/_container/MainContainer"

export const OurWork = () => {

    const webDevImg = require('../../../assets/images/web-development.png');
    const appDevImg = require('../../../assets/images/app-development.png');

    return(
        <MainContainer>
            <Box
                id={'home_our_work'}
                width={1}
                maxWidth={'1440px'}
                padding={{xs: '16px', md: '48px 54px'}}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                gap={{xs: '36px', md: '64px'}}>
                <Stack
                    width={1}
                    textAlign={'center'}>
                    <Typography sx={{typography: {xs: 'h5', md: 'h1'}}}>NUESTRO TRABAJO</Typography>
                </Stack>
                <Box
                    overflow={'hidden'}
                    display={'flex'}
                    minHeight={'100%'}
                    flexDirection={'column'}
                    gap={{xs: '24px', md: '48px'}}>
                    <Stack
                        width={1}
                        direction={{xs: 'column-reverse', md: 'row'}}
                        justifyContent={'space-between'}
                        gap={'24px'}>
                        <Box
                            height={1}
                            maxWidth={{xs: 1, md: '40%'}}
                            alignSelf={'center'}
                            display={'flex'}
                            flexDirection={'column'}
                            gap={'12px'}>
                            <Typography sx={{ typography: {xs: 'h6', md: 'h3'}}} textAlign={{xs: 'center', md: 'left'}}>Desarrollo Web</Typography>
                            <Typography sx={{ typography: {xs: 'small', md: 'body1'}}} textAlign={{xs: 'center', md: 'left'}}>Nuestro equipo de expertos apasionados por la tecnología se dedica a disenar y construir soluciones  innovadoras que abordan los desafios mas apremiantes de la actualidad. Ya sea que estemos creando dispositivos inteligentes, desarrollando software de vanguardia o impulsando avances en la inteligencia artificial, nuestro objetivos es mejorar la vida de las personas a travez de la tecnologia.</Typography>
                        </Box>
                        <Box
                            width={{xs: 'auto', md: '100%'}}
                            maxWidth={{xs: '100%', md: '45%'}}
                            height={{xs: '150px', md: '400px'}}
                            minHeight={{xs: '150px', md: '300px'}}
                            maxHeight={{xs: '200px', md: '300px'}}
                            overflow={'hidden'}
                            component={'img'}
                            borderRadius={'20px'}
                            src={webDevImg}
                            sx={{
                                objectFit: 'cover'
                            }} />
                    </Stack>
                    <Stack
                        width={1}
                        direction={{xs: 'column', md: 'row'}}
                        maxHeight={{xs: '250px', md: '300px'}}
                        justifyContent={'space-between'}
                        gap={'24px'}>
                        <Box
                            width={{xs: 'auto', md: '100%'}}
                            maxWidth={{xs: '100%', md: '45%'}}
                            height={{xs: '150px', md: '400px'}}
                            minHeight={{xs: '150px', md: '300px'}}
                            maxHeight={{xs: '200px', md: '300px'}}
                            component={'img'}
                            borderRadius={'20px'}
                            src={appDevImg}
                            sx={{
                                objectFit: 'cover'
                            }} />
                        <Box
                            height={1}
                            maxWidth={{xs: 1, md: '40%'}}
                            alignSelf={'center'}
                            display={'flex'}
                            flexDirection={'column'}
                            gap={'12px'}>
                            <Typography sx={{ typography: {xs: 'h6', md: 'h3'}}} textAlign={{xs: 'center', md: 'left'}}>Desarrollo de Apps</Typography>
                            <Typography sx={{ typography: {xs: 'small', md: 'body1'}}} textAlign={{xs: 'center', md: 'left'}}>Además, nos destacamos por nuestra atención al detalle y nuestro compromiso con la calidad. Cada producto que desarrollamos se somete a rigurosas pruebas y evaluaciones para garantizar su funcionamiento optimo y durabilidad.</Typography>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </MainContainer>
    )
}