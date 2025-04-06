import unittest
from unittest.mock import MagicMock, patch
import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../main')))

with patch('boto3.resource') as mock_dynamodb_resource:
    mock_table = MagicMock()
    mock_table.update_item.return_value = {'Attributes': {'visits': 10}}
    mock_dynamodb_resource.return_value.Table.return_value = mock_table

    from views_counter import lambda_handler

class TestLambdaHandler(unittest.TestCase):

    def test_lambda_handler_success(self):
        event = {}
        context = {}

        result = lambda_handler(event, context)

        self.assertEqual(result['statusCode'], 200)
        self.assertIn('visits', result['body'])

if __name__ == '__main__':
    unittest.main()
