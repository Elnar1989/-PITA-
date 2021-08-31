require('dotenv').config()
const express = require('express')
const session = require('express-session')
const cors = require('cors')
const morgan = require('morgan');
const redis = require('redis')
const RedisStore = require('connect-redis')(session)
const redisClient = redis.createClient()
const cookieParser = require('cookie-parser')

const app = express()

const { PORT, COOKIE_SECRET, COOKIE_NAME } = process.env

const authRouter = require('./src/routes/auth.router')
const usersRouter = require('./src/routes/users.router')
const adminRouter = require('./src/routes/admin.router')
const postRouter = require('./src/routes/post.router');
const inspirationRouter = require('./src/routes/inspiration.router');
const tagRouter = require('./src/routes/tag.router');
const moderatorRouter = require('./src/routes/moderator.router');
const roomRouter = require('./src/routes/roomRouter')
const currentUser = require('./src/routes/currentuser.router')



app.set('cookieName', COOKIE_NAME)

app.set('trust proxy', 1)
app.use(morgan('dev'));
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD', 'DELETE', 'PATCH'],
  credentials: true,

}))
app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())
app.use(session({
  name: app.get('cookieName'),
  secret: "COOKIE_SECRET",
  resave: false,
  saveUninitialized: true,
  store: new RedisStore({ client: redisClient }, {
    secret: COOKIE_SECRET,
  }),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1e3 * 86400,
  },
}))


app.use('/post', postRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', usersRouter)
app.use('/admin', adminRouter)
app.use('/inspiration', inspirationRouter)
app.use('/tag', tagRouter)
app.use('/moderator', moderatorRouter)
app.use('/tools', roomRouter)
app.use('/currentuser', currentUser)


app.listen(PORT, () => {
  console.log('Server has been started on PORT ', PORT)
})
