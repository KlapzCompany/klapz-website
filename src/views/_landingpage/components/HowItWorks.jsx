import { Box, Stack, Typography } from "@mui/material"
import { MainContainer } from "../../../components/_container/MainContainer"

import {ReactComponent as Step1} from "../../../assets/icons/hit-step1.svg";
import {ReactComponent as Step2} from "../../../assets/icons/hit-step2.svg";
import {ReactComponent as Step3} from "../../../assets/icons/hit-step3.svg";
import {ReactComponent as Step4} from "../../../assets/icons/hit-step4.svg";

export const HowItWorks = () => {
    return(
        <MainContainer>
            <Box
                id={'home_how_it_works'}
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
                    spacing={'12px'}
                    textAlign={'center'}>
                    <Typography sx={{typography: {xs: 'h5', md: 'h1'}}}>Como Trabajamos?</Typography>
                    <Typography sx={{typography: {xs: 'body2', md: 'body1'}}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, fugiat iste et officia laudantium praesentium voluptate. Nisi quae at consequuntur temporibus! Dignissimos itaque, vitae sed eligendi enim magni vero voluptas.</Typography>
                </Stack>
                <Box
                    width={1}
                    display={'grid'}
                    gridTemplateColumns={{xs: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)'}}
                    gap={'36px'}>
                    <Stack
                        width={'100%'}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'flex-start'}
                        borderRadius={'20px'}
                        bgcolor={'#2B2B3B'}
                        boxShadow={'0 0 10px 5px rgba(0,0,0,.5)'}
                        gap={'24px'}
                        textAlign={'center'}
                        padding={'24px 16px'}>
                        <Typography variant={'h5'}>Llamada de Requerimientos</Typography>
                        <Step1 />
                        <Typography variant={'body1'}>Se agenda y se realiza una llamada donde se muestran los requerimientos de el proyecto y se agendan fechas.</Typography>
                    </Stack>
                    <Stack
                        width={'100%'}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'flex-start'}
                        borderRadius={'20px'}
                        bgcolor={'#2B2B3B'}
                        boxShadow={'0 0 10px 5px rgba(0,0,0,.5)'}
                        gap={'24px'}
                        textAlign={'center'}
                        padding={'24px 16px'}>
                        <Typography variant={'h5'}>Presentacion de Propuestas</Typography>
                        <Step2 />
                        <Typography variant={'body1'}>Se agenda y se realiza una llamada donde se muestran los requerimientos de el proyecto y se agendan fechas.</Typography>
                    </Stack>
                    <Stack
                        width={'100%'}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'flex-start'}
                        borderRadius={'20px'}
                        bgcolor={'#2B2B3B'}
                        boxShadow={'0 0 10px 5px rgba(0,0,0,.5)'}
                        gap={'24px'}
                        textAlign={'center'}
                        padding={'24px 16px'}>
                        <Typography variant={'h5'}>Propuestas de Diseños</Typography>
                        <Step3 />
                        <Typography variant={'body1'}>Se agenda y se realiza una llamada donde se muestran los requerimientos de el proyecto y se agendan fechas.</Typography>
                    </Stack>
                    <Stack
                        width={'100%'}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'flex-start'}
                        borderRadius={'20px'}
                        bgcolor={'#2B2B3B'}
                        boxShadow={'0 0 10px 5px rgba(0,0,0,.5)'}
                        gap={'24px'}
                        textAlign={'center'}
                        padding={'24px 16px'}>
                        <Typography variant={'h5'}>Entrega de Proyectos</Typography>
                        <Step4 />
                        <Typography variant={'body1'}>Se agenda y se realiza una llamada donde se muestran los requerimientos de el proyecto y se agendan fechas.</Typography>
                    </Stack>
                </Box>
            </Box>
        </MainContainer>
    )
}