const users = [{
    firstName: 'Ahmad',
    lastName: 'Kwasmi',
    userName: 'okayy',
    password: '1234',
    age: 19,
    isLoggedIn: false,
    signIn: function () {
        this.isLoggedIn = true
    },
    signOut: function () {
        this.isLoggedIn = false
    }
}, {
    firstName: 'Yousef',
    lastName: 'Hamouri',
    userName: 'tmm',
    password: '12345',
    age: 19,
    isLoggedIn: false,
    signIn: function () {
        this.isLoggedIn = true
    },
    signOut: function () {
        this.isLoggedIn = false
    }
}, {
    firstName: 'Yazeed',
    lastName: 'Salameh',
    userName: 'mashi',
    password: '123456',
    age: 19,
    isLoggedIn: false,
    signIn: function () {
        this.isLoggedIn = true
    }
    ,
    signOut: function () {
        this.isLoggedIn = false
    }
}, {
    firstName: 'Ibrahim',
    lastName: 'Sharif',
    userName: 'yay',
    password: '1234567',
    age: 19,
    isLoggedIn: false,
    signIn: function () {
        this.isLoggedIn = true
    },
    signOut: function () {
        this.isLoggedIn = false
    }
},
]

const findKey = function (userName) { // this function finds if the given user name and if found and returns it
    for (let i = 0; i < users.length; i++) {
        if (users[i].userName == userName) {
            return users[i]
        }
    }  
          return { err: true, msg: 'Cannot Find User!' }

}

const SignInByUserName = (userName, password) => { // this function usses the prevoius function and compares the password too so the user can sign in 
    const user = findKey(userName)
    if (user.err) {
        alert(user.msg)
        return
    }else if(user.password === password){ // the three equals compares the value and the data type instead of the regeular double equals that compares just the value
        user.signIn()
        alert("Welcome Back Mr."+ user.firstName)
    }else{
        alert("Wrong Password")
    }

}
console.log(SignInByUserName('mashi','123456'));