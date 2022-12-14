/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("stocks").del();
  await knex("stocks").insert([
    {
      quantity: 27,
      price: 160.0,
      id_item: 1,
      seller: 1,
      size: "10",
    },
    {
      quantity: 29,
      price: 157.0,
      id_item: 1,
      seller: 3,
      size: "10.5",
    },
    {
      quantity: 38,
      price: 163.0,
      id_item: 1,
      seller: 2,
      size: "11",
    },
    {
      quantity: 13,
      price: 199.99,
      id_item: 1,
      seller: 2,
      size: "11.5",
    },
    {
      quantity: 35,
      price: 155.0,
      id_item: 1,
      seller: 3,
      size: "12",
    },
    {
      quantity: 39,
      price: 132.0,
      id_item: 3,
      seller: 3,
      size: "7",
    },
    {
      quantity: 52,
      price: 129.99,
      id_item: 3,
      seller: 3,
      size: "7.5",
    },
    {
      quantity: 172,
      price: 79.0,
      id_item: 7,
      seller: 2,
      size: "S",
    },
    {
      quantity: 89,
      price: 89.0,
      id_item: 7,
      seller: 1,
      size: "L",
    },
    {
      quantity: 78,
      price: 170.0,
      id_item: 2,
      seller: 3,
      size: "11",
    },
    {
      quantity: 37,
      price: 190.0,
      id_item: 2,
      seller: 1,
      size: "10.5",
    },
    {
      quantity: 14,
      price: 629.0,
      id_item: 4,
      seller: 1,
      size: "8.5",
    },
    {
      quantity: 2,
      price: 679.0,
      id_item: 4,
      seller: 1,
      size: "7.5",
    },
    {
      quantity: 13,
      price: 487.0,
      id_item: 5,
      seller: 2,
      size: "10.5",
    },
    {
      quantity: 27,
      price: 429.99,
      id_item: 5,
      seller: 1,
      size: "10",
    },
    {
      quantity: 27,
      price: 379.99,
      id_item: 6,
      seller: 1,
      size: "11",
    },
    {
      quantity: 54,
      price: 359.99,
      id_item: 6,
      seller: 1,
      size: "10",
    },
    {
      quantity: 58,
      price: 52.0,
      id_item: 8,
      seller: 2,
      size: "M",
    },
    {
      quantity: 13,
      price: 132.0,
      id_item: 8,
      seller: 2,
      size: "XS",
    },
    {
      quantity: 78,
      price: 33.0,
      id_item: 9,
      seller: 2,
      size: "S",
    },
    {
      quantity: 159,
      price: 29.99,
      id_item: 9,
      seller: 3,
      size: "XXL",
    },
    {
      quantity: 257,
      price: 15.0,
      id_item: 10,
      seller: 1,
      size: "XXXL",
    },
    {
      quantity: 146,
      price: 15.0,
      id_item: 10,
      seller: 1,
      size: "XXS",
    },
    {
      quantity: 37,
      price: 38.0,
      id_item: 11,
      seller: 1,
      size: "XS",
    },
    {
      quantity: 83,
      price: 47.0,
      id_item: 11,
      seller: 2,
      size: "XXL",
    },
    {
      quantity: 286,
      price: 256.0,
      id_item: 12,
      seller: 3,
      size: "S",
    },
    {
      quantity: 823,
      price: 174.99,
      id_item: 12,
      seller: 1,
      size: "M",
    },
    {
      quantity: 96,
      price: 764.99,
      id_item: 13,
      seller: 2,
      size: "XL",
    },
    {
      quantity: 136,
      price: 734.99,
      id_item: 13,
      seller: 2,
      size: "L",
    },
    {
      quantity: 259,
      price: 264.99,
      id_item: 14,
      seller: 3,
      size: "M",
    },
    {
      quantity: 372,
      price: 249.99,
      id_item: 14,
      seller: 1,
      size: "S",
    },
    {
      quantity: 27,
      price: 374.99,
      id_item: 15,
      seller: 1,
      size: "XXS",
    },
    {
      quantity: 53,
      price: 324.99,
      id_item: 15,
      seller: 3,
      size: "XXXL",
    },
    {
      quantity: 173,
      price: 78.99,
      id_item: 16,
      seller: 2,
      size: "L",
    },
    {
      quantity: 154,
      price: 80.0,
      id_item: 16,
      seller: 2,
      size: "S",
    },
    {
      quantity: 372,
      price: 60.0,
      id_item: 17,
      seller: 3,
      size: "M",
    },
    {
      quantity: 549,
      price: 50.0,
      id_item: 17,
      seller: 3,
      size: "L",
    },
    {
      quantity: 365,
      price: 99.99,
      id_item: 18,
      seller: 1,
      size: "S",
    },
    {
      quantity: 275,
      price: 132.0,
      id_item: 18,
      seller: 2,
      size: "M",
    },
    {
      quantity: 938,
      price: 79.99,
      id_item: 19,
      seller: 3,
      size: "M",
    },
    {
      quantity: 1002,
      price: 64.99,
      id_item: 19,
      seller: 1,
      size: "L",
    },
    {
      quantity: 26,
      price: 124.99,
      id_item: 20,
      seller: 2,
      size: "XXL",
    },
    {
      quantity: 28,
      price: 129.99,
      id_item: 20,
      seller: 2,
      size: "XXXL",
    },
    {
      quantity: 13,
      price: 149.99,
      id_item: 21,
      seller: 1,
      size: "M",
    },
    {
      quantity: 20,
      price: 159.99,
      id_item: 21,
      seller: 1,
      size: "L"
    },
    {
      quantity: 2,
      price: 124.99,
      id_item: 22,
      seller: 2,
      size: "L",
    },
    {
      quantity: 8,
      price: 109.99,
      id_item: 22,
      seller: 2,
      size: "S",
    },
    {
      quantity: 51,
      price: 99.99,
      id_item: 23,
      seller: 3,
      size: "S",
    },
    {
      quantity: 47,
      price: 109.99,
      id_item: 23,
      seller: 3,
      size: "M",
    },
    {
      quantity: 12,
      price: 114.99,
      id_item: 23,
      seller: 3,
      size: "L"
    },
    {
      quantity: 13,
      price: 199.99,
      id_item: 24, 
      seller: 1,
      size: "L",
    },
    {
      quantity: 7,
      price: 219.99,
      id_item: 24,
      seller: 1,
      size: "XL",
    },
    {
      quantity: 89,
      price: 59.83,
      id_item: 25,
      seller: 1,
      size: "M",
    },
    {
      quantity: 73,
      price: 64.99,
      id_item: 25,
      seller: 1,
      size: "L",
    },
    {
      quantity: 13,
      price: 123.99,
      id_item: 26,
      seller: 1,
      size: "M",
    },
    {
      quantity: 2,
      price: 150.00,
      id_item: 26,
      seller: 1,
      size: "L",
    },
    {
      quantity: 35,
      price: 39.99,
      id_item: 27,
      seller: 1,
      size: "S",
    },
    {
      quantity: 41,
      price: 39.99,
      id_item: 27,
      seller: 1,
      size: "M",
    },
    {
      quantity: 44,
      price: 44.99,
      id_item: 27,
      seller: 1,
      size: "L",
    },
    {
      quantity: 45,
      price: 44.99,
      id_item: 28,
      seller: 3,
      size: "XS",
    },
    {
      quantity: 42,
      price: 49.99,
      id_item: 28,
      seller: 3,
      size: "S",
    },
    {
      quantity: 43,
      price: 49.99,
      id_item: 28,
      seller: 3,
      size: "M",
    },
    {
      quantity: 2,
      price: 37.99,
      id_item: 29,
      seller: 2,
      size: "L",
    },
    {
      quantity: 7,
      price: 109.99,
      id_item: 30,
      seller: 2,
      size: "S",
    },
    {
      quantity: 19,
      price: 119.99,
      id_item: 30,
      seller: 2,
      size: "M",
    },
    {
      quantity: 23,
      price: 119.99,
      id_item: 30,
      seller: 2,
      size: "L",
    },
    {
      quantity: 17,
      price: 129.99,
      id_item: 30,
      seller: 1,
      size: "XL",
    },
    {
      quantity: 14,
      price: 59.99,
      id_item: 31,
      seller: 2,
      size: "M",
    },
    {
      quantity: 7,
      price: 59.99,
      id_item: 31,
      seller: 2,
      size: "L",
    },
    {
      quantity: 121,
      price: 139.99,
      id_item: 32,
      seller: 1,
      size: "L",
    },
    {
      quantity: 146,
      price: 139.99,
      id_item: 32,
      seller: 2,
      size: "M",
    },
    {
      quantity: 274,
      price: 199.99,
      id_item: 33,
      seller: 1,
      size: "M",
    },
    {
      quantity: 243,
      price: 199.99,
      id_item: 33,
      seller: 1,
      size: "L",
    },
    {
      quantity: 183,
      price: 203.99,
      id_item: 33,
      seller: 2,
      size: "XL",
    },
    {
      quantity: 52,
      price: 44.99,
      id_item: 34,
      seller: 3,
      size: "M",
    },
    {
      quantity: 27,
      price: 44.99,
      id_item: 34,
      seller: 3,
      size: "M",
    },
    {
      quantity: 41,
      price: 37.99,
      id_item: 35,
      seller: 1,
      size: "XS",
    },
    {
      quantity: 42,
      price: 37.99,
      id_item: 35,
      seller: 1,
      size: "S",
    },
    {
      quantity: 67,
      price: 44.99,
      id_item: 35,
      seller: 1,
      size: "M",
    },
    {
      quantity: 54,
      price: 44.99,
      id_item: 35,
      seller: 1,
      size: "L",
    },
    {
      quantity: 45,
      price: 63.99,
      id_item: 36,
      seller: 2,
      size: "M",
    },
    {
      quantity: 52,
      price: 64.99,
      id_item: 36,
      seller: 1,
      size: "L",
    },
    {
      quantity: 52,
      price: 45.99,
      id_item: 37,
      seller: 2,
      size: "M",
    },
    {
      quantity: 24,
      price: 45.99,
      id_item: 37,
      seller: 2,
      size: "L",
    },
    {
      quantity: 75,
      price: 69.99,
      id_item: 38,
      seller: 3,
      size: "M",
    },
    {
      quantity: 34,
      price: 69.99,
      id_item: 38,
      seller: 3,
      size: "L",
    },
    {
      quantity: 37,
      price: 49.99,
      id_item: 39,
      seller: 2,
      size: "M",
    },
    {
      quantity: 33,
      price: 59.99,
      id_item: 39,
      seller: 2,
      size: "L",
    },
    {
      quantity: 86,
      price: 24.99,
      id_item: 40,
      seller: 2,
      size: "S",
    },
    {
      quantity: 86,
      price: 24.99,
      id_item: 40,
      seller: 2,
      size: "M",
    },
    {
      quantity: 86,
      price: 29.99,
      id_item: 40,
      seller: 3,
      size: "L",
    },
    {
      quantity: 86,
      price: 24.99,
      id_item: 40,
      seller: 2,
      size: "M",
    },
    {
      quantity: 136,
      price: 32.99,
      id_item: 41,
      seller: 2,
      size: "M",
    },
    {
      quantity: 112,
      price: 34.99,
      id_item: 41,
      seller: 2,
      size: "L",
    },
    {
      quantity: 92,
      price: 39.99,
      id_item: 42,
      seller: 1,
      size: "M",
    },
    {
      quantity: 49,
      price: 59.99,
      id_item: 43,
      seller: 1,
      size: "M",
    },
    {
      quantity: 32,
      price: 79.99,
      id_item: 44,
      seller: 1,
      size: "M",
    },
    {
      quantity: 375,
      price: 19.99,
      id_item: 45,
      seller: 3,
      size: "M",
    },
    {
      quantity: 86,
      price: 19.99,
      id_item: 45,
      seller: 3,
      size: "L",
    },
    {
      quantity: 3,
      price: 199.99,
      id_item: 46,
      seller: 1,
      size: "M",
    },
  ]);
};
