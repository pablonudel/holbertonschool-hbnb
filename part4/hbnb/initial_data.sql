-- Insert Users
INSERT INTO users (first_name, last_name, email, password, is_admin, id, created_at, updated_at) 
VALUES ("Admin", "HBnB", "admin@hbnb.io", "$2b$12$JMgr7Zfi2w5KZwesW9mb8.UwneRbQvEF9gQqWA5VpVUifi8Ye8/fK", 1, "86d5a94f-ca6d-44b9-8910-3c5393386415", "2025-04-11 08:15:30.688366", "2025-04-11 08:15:30.688453"),
("Jane", "Doe", "jane@email.com", "$2b$12$et44er5sHplchE3IcnFySOu4VI/MNOxlld7yFyAlACz3pN8WoOthS", 0, "c867078b-eae0-4faf-8277-99771632baef", "2025-04-11 08:25:25.585981", "2025-04-11 08:25:25.586061"),
("Jennifer", "Smith", "jennifer@email.com", "$2b$12$9KuCsFkM6jz4hlXvAssLKODPqsogdCJ1vNvj9arthu5M9KRLl8Pse", 0, "24ae9b3c-5a63-4120-9aee-e84f503fc2d4", "2025-04-11 08:25:25.585981", "2025-04-11 08:25:25.586061"),
("Pablo", "Nudel", "pablo@email.com", "$2b$12$o7OacjwWTVK.hi72FOUInO1ZoRbpqeCQUusUxpDj1BWZzATRHrUAi", 0, "73b934ff-e54a-4c5c-a72f-867a2cd11bdb", "2025-04-11 08:25:25.585981", "2025-04-11 08:25:25.586061"),
("John", "Doe", "john@email.com", "$2b$12$XI.VtuRyNnyLYhIkJM9QHet1CTrO3jMXfKfS5FNS.SyOpKXasF9C2", 0, "1c26cf6d-b05a-44e7-b694-c9d09b07f30d", "2025-04-11 08:25:25.585981", "2025-04-11 08:25:25.586061"),
("Mathieu", "Bernard", "mathieu@email.com", "$2b$12$xjhBibhGWEgnVMnDO3fTQ.U..df6DPi38FVg8hwSSidxiGYjMQ5tC", 0, "501618ff-4fc0-426f-a6f2-c9715ecf04bf", "2025-04-11 08:25:25.585981", "2025-04-11 08:25:25.586061"),
("Morgane", "Lardeux", "morgane@email.com", "$2b$12$utqR1BchnyeE6b/tJqHQfOMQkknDdzHDN9ojjv6XTu9aF7EHLELd2", 0, "4079e770-15ad-464e-9594-902b50e93ecf", "2025-04-11 08:25:25.585981", "2025-04-11 08:25:25.586061");

-- Insert Amenities
INSERT INTO amenities (name, id, created_at, updated_at)
VALUES ("Wifi", "4efb6c5f-8f36-4e9d-8df8-c1a6f8a9264a", "2025-04-11 08:25:25.585981", "2025-04-11 08:25:25.586061"),
("Swimming Pool", "b6c9ac45-8ef2-4122-8c44-a38c37cb4619", "2025-04-11 08:25:25.585981", "2025-04-11 08:25:25.586061"),
("Air Conditioning", "ad7b1d51-5ef2-493b-b67f-97b4e58f6620", "2025-04-11 08:25:25.585981", "2025-04-11 08:25:25.586061"),
("Parking", "c408979d-f138-4c84-b9d3-b8d1fdfe5831", "2025-04-11 08:25:25.585981", "2025-04-11 08:25:25.586061");

-- Insert Places
INSERT INTO places (title, description, price, latitude, longitude, owner_id, id, created_at, updated_at)
VALUES ("Seaside Serenity Cottage", "Relax in our charming seaside cottage with stunning ocean views and tranquil sunsets. Perfect for a peaceful getaway.", 15, 65.62851795517125, 30.563101295013524, "c867078b-eae0-4faf-8277-99771632baef", "db466eee-91ee-4c1d-bcbd-9abaaddfb752", "2020-04-04 08:25:25.585981", "2020-04-04 08:25:25.585981"),
("Urban Loft with City Skyline Views", "Modern downtown loft with incredible city skyline views. Enjoy easy access to cafes, galleries, and nightlife.", 10, 37.977193459612465, -112.78035088406864, "24ae9b3c-5a63-4120-9aee-e84f503fc2d4", "095119ae-2881-4d87-b204-cd6d4cdb5244", "2022-08-16 08:25:25.585981", "2022-08-16 08:25:25.585981"),
("Mountain Retreat Cabin", "Cozy, secluded mountain cabin surrounded by pines. Ideal for hiking and enjoying nature's quiet.", 120, 81.77410133097607, -132.94689753548283, "73b934ff-e54a-4c5c-a72f-867a2cd11bdb", "e42866c4-64d7-4c55-b50f-3dd5727e2ac3", "2025-02-21 08:25:25.585981", "2025-02-21 08:25:25.585981"),
("Historic Townhouse in Old Quarter", "Restored townhouse in the charming old quarter. Explore cobblestone streets and rich history.", 45, -87.06188584340808, 16.412502063002535, "c867078b-eae0-4faf-8277-99771632baef", "eabde803-08b7-4fce-9653-9df227eb7d59", "2021-03-24 08:25:25.585981", "2021-03-24 08:25:25.585981"),
("Tropical Paradise Bungalow", "Secluded island bungalow with white sand beaches and clear waters. Perfect for a tropical escape.", 80, -9.749366713104536, 36.526390979061915, "24ae9b3c-5a63-4120-9aee-e84f503fc2d4", "e4f14a52-a653-432e-a6e4-ad7f8a40386c", "2025-03-28 08:25:25.585981", "2025-03-28 08:25:25.585981"),
("Rustic Farmhouse Getaway", "Peaceful country farmhouse surrounded by rolling hills. Enjoy the simple pleasures of rural life.", 90, 53.53437191325915, -87.07219162521626, "73b934ff-e54a-4c5c-a72f-867a2cd11bdb", "85c243c2-b0d9-4782-8bc6-c0b77abea8d6", "2025-04-11 08:25:25.585981", "2025-04-11 08:25:25.585981");

