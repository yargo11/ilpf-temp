import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        ilpfGreen: Palette['primary']
    }

    interface PaletteOptions {
        ilpfGreen: PaletteOptions['primary']
    }

    interface PaletteColor {
        darker?: string;
    }
    interface SimplePaletteColorOptions {
        darker?: string;
    }

    interface PaletteColor {
        clear?: string;
    }
    interface SimplePaletteColorOptions {
        clear?: string;
    }

    interface PaletteColor {
        button?: string;
    }
    interface SimplePaletteColorOptions {
        button?: string;
    }

    interface Palette {
        ilpfBrown: Palette['secondary']
    }

    interface PaletteOptions {
        ilpfBrown: PaletteOptions['secondary']
    }

}

export const theme = createTheme({
    palette: {
        primary: {
            main: '#732014',
          },
        ilpfGreen: {
            main: "#B3DBB4",
            light: "#D9EDDA",
            darker: "#315E32",
            button: "#CBE6CC"
        },

        ilpfBrown: {
            main: "#FFDBBB",
            light: "#F3C69E",
            clear: "rgba(133, 62, 0, 0.1)",
            darker: "#853E00",
            button: "#F9CCA6"
        },
    },

    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
})