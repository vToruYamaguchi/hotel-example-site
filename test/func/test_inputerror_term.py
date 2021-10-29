from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By  # 要素取得のために必要なモジュール
from pages import form
import datetime
from dateutil.relativedelta import relativedelta


class TestInputErrorTerm():
    def setup_method(self):
        self.driver = webdriver.Chrome(ChromeDriverManager().install())
        self.driver.maximize_window()
        self.driver.get("https://vtoruyamaguchi.github.io/hotel-example-site/ja/reserve.html?plan-id=0")

    # 宿泊数が空白だと予約ができないことを確認する
    def test_setdate_yesterday(self):
        driver = self.driver
        form_page = form.FormPageObject(self.driver)

        form_page.wait_until_clickable()

        today = datetime.date.today()
        tomorrow = today + datetime.timedelta(days=1)
        tomorrow = str(tomorrow).replace("-", "/")

        form_page.set_date(tomorrow)

        # 宿泊数を空白にするに設定
        form_page.set_term(" ")

        # 人数を"2"に設定
        form_page.set_headcount("1")

        # すべて選択
        form_page.select_plan(True, True, True)

        # 確認方法は希望しないを選択する
        form_page.set_contact("希望しない")

        # 名前に「TESTA」を入力する
        form_page.set_name("TESTA")
        # 予約確認ボタンを押下する
        form_page.click_confirmbutton()

        driver.execute_script("window.scrollTo(document.body.scrollHeight,0)")
        driver.save_screenshot("./output/formsinputerror_termnull.png")

        messeage = self.driver.find_element(By.CSS_SELECTOR,
                                            "#reserve-form > div > div.col-lg-6.ml-auto > div:nth-child(3) > div > div.invalid-feedback").text

        assert messeage == "このフィールドを入力してください。", \
            "宿泊数が空白だと宿泊数入力エリア下に「このフィールドを入力してください。」と表示されること"

    def teardown_method(self):
        self.driver.quit()
