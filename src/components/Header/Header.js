import './Header.css'

const Header = () => (
  <div className="Header">
    <div>
      <img
        className="Logo"
        src="https://i.ibb.co/z6g71L1/Screenshot-2023-09-17-224727.png"
        alt="Logo"
      />
    </div>
    <div className="King">
      <p className="LeftHeader">About</p>
      <p className="LeftHeader">Port fortfolio</p>
      <p className="LeftHeader">Contact</p>
      <div className="King">
        <button type="button" className="button King">
          <p className="Sidd">Sidd</p>

          <img
            className="Sidd"
            src="https://i.ibb.co/0QtKdd8/01-FED8-CB62-PCH492-J0-AN4-AR8-BW.jpg"
            alt="Sidd"
          />
        </button>
      </div>
    </div>
  </div>
)

export default Header
