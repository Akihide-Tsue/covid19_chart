import React, { useState } from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../app/store";
import SwitchCountry from "../features/covid/SwitchCountry/SwitchCountry";

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

////プルダウンを選択したときのテスト
describe("Country pulldown onChange event", () => {
  it("select country name = us", () => {
    render(
      <Provider store={store}>
        <SwitchCountry />
      </Provider>
    );
    //selectの場合：https://testing-library.com/docs/dom-testing-library/api-queries#byrole
    //プルダウンで us を選択する
    const pullDown = screen.getByRole("combobox");
    userEvent.click(pullDown);
    userEvent.selectOptions(pullDown, "us");
    expect(pullDown.value).toBe("us");
  });
});
