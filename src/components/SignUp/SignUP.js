import './index.css'

const Signup = () => (
  <div className="SignupMain">
    <div className="layerone">
      <h4>SignUp Form</h4>
      <input type="Text" placeholder="First Name" className="Inputes" />
      <input type="Text" placeholder=" Last Name" className="Inputes" />
      <input
        type="text"
        inputMode="Numeric"
        placeholder="Contact "
        className="Inputes"
      />
      <input type="email" className="Inputes" placeholder="Gmail" />
      <input className="Inputes" type="password" placeholder="Password" />

      <button type="button" className="Button">
        Submit
      </button>
    </div>
  </div>
)

export default Signup
