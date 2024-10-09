from dotenv import load_dotenv

from pydantic_settings import BaseSettings, SettingsConfigDict

DEBUG = "DEBUG"

load_dotenv()


class APISettings(BaseSettings):
    """
    API Settings
    """
    HOST: str
    PORT: int
    LOG_LEVEL: str
    RELOAD: bool = True
    model_config = SettingsConfigDict(env_file=".env", env_prefix="API_", case_sensitive=True)


class Settings(BaseSettings):
    API: APISettings = APISettings()


settings = Settings()
