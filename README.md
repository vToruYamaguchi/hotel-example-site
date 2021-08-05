# hotel-example-site

[![selenide-en-us](https://github.com/testplanisphere/hotel-example-selenide-en-us/actions/workflows/test.yml/badge.svg)](https://github.com/testplanisphere/hotel-example-selenide-en-us/actions/workflows/test.yml)
[![webdriverio-en-us](https://github.com/testplanisphere/hotel-example-webdriverio-en-us/actions/workflows/test.yml/badge.svg)](https://github.com/testplanisphere/hotel-example-webdriverio-en-us/actions/workflows/test.yml)
[![capybara-en-us](https://github.com/testplanisphere/hotel-example-capybara-en-us/actions/workflows/test.yml/badge.svg)](https://github.com/testplanisphere/hotel-example-capybara-en-us/actions/workflows/test.yml)
[![selenium4-java-en-us](https://github.com/testplanisphere/hotel-example-selenium4-java-en-us/actions/workflows/test.yml/badge.svg)](https://github.com/testplanisphere/hotel-example-selenium4-java-en-us/actions/workflows/test.yml)

[![selenide-ja](https://github.com/testplanisphere/hotel-example-selenide-ja/actions/workflows/test.yml/badge.svg)](https://github.com/testplanisphere/hotel-example-selenide-ja/actions/workflows/test.yml)
[![webdriverio-ja](https://github.com/testplanisphere/hotel-example-webdriverio-ja/actions/workflows/test.yml/badge.svg)](https://github.com/testplanisphere/hotel-example-webdriverio-ja/actions/workflows/test.yml)
[![capybara-ja](https://github.com/testplanisphere/hotel-example-capybara-ja/actions/workflows/test.yml/badge.svg)](https://github.com/testplanisphere/hotel-example-capybara-ja/actions/workflows/test.yml)
[![selenium4-java-ja](https://github.com/testplanisphere/hotel-example-selenium4-java-ja/actions/workflows/test.yml/badge.svg)](https://github.com/testplanisphere/hotel-example-selenium4-java-ja/actions/workflows/test.yml)

## このサイトはテスト自動化の学習用の練習サイトです。

Seleniumなどのブラウザテスト自動化を学習したい方が、実際にテストスクリプトを実行するためのテスト対象サイトとして作成されています。

書籍やブログなどでのサンプルやデモにもお使いいただけます。ライセンスは [MIT License](https://github.com/testplanisphere/hotel-example-site/blob/master/LICENSE)です。

自動テストの学習を目的として作成されていますが、テスト設計や技法の学習に使うことも可能です。

### サイトの構成

ホテルの予約サイトを模した作りになっています。ログイン・会員登録・ホテルの宿泊予約のそれぞれの入力フォームを用意しています。レスポンシブデザインに対応しているためモバイルブラウザでも表示できます。

#### ご利用上の注意

- 2020年7月時点でのGoogle Chromeの最新版で動作確認をしています。
- サイトはGitHub Pagesでホストされています。
- 入力データについて
  - データはブラウザのCookieおよびSession Storage、Local Storageに保存されます。
  - DBなどサーバ側での保存はありません。
  - HTMLの仕様上、フォームへの入力内容はURLの末尾に付加されて送信されます。Githubサーバのログなどに残る可能性があるのでお気をつけください。
- 負荷テストには利用しないでください。
- このサイトを利用することによって生じた損害などにつきましては、一切の責任を負いません。
### Changelog
#### v1.0.0 (2020-04-14)

* First release
