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
      <div className="TopMain">
        <div className="PredictingBanner">
          <div className="InnerPredictingBanner">
            <h1>
              Predicting Profits: Your Window to{' '}
              <p className="PedictInformation"> Tommoarow Top Stocks</p>
              ,Today!
            </h1>
            <Link to="/Signup">
              <button type="button" className="SubscribeButton">
                Sign Up
              </button>
            </Link>
          </div>
        </div>

        <div className="StockInformation">
          <h1>Top 50 Daily Predictions</h1>

          <table className="StockTable">
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

          <div>
            <h1>Daily Predictions vs Close </h1>

            <div className="Chart">
              <ResponsiveContainer width={1090} height={440}>
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
          <div className="SubscribeBox">
            <div className="NewsLetterSubscribe">
              <RiHomeSmileLine className="Lastlogo" />
              <p>NEWSLETTER</p>
              <h1>SubScribe</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard. dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
            <div className="SubscribeForm">
              <input type="Text" placeholder="First Name" />
              <input type="Text" placeholder="Last Name " />
              <input type="Text" placeholder="email" />
              <button type="button" className="SubscribeButton">
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
