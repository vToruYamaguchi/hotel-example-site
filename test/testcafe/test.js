import { Selector } from "testcafe";

// サイトの指定
fixture("HOTEL PLANISPHERE").page(
  "https://vtoruyamaguchi.github.io/hotel-example-site/ja/"
);

//テストケース1
test("ログインテスト", async (t) => {
  //要素の取得
  const loginButton = await Selector("#login-holder");
  const email = await Selector("#email");
  const password = await Selector("#password");
  const login = await Selector("#login-button");

  //テスト開始
  await t
    //それぞれの動作
    .click(loginButton)
    .typeText(email, "sakura@example.com")
    .typeText(password, "pass1234")
    .click(login);
  //確認
  await t
    .expect(Selector("body > div > div:nth-child(1) > div > h2").innerText)
    .eql("マイページ");
});
