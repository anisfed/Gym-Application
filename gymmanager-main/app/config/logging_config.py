from logging.config import dictConfig

from app.config.settings import settings


def setup_logging():
    logging_config = {
        "version": 1,
        "disable_existing_loggers": False,
        "formatters": {
            "standard": {
                "format": "%(asctime)s [%(levelname)s] %(name)s: %(message)s",
                "datefmt": "%Y-%m-%d %H:%M:%S",
            },
        },
        "handlers": {
            "file_handler": {
                "class": "logging.FileHandler",
                "level": settings.LOGGING.FILE_LOGGER.LEVEL,
                "formatter": "standard",
                "filename": settings.LOGGING.FILE_LOGGER.FILENAME,
            },
            "console_handler": {
                "class": "logging.StreamHandler",
                "level": settings.LOGGING.CONSOLE_LOGGER.LEVEL,
                "formatter": "standard",
            },
        },
        "loggers": {
            "file_logger": {
                "handlers": ["file_handler"],
                "level": settings.LOGGING.FILE_LOGGER.LEVEL,
                "propagate": False,  # Don't propagate to root logger
                # For more details check : https://docs.python.org/3/library/logging.html#logging.Logger.propagate
            },
            "console_logger": {
                "handlers": ["console_handler"],
                "level": settings.LOGGING.CONSOLE_LOGGER.LEVEL,
                "propagate": False,  # Don't propagate to root logger
            },
        },
        "root": {
            "handlers": ["file_handler", "console_handler"],
            "level": settings.LOGGING.LEVEL,
        },
    }

    dictConfig(logging_config)
