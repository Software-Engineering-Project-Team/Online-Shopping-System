# models/user.py
from sqlmodel import SQLModel, Field, Relationship
from typing import Optional
from pydantic import BaseModel, EmailStr
from back_end.core.security import get_password_hash
from back_end.models.item import Item


class UserBase(SQLModel):
    """Shared properties of all User schemas.

    Attributes:
        email (EmailStr): The email address of the user, must be unique.
        is_active (Optional[bool]): Indicates if the user is active. Defaults to True.
        full_name (Optional[str]): The full name of the user. Defaults to None.
    """

    email: EmailStr = Field(unique=True, index=True, max_length=255)
    is_active: Optional[bool] = True
    full_name: str | None = Field(default=None, max_length=255)


class UserResponse(BaseModel):
    id: int
    email: EmailStr
    is_active: bool
    full_name: str | None

    class Config:
        orm_mode = True


class UserCreate(UserBase):
    """Properties to receive via API on user creation.

    Attributes:
        password (str): The password for the user, must be between 8 and 40 characters.
    """

    password: str = Field(min_length=8, max_length=40)


class UserRegister(SQLModel):
    """Properties to receive via API on user registration.

    Attributes:
        email (EmailStr): The email address of the user.
        password (str): The password for the user, must be between 8 and 40 characters.
        full_name (Optional[str]): The full name of the user. Defaults to None.
    """

    email: EmailStr = Field(max_length=255)
    password: str = Field(min_length=8, max_length=40)
    full_name: str | None = Field(default=None, max_length=255)


class UserUpdate(UserBase):
    """Properties to receive via API on user update, all are optional.

    Attributes:
        email (Optional[EmailStr]): The email address of the user. Defaults to None.
        password (Optional[str]): The password for the user, must be between 8 and 40 characters. Defaults to None.
    """

    email: EmailStr | None = Field(default=None, max_length=255)  # type: ignore
    password: str | None = Field(default=None, min_length=8, max_length=40)

    def hash_password(self):
        if self.password:
            self.password = get_password_hash(self.password)


class UserUpdateMe(SQLModel):
    """Properties to receive via API on updating the current user.

    Attributes:
        email (Optional[EmailStr]): The email address of the user. Defaults to None.
        password (Optional[str]): The password for the user, must be between 8 and 40 characters. Defaults to None.
    """

    email: EmailStr | None = Field(default=None, max_length=255)  # type: ignore
    password: str | None = Field(default=None, min_length=8, max_length=40)


class UpdatePassword(SQLModel):
    """Properties to receive via API on updating the user's password.

    Attributes:
        old_password (str): The current password of the user.
        new_password (str): The new password for the user, must be between 8 and 40 characters.
    """

    old_password: str = Field(min_length=8, max_length=40)
    new_password: str = Field(min_length=8, max_length=40)


class User(UserBase, table=True):
    """Database model for the User.

    Attributes:
        id (Optional[int]): The unique identifier for the user. Defaults to None.
        hashed_password (str): The hashed password of the user.
        items (list[Item]): The list of items associated with the user.
    """

    id: int | None = Field(default=None, primary_key=True)
    hashed_password: str
    items: list["Item"] = Relationship(back_populates="owner")

    def hash_password(self):
        self.hashed_password = get_password_hash(self.password)