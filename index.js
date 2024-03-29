const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Cookies = require('cookies');

const app = express();
app.use(bodyParser.json({inflate: true}));

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

let userInfoReducer = (id) => {
    return {
        id: users[id].id,
        name: users[id].name,
        surname: users[id].surname,
        avatar: users[id].avatar,
    }
};

const users = [
    {
        id: 0,
        name: `Jegoras`,
        surname: `Vistai`,
        login: 'vistai',
        avatar: `https://i.imgur.com/BSYRW9O.jpg`,
        banner: `https://i.imgur.com/nd73MKT.jpg`,
        status: 'CS:GO commentator, player and analyst',
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
        login: 'admin',
        avatar: `https://i.imgur.com/ZeadwhP.png`,
        banner: `https://i.imgur.com/QARaExg.png`,
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
        login: 'j.heaton',
        avatar: `https://i.imgur.com/Maz30rM.png`,
        banner: `https://i.imgur.com/pbep6CU.jpg`,
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
        login: 'cooldrake',
        avatar: `https://i.imgur.com/uoOpu4n.png`,
        banner: `https://i.imgur.com/dQITN3G.jpg`,
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
        login: 'j.mathis',
        avatar: `https://i.imgur.com/ronceF0.jpg`,
        banner: `https://i.imgur.com/dQITN3G.jpg`,
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
        login: 'e.plumer',
        avatar: `https://i.imgur.com/wLTG7OH.jpg`,
        banner: `https://i.imgur.com/dQITN3G.jpg`,
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
        login: 'smith1987',
        avatar: `https://i.imgur.com/kDPcKlU.png`,
        banner: `https://i.imgur.com/dQITN3G.jpg`,
        status: 'tierschutzbund.de',
        location: {
            city: 'Munich',
            state: '',
            country: 'Germany',
        },
        isFollowed: false,
    },
];

const usersPosts = {
    "posts-user-0": [
        {
            id: 1,
            author: userInfoReducer(1),
            message: `Hey. How are you feeling today?`,
            likeCount: 20
        },
        {
            id: 2,
            author: userInfoReducer(6),
            message: `I finished my album. Go check it out!`,
            likeCount: 34
        },
        {
            id: 3,
            author: userInfoReducer(3),
            message: `I'm going on a picnic. Do you wanna join?`,
            likeCount: 1
        },
    ],
    "posts-user-1": [],
    "posts-user-2": [],
    "posts-user-3": [],
    "posts-user-4": [],
    "posts-user-5": [],
    "posts-user-6": [],
};

const usersDialogsStorage = {
    'user-0': [0, 1, 2, 3, 4],
    'user-1': [0],
    'user-2': [1],
    'user-3': [2],
    'user-4': [3],
    'user-5': [4],
    'user-6': [],

};

const dialogs = [
    {
        dialogId: 0,
        members: [userInfoReducer(0), userInfoReducer(1)],
        messages: [
            {id: 0, authorId: 1, content: `Morning`},
            {id: 1, authorId: 1, content: `What about our business?`},
        ],
    },
    {
        dialogId: 1,
        members: [userInfoReducer(0), userInfoReducer(2)],
        messages: [
            {id: 0, authorId: 2, content: `Are you free?`},
            {id: 1, authorId: 0, content: `Yup`},
            {id: 2, authorId: 2, content: `Let's meet in an hour`},
            {id: 3, authorId: 0, content: `Deal`},
        ],
    },
    {
        dialogId: 2,
        members: [userInfoReducer(0), userInfoReducer(3)],
        messages: [
            {id: 0, authorId: 3, content: `Wanna play? I'll invite u`},
            {id: 1, authorId: 0, content: `Sure. I'll be right in`},
        ],
    },
    {
        dialogId: 3,
        members: [userInfoReducer(0), userInfoReducer(4)],
        messages: [
            {id: 0, authorId: 0, content: `Do you remember that we have a meeting today?`},
            {id: 1, authorId: 4, content: `Yh. I won't be late`},
        ],
    },
    {
        dialogId: 4,
        members: [userInfoReducer(0), userInfoReducer(5)],
        messages: [
            {id: 0, authorId: 5, content: `Come to the exhibition today at 7 pm!`},
        ]
    },
];

const usersResponseCreator = (page, count) => {
    let items = [];
    [...users].splice(page * count - count, count).map(i => {
        items.push({
            id: i.id,
            name: i.name,
            surname: i.surname,
            avatar: i.avatar,
            status: i.status,
            location: {
                city: i.location.city,
                state: i.location.state,
                country: i.location.country
            },
            isFollowed: i.isFollowed,
        });
    });
    return {
        items: items,
        totalCount: users.length,
    };
};

const profileResponseCreator = (user) => {
    let items = {
        id: user.id,
        name: user.name,
        surname: user.surname,
        avatar: user.avatar,
        banner: user.banner,
        status: user.status,
        location: {
            city: user.location.city,
            state: user.location.state,
            country: user.location.country
        },
    };
    let posts = usersPosts[`posts-user-${user.id}`];

    return {
        items,
        posts
    };
}

const loginResponseCreator = (user, loginStatus) => {
    if (loginStatus) {
        return {
            resultCode: 0,
            loginData: {
                id: user.id,
                login: user.login,
                name: user.name,
                surname: user.surname,
            },
            dialogs: dialogsResponseCreator(user).dialogs
        };
    } else {
        return {
            resultCode: 1,
            message: "Incorrect login!"
        }
    }

};

