test( "the search function should return", () => {
    let episode = {
      id: 4953,
      url: "http://www.tvmaze.com/episodes/4953/game-of-thrones-1x02-the-kingsroad",
      name: "The Kingsroad",
      season: 1,
      number: 2,
      airdate: "2011-04-24",
      airtime: "21:00",
      airstamp: "2011-04-25T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/1/2669.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/1/2669.jpg",
      },
      summary:
        "<p>An incident on the Kingsroad threatens Eddard and Robert's friendship. Jon and Tyrion travel to the Wall, where they discover that the reality of the Night's Watch may not match the heroic image of it.</p>",
      _links: {
        self: {
          href: "http://api.tvmaze.com/episodes/4953",
        },
      },
    };
    expect(matchesSearchFilter(episode, "The Kingsroad")).toBe(true);
})