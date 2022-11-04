-- CreateTable
CREATE TABLE "products_categories" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_product" TEXT NOT NULL,
    "id_category" TEXT NOT NULL,
    CONSTRAINT "products_categories_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "products_categories_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
