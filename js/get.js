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
Vue.filter("currency", value => {
    return "$".concat(parseFloat(value).toFixed(2));
});
new Vue({
    el: "#app",
    data: () => ({
        games: [],
    }),
    methods: {
        async getGames() {
            const url = SERVER_URL + "/games";
            const r = await fetch(url);
            const games = await r.json();
            this.games = games;
        },
        edit(game) {
            window.location.href = "./edit.html?id=" + game[0];
        },
        async deleteGame(game) {
            const result = await Swal.fire({
                title: 'Delete',
                text: "Are you sure you want to delete this game?",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#1f9bcf',
                cancelButtonColor: '#d9534f',
                cancelButtonText: 'No',
                confirmButtonText: 'Yes, delete it'
            });
            // Stop if user did not confirm
            if (!result.value) {
                return;
            }
            const r = await fetch(SERVER_URL + "/game/" + game[0], {
                method: "DELETE",
            });
            const response = await r.json();
            if (response) {
                this.$toasted.show("Deleted", {
                    position: "top-left",
                    duration: 1000,
                });
                await this.getGames();
            } else {
                this.$toasted.show("Something went wrong. Try again", {
                    position: "top-left",
                    duration: 1000,
                });
            }
        }
    },
    async mounted() {
        await this.getGames();
    }
});