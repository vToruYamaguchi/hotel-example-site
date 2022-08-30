from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By


class Testsample:
    def test_open_site(self, hotel_site, capture_name):
        """
        AI自動修復機能確認サイトが開けることの確認
        """
        WebDriverWait(hotel_site, 10).until(
            EC.element_to_be_clickable((By.ID, "confirm-button"))
        )

        hotel_site.execute_script("window.scrollTo(document.body.scrollHeight,0)")
        hotel_site.save_screenshot(capture_name)

        assert "宿泊予約" in hotel_site.title, "宿泊予約ページに遷移していること"
