var conferences = {
  'ACC': { 'color': '#036', 'description': 'left' },
  'Big 12': { 'color': '#c41e3a', 'description': 'left' },
  'Big East': { 'color': '#bb0721', 'description': 'left' },
  'Big Ten': { 'color': '#0088ce', 'description': 'left' },
  'Conference USA': { 'color': '#296592', 'description': 'left' },
  'Independents': { 'color': '#000', 'description': 'left' },
  'MAC': { 'color': '#008f55', 'description': 'left' },
  'MWC': { 'color': '#4f2d7f', 'description': 'right' },
  'Pac-12': { 'color': '#004b9c', 'description': 'right' },
  'SEC': { 'color': '#2b5d81', 'fillColor': '#f6cf23', 'description': 'left' },
  'Sun Belt': { 'color': '#b65c31', 'description': 'left' },
  'WAC': { 'color': '#98012e', 'description': 'right' }
};

var teams = [
  {
    'school': 'California',
    'mascot': 'Golden Bears',
    'location': 'Berkely, CA',
    'x': 56,
    'y': 245,
    'conference': 'Pac-12',
    'division': 'North'
  },{
    'school': 'Oregon',
    'mascot': 'Ducks',
    'location': 'Eugene, OR',
    'x': 80,
    'y': 115,
    'conference': 'Pac-12',
    'division': 'North'
  },{
    'school': 'Arizona',
    'mascot': 'Wildcats',
    'location': 'Tucson, AZ',
    'x': 220,
    'y': 400,
    'conference': 'Pac-12',
    'division': 'South'
  },{
    'school': 'Brigham Young',
    'mascot': 'Cougars',
    'location': 'Provo, UT',
    'x': 237,
    'y': 239,
    'conference': 'Independents',
    'division': null
  },{
    'school': 'San Jose State',
    'mascot': 'Spartans',
    'location': 'San Jose, CA',
    'x': 59,
    'y': 260,
    'conference': 'WAC',
    'division': null
  },{
    'school': 'San Diego State',
    'mascot': 'Aztecs',
    'location': 'San Diego, CA',
    'x': 115,
    'y': 375,
    'conference': 'MWC',
    'division': null
  },{
    'school': 'USC',
    'mascot': 'Trojans',
    'location': 'Los Angeles, CA',
    'x': 101,
    'y': 348,
    'conference': 'Pac-12',
    'division': 'South'
  },{
    'school': 'UCLA',
    'mascot': 'Bruins',
    'location': 'Pasadena, CA',
    'x': 103,
    'y': 345,
    'conference': 'Pac-12',
    'division': 'South'
  },{
    'school': 'Stanford',
    'mascot': 'Cardinal',
    'location': 'Stanford, CA',
    'x': 57,
    'y': 258,
    'conference': 'Pac-12',
    'division': 'North'
  },{
    'school': 'Fresno State',
    'mascot': 'Bulldogs',
    'location': 'Fresno, CA',
    'x': 84,
    'y': 279,
    'conference': 'WAC',
    'division': null
  },{
    'school': 'Boston College',
    'mascot': 'Eagles',
    'location': 'Chestnut Hill, MA',
    'x': 888,
    'y': 158,
    'conference': 'ACC',
    'division': 'Atlantic',
    'popupPosition': 'left'
  },{
    'school': 'Clemson',
    'mascot': 'Tigers',
    'location': 'Clemson, SC',
    'x': 733,
    'y': 358,
    'conference': 'ACC',
    'division': 'Atlantic',
    'popupPosition': 'left'
  },{
    'school': 'Duke',
    'mascot': 'Blue Devils',
    'location': 'Durham, NC',
    'x': 800,
    'y': 321,
    'conference': 'ACC',
    'division': 'Coastal',
    'popupPosition': 'left'
  },{
    'school': 'Florida State',
    'mascot': 'Seminoles',
    'location': 'Tallahassee, FL',
    'x': 719,
    'y': 455,
    'conference': 'ACC',
    'division': 'Atlantic',
    'popupPosition': 'left'
  },{
    'school': 'Georgia Tech',
    'mascot': 'Yellow Jackets',
    'location': 'Atlanta, GA',
    'x': 710,
    'y': 385,
    'conference': 'ACC',
    'division': 'Coastal',
    'popupPosition': 'left'
  },{
    'school': 'Maryland',
    'mascot': 'Terrapins',
    'location': 'College Park, MD',
    'x': 818,
    'y': 249,
    'conference': 'ACC',
    'division': 'Atlantic',
    'popupPosition': 'left'
  },{
    'school': 'Miami (FL)',
    'mascot': 'Hurricanes',
    'location': 'Miami, FL',
    'x': 807,
    'y': 552,
    'conference': 'ACC',
    'division': 'Coastal',
    'popupPosition': 'left'
  },{
    'school': 'North Carolina',
    'mascot': 'Tar Heels',
    'location': 'Chapel Hill, NC',
    'x': 797,
    'y': 325,
    'conference': 'ACC',
    'division': 'Coastal',
    'popupPosition': 'left'
  },{
    'school': 'North Carolina State',
    'mascot': 'Wolfpack',
    'location': 'Raleigh, NC',
    'x': 807,
    'y': 327,
    'conference': 'ACC',
    'division': 'Atlantic',
    'popupPosition': 'left'
  },{
    'school': 'Virginia',
    'mascot': 'Cavaliers',
    'location': 'Charlottesville, VA',
    'x': 797,
    'y': 275,
    'conference': 'ACC',
    'division': 'Coastal',
    'popupPosition': 'left'
  },{
    'school': 'Virginia Tech',
    'mascot': 'Hokies',
    'location': 'Blacksburg, VA',
    'x': 767,
    'y': 301,
    'conference': 'ACC',
    'division': 'Coastal',
    'popupPosition': 'left'
  },{
    'school': 'Wake Forest',
    'mascot': 'Demon Deacons',
    'location': 'Winston-Salem, NC',
    'x': 776,
    'y': 323,
    'conference': 'ACC',
    'division': 'Atlantic',
    'popupPosition': 'left'
  },{
    'school': 'Baylor',
    'mascot': 'Bears',
    'location': 'Waco, TX',
    'x': 472,
    'y': 441,
    'conference': 'Big 12',
    'division': null
  },{
    'school': 'Iowa State',
    'mascot': 'Cyclones',
    'location': 'Ames, IA',
    'x': 531,
    'y': 215,
    'conference': 'Big 12',
    'division': null
  },{
    'school': 'Kansas',
    'mascot': 'Jayhawks',
    'location': 'Lawrence, KS',
    'x': 508,
    'y': 283,
    'conference': 'Big 12',
    'division': null
  },{
    'school': 'Kansas State',
    'mascot': 'Wildcats',
    'location': 'Manhattan, KS',
    'x': 488,
    'y': 280,
    'conference': 'Big 12',
    'division': null
  },{
    'school': 'Missouri',
    'mascot': 'Tigers',
    'location': 'Columbia, MO',
    'x': 547,
    'y': 283,
    'conference': 'Big 12',
    'division': null
  },{
    'school': 'Oklahoma',
    'mascot': 'Sooners',
    'location': 'Norman, OK',
    'x': 469,
    'y': 360,
    'conference': 'Big 12',
    'division': null
  },{
    'school': 'Oklahoma State',
    'mascot': 'Cowboys',
    'location': 'Stillwater, OK',
    'x': 476,
    'y': 345,
    'conference': 'Big 12',
    'division': null
  },{
    'school': 'Texas',
    'mascot': 'Longhorns',
    'location': 'Austin, TX',
    'x': 465,
    'y': 470,
    'conference': 'Big 12',
    'division': null
  },{
    'school': 'Texas A&M',
    'mascot': 'Aggies',
    'location': 'College Station, TX',
    'x': 485,
    'y': 460,
    'conference': 'Big 12',
    'division': null
  },{
    'school': 'Texas Tech',
    'mascot': 'Red Raiders',
    'location': 'Lubbock, TX',
    'x': 391,
    'y': 398,
    'conference': 'Big 12',
    'division': null
  },{
    'school': 'Cincinnati',
    'mascot': 'Bearcats',
    'location': 'Cincinnati, OH',
    'x': 688,
    'y': 268,
    'conference': 'Big East',
    'division': null,
    'popupPosition': 'left'
  },{
    'school': 'Connecticut',
    'mascot': 'Huskies',
    'location': 'East Hartford, CT',
    'x': 871,
    'y': 176,
    'conference': 'Big East',
    'division': null,
    'popupPosition': 'left'
  },{
    'school': 'Louisville',
    'mascot': 'Cardinals',
    'location': 'Louisville, KY',
    'x': 668,
    'y': 291,
    'conference': 'Big East',
    'division': null,
    'popupPosition': 'left'
  },{
    'school': 'Pittsburgh',
    'mascot': 'Panthers',
    'location': 'Pittsburgh, PA',
    'x': 760,
    'y': 227,
    'conference': 'Big East',
    'division': null,
    'popupPosition': 'left'
  },{
    'school': 'Rutgers',
    'mascot': 'Scarlet Knights',
    'location': 'Piscataway, NJ',
    'x': 849,
    'y': 209,
    'conference': 'Big East',
    'division': null,
    'popupPosition': 'left'
  },{
    'school': 'South Florida',
    'mascot': 'Bulls',
    'location': 'Tampa, FL',
    'x': 761,
    'y': 502,
    'conference': 'Big East',
    'division': null,
    'popupPosition': 'left'
  },{
    'school': 'Syracuse',
    'mascot': 'Orange',
    'location': 'Syracuse, NY',
    'x': 812,
    'y': 160,
    'conference': 'Big East',
    'division': null,
    'popupPosition': 'left'
  },{
    'school': 'West Virginia',
    'mascot': 'Mountaineers',
    'location': 'Morgantown, WV',
    'x': 764,
    'y': 245,
    'conference': 'Big East',
    'division': null,
    'popupPosition': 'left'
  },{
    'school': 'Iowa',
    'mascot': 'Hawkeyes',
    'location': 'Iowa City, IA',
    'x': 568,
    'y': 221,
    'conference': 'Big Ten',
    'division': 'Legends',
    'popupPosition': 'left'
  },{
    'school': 'Michigan',
    'mascot': 'Wolverines',
    'location': 'Ann Arbor, MI',
    'x': 689,
    'y': 197,
    'conference': 'Big Ten',
    'division': 'Legends',
    'popupPosition': 'left'
  },{
    'school': 'Michigan State',
    'mascot': 'Spartans',
    'location': 'East Lansing, MI',
    'x': 679,
    'y': 187,
    'conference': 'Big Ten',
    'division': 'Legends',
    'popupPosition': 'left'
  },{
    'school': 'Minnesota',
    'mascot': 'Golden Gophers',
    'location': 'Minneapolis, MN',
    'x': 535,
    'y': 155,
    'conference': 'Big Ten',
    'division': 'Legends',
    'popupPosition': 'left'
  },{
    'school': 'Nebraska',
    'mascot': 'Cornhuskers',
    'location': 'Lincoln, NE',
    'x': 480,
    'y': 245,
    'conference': 'Big Ten',
    'division': 'Legends',
    'popupPosition': 'left'
  },{
    'school': 'Northwestern',
    'mascot': 'Wildcats',
    'location': 'Evanston, IL',
    'x': 628,
    'y': 211,
    'conference': 'Big Ten',
    'division': 'Legends',
    'popupPosition': 'left'
  },{
    'school': 'Illinois',
    'mascot': 'Fighting Illini',
    'location': 'Champaign, IL',
    'x': 620,
    'y': 250,
    'conference': 'Big Ten',
    'division': 'Leaders',
    'popupPosition': 'left'
  },{
    'school': 'Indiana',
    'mascot': 'Hoosiers',
    'location': 'Bloomington, IN',
    'x': 657,
    'y': 273,
    'conference': 'Big Ten',
    'division': 'Leaders',
    'popupPosition': 'left'
  },{
    'school': 'Ohio State',
    'mascot': 'Buckeyes',
    'location': 'Columbus, OH',
    'x': 710,
    'y': 248,
    'conference': 'Big Ten',
    'division': 'Leaders',
    'popupPosition': 'left'
  },{
    'school': 'Penn State',
    'mascot': 'Nittany Lions',
    'location': 'University Park, PA',
    'x': 797,
    'y': 214,
    'conference': 'Big Ten',
    'division': 'Leaders',
    'popupPosition': 'left'
  },{
    'school': 'Purdue',
    'mascot': 'Boilermakers',
    'location': 'West Lafayette, IN',
    'x': 646,
    'y': 245,
    'conference': 'Big Ten',
    'division': 'Leaders',
    'popupPosition': 'left'
  },{
    'school': 'Wisconsin',
    'mascot': 'Badgers',
    'location': 'Madison, WI',
    'x': 599,
    'y': 189,
    'conference': 'Big Ten',
    'division': 'Leaders',
    'popupPosition': 'left'
  },{
    'school': 'East Carolina',
    'mascot': 'Pirates',
    'location': 'Greenville, NC',
    'x': 824,
    'y': 329,
    'conference': 'Conference USA',
    'division': 'East',
    'popupPosition': 'left'
  },{
    'school': 'Marshall',
    'mascot': 'Thundering Herd',
    'location': 'Huntington, WV',
    'x': 729,
    'y': 279,
    'conference': 'Conference USA',
    'division': 'East',
    'popupPosition': 'left'
  },{
    'school': 'Memphis',
    'mascot': 'Tigers',
    'location': 'Memphis, TN',
    'x': 606,
    'y': 361,
    'conference': 'Conference USA',
    'division': 'East',
    'popupPosition': 'left'
  },{
    'school': 'Southern Miss',
    'mascot': 'Golden Eagles',
    'location': 'Memphis, TN',
    'x': 626,
    'y': 446,
    'conference': 'Conference USA',
    'division': 'East',
    'popupPosition': 'left'
  },{
    'school': 'UAB',
    'mascot': 'Blazers',
    'location': 'Birmingham, AL',
    'x': 666,
    'y': 395,
    'conference': 'Conference USA',
    'division': 'East',
    'popupPosition': 'left'
  },{
    'school': 'UCF',
    'mascot': 'Knights',
    'location': 'Orlando, FL',
    'x': 775,
    'y': 486,
    'conference': 'Conference USA',
    'division': 'East',
    'popupPosition': 'left'
  },{
    'school': 'Houston',
    'mascot': 'Cougars',
    'location': 'Houston, TX',
    'x': 516,
    'y': 483,
    'conference': 'Conference USA',
    'division': 'West',
    'popupPosition': 'left'
  },{
    'school': 'Rice',
    'mascot': 'Owls',
    'location': 'Houston, TX',
    'x': 514,
    'y': 483,
    'conference': 'Conference USA',
    'division': 'West',
    'popupPosition': 'left'
  },{
    'school': 'Southern Methodist',
    'mascot': 'Mustangs',
    'location': 'Dallas, TX',
    'x': 483,
    'y': 417,
    'conference': 'Conference USA',
    'division': 'West',
    'popupPosition': 'left'
  },{
    'school': 'Tulane',
    'mascot': 'Green Wave',
    'location': 'New Orleans, LA',
    'x': 620,
    'y': 478,
    'conference': 'Conference USA',
    'division': 'West',
    'popupPosition': 'left'
  },{
    'school': 'Tulsa',
    'mascot': 'Golden Hurricane',
    'location': 'Tulsa, OK',
    'x': 499,
    'y': 345,
    'conference': 'Conference USA',
    'division': 'West',
    'popupPosition': 'left'
  },{
    'school': 'UTEP',
    'mascot': 'Miners',
    'location': 'El Paso, TX',
    'x': 299,
    'y': 426,
    'conference': 'Conference USA',
    'division': 'West',
    'popupPosition': 'right'
  },{
    'school': 'Navy',
    'mascot': 'Midshipmen',
    'location': 'Annapolis, MD',
    'x': 825,
    'y': 249,
    'conference': 'Independents',
    'division': null,
    'popupPosition': 'left'
  },{
    'school': 'Army',
    'mascot': 'Black Knights',
    'location': 'West Point, NY',
    'x': 849,
    'y': 187,
    'conference': 'Independents',
    'division': null,
    'popupPosition': 'left'
  },{
    'school': 'Notre Dame',
    'mascot': 'Fighting Irish',
    'location': 'South Bend, IN',
    'x': 651,
    'y': 218,
    'conference': 'Independents',
    'division': null,
    'popupPosition': 'left'
  },{
    'school': 'Florida',
    'mascot': 'Gators',
    'location': 'Gainesville, FL',
    'x': 758,
    'y': 465,
    'conference': 'SEC',
    'division': 'East',
    'popupPosition': 'left'
  },{
    'school': 'Akron',
    'mascot': 'Zips',
    'location': 'Akron, OH',
    'x': 736,
    'y': 218,
    'conference': 'MAC',
    'division': 'East',
    'popupPosition': 'left'
  },{
    'school': 'Bowling Green',
    'mascot': 'Falcons',
    'location': 'Bowling Green, OH',
    'x': 695,
    'y': 219,
    'conference': 'MAC',
    'division': 'East',
    'popupPosition': 'left'
  },{
    'school': 'Kent State',
    'mascot': 'Golden Flashes',
    'location': 'Kent, OH',
    'x': 738,
    'y': 215,
    'conference': 'MAC',
    'division': 'East',
    'popupPosition': 'left'
  },{
    'school': 'Miami (OH)',
    'mascot': 'RedHawks',
    'location': 'Oxford, OH',
    'x': 682,
    'y': 259,
    'conference': 'MAC',
    'division': 'East',
    'popupPosition': 'left'
  },{
    'school': 'Ohio',
    'mascot': 'Bobcats',
    'location': 'Athens, OH',
    'x': 728,
    'y': 255,
    'conference': 'MAC',
    'division': 'East',
    'popupPosition': 'left'
  },{
    'school': 'Toledo',
    'mascot': 'Rockets',
    'location': 'Toledo, OH',
    'x': 696,
    'y': 212,
    'conference': 'MAC',
    'division': 'West',
    'popupPosition': 'left'
  },{
    'school': 'Buffalo',
    'mascot': 'Bulls',
    'location': 'Buffalo, NY',
    'x': 770,
    'y': 175,
    'conference': 'MAC',
    'division': 'East',
    'popupPosition': 'left'
  },{
    'school': 'Temple',
    'mascot': 'Owls',
    'location': 'Philadelphia, PA',
    'x': 839,
    'y': 224,
    'conference': 'MAC',
    'division': 'East',
    'popupPosition': 'left'
  },{
    'school': 'Ball State',
    'mascot': 'Cardinals',
    'location': 'Muncie, IN',
    'x': 669,
    'y': 245,
    'conference': 'MAC',
    'division': 'West',
    'popupPosition': 'left'
  },{
    'school': 'Central Michigan',
    'mascot': 'Chippewas',
    'location': 'Mount Pleasant, MI',
    'x': 670,
    'y': 172,
    'conference': 'MAC',
    'division': 'West',
    'popupPosition': 'left'
  },{
    'school': 'Eastern Michigan',
    'mascot': 'Eagles',
    'location': 'Ypsilanti, MI',
    'x': 691,
    'y': 199,
    'conference': 'MAC',
    'division': 'West',
    'popupPosition': 'left'
  },{
    'school': 'Northern Illinois',
    'mascot': 'Huskies',
    'location': 'Dekalb, IL',
    'x': 609,
    'y': 217,
    'conference': 'MAC',
    'division': 'West',
    'popupPosition': 'left'
  },{
    'school': 'Western Michigan',
    'mascot': 'Broncos',
    'location': 'Kalamazoo, MI',
    'x': 663,
    'y': 199,
    'conference': 'MAC',
    'division': 'West',
    'popupPosition': 'left'
  },{
    'school': 'Air Force',
    'mascot': 'Falcons',
    'location': 'USAFA, CO',
    'x': 344,
    'y': 278,
    'conference': 'MWC',
    'division': null,
    'popupPosition': 'right'
  },{
    'school': 'Boise State',
    'mascot': 'Broncos',
    'location': 'Boise, ID',
    'x': 183,
    'y': 148,
    'conference': 'MWC',
    'division': null,
    'popupPosition': 'right'
  },{
    'school': 'Colorado State',
    'mascot': 'Rams',
    'location': 'Fort Collins, CO',
    'x': 345,
    'y': 245,
    'conference': 'MWC',
    'division': null,
    'popupPosition': 'right'
  },{
    'school': 'New Mexico',
    'mascot': 'Lobos',
    'location': 'Albuquerque, NM',
    'x': 309,
    'y': 360,
    'conference': 'MWC',
    'division': null,
    'popupPosition': 'right'
  },{
    'school': 'TCU',
    'mascot': 'Horned Frogs',
    'location': 'Fort Worth, TX',
    'x': 476,
    'y': 417,
    'conference': 'MWC',
    'division': null,
    'popupPosition': 'right'
  },{
    'school': 'UNLV',
    'mascot': 'Rebels',
    'location': 'Las Vegas, NV',
    'x': 162,
    'y': 317,
    'conference': 'MWC',
    'division': null,
    'popupPosition': 'right'
  },{
    'school': 'Wyoming',
    'mascot': 'Cowboys',
    'location': 'Laramie, WY',
    'x': 340,
    'y': 221,
    'conference': 'MWC',
    'division': null,
    'popupPosition': 'right'
  },{
    'school': 'Oregon State',
    'mascot': 'Beavers',
    'location': 'Corvallis, OR',
    'x': 80,
    'y': 103,
    'conference': 'Pac-12',
    'division': 'North',
    'popupPosition': 'right'
  },{
    'school': 'Washington',
    'mascot': 'Huskies',
    'location': 'Seattle, WA',
    'x': 109,
    'y': 43,
    'conference': 'Pac-12',
    'division': 'North',
    'popupPosition': 'right'
  },{
    'school': 'Washington State',
    'mascot': 'Cougars',
    'location': 'Pullman, WA',
    'x': 181,
    'y': 78,
    'conference': 'Pac-12',
    'division': 'North',
    'popupPosition': 'right'
  },{
    'school': 'Arizona State',
    'mascot': 'Sun Devils',
    'location': 'Tempe, AZ',
    'x': 213,
    'y': 373,
    'conference': 'Pac-12',
    'division': 'South',
    'popupPosition': 'right'
  },{
    'school': 'Colorado',
    'mascot': 'Buffaloes',
    'location': 'Boulder, CO',
    'x': 336,
    'y': 256,
    'conference': 'Pac-12',
    'division': 'South',
    'popupPosition': 'right'
  },{
    'school': 'Utah',
    'mascot': 'Utes',
    'location': 'Salt Lake City, UT',
    'x': 236,
    'y': 226,
    'conference': 'Pac-12',
    'division': 'South',
    'popupPosition': 'right'
  },{
    'school': 'Georgia',
    'mascot': 'Bulldogs',
    'location': 'Athens, GA',
    'x': 724,
    'y': 378,
    'conference': 'SEC',
    'division': 'East',
    'popupPosition': 'left'
  },{
    'school': 'Kentucky',
    'mascot': 'Wildcats',
    'location': 'Lexington, KY',
    'x': 691,
    'y': 293,
    'conference': 'SEC',
    'division': 'East',
    'popupPosition': 'left'
  },{
    'school': 'South Carolina',
    'mascot': 'Gamecocks',
    'location': 'Columbia, SC',
    'x': 767,
    'y': 368,
    'conference': 'SEC',
    'division': 'East',
    'popupPosition': 'left'
  },{
    'school': 'Tennessee',
    'mascot': 'Volunteers',
    'location': 'Knoxville, TN',
    'x': 709,
    'y': 334,
    'conference': 'SEC',
    'division': 'East',
    'popupPosition': 'left'
  },{
    'school': 'Vanderbilt',
    'mascot': 'Commodores',
    'location': 'Nashville, TN',
    'x': 660,
    'y': 338,
    'conference': 'SEC',
    'division': 'East',
    'popupPosition': 'left'
  },{
    'school': 'Alabama',
    'mascot': 'Crimson Tide',
    'location': 'Tuscaloosa, AL',
    'x': 654,
    'y': 403,
    'conference': 'SEC',
    'division': 'West',
    'popupPosition': 'left'
  },{
    'school': 'Arkansas',
    'mascot': 'Razorbacks',
    'location': 'Fayetteville, AR',
    'x': 534,
    'y': 348,
    'conference': 'SEC',
    'division': 'West',
    'popupPosition': 'left'
  },{
    'school': 'Auburn',
    'mascot': 'Tigers',
    'location': 'Auburn, AL',
    'x': 686,
    'y': 412,
    'conference': 'SEC',
    'division': 'West',
    'popupPosition': 'left'
  },{
    'school': 'LSU',
    'mascot': 'Tigers',
    'location': 'Baton Rouge, LA',
    'x': 595,
    'y': 465,
    'conference': 'SEC',
    'division': 'West',
    'popupPosition': 'left'
  },{
    'school': 'Mississippi State',
    'mascot': 'Bulldogs',
    'location': 'Starkville, MS',
    'x': 626,
    'y': 399,
    'conference': 'SEC',
    'division': 'West',
    'popupPosition': 'left'
  },{
    'school': 'Ole Miss',
    'mascot': 'Rebels',
    'location': 'University, MS',
    'x': 614,
    'y': 377,
    'conference': 'SEC',
    'division': 'West',
    'popupPosition': 'left'
  },{
    'school': 'Arkansas State',
    'mascot': 'Red Wolves',
    'location': 'Jonesboro, AR',
    'x': 587,
    'y': 351,
    'conference': 'Sun Belt',
    'division': null,
    'popupPosition': 'left'
  },{
    'school': 'Florida Atlantic',
    'mascot': 'Owls',
    'location': 'Boca Raton, FL',
    'x': 811,
    'y': 530,
    'conference': 'Sun Belt',
    'division': null,
    'popupPosition': 'left'
  },{
    'school': 'Florida International',
    'mascot': 'Golden Panthers',
    'location': 'Miami, FL',
    'x': 805,
    'y': 551,
    'conference': 'Sun Belt',
    'division': null,
    'popupPosition': 'left'
  },{
    'school': 'Louisiana-Lafayette',
    'mascot': "Ragin' Cajuns",
    'location': 'Lafayette, LA',
    'x': 576,
    'y': 469,
    'conference': 'Sun Belt',
    'division': null,
    'popupPosition': 'left'
  },{
    'school': 'Louisiana-Monroe',
    'mascot': "Warhawks",
    'location': 'Monroe, LA',
    'x': 571,
    'y': 423,
    'conference': 'Sun Belt',
    'division': null,
    'popupPosition': 'left'
  },{
    'school': 'North Texas',
    'mascot': "Mean Green",
    'location': 'Denton, TX',
    'x': 479,
    'y': 409,
    'conference': 'Sun Belt',
    'division': null,
    'popupPosition': 'left'
  },{
    'school': 'Troy',
    'mascot': "Trojans",
    'location': 'Troy, AL',
    'x': 677,
    'y': 426,
    'conference': 'Sun Belt',
    'division': null,
    'popupPosition': 'left'
  },{
    'school': 'Western Kentucky',
    'mascot': "Hilltoppers",
    'location': 'Bowling Green, KY',
    'x': 664,
    'y': 315,
    'conference': 'Sun Belt',
    'division': null,
    'popupPosition': 'left'
  },{
    'school': 'Hawaii',
    'mascot': "Warriors",
    'location': 'Honolulu, HI',
    'x': 292,
    'y': 532,
    'conference': 'WAC',
    'division': null,
    'popupPosition': 'left'
  },{
    'school': 'Idaho',
    'mascot': "Vandals",
    'location': 'Moscow, ID',
    'x': 184,
    'y': 79,
    'conference': 'WAC',
    'division': null,
    'popupPosition': 'right'
  },{
    'school': 'Louisiana Tech',
    'mascot': "Bulldogs",
    'location': 'Ruston, LA',
    'x': 557,
    'y': 423,
    'conference': 'WAC',
    'division': null,
    'popupPosition': 'left'
  },{
    'school': 'Nevada',
    'mascot': "Wolf Pack",
    'location': 'Reno, NV',
    'x': 103,
    'y': 222,
    'conference': 'WAC',
    'division': null,
    'popupPosition': 'right'
  },{
    'school': 'New Mexico State',
    'mascot': "Aggies",
    'location': 'Las Cruces, NM',
    'x': 298,
    'y': 410,
    'conference': 'WAC',
    'division': null,
    'popupPosition': 'right'
  },{
    'school': 'Utah State',
    'mascot': "Aggies",
    'location': 'Logan, UT',
    'x': 240,
    'y': 205,
    'conference': 'WAC',
    'division': null,
    'popupPosition': 'right'
  }
];