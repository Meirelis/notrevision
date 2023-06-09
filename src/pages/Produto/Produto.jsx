import "./Produto.css";
import oculos3 from "../../assets/imgOculos3.png";
import oculos2 from "../../assets/imgOculos2.png";
import oculos1 from "../../assets/imgOculos1.png";
import oculos4 from "../../assets/imgOculos4.png";
import escuro1 from "../../assets/soloculos.png";
import escuro2 from "../../assets/oculossol2.png";
import escuro3 from "../../assets/oculosdesol.png";
import escuro4 from "../../assets/soloculos2.png"
import { Box, Grid } from "@mui/material";
import Prods from "../../components/prods/Prods";

function Produto() {
    return (
        <>  
        <div className="armacoes">
            <h1>Armações simples</h1>
                <Box sx={{maxWidth: '1280px', margin: '0 auto', marginTop: '30px'}}>

                    <Grid container spacing={2}>
                        <Grid item md={3}>
                            <Prods img={oculos2} />
                        </Grid>
                        <Grid item md={3}>
                            <Prods img={oculos4} />

                        </Grid>
                        <Grid item md={3}>
                            <Prods img={oculos1} />

                        </Grid>
                        <Grid item md={3}>
                            <Prods img={oculos1} />

                        </Grid>

                        <Grid item md={3}>
                            <Prods img={oculos3} />

                        </Grid>

                        <Grid item md={3}>
                            <Prods img={oculos1} />

                        </Grid>

                        <Grid item md={3}>
                            <Prods img={oculos2} />

                        </Grid>

                        <Grid item md={3}>
                            <Prods img={oculos3} />

                        </Grid>

                        <Grid item md={3}>
                    

                        </Grid>
                    </Grid>
                </Box>
        </div>

        <div className="escuros">
            <h1>Óculos escuros</h1>
                <Box sx={{maxWidth: '1280px', margin: '0 auto', marginTop: '30px'}}>

                    <Grid container spacing={2}>
                        <Grid item md={3}>
                            <Prods img={escuro2} />
                        </Grid>
                        <Grid item md={3}>
                            <Prods img={escuro4} />

                        </Grid>
                        <Grid item md={3}>
                            <Prods img={escuro1} />

                        </Grid>
                        <Grid item md={3}>
                            <Prods img={escuro1} />

                        </Grid>

                        <Grid item md={3}>
                            <Prods img={escuro3} />

                        </Grid>

                        <Grid item md={3}>
                            <Prods img={escuro1} />

                        </Grid>

                        <Grid item md={3}>
                            <Prods img={escuro2} />

                        </Grid>

                        <Grid item md={3}>
                            <Prods img={escuro3} />

                        </Grid>

                        <Grid item md={3}>
                    

                        </Grid>
                    </Grid>
            </Box>
        </div>
        </>
    )
}
export default Produto;