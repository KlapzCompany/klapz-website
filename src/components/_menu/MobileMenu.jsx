import { Box, IconButton, List, ListItem, Stack, Typography } from "@mui/material";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import { HashLink as Link } from "react-router-hash-link";

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
                        width: 'auto',
                        height: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        paddingTop: '48px',
                        justifyContent: 'flex-start',
                        '& li': {
                            borderBottom: '3px solid transparent',
                            transition: 'all ease .5s',
                            display: 'flex',
                            justifyContent: 'center',
                            '&:hover': {
                                transition: 'all ease .5s',
                                borderBottom: '3px solid rgba(243,148,0, .5)',
                                borderRadius: '2px'
                            }
                        }
                    }}>
                    <ListItem>
                    <Link to={'#home_hero'} smooth style={{textDecoration: 'none'}}>
                        <Typography
                            textAlign={'center'}
                            variant={'link'}
                            whiteSpace={'nowrap'}
                            color={'#FFF'}>
                                Home
                        </Typography>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to={'#home_our_work'} smooth style={{textDecoration: 'none'}}>
                        <Typography
                            variant={'link'}
                            whiteSpace={'nowrap'}
                            color={'#FFF'}>
                                Our Work
                        </Typography>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to={'#home_about_us'} smooth style={{textDecoration: 'none'}}>
                        <Typography
                            variant={'link'}
                            whiteSpace={'nowrap'}
                            color={'#FFF'}>
                                About Us
                        </Typography>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to={'#home_how_it_works'} smooth style={{textDecoration: 'none'}}>
                        <Typography
                            variant={'link'}
                            whiteSpace={'nowrap'}
                            color={'#FFF'}>
                                How It Works
                        </Typography>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to={'#home_contact'} smooth style={{textDecoration: 'none'}}>
                        <Typography
                            variant={'link'}
                            whiteSpace={'nowrap'}
                            color={'#FFF'}>
                                Contact
                        </Typography>
                    </Link>
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