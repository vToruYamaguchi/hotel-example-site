Feature: ホテル予約サイトに遷移できる
    Scenario: 宿泊予約サイトに遷移成功
        Given HOTEL PLANISPHEREのホーム画面に遷移する
        When お得な特典付きプランを選択する
        Then 宿泊予約画面に遷移成功
