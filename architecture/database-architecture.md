# Database Architecture

## Collections

### Users

- name
- email
- password
- role
- refreshToken

---

### Topics

- title
- slug
- description
- icon
- color
- createdBy

---

### Articles

- title
- slug
- summary
- content
- topic
- tags
- createdBy

---

### Resources

- title
- slug
- description
- url
- type
- topic
- createdBy

---

### Chats

- user
- title
- lastMessage

---

### Messages

- chat
- role
- content
- promptTokens
- completionTokens
- totalTokens

## Relationships

```
User
 │
 ├──── Topics
 │
 ├──── Articles
 │
 └──── Resources

User
 │
 └──── Chats
          │
          └──── Messages

Topic
 │
 ├──── Articles
 │
 └──── Resources
```

## Database

MongoDB Atlas

ODM

Mongoose