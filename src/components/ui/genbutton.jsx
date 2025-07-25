import React from 'react';
import styled from 'styled-components';

const genButton = ({ onClick, loading }) => {
  return (
    <StyledWrapper>
      <button
        className="w-19"
        onClick={onClick}
        type="button"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate from AI'}

        {!loading && (
          <>
            <div className="star-1">{StarSVG}</div>
            <div className="star-2">{StarSVG}</div>
            <div className="star-3">{StarSVG}</div>
            <div className="star-4">{StarSVG}</div>
            <div className="star-5">{StarSVG}</div>
            <div className="star-6">{StarSVG}</div>
          </>
        )}
      </button>
    </StyledWrapper>
  );
};

const StarSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0 0 784.11 815.53"
    style={{ width: '100%' }}
  >
    <path
      className="fil0"
      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 
         207.96,29.37 371.12,197.68 392.05,407.74 
         20.93,-210.06 184.09,-378.37 392.05,-407.74 
         -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
    />
  </svg>
);

const StyledWrapper = styled.div`
  button {
    position: relative;
    padding: 6px 16px;
    background: #eef2ff;
    font-size: 14px;
    font-weight: 500;
    color: #1e40af;
    border: 2px solid #3b82f6;
    border-radius: 6px;
    box-shadow: 0 0 0 #3b82f68c;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .star-1, .star-2, .star-3, .star-4, .star-5, .star-6 {
    position: absolute;
    filter: drop-shadow(0 0 0 #3b82f6);
    z-index: -5;
    transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
  }

  .star-1 { top: 20%; left: 20%; width: 15px; }
  .star-2 { top: 45%; left: 45%; width: 10px; }
  .star-3 { top: 40%; left: 40%; width: 4px; }
  .star-4 { top: 20%; left: 40%; width: 6px; }
  .star-5 { top: 25%; left: 45%; width: 10px; }
  .star-6 { top: 5%; left: 50%; width: 4px; }

  button:hover:not(:disabled) {
    background: transparent;
    color: #3b82f6;
    box-shadow: 0 0 15px #3b82f68c;
  }

  button:hover:not(:disabled) .star-1 { top: -60%; left: -20%; z-index: 2; }
  button:hover:not(:disabled) .star-2 { top: -20%; left: 10%; z-index: 2; }
  button:hover:not(:disabled) .star-3 { top: 55%; left: 25%; z-index: 2; }
  button:hover:not(:disabled) .star-4 { top: 30%; left: 80%; z-index: 2; }
  button:hover:not(:disabled) .star-5 { top: 25%; left: 110%; z-index: 2; }
  button:hover:not(:disabled) .star-6 { top: 5%; left: 60%; z-index: 2; }

  .fil0 {
    fill: #3b82f6;
  }
`;

export default genButton;
