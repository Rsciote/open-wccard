import { html } from 'lit';
import '../src/sidney-card.js';

export default {
  title: 'SidneyCard',
  component: 'sidney-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <sidney-card
      style="--sidney-card-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </sidney-card>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
