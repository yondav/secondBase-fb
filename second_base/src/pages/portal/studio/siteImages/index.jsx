/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { useState, useContext } from 'react';
import { DataContext } from '../../../../context/data/firebase.context.data';
import { toTitle } from '../../../../utils/helpers';
import SiteImagesImage from './siteImages.image';
import Accordion, { activeSetter } from '../../../../components/layout/accordion';

const StudioSiteImages = () => {
  const {
    state: {
      data: { images },
    },
  } = useContext(DataContext);

  const [active, setActive] = useState([]);

  const pages = Object.entries(images)
    .sort((a, b) => {
      let textA = a[1].id.toLowerCase();
      let textB = b[1].id.toLowerCase();
      return textA < textB ? -1 : textA > textB ? 1 : undefined;
    })
    .map(arr => arr[0]);

  return (
    <Accordion.Base>
      {pages.map((pg, i) => (
        <Accordion.Section
          title={toTitle(pg)}
          active={active.includes(pg)}
          setActive={() => activeSetter({ active, setActive }, pg)}
          key={i}
        >
          <div tw='p-5'>
            <Accordion.Base>
              {Object.entries(images[pg])
                .filter(arr => arr[0] !== 'id')
                .sort((a, b) => {
                  let textA = a[1].id.toLowerCase();
                  let textB = b[1].id.toLowerCase();
                  return textA < textB ? -1 : textA > textB ? 1 : undefined;
                })
                .map(arr => arr[0])
                .map((img, i) => (
                  <SiteImagesImage key={i} img={img} pg={pg} />
                ))}
            </Accordion.Base>
          </div>
        </Accordion.Section>
      ))}
    </Accordion.Base>
  );
};

export default StudioSiteImages;
