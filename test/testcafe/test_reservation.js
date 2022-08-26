import { Selector } from "testcafe";

// サイトの指定
fixture("HOTEL PLANISPHERE").page(
  "https://vtoruyamaguchi.github.io/hotel-example-site/ja/reserve.html?plan-id=0"
);

//テストケース1
test("明日の日付で予約が出来ること", async (t) => {
  //要素の取得
  const date = await Selector("#accommodation");
  const headcount = await Selector("#head-count");
  const term = await Selector("#term");
  const breakfast = await Selector("#breakfast");
  const username = await Selector("#username");
  const contact = await Selector("#contact");
  const contactoption = await contact.find("option");
  const confirm = await Selector("#confirm-button");

  //明日の日付取得
  const tomorrow = ()=>{
    var now = new Date();
    let year = now.getFullYear();
    let month = (now.getMonth()+1);
    let date = (now.getDate()+1);
    let setdate = year + "/" + month + "/" + date;
    return setdate
    };

  //テスト開始
  await t
    //それぞれの動作
    .selectText(date,0)
    .pressKey('delete')
    .typeText(date, tomorrow())
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
    .click(confirm)
    .takeScreenshot(
      'output/sample1.png',
    );

  //確認
  await t
    .expect(Selector("#total-bill").innerText)
    .eql("合計 9,750円（税込み）");
});