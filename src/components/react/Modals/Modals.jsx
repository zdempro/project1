import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Grid, Typography } from '@mui/material';
import ModalPink from "./mini-modal/modal-pink"
import ModalOrange from "./mini-modal/modal-orange"
import ModalBlue from "./mini-modal/modal-lightblue"


export default function ActionAlerts() {
    return (
        <Grid spacing={5}>
            <Grid sx={{ display: "flex", flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: "#E9EAED", borderRadius: "12px", width: { lg: "318px", md: "310px", sm: "60%", xs: "100%" } }} p="2%" mt="3%">
                <Grid sx={{ color: "black", fontSize: "100%" }}>Attention Catchers</Grid>
                <Grid pl="2%" sx={{ color: "black" }}>/</Grid>
                <Grid pl="2%" sx={{ color: "gray" }}> Modals</Grid>
            </Grid>
            <Grid fontSize="200%" color="#344767" pl="0%" pt="1%" pb="2%">
                Modals
            </Grid>
            <Grid width="100%" borderRadius="12px" border="2px solid #F1F1F1" mb="6%" pb="3%" p="0%" borderBottom="2px solid #E9EAED" borderRight="2px solid #E9EAED">
                <Grid width="100%" borderRadius="" borderBottom="1.5px solid #E2E6EA" fontSize="150%" color="#324564" pb="1.5%" pl="20%" pr="-8px" p="1%">
                    Simple Modal
                </Grid>
                <Grid>
                    <Grid p="2.5%">
                        <Stack mt="0%" spacing={2} borderRadius="3%" sx={{ textAlign: "center" }} pt="13.4%" pb="28.6%">
                            <ModalPink />
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
            <Grid width="100%" borderRadius="12px" border="2px solid #F1F1F1" mb="6%" pb="3%" p="0%" borderBottom="2px solid #E9EAED" borderRight="2px solid #E9EAED">
                <Grid width="100%" borderRadius="" borderBottom="1.5px solid #E2E6EA" fontSize="150%" color="#324564" pb="1.5%" pl="20%" pr="-8px" p="1%">
                    Notification Modal
                </Grid>
                <Grid>
                    <Grid p="2.5%">
                        <Stack mt="0%" spacing={2} borderRadius="3%" sx={{ textAlign: "center" }} pt="13.4%" pb="28.6%">
                            <ModalOrange id="btn-orange" />
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
            <Grid width="100%" borderRadius="12px" border="2px solid #F1F1F1" mb="6%" pb="3%" p="0%" borderBottom="2px solid #E9EAED" borderRight="2px solid #E9EAED">
                <Grid width="100%" borderRadius="" borderBottom="1.5px solid #E2E6EA" fontSize="150%" color="#324564" pb="1.5%" pl="20%" pr="-8px" p="1%">
                    Modal Form
                </Grid>
                <Grid>
                    <Grid p="2.5%">
                        <Stack mt="0%" spacing={2} borderRadius="3%" sx={{ textAlign: "center" }} pt="13.4%" pb="28.6%">
                            <ModalBlue id="btn-blue" />
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
            <Grid width="100%" borderRadius="12px" border="2px solid #F1F1F1" mb="6%" pb="3%" p="0%" borderBottom="2px solid #E9EAED" borderRight="2px solid #E9EAED">
                <Grid width="100%" borderRadius="" borderBottom="1.5px solid #E2E6EA" fontSize="150%" color="#324564" pb="1.5%" pl="20%" pr="-8px" p="1%">
                    Modal Long Content
                </Grid>
                <Grid>
                    <Grid p="2.5%">
                        <Stack mt="0%" spacing={2} borderRadius="3%" sx={{ textAlign: "center" }} pt="13.4%" pb="28.6%">
                            <ModalOrange id="btn-orange" />
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
            <Grid width="100%" borderRadius="12px" border="2px solid #F1F1F1" mb="6%" pb="3%" p="0%" borderBottom="2px solid #E9EAED" borderRight="2px solid #E9EAED">
                <Grid width="100%" borderRadius="" borderBottom="1.5px solid #E2E6EA" fontSize="150%" color="#324564" pb="1.5%" pl="20%" pr="-8px" p="1%">
                    Modal Sign Up
                </Grid>
                <Grid>
                    <Grid p="2.5%">
                        <Stack mt="0%" spacing={2} borderRadius="3%" sx={{ textAlign: "center" }} pt="13.4%" pb="28.6%">
                            <ModalPink />
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}