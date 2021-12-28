import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
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
const StudioSiteImages = React.lazy(() => import('../pages/portal/studio/studio.siteImages'));

// 404
const ErrorPage = React.lazy(() => import('../pages/ErrorPage'));

const LazyLoad = ({ el }) => <Suspense fallback={<Spinner />}>{el}</Suspense>;

const SiteMap = () => {
  return (
    <Routes>
      {/* client routes */}
      <Route path='/' element={<LazyLoad el={<ClientRouter />} />}>
        <Route index element={<LazyLoad el={<Home />} />} />
        <Route path='about' element={<LazyLoad el={<About />} />} />
        <Route path='gear' element={<LazyLoad el={<Gear />} />} />
        <Route path='artists' element={<LazyLoad el={<Artists />} />} />
        <Route path='booking' element={<LazyLoad el={<Booking />} />} />
      </Route>

      {/* protected routes */}
      <Route path='/admin/portal' element={<LazyLoad el={<PortalRouter />} />}>
        <Route index element={<LazyLoad el={<ProfileView />} />} />
        <Route path='profile/' element={<LazyLoad el={<ProfileView />} />}>
          <Route path='edit/' element={<LazyLoad el={<ModalRouter />} />}>
            <Route path='bio' element={<LazyLoad el={<ProfileBio />} />} />
            <Route path='img' element={<LazyLoad el={<ProfileImg />} />} />
          </Route>
        </Route>
        <Route path='studio/' element={<LazyLoad el={<StudioView />} />}>
          <Route path='edit/' element={<LazyLoad el={<ModalRouter />} />}>
            <Route path='site_images' element={<LazyLoad el={<StudioSiteImages />} />} />
          </Route>
        </Route>
        <Route path='gear' element={<LazyLoad el={<GearView />} />} />
        <Route path='artists' element={<LazyLoad el={<ArtistsView />} />} />
      </Route>

      {/* authentication routes */}
      <Route path='/admin/signup' element={<LazyLoad el={<SignupPage />} />} />
      <Route path='/admin/login' element={<LazyLoad el={<LoginPage />} />} />

      {/* 404 */}
      <Route path='/*' element={<LazyLoad el={<ErrorPage />} />} />
    </Routes>
  );
};

export default SiteMap;
