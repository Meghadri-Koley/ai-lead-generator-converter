-- CreateTable
CREATE TABLE "LeadMagnet" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "slug" TEXT,
    "publishedTitle" TEXT NOT NULL,
    "draftTitle" TEXT NOT NULL,
    "publishedSubtitle" TEXT NOT NULL,
    "draftSubtitle" TEXT NOT NULL,
    "publishedPrompt" TEXT NOT NULL,
    "draftPrompt" TEXT NOT NULL,
    "publishedBody" TEXT NOT NULL,
    "draftBody" TEXT NOT NULL,
    "publishedFristQuestion" TEXT NOT NULL,
    "draftFirstQuestion" TEXT NOT NULL,
    "publishedEmailCapture" TEXT NOT NULL,
    "draftEmailCapture" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publishedAt" TIMESTAMP,
    "pageViews" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "LeadMagnet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lead" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "leadMagnetId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LeadMagnet_userId_slug_key" ON "LeadMagnet"("userId", "slug");

-- CreateIndex
CREATE INDEX "Lead_leadMagnetId_idx" ON "Lead"("leadMagnetId");

-- CreateIndex
CREATE INDEX "Lead_userId_idx" ON "Lead"("userId");

-- AddForeignKey
ALTER TABLE "Lead" ADD CONSTRAINT "Lead_leadMagnetId_fkey" FOREIGN KEY ("leadMagnetId") REFERENCES "LeadMagnet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
