import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DialogComponent } from "../components/DialogComponent";
import { useState } from 'react';


export default {
    title: 'Components/DialogComponent',
    component: DialogComponent,
    // ArgTypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as ComponentMeta<typeof DialogComponent>;
  
  // Templates
  const Template: ComponentStory<typeof DialogComponent> = (args) => {
        const [open, setOpen] = useState(false);
        const handleClose = () =>{
            setOpen(!open);
        }
        return(
            <>
                <DialogComponent {...args} open={open} handleClose={handleClose}/>
                <button onClick={handleClose}>Open</button>
            </>)
    };
  export const DialogCharizard = Template.bind({});
  // Args
  DialogCharizard.args = {
      title:"Charizard",
      moves: [{
        "move": {
          "name": "mega-punch",
          "url": "https://pokeapi.co/api/v2/move/5/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      }]
  };