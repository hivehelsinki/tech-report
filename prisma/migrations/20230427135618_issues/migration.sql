-- CreateTable
CREATE TABLE "Issue" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "host" TEXT NOT NULL,
    "device" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolved_at" DATETIME,
    CONSTRAINT "Issue_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
