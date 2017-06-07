// @flow
import { loop, Effects } from "redux-loop-symbol-ponyfill";

const LOAD_MOVIES = "LOAD_MOVIES";
const MOVIES_LOADED = "MOVIES_LOADED";
const MOVIES_LOADING_FAILED = "MOVIES_LOADING_FAILED";

const load_latest_movies = () => {
  return fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=571f89e8e2fdb653f0b2bb281fa8f241&language=en-US&page=1"
  )
    .then(r => r.json())
    .then(data => data.results)
    .then(movies_loaded_action)
    .catch(movies_loading_failed_action);
};

export const load_movies_action = () => ({
  type: LOAD_MOVIES
});

export const movies_loading_failed_action = () => ({
  type: MOVIES_LOADING_FAILED
});

export const movies_loaded_action = payload => ({
  type: MOVIES_LOADED,
  payload
});

type StateType = {
  loading_data: boolean,
  loading_failed: boolean
};

const initialState = {
  loading_data: false,
  loading_failed: false,
  movies: [
    {
      vote_count: 841,
      id: 166426,
      video: false,
      vote_average: 6.6,
      title: "Pirates of the Caribbean: Dead Men Tell No Tales",
      popularity: 223.952677,
      poster_path: "/xbpSDU3p7YUGlu9Mr6Egg2Vweto.jpg",
      original_language: "en",
      original_title: "Pirates of the Caribbean: Dead Men Tell No Tales",
      genre_ids: [28, 12, 35, 14],
      backdrop_path: "/3DVKG54lqYbdh8RNylXeCf4MBPw.jpg",
      adult: false,
      overview:
        "Captain Jack Sparrow searches for the trident of Poseidon while being pursued by an undead sea captain and his crew.",
      release_date: "2017-05-23"
    },
    {
      vote_count: 456,
      id: 297762,
      video: false,
      vote_average: 7.2,
      title: "Wonder Woman",
      popularity: 100.945251,
      poster_path: "/gfJGlDaHuWimErCr5Ql0I8x9QSy.jpg",
      original_language: "en",
      original_title: "Wonder Woman",
      genre_ids: [28, 12, 14, 878],
      backdrop_path: "/hA5oCgvgCxj5MEWcLpjXXTwEANF.jpg",
      adult: false,
      overview:
        "An Amazon princess comes to the world of Man to become the greatest of the female superheroes.",
      release_date: "2017-05-30"
    },
    {
      vote_count: 2180,
      id: 283995,
      video: false,
      vote_average: 7.6,
      title: "Guardians of the Galaxy Vol. 2",
      popularity: 47.923022,
      poster_path: "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
      original_language: "en",
      original_title: "Guardians of the Galaxy Vol. 2",
      genre_ids: [28, 12, 35, 878],
      backdrop_path: "/tM894AtE7UQTJEoQG6qF6mdfSUT.jpg",
      adult: false,
      overview:
        "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
      release_date: "2017-04-19"
    },
    {
      vote_count: 1589,
      id: 324552,
      video: false,
      vote_average: 6.5,
      title: "John Wick: Chapter 2",
      popularity: 44.255374,
      poster_path: "/6GL7tdkaEP5nBwVrPqg8U3AYrCX.jpg",
      original_language: "en",
      original_title: "John Wick: Chapter 2",
      genre_ids: [53, 28, 80],
      backdrop_path: "/dQ6s3Ud2KoOs3LKw6xgZr1cw7Yq.jpg",
      adult: false,
      overview:
        "John Wick is forced out of retirement by a former associate looking to seize control of a shadowy international assassins’ guild. Bound by a blood oath to aid him, Wick travels to Rome and does battle against some of the world’s most dangerous killers.",
      release_date: "2017-02-08"
    },
    {
      vote_count: 898,
      id: 126889,
      video: false,
      vote_average: 6,
      title: "Alien: Covenant",
      popularity: 34.797816,
      poster_path: "/ewVHnq4lUiovxBCu64qxq5bT2lu.jpg",
      original_language: "en",
      original_title: "Alien: Covenant",
      genre_ids: [27, 878, 53],
      backdrop_path: "/kMU8trT43p5LFoJ4plIySMOsZ1T.jpg",
      adult: false,
      overview:
        "Bound for a remote planet on the far side of the galaxy, the crew of the colony ship Covenant discovers what they think is an uncharted paradise, but is actually a dark, dangerous world — whose sole inhabitant is the “synthetic” David, survivor of the doomed Prometheus expedition.",
      release_date: "2017-05-09"
    },
    {
      vote_count: 1541,
      id: 419430,
      video: false,
      vote_average: 7.1,
      title: "Get Out",
      popularity: 27.700354,
      poster_path: "/1SwAVYpuLj8KsHxllTF8Dt9dSSX.jpg",
      original_language: "en",
      original_title: "Get Out",
      genre_ids: [9648, 53, 27],
      backdrop_path: "/Ae58bf7Yj6OPzwKerPgXSnxCJdh.jpg",
      adult: false,
      overview:
        "Chris and his girlfriend Rose go upstate to visit her parents for the weekend. At first, Chris reads the family's overly accommodating behavior as nervous attempts to deal with their daughter's interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he never could have imagined.",
      release_date: "2017-02-24"
    },
    {
      vote_count: 2812,
      id: 381288,
      video: false,
      vote_average: 6.8,
      title: "Split",
      popularity: 26.087627,
      poster_path: "/rXMWOZiCt6eMX22jWuTOSdQ98bY.jpg",
      original_language: "en",
      original_title: "Split",
      genre_ids: [27, 53],
      backdrop_path: "/4G6FNNLSIVrwSRZyFs91hQ3lZtD.jpg",
      adult: false,
      overview:
        "Though Kevin has evidenced 23 personalities to his trusted psychiatrist, Dr. Fletcher, there remains one still submerged who is set to materialize and dominate all the others. Compelled to abduct three teenage girls led by the willful, observant Casey, Kevin reaches a war for survival among all of those contained within him — as well as everyone around him — as the walls between his compartments shatter apart.",
      release_date: "2016-11-15"
    },
    {
      vote_count: 2283,
      id: 337339,
      video: false,
      vote_average: 6.7,
      title: "The Fate of the Furious",
      popularity: 22.447157,
      poster_path: "/iNpz2DgTsTMPaDRZq2tnbqjL2vF.jpg",
      original_language: "en",
      original_title: "The Fate of the Furious",
      genre_ids: [28, 80, 53],
      backdrop_path: "/jzdnhRhG0dsuYorwvSqPqqnM1cV.jpg",
      adult: false,
      overview:
        "When a mysterious woman seduces Dom into the world of crime and a betrayal of those closest to him, the crew face trials that will test them as never before.",
      release_date: "2017-04-12"
    },
    {
      vote_count: 33,
      id: 282035,
      video: false,
      vote_average: 4.6,
      title: "The Mummy",
      popularity: 17.543024,
      poster_path: "/8K8LHSgXdUH3YHFJpcUXslPYpYr.jpg",
      original_language: "en",
      original_title: "The Mummy",
      genre_ids: [28, 12, 14, 27, 53],
      backdrop_path: "/qedJJ2z9oBYKxxO4Pp8qAkfgPst.jpg",
      adult: false,
      overview:
        "Though safely entombed in a crypt deep beneath the unforgiving desert, an ancient queen whose destiny was unjustly taken from her is awakened in our current day, bringing with her malevolence grown over millennia, and terrors that defy human comprehension.",
      release_date: "2017-06-06"
    },
    {
      vote_count: 216,
      id: 339846,
      video: false,
      vote_average: 5.6,
      title: "Baywatch",
      popularity: 15.408777,
      poster_path: "/6HE4xd8zloDqmjMZuhUCCw2UcY1.jpg",
      original_language: "en",
      original_title: "Baywatch",
      genre_ids: [28, 35],
      backdrop_path: "/tryI7qZHaLMVzMNpLyKHKDiZOLc.jpg",
      adult: false,
      overview:
        "Devoted lifeguard Mitch Buchannon butts heads with a brash new recruit. Together, they uncover a local criminal plot that threatens the future of the Bay.",
      release_date: "2017-05-12"
    },
    {
      vote_count: 332,
      id: 274857,
      video: false,
      vote_average: 6.4,
      title: "King Arthur: Legend of the Sword",
      popularity: 10.461483,
      poster_path: "/5qtySjfuJfOLvVrVXuwNo2BIVPH.jpg",
      original_language: "en",
      original_title: "King Arthur: Legend of the Sword",
      genre_ids: [28, 18, 14],
      backdrop_path: "/22eFfWlar6MtXO5qG25TkjLphoj.jpg",
      adult: false,
      overview:
        "When the child Arthur’s father is murdered, Vortigern, Arthur’s uncle, seizes the crown. Robbed of his birthright and with no idea who he truly is, Arthur comes up the hard way in the back alleys of the city. But once he pulls the sword Excalibur from the stone, his life is turned upside down and he is forced to acknowledge his true legacy... whether he likes it or not.",
      release_date: "2017-04-27"
    },
    {
      vote_count: 1409,
      id: 295693,
      video: false,
      vote_average: 5.7,
      title: "The Boss Baby",
      popularity: 9.400213,
      poster_path: "/unPB1iyEeTBcKiLg8W083rlViFH.jpg",
      original_language: "en",
      original_title: "The Boss Baby",
      genre_ids: [16, 35, 10751],
      backdrop_path: "/frlfy7RFqx5J4jrcMo25PqyasL3.jpg",
      adult: false,
      overview:
        "A story about how a new baby's arrival impacts a family, told from the point of view of a delightfully unreliable narrator, a wildly imaginative 7 year old named Tim.",
      release_date: "2017-03-23"
    },
    {
      vote_count: 743,
      id: 14564,
      video: false,
      vote_average: 4.7,
      title: "Rings",
      popularity: 8.847684,
      poster_path: "/bbxtz5V0vvnTDA2qWbiiRC77Ok9.jpg",
      original_language: "en",
      original_title: "Rings",
      genre_ids: [27],
      backdrop_path: "/wLpxG6hhhXcPHOoklsNDKnJtsAK.jpg",
      adult: false,
      overview:
        'Julia becomes worried about her boyfriend, Holt when he explores the dark urban legend of a mysterious videotape said to kill the watcher seven days after viewing. She sacrifices herself to save her boyfriend and in doing so makes a horrifying discovery: there is a "movie within the movie" that no one has ever seen before.',
      release_date: "2017-02-01"
    },
    {
      vote_count: 44,
      id: 433422,
      video: false,
      vote_average: 6.8,
      title: "Fairy Tail Movie 2: Dragon Cry",
      popularity: 8.562482,
      poster_path: "/f6GuwIVkNZYFkt7kiHSJRPiXAAA.jpg",
      original_language: "ja",
      original_title: "劇場版 FAIRY TAIL 『DRAGON CRY』",
      genre_ids: [16, 12, 14],
      backdrop_path: "/bEU8tRXLpaIaHj6CpBu5iXxdjOH.jpg",
      adult: false,
      overview:
        "This year's 25th issue of Kodansha's Weekly Shounen Magazine announced that a second anime film of Hiro Mashima's Fairy Tail manga has been green-lit. The magazine is unveiling imageboard art that Mashima himself drew for the film. The upcoming issue is also publishing two chapters of the manga (it is the fourth issue in a row with two chapters), and it teases \"the series' biggest shocker ever! A development you absolutely can't miss!!\"",
      release_date: "2017-05-06"
    },
    {
      vote_count: 410,
      id: 381289,
      video: false,
      vote_average: 6.2,
      title: "A Dog's Purpose",
      popularity: 7.713568,
      poster_path: "/3jcNvhtVQe5Neoffdic39fRactM.jpg",
      original_language: "en",
      original_title: "A Dog's Purpose",
      genre_ids: [35, 18, 10751, 14],
      backdrop_path: "/2ddVTlMyATZdvUHE7DPExA2X6xF.jpg",
      adult: false,
      overview:
        "A dog goes on quest to discover his purpose in life over the course of several lifetimes with multiple owners.",
      release_date: "2017-01-19"
    },
    {
      vote_count: 125,
      id: 339967,
      video: false,
      vote_average: 6.4,
      title: "Colossal",
      popularity: 7.407345,
      poster_path: "/4VOyofBd1pexblxtDZYtYIk7NI4.jpg",
      original_language: "en",
      original_title: "Colossal",
      genre_ids: [28, 35, 18, 14, 878],
      backdrop_path: "/y5qDjStKZ6y4IHQDhJGMlfZwH92.jpg",
      adult: false,
      overview:
        "A woman discovers that severe catastrophic events are somehow connected to the mental breakdown from which she's suffering.",
      release_date: "2017-02-23"
    },
    {
      vote_count: 152,
      id: 397837,
      video: false,
      vote_average: 6.2,
      title: "Before I Fall",
      popularity: 7.130294,
      poster_path: "/eowzonDJMCuNXoJGVkP9Z7oCmiM.jpg",
      original_language: "en",
      original_title: "Before I Fall",
      genre_ids: [18, 9648, 53],
      backdrop_path: "/l0KTMyzgXGKYd7xR8YgFCxlA5pU.jpg",
      adult: false,
      overview:
        "Samantha Kingston has everything. Then, everything changes. After one fateful night, she wakes up with no future at all. Trapped into reliving the same day over and over, she begins to question just how perfect her life really was.",
      release_date: "2017-03-03"
    },
    {
      vote_count: 461,
      id: 397243,
      video: false,
      vote_average: 6.4,
      title: "The Autopsy of Jane Doe",
      popularity: 6.458524,
      poster_path: "/hvQgtEMXzQZDCZkkLFPK6cO1FIy.jpg",
      original_language: "en",
      original_title: "The Autopsy of Jane Doe",
      genre_ids: [27, 9648],
      backdrop_path: "/m4LtS8NoVvbl57mej9KBg9QT4fg.jpg",
      adult: false,
      overview:
        'Father and son coroners who receive a mysterious homicide victim with no apparent cause of death. As they attempt to identify the beautiful young "Jane Doe," they discover increasingly bizarre clues that hold the key to her terrifying secrets.',
      release_date: "2016-12-21"
    },
    {
      vote_count: 677,
      id: 258230,
      video: false,
      vote_average: 6.5,
      title: "A Monster Calls",
      popularity: 6.181292,
      poster_path: "/vdHUj9cyRe7fIYdJFMyc7elnawC.jpg",
      original_language: "en",
      original_title: "A Monster Calls",
      genre_ids: [18, 14],
      backdrop_path: "/xVW8REyVqKwxAtUYY07UGlZH43L.jpg",
      adult: false,
      overview:
        "A boy attempts to deal with his mother's illness and the bullying of his classmates by escaping to a fantastical world.",
      release_date: "2016-10-07"
    },
    {
      vote_count: 132,
      id: 345938,
      video: false,
      vote_average: 6.6,
      title: "The Shack",
      popularity: 5.637161,
      poster_path: "/doAzav9kfdtsoSdw1MDFvjKq3J4.jpg",
      original_language: "en",
      original_title: "The Shack",
      genre_ids: [18, 14],
      backdrop_path: "/yum211HuasjazYsTabZPTNSHc1a.jpg",
      adult: false,
      overview:
        "After suffering a family tragedy, Mack Phillips spirals into a deep depression causing him to question his innermost beliefs. Facing a crisis of faith, he receives a mysterious letter urging him to an abandoned shack deep in the Oregon wilderness. Despite his doubts, Mack journeys to the shack and encounters an enigmatic trio of strangers led by a woman named Papa. Through this meeting, Mack finds important truths that will transform his understanding of his tragedy and change his life forever.",
      release_date: "2017-03-03"
    }
  ]
};

const MoviesReducer = (state: stateType = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_MOVIES:
      return loop(
        {
          ...state,
          loading_data: true
        },
        Effects.promise(load_latest_movies)
      );
    case MOVIES_LOADED:
      return {
        ...state,
        loading_data: false,
        loading_failed: false,
        movies: payload
      };
    case MOVIES_LOADING_FAILED:
      return {
        ...state,
        loading_data: false,
        loading_failed: false
      };
    default:
      return state;
  }
};

export default MoviesReducer;
