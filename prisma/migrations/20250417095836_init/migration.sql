-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT,
    "telegramId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);
