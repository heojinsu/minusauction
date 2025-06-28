import React from 'react';
import '../minsupage.css'; // CSS 파일이 여기에 있다고 가정
import Actor from './actor';
import Product from './Product';

const Minuspage = () => {
  return (
    <div className = 'minusmain' style={{
            position: 'absolute',
            top: '30%',
            left: 0,
            right: 0,
            margin: '0 auto',
    }}>
        <div>
            <Actor/>
        </div>
        -5
    </div>
  );
};

export default Minuspage;