from selenium import webdriver
from selenium.webdriver.common.by import By  # 要素取得のために必要なモジュール
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class ConfirmPageObject:

    def __init__(self, driver: webdriver):
        self.driver = driver
        # 初期処理だけど、なぜ個の指定をしているかは分からない
        # webdriverを代入している？

    def wait_until_clickable(self):
        # 画面の読み込みが終わるまで待機(仕組みは後でおしえてもらう)
        WebDriverWait(self.driver, 10).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, "#confirm > div:nth-child(2) > div > button")))

    def check_total(self):
        total = self.driver.find_element(By.ID, "total-bill").text.strip("合計""円（税込み）"" ")

        # .textをよく忘れる
        return total
