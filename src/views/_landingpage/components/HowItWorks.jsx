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
                    <Typography sx={{typography: {xs: 'h5', md: 'h1'}}}>¿Cómo Trabajamos?</Typography>
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
                        <Typography variant={'h5'}>Contacto inicial</Typography>
                        <Step1 color={'#00A6B8'} />
                        <Typography variant={'body1'}>Recopilación de datos por llamadas, correos electrónicos o visita personal.</Typography>
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
                        <Typography variant={'h5'}>Reunion de consulta y propuesta</Typography>
                        <Step2 color={'#00A6B8'} />
                        <Typography variant={'body1'}>Se discuten los objetivos del proyecto, los plazos, el presupuesto y el alcance que
este tendra.</Typography>
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
                        <Typography variant={'h5'}>Diseno y planificación</Typography>
                        <Step3 color={'#00A6B8'} />
                        <Typography variant={'body1'}>Se aperturan los requisitos tecnicos elaborando un plan de trabajo, se asignan los recursos necesarios,
como personal, herramientas y equipo.
</Typography>
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
                        <Typography variant={'h5'}>Entrega y cierre</Typography>
                        <Step4 color={'#00A6B8'} />
                        <Typography variant={'body1'}>Se lleva a cabo una revisión conjunta del proyecto para evaluar su exito y se cierran los aspectos
administrativos y financieros.</Typography>
                    </Stack>
                </Box>
            </Box>
        </MainContainer>
    )
}