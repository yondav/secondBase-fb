/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { useState, useContext, useEffect } from 'react';
import { Outlet, useLocation, Navigate, Link } from 'react-router-dom';
import { DataContext } from '../context/data/firebase.context.data';
import { toTitle } from '../utils/helpers';
import Spinner from '../components/spinner';
import { Img, Card, Btn } from '../styles';

const routes = [
  { to: 'profile' },
  { to: 'studio' },
  { to: 'gear' },
  { to: 'artists' },
];

const PortalRoute = () => {
  const { pathname } = useLocation();
  const [isLoading, setLoading] = useState(true);
  const [active, setActive] = useState('profile');
  const {
    state: {
      data: {
        images: { portal },
      },
    },
  } = useContext(DataContext);

  useEffect(() => !!portal && setLoading(false), [portal]);
  useEffect(
    () => setActive(pathname.split('/')[pathname.split('/').length - 1]),
    [pathname]
  );

  return (
    <>
      {!isLoading ? (
        <>
          <Img.Hero url={portal.hero.url} color={portal.hero.color} />
          <Card.Base full={1}>
            <Card.Header>
              <div tw='flex'>
                {routes.map((route, i) => {
                  return (
                    <Btn
                      key={i}
                      as={Link}
                      to={route.to}
                      tab={1}
                      active={route.to === active ? 1 : 0}
                    >
                      {toTitle(route.to)}
                    </Btn>
                  );
                })}
              </div>
            </Card.Header>
          </Card.Base>
          <Card.Body>
            {pathname === '/admin/portal' ? (
              <Navigate to='/admin/portal/profile' />
            ) : (
              <Outlet />
            )}
          </Card.Body>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default PortalRoute;
