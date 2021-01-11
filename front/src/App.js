import "./App.css"
// import RegisterMovie from './components/RegisterMovie';
import React, {useState} from 'react';

function App() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [movies, setMovies] = useState([
      {name: "라라랜드1", price: 10000},
      {name: "라라랜드2", price: 12000},
    ]);
    
    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangePrice = (e) => {
        setPrice(e.target.value);
    }

    const onClickButton =() => {
      console.log(name, price);
      const temp = movies.concat({name: name, price: price});
      setMovies(temp);
    }
  return (
    <div className="App">
      <h1>hello</h1>
      <div>
        <div>
          <h3>영화 리스트</h3>
          {movies.map((movie) => {
            return (
              <div>
                <ul>
                  <li>영화 제목: {movie.name}</li>
                  <li>영화 가격: {movie.price}</li>
                </ul>
              </div>
            )
          })}
        </div>
            <h3>영화 등록하기</h3>
            <div>
                <span>영화이름:</span>
                <input type="text" placeholder="영화이름을 입력" value={name} onChange={onChangeName}/>
            </div>
            <div>
                <span>영화 가격:</span>
                <input type="number" placeholder="영화가격을 입력" value={price} onChange={onChangePrice}/>
            </div>
            <button onClick={onClickButton}>등록하기</button>
        </div>
    </div>
  );
}

export default App;
