import Prods from "../../components/prods/prods";
import "./Produto.css";

import oculos2 from "../../assets/imgOculos2.png";
import oculos3 from "../../assets/imgOculos3.png";
import oculos4 from "../../assets/imgOculos4.png";
import { Box, Grid } from "@mui/material";

function Produto() {
    return (
        <Box sx={{maxWidth: '1280px', margin: '0 auto', marginTop: '30px'}}>

            <Grid container spacing={2}>
                <Grid item md={3}>
                    <Prods img={oculos3} />
                </Grid>
                <Grid item md={3}>
                    <Prods img={oculos3} />

                </Grid>
                <Grid item md={3}>
                    <Prods img={oculos3} />

                </Grid>
                <Grid item md={3}>
                    <Prods img={oculos3} />

                </Grid>

                <Grid item md={3}>
                    <Prods img={oculos3} />

                </Grid>

                <Grid item md={3}>
                    <Prods img={oculos3} />

                </Grid>

                <Grid item md={3}>
                    <Prods img={oculos3} />

                </Grid>

                <Grid item md={3}>
                    <Prods img={oculos3} />

                </Grid>

                <Grid item md={3}>
                    <Prods img={oculos3} />

                </Grid>
            </Grid>
        </Box>
    )
}
export default Produto;