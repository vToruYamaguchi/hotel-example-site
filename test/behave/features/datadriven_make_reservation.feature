Feature: 宿泊予約画面
    Scenario Outline: 宿泊予約が行える
        Given HOTEL PLANISPHEREの予約画面に遷移する
        When 宿泊日を"<day>"に設定する
        And 宿泊人数を"<headcount>"人に設定する
        And 宿泊数を"<stays>"日に設定する
        And 追加プランに"<plans>"を選択
        And 名前を"<name>"に設定する
        And 確認のご連絡欄は"<contact>"を選択
        And 内容確認ボタンを押下する
        Then 予約確認画面に遷移すること

        Examples: test
            | day        | headcount | stays | plans                                                      | name               | contact    |
            | 2022/10/13 | 1         | 2     | 朝食バイキング、昼からチェックインプラン、お得な観光プラン | behave触りたいマン | 希望しない |
            | 2022/10/20 | 9         | 9     | 朝食バイキング                                             | 朝食食べたいマン   | 希望しない |