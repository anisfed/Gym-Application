from fastapi import FastAPI

from api.endpoints.auth import auth_router
from api.endpoints.health_endpoint import health_router

app = FastAPI(title="GymManager API", description="API for GymManager", version="0.1.0")

app.include_router(health_router)
app.include_router(auth_router)
