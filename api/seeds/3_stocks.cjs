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
  ]);
};
