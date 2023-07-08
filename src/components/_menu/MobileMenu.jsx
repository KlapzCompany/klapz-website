import { Box, IconButton, List, ListItem, Stack, Typography } from "@mui/material";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import {ReactComponent as LinkedInIcon} from "../../assets/icons/linkedin-icon.svg";
import {ReactComponent as InstagramIcon} from "../../assets/icons/instagram-icon.svg";

export const MobileMenu = ({visible, closeMenu, onScroll}) => {
    return(
        <Box
            position={'absolute'}
            top={onScroll ? '-16px' : 0}
            left={visible && onScroll ? '-8px' : visible && !onScroll ? '-8px' : '100vw'}
            width={'100vw'}
            height={'100vh'}
            overflow={'hidden'}
            bgcolor={'#15151E'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            padding={'16px'}
            sx={{
                backdropFilter: visible ? 'blur(10px)' : 'blur(0px)',
                transition: 'all ease .5s',
                opacity: visible ? 1 : 0
            }}>
            <Box
                width={'100%'}
                height={'100%'}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'space-between'}
                sx={{
                    transition: 'all ease .3s',
                    transitionDelay: '.5s',
                    opacity: visible ? 1 : 0
                }}>
                <Box
                    width={1}
                    height={'56px'}
                    padding={'0 16px'}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'flex-end'}>
                    <IconButton onClick={closeMenu}>
                        <CloseRoundedIcon />
                    </IconButton>
                </Box>
                <List
                    sx={{
                        width: 1,
                        height: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        paddingTop: '48px',
                        justifyContent: 'flex-start',
                        '& li': {
                            textAlign: 'center',
                            borderBottom: '3px solid transparent',
                            transition: 'all ease .5s',
                            '&:hover': {
                                transition: 'all ease .5s',
                                borderBottom: '3px solid rgba(243,148,0, .5)',
                                borderRadius: '2px'
                            }
                        }
                    }}>
                    <ListItem>
                        <Typography
                            component={'a'}
                            variant={'link'}
                            whiteSpace={'nowrap'}
                            color={'#FFF'}
                            href={'#'}>Home</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography
                            component={'a'}
                            variant={'link'}
                            whiteSpace={'nowrap'}
                            color={'#FFF'}
                            href={'#'}>Our Work</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography
                            component={'a'}
                            variant={'link'}
                            whiteSpace={'nowrap'}
                            color={'#FFF'}
                            href={'#'}>About Us</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography
                            component={'a'}
                            variant={'link'}
                            whiteSpace={'nowrap'}
                            color={'#FFF'}
                            href={'#'}>How It Works</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography
                            component={'a'}
                            variant={'link'}
                            whiteSpace={'nowrap'}
                            color={'#FFF'}
                            href={'#'}>Contact</Typography>
                    </ListItem>
                </List>
                <Box
                    width={1}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    gap={'8px'}
                    padding={'12px'}>
                    <Typography variant="caps" color={'rgba(255,255,255,.5)'}>Social Network</Typography>
                    <Stack
                        direction={'row'}
                        spacing={'12px'}>
                        <LinkedInIcon width={'24px'} />
                        <InstagramIcon width={'24px'} />
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}