import './Header.css'

const Header = () => (
  <div className="Header">
    <img
      className="MainHeaderLogo"
      src="https://i.ibb.co/z6g71L1/Screenshot-2023-09-17-224727.png"
      alt="Logo"
    />

    <p className="LeftHeader">About</p>
    <p className="LeftHeader">Portfolio</p>
    <p className="LeftHeader">Contact</p>

    <button type="button" className="button">
      <p className="HeaderButtonFont">Ann</p>
      <img
        className="HeaderLogo"
        src="https://i.ibb.co/SsM4vWc/Screenshot-2023-09-20-174051.png"
        alt="Sidd"
      />
    </button>
  </div>
)

export default Header
