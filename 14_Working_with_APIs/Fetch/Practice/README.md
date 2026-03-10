```Bash
# *** Testing ***

# ============================================================
# READ
http get localhost:3000/users

# ============================================================
# CREATE
http post localhost:3000/users name="Groot"


# ============================================================
# UPDATED
http PUT localhost:3000/users/1 name="Joel Updated" role="SuperAdmin"

# ============================================================
# DELETE
http delete localhost:3000/users/1

```
