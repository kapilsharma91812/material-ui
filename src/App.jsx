import React from 'react';
import { Typography, AppBar,Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { orange } from '@material-ui/core/colors';

const cards=[1,2,3,4,5,6,7,8,9];
const App = () => {
    const classes = useStyles();
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary:orange
        },
      }),
    [prefersDarkMode],
  );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AppBar position="relative">

                <Toolbar>
                    <PhotoCamera className={classes.icon}></PhotoCamera>
                    <Typography variant="h6">
                Photo Album

                    </Typography>
                </Toolbar>
            </AppBar>



            <main>
                <div className={classes.container}> 
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                        Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Hello Eeveryone. this is photo album
                        </Typography>
                        <div className={classes.button}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">See my photos</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">See my photos</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map(()=>(
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia}
                                image="http://source.unsplash.com/random"
                                title="image title"
                            
                                />
                                <CardContent className={classes.cardContent}>

                                <Typography variant="h5"  gutterBottom>
                                        Heading
                                </Typography>
                                <Typography >
                                        This is a media card
                                </Typography>

                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">View</Button>
                                    <Button size="small" color="primary">Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        ))}
                    </Grid>

                </Container>
            </main>
            <footer className={classes.footer}>
                    <Typography variant="h6" align="center" color="textPrimary" gutterBottom>
                    Footer
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" >
                    Something here informative for the footer
                    </Typography>
            </footer>
        </ThemeProvider>
    );
};
export default App;