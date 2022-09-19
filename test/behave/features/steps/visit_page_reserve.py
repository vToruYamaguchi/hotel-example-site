from behave import *
import time
from elements.elements import Elements
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


@given("HOTEL PLANISPHEREのホーム画面に遷移する")
def go_to_hotel_planisphere_site(context):
    context.browser.maximize_window()
    context.browser.get("https://vtoruyamaguchi.github.io/hotel-example-site/ja/")

    try:
        WebDriverWait(context.browser, 10).until(
            EC.element_to_be_clickable(
                (By.CSS_SELECTOR, Elements.Home.CSSSelector.LOGIN_TAB)
            )
        )
    except:
        raise "HOTEL PLANISPHEREのホーム画面に遷移していません"


@when("お得な特典付きプランを選択する")
def select_resevertion_plan(context):
    context.browser.find_element(
        By.CSS_SELECTOR, Elements.Home.CSSSelector.ACCOMMODATION_RESERVATIONS_TAB
    ).click()
    time.sleep(1)
    context.browser.find_element(
        By.XPATH, Elements.ListOfAccommodationPlans.XPath.BUTTON_SPECIAL_OFFER_PLANS
    ).click()
    time.sleep(3)


@Then("宿泊予約画面に遷移成功")
def got_to_page_reserve(context):
    context.browser.switch_to.window(context.browser.window_handles[-1])
    try:
        WebDriverWait(context.browser, 10).until(
            EC.element_to_be_clickable(
                (By.ID, Elements.ReservationForm.ID.CONFIRM_BUTTON)
            )
        )
        assert "宿泊予約" in context.browser.title, "宿泊予約ページに遷移していること"

    except Exception as e:
        raise e
