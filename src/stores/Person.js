import { defineStore } from "pinia";


export const usePerson = defineStore('person', {
    state: () => {
        return {
            form: {
                persona: {
                    name: "testename",
                    email: "testemail",
                    phone: "testephone",
                },
                plan: {
                    type: "",
                    time: ''
                },
                addOns: [],
            }
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        changePersona(obj) {
            this.persona.name = obj.name;
            this.persona.email = obj.email;
            this.persona.phone = obj.phone;
        },
    },
    getters: {
        getPersona(){
            return this.form.persona;
        }
    },

})