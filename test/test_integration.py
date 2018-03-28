"""
StratoDem Analytics : test_integration
Principal Author(s) : Michael Clawar
Secondary Author(s) :
Description :

Notes :

December 29, 2017
"""

from .IntegrationTests import IntegrationTests
from .utils import invincible, wait_for


class Tests(IntegrationTests):
    def setUp(self):
        def wait_for_element_by_id(id):
            wait_for(lambda: None is not invincible(
                lambda: self.driver.find_element_by_id(id)
            ))
            return self.driver.find_element_by_id(id)
        self.wait_for_element_by_id = wait_for_element_by_id

        def wait_for_element_by_css_selector(css_selector):
            wait_for(lambda: None is not invincible(
                lambda: self.driver.find_element_by_css_selector(css_selector)
            ))
            return self.driver.find_element_by_css_selector(css_selector)
        self.wait_for_element_by_css_selector = (
            wait_for_element_by_css_selector
        )
