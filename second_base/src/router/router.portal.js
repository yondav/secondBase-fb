/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { useState, useContext, useEffect } from 'react';
import { Outlet, useLocation, Navigate, Link } from 'react-router-dom';
import { DataContext } from '../context/data/firebase.context.data';
import useAuth from '../context/auth/firebase.actions.useAuth';
import { toTitle } from '../utils/helpers';
import { Spinner } from '../components';
import { Img, Card, Tab } from '../styles';

const routes = [{ to: 'profile' }, { to: 'studio' }, { to: 'gear' }, { to: 'artists' }];

const PortalRouter = () => {
  const { pathname } = useLocation();
  const [isLoading, setLoading] = useState(true);
  const [active, setActive] = useState('profile');
  const {
    state: { user },
  } = useAuth();
  const {
    state: {
      data: {
        images: { portal },
      },
    },
  } = useContext(DataContext);

  useEffect(() => !!portal && setLoading(false), [portal]);
  useEffect(() => setActive(pathname.split('/')[pathname.split('/').length - 1]), [pathname]);

  return (
    <>
      {!!user ? (
        <>
          {!isLoading ? (
            <>
              {pathname === '/admin/portal' && <Navigate to='profile' />}
              <Img.Hero url={portal.hero.url} color={portal.hero.color} />
              <Card.Base full={1}>
                <Card.Header tw='p-0'>
                  <div tw='flex'>
                    {routes.map((route, i) => {
                      return (
                        <Tab key={i} as={Link} to={route.to} curr={route.to === active ? 1 : 0}>
                          {toTitle(route.to)}
                        </Tab>
                      );
                    })}
                  </div>
                </Card.Header>
              </Card.Base>
              <Card.Body>
                <Outlet />
              </Card.Body>
            </>
          ) : (
            <Spinner />
          )}
        </>
      ) : (
        <Navigate to='/admin/login' />
      )}
    </>
  );
};

export default PortalRouter;
