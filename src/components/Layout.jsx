import { useCallback } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const randomIntFromInterval = useCallback((min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }, []);

  const handlePostavigation = useCallback(() => {
    navigate(`/post/${randomIntFromInterval(6, 12)}`);
  }, [randomIntFromInterval]);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <button onClick={handlePostavigation}>Random Post</button>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
