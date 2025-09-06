import { useState } from 'react';
import './App.css';

const dayIcon = (
  <svg
    class='w-6 h-6 text-gray-800 dark:text-white'
    aria-hidden='true'
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    viewBox='0 0 24 24'
  >
    <path
      stroke='currentColor'
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-width='2'
      d='M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z'
    />
  </svg>
);

const nightIcon = (
  <svg
    class='w-6 h-6 text-gray-800 dark:text-white'
    aria-hidden='true'
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    viewBox='0 0 24 24'
  >
    <path
      stroke='currentColor'
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-width='2'
      d='M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z'
    />
  </svg>
);

const searchIcon = (
  <svg
    class='w-6 h-6 text-gray-800 dark:text-white'
    aria-hidden='true'
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    viewBox='0 0 24 24'
  >
    <path
      stroke='currentColor'
      stroke-linecap='round'
      stroke-width='2'
      d='m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z'
    />
  </svg>
);

export default function App() {
  const [mode, setMode] = useState(true);
  const [searchText, setSearchText] = useState('');
  return (
    <Container>
      <Btn className={'btn-absolute'} onClick={() => setMode(!mode)}>
        <span className='modeIcon'>{mode ? dayIcon : nightIcon}</span>
      </Btn>
      <SearchContainer>
        <SearchBox searchText={searchText} setSearchText={setSearchText} />
        <Btn className={'btn-text'} onClick={() => setSearchText('')}>
          Clear
        </Btn>
      </SearchContainer>
    </Container>
  );
}

function Container({ children }) {
  return (
    <div className='container'>
      <h1>2DO LIST</h1>
      {children}
    </div>
  );
}

function SearchContainer({ children }) {
  return <div className='searchContainer'>{children}</div>;
}

function Btn({ children, onClick, className }) {
  return (
    <button className={`btn ${className}`} type='button' onClick={onClick}>
      {children}
    </button>
  );
}

function SearchBox({ searchText, setSearchText }) {
  return (
    <>
      <span className='searchIcon'>{searchIcon}</span>
      <input
        className='inputSearch'
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        type='search'
        placeholder='Search Note . . .'
      />
    </>
  );
}

function Main() {
  return;
}
