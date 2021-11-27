import { MantineThemeOverride } from '@mantine/core';
// import { gradientFromColor } from './utilities/color';

export const theme: MantineThemeOverride = {
  primaryColor: 'primary',
  colors: {
    'primary': ["#ffefda", "#ffe0b8", "#ffd195", "#ffc272", "#ffb34f", "#ffa42d", "#ff950a", "#d07b0c", "#9c6113", "#6d4715"],
    'danger': ["#fee5e5", "#fecdcd", "#fdb4b4", "#fc9c9c", "#fb8383", "#fb6b6b", "#fa5252", "#ed2626", "#bf1c1c", "#861d1d"],
    'background': ["#26282b", "#373b40", "#3f434a", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
  },
  white: '#eee',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  radius: {
    xs: 0,
    sm: 2,
    md: 4,
    lg: 8,
    xl: 16,
  },
  other: {
    headerHeight: '64px',
    drawerOpenWidth: '600px',
    drawerClosedWidth: '45px',
  },
};


export const styles: any = {
  AppShell: (theme: any) => ({
    root: {
      minHeight: '100vh',
    }
  }),
  Paper: (theme: any) => ({
    root: {
      background: theme.colors.background[1],
      padding: '15px',
    }
  }),
  Text: (theme: any) => ({
    root: {
      color: theme.white,
    }
  }),
  Title: (theme: any) => ({
    root: {
      color: theme.white,
    }
  }),
  List: (theme: any) => ({
    item: {
      color: theme.white,
    }
  }),
  Checkbox: (theme: any) => ({
    label: {
      color: theme.white,
    }
  }),
  Switch: (theme: any) => ({
    label: {
      color: theme.white,
    },
    input: {
      background: theme.colors.background[1],
      borderWidth: '2px',
      '&:checked': {
        background: theme.colors.primary[4],
        borderColor: theme.colors.primary[4],
      }
    }
  }),
  Divider: (theme: any) => ({
    horizontal: {
      borderTopColor: theme.colors.background[2],
    }
  }),
  Button: (theme: any) => ({
    root: {
      '&[disabled]': {
        color: `${theme.white} !important`,
        backgroundColor: `${theme.colors.primary[7]} !important`,
        opacity: 0.5,
      }
    }
  }),
  Tabs: (theme: any) => ({
    tabLabel: {
      color: theme.white,
      fontFamily: "'M PLUS 1 Code', sans-serif",
      fontSize: '16px',
    },
    tabIcon: {
      color: theme.white,
    },
    tabControl: {
      minWidth: '200px',
    },
    tabActive: {
      background: `${theme.colors.background[1]} !important`,
      borderBottomWidth: `0px !important`,
    },
    body: {
      paddingTop: '0px',
      background: theme.colors.background[0],
      borderBottomLeftRadius: '2px',
      borderBottomRightRadius: '2px',
    },
  }),
};
