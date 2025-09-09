type Team = {
  name: string;
  year: string;
};

export type WhereHePlayer = {
  firstName: string;
  lastName: string;
  teams: Team[];
  position: string;
};

export const players: WhereHePlayer[] = [
  // QBs
  {
    firstName: "Aaron",
    lastName: "Rodgers",
    teams: [
      { name: "Packers", year: "2005-2022" },
      { name: "Jets", year: "2023-" }
    ],
    position: "QB"
  },
  {
    firstName: "Tom",
    lastName: "Brady",
    teams: [
      { name: "Patriots", year: "2000-2019" },
      { name: "Buccaneers", year: "2020-2022" }
    ],
    position: "QB"
  },
  {
    firstName: "Peyton",
    lastName: "Manning",
    teams: [
      { name: "Colts", year: "1998-2010" },
      { name: "Broncos", year: "2012-2015" }
    ],
    position: "QB"
  },
  {
    firstName: "Drew",
    lastName: "Brees",
    teams: [
      { name: "Chargers", year: "2001-2005" },
      { name: "Saints", year: "2006-2020" }
    ],
    position: "QB"
  },
  {
    firstName: "Brett",
    lastName: "Favre",
    teams: [
      { name: "Falcons", year: "1991" },
      { name: "Packers", year: "1992-2007" },
      { name: "Jets", year: "2008" },
      { name: "Vikings", year: "2009-2010" }
    ],
    position: "QB"
  },
  {
    firstName: "Joe",
    lastName: "Montana",
    teams: [
      { name: "49ers", year: "1979-1992" },
      { name: "Chiefs", year: "1993-1994" }
    ],
    position: "QB"
  },
  {
    firstName: "Steve",
    lastName: "Young",
    teams: [
      { name: "Buccaneers", year: "1985-1986" },
      { name: "49ers", year: "1987-1999" }
    ],
    position: "QB"
  },
  {
    firstName: "Dan",
    lastName: "Marino",
    teams: [{ name: "Dolphins", year: "1983-1999" }],
    position: "QB"
  },
  {
    firstName: "John",
    lastName: "Elway",
    teams: [{ name: "Broncos", year: "1983-1998" }],
    position: "QB"
  },
  {
    firstName: "Patrick",
    lastName: "Mahomes",
    teams: [{ name: "Chiefs", year: "2017-" }],
    position: "QB"
  },
  {
    firstName: "Josh",
    lastName: "Allen",
    teams: [{ name: "Bills", year: "2018-" }],
    position: "QB"
  },
  {
    firstName: "Joe",
    lastName: "Burrow",
    teams: [{ name: "Bengals", year: "2020-" }],
    position: "QB"
  },
  {
    firstName: "Justin",
    lastName: "Herbert",
    teams: [{ name: "Chargers", year: "2020-" }],
    position: "QB"
  },
  {
    firstName: "Lamar",
    lastName: "Jackson",
    teams: [{ name: "Ravens", year: "2018-" }],
    position: "QB"
  },
  {
    firstName: "Jalen",
    lastName: "Hurts",
    teams: [{ name: "Eagles", year: "2020-" }],
    position: "QB"
  },
  {
    firstName: "Matthew",
    lastName: "Stafford",
    teams: [
      { name: "Lions", year: "2009-2020" },
      { name: "Rams", year: "2021-" }
    ],
    position: "QB"
  },
  {
    firstName: "Kirk",
    lastName: "Cousins",
    teams: [
      { name: "Commanders", year: "2012-2017" },
      { name: "Vikings", year: "2018-2023" },
      { name: "Falcons", year: "2024-" }
    ],
    position: "QB"
  },
  {
    firstName: "Russell",
    lastName: "Wilson",
    teams: [
      { name: "Seahawks", year: "2012-2021" },
      { name: "Broncos", year: "2022-2023" },
      { name: "Steelers", year: "2024-" }
    ],
    position: "QB"
  },
  {
    firstName: "Alex",
    lastName: "Smith",
    teams: [
      { name: "49ers", year: "2005-2012" },
      { name: "Chiefs", year: "2013-2017" },
      { name: "Commanders", year: "2018-2020" }
    ],
    position: "QB"
  },
  {
    firstName: "Cam",
    lastName: "Newton",
    teams: [
      { name: "Panthers", year: "2011-2019" },
      { name: "Patriots", year: "2020" },
      { name: "Panthers", year: "2021" }
    ],
    position: "QB"
  },
  {
    firstName: "Philip",
    lastName: "Rivers",
    teams: [
      { name: "Chargers", year: "2004-2019" },
      { name: "Colts", year: "2020" }
    ],
    position: "QB"
  },
  {
    firstName: "Eli",
    lastName: "Manning",
    teams: [{ name: "Giants", year: "2004-2019" }],
    position: "QB"
  },
  {
    firstName: "Ben",
    lastName: "Roethlisberger",
    teams: [{ name: "Steelers", year: "2004-2021" }],
    position: "QB"
  },
  {
    firstName: "Jared",
    lastName: "Goff",
    teams: [
      { name: "Rams", year: "2016-2020" },
      { name: "Lions", year: "2021-" }
    ],
    position: "QB"
  },
  {
    firstName: "Deshaun",
    lastName: "Watson",
    teams: [
      { name: "Texans", year: "2017-2021" },
      { name: "Browns", year: "2022-" }
    ],
    position: "QB"
  },
  {
    firstName: "Dak",
    lastName: "Prescott",
    teams: [{ name: "Cowboys", year: "2016-" }],
    position: "QB"
  },
  {
    firstName: "Tua",
    lastName: "Tagovailoa",
    teams: [{ name: "Dolphins", year: "2020-" }],
    position: "QB"
  },
  {
    firstName: "Geno",
    lastName: "Smith",
    teams: [
      { name: "Jets", year: "2013-2016" },
      { name: "Giants", year: "2017" },
      { name: "Chargers", year: "2018-2019" },
      { name: "Seahawks", year: "2019-" }
    ],
    position: "QB"
  },

  // RBs
  {
    firstName: "Adrian",
    lastName: "Peterson",
    teams: [
      { name: "Vikings", year: "2007-2016" },
      { name: "Saints", year: "2017" },
      { name: "Cardinals", year: "2017" },
      { name: "Commanders", year: "2018-2019" },
      { name: "Lions", year: "2020" },
      { name: "Titans", year: "2021" },
      { name: "Seahawks", year: "2021" }
    ],
    position: "RB"
  },
  {
    firstName: "Frank",
    lastName: "Gore",
    teams: [
      { name: "49ers", year: "2005-2014" },
      { name: "Colts", year: "2015-2017" },
      { name: "Dolphins", year: "2018" },
      { name: "Bills", year: "2019" },
      { name: "Jets", year: "2020" }
    ],
    position: "RB"
  },
  {
    firstName: "Marshawn",
    lastName: "Lynch",
    teams: [
      { name: "Bills", year: "2007-2010" },
      { name: "Seahawks", year: "2010-2015" },
      { name: "Raiders", year: "2017-2018" },
      { name: "Seahawks", year: "2019" }
    ],
    position: "RB"
  },
  {
    firstName: "LaDainian",
    lastName: "Tomlinson",
    teams: [
      { name: "Chargers", year: "2001-2009" },
      { name: "Jets", year: "2010-2011" }
    ],
    position: "RB"
  },
  {
    firstName: "LeSean",
    lastName: "McCoy",
    teams: [
      { name: "Eagles", year: "2009-2014" },
      { name: "Bills", year: "2015-2018" },
      { name: "Chiefs", year: "2019" },
      { name: "Buccaneers", year: "2020" }
    ],
    position: "RB"
  },
  {
    firstName: "Derrick",
    lastName: "Henry",
    teams: [
      { name: "Titans", year: "2016-2023" },
      { name: "Ravens", year: "2024-" }
    ],
    position: "RB"
  },
  {
    firstName: "Christian",
    lastName: "McCaffrey",
    teams: [
      { name: "Panthers", year: "2017-2022" },
      { name: "49ers", year: "2022-" }
    ],
    position: "RB"
  },
  {
    firstName: "Nick",
    lastName: "Chubb",
    teams: [{ name: "Browns", year: "2018-" }],
    position: "RB"
  },
  {
    firstName: "Ezekiel",
    lastName: "Elliott",
    teams: [
      { name: "Cowboys", year: "2016-2022" },
      { name: "Patriots", year: "2023" },
      { name: "Cowboys", year: "2024-" }
    ],
    position: "RB"
  },
  {
    firstName: "Saquon",
    lastName: "Barkley",
    teams: [
      { name: "Giants", year: "2018-2023" },
      { name: "Eagles", year: "2024-" }
    ],
    position: "RB"
  },
  {
    firstName: "Alvin",
    lastName: "Kamara",
    teams: [{ name: "Saints", year: "2017-" }],
    position: "RB"
  },
  {
    firstName: "Jonathan",
    lastName: "Taylor",
    teams: [{ name: "Colts", year: "2020-" }],
    position: "RB"
  },
  {
    firstName: "Jamaal",
    lastName: "Charles",
    teams: [
      { name: "Chiefs", year: "2008-2016" },
      { name: "Broncos", year: "2017" },
      { name: "Jaguars", year: "2018" }
    ],
    position: "RB"
  },
  {
    firstName: "Le'Veon",
    lastName: "Bell",
    teams: [
      { name: "Steelers", year: "2013-2017" },
      { name: "Jets", year: "2019-2020" },
      { name: "Chiefs", year: "2020" },
      { name: "Ravens", year: "2021" }
    ],
    position: "RB"
  },
  {
    firstName: "Todd",
    lastName: "Gurley",
    teams: [
      { name: "Rams", year: "2015-2019" },
      { name: "Falcons", year: "2020" }
    ],
    position: "RB"
  },

  // WRs
  {
    firstName: "Jerry",
    lastName: "Rice",
    teams: [
      { name: "49ers", year: "1985-2000" },
      { name: "Raiders", year: "2001-2004" },
      { name: "Seahawks", year: "2004" }
    ],
    position: "WR"
  },
  {
    firstName: "Randy",
    lastName: "Moss",
    teams: [
      { name: "Vikings", year: "1998-2004" },
      { name: "Raiders", year: "2005-2006" },
      { name: "Patriots", year: "2007-2010" },
      { name: "Vikings", year: "2010" },
      { name: "Titans", year: "2010" },
      { name: "49ers", year: "2012" }
    ],
    position: "WR"
  },
  {
    firstName: "Terrell",
    lastName: "Owens",
    teams: [
      { name: "49ers", year: "1996-2003" },
      { name: "Eagles", year: "2004-2005" },
      { name: "Cowboys", year: "2006-2008" },
      { name: "Bills", year: "2009" },
      { name: "Bengals", year: "2010" }
    ],
    position: "WR"
  },
  {
    firstName: "Larry",
    lastName: "Fitzgerald",
    teams: [{ name: "Cardinals", year: "2004-2020" }],
    position: "WR"
  },
  {
    firstName: "Calvin",
    lastName: "Johnson",
    teams: [{ name: "Lions", year: "2007-2015" }],
    position: "WR"
  },
  {
    firstName: "Antonio",
    lastName: "Brown",
    teams: [
      { name: "Steelers", year: "2010-2018" },
      { name: "Patriots", year: "2019" },
      { name: "Buccaneers", year: "2020-2021" }
    ],
    position: "WR"
  },
  {
    firstName: "DeAndre",
    lastName: "Hopkins",
    teams: [
      { name: "Texans", year: "2013-2019" },
      { name: "Cardinals", year: "2020-2022" },
      { name: "Titans", year: "2023-" }
    ],
    position: "WR"
  },
  {
    firstName: "Stefon",
    lastName: "Diggs",
    teams: [
      { name: "Vikings", year: "2015-2019" },
      { name: "Bills", year: "2020-2023" },
      { name: "Texans", year: "2024-" }
    ],
    position: "WR"
  },
  {
    firstName: "Tyreek",
    lastName: "Hill",
    teams: [
      { name: "Chiefs", year: "2016-2021" },
      { name: "Dolphins", year: "2022-" }
    ],
    position: "WR"
  },
  {
    firstName: "Davante",
    lastName: "Adams",
    teams: [
      { name: "Packers", year: "2014-2021" },
      { name: "Raiders", year: "2022-2024" },
      { name: "Jets", year: "2024" },
      { name: "Rams", year: "2025" }
    ],
    position: "WR"
  },
  {
    firstName: "Justin",
    lastName: "Jefferson",
    teams: [{ name: "Vikings", year: "2020-" }],
    position: "WR"
  },
  {
    firstName: "Ja'Marr",
    lastName: "Chase",
    teams: [{ name: "Bengals", year: "2021-" }],
    position: "WR"
  },
  {
    firstName: "Amon-Ra",
    lastName: "St. Brown",
    teams: [{ name: "Lions", year: "2021-" }],
    position: "WR"
  },
  {
    firstName: "Mike",
    lastName: "Evans",
    teams: [{ name: "Buccaneers", year: "2014-" }],
    position: "WR"
  },
  {
    firstName: "Keenan",
    lastName: "Allen",
    teams: [
      { name: "Chargers", year: "2013-2023" },
      { name: "Bears", year: "2024-" }
    ],
    position: "WR"
  },
  {
    firstName: "Brandon",
    lastName: "Marshall",
    teams: [
      { name: "Broncos", year: "2006-2009" },
      { name: "Dolphins", year: "2010-2011" },
      { name: "Bears", year: "2012-2014" },
      { name: "Jets", year: "2015-2016" },
      { name: "Giants", year: "2017" },
      { name: "Seahawks", year: "2018" },
      { name: "Saints", year: "2018" }
    ],
    position: "WR"
  },
  {
    firstName: "Julian",
    lastName: "Edelman",
    teams: [{ name: "Patriots", year: "2009-2020" }],
    position: "WR"
  },
  {
    firstName: "Deebo",
    lastName: "Samuel",
    teams: [{ name: "49ers", year: "2019-" }],
    position: "WR"
  },
  {
    firstName: "CeeDee",
    lastName: "Lamb",
    teams: [{ name: "Cowboys", year: "2020-" }],
    position: "WR"
  },
  {
    firstName: "DK",
    lastName: "Metcalf",
    teams: [{ name: "Seahawks", year: "2019-" }],
    position: "WR"
  },
  {
    firstName: "Odell",
    lastName: "Beckham",
    teams: [
      { name: "Giants", year: "2014-2018" },
      { name: "Browns", year: "2019-2021" },
      { name: "Rams", year: "2021" },
      { name: "Ravens", year: "2023" },
      { name: "Dolphins", year: "2024-" }
    ],
    position: "WR"
  },
  {
    firstName: "A.J.",
    lastName: "Brown",
    teams: [
      { name: "Titans", year: "2019-2021" },
      { name: "Eagles", year: "2022-" }
    ],
    position: "WR"
  },
  {
    firstName: "Amari",
    lastName: "Cooper",
    teams: [
      { name: "Raiders", year: "2015-2018" },
      { name: "Cowboys", year: "2018-2021" },
      { name: "Browns", year: "2022-" }
    ],
    position: "WR"
  },
  {
    firstName: "Robert",
    lastName: "Woods",
    teams: [
      { name: "Bills", year: "2013-2016" },
      { name: "Rams", year: "2017-2021" },
      { name: "Titans", year: "2022" },
      { name: "Texans", year: "2023-2024" }
    ],
    position: "WR"
  },
  {
    firstName: "Michael",
    lastName: "Thomas",
    teams: [{ name: "Saints", year: "2016-2023" }],
    position: "WR"
  },

  // TEs
  {
    firstName: "Rob",
    lastName: "Gronkowski",
    teams: [
      { name: "Patriots", year: "2010-2018" },
      { name: "Buccaneers", year: "2020-2021" }
    ],
    position: "TE"
  },
  {
    firstName: "Travis",
    lastName: "Kelce",
    teams: [{ name: "Chiefs", year: "2013-" }],
    position: "TE"
  },
  {
    firstName: "George",
    lastName: "Kittle",
    teams: [{ name: "49ers", year: "2017-" }],
    position: "TE"
  },
  {
    firstName: "Antonio",
    lastName: "Gates",
    teams: [{ name: "Chargers", year: "2003-2018" }],
    position: "TE"
  },
  {
    firstName: "Tony",
    lastName: "Gonzalez",
    teams: [
      { name: "Chiefs", year: "1997-2008" },
      { name: "Falcons", year: "2009-2013" }
    ],
    position: "TE"
  },
  {
    firstName: "Jason",
    lastName: "Witten",
    teams: [
      { name: "Cowboys", year: "2003-2017" },
      { name: "Cowboys", year: "2019" },
      { name: "Raiders", year: "2020" }
    ],
    position: "TE"
  },
  {
    firstName: "Greg",
    lastName: "Olsen",
    teams: [
      { name: "Bears", year: "2007-2010" },
      { name: "Panthers", year: "2011-2019" },
      { name: "Seahawks", year: "2020" }
    ],
    position: "TE"
  },
  {
    firstName: "Zach",
    lastName: "Ertz",
    teams: [
      { name: "Eagles", year: "2013-2021" },
      { name: "Cardinals", year: "2021-2023" },
      { name: "Commanders", year: "2024-" }
    ],
    position: "TE"
  },

  // Defense
  {
    firstName: "J.J.",
    lastName: "Watt",
    teams: [
      { name: "Texans", year: "2011-2020" },
      { name: "Cardinals", year: "2021-2022" }
    ],
    position: "DE"
  },
  {
    firstName: "T.J.",
    lastName: "Watt",
    teams: [{ name: "Steelers", year: "2017-" }],
    position: "EDGE"
  },
  {
    firstName: "Aaron",
    lastName: "Donald",
    teams: [{ name: "Rams", year: "2014-2023" }],
    position: "DT"
  },
  {
    firstName: "Von",
    lastName: "Miller",
    teams: [
      { name: "Broncos", year: "2011-2021" },
      { name: "Rams", year: "2021" },
      { name: "Bills", year: "2022-" }
    ],
    position: "EDGE"
  },
  {
    firstName: "Khalil",
    lastName: "Mack",
    teams: [
      { name: "Raiders", year: "2014-2017" },
      { name: "Bears", year: "2018-2021" },
      { name: "Chargers", year: "2022-" }
    ],
    position: "EDGE"
  },
  {
    firstName: "Richard",
    lastName: "Sherman",
    teams: [
      { name: "Seahawks", year: "2011-2017" },
      { name: "49ers", year: "2018-2020" },
      { name: "Buccaneers", year: "2021" }
    ],
    position: "CB"
  },
  {
    firstName: "Patrick",
    lastName: "Peterson",
    teams: [
      { name: "Cardinals", year: "2011-2020" },
      { name: "Vikings", year: "2021-2022" },
      { name: "Steelers", year: "2023-2024" }
    ],
    position: "CB"
  },
  {
    firstName: "Luke",
    lastName: "Kuechly",
    teams: [{ name: "Panthers", year: "2012-2019" }],
    position: "LB"
  },
  {
    firstName: "Ray",
    lastName: "Lewis",
    teams: [{ name: "Ravens", year: "1996-2012" }],
    position: "LB"
  },
  {
    firstName: "Brian",
    lastName: "Urlacher",
    teams: [{ name: "Bears", year: "2000-2012" }],
    position: "LB"
  },
  {
    firstName: "Troy",
    lastName: "Polamalu",
    teams: [{ name: "Steelers", year: "2003-2014" }],
    position: "S"
  },
  {
    firstName: "Ed",
    lastName: "Reed",
    teams: [
      { name: "Ravens", year: "2002-2012" },
      { name: "Texans", year: "2013" },
      { name: "Jets", year: "2013" }
    ],
    position: "S"
  },
  {
    firstName: "Charles",
    lastName: "Woodson",
    teams: [
      { name: "Raiders", year: "1998-2005" },
      { name: "Packers", year: "2006-2012" },
      { name: "Raiders", year: "2013-2015" }
    ],
    position: "DB"
  },
  {
    firstName: "Champ",
    lastName: "Bailey",
    teams: [
      { name: "Commanders", year: "1999-2003" },
      { name: "Broncos", year: "2004-2013" }
    ],
    position: "CB"
  },
  {
    firstName: "Nnamdi",
    lastName: "Asomugha",
    teams: [
      { name: "Raiders", year: "2003-2010" },
      { name: "Eagles", year: "2011-2012" },
      { name: "49ers", year: "2013" }
    ],
    position: "CB"
  },
  {
    firstName: "Devin",
    lastName: "McCourty",
    teams: [{ name: "Patriots", year: "2010-2022" }],
    position: "S"
  },
  {
    firstName: "Stephon",
    lastName: "Gilmore",
    teams: [
      { name: "Bills", year: "2012-2016" },
      { name: "Patriots", year: "2017-2020" },
      { name: "Panthers", year: "2021" },
      { name: "Colts", year: "2022" },
      { name: "Cowboys", year: "2023" }
    ],
    position: "CB"
  },
  {
    firstName: "Sauce",
    lastName: "Gardner",
    teams: [{ name: "Jets", year: "2022-" }],
    position: "CB"
  },
  {
    firstName: "Adam",
    lastName: "Vinatieri",
    teams: [
      { name: "Patriots", year: "1996-2005" },
      { name: "Colts", year: "2006-2019" }
    ],
    position: "K"
  },
  // QBs
  {
    firstName: "Kurt",
    lastName: "Warner",
    teams: [
      { name: "Rams", year: "1998-2003" },
      { name: "Giants", year: "2004" },
      { name: "Cardinals", year: "2005-2009" }
    ],
    position: "QB"
  },
  {
    firstName: "Warren",
    lastName: "Moon",
    teams: [
      { name: "Oilers", year: "1984-1993" },
      { name: "Vikings", year: "1994-1996" },
      { name: "Seahawks", year: "1997-1998" },
      { name: "Chiefs", year: "1999-2000" }
    ],
    position: "QB"
  },
  {
    firstName: "Michael",
    lastName: "Vick",
    teams: [
      { name: "Falcons", year: "2001-2006" },
      { name: "Eagles", year: "2009-2013" },
      { name: "Jets", year: "2014" },
      { name: "Steelers", year: "2015" }
    ],
    position: "QB"
  },
  {
    firstName: "Matt",
    lastName: "Ryan",
    teams: [
      { name: "Falcons", year: "2008-2021" },
      { name: "Colts", year: "2022" }
    ],
    position: "QB"
  },
  {
    firstName: "Tony",
    lastName: "Romo",
    teams: [{ name: "Cowboys", year: "2003-2016" }],
    position: "QB"
  },
  {
    firstName: "Drew",
    lastName: "Bledsoe",
    teams: [
      { name: "Patriots", year: "1993-2001" },
      { name: "Bills", year: "2002-2004" },
      { name: "Cowboys", year: "2005-2006" }
    ],
    position: "QB"
  },
  {
    firstName: "Nick",
    lastName: "Foles",
    teams: [
      { name: "Eagles", year: "2012-2014" },
      { name: "Rams", year: "2015" },
      { name: "Chiefs", year: "2016" },
      { name: "Eagles", year: "2017-2018" },
      { name: "Jaguars", year: "2019" },
      { name: "Bears", year: "2020-2021" },
      { name: "Colts", year: "2022" }
    ],
    position: "QB"
  },
  {
    firstName: "Ryan",
    lastName: "Fitzpatrick",
    teams: [
      { name: "Rams", year: "2005-2006" },
      { name: "Bengals", year: "2007" },
      { name: "Bills", year: "2009-2012" },
      { name: "Titans", year: "2013" },
      { name: "Texans", year: "2014" },
      { name: "Jets", year: "2015-2016" },
      { name: "Buccaneers", year: "2017-2018" },
      { name: "Dolphins", year: "2019-2020" },
      { name: "Commanders", year: "2021" }
    ],
    position: "QB"
  },
  {
    firstName: "Carson",
    lastName: "Palmer",
    teams: [
      { name: "Bengals", year: "2004-2010" },
      { name: "Raiders", year: "2011-2012" },
      { name: "Cardinals", year: "2013-2017" }
    ],
    position: "QB"
  },
  {
    firstName: "Steve",
    lastName: "McNair",
    teams: [
      { name: "Oilers", year: "1995-1996" },
      { name: "Titans", year: "1997-2005" },
      { name: "Ravens", year: "2006-2007" }
    ],
    position: "QB"
  },
  {
    firstName: "Randall",
    lastName: "Cunningham",
    teams: [
      { name: "Eagles", year: "1985-1995" },
      { name: "Vikings", year: "1997-1999" },
      { name: "Cowboys", year: "2000" },
      { name: "Ravens", year: "2001" }
    ],
    position: "QB"
  },
  {
    firstName: "Jim",
    lastName: "Kelly",
    teams: [{ name: "Bills", year: "1986-1996" }],
    position: "QB"
  },

  // RBs
  {
    firstName: "Bo",
    lastName: "Jackson",
    teams: [{ name: "Raiders", year: "1987-1990" }],
    position: "RB"
  },
  {
    firstName: "Priest",
    lastName: "Holmes",
    teams: [
      { name: "Ravens", year: "1997-2000" },
      { name: "Chiefs", year: "2001-2007" }
    ],
    position: "RB"
  },
  {
    firstName: "Edgerrin",
    lastName: "James",
    teams: [
      { name: "Colts", year: "1999-2005" },
      { name: "Cardinals", year: "2006-2008" },
      { name: "Seahawks", year: "2009" }
    ],
    position: "RB"
  },
  {
    firstName: "Shaun",
    lastName: "Alexander",
    teams: [
      { name: "Seahawks", year: "2000-2007" },
      { name: "Commanders", year: "2008" }
    ],
    position: "RB"
  },
  {
    firstName: "Chris",
    lastName: "Johnson",
    teams: [
      { name: "Titans", year: "2008-2013" },
      { name: "Jets", year: "2014" },
      { name: "Cardinals", year: "2015-2017" }
    ],
    position: "RB"
  },
  {
    firstName: "Maurice",
    lastName: "Jones-Drew",
    teams: [
      { name: "Jaguars", year: "2006-2013" },
      { name: "Raiders", year: "2014" }
    ],
    position: "RB"
  },
  {
    firstName: "LeGarrette",
    lastName: "Blount",
    teams: [
      { name: "Buccaneers", year: "2010-2012" },
      { name: "Patriots", year: "2013" },
      { name: "Steelers", year: "2014" },
      { name: "Patriots", year: "2014-2016" },
      { name: "Eagles", year: "2017" },
      { name: "Lions", year: "2018" }
    ],
    position: "RB"
  },
  {
    firstName: "Brandon",
    lastName: "Jacobs",
    teams: [
      { name: "Giants", year: "2005-2011" },
      { name: "49ers", year: "2012" },
      { name: "Giants", year: "2013" }
    ],
    position: "RB"
  },

  // WRs
  {
    firstName: "T.Y.",
    lastName: "Hilton",
    teams: [
      { name: "Colts", year: "2012-2021" },
      { name: "Cowboys", year: "2022" }
    ],
    position: "WR"
  },
  {
    firstName: "Emmanuel",
    lastName: "Sanders",
    teams: [
      { name: "Steelers", year: "2010-2013" },
      { name: "Broncos", year: "2014-2019" },
      { name: "49ers", year: "2019" },
      { name: "Saints", year: "2020" },
      { name: "Bills", year: "2021" }
    ],
    position: "WR"
  },
  {
    firstName: "Allen",
    lastName: "Robinson",
    teams: [
      { name: "Jaguars", year: "2014-2017" },
      { name: "Bears", year: "2018-2021" },
      { name: "Rams", year: "2022" },
      { name: "Steelers", year: "2023" }
    ],
    position: "WR"
  },
  {
    firstName: "Brandon",
    lastName: "Cooks",
    teams: [
      { name: "Saints", year: "2014-2016" },
      { name: "Patriots", year: "2017" },
      { name: "Rams", year: "2018-2019" },
      { name: "Texans", year: "2020-2022" },
      { name: "Cowboys", year: "2023-2024" },
      { name: "Saints", year: "2025-" }
    ],
    position: "WR"
  },
  {
    firstName: "Golden",
    lastName: "Tate",
    teams: [
      { name: "Seahawks", year: "2010-2013" },
      { name: "Lions", year: "2014-2018" },
      { name: "Eagles", year: "2018" },
      { name: "Giants", year: "2019-2020" }
    ],
    position: "WR"
  },
  {
    firstName: "Anquan",
    lastName: "Boldin",
    teams: [
      { name: "Cardinals", year: "2003-2009" },
      { name: "Ravens", year: "2010-2012" },
      { name: "49ers", year: "2013-2015" },
      { name: "Lions", year: "2016" }
    ],
    position: "WR"
  },
  {
    firstName: "Wes",
    lastName: "Welker",
    teams: [
      { name: "Dolphins", year: "2004-2006" },
      { name: "Patriots", year: "2007-2012" },
      { name: "Broncos", year: "2013-2014" },
      { name: "Rams", year: "2015" }
    ],
    position: "WR"
  },

  // TEs
  {
    firstName: "Darren",
    lastName: "Waller",
    teams: [
      { name: "Ravens", year: "2015-2018" },
      { name: "Raiders", year: "2018-2022" },
      { name: "Giants", year: "2023-2024" }
    ],
    position: "TE"
  },
  {
    firstName: "Dallas",
    lastName: "Clark",
    teams: [
      { name: "Colts", year: "2003-2011" },
      { name: "Buccaneers", year: "2012" },
      { name: "Ravens", year: "2013" }
    ],
    position: "TE"
  },
  {
    firstName: "Jimmy",
    lastName: "Graham",
    teams: [
      { name: "Saints", year: "2010-2014" },
      { name: "Seahawks", year: "2015-2017" },
      { name: "Packers", year: "2018-2019" },
      { name: "Bears", year: "2020-2021" },
      { name: "Saints", year: "2023" }
    ],
    position: "TE"
  },
  {
    firstName: "Jared",
    lastName: "Cook",
    teams: [
      { name: "Titans", year: "2009-2012" },
      { name: "Rams", year: "2013-2015" },
      { name: "Packers", year: "2016" },
      { name: "Raiders", year: "2017-2018" },
      { name: "Saints", year: "2019-2020" },
      { name: "Chargers", year: "2021" }
    ],
    position: "TE"
  },

  // DL/EDGE/LB/DB
  {
    firstName: "Ndamukong",
    lastName: "Suh",
    teams: [
      { name: "Lions", year: "2010-2014" },
      { name: "Dolphins", year: "2015-2017" },
      { name: "Rams", year: "2018" },
      { name: "Buccaneers", year: "2019-2021" },
      { name: "Eagles", year: "2022" }
    ],
    position: "DT"
  },
  {
    firstName: "Richard",
    lastName: "Seymour",
    teams: [
      { name: "Patriots", year: "2001-2008" },
      { name: "Raiders", year: "2009-2012" }
    ],
    position: "DL"
  },
  {
    firstName: "Dwight",
    lastName: "Freeney",
    teams: [
      { name: "Colts", year: "2002-2012" },
      { name: "Chargers", year: "2013-2014" },
      { name: "Cardinals", year: "2015" },
      { name: "Falcons", year: "2016" },
      { name: "Seahawks", year: "2017" },
      { name: "Lions", year: "2017" }
    ],
    position: "EDGE"
  },
  {
    firstName: "Julius",
    lastName: "Peppers",
    teams: [
      { name: "Panthers", year: "2002-2009" },
      { name: "Bears", year: "2010-2013" },
      { name: "Packers", year: "2014-2016" },
      { name: "Panthers", year: "2017-2018" }
    ],
    position: "EDGE"
  },
  {
    firstName: "Cameron",
    lastName: "Jordan",
    teams: [{ name: "Saints", year: "2011-" }],
    position: "DE"
  },
  {
    firstName: "Myles",
    lastName: "Garrett",
    teams: [{ name: "Browns", year: "2017-" }],
    position: "EDGE"
  },
  {
    firstName: "Michael",
    lastName: "Strahan",
    teams: [{ name: "Giants", year: "1993-2007" }],
    position: "DE"
  },
  {
    firstName: "DeMarcus",
    lastName: "Ware",
    teams: [
      { name: "Cowboys", year: "2005-2013" },
      { name: "Broncos", year: "2014-2016" }
    ],
    position: "EDGE"
  },
  {
    firstName: "Clay",
    lastName: "Matthews",
    teams: [
      { name: "Packers", year: "2009-2018" },
      { name: "Rams", year: "2019" }
    ],
    position: "LB"
  },
  {
    firstName: "Joey",
    lastName: "Bosa",
    teams: [{ name: "Chargers", year: "2016-" }],
    position: "EDGE"
  },
  {
    firstName: "Nick",
    lastName: "Bosa",
    teams: [{ name: "49ers", year: "2019-" }],
    position: "EDGE"
  },
  {
    firstName: "Patrick",
    lastName: "Willis",
    teams: [{ name: "49ers", year: "2007-2014" }],
    position: "LB"
  },
  {
    firstName: "NaVorro",
    lastName: "Bowman",
    teams: [
      { name: "49ers", year: "2010-2017" },
      { name: "Raiders", year: "2017" }
    ],
    position: "LB"
  },
  {
    firstName: "James",
    lastName: "Harrison",
    teams: [
      { name: "Steelers", year: "2002-2012" },
      { name: "Bengals", year: "2013" },
      { name: "Steelers", year: "2014-2017" },
      { name: "Patriots", year: "2017" }
    ],
    position: "LB"
  },
  {
    firstName: "Aqib",
    lastName: "Talib",
    teams: [
      { name: "Buccaneers", year: "2008-2012" },
      { name: "Patriots", year: "2012-2013" },
      { name: "Broncos", year: "2014-2017" },
      { name: "Rams", year: "2018-2019" }
    ],
    position: "CB"
  },
  {
    firstName: "Kam",
    lastName: "Chancellor",
    teams: [{ name: "Seahawks", year: "2010-2018" }],
    position: "S"
  },
  {
    firstName: "Earl",
    lastName: "Thomas",
    teams: [
      { name: "Seahawks", year: "2010-2018" },
      { name: "Ravens", year: "2019-2020" }
    ],
    position: "S"
  },
  {
    firstName: "Jamal",
    lastName: "Adams",
    teams: [
      { name: "Jets", year: "2017-2019" },
      { name: "Seahawks", year: "2020-" }
    ],
    position: "S"
  },
  {
    firstName: "Harrison",
    lastName: "Smith",
    teams: [{ name: "Vikings", year: "2012-" }],
    position: "S"
  },
  {
    firstName: "Minkah",
    lastName: "Fitzpatrick",
    teams: [
      { name: "Dolphins", year: "2018-2019" },
      { name: "Steelers", year: "2019-" }
    ],
    position: "S"
  },
  // Classic QBs
  {
    firstName: "Terry",
    lastName: "Bradshaw",
    teams: [{ name: "Steelers", year: "1970-1983" }],
    position: "QB"
  },
  {
    firstName: "Roger",
    lastName: "Staubach",
    teams: [{ name: "Cowboys", year: "1969-1979" }],
    position: "QB"
  },
  {
    firstName: "Bart",
    lastName: "Starr",
    teams: [{ name: "Packers", year: "1956-1971" }],
    position: "QB"
  },
  {
    firstName: "Johnny",
    lastName: "Unitas",
    teams: [
      { name: "Colts", year: "1956-1972" },
      { name: "Chargers", year: "1973" }
    ],
    position: "QB"
  },
  {
    firstName: "Fran",
    lastName: "Tarkenton",
    teams: [
      { name: "Vikings", year: "1961-1966" },
      { name: "Giants", year: "1967-1971" },
      { name: "Vikings", year: "1972-1978" }
    ],
    position: "QB"
  },
  {
    firstName: "Ken",
    lastName: "Stabler",
    teams: [
      { name: "Raiders", year: "1970-1979" },
      { name: "Oilers", year: "1980-1981" },
      { name: "Saints", year: "1982-1984" }
    ],
    position: "QB"
  },
  {
    firstName: "Doug",
    lastName: "Williams",
    teams: [
      { name: "Buccaneers", year: "1978-1982" },
      { name: "Commanders", year: "1986-1989" }
    ],
    position: "QB"
  },
  {
    firstName: "Jim",
    lastName: "Plunkett",
    teams: [
      { name: "Patriots", year: "1971-1975" },
      { name: "49ers", year: "1976-1977" },
      { name: "Raiders", year: "1978-1986" }
    ],
    position: "QB"
  },
  {
    firstName: "Joe",
    lastName: "Namath",
    teams: [
      { name: "Jets", year: "1965-1976" },
      { name: "Rams", year: "1977" }
    ],
    position: "QB"
  },
  {
    firstName: "Otto",
    lastName: "Graham",
    teams: [{ name: "Browns", year: "1946-1955" }],
    position: "QB"
  },

  // RB legends
  {
    firstName: "Walter",
    lastName: "Payton",
    teams: [{ name: "Bears", year: "1975-1987" }],
    position: "RB"
  },
  {
    firstName: "Barry",
    lastName: "Sanders",
    teams: [{ name: "Lions", year: "1989-1998" }],
    position: "RB"
  },
  {
    firstName: "Emmitt",
    lastName: "Smith",
    teams: [
      { name: "Cowboys", year: "1990-2002" },
      { name: "Cardinals", year: "2003-2004" }
    ],
    position: "RB"
  },
  {
    firstName: "Eric",
    lastName: "Dickerson",
    teams: [
      { name: "Rams", year: "1983-1987" },
      { name: "Colts", year: "1987-1991" },
      { name: "Raiders", year: "1992" },
      { name: "Falcons", year: "1993" }
    ],
    position: "RB"
  },
  {
    firstName: "Gale",
    lastName: "Sayers",
    teams: [{ name: "Bears", year: "1965-1971" }],
    position: "RB"
  },
  {
    firstName: "Marcus",
    lastName: "Allen",
    teams: [
      { name: "Raiders", year: "1982-1992" },
      { name: "Chiefs", year: "1993-1997" }
    ],
    position: "RB"
  },
  {
    firstName: "Thurman",
    lastName: "Thomas",
    teams: [
      { name: "Bills", year: "1988-1999" },
      { name: "Dolphins", year: "2000" }
    ],
    position: "RB"
  },
  {
    firstName: "Jerome",
    lastName: "Bettis",
    teams: [
      { name: "Rams", year: "1993-1995" },
      { name: "Steelers", year: "1996-2005" }
    ],
    position: "RB"
  },
  {
    firstName: "Curtis",
    lastName: "Martin",
    teams: [
      { name: "Patriots", year: "1995-1997" },
      { name: "Jets", year: "1998-2005" }
    ],
    position: "RB"
  },

  // WR legends
  {
    firstName: "Cris",
    lastName: "Carter",
    teams: [
      { name: "Eagles", year: "1987-1989" },
      { name: "Vikings", year: "1990-2001" },
      { name: "Dolphins", year: "2002" }
    ],
    position: "WR"
  },
  {
    firstName: "Tim",
    lastName: "Brown",
    teams: [
      { name: "Raiders", year: "1988-2003" },
      { name: "Buccaneers", year: "2004" }
    ],
    position: "WR"
  },
  {
    firstName: "Steve",
    lastName: "Largent",
    teams: [{ name: "Seahawks", year: "1976-1989" }],
    position: "WR"
  },
  {
    firstName: "Andre",
    lastName: "Johnson",
    teams: [
      { name: "Texans", year: "2003-2014" },
      { name: "Colts", year: "2015" },
      { name: "Titans", year: "2016" }
    ],
    position: "WR"
  },
  {
    firstName: "Isaac",
    lastName: "Bruce",
    teams: [
      { name: "Rams", year: "1994-2007" },
      { name: "49ers", year: "2008-2009" }
    ],
    position: "WR"
  },
  {
    firstName: "Torry",
    lastName: "Holt",
    teams: [
      { name: "Rams", year: "1999-2008" },
      { name: "Jaguars", year: "2009" }
    ],
    position: "WR"
  },
  {
    firstName: "Chad",
    lastName: "Johnson",
    teams: [
      { name: "Bengals", year: "2001-2010" },
      { name: "Patriots", year: "2011" }
    ],
    position: "WR"
  },
  {
    firstName: "Roddy",
    lastName: "White",
    teams: [{ name: "Falcons", year: "2005-2015" }],
    position: "WR"
  },
  {
    firstName: "Steve",
    lastName: "Smith",
    teams: [
      { name: "Panthers", year: "2001-2013" },
      { name: "Ravens", year: "2014-2016" }
    ],
    position: "WR"
  },
  {
    firstName: "Santana",
    lastName: "Moss",
    teams: [
      { name: "Jets", year: "2001-2004" },
      { name: "Commanders", year: "2005-2014" }
    ],
    position: "WR"
  },

  // Defense legends
  {
    firstName: "Mean Joe",
    lastName: "Greene",
    teams: [{ name: "Steelers", year: "1969-1981" }],
    position: "DT"
  },
  {
    firstName: "Jack",
    lastName: "Lambert",
    teams: [{ name: "Steelers", year: "1974-1984" }],
    position: "LB"
  },
  {
    firstName: "Jack",
    lastName: "Hambleton",
    teams: [{ name: "Steelers", year: "1971-1982" }],
    position: "LB"
  },
  {
    firstName: "Mike",
    lastName: "Singletary",
    teams: [{ name: "Bears", year: "1981-1992" }],
    position: "LB"
  },
  {
    firstName: "Dick",
    lastName: "Butkus",
    teams: [{ name: "Bears", year: "1965-1973" }],
    position: "LB"
  },
  {
    firstName: "Lawrence",
    lastName: "Taylor",
    teams: [{ name: "Giants", year: "1981-1993" }],
    position: "LB"
  },
  {
    firstName: "Reggie",
    lastName: "White",
    teams: [
      { name: "Eagles", year: "1985-1992" },
      { name: "Packers", year: "1993-1998" },
      { name: "Panthers", year: "2000" }
    ],
    position: "DE"
  },
  {
    firstName: "Bruce",
    lastName: "Smith",
    teams: [
      { name: "Bills", year: "1985-1999" },
      { name: "Commanders", year: "2000-2003" }
    ],
    position: "DE"
  },
  {
    firstName: "Deion",
    lastName: "Sanders",
    teams: [
      { name: "Falcons", year: "1989-1993" },
      { name: "49ers", year: "1994" },
      { name: "Cowboys", year: "1995-1999" },
      { name: "Commanders", year: "2000" },
      { name: "Ravens", year: "2004-2005" }
    ],
    position: "CB"
  },
  {
    firstName: "Mel",
    lastName: "Blount",
    teams: [{ name: "Steelers", year: "1970-1983" }],
    position: "CB"
  },
  {
    firstName: "Ronnie",
    lastName: "Lott",
    teams: [
      { name: "49ers", year: "1981-1990" },
      { name: "Raiders", year: "1991-1992" },
      { name: "Jets", year: "1993-1994" }
    ],
    position: "S"
  },
  {
    firstName: "Rod",
    lastName: "Woodson",
    teams: [
      { name: "Steelers", year: "1987-1996" },
      { name: "49ers", year: "1997" },
      { name: "Ravens", year: "1998-2001" },
      { name: "Raiders", year: "2002-2003" }
    ],
    position: "CB"
  },
  {
    firstName: "Brian",
    lastName: "Dawkins",
    teams: [
      { name: "Eagles", year: "1996-2008" },
      { name: "Broncos", year: "2009-2011" }
    ],
    position: "S"
  },
  {
    firstName: "Darrelle",
    lastName: "Revis",
    teams: [
      { name: "Jets", year: "2007-2012" },
      { name: "Buccaneers", year: "2013" },
      { name: "Patriots", year: "2014" },
      { name: "Jets", year: "2015-2016" },
      { name: "Chiefs", year: "2017" }
    ],
    position: "CB"
  },
  // QBs
  {
    firstName: "Colin",
    lastName: "Kaepernick",
    teams: [{ name: "49ers", year: "2011-2016" }],
    position: "QB"
  },
  {
    firstName: "Jay",
    lastName: "Cutler",
    teams: [
      { name: "Broncos", year: "2006-2008" },
      { name: "Bears", year: "2009-2016" },
      { name: "Dolphins", year: "2017" }
    ],
    position: "QB"
  },
  {
    firstName: "Sam",
    lastName: "Bradford",
    teams: [
      { name: "Rams", year: "2010-2014" },
      { name: "Eagles", year: "2015-2016" },
      { name: "Vikings", year: "2016-2017" },
      { name: "Cardinals", year: "2018" }
    ],
    position: "QB"
  },
  {
    firstName: "Andy",
    lastName: "Dalton",
    teams: [
      { name: "Bengals", year: "2011-2019" },
      { name: "Cowboys", year: "2020" },
      { name: "Bears", year: "2021" },
      { name: "Saints", year: "2022" },
      { name: "Panthers", year: "2023-" }
    ],
    position: "QB"
  },
  {
    firstName: "Marcus",
    lastName: "Mariota",
    teams: [
      { name: "Titans", year: "2015-2019" },
      { name: "Raiders", year: "2020-2021" },
      { name: "Falcons", year: "2022" },
      { name: "Eagles", year: "2023-" }
    ],
    position: "QB"
  },
  {
    firstName: "Baker",
    lastName: "Mayfield",
    teams: [
      { name: "Browns", year: "2018-2021" },
      { name: "Panthers", year: "2022" },
      { name: "Rams", year: "2022" },
      { name: "Buccaneers", year: "2023-" }
    ],
    position: "QB"
  },
  {
    firstName: "Kyler",
    lastName: "Murray",
    teams: [{ name: "Cardinals", year: "2019-" }],
    position: "QB"
  },
  {
    firstName: "Daniel",
    lastName: "Jones",
    teams: [{ name: "Giants", year: "2019-" }],
    position: "QB"
  },
  {
    firstName: "Trevor",
    lastName: "Lawrence",
    teams: [{ name: "Jaguars", year: "2021-" }],
    position: "QB"
  },
  {
    firstName: "Mac",
    lastName: "Jones",
    teams: [
      { name: "Patriots", year: "2021-2023" },
      { name: "Jaguars", year: "2024-" }
    ],
    position: "QB"
  },

  // RBs
  {
    firstName: "Ricky",
    lastName: "Williams",
    teams: [
      { name: "Saints", year: "1999-2001" },
      { name: "Dolphins", year: "2002-2010" },
      { name: "Ravens", year: "2011" }
    ],
    position: "RB"
  },
  {
    firstName: "DeMarco",
    lastName: "Murray",
    teams: [
      { name: "Cowboys", year: "2011-2014" },
      { name: "Eagles", year: "2015" },
      { name: "Titans", year: "2016-2017" }
    ],
    position: "RB"
  },
  {
    firstName: "Corey",
    lastName: "Dillon",
    teams: [
      { name: "Bengals", year: "1997-2003" },
      { name: "Patriots", year: "2004-2006" }
    ],
    position: "RB"
  },
  {
    firstName: "Fred",
    lastName: "Taylor",
    teams: [
      { name: "Jaguars", year: "1998-2008" },
      { name: "Patriots", year: "2009-2010" }
    ],
    position: "RB"
  },
  {
    firstName: "Rashard",
    lastName: "Mendenhall",
    teams: [
      { name: "Steelers", year: "2008-2012" },
      { name: "Cardinals", year: "2013" }
    ],
    position: "RB"
  },
  {
    firstName: "Ahman",
    lastName: "Green",
    teams: [
      { name: "Seahawks", year: "1998" },
      { name: "Packers", year: "2000-2006" },
      { name: "Texans", year: "2007-2008" }
    ],
    position: "RB"
  },
  {
    firstName: "Jamal",
    lastName: "Lewis",
    teams: [
      { name: "Ravens", year: "2000-2006" },
      { name: "Browns", year: "2007-2009" }
    ],
    position: "RB"
  },
  {
    firstName: "Shonn",
    lastName: "Greene",
    teams: [
      { name: "Jets", year: "2009-2012" },
      { name: "Titans", year: "2013-2014" }
    ],
    position: "RB"
  },
  {
    firstName: "Thomas",
    lastName: "Jones",
    teams: [
      { name: "Cardinals", year: "2000-2002" },
      { name: "Buccaneers", year: "2003" },
      { name: "Bears", year: "2004-2006" },
      { name: "Jets", year: "2007-2009" },
      { name: "Chiefs", year: "2010-2011" }
    ],
    position: "RB"
  },
  {
    firstName: "Mike",
    lastName: "Alstott",
    teams: [{ name: "Buccaneers", year: "1996-2006" }],
    position: "FB"
  },

  // WRs
  {
    firstName: "Plaxico",
    lastName: "Burress",
    teams: [
      { name: "Steelers", year: "2000-2004" },
      { name: "Giants", year: "2005-2008" },
      { name: "Jets", year: "2011" }
    ],
    position: "WR"
  },
  {
    firstName: "Hines",
    lastName: "Ward",
    teams: [{ name: "Steelers", year: "1998-2011" }],
    position: "WR"
  },
  {
    firstName: "Jordy",
    lastName: "Nelson",
    teams: [
      { name: "Packers", year: "2008-2017" },
      { name: "Raiders", year: "2018" }
    ],
    position: "WR"
  },
  {
    firstName: "Demaryius",
    lastName: "Thomas",
    teams: [
      { name: "Broncos", year: "2010-2018" },
      { name: "Texans", year: "2018" },
      { name: "Jets", year: "2019" }
    ],
    position: "WR"
  },
  {
    firstName: "Victor",
    lastName: "Cruz",
    teams: [{ name: "Giants", year: "2010-2016" }],
    position: "WR"
  },
  {
    firstName: "DeSean",
    lastName: "Jackson",
    teams: [
      { name: "Eagles", year: "2008-2013" },
      { name: "Commanders", year: "2014-2016" },
      { name: "Buccaneers", year: "2017-2018" },
      { name: "Eagles", year: "2019-2020" },
      { name: "Rams", year: "2021" },
      { name: "Raiders", year: "2021" },
      { name: "Ravens", year: "2022" }
    ],
    position: "WR"
  },
  {
    firstName: "Percy",
    lastName: "Harvin",
    teams: [
      { name: "Vikings", year: "2009-2012" },
      { name: "Seahawks", year: "2013-2014" },
      { name: "Jets", year: "2014" },
      { name: "Bills", year: "2015-2016" }
    ],
    position: "WR"
  },
  {
    firstName: "Miles",
    lastName: "Austin",
    teams: [
      { name: "Cowboys", year: "2006-2013" },
      { name: "Browns", year: "2014" },
      { name: "Eagles", year: "2015" }
    ],
    position: "WR"
  },
  {
    firstName: "Pierre",
    lastName: "Garçon",
    teams: [
      { name: "Colts", year: "2008-2011" },
      { name: "Commanders", year: "2012-2016" },
      { name: "49ers", year: "2017-2018" }
    ],
    position: "WR"
  },
  {
    firstName: "Michael",
    lastName: "Crabtree",
    teams: [
      { name: "49ers", year: "2009-2014" },
      { name: "Raiders", year: "2015-2017" },
      { name: "Ravens", year: "2018" }
    ],
    position: "WR"
  },

  // Defense
  {
    firstName: "Lance",
    lastName: "Briggs",
    teams: [{ name: "Bears", year: "2003-2014" }],
    position: "LB"
  },
  {
    firstName: "Brian",
    lastName: "Cushing",
    teams: [{ name: "Texans", year: "2009-2017" }],
    position: "LB"
  },
  {
    firstName: "DeMarcus",
    lastName: "Lawrence",
    teams: [{ name: "Cowboys", year: "2014-" }],
    position: "EDGE"
  },
  {
    firstName: "Chandler",
    lastName: "Jones",
    teams: [
      { name: "Patriots", year: "2012-2015" },
      { name: "Cardinals", year: "2016-2021" },
      { name: "Raiders", year: "2022-2023" }
    ],
    position: "EDGE"
  },
  {
    firstName: "Cameron",
    lastName: "Wake",
    teams: [
      { name: "Dolphins", year: "2009-2018" },
      { name: "Titans", year: "2019" }
    ],
    position: "EDGE"
  },
  {
    firstName: "Mario",
    lastName: "Williams",
    teams: [
      { name: "Texans", year: "2006-2011" },
      { name: "Bills", year: "2012-2015" },
      { name: "Dolphins", year: "2016" }
    ],
    position: "DE"
  },
  {
    firstName: "Haloti",
    lastName: "Ngata",
    teams: [
      { name: "Ravens", year: "2006-2014" },
      { name: "Lions", year: "2015-2017" },
      { name: "Eagles", year: "2018" }
    ],
    position: "DT"
  },
  {
    firstName: "Vince",
    lastName: "Wilfork",
    teams: [
      { name: "Patriots", year: "2004-2014" },
      { name: "Texans", year: "2015-2016" }
    ],
    position: "DT"
  },
  // QBs (18)
  {
    firstName: "Troy",
    lastName: "Aikman",
    teams: [{ name: "Cowboys", year: "1989-2000" }],
    position: "QB"
  },
  {
    firstName: "Phil",
    lastName: "Simms",
    teams: [{ name: "Giants", year: "1979-1993" }],
    position: "QB"
  },
  {
    firstName: "Ken",
    lastName: "Anderson",
    teams: [{ name: "Bengals", year: "1971-1986" }],
    position: "QB"
  },
  {
    firstName: "Boomer",
    lastName: "Esiason",
    teams: [
      { name: "Bengals", year: "1984-1992" },
      { name: "Jets", year: "1993-1995" },
      { name: "Cardinals", year: "1996" },
      { name: "Bengals", year: "1997" }
    ],
    position: "QB"
  },
  {
    firstName: "Vinny",
    lastName: "Testaverde",
    teams: [
      { name: "Buccaneers", year: "1987-1992" },
      { name: "Browns", year: "1993-1995" },
      { name: "Ravens", year: "1996-1997" },
      { name: "Jets", year: "1998-2003" },
      { name: "Cowboys", year: "2004" },
      { name: "Jets", year: "2005" },
      { name: "Patriots", year: "2006" },
      { name: "Panthers", year: "2007" }
    ],
    position: "QB"
  },
  {
    firstName: "Rich",
    lastName: "Gannon",
    teams: [
      { name: "Vikings", year: "1987-1992" },
      { name: "Chiefs", year: "1995-1998" },
      { name: "Raiders", year: "1999-2004" }
    ],
    position: "QB"
  },
  {
    firstName: "Matt",
    lastName: "Hasselbeck",
    teams: [
      { name: "Seahawks", year: "2001-2010" },
      { name: "Titans", year: "2011-2012" },
      { name: "Colts", year: "2013-2015" }
    ],
    position: "QB"
  },
  {
    firstName: "Donovan",
    lastName: "McNabb",
    teams: [
      { name: "Eagles", year: "1999-2009" },
      { name: "Commanders", year: "2010" },
      { name: "Vikings", year: "2011" }
    ],
    position: "QB"
  },
  {
    firstName: "Jeff",
    lastName: "Garcia",
    teams: [
      { name: "49ers", year: "1999-2003" },
      { name: "Browns", year: "2004" },
      { name: "Lions", year: "2005" },
      { name: "Eagles", year: "2006" },
      { name: "Buccaneers", year: "2007-2008" }
    ],
    position: "QB"
  },
  {
    firstName: "Carson",
    lastName: "Wentz",
    teams: [
      { name: "Eagles", year: "2016-2020" },
      { name: "Colts", year: "2021" },
      { name: "Commanders", year: "2022" },
      { name: "Rams", year: "2023" }
    ],
    position: "QB"
  },
  {
    firstName: "Derek",
    lastName: "Carr",
    teams: [
      { name: "Raiders", year: "2014-2022" },
      { name: "Saints", year: "2023-" }
    ],
    position: "QB"
  },
  {
    firstName: "Jimmy",
    lastName: "Garoppolo",
    teams: [
      { name: "Patriots", year: "2014-2017" },
      { name: "49ers", year: "2017-2022" },
      { name: "Raiders", year: "2023" },
      { name: "Rams", year: "2024-" }
    ],
    position: "QB"
  },
  {
    firstName: "Brock",
    lastName: "Purdy",
    teams: [{ name: "49ers", year: "2022-" }],
    position: "QB"
  },
  {
    firstName: "C.J.",
    lastName: "Stroud",
    teams: [{ name: "Texans", year: "2023-" }],
    position: "QB"
  },
  {
    firstName: "Teddy",
    lastName: "Bridgewater",
    teams: [
      { name: "Vikings", year: "2014-2015" },
      { name: "Saints", year: "2018-2019" },
      { name: "Panthers", year: "2020" },
      { name: "Broncos", year: "2021" },
      { name: "Dolphins", year: "2022" },
      { name: "Lions", year: "2023" }
    ],
    position: "QB"
  },
  {
    firstName: "Ryan",
    lastName: "Tannehill",
    teams: [
      { name: "Dolphins", year: "2012-2018" },
      { name: "Titans", year: "2019-2023" }
    ],
    position: "QB"
  },
  {
    firstName: "Justin",
    lastName: "Fields",
    teams: [
      { name: "Bears", year: "2021-2023" },
      { name: "Steelers", year: "2024-" }
    ],
    position: "QB"
  },
  {
    firstName: "Jordan",
    lastName: "Love",
    teams: [{ name: "Packers", year: "2020-" }],
    position: "QB"
  },

  // RBs (10)
  {
    firstName: "Tiki",
    lastName: "Barber",
    teams: [{ name: "Giants", year: "1997-2006" }],
    position: "RB"
  },
  {
    firstName: "Eddie",
    lastName: "George",
    teams: [
      { name: "Oilers/Titans", year: "1996-2003" },
      { name: "Cowboys", year: "2004" }
    ],
    position: "RB"
  },
  {
    firstName: "Marshall",
    lastName: "Faulk",
    teams: [
      { name: "Colts", year: "1994-1998" },
      { name: "Rams", year: "1999-2005" }
    ],
    position: "RB"
  },
  {
    firstName: "Steven",
    lastName: "Jackson",
    teams: [
      { name: "Rams", year: "2004-2012" },
      { name: "Falcons", year: "2013-2014" },
      { name: "Patriots", year: "2015" }
    ],
    position: "RB"
  },
  {
    firstName: "Clinton",
    lastName: "Portis",
    teams: [
      { name: "Broncos", year: "2002-2003" },
      { name: "Commanders", year: "2004-2010" }
    ],
    position: "RB"
  },
  {
    firstName: "Willis",
    lastName: "McGahee",
    teams: [
      { name: "Bills", year: "2004-2006" },
      { name: "Ravens", year: "2007-2010" },
      { name: "Broncos", year: "2011-2012" },
      { name: "Browns", year: "2013" }
    ],
    position: "RB"
  },
  {
    firstName: "Larry",
    lastName: "Johnson",
    teams: [
      { name: "Chiefs", year: "2003-2009" },
      { name: "Bengals", year: "2009" },
      { name: "Commanders", year: "2010" },
      { name: "Dolphins", year: "2011" }
    ],
    position: "RB"
  },
  {
    firstName: "Ricky",
    lastName: "Watters",
    teams: [
      { name: "49ers", year: "1992-1994" },
      { name: "Eagles", year: "1995-1997" },
      { name: "Seahawks", year: "1998-2001" }
    ],
    position: "RB"
  },
  {
    firstName: "Matt",
    lastName: "Forte",
    teams: [
      { name: "Bears", year: "2008-2015" },
      { name: "Jets", year: "2016-2017" }
    ],
    position: "RB"
  },
  {
    firstName: "Devonta",
    lastName: "Freeman",
    teams: [
      { name: "Falcons", year: "2014-2019" },
      { name: "Giants", year: "2020" },
      { name: "Ravens", year: "2021" }
    ],
    position: "RB"
  },

  // WRs (13)
  {
    firstName: "Herman",
    lastName: "Moore",
    teams: [{ name: "Lions", year: "1991-2001" }],
    position: "WR"
  },
  {
    firstName: "Keyshawn",
    lastName: "Johnson",
    teams: [
      { name: "Jets", year: "1996-1999" },
      { name: "Buccaneers", year: "2000-2003" },
      { name: "Cowboys", year: "2005" },
      { name: "Panthers", year: "2006" }
    ],
    position: "WR"
  },
  {
    firstName: "Joey",
    lastName: "Galloway",
    teams: [
      { name: "Seahawks", year: "1995-1999" },
      { name: "Cowboys", year: "2000-2003" },
      { name: "Buccaneers", year: "2004-2008" },
      { name: "Patriots", year: "2009" },
      { name: "Commanders", year: "2010" }
    ],
    position: "WR"
  },
  {
    firstName: "Sterling",
    lastName: "Sharpe",
    teams: [{ name: "Packers", year: "1988-1994" }],
    position: "WR"
  },
  {
    firstName: "Muhsin",
    lastName: "Muhammad",
    teams: [
      { name: "Panthers", year: "1996-2004" },
      { name: "Bears", year: "2005-2007" },
      { name: "Panthers", year: "2008-2009" }
    ],
    position: "WR"
  },
  {
    firstName: "Alshon",
    lastName: "Jeffery",
    teams: [
      { name: "Bears", year: "2012-2016" },
      { name: "Eagles", year: "2017-2020" }
    ],
    position: "WR"
  },
  {
    firstName: "Cooper",
    lastName: "Kupp",
    teams: [
        { name: "Rams", year: "2017-2024" },
        { name: "Seahawks", year: "2025-" }
    ],
    position: "WR"
  },
  {
    firstName: "Puka",
    lastName: "Nacua",
    teams: [{ name: "Rams", year: "2023-" }],
    position: "WR"
  },
  {
    firstName: "Tee",
    lastName: "Higgins",
    teams: [{ name: "Bengals", year: "2020-" }],
    position: "WR"
  },
  {
    firstName: "Tyler",
    lastName: "Lockett",
    teams: [
      { name: "Seahawks", year: "2015-2024" },
      { name: "Titans", year: "2025-" }
    ],
    position: "WR"
  },
  {
    firstName: "Terry",
    lastName: "McLaurin",
    teams: [{ name: "Commanders", year: "2019-" }],
    position: "WR"
  },
  {
    firstName: "Brandon",
    lastName: "Aiyuk",
    teams: [{ name: "49ers", year: "2020-" }],
    position: "WR"
  },
  {
    firstName: "Mike",
    lastName: "Williams",
    teams: [
      { name: "Chargers", year: "2017-2023" },
      { name: "Jets", year: "2024-" }
    ],
    position: "WR"
  },

  // TEs (8)
  {
    firstName: "Mark",
    lastName: "Andrews",
    teams: [{ name: "Ravens", year: "2018-" }],
    position: "TE"
  },
  {
    firstName: "Kyle",
    lastName: "Pitts",
    teams: [{ name: "Falcons", year: "2021-" }],
    position: "TE"
  },
  {
    firstName: "Delanie",
    lastName: "Walker",
    teams: [
      { name: "49ers", year: "2006-2012" },
      { name: "Titans", year: "2013-2019" }
    ],
    position: "TE"
  },
  {
    firstName: "Vernon",
    lastName: "Davis",
    teams: [
      { name: "49ers", year: "2006-2015" },
      { name: "Broncos", year: "2015" },
      { name: "Commanders", year: "2016-2019" }
    ],
    position: "TE"
  },
  {
    firstName: "Heath",
    lastName: "Miller",
    teams: [{ name: "Steelers", year: "2005-2015" }],
    position: "TE"
  },
  {
    firstName: "Jeremy",
    lastName: "Shockey",
    teams: [
      { name: "Giants", year: "2002-2007" },
      { name: "Saints", year: "2008-2010" },
      { name: "Panthers", year: "2011" }
    ],
    position: "TE"
  },
  {
    firstName: "Kellen",
    lastName: "Winslow",
    teams: [
      { name: "Browns", year: "2004-2008" },
      { name: "Buccaneers", year: "2009-2011" },
      { name: "Patriots", year: "2012" },
      { name: "Jets", year: "2013" }
    ],
    position: "TE"
  },
  {
    firstName: "Jordan",
    lastName: "Reed",
    teams: [
      { name: "Commanders", year: "2013-2019" },
      { name: "49ers", year: "2020" }
    ],
    position: "TE"
  },

  // Defense (1 to make 50 total)
  {
    firstName: "Kevin",
    lastName: "Greene",
    teams: [
      { name: "Rams", year: "1985-1992" },
      { name: "Steelers", year: "1993-1995" },
      { name: "Panthers", year: "1996" },
      { name: "49ers", year: "1997" },
      { name: "Panthers", year: "1998-1999" }
    ],
    position: "EDGE"
  },
  {
    firstName: "Ryan",
    lastName: "Mathews",
    teams: [
      { name: "Chargers", year: "2010-2014" },
      { name: "Eagles", year: "2015-2016" }
    ],
    position: "RB"
  },
  {
    firstName: "Matt",
    lastName: "Cassel",
    teams: [
      { name: "Patriots", year: "2005-2008" },
      { name: "Chiefs", year: "2009-2012" },
      { name: "Vikings", year: "2013-2014" },
      { name: "Cowboys", year: "2015" },
      { name: "Titans", year: "2016-2017" }
    ],
    position: "QB"
  },
  {
    firstName: "Braylon",
    lastName: "Edwards",
    teams: [
      { name: "Browns", year: "2005-2009" },
      { name: "Jets", year: "2009-2010" },
      { name: "49ers", year: "2011" },
      { name: "Jets", year: "2012" }
    ],
    position: "WR"
  },
  {
    firstName: "DeAngelo",
    lastName: "Williams",
    teams: [
      { name: "Panthers", year: "2006-2014" },
      { name: "Steelers", year: "2015-2016" }
    ],
    position: "RB"
  },
  {
    firstName: "Kyle",
    lastName: "Orton",
    teams: [
      { name: "Bears", year: "2005-2008" },
      { name: "Broncos", year: "2009-2011" },
      { name: "Chiefs", year: "2011" },
      { name: "Cowboys", year: "2012-2013" },
      { name: "Bills", year: "2014" }
    ],
    position: "QB"
  },
  {
    firstName: "Brandon",
    lastName: "Jacobs",
    teams: [
      { name: "Giants", year: "2005-2011" },
      { name: "49ers", year: "2012" },
      { name: "Giants", year: "2013" }
    ],
    position: "RB"
  },
  {
    firstName: "Roy",
    lastName: "Williams",
    teams: [
      { name: "Lions", year: "2004-2008" },
      { name: "Cowboys", year: "2008-2010" },
      { name: "Bears", year: "2011" }
    ],
    position: "WR"
  },
  {
    firstName: "Shaun",
    lastName: "Hill",
    teams: [
      { name: "49ers", year: "2007-2009" },
      { name: "Lions", year: "2010-2013" },
      { name: "Rams", year: "2014" },
      { name: "Vikings", year: "2015-2016" }
    ],
    position: "QB"
  },
  {
    firstName: "Michael",
    lastName: "Bush",
    teams: [
      { name: "Raiders", year: "2008-2011" },
      { name: "Bears", year: "2012-2013" }
    ],
    position: "RB"
  },
  {
    firstName: "Santana",
    lastName: "Moss",
    teams: [
      { name: "Jets", year: "2001-2004" },
      { name: "Commanders", year: "2005-2014" }
    ],
    position: "WR"
  },
  {
    firstName: "Chris",
    lastName: "Chambers",
    teams: [
      { name: "Dolphins", year: "2001-2007" },
      { name: "Chargers", year: "2007-2009" },
      { name: "Chiefs", year: "2009-2010" }
    ],
    position: "WR"
  },
  {
    firstName: "Kellen",
    lastName: "Clemens",
    teams: [
      { name: "Jets", year: "2006-2010" },
      { name: "Rams", year: "2011-2013" },
      { name: "Chargers", year: "2014-2017" }
    ],
    position: "QB"
  },
  {
    firstName: "Shonn",
    lastName: "Greene",
    teams: [
      { name: "Jets", year: "2009-2012" },
      { name: "Titans", year: "2013-2014" }
    ],
    position: "RB"
  },
  {
    firstName: "Nate",
    lastName: "Washington",
    teams: [
      { name: "Steelers", year: "2005-2008" },
      { name: "Titans", year: "2009-2014" },
      { name: "Texans", year: "2015" }
    ],
    position: "WR"
  },
  {
    firstName: "Josh",
    lastName: "McCown",
    teams: [
      { name: "Cardinals", year: "2002-2005" },
      { name: "Raiders", year: "2007" },
      { name: "Panthers", year: "2008-2009" },
      { name: "Bears", year: "2011-2013" },
      { name: "Buccaneers", year: "2014" },
      { name: "Browns", year: "2015-2016" },
      { name: "Jets", year: "2017-2018" },
      { name: "Eagles", year: "2019" }
    ],
    position: "QB"
  },
  // QBs
  {
    firstName: "Jacoby",
    lastName: "Brissett",
    teams: [
      { name: "Patriots", year: "2016" },
      { name: "Colts", year: "2017-2020" },
      { name: "Dolphins", year: "2021" },
      { name: "Browns", year: "2022" },
      { name: "Commanders", year: "2023" },
      { name: "Patriots", year: "2024-" }
    ],
    position: "QB"
  },
  {
    firstName: "Tyrod",
    lastName: "Taylor",
    teams: [
      { name: "Ravens", year: "2011-2014" },
      { name: "Bills", year: "2015-2017" },
      { name: "Browns", year: "2018" },
      { name: "Chargers", year: "2019-2020" },
      { name: "Giants", year: "2022-2023" }
    ],
    position: "QB"
  },
  {
    firstName: "Case",
    lastName: "Keenum",
    teams: [
      { name: "Texans", year: "2013-2014" },
      { name: "Rams", year: "2015-2016" },
      { name: "Vikings", year: "2017" },
      { name: "Broncos", year: "2018" },
      { name: "Commanders", year: "2019" },
      { name: "Browns", year: "2020-2021" },
      { name: "Bills", year: "2022" },
      { name: "Texans", year: "2023-2024" }
    ],
    position: "QB"
  },
  {
    firstName: "Gardner",
    lastName: "Minshew",
    teams: [
      { name: "Jaguars", year: "2019-2020" },
      { name: "Eagles", year: "2021-2022" },
      { name: "Colts", year: "2023-2024" }
    ],
    position: "QB"
  },
  {
    firstName: "Sam",
    lastName: "Darnold",
    teams: [
      { name: "Jets", year: "2018-2020" },
      { name: "Panthers", year: "2021-2022" },
      { name: "49ers", year: "2023" },
      { name: "Vikings", year: "2024" },
      { name: "Seahawks", year: "2025" }
    ],
    position: "QB"
  },
  {
    firstName: "Taylor",
    lastName: "Heinicke",
    teams: [
      { name: "Commanders", year: "2020-2022" },
      { name: "Falcons", year: "2023-" }
    ],
    position: "QB"
  },
  {
    firstName: "Mark",
    lastName: "Brunell",
    teams: [
      { name: "Packers", year: "1993-1994" },
      { name: "Jaguars", year: "1995-2003" },
      { name: "Commanders", year: "2004-2007" },
      { name: "Saints", year: "2008-2009" },
      { name: "Jets", year: "2010-2011" }
    ],
    position: "QB"
  },
  {
    firstName: "Jason",
    lastName: "Campbell",
    teams: [
      { name: "Commanders", year: "2005-2009" },
      { name: "Raiders", year: "2010-2011" },
      { name: "Bears", year: "2012" },
      { name: "Browns", year: "2013" },
      { name: "Bengals", year: "2014" }
    ],
    position: "QB"
  },
  {
    firstName: "Byron",
    lastName: "Leftwich",
    teams: [
      { name: "Jaguars", year: "2003-2006" },
      { name: "Falcons", year: "2007" },
      { name: "Steelers", year: "2008, 2010-2012" },
      { name: "Buccaneers", year: "2009" }
    ],
    position: "QB"
  },

  // RBs
  {
    firstName: "Justin",
    lastName: "Forsett",
    teams: [
      { name: "Seahawks", year: "2008-2011" },
      { name: "Texans", year: "2012" },
      { name: "Jaguars", year: "2013" },
      { name: "Ravens", year: "2014-2016" },
      { name: "Lions", year: "2016" },
      { name: "Broncos", year: "2016" }
    ],
    position: "RB"
  },
  {
    firstName: "Michael",
    lastName: "Turner",
    teams: [
      { name: "Chargers", year: "2004-2007" },
      { name: "Falcons", year: "2008-2012" }
    ],
    position: "RB"
  },
  {
    firstName: "Rashad",
    lastName: "Jennings",
    teams: [
      { name: "Jaguars", year: "2009-2012" },
      { name: "Raiders", year: "2013" },
      { name: "Giants", year: "2014-2016" }
    ],
    position: "RB"
  },
  {
    firstName: "BenJarvus",
    lastName: "Green-Ellis",
    teams: [
      { name: "Patriots", year: "2008-2011" },
      { name: "Bengals", year: "2012-2013" }
    ],
    position: "RB"
  },
  {
    firstName: "Alfred",
    lastName: "Morris",
    teams: [
      { name: "Commanders", year: "2012-2015" },
      { name: "Cowboys", year: "2016-2017, 2019" },
      { name: "49ers", year: "2018" },
      { name: "Giants", year: "2020" }
    ],
    position: "RB"
  },
  {
    firstName: "Lamar",
    lastName: "Miller",
    teams: [
      { name: "Dolphins", year: "2012-2015" },
      { name: "Texans", year: "2016-2019" }
    ],
    position: "RB"
  },
  {
    firstName: "Jay",
    lastName: "Ajayi",
    teams: [
      { name: "Dolphins", year: "2015-2017" },
      { name: "Eagles", year: "2017-2019" }
    ],
    position: "RB"
  },
  {
    firstName: "Latavius",
    lastName: "Murray",
    teams: [
      { name: "Raiders", year: "2014-2016" },
      { name: "Vikings", year: "2017" },
      { name: "Saints", year: "2019-2020" },
      { name: "Ravens", year: "2021" },
      { name: "Broncos", year: "2022" },
      { name: "Bills", year: "2023" }
    ],
    position: "RB"
  },
  {
    firstName: "Tevin",
    lastName: "Coleman",
    teams: [
      { name: "Falcons", year: "2015-2018" },
      { name: "49ers", year: "2019-2020" },
      { name: "Jets", year: "2021-2022" },
      { name: "49ers", year: "2022" }
    ],
    position: "RB"
  },
  {
    firstName: "Raheem",
    lastName: "Mostert",
    teams: [
      { name: "49ers", year: "2016-2021" },
      { name: "Dolphins", year: "2022-2024" },
      { name: "Raiders", year: "2025-" }
    ],
    position: "RB"
  },

  // WRs
  {
    firstName: "Mohamed",
    lastName: "Sanu",
    teams: [
      { name: "Bengals", year: "2012-2015" },
      { name: "Falcons", year: "2016-2019" },
      { name: "Patriots", year: "2019" },
      { name: "49ers", year: "2020-2021" },
      { name: "Lions", year: "2021" }
    ],
    position: "WR"
  },
  {
    firstName: "Torrey",
    lastName: "Smith",
    teams: [
      { name: "Ravens", year: "2011-2014" },
      { name: "49ers", year: "2015-2016" },
      { name: "Eagles", year: "2017" },
      { name: "Panthers", year: "2018" }
    ],
    position: "WR"
  },
  {
    firstName: "Mike",
    lastName: "Wallace",
    teams: [
      { name: "Steelers", year: "2009-2012" },
      { name: "Dolphins", year: "2013-2014" },
      { name: "Vikings", year: "2015" },
      { name: "Ravens", year: "2016-2017" },
      { name: "Eagles", year: "2018" }
    ],
    position: "WR"
  },
  {
    firstName: "Jeremy",
    lastName: "Maclin",
    teams: [
      { name: "Eagles", year: "2009-2014" },
      { name: "Chiefs", year: "2015-2016" },
      { name: "Ravens", year: "2017" }
    ],
    position: "WR"
  },
  {
    firstName: "DeVante",
    lastName: "Parker",
    teams: [
      { name: "Dolphins", year: "2015-2022" },
      { name: "Patriots", year: "2023" },
      { name: "Eagles", year: "2024" }
    ],
    position: "WR"
  },
  {
    firstName: "Kenny",
    lastName: "Stills",
    teams: [
      { name: "Saints", year: "2013-2014" },
      { name: "Dolphins", year: "2015-2019" },
      { name: "Texans", year: "2019-2020" },
      { name: "Saints", year: "2021" }
    ],
    position: "WR"
  },
  {
    firstName: "Brandon",
    lastName: "LaFell",
    teams: [
      { name: "Panthers", year: "2010-2013" },
      { name: "Patriots", year: "2014-2015" },
      { name: "Bengals", year: "2016-2017" },
      { name: "Raiders", year: "2018" }
    ],
    position: "WR"
  },
  {
    firstName: "Nelson",
    lastName: "Agholor",
    teams: [
      { name: "Eagles", year: "2015-2019" },
      { name: "Raiders", year: "2020" },
      { name: "Patriots", year: "2021-2022" },
      { name: "Ravens", year: "2023-" }
    ],
    position: "WR"
  },
  {
    firstName: "Ted",
    lastName: "Ginn Jr.",
    teams: [
      { name: "Dolphins", year: "2007-2009" },
      { name: "49ers", year: "2010-2012" },
      { name: "Panthers", year: "2013" },
      { name: "Cardinals", year: "2014" },
      { name: "Panthers", year: "2015-2016" },
      { name: "Saints", year: "2017-2019" },
      { name: "Bears", year: "2020" }
    ],
    position: "WR"
  },
  {
    firstName: "Michael",
    lastName: "Floyd",
    teams: [
      { name: "Cardinals", year: "2012-2016" },
      { name: "Patriots", year: "2016" },
      { name: "Vikings", year: "2017" },
      { name: "Commanders", year: "2018" },
      { name: "Ravens", year: "2019" }
    ],
    position: "WR"
  },

  // TE
  {
    firstName: "Martellus",
    lastName: "Bennett",
    teams: [
      { name: "Cowboys", year: "2008-2011" },
      { name: "Giants", year: "2012" },
      { name: "Bears", year: "2013-2015" },
      { name: "Patriots", year: "2016-2017" },
      { name: "Packers", year: "2017" }
    ],
    position: "TE"
  },

  // Defense
  {
    firstName: "Cliff",
    lastName: "Avril",
    teams: [
      { name: "Lions", year: "2008-2012" },
      { name: "Seahawks", year: "2013-2017" }
    ],
    position: "DE"
  }
];