import * as React from 'react'
import {
  WithStyles,
  withStyles,
  Typography,
  Grid,
} from '@material-ui/core'

import ThisPlayer from './components/ThisPlayer/ThisPlayer'
import OtherPlayerList from './components/OtherPlayerList/OtherPlayerList'

interface GameScreenProps extends WithStyles<typeof styles> {}

class GameScreen extends React.Component<GameScreenProps, {}> {
  render() {
    const {
      props: {
        classes,
      },
    } = this

    return (
      <React.Fragment>
        <Typography variant="display2">Game Name</Typography>
        <hr />
        <ThisPlayer />
        <OtherPlayerList />
      </React.Fragment>
    )
  }
}

const styles = {

}

export default withStyles(styles)(GameScreen)
