const profiles = [
  {
    name: "John"
  },
  {
    name: "Jane"
  },
  {
    name: "Steve"
  },
  {
    name: "Dawn"
  },
  {
    name: "Sally"
  }
];
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert(profiles);
    });
};
