export default {
    user: {
        authenticated: false
    },
    Vue: null,
    useVue(vue) {
        this.Vue = vue
    },
    login(context, username, password, callback) {
        if (this.user.authenticated) {
            if (callback) {
                callback(true)
            }
            return
        }

        const HEADERS = {
            headers: {
                'Authorization': "Basic " + btoa("clientapp:123456"), // Base64(client_id:client_secret) "demoapp:demopass"
            },
                emulateJSON: true,
                xhr: {
                    async: false
                }
        }

        const body = {
            grant_type: 'password',
            client_id: 'clientapp',
            client_secret: '123456',
            username: username,
            password: password,
            scope: 'read'
        }
        // context.$http.post('oauth/token', body)
        //     .then((response) => {
        //         window.localStorage.accessToken = response.data.access_token
        //         window.localStorage.tokenType = response.data.token_type
        //         this.user.authenticated = true
        //         this.Vue.http.headers.common['Authorization'] = this.getAuthHeader()
        //         if (callback) {
        //             callback(true)
        //         }
        //     }, (response) => {
        //         callback(false)
        //         delete this.Vue.http.headers.common['Authorization']
        //     })


        context.http.post('https://www.xxywithpq.cn:8080/oauth/token', body, HEADERS).then((response) => {
            // context.http.post('https://127.0.0.1:80/oauth/token', body, HEADERS).then((response) => {
            if (response.ok === true) {

                window.localStorage.accessToken = response.data.access_token
                window.localStorage.refreshToken = response.data.refresh_token

                callback(1)
            } else {
            }
        }, (response) => {
            callback(0)
        })





    },
    logout(callback) {
        delete window.localStorage.accessToken
        delete window.localStorage.tokenType
        this.user.authenticated = false
        this.Vue.http.headers.common['Authorization'] = this.getAuthHeader()
        if (callback) {
            callback()
        }
    },
    checkAuth() {
        var jwt = window.localStorage.accessToken
        if (jwt) {
            this.user.authenticated = true
        } else {
            this.user.authenticated = false
        }
        return this.user.authenticated
    },
    getAccessToken() {
        return window.localStorage.accessToken
    },
    getTokenType() {
        return window.localStorage.tokenType
    },
    getAuthHeader() {
        return this.getTokenType() + ' ' + this.getAccessToken()
    }
}