from behave import *

from elements.elements import Elements
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select


@given("HOTEL PLANISPHEREの予約画面に遷移する")
def go_to_hotel_planisphere_site(context):
    context.browser.maximize_window()
    context.browser.get(
        "https://vtoruyamaguchi.github.io/hotel-example-site/ja/reserve.html?plan-id=0"
    )

    try:
        WebDriverWait(context.browser, 10).until(
            EC.element_to_be_clickable(
                (By.ID, Elements.ReservationForm.ID.CONFIRM_BUTTON)
            )
        )
    except:
        raise "HOTEL PLANISPHEREの予約画面に遷移していません"


@when('宿泊日を"{day}"に設定する')
def set_accommodation(context, day) -> None:
    textbox_accommodation = context.browser.find_element(
        By.ID, Elements.ReservationForm.ID.ACCOMMODATION
    )
    textbox_accommodation.clear()
    textbox_accommodation.send_keys(day)
    textbox_accommodation.send_keys(Keys.TAB)


@when('宿泊人数を"{head_count}"人に設定する')
def set_head_count(context, head_count) -> None:
    textbox_head_count = context.browser.find_element(
        By.ID, Elements.ReservationForm.ID.HEADCOUNT
    )
    textbox_head_count.clear()
    textbox_head_count.send_keys(head_count)


@when('宿泊数を"{stay}"日に設定する')
def set_stays(context, stay) -> None:
    textbox_stays = context.browser.find_element(
        By.ID, Elements.ReservationForm.ID.TERM
    )
    textbox_stays.clear()
    textbox_stays.send_keys(stay)


@when('追加プランに"{plan}"を選択')
def select_plan(context, plan) -> None:

    if "朝食バイキング" in plan:
        element_breakfast = Elements.ReservationForm.ID.ADDITONAL_PLAN.get("朝食バイキング")
        chkbox_breakfast = context.browser.find_element(By.ID, element_breakfast)
        chkbox_breakfast.click()

    if "昼からチェックインプラン" in plan:
        element_early = Elements.ReservationForm.ID.ADDITONAL_PLAN.get("昼からチェックインプラン")
        chkbox_early = context.browser.find_element(By.ID, element_early)
        chkbox_early.click()

    if "お得な観光プラン" in plan:
        element_sightseeing = Elements.ReservationForm.ID.ADDITONAL_PLAN.get("お得な観光プラン")
        chkbox_sightseeing = context.browser.find_element(By.ID, element_sightseeing)
        chkbox_sightseeing.click()


@when('名前を"{name}"に設定する')
def set_name(context, name):
    textbox_name = context.browser.find_element(By.ID, Elements.ReservationForm.ID.NAME)
    textbox_name.clear()
    textbox_name.send_keys(name)


@when('確認のご連絡欄は"{contact、detail}"を選択')
def select_contact(context, contact, detail):
    doropdown = Select(
        context.browser.find_element(By.ID, Elements.ReservationForm.ID.CONTACT)
    )
    doropdown.select_by_visible_text(contact)


@when("内容確認ボタンを押下する")
def click_confirm_button(context):
    context.browser.find_element(
        By.ID, Elements.ReservationForm.ID.CONFIRM_BUTTON
    ).click()
    try:
        WebDriverWait(context.browser, 10).until(
            EC.element_to_be_clickable(
                (
                    By.CSS_SELECTOR,
                    Elements.ConfirmReservation.CSSSelector.RESERVATION_BUTTON,
                )
            )
        )
    except:
        raise "HOTEL PLANISPHEREの予約確認画面に遷移していません"


@Then("予約確認画面に遷移すること")
def trasition_reservation(context) -> None:
    try:
        WebDriverWait(context.browser, 10).until(
            EC.element_to_be_clickable(
                (
                    By.CSS_SELECTOR,
                    Elements.ConfirmReservation.CSSSelector.RESERVATION_BUTTON,
                )
            )
        )
    except Exception as e:
        raise e("HOTEL PLANISPHEREの予約確認画面に遷移していません")

    assert "宿泊予約確認" in context.browser.title, "宿泊予約確認画面に遷移していること"
