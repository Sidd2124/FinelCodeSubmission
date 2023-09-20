import './index.css'

const Ranks = props => {
  const {Details} = props
  const {Rank, Ticket, prediction, open, close, Gain} = Details
  return (
    <tr>
      <td className="InsideStockTable">{Rank}</td>
      <td className="InsideStockTable">{Ticket}</td>
      <td className="InsideStockTable">{prediction}</td>
      <td className="InsideStockTable">{open}</td>
      <td className="InsideStockTable">{close}</td>
      <td className="InsideStockTable">{Gain}</td>
    </tr>
  )
}

export default Ranks
