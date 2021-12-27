import React, { Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Spinner } from '../components';

// Routing outlets
const ClientRouter = React.lazy(() => import('./router.client'));
const PortalRouter = React.lazy(() => import('./router.portal'));
const ModalRouter = React.lazy(() => import('./router.modal'));

// client routes
const About = React.lazy(() => import('../pages/about'));
const Home = React.lazy(() => import('../pages/home'));
const Artists = React.lazy(() => import('../pages/artists'));
const Booking = React.lazy(() => import('../pages/booking'));
const Gear = React.lazy(() => import('../pages/gear'));

// authentication routes
const LoginPage = React.lazy(() => import('../pages/LoginPage'));
const SignupPage = React.lazy(() => import('../pages/SignupPage'));

// protected routes
const ArtistsView = React.lazy(() => import('../pages/portal/artists/artists.view'));
const GearView = React.lazy(() => import('../pages/portal/gear/gear.view'));
const ProfileView = React.lazy(() => import('../pages/portal/profile/profile.view'));
const ProfileImg = React.lazy(() => import('../pages/portal/profile/profile.image'));
const ProfileBio = React.lazy(() => import('../pages/portal/profile/profile.bio'));
const StudioView = React.lazy(() => import('../pages/portal/studio/studio.view'));

// 404
const ErrorPage = React.lazy(() => import('../pages/ErrorPage'));

const LazyLoad = ({ children }) => <Suspense fallback={<Spinner />}>{children}</Suspense>;

const SiteMap = () => {
  // const { pathname } = useLocation();
  // useEffect(() => {
  //   if (pathname.includes('edit')) {
  //     document.body.style.height = '100vh';
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.height = '';
  //     document.body.style.overflow = '';
  //   }
  // }, [pathname]);
  return (
    <Routes>
      {/* client routes */}
      <Route
        path='/'
        element={
          <LazyLoad>
            <ClientRouter />
          </LazyLoad>
        }
      >
        <Route
          index
          element={
            <LazyLoad>
              <Home />
            </LazyLoad>
          }
        />
        <Route
          path='about'
          element={
            <LazyLoad>
              <About />
            </LazyLoad>
          }
        />
        <Route
          path='gear'
          element={
            <LazyLoad>
              <Gear />
            </LazyLoad>
          }
        />
        <Route
          path='artists'
          element={
            <LazyLoad>
              <Artists />
            </LazyLoad>
          }
        />
        <Route
          path='booking'
          element={
            <LazyLoad>
              <Booking />
            </LazyLoad>
          }
        />
      </Route>
      {/* protected routes */}
      <Route
        path='/admin/portal'
        element={
          <LazyLoad>
            <PortalRouter />
          </LazyLoad>
        }
      >
        <Route
          index
          element={
            <LazyLoad>
              <ProfileView />
            </LazyLoad>
          }
        />
        <Route
          path='profile/'
          element={
            <LazyLoad>
              <ProfileView />
            </LazyLoad>
          }
        >
          <Route
            path='edit/'
            element={
              <LazyLoad>
                <ModalRouter />
              </LazyLoad>
            }
          >
            <Route
              path='bio'
              element={
                <LazyLoad>
                  <ProfileBio />
                </LazyLoad>
              }
            />
            <Route
              path='img'
              element={
                <LazyLoad>
                  <ProfileImg />
                </LazyLoad>
              }
            />
          </Route>
        </Route>
        <Route
          path='studio'
          element={
            <LazyLoad>
              <StudioView />
            </LazyLoad>
          }
        />
        <Route
          path='gear'
          element={
            <LazyLoad>
              <GearView />
            </LazyLoad>
          }
        />
        <Route
          path='artists'
          element={
            <LazyLoad>
              <ArtistsView />
            </LazyLoad>
          }
        />
      </Route>
      {/* authentication routes */}
      <Route
        path='/admin/signup'
        element={
          <LazyLoad>
            <SignupPage />
          </LazyLoad>
        }
      />
      <Route
        path='/admin/login'
        element={
          <LazyLoad>
            <LoginPage />
          </LazyLoad>
        }
      />
      {/* 404 */}
      <Route
        path='/*'
        element={
          <LazyLoad>
            <ErrorPage />
          </LazyLoad>
        }
      />
    </Routes>
  );
};

export default SiteMap;
