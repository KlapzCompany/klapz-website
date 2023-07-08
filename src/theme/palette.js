import { colors } from "./colors"

export const light = {
    mode: "light",
    primary: {
        main: colors.gray[500],
        default: '#FFF',
        weak: '#FFF',
        strong: '#FFF'
    },
    secondary: {
        default: "#000",
        weak: '#FFF',
        strong: '#FFF'
    },
    text: {
        default: '#FFF',
        weak: '#FFF',
        strong: '#FFF'
    },
    link: {
        default: '#FFF',
        weak: '#FFF',
        strong: '#FFF'
    },
    success: {
        default: '#FFF',
        weak: '#FFF',
        strong: '#FFF'
    },
    warning: {
        default: '#FFF',
        weak: '#FFF',
        strong: '#FFF'
    },
    danger: {
        default: '#FFF',
        weak: '#FFF',
        strong: '#FFF'
    },
    gradient: {
        primary: 'linear-gradient(to right, #FFF, #000)',
        secondary: 'linear-gradient(to right, #FFF, #000)',
        accent: 'linear-gradient(to right, #FFF, #000)'
    }
}

export const dark = {
    mode: "dark",
    background: {
        default: '#15151E'
    },
    primary: {
        main: colors.gray[100],
        weak: 'red',
        strong: 'blue'
    },
    secondary: {
        main: colors.gray[800],
        weak: 'red',
        strong: 'blue'
    },
    text: {
        main: colors.gray[100],
        weak: '#FFF',
        strong: '#FFF'
    },
    link: {
        main: colors.blue[500],
        weak: colors.blue[300],
        strong: colors.blue[700]
    },
    success: {
        main: colors.green[500],
        weak: colors.green[300],
        strong: colors.green[700]
    },
    warning: {
        main: colors.yellow[500],
        weak: colors.yellow[300],
        strong: colors.yellow[700]
    },
    danger: {
        main: colors.pink[500],
        weak: colors.pink[300],
        strong: colors.pink[700]
    },
    gradient: {
        primary: 'linear-gradient(to right, #FFF, #000)',
        secondary: 'linear-gradient(to right, #FFF, #000)',
        accent: 'linear-gradient(to right, #FFF, #000)'
    }
}