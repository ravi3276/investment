import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__footer">
      <small>
      NOTE: Monavi is not a real investment, but a virtual simulated investment content community. We does not sell financial products or recommend investments. We are a community operated for non-profit purposes..
      </small>
      </div>

      <div className="app__footerlinks">
          <div className="links">
          <a href="">Terms of use</a>
          </div>

          <div className="links">
          <a href="">Privacy Policy</a>
          </div>

          <div className="links">
          <a href="">youth protection policy</a>
          </div>

          <div className="link">
          <a href="">Contact</a>
          </div>
      </div>

      <p className="app__copyright">COPYRIGHT © 2020 Monavi All rights reserved</p>

    </div>
  );
}

export default App;
