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