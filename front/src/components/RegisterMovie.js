import React, {useState} from 'react';


//영화 이름, 가격 
const RegisterMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangePrice = (e) => {
        setPrice(e.target.value);
    }

    return (
        <div>
            <h3>영화 등록하기</h3>
            <div>
                <span>영화이름:</span>
                <input type="text" placeholder="영화이름을 입력" value={name} onChange={onChangeName}/>
            </div>
            <div>
                <span>영화 가격:</span>
                <input type="number" placeholder="영화가격을 입력" value={price} onChange={onChangePrice}/>
            </div>
            <button>등록하기</button>
        </div>
    );
};
export default RegisterMovie;
