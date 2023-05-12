import './App.css';
import AppCounter from './AppCounter';
import AppProduct from './AppProduct';
import Avartar from './components/Avartar';
import Profile from './components/Profile';

function AppProfile() {
  const name = 'byeong min';
  const list = ['우유', '딸기', '바나나', '오렌지'];

  const handleClick = (event) => {
    console.log(event);
    alert('버튼이 클릭됨');
  };
  return (
    <>
      <button
        onClick={(event) => {
          handleClick(event);
        }}
      >
        버튼
      </button>
      <AppProduct />
      <AppCounter />
      <Avartar image='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80' isNew={true} />
      <Profile
        image='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
        name='Byeong Min'
        title='Frontend Developer'
        isNew={true}
      />
      <Profile
        image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'
        name='Anna'
        title='UI/UX Designer'
        isNew={false}
      />
      <Profile
        image='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80

        '
        name='Bob Ho'
        title='Backend Developer'
        isNew={true}
      />
      <h1 className='orange'>Hello!</h1>
      <h2>World!</h2>
      <p>{name}</p>
      <h1 className='orange'>{`Hello ${name}`}</h1>
      <ul>
        <li>우유</li>
        <li>딸기</li>
        <li>바나나</li>
        <br />
        {list.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
      <img
        style={{ width: '200px', height: '200px' }}
        src='https://images.unsplash.com/photo-1683659635689-3df761eddb70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
        alt='nature'
      />
    </>
  );
}

export default AppProfile;
