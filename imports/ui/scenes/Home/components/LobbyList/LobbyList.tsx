import * as React from 'react'
// import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

import { Lobbies, Lobby } from '../../../../../api/lobbies'
import LobbyItem from './components/LobbyItem/LobbyItem'

interface LobbyListState {
  lobbies: Lobby[]
}

class LobbyList extends React.Component<{}, LobbyListState> {
  tracker: Tracker.Computation

  componentWillMount() {
    this.tracker = Tracker.autorun(() => {
      this.setState({ lobbies: Lobbies.find().fetch() })
    })
  }

  componentWillUnmount() {
    this.tracker.stop()
  }

  render() {
    const { lobbies } = this.state
    return (
      <div>
        {lobbies.map(lobby =>
          <LobbyItem
            currentPlayers={lobby.currentPlayers.length}
            key={lobby._id}
            maxPlayers={lobby.maxPlayers}
            name={lobby.name}
            />,
        )}
      </div>
    )
  }
}

export default LobbyList
