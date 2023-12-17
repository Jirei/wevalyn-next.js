-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Message" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "senderFirstName" TEXT NOT NULL,
    "senderLastName" TEXT,
    "senderEmail" TEXT NOT NULL,
    "message" TEXT NOT NULL
);
INSERT INTO "new_Message" ("createdAt", "id", "message", "senderEmail", "senderFirstName", "senderLastName") SELECT "createdAt", "id", "message", "senderEmail", "senderFirstName", "senderLastName" FROM "Message";
DROP TABLE "Message";
ALTER TABLE "new_Message" RENAME TO "Message";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
