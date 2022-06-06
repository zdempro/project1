import React from 'react'
import { Grid, Stack, Avatar, AvatarGroup } from '@mui/material'
import Man1 from "./../assets/images/man1.png"
import Man2 from "./../assets/images/man2.jpg"
import Woman1 from "./../assets/images/woman1.png"
import Woman2 from "./../assets/images/woman2.png"



function Avatars() {
    return (
        <div>
            <Grid spacing={5}>
                <Grid sx={{ display: "flex", flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: "#E9EAED", borderRadius: "12px", width: { lg: "50%", md: "50%", sm: "60%", xs: "100%" } }} p="2%" mt="3%">
                    <Grid sx={{ color: "black", fontSize: "100%" }}>Elements</Grid>
                    <Grid pl="2%" sx={{ color: "black" }}>/</Grid>
                    <Grid pl="2%" sx={{ color: "gray" }}>Avatars</Grid>
                </Grid>
                <Grid fontSize="200%" color="#344767" pl="1%" pt="1%" pb="2%">
                    Avatars
                </Grid>
                <Grid width="100%" borderRadius="12px" border="2px solid #F1F1F1" mb="6%" pb="3%" p="0%" borderBottom="2px solid #E9EAED" borderRight="2px solid #E9EAED">
                    <Grid width="100%" borderRadius="" borderBottom="1.5px solid #E2E6EA" fontSize="180%" color="#324564" pb="1.5%" pl="2%" pr="-8px" pt="1%    ">
                        Avatar Group
                    </Grid>
                    <Grid>
                        <Grid p="2.5%">
                            <Stack ml="15%" mt="10%" mb="10%" spacing={1} borderRadius="3%" sx={{ display: "flex", flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" } }}>
                                <AvatarGroup total={4} id="avatar-group" pl="15%">
                                    <Avatar fontSize="30%" width="30%" height="20%" alt="Remy Sharp" src={Man1} />
                                    <Avatar fontSize="30%" width="30%" height="20%" alt="Travis Howard" src={Woman1} />
                                    <Avatar fontSize="30%" width="30%" height="20%" alt="Agnes Walker" src={Man2} />
                                    <Avatar fontSize="30%" width="30%" height="20%" alt="Trevor Henderson" src={Woman2} />
                                </AvatarGroup>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid width="100%" borderRadius="12px" border="2px solid #F1F1F1" mb="6%" pb="3%" p="0%" borderBottom="2px solid #E9EAED" borderRight="2px solid #E9EAED">
                    <Grid width="100%" borderRadius="" borderBottom="1.5px solid #E2E6EA" fontSize="180%" color="#324564" pb="1.5%" pl="2%" pr="-8px" pt="1%    ">
                        Avatar Size
                    </Grid>
                    <Grid>
                        <Grid p="2.5%" id="rot">
                            <Stack mt="10%" mb="10%" direction="row" textAlign="center" spacing={1} borderRadius="3%" sx={{ display: "flex", flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" } }} id="stack">
                                <Avatar
                                    id="avatar"
                                    alt="Remy Sharp"
                                    src={Man1}
                                    sx={{ width: 72, height: 72 }}
                                    mt="0px"
                                />
                                <Avatar
                                    id="avatar"
                                    alt="Remy Sharp"
                                    src={Man1}
                                    sx={{ width: 60, height: 60 }}
                                    mt="4px"
                                />
                                <Avatar
                                    id="avatar"
                                    alt="Remy Sharp"
                                    src={Man1}
                                    sx={{ width: 48, height: 48 }}
                                    mt="16px"
                                />
                                <Avatar
                                    id="avatar"
                                    alt="Remy Sharp"
                                    src={Man1}
                                    sx={{ width: 36, height: 36 }}
                                    mt="10px"
                                />
                                <Avatar
                                    id="avatar"
                                    alt="Remy Sharp"
                                    src={Man1}
                                    sx={{ width: 24, height: 24 }}
                                    marginTop="40px"
                                />

                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    )
}

export default Avatars