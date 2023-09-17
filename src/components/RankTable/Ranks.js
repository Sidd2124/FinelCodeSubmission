const Ranks = props => {
  const {Details} = props
  const {Rank, Ticket, prediction, open, close, Gain} = Details
  return (
    <tr>
      <td className="Finel">{Rank}</td>
      <td className="Finel">{Ticket}</td>
      <td className="Finel">{prediction}</td>
      <td className="Finel">{open}</td>
      <td className="Finel">{close}</td>
      <td className="Finel">{Gain}</td>
    </tr>
  )
}

export default Ranks
