import React from 'react';
import '../minsupage.css'; // CSS 파일이 여기에 있다고 가정

const Actor = () => {
  return (
    <div className="bundle"
        
    >
      <div className="bundle2">
        {/* 사람 */}
        <div className="people">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7542/7542670.png"
            alt="Person Icon"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* 동전 스택 */}
        <div className="coin-stack">
          {[...Array(4)].map((_, i) => (
            <div className="coin" key={i}>
              <img
                src="https://img.freepik.com/free-vector/money_53876-25503.jpg?semt=ais_hybrid&w=740"
                alt="Coin Icon"
                style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="bundle2">
        {/* 사람 */}
        <div className="people">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7542/7542670.png"
            alt="Person Icon"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* 동전 스택 */}
        <div className="coin-stack">
          {[...Array(4)].map((_, i) => (
            <div className="coin" key={i}>
              <img
                src="https://img.freepik.com/free-vector/money_53876-25503.jpg?semt=ais_hybrid&w=740"
                alt="Coin Icon"
                style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="bundle2">
        {/* 사람 */}
        <div className="people">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7542/7542670.png"
            alt="Person Icon"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* 동전 스택 */}
        <div className="coin-stack">
          {[...Array(4)].map((_, i) => (
            <div className="coin" key={i}>
              <img
                src="https://img.freepik.com/free-vector/money_53876-25503.jpg?semt=ais_hybrid&w=740"
                alt="Coin Icon"
                style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="bundle2">
        {/* 사람 */}
        <div className="people">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7542/7542670.png"
            alt="Person Icon"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* 동전 스택 */}
        <div className="coin-stack">
          {[...Array(4)].map((_, i) => (
            <div className="coin" key={i}>
              <img
                src="https://img.freepik.com/free-vector/money_53876-25503.jpg?semt=ais_hybrid&w=740"
                alt="Coin Icon"
                style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Actor;