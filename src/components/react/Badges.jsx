import React from 'react'
import { Grid, Stack, Button } from '@mui/material'
import "./../../App.css"


function Avatars() {
    return (
        <div>
            <Grid spacing={5}>
                <Grid sx={{ display: "flex", flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: "#E9EAED", borderRadius: "12px", width: { lg: "50%", md: "50%", sm: "60%", xs: "100%" } }} p="2%" mt="3%">
                    <Grid sx={{ color: "black", fontSize: "100%" }}>Elements</Grid>
                    <Grid pl="2%" sx={{ color: "black" }}>/</Grid>
                    <Grid pl="2%" sx={{ color: "gray" }}>Badges</Grid>
                </Grid>
                <Grid fontSize="200%" color="#344767" pl="1%" pt="1%" pb="2%">
                    Badges
                </Grid>
                <Grid width="100%" borderRadius="12px" border="2px solid #F1F1F1" mb="6%" pb="3%" p="0%" borderBottom="2px solid #E9EAED" borderRight="2px solid #E9EAED">
                    <Grid width="100%" borderRadius="" borderBottom="1.5px solid #E2E6EA" fontSize="180%" color="#324564" pb="1.5%" pl="2%" pr="-8px" pt="1%    ">
                        Badges Gradients
                    </Grid>
                    <Grid pl="2%">
                        <Grid p="2.5%">
                            <Stack ml="0%" mt="10%" mb="10%" spacing={1} borderRadius="3%" sx={{ display: "flex", flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" } }}>
                                <br />
                                <Grid p="1%" id="">
                                    <Button id="prim" p="5%" variant="contained" backgroundColor="#E53371">
                                        primary
                                    </Button>
                                </Grid>
                                <Grid p="1%" id="">
                                    <Button id="secon" p="5%" variant="contained" backgroundColor="#626A79">
                                        secondary
                                    </Button>
                                </Grid>
                                <Grid p="1%" id="">
                                    <Button id="suce" p="5%" variant="contained" color="success">
                                        success
                                    </Button>
                                </Grid>
                                <Grid p="1%" id="">
                                    <Button id="dang" p="5%" variant="contained" backgroundColor="red">
                                        danger
                                    </Button>
                                </Grid>
                                <Grid p="1%" id="">
                                    <Button id="warn" p="5%" variant="contained" backgroundColor="#FD9D19">
                                        warning
                                    </Button>
                                </Grid>
                                <Grid p="1%" id="">
                                    <Button id="info" p="5%" variant="contained" backgroundColor="#3993ED">
                                        info
                                    </Button>
                                </Grid>
                                <Grid p="1%" id="">
                                    <Button id="light" p="5%" variant="contained" backgroundColor="#DFE3E9">
                                        light
                                    </Button>
                                </Grid>
                                <Grid p="1%" id="">
                                    <Button id="dark" p="5%" variant="contained" backgroundColor="#37373D">
                                        dark
                                    </Button>
                                </Grid>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid width="100%" borderRadius="12px" border="2px solid #F1F1F1" mb="6%" pb="3%" p="0%" borderBottom="2px solid #E9EAED" borderRight="2px solid #E9EAED">
                    <Grid width="100%" borderRadius="" borderBottom="1.5px solid #E2E6EA" fontSize="180%" color="#324564" pb="1.5%" pl="2%" pr="-8px" pt="1%    ">
                        Badges Simple
                    </Grid>
                    <Grid pl="2%">
                        <Grid p="2.5%">
                            <Stack ml="0%" mt="10%" mb="10%" spacing={1} borderRadius="3%" sx={{ display: "flex", flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" } }}>
                                <br />
                                <Grid p="1%" id="">
                                    <Button id="prim" p="5%" variant="contained" backgroundColor="#E53371">
                                        primary
                                    </Button>
                                </Grid>
                                <Grid p="1%" id="">
                                    <Button id="secon" p="5%" variant="contained" backgroundColor="#626A79">
                                        secondary
                                    </Button>
                                </Grid>
                                <Grid p="1%" id="">
                                    <Button id="suce" p="5%" variant="contained" color="success">
                                        success
                                    </Button>
                                </Grid>
                                <Grid p="1%" id="">
                                    <Button id="dang" p="5%" variant="contained" backgroundColor="red">
                                        danger
                                    </Button>
                                </Grid>
                                <Grid p="1%" id="">
                                    <Button id="warn" p="5%" variant="contained" backgroundColor="#FD9D19">
                                        warning
                                    </Button>
                                </Grid>
                                <Grid p="1%" id="">
                                    <Button id="info" p="5%" variant="contained" backgroundColor="#3993ED">
                                        info
                                    </Button>
                                </Grid>
                                <Grid p="1%" id="">
                                    <Button id="light" p="5%" variant="contained" backgroundColor="#DFE3E9">
                                        light
                                    </Button>
                                </Grid>
                                <Grid p="1%" id="">
                                    <Button id="dark" p="5%" variant="contained" backgroundColor="#37373D">
                                        dark
                                    </Button>
                                </Grid>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid width="100%" borderRadius="12px" border="2px solid #F1F1F1" mb="6%" pb="3%" p="0%" borderBottom="2px solid #E9EAED" borderRight="2px solid #E9EAED">
                    <Grid width="100%" borderRadius="" borderBottom="1.5px solid #E2E6EA" fontSize="180%" color="#324564" pb="1.5%" pl="2%" pr="-8px" pt="1%    ">
                        Badges Simple Rounded
                    </Grid>
                    <Grid pl="2%">
                        <Grid p="2.5%">
                            <Stack ml="0%" mt="10%" mb="10%" spacing={1} borderRadius="3%" sx={{ display: "flex", flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" } }}>
                                <br />
                                <Grid p="1%" id="">
                                    <Button id="prim" p="5%" variant="contained" backgroundColor="#E53371">
                                        primary
                                    </Button>
                                </Grid>
                                <Grid p="1%" id="">
                                    <Button id="secon" p="5%" variant="contained" backgroundColor="#626A79">
                                        secondary
                                    </Button>
                                </Grid>
                                <Grid p="1%" id="">
                                    <Button id="suce" p="5%" variant="contained" color="success">
                                        success
                                    </Button>
                                </Grid>
                                <Grid p="1%" id="">
                                    <Button id="dang" p="5%" variant="contained" backgroundColor="red">
                                        danger
                                    </Button>
                                </Grid>
                                <Grid p="1%" id="">
                                    <Button id="warn" p="5%" variant="contained" backgroundColor="#FD9D19">
                                        warning
                                    </Button>
                                </Grid>
                                <Grid p="1%" id="">
                                    <Button id="info" p="5%" variant="contained" backgroundColor="#3993ED">
                                        info
                                    </Button>
                                </Grid>
                                <Grid p="1%" id="">
                                    <Button id="light" p="5%" variant="contained" backgroundColor="#DFE3E9">
                                        light
                                    </Button>
                                </Grid>
                                <Grid p="1%" id="">
                                    <Button id="dark" p="5%" variant="contained" backgroundColor="#37373D">
                                        dark
                                    </Button>
                                </Grid>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>


            </Grid>
        </div>
    )
}

export default Avatars