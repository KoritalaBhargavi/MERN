import { Outlet, Link } from 'react-router-dom';
const Layout = () => {
  return (
    <>
      <nav >
        <ul style={{display:'flex',listStyleType:'none'}}>
          <li style={{paddingLeft:30,fontSize:30}}>
            <Link to="/">Home</Link>
          </li>
          <li style={{paddingLeft:30,fontSize:30}}>
            <Link to="/Blogs">Blogs</Link>
          </li>
          <li style={{paddingLeft:30,fontSize:30}}>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
