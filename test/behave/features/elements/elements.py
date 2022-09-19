class Elements:
    class Home:
        class CSSSelector:
            LOGIN_TAB = "#login-holder > a"
            ACCOMMODATION_RESERVATIONS_TAB = "#navbarNav > ul > li:nth-child(2) > a"

    class ListOfAccommodationPlans:
        class XPath:
            BUTTON_SPECIAL_OFFER_PLANS = "/html/body/div/div[2]/div/div/div[2]/a"

    class ReservationForm:
        class ID:
            CONFIRM_BUTTON = "confirm-button"
            ACCOMMODATION = "accommodation"
            HEADCOUNT = "head-count"
            TERM = "term"
            ADDITONAL_PLAN = {
                "朝食バイキング": "breakfast",
                "昼からチェックインプラン": "early-check-in",
                "お得な観光プラン": "sightseeing",
            }
            NAME = "username"
            CONTACTS = "contact"

        class CSSSelector:
            PHONE_NUMBER = "#tel"
            MAIL = "#email"

    class ConfirmReservation:
        class CSSSelector:
            RESERVATION_BUTTON = "#confirm > div:nth-child(2) > div > button"
