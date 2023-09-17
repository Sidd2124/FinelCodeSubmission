import './index.css'

import {Link} from 'react-router-dom'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import {RiHomeSmileLine} from 'react-icons/ri'

import {Component} from 'react'

import Ranks from '../RankTable/Ranks'

import Header from '../Header/Header'

const RankDetails = [
  {
    Rank: 1,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.8,
    Gain: 0.009,
  },
  {
    Rank: 2,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 3,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 4,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 5,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 6,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 7,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.8,
    Gain: 0.009,
  },
  {
    Rank: 8,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 9,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 10,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 11,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 12,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 13,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.8,
    Gain: 0.009,
  },
  {
    Rank: 14,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 15,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 16,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 17,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 18,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 19,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.8,
    Gain: 0.009,
  },
  {
    Rank: 20,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 21,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 22,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 23,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 24,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 25,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.8,
    Gain: 0.009,
  },
  {
    Rank: 26,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 27,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 28,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 29,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 30,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 31,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.8,
    Gain: 0.009,
  },
  {
    Rank: 32,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 33,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 34,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 35,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 36,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 37,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.8,
    Gain: 0.009,
  },
  {
    Rank: 38,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 39,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 40,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 41,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 42,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 43,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.8,
    Gain: 0.009,
  },
  {
    Rank: 44,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 45,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 46,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 47,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 48,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 49,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.8,
    Gain: 0.009,
  },
  {
    Rank: 50,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 51,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 52,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 53,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 54,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 55,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.8,
    Gain: 0.009,
  },
  {
    Rank: 56,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 57,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 58,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 59,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
  {
    Rank: 60,
    Ticket: 'ABC',
    prediction: 183.83,
    open: 182.81,
    close: 183.83,
    Gain: 0.009,
  },
]

const data = [
  {
    group_name: 'April 10',
    Open: 32000,
    Close: 34000,
  },
  {
    group_name: 'April 15',
    Open: 20000,
    Close: 20500,
  },
  {
    group_name: 'April 20',
    Open: 16000,
    Close: 14000,
  },
  {
    group_name: 'April 25',
    Open: 25000,
    Close: 23000,
  },
  {
    group_name: 'April 30',
    Open: 33000,
    Close: 32000,
  },
  {
    group_name: 'May 5',
    Open: 20000,
    Close: 22000,
  },
  {
    group_name: 'May 10',
    Open: 31000,
    Close: 32000,
  },
]

class Home extends Component {
  render() {
    const DataFormatter = number => {
      if (number > 1000) {
        return `${number.toString()}`
      }
      return number.toString()
    }

    return (
      <div className="Top">
        <Header />

        <div className="BoxOne">
          <h1>
            Predicting Profits: Your Window to
            <h3 className="Middle"> Tommoarow Top Stocks</h3>
            ,Today!
          </h1>
          <Link to="/Signup">
            <button type="button" className="Button">
              Sign Up
            </button>
          </Link>
        </div>
        <div className="BoxTwo">
          <h1>Top 50 Daily Predictions</h1>

          <div className="TableData">
            <table className="table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Ticket</th>
                  <th>prediction</th>
                  <th>open</th>
                  <th>Close</th>
                  <th>Gain/Loss %</th>
                </tr>
              </thead>
              <tbody>
                {RankDetails.map(each => (
                  <Ranks Details={each} />
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h1>Daily Predictions vs Close </h1>

            <div className="Chart">
              <ResponsiveContainer width={845} height={400}>
                <LineChart
                  data={data}
                  margin={{
                    top: 5,
                  }}
                >
                  <XAxis
                    dataKey="group_name"
                    tick={{
                      stroke: 'white',
                      fill: '#FFFF',
                      strokeWidth: 0,
                    }}
                  />
                  <YAxis
                    tickFormatter={DataFormatter}
                    tick={{
                      stroke: 'white',
                      fill: '#FFFF',
                      strokeWidth: 0,
                    }}
                  />
                  <Legend
                    wrapperStyle={{
                      padding: 20,
                    }}
                  />
                  <Line
                    dataKey="Open"
                    name="Open"
                    fill="#FFA500"
                    barSize="30%"
                  />
                  <Line dataKey="Close" fill="#FF3500" barSize="20%" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="LastBox">
            <div className="MiniFirst">
              <RiHomeSmileLine className="Lastlogo" />
              <h4>NEWSLETTER</h4>
              <h1>SubScribe</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard. dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
            <div className="MiniLast">
              <input type="Text" placeholder="First Name" />
              <input type="Text" placeholder="Last Name " />
              <input type="Text" placeholder="email" />
              <button type="button" className="Button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Home
