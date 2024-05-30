export const update = (ar) => ({ type: "UPDATE", uparea: ar });

export const masseges = () => ({ type: "MASSEGES" });

let ineedthis = {
  dialogsms: "",

  text: [
    { id: 1, text: "блаблаблаблаблаблабла" },
    { id: 2, text: "блабла" },
    { id: 3, text: "блаблабла" },
    { id: 4, text: "бла" },
  ],

  contacts: [
    { id: 2, name: "Dima" },
    { id: 3, name: "Nikita" },
    { id: 4, name: "Mom" },
    { id: 5, name: "Stas" },
    { id: 6, name: "Vrother" },
  ],
};

export let dialogReduser = (state = ineedthis, action) => {
  switch (action.type) {
    case "MASSEGES":
      let newsms = {
        id: 5,
        text: state.dialogsms,
      };
      let stateCopy = { ...state };
      stateCopy.text = [...state.text];
      stateCopy.text.push(newsms);
      stateCopy.dialogsms = "";
      
      return stateCopy;

    case "UPDATE":
      let stateCopy2 = { ...state };
      stateCopy2.dialogsms = action.uparea;
      
      return stateCopy2;

    default:
      return state;
  }
};
