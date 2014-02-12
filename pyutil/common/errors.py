
class InvalidJavaScriptError(Exception):

    def __init__(self, error_message):
        super(InvalidJavaScriptError, self).__init__()
        self.__error_message = error_message

    @property
    def error_message(self):
        return self.__error_message

    def __repr__(self):
        return 'Invalid JavaScript: {}'.format(self.error_message)

    def __str__(self):
        return self.error_message
