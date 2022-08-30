import pytest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import os
from datetime import datetime
from py.xml import html

PATH_OUTPUTS = "./output"


@pytest.fixture(scope="function")
def hotel_site():
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    driver.maximize_window()
    driver.get(
        "https://vtoruyamaguchi.github.io/hotel-example-site/ja/reserve.html?plan-id=0"
    )

    yield driver

    driver.quit()


@pytest.fixture(scope="session", autouse=True)
def parentdir():
    name_parentdir = datetime.now().strftime("%y%m%d-%H%M%S")
    path_parentdir = os.path.join(PATH_OUTPUTS, name_parentdir)
    os.makedirs(path_parentdir)
    return path_parentdir


@pytest.fixture(scope="class", autouse=True)
def classdir(request, parentdir) -> str:
    path_classdir = os.path.join(parentdir, request.node.name)
    os.makedirs(path_classdir)
    return path_classdir


@pytest.fixture()
def capture_name(request, classdir):
    path_capture = os.path.join(classdir, request.node.name + ".png")
    return path_capture


def pytest_html_results_table_header(cells):
    cells.insert(2, html.th("Description"))


def pytest_html_results_table_row(report, cells):
    cells.insert(2, html.td(report.description))


@pytest.hookimpl(hookwrapper=True)
def pytest_runtest_makereport(item, call):
    outcome = yield
    report = outcome.get_result()
    report.description = str(item.function.__doc__)
