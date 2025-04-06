import unittest
from unittest.mock import MagicMock
from views_counter import lambda_handler

class TestLambdaHandler(unittest.TestCase):

    def test_lambda_handler_success(self):
        event = {}
        context = {}

        fake_response = {
            'Attributes': {
                'visits': 10
            }
        }

        import views_counter
        views_counter.table = MagicMock()
        views_counter.table.update_item.return_value = fake_response

        result = lambda_handler(event, context)

        self.assertEqual(result['statusCode'], 200)
        self.assertIn('visits', result['body'])

if __name__ == '__main__':
    unittest.main()
