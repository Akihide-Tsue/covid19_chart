import React, { useState } from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../app/store";
import SwitchCountry from "../features/covid/SwitchCountry/SwitchCountry";
import { NativeSelect } from "@material-ui/core";

afterEach(() => cleanup()); //テスト後のレンダリングを解除

//コンポーネントが存在するかのテスト
describe("rendering", () => {
  it("should render SwitchCountry component correctly", () => {
    render(
      <Provider store={store}>
        <SwitchCountry />
      </Provider>
    );
    // 国のプルダウンselectが存在すること
    expect(screen.getByRole("combobox")).toBeTruthy();
    // プルダウンの中に国名 china が存在すること
    expect(screen.getByText("china")).toBeTruthy();
  });
});

//プルダウンを選択したときのテスト
describe("Country pulldown onChange event", () => {
  it("selected country name equal selected one", () => {
    //selectの場合：https://testing-library.com/docs/dom-testing-library/api-queries#byrole
    //プルダウンで選択できること
    const mockCallback = jest.fn();
    const { getByTestId } = render(
        <NativeSelect native={true} onChange={mockCallback} data-testid="my-wrapper" defaultValue="japan">
          <option key={0} value="japan">
            japan
          </option>
          <option key={1} value="us">
            us
          </option>
          <option key={2} value="brazil">
            brazil
          </option>
        </NativeSelect>
    );
    const wrapperNode = getByTestId("my-wrapper");
    console.log(wrapperNode);//TODO:中身見れない
    // const selectNode = wrapperNode.childNodes[0].childNodes[0];
    // fireEvent.change(selectNode, { target: { value: "brazil" } });
    // expect(mockCallback.mock.calls).toHaveLength(1);
  });
});
