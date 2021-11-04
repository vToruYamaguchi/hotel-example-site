import { Selector } from "testcafe";

// サイトの指定
fixture("HOTEL PLANISPHERE").page(
  "https://vtoruyamaguchi.github.io/hotel-example-site/ja/reserve.html?plan-id=0"
);

//テストケース1
test("予約できること", async (t) => {
  //要素の取得
  const date = await Selector("#accommodation");
  const headcount = await Selector("#head-count");
  const term = await Selector("#term");
  const breakfast = await Selector("#breakfast");
  const username = await Selector("#username");
  const contact = await Selector("#contact");
  const contactoption = await contact.find("option");
  const confirm = await Selector("#confirm-button");

  //テスト開始
  await t
    //それぞれの動作
    .selectText(date,0)
    .pressKey('delete')
    .typeText(date, "2021/12/31")
    .selectText(headcount,0)
    .pressKey('delete')
    .typeText(headcount, "1")
    .selectText(term,0)
    .pressKey('delete')
    .typeText(term, "1")
    .click(breakfast)
    .typeText(username,"testA")
    .click(contact)
    .click(contactoption.withText('希望しない'))
    .click(confirm);

  //確認
  await t
    .expect(Selector("#confirm > div:nth-child(1) > div > h2").innerText)
    .eql("宿泊予約確認");
});