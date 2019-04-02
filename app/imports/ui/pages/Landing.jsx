import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <Grid verticalAlign='middle' textAlign='center' container>

          <Grid.Column width={4}>
            <Icon name ='clipboard outline' size='massive' />
          </Grid.Column>

          <Grid.Column width={8}>
            <h1>Welcome to Cluhb</h1>
            <p>This is a search website for the UH clubs.</p>
          </Grid.Column>

        </Grid>
    );
  }
}

export default Landing;
