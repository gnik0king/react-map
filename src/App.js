import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <iframe
        width="450"
        height="250"
        frameborder="0" style="border:0"
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/view
          ?key=AIzaSyCYXV9CyepKeyRmluagytd-8y5pd3pT04k
          &center=-33.8569,151.2152
          &zoom=18
          &maptype=satellite"
        allowfullscreen>
      </iframe>
    </div>
  );
}

export default App;