-- Insert Place Amenity
INSERT INTO place_amenity (place_id, amenity_id)
VALUES ("db466eee-91ee-4c1d-bcbd-9abaaddfb752", "4efb6c5f-8f36-4e9d-8df8-c1a6f8a9264a"),
("db466eee-91ee-4c1d-bcbd-9abaaddfb752", "b6c9ac45-8ef2-4122-8c44-a38c37cb4619"),
("095119ae-2881-4d87-b204-cd6d4cdb5244", "b6c9ac45-8ef2-4122-8c44-a38c37cb4619"),
("095119ae-2881-4d87-b204-cd6d4cdb5244", "ad7b1d51-5ef2-493b-b67f-97b4e58f6620"),
("e42866c4-64d7-4c55-b50f-3dd5727e2ac3", "ad7b1d51-5ef2-493b-b67f-97b4e58f6620"),
("e42866c4-64d7-4c55-b50f-3dd5727e2ac3", "c408979d-f138-4c84-b9d3-b8d1fdfe5831"),
("eabde803-08b7-4fce-9653-9df227eb7d59", "4efb6c5f-8f36-4e9d-8df8-c1a6f8a9264a"),
("eabde803-08b7-4fce-9653-9df227eb7d59", "b6c9ac45-8ef2-4122-8c44-a38c37cb4619"),
("e4f14a52-a653-432e-a6e4-ad7f8a40386c", "b6c9ac45-8ef2-4122-8c44-a38c37cb4619"),
("e4f14a52-a653-432e-a6e4-ad7f8a40386c", "ad7b1d51-5ef2-493b-b67f-97b4e58f6620"),
("85c243c2-b0d9-4782-8bc6-c0b77abea8d6", "ad7b1d51-5ef2-493b-b67f-97b4e58f6620"),
("85c243c2-b0d9-4782-8bc6-c0b77abea8d6", "c408979d-f138-4c84-b9d3-b8d1fdfe5831");

-- Insert Reviews
INSERT INTO reviews (rating, text, place_id, user_id, id, created_at, updated_at)
VALUES (4, "A solid choice for a comfortable stay. The location was good, and the overall experience was positive. I'd recommend it.", "eabde803-08b7-4fce-9653-9df227eb7d59", "1c26cf6d-b05a-44e7-b694-c9d09b07f30d", "89106161-5343-4ffc-9632-14ef9eddb88a", "2021-07-22 08:25:25.585981", "2021-07-22 08:25:25.585981"),
(5, "Truly a wonderful experience. Everything was excellent, and the atmosphere was perfect. I thoroughly enjoyed my time here.", "db466eee-91ee-4c1d-bcbd-9abaaddfb752", "501618ff-4fc0-426f-a6f2-c9715ecf04bf", "4880f98f-1c65-44b3-a5fd-a12175d8e4da", "2020-07-15 08:25:25.585981", "2020-07-15 08:25:25.585981"),
(3, "It was adequate for my needs. The location was convenient, and the place was acceptable. Nothing particularly stood out, but nothing was bad.", "095119ae-2881-4d87-b204-cd6d4cdb5244", "4079e770-15ad-464e-9594-902b50e93ecf", "7062c216-adeb-4518-afda-d336f279350d", "2024-08-18 08:25:25.585981", "2024-08-18 08:25:25.585981"),
(5, "An exceptional stay! The atmosphere was welcoming, and the overall experience was fantastic. I'd happily return.", "e42866c4-64d7-4c55-b50f-3dd5727e2ac3", "1c26cf6d-b05a-44e7-b694-c9d09b07f30d", "b2ad9238-d06d-420b-9f19-a3491236c5c1", "2025-04-11 08:25:25.585981", "2025-04-11 08:25:25.585981"),
(4, "A pleasant experience. The place was clean and comfortable, and the surroundings were nice. I was satisfied with my stay.", "eabde803-08b7-4fce-9653-9df227eb7d59", "501618ff-4fc0-426f-a6f2-c9715ecf04bf", "9f7548ec-7d19-4bb5-add4-b9fc2f8663e3", "2023-05-17 08:25:25.585981", "2023-05-17 08:25:25.585981"),
(3, "It was an okay stay. It served its purpose, but it wasn't anything special. It was fine for a short trip.", "db466eee-91ee-4c1d-bcbd-9abaaddfb752", "4079e770-15ad-464e-9594-902b50e93ecf", "9922af9a-8212-4c56-9658-691c98879abf", "2021-06-10 08:25:25.585981", "2021-06-10 08:25:25.585981");