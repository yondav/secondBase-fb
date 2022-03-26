/** @jsxImportSource @emotion/react */
import tw, { styled } from 'twin.macro';
import { useContext, useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { DataContext } from '../../../context/data/firebase.context.data';
import { Container } from '../../../components/image';
import { Grid } from '../../../components/layout';
import { EditLink } from '../../../components';

const Bio = styled.article`
  ${tw`mt-3`}
  & > * {
    ${tw`mb-4 text-justify`}
  }
`;

const ProfileView = () => {
  const {
    state: {
      data: { user },
    },
  } = useContext(DataContext);

  const renderBio = () => {
    let bioEl = document.querySelector('.portal-bio');
    let bio = user[0].bio.html;
    bio
      ? (bioEl.innerHTML = JSON.parse(JSON.stringify(bio)))
      : (bioEl.innerHTML = 'add bio for about page');
  };

  useEffect(() => renderBio(), [user[0].bio]);
  return (
    <>
      <Outlet />
      <Grid.Container pad>
        <Grid.Col>
          <div tw='flex justify-center'>
            <Container
              as={Link}
              to='edit/img'
              state={{ from: useLocation().pathname }}
              square={1}
              circle={1}
              tw='sm:w-2/3 lg:w-1/2 xl:w-1/3'
            >
              <img
                name='img'
                src={
                  user[0].profile_img.url ||
                  'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
                }
                alt='profile'
                tw='h-full w-auto max-w-none cursor-pointer hover:opacity-60 transition-all duration-300 ease-in'
              />
            </Container>
          </div>
        </Grid.Col>
        <Grid.Col pad>
          <div tw='flex justify-between flex-col relative'>
            <EditLink to={'edit/bio'} />
            <h1>{user[0].name}</h1>
            <p>{user[0].email}</p>
            <Bio className='portal-bio'></Bio>
          </div>
        </Grid.Col>
      </Grid.Container>
    </>
  );
};

export default ProfileView;
