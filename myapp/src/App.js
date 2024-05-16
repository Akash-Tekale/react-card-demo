import Card1 from "./card1";
import Card2 from "./card2";
import Card3 from "./card3";
function App() {
  return (
    <>
    <div className="container">
      <div className="row mt-5">
          <div className="col-md-4">
          <Card1
          img='https://imgd.aeplcdn.com/476x268/bw/models/benelli-tnt600i-standard20200719202814.jpg'
          name='Benelli 600i'
          info='The ARAI claimed mileage of Benelli TNT 600i BS4 is 18 kmpl.'
          />
          </div>
          <div className="col-md-4">
          <Card2
          img='https://imgd.aeplcdn.com/664x374/bw/models/kawasaki-z800-standard-529.jpg?20190103151915&q=80'
          name='Ninja z800'
          info='806cc engine that peak power at 10,200rpm and torque at 8,000rpm. ' 
          />
          </div>
          <div className="col-md-4">
          <Card3
          img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxKsGo8gBq5fhFFCziWVzHzho55AJt1WW6CLg50TCzeg&s'
          name='Ninja zx10r'
          info='998 cc air-cooled engine 13200 rpm of power claimed mileage of 12 kmpl.'
          />
          </div>
      </div>
    </div>
    </>
  );
}

export default App;
