import { reactive } from "vue";

const session = reactive({
    user: null as User | null,
});

export function login(firstN: string, lastN: string){
    session.user ={
        firstN,
        lastN,
    }
}
export class User{
    public firstN?: string;
    public LastN?: string;
}
export default session;