import React from 'react'
import { Grid, Stack } from '@mui/material'
import BtnSimple from "./buttons/btnsimple"
import BtnOutline from "./buttons/btnoutline"
import BtnCheckbox from "./buttons/btncheckbox"
import BtnRadio from "./buttons/btnradio"
import BtnSizing from "./buttons/btnsizing"




function Avatars() {
    return (
        <div>
            <Grid spacing={5}>
                <Grid sx={{ display: "flex", flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: "#E9EAED", borderRadius: "12px", width: { lg: "50%", md: "50%", sm: "60%", xs: "100%" } }} p="2%" mt="3%">
                    <Grid sx={{ color: "black", fontSize: "100%" }}>Elements</Grid>
                    <Grid pl="2%" sx={{ color: "black" }}>/</Grid>
                    <Grid pl="2%" sx={{ color: "gray" }}>Button Groups</Grid>
                </Grid>
                <Grid fontSize="200%" color="#344767" pl="1%" pt="1%" pb="2%">
                    Button Groups
                </Grid>
                <Grid width="100%" borderRadius="12px" border="2px solid #F1F1F1" mb="6%" pb="3%" p="0%" borderBottom="2px solid #E9EAED" borderRight="2px solid #E9EAED">
                    <Grid width="100%" borderRadius="" borderBottom="1.5px solid #E2E6EA" fontSize="180%" color="#324564" pb="1.5%" pl="2%" pr="-8px" pt="1%    ">
                        Button Group Simple
                    </Grid>
                    <Grid>
                        <Grid p="2.5%">
                            <Stack ml="0%" mt="10%" mb="10%" spacing={1} borderRadius="3%" sx={{ display: "flex", flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" }, marginLeft: { lg: "20%", md: "20%", sm: "10%", xs: "7%" }, width: { lg: "100%", md: "100%", sm: "100%", xs: "100%" } }}>
                                <Grid sx={{ color: "white", backgroundColor: "#E91F63", borderRadius: "8px", textAlign: "center" }} p="1%" height="15%" m="0% 8% 0% 5%">
                                    PRIMARY
                                </Grid>
                                <Grid>
                                    <BtnSimple />
                                </Grid>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid width="100%" borderRadius="12px" border="2px solid #F1F1F1" mb="6%" pb="3%" p="0%" borderBottom="2px solid #E9EAED" borderRight="2px solid #E9EAED">
                    <Grid width="100%" borderRadius="" borderBottom="1.5px solid #E2E6EA" fontSize="180%" color="#324564" pb="1.5%" pl="2%" pr="-8px" pt="1%    ">
                        Button Group Outline
                    </Grid>
                    <Grid>
                        <Grid p="2.5%">
                            <Stack ml="15%" mt="10%" mb="10%" spacing={1} borderRadius="3%" sx={{ display: "flex", flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" }, marginLeft: { lg: "38%", md: "34%", sm: "28%", xs: "7%" } }}>
                                <Grid textAlign="center">
                                    <BtnOutline />
                                </Grid>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid width="100%" borderRadius="12px" border="2px solid #F1F1F1" mb="6%" pb="3%" p="0%" borderBottom="2px solid #E9EAED" borderRight="2px solid #E9EAED">
                    <Grid width="100%" borderRadius="" borderBottom="1.5px solid #E2E6EA" fontSize="180%" color="#324564" pb="1.5%" pl="2%" pr="-8px" pt="1%    ">
                        Button Group Checkbox
                    </Grid>
                    <Grid>
                        <Grid p="2.5%">
                            <Stack ml="15%" mt="10%" mb="10%" spacing={1} borderRadius="3%" sx={{ display: "flex", flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" }, marginLeft: { lg: "28%", md: "22%", sm: "10%", xs: "0%" } }}>
                                <Grid textAlign="center">
                                    <BtnCheckbox />
                                </Grid>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid width="100%" borderRadius="12px" border="2px solid #F1F1F1" mb="6%" pb="3%" p="0%" borderBottom="2px solid #E9EAED" borderRight="2px solid #E9EAED">
                    <Grid width="100%" borderRadius="" borderBottom="1.5px solid #E2E6EA" fontSize="180%" color="#324564" pb="1.5%" pl="2%" pr="-8px" pt="1%    ">
                        Button Group Radio
                    </Grid>
                    <Grid>
                        <Grid p="2.5%">
                            <Stack ml="15%" mt="10%" mb="10%" spacing={1} borderRadius="3%" sx={{ display: "flex", flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" }, marginLeft: { lg: "34%", md: "28%", sm: "20%", xs: "0%" } }}>
                                <Grid textAlign="center">
                                    <BtnRadio />
                                </Grid>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid width="100%" borderRadius="12px" border="2px solid #F1F1F1" mb="6%" pb="3%" p="0%" borderBottom="2px solid #E9EAED" borderRight="2px solid #E9EAED">
                    <Grid width="100%" borderRadius="" borderBottom="1.5px solid #E2E6EA" fontSize="180%" color="#324564" pb="1.5%" pl="2%" pr="-8px" pt="1%    ">
                        Button Group Sizing
                    </Grid>
                    <Grid>
                        <Grid p="2.5%">
                            <Stack ml="15%" mt="10%" mb="10%" spacing={1} borderRadius="3%" sx={{ display: "flex", flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" }, marginLeft: { lg: "34%", md: "28%", sm: "20%", xs: "0%" } }}>
                                <Grid textAlign="center">
                                    <BtnSizing />
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