from selenium.webdriver.common.by import By  # 要素取得のために必要なモジュール
from pages import form
import datetime
import sys


class TestInputErrorHeadCounts:

    # 人数が空白だと予約ができないことを確認する
    def test_setheadcount_null(self, hotel_site, capture_name):
        driver = hotel_site
        form_page = form.FormPageObject(driver)

        form_page.wait_until_clickable()

        today = datetime.date.today()
        tomorrow = today + datetime.timedelta(days=1)
        tomorrow = str(tomorrow).replace("-", "/")

        form_page.set_date(tomorrow)

        # 宿泊数を"1"にするに設定
        form_page.set_term("1")

        # 人数を空白に設定
        form_page.set_headcount(" ")

        # すべて選択
        form_page.select_plan(True, True, True)

        # 確認方法は希望しないを選択する
        form_page.set_contact("希望しない")

        # 名前に「TESTA」を入力する
        form_page.set_name("TESTA")
        # 予約確認ボタンを押下する
        form_page.click_confirmbutton()

        driver.execute_script("window.scrollTo(document.body.scrollHeight,0)")
        driver.save_screenshot(capture_name)

        messeage = driver.find_element(
            By.CSS_SELECTOR,
            "#reserve-form > div > div.col-lg-6.ml-auto > div:nth-child(2) > div > div.invalid-feedback",
        ).text

        assert (
            messeage == "このフィールドを入力してください。"
        ), "人数が空白だと宿泊数入力エリア下に「このフィールドを入力してください。」と表示されること"

    # 人数が0だと予約ができないことを確認する
    def test_setheadcount_zero(self, hotel_site, capture_name):
        driver = hotel_site
        form_page = form.FormPageObject(driver)

        form_page.wait_until_clickable()

        today = datetime.date.today()
        threemonths = today + datetime.timedelta(days=90)
        threemonths = str(threemonths).replace("-", "/")

        form_page.set_date(threemonths)

        # 宿泊数を"1"にするに設定
        form_page.set_term("1")

        # 人数を0に設定
        form_page.set_headcount("0")

        # すべて選択しない
        form_page.select_plan(False, False, False)

        # 確認方法は希望しないを選択する
        form_page.set_contact("希望しない")

        # 名前に「TESTA」を入力する
        form_page.set_name("TESTA")
        # 予約確認ボタンを押下する
        form_page.click_confirmbutton()

        driver.execute_script("window.scrollTo(document.body.scrollHeight,0)")
        driver.save_screenshot(capture_name)

        messeage = driver.find_element(
            By.CSS_SELECTOR,
            "#reserve-form > div > div.col-lg-6.ml-auto > div:nth-child(2) > div > div.invalid-feedback",
        ).text

        assert (
            messeage == "1以上の値を入力してください。"
        ), "人数が0だと宿泊数入力エリア下に「1以上の値を入力してください。」と表示されること"

    # 人数が10以上だと予約ができないことを確認する
    def test_setheadcount_moreten(self, hotel_site, capture_name):
        driver = hotel_site
        form_page = form.FormPageObject(driver)

        form_page.wait_until_clickable()

        today = datetime.date.today()
        nextmonths = today + datetime.timedelta(days=30)
        nextmonths = str(nextmonths).replace("-", "/")

        form_page.set_date(nextmonths)

        # 宿泊数を"1"にするに設定
        form_page.set_term("1")

        # 人数を10に設定
        form_page.set_headcount("10")

        # すべて選択しない
        form_page.select_plan(False, False, False)

        # 確認方法は希望しないを選択する
        form_page.set_contact("希望しない")

        # 名前に「TESTA」を入力する
        form_page.set_name("TESTA")
        # 予約確認ボタンを押下する
        form_page.click_confirmbutton()

        driver.execute_script("window.scrollTo(document.body.scrollHeight,0)")
        driver.save_screenshot(capture_name)

        messeage = driver.find_element(
            By.CSS_SELECTOR,
            "#reserve-form > div > div.col-lg-6.ml-auto > div:nth-child(2) > div > div.invalid-feedback",
        ).text

        assert (
            messeage == "9以下の値を入力してください。"
        ), "人数が10以上だと宿泊数入力エリア下に「9以下の値を入力してください。」と表示されること"
