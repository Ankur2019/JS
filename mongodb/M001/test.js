// Chapter 3: Deeper Dive on the MongoDB Query Language

// $regex Operator

db.movieDetails.find( {"awards.text":  {$regex: /^Won .* / } }, {_id: 0, title: 1, "awards.text": 1 } ).pretty()

{$or: [{"tomato.meter": {$gt: 95}},                               
                            {"metacritic": {$gt: 88}}]}

{$and: [{"tripduration" : null}, {"tripduration" : {$exists: true}} ] }

db.movieDetails.find({$or: [{"tomato.meter": {$gt: 95}},                               
                            {"metacritic": {$gt: 88}}]},
                     {_id: 0, title: 1, "tomato.meter": 1, "metacritic": 1})


db.movieDetails.find({ $or : [ {"actors" : "Jack Nicholson"} , {"actors" : "John Huston"}] } , {"viewerRating": {$gt:7}}, {"mpaaRating": "R"  }}, {_id: 0, title: 1}).count()

db.movies.find({ $or : [ {"actors" : "Jack Nicholson"} , {"actors" : "John Huston"}] } ).count()

db.movieDetails.find({ "mpaaRating" : "R"} ).count()

{ { $or : [ {"cast" : "Jack Nicholson"} , {"cast" : "John Huston"}] }, {"viewerRating": {$gt:7}}, {"mpaaRating": "R"  } }

{ $or : [ {"cast" : "Jack Nicholson"} , {"cast" : "John Huston"}] , "viewerRating": {$gt:7}, "mpaaRating": "R" }