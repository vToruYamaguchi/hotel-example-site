from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By  # 要素取得のために必要なモジュール
from selenium.webdriver.support.ui import Select  # ドロップダウンリスト選択に必要なモジュール
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class FormPageObject:

    def __init__(self, driver: webdriver):
        self.driver = driver

    def wait_until_clickable(self):
        # 画面の読み込みが終わるまで待機(仕組みは後でおしえてもらう)
        WebDriverWait(self.driver, 10).until(
            EC.element_to_be_clickable((By.ID, "confirm-button")))

        # 使う変数と引数がかぶらないようにしないといけないこと!!
    def set_date(self, setdate):
        date = self.driver.find_element(By.ID, "accommodation")
        date.clear()
        date.send_keys(setdate)
        # 引数dateの値を入力している
        date.send_keys(Keys.TAB)
        # TABキーを押下したいときにインポートするクラスが違う"import Keys"Kは大文字

    def set_term(self, term):
        days = self.driver.find_element(By.ID, "term")
        days.clear()
        days.send_keys(term)
        # 引数termの値を入力している

    def set_headcount(self, headcount):
        textbox = self.driver.find_element(By.ID, "head-count")
        textbox.clear()
        textbox.send_keys(headcount)

    def select_plan(self, breakfast, early, sightseeing):
        chkbox_breakfast = self.driver.find_element(By.ID, "breakfast")
        chkbox_earlycheckin = self.driver.find_element(By.ID, "early-check-in")
        chkbox_sightseeing = self.driver.find_element(By.ID, "sightseeing")

        if breakfast == True:
            chkbox_breakfast.click()

        if early == True:
            chkbox_earlycheckin.click()

        if sightseeing == True:
            chkbox_sightseeing.click()

    def set_name(self, setname):
        name = self.driver.find_element(By.ID, "username")
        name.clear()
        name.send_keys(setname)

    def set_contact(self, contact):
        doropdown = Select(self.driver.find_element(By.ID, "contact"))
        doropdown.select_by_visible_text(contact)

    def click_confirmbutton(self):
        self.driver.find_element(By.ID, "confirm-button").click()
