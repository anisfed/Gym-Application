class AUTH_SERVICER:
    """
    This class is responsible for handling all the authentication related services.
      - Get the client information by client number
      - Register a new client
    - Login a client
    """

    def __init__(self):
        pass

    def get_client_by_number(self, client_number: str):
        """
        Get the client information by client number
        logic:
            1. call the CRM API to get the client information by client number
            2. return the client information

        :param client_number: str
        :return: dict
        """
        pass

    def register(self, client_info: dict):
        """
        Register a new client
        logic:
            1. register the client
            2. call the CRM API to save the user id in the CRM
            3. return the client information
        :param client_info: dict
         :return:
        """
        pass

    def login(self, username: str, password: str):
        """
        Login a client
        logic:
            1. login the client
            2. generate a jwt token
        :param username: str
        :param password: str
        :return: dict
        """
        pass
