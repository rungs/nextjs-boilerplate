import { fn } from '@storybook/test'
import { LoadingButtonComponent } from '@component'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import AddIcon from '@mui/icons-material/Add'
const arrows = { SearchOutlinedIcon, AddIcon }

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Button',
  component: LoadingButtonComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: {
      description: 'Button theme color used from a list of values',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'grey'],
      control: {
        type: 'select',
      },
    },
    type: {
      description: 'Type button',
      options: ['button', 'submit'],
      control: {
        type: 'radio',
      },
    },
    text: {
      description: 'Button text content',
      control: 'text',
    },
    icon: {
      description: 'Icon at left position',
      options: Object.keys(arrows), // An array of serializable values
      mapping: arrows, // Maps serializable option values to complex arg values
      control: {
        type: 'select', // Type 'select' is automatically inferred when 'options' is defined
        labels: {
          // 'labels' maps option values to string labels
          SearchOutlinedIcon: 'Up',
          AddIcon: 'Down',
        },
      },
    },
    sx: {
      description: 'Custom style',
      control: 'object',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    text: 'Button',
    icon: <SearchOutlinedIcon />,
    sx: { marginLeft: '1rem' },
  },
}
