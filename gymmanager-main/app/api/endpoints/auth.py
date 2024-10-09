from fastapi import APIRouter

from services.auth_servicer import AUTH_SERVICER

auth_router = APIRouter(prefix="/auth", tags=["auth"])

auth_servicer = AUTH_SERVICER


@auth_router.post("/pre-register")
async def pre_register(client_number: str):
    client_info = auth_servicer.get_client_by_number(client_number=client_number)
    return {client_info}


@auth_router.post("/register")
async def register():
    # TODO: to be removed before merge
    return {"status": "ok"}


@auth_router.post("/login")
async def login(username: str, password: str):
    return {"token": "979790789070933}"}
