/*

  ____          _____               _ _           _       
 |  _ \        |  __ \             (_) |         | |      
 | |_) |_   _  | |__) |_ _ _ __ _____| |__  _   _| |_ ___ 
 |  _ <| | | | |  ___/ _` | '__|_  / | '_ \| | | | __/ _ \
 | |_) | |_| | | |  | (_| | |   / /| | |_) | |_| | ||  __/
 |____/ \__, | |_|   \__,_|_|  /___|_|_.__/ \__, |\__\___|
         __/ |                               __/ |        
        |___/                               |___/         
    
____________________________________
/ Si necesitas ayuda, contáctame en \
\ https://parzibyte.me               /
 ------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
Creado por Parzibyte (https://parzibyte.me).
------------------------------------------------------------------------------------------------
Si el código es útil para ti, puedes agradecerme siguiéndome: https://parzibyte.me/blog/sigueme/
Y compartiendo mi blog con tus amigos
También tengo canal de YouTube: https://www.youtube.com/channel/UCroP4BTWjfM0CkGB6AFUoBg?sub_confirmation=1
------------------------------------------------------------------------------------------------
*/
const SERVER_URL = "https://apirestflaskpythonsqlite3.parzibyte.repl.co";
Vue.use(Toasted);
new Vue({
    el: "#app",
    data: () => ({
        game: {
            name: "",
            price: "",
            rate: "",
        },
    }),
    methods: {
        async save() {
            if (!this.game.name) {
                return this.$toasted.show("Please write name", {
                    position: "top-left",
                    duration: 1000,
                });
            }

            if (!this.game.price) {
                return this.$toasted.show("Please write price", {
                    position: "top-left",
                    duration: 1000,
                });
            }
            if (!this.game.rate) {
                return this.$toasted.show("Please write rate", {
                    position: "top-left",
                    duration: 1000,
                });
            }
            const payload = JSON.stringify(this.game);
            const url = SERVER_URL + "/game";
            const r = await fetch(url, {
                method: "POST",
                body: payload,
                headers: {
                    "Content-type": "application/json",
                }
            });
            const response = await r.json();
            if (response) {
                this.$toasted.show("Saved", {
                    position: "top-left",
                    duration: 1000,
                });
                this.game = {
                    name: "",
                    price: null,
                    rate: null,
                };
            } else {
                this.$toasted.show("Something went wrong. Try again", {
                    position: "top-left",
                    duration: 1000,
                });
            }
        }
    }
});