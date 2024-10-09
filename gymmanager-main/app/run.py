import logging
import uvicorn

from config.settings import settings

logger = logging.getLogger(__name__)
if __name__ == "__main__":
    logger.info("Info: Application is starting.")
    uvicorn.run("api.main:app",
                host=settings.API.HOST,
                port=settings.API.PORT,
                reload=settings.API.RELOAD)
