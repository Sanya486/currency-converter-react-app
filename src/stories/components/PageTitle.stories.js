import { PageTitle } from "components";

const meta = {
  title: "Components/PageTitle",
  component: PageTitle,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = (args) => <PageTitle {...args} />

Default.args = {
  title:'Hello World'
}


export default meta;
