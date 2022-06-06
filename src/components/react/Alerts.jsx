import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Grid, Typography } from '@mui/material';
import { height } from '@mui/system';

export default function ActionAlerts() {
  return (
    <Grid spacing={5}>
      <Grid sx={{ display: "flex", flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: "#E9EAED", borderRadius: "12px", width: { lg: "318px", md: "310px", sm: "60%", xs: "100%" } }} p="2%" mt="3%">
        <Grid sx={{ color: "black", fontSize: "100%" }}>Attention Catchers</Grid>
        <Grid pl="2%" sx={{ color: "black" }}>/</Grid>
        <Grid pl="2%" sx={{ color: "gray" }}> Alerts</Grid>
      </Grid>
      <Grid fontSize="200%" color="#344767" pl="0%" pt="1%" pb="2%">
        Alerts
      </Grid>
      <Grid width="100%" borderRadius="12px" border="2px solid #F1F1F1" mb="6%" pb="3%" p="0%" borderBottom="2px solid #E9EAED" borderRight="2px solid #E9EAED">
        <Grid width="100%" borderRadius="" borderBottom="1.5px solid #E2E6EA" fontSize="180%" color="#324564" pb="1.5%" pl="1%" pr="-8px" p="1%">
          Simple Alerts
        </Grid>
        <Grid>
          <Grid p="2.5%">
            <Stack mt="0%" spacing={2} borderRadius="3%">
              <Alert sx={{ width: '100%', backgroundColor: "#E22D6D", color: "white" }} onClose={() => { }} icon={false} >This is simple primary alert — check it out!</Alert>
            </Stack>
            <Stack mt="2%" spacing={2} borderRadius="3%">
              <Alert sx={{ width: '100%', backgroundColor: "#626A79", color: "white" }} onClose={() => { }} icon={false} >This is simple primary alert — check it out!</Alert>
            </Stack>
            <Stack mt="2%" spacing={2} borderRadius="3%">
              <Alert sx={{ width: '100%', backgroundColor: "#5AB25F", color: "white" }} onClose={() => { }} icon={false} >This is simple primary alert — check it out!</Alert>
            </Stack>
            <Stack mt="2%" spacing={2} borderRadius="3%">
              <Alert sx={{ width: '100%', backgroundColor: "#DB342F", color: "white" }} onClose={() => { }} icon={false} >This is simple primary alert — check it out!</Alert>
            </Stack>
            <Stack mt="2%" spacing={2} borderRadius="3%">
              <Alert sx={{ width: '100%', backgroundColor: "#FC9811", color: "white" }} onClose={() => { }} icon={false} >This is simple primary alert — check it out!</Alert>
            </Stack>
            <Stack mt="2%" spacing={2} borderRadius="3%">
              <Alert sx={{ width: '100%', backgroundColor: "#2B85EB", color: "white" }} onClose={() => { }} icon={false} >This is simple primary alert — check it out!</Alert>
            </Stack>
            <Stack mt="2%" spacing={2} borderRadius="3%">
              <Alert sx={{ width: '100%', backgroundColor: "#D6DBE1", color: "white" }} onClose={() => { }} icon={false} >This is simple primary alert — check it out!</Alert>
            </Stack>
            <Stack mt="2%" spacing={2} borderRadius="3%">
              <Alert sx={{ width: '100%', backgroundColor: "#282729", color: "white" }} onClose={() => { }} icon={false} >This is simple primary alert — check it out!</Alert>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Grid width="100%" borderRadius="12px" border="2px solid #F1F1F1" mb="6%" pb="3%" p="0%" borderBottom="2px solid #E9EAED" borderRight="2px solid #E9EAED">
        <Grid width="100%" borderRadius="" borderBottom="1.5px solid #E2E6EA" fontSize="180%" color="#324564" pb="0%" pl="-22px" pr="0%" p="1%">
          Alerts with links
        </Grid>
        <Grid>
          <Grid p="2.5%">
            <Stack mt="0%" spacing={2} borderRadius="3%">
              <Alert sx={{ width: '100%', backgroundColor: "#E22D6D", color: "white" }} onClose={() => { }} icon={false} >This is a success alert with an example link. Give it a click if you like</Alert>
            </Stack>
            <Stack mt="2%" spacing={2} borderRadius="3%">
              <Alert sx={{ width: '100%', backgroundColor: "#626A79", color: "white" }} onClose={() => { }} icon={false} >This is a success alert with an example link. Give it a click if you like</Alert>
            </Stack>
            <Stack mt="2%" spacing={2} borderRadius="3%">
              <Alert sx={{ width: '100%', backgroundColor: "#5AB25F", color: "white" }} onClose={() => { }} icon={false} >This is a success alert with an example link. Give it a click if you like</Alert>
            </Stack>
            <Stack mt="2%" spacing={2} borderRadius="3%">
              <Alert sx={{ width: '100%', backgroundColor: "#DB342F", color: "white" }} onClose={() => { }} icon={false} >This is a success alert with an example link. Give it a click if you like</Alert>
            </Stack>
            <Stack mt="2%" spacing={2} borderRadius="3%">
              <Alert sx={{ width: '100%', backgroundColor: "#FC9811", color: "white" }} onClose={() => { }} icon={false} >This is a success alert with an example link. Give it a click if you like</Alert>
            </Stack>
            <Stack mt="2%" spacing={2} borderRadius="3%">
              <Alert sx={{ width: '100%', backgroundColor: "#2B85EB", color: "white" }} onClose={() => { }} icon={false} >This is a success alert with an example link. Give it a click if you like</Alert>
            </Stack>
            <Stack mt="2%" spacing={2} borderRadius="3%">
              <Alert sx={{ width: '100%', backgroundColor: "#D6DBE1", color: "white" }} onClose={() => { }} icon={false} >This is a success alert with an example link. Give it a click if you like</Alert>
            </Stack>
            <Stack mt="2%" spacing={2} borderRadius="3%">
              <Alert sx={{ width: '100%', backgroundColor: "#282729", color: "white" }} onClose={() => { }} icon={false} >This is a success alert with an example link. Give it a click if you like</Alert>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Grid width="100%" borderRadius="12px" border="2px solid #F1F1F1" mb="6%" pb="3%" p="0%" borderBottom="2px solid #E9EAED" borderRight="2px solid #E9EAED">
        <Grid width="100%" borderRadius="" borderBottom="1.5px solid #E2E6EA" fontSize="180%" color="#324564" pb="1.5%" pl="-22px" pr="-8px" p="1%">
          Alerts with content
        </Grid>
        <Grid>
          <Grid p="2.5%">
            <Stack mt="0%" spacing={2} borderRadius="3%">
              <Typography sx={{ width: '100%', backgroundColor: "#59B15E", color: "white", height: "190px" }} onClose={() => { }} icon={false} borderRadius="8px" p="1%" >
                <Grid fontSize="145%">
                  Good job!
                </Grid>
                <Grid mt="1%" pl="1%" pr="1%">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam veniam unde fugit sed excepturi voluptatum error nemo modi, beatae corporis, voluptatibus rerum consequatur aspernatur praesentium, voluptates minima minus natus reiciendis?
                </Grid>
                <Grid p="0.5%" pl="1%" pr="1%">
                  <hr color="white" />
                </Grid>
                <Grid pl="1%" pb="2%">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laudantium exercitationem ea!
                </Grid>
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Grid>


    </Grid>
  );
}

