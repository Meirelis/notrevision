import "./Produto.css";
import oculos3 from "../../assets/imgOculos3.png";
import { Box, Grid } from "@mui/material";
import ProdsComponent from "../../components/prods/Prods";

function Produto() {
    return (
        <Box sx={{maxWidth: '1280px', margin: '0 auto', marginTop: '30px'}}>

            <Grid container spacing={2}>
                <Grid item md={3}>
                    <ProdsComponent img={oculos3} />
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