/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { useContext, useState } from 'react';
import { DataContext } from '../../../context/data/firebase.context.data';
import { toTitle } from '../../../utils/helpers';
import Accordion, { activeSetter } from '../../../components/layout/accordion';
import Grid from '../../../components/layout/layout.grid';

const GearItem = ({ item }) => {
  const [active, setActive] = useState([]);

  return (
    <Accordion.Section
      sub
      title={item.name}
      active={active.includes(item.name)}
      setActive={() => activeSetter({ active, setActive }, item.name)}
    >
      <Grid.Container>
        <Grid.Col split></Grid.Col>
      </Grid.Container>
    </Accordion.Section>
  );
};

const GearView = () => {
  const {
    state: {
      data: { gear },
    },
  } = useContext(DataContext);

  const [active, setActive] = useState([]);

  const gearTypes = Object.entries(gear).sort((a, b) => {
    let textA = a[1].id.toLowerCase();
    let textB = b[1].id.toLowerCase();
    return textA < textB ? -1 : textA > textB ? 1 : undefined;
  });

  return (
    <Accordion.Base>
      {gearTypes.map(type => (
        <Accordion.Section
          key={type[1].id}
          title={toTitle(type[0])}
          active={active.includes(type[0])}
          setActive={() => activeSetter({ active, setActive }, type[0])}
        >
          <Accordion.Base>
            <div tw='w-full p-5'>
              {type[1].gear.length > 0 &&
                type[1].gear.map((item, i) => <GearItem key={i} item={item} />)}
            </div>
          </Accordion.Base>
        </Accordion.Section>
      ))}
    </Accordion.Base>
  );
};

export default GearView;
