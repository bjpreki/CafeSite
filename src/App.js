import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu, Hero, Footer, About, Coffee, ItemTypes } from './components';
import { useOnClickOutside } from './hooks';
// set up fontawsome for react
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee)

const BeverageTypes = {
  CoffeeTypes: [
    {
      name: 'Americano',
      description: 'The base of the Americano is espresso. A larger amount of hot water is poured over it to make the espresso weaker, turning a small shot of espresso into a large cup of coffee.',
      price: '2.50'
    },
    {
      name: 'Long Black',
      description: 'Long black has a stronger taste than Americano. You make it by pouring two shots of ristretto or espresso over a smaller amount of water, thus enhancing the taste.',
      price: '4.00'
    },
    {
      name: 'Flat White',
      description: 'Flat white is a popular milk-based coffee consisting of espresso with a lower amount of steamed milk. The espresso flavor still dominates the aroma, while the milk serves as a supporting taste. Its not the same things as a white coffee however (which isa coffee bean originating from Yemen.)',
      price: '3.00'
    },
    {
      name: 'Cappuccino',
      description: 'Cappuccino also consists of espresso and milk. However, there are two types of milk here. The beverage contains 1/3 of espresso, 1/3 foamed milk, and 1/3 steamed milk. You can serve it iced, hot, with cream instead of milk, and in various other ways.',
      price: '3.25'
    },
    {
      name: 'Latte',
      description: 'A Caffè latte is different from cappuccino because it contains a lot of milk, while cappuccino preserves the stronger espresso taste. A Latte is not the same things as a flat white however, which is a common missconception. Flat whites have much less foamed milk/bubbles.',
      price: '2.75'
    }
  ],
  TeaTypes: [
    {
      name: 'earl gray',
      description: 'Earl grey is simply a bergamot-flavored black tea.  Bergamot is a type of orange, and earl grey general has cornflowers added for a pop of color.  The name is reputedly from a British Prime Minister in the 1830s.'
    },
    {
      name: 'English Breakfast',
      description: 'simply a full-bodied, caffeinated black tea – but this popular tea flavor does not have to only be consumed at breakfast time!'
    },
    {
      name: 'chai',
      description: 'chai is a masala chai, with an Indian black tea (typically Assam) with cardamom and ginger – sometimes it has milk and sugar, and often has additional spices.'
    },
    {
      name: 'Mango & Strawberry',
      description: 'The familiar sweetness of strawberries dances with the exotic, rich aroma of mangoes to create this deliciously refreshing blend.'
    },
    {
      name: 'Cranberry & Raspberry',
      description: 'The deep-red colour and zing of cranberries help to make this infusion crisp and refreshing, while the raspberry notes bring a touch of sweetness to this mouth-watering blend.'
    }
  ],
  WineTypes: [
    {
      name: 'Rosé',
      description: ''
    },
    {
      name: 'White',
      description: ''
    },
    {
      name: 'Red',
      description: ''
    }
  ],
  BeerTypes: [
    {
      name: 'Skol',
      description: ''
    },
    {
      name: 'cisk',
      description: ''
    }
  ]
}

function App() {
  const name = 'Coffee-Shop';
  const telNumber = '+365 11122233';
  const email = 'admin@' + name + '.com.mt';
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const [CoffeeTypes, setCoffeeTypes] = useState();
  const [TeaTypes, setTeaTypes] = useState();
  const [WineTypes, setWineTypes] = useState();
  const [BeerTypes, setBeerTypes] = useState();

  return (

    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
          <Switch>
            <Route path='/Coffee'>
              <Coffee BeverageTypes={BeverageTypes} open={open} setOpen={setOpen} />
            </Route>
            <Route path='/menu'>
              <ItemTypes BeverageTypes={BeverageTypes} open={open} />
            </Route>
            <Route path='/about'>
              <About name={name} />
            </Route>
            <Route exact path='/'>
              <Hero name={name} />
            </Route>
          </Switch>

          <Footer email={email} telNumber={telNumber} />
        </>
      </ThemeProvider>
    </Router>
  );
}
export default App;