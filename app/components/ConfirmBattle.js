var React = require('react');

function ConfirmBattle(props) {
  return (
    props.isLoading === true ? <div> Loading </div> : <div> Confirm Battle </div>
  )
}

module.exports = ConfirmBattle;