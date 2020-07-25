import React from 'react'
import { createMuiTheme, Container, CardMedia, Card, CardContent, Typography } from "@material-ui/core";
import 'weather-icons/css/weather-icons.css';
// import CssBaseline from "@material-ui/core/CssBaseline";
import * as weatherIcons from './icons.json';


function Test({weather}) {
    const theme = createMuiTheme({
        typography: {
            fontFamily: [
                "Inter",
                "-apple-system",
                "BlinkMacSystemFont",
                '"Helvetica Neue"',
                "Arial",
                "sans-serif",
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"'
            ].join(","),
            fontSize: 14,
            h5: {
                fontWeight: 600
            },
            title: {
                fontSize: '2s4px',
            },
        }
    });


    const prefix = "wi wi-";
    const icon = prefix + weatherIcons.default[804].icon;
    return (
        <div>
            {/* <ThemeProvider theme={theme}> */}
                {/* <CssBaseline /> */}
                <Container>
                    <Card>
                    <Typography color="textSecondary" style = {{'font-size': '100px'}} gutterBottom>
                        {weather.city}
                    </Typography>
                        <CardContent>
                            <CardMedia className={`${icon}`} src={icon} style={{ fontSize: "128px" }} />
                            Humidity: {weather.humidity}%
                            Weather: {weather.temperature}C
                        </CardContent>
                    </Card>
                    {weather.lon} 
                    {/* <i class="wi wi-day-lightning">Hey</i> */}
                          
                </Container>
            {/* </ThemeProvider> */}
        </div>
    )
}

export default Test
