import dva from 'dva';
import './index.css';

// 1. Initialize
// const app = dva();

const app=dva({
    initialState:{
        abc:[
            {name:'dva',id:1},
            {name:'antd',id:2}
        ],
        shop:[ 
            {   
                key:1,
                name:'西瓜',
                price:20,
                type:'水果'
            },
            {   
                key:2,
                name:'铅笔',
                price:2,
                type:'文具'
            },
            {   
                key:3,
                name:'辣条',
                price:2,
                type:'食品'
            },
        ],
    }
})

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/shop').default);
app.model(require('./models/products').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
