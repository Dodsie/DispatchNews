INSERT INTO users (name, email, password) VALUES ('Jojo Leadbeatter', 'jleadbeatter2@bandcamp.com', 'labber');
INSERT INTO users (name, email, password) VALUES ('Ben Leadbeatter', 'jleadbeatter3@bandcamp.com', 'labber');
INSERT INTO users (name, email, password) VALUES ('James Leadbeatter', 'jleadbeatter4@bandcamp.com', 'labber');
INSERT INTO users (name, email, password) VALUES ('Logan Leadbeatter', 'jleadbeatter5@bandcamp.com', 'labber');

INSERT INTO articles(author, content, description, publishedAt, source, title, url, urlToImage) VALUES ('Scott Gilbertson',
'The other thing the Evo Lite+ offers is better low-light performance. The Air 2S has a maximum ISO of 6,400 in manual video capture, or 1,600 if youre shooting D-log. The Evo Lite+ can shoot ISO 48,… [+3808 chars]',
'Autels new Evo Lite+ has a night mode and great flight time, and its a compelling alternative to DJIs most popular drones.',
'2022-04-23T12:00:00Z',
'Wired',
'Give Autels Evo Lite+ Drone a Spin—Especially in Ludicrous Mode',
'https://www.wired.com/review/autel-evo-lite-plus-drone/',
'https://media.wired.com/photos/6261eae7536da34b19a67ad2/191:100/w_1280,c_limit/Autel-Evo-Lite+-Drone-Gear.jpg'
);

INSERT INTO favorites (user_id, article_id) VALUES (1, 1);