const followResponseCreator = (method, loginStatus, followStatus = null) => {
    if (method === 'GET') {
        return {
            value: followStatus
        }
    }

    if (loginStatus) {
        return {
            resultCode: 0,
            followStatus,
            message: 'OK'
        }
    } else {
        return {
            resultCode: 1,
            message: "You're not authorized!"
        }
    }
}

const statusResponseCreator = (method, userProfileStatus, loginStatus = false) => {
    if (method === 'GET') {
        return {
            value: userProfileStatus
        }
    }

    if (method === 'PUT') {
        if (loginStatus) {
            return {
                resultCode: 0,
                message: 'OK'
            }
        } else {
            return {
                resultCode: 1,
                message: "You're not authorized!"
            }
        }
    }
}

const dialogsResponseCreator = (user) => {
    let userDialogs = [];

    usersDialogsStorage[`user-${user.id}`].map((i) => userDialogs.push(dialogs[i]));

    return {
        resultCode: 0,
        dialogs: userDialogs
    };
}

app.get('/', (req, res) => {
    res.send('ReactSocial API');
});

app.get('/api/1.0/users', (req, res) => {
    let page = req.query.page || 1;
    let count = req.query.count || 2;

    if (count <= 50) {
        res.json(usersResponseCreator(page, count));
    } else {
        res.json({message: 'Maximum count is 50!'})
    }
});

app.get('/api/1.0/profile/:id', (req, res) => {
    const user = users.find(u => u.id === +req.params.id);

    if (user) {
        res.json(profileResponseCreator(user));
    } else {
        res.json({message: 'No such /profile method.'});
    }
});

app.get('/api/1.0/profile/status/:id', (req, res) => {
    const user = users.find(u => u.id === +req.params.id);

    if (user) {
        res.json(statusResponseCreator('GET', user.status));
    } else {
        res.json({message: "User not found"});
    }
});

app.put('/api/1.0/profile/status/', (req, res) => {
    let cookies = new Cookies(req, res);

    if (cookies.get('login')) {
        let user = users.find(u => u.login === cookies.get('login'));
        const userIndex = users.indexOf(user);
        users[userIndex] = {...user, ...req.body};
        res.json(statusResponseCreator('PUT', null, true));
    } else {
        res.json(statusResponseCreator('PUT', null, false));
    }
});

app.post('/api/1.0/profile/posts', (req, res) => {
    let cookies = new Cookies(req, res);

    if (cookies.get('login')) {
        let user = users.find(u => u.login === cookies.get('login'));
        let posts = usersPosts[`posts-user-${req.body.id}`]

        posts.push(
            {
                id: posts.length + 1,
                author: userInfoReducer(user.id),
                message: req.body.message,
                likeCount: 0
            }
        );

        res.json({resultCode: 0, message: 'OK', data: {posts}});
    } else {
        res.json({resultCode: 1, message: "You're not authorized"});
    }
});

app.post('/api/1.0/auth/login', (req, res) => {
    let cookies = new Cookies(req, res);
    let login = req.body.login;
    let user = users.find(u => u.login === login);

    if (user) {
        cookies.set('login', login);
        res.json(loginResponseCreator(user, true));
    } else {
        res.json(loginResponseCreator(null, false));
    }
});

app.delete('/api/1.0/auth/login', (req, res) => {
    let cookies = new Cookies(req, res);

    if (cookies.get('login')) {
        res.clearCookie('login');
    }

    if (!cookies.get('login')) {
        res.json({resultCode: 0, message: 'OK'});
    } else {
        res.json({resultCode: 1, message: 'Something went wrong'});
    }
});

app.get('/api/1.0/auth/me', (req, res) => {
    let cookies = new Cookies(req, res);

    if (cookies.get('login')) {
        let user = users.find(u => u.login === cookies.get('login'));
        res.json(loginResponseCreator(user, true));
    } else {
        res.json(loginResponseCreator(null, false));
    }
});

app.get('/api/1.0/follow/:id', (req, res) => {
    let cookies = new Cookies(req, res);
    let userFollow = users.find(u => u.id === +req.params.id).isFollowed;

    res.json(followResponseCreator('GET', cookies.get('login'), userFollow));
});

app.post('/api/1.0/follow/:id', (req, res) => {
    let cookies = new Cookies(req, res);
    let userToFollow = users.find(u => u.id === +req.params.id);

    if (cookies.get('login')) {
        let user = users.find(u => u.login === cookies.get('login'));
        userToFollow.isFollowed = true;
        res.json(followResponseCreator('POST', true, userToFollow.isFollowed));
    } else {
        res.json(followResponseCreator('POST', false));
    }
});

app.delete('/api/1.0/follow/:id', (req, res) => {
    let cookies = new Cookies(req, res);
    let userToFollow = users.find(u => u.id === +req.params.id);

    if (cookies.get('login')) {
        let user = users.find(u => u.login === cookies.get('login'));
        userToFollow.isFollowed = false;
        res.json(followResponseCreator('DELETE', true, userToFollow.isFollowed));
    } else {
        res.json(followResponseCreator('DELETE', false));
    }
});

app.post('/api/1.0/dialogs', (req, res) => {
    let cookies = new Cookies(req, res);
    let {dialogId, content} = req.body;

    if (cookies.get('login')) {
        let user = users.find(u => u.login === cookies.get('login'));

        dialogs[dialogId].messages.push(
            {
                id: dialogs[dialogId].messages.length,
                authorId: user.id,
                content: content
            }
        );

        res.json(dialogsResponseCreator(user));
    } else {
        res.json({resultCode: 1, message: "You're not authorized"});
    }
});

app.listen(5000, () => console.log('Listening on port 5000'));
