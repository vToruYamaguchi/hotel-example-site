from pages import form, confirm
import datetime
from dateutil.relativedelta import relativedelta


class TestReservation:
    def test_open_webpage(self, hotel_site, capture_name):
        driver = hotel_site
        form_page = form.FormPageObject(driver)

        form_page.wait_until_clickable()

        # 宿泊数入力エリアへの文字入力(翌月の一日)および宿泊数に#を入力
        today = datetime.date.today()
        nextmonths = (today + relativedelta(months=1)).replace(day=1)
        nextmonths = str(nextmonths).replace("-", "/")
        form_page.set_date(nextmonths)

        # 宿泊数を"3"に設定
        form_page.set_term("3")

        # 人数を"2"に設定
        form_page.set_headcount("2")

        # お得な観光プランを選択
        form_page.select_plan(False, False, True)

        # 確認方法は希望しないを選択する
        form_page.set_contact("希望しない")

        # 名前に「TESTA」を入力する
        form_page.set_name("TESTA")
        # 予約確認ボタンを押下する
        form_page.click_confirmbutton()

        confirm_page = confirm.ConfirmPageObject(driver)

        confirm_page.wait_until_clickable()

        # スクリーンショット
        driver.save_screenshot(capture_name)
        """
        assert処理の後ろには基本関数は作成しない
        assertでエラーになった場合はそのあとの処理が行われないため(行うためにはpycheckを入れないといけない)
        """
        total = confirm_page.check_total()

        assert total == "51,000", "合計金額が51,000円であること"
