var categories = {
};

var best_actor = {
};
best_actor['nominees'] = [
  {'actor': 'Steve Carell', 'movie': 'Foxcatcher'},
  {'actor': 'Eddie Redmayne', 'movie': 'The Theory of Everything'},
  {'actor': 'Benedict Cumberbatch', 'movie': 'The Imitation Game'},
  {'actor': 'Bradley Cooper', 'movie': 'American Sniper'},
  {'actor': 'Michael Keaton', 'movie': 'Birdman: Or (The Unexpected Virtue of Ignorance)'}
];
best_actor['winner'] = {'actor': 'Eddie Redmayne', 'movie': 'The Theory of Everything'};
best_actor['attributes'] = ['actor', 'movie'];
categories['best_actor'] = best_actor;

var best_motion_picture = {
};
best_motion_picture['nominees'] = [
  {'movie': 'Birdman: Or (The Unexpected Virtue of Ignorance)'},
  {'movie': 'American Sniper'},
  {'movie': 'The Imitation Game'},
  {'movie': 'Selma'},
  {'movie': 'Boyhood'},
  {'movie': 'The Theory of Everything'},
  {'movie': 'Whiplash'},
  {'movie': 'The Grand Budapest Hotel'}
];
best_motion_picture['winner'] = {'movie': 'Birdman: Or (The Unexpected Virtue of Ignorance)'};
best_motion_picture['attributes'] = ['movie'];
categories['best_motion_picture'] = best_motion_picture;

var best_director = {
};
best_director['nominees'] = [
  {'director': 'Alejandro G. Inarritu', 'movie': 'Birdman: Or (The Unexpected Virtue of Ignorance)'},
  {'director': 'Richard Linklater', 'movie': 'Boyhood'},
  {'director': 'Bennett Miller', 'movie': 'Foxcatcher'},
  {'director': 'Wes Anderson', 'movie': 'The Grand Budapest Hotel'},
  {'director': 'Morten Tyldum', 'movie': 'The Imitation Game'}
];
best_director['winner'] = {'director': 'Alejandro G. Inarritu', 'movie': 'Birdman: Or (The Unexpected Virtue of Ignorance)'};
best_director['attributes'] = ['director', 'movie'];
categories['best_director'] = best_director;

var best_actress = {
};
best_actress['nominees'] = [
  {'actress': 'Marion Cotillard', 'movie': 'Two Days, One Night'},
  {'actress': 'Felicity Jones', 'movie': 'The Theory of Everything'},
  {'actress': 'Rosamund Pike', 'movie': 'Gone Girl'},
  {'actress': 'Reese Witherspoon', 'movie': 'Wild'},
  {'actress': 'Julianne Moore', 'movie': 'Still Alice'}
];
best_actress['winner']
= {'actress': 'Julianne Moore', 'movie': 'Still Alice'};
best_actress['attributes'] = ['actress', 'movie']
categories['best_actress'] = best_actress;

var best_animated_feature_film = {
};
best_animated_feature_film['nominees'] = [
  {'movie': 'The Boxtrolls'},
  {'movie': 'How to Train Your Dragon 2'},
  {'movie': 'Big Hero 6'},
  {'movie': 'Song of the Sea'},
  {'movie': 'The Tale of the Princess Kaguya'}
];
best_animated_feature_film['winner'] = {'movie': 'Big Hero 6'};
best_animated_feature_film['attributes'] = ['movie']
categories['best_animated_feature_film'] = best_animated_feature_film;

var best_achievement_in_visual_effects = {
};
best_achievement_in_visual_effects['nominees'] = [
  {'movie': 'Captain America: The Winter Soldier'},
  {'movie': 'Interstellar'},
  {'movie': 'Dawn of the Planet of the Apes'},
  {'movie': 'Guardians of the Galaxy'},
  {'movie': 'X-Men: Days of Future Past'}
];
best_achievement_in_visual_effects['winner'] = {'movie': 'Interstellar'};
best_achievement_in_visual_effects['attributes'] = ['movie'];
categories['best_achievement_in_visual_effects'] = best_achievement_in_visual_effects;

var best_supporting_actress = {
};
best_supporting_actress['nominees'] = [
  {'actress': 'Laura Dern', 'movie': 'Wild'},
  {'actress': 'Keira Knightley', 'movie': 'The Imitation Game'},
  {'actress': 'Emma Stone', 'movie': 'Birdman: Or (The Unexpected Virtue of Ignorance)'},
  {'actress': 'Patricia Arquette', 'movie': 'Boyhood'},
  {'actrees': 'Meryl Streep', 'movie': 'Into the Woods'}
];
best_supporting_actress['winner'] = {'actress': 'Patricia Arquette', 'movie': 'Boyhood'};
best_supporting_actress['attributes'] = ['actress', 'movie'];
categories['best_supporting_actress'] = best_supporting_actress;

var best_foreign_language_film = {
};
best_foreign_language_film['nominees'] = [
  {'movie': 'Tangerines'},
  {'movie': 'Leviathan'},
  {'movie': 'Ida'},
  {'movie': 'Wild Tales'},
  {'movie': 'Timbuktu'}
];
best_foreign_language_film['winner'] = {'movie': 'Ida'};
best_foreign_language_film['attributes'] = ['movie'];
categories['best_foreign_language_film'] = best_foreign_language_film;

var best_supporting_actor = {
};
best_supporting_actor['nominees'] = [
  {'actor': 'Robert Duvall', 'movie': 'The Judge'},
  {'actor': 'JK Simmons', 'movie': 'Whiplash'},
  {'actor': 'Ethan Hawke', 'movie': 'Boyhood'},
  {'actor': 'Edward Norton', 'movie': 'Birdman: Or (The Unexpected Virtue of Ignorance)'},
  {'actor': 'Mark Ruffalo', 'movie': 'Foxcatcher'},
];
best_supporting_actor['winner'] = {'actor': 'JK Simmons', 'movie': 'Whiplash'};
best_supporting_actor['attributes'] = ['actor', 'movie'];
categories['best_supporting_actor'] = best_supporting_actor;

module.exports = categories;