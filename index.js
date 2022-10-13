const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json({inflate: true}));

app.use(cors({
    origin: '*'
}));

let usersArray = [
		{
			id: 0,
			name: `Jegoras`,
			surname: `Vistai`,
			avatar: `https://d.newsweek.com/en/full/520858/supermoon-moon-smartphone-photo-picture.jpg?w=1600&h=1600&q=88&f=bb45f0cd0324ae5e04827f684a9da7e8`,
			status: '',
			location: {
				city: 'Salt Lake City',
				state: 'UH',
				country: 'United States',
			},
			isFollowed: false,
		},
		{
			id: 1,
			name: `John`,
			surname: `Garner`,
			avatar: `https://static6.depositphotos.com/1003369/659/i/600/depositphotos_6591667-stock-photo-close-up-of-beautiful-womanish.jpg`,
			status: '✈️ California tomorrow',
			location: {
				city: 'Salt Lake City',
				state: 'UH',
				country: 'United States',
			},
			isFollowed: true,
		},
		{
			id: 2,
			name: `Jane`,
			surname: `Heaton`,
			avatar: `https://www.datocms-assets.com/55010/1631448989-1609827493259134-modelo.jpg?auto=format%2Ccompress&cs=srgb`,
			status: 'Model from UK',
			location: {
				city: 'Liverpool',
				state: '',
				country: 'United Kingdom',
			},
			isFollowed: true,
		},
		{
			id: 3,
			name: `Alex`,
			surname: `Drake`,
			avatar: `https://sticker-collection.com/stickers/plain/johnnysinsbrazzers/512/c912f70a-f67f-4fe1-af3c-10b5c590047ffile_368359.webp`,
			status: 'playing Call of Duty: Modern Warfare',
			location: {
				city: 'Ogden',
				state: 'UH',
				country: 'United States',
			},
			isFollowed: true,
		},
		{
			id: 4,
			name: `Jakub`,
			surname: `Mathis`,
			avatar: `https://m.media-amazon.com/images/I/61GLqTPhoJL._AC_UL400_.jpg`,
			status: '',
			location: {
				city: 'Dallas',
				state: 'TX',
				country: 'United States',
			},
			isFollowed: true,
		},
		{
			id: 5,
			name: `Elisabeth`,
			surname: `Plummer`,
			avatar: `https://blogforlife.org/wp-content/uploads/2022/05/post_0700_0_debora-lombardi-flower.jpg`,
			status: '',
			location: {
				city: 'New York City',
				state: 'NY',
				country: 'United States',
			},
			isFollowed: true,
		},
		{
			id: 6,
			name: `Michael`,
			surname: `Smith`,
			avatar: `https://i.guim.co.uk/img/media/b3f9db5d504c00304c37724927b6e407da17c36b/0_197_5850_3511/master/5850.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=87966753ed0906994f60f72735295414`,
			status: 'tierschutzbund.de',
			location: {
				city: 'Munich',
				state: '',
				country: 'Germany',
			},
			isFollowed: false,
		},
	];

let createResponseObject = (page, count) => {
	let items = [...usersArray];
	
	return {
		items: items.splice(page * count - count, count),
		totalUsersCount: usersArray.length,
	}
}

app.get('/', (req, res) => {
    res.send('ReactSocial API');
});

app.get('/api/1.0/users', (req, res) => {
	let page = req.query.page || 1;
	let count = req.query.count || 2;
	
    res.json(createResponseObject(page, count));
});

app.post('/api/1.0/users', (req, res) => {
    usersArray.push(req.body);
    res.json(req.body);
});

app.put('/api/1.0/users/:id', (req, res) => {
    const user = usersArray.find(u => u.id === +req.params.id);
    const userIndex = usersArray.indexOf(user);
    usersArray[userIndex] = {...user, ...req.body};
    res.json({success: true});

});

app.delete('/api/1.0/users/:id', (req, res) => {
    const user = usersArray.find(u => u.id === +req.params.id);
    const userIndex = usersArray.indexOf(user);
    usersArray.splice(userIndex, 1);
    res.json({success: true});
});

app.listen(5000, () => console.log('Listening on port 5000'));
