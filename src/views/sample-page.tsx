// material-ui
import Typography from '@mui/material/Typography';
// material-ui
import Grid from '@mui/material/Grid';
// project imports
import MainCard from 'ui-component/cards/MainCard';

import EarningCard from 'ui-component/cards/Skeleton/EarningCard';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
  <MainCard title="Sample Card">
    <Grid container>
        <Grid item xs={3}>
            <EarningCard></EarningCard>
        </Grid>
    </Grid>
    <Typography variant="body2">
      666666
      Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif ad
      minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in reprehended
      in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa qui officiate
      descent molls anim id est labours.
    </Typography>
  </MainCard>
);

export default SamplePage;
