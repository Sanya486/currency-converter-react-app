import { expect } from "@storybook/jest";
import { within, userEvent } from "@storybook/testing-library";

import { ConverterForm } from "components";

import { MockedForm } from "../../utils/StoriesReduxProvider1";

const meta = {
  title: "Components/ConverterForm",
  component: ConverterForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  decorators: [(story) => <MockedForm>{story()}</MockedForm>],
};

export default meta;

export const ErrorHandling = {
  decorators: [(story) => <MockedForm>{story()}</MockedForm>],
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("btn-submit"));
    const text = await canvas.findByText(
      /Enter amount of currency to convert/i
    );
    await expect(text).toBeInTheDocument();
    expect(
      await canvas.findByText(/Please choose currency to convert/i)
    ).toBeInTheDocument();
  },
};
