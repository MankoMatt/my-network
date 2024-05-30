import dialogReduser from "./DialogReduser";
import profileReduser from "./ProfileReduser";

let store = {
  _state: {
    pacet: {
      profile: {
        newposttext: "",

        posts: [
          { like: "  " + "383", tex: "Ты купишь у менъя! эти арбузы!", id: 1 },
          { like: "  " + "476", tex: "Низачтёёёёёё!!!", id: 2 },
          {
            like: "  " + "9999999",
            tex: "Я от выших арбузов...",
            id: 3,
          },
        ],
      },

      dialog: {
        dialogsms: "",

        text: [
          { id: 1, text: "Какая прекрасная погода!" },
          { id: 2, text: "Даа, вообще кайф)" },
          { id: 3, text: "Гоy гулять?" },
          { id: 4, text: "Даввай" },
        ],

        contacts: [
          { id: 1, name: "Anya" },
          { id: 2, name: "Dima" },
          { id: 3, name: "Nikita" },
          { id: 4, name: "Mom" },
          { id: 5, name: "Stas" },
          { id: 6, name: "Vrother" },
        ],
      },
    },
  },

  getState() {
    return this._state;
  },

  renderalltree() {
    console.log("Тима гей");
  },

  sab(xex) {
    this.renderalltree = xex;
  },

  dispatch(action) {
    this._state.pacet.profile = profileReduser(
      this._state.pacet.profile,
      action
    );

    this._state.pacet.dialog = dialogReduser(this._state.pacet.dialog, action);

    this.renderalltree(this._state);
  },
};

window.store = store;

export default store;
