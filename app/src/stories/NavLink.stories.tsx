import { ComponentMeta, ComponentStory } from '@storybook/react'

import { NavLink } from '../components/NavLink'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/NavLink',
  component: NavLink,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NavLink>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NavLink> = (args) => <NavLink {...args} />

export const Active = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Active.args = {
  isActive: true,
  children: 'Start',
}

export const Inactive = Template.bind({})
Inactive.args = {
  isActive: false,
  children: 'Start',
}
