import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardComponent from '../components/CardComponent';

// Default export
export default {
  title: 'Components/CardComponent',
  component: CardComponent,
  // ArgTypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CardComponent>;

// Templates
const Template: ComponentStory<typeof CardComponent> = (args) => <CardComponent {...args} />;

export const Charizard = Template.bind({});
// Args
Charizard.args = {
  name: "Charizard",
  url: "https://pokeapi.co/api/v2/pokemon/6/",
};