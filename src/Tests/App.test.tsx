import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import App from "../App";

//コンポーネントが存在するかのテスト
describe("rendering component", () => {
  it("should render component correctly", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    // デバッグ確認方法 screen.debug();
    // TODO:Jestの機能一覧：https://jestjs.io/docs/ja/expect

    //ヘッダーの文字が正しく存在すること
    expect(screen.getByText("Covid 19 Live Dashboard")).toBeTruthy();
    //"Covid 18 Live Dashboard"の文字が存在しないこと
    expect(screen.queryByText("Covid 18 Live Dashboard")).toBeNull();
    // 国のプルダウンselectが存在すること
    expect(screen.getByRole("combobox")).toBeTruthy();
  });
});
