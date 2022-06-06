import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';
import Pt from "./popover/pop-top"
import Pb from "./popover/pop-bm"
import Pl from "./popover/pop-left"
import Pr from "./popover/pop-rig"
import Tt from "./tooltip/tool-top"
import Tb from "./tooltip/tool-bm"
import Tl from "./tooltip/tool-left"
import Tr from "./tooltip/tool-rig"


export default function ActionAlerts() {
    return (
        <Grid spacing={5}>
            <Grid sx={{ display: "flex", flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: "#E9EAED", borderRadius: "12px", width: { lg: "50%", md: "50%", sm: "60%", xs: "100%" } }} p="2%" mt="3%">
                <Grid sx={{ color: "black", fontSize: "100%" }}>Attention Catchers</Grid>
                <Grid pl="2%" sx={{ color: "black" }}>/</Grid>
                <Grid pl="2%" sx={{ color: "gray" }}> Tooltip & Popovers</Grid>
            </Grid>
            <Grid fontSize="200%" color="#344767" pl="0%" pt="1%" pb="2%">
                Tooltip & Popovers
            </Grid>
            <Grid width="100%" borderRadius="12px" border="2px solid #F1F1F1" mb="6%" pb="3%" p="0%" borderBottom="2px solid #E9EAED" borderRight="2px solid #E9EAED">
                <Grid width="100%" borderRadius="" borderBottom="1.5px solid #E2E6EA" fontSize="180%" color="#324564" pb="1.5%" pl="2%" pr="-8px" pt="1%    ">
                    Popovers
                </Grid>
                <Grid>
                    <Grid p="2.5%">
                        <Stack mt="0%" spacing={1} borderRadius="3%" sx={{ display: "flex", flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" } }}
                            pt="10%"
                            pl="10%"
                            pb="17%"
                        >
                            <br />
                            <Grid p="0.5%">
                                <Pt />
                            </Grid>
                            <Grid p="0.5%">
                                <Pb />
                            </Grid>
                            <Grid p="0.5%">
                                <Pl />
                            </Grid>
                            <Grid p="0.5%">
                                <Pr />
                            </Grid>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
            <Grid width="100%" borderRadius="12px" border="2px solid #F1F1F1" mb="6%" pb="3%" p="0%" borderBottom="2px solid #E9EAED" borderRight="2px solid #E9EAED">
                <Grid width="100%" borderRadius="" borderBottom="1.5px solid #E2E6EA" fontSize="180%" color="#324564" pb="1.5%" pl="2%" pr="-8px" pt="1%    ">
                    Tooltips
                </Grid>
                <Grid>
                    <Grid p="2.5%">
                        <Stack mt="0%" spacing={1} borderRadius="3%" sx={{ display: "flex", flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" } }}
                            pt="10%"
                            pl="15%"
                            pb="17%"
                        >
                            <br />
                            <Grid p="0.5%">
                                <Tb />
                            </Grid>
                            <Grid p="0.5%">
                                <Tr />
                            </Grid>
                            <Grid p="0.5%">
                                <Tt />
                            </Grid>
                            <Grid p="0.5%">
                                <Tl />
                            </Grid>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    );
}

