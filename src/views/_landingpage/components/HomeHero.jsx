import { Box, Button, Stack, Typography } from "@mui/material"
import { MainContainer } from "../../../components/_container/MainContainer"

import { ReactComponent as DottedMap } from "../../../assets/images/worldmap-dotted.svg";

export const HomeHero = () => {
    return(
        <MainContainer>
            <Box
                id={'home_hero'}
                width={1}
                maxWidth={'1440px'}
                display={'flex'}
                flexDirection={{xs: 'column', md: 'row'}}
                alignItems={'center'}
                justifyContent={'space-between'}
                position={'relative'}>
                <Box
                    width={'100%'}
                    maxWidth={'600px'}
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'flex-start'}
                    gap={'24px'}>
                    <Typography
                        sx={{
                            typography: {xs: 'h2', md: 'h1'}
                        }}>Klapz Company</Typography>
                    <Stack
                        spacing={'8px'}>
                        <Typography sx={{ typography: {xs: 'body1', md: 'h6'}}}>Bienvenidos a nuestra compañia, donde creamos soluciones tecnológicas para impulsar el futuro de tu negocio, descubre la innovación tecnológica que cambiara tu vida.</Typography>
                        <Typography variant="body2" color={'rgba(255,255,255,.5)'}> Somos una empresa líder en el desarrollo de productos y servicios tecnológicos revolucionarios que estan redefiniendo la forma en la que vivimos, trabajamos y nos conectamos. </Typography>
                    </Stack>
                    <Button variant={'ctaMonoOut'} sx={{ width: {xs: '100%', md: 'auto'}}}>
                        <Typography component={'a'} color={'#FFF'} variant="link" href={'https://calendly.com/klapz-company/15min?month=2023-07'} target="_blank">Agendar Reunión</Typography>
                    </Button>
                </Box>
                <Box
                    width={{xs: '250vw', md: 1}}
                    position={{xs: 'absolute', md: 'relative'}}
                    sx={{
                        opacity: {xs: .3, md: 1}
                    }}>
                    <DottedMap color={'rgba(255,255,255,.2)'} />
                </Box>
            </Box>
        </MainContainer>
    )
}