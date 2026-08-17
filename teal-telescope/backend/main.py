from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


# 定义数据模型
class Identity(BaseModel):
    firstName: str
    country: str
    occupation: str
    hobbies: list[str]


# 模拟数据（后续可换成数据库）
identity_data: Identity = Identity(
    firstName="louis",
    country="中国",
    occupation="学生",
    hobbies=["游戏", "音乐", "编程", "阅读"],
)


# GET 请求 - 获取数据
@app.get("/api/identity")
async def get_identity() -> Identity:
    return identity_data


# PUT 请求 - 更新数据
@app.put("/api/identity")
async def update_identity(data: Identity) -> Identity:
    global identity_data
    identity_data = data
    return identity_data
