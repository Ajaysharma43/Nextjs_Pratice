"use server"
export const submitaction = async(e) => {
    const data = {
        name : e.get("name"),
        year : e.get("year"),
        check : e.get('check') == 'on' ? true : false
    }
    console.log(data);
  }