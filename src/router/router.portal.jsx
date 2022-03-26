/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { useState, useContext, useEffect, useRef } from 'react';
import { Outlet, useLocation, Navigate, Link } from 'react-router-dom';
import { DataContext } from '../context/data/firebase.context.data';
import useAuth from '../context/auth/firebase.actions.useAuth';
import { toTitle } from '../utils/helpers';
import { Spinner } from '../components';
import { Hero } from '../components/image';
import { Card, Tab } from '../components/layout';

const routes = [{ to: 'profile' }, { to: 'studio' }, { to: 'gear' }, { to: 'artists' }];

const PortalRouter = () => {
  const mainRef = useRef(null);
  const { pathname } = useLocation();
  const [mainScrollPos, setMainScrollPos] = useState(
    !!mainRef.current ? mainRef.current.offsetTop : 821
  );
  const [isLoading, setLoading] = useState(true);
  const [active, setActive] = useState('profile');
  const {
    state: { user, err },
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
  useEffect(
    () => mainRef.current && setMainScrollPos(mainRef.current.offsetTop),
    [mainRef.current]
  );

  return (
    <>
      {!!err && <Navigate to='/admin/login' />}
      {!!user && (
        <>
          {!isLoading ? (
            <>
              {pathname === '/admin/portal' && <Navigate to='profile' />}
              <Hero
                url={portal.hero.url}
                color={portal.hero.color}
                onScroll={() => window.scroll({ top: mainScrollPos, behavior: 'smooth' })}
              />
              <Card.Base full={1} innerRef={mainRef}>
                <Card.Header tw='p-0'>
                  <div tw='flex'>
                    {routes.map((route, i) => {
                      return (
                        <Tab key={i} as={Link} to={route.to} curr={route.to === active}>
                          {toTitle(route.to)}
                        </Tab>
                      );
                    })}
                  </div>
                </Card.Header>
                <Card.Body>
                  <div>
                    <Outlet />
                  </div>
                </Card.Body>
              </Card.Base>
            </>
          ) : (
            <Spinner />
          )}
        </>
      )}
    </>
  );
};

export default PortalRouter;
