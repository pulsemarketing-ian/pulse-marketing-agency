import React from 'react'

const PrimaryBtn = ({text}) => {
  return (
    <React.Fragment>
       <button 
      //  className="bg-transparent border border-white text-[12px] px-4 rounded-2xl hover:bg-my-blue-gradient hover:text-my-blue-gradient"
      style={{
        backgroundColor: 'transparent',
        border: '1px solid #fff',
        color: '#fff',
        padding: '2px 16px',
        borderRadius: '15px',
        cursor: 'pointer',
        fontSize:'12px'
      }}
       >
          {text}
        </button>
    </React.Fragment>
  )
}

export default PrimaryBtn