'use strict';
const e = React.createElement;
const { Grid, Item } = MaterialUI

class TechStack extends React.Component {
  constructor(props) {
    super(props);
  }

render() {
    return (
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
    <Item>1</Item>
  </Grid>
  <Grid item xs={6}>
    <Item>2</Item>
  </Grid>
  <Grid item xs={6}>
    <Item>3</Item>
  </Grid>
  <Grid item xs={6}>
    <Item>4</Item>
  </Grid>
</Grid>
    );
  }
